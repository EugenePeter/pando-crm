import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as pando_api_shared_pb from '../../../../pando/api/shared_pb';
import * as pando_api_extensions_pb from '../../../../pando/api/extensions_pb';


export class AnswerMediaUploadRequest extends jspb.Message {
  getMeta(): AnswerMediaMetadata | undefined;
  setMeta(value?: AnswerMediaMetadata): AnswerMediaUploadRequest;
  hasMeta(): boolean;
  clearMeta(): AnswerMediaUploadRequest;

  getData(): pando_api_shared_pb.FileChunk | undefined;
  setData(value?: pando_api_shared_pb.FileChunk): AnswerMediaUploadRequest;
  hasData(): boolean;
  clearData(): AnswerMediaUploadRequest;

  getRequestCase(): AnswerMediaUploadRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerMediaUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerMediaUploadRequest): AnswerMediaUploadRequest.AsObject;
  static serializeBinaryToWriter(message: AnswerMediaUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerMediaUploadRequest;
  static deserializeBinaryFromReader(message: AnswerMediaUploadRequest, reader: jspb.BinaryReader): AnswerMediaUploadRequest;
}

export namespace AnswerMediaUploadRequest {
  export type AsObject = {
    meta?: AnswerMediaMetadata.AsObject,
    data?: pando_api_shared_pb.FileChunk.AsObject,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    META = 1,
    DATA = 2,
  }
}

export class AnswerMediaMetadata extends jspb.Message {
  getAnswerGuid(): string;
  setAnswerGuid(value: string): AnswerMediaMetadata;

  getInfo(): MediaInfo | undefined;
  setInfo(value?: MediaInfo): AnswerMediaMetadata;
  hasInfo(): boolean;
  clearInfo(): AnswerMediaMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerMediaMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerMediaMetadata): AnswerMediaMetadata.AsObject;
  static serializeBinaryToWriter(message: AnswerMediaMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerMediaMetadata;
  static deserializeBinaryFromReader(message: AnswerMediaMetadata, reader: jspb.BinaryReader): AnswerMediaMetadata;
}

export namespace AnswerMediaMetadata {
  export type AsObject = {
    answerGuid: string,
    info?: MediaInfo.AsObject,
  }
}

export class SurveyMediaMetadata extends jspb.Message {
  getSurveyMediaGuid(): string;
  setSurveyMediaGuid(value: string): SurveyMediaMetadata;

  getStatus(): Status;
  setStatus(value: Status): SurveyMediaMetadata;

  getInfo(): MediaInfo | undefined;
  setInfo(value?: MediaInfo): SurveyMediaMetadata;
  hasInfo(): boolean;
  clearInfo(): SurveyMediaMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyMediaMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyMediaMetadata): SurveyMediaMetadata.AsObject;
  static serializeBinaryToWriter(message: SurveyMediaMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyMediaMetadata;
  static deserializeBinaryFromReader(message: SurveyMediaMetadata, reader: jspb.BinaryReader): SurveyMediaMetadata;
}

export namespace SurveyMediaMetadata {
  export type AsObject = {
    surveyMediaGuid: string,
    status: Status,
    info?: MediaInfo.AsObject,
  }
}

export class Media extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): Media;

  getType(): pando_api_shared_pb.FileType;
  setType(value: pando_api_shared_pb.FileType): Media;

  getName(): string;
  setName(value: string): Media;

  getLocation(): MediaLocation;
  setLocation(value: MediaLocation): Media;

  getPath(): string;
  setPath(value: string): Media;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Media.AsObject;
  static toObject(includeInstance: boolean, msg: Media): Media.AsObject;
  static serializeBinaryToWriter(message: Media, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Media;
  static deserializeBinaryFromReader(message: Media, reader: jspb.BinaryReader): Media;
}

export namespace Media {
  export type AsObject = {
    guid: string,
    type: pando_api_shared_pb.FileType,
    name: string,
    location: MediaLocation,
    path: string,
  }
}

