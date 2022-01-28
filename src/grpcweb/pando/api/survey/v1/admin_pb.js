// source: pando/api/survey/v1/admin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var pando_api_extensions_pb = require('../../../../pando/api/extensions_pb.js');
goog.object.extend(proto, pando_api_extensions_pb);
var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js');
goog.object.extend(proto, pando_api_shared_pb);
var pando_api_survey_v1_shared_pb = require('../../../../pando/api/survey/v1/shared_pb.js');
goog.object.extend(proto, pando_api_survey_v1_shared_pb);
goog.exportSymbol('proto.pando.api.survey.v1.CreateInstanceRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.CreateInstanceRequest.DataSourceCase', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.CreateSurveyVersionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.CreateVariablesRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteAnswerOptionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteInstanceRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteMediaRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeletePlaybackDataRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteQuestionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteSurveyMediaRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteSurveyRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteSurveyVariableRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteSurveyVersionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteVariableMediaRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.DeleteVariableRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetAnswerOptionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetAnswerOptionsRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetPlaybackDataListRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetQuestionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetQuestionsRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveyDocumentsRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveyMediaListRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveyRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveyVariablesRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveyVersionsRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetSurveysRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetVariableMediaListRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetVariableRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetVariableTemplateRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetVariableTemplateResponse', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.GetVariablesRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.SendInstanceLink', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.SurveyESignTemplate', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.SurveyInstanceESignSignatory', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.SurveyVariable', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UpdateAnswerOptionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UpdatePlaybackDataRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UpdateQuestionRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UpdateSurveyRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UpdateVariableRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UploadSurveyMediaResponse', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.UploadVariableMediaResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UploadSurveyMediaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UploadSurveyMediaResponse.displayName = 'proto.pando.api.survey.v1.UploadSurveyMediaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UploadVariableMediaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UploadVariableMediaResponse.displayName = 'proto.pando.api.survey.v1.UploadVariableMediaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteInstanceRequest.displayName = 'proto.pando.api.survey.v1.DeleteInstanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.CreateVariablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.CreateVariablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.CreateVariablesRequest.displayName = 'proto.pando.api.survey.v1.CreateVariablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteSurveyVariableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteSurveyVariableRequest.displayName = 'proto.pando.api.survey.v1.DeleteSurveyVariableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetVariablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetVariablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetVariablesRequest.displayName = 'proto.pando.api.survey.v1.GetVariablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetAnswerOptionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetAnswerOptionsRequest.displayName = 'proto.pando.api.survey.v1.GetAnswerOptionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveysRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveysRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveysRequest.displayName = 'proto.pando.api.survey.v1.GetSurveysRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveyVersionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveyVersionsRequest.displayName = 'proto.pando.api.survey.v1.GetSurveyVersionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveyMediaListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveyMediaListRequest.displayName = 'proto.pando.api.survey.v1.GetSurveyMediaListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveyVariablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveyVariablesRequest.displayName = 'proto.pando.api.survey.v1.GetSurveyVariablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetQuestionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetQuestionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetQuestionsRequest.displayName = 'proto.pando.api.survey.v1.GetQuestionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetVariableMediaListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetVariableMediaListRequest.displayName = 'proto.pando.api.survey.v1.GetVariableMediaListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteSurveyMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteSurveyMediaRequest.displayName = 'proto.pando.api.survey.v1.DeleteSurveyMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteVariableMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteVariableMediaRequest.displayName = 'proto.pando.api.survey.v1.DeleteVariableMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UpdateSurveyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UpdateSurveyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UpdateSurveyRequest.displayName = 'proto.pando.api.survey.v1.UpdateSurveyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UpdateQuestionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UpdateQuestionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UpdateQuestionRequest.displayName = 'proto.pando.api.survey.v1.UpdateQuestionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UpdatePlaybackDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UpdatePlaybackDataRequest.displayName = 'proto.pando.api.survey.v1.UpdatePlaybackDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.displayName = 'proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UpdateVariableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UpdateVariableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UpdateVariableRequest.displayName = 'proto.pando.api.survey.v1.UpdateVariableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.UpdateAnswerOptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.UpdateAnswerOptionRequest.displayName = 'proto.pando.api.survey.v1.UpdateAnswerOptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveyRequest.displayName = 'proto.pando.api.survey.v1.GetSurveyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteSurveyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteSurveyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteSurveyRequest.displayName = 'proto.pando.api.survey.v1.DeleteSurveyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetQuestionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetQuestionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetQuestionRequest.displayName = 'proto.pando.api.survey.v1.GetQuestionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteQuestionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteQuestionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteQuestionRequest.displayName = 'proto.pando.api.survey.v1.DeleteQuestionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetAnswerOptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetAnswerOptionRequest.displayName = 'proto.pando.api.survey.v1.GetAnswerOptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteAnswerOptionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteAnswerOptionRequest.displayName = 'proto.pando.api.survey.v1.DeleteAnswerOptionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetPlaybackDataListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetPlaybackDataListRequest.displayName = 'proto.pando.api.survey.v1.GetPlaybackDataListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.displayName = 'proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.displayName = 'proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.displayName = 'proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetVariableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetVariableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetVariableRequest.displayName = 'proto.pando.api.survey.v1.GetVariableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteVariableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteVariableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteVariableRequest.displayName = 'proto.pando.api.survey.v1.DeleteVariableRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeletePlaybackDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeletePlaybackDataRequest.displayName = 'proto.pando.api.survey.v1.DeletePlaybackDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteMediaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteMediaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteMediaRequest.displayName = 'proto.pando.api.survey.v1.DeleteMediaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.CreateSurveyVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.CreateSurveyVersionRequest.displayName = 'proto.pando.api.survey.v1.CreateSurveyVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.DeleteSurveyVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.DeleteSurveyVersionRequest.displayName = 'proto.pando.api.survey.v1.DeleteSurveyVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetSurveyDocumentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetSurveyDocumentsRequest.displayName = 'proto.pando.api.survey.v1.GetSurveyDocumentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.SurveyVariable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.SurveyVariable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.SurveyVariable.displayName = 'proto.pando.api.survey.v1.SurveyVariable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.CreateInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pando.api.survey.v1.CreateInstanceRequest.oneofGroups_);
};
goog.inherits(proto.pando.api.survey.v1.CreateInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.CreateInstanceRequest.displayName = 'proto.pando.api.survey.v1.CreateInstanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.SurveyESignTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.SurveyESignTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.SurveyESignTemplate.displayName = 'proto.pando.api.survey.v1.SurveyESignTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.SendInstanceLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.SendInstanceLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.SendInstanceLink.displayName = 'proto.pando.api.survey.v1.SendInstanceLink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.SurveyInstanceESignSignatory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory.displayName = 'proto.pando.api.survey.v1.SurveyInstanceESignSignatory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetVariableTemplateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetVariableTemplateRequest.displayName = 'proto.pando.api.survey.v1.GetVariableTemplateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.GetVariableTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.GetVariableTemplateResponse.displayName = 'proto.pando.api.survey.v1.GetVariableTemplateResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UploadSurveyMediaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UploadSurveyMediaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyMediaGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UploadSurveyMediaResponse}
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UploadSurveyMediaResponse;
  return proto.pando.api.survey.v1.UploadSurveyMediaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UploadSurveyMediaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UploadSurveyMediaResponse}
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyMediaGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UploadSurveyMediaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UploadSurveyMediaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyMediaGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string survey_media_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.prototype.getSurveyMediaGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.UploadSurveyMediaResponse} returns this
 */
