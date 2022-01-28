import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pando_api_extensions_pb from '../../../../pando/api/extensions_pb';
import * as pando_api_shared_pb from '../../../../pando/api/shared_pb';
import * as pando_api_survey_v1_shared_pb from '../../../../pando/api/survey/v1/shared_pb';


export class UploadAnswerMediaResponse extends jspb.Message {
  getMediaAnswerGuid(): string;
  setMediaAnswerGuid(value: string): UploadAnswerMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadAnswerMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadAnswerMediaResponse): UploadAnswerMediaResponse.AsObject;
  static serializeBinaryToWriter(message: UploadAnswerMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadAnswerMediaResponse;
  static deserializeBinaryFromReader(message: UploadAnswerMediaResponse, reader: jspb.BinaryReader): UploadAnswerMediaResponse;
}

export namespace UploadAnswerMediaResponse {
  export type AsObject = {
    mediaAnswerGuid: string,
  }
}

export class GetMediaRequest extends jspb.Message {
  getMediaGuid(): string;
  setMediaGuid(value: string): GetMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMediaRequest): GetMediaRequest.AsObject;
  static serializeBinaryToWriter(message: GetMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMediaRequest;
  static deserializeBinaryFromReader(message: GetMediaRequest, reader: jspb.BinaryReader): GetMediaRequest;
}

export namespace GetMediaRequest {
  export type AsObject = {
    mediaGuid: string,
  }
}

export class SpeechRecognitionRequest extends jspb.Message {
  getBytes(): Uint8Array | string;
  getBytes_asU8(): Uint8Array;
  getBytes_asB64(): string;
  setBytes(value: Uint8Array | string): SpeechRecognitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionRequest): SpeechRecognitionRequest.AsObject;
  static serializeBinaryToWriter(message: SpeechRecognitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionRequest;
  static deserializeBinaryFromReader(message: SpeechRecognitionRequest, reader: jspb.BinaryReader): SpeechRecognitionRequest;
}

export namespace SpeechRecognitionRequest {
  export type AsObject = {
    bytes: Uint8Array | string,
  }
}

export class SpeechRecognitionResponse extends jspb.Message {
  getRecognized(): boolean;
  setRecognized(value: boolean): SpeechRecognitionResponse;

  getRecognizedText(): string;
  setRecognizedText(value: string): SpeechRecognitionResponse;

  getIsYes(): boolean;
  setIsYes(value: boolean): SpeechRecognitionResponse;

  getIsNo(): boolean;
  setIsNo(value: boolean): SpeechRecognitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionResponse): SpeechRecognitionResponse.AsObject;
  static serializeBinaryToWriter(message: SpeechRecognitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionResponse;
  static deserializeBinaryFromReader(message: SpeechRecognitionResponse, reader: jspb.BinaryReader): SpeechRecognitionResponse;
}

export namespace SpeechRecognitionResponse {
  export type AsObject = {
    recognized: boolean,
    recognizedText: string,
    isYes: boolean,
    isNo: boolean,
  }
}

export class FacialRecognitionRequest extends jspb.Message {
  getBase64Img(): string;
  setBase64Img(value: string): FacialRecognitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FacialRecognitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FacialRecognitionRequest): FacialRecognitionRequest.AsObject;
  static serializeBinaryToWriter(message: FacialRecognitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FacialRecognitionRequest;
  static deserializeBinaryFromReader(message: FacialRecognitionRequest, reader: jspb.BinaryReader): FacialRecognitionRequest;
}

export namespace FacialRecognitionRequest {
  export type AsObject = {
    base64Img: string,
  }
}

export class FacialRecognitionResponse extends jspb.Message {
  getFaceInFrame(): boolean;
  setFaceInFrame(value: boolean): FacialRecognitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FacialRecognitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FacialRecognitionResponse): FacialRecognitionResponse.AsObject;
  static serializeBinaryToWriter(message: FacialRecognitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FacialRecognitionResponse;
  static deserializeBinaryFromReader(message: FacialRecognitionResponse, reader: jspb.BinaryReader): FacialRecognitionResponse;
}

export namespace FacialRecognitionResponse {
  export type AsObject = {
    faceInFrame: boolean,
  }
}

export class GetInstancesRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetInstancesRequest;

  getIncludeCompleted(): boolean;
  setIncludeCompleted(value: boolean): GetInstancesRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetInstancesRequest;
  hasStart(): boolean;
  clearStart(): GetInstancesRequest;

  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): GetInstancesRequest;
  hasEnd(): boolean;
  clearEnd(): GetInstancesRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetInstancesRequest;

  getPage(): number;
  setPage(value: number): GetInstancesRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetInstancesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstancesRequest): GetInstancesRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstancesRequest;
  static deserializeBinaryFromReader(message: GetInstancesRequest, reader: jspb.BinaryReader): GetInstancesRequest;
}