export class MediaInfo extends jspb.Message {
  getName(): string;
  setName(value: string): MediaInfo;

  getType(): pando_api_shared_pb.FileType;
  setType(value: pando_api_shared_pb.FileType): MediaInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MediaInfo): MediaInfo.AsObject;
  static serializeBinaryToWriter(message: MediaInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaInfo;
  static deserializeBinaryFromReader(message: MediaInfo, reader: jspb.BinaryReader): MediaInfo;
}

export namespace MediaInfo {
  export type AsObject = {
    name: string,
    type: pando_api_shared_pb.FileType,
  }
}

export class Survey extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): Survey;

  getOrganizationCode(): string;
  setOrganizationCode(value: string): Survey;

  getName(): string;
  setName(value: string): Survey;

  getDescription(): string;
  setDescription(value: string): Survey;

  getPreSurveyText(): string;
  setPreSurveyText(value: string): Survey;

  getFirstQuestionGuid(): string;
  setFirstQuestionGuid(value: string): Survey;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Survey;

  getOrganizationName(): string;
  setOrganizationName(value: string): Survey;

  getVersionGuid(): string;
  setVersionGuid(value: string): Survey;

  getNumberOfInstances(): number;
  setNumberOfInstances(value: number): Survey;

  getDatePublished(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatePublished(value?: google_protobuf_timestamp_pb.Timestamp): Survey;
  hasDatePublished(): boolean;
  clearDatePublished(): Survey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Survey.AsObject;
  static toObject(includeInstance: boolean, msg: Survey): Survey.AsObject;
  static serializeBinaryToWriter(message: Survey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Survey;
  static deserializeBinaryFromReader(message: Survey, reader: jspb.BinaryReader): Survey;
}

export namespace Survey {
  export type AsObject = {
    guid: string,
    organizationCode: string,
    name: string,
    description: string,
    preSurveyText: string,
    firstQuestionGuid: string,
    isDeleted: boolean,
    organizationName: string,
    versionGuid: string,
    numberOfInstances: number,
    datePublished?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SurveyList extends jspb.Message {
  getSurveysList(): Array<Survey>;
  setSurveysList(value: Array<Survey>): SurveyList;
  clearSurveysList(): SurveyList;
  addSurveys(value?: Survey, index?: number): Survey;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): SurveyList;
  hasPagination(): boolean;
  clearPagination(): SurveyList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyList.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyList): SurveyList.AsObject;
  static serializeBinaryToWriter(message: SurveyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyList;
  static deserializeBinaryFromReader(message: SurveyList, reader: jspb.BinaryReader): SurveyList;
}

export namespace SurveyList {
  export type AsObject = {
    surveysList: Array<Survey.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class PlaybackData extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): PlaybackData;

  getQuestionGuid(): string;
  setQuestionGuid(value: string): PlaybackData;

  getType(): Action;
  setType(value: Action): PlaybackData;

  getTimestamp(): number;
  setTimestamp(value: number): PlaybackData;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): PlaybackData;

  getFileType(): pando_api_shared_pb.FileType;
  setFileType(value: pando_api_shared_pb.FileType): PlaybackData;

  getMediaGuid(): string;
  setMediaGuid(value: string): PlaybackData;

  getVariableGuid(): string;
  setVariableGuid(value: string): PlaybackData;

  getMediaName(): string;
  setMediaName(value: string): PlaybackData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaybackData.AsObject;
  static toObject(includeInstance: boolean, msg: PlaybackData): PlaybackData.AsObject;
  static serializeBinaryToWriter(message: PlaybackData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaybackData;
  static deserializeBinaryFromReader(message: PlaybackData, reader: jspb.BinaryReader): PlaybackData;
}

export namespace PlaybackData {
  export type AsObject = {
    guid: string,
    questionGuid: string,
    type: Action,
    timestamp: number,
    isDeleted: boolean,
    fileType: pando_api_shared_pb.FileType,
    mediaGuid: string,
    variableGuid: string,
    mediaName: string,
  }
}

export class Question extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): Question;

  getSurveyGuid(): string;
  setSurveyGuid(value: string): Question;

  getName(): string;
  setName(value: string): Question;

  getDescription(): string;
  setDescription(value: string): Question;

  getText(): string;
  setText(value: string): Question;

  getSelectionType(): SelectionType;
  setSelectionType(value: SelectionType): Question;

  getAnswerOptionsList(): Array<AnswerOption>;
  setAnswerOptionsList(value: Array<AnswerOption>): Question;
  clearAnswerOptionsList(): Question;
  addAnswerOptions(value?: AnswerOption, index?: number): AnswerOption;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Question;

  getIsOptional(): boolean;
  setIsOptional(value: boolean): Question;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Question.AsObject;
  static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
  static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Question;
  static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
  export type AsObject = {
    guid: string,
    surveyGuid: string,
    name: string,
    description: string,
    text: string,
    selectionType: SelectionType,
    answerOptionsList: Array<AnswerOption.AsObject>,
    isDeleted: boolean,
    isOptional: boolean,
  }
}

