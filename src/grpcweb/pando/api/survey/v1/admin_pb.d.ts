import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as pando_api_extensions_pb from '../../../../pando/api/extensions_pb';
import * as pando_api_shared_pb from '../../../../pando/api/shared_pb';
import * as pando_api_survey_v1_shared_pb from '../../../../pando/api/survey/v1/shared_pb';


export class UploadSurveyMediaResponse extends jspb.Message {
  getSurveyMediaGuid(): string;
  setSurveyMediaGuid(value: string): UploadSurveyMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadSurveyMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadSurveyMediaResponse): UploadSurveyMediaResponse.AsObject;
  static serializeBinaryToWriter(message: UploadSurveyMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadSurveyMediaResponse;
  static deserializeBinaryFromReader(message: UploadSurveyMediaResponse, reader: jspb.BinaryReader): UploadSurveyMediaResponse;
}

export namespace UploadSurveyMediaResponse {
  export type AsObject = {
    surveyMediaGuid: string,
  }
}

export class UploadVariableMediaResponse extends jspb.Message {
  getVariableMediaGuid(): string;
  setVariableMediaGuid(value: string): UploadVariableMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadVariableMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadVariableMediaResponse): UploadVariableMediaResponse.AsObject;
  static serializeBinaryToWriter(message: UploadVariableMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadVariableMediaResponse;
  static deserializeBinaryFromReader(message: UploadVariableMediaResponse, reader: jspb.BinaryReader): UploadVariableMediaResponse;
}

export namespace UploadVariableMediaResponse {
  export type AsObject = {
    variableMediaGuid: string,
  }
}

export class DeleteInstanceRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeleteInstanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstanceRequest): DeleteInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstanceRequest;
  static deserializeBinaryFromReader(message: DeleteInstanceRequest, reader: jspb.BinaryReader): DeleteInstanceRequest;
}

export namespace DeleteInstanceRequest {
  export type AsObject = {
    guid: string,
  }
}

export class CreateVariablesRequest extends jspb.Message {
  getData(): string;
  setData(value: string): CreateVariablesRequest;

  getDataFormat(): pando_api_shared_pb.FileType;
  setDataFormat(value: pando_api_shared_pb.FileType): CreateVariablesRequest;

  getOrganizationCode(): string;
  setOrganizationCode(value: string): CreateVariablesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVariablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVariablesRequest): CreateVariablesRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVariablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVariablesRequest;
  static deserializeBinaryFromReader(message: CreateVariablesRequest, reader: jspb.BinaryReader): CreateVariablesRequest;
}

export namespace CreateVariablesRequest {
  export type AsObject = {
    data: string,
    dataFormat: pando_api_shared_pb.FileType,
    organizationCode: string,
  }
}

export class DeleteSurveyVariableRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): DeleteSurveyVariableRequest;

  getVariableGuid(): string;
  setVariableGuid(value: string): DeleteSurveyVariableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSurveyVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSurveyVariableRequest): DeleteSurveyVariableRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSurveyVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSurveyVariableRequest;
  static deserializeBinaryFromReader(message: DeleteSurveyVariableRequest, reader: jspb.BinaryReader): DeleteSurveyVariableRequest;
}

export namespace DeleteSurveyVariableRequest {
  export type AsObject = {
    surveyGuid: string,
    variableGuid: string,
  }
}

export class GetVariablesRequest extends jspb.Message {
  getOrganizationCode(): string;
  setOrganizationCode(value: string): GetVariablesRequest;

  getFilter(): string;
  setFilter(value: string): GetVariablesRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetVariablesRequest;

  getPage(): number;
  setPage(value: number): GetVariablesRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetVariablesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariablesRequest): GetVariablesRequest.AsObject;
  static serializeBinaryToWriter(message: GetVariablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariablesRequest;
  static deserializeBinaryFromReader(message: GetVariablesRequest, reader: jspb.BinaryReader): GetVariablesRequest;
}

