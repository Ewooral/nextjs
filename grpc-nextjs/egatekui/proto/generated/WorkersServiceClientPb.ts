/**
 * @fileoverview gRPC-Web generated client stub for workers_management_service
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: workers.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as workers_pb from './workers_pb';


export class WorkersManagementServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateWorker = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/CreateWorker',
    grpcWeb.MethodType.UNARY,
    workers_pb.CreateWorkerRequest,
    workers_pb.CreateWorkerResponse,
    (request: workers_pb.CreateWorkerRequest) => {
      return request.serializeBinary();
    },
    workers_pb.CreateWorkerResponse.deserializeBinary
  );

  createWorker(
    request: workers_pb.CreateWorkerRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.CreateWorkerResponse>;

  createWorker(
    request: workers_pb.CreateWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.CreateWorkerResponse) => void): grpcWeb.ClientReadableStream<workers_pb.CreateWorkerResponse>;

  createWorker(
    request: workers_pb.CreateWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.CreateWorkerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/CreateWorker',
        request,
        metadata || {},
        this.methodDescriptorCreateWorker,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/CreateWorker',
    request,
    metadata || {},
    this.methodDescriptorCreateWorker);
  }

  methodDescriptorGetWorker = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/GetWorker',
    grpcWeb.MethodType.UNARY,
    workers_pb.GetWorkerRequest,
    workers_pb.GetWorkerResponse,
    (request: workers_pb.GetWorkerRequest) => {
      return request.serializeBinary();
    },
    workers_pb.GetWorkerResponse.deserializeBinary
  );

  getWorker(
    request: workers_pb.GetWorkerRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.GetWorkerResponse>;

  getWorker(
    request: workers_pb.GetWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.GetWorkerResponse) => void): grpcWeb.ClientReadableStream<workers_pb.GetWorkerResponse>;

  getWorker(
    request: workers_pb.GetWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.GetWorkerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/GetWorker',
        request,
        metadata || {},
        this.methodDescriptorGetWorker,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/GetWorker',
    request,
    metadata || {},
    this.methodDescriptorGetWorker);
  }

  methodDescriptorUpdateWorker = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/UpdateWorker',
    grpcWeb.MethodType.UNARY,
    workers_pb.UpdateWorkerRequest,
    workers_pb.UpdateWorkerResponse,
    (request: workers_pb.UpdateWorkerRequest) => {
      return request.serializeBinary();
    },
    workers_pb.UpdateWorkerResponse.deserializeBinary
  );

  updateWorker(
    request: workers_pb.UpdateWorkerRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.UpdateWorkerResponse>;

  updateWorker(
    request: workers_pb.UpdateWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.UpdateWorkerResponse) => void): grpcWeb.ClientReadableStream<workers_pb.UpdateWorkerResponse>;

  updateWorker(
    request: workers_pb.UpdateWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.UpdateWorkerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/UpdateWorker',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorker,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/UpdateWorker',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorker);
  }

  methodDescriptorDeleteWorker = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/DeleteWorker',
    grpcWeb.MethodType.UNARY,
    workers_pb.DeleteWorkerRequest,
    workers_pb.DeleteWorkerResponse,
    (request: workers_pb.DeleteWorkerRequest) => {
      return request.serializeBinary();
    },
    workers_pb.DeleteWorkerResponse.deserializeBinary
  );

  deleteWorker(
    request: workers_pb.DeleteWorkerRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.DeleteWorkerResponse>;

  deleteWorker(
    request: workers_pb.DeleteWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.DeleteWorkerResponse) => void): grpcWeb.ClientReadableStream<workers_pb.DeleteWorkerResponse>;

  deleteWorker(
    request: workers_pb.DeleteWorkerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.DeleteWorkerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/DeleteWorker',
        request,
        metadata || {},
        this.methodDescriptorDeleteWorker,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/DeleteWorker',
    request,
    metadata || {},
    this.methodDescriptorDeleteWorker);
  }

  methodDescriptorListWorkers = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/ListWorkers',
    grpcWeb.MethodType.UNARY,
    workers_pb.ListWorkersRequest,
    workers_pb.ListWorkersResponse,
    (request: workers_pb.ListWorkersRequest) => {
      return request.serializeBinary();
    },
    workers_pb.ListWorkersResponse.deserializeBinary
  );

  listWorkers(
    request: workers_pb.ListWorkersRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.ListWorkersResponse>;

  listWorkers(
    request: workers_pb.ListWorkersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.ListWorkersResponse) => void): grpcWeb.ClientReadableStream<workers_pb.ListWorkersResponse>;

  listWorkers(
    request: workers_pb.ListWorkersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.ListWorkersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/ListWorkers',
        request,
        metadata || {},
        this.methodDescriptorListWorkers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/ListWorkers',
    request,
    metadata || {},
    this.methodDescriptorListWorkers);
  }

  methodDescriptorRegisterUser = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/RegisterUser',
    grpcWeb.MethodType.UNARY,
    workers_pb.RegisterUserRequest,
    workers_pb.RegisterUserResponse,
    (request: workers_pb.RegisterUserRequest) => {
      return request.serializeBinary();
    },
    workers_pb.RegisterUserResponse.deserializeBinary
  );

  registerUser(
    request: workers_pb.RegisterUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.RegisterUserResponse>;

  registerUser(
    request: workers_pb.RegisterUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.RegisterUserResponse) => void): grpcWeb.ClientReadableStream<workers_pb.RegisterUserResponse>;

  registerUser(
    request: workers_pb.RegisterUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.RegisterUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/RegisterUser',
        request,
        metadata || {},
        this.methodDescriptorRegisterUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/RegisterUser',
    request,
    metadata || {},
    this.methodDescriptorRegisterUser);
  }

  methodDescriptorLoginUser = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/LoginUser',
    grpcWeb.MethodType.UNARY,
    workers_pb.LoginUserRequest,
    workers_pb.LoginUserResponse,
    (request: workers_pb.LoginUserRequest) => {
      return request.serializeBinary();
    },
    workers_pb.LoginUserResponse.deserializeBinary
  );

  loginUser(
    request: workers_pb.LoginUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.LoginUserResponse>;

  loginUser(
    request: workers_pb.LoginUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.LoginUserResponse) => void): grpcWeb.ClientReadableStream<workers_pb.LoginUserResponse>;

  loginUser(
    request: workers_pb.LoginUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.LoginUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/LoginUser',
        request,
        metadata || {},
        this.methodDescriptorLoginUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/LoginUser',
    request,
    metadata || {},
    this.methodDescriptorLoginUser);
  }

  methodDescriptorForgotPassword = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/ForgotPassword',
    grpcWeb.MethodType.UNARY,
    workers_pb.ForgotPasswordRequest,
    workers_pb.ForgotPasswordResponse,
    (request: workers_pb.ForgotPasswordRequest) => {
      return request.serializeBinary();
    },
    workers_pb.ForgotPasswordResponse.deserializeBinary
  );

  forgotPassword(
    request: workers_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.ForgotPasswordResponse>;

  forgotPassword(
    request: workers_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.ForgotPasswordResponse) => void): grpcWeb.ClientReadableStream<workers_pb.ForgotPasswordResponse>;

  forgotPassword(
    request: workers_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.ForgotPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/ForgotPassword',
        request,
        metadata || {},
        this.methodDescriptorForgotPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/ForgotPassword',
    request,
    metadata || {},
    this.methodDescriptorForgotPassword);
  }

  methodDescriptorVerifyOTP = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/VerifyOTP',
    grpcWeb.MethodType.UNARY,
    workers_pb.VerifyOTPRequest,
    workers_pb.VerifyOTPResponse,
    (request: workers_pb.VerifyOTPRequest) => {
      return request.serializeBinary();
    },
    workers_pb.VerifyOTPResponse.deserializeBinary
  );

  verifyOTP(
    request: workers_pb.VerifyOTPRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.VerifyOTPResponse>;

  verifyOTP(
    request: workers_pb.VerifyOTPRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.VerifyOTPResponse) => void): grpcWeb.ClientReadableStream<workers_pb.VerifyOTPResponse>;

  verifyOTP(
    request: workers_pb.VerifyOTPRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.VerifyOTPResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/VerifyOTP',
        request,
        metadata || {},
        this.methodDescriptorVerifyOTP,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/VerifyOTP',
    request,
    metadata || {},
    this.methodDescriptorVerifyOTP);
  }

  methodDescriptorResetPassword = new grpcWeb.MethodDescriptor(
    '/workers_management_service.WorkersManagementService/ResetPassword',
    grpcWeb.MethodType.UNARY,
    workers_pb.ResetPasswordRequest,
    workers_pb.ResetPasswordResponse,
    (request: workers_pb.ResetPasswordRequest) => {
      return request.serializeBinary();
    },
    workers_pb.ResetPasswordResponse.deserializeBinary
  );

  resetPassword(
    request: workers_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<workers_pb.ResetPasswordResponse>;

  resetPassword(
    request: workers_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workers_pb.ResetPasswordResponse) => void): grpcWeb.ClientReadableStream<workers_pb.ResetPasswordResponse>;

  resetPassword(
    request: workers_pb.ResetPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workers_pb.ResetPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/workers_management_service.WorkersManagementService/ResetPassword',
        request,
        metadata || {},
        this.methodDescriptorResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/workers_management_service.WorkersManagementService/ResetPassword',
    request,
    metadata || {},
    this.methodDescriptorResetPassword);
  }

}