proto.pando.api.survey.v1.UploadSurveyMediaResponse.prototype.setSurveyMediaGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UploadVariableMediaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UploadVariableMediaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableMediaGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UploadVariableMediaResponse}
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UploadVariableMediaResponse;
  return proto.pando.api.survey.v1.UploadVariableMediaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UploadVariableMediaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UploadVariableMediaResponse}
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableMediaGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UploadVariableMediaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UploadVariableMediaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableMediaGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string variable_media_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.prototype.getVariableMediaGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.UploadVariableMediaResponse} returns this
 */
proto.pando.api.survey.v1.UploadVariableMediaResponse.prototype.setVariableMediaGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteInstanceRequest}
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteInstanceRequest;
  return proto.pando.api.survey.v1.DeleteInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteInstanceRequest}
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteInstanceRequest} returns this
 */
proto.pando.api.survey.v1.DeleteInstanceRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.CreateVariablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.CreateVariablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.CreateVariablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataFormat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    organizationCode: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.CreateVariablesRequest}
 */
proto.pando.api.survey.v1.CreateVariablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.CreateVariablesRequest;
  return proto.pando.api.survey.v1.CreateVariablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.CreateVariablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.CreateVariablesRequest}
 */
proto.pando.api.survey.v1.CreateVariablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {!proto.pando.api.FileType} */ (reader.readEnum());
      msg.setDataFormat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.CreateVariablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.CreateVariablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.CreateVariablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getOrganizationCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateVariablesRequest} returns this
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.FileType data_format = 2;
 * @return {!proto.pando.api.FileType}
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.getDataFormat = function() {
  return /** @type {!proto.pando.api.FileType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pando.api.FileType} value
 * @return {!proto.pando.api.survey.v1.CreateVariablesRequest} returns this
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.setDataFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string organization_code = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.getOrganizationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateVariablesRequest} returns this
 */
proto.pando.api.survey.v1.CreateVariablesRequest.prototype.setOrganizationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteSurveyVariableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    variableGuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteSurveyVariableRequest;
  return proto.pando.api.survey.v1.DeleteSurveyVariableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteSurveyVariableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVariableGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} returns this
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string variable_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.prototype.getVariableGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteSurveyVariableRequest} returns this
 */