export namespace GetVariablesRequest {
  export type AsObject = {
    organizationCode: string,
    filter: string,
    includeDeleted: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class GetAnswerOptionsRequest extends jspb.Message {
  getFilter(): string;
  setFilter(value: string): GetAnswerOptionsRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetAnswerOptionsRequest;

  getOrganizationCode(): string;
  setOrganizationCode(value: string): GetAnswerOptionsRequest;

  getPage(): number;
  setPage(value: number): GetAnswerOptionsRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetAnswerOptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnswerOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnswerOptionsRequest): GetAnswerOptionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnswerOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnswerOptionsRequest;
  static deserializeBinaryFromReader(message: GetAnswerOptionsRequest, reader: jspb.BinaryReader): GetAnswerOptionsRequest;
}

export namespace GetAnswerOptionsRequest {
  export type AsObject = {
    filter: string,
    includeDeleted: boolean,
    organizationCode: string,
    page: number,
    resultsPerPage: number,
  }
}

export class GetSurveysRequest extends jspb.Message {
  getOrganizationCode(): string;
  setOrganizationCode(value: string): GetSurveysRequest;

  getFilter(): string;
  setFilter(value: string): GetSurveysRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetSurveysRequest;

  getIncludeOldVersions(): boolean;
  setIncludeOldVersions(value: boolean): GetSurveysRequest;

  getIncludeUnpublishedVersions(): boolean;
  setIncludeUnpublishedVersions(value: boolean): GetSurveysRequest;

  getPage(): number;
  setPage(value: number): GetSurveysRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetSurveysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveysRequest): GetSurveysRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveysRequest;
  static deserializeBinaryFromReader(message: GetSurveysRequest, reader: jspb.BinaryReader): GetSurveysRequest;
}

export namespace GetSurveysRequest {
  export type AsObject = {
    organizationCode: string,
    filter: string,
    includeDeleted: boolean,
    includeOldVersions: boolean,
    includeUnpublishedVersions: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class GetSurveyVersionsRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): GetSurveyVersionsRequest;

  getFilter(): string;
  setFilter(value: string): GetSurveyVersionsRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetSurveyVersionsRequest;

  getPage(): number;
  setPage(value: number): GetSurveyVersionsRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetSurveyVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyVersionsRequest): GetSurveyVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyVersionsRequest;
  static deserializeBinaryFromReader(message: GetSurveyVersionsRequest, reader: jspb.BinaryReader): GetSurveyVersionsRequest;
}

export namespace GetSurveyVersionsRequest {
  export type AsObject = {
    surveyGuid: string,
    filter: string,
    includeDeleted: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class GetSurveyMediaListRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): GetSurveyMediaListRequest;

  getFilter(): string;
  setFilter(value: string): GetSurveyMediaListRequest;

  getVersionGuid(): string;
  setVersionGuid(value: string): GetSurveyMediaListRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetSurveyMediaListRequest;

  getPage(): number;
  setPage(value: number): GetSurveyMediaListRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetSurveyMediaListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyMediaListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyMediaListRequest): GetSurveyMediaListRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyMediaListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyMediaListRequest;
  static deserializeBinaryFromReader(message: GetSurveyMediaListRequest, reader: jspb.BinaryReader): GetSurveyMediaListRequest;
}

export namespace GetSurveyMediaListRequest {
  export type AsObject = {
    surveyGuid: string,
    filter: string,
    versionGuid: string,
    includeDeleted: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class GetSurveyVariablesRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): GetSurveyVariablesRequest;

  getFilter(): string;
  setFilter(value: string): GetSurveyVariablesRequest;

  getVersionGuid(): string;
  setVersionGuid(value: string): GetSurveyVariablesRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetSurveyVariablesRequest;

  getPage(): number;
  setPage(value: number): GetSurveyVariablesRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetSurveyVariablesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyVariablesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyVariablesRequest): GetSurveyVariablesRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyVariablesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyVariablesRequest;
  static deserializeBinaryFromReader(message: GetSurveyVariablesRequest, reader: jspb.BinaryReader): GetSurveyVariablesRequest;
}

export namespace GetSurveyVariablesRequest {
  export type AsObject = {
    surveyGuid: string,
    filter: string,
    versionGuid: string,
    includeDeleted: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class GetQuestionsRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): GetQuestionsRequest;

  getFilter(): string;
  setFilter(value: string): GetQuestionsRequest;

  getVersionGuid(): string;
  setVersionGuid(value: string): GetQuestionsRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetQuestionsRequest;