export class SurveyQuestionList extends jspb.Message {
  getSurveyQuestionsList(): Array<Question>;
  setSurveyQuestionsList(value: Array<Question>): SurveyQuestionList;
  clearSurveyQuestionsList(): SurveyQuestionList;
  addSurveyQuestions(value?: Question, index?: number): Question;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): SurveyQuestionList;
  hasPagination(): boolean;
  clearPagination(): SurveyQuestionList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionList.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionList): SurveyQuestionList.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionList;
  static deserializeBinaryFromReader(message: SurveyQuestionList, reader: jspb.BinaryReader): SurveyQuestionList;
}

export namespace SurveyQuestionList {
  export type AsObject = {
    surveyQuestionsList: Array<Question.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class QuestionWithPlaybackData extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): QuestionWithPlaybackData;

  getSurveyGuid(): string;
  setSurveyGuid(value: string): QuestionWithPlaybackData;

  getName(): string;
  setName(value: string): QuestionWithPlaybackData;

  getDescription(): string;
  setDescription(value: string): QuestionWithPlaybackData;

  getText(): string;
  setText(value: string): QuestionWithPlaybackData;

  getPlaybackDataList(): Array<PlaybackData>;
  setPlaybackDataList(value: Array<PlaybackData>): QuestionWithPlaybackData;
  clearPlaybackDataList(): QuestionWithPlaybackData;
  addPlaybackData(value?: PlaybackData, index?: number): PlaybackData;

  getAnswerOptionsList(): Array<AnswerOption>;
  setAnswerOptionsList(value: Array<AnswerOption>): QuestionWithPlaybackData;
  clearAnswerOptionsList(): QuestionWithPlaybackData;
  addAnswerOptions(value?: AnswerOption, index?: number): AnswerOption;

  getSelectionType(): SelectionType;
  setSelectionType(value: SelectionType): QuestionWithPlaybackData;

  getFacialRecognitionInterval(): number;
  setFacialRecognitionInterval(value: number): QuestionWithPlaybackData;

  getNoAnswerWaitTimeout(): number;
  setNoAnswerWaitTimeout(value: number): QuestionWithPlaybackData;

  getTotalQuestions(): number;
  setTotalQuestions(value: number): QuestionWithPlaybackData;

  getCurrentQuestion(): number;
  setCurrentQuestion(value: number): QuestionWithPlaybackData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionWithPlaybackData.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionWithPlaybackData): QuestionWithPlaybackData.AsObject;
  static serializeBinaryToWriter(message: QuestionWithPlaybackData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionWithPlaybackData;
  static deserializeBinaryFromReader(message: QuestionWithPlaybackData, reader: jspb.BinaryReader): QuestionWithPlaybackData;
}