proto.pando.api.survey.v1.DeleteSurveyVariableRequest.prototype.setVariableGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetVariablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetVariablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetVariablesRequest}
 */
proto.pando.api.survey.v1.GetVariablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetVariablesRequest;
  return proto.pando.api.survey.v1.GetVariablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetVariablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetVariablesRequest}
 */
proto.pando.api.survey.v1.GetVariablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetVariablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetVariablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string organization_code = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.getOrganizationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.setOrganizationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool include_deleted = 3;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetVariablesRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetAnswerOptionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    organizationCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionsRequest}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetAnswerOptionsRequest;
  return proto.pando.api.survey.v1.GetAnswerOptionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionsRequest}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationCode(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetAnswerOptionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getOrganizationCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string filter = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} returns this
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool include_deleted = 2;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} returns this
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string organization_code = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.getOrganizationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} returns this
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.setOrganizationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} returns this
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionsRequest} returns this
 */
proto.pando.api.survey.v1.GetAnswerOptionsRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveysRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveysRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveysRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    includeOldVersions: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    includeUnpublishedVersions: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest}
 */
proto.pando.api.survey.v1.GetSurveysRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveysRequest;
  return proto.pando.api.survey.v1.GetSurveysRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveysRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest}
 */
proto.pando.api.survey.v1.GetSurveysRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeOldVersions(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeUnpublishedVersions(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveysRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveysRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveysRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIncludeOldVersions();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIncludeUnpublishedVersions();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string organization_code = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.getOrganizationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.setOrganizationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool include_deleted = 3;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool include_old_versions = 4;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.getIncludeOldVersions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.setIncludeOldVersions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool include_unpublished_versions = 5;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.getIncludeUnpublishedVersions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.setIncludeUnpublishedVersions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveysRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveysRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveyVersionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveyVersionsRequest}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveyVersionsRequest;
  return proto.pando.api.survey.v1.GetSurveyVersionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveyVersionsRequest}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveyVersionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool include_deleted = 4;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVersionsRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVersionsRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveyMediaListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    versionGuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveyMediaListRequest;
  return proto.pando.api.survey.v1.GetSurveyMediaListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionGuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveyMediaListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersionGuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version_guid = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.getVersionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.setVersionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool include_deleted = 4;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveyMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyMediaListRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveyVariablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    versionGuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveyVariablesRequest;
  return proto.pando.api.survey.v1.GetSurveyVariablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionGuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveyVariablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersionGuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version_guid = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.getVersionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.setVersionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool include_deleted = 4;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetSurveyVariablesRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyVariablesRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetQuestionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetQuestionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetQuestionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    versionGuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetQuestionsRequest;
  return proto.pando.api.survey.v1.GetQuestionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetQuestionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionGuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetQuestionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetQuestionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetQuestionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersionGuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest} returns this
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest} returns this
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version_guid = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.getVersionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest} returns this
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.setVersionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool include_deleted = 4;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest} returns this
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest} returns this
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetQuestionsRequest} returns this
 */
