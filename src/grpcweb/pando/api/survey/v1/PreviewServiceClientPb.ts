/**
 * @fileoverview gRPC-Web generated client stub for pando.api.survey.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as pando_api_survey_v1_preview_pb from '../../../../pando/api/survey/v1/preview_pb';


export class PreviewServiceClient {
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

  methodInfoGetNextQuestionPreview = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.PreviewService/GetNextQuestionPreview',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_preview_pb.GetNextQuestionPreviewRequest,
    pando_api_survey_v1_preview_pb.GetNextQuestionPreviewResponse,
    (request: pando_api_survey_v1_preview_pb.GetNextQuestionPreviewRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_preview_pb.GetNextQuestionPreviewResponse.deserializeBinary
  );

  getNextQuestionPreview(
    request: pando_api_survey_v1_preview_pb.GetNextQuestionPreviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_preview_pb.GetNextQuestionPreviewResponse>;

  getNextQuestionPreview(
    request: pando_api_survey_v1_preview_pb.GetNextQuestionPreviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_preview_pb.GetNextQuestionPreviewResponse) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_preview_pb.GetNextQuestionPreviewResponse>;

  getNextQuestionPreview(
    request: pando_api_survey_v1_preview_pb.GetNextQuestionPreviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_preview_pb.GetNextQuestionPreviewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.PreviewService/GetNextQuestionPreview',
        request,
        metadata || {},
        this.methodInfoGetNextQuestionPreview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.PreviewService/GetNextQuestionPreview',
    request,
    metadata || {},
    this.methodInfoGetNextQuestionPreview);
  }

}

