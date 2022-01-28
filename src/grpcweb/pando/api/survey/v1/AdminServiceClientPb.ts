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
import * as pando_api_survey_v1_admin_pb from '../../../../pando/api/survey/v1/admin_pb';


export class SurveyAdminServiceClient {
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

  methodInfoCreateSurvey = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateSurvey',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.Survey,
    pando_api_survey_v1_shared_pb.Survey,
    (request: pando_api_survey_v1_shared_pb.Survey) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Survey.deserializeBinary
  );

  createSurvey(
    request: pando_api_survey_v1_shared_pb.Survey,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Survey>;

  createSurvey(
    request: pando_api_survey_v1_shared_pb.Survey,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Survey>;

  createSurvey(
    request: pando_api_survey_v1_shared_pb.Survey,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateSurvey',
        request,
        metadata || {},
        this.methodInfoCreateSurvey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurvey',
    request,
    metadata || {},
    this.methodInfoCreateSurvey);
  }

  methodInfoCreateQuestion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateQuestion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.Question,
    pando_api_survey_v1_shared_pb.Question,
    (request: pando_api_survey_v1_shared_pb.Question) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Question.deserializeBinary
  );

  createQuestion(
    request: pando_api_survey_v1_shared_pb.Question,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Question>;

  createQuestion(
    request: pando_api_survey_v1_shared_pb.Question,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Question) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Question>;

  createQuestion(
    request: pando_api_survey_v1_shared_pb.Question,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Question) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateQuestion',
        request,
        metadata || {},
        this.methodInfoCreateQuestion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateQuestion',
    request,
    metadata || {},
    this.methodInfoCreateQuestion);
  }

  methodInfoCreatePlaybackData = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreatePlaybackData',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.PlaybackData,
    pando_api_survey_v1_shared_pb.PlaybackData,
    (request: pando_api_survey_v1_shared_pb.PlaybackData) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinary
  );

  createPlaybackData(
    request: pando_api_survey_v1_shared_pb.PlaybackData,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.PlaybackData>;

  createPlaybackData(
    request: pando_api_survey_v1_shared_pb.PlaybackData,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.PlaybackData) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.PlaybackData>;

  createPlaybackData(
    request: pando_api_survey_v1_shared_pb.PlaybackData,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.PlaybackData) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreatePlaybackData',
        request,
        metadata || {},
        this.methodInfoCreatePlaybackData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreatePlaybackData',
    request,
    metadata || {},
    this.methodInfoCreatePlaybackData);
  }

  methodInfoCreateSurveyQuestionDestination = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateSurveyQuestionDestination',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
    pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
    (request: pando_api_survey_v1_shared_pb.SurveyQuestionDestination) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
  );

  createSurveyQuestionDestination(
    request: pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyQuestionDestination>;

  createSurveyQuestionDestination(
    request: pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestination) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyQuestionDestination>;

  createSurveyQuestionDestination(
    request: pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestination) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateSurveyQuestionDestination',
        request,
        metadata || {},
        this.methodInfoCreateSurveyQuestionDestination,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyQuestionDestination',
    request,
    metadata || {},
    this.methodInfoCreateSurveyQuestionDestination);
  }

  methodInfoCreateSurveyVariable = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVariable',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.SurveyVariable,
    pando_api_survey_v1_admin_pb.SurveyVariable,
    (request: pando_api_survey_v1_admin_pb.SurveyVariable) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_admin_pb.SurveyVariable.deserializeBinary
  );

  createSurveyVariable(
    request: pando_api_survey_v1_admin_pb.SurveyVariable,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_admin_pb.SurveyVariable>;

  createSurveyVariable(
    request: pando_api_survey_v1_admin_pb.SurveyVariable,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SurveyVariable) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_admin_pb.SurveyVariable>;

  createSurveyVariable(
    request: pando_api_survey_v1_admin_pb.SurveyVariable,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SurveyVariable) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVariable',
        request,
        metadata || {},
        this.methodInfoCreateSurveyVariable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVariable',
    request,
    metadata || {},
    this.methodInfoCreateSurveyVariable);
  }

  methodInfoCreateVariable = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateVariable',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.Variable,
    pando_api_survey_v1_shared_pb.Variable,
    (request: pando_api_survey_v1_shared_pb.Variable) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Variable.deserializeBinary
  );

  createVariable(
    request: pando_api_survey_v1_shared_pb.Variable,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Variable>;

  createVariable(
    request: pando_api_survey_v1_shared_pb.Variable,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Variable) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Variable>;

  createVariable(
    request: pando_api_survey_v1_shared_pb.Variable,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Variable) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateVariable',
        request,
        metadata || {},
        this.methodInfoCreateVariable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateVariable',
    request,
    metadata || {},
    this.methodInfoCreateVariable);
  }

  methodInfoCreateVariables = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateVariables',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.CreateVariablesRequest,
    pando_api_survey_v1_shared_pb.VariableList,
    (request: pando_api_survey_v1_admin_pb.CreateVariablesRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
  );

  createVariables(
    request: pando_api_survey_v1_admin_pb.CreateVariablesRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.VariableList>;

  createVariables(
    request: pando_api_survey_v1_admin_pb.CreateVariablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.VariableList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.VariableList>;

  createVariables(
    request: pando_api_survey_v1_admin_pb.CreateVariablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.VariableList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateVariables',
        request,
        metadata || {},
        this.methodInfoCreateVariables,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateVariables',
    request,
    metadata || {},
    this.methodInfoCreateVariables);
  }

  methodInfoCreateInstance = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateInstance',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.CreateInstanceRequest,
    pando_api_survey_v1_shared_pb.Instance,
    (request: pando_api_survey_v1_admin_pb.CreateInstanceRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Instance.deserializeBinary
  );

  createInstance(
    request: pando_api_survey_v1_admin_pb.CreateInstanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Instance>;

  createInstance(
    request: pando_api_survey_v1_admin_pb.CreateInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Instance) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Instance>;

  createInstance(
    request: pando_api_survey_v1_admin_pb.CreateInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Instance) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateInstance',
        request,
        metadata || {},
        this.methodInfoCreateInstance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateInstance',
    request,
    metadata || {},
    this.methodInfoCreateInstance);
  }

  methodInfoCreateAnswerOption = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateAnswerOption',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_shared_pb.AnswerOption,
    pando_api_survey_v1_shared_pb.AnswerOption,
    (request: pando_api_survey_v1_shared_pb.AnswerOption) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
  );

  createAnswerOption(
    request: pando_api_survey_v1_shared_pb.AnswerOption,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.AnswerOption>;

  createAnswerOption(
    request: pando_api_survey_v1_shared_pb.AnswerOption,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOption) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.AnswerOption>;

  createAnswerOption(
    request: pando_api_survey_v1_shared_pb.AnswerOption,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOption) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateAnswerOption',
        request,
        metadata || {},
        this.methodInfoCreateAnswerOption,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateAnswerOption',
    request,
    metadata || {},
    this.methodInfoCreateAnswerOption);
  }

  methodInfoCreateSurveyVersion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVersion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.CreateSurveyVersionRequest,
    pando_api_survey_v1_shared_pb.Survey,
    (request: pando_api_survey_v1_admin_pb.CreateSurveyVersionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Survey.deserializeBinary
  );

  createSurveyVersion(
    request: pando_api_survey_v1_admin_pb.CreateSurveyVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Survey>;

  createSurveyVersion(
    request: pando_api_survey_v1_admin_pb.CreateSurveyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Survey>;

  createSurveyVersion(
    request: pando_api_survey_v1_admin_pb.CreateSurveyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVersion',
        request,
        metadata || {},
        this.methodInfoCreateSurveyVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/CreateSurveyVersion',
    request,
    metadata || {},
    this.methodInfoCreateSurveyVersion);
  }

  methodInfoGetSurvey = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurvey',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveyRequest,
    pando_api_survey_v1_shared_pb.Survey,
    (request: pando_api_survey_v1_admin_pb.GetSurveyRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Survey.deserializeBinary
  );

  getSurvey(
    request: pando_api_survey_v1_admin_pb.GetSurveyRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Survey>;

  getSurvey(
    request: pando_api_survey_v1_admin_pb.GetSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Survey>;

  getSurvey(
    request: pando_api_survey_v1_admin_pb.GetSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurvey',
        request,
        metadata || {},
        this.methodInfoGetSurvey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurvey',
    request,
    metadata || {},
    this.methodInfoGetSurvey);
  }

  methodInfoGetSurveys = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurveys',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveysRequest,
    pando_api_survey_v1_shared_pb.SurveyDetailList,
    (request: pando_api_survey_v1_admin_pb.GetSurveysRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyDetailList.deserializeBinary
  );

  getSurveys(
    request: pando_api_survey_v1_admin_pb.GetSurveysRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyDetailList>;

  getSurveys(
    request: pando_api_survey_v1_admin_pb.GetSurveysRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyDetailList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyDetailList>;

  getSurveys(
    request: pando_api_survey_v1_admin_pb.GetSurveysRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyDetailList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurveys',
        request,
        metadata || {},
        this.methodInfoGetSurveys,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveys',
    request,
    metadata || {},
    this.methodInfoGetSurveys);
  }

  methodInfoGetQuestion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetQuestion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetQuestionRequest,
    pando_api_survey_v1_shared_pb.Question,
    (request: pando_api_survey_v1_admin_pb.GetQuestionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Question.deserializeBinary
  );

  getQuestion(
    request: pando_api_survey_v1_admin_pb.GetQuestionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Question>;

  getQuestion(
    request: pando_api_survey_v1_admin_pb.GetQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Question) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Question>;

  getQuestion(
    request: pando_api_survey_v1_admin_pb.GetQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Question) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetQuestion',
        request,
        metadata || {},
        this.methodInfoGetQuestion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetQuestion',
    request,
    metadata || {},
    this.methodInfoGetQuestion);
  }

  methodInfoGetQuestions = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetQuestions',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetQuestionsRequest,
    pando_api_survey_v1_shared_pb.SurveyQuestionList,
    (request: pando_api_survey_v1_admin_pb.GetQuestionsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyQuestionList.deserializeBinary
  );

  getQuestions(
    request: pando_api_survey_v1_admin_pb.GetQuestionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyQuestionList>;

  getQuestions(
    request: pando_api_survey_v1_admin_pb.GetQuestionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyQuestionList>;

  getQuestions(
    request: pando_api_survey_v1_admin_pb.GetQuestionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetQuestions',
        request,
        metadata || {},
        this.methodInfoGetQuestions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetQuestions',
    request,
    metadata || {},
    this.methodInfoGetQuestions);
  }

  methodInfoGetAnswerOption = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetAnswerOption',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetAnswerOptionRequest,
    pando_api_survey_v1_shared_pb.AnswerOption,
    (request: pando_api_survey_v1_admin_pb.GetAnswerOptionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
  );

  getAnswerOption(
    request: pando_api_survey_v1_admin_pb.GetAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.AnswerOption>;

  getAnswerOption(
    request: pando_api_survey_v1_admin_pb.GetAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOption) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.AnswerOption>;

  getAnswerOption(
    request: pando_api_survey_v1_admin_pb.GetAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOption) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetAnswerOption',
        request,
        metadata || {},
        this.methodInfoGetAnswerOption,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetAnswerOption',
    request,
    metadata || {},
    this.methodInfoGetAnswerOption);
  }

  methodInfoGetAnswerOptions = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetAnswerOptions',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetAnswerOptionsRequest,
    pando_api_survey_v1_shared_pb.AnswerOptionList,
    (request: pando_api_survey_v1_admin_pb.GetAnswerOptionsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.AnswerOptionList.deserializeBinary
  );

  getAnswerOptions(
    request: pando_api_survey_v1_admin_pb.GetAnswerOptionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.AnswerOptionList>;

  getAnswerOptions(
    request: pando_api_survey_v1_admin_pb.GetAnswerOptionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOptionList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.AnswerOptionList>;

  getAnswerOptions(
    request: pando_api_survey_v1_admin_pb.GetAnswerOptionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOptionList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetAnswerOptions',
        request,
        metadata || {},
        this.methodInfoGetAnswerOptions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetAnswerOptions',
    request,
    metadata || {},
    this.methodInfoGetAnswerOptions);
  }

  methodInfoGetPlaybackDataList = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetPlaybackDataList',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetPlaybackDataListRequest,
    pando_api_survey_v1_shared_pb.PlaybackDataList,
    (request: pando_api_survey_v1_admin_pb.GetPlaybackDataListRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.PlaybackDataList.deserializeBinary
  );

  getPlaybackDataList(
    request: pando_api_survey_v1_admin_pb.GetPlaybackDataListRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.PlaybackDataList>;

  getPlaybackDataList(
    request: pando_api_survey_v1_admin_pb.GetPlaybackDataListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.PlaybackDataList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.PlaybackDataList>;

  getPlaybackDataList(
    request: pando_api_survey_v1_admin_pb.GetPlaybackDataListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.PlaybackDataList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetPlaybackDataList',
        request,
        metadata || {},
        this.methodInfoGetPlaybackDataList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetPlaybackDataList',
    request,
    metadata || {},
    this.methodInfoGetPlaybackDataList);
  }

  methodInfoGetSurveyQuestionDestination = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestination',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationRequest,
    pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
    (request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
  );

  getSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyQuestionDestination>;

  getSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestination) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyQuestionDestination>;

  getSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestination) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestination',
        request,
        metadata || {},
        this.methodInfoGetSurveyQuestionDestination,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestination',
    request,
    metadata || {},
    this.methodInfoGetSurveyQuestionDestination);
  }

  methodInfoGetSurveyQuestionDestinations = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestinations',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationsRequest,
    pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList,
    (request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList.deserializeBinary
  );

  getSurveyQuestionDestinations(
    request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList>;

  getSurveyQuestionDestinations(
    request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList>;

  getSurveyQuestionDestinations(
    request: pando_api_survey_v1_admin_pb.GetSurveyQuestionDestinationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestinationList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestinations',
        request,
        metadata || {},
        this.methodInfoGetSurveyQuestionDestinations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyQuestionDestinations',
    request,
    metadata || {},
    this.methodInfoGetSurveyQuestionDestinations);
  }

  methodInfoGetVariable = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetVariable',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetVariableRequest,
    pando_api_survey_v1_shared_pb.Variable,
    (request: pando_api_survey_v1_admin_pb.GetVariableRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Variable.deserializeBinary
  );

  getVariable(
    request: pando_api_survey_v1_admin_pb.GetVariableRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Variable>;

  getVariable(
    request: pando_api_survey_v1_admin_pb.GetVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Variable) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Variable>;

  getVariable(
    request: pando_api_survey_v1_admin_pb.GetVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Variable) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetVariable',
        request,
        metadata || {},
        this.methodInfoGetVariable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariable',
    request,
    metadata || {},
    this.methodInfoGetVariable);
  }

  methodInfoGetVariables = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetVariables',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetVariablesRequest,
    pando_api_survey_v1_shared_pb.VariableList,
    (request: pando_api_survey_v1_admin_pb.GetVariablesRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
  );

  getVariables(
    request: pando_api_survey_v1_admin_pb.GetVariablesRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.VariableList>;

  getVariables(
    request: pando_api_survey_v1_admin_pb.GetVariablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.VariableList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.VariableList>;

  getVariables(
    request: pando_api_survey_v1_admin_pb.GetVariablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.VariableList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetVariables',
        request,
        metadata || {},
        this.methodInfoGetVariables,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariables',
    request,
    metadata || {},
    this.methodInfoGetVariables);
  }

  methodInfoGetSurveyVariables = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurveyVariables',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveyVariablesRequest,
    pando_api_survey_v1_shared_pb.VariableList,
    (request: pando_api_survey_v1_admin_pb.GetSurveyVariablesRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.VariableList.deserializeBinary
  );

  getSurveyVariables(
    request: pando_api_survey_v1_admin_pb.GetSurveyVariablesRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.VariableList>;

  getSurveyVariables(
    request: pando_api_survey_v1_admin_pb.GetSurveyVariablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.VariableList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.VariableList>;

  getSurveyVariables(
    request: pando_api_survey_v1_admin_pb.GetSurveyVariablesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.VariableList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurveyVariables',
        request,
        metadata || {},
        this.methodInfoGetSurveyVariables,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyVariables',
    request,
    metadata || {},
    this.methodInfoGetSurveyVariables);
  }

  methodInfoGetSurveyMediaList = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurveyMediaList',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveyMediaListRequest,
    pando_api_survey_v1_shared_pb.MediaList,
    (request: pando_api_survey_v1_admin_pb.GetSurveyMediaListRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.MediaList.deserializeBinary
  );

  getSurveyMediaList(
    request: pando_api_survey_v1_admin_pb.GetSurveyMediaListRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.MediaList>;

  getSurveyMediaList(
    request: pando_api_survey_v1_admin_pb.GetSurveyMediaListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.MediaList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.MediaList>;

  getSurveyMediaList(
    request: pando_api_survey_v1_admin_pb.GetSurveyMediaListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.MediaList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurveyMediaList',
        request,
        metadata || {},
        this.methodInfoGetSurveyMediaList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyMediaList',
    request,
    metadata || {},
    this.methodInfoGetSurveyMediaList);
  }

  methodInfoGetVariableMediaList = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetVariableMediaList',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetVariableMediaListRequest,
    pando_api_survey_v1_shared_pb.MediaList,
    (request: pando_api_survey_v1_admin_pb.GetVariableMediaListRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.MediaList.deserializeBinary
  );

  getVariableMediaList(
    request: pando_api_survey_v1_admin_pb.GetVariableMediaListRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.MediaList>;

  getVariableMediaList(
    request: pando_api_survey_v1_admin_pb.GetVariableMediaListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.MediaList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.MediaList>;

  getVariableMediaList(
    request: pando_api_survey_v1_admin_pb.GetVariableMediaListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.MediaList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetVariableMediaList',
        request,
        metadata || {},
        this.methodInfoGetVariableMediaList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariableMediaList',
    request,
    metadata || {},
    this.methodInfoGetVariableMediaList);
  }

  methodInfoGetSurveyVersions = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurveyVersions',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveyVersionsRequest,
    pando_api_survey_v1_shared_pb.SurveyList,
    (request: pando_api_survey_v1_admin_pb.GetSurveyVersionsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyList.deserializeBinary
  );

  getSurveyVersions(
    request: pando_api_survey_v1_admin_pb.GetSurveyVersionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyList>;

  getSurveyVersions(
    request: pando_api_survey_v1_admin_pb.GetSurveyVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyList>;

  getSurveyVersions(
    request: pando_api_survey_v1_admin_pb.GetSurveyVersionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurveyVersions',
        request,
        metadata || {},
        this.methodInfoGetSurveyVersions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyVersions',
    request,
    metadata || {},
    this.methodInfoGetSurveyVersions);
  }

  methodInfoGetSurveyDocuments = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetSurveyDocuments',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetSurveyDocumentsRequest,
    pando_api_survey_v1_shared_pb.SurveyDocumentList,
    (request: pando_api_survey_v1_admin_pb.GetSurveyDocumentsRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyDocumentList.deserializeBinary
  );

  getSurveyDocuments(
    request: pando_api_survey_v1_admin_pb.GetSurveyDocumentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyDocumentList>;

  getSurveyDocuments(
    request: pando_api_survey_v1_admin_pb.GetSurveyDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyDocumentList) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyDocumentList>;

  getSurveyDocuments(
    request: pando_api_survey_v1_admin_pb.GetSurveyDocumentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyDocumentList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetSurveyDocuments',
        request,
        metadata || {},
        this.methodInfoGetSurveyDocuments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetSurveyDocuments',
    request,
    metadata || {},
    this.methodInfoGetSurveyDocuments);
  }

  methodInfoGetVariableTemplate = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/GetVariableTemplate',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.GetVariableTemplateRequest,
    pando_api_survey_v1_admin_pb.GetVariableTemplateResponse,
    (request: pando_api_survey_v1_admin_pb.GetVariableTemplateRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_admin_pb.GetVariableTemplateResponse.deserializeBinary
  );

  getVariableTemplate(
    request: pando_api_survey_v1_admin_pb.GetVariableTemplateRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_admin_pb.GetVariableTemplateResponse>;

  getVariableTemplate(
    request: pando_api_survey_v1_admin_pb.GetVariableTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.GetVariableTemplateResponse) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_admin_pb.GetVariableTemplateResponse>;

  getVariableTemplate(
    request: pando_api_survey_v1_admin_pb.GetVariableTemplateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.GetVariableTemplateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/GetVariableTemplate',
        request,
        metadata || {},
        this.methodInfoGetVariableTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/GetVariableTemplate',
    request,
    metadata || {},
    this.methodInfoGetVariableTemplate);
  }

  methodInfoUpdateSurvey = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/UpdateSurvey',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.UpdateSurveyRequest,
    pando_api_survey_v1_shared_pb.Survey,
    (request: pando_api_survey_v1_admin_pb.UpdateSurveyRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Survey.deserializeBinary
  );

  updateSurvey(
    request: pando_api_survey_v1_admin_pb.UpdateSurveyRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Survey>;

  updateSurvey(
    request: pando_api_survey_v1_admin_pb.UpdateSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Survey>;

  updateSurvey(
    request: pando_api_survey_v1_admin_pb.UpdateSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Survey) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/UpdateSurvey',
        request,
        metadata || {},
        this.methodInfoUpdateSurvey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateSurvey',
    request,
    metadata || {},
    this.methodInfoUpdateSurvey);
  }

  methodInfoUpdateQuestion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/UpdateQuestion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.UpdateQuestionRequest,
    pando_api_survey_v1_shared_pb.Question,
    (request: pando_api_survey_v1_admin_pb.UpdateQuestionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Question.deserializeBinary
  );

  updateQuestion(
    request: pando_api_survey_v1_admin_pb.UpdateQuestionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Question>;

  updateQuestion(
    request: pando_api_survey_v1_admin_pb.UpdateQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Question) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Question>;

  updateQuestion(
    request: pando_api_survey_v1_admin_pb.UpdateQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Question) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/UpdateQuestion',
        request,
        metadata || {},
        this.methodInfoUpdateQuestion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateQuestion',
    request,
    metadata || {},
    this.methodInfoUpdateQuestion);
  }

  methodInfoUpdatePlaybackData = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/UpdatePlaybackData',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.UpdatePlaybackDataRequest,
    pando_api_survey_v1_shared_pb.PlaybackData,
    (request: pando_api_survey_v1_admin_pb.UpdatePlaybackDataRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinary
  );

  updatePlaybackData(
    request: pando_api_survey_v1_admin_pb.UpdatePlaybackDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.PlaybackData>;

  updatePlaybackData(
    request: pando_api_survey_v1_admin_pb.UpdatePlaybackDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.PlaybackData) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.PlaybackData>;

  updatePlaybackData(
    request: pando_api_survey_v1_admin_pb.UpdatePlaybackDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.PlaybackData) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/UpdatePlaybackData',
        request,
        metadata || {},
        this.methodInfoUpdatePlaybackData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdatePlaybackData',
    request,
    metadata || {},
    this.methodInfoUpdatePlaybackData);
  }

  methodInfoUpdateSurveyQuestionDestination = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/UpdateSurveyQuestionDestination',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.UpdateSurveyQuestionDestinationRequest,
    pando_api_survey_v1_shared_pb.SurveyQuestionDestination,
    (request: pando_api_survey_v1_admin_pb.UpdateSurveyQuestionDestinationRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinary
  );

  updateSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.UpdateSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.SurveyQuestionDestination>;

  updateSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.UpdateSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestination) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.SurveyQuestionDestination>;

  updateSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.UpdateSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.SurveyQuestionDestination) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/UpdateSurveyQuestionDestination',
        request,
        metadata || {},
        this.methodInfoUpdateSurveyQuestionDestination,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateSurveyQuestionDestination',
    request,
    metadata || {},
    this.methodInfoUpdateSurveyQuestionDestination);
  }

  methodInfoUpdateVariable = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/UpdateVariable',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.UpdateVariableRequest,
    pando_api_survey_v1_shared_pb.Variable,
    (request: pando_api_survey_v1_admin_pb.UpdateVariableRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.Variable.deserializeBinary
  );

  updateVariable(
    request: pando_api_survey_v1_admin_pb.UpdateVariableRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.Variable>;

  updateVariable(
    request: pando_api_survey_v1_admin_pb.UpdateVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Variable) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.Variable>;

  updateVariable(
    request: pando_api_survey_v1_admin_pb.UpdateVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.Variable) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/UpdateVariable',
        request,
        metadata || {},
        this.methodInfoUpdateVariable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateVariable',
    request,
    metadata || {},
    this.methodInfoUpdateVariable);
  }

  methodInfoUpdateAnswerOption = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/UpdateAnswerOption',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.UpdateAnswerOptionRequest,
    pando_api_survey_v1_shared_pb.AnswerOption,
    (request: pando_api_survey_v1_admin_pb.UpdateAnswerOptionRequest) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinary
  );

  updateAnswerOption(
    request: pando_api_survey_v1_admin_pb.UpdateAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_shared_pb.AnswerOption>;

  updateAnswerOption(
    request: pando_api_survey_v1_admin_pb.UpdateAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOption) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_shared_pb.AnswerOption>;

  updateAnswerOption(
    request: pando_api_survey_v1_admin_pb.UpdateAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_shared_pb.AnswerOption) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/UpdateAnswerOption',
        request,
        metadata || {},
        this.methodInfoUpdateAnswerOption,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/UpdateAnswerOption',
    request,
    metadata || {},
    this.methodInfoUpdateAnswerOption);
  }

  methodInfoDeleteSurvey = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteSurvey',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteSurveyRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteSurveyRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteSurvey(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteSurvey(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteSurvey(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteSurvey',
        request,
        metadata || {},
        this.methodInfoDeleteSurvey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurvey',
    request,
    metadata || {},
    this.methodInfoDeleteSurvey);
  }

  methodInfoDeleteQuestion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteQuestion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteQuestionRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteQuestionRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteQuestion(
    request: pando_api_survey_v1_admin_pb.DeleteQuestionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteQuestion(
    request: pando_api_survey_v1_admin_pb.DeleteQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteQuestion(
    request: pando_api_survey_v1_admin_pb.DeleteQuestionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteQuestion',
        request,
        metadata || {},
        this.methodInfoDeleteQuestion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteQuestion',
    request,
    metadata || {},
    this.methodInfoDeleteQuestion);
  }

  methodInfoDeletePlaybackData = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeletePlaybackData',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeletePlaybackDataRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeletePlaybackDataRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deletePlaybackData(
    request: pando_api_survey_v1_admin_pb.DeletePlaybackDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deletePlaybackData(
    request: pando_api_survey_v1_admin_pb.DeletePlaybackDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deletePlaybackData(
    request: pando_api_survey_v1_admin_pb.DeletePlaybackDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeletePlaybackData',
        request,
        metadata || {},
        this.methodInfoDeletePlaybackData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeletePlaybackData',
    request,
    metadata || {},
    this.methodInfoDeletePlaybackData);
  }

  methodInfoDeleteInstance = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteInstance',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteInstanceRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteInstanceRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteInstance(
    request: pando_api_survey_v1_admin_pb.DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteInstance(
    request: pando_api_survey_v1_admin_pb.DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteInstance(
    request: pando_api_survey_v1_admin_pb.DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteInstance',
        request,
        metadata || {},
        this.methodInfoDeleteInstance,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteInstance',
    request,
    metadata || {},
    this.methodInfoDeleteInstance);
  }

  methodInfoDeleteMedia = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteMedia',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteMediaRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteMediaRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteMedia(
    request: pando_api_survey_v1_admin_pb.DeleteMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteMedia(
    request: pando_api_survey_v1_admin_pb.DeleteMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteMedia(
    request: pando_api_survey_v1_admin_pb.DeleteMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteMedia',
        request,
        metadata || {},
        this.methodInfoDeleteMedia,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteMedia',
    request,
    metadata || {},
    this.methodInfoDeleteMedia);
  }

  methodInfoDeleteAnswerOption = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteAnswerOption',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteAnswerOptionRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteAnswerOptionRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteAnswerOption(
    request: pando_api_survey_v1_admin_pb.DeleteAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteAnswerOption(
    request: pando_api_survey_v1_admin_pb.DeleteAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteAnswerOption(
    request: pando_api_survey_v1_admin_pb.DeleteAnswerOptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteAnswerOption',
        request,
        metadata || {},
        this.methodInfoDeleteAnswerOption,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteAnswerOption',
    request,
    metadata || {},
    this.methodInfoDeleteAnswerOption);
  }

  methodInfoDeleteSurveyMedia = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyMedia',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteSurveyMediaRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteSurveyMediaRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteSurveyMedia(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteSurveyMedia(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteSurveyMedia(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyMedia',
        request,
        metadata || {},
        this.methodInfoDeleteSurveyMedia,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyMedia',
    request,
    metadata || {},
    this.methodInfoDeleteSurveyMedia);
  }

  methodInfoDeleteSurveyVariable = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVariable',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteSurveyVariableRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteSurveyVariableRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteSurveyVariable(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyVariableRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteSurveyVariable(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteSurveyVariable(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVariable',
        request,
        metadata || {},
        this.methodInfoDeleteSurveyVariable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVariable',
    request,
    metadata || {},
    this.methodInfoDeleteSurveyVariable);
  }

  methodInfoDeleteVariableMedia = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteVariableMedia',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteVariableMediaRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteVariableMediaRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteVariableMedia(
    request: pando_api_survey_v1_admin_pb.DeleteVariableMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteVariableMedia(
    request: pando_api_survey_v1_admin_pb.DeleteVariableMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteVariableMedia(
    request: pando_api_survey_v1_admin_pb.DeleteVariableMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteVariableMedia',
        request,
        metadata || {},
        this.methodInfoDeleteVariableMedia,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteVariableMedia',
    request,
    metadata || {},
    this.methodInfoDeleteVariableMedia);
  }

  methodInfoDeleteSurveyQuestionDestination = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyQuestionDestination',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteSurveyQuestionDestinationRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteSurveyQuestionDestinationRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteSurveyQuestionDestination(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyQuestionDestinationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyQuestionDestination',
        request,
        metadata || {},
        this.methodInfoDeleteSurveyQuestionDestination,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyQuestionDestination',
    request,
    metadata || {},
    this.methodInfoDeleteSurveyQuestionDestination);
  }

  methodInfoDeleteSurveyVersion = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVersion',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteSurveyVersionRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteSurveyVersionRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteSurveyVersion(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyVersionRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteSurveyVersion(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteSurveyVersion(
    request: pando_api_survey_v1_admin_pb.DeleteSurveyVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVersion',
        request,
        metadata || {},
        this.methodInfoDeleteSurveyVersion,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteSurveyVersion',
    request,
    metadata || {},
    this.methodInfoDeleteSurveyVersion);
  }

  methodInfoDeleteVariable = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/DeleteVariable',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.DeleteVariableRequest,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.DeleteVariableRequest) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  deleteVariable(
    request: pando_api_survey_v1_admin_pb.DeleteVariableRequest,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  deleteVariable(
    request: pando_api_survey_v1_admin_pb.DeleteVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  deleteVariable(
    request: pando_api_survey_v1_admin_pb.DeleteVariableRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/DeleteVariable',
        request,
        metadata || {},
        this.methodInfoDeleteVariable,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/DeleteVariable',
    request,
    metadata || {},
    this.methodInfoDeleteVariable);
  }

  methodInfoExecAddSurveyESignTemplate = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyESignTemplate',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    (request: pando_api_survey_v1_admin_pb.SurveyESignTemplate) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_admin_pb.SurveyESignTemplate.deserializeBinary
  );

  execAddSurveyESignTemplate(
    request: pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_admin_pb.SurveyESignTemplate>;

  execAddSurveyESignTemplate(
    request: pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SurveyESignTemplate) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_admin_pb.SurveyESignTemplate>;

  execAddSurveyESignTemplate(
    request: pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SurveyESignTemplate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyESignTemplate',
        request,
        metadata || {},
        this.methodInfoExecAddSurveyESignTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyESignTemplate',
    request,
    metadata || {},
    this.methodInfoExecAddSurveyESignTemplate);
  }

  methodInfoExecRemoveSurveyESignTemplate = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyESignTemplate',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.SurveyESignTemplate) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  execRemoveSurveyESignTemplate(
    request: pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  execRemoveSurveyESignTemplate(
    request: pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  execRemoveSurveyESignTemplate(
    request: pando_api_survey_v1_admin_pb.SurveyESignTemplate,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyESignTemplate',
        request,
        metadata || {},
        this.methodInfoExecRemoveSurveyESignTemplate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyESignTemplate',
    request,
    metadata || {},
    this.methodInfoExecRemoveSurveyESignTemplate);
  }

  methodInfoExecSendInstanceLink = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/ExecSendInstanceLink',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.SendInstanceLink,
    pando_api_survey_v1_admin_pb.SendInstanceLink,
    (request: pando_api_survey_v1_admin_pb.SendInstanceLink) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_admin_pb.SendInstanceLink.deserializeBinary
  );

  execSendInstanceLink(
    request: pando_api_survey_v1_admin_pb.SendInstanceLink,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_admin_pb.SendInstanceLink>;

  execSendInstanceLink(
    request: pando_api_survey_v1_admin_pb.SendInstanceLink,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SendInstanceLink) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_admin_pb.SendInstanceLink>;

  execSendInstanceLink(
    request: pando_api_survey_v1_admin_pb.SendInstanceLink,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SendInstanceLink) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/ExecSendInstanceLink',
        request,
        metadata || {},
        this.methodInfoExecSendInstanceLink,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecSendInstanceLink',
    request,
    metadata || {},
    this.methodInfoExecSendInstanceLink);
  }

  methodInfoExecAddSurveyInstanceESignSignatory = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyInstanceESignSignatory',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    (request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory) => {
      return request.serializeBinary();
    },
    pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory.deserializeBinary
  );

  execAddSurveyInstanceESignSignatory(
    request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory>;

  execAddSurveyInstanceESignSignatory(
    request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory) => void): grpcWeb.ClientReadableStream<pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory>;

  execAddSurveyInstanceESignSignatory(
    request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyInstanceESignSignatory',
        request,
        metadata || {},
        this.methodInfoExecAddSurveyInstanceESignSignatory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecAddSurveyInstanceESignSignatory',
    request,
    metadata || {},
    this.methodInfoExecAddSurveyInstanceESignSignatory);
  }

  methodInfoExecRemoveSurveyInstanceESignSignatory = new grpcWeb.MethodDescriptor(
    '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyInstanceESignSignatory',
    grpcWeb.MethodType.UNARY,
    pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    pando_api_shared_pb.Empty,
    (request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory) => {
      return request.serializeBinary();
    },
    pando_api_shared_pb.Empty.deserializeBinary
  );

  execRemoveSurveyInstanceESignSignatory(
    request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    metadata: grpcWeb.Metadata | null): Promise<pando_api_shared_pb.Empty>;

  execRemoveSurveyInstanceESignSignatory(
    request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void): grpcWeb.ClientReadableStream<pando_api_shared_pb.Empty>;

  execRemoveSurveyInstanceESignSignatory(
    request: pando_api_survey_v1_admin_pb.SurveyInstanceESignSignatory,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pando_api_shared_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyInstanceESignSignatory',
        request,
        metadata || {},
        this.methodInfoExecRemoveSurveyInstanceESignSignatory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pando.api.survey.v1.SurveyAdminService/ExecRemoveSurveyInstanceESignSignatory',
    request,
    metadata || {},
    this.methodInfoExecRemoveSurveyInstanceESignSignatory);
  }

}