proto.pando.api.survey.v1.GetQuestionsRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetVariableMediaListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetVariableMediaListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    includeDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    page: jspb.Message.getFieldWithDefault(msg, 100, 0),
    resultsPerPage: jspb.Message.getFieldWithDefault(msg, 101, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetVariableMediaListRequest}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetVariableMediaListRequest;
  return proto.pando.api.survey.v1.GetVariableMediaListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetVariableMediaListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetVariableMediaListRequest}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeDeleted(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 101:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setResultsPerPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetVariableMediaListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetVariableMediaListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncludeDeleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      100,
      f
    );
  }
  f = message.getResultsPerPage();
  if (f !== 0) {
    writer.writeInt32(
      101,
      f
    );
  }
};


/**
 * optional string variable_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.getVariableGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariableMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.setVariableGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariableMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool include_deleted = 3;
 * @return {boolean}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.getIncludeDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.GetVariableMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.setIncludeDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 page = 100;
 * @return {number}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetVariableMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 100, value);
};


/**
 * optional int32 results_per_page = 101;
 * @return {number}
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.getResultsPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 101, 0));
};


/**
 * @param {number} value
 * @return {!proto.pando.api.survey.v1.GetVariableMediaListRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableMediaListRequest.prototype.setResultsPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 101, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteSurveyMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaGuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteSurveyMediaRequest;
  return proto.pando.api.survey.v1.DeleteSurveyMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteSurveyMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} returns this
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.prototype.getMediaGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteSurveyMediaRequest} returns this
 */
proto.pando.api.survey.v1.DeleteSurveyMediaRequest.prototype.setMediaGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteVariableMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaGuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteVariableMediaRequest}
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteVariableMediaRequest;
  return proto.pando.api.survey.v1.DeleteVariableMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteVariableMediaRequest}
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaGuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteVariableMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string variable_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.getVariableGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} returns this
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.setVariableGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.getMediaGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} returns this
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.setMediaGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteVariableMediaRequest} returns this
 */
