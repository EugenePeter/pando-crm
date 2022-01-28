import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pando_api_extensions_pb from '../../../../pando/api/extensions_pb';
import * as pando_api_shared_pb from '../../../../pando/api/shared_pb';
import * as pando_api_survey_v1_shared_pb from '../../../../pando/api/survey/v1/shared_pb';


export class GetNextQuestionPreviewRequest extends jspb.Message {
  getQuestionAnswersMap(): jspb.Map<string, string>;
  clearQuestionAnswersMap(): GetNextQuestionPreviewRequest;

  getQuestionGuid(): string;
  setQuestionGuid(value: string): GetNextQuestionPreviewRequest;

  getSurveyVersionGuid(): string;
  setSurveyVersionGuid(value: string): GetNextQuestionPreviewRequest;

  getDataRecord(): pando_api_shared_pb.DataRecord | undefined;
  setDataRecord(value?: pando_api_shared_pb.DataRecord): GetNextQuestionPreviewRequest;
  hasDataRecord(): boolean;
  clearDataRecord(): GetNextQuestionPreviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextQuestionPreviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextQuestionPreviewRequest): GetNextQuestionPreviewRequest.AsObject;
  static serializeBinaryToWriter(message: GetNextQuestionPreviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextQuestionPreviewRequest;
  static deserializeBinaryFromReader(message: GetNextQuestionPreviewRequest, reader: jspb.BinaryReader): GetNextQuestionPreviewRequest;
}

export namespace GetNextQuestionPreviewRequest {
  export type AsObject = {
    questionAnswersMap: Array<[string, string]>,
    questionGuid: string,
    surveyVersionGuid: string,
    dataRecord?: pando_api_shared_pb.DataRecord.AsObject,
  }
}

export class GetNextQuestionPreviewResponse extends jspb.Message {
  getQuestionGuid(): string;
  setQuestionGuid(value: string): GetNextQuestionPreviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextQuestionPreviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextQuestionPreviewResponse): GetNextQuestionPreviewResponse.AsObject;
  static serializeBinaryToWriter(message: GetNextQuestionPreviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextQuestionPreviewResponse;
  static deserializeBinaryFromReader(message: GetNextQuestionPreviewResponse, reader: jspb.BinaryReader): GetNextQuestionPreviewResponse;
}

export namespace GetNextQuestionPreviewResponse {
  export type AsObject = {
    questionGuid: string,
  }
}

