import * as jspb from 'google-protobuf'



export class RegisterUserRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): RegisterUserRequest;

  getPassword(): string;
  setPassword(value: string): RegisterUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class RegisterUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): RegisterUserResponse;

  getMessage(): string;
  setMessage(value: string): RegisterUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
  static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
  export type AsObject = {
    id: string,
    message: string,
  }
}

export class LoginUserRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginUserRequest;

  getPassword(): string;
  setPassword(value: string): LoginUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
  static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
  static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginUserResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
  static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
  static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
  export type AsObject = {
    token: string,
  }
}

export class ForgotPasswordRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): ForgotPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordRequest): ForgotPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordRequest;
  static deserializeBinaryFromReader(message: ForgotPasswordRequest, reader: jspb.BinaryReader): ForgotPasswordRequest;
}

export namespace ForgotPasswordRequest {
  export type AsObject = {
    username: string,
  }
}

export class ForgotPasswordResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ForgotPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordResponse): ForgotPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordResponse;
  static deserializeBinaryFromReader(message: ForgotPasswordResponse, reader: jspb.BinaryReader): ForgotPasswordResponse;
}

export namespace ForgotPasswordResponse {
  export type AsObject = {
    message: string,
  }
}

export class VerifyOTPRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): VerifyOTPRequest;

  getOtpCode(): string;
  setOtpCode(value: string): VerifyOTPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPRequest): VerifyOTPRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPRequest;
  static deserializeBinaryFromReader(message: VerifyOTPRequest, reader: jspb.BinaryReader): VerifyOTPRequest;
}

export namespace VerifyOTPRequest {
  export type AsObject = {
    username: string,
    otpCode: string,
  }
}

export class VerifyOTPResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): VerifyOTPResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPResponse): VerifyOTPResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPResponse;
  static deserializeBinaryFromReader(message: VerifyOTPResponse, reader: jspb.BinaryReader): VerifyOTPResponse;
}

export namespace VerifyOTPResponse {
  export type AsObject = {
    message: string,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    username: string,
    newPassword: string,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
    message: string,
  }
}

export class CreateWorkerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateWorkerRequest;

  getEmail(): string;
  setEmail(value: string): CreateWorkerRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CreateWorkerRequest;

  getDepartment(): string;
  setDepartment(value: string): CreateWorkerRequest;

  getJobTitle(): string;
  setJobTitle(value: string): CreateWorkerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkerRequest): CreateWorkerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorkerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkerRequest;
  static deserializeBinaryFromReader(message: CreateWorkerRequest, reader: jspb.BinaryReader): CreateWorkerRequest;
}

export namespace CreateWorkerRequest {
  export type AsObject = {
    name: string,
    email: string,
    phoneNumber: string,
    department: string,
    jobTitle: string,
  }
}

export class CreateWorkerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateWorkerResponse;

  getMessage(): string;
  setMessage(value: string): CreateWorkerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkerResponse): CreateWorkerResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWorkerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkerResponse;
  static deserializeBinaryFromReader(message: CreateWorkerResponse, reader: jspb.BinaryReader): CreateWorkerResponse;
}

export namespace CreateWorkerResponse {
  export type AsObject = {
    id: string,
    message: string,
  }
}

export class GetWorkerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetWorkerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerRequest): GetWorkerRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkerRequest;
  static deserializeBinaryFromReader(message: GetWorkerRequest, reader: jspb.BinaryReader): GetWorkerRequest;
}

export namespace GetWorkerRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetWorkerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): GetWorkerResponse;

  getName(): string;
  setName(value: string): GetWorkerResponse;

  getEmail(): string;
  setEmail(value: string): GetWorkerResponse;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): GetWorkerResponse;

  getDepartment(): string;
  setDepartment(value: string): GetWorkerResponse;

  getJobTitle(): string;
  setJobTitle(value: string): GetWorkerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkerResponse): GetWorkerResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorkerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkerResponse;
  static deserializeBinaryFromReader(message: GetWorkerResponse, reader: jspb.BinaryReader): GetWorkerResponse;
}

