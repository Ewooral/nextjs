from grpc import server, StatusCode
from concurrent import futures
from grpc_reflection.v1alpha import reflection
import workers_pb2
import workers_pb2_grpc
from concurrent import futures
import psycopg2
import re  # Add this import for phone number validation
import jwt  # Add this import for JWT validation

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


def is_duplicate_entry(request):
    cursor = connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM workerstable WHERE phone_number = %s", (request.phone_number,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0


def validate_phone_number(phone_number):
    # Validate phone number format (___, ____, ____)
    pattern = re.compile(r'^\+\d{3}, \d{5}, \d{4}$')
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


class WorkersManagementServiceServicer(workers_pb2_grpc.WorkersManagementServiceServicer):
    def __init__(self, secret_key):
        self.secret_key = secret_key

    def CreateWorker(self, request, context):

        # Validate the JWT token from the metadata
        metadata = dict(context.invocation_metadata())
        jwt_token = metadata.get('authorization', '').split('Bearer ')[-1]
        print(jwt_token)

        try:
            decoded_payload = jwt.decode(jwt_token, self.secret_key, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            context.abort(StatusCode.UNAUTHENTICATED, "Token has expired")
        except jwt.InvalidTokenError:
            context.abort(StatusCode.UNAUTHENTICATED, "Invalid token")

        # Validate the request
        if not self.validate_request(request):
            context.set_code(StatusCode.INVALID_ARGUMENT)
            context.set_details('Invalid or missing fields in the request')
            return workers_pb2.CreateWorkerResponse()

        # Check for duplicate entry
        if is_duplicate_entry(request):
            context.set_code(StatusCode.ALREADY_EXISTS)
            context.set_details('Worker with the same phone number already exists')
            return workers_pb2.CreateWorkerResponse()

        # Validate phone number format
        if not validate_phone_number(request.phone_number):
            context.set_code(StatusCode.INVALID_ARGUMENT)
            context.set_details('Invalid phone number format')
            return workers_pb2.CreateWorkerResponse()

        # Create the worker
        worker = Worker(id='1', name=request.name, email=request.email, phone_number=request.phone_number,
                        department=request.department, job_title=request.job_title)

        # Save the worker to the database
        save_worker(worker)

        # Return the response
        return workers_pb2.CreateWorkerResponse(id=worker.id, message='Worker created successfully!')

    def validate_request(self, request):
        # Validate each field in the request
        return all([
            request.name,
            request.email,
            request.phone_number,
            request.department,
            request.job_title
        ])

    def GetWorker(self, request, context):
        # Validate the request
        if not request.id:
            context.set_code(StatusCode.INVALID_ARGUMENT)
            context.set_details('Missing worker ID')
            return workers_pb2.GetWorkerResponse()

        # Retrieve the worker
        worker = Worker(id='1', name='John Doe', email='johndoe@example.com', phone_number='+1234567890',
                        department='Engineering', job_title='Software Engineer')

        # Return the response
        return workers_pb2.GetWorkerResponse(id=worker.id, name=worker.name, email=worker.email,
                                             phone_number=worker.phone_number, department=worker.department,
                                             job_title=worker.job_title)

    def UpdateWorker(self, request, context):
        # Validate the request
        if not request.id or not request.name or not request.email or not request.phone_number or not request.department or not request.job_title:
            context.set_code(StatusCode.INVALID_ARGUMENT)
            context.set_details('Missing required fields')
            return workers_pb2.UpdateWorkerResponse()

        # Update the worker
        worker = Worker(id=request.id, name=request.name, email=request.email, phone_number=request.phone_number,
                        department=request.department, job_title=request.job_title)

        # Return the response
        return workers_pb2.UpdateWorkerResponse(id=worker.id, message='Worker updated successfully')

    def DeleteWorker(self, request, context):
        # Validate the request
        if not request.id:
            context.set_code(StatusCode.INVALID_ARGUMENT)
            context.set_details('Missing worker ID')
            return workers_pb2.DeleteWorkerResponse()

        # Delete the worker
        # ...

        # Return the response
        return workers_pb2.DeleteWorkerResponse(message='Worker deleted successfully')

    def ListWorkers(self, request, context):
        # Retrieve all workers
        workers = [
            Worker(id='1', name='John Doe', email='johndoe@example.com', phone_number='+1234567890',
                   department='Engineering', job_title='Software Engineer'),
            Worker(id='2', name='Jane Buffer', email='janedoe@example.com', phone_number='+9876543210',
                   department='Marketing', job_title='Marketing Manager'),
            Worker(id='3', name='Proto Buffer', email='proto.buffer@python.com', phone_number='+1234567890',
                   department='Engineering', job_title='Software Engineer'),
        ]

        # Return the response
        return workers_pb2.ListWorkersResponse(workers=workers)

    def __del__(self):
        connection.close()


def serve():
    server = server(futures.ThreadPoolExecutor(max_workers=10))

    workers_pb2_grpc.add_WorkersManagementServiceServicer_to_server(
        WorkersManagementServiceServicer(SECRET_KEY),
        server
    )

    # Enable reflection for grpcurl
    SERVICE_NAMES = (
        workers_pb2.DESCRIPTOR.services_by_name['WorkersManagementService'].full_name,
        reflection.SERVICE_NAME
    )
    print(SERVICE_NAMES)
    reflection.enable_server_reflection(SERVICE_NAMES, server)

    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server is running. Listening on [::]:50051")
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