  getPage(): number;
  setPage(value: number): GetQuestionsRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetQuestionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuestionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuestionsRequest): GetQuestionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetQuestionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuestionsRequest;
  static deserializeBinaryFromReader(message: GetQuestionsRequest, reader: jspb.BinaryReader): GetQuestionsRequest;
}

export namespace GetQuestionsRequest {
  export type AsObject = {
    surveyGuid: string,
    filter: string,
    versionGuid: string,
    includeDeleted: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class GetVariableMediaListRequest extends jspb.Message {
  getVariableGuid(): string;
  setVariableGuid(value: string): GetVariableMediaListRequest;

  getFilter(): string;
  setFilter(value: string): GetVariableMediaListRequest;

  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetVariableMediaListRequest;

  getPage(): number;
  setPage(value: number): GetVariableMediaListRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetVariableMediaListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariableMediaListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariableMediaListRequest): GetVariableMediaListRequest.AsObject;
  static serializeBinaryToWriter(message: GetVariableMediaListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariableMediaListRequest;
  static deserializeBinaryFromReader(message: GetVariableMediaListRequest, reader: jspb.BinaryReader): GetVariableMediaListRequest;
}

export namespace GetVariableMediaListRequest {
  export type AsObject = {
    variableGuid: string,
    filter: string,
    includeDeleted: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class DeleteSurveyMediaRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): DeleteSurveyMediaRequest;

  getMediaGuid(): string;
  setMediaGuid(value: string): DeleteSurveyMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSurveyMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSurveyMediaRequest): DeleteSurveyMediaRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSurveyMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSurveyMediaRequest;
  static deserializeBinaryFromReader(message: DeleteSurveyMediaRequest, reader: jspb.BinaryReader): DeleteSurveyMediaRequest;
}

export namespace DeleteSurveyMediaRequest {
  export type AsObject = {
    surveyGuid: string,
    mediaGuid: string,
  }
}

export class DeleteVariableMediaRequest extends jspb.Message {
  getVariableGuid(): string;
  setVariableGuid(value: string): DeleteVariableMediaRequest;

  getMediaGuid(): string;
  setMediaGuid(value: string): DeleteVariableMediaRequest;

  getValue(): string;
  setValue(value: string): DeleteVariableMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVariableMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVariableMediaRequest): DeleteVariableMediaRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVariableMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVariableMediaRequest;
  static deserializeBinaryFromReader(message: DeleteVariableMediaRequest, reader: jspb.BinaryReader): DeleteVariableMediaRequest;
}

export namespace DeleteVariableMediaRequest {
  export type AsObject = {
    variableGuid: string,
    mediaGuid: string,
    value: string,
  }
}

export class UpdateSurveyRequest extends jspb.Message {
  getSurvey(): pando_api_survey_v1_shared_pb.Survey | undefined;
  setSurvey(value?: pando_api_survey_v1_shared_pb.Survey): UpdateSurveyRequest;
  hasSurvey(): boolean;
  clearSurvey(): UpdateSurveyRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSurveyRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSurveyRequest): UpdateSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSurveyRequest;
  static deserializeBinaryFromReader(message: UpdateSurveyRequest, reader: jspb.BinaryReader): UpdateSurveyRequest;
}

