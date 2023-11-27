// package: workers_management_service
// file: workers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as workers_pb from "./workers_pb";

interface IWorkersManagementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createWorker: IWorkersManagementServiceService_ICreateWorker;
    getWorker: IWorkersManagementServiceService_IGetWorker;
    updateWorker: IWorkersManagementServiceService_IUpdateWorker;
    deleteWorker: IWorkersManagementServiceService_IDeleteWorker;
    listWorkers: IWorkersManagementServiceService_IListWorkers;
}

interface IWorkersManagementServiceService_ICreateWorker extends grpc.MethodDefinition<workers_pb.CreateWorkerRequest, workers_pb.CreateWorkerResponse> {
    path: "/workers_management_service.WorkersManagementService/CreateWorker";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workers_pb.CreateWorkerRequest>;
    requestDeserialize: grpc.deserialize<workers_pb.CreateWorkerRequest>;
    responseSerialize: grpc.serialize<workers_pb.CreateWorkerResponse>;
    responseDeserialize: grpc.deserialize<workers_pb.CreateWorkerResponse>;
}
interface IWorkersManagementServiceService_IGetWorker extends grpc.MethodDefinition<workers_pb.GetWorkerRequest, workers_pb.GetWorkerResponse> {
    path: "/workers_management_service.WorkersManagementService/GetWorker";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workers_pb.GetWorkerRequest>;
    requestDeserialize: grpc.deserialize<workers_pb.GetWorkerRequest>;
    responseSerialize: grpc.serialize<workers_pb.GetWorkerResponse>;
    responseDeserialize: grpc.deserialize<workers_pb.GetWorkerResponse>;
}
interface IWorkersManagementServiceService_IUpdateWorker extends grpc.MethodDefinition<workers_pb.UpdateWorkerRequest, workers_pb.UpdateWorkerResponse> {
    path: "/workers_management_service.WorkersManagementService/UpdateWorker";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workers_pb.UpdateWorkerRequest>;
    requestDeserialize: grpc.deserialize<workers_pb.UpdateWorkerRequest>;
    responseSerialize: grpc.serialize<workers_pb.UpdateWorkerResponse>;
    responseDeserialize: grpc.deserialize<workers_pb.UpdateWorkerResponse>;
}
interface IWorkersManagementServiceService_IDeleteWorker extends grpc.MethodDefinition<workers_pb.DeleteWorkerRequest, workers_pb.DeleteWorkerResponse> {
    path: "/workers_management_service.WorkersManagementService/DeleteWorker";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workers_pb.DeleteWorkerRequest>;
    requestDeserialize: grpc.deserialize<workers_pb.DeleteWorkerRequest>;
    responseSerialize: grpc.serialize<workers_pb.DeleteWorkerResponse>;
    responseDeserialize: grpc.deserialize<workers_pb.DeleteWorkerResponse>;
}
interface IWorkersManagementServiceService_IListWorkers extends grpc.MethodDefinition<workers_pb.ListWorkersRequest, workers_pb.ListWorkersResponse> {
    path: "/workers_management_service.WorkersManagementService/ListWorkers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<workers_pb.ListWorkersRequest>;
    requestDeserialize: grpc.deserialize<workers_pb.ListWorkersRequest>;
    responseSerialize: grpc.serialize<workers_pb.ListWorkersResponse>;
    responseDeserialize: grpc.deserialize<workers_pb.ListWorkersResponse>;
}

export const WorkersManagementServiceService: IWorkersManagementServiceService;

export interface IWorkersManagementServiceServer extends grpc.UntypedServiceImplementation {
    createWorker: grpc.handleUnaryCall<workers_pb.CreateWorkerRequest, workers_pb.CreateWorkerResponse>;
    getWorker: grpc.handleUnaryCall<workers_pb.GetWorkerRequest, workers_pb.GetWorkerResponse>;
    updateWorker: grpc.handleUnaryCall<workers_pb.UpdateWorkerRequest, workers_pb.UpdateWorkerResponse>;
    deleteWorker: grpc.handleUnaryCall<workers_pb.DeleteWorkerRequest, workers_pb.DeleteWorkerResponse>;
    listWorkers: grpc.handleUnaryCall<workers_pb.ListWorkersRequest, workers_pb.ListWorkersResponse>;
}