export namespace QuestionWithPlaybackData {
  export type AsObject = {
    guid: string,
    surveyGuid: string,
    name: string,
    description: string,
    text: string,
    playbackDataList: Array<PlaybackData.AsObject>,
    answerOptionsList: Array<AnswerOption.AsObject>,
    selectionType: SelectionType,
    facialRecognitionInterval: number,
    noAnswerWaitTimeout: number,
    totalQuestions: number,
    currentQuestion: number,
  }
}

export class Answer extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): Answer;

  getAttemptGuid(): string;
  setAttemptGuid(value: string): Answer;

  getDeviceId(): string;
  setDeviceId(value: string): Answer;

  getText(): string;
  setText(value: string): Answer;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Answer;
  hasTimestamp(): boolean;
  clearTimestamp(): Answer;

  getMediaGuidsList(): Array<string>;
  setMediaGuidsList(value: Array<string>): Answer;
  clearMediaGuidsList(): Answer;
  addMediaGuids(value: string, index?: number): Answer;

  getQuestionGuid(): string;
  setQuestionGuid(value: string): Answer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Answer.AsObject;
  static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
  static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Answer;
  static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
  export type AsObject = {
    guid: string,
    attemptGuid: string,
    deviceId: string,
    text: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mediaGuidsList: Array<string>,
    questionGuid: string,
  }
}

export class AnswerTimestamp extends jspb.Message {
  getAnswerGuid(): string;
  setAnswerGuid(value: string): AnswerTimestamp;

  getAnswerType(): AnswerType;
  setAnswerType(value: AnswerType): AnswerTimestamp;

  getAnswerAction(): AnswerAction;
  setAnswerAction(value: AnswerAction): AnswerTimestamp;

  getAnswerOptionGuid(): string;
  setAnswerOptionGuid(value: string): AnswerTimestamp;

  getAnswerText(): string;
  setAnswerText(value: string): AnswerTimestamp;

  getTimestamp(): number;
  setTimestamp(value: number): AnswerTimestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerTimestamp.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerTimestamp): AnswerTimestamp.AsObject;
  static serializeBinaryToWriter(message: AnswerTimestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerTimestamp;
  static deserializeBinaryFromReader(message: AnswerTimestamp, reader: jspb.BinaryReader): AnswerTimestamp;
}

export namespace AnswerTimestamp {
  export type AsObject = {
    answerGuid: string,
    answerType: AnswerType,
    answerAction: AnswerAction,
    answerOptionGuid: string,
    answerText: string,
    timestamp: number,
  }
}

export class SurveyQuestionDestination extends jspb.Message {
  getQuestionGuid(): string;
  setQuestionGuid(value: string): SurveyQuestionDestination;

  getDestinationQuestionGuid(): string;
  setDestinationQuestionGuid(value: string): SurveyQuestionDestination;

  getCondition(): string;
  setCondition(value: string): SurveyQuestionDestination;

  getPriority(): number;
  setPriority(value: number): SurveyQuestionDestination;

  getGuid(): string;
  setGuid(value: string): SurveyQuestionDestination;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): SurveyQuestionDestination;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionDestination.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionDestination): SurveyQuestionDestination.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionDestination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionDestination;
  static deserializeBinaryFromReader(message: SurveyQuestionDestination, reader: jspb.BinaryReader): SurveyQuestionDestination;
}

export namespace SurveyQuestionDestination {
  export type AsObject = {
    questionGuid: string,
    destinationQuestionGuid: string,
    condition: string,
    priority: number,
    guid: string,
    isDeleted: boolean,
  }
}

