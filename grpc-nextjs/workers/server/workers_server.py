import grpc
from concurrent import futures
from grpc_reflection.v1alpha import reflection
import workers_pb2
import workers_pb2_grpc
from concurrent import futures
import psycopg2
import re  # Add this import for phone number validation
import jwt  # Add this import for JWT validation
import pyotp # Add this import for OTP validation

SECRET_KEY = 'Vh6$yP2bA#uR7*Zg'

# import psycopg_binary

connection = psycopg2.connect(database="workers", user="postgres", password="password", host="localhost", port=5432)


class Worker:
    def __init__(self, id, name, email, phone_number, department, job_title):
        self.id = id
        self.name = name
        self.email = email
        self.phone_number = phone_number
        self.department = department
        self.job_title = job_title


def is_phone_number_taken(phone_number):
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM workerstable WHERE phone_number = %s", (phone_number,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0


def is_valid_update_request(request, context):
    # Validate the required fields in the update request
    if not request.id or not request.name or not request.email or not request.phone_number or not request.department or not request.job_title:
        context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
        context.set_details('Missing required fields')
        return False
    return True


def is_duplicate_entry(request):
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM workerstable WHERE phone_number = %s", (request.phone_number,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0


def validate_phone_number(phone_number):
    # Validate phone number format (___, ____, ____)
    pattern = re.compile(r'^\+\d{3} \d{5} \d{4}$')
    return bool(pattern.match(phone_number))


def save_worker(worker):
    cursor = connection.cursor()
    # Define SQL statements to create tables
    create_workers_table = """
    CREATE TABLE IF NOT EXISTS workerstable (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        department VARCHAR(255) NOT NULL,
        job_title VARCHAR(255) NOT NULL
    );
    """

    # Execute the SQL statements
    cursor.execute(create_workers_table)

    cursor.execute(
        "INSERT INTO workerstable (name, email, phone_number, department, job_title) VALUES (%s, %s, %s, %s, "
        "%s)",
        (worker.name, worker.email, worker.phone_number, worker.department, worker.job_title))
    connection.commit()
    cursor.close()


def validate_request(request):
    # Validate each field in the request
    return all([
        request.name,
        request.email,
        request.phone_number,
        request.department,
        request.job_title
    ])


# Add the following helper functions

def worker_exists(worker_id):
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM workerstable WHERE id = %s", (worker_id,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0


# def delete_worker(worker_id):
#     cursor = connection.cursor()
#     cursor.execute("DELETE FROM workerstable WHERE id = %s", (worker_id,))
#     connection.commit()
#     cursor.close()

def delete_worker(worker_id):
    cursor = connection.cursor()

    try:
        # Execute the DELETE query
        cursor.execute("DELETE FROM workerstable WHERE id = %s RETURNING id, name, email, phone_number, department, "
                       "job_title", (worker_id,))
        deleted_worker = cursor.fetchone()

        if deleted_worker:
            # Commit the changes if the worker is successfully deleted
            connection.commit()
            return {
                'id': deleted_worker[0],
                'name': deleted_worker[1],
                'email': deleted_worker[2],
                'phone_number': deleted_worker[3],
                'department': deleted_worker[4],
                'job_title': deleted_worker[5],
                'message': 'Worker deleted successfully'
            }
        else:
            # Worker not found
            return {
                'message': 'Worker not found'
            }

    except Exception as e:
        print(f"Error deleting worker: {e}")
        connection.rollback()
        # Error occurred during deletion
        return {
            'message': 'Error deleting worker'
        }

    finally:
        cursor.close()
        connection.close()


# Add the following helper function

def get_worker(worker_id):
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM workerstable WHERE id = %s", (worker_id,))
    worker_data = cursor.fetchone()
    cursor.close()

    if worker_data:
        # Assuming the order of columns in your table is id, name, email, phone_number, department, job_title
        worker = {
            'id': worker_data[0],
            'name': worker_data[1],
            'email': worker_data[2],
            'phone_number': worker_data[3],
            'department': worker_data[4],
            'job_title': worker_data[5]
        }
        return worker if worker else None


def update_worker(updated_worker):
    # Update the worker in the database
    cursor = connection.cursor()
    cursor.execute("""
        UPDATE workerstable
        SET name = %s, email = %s, phone_number = %s, department = %s, job_title = %s
        WHERE id = %s
    """, (updated_worker.name, updated_worker.email, updated_worker.phone_number,
          updated_worker.department, updated_worker.job_title, updated_worker.id))
    connection.commit()
    cursor.close()


def get_worker_by_id(worker_id):
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM workerstable WHERE id = %s", (worker_id,))
    row = cursor.fetchone()
    cursor.close()

    if row:
        # Assuming the order of columns in your table is id, name, email, phone_number, department, job_title
        worker_id, name, email, phone_number, department, job_title = row
        return Worker(id=worker_id, name=name, email=email, phone_number=phone_number,
                      department=department, job_title=job_title)
    else:
        return None


def get_sorted_workers_list():
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM workerstable ORDER BY id")
    rows = cursor.fetchall()
    cursor.close()

    workers_list = []
    for row in rows:
        # Assuming the order of columns in your table is id, name, email, phone_number, department, job_title
        worker_id, name, email, phone_number, department, job_title = row
        worker = {
            'id': worker_id,
            'name': name,
            'email': email,
            'phone_number': phone_number,
            'department': department,
            'job_title': job_title
        }
        workers_list.append(worker)

    return workers_list