export namespace UpdateSurveyRequest {
  export type AsObject = {
    survey?: pando_api_survey_v1_shared_pb.Survey.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateQuestionRequest extends jspb.Message {
  getQuestion(): pando_api_survey_v1_shared_pb.Question | undefined;
  setQuestion(value?: pando_api_survey_v1_shared_pb.Question): UpdateQuestionRequest;
  hasQuestion(): boolean;
  clearQuestion(): UpdateQuestionRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateQuestionRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateQuestionRequest): UpdateQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateQuestionRequest;
  static deserializeBinaryFromReader(message: UpdateQuestionRequest, reader: jspb.BinaryReader): UpdateQuestionRequest;
}

export namespace UpdateQuestionRequest {
  export type AsObject = {
    question?: pando_api_survey_v1_shared_pb.Question.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdatePlaybackDataRequest extends jspb.Message {
  getPlaybackData(): pando_api_survey_v1_shared_pb.PlaybackData | undefined;
  setPlaybackData(value?: pando_api_survey_v1_shared_pb.PlaybackData): UpdatePlaybackDataRequest;
  hasPlaybackData(): boolean;
  clearPlaybackData(): UpdatePlaybackDataRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdatePlaybackDataRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdatePlaybackDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlaybackDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlaybackDataRequest): UpdatePlaybackDataRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePlaybackDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlaybackDataRequest;
  static deserializeBinaryFromReader(message: UpdatePlaybackDataRequest, reader: jspb.BinaryReader): UpdatePlaybackDataRequest;
}

export namespace UpdatePlaybackDataRequest {
  export type AsObject = {
    playbackData?: pando_api_survey_v1_shared_pb.PlaybackData.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateSurveyQuestionDestinationRequest extends jspb.Message {
  getDestination(): pando_api_survey_v1_shared_pb.SurveyQuestionDestination | undefined;
  setDestination(value?: pando_api_survey_v1_shared_pb.SurveyQuestionDestination): UpdateSurveyQuestionDestinationRequest;
  hasDestination(): boolean;
  clearDestination(): UpdateSurveyQuestionDestinationRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSurveyQuestionDestinationRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSurveyQuestionDestinationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSurveyQuestionDestinationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSurveyQuestionDestinationRequest): UpdateSurveyQuestionDestinationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSurveyQuestionDestinationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSurveyQuestionDestinationRequest;
  static deserializeBinaryFromReader(message: UpdateSurveyQuestionDestinationRequest, reader: jspb.BinaryReader): UpdateSurveyQuestionDestinationRequest;
}

export namespace UpdateSurveyQuestionDestinationRequest {
  export type AsObject = {
    destination?: pando_api_survey_v1_shared_pb.SurveyQuestionDestination.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateVariableRequest extends jspb.Message {
  getVariable(): pando_api_survey_v1_shared_pb.Variable | undefined;
  setVariable(value?: pando_api_survey_v1_shared_pb.Variable): UpdateVariableRequest;
  hasVariable(): boolean;
  clearVariable(): UpdateVariableRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVariableRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateVariableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVariableRequest): UpdateVariableRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVariableRequest;
  static deserializeBinaryFromReader(message: UpdateVariableRequest, reader: jspb.BinaryReader): UpdateVariableRequest;
}

export namespace UpdateVariableRequest {
  export type AsObject = {
    variable?: pando_api_survey_v1_shared_pb.Variable.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateAnswerOptionRequest extends jspb.Message {
  getAnswerOption(): pando_api_survey_v1_shared_pb.AnswerOption | undefined;
  setAnswerOption(value?: pando_api_survey_v1_shared_pb.AnswerOption): UpdateAnswerOptionRequest;
  hasAnswerOption(): boolean;
  clearAnswerOption(): UpdateAnswerOptionRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAnswerOptionRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateAnswerOptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAnswerOptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAnswerOptionRequest): UpdateAnswerOptionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAnswerOptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAnswerOptionRequest;
  static deserializeBinaryFromReader(message: UpdateAnswerOptionRequest, reader: jspb.BinaryReader): UpdateAnswerOptionRequest;
}

export namespace UpdateAnswerOptionRequest {
  export type AsObject = {
    answerOption?: pando_api_survey_v1_shared_pb.AnswerOption.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetSurveyRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): GetSurveyRequest;

  getVersionGuid(): string;
  setVersionGuid(value: string): GetSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyRequest): GetSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyRequest;
  static deserializeBinaryFromReader(message: GetSurveyRequest, reader: jspb.BinaryReader): GetSurveyRequest;
}

export namespace GetSurveyRequest {
  export type AsObject = {
    surveyGuid: string,
    versionGuid: string,
  }
}

export class DeleteSurveyRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeleteSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSurveyRequest): DeleteSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSurveyRequest;
  static deserializeBinaryFromReader(message: DeleteSurveyRequest, reader: jspb.BinaryReader): DeleteSurveyRequest;
}

export namespace DeleteSurveyRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetQuestionRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): GetQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetQuestionRequest): GetQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: GetQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetQuestionRequest;
  static deserializeBinaryFromReader(message: GetQuestionRequest, reader: jspb.BinaryReader): GetQuestionRequest;
}

export namespace GetQuestionRequest {
  export type AsObject = {
    guid: string,
  }
}

export class DeleteQuestionRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeleteQuestionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteQuestionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteQuestionRequest): DeleteQuestionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteQuestionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteQuestionRequest;
  static deserializeBinaryFromReader(message: DeleteQuestionRequest, reader: jspb.BinaryReader): DeleteQuestionRequest;
}

