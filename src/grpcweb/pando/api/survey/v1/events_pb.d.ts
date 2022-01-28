import * as jspb from 'google-protobuf'

import * as pando_api_survey_v1_shared_pb from '../../../../pando/api/survey/v1/shared_pb';
import * as pando_api_shared_pb from '../../../../pando/api/shared_pb';


export class SurveyInstanceCreated extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): SurveyInstanceCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyInstanceCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyInstanceCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInstanceCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInstanceCreated): SurveyInstanceCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyInstanceCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInstanceCreated;
  static deserializeBinaryFromReader(message: SurveyInstanceCreated, reader: jspb.BinaryReader): SurveyInstanceCreated;
}

export namespace SurveyInstanceCreated {
  export type AsObject = {
    instanceId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyInstanceAccessed extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): SurveyInstanceAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyInstanceAccessed;
  hasUserData(): boolean;
  clearUserData(): SurveyInstanceAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInstanceAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInstanceAccessed): SurveyInstanceAccessed.AsObject;
  static serializeBinaryToWriter(message: SurveyInstanceAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInstanceAccessed;
  static deserializeBinaryFromReader(message: SurveyInstanceAccessed, reader: jspb.BinaryReader): SurveyInstanceAccessed;
}

export namespace SurveyInstanceAccessed {
  export type AsObject = {
    instanceId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyInstanceDeleted extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): SurveyInstanceDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyInstanceDeleted;
  hasUserData(): boolean;
  clearUserData(): SurveyInstanceDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInstanceDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInstanceDeleted): SurveyInstanceDeleted.AsObject;
  static serializeBinaryToWriter(message: SurveyInstanceDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInstanceDeleted;
  static deserializeBinaryFromReader(message: SurveyInstanceDeleted, reader: jspb.BinaryReader): SurveyInstanceDeleted;
}

export namespace SurveyInstanceDeleted {
  export type AsObject = {
    instanceId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyInstanceCompleted extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): SurveyInstanceCompleted;

  getCompletionType(): pando_api_survey_v1_shared_pb.CompletionType;
  setCompletionType(value: pando_api_survey_v1_shared_pb.CompletionType): SurveyInstanceCompleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyInstanceCompleted;
  hasUserData(): boolean;
  clearUserData(): SurveyInstanceCompleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInstanceCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInstanceCompleted): SurveyInstanceCompleted.AsObject;
  static serializeBinaryToWriter(message: SurveyInstanceCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInstanceCompleted;
  static deserializeBinaryFromReader(message: SurveyInstanceCompleted, reader: jspb.BinaryReader): SurveyInstanceCompleted;
}

