import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pando_api_extensions_pb from '../../../../pando/api/extensions_pb';
import * as pando_api_shared_pb from '../../../../pando/api/shared_pb';
import * as pando_api_survey_v1_shared_pb from '../../../../pando/api/survey/v1/shared_pb';


export class GetInstancesReportRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetInstancesReportRequest;

  getOrganizationCode(): string;
  setOrganizationCode(value: string): GetInstancesReportRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetInstancesReportRequest;
  hasStart(): boolean;
  clearStart(): GetInstancesReportRequest;

  getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnd(value?: google_protobuf_timestamp_pb.Timestamp): GetInstancesReportRequest;
  hasEnd(): boolean;
  clearEnd(): GetInstancesReportRequest;

  getPage(): number;
  setPage(value: number): GetInstancesReportRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetInstancesReportRequest;

  getTargetCase(): GetInstancesReportRequest.TargetCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstancesReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstancesReportRequest): GetInstancesReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstancesReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstancesReportRequest;
  static deserializeBinaryFromReader(message: GetInstancesReportRequest, reader: jspb.BinaryReader): GetInstancesReportRequest;
}

export namespace GetInstancesReportRequest {
  export type AsObject = {
    userId: string,
    organizationCode: string,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    page: number,
    resultsPerPage: number,
  }

  export enum TargetCase { 
    TARGET_NOT_SET = 0,
    USER_ID = 1,
    ORGANIZATION_CODE = 2,
  }
}

export class GetSurveyInstanceStatusesRequest extends jspb.Message {
  getOrganizationCode(): string;
  setOrganizationCode(value: string): GetSurveyInstanceStatusesRequest;

  getIsChartDataIncluded(): boolean;
  setIsChartDataIncluded(value: boolean): GetSurveyInstanceStatusesRequest;

  getIsCompletedOnly(): boolean;
  setIsCompletedOnly(value: boolean): GetSurveyInstanceStatusesRequest;

  getPage(): number;
  setPage(value: number): GetSurveyInstanceStatusesRequest;

  getResultsPerPage(): number;
  setResultsPerPage(value: number): GetSurveyInstanceStatusesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyInstanceStatusesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyInstanceStatusesRequest): GetSurveyInstanceStatusesRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyInstanceStatusesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyInstanceStatusesRequest;
  static deserializeBinaryFromReader(message: GetSurveyInstanceStatusesRequest, reader: jspb.BinaryReader): GetSurveyInstanceStatusesRequest;
}

export namespace GetSurveyInstanceStatusesRequest {
  export type AsObject = {
    organizationCode: string,
    isChartDataIncluded: boolean,
    isCompletedOnly: boolean,
    page: number,
    resultsPerPage: number,
  }
}

export class SurveyInstancesStatusList extends jspb.Message {
  getSurveyInstanceStatusList(): Array<SurveyInstanceStatus>;
  setSurveyInstanceStatusList(value: Array<SurveyInstanceStatus>): SurveyInstancesStatusList;
  clearSurveyInstanceStatusList(): SurveyInstancesStatusList;
  addSurveyInstanceStatus(value?: SurveyInstanceStatus, index?: number): SurveyInstanceStatus;

  getChartDataList(): Array<ChartData>;
  setChartDataList(value: Array<ChartData>): SurveyInstancesStatusList;
  clearChartDataList(): SurveyInstancesStatusList;
  addChartData(value?: ChartData, index?: number): ChartData;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): SurveyInstancesStatusList;
  hasPagination(): boolean;
  clearPagination(): SurveyInstancesStatusList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInstancesStatusList.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInstancesStatusList): SurveyInstancesStatusList.AsObject;
  static serializeBinaryToWriter(message: SurveyInstancesStatusList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInstancesStatusList;
  static deserializeBinaryFromReader(message: SurveyInstancesStatusList, reader: jspb.BinaryReader): SurveyInstancesStatusList;
}

export namespace SurveyInstancesStatusList {
  export type AsObject = {
    surveyInstanceStatusList: Array<SurveyInstanceStatus.AsObject>,
    chartDataList: Array<ChartData.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class SurveyInstanceStatus extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): SurveyInstanceStatus;

  getOrganizationName(): string;
  setOrganizationName(value: string): SurveyInstanceStatus;

  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): SurveyInstanceStatus;
  hasDateCreated(): boolean;
  clearDateCreated(): SurveyInstanceStatus;

  getContactInfo(): string;
  setContactInfo(value: string): SurveyInstanceStatus;

  getRespondentName(): string;
  setRespondentName(value: string): SurveyInstanceStatus;

  getDateComplete(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateComplete(value?: google_protobuf_timestamp_pb.Timestamp): SurveyInstanceStatus;
  hasDateComplete(): boolean;
  clearDateComplete(): SurveyInstanceStatus;

  getName(): string;
  setName(value: string): SurveyInstanceStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInstanceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInstanceStatus): SurveyInstanceStatus.AsObject;
  static serializeBinaryToWriter(message: SurveyInstanceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInstanceStatus;
  static deserializeBinaryFromReader(message: SurveyInstanceStatus, reader: jspb.BinaryReader): SurveyInstanceStatus;
}

export namespace SurveyInstanceStatus {
  export type AsObject = {
    guid: string,
    organizationName: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contactInfo: string,
    respondentName: string,
    dateComplete?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
  }
}

export class ChartData extends jspb.Message {
  getSurveyName(): string;
  setSurveyName(value: string): ChartData;

  getCompleteCount(): number;
  setCompleteCount(value: number): ChartData;

  getIncompleteCount(): number;
  setIncompleteCount(value: number): ChartData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartData.AsObject;
  static toObject(includeInstance: boolean, msg: ChartData): ChartData.AsObject;
  static serializeBinaryToWriter(message: ChartData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartData;
  static deserializeBinaryFromReader(message: ChartData, reader: jspb.BinaryReader): ChartData;
}

export namespace ChartData {
  export type AsObject = {
    surveyName: string,
    completeCount: number,
    incompleteCount: number,
  }
}