export namespace GetInstancesRequest {
  export type AsObject = {
    userId: string,
    includeCompleted: boolean,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    includeDeleted: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class SaveAnswerRequest extends jspb.Message {
  getAnswerGuid(): string;
  setAnswerGuid(value: string): SaveAnswerRequest;

  getText(): string;
  setText(value: string): SaveAnswerRequest;

  getAnswerType(): pando_api_survey_v1_shared_pb.AnswerType;
  setAnswerType(value: pando_api_survey_v1_shared_pb.AnswerType): SaveAnswerRequest;

  getAnswerAction(): pando_api_survey_v1_shared_pb.AnswerAction;
  setAnswerAction(value: pando_api_survey_v1_shared_pb.AnswerAction): SaveAnswerRequest;

  getTimestamp(): number;
  setTimestamp(value: number): SaveAnswerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveAnswerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveAnswerRequest): SaveAnswerRequest.AsObject;
  static serializeBinaryToWriter(message: SaveAnswerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveAnswerRequest;
  static deserializeBinaryFromReader(message: SaveAnswerRequest, reader: jspb.BinaryReader): SaveAnswerRequest;
}

export namespace SaveAnswerRequest {
  export type AsObject = {
    answerGuid: string,
    text: string,
    answerType: pando_api_survey_v1_shared_pb.AnswerType,
    answerAction: pando_api_survey_v1_shared_pb.AnswerAction,
    timestamp: number,
  }
}

export class CompleteSurveyRequest extends jspb.Message {
  getSurveyAttemptGuid(): string;
  setSurveyAttemptGuid(value: string): CompleteSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteSurveyRequest): CompleteSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteSurveyRequest;
  static deserializeBinaryFromReader(message: CompleteSurveyRequest, reader: jspb.BinaryReader): CompleteSurveyRequest;
}

export namespace CompleteSurveyRequest {
  export type AsObject = {
    surveyAttemptGuid: string,
  }
}

export class GetAttemptRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): GetAttemptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttemptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttemptRequest): GetAttemptRequest.AsObject;
  static serializeBinaryToWriter(message: GetAttemptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttemptRequest;
  static deserializeBinaryFromReader(message: GetAttemptRequest, reader: jspb.BinaryReader): GetAttemptRequest;
}

export namespace GetAttemptRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetAttemptsRequest extends jspb.Message {
  getInstanceGuid(): string;
  setInstanceGuid(value: string): GetAttemptsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttemptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttemptsRequest): GetAttemptsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAttemptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttemptsRequest;
  static deserializeBinaryFromReader(message: GetAttemptsRequest, reader: jspb.BinaryReader): GetAttemptsRequest;
}

export namespace GetAttemptsRequest {
  export type AsObject = {
    instanceGuid: string,
  }
}

export class GetNextQuestionRequest extends jspb.Message {
  getAttemptGuid(): string;
  setAttemptGuid(value: string): GetNextQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextQuestionRequest): GetNextQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: GetNextQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextQuestionRequest;
  static deserializeBinaryFromReader(message: GetNextQuestionRequest, reader: jspb.BinaryReader): GetNextQuestionRequest;
}

export namespace GetNextQuestionRequest {
  export type AsObject = {
    attemptGuid: string,
  }
}

export class GetInstanceRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): GetInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstanceRequest): GetInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstanceRequest;
  static deserializeBinaryFromReader(message: GetInstanceRequest, reader: jspb.BinaryReader): GetInstanceRequest;
}

export namespace GetInstanceRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetNextQuestionResponse extends jspb.Message {
  getQuestion(): pando_api_survey_v1_shared_pb.QuestionWithPlaybackData | undefined;
  setQuestion(value?: pando_api_survey_v1_shared_pb.QuestionWithPlaybackData): GetNextQuestionResponse;
  hasQuestion(): boolean;
  clearQuestion(): GetNextQuestionResponse;

  getMessage(): NoMoreQuestionsResponse | undefined;
  setMessage(value?: NoMoreQuestionsResponse): GetNextQuestionResponse;
  hasMessage(): boolean;
  clearMessage(): GetNextQuestionResponse;

  getResponseCase(): GetNextQuestionResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextQuestionResponse): GetNextQuestionResponse.AsObject;
  static serializeBinaryToWriter(message: GetNextQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextQuestionResponse;
  static deserializeBinaryFromReader(message: GetNextQuestionResponse, reader: jspb.BinaryReader): GetNextQuestionResponse;
}

