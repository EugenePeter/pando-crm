/**
 * @fileoverview gRPC-Web generated client stub for pando.api.survey.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as pando_api_survey_v1_reports_pb from '../../../../pando/api/survey/v1/reports_pb';
import * as pando_api_survey_v1_shared_pb from '../../../../pando/api/survey/v1/shared_pb';


export class SurveyReportServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetIncompleteSurveyInstances = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyReportService/GetIncompleteSurveyInstances',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getIncompleteSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getIncompleteSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getIncompleteSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyReportService/GetIncompleteSurveyInstances',
        request,
        metadata || {},
        this.methodInfoGetIncompleteSurveyInstances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetIncompleteSurveyInstances',
    request,
    metadata || {},
    this.methodInfoGetIncompleteSurveyInstances);
  }

  methodInfoGetCompletedSurveyInstances = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyReportService/GetCompletedSurveyInstances',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getCompletedSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getCompletedSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getCompletedSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyReportService/GetCompletedSurveyInstances',
        request,
        metadata || {},
        this.methodInfoGetCompletedSurveyInstances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetCompletedSurveyInstances',
    request,
    metadata || {},
    this.methodInfoGetCompletedSurveyInstances);
  }

  methodInfoGetRecentlyCompletedSurveyInstances = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyReportService/GetRecentlyCompletedSurveyInstances',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getRecentlyCompletedSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getRecentlyCompletedSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getRecentlyCompletedSurveyInstances(
    request: pando_api_survey_v1_reports_pb.GetInstancesReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyReportService/GetRecentlyCompletedSurveyInstances',
        request,
        metadata || {},
        this.methodInfoGetRecentlyCompletedSurveyInstances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetRecentlyCompletedSurveyInstances',
    request,
    metadata || {},
    this.methodInfoGetRecentlyCompletedSurveyInstances);
  }

  methodInfoGetSurveyInstanceStatuses = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyReportService/GetSurveyInstanceStatuses',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_reports_pb.GetSurveyInstanceStatusesRequest,
    pando_api_survey_v1_reports_pb.SurveyInstancesStatusList,
    (request: pando_api_survey_v1_reports_pb.GetSurveyInstanceStatusesRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_reports_pb.SurveyInstancesStatusList.deserializeBinary
  );

  getSurveyInstanceStatuses(
    request: pando_api_survey_v1_reports_pb.GetSurveyInstanceStatusesRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_reports_pb.SurveyInstancesStatusList>;

  getSurveyInstanceStatuses(
    request: pando_api_survey_v1_reports_pb.GetSurveyInstanceStatusesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_reports_pb.SurveyInstancesStatusList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_reports_pb.SurveyInstancesStatusList>;

  getSurveyInstanceStatuses(
    request: pando_api_survey_v1_reports_pb.GetSurveyInstanceStatusesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_reports_pb.SurveyInstancesStatusList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyReportService/GetSurveyInstanceStatuses',
        request,
        metadata || {},
        this.methodInfoGetSurveyInstanceStatuses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyReportService/GetSurveyInstanceStatuses',
    request,
    metadata || {},
    this.methodInfoGetSurveyInstanceStatuses);
  }

}