export namespace SurveyInstanceCompleted {
  export type AsObject = {
    instanceId: string,
    completionType: pando_api_survey_v1_shared_pb.CompletionType,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAttemptStarted extends jspb.Message {
  getAttemptId(): string;
  setAttemptId(value: string): SurveyAttemptStarted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAttemptStarted;
  hasUserData(): boolean;
  clearUserData(): SurveyAttemptStarted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAttemptStarted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAttemptStarted): SurveyAttemptStarted.AsObject;
  static serializeBinaryToWriter(message: SurveyAttemptStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAttemptStarted;
  static deserializeBinaryFromReader(message: SurveyAttemptStarted, reader: jspb.BinaryReader): SurveyAttemptStarted;
}

export namespace SurveyAttemptStarted {
  export type AsObject = {
    attemptId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAttemptRetrieved extends jspb.Message {
  getAttemptId(): string;
  setAttemptId(value: string): SurveyAttemptRetrieved;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAttemptRetrieved;
  hasUserData(): boolean;
  clearUserData(): SurveyAttemptRetrieved;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAttemptRetrieved.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAttemptRetrieved): SurveyAttemptRetrieved.AsObject;
  static serializeBinaryToWriter(message: SurveyAttemptRetrieved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAttemptRetrieved;
  static deserializeBinaryFromReader(message: SurveyAttemptRetrieved, reader: jspb.BinaryReader): SurveyAttemptRetrieved;
}

export namespace SurveyAttemptRetrieved {
  export type AsObject = {
    attemptId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAttemptCompleted extends jspb.Message {
  getAttemptId(): string;
  setAttemptId(value: string): SurveyAttemptCompleted;

  getCompletionType(): pando_api_survey_v1_shared_pb.CompletionType;
  setCompletionType(value: pando_api_survey_v1_shared_pb.CompletionType): SurveyAttemptCompleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAttemptCompleted;
  hasUserData(): boolean;
  clearUserData(): SurveyAttemptCompleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAttemptCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAttemptCompleted): SurveyAttemptCompleted.AsObject;
  static serializeBinaryToWriter(message: SurveyAttemptCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAttemptCompleted;
  static deserializeBinaryFromReader(message: SurveyAttemptCompleted, reader: jspb.BinaryReader): SurveyAttemptCompleted;
}

export namespace SurveyAttemptCompleted {
  export type AsObject = {
    attemptId: string,
    completionType: pando_api_survey_v1_shared_pb.CompletionType,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyMediaAccessed extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyMediaAccessed;

  getMediaId(): string;
  setMediaId(value: string): SurveyMediaAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyMediaAccessed;
  hasUserData(): boolean;
  clearUserData(): SurveyMediaAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyMediaAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyMediaAccessed): SurveyMediaAccessed.AsObject;
  static serializeBinaryToWriter(message: SurveyMediaAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyMediaAccessed;
  static deserializeBinaryFromReader(message: SurveyMediaAccessed, reader: jspb.BinaryReader): SurveyMediaAccessed;
}

export namespace SurveyMediaAccessed {
  export type AsObject = {
    surveyId: string,
    mediaId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAnswerMediaUploaded extends jspb.Message {
  getAnswerId(): string;
  setAnswerId(value: string): SurveyAnswerMediaUploaded;

  getMediaId(): string;
  setMediaId(value: string): SurveyAnswerMediaUploaded;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAnswerMediaUploaded;
  hasUserData(): boolean;
  clearUserData(): SurveyAnswerMediaUploaded;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswerMediaUploaded.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswerMediaUploaded): SurveyAnswerMediaUploaded.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswerMediaUploaded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswerMediaUploaded;
  static deserializeBinaryFromReader(message: SurveyAnswerMediaUploaded, reader: jspb.BinaryReader): SurveyAnswerMediaUploaded;
}

export namespace SurveyAnswerMediaUploaded {
  export type AsObject = {
    answerId: string,
    mediaId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAnswerMediaAccessed extends jspb.Message {
  getMediaId(): string;
  setMediaId(value: string): SurveyAnswerMediaAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAnswerMediaAccessed;
  hasUserData(): boolean;
  clearUserData(): SurveyAnswerMediaAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswerMediaAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswerMediaAccessed): SurveyAnswerMediaAccessed.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswerMediaAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswerMediaAccessed;
  static deserializeBinaryFromReader(message: SurveyAnswerMediaAccessed, reader: jspb.BinaryReader): SurveyAnswerMediaAccessed;
}

export namespace SurveyAnswerMediaAccessed {
  export type AsObject = {
    mediaId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAnswerUploadCompleted extends jspb.Message {
  getAttemptId(): string;
  setAttemptId(value: string): SurveyAnswerUploadCompleted;

  getAttemptCompletionType(): pando_api_survey_v1_shared_pb.CompletionType;
  setAttemptCompletionType(value: pando_api_survey_v1_shared_pb.CompletionType): SurveyAnswerUploadCompleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAnswerUploadCompleted;
  hasUserData(): boolean;
  clearUserData(): SurveyAnswerUploadCompleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswerUploadCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswerUploadCompleted): SurveyAnswerUploadCompleted.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswerUploadCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswerUploadCompleted;
  static deserializeBinaryFromReader(message: SurveyAnswerUploadCompleted, reader: jspb.BinaryReader): SurveyAnswerUploadCompleted;
}

export namespace SurveyAnswerUploadCompleted {
  export type AsObject = {
    attemptId: string,
    attemptCompletionType: pando_api_survey_v1_shared_pb.CompletionType,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAnswerCreated extends jspb.Message {
  getAnswerId(): string;
  setAnswerId(value: string): SurveyAnswerCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAnswerCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyAnswerCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswerCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswerCreated): SurveyAnswerCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswerCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswerCreated;
  static deserializeBinaryFromReader(message: SurveyAnswerCreated, reader: jspb.BinaryReader): SurveyAnswerCreated;
}

export namespace SurveyAnswerCreated {
  export type AsObject = {
    answerId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAnswerRetrieved extends jspb.Message {
  getAnswerId(): string;
  setAnswerId(value: string): SurveyAnswerRetrieved;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAnswerRetrieved;
  hasUserData(): boolean;
  clearUserData(): SurveyAnswerRetrieved;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswerRetrieved.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswerRetrieved): SurveyAnswerRetrieved.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswerRetrieved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswerRetrieved;
  static deserializeBinaryFromReader(message: SurveyAnswerRetrieved, reader: jspb.BinaryReader): SurveyAnswerRetrieved;
}

export namespace SurveyAnswerRetrieved {
  export type AsObject = {
    answerId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAnswerSaved extends jspb.Message {
  getAnswerId(): string;
  setAnswerId(value: string): SurveyAnswerSaved;

  getAnswerText(): string;
  setAnswerText(value: string): SurveyAnswerSaved;

  getAnswerType(): pando_api_survey_v1_shared_pb.AnswerType;
  setAnswerType(value: pando_api_survey_v1_shared_pb.AnswerType): SurveyAnswerSaved;

  getAnswerAction(): pando_api_survey_v1_shared_pb.AnswerAction;
  setAnswerAction(value: pando_api_survey_v1_shared_pb.AnswerAction): SurveyAnswerSaved;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAnswerSaved;
  hasUserData(): boolean;
  clearUserData(): SurveyAnswerSaved;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswerSaved.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswerSaved): SurveyAnswerSaved.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswerSaved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswerSaved;
  static deserializeBinaryFromReader(message: SurveyAnswerSaved, reader: jspb.BinaryReader): SurveyAnswerSaved;
}

export namespace SurveyAnswerSaved {
  export type AsObject = {
    answerId: string,
    answerText: string,
    answerType: pando_api_survey_v1_shared_pb.AnswerType,
    answerAction: pando_api_survey_v1_shared_pb.AnswerAction,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAnswerCompleted extends jspb.Message {
  getAnswerId(): string;
  setAnswerId(value: string): SurveyAnswerCompleted;

  getCompletionType(): pando_api_survey_v1_shared_pb.CompletionType;
  setCompletionType(value: pando_api_survey_v1_shared_pb.CompletionType): SurveyAnswerCompleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAnswerCompleted;
  hasUserData(): boolean;
  clearUserData(): SurveyAnswerCompleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswerCompleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswerCompleted): SurveyAnswerCompleted.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswerCompleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswerCompleted;
  static deserializeBinaryFromReader(message: SurveyAnswerCompleted, reader: jspb.BinaryReader): SurveyAnswerCompleted;
}

export namespace SurveyAnswerCompleted {
  export type AsObject = {
    answerId: string,
    completionType: pando_api_survey_v1_shared_pb.CompletionType,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SendSurveyRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): SendSurveyRequest;

  getInstanceGuid(): string;
  setInstanceGuid(value: string): SendSurveyRequest;

  getContactType(): pando_api_shared_pb.ContactType;
  setContactType(value: pando_api_shared_pb.ContactType): SendSurveyRequest;

  getContactInfo(): string;
  setContactInfo(value: string): SendSurveyRequest;

  getContactOverridden(): boolean;
  setContactOverridden(value: boolean): SendSurveyRequest;

  getRequestedBy(): pando_api_shared_pb.UserMetadata | undefined;
  setRequestedBy(value?: pando_api_shared_pb.UserMetadata): SendSurveyRequest;
  hasRequestedBy(): boolean;
  clearRequestedBy(): SendSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendSurveyRequest): SendSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: SendSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSurveyRequest;
  static deserializeBinaryFromReader(message: SendSurveyRequest, reader: jspb.BinaryReader): SendSurveyRequest;
}

export namespace SendSurveyRequest {
  export type AsObject = {
    userId: string,
    instanceGuid: string,
    contactType: pando_api_shared_pb.ContactType,
    contactInfo: string,
    contactOverridden: boolean,
    requestedBy?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class InstanceOwnerCreated extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): InstanceOwnerCreated;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): InstanceOwnerCreated;
  clearUserIdsList(): InstanceOwnerCreated;
  addUserIds(value: string, index?: number): InstanceOwnerCreated;

  getClientIdsList(): Array<string>;
  setClientIdsList(value: Array<string>): InstanceOwnerCreated;
  clearClientIdsList(): InstanceOwnerCreated;
  addClientIds(value: string, index?: number): InstanceOwnerCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): InstanceOwnerCreated;
  hasUserData(): boolean;
  clearUserData(): InstanceOwnerCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceOwnerCreated.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceOwnerCreated): InstanceOwnerCreated.AsObject;
  static serializeBinaryToWriter(message: InstanceOwnerCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceOwnerCreated;
  static deserializeBinaryFromReader(message: InstanceOwnerCreated, reader: jspb.BinaryReader): InstanceOwnerCreated;
}

export namespace InstanceOwnerCreated {
  export type AsObject = {
    instanceId: string,
    userIdsList: Array<string>,
    clientIdsList: Array<string>,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class InstanceOwnerDeleted extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): InstanceOwnerDeleted;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): InstanceOwnerDeleted;
  clearUserIdsList(): InstanceOwnerDeleted;
  addUserIds(value: string, index?: number): InstanceOwnerDeleted;

  getClientIdsList(): Array<string>;
  setClientIdsList(value: Array<string>): InstanceOwnerDeleted;
  clearClientIdsList(): InstanceOwnerDeleted;
  addClientIds(value: string, index?: number): InstanceOwnerDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): InstanceOwnerDeleted;
  hasUserData(): boolean;
  clearUserData(): InstanceOwnerDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceOwnerDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceOwnerDeleted): InstanceOwnerDeleted.AsObject;
  static serializeBinaryToWriter(message: InstanceOwnerDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceOwnerDeleted;
  static deserializeBinaryFromReader(message: InstanceOwnerDeleted, reader: jspb.BinaryReader): InstanceOwnerDeleted;
}

export namespace InstanceOwnerDeleted {
  export type AsObject = {
    instanceId: string,
    userIdsList: Array<string>,
    clientIdsList: Array<string>,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyMediaUploaded extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyMediaUploaded;

  getMediaId(): string;
  setMediaId(value: string): SurveyMediaUploaded;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyMediaUploaded;
  hasUserData(): boolean;
  clearUserData(): SurveyMediaUploaded;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyMediaUploaded.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyMediaUploaded): SurveyMediaUploaded.AsObject;
  static serializeBinaryToWriter(message: SurveyMediaUploaded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyMediaUploaded;
  static deserializeBinaryFromReader(message: SurveyMediaUploaded, reader: jspb.BinaryReader): SurveyMediaUploaded;
}

export namespace SurveyMediaUploaded {
  export type AsObject = {
    surveyId: string,
    mediaId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyMediaDeleted extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyMediaDeleted;

  getMediaId(): string;
  setMediaId(value: string): SurveyMediaDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyMediaDeleted;
  hasUserData(): boolean;
  clearUserData(): SurveyMediaDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyMediaDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyMediaDeleted): SurveyMediaDeleted.AsObject;
  static serializeBinaryToWriter(message: SurveyMediaDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyMediaDeleted;
  static deserializeBinaryFromReader(message: SurveyMediaDeleted, reader: jspb.BinaryReader): SurveyMediaDeleted;
}

export namespace SurveyMediaDeleted {
  export type AsObject = {
    surveyId: string,
    mediaId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyCreated extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyCreated): SurveyCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyCreated;
  static deserializeBinaryFromReader(message: SurveyCreated, reader: jspb.BinaryReader): SurveyCreated;
}

export namespace SurveyCreated {
  export type AsObject = {
    surveyId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyAccessed extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyAccessed;
  hasUserData(): boolean;
  clearUserData(): SurveyAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAccessed): SurveyAccessed.AsObject;
  static serializeBinaryToWriter(message: SurveyAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAccessed;
  static deserializeBinaryFromReader(message: SurveyAccessed, reader: jspb.BinaryReader): SurveyAccessed;
}

export namespace SurveyAccessed {
  export type AsObject = {
    surveyId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyDeleted extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyDeleted;
  hasUserData(): boolean;
  clearUserData(): SurveyDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyDeleted): SurveyDeleted.AsObject;
  static serializeBinaryToWriter(message: SurveyDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyDeleted;
  static deserializeBinaryFromReader(message: SurveyDeleted, reader: jspb.BinaryReader): SurveyDeleted;
}

export namespace SurveyDeleted {
  export type AsObject = {
    surveyId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyChanged extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyChanged;

  getOldModel(): pando_api_survey_v1_shared_pb.Survey | undefined;
  setOldModel(value?: pando_api_survey_v1_shared_pb.Survey): SurveyChanged;
  hasOldModel(): boolean;
  clearOldModel(): SurveyChanged;

  getNewModel(): pando_api_survey_v1_shared_pb.Survey | undefined;
  setNewModel(value?: pando_api_survey_v1_shared_pb.Survey): SurveyChanged;
  hasNewModel(): boolean;
  clearNewModel(): SurveyChanged;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyChanged;
  hasUserData(): boolean;
  clearUserData(): SurveyChanged;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyChanged.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyChanged): SurveyChanged.AsObject;
  static serializeBinaryToWriter(message: SurveyChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyChanged;
  static deserializeBinaryFromReader(message: SurveyChanged, reader: jspb.BinaryReader): SurveyChanged;
}

export namespace SurveyChanged {
  export type AsObject = {
    surveyId: string,
    oldModel?: pando_api_survey_v1_shared_pb.Survey.AsObject,
    newModel?: pando_api_survey_v1_shared_pb.Survey.AsObject,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionCreated extends jspb.Message {
  getQuestionId(): string;
  setQuestionId(value: string): SurveyQuestionCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionCreated): SurveyQuestionCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionCreated;
  static deserializeBinaryFromReader(message: SurveyQuestionCreated, reader: jspb.BinaryReader): SurveyQuestionCreated;
}

export namespace SurveyQuestionCreated {
  export type AsObject = {
    questionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionAccessed extends jspb.Message {
  getQuestionId(): string;
  setQuestionId(value: string): SurveyQuestionAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionAccessed;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionAccessed): SurveyQuestionAccessed.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionAccessed;
  static deserializeBinaryFromReader(message: SurveyQuestionAccessed, reader: jspb.BinaryReader): SurveyQuestionAccessed;
}

export namespace SurveyQuestionAccessed {
  export type AsObject = {
    questionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionDeleted extends jspb.Message {
  getQuestionId(): string;
  setQuestionId(value: string): SurveyQuestionDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionDeleted;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionDeleted): SurveyQuestionDeleted.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionDeleted;
  static deserializeBinaryFromReader(message: SurveyQuestionDeleted, reader: jspb.BinaryReader): SurveyQuestionDeleted;
}

export namespace SurveyQuestionDeleted {
  export type AsObject = {
    questionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionChanged extends jspb.Message {
  getQuestionId(): string;
  setQuestionId(value: string): SurveyQuestionChanged;

  getOldModel(): pando_api_survey_v1_shared_pb.Question | undefined;
  setOldModel(value?: pando_api_survey_v1_shared_pb.Question): SurveyQuestionChanged;
  hasOldModel(): boolean;
  clearOldModel(): SurveyQuestionChanged;

  getNewModel(): pando_api_survey_v1_shared_pb.Question | undefined;
  setNewModel(value?: pando_api_survey_v1_shared_pb.Question): SurveyQuestionChanged;
  hasNewModel(): boolean;
  clearNewModel(): SurveyQuestionChanged;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionChanged;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionChanged;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionChanged.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionChanged): SurveyQuestionChanged.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionChanged;
  static deserializeBinaryFromReader(message: SurveyQuestionChanged, reader: jspb.BinaryReader): SurveyQuestionChanged;
}

export namespace SurveyQuestionChanged {
  export type AsObject = {
    questionId: string,
    oldModel?: pando_api_survey_v1_shared_pb.Question.AsObject,
    newModel?: pando_api_survey_v1_shared_pb.Question.AsObject,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionDestinationCreated extends jspb.Message {
  getSurveyQuestionDestinationId(): string;
  setSurveyQuestionDestinationId(value: string): SurveyQuestionDestinationCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionDestinationCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionDestinationCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionDestinationCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionDestinationCreated): SurveyQuestionDestinationCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionDestinationCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionDestinationCreated;
  static deserializeBinaryFromReader(message: SurveyQuestionDestinationCreated, reader: jspb.BinaryReader): SurveyQuestionDestinationCreated;
}

export namespace SurveyQuestionDestinationCreated {
  export type AsObject = {
    surveyQuestionDestinationId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionDestinationAccessed extends jspb.Message {
  getSurveyQuestionDestinationId(): string;
  setSurveyQuestionDestinationId(value: string): SurveyQuestionDestinationAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionDestinationAccessed;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionDestinationAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionDestinationAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionDestinationAccessed): SurveyQuestionDestinationAccessed.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionDestinationAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionDestinationAccessed;
  static deserializeBinaryFromReader(message: SurveyQuestionDestinationAccessed, reader: jspb.BinaryReader): SurveyQuestionDestinationAccessed;
}

export namespace SurveyQuestionDestinationAccessed {
  export type AsObject = {
    surveyQuestionDestinationId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionDestinationDeleted extends jspb.Message {
  getSurveyQuestionDestinationId(): string;
  setSurveyQuestionDestinationId(value: string): SurveyQuestionDestinationDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionDestinationDeleted;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionDestinationDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionDestinationDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionDestinationDeleted): SurveyQuestionDestinationDeleted.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionDestinationDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionDestinationDeleted;
  static deserializeBinaryFromReader(message: SurveyQuestionDestinationDeleted, reader: jspb.BinaryReader): SurveyQuestionDestinationDeleted;
}

export namespace SurveyQuestionDestinationDeleted {
  export type AsObject = {
    surveyQuestionDestinationId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyQuestionDestinationChanged extends jspb.Message {
  getSurveyQuestionDestinationId(): string;
  setSurveyQuestionDestinationId(value: string): SurveyQuestionDestinationChanged;

  getOldModel(): pando_api_survey_v1_shared_pb.SurveyQuestionDestination | undefined;
  setOldModel(value?: pando_api_survey_v1_shared_pb.SurveyQuestionDestination): SurveyQuestionDestinationChanged;
  hasOldModel(): boolean;
  clearOldModel(): SurveyQuestionDestinationChanged;

  getNewModel(): pando_api_survey_v1_shared_pb.SurveyQuestionDestination | undefined;
  setNewModel(value?: pando_api_survey_v1_shared_pb.SurveyQuestionDestination): SurveyQuestionDestinationChanged;
  hasNewModel(): boolean;
  clearNewModel(): SurveyQuestionDestinationChanged;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyQuestionDestinationChanged;
  hasUserData(): boolean;
  clearUserData(): SurveyQuestionDestinationChanged;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionDestinationChanged.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionDestinationChanged): SurveyQuestionDestinationChanged.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionDestinationChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionDestinationChanged;
  static deserializeBinaryFromReader(message: SurveyQuestionDestinationChanged, reader: jspb.BinaryReader): SurveyQuestionDestinationChanged;
}

export namespace SurveyQuestionDestinationChanged {
  export type AsObject = {
    surveyQuestionDestinationId: string,
    oldModel?: pando_api_survey_v1_shared_pb.SurveyQuestionDestination.AsObject,
    newModel?: pando_api_survey_v1_shared_pb.SurveyQuestionDestination.AsObject,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class AnswerOptionCreated extends jspb.Message {
  getAnswerOptionId(): string;
  setAnswerOptionId(value: string): AnswerOptionCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): AnswerOptionCreated;
  hasUserData(): boolean;
  clearUserData(): AnswerOptionCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerOptionCreated.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerOptionCreated): AnswerOptionCreated.AsObject;
  static serializeBinaryToWriter(message: AnswerOptionCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerOptionCreated;
  static deserializeBinaryFromReader(message: AnswerOptionCreated, reader: jspb.BinaryReader): AnswerOptionCreated;
}

export namespace AnswerOptionCreated {
  export type AsObject = {
    answerOptionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class AnswerOptionAccessed extends jspb.Message {
  getAnswerOptionId(): string;
  setAnswerOptionId(value: string): AnswerOptionAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): AnswerOptionAccessed;
  hasUserData(): boolean;
  clearUserData(): AnswerOptionAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerOptionAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerOptionAccessed): AnswerOptionAccessed.AsObject;
  static serializeBinaryToWriter(message: AnswerOptionAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerOptionAccessed;
  static deserializeBinaryFromReader(message: AnswerOptionAccessed, reader: jspb.BinaryReader): AnswerOptionAccessed;
}

export namespace AnswerOptionAccessed {
  export type AsObject = {
    answerOptionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class AnswerOptionDeleted extends jspb.Message {
  getAnswerOptionId(): string;
  setAnswerOptionId(value: string): AnswerOptionDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): AnswerOptionDeleted;
  hasUserData(): boolean;
  clearUserData(): AnswerOptionDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerOptionDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerOptionDeleted): AnswerOptionDeleted.AsObject;
  static serializeBinaryToWriter(message: AnswerOptionDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerOptionDeleted;
  static deserializeBinaryFromReader(message: AnswerOptionDeleted, reader: jspb.BinaryReader): AnswerOptionDeleted;
}

export namespace AnswerOptionDeleted {
  export type AsObject = {
    answerOptionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class AnswerOptionChanged extends jspb.Message {
  getAnswerOptionId(): string;
  setAnswerOptionId(value: string): AnswerOptionChanged;

  getOldModel(): pando_api_survey_v1_shared_pb.AnswerOption | undefined;
  setOldModel(value?: pando_api_survey_v1_shared_pb.AnswerOption): AnswerOptionChanged;
  hasOldModel(): boolean;
  clearOldModel(): AnswerOptionChanged;

  getNewModel(): pando_api_survey_v1_shared_pb.AnswerOption | undefined;
  setNewModel(value?: pando_api_survey_v1_shared_pb.AnswerOption): AnswerOptionChanged;
  hasNewModel(): boolean;
  clearNewModel(): AnswerOptionChanged;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): AnswerOptionChanged;
  hasUserData(): boolean;
  clearUserData(): AnswerOptionChanged;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerOptionChanged.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerOptionChanged): AnswerOptionChanged.AsObject;
  static serializeBinaryToWriter(message: AnswerOptionChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerOptionChanged;
  static deserializeBinaryFromReader(message: AnswerOptionChanged, reader: jspb.BinaryReader): AnswerOptionChanged;
}

export namespace AnswerOptionChanged {
  export type AsObject = {
    answerOptionId: string,
    oldModel?: pando_api_survey_v1_shared_pb.AnswerOption.AsObject,
    newModel?: pando_api_survey_v1_shared_pb.AnswerOption.AsObject,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class PlaybackDataCreated extends jspb.Message {
  getPlaybackDataId(): string;
  setPlaybackDataId(value: string): PlaybackDataCreated;

  getQuestionId(): string;
  setQuestionId(value: string): PlaybackDataCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): PlaybackDataCreated;
  hasUserData(): boolean;
  clearUserData(): PlaybackDataCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaybackDataCreated.AsObject;
  static toObject(includeInstance: boolean, msg: PlaybackDataCreated): PlaybackDataCreated.AsObject;
  static serializeBinaryToWriter(message: PlaybackDataCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaybackDataCreated;
  static deserializeBinaryFromReader(message: PlaybackDataCreated, reader: jspb.BinaryReader): PlaybackDataCreated;
}

export namespace PlaybackDataCreated {
  export type AsObject = {
    playbackDataId: string,
    questionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class PlaybackDataAccessed extends jspb.Message {
  getPlaybackDataId(): string;
  setPlaybackDataId(value: string): PlaybackDataAccessed;

  getQuestionId(): string;
  setQuestionId(value: string): PlaybackDataAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): PlaybackDataAccessed;
  hasUserData(): boolean;
  clearUserData(): PlaybackDataAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaybackDataAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: PlaybackDataAccessed): PlaybackDataAccessed.AsObject;
  static serializeBinaryToWriter(message: PlaybackDataAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaybackDataAccessed;
  static deserializeBinaryFromReader(message: PlaybackDataAccessed, reader: jspb.BinaryReader): PlaybackDataAccessed;
}

export namespace PlaybackDataAccessed {
  export type AsObject = {
    playbackDataId: string,
    questionId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class PlaybackDataDeleted extends jspb.Message {
  getQuestionId(): string;
  setQuestionId(value: string): PlaybackDataDeleted;

  getPlaybackDataId(): string;
  setPlaybackDataId(value: string): PlaybackDataDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): PlaybackDataDeleted;
  hasUserData(): boolean;
  clearUserData(): PlaybackDataDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaybackDataDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: PlaybackDataDeleted): PlaybackDataDeleted.AsObject;
  static serializeBinaryToWriter(message: PlaybackDataDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaybackDataDeleted;
  static deserializeBinaryFromReader(message: PlaybackDataDeleted, reader: jspb.BinaryReader): PlaybackDataDeleted;
}

export namespace PlaybackDataDeleted {
  export type AsObject = {
    questionId: string,
    playbackDataId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class PlaybackDataChanged extends jspb.Message {
  getPlaybackDataId(): string;
  setPlaybackDataId(value: string): PlaybackDataChanged;

  getQuestionId(): string;
  setQuestionId(value: string): PlaybackDataChanged;

  getOldModel(): pando_api_survey_v1_shared_pb.PlaybackData | undefined;
  setOldModel(value?: pando_api_survey_v1_shared_pb.PlaybackData): PlaybackDataChanged;
  hasOldModel(): boolean;
  clearOldModel(): PlaybackDataChanged;

  getNewModel(): pando_api_survey_v1_shared_pb.PlaybackData | undefined;
  setNewModel(value?: pando_api_survey_v1_shared_pb.PlaybackData): PlaybackDataChanged;
  hasNewModel(): boolean;
  clearNewModel(): PlaybackDataChanged;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): PlaybackDataChanged;
  hasUserData(): boolean;
  clearUserData(): PlaybackDataChanged;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaybackDataChanged.AsObject;
  static toObject(includeInstance: boolean, msg: PlaybackDataChanged): PlaybackDataChanged.AsObject;
  static serializeBinaryToWriter(message: PlaybackDataChanged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaybackDataChanged;
  static deserializeBinaryFromReader(message: PlaybackDataChanged, reader: jspb.BinaryReader): PlaybackDataChanged;
}

export namespace PlaybackDataChanged {
  export type AsObject = {
    playbackDataId: string,
    questionId: string,
    oldModel?: pando_api_survey_v1_shared_pb.PlaybackData.AsObject,
    newModel?: pando_api_survey_v1_shared_pb.PlaybackData.AsObject,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class VariableCreated extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): VariableCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): VariableCreated;
  hasUserData(): boolean;
  clearUserData(): VariableCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableCreated.AsObject;
  static toObject(includeInstance: boolean, msg: VariableCreated): VariableCreated.AsObject;
  static serializeBinaryToWriter(message: VariableCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableCreated;
  static deserializeBinaryFromReader(message: VariableCreated, reader: jspb.BinaryReader): VariableCreated;
}

export namespace VariableCreated {
  export type AsObject = {
    variableId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class VariableRetrieved extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): VariableRetrieved;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): VariableRetrieved;
  hasUserData(): boolean;
  clearUserData(): VariableRetrieved;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableRetrieved.AsObject;
  static toObject(includeInstance: boolean, msg: VariableRetrieved): VariableRetrieved.AsObject;
  static serializeBinaryToWriter(message: VariableRetrieved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableRetrieved;
  static deserializeBinaryFromReader(message: VariableRetrieved, reader: jspb.BinaryReader): VariableRetrieved;
}

export namespace VariableRetrieved {
  export type AsObject = {
    variableId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class VariableDeleted extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): VariableDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): VariableDeleted;
  hasUserData(): boolean;
  clearUserData(): VariableDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: VariableDeleted): VariableDeleted.AsObject;
  static serializeBinaryToWriter(message: VariableDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableDeleted;
  static deserializeBinaryFromReader(message: VariableDeleted, reader: jspb.BinaryReader): VariableDeleted;
}

export namespace VariableDeleted {
  export type AsObject = {
    variableId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class VariableUpdated extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): VariableUpdated;

  getOldModel(): pando_api_survey_v1_shared_pb.Variable | undefined;
  setOldModel(value?: pando_api_survey_v1_shared_pb.Variable): VariableUpdated;
  hasOldModel(): boolean;
  clearOldModel(): VariableUpdated;

  getNewModel(): pando_api_survey_v1_shared_pb.Variable | undefined;
  setNewModel(value?: pando_api_survey_v1_shared_pb.Variable): VariableUpdated;
  hasNewModel(): boolean;
  clearNewModel(): VariableUpdated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): VariableUpdated;
  hasUserData(): boolean;
  clearUserData(): VariableUpdated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: VariableUpdated): VariableUpdated.AsObject;
  static serializeBinaryToWriter(message: VariableUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableUpdated;
  static deserializeBinaryFromReader(message: VariableUpdated, reader: jspb.BinaryReader): VariableUpdated;
}

export namespace VariableUpdated {
  export type AsObject = {
    variableId: string,
    oldModel?: pando_api_survey_v1_shared_pb.Variable.AsObject,
    newModel?: pando_api_survey_v1_shared_pb.Variable.AsObject,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyVariableCreated extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): SurveyVariableCreated;

  getSurveyId(): string;
  setSurveyId(value: string): SurveyVariableCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyVariableCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyVariableCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyVariableCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyVariableCreated): SurveyVariableCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyVariableCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyVariableCreated;
  static deserializeBinaryFromReader(message: SurveyVariableCreated, reader: jspb.BinaryReader): SurveyVariableCreated;
}

export namespace SurveyVariableCreated {
  export type AsObject = {
    variableId: string,
    surveyId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyVariableAccessed extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): SurveyVariableAccessed;

  getSurveyId(): string;
  setSurveyId(value: string): SurveyVariableAccessed;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyVariableAccessed;
  hasUserData(): boolean;
  clearUserData(): SurveyVariableAccessed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyVariableAccessed.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyVariableAccessed): SurveyVariableAccessed.AsObject;
  static serializeBinaryToWriter(message: SurveyVariableAccessed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyVariableAccessed;
  static deserializeBinaryFromReader(message: SurveyVariableAccessed, reader: jspb.BinaryReader): SurveyVariableAccessed;
}

export namespace SurveyVariableAccessed {
  export type AsObject = {
    variableId: string,
    surveyId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyVariableDeleted extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): SurveyVariableDeleted;

  getSurveyId(): string;
  setSurveyId(value: string): SurveyVariableDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyVariableDeleted;
  hasUserData(): boolean;
  clearUserData(): SurveyVariableDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyVariableDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyVariableDeleted): SurveyVariableDeleted.AsObject;
  static serializeBinaryToWriter(message: SurveyVariableDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyVariableDeleted;
  static deserializeBinaryFromReader(message: SurveyVariableDeleted, reader: jspb.BinaryReader): SurveyVariableDeleted;
}

export namespace SurveyVariableDeleted {
  export type AsObject = {
    variableId: string,
    surveyId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyVersionCreated extends jspb.Message {
  getVersionId(): string;
  setVersionId(value: string): SurveyVersionCreated;

  getSurveyId(): string;
  setSurveyId(value: string): SurveyVersionCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyVersionCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyVersionCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyVersionCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyVersionCreated): SurveyVersionCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyVersionCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyVersionCreated;
  static deserializeBinaryFromReader(message: SurveyVersionCreated, reader: jspb.BinaryReader): SurveyVersionCreated;
}

export namespace SurveyVersionCreated {
  export type AsObject = {
    versionId: string,
    surveyId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class InstanceESignSignatoryCreated extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): InstanceESignSignatoryCreated;

  getSignatoryId(): string;
  setSignatoryId(value: string): InstanceESignSignatoryCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): InstanceESignSignatoryCreated;
  hasUserData(): boolean;
  clearUserData(): InstanceESignSignatoryCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceESignSignatoryCreated.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceESignSignatoryCreated): InstanceESignSignatoryCreated.AsObject;
  static serializeBinaryToWriter(message: InstanceESignSignatoryCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceESignSignatoryCreated;
  static deserializeBinaryFromReader(message: InstanceESignSignatoryCreated, reader: jspb.BinaryReader): InstanceESignSignatoryCreated;
}

export namespace InstanceESignSignatoryCreated {
  export type AsObject = {
    instanceId: string,
    signatoryId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class InstanceESignSignatoryDeleted extends jspb.Message {
  getInstanceId(): string;
  setInstanceId(value: string): InstanceESignSignatoryDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): InstanceESignSignatoryDeleted;
  hasUserData(): boolean;
  clearUserData(): InstanceESignSignatoryDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceESignSignatoryDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceESignSignatoryDeleted): InstanceESignSignatoryDeleted.AsObject;
  static serializeBinaryToWriter(message: InstanceESignSignatoryDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceESignSignatoryDeleted;
  static deserializeBinaryFromReader(message: InstanceESignSignatoryDeleted, reader: jspb.BinaryReader): InstanceESignSignatoryDeleted;
}

export namespace InstanceESignSignatoryDeleted {
  export type AsObject = {
    instanceId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyESignTemplateCreated extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyESignTemplateCreated;

  getTemplateId(): string;
  setTemplateId(value: string): SurveyESignTemplateCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyESignTemplateCreated;
  hasUserData(): boolean;
  clearUserData(): SurveyESignTemplateCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyESignTemplateCreated.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyESignTemplateCreated): SurveyESignTemplateCreated.AsObject;
  static serializeBinaryToWriter(message: SurveyESignTemplateCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyESignTemplateCreated;
  static deserializeBinaryFromReader(message: SurveyESignTemplateCreated, reader: jspb.BinaryReader): SurveyESignTemplateCreated;
}

export namespace SurveyESignTemplateCreated {
  export type AsObject = {
    surveyId: string,
    templateId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class SurveyESignTemplateDeleted extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyESignTemplateDeleted;

  getTemplateId(): string;
  setTemplateId(value: string): SurveyESignTemplateDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): SurveyESignTemplateDeleted;
  hasUserData(): boolean;
  clearUserData(): SurveyESignTemplateDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyESignTemplateDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyESignTemplateDeleted): SurveyESignTemplateDeleted.AsObject;
  static serializeBinaryToWriter(message: SurveyESignTemplateDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyESignTemplateDeleted;
  static deserializeBinaryFromReader(message: SurveyESignTemplateDeleted, reader: jspb.BinaryReader): SurveyESignTemplateDeleted;
}

export namespace SurveyESignTemplateDeleted {
  export type AsObject = {
    surveyId: string,
    templateId: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class VariableMediaCreated extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): VariableMediaCreated;

  getMediaId(): string;
  setMediaId(value: string): VariableMediaCreated;

  getVariableValue(): string;
  setVariableValue(value: string): VariableMediaCreated;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): VariableMediaCreated;
  hasUserData(): boolean;
  clearUserData(): VariableMediaCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableMediaCreated.AsObject;
  static toObject(includeInstance: boolean, msg: VariableMediaCreated): VariableMediaCreated.AsObject;
  static serializeBinaryToWriter(message: VariableMediaCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableMediaCreated;
  static deserializeBinaryFromReader(message: VariableMediaCreated, reader: jspb.BinaryReader): VariableMediaCreated;
}

export namespace VariableMediaCreated {
  export type AsObject = {
    variableId: string,
    mediaId: string,
    variableValue: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export class VariableMediaDeleted extends jspb.Message {
  getVariableId(): string;
  setVariableId(value: string): VariableMediaDeleted;

  getMediaId(): string;
  setMediaId(value: string): VariableMediaDeleted;

  getVariableValue(): string;
  setVariableValue(value: string): VariableMediaDeleted;

  getUserData(): pando_api_shared_pb.UserMetadata | undefined;
  setUserData(value?: pando_api_shared_pb.UserMetadata): VariableMediaDeleted;
  hasUserData(): boolean;
  clearUserData(): VariableMediaDeleted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableMediaDeleted.AsObject;
  static toObject(includeInstance: boolean, msg: VariableMediaDeleted): VariableMediaDeleted.AsObject;
  static serializeBinaryToWriter(message: VariableMediaDeleted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableMediaDeleted;
  static deserializeBinaryFromReader(message: VariableMediaDeleted, reader: jspb.BinaryReader): VariableMediaDeleted;
}

export namespace VariableMediaDeleted {
  export type AsObject = {
    variableId: string,
    mediaId: string,
    variableValue: string,
    userData?: pando_api_shared_pb.UserMetadata.AsObject,
  }
}

export enum EventTypes { 
  INSTANCE_CREATED = 0,
  INSTANCE_RETRIEVED = 1,
  INSTANCE_DELETED = 2,
  INSTANCE_COMPLETED = 3,
  ATTEMPT_CREATED = 10,
  ATTEMPT_RETRIEVED = 11,
  ATTEMPT_COMPLETED = 12,
  SURVEY_MEDIA_CREATED = 20,
  SURVEY_MEDIA_RETRIEVED = 21,
  SURVEY_MEDIA_DELETED = 22,
  ANSWER_MEDIA_CREATED = 30,
  ANSWER_MEDIA_RETRIEVED = 31,
  ANSWER_MEDIA_COMPLETED = 32,
  ANSWER_CREATED = 40,
  ANSWER_UPDATED = 41,
  ANSWER_COMPLETED = 42,
  SURVEY_CREATED = 50,
  SURVEY_RETRIEVED = 51,
  SURVEY_DELETED = 52,
  SURVEY_UPDATED = 53,
  QUESTION_CREATED = 60,
  QUESTION_RETRIEVED = 61,
  QUESTION_DELETED = 62,
  QUESTION_UPDATED = 63,
  QUESTION_DESTINATION_CREATED = 70,
  QUESTION_DESTINATION_RETRIEVED = 71,
  QUESTION_DESTINATION_DELETED = 72,
  QUESTION_DESTINATION_UPDATED = 73,
  ANSWER_OPTION_CREATED = 80,
  ANSWER_OPTION_RETRIEVED = 81,
  ANSWER_OPTION_DELETED = 82,
  ANSWER_OPTION_UPDATED = 83,
  PLAYBACK_DATA_CREATED = 90,
  PLAYBACK_DATA_RETRIEVED = 91,
  PLAYBACK_DATA_DELETED = 92,
  PLAYBACK_DATA_UPDATED = 93,
  VARIABLE_CREATED = 100,
  VARIABLE_RETRIEVED = 101,
  VARIABLE_DELETED = 102,
  VARIABLE_UPDATED = 103,
  SURVEY_VARIABLE_CREATED = 110,
  SURVEY_VARIABLE_RETRIEVED = 111,
  SURVEY_VARIABLE_DELETED = 112,
  SURVEY_VERSION_CREATED = 120,
  SEND_SURVEY_REQUEST = 130,
  INSTANCE_OWNER_CREATED = 140,
  INSTANCE_OWNER_DELETED = 141,
  INSTANCE_ESIGN_SIGNATORY_CREATED = 150,
  INSTANCE_ESIGN_SIGNATORY_DELETED = 151,
  SURVEY_ESIGN_TEMPLATE_CREATED = 160,
  SURVEY_ESIGN_TEMPLATE_DELETED = 161,
  VARIABLE_MEDIA_CREATED = 170,
  VARIABLE_MEDIA_DELETED = 171,
}
