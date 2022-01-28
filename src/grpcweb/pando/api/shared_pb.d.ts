import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class FileChunk extends jspb.Message {
  getMetadata(): FileMetadata | undefined;
  setMetadata(value?: FileMetadata): FileChunk;
  hasMetadata(): boolean;
  clearMetadata(): FileChunk;

  getChunk(): Chunk | undefined;
  setChunk(value?: Chunk): FileChunk;
  hasChunk(): boolean;
  clearChunk(): FileChunk;

  getResponseCase(): FileChunk.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileChunk.AsObject;
  static toObject(includeInstance: boolean, msg: FileChunk): FileChunk.AsObject;
  static serializeBinaryToWriter(message: FileChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileChunk;
  static deserializeBinaryFromReader(message: FileChunk, reader: jspb.BinaryReader): FileChunk;
}

export namespace FileChunk {
  export type AsObject = {
    metadata?: FileMetadata.AsObject,
    chunk?: Chunk.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    METADATA = 1,
    CHUNK = 2,
  }
}

export class FileMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): FileMetadata;

  getSize(): number;
  setSize(value: number): FileMetadata;

  getType(): FileType;
  setType(value: FileType): FileMetadata;

  getGuid(): string;
  setGuid(value: string): FileMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FileMetadata): FileMetadata.AsObject;
  static serializeBinaryToWriter(message: FileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMetadata;
  static deserializeBinaryFromReader(message: FileMetadata, reader: jspb.BinaryReader): FileMetadata;
}

export namespace FileMetadata {
  export type AsObject = {
    name: string,
    size: number,
    type: FileType,
    guid: string,
  }
}

export class Chunk extends jspb.Message {
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): Chunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    bytes: Uint8Array | string,
  }
}

export class UserMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): UserMetadata;

  getClientId(): string;
  setClientId(value: string): UserMetadata;

  getDeviceId(): string;
  setDeviceId(value: string): UserMetadata;

  getLongitude(): string;
  setLongitude(value: string): UserMetadata;

  getLatitude(): string;
  setLatitude(value: string): UserMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UserMetadata): UserMetadata.AsObject;
  static serializeBinaryToWriter(message: UserMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMetadata;
  static deserializeBinaryFromReader(message: UserMetadata, reader: jspb.BinaryReader): UserMetadata;
}

export namespace UserMetadata {
  export type AsObject = {
    id: string,
    clientId: string,
    deviceId: string,
    longitude: string,
    latitude: string,
  }
}

export class DecimalValue extends jspb.Message {
  getUnits(): number;
  setUnits(value: number): DecimalValue;

  getNanos(): number;
  setNanos(value: number): DecimalValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecimalValue.AsObject;
  static toObject(includeInstance: boolean, msg: DecimalValue): DecimalValue.AsObject;
  static serializeBinaryToWriter(message: DecimalValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecimalValue;
  static deserializeBinaryFromReader(message: DecimalValue, reader: jspb.BinaryReader): DecimalValue;
}

export namespace DecimalValue {
  export type AsObject = {
    units: number,
    nanos: number,
  }
}

export class DataRecord extends jspb.Message {
  getFormat(): FileType;
  setFormat(value: FileType): DataRecord;

  getText(): string;
  setText(value: string): DataRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataRecord.AsObject;
  static toObject(includeInstance: boolean, msg: DataRecord): DataRecord.AsObject;
  static serializeBinaryToWriter(message: DataRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataRecord;
  static deserializeBinaryFromReader(message: DataRecord, reader: jspb.BinaryReader): DataRecord;
}

export namespace DataRecord {
  export type AsObject = {
    format: FileType,
    text: string,
  }
}

export class ContactInfo extends jspb.Message {
  getContactType(): ContactType;
  setContactType(value: ContactType): ContactInfo;

  getContactInfo(): string;
  setContactInfo(value: string): ContactInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContactInfo): ContactInfo.AsObject;
  static serializeBinaryToWriter(message: ContactInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactInfo;
  static deserializeBinaryFromReader(message: ContactInfo, reader: jspb.BinaryReader): ContactInfo;
}

export namespace ContactInfo {
  export type AsObject = {
    contactType: ContactType,
    contactInfo: string,
  }
}

export class UserContactInfo extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UserContactInfo;

  getContactInfo(): ContactInfo | undefined;
  setContactInfo(value?: ContactInfo): UserContactInfo;
  hasContactInfo(): boolean;
  clearContactInfo(): UserContactInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserContactInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserContactInfo): UserContactInfo.AsObject;
  static serializeBinaryToWriter(message: UserContactInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserContactInfo;
  static deserializeBinaryFromReader(message: UserContactInfo, reader: jspb.BinaryReader): UserContactInfo;
}

export namespace UserContactInfo {
  export type AsObject = {
    userId: string,
    contactInfo?: ContactInfo.AsObject,
  }
}

export class PaginationResult extends jspb.Message {
  getCurrentPage(): number;
  setCurrentPage(value: number): PaginationResult;

  getCurrentResultCount(): number;
  setCurrentResultCount(value: number): PaginationResult;

  getTotalPageCount(): number;
  setTotalPageCount(value: number): PaginationResult;

  getTotalResultCount(): number;
  setTotalResultCount(value: number): PaginationResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationResult.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationResult): PaginationResult.AsObject;
  static serializeBinaryToWriter(message: PaginationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationResult;
  static deserializeBinaryFromReader(message: PaginationResult, reader: jspb.BinaryReader): PaginationResult;
}

export namespace PaginationResult {
  export type AsObject = {
    currentPage: number,
    currentResultCount: number,
    totalPageCount: number,
    totalResultCount: number,
  }
}

export enum FileType { 
  MP4 = 0,
  MOV = 1,
  M4A = 100,
  WAV = 101,
  JS = 102,
  JSON = 103,
  YAML = 104,
  XML = 105,
  CSV = 106,
}
export enum VariableType { 
  STRING = 0,
  INT = 1,
  FLOAT = 2,
  BOOL = 3,
  DATETIME = 4,
}
export enum MaskType { 
  NONE = 0,
  CREDIT_CARD_NUMBER = 1,
  BANK_ACCOUNT_NUMBER = 2,
  SOCIAL_SECURITY_NUMBER = 3,
}
export enum ContactType { 
  PHONE = 0,
  EMAIL = 1,
}
