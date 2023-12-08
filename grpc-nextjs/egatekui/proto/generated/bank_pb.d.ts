import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getUsername(): string;
  setUsername(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getRole(): Role;
  setRole(value: Role): User;

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
    email: string,
    role: Role,
  }
}

export class RegisterRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getRole(): Role;
  setRole(value: Role): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    username: string,
    password: string,
    email: string,
    role: Role,
  }
}

export class RegisterResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): RegisterResponse;
  hasUser(): boolean;
  clearUser(): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LoginResponse;

  getToken(): string;
  setToken(value: string): LoginResponse;

  getRole(): Role;
  setRole(value: Role): LoginResponse;

  getUser(): User | undefined;
  setUser(value?: User): LoginResponse;
  hasUser(): boolean;
  clearUser(): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    success: boolean,
    token: string,
    role: Role,
    user?: User.AsObject,
  }
}

export class OTPRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): OTPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OTPRequest): OTPRequest.AsObject;
  static serializeBinaryToWriter(message: OTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OTPRequest;
  static deserializeBinaryFromReader(message: OTPRequest, reader: jspb.BinaryReader): OTPRequest;
}

export namespace OTPRequest {
  export type AsObject = {
    email: string,
  }
}

export class OTPResponse extends jspb.Message {
  getOtp(): string;
  setOtp(value: string): OTPResponse;

  getExpiresAt(): number;
  setExpiresAt(value: number): OTPResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OTPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OTPResponse): OTPResponse.AsObject;
  static serializeBinaryToWriter(message: OTPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OTPResponse;
  static deserializeBinaryFromReader(message: OTPResponse, reader: jspb.BinaryReader): OTPResponse;
}

export namespace OTPResponse {
  export type AsObject = {
    otp: string,
    expiresAt: number,
  }
}

export class VerifyOTPRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): VerifyOTPRequest;

  getOtp(): string;
  setOtp(value: string): VerifyOTPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPRequest): VerifyOTPRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPRequest;
  static deserializeBinaryFromReader(message: VerifyOTPRequest, reader: jspb.BinaryReader): VerifyOTPRequest;
}

export namespace VerifyOTPRequest {
  export type AsObject = {
    email: string,
    otp: string,
  }
}

export class VerifyOTPResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): VerifyOTPResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOTPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOTPResponse): VerifyOTPResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyOTPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOTPResponse;
  static deserializeBinaryFromReader(message: VerifyOTPResponse, reader: jspb.BinaryReader): VerifyOTPResponse;
}

export namespace VerifyOTPResponse {
  export type AsObject = {
    valid: boolean,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ResetPasswordRequest;

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
    email: string,
    newPassword: string,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class CRUDRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CRUDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CRUDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CRUDRequest): CRUDRequest.AsObject;
  static serializeBinaryToWriter(message: CRUDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CRUDRequest;
  static deserializeBinaryFromReader(message: CRUDRequest, reader: jspb.BinaryReader): CRUDRequest;
}

export namespace CRUDRequest {
  export type AsObject = {
    userId: string,
  }
}

export class CRUDResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CRUDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CRUDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CRUDResponse): CRUDResponse.AsObject;
  static serializeBinaryToWriter(message: CRUDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CRUDResponse;
  static deserializeBinaryFromReader(message: CRUDResponse, reader: jspb.BinaryReader): CRUDResponse;
}

export namespace CRUDResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class AdminRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminRequest): AdminRequest.AsObject;
  static serializeBinaryToWriter(message: AdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminRequest;
  static deserializeBinaryFromReader(message: AdminRequest, reader: jspb.BinaryReader): AdminRequest;
}

export namespace AdminRequest {
  export type AsObject = {
  }
}

export class AdminResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminResponse): AdminResponse.AsObject;
  static serializeBinaryToWriter(message: AdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminResponse;
  static deserializeBinaryFromReader(message: AdminResponse, reader: jspb.BinaryReader): AdminResponse;
}

export namespace AdminResponse {
  export type AsObject = {
  }
}

export class CreateAdminUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateAdminUserRequest;

  getPassword(): string;
  setPassword(value: string): CreateAdminUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdminUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdminUserRequest): CreateAdminUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAdminUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdminUserRequest;
  static deserializeBinaryFromReader(message: CreateAdminUserRequest, reader: jspb.BinaryReader): CreateAdminUserRequest;
}