export interface IWorkersManagementServiceClient {
    createWorker(request: workers_pb.CreateWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.CreateWorkerResponse) => void): grpc.ClientUnaryCall;
    createWorker(request: workers_pb.CreateWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.CreateWorkerResponse) => void): grpc.ClientUnaryCall;
    createWorker(request: workers_pb.CreateWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.CreateWorkerResponse) => void): grpc.ClientUnaryCall;
    getWorker(request: workers_pb.GetWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.GetWorkerResponse) => void): grpc.ClientUnaryCall;
    getWorker(request: workers_pb.GetWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.GetWorkerResponse) => void): grpc.ClientUnaryCall;
    getWorker(request: workers_pb.GetWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.GetWorkerResponse) => void): grpc.ClientUnaryCall;
    updateWorker(request: workers_pb.UpdateWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.UpdateWorkerResponse) => void): grpc.ClientUnaryCall;
    updateWorker(request: workers_pb.UpdateWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.UpdateWorkerResponse) => void): grpc.ClientUnaryCall;
    updateWorker(request: workers_pb.UpdateWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.UpdateWorkerResponse) => void): grpc.ClientUnaryCall;
    deleteWorker(request: workers_pb.DeleteWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.DeleteWorkerResponse) => void): grpc.ClientUnaryCall;
    deleteWorker(request: workers_pb.DeleteWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.DeleteWorkerResponse) => void): grpc.ClientUnaryCall;
    deleteWorker(request: workers_pb.DeleteWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.DeleteWorkerResponse) => void): grpc.ClientUnaryCall;
    listWorkers(request: workers_pb.ListWorkersRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.ListWorkersResponse) => void): grpc.ClientUnaryCall;
    listWorkers(request: workers_pb.ListWorkersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.ListWorkersResponse) => void): grpc.ClientUnaryCall;
    listWorkers(request: workers_pb.ListWorkersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.ListWorkersResponse) => void): grpc.ClientUnaryCall;
}

export class WorkersManagementServiceClient extends grpc.Client implements IWorkersManagementServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createWorker(request: workers_pb.CreateWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.CreateWorkerResponse) => void): grpc.ClientUnaryCall;
    public createWorker(request: workers_pb.CreateWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.CreateWorkerResponse) => void): grpc.ClientUnaryCall;
    public createWorker(request: workers_pb.CreateWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.CreateWorkerResponse) => void): grpc.ClientUnaryCall;
    public getWorker(request: workers_pb.GetWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.GetWorkerResponse) => void): grpc.ClientUnaryCall;
    public getWorker(request: workers_pb.GetWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.GetWorkerResponse) => void): grpc.ClientUnaryCall;
    public getWorker(request: workers_pb.GetWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.GetWorkerResponse) => void): grpc.ClientUnaryCall;
    public updateWorker(request: workers_pb.UpdateWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.UpdateWorkerResponse) => void): grpc.ClientUnaryCall;
    public updateWorker(request: workers_pb.UpdateWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.UpdateWorkerResponse) => void): grpc.ClientUnaryCall;
    public updateWorker(request: workers_pb.UpdateWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.UpdateWorkerResponse) => void): grpc.ClientUnaryCall;
    public deleteWorker(request: workers_pb.DeleteWorkerRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.DeleteWorkerResponse) => void): grpc.ClientUnaryCall;
    public deleteWorker(request: workers_pb.DeleteWorkerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.DeleteWorkerResponse) => void): grpc.ClientUnaryCall;
    public deleteWorker(request: workers_pb.DeleteWorkerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.DeleteWorkerResponse) => void): grpc.ClientUnaryCall;
    public listWorkers(request: workers_pb.ListWorkersRequest, callback: (error: grpc.ServiceError | null, response: workers_pb.ListWorkersResponse) => void): grpc.ClientUnaryCall;
    public listWorkers(request: workers_pb.ListWorkersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: workers_pb.ListWorkersResponse) => void): grpc.ClientUnaryCall;
    public listWorkers(request: workers_pb.ListWorkersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: workers_pb.ListWorkersResponse) => void): grpc.ClientUnaryCall;
}