export namespace GetNextQuestionResponse {
  export type AsObject = {
    question?: pando_api_survey_v1_shared_pb.QuestionWithPlaybackData.AsObject,
    message?: NoMoreQuestionsResponse.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    QUESTION = 1,
    MESSAGE = 2,
  }
}

export class NoMoreQuestionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoMoreQuestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NoMoreQuestionsResponse): NoMoreQuestionsResponse.AsObject;
  static serializeBinaryToWriter(message: NoMoreQuestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoMoreQuestionsResponse;
  static deserializeBinaryFromReader(message: NoMoreQuestionsResponse, reader: jspb.BinaryReader): NoMoreQuestionsResponse;
}

export namespace NoMoreQuestionsResponse {
  export type AsObject = {
  }
}

export class ExecCompleteQuestionRequest extends jspb.Message {
  getAnswerGuid(): string;
  setAnswerGuid(value: string): ExecCompleteQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecCompleteQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecCompleteQuestionRequest): ExecCompleteQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: ExecCompleteQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecCompleteQuestionRequest;
  static deserializeBinaryFromReader(message: ExecCompleteQuestionRequest, reader: jspb.BinaryReader): ExecCompleteQuestionRequest;
}

export namespace ExecCompleteQuestionRequest {
  export type AsObject = {
    answerGuid: string,
  }
}

export class ExecCompleteQuestionResponse extends jspb.Message {
  getCompletionType(): pando_api_survey_v1_shared_pb.CompletionType;
  setCompletionType(value: pando_api_survey_v1_shared_pb.CompletionType): ExecCompleteQuestionResponse;

  getMessage(): string;
  setMessage(value: string): ExecCompleteQuestionResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ExecCompleteQuestionResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): ExecCompleteQuestionResponse;

  getRelativeTimestamp(): number;
  setRelativeTimestamp(value: number): ExecCompleteQuestionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecCompleteQuestionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecCompleteQuestionResponse): ExecCompleteQuestionResponse.AsObject;
  static serializeBinaryToWriter(message: ExecCompleteQuestionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecCompleteQuestionResponse;
  static deserializeBinaryFromReader(message: ExecCompleteQuestionResponse, reader: jspb.BinaryReader): ExecCompleteQuestionResponse;
}

export namespace ExecCompleteQuestionResponse {
  export type AsObject = {
    completionType: pando_api_survey_v1_shared_pb.CompletionType,
    message: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    relativeTimestamp: number,
  }
}

export class ExecAddInstanceOwnerRequest extends jspb.Message {
  getInstanceGuid(): string;
  setInstanceGuid(value: string): ExecAddInstanceOwnerRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ExecAddInstanceOwnerRequest;
  clearUserIdsList(): ExecAddInstanceOwnerRequest;
  addUserIds(value: string, index?: number): ExecAddInstanceOwnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecAddInstanceOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecAddInstanceOwnerRequest): ExecAddInstanceOwnerRequest.AsObject;
  static serializeBinaryToWriter(message: ExecAddInstanceOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecAddInstanceOwnerRequest;
  static deserializeBinaryFromReader(message: ExecAddInstanceOwnerRequest, reader: jspb.BinaryReader): ExecAddInstanceOwnerRequest;
}

export namespace ExecAddInstanceOwnerRequest {
  export type AsObject = {
    instanceGuid: string,
    userIdsList: Array<string>,
  }
}

export class ExecRemoveInstanceOwnerRequest extends jspb.Message {
  getInstanceGuid(): string;
  setInstanceGuid(value: string): ExecRemoveInstanceOwnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecRemoveInstanceOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecRemoveInstanceOwnerRequest): ExecRemoveInstanceOwnerRequest.AsObject;
  static serializeBinaryToWriter(message: ExecRemoveInstanceOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecRemoveInstanceOwnerRequest;
  static deserializeBinaryFromReader(message: ExecRemoveInstanceOwnerRequest, reader: jspb.BinaryReader): ExecRemoveInstanceOwnerRequest;
}

export namespace ExecRemoveInstanceOwnerRequest {
  export type AsObject = {
    instanceGuid: string,
  }
}

export class GetSurveyInstanceListRequest extends jspb.Message {
  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetSurveyInstanceListRequest;
  hasStart(): boolean;
  clearStart(): GetSurveyInstanceListRequest;

  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): GetSurveyInstanceListRequest;
  hasEnd(): boolean;
  clearEnd(): GetSurveyInstanceListRequest;

  getPage(): number;
  setPage(value: number): GetSurveyInstanceListRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetSurveyInstanceListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyInstanceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyInstanceListRequest): GetSurveyInstanceListRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyInstanceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyInstanceListRequest;
  static deserializeBinaryFromReader(message: GetSurveyInstanceListRequest, reader: jspb.BinaryReader): GetSurveyInstanceListRequest;
}