class WorkersManagementServiceServicer(workers_pb2_grpc.WorkersManagementServiceServicer):
    def __init__(self, secret_key):
        self.secret_key = secret_key

    def CreateWorker(self, request, context):
        # Validate the request
        if not validate_request(request):
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('Invalid or missing fields in the request')
            return workers_pb2.CreateWorkerResponse()

        # Check for duplicate entry
        if is_duplicate_entry(request):
            context.set_code(grpc.StatusCode.ALREADY_EXISTS)
            context.set_details('Worker with the same phone number already exists')
            return workers_pb2.CreateWorkerResponse()

        # Validate phone number format
        if not validate_phone_number(request.phone_number):
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('Invalid phone number format')
            return workers_pb2.CreateWorkerResponse()

        # Create the worker
        worker = Worker(id='1', name=request.name, email=request.email, phone_number=request.phone_number,
                        department=request.department, job_title=request.job_title)

        # Save the worker to the database
        save_worker(worker)

        # Return the response
        return workers_pb2.CreateWorkerResponse(id=worker.id, message='Worker created successfully!')

    def GetWorker(self, request, context):
        # Validate the request
        if not request.id:
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('Missing worker ID')
            return workers_pb2.GetWorkerResponse()

        # Retrieve the worker
        worker = get_worker(request.id)

        # Check if the worker is found
        if not worker:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details('Worker not found')
            return workers_pb2.GetWorkerResponse()

        # Return the response with proper data types
        return workers_pb2.GetWorkerResponse(
            id=str(worker['id']),
            name=worker['name'],
            email=worker['email'],
            phone_number=worker['phone_number'],
            department=worker['department'],
            job_title=worker['job_title']
        )

    def UpdateWorker(self, request, context):
        # Validate the request
        if not is_valid_update_request(request, context):
            return workers_pb2.UpdateWorkerResponse()

        # Check if the worker with the given ID exists
        existing_worker = get_worker_by_id(request.id)
        if not existing_worker:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details('Worker not found')
            return workers_pb2.UpdateWorkerResponse()

        # Validate phone number format
        if not validate_phone_number(request.phone_number):
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('Invalid phone number format')
            return workers_pb2.UpdateWorkerResponse()

        # Check if the provided phone number belongs to another worker
        if request.phone_number != existing_worker.phone_number and is_phone_number_taken(
                request.phone_number):
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details("This phone number belongs to another worker.")
            return workers_pb2.UpdateWorkerResponse()

        try:
            # Update the worker
            updated_worker = Worker(id=request.id, name=request.name, email=request.email,
                                    phone_number=request.phone_number, department=request.department,
                                    job_title=request.job_title)

            # Save the updated worker to the database
            update_worker(updated_worker)

            # Retrieve the sorted list of workers
            sorted_workers_list = get_sorted_workers_list()

            # Return the response
            return workers_pb2.UpdateWorkerResponse(id=updated_worker.id, message='Worker updated successfully')
        except Exception as e:
            print(f"Error updating worker: {e}")
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details('Error updating worker')
            return workers_pb2.UpdateWorkerResponse()

    deleted_workers = []  # Array to store deleted workers

    def DeleteWorker(self, request, context):
        # Validate the request
        if not request.id:
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details('Missing worker ID')
            return workers_pb2.DeleteWorkerResponse()

        # Check if the worker with the given ID exists
        if not worker_exists(request.id):
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details('Worker not found')
            return workers_pb2.DeleteWorkerResponse()

        # Delete the worker
        deleted_worker = delete_worker(request.id)

        # Check if the worker is found and deleted
        if not deleted_worker:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details('Worker not found')
            return workers_pb2.DeleteWorkerResponse()

        # Add the deleted worker to the array
        self.deleted_workers.append(deleted_worker)

        def get_deleted_workers(sth):
            # Return the array of deleted workers
            return sth.deleted_workers

        def clear_deleted_workers(sth):
            # Clear the array of deleted workers
            sth.deleted_workers = []

        # Return the response
        return workers_pb2.DeleteWorkerResponse(message='Worker deleted successfully')

    def ListWorkers(self, request, context):
        cursor = connection.cursor()
        # Define SQL statements to create tables
        # Execute a SELECT query to retrieve all rows from the 'workerstable' table
        cursor.execute("SELECT * FROM workerstable")

        # Fetch all rows
        rows = cursor.fetchall()
        worker_list = []
        # Iterate over the rows
        for row in rows:
            # Assuming the order of columns in your table is id, name, email, phone_number, department, job_title
            worker_id, name, email, phone_number, department, job_title = row
            worker_list.append(list(row))
            # print(worker_id, name, email, phone_number, department, job_title)
            return worker_list
        cursor.close()

        # Return the response
        return workers_pb2.ListWorkersResponse()

    def __del__(self):
        connection.close()


def serve():
    my_work = WorkersManagementServiceServicer('Vh6$yP2bA#uR7*Zg')
    my_work.ListWorkers(request=workers_pb2.ListWorkersRequest(), context=workers_pb2.ListWorkersResponse())
    deleted_workers = my_work.deleted_workers
    print('Deleted:', deleted_workers)

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    workers_pb2_grpc.add_WorkersManagementServiceServicer_to_server(
        WorkersManagementServiceServicer(SECRET_KEY),
        server
    )

    # Enable reflection for grpcurl
    service_names = (
        workers_pb2.DESCRIPTOR.services_by_name['WorkersManagementService'].full_name,
        reflection.SERVICE_NAME
    )
    print(service_names)
    reflection.enable_server_reflection(service_names, server)

    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server is running. Listening on [::]:50051")
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