export namespace DeleteQuestionRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetAnswerOptionRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): GetAnswerOptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAnswerOptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAnswerOptionRequest): GetAnswerOptionRequest.AsObject;
  static serializeBinaryToWriter(message: GetAnswerOptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAnswerOptionRequest;
  static deserializeBinaryFromReader(message: GetAnswerOptionRequest, reader: jspb.BinaryReader): GetAnswerOptionRequest;
}

export namespace GetAnswerOptionRequest {
  export type AsObject = {
    guid: string,
  }
}

export class DeleteAnswerOptionRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeleteAnswerOptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAnswerOptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAnswerOptionRequest): DeleteAnswerOptionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAnswerOptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAnswerOptionRequest;
  static deserializeBinaryFromReader(message: DeleteAnswerOptionRequest, reader: jspb.BinaryReader): DeleteAnswerOptionRequest;
}

export namespace DeleteAnswerOptionRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetPlaybackDataListRequest extends jspb.Message {
  getQuestionGuid(): string;
  setQuestionGuid(value: string): GetPlaybackDataListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlaybackDataListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlaybackDataListRequest): GetPlaybackDataListRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlaybackDataListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlaybackDataListRequest;
  static deserializeBinaryFromReader(message: GetPlaybackDataListRequest, reader: jspb.BinaryReader): GetPlaybackDataListRequest;
}

export namespace GetPlaybackDataListRequest {
  export type AsObject = {
    questionGuid: string,
  }
}

export class GetSurveyQuestionDestinationRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): GetSurveyQuestionDestinationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyQuestionDestinationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyQuestionDestinationRequest): GetSurveyQuestionDestinationRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyQuestionDestinationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyQuestionDestinationRequest;
  static deserializeBinaryFromReader(message: GetSurveyQuestionDestinationRequest, reader: jspb.BinaryReader): GetSurveyQuestionDestinationRequest;
}

export namespace GetSurveyQuestionDestinationRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetSurveyQuestionDestinationsRequest extends jspb.Message {
  getQuestionGuid(): string;
  setQuestionGuid(value: string): GetSurveyQuestionDestinationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyQuestionDestinationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyQuestionDestinationsRequest): GetSurveyQuestionDestinationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyQuestionDestinationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyQuestionDestinationsRequest;
  static deserializeBinaryFromReader(message: GetSurveyQuestionDestinationsRequest, reader: jspb.BinaryReader): GetSurveyQuestionDestinationsRequest;
}

export namespace GetSurveyQuestionDestinationsRequest {
  export type AsObject = {
    questionGuid: string,
  }
}

export class DeleteSurveyQuestionDestinationRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeleteSurveyQuestionDestinationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSurveyQuestionDestinationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSurveyQuestionDestinationRequest): DeleteSurveyQuestionDestinationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSurveyQuestionDestinationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSurveyQuestionDestinationRequest;
  static deserializeBinaryFromReader(message: DeleteSurveyQuestionDestinationRequest, reader: jspb.BinaryReader): DeleteSurveyQuestionDestinationRequest;
}

export namespace DeleteSurveyQuestionDestinationRequest {
  export type AsObject = {
    guid: string,
  }
}

export class GetVariableRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): GetVariableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariableRequest): GetVariableRequest.AsObject;
  static serializeBinaryToWriter(message: GetVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariableRequest;
  static deserializeBinaryFromReader(message: GetVariableRequest, reader: jspb.BinaryReader): GetVariableRequest;
}

export namespace GetVariableRequest {
  export type AsObject = {
    guid: string,
  }
}

export class DeleteVariableRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeleteVariableRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVariableRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVariableRequest): DeleteVariableRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVariableRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVariableRequest;
  static deserializeBinaryFromReader(message: DeleteVariableRequest, reader: jspb.BinaryReader): DeleteVariableRequest;
}

export namespace DeleteVariableRequest {
  export type AsObject = {
    guid: string,
  }
}

export class DeletePlaybackDataRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeletePlaybackDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlaybackDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlaybackDataRequest): DeletePlaybackDataRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePlaybackDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlaybackDataRequest;
  static deserializeBinaryFromReader(message: DeletePlaybackDataRequest, reader: jspb.BinaryReader): DeletePlaybackDataRequest;
}

