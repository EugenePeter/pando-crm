/**
 * @fileoverview gRPC-Web generated client stub for pando.api.survey.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as pando_api_shared_pb from '../../../../pando/api/shared_pb';
import * as pando_api_survey_v1_shared_pb from '../../../../pando/api/survey/v1/shared_pb';
import * as pando_api_survey_v1_survey_pb from '../../../../pando/api/survey/v1/survey_pb';


export class SurveyServiceClient {
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

  methodInfoCreateAnswer = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/CreateAnswer',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.Answer,
    pando_api_survey_v1_shared_pb.Answer,
    (request: pando_api_survey_v1_shared_pb.Answer) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Answer.deserializeBinary
  );

  createAnswer(
    request: pando_api_survey_v1_shared_pb.Answer,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Answer>;

  createAnswer(
    request: pando_api_survey_v1_shared_pb.Answer,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Answer) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Answer>;

  createAnswer(
    request: pando_api_survey_v1_shared_pb.Answer,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Answer) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/CreateAnswer',
        request,
        metadata || {},
        this.methodInfoCreateAnswer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/CreateAnswer',
    request,
    metadata || {},
    this.methodInfoCreateAnswer);
  }

  methodInfoCreateAttempt = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/CreateAttempt',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.Attempt,
    pando_api_survey_v1_shared_pb.Attempt,
    (request: pando_api_survey_v1_shared_pb.Attempt) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
  );

  createAttempt(
    request: pando_api_survey_v1_shared_pb.Attempt,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Attempt>;

  createAttempt(
    request: pando_api_survey_v1_shared_pb.Attempt,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Attempt) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Attempt>;

  createAttempt(
    request: pando_api_survey_v1_shared_pb.Attempt,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Attempt) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/CreateAttempt',
        request,
        metadata || {},
        this.methodInfoCreateAttempt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/CreateAttempt',
    request,
    metadata || {},
    this.methodInfoCreateAttempt);
  }

  methodInfoGetInstance = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetInstance',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetInstanceRequest,
    pando_api_survey_v1_shared_pb.Instance,
    (request: pando_api_survey_v1_survey_pb.GetInstanceRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Instance.deserializeBinary
  );

  getInstance(
    request: pando_api_survey_v1_survey_pb.GetInstanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Instance>;

  getInstance(
    request: pando_api_survey_v1_survey_pb.GetInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Instance) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Instance>;

  getInstance(
    request: pando_api_survey_v1_survey_pb.GetInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Instance) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetInstance',
        request,
        metadata || {},
        this.methodInfoGetInstance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetInstance',
    request,
    metadata || {},
    this.methodInfoGetInstance);
  }

  methodInfoGetInstances = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetInstances',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetInstancesRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_survey_pb.GetInstancesRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getInstances(
    request: pando_api_survey_v1_survey_pb.GetInstancesRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getInstances(
    request: pando_api_survey_v1_survey_pb.GetInstancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getInstances(
    request: pando_api_survey_v1_survey_pb.GetInstancesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetInstances',
        request,
        metadata || {},
        this.methodInfoGetInstances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetInstances',
    request,
    metadata || {},
    this.methodInfoGetInstances);
  }

  methodInfoGetAttempt = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetAttempt',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetAttemptRequest,
    pando_api_survey_v1_shared_pb.Attempt,
    (request: pando_api_survey_v1_survey_pb.GetAttemptRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
  );

  getAttempt(
    request: pando_api_survey_v1_survey_pb.GetAttemptRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Attempt>;

  getAttempt(
    request: pando_api_survey_v1_survey_pb.GetAttemptRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Attempt) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Attempt>;

  getAttempt(
    request: pando_api_survey_v1_survey_pb.GetAttemptRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Attempt) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetAttempt',
        request,
        metadata || {},
        this.methodInfoGetAttempt,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttempt',
    request,
    metadata || {},
    this.methodInfoGetAttempt);
  }

  methodInfoGetAttempts = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetAttempts',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetAttemptsRequest,
    pando_api_survey_v1_shared_pb.AttemptList,
    (request: pando_api_survey_v1_survey_pb.GetAttemptsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.AttemptList.deserializeBinary
  );

  getAttempts(
    request: pando_api_survey_v1_survey_pb.GetAttemptsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.AttemptList>;

  getAttempts(
    request: pando_api_survey_v1_survey_pb.GetAttemptsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AttemptList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.AttemptList>;

  getAttempts(
    request: pando_api_survey_v1_survey_pb.GetAttemptsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AttemptList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetAttempts',
        request,
        metadata || {},
        this.methodInfoGetAttempts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttempts',
    request,
    metadata || {},
    this.methodInfoGetAttempts);
  }

  methodInfoGetSurveyMedia = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetSurveyMedia',
    grpcWeb.MethodType.SERVER_STREAMING,
    pando_api_survey_v1_survey_pb.GetMediaRequest,
    pando_api_shared_pb.FileChunk,
    (request: pando_api_survey_v1_survey_pb.GetMediaRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.FileChunk.deserializeBinary
  );

  getSurveyMedia(
    request: pando_api_survey_v1_survey_pb.GetMediaRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pando.api.survey.v1.SurveyService/GetSurveyMedia',
      request,
      metadata || {},
      this.methodInfoGetSurveyMedia);
  }

  methodInfoGetAnswerMedia = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetAnswerMedia',
    grpcWeb.MethodType.SERVER_STREAMING,
    pando_api_survey_v1_survey_pb.GetMediaRequest,
    pando_api_shared_pb.FileChunk,
    (request: pando_api_survey_v1_survey_pb.GetMediaRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.FileChunk.deserializeBinary
  );

  getAnswerMedia(
    request: pando_api_survey_v1_survey_pb.GetMediaRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pando.api.survey.v1.SurveyService/GetAnswerMedia',
      request,
      metadata || {},
      this.methodInfoGetAnswerMedia);
  }

  methodInfoGetNextQuestion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetNextQuestion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetNextQuestionRequest,
    pando_api_survey_v1_survey_pb.GetNextQuestionResponse,
    (request: pando_api_survey_v1_survey_pb.GetNextQuestionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_survey_pb.GetNextQuestionResponse.deserializeBinary
  );

  getNextQuestion(
    request: pando_api_survey_v1_survey_pb.GetNextQuestionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_survey_pb.GetNextQuestionResponse>;

  getNextQuestion(
    request: pando_api_survey_v1_survey_pb.GetNextQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.GetNextQuestionResponse) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_survey_pb.GetNextQuestionResponse>;

  getNextQuestion(
    request: pando_api_survey_v1_survey_pb.GetNextQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.GetNextQuestionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetNextQuestion',
        request,
        metadata || {},
        this.methodInfoGetNextQuestion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetNextQuestion',
    request,
    metadata || {},
    this.methodInfoGetNextQuestion);
  }

  methodInfoSaveAnswer = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/SaveAnswer',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.SaveAnswerRequest,
    pando_api_survey_v1_shared_pb.Answer,
    (request: pando_api_survey_v1_survey_pb.SaveAnswerRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Answer.deserializeBinary
  );

  saveAnswer(
    request: pando_api_survey_v1_survey_pb.SaveAnswerRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Answer>;

  saveAnswer(
    request: pando_api_survey_v1_survey_pb.SaveAnswerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Answer) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Answer>;

  saveAnswer(
    request: pando_api_survey_v1_survey_pb.SaveAnswerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Answer) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/SaveAnswer',
        request,
        metadata || {},
        this.methodInfoSaveAnswer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/SaveAnswer',
    request,
    metadata || {},
    this.methodInfoSaveAnswer);
  }

  methodInfoExecCompleteSurvey = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/ExecCompleteSurvey',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.CompleteSurveyRequest,
    pando_api_survey_v1_shared_pb.Attempt,
    (request: pando_api_survey_v1_survey_pb.CompleteSurveyRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Attempt.deserializeBinary
  );

  execCompleteSurvey(
    request: pando_api_survey_v1_survey_pb.CompleteSurveyRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Attempt>;

  execCompleteSurvey(
    request: pando_api_survey_v1_survey_pb.CompleteSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Attempt) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Attempt>;

  execCompleteSurvey(
    request: pando_api_survey_v1_survey_pb.CompleteSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Attempt) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/ExecCompleteSurvey',
        request,
        metadata || {},
        this.methodInfoExecCompleteSurvey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecCompleteSurvey',
    request,
    metadata || {},
    this.methodInfoExecCompleteSurvey);
  }

  methodInfoExecFacialRecognition = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/ExecFacialRecognition',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.FacialRecognitionRequest,
    pando_api_survey_v1_survey_pb.FacialRecognitionResponse,
    (request: pando_api_survey_v1_survey_pb.FacialRecognitionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_survey_pb.FacialRecognitionResponse.deserializeBinary
  );

  execFacialRecognition(
    request: pando_api_survey_v1_survey_pb.FacialRecognitionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_survey_pb.FacialRecognitionResponse>;

  execFacialRecognition(
    request: pando_api_survey_v1_survey_pb.FacialRecognitionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.FacialRecognitionResponse) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_survey_pb.FacialRecognitionResponse>;

  execFacialRecognition(
    request: pando_api_survey_v1_survey_pb.FacialRecognitionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.FacialRecognitionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/ExecFacialRecognition',
        request,
        metadata || {},
        this.methodInfoExecFacialRecognition,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecFacialRecognition',
    request,
    metadata || {},
    this.methodInfoExecFacialRecognition);
  }

  methodInfoExecCompleteQuestion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/ExecCompleteQuestion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.ExecCompleteQuestionRequest,
    pando_api_survey_v1_survey_pb.ExecCompleteQuestionResponse,
    (request: pando_api_survey_v1_survey_pb.ExecCompleteQuestionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_survey_pb.ExecCompleteQuestionResponse.deserializeBinary
  );

  execCompleteQuestion(
    request: pando_api_survey_v1_survey_pb.ExecCompleteQuestionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_survey_pb.ExecCompleteQuestionResponse>;

  execCompleteQuestion(
    request: pando_api_survey_v1_survey_pb.ExecCompleteQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.ExecCompleteQuestionResponse) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_survey_pb.ExecCompleteQuestionResponse>;

  execCompleteQuestion(
    request: pando_api_survey_v1_survey_pb.ExecCompleteQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.ExecCompleteQuestionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/ExecCompleteQuestion',
        request,
        metadata || {},
        this.methodInfoExecCompleteQuestion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecCompleteQuestion',
    request,
    metadata || {},
    this.methodInfoExecCompleteQuestion);
  }

  methodInfoExecAddInstanceOwner = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/ExecAddInstanceOwner',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.ExecAddInstanceOwnerRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_survey_pb.ExecAddInstanceOwnerRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  execAddInstanceOwner(
    request: pando_api_survey_v1_survey_pb.ExecAddInstanceOwnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  execAddInstanceOwner(
    request: pando_api_survey_v1_survey_pb.ExecAddInstanceOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  execAddInstanceOwner(
    request: pando_api_survey_v1_survey_pb.ExecAddInstanceOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/ExecAddInstanceOwner',
        request,
        metadata || {},
        this.methodInfoExecAddInstanceOwner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecAddInstanceOwner',
    request,
    metadata || {},
    this.methodInfoExecAddInstanceOwner);
  }

  methodInfoExecRemoveInstanceOwner = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/ExecRemoveInstanceOwner',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.ExecRemoveInstanceOwnerRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_survey_pb.ExecRemoveInstanceOwnerRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  execRemoveInstanceOwner(
    request: pando_api_survey_v1_survey_pb.ExecRemoveInstanceOwnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  execRemoveInstanceOwner(
    request: pando_api_survey_v1_survey_pb.ExecRemoveInstanceOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  execRemoveInstanceOwner(
    request: pando_api_survey_v1_survey_pb.ExecRemoveInstanceOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/ExecRemoveInstanceOwner',
        request,
        metadata || {},
        this.methodInfoExecRemoveInstanceOwner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/ExecRemoveInstanceOwner',
    request,
    metadata || {},
    this.methodInfoExecRemoveInstanceOwner);
  }

  methodInfoGetIncompleteSurveyInstances = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetIncompleteSurveyInstances',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getIncompleteSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getIncompleteSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getIncompleteSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetIncompleteSurveyInstances',
        request,
        metadata || {},
        this.methodInfoGetIncompleteSurveyInstances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetIncompleteSurveyInstances',
    request,
    metadata || {},
    this.methodInfoGetIncompleteSurveyInstances);
  }

  methodInfoGetCompletedSurveyInstances = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetCompletedSurveyInstances',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getCompletedSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getCompletedSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getCompletedSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetCompletedSurveyInstances',
        request,
        metadata || {},
        this.methodInfoGetCompletedSurveyInstances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetCompletedSurveyInstances',
    request,
    metadata || {},
    this.methodInfoGetCompletedSurveyInstances);
  }

  methodInfoGetRecentlyCompletedSurveyInstances = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetRecentlyCompletedSurveyInstances',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getRecentlyCompletedSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getRecentlyCompletedSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getRecentlyCompletedSurveyInstances(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetRecentlyCompletedSurveyInstances',
        request,
        metadata || {},
        this.methodInfoGetRecentlyCompletedSurveyInstances,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetRecentlyCompletedSurveyInstances',
    request,
    metadata || {},
    this.methodInfoGetRecentlyCompletedSurveyInstances);
  }

  methodInfoGetSurveyInstancesToDo = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetSurveyInstancesToDo',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    pando_api_survey_v1_shared_pb.InstanceList,
    (request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.InstanceList.deserializeBinary
  );

  getSurveyInstancesToDo(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.InstanceList>;

  getSurveyInstancesToDo(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.InstanceList>;

  getSurveyInstancesToDo(
    request: pando_api_survey_v1_survey_pb.GetSurveyInstanceListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.InstanceList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetSurveyInstancesToDo',
        request,
        metadata || {},
        this.methodInfoGetSurveyInstancesToDo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetSurveyInstancesToDo',
    request,
    metadata || {},
    this.methodInfoGetSurveyInstancesToDo);
  }

  methodInfoGetAttemptQuestions = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetAttemptQuestions',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetAttemptQuestionsRequest,
    pando_api_survey_v1_survey_pb.GetAttemptQuestionsResponse,
    (request: pando_api_survey_v1_survey_pb.GetAttemptQuestionsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_survey_pb.GetAttemptQuestionsResponse.deserializeBinary
  );

  getAttemptQuestions(
    request: pando_api_survey_v1_survey_pb.GetAttemptQuestionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_survey_pb.GetAttemptQuestionsResponse>;

  getAttemptQuestions(
    request: pando_api_survey_v1_survey_pb.GetAttemptQuestionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.GetAttemptQuestionsResponse) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_survey_pb.GetAttemptQuestionsResponse>;

  getAttemptQuestions(
    request: pando_api_survey_v1_survey_pb.GetAttemptQuestionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.GetAttemptQuestionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetAttemptQuestions',
        request,
        metadata || {},
        this.methodInfoGetAttemptQuestions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetAttemptQuestions',
    request,
    metadata || {},
    this.methodInfoGetAttemptQuestions);
  }

  methodInfoGetQuestionWithAnswerTimestamps = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyService/GetQuestionWithAnswerTimestamps',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsRequest,
    pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsResponse,
    (request: pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsResponse.deserializeBinary
  );

  getQuestionWithAnswerTimestamps(
    request: pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsResponse>;

  getQuestionWithAnswerTimestamps(
    request: pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsResponse) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsResponse>;

  getQuestionWithAnswerTimestamps(
    request: pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_survey_pb.GetQuestionWithAnswerTimestampsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyService/GetQuestionWithAnswerTimestamps',
        request,
        metadata || {},
        this.methodInfoGetQuestionWithAnswerTimestamps,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyService/GetQuestionWithAnswerTimestamps',
    request,
    metadata || {},
    this.methodInfoGetQuestionWithAnswerTimestamps);
  }

}

