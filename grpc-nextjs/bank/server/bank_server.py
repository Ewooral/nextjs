import bank_pb2
import grpc
from concurrent import futures
import psycopg2
from grpc_reflection.v1alpha import reflection
from bank_pb2 import (
    RegisterRequest,
    RegisterResponse,
    LoginRequest,
    LoginResponse,
    OTPRequest,
    OTPResponse,
    VerifyOTPRequest,
    VerifyOTPResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    CRUDRequest,
    CRUDResponse,
    User,
    Role,
    AdminRequest,
    AdminResponse,
    CreateAdminUserRequest,
    CreateAdminUserResponse,
    UpdateUserRoleRequest,
    UpdateUserRoleResponse,
    BanUserRequest,
    BanUserResponse,
    ViewUserActivityLogRequest,
    ViewUserActivityLogResponse,
    GenerateReportsRequest,
    GenerateReportsResponse,
    ConfigureSystemSettingsRequest,
    ConfigureSystemSettingsResponse,
)
from bank_pb2_grpc import (
    AuthServiceServicer,
    UsersServiceServicer,
    AdminServiceServicer,
    add_AuthServiceServicer_to_server,
    add_UsersServiceServicer_to_server,
    add_AdminServiceServicer_to_server,
)

# Database connection parameters
db_connection_params = {
    "database": "bank",
    "user": "postgres",
    "password": "password",
    "host": "localhost",
    "port": 5432,
}

# Establish a database connection
db_connection = psycopg2.connect(database="bank", user="postgres", password="password", host="localhost", port=5432)