proto.pando.api.survey.v1.DeleteVariableMediaRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UpdateSurveyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UpdateSurveyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    survey: (f = msg.getSurvey()) && pando_api_survey_v1_shared_pb.Survey.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyRequest}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UpdateSurveyRequest;
  return proto.pando.api.survey.v1.UpdateSurveyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UpdateSurveyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyRequest}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pando_api_survey_v1_shared_pb.Survey;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Survey.deserializeBinaryFromReader);
      msg.setSurvey(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UpdateSurveyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UpdateSurveyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurvey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pando_api_survey_v1_shared_pb.Survey.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Survey survey = 1;
 * @return {?proto.pando.api.survey.v1.Survey}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.getSurvey = function() {
  return /** @type{?proto.pando.api.survey.v1.Survey} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Survey, 1));
};


/**
 * @param {?proto.pando.api.survey.v1.Survey|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateSurveyRequest} returns this
*/
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.setSurvey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyRequest} returns this
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.clearSurvey = function() {
  return this.setSurvey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.hasSurvey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateSurveyRequest} returns this
*/
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyRequest} returns this
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateSurveyRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UpdateQuestionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UpdateQuestionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    question: (f = msg.getQuestion()) && pando_api_survey_v1_shared_pb.Question.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UpdateQuestionRequest}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UpdateQuestionRequest;
  return proto.pando.api.survey.v1.UpdateQuestionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UpdateQuestionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UpdateQuestionRequest}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pando_api_survey_v1_shared_pb.Question;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Question.deserializeBinaryFromReader);
      msg.setQuestion(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UpdateQuestionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UpdateQuestionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pando_api_survey_v1_shared_pb.Question.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Question question = 1;
 * @return {?proto.pando.api.survey.v1.Question}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.getQuestion = function() {
  return /** @type{?proto.pando.api.survey.v1.Question} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Question, 1));
};


/**
 * @param {?proto.pando.api.survey.v1.Question|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateQuestionRequest} returns this
*/
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.setQuestion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateQuestionRequest} returns this
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.clearQuestion = function() {
  return this.setQuestion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.hasQuestion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateQuestionRequest} returns this
*/
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateQuestionRequest} returns this
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateQuestionRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UpdatePlaybackDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playbackData: (f = msg.getPlaybackData()) && pando_api_survey_v1_shared_pb.PlaybackData.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UpdatePlaybackDataRequest;
  return proto.pando.api.survey.v1.UpdatePlaybackDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pando_api_survey_v1_shared_pb.PlaybackData;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinaryFromReader);
      msg.setPlaybackData(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UpdatePlaybackDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaybackData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pando_api_survey_v1_shared_pb.PlaybackData.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlaybackData playback_data = 1;
 * @return {?proto.pando.api.survey.v1.PlaybackData}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.getPlaybackData = function() {
  return /** @type{?proto.pando.api.survey.v1.PlaybackData} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.PlaybackData, 1));
};


/**
 * @param {?proto.pando.api.survey.v1.PlaybackData|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} returns this
*/
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.setPlaybackData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} returns this
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.clearPlaybackData = function() {
  return this.setPlaybackData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.hasPlaybackData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} returns this
*/
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdatePlaybackDataRequest} returns this
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdatePlaybackDataRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    destination: (f = msg.getDestination()) && pando_api_survey_v1_shared_pb.SurveyQuestionDestination.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest;
  return proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pando_api_survey_v1_shared_pb.SurveyQuestionDestination;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pando_api_survey_v1_shared_pb.SurveyQuestionDestination.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional SurveyQuestionDestination destination = 1;
 * @return {?proto.pando.api.survey.v1.SurveyQuestionDestination}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.getDestination = function() {
  return /** @type{?proto.pando.api.survey.v1.SurveyQuestionDestination} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.SurveyQuestionDestination, 1));
};


/**
 * @param {?proto.pando.api.survey.v1.SurveyQuestionDestination|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} returns this
*/
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} returns this
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} returns this
*/
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest} returns this
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateSurveyQuestionDestinationRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UpdateVariableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UpdateVariableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateVariableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    variable: (f = msg.getVariable()) && pando_api_survey_v1_shared_pb.Variable.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UpdateVariableRequest}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UpdateVariableRequest;
  return proto.pando.api.survey.v1.UpdateVariableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UpdateVariableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UpdateVariableRequest}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pando_api_survey_v1_shared_pb.Variable;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Variable.deserializeBinaryFromReader);
      msg.setVariable(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UpdateVariableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UpdateVariableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateVariableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariable();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pando_api_survey_v1_shared_pb.Variable.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Variable variable = 1;
 * @return {?proto.pando.api.survey.v1.Variable}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.getVariable = function() {
  return /** @type{?proto.pando.api.survey.v1.Variable} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Variable, 1));
};


/**
 * @param {?proto.pando.api.survey.v1.Variable|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateVariableRequest} returns this
*/
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.setVariable = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateVariableRequest} returns this
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.clearVariable = function() {
  return this.setVariable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.hasVariable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateVariableRequest} returns this
*/
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateVariableRequest} returns this
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateVariableRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.UpdateAnswerOptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerOption: (f = msg.getAnswerOption()) && pando_api_survey_v1_shared_pb.AnswerOption.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.UpdateAnswerOptionRequest;
  return proto.pando.api.survey.v1.UpdateAnswerOptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pando_api_survey_v1_shared_pb.AnswerOption;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinaryFromReader);
      msg.setAnswerOption(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.UpdateAnswerOptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerOption();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      pando_api_survey_v1_shared_pb.AnswerOption.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional AnswerOption answer_option = 1;
 * @return {?proto.pando.api.survey.v1.AnswerOption}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.getAnswerOption = function() {
  return /** @type{?proto.pando.api.survey.v1.AnswerOption} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.AnswerOption, 1));
};


/**
 * @param {?proto.pando.api.survey.v1.AnswerOption|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} returns this
*/
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.setAnswerOption = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} returns this
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.clearAnswerOption = function() {
  return this.setAnswerOption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.hasAnswerOption = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} returns this
*/
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.UpdateAnswerOptionRequest} returns this
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.UpdateAnswerOptionRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionGuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveyRequest}
 */
proto.pando.api.survey.v1.GetSurveyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveyRequest;
  return proto.pando.api.survey.v1.GetSurveyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveyRequest}
 */