export class Instance extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): Instance;

  getSurveyGuid(): string;
  setSurveyGuid(value: string): Instance;

  getContactType(): pando_api_shared_pb.ContactType;
  setContactType(value: pando_api_shared_pb.ContactType): Instance;

  getContactInfo(): string;
  setContactInfo(value: string): Instance;

  getCurrent(): Attempt | undefined;
  setCurrent(value?: Attempt): Instance;
  hasCurrent(): boolean;
  clearCurrent(): Instance;

  getAttemptGuidsList(): Array<string>;
  setAttemptGuidsList(value: Array<string>): Instance;
  clearAttemptGuidsList(): Instance;
  addAttemptGuids(value: string, index?: number): Instance;

  getQuestionGuidsList(): Array<string>;
  setQuestionGuidsList(value: Array<string>): Instance;
  clearQuestionGuidsList(): Instance;
  addQuestionGuids(value: string, index?: number): Instance;

  getMediaGuidsList(): Array<string>;
  setMediaGuidsList(value: Array<string>): Instance;
  clearMediaGuidsList(): Instance;
  addMediaGuids(value: string, index?: number): Instance;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Instance;

  getData(): string;
  setData(value: string): Instance;

  getDataFormat(): pando_api_shared_pb.FileType;
  setDataFormat(value: pando_api_shared_pb.FileType): Instance;

  getRespondentName(): string;
  setRespondentName(value: string): Instance;

  getOrganizationName(): string;
  setOrganizationName(value: string): Instance;

  getCompletionType(): CompletionType;
  setCompletionType(value: CompletionType): Instance;

  getDateCompleted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCompleted(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
  hasDateCompleted(): boolean;
  clearDateCompleted(): Instance;

  getSurveyName(): string;
  setSurveyName(value: string): Instance;

  getPreSurveyText(): string;
  setPreSurveyText(value: string): Instance;

  getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
  hasDateCreated(): boolean;
  clearDateCreated(): Instance;

  getSignatoryGuid(): string;
  setSignatoryGuid(value: string): Instance;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): Instance;
  clearUserIdsList(): Instance;
  addUserIds(value: string, index?: number): Instance;

  getDescription(): string;
  setDescription(value: string): Instance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    guid: string,
    surveyGuid: string,
    contactType: pando_api_shared_pb.ContactType,
    contactInfo: string,
    current?: Attempt.AsObject,
    attemptGuidsList: Array<string>,
    questionGuidsList: Array<string>,
    mediaGuidsList: Array<string>,
    isDeleted: boolean,
    data: string,
    dataFormat: pando_api_shared_pb.FileType,
    respondentName: string,
    organizationName: string,
    completionType: CompletionType,
    dateCompleted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    surveyName: string,
    preSurveyText: string,
    dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    signatoryGuid: string,
    userIdsList: Array<string>,
    description: string,
  }
}

export class Attempt extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): Attempt;

  getSurveyInstanceGuid(): string;
  setSurveyInstanceGuid(value: string): Attempt;

  getCompletionType(): CompletionType;
  setCompletionType(value: CompletionType): Attempt;

  getTotalAnswered(): number;
  setTotalAnswered(value: number): Attempt;

  getTotalQuestions(): number;
  setTotalQuestions(value: number): Attempt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attempt.AsObject;
  static toObject(includeInstance: boolean, msg: Attempt): Attempt.AsObject;
  static serializeBinaryToWriter(message: Attempt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attempt;
  static deserializeBinaryFromReader(message: Attempt, reader: jspb.BinaryReader): Attempt;
}

export namespace Attempt {
  export type AsObject = {
    guid: string,
    surveyInstanceGuid: string,
    completionType: CompletionType,
    totalAnswered: number,
    totalQuestions: number,
  }
}

export class InstanceList extends jspb.Message {
  getInstancesList(): Array<Instance>;
  setInstancesList(value: Array<Instance>): InstanceList;
  clearInstancesList(): InstanceList;
  addInstances(value?: Instance, index?: number): Instance;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): InstanceList;
  hasPagination(): boolean;
  clearPagination(): InstanceList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceList.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceList): InstanceList.AsObject;
  static serializeBinaryToWriter(message: InstanceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceList;
  static deserializeBinaryFromReader(message: InstanceList, reader: jspb.BinaryReader): InstanceList;
}