class AuthServiceImplementation(AuthServiceServicer):
    def Register(self, request, context):
        try:
            with db_connection.cursor() as cursor:
                # Define SQL statement to create users table if it doesn't exist
                create_users_table = """
                CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    username VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    role INTEGER NOT NULL
                );
                """
                cursor.execute(create_users_table)

                # Check if the username or email already exists
                cursor.execute(
                    "SELECT * FROM users WHERE username = %s OR email = %s",
                    (request.username, request.email),
                )
                existing_user = cursor.fetchone()
                if existing_user:
                    context.set_code(grpc.StatusCode.ALREADY_EXISTS)
                    context.set_details("User with the same username or email already exists.")
                    return RegisterResponse()

                # Insert the new user into the database
                cursor.execute(
                    "INSERT INTO users (username, password, email, role) VALUES (%s, %s, %s, %s) RETURNING *",
                    (request.username, request.password, request.email, request.role),
                )
                db_connection.commit()
                new_user_data = cursor.fetchone()

            id, username, password, email, role = new_user_data
            new_user = User(id=str(id), username=username, password=password, email=email, role=role)
            print(new_user)

            return RegisterResponse(user=new_user)
        except Exception as e:
            # Log the error and return an error response
            print(f"An error occurred: {e}")
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details("An internal error occurred.")
            return RegisterResponse()

    def Login(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute(
                "SELECT * FROM users WHERE email = %s AND password = %s",
                (request.email, request.password),
            )
            user_data = cursor.fetchone()

        if user_data:
            user = User(
                id=str(user_data[0]),
                username=user_data[1],
                password=user_data[2],
                email=user_data[3],
                role=Role.Name(user_data[4]),
            )
            return LoginResponse(success=True, token="dummy_token", role=user.role, user=user)
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("User not found.")
            return LoginResponse(success=False)


class UsersServiceImplementation(UsersServiceServicer):
    def Create(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute(
                "INSERT INTO users (id, username, password, email, role) VALUES (%s, %s, %s, %s, %s) RETURNING *",
                (
                    request.user.id,
                    request.user.username,
                    request.user.password,
                    request.user.email,
                    request.user.role.value,
                ),
            )
            new_user_data = cursor.fetchone()

        new_user = User(
            id=str(new_user_data[0]),
            username=new_user_data[1],
            password=new_user_data[2],
            email=new_user_data[3],
            role=Role(new_user_data[4]),
        )

        return CRUDResponse(success=True, user=new_user)

    def Read(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute("SELECT * FROM users WHERE id = %s", (request.user_id,))
            user_data = cursor.fetchone()

        if user_data:
            user = User(
                id=str(user_data[0]),
                username=user_data[1],  
                password=user_data[2],
                email=user_data[3],
                role=Role(user_data[4]),
            )
            return CRUDResponse(success=True, user=user)   
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("User not found.")
            return CRUDResponse(success=False)

    def Update(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute(
                "UPDATE users SET username = %s, password = %s, email = %s, role = %s WHERE id = %s RETURNING *",
                (
                    request.user.username,
                    request.user.password,
                    request.user.email,
                    request.user.role.value,
                    request.user_id,
                ),
            )
            updated_user_data = cursor.fetchone()

        if updated_user_data:
            updated_user = User(
                id=str(updated_user_data[0]),
                username=updated_user_data[1],
                password=updated_user_data[2],
                email=updated_user_data[3],
                role=Role(updated_user_data[4]),
            )
            return CRUDResponse(success=True, user=updated_user)
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("User not found.")
            return CRUDResponse(success=False)

    def Delete(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute("DELETE FROM users WHERE id = %s RETURNING *", (request.user_id,))
            deleted_user_data = cursor.fetchone()

        if deleted_user_data:
            deleted_user = User(
                id=str(deleted_user_data[0]),
                username=deleted_user_data[1],
                password=deleted_user_data[2],
                email=deleted_user_data[3],
                role=Role(deleted_user_data[4]),
            )
            return CRUDResponse(success=True, user=deleted_user)
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("User not found.")
            return CRUDResponse(success=False)


class AdminServiceImplementation(AdminServiceServicer):
    def ListUsers(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute("SELECT * FROM users")
            users_data = cursor.fetchall()

        users = [
            User(
                id=str(user_data[0]),
                username=user_data[1],
                password=user_data[2],
                email=user_data[3],
                role=Role(user_data[4]),
            )
            for user_data in users_data
        ]

        return AdminResponse(users=users)

    def CreateAdminUser(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute(
                "INSERT INTO users (id, username, password, email, role) VALUES (%s, %s, %s, %s, %s) RETURNING *",
                (
                    request.admin_user.id,
                    request.admin_user.username,
                    request.admin_user.password,
                    request.admin_user.email,
                    request.admin_user.role.value,
                ),
            )
            new_admin_user_data = cursor.fetchone()

        new_admin_user = User(
            id=str(new_admin_user_data[0]),
            username=new_admin_user_data[1],
            password=new_admin_user_data[2],
            email=new_admin_user_data[3],
            role=Role(new_admin_user_data[4]),
        )

        return CreateAdminUserResponse(admin_user=new_admin_user)

    def UpdateUserRole(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute(
                "UPDATE users SET role = %s WHERE id = %s RETURNING *",
                (request.new_role.value, request.user_id),
            )
            updated_user_data = cursor.fetchone()

        if updated_user_data:
            updated_user = User(
                id=str(updated_user_data[0]),
                username=updated_user_data[1],
                password=updated_user_data[2],
                email=updated_user_data[3],
                role=Role(updated_user_data[4]),
            )
            return UpdateUserRoleResponse(success=True, user=updated_user)
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("User not found.")
            return UpdateUserRoleResponse(success=False)

    def BanUser(self, request, context):
        with db_connection.cursor() as cursor:
            cursor.execute("DELETE FROM users WHERE id = %s RETURNING *", (request.user_id,))
            banned_user_data = cursor.fetchone()

        if banned_user_data:
            banned_user = User(
                id=str(banned_user_data[0]),
                username=banned_user_data[1],
                password=banned_user_data[2],
                email=banned_user_data[3],
                role=Role(banned_user_data[4]),
            )
            return BanUserResponse(success=True, user=banned_user)
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details("User not found.")
            return BanUserResponse(success=False)

    def ViewUserActivityLog(self, request, context):
        # Implement user activity log viewing logic here
        # For simplicity, just return an empty response for now
        return ViewUserActivityLogResponse()

    def GenerateReports(self, request, context):
        # Implement report generation logic here
        # For simplicity, just return an empty response for now
        return GenerateReportsResponse()

    def ConfigureSystemSettings(self, request, context):
        # Implement system settings configuration logic here
        # For simplicity, just return a success response for now
        return ConfigureSystemSettingsResponse(success=True)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_AuthServiceServicer_to_server(AuthServiceImplementation(), server)
    add_UsersServiceServicer_to_server(UsersServiceImplementation(), server)
    add_AdminServiceServicer_to_server(AdminServiceImplementation(), server)

    # Enable reflection for grpcurl
    service_names = (
        bank_pb2.DESCRIPTOR.services_by_name['AuthService'].full_name,
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