proto.pando.api.survey.v1.GetSurveyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyRequest.prototype.getVersionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyRequest.prototype.setVersionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteSurveyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteSurveyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteSurveyRequest;
  return proto.pando.api.survey.v1.DeleteSurveyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteSurveyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteSurveyRequest} returns this
 */
proto.pando.api.survey.v1.DeleteSurveyRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetQuestionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetQuestionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetQuestionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetQuestionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetQuestionRequest}
 */
proto.pando.api.survey.v1.GetQuestionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetQuestionRequest;
  return proto.pando.api.survey.v1.GetQuestionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetQuestionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetQuestionRequest}
 */
proto.pando.api.survey.v1.GetQuestionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetQuestionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetQuestionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetQuestionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetQuestionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetQuestionRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetQuestionRequest} returns this
 */
proto.pando.api.survey.v1.GetQuestionRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteQuestionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteQuestionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteQuestionRequest}
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteQuestionRequest;
  return proto.pando.api.survey.v1.DeleteQuestionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteQuestionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteQuestionRequest}
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteQuestionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteQuestionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteQuestionRequest} returns this
 */
proto.pando.api.survey.v1.DeleteQuestionRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetAnswerOptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionRequest}
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetAnswerOptionRequest;
  return proto.pando.api.survey.v1.GetAnswerOptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionRequest}
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetAnswerOptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetAnswerOptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetAnswerOptionRequest} returns this
 */
proto.pando.api.survey.v1.GetAnswerOptionRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteAnswerOptionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest}
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteAnswerOptionRequest;
  return proto.pando.api.survey.v1.DeleteAnswerOptionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest}
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteAnswerOptionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteAnswerOptionRequest} returns this
 */
proto.pando.api.survey.v1.DeleteAnswerOptionRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetPlaybackDataListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetPlaybackDataListRequest}
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetPlaybackDataListRequest;
  return proto.pando.api.survey.v1.GetPlaybackDataListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetPlaybackDataListRequest}
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetPlaybackDataListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string question_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.prototype.getQuestionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetPlaybackDataListRequest} returns this
 */
proto.pando.api.survey.v1.GetPlaybackDataListRequest.prototype.setQuestionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest;
  return proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest;
  return proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string question_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.prototype.getQuestionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyQuestionDestinationsRequest.prototype.setQuestionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest;
  return proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest} returns this
 */
proto.pando.api.survey.v1.DeleteSurveyQuestionDestinationRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetVariableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetVariableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetVariableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetVariableRequest}
 */
proto.pando.api.survey.v1.GetVariableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetVariableRequest;
  return proto.pando.api.survey.v1.GetVariableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetVariableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetVariableRequest}
 */
proto.pando.api.survey.v1.GetVariableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetVariableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetVariableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetVariableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariableRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariableRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteVariableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteVariableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteVariableRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteVariableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteVariableRequest}
 */
proto.pando.api.survey.v1.DeleteVariableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteVariableRequest;
  return proto.pando.api.survey.v1.DeleteVariableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteVariableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteVariableRequest}
 */
proto.pando.api.survey.v1.DeleteVariableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteVariableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteVariableRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteVariableRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteVariableRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteVariableRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteVariableRequest} returns this
 */
proto.pando.api.survey.v1.DeleteVariableRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeletePlaybackDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeletePlaybackDataRequest}
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeletePlaybackDataRequest;
  return proto.pando.api.survey.v1.DeletePlaybackDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeletePlaybackDataRequest}
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeletePlaybackDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeletePlaybackDataRequest} returns this
 */
proto.pando.api.survey.v1.DeletePlaybackDataRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteMediaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteMediaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteMediaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteMediaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteMediaRequest}
 */
proto.pando.api.survey.v1.DeleteMediaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteMediaRequest;
  return proto.pando.api.survey.v1.DeleteMediaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteMediaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteMediaRequest}
 */
proto.pando.api.survey.v1.DeleteMediaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteMediaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteMediaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteMediaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteMediaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteMediaRequest.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteMediaRequest} returns this
 */
