// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var workers_pb = require('./workers_pb.js');

function serialize_workers_management_service_CreateWorkerRequest(arg) {
  if (!(arg instanceof workers_pb.CreateWorkerRequest)) {
    throw new Error('Expected argument of type workers_management_service.CreateWorkerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_CreateWorkerRequest(buffer_arg) {
  return workers_pb.CreateWorkerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_CreateWorkerResponse(arg) {
  if (!(arg instanceof workers_pb.CreateWorkerResponse)) {
    throw new Error('Expected argument of type workers_management_service.CreateWorkerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_CreateWorkerResponse(buffer_arg) {
  return workers_pb.CreateWorkerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_DeleteWorkerRequest(arg) {
  if (!(arg instanceof workers_pb.DeleteWorkerRequest)) {
    throw new Error('Expected argument of type workers_management_service.DeleteWorkerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_DeleteWorkerRequest(buffer_arg) {
  return workers_pb.DeleteWorkerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_DeleteWorkerResponse(arg) {
  if (!(arg instanceof workers_pb.DeleteWorkerResponse)) {
    throw new Error('Expected argument of type workers_management_service.DeleteWorkerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_DeleteWorkerResponse(buffer_arg) {
  return workers_pb.DeleteWorkerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_GetWorkerRequest(arg) {
  if (!(arg instanceof workers_pb.GetWorkerRequest)) {
    throw new Error('Expected argument of type workers_management_service.GetWorkerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_GetWorkerRequest(buffer_arg) {
  return workers_pb.GetWorkerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_GetWorkerResponse(arg) {
  if (!(arg instanceof workers_pb.GetWorkerResponse)) {
    throw new Error('Expected argument of type workers_management_service.GetWorkerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_GetWorkerResponse(buffer_arg) {
  return workers_pb.GetWorkerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_ListWorkersRequest(arg) {
  if (!(arg instanceof workers_pb.ListWorkersRequest)) {
    throw new Error('Expected argument of type workers_management_service.ListWorkersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_ListWorkersRequest(buffer_arg) {
  return workers_pb.ListWorkersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_ListWorkersResponse(arg) {
  if (!(arg instanceof workers_pb.ListWorkersResponse)) {
    throw new Error('Expected argument of type workers_management_service.ListWorkersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_ListWorkersResponse(buffer_arg) {
  return workers_pb.ListWorkersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_UpdateWorkerRequest(arg) {
  if (!(arg instanceof workers_pb.UpdateWorkerRequest)) {
    throw new Error('Expected argument of type workers_management_service.UpdateWorkerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_UpdateWorkerRequest(buffer_arg) {
  return workers_pb.UpdateWorkerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workers_management_service_UpdateWorkerResponse(arg) {
  if (!(arg instanceof workers_pb.UpdateWorkerResponse)) {
    throw new Error('Expected argument of type workers_management_service.UpdateWorkerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workers_management_service_UpdateWorkerResponse(buffer_arg) {
  return workers_pb.UpdateWorkerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkersManagementServiceService = exports.WorkersManagementServiceService = {
  createWorker: {
    path: '/workers_management_service.WorkersManagementService/CreateWorker',
    requestStream: false,
    responseStream: false,
    requestType: workers_pb.CreateWorkerRequest,
    responseType: workers_pb.CreateWorkerResponse,
    requestSerialize: serialize_workers_management_service_CreateWorkerRequest,
    requestDeserialize: deserialize_workers_management_service_CreateWorkerRequest,
    responseSerialize: serialize_workers_management_service_CreateWorkerResponse,
    responseDeserialize: deserialize_workers_management_service_CreateWorkerResponse,
  },
  getWorker: {
    path: '/workers_management_service.WorkersManagementService/GetWorker',
    requestStream: false,
    responseStream: false,
    requestType: workers_pb.GetWorkerRequest,
    responseType: workers_pb.GetWorkerResponse,
    requestSerialize: serialize_workers_management_service_GetWorkerRequest,
    requestDeserialize: deserialize_workers_management_service_GetWorkerRequest,
    responseSerialize: serialize_workers_management_service_GetWorkerResponse,
    responseDeserialize: deserialize_workers_management_service_GetWorkerResponse,
  },
  updateWorker: {
    path: '/workers_management_service.WorkersManagementService/UpdateWorker',
    requestStream: false,
    responseStream: false,
    requestType: workers_pb.UpdateWorkerRequest,
    responseType: workers_pb.UpdateWorkerResponse,
    requestSerialize: serialize_workers_management_service_UpdateWorkerRequest,
    requestDeserialize: deserialize_workers_management_service_UpdateWorkerRequest,
    responseSerialize: serialize_workers_management_service_UpdateWorkerResponse,
    responseDeserialize: deserialize_workers_management_service_UpdateWorkerResponse,
  },
  deleteWorker: {
    path: '/workers_management_service.WorkersManagementService/DeleteWorker',
    requestStream: false,
    responseStream: false,
    requestType: workers_pb.DeleteWorkerRequest,
    responseType: workers_pb.DeleteWorkerResponse,
    requestSerialize: serialize_workers_management_service_DeleteWorkerRequest,
    requestDeserialize: deserialize_workers_management_service_DeleteWorkerRequest,
    responseSerialize: serialize_workers_management_service_DeleteWorkerResponse,
    responseDeserialize: deserialize_workers_management_service_DeleteWorkerResponse,
  },
  listWorkers: {
    path: '/workers_management_service.WorkersManagementService/ListWorkers',
    requestStream: false,
    responseStream: false,
    requestType: workers_pb.ListWorkersRequest,
    responseType: workers_pb.ListWorkersResponse,
    requestSerialize: serialize_workers_management_service_ListWorkersRequest,
    requestDeserialize: deserialize_workers_management_service_ListWorkersRequest,
    responseSerialize: serialize_workers_management_service_ListWorkersResponse,
    responseDeserialize: deserialize_workers_management_service_ListWorkersResponse,
  },
};

exports.WorkersManagementServiceClient = grpc.makeGenericClientConstructor(WorkersManagementServiceService);