export namespace GetWorkerResponse {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    department: string,
    jobTitle: string,
  }
}

export class UpdateWorkerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateWorkerRequest;

  getName(): string;
  setName(value: string): UpdateWorkerRequest;

  getEmail(): string;
  setEmail(value: string): UpdateWorkerRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UpdateWorkerRequest;

  getDepartment(): string;
  setDepartment(value: string): UpdateWorkerRequest;

  getJobTitle(): string;
  setJobTitle(value: string): UpdateWorkerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkerRequest): UpdateWorkerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkerRequest;
  static deserializeBinaryFromReader(message: UpdateWorkerRequest, reader: jspb.BinaryReader): UpdateWorkerRequest;
}

export namespace UpdateWorkerRequest {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    department: string,
    jobTitle: string,
  }
}

export class UpdateWorkerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateWorkerResponse;

  getMessage(): string;
  setMessage(value: string): UpdateWorkerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkerResponse): UpdateWorkerResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkerResponse;
  static deserializeBinaryFromReader(message: UpdateWorkerResponse, reader: jspb.BinaryReader): UpdateWorkerResponse;
}

export namespace UpdateWorkerResponse {
  export type AsObject = {
    id: string,
    message: string,
  }
}

export class DeleteWorkerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteWorkerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkerRequest): DeleteWorkerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkerRequest;
  static deserializeBinaryFromReader(message: DeleteWorkerRequest, reader: jspb.BinaryReader): DeleteWorkerRequest;
}

export namespace DeleteWorkerRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteWorkerResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): DeleteWorkerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkerResponse): DeleteWorkerResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkerResponse;
  static deserializeBinaryFromReader(message: DeleteWorkerResponse, reader: jspb.BinaryReader): DeleteWorkerResponse;
}

export namespace DeleteWorkerResponse {
  export type AsObject = {
    message: string,
  }
}

export class ListWorkersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkersRequest): ListWorkersRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkersRequest;
  static deserializeBinaryFromReader(message: ListWorkersRequest, reader: jspb.BinaryReader): ListWorkersRequest;
}

export namespace ListWorkersRequest {
  export type AsObject = {
  }
}

export class ListWorkersResponse extends jspb.Message {
  getWorkersList(): Array<Worker>;
  setWorkersList(value: Array<Worker>): ListWorkersResponse;
  clearWorkersList(): ListWorkersResponse;
  addWorkers(value?: Worker, index?: number): Worker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkersResponse): ListWorkersResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkersResponse;
  static deserializeBinaryFromReader(message: ListWorkersResponse, reader: jspb.BinaryReader): ListWorkersResponse;
}

export namespace ListWorkersResponse {
  export type AsObject = {
    workersList: Array<Worker.AsObject>,
  }
}

export class Worker extends jspb.Message {
  getId(): string;
  setId(value: string): Worker;

  getName(): string;
  setName(value: string): Worker;

  getEmail(): string;
  setEmail(value: string): Worker;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Worker;

  getDepartment(): string;
  setDepartment(value: string): Worker;

  getJobTitle(): string;
  setJobTitle(value: string): Worker;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worker.AsObject;
  static toObject(includeInstance: boolean, msg: Worker): Worker.AsObject;
  static serializeBinaryToWriter(message: Worker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worker;
  static deserializeBinaryFromReader(message: Worker, reader: jspb.BinaryReader): Worker;
}

export namespace Worker {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    department: string,
    jobTitle: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getUsername(): string;
  setUsername(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getOtpCode(): string;
  setOtpCode(value: string): User;

  getOtpCodeExpiry(): string;
  setOtpCodeExpiry(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    username: string,
    password: string,
    otpCode: string,
    otpCodeExpiry: string,
  }
}