export namespace GetSurveyInstanceListRequest {
  export type AsObject = {
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    page: number,
    resultsPerPage: number,
  }
}

export class GetAttemptQuestionsRequest extends jspb.Message {
  getSurveyAttemptGuid(): string;
  setSurveyAttemptGuid(value: string): GetAttemptQuestionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttemptQuestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttemptQuestionsRequest): GetAttemptQuestionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAttemptQuestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttemptQuestionsRequest;
  static deserializeBinaryFromReader(message: GetAttemptQuestionsRequest, reader: jspb.BinaryReader): GetAttemptQuestionsRequest;
}

export namespace GetAttemptQuestionsRequest {
  export type AsObject = {
    surveyAttemptGuid: string,
  }
}

export class GetQuestionWithAnswerTimestampsRequest extends jspb.Message {
  getSurveyAttemptGuid(): string;
  setSurveyAttemptGuid(value: string): GetQuestionWithAnswerTimestampsRequest;

  getQuestionGuid(): string;
  setQuestionGuid(value: string): GetQuestionWithAnswerTimestampsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuestionWithAnswerTimestampsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuestionWithAnswerTimestampsRequest): GetQuestionWithAnswerTimestampsRequest.AsObject;
  static serializeBinaryToWriter(message: GetQuestionWithAnswerTimestampsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuestionWithAnswerTimestampsRequest;
  static deserializeBinaryFromReader(message: GetQuestionWithAnswerTimestampsRequest, reader: jspb.BinaryReader): GetQuestionWithAnswerTimestampsRequest;
}

export namespace GetQuestionWithAnswerTimestampsRequest {
  export type AsObject = {
    surveyAttemptGuid: string,
    questionGuid: string,
  }
}

export class GetAttemptQuestionsResponse extends jspb.Message {
  getQuestionGuidsList(): Array<string>;
  setQuestionGuidsList(value: Array<string>): GetAttemptQuestionsResponse;
  clearQuestionGuidsList(): GetAttemptQuestionsResponse;
  addQuestionGuids(value: string, index?: number): GetAttemptQuestionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAttemptQuestionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAttemptQuestionsResponse): GetAttemptQuestionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAttemptQuestionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAttemptQuestionsResponse;
  static deserializeBinaryFromReader(message: GetAttemptQuestionsResponse, reader: jspb.BinaryReader): GetAttemptQuestionsResponse;
}

export namespace GetAttemptQuestionsResponse {
  export type AsObject = {
    questionGuidsList: Array<string>,
  }
}

export class GetQuestionWithAnswerTimestampsResponse extends jspb.Message {
  getQuestion(): pando_api_survey_v1_shared_pb.QuestionWithPlaybackData | undefined;
  setQuestion(value?: pando_api_survey_v1_shared_pb.QuestionWithPlaybackData): GetQuestionWithAnswerTimestampsResponse;
  hasQuestion(): boolean;
  clearQuestion(): GetQuestionWithAnswerTimestampsResponse;

  getAnswerTimestampsList(): Array<pando_api_survey_v1_shared_pb.AnswerTimestamp>;
  setAnswerTimestampsList(value: Array<pando_api_survey_v1_shared_pb.AnswerTimestamp>): GetQuestionWithAnswerTimestampsResponse;
  clearAnswerTimestampsList(): GetQuestionWithAnswerTimestampsResponse;
  addAnswerTimestamps(value?: pando_api_survey_v1_shared_pb.AnswerTimestamp, index?: number): pando_api_survey_v1_shared_pb.AnswerTimestamp;

  getAnswerMediaGuid(): string;
  setAnswerMediaGuid(value: string): GetQuestionWithAnswerTimestampsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuestionWithAnswerTimestampsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuestionWithAnswerTimestampsResponse): GetQuestionWithAnswerTimestampsResponse.AsObject;
  static serializeBinaryToWriter(message: GetQuestionWithAnswerTimestampsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuestionWithAnswerTimestampsResponse;
  static deserializeBinaryFromReader(message: GetQuestionWithAnswerTimestampsResponse, reader: jspb.BinaryReader): GetQuestionWithAnswerTimestampsResponse;
}

export namespace GetQuestionWithAnswerTimestampsResponse {
  export type AsObject = {
    question?: pando_api_survey_v1_shared_pb.QuestionWithPlaybackData.AsObject,
    answerTimestampsList: Array<pando_api_survey_v1_shared_pb.AnswerTimestamp.AsObject>,
    answerMediaGuid: string,
  }
}