export namespace DeletePlaybackDataRequest {
  export type AsObject = {
    guid: string,
  }
}

export class DeleteMediaRequest extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): DeleteMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMediaRequest): DeleteMediaRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMediaRequest;
  static deserializeBinaryFromReader(message: DeleteMediaRequest, reader: jspb.BinaryReader): DeleteMediaRequest;
}

export namespace DeleteMediaRequest {
  export type AsObject = {
    guid: string,
  }
}

export class CreateSurveyVersionRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): CreateSurveyVersionRequest;

  getName(): string;
  setName(value: string): CreateSurveyVersionRequest;

  getDescription(): string;
  setDescription(value: string): CreateSurveyVersionRequest;

  getPreSurveyText(): string;
  setPreSurveyText(value: string): CreateSurveyVersionRequest;

  getFirstQuestionGuid(): string;
  setFirstQuestionGuid(value: string): CreateSurveyVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSurveyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSurveyVersionRequest): CreateSurveyVersionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSurveyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSurveyVersionRequest;
  static deserializeBinaryFromReader(message: CreateSurveyVersionRequest, reader: jspb.BinaryReader): CreateSurveyVersionRequest;
}

export namespace CreateSurveyVersionRequest {
  export type AsObject = {
    surveyGuid: string,
    name: string,
    description: string,
    preSurveyText: string,
    firstQuestionGuid: string,
  }
}

export class DeleteSurveyVersionRequest extends jspb.Message {
  getVersionGuid(): string;
  setVersionGuid(value: string): DeleteSurveyVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSurveyVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSurveyVersionRequest): DeleteSurveyVersionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSurveyVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSurveyVersionRequest;
  static deserializeBinaryFromReader(message: DeleteSurveyVersionRequest, reader: jspb.BinaryReader): DeleteSurveyVersionRequest;
}

export namespace DeleteSurveyVersionRequest {
  export type AsObject = {
    versionGuid: string,
  }
}

export class GetSurveyDocumentsRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): GetSurveyDocumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyDocumentsRequest): GetSurveyDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyDocumentsRequest;
  static deserializeBinaryFromReader(message: GetSurveyDocumentsRequest, reader: jspb.BinaryReader): GetSurveyDocumentsRequest;
}

export namespace GetSurveyDocumentsRequest {
  export type AsObject = {
    surveyGuid: string,
  }
}

export class SurveyVariable extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): SurveyVariable;

  getVariableGuid(): string;
  setVariableGuid(value: string): SurveyVariable;

  getRequired(): boolean;
  setRequired(value: boolean): SurveyVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyVariable.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyVariable): SurveyVariable.AsObject;
  static serializeBinaryToWriter(message: SurveyVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyVariable;
  static deserializeBinaryFromReader(message: SurveyVariable, reader: jspb.BinaryReader): SurveyVariable;
}

export namespace SurveyVariable {
  export type AsObject = {
    surveyGuid: string,
    variableGuid: string,
    required: boolean,
  }
}

export class CreateInstanceRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): CreateInstanceRequest;

  getData(): pando_api_shared_pb.DataRecord | undefined;
  setData(value?: pando_api_shared_pb.DataRecord): CreateInstanceRequest;
  hasData(): boolean;
  clearData(): CreateInstanceRequest;

  getRecordGuid(): string;
  setRecordGuid(value: string): CreateInstanceRequest;

  getContactInfo(): pando_api_shared_pb.ContactInfo | undefined;
  setContactInfo(value?: pando_api_shared_pb.ContactInfo): CreateInstanceRequest;
  hasContactInfo(): boolean;
  clearContactInfo(): CreateInstanceRequest;

  getRespondentName(): string;
  setRespondentName(value: string): CreateInstanceRequest;

  getSendLink(): boolean;
  setSendLink(value: boolean): CreateInstanceRequest;

  getUserId(): string;
  setUserId(value: string): CreateInstanceRequest;

  getDataSourceCase(): CreateInstanceRequest.DataSourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstanceRequest): CreateInstanceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInstanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstanceRequest;
  static deserializeBinaryFromReader(message: CreateInstanceRequest, reader: jspb.BinaryReader): CreateInstanceRequest;
}

