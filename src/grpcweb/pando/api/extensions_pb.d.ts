import * as jspb from 'google-protobuf'

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


export class ServiceMetadata extends jspb.Message {
  getRequiredScopeList(): Array<string>;
  setRequiredScopeList(value: Array<string>): ServiceMetadata;
  clearRequiredScopeList(): ServiceMetadata;
  addRequiredScope(value: string, index?: number): ServiceMetadata;

  getRequiredClaimList(): Array<string>;
  setRequiredClaimList(value: Array<string>): ServiceMetadata;
  clearRequiredClaimList(): ServiceMetadata;
  addRequiredClaim(value: string, index?: number): ServiceMetadata;

  getRequireUserAuth(): boolean;
  setRequireUserAuth(value: boolean): ServiceMetadata;

  getRequireClientAuth(): boolean;
  setRequireClientAuth(value: boolean): ServiceMetadata;

  getOptionalScopeList(): Array<ScopeMetadata>;
  setOptionalScopeList(value: Array<ScopeMetadata>): ServiceMetadata;
  clearOptionalScopeList(): ServiceMetadata;
  addOptionalScope(value?: ScopeMetadata, index?: number): ScopeMetadata;

  getOptionalClaimList(): Array<ClaimMetadata>;
  setOptionalClaimList(value: Array<ClaimMetadata>): ServiceMetadata;
  clearOptionalClaimList(): ServiceMetadata;
  addOptionalClaim(value?: ClaimMetadata, index?: number): ClaimMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceMetadata): ServiceMetadata.AsObject;
  static serializeBinaryToWriter(message: ServiceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceMetadata;
  static deserializeBinaryFromReader(message: ServiceMetadata, reader: jspb.BinaryReader): ServiceMetadata;
}

export namespace ServiceMetadata {
  export type AsObject = {
    requiredScopeList: Array<string>,
    requiredClaimList: Array<string>,
    requireUserAuth: boolean,
    requireClientAuth: boolean,
    optionalScopeList: Array<ScopeMetadata.AsObject>,
    optionalClaimList: Array<ClaimMetadata.AsObject>,
  }
}

export class MessageMetadata extends jspb.Message {
  getPersonalInfo(): boolean;
  setPersonalInfo(value: boolean): MessageMetadata;

  getSensitiveInfo(): boolean;
  setSensitiveInfo(value: boolean): MessageMetadata;

  getResponseOnly(): boolean;
  setResponseOnly(value: boolean): MessageMetadata;

  getRequestOnly(): boolean;
  setRequestOnly(value: boolean): MessageMetadata;

  getRequestRequired(): boolean;
  setRequestRequired(value: boolean): MessageMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: MessageMetadata): MessageMetadata.AsObject;
  static serializeBinaryToWriter(message: MessageMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageMetadata;
  static deserializeBinaryFromReader(message: MessageMetadata, reader: jspb.BinaryReader): MessageMetadata;
}

export namespace MessageMetadata {
  export type AsObject = {
    personalInfo: boolean,
    sensitiveInfo: boolean,
    responseOnly: boolean,
    requestOnly: boolean,
    requestRequired: boolean,
  }
}

export class ScopeMetadata extends jspb.Message {
  getScope(): string;
  setScope(value: string): ScopeMetadata;

  getNote(): string;
  setNote(value: string): ScopeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScopeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ScopeMetadata): ScopeMetadata.AsObject;
  static serializeBinaryToWriter(message: ScopeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScopeMetadata;
  static deserializeBinaryFromReader(message: ScopeMetadata, reader: jspb.BinaryReader): ScopeMetadata;
}

export namespace ScopeMetadata {
  export type AsObject = {
    scope: string,
    note: string,
  }
}

export class ClaimMetadata extends jspb.Message {
  getClaim(): string;
  setClaim(value: string): ClaimMetadata;

  getNote(): string;
  setNote(value: string): ClaimMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimMetadata): ClaimMetadata.AsObject;
  static serializeBinaryToWriter(message: ClaimMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimMetadata;
  static deserializeBinaryFromReader(message: ClaimMetadata, reader: jspb.BinaryReader): ClaimMetadata;
}

export namespace ClaimMetadata {
  export type AsObject = {
    claim: string,
    note: string,
  }
}