export namespace InstanceList {
  export type AsObject = {
    instancesList: Array<Instance.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class AttemptList extends jspb.Message {
  getAttemptsList(): Array<Attempt>;
  setAttemptsList(value: Array<Attempt>): AttemptList;
  clearAttemptsList(): AttemptList;
  addAttempts(value?: Attempt, index?: number): Attempt;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): AttemptList;
  hasPagination(): boolean;
  clearPagination(): AttemptList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttemptList.AsObject;
  static toObject(includeInstance: boolean, msg: AttemptList): AttemptList.AsObject;
  static serializeBinaryToWriter(message: AttemptList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttemptList;
  static deserializeBinaryFromReader(message: AttemptList, reader: jspb.BinaryReader): AttemptList;
}

export namespace AttemptList {
  export type AsObject = {
    attemptsList: Array<Attempt.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class AnswerOption extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): AnswerOption;

  getName(): string;
  setName(value: string): AnswerOption;

  getDescription(): string;
  setDescription(value: string): AnswerOption;

  getOrganizationCode(): string;
  setOrganizationCode(value: string): AnswerOption;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): AnswerOption;

  getIsAcceptable(): boolean;
  setIsAcceptable(value: boolean): AnswerOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerOption.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerOption): AnswerOption.AsObject;
  static serializeBinaryToWriter(message: AnswerOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerOption;
  static deserializeBinaryFromReader(message: AnswerOption, reader: jspb.BinaryReader): AnswerOption;
}

export namespace AnswerOption {
  export type AsObject = {
    guid: string,
    name: string,
    description: string,
    organizationCode: string,
    isDeleted: boolean,
    isAcceptable: boolean,
  }
}

export class Variable extends jspb.Message {
  getVariableType(): pando_api_shared_pb.VariableType;
  setVariableType(value: pando_api_shared_pb.VariableType): Variable;

  getMaskType(): pando_api_shared_pb.MaskType;
  setMaskType(value: pando_api_shared_pb.MaskType): Variable;

  getOrganizationCode(): string;
  setOrganizationCode(value: string): Variable;

  getName(): string;
  setName(value: string): Variable;

  getGuid(): string;
  setGuid(value: string): Variable;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    variableType: pando_api_shared_pb.VariableType,
    maskType: pando_api_shared_pb.MaskType,
    organizationCode: string,
    name: string,
    guid: string,
    isDeleted: boolean,
  }
}

export class VariableList extends jspb.Message {
  getVariablesList(): Array<Variable>;
  setVariablesList(value: Array<Variable>): VariableList;
  clearVariablesList(): VariableList;
  addVariables(value?: Variable, index?: number): Variable;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): VariableList;
  hasPagination(): boolean;
  clearPagination(): VariableList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableList.AsObject;
  static toObject(includeInstance: boolean, msg: VariableList): VariableList.AsObject;
  static serializeBinaryToWriter(message: VariableList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableList;
  static deserializeBinaryFromReader(message: VariableList, reader: jspb.BinaryReader): VariableList;
}

