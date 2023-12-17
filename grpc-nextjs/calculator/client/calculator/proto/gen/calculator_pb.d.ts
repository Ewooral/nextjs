import * as jspb from 'google-protobuf'



export class TotalRequest extends jspb.Message {
  getNum1(): number;
  setNum1(value: number): TotalRequest;

  getNum2(): number;
  setNum2(value: number): TotalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TotalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TotalRequest): TotalRequest.AsObject;
  static serializeBinaryToWriter(message: TotalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TotalRequest;
  static deserializeBinaryFromReader(message: TotalRequest, reader: jspb.BinaryReader): TotalRequest;
}

export namespace TotalRequest {
  export type AsObject = {
    num1: number,
    num2: number,
  }
}

export class TotalResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): TotalResponse;

  getSuccess(): boolean;
  setSuccess(value: boolean): TotalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TotalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TotalResponse): TotalResponse.AsObject;
  static serializeBinaryToWriter(message: TotalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TotalResponse;
  static deserializeBinaryFromReader(message: TotalResponse, reader: jspb.BinaryReader): TotalResponse;
}

export namespace TotalResponse {
  export type AsObject = {
    total: number,
    success: boolean,
  }
}