export namespace CreateInstanceRequest {
  export type AsObject = {
    surveyGuid: string,
    data?: pando_api_shared_pb.DataRecord.AsObject,
    recordGuid: string,
    contactInfo?: pando_api_shared_pb.ContactInfo.AsObject,
    respondentName: string,
    sendLink: boolean,
    userId: string,
  }

  export enum DataSourceCase { 
    DATA_SOURCE_NOT_SET = 0,
    DATA = 2,
    RECORD_GUID = 3,
  }
}

export class SurveyESignTemplate extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): SurveyESignTemplate;

  getTemplateGuid(): string;
  setTemplateGuid(value: string): SurveyESignTemplate;

  getIsRequired(): boolean;
  setIsRequired(value: boolean): SurveyESignTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyESignTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyESignTemplate): SurveyESignTemplate.AsObject;
  static serializeBinaryToWriter(message: SurveyESignTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyESignTemplate;
  static deserializeBinaryFromReader(message: SurveyESignTemplate, reader: jspb.BinaryReader): SurveyESignTemplate;
}

export namespace SurveyESignTemplate {
  export type AsObject = {
    surveyGuid: string,
    templateGuid: string,
    isRequired: boolean,
  }
}

export class SendInstanceLink extends jspb.Message {
  getInstanceGuid(): string;
  setInstanceGuid(value: string): SendInstanceLink;

  getContactType(): pando_api_shared_pb.ContactType;
  setContactType(value: pando_api_shared_pb.ContactType): SendInstanceLink;

  getContactInfo(): string;
  setContactInfo(value: string): SendInstanceLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendInstanceLink.AsObject;
  static toObject(includeInstance: boolean, msg: SendInstanceLink): SendInstanceLink.AsObject;
  static serializeBinaryToWriter(message: SendInstanceLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendInstanceLink;
  static deserializeBinaryFromReader(message: SendInstanceLink, reader: jspb.BinaryReader): SendInstanceLink;
}

export namespace SendInstanceLink {
  export type AsObject = {
    instanceGuid: string,
    contactType: pando_api_shared_pb.ContactType,
    contactInfo: string,
  }
}

export class SurveyInstanceESignSignatory extends jspb.Message {
  getInstanceGuid(): string;
  setInstanceGuid(value: string): SurveyInstanceESignSignatory;

  getSignatoryGuid(): string;
  setSignatoryGuid(value: string): SurveyInstanceESignSignatory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInstanceESignSignatory.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInstanceESignSignatory): SurveyInstanceESignSignatory.AsObject;
  static serializeBinaryToWriter(message: SurveyInstanceESignSignatory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInstanceESignSignatory;
  static deserializeBinaryFromReader(message: SurveyInstanceESignSignatory, reader: jspb.BinaryReader): SurveyInstanceESignSignatory;
}

export namespace SurveyInstanceESignSignatory {
  export type AsObject = {
    instanceGuid: string,
    signatoryGuid: string,
  }
}

export class GetVariableTemplateRequest extends jspb.Message {
  getSurveyGuid(): string;
  setSurveyGuid(value: string): GetVariableTemplateRequest;

  getVersionGuid(): string;
  setVersionGuid(value: string): GetVariableTemplateRequest;

  getDataFormat(): pando_api_shared_pb.FileType;
  setDataFormat(value: pando_api_shared_pb.FileType): GetVariableTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariableTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariableTemplateRequest): GetVariableTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: GetVariableTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariableTemplateRequest;
  static deserializeBinaryFromReader(message: GetVariableTemplateRequest, reader: jspb.BinaryReader): GetVariableTemplateRequest;
}

export namespace GetVariableTemplateRequest {
  export type AsObject = {
    surveyGuid: string,
    versionGuid: string,
    dataFormat: pando_api_shared_pb.FileType,
  }
}

export class GetVariableTemplateResponse extends jspb.Message {
  getData(): string;
  setData(value: string): GetVariableTemplateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVariableTemplateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVariableTemplateResponse): GetVariableTemplateResponse.AsObject;
  static serializeBinaryToWriter(message: GetVariableTemplateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVariableTemplateResponse;
  static deserializeBinaryFromReader(message: GetVariableTemplateResponse, reader: jspb.BinaryReader): GetVariableTemplateResponse;
}

export namespace GetVariableTemplateResponse {
  export type AsObject = {
    data: string,
  }
}