proto.pando.api.survey.v1.DeleteMediaRequest.prototype.setGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.CreateSurveyVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    preSurveyText: jspb.Message.getFieldWithDefault(msg, 4, ""),
    firstQuestionGuid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.CreateSurveyVersionRequest}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.CreateSurveyVersionRequest;
  return proto.pando.api.survey.v1.CreateSurveyVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.CreateSurveyVersionRequest}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreSurveyText(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstQuestionGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.CreateSurveyVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPreSurveyText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFirstQuestionGuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} returns this
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} returns this
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} returns this
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string pre_survey_text = 4;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.getPreSurveyText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} returns this
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.setPreSurveyText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string first_question_guid = 5;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.getFirstQuestionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateSurveyVersionRequest} returns this
 */
proto.pando.api.survey.v1.CreateSurveyVersionRequest.prototype.setFirstQuestionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.DeleteSurveyVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.DeleteSurveyVersionRequest;
  return proto.pando.api.survey.v1.DeleteSurveyVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest}
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.DeleteSurveyVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.prototype.getVersionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.DeleteSurveyVersionRequest} returns this
 */
proto.pando.api.survey.v1.DeleteSurveyVersionRequest.prototype.setVersionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetSurveyDocumentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest}
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetSurveyDocumentsRequest;
  return proto.pando.api.survey.v1.GetSurveyDocumentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest}
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetSurveyDocumentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetSurveyDocumentsRequest} returns this
 */
proto.pando.api.survey.v1.GetSurveyDocumentsRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.SurveyVariable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.SurveyVariable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SurveyVariable.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    variableGuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    required: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.SurveyVariable}
 */
proto.pando.api.survey.v1.SurveyVariable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.SurveyVariable;
  return proto.pando.api.survey.v1.SurveyVariable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.SurveyVariable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.SurveyVariable}
 */
proto.pando.api.survey.v1.SurveyVariable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableGuid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.SurveyVariable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.SurveyVariable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SurveyVariable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVariableGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SurveyVariable} returns this
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string variable_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.getVariableGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SurveyVariable} returns this
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.setVariableGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool required = 3;
 * @return {boolean}
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.SurveyVariable} returns this
 */
proto.pando.api.survey.v1.SurveyVariable.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pando.api.survey.v1.CreateInstanceRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.DataSourceCase = {
  DATA_SOURCE_NOT_SET: 0,
  DATA: 2,
  RECORD_GUID: 3
};