export namespace VariableList {
  export type AsObject = {
    variablesList: Array<Variable.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class AnswerOptionList extends jspb.Message {
  getAnswerOptionsList(): Array<AnswerOption>;
  setAnswerOptionsList(value: Array<AnswerOption>): AnswerOptionList;
  clearAnswerOptionsList(): AnswerOptionList;
  addAnswerOptions(value?: AnswerOption, index?: number): AnswerOption;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): AnswerOptionList;
  hasPagination(): boolean;
  clearPagination(): AnswerOptionList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerOptionList.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerOptionList): AnswerOptionList.AsObject;
  static serializeBinaryToWriter(message: AnswerOptionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerOptionList;
  static deserializeBinaryFromReader(message: AnswerOptionList, reader: jspb.BinaryReader): AnswerOptionList;
}

export namespace AnswerOptionList {
  export type AsObject = {
    answerOptionsList: Array<AnswerOption.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class PlaybackDataList extends jspb.Message {
  getPlaybackDataListList(): Array<PlaybackData>;
  setPlaybackDataListList(value: Array<PlaybackData>): PlaybackDataList;
  clearPlaybackDataListList(): PlaybackDataList;
  addPlaybackDataList(value?: PlaybackData, index?: number): PlaybackData;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): PlaybackDataList;
  hasPagination(): boolean;
  clearPagination(): PlaybackDataList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaybackDataList.AsObject;
  static toObject(includeInstance: boolean, msg: PlaybackDataList): PlaybackDataList.AsObject;
  static serializeBinaryToWriter(message: PlaybackDataList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaybackDataList;
  static deserializeBinaryFromReader(message: PlaybackDataList, reader: jspb.BinaryReader): PlaybackDataList;
}

export namespace PlaybackDataList {
  export type AsObject = {
    playbackDataListList: Array<PlaybackData.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class SurveyQuestionDestinationList extends jspb.Message {
  getDestinationsList(): Array<SurveyQuestionDestination>;
  setDestinationsList(value: Array<SurveyQuestionDestination>): SurveyQuestionDestinationList;
  clearDestinationsList(): SurveyQuestionDestinationList;
  addDestinations(value?: SurveyQuestionDestination, index?: number): SurveyQuestionDestination;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): SurveyQuestionDestinationList;
  hasPagination(): boolean;
  clearPagination(): SurveyQuestionDestinationList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyQuestionDestinationList.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyQuestionDestinationList): SurveyQuestionDestinationList.AsObject;
  static serializeBinaryToWriter(message: SurveyQuestionDestinationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyQuestionDestinationList;
  static deserializeBinaryFromReader(message: SurveyQuestionDestinationList, reader: jspb.BinaryReader): SurveyQuestionDestinationList;
}

export namespace SurveyQuestionDestinationList {
  export type AsObject = {
    destinationsList: Array<SurveyQuestionDestination.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class MediaList extends jspb.Message {
  getMediaListList(): Array<Media>;
  setMediaListList(value: Array<Media>): MediaList;
  clearMediaListList(): MediaList;
  addMediaList(value?: Media, index?: number): Media;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): MediaList;
  hasPagination(): boolean;
  clearPagination(): MediaList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaList.AsObject;
  static toObject(includeInstance: boolean, msg: MediaList): MediaList.AsObject;
  static serializeBinaryToWriter(message: MediaList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaList;
  static deserializeBinaryFromReader(message: MediaList, reader: jspb.BinaryReader): MediaList;
}

export namespace MediaList {
  export type AsObject = {
    mediaListList: Array<Media.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class SurveyDocumentList extends jspb.Message {
  getTemplateGuidsList(): Array<string>;
  setTemplateGuidsList(value: Array<string>): SurveyDocumentList;
  clearTemplateGuidsList(): SurveyDocumentList;
  addTemplateGuids(value: string, index?: number): SurveyDocumentList;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): SurveyDocumentList;
  hasPagination(): boolean;
  clearPagination(): SurveyDocumentList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyDocumentList.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyDocumentList): SurveyDocumentList.AsObject;
  static serializeBinaryToWriter(message: SurveyDocumentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyDocumentList;
  static deserializeBinaryFromReader(message: SurveyDocumentList, reader: jspb.BinaryReader): SurveyDocumentList;
}

export namespace SurveyDocumentList {
  export type AsObject = {
    templateGuidsList: Array<string>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export class Version extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): Version;

  getDatePublished(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatePublished(value?: google_protobuf_timestamp_pb.Timestamp): Version;
  hasDatePublished(): boolean;
  clearDatePublished(): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    guid: string,
    datePublished?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SurveyDetail extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): SurveyDetail;

  getOrganizationCode(): string;
  setOrganizationCode(value: string): SurveyDetail;

  getName(): string;
  setName(value: string): SurveyDetail;

  getDescription(): string;
  setDescription(value: string): SurveyDetail;

  getPreSurveyText(): string;
  setPreSurveyText(value: string): SurveyDetail;

  getFirstQuestionGuid(): string;
  setFirstQuestionGuid(value: string): SurveyDetail;

  getIsDeleted(): boolean;
  setIsDeleted(value: boolean): SurveyDetail;

  getOrganizationName(): string;
  setOrganizationName(value: string): SurveyDetail;

  getVersionGuid(): string;
  setVersionGuid(value: string): SurveyDetail;

  getNumberOfInstances(): number;
  setNumberOfInstances(value: number): SurveyDetail;

  getDatePublished(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatePublished(value?: google_protobuf_timestamp_pb.Timestamp): SurveyDetail;
  hasDatePublished(): boolean;
  clearDatePublished(): SurveyDetail;

  getIsCurrentSurveyVersion(): boolean;
  setIsCurrentSurveyVersion(value: boolean): SurveyDetail;

  getVersionsList(): Array<Version>;
  setVersionsList(value: Array<Version>): SurveyDetail;
  clearVersionsList(): SurveyDetail;
  addVersions(value?: Version, index?: number): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyDetail.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyDetail): SurveyDetail.AsObject;
  static serializeBinaryToWriter(message: SurveyDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyDetail;
  static deserializeBinaryFromReader(message: SurveyDetail, reader: jspb.BinaryReader): SurveyDetail;
}

export namespace SurveyDetail {
  export type AsObject = {
    guid: string,
    organizationCode: string,
    name: string,
    description: string,
    preSurveyText: string,
    firstQuestionGuid: string,
    isDeleted: boolean,
    organizationName: string,
    versionGuid: string,
    numberOfInstances: number,
    datePublished?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isCurrentSurveyVersion: boolean,
    versionsList: Array<Version.AsObject>,
  }
}

export class SurveyDetailList extends jspb.Message {
  getSurveysList(): Array<SurveyDetail>;
  setSurveysList(value: Array<SurveyDetail>): SurveyDetailList;
  clearSurveysList(): SurveyDetailList;
  addSurveys(value?: SurveyDetail, index?: number): SurveyDetail;

  getPagination(): pando_api_shared_pb.PaginationResult | undefined;
  setPagination(value?: pando_api_shared_pb.PaginationResult): SurveyDetailList;
  hasPagination(): boolean;
  clearPagination(): SurveyDetailList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyDetailList.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyDetailList): SurveyDetailList.AsObject;
  static serializeBinaryToWriter(message: SurveyDetailList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyDetailList;
  static deserializeBinaryFromReader(message: SurveyDetailList, reader: jspb.BinaryReader): SurveyDetailList;
}

export namespace SurveyDetailList {
  export type AsObject = {
    surveysList: Array<SurveyDetail.AsObject>,
    pagination?: pando_api_shared_pb.PaginationResult.AsObject,
  }
}

export enum MediaLocation { 
  LOCAL = 0,
  NETWORK = 1,
  URL = 2,
}
export enum Status { 
  PENDING = 0,
  IN_PROGRESS = 1,
  SUCCESS = 2,
  FAILED = 3,
}
export enum Action { 
  STOP = 0,
  START = 1,
  PAUSE = 2,
  RESUME = 3,
}
export enum SelectionType { 
  SINGLE_ANSWER = 0,
  MULTI_ANSWER = 1,
}
export enum CompletionType { 
  INCOMPLETE = 0,
  UNACCEPTABLE = 1,
  ACCEPTABLE = 2,
}
export enum AnswerType { 
  VOCAL = 0,
  BUTTON = 1,
}
export enum AnswerAction { 
  ADD = 0,
  DELETE = 1,
}
