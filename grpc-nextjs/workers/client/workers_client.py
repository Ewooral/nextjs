import grpc

from workers.server.workers_pb2 import CreateWorkerRequest, GetWorkerRequest, UpdateWorkerRequest, DeleteWorkerRequest, \
    ListWorkersRequest
from workers.server.workers_pb2_grpc import WorkersManagementServiceStub


def run():
    # Connect to the server
    with grpc.insecure_channel('localhost:50051') as channel:
        # Create a stub (client)
        stub = WorkersManagementServiceStub(channel)

        # Example: CreateWorker
        create_worker_request = CreateWorkerRequest(
            name="Alice",
            email="alice@example.com",
            phone_number="+123456789",
            department="Engineering",
            job_title="Software Engineer"
        )
        create_worker_response = stub.CreateWorker(create_worker_request)
        print("CreateWorker Response:", create_worker_response)

        # Example: GetWorker
        get_worker_request = GetWorkerRequest(id=create_worker_response.id)
        get_worker_response = stub.GetWorker(get_worker_request)
        print("GetWorker Response:", get_worker_response)

        # Example: UpdateWorker
        update_worker_request = UpdateWorkerRequest(
            id=get_worker_response.id,
            name="Alice Updated",
            email="alice_updated@example.com",
            phone_number="+987654321",
            department="Engineering",
            job_title="Senior Software Engineer"
        )
        update_worker_response = stub.UpdateWorker(update_worker_request)
        print("UpdateWorker Response:", update_worker_response)

        # Example: DeleteWorker
        delete_worker_request = DeleteWorkerRequest(id=update_worker_response.id)
        delete_worker_response = stub.DeleteWorker(delete_worker_request)
        print("DeleteWorker Response:", delete_worker_response)

        # Example: ListWorkers
        list_workers_request = ListWorkersRequest()
        list_workers_response = stub.ListWorkers(list_workers_request)
        print("ListWorkers Response:", list_workers_response)


if __name__ == '__main__':
    run()