/**
 * @return {proto.pando.api.survey.v1.CreateInstanceRequest.DataSourceCase}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getDataSourceCase = function() {
  return /** @type {proto.pando.api.survey.v1.CreateInstanceRequest.DataSourceCase} */(jspb.Message.computeOneofCase(this, proto.pando.api.survey.v1.CreateInstanceRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.CreateInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.CreateInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.CreateInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: (f = msg.getData()) && pando_api_shared_pb.DataRecord.toObject(includeInstance, f),
    recordGuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contactInfo: (f = msg.getContactInfo()) && pando_api_shared_pb.ContactInfo.toObject(includeInstance, f),
    respondentName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sendLink: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    userId: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.CreateInstanceRequest;
  return proto.pando.api.survey.v1.CreateInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.CreateInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = new pando_api_shared_pb.DataRecord;
      reader.readMessage(value,pando_api_shared_pb.DataRecord.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordGuid(value);
      break;
    case 4:
      var value = new pando_api_shared_pb.ContactInfo;
      reader.readMessage(value,pando_api_shared_pb.ContactInfo.deserializeBinaryFromReader);
      msg.setContactInfo(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRespondentName(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendLink(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.CreateInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.CreateInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.CreateInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pando_api_shared_pb.DataRecord.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContactInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      pando_api_shared_pb.ContactInfo.serializeBinaryToWriter
    );
  }
  f = message.getRespondentName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSendLink();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.DataRecord data = 2;
 * @return {?proto.pando.api.DataRecord}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getData = function() {
  return /** @type{?proto.pando.api.DataRecord} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.DataRecord, 2));
};


/**
 * @param {?proto.pando.api.DataRecord|undefined} value
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
*/
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pando.api.survey.v1.CreateInstanceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string record_guid = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getRecordGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.setRecordGuid = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.pando.api.survey.v1.CreateInstanceRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.clearRecordGuid = function() {
  return jspb.Message.setOneofField(this, 3, proto.pando.api.survey.v1.CreateInstanceRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.hasRecordGuid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional pando.api.ContactInfo contact_info = 4;
 * @return {?proto.pando.api.ContactInfo}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getContactInfo = function() {
  return /** @type{?proto.pando.api.ContactInfo} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.ContactInfo, 4));
};


/**
 * @param {?proto.pando.api.ContactInfo|undefined} value
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
*/
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.setContactInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.clearContactInfo = function() {
  return this.setContactInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.hasContactInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string respondent_name = 6;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getRespondentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.setRespondentName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool send_link = 7;
 * @return {boolean}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getSendLink = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.setSendLink = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string user_id = 8;
 * @return {string}
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.CreateInstanceRequest} returns this
 */
proto.pando.api.survey.v1.CreateInstanceRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.SurveyESignTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SurveyESignTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    templateGuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isRequired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.SurveyESignTemplate}
 */
proto.pando.api.survey.v1.SurveyESignTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.SurveyESignTemplate;
  return proto.pando.api.survey.v1.SurveyESignTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.SurveyESignTemplate}
 */
proto.pando.api.survey.v1.SurveyESignTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateGuid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRequired(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.SurveyESignTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.SurveyESignTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SurveyESignTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplateGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SurveyESignTemplate} returns this
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string template_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.getTemplateGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SurveyESignTemplate} returns this
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.setTemplateGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_required = 3;
 * @return {boolean}
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.getIsRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.SurveyESignTemplate} returns this
 */
proto.pando.api.survey.v1.SurveyESignTemplate.prototype.setIsRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.SendInstanceLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.SendInstanceLink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SendInstanceLink.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contactType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    contactInfo: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.SendInstanceLink}
 */
proto.pando.api.survey.v1.SendInstanceLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.SendInstanceLink;
  return proto.pando.api.survey.v1.SendInstanceLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.SendInstanceLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.SendInstanceLink}
 */
proto.pando.api.survey.v1.SendInstanceLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceGuid(value);
      break;
    case 2:
      var value = /** @type {!proto.pando.api.ContactType} */ (reader.readEnum());
      msg.setContactType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.SendInstanceLink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.SendInstanceLink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SendInstanceLink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContactType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getContactInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string instance_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.getInstanceGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SendInstanceLink} returns this
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.setInstanceGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.ContactType contact_type = 2;
 * @return {!proto.pando.api.ContactType}
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.getContactType = function() {
  return /** @type {!proto.pando.api.ContactType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pando.api.ContactType} value
 * @return {!proto.pando.api.survey.v1.SendInstanceLink} returns this
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.setContactType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string contact_info = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.getContactInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SendInstanceLink} returns this
 */
proto.pando.api.survey.v1.SendInstanceLink.prototype.setContactInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.SurveyInstanceESignSignatory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signatoryGuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory}
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.SurveyInstanceESignSignatory;
  return proto.pando.api.survey.v1.SurveyInstanceESignSignatory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory}
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignatoryGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.SurveyInstanceESignSignatory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignatoryGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string instance_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.prototype.getInstanceGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} returns this
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.prototype.setInstanceGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signatory_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.prototype.getSignatoryGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.SurveyInstanceESignSignatory} returns this
 */
proto.pando.api.survey.v1.SurveyInstanceESignSignatory.prototype.setSignatoryGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetVariableTemplateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyGuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionGuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataFormat: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateRequest}
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetVariableTemplateRequest;
  return proto.pando.api.survey.v1.GetVariableTemplateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateRequest}
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionGuid(value);
      break;
    case 3:
      var value = /** @type {!proto.pando.api.FileType} */ (reader.readEnum());
      msg.setDataFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetVariableTemplateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string survey_guid = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.getSurveyGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.setSurveyGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.getVersionGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.setVersionGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.FileType data_format = 3;
 * @return {!proto.pando.api.FileType}
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.getDataFormat = function() {
  return /** @type {!proto.pando.api.FileType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pando.api.FileType} value
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateRequest} returns this
 */
proto.pando.api.survey.v1.GetVariableTemplateRequest.prototype.setDataFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.GetVariableTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateResponse}
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.GetVariableTemplateResponse;
  return proto.pando.api.survey.v1.GetVariableTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateResponse}
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.GetVariableTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.GetVariableTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string data = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.GetVariableTemplateResponse} returns this
 */
proto.pando.api.survey.v1.GetVariableTemplateResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.pando.api.survey.v1);