export namespace CreateAdminUserRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class CreateAdminUserResponse extends jspb.Message {
  getAdminUser(): User | undefined;
  setAdminUser(value?: User): CreateAdminUserResponse;
  hasAdminUser(): boolean;
  clearAdminUser(): CreateAdminUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAdminUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAdminUserResponse): CreateAdminUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAdminUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAdminUserResponse;
  static deserializeBinaryFromReader(message: CreateAdminUserResponse, reader: jspb.BinaryReader): CreateAdminUserResponse;
}

export namespace CreateAdminUserResponse {
  export type AsObject = {
    adminUser?: User.AsObject,
  }
}

export class UpdateUserRoleRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UpdateUserRoleRequest;

  getNewRole(): Role;
  setNewRole(value: Role): UpdateUserRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRoleRequest): UpdateUserRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRoleRequest;
  static deserializeBinaryFromReader(message: UpdateUserRoleRequest, reader: jspb.BinaryReader): UpdateUserRoleRequest;
}

export namespace UpdateUserRoleRequest {
  export type AsObject = {
    userId: string,
    newRole: Role,
  }
}

export class UpdateUserRoleResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateUserRoleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRoleResponse): UpdateUserRoleResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRoleResponse;
  static deserializeBinaryFromReader(message: UpdateUserRoleResponse, reader: jspb.BinaryReader): UpdateUserRoleResponse;
}

export namespace UpdateUserRoleResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class BanUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): BanUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BanUserRequest): BanUserRequest.AsObject;
  static serializeBinaryToWriter(message: BanUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanUserRequest;
  static deserializeBinaryFromReader(message: BanUserRequest, reader: jspb.BinaryReader): BanUserRequest;
}

export namespace BanUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class BanUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): BanUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BanUserResponse): BanUserResponse.AsObject;
  static serializeBinaryToWriter(message: BanUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanUserResponse;
  static deserializeBinaryFromReader(message: BanUserResponse, reader: jspb.BinaryReader): BanUserResponse;
}

export namespace BanUserResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class ViewUserActivityLogRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ViewUserActivityLogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewUserActivityLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewUserActivityLogRequest): ViewUserActivityLogRequest.AsObject;
  static serializeBinaryToWriter(message: ViewUserActivityLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewUserActivityLogRequest;
  static deserializeBinaryFromReader(message: ViewUserActivityLogRequest, reader: jspb.BinaryReader): ViewUserActivityLogRequest;
}

export namespace ViewUserActivityLogRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ViewUserActivityLogResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewUserActivityLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ViewUserActivityLogResponse): ViewUserActivityLogResponse.AsObject;
  static serializeBinaryToWriter(message: ViewUserActivityLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewUserActivityLogResponse;
  static deserializeBinaryFromReader(message: ViewUserActivityLogResponse, reader: jspb.BinaryReader): ViewUserActivityLogResponse;
}

export namespace ViewUserActivityLogResponse {
  export type AsObject = {
  }
}

export class GenerateReportsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReportsRequest): GenerateReportsRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReportsRequest;
  static deserializeBinaryFromReader(message: GenerateReportsRequest, reader: jspb.BinaryReader): GenerateReportsRequest;
}

export namespace GenerateReportsRequest {
  export type AsObject = {
  }
}

export class GenerateReportsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateReportsResponse): GenerateReportsResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateReportsResponse;
  static deserializeBinaryFromReader(message: GenerateReportsResponse, reader: jspb.BinaryReader): GenerateReportsResponse;
}

export namespace GenerateReportsResponse {
  export type AsObject = {
  }
}

export class ConfigureSystemSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureSystemSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureSystemSettingsRequest): ConfigureSystemSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: ConfigureSystemSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureSystemSettingsRequest;
  static deserializeBinaryFromReader(message: ConfigureSystemSettingsRequest, reader: jspb.BinaryReader): ConfigureSystemSettingsRequest;
}

export namespace ConfigureSystemSettingsRequest {
  export type AsObject = {
  }
}

export class ConfigureSystemSettingsResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ConfigureSystemSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigureSystemSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigureSystemSettingsResponse): ConfigureSystemSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: ConfigureSystemSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigureSystemSettingsResponse;
  static deserializeBinaryFromReader(message: ConfigureSystemSettingsResponse, reader: jspb.BinaryReader): ConfigureSystemSettingsResponse;
}

export namespace ConfigureSystemSettingsResponse {
  export type AsObject = {
    success: boolean,
  }
}

export enum Role { 
  ADMIN = 0,
  SUPERVISOR = 1,
  USER = 2,
}
