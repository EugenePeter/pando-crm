// source: pando/api/survey/v1/events.proto
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

var pando_api_survey_v1_shared_pb = require('../../../../pando/api/survey/v1/shared_pb.js');
goog.object.extend(proto, pando_api_survey_v1_shared_pb);
var pando_api_shared_pb = require('../../../../pando/api/shared_pb.js');
goog.object.extend(proto, pando_api_shared_pb);
goog.exportSymbol('proto.pando.api.survey.v1.events.AnswerOptionAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.AnswerOptionChanged', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.AnswerOptionCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.AnswerOptionDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.EventTypes', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.InstanceOwnerCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.InstanceOwnerDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.PlaybackDataAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.PlaybackDataChanged', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.PlaybackDataCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.PlaybackDataDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SendSurveyRequest', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAnswerCompleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAnswerCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAnswerRetrieved', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAnswerSaved', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAttemptCompleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAttemptRetrieved', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyAttemptStarted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyChanged', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyESignTemplateCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyInstanceAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyInstanceCompleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyInstanceCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyInstanceDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyMediaAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyMediaDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyMediaUploaded', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionChanged', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyVariableAccessed', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyVariableCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyVariableDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.SurveyVersionCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.VariableCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.VariableDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.VariableMediaCreated', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.VariableMediaDeleted', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.VariableRetrieved', null, global);
goog.exportSymbol('proto.pando.api.survey.v1.events.VariableUpdated', null, global);
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
proto.pando.api.survey.v1.events.SurveyInstanceCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyInstanceCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyInstanceCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyInstanceCreated';
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
proto.pando.api.survey.v1.events.SurveyInstanceAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyInstanceAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyInstanceAccessed.displayName = 'proto.pando.api.survey.v1.events.SurveyInstanceAccessed';
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
proto.pando.api.survey.v1.events.SurveyInstanceDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyInstanceDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyInstanceDeleted.displayName = 'proto.pando.api.survey.v1.events.SurveyInstanceDeleted';
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
proto.pando.api.survey.v1.events.SurveyInstanceCompleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyInstanceCompleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyInstanceCompleted.displayName = 'proto.pando.api.survey.v1.events.SurveyInstanceCompleted';
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
proto.pando.api.survey.v1.events.SurveyAttemptStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAttemptStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAttemptStarted.displayName = 'proto.pando.api.survey.v1.events.SurveyAttemptStarted';
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
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAttemptRetrieved, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.displayName = 'proto.pando.api.survey.v1.events.SurveyAttemptRetrieved';
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
proto.pando.api.survey.v1.events.SurveyAttemptCompleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAttemptCompleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAttemptCompleted.displayName = 'proto.pando.api.survey.v1.events.SurveyAttemptCompleted';
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
proto.pando.api.survey.v1.events.SurveyMediaAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyMediaAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyMediaAccessed.displayName = 'proto.pando.api.survey.v1.events.SurveyMediaAccessed';
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
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.displayName = 'proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded';
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
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.displayName = 'proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed';
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
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.displayName = 'proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted';
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
proto.pando.api.survey.v1.events.SurveyAnswerCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAnswerCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAnswerCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyAnswerCreated';
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
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAnswerRetrieved, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.displayName = 'proto.pando.api.survey.v1.events.SurveyAnswerRetrieved';
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
proto.pando.api.survey.v1.events.SurveyAnswerSaved = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAnswerSaved, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAnswerSaved.displayName = 'proto.pando.api.survey.v1.events.SurveyAnswerSaved';
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
proto.pando.api.survey.v1.events.SurveyAnswerCompleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAnswerCompleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAnswerCompleted.displayName = 'proto.pando.api.survey.v1.events.SurveyAnswerCompleted';
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
proto.pando.api.survey.v1.events.SendSurveyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SendSurveyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SendSurveyRequest.displayName = 'proto.pando.api.survey.v1.events.SendSurveyRequest';
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
proto.pando.api.survey.v1.events.InstanceOwnerCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.pando.api.survey.v1.events.InstanceOwnerCreated.repeatedFields_, null);
};
goog.inherits(proto.pando.api.survey.v1.events.InstanceOwnerCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.InstanceOwnerCreated.displayName = 'proto.pando.api.survey.v1.events.InstanceOwnerCreated';
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
proto.pando.api.survey.v1.events.InstanceOwnerDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.pando.api.survey.v1.events.InstanceOwnerDeleted.repeatedFields_, null);
};
goog.inherits(proto.pando.api.survey.v1.events.InstanceOwnerDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.InstanceOwnerDeleted.displayName = 'proto.pando.api.survey.v1.events.InstanceOwnerDeleted';
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
proto.pando.api.survey.v1.events.SurveyMediaUploaded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyMediaUploaded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyMediaUploaded.displayName = 'proto.pando.api.survey.v1.events.SurveyMediaUploaded';
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
proto.pando.api.survey.v1.events.SurveyMediaDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyMediaDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyMediaDeleted.displayName = 'proto.pando.api.survey.v1.events.SurveyMediaDeleted';
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
proto.pando.api.survey.v1.events.SurveyCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyCreated';
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
proto.pando.api.survey.v1.events.SurveyAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyAccessed.displayName = 'proto.pando.api.survey.v1.events.SurveyAccessed';
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
proto.pando.api.survey.v1.events.SurveyDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyDeleted.displayName = 'proto.pando.api.survey.v1.events.SurveyDeleted';
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
proto.pando.api.survey.v1.events.SurveyChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyChanged.displayName = 'proto.pando.api.survey.v1.events.SurveyChanged';
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
proto.pando.api.survey.v1.events.SurveyQuestionCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionCreated';
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
proto.pando.api.survey.v1.events.SurveyQuestionAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionAccessed.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionAccessed';
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
proto.pando.api.survey.v1.events.SurveyQuestionDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionDeleted.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionDeleted';
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
proto.pando.api.survey.v1.events.SurveyQuestionChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionChanged.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionChanged';
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated';
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed';
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted';
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.displayName = 'proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged';
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
proto.pando.api.survey.v1.events.AnswerOptionCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.AnswerOptionCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.AnswerOptionCreated.displayName = 'proto.pando.api.survey.v1.events.AnswerOptionCreated';
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
proto.pando.api.survey.v1.events.AnswerOptionAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.AnswerOptionAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.AnswerOptionAccessed.displayName = 'proto.pando.api.survey.v1.events.AnswerOptionAccessed';
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
proto.pando.api.survey.v1.events.AnswerOptionDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.AnswerOptionDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.AnswerOptionDeleted.displayName = 'proto.pando.api.survey.v1.events.AnswerOptionDeleted';
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
proto.pando.api.survey.v1.events.AnswerOptionChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.AnswerOptionChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.AnswerOptionChanged.displayName = 'proto.pando.api.survey.v1.events.AnswerOptionChanged';
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
proto.pando.api.survey.v1.events.PlaybackDataCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.PlaybackDataCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.PlaybackDataCreated.displayName = 'proto.pando.api.survey.v1.events.PlaybackDataCreated';
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
proto.pando.api.survey.v1.events.PlaybackDataAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.PlaybackDataAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.PlaybackDataAccessed.displayName = 'proto.pando.api.survey.v1.events.PlaybackDataAccessed';
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
proto.pando.api.survey.v1.events.PlaybackDataDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.PlaybackDataDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.PlaybackDataDeleted.displayName = 'proto.pando.api.survey.v1.events.PlaybackDataDeleted';
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
proto.pando.api.survey.v1.events.PlaybackDataChanged = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.PlaybackDataChanged, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.PlaybackDataChanged.displayName = 'proto.pando.api.survey.v1.events.PlaybackDataChanged';
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
proto.pando.api.survey.v1.events.VariableCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.VariableCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.VariableCreated.displayName = 'proto.pando.api.survey.v1.events.VariableCreated';
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
proto.pando.api.survey.v1.events.VariableRetrieved = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.VariableRetrieved, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.VariableRetrieved.displayName = 'proto.pando.api.survey.v1.events.VariableRetrieved';
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
proto.pando.api.survey.v1.events.VariableDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.VariableDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.VariableDeleted.displayName = 'proto.pando.api.survey.v1.events.VariableDeleted';
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
proto.pando.api.survey.v1.events.VariableUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.VariableUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.VariableUpdated.displayName = 'proto.pando.api.survey.v1.events.VariableUpdated';
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
proto.pando.api.survey.v1.events.SurveyVariableCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyVariableCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyVariableCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyVariableCreated';
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
proto.pando.api.survey.v1.events.SurveyVariableAccessed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyVariableAccessed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyVariableAccessed.displayName = 'proto.pando.api.survey.v1.events.SurveyVariableAccessed';
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
proto.pando.api.survey.v1.events.SurveyVariableDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyVariableDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyVariableDeleted.displayName = 'proto.pando.api.survey.v1.events.SurveyVariableDeleted';
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
proto.pando.api.survey.v1.events.SurveyVersionCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyVersionCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyVersionCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyVersionCreated';
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
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.displayName = 'proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated';
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
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.displayName = 'proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted';
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
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyESignTemplateCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.displayName = 'proto.pando.api.survey.v1.events.SurveyESignTemplateCreated';
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
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.displayName = 'proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted';
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
proto.pando.api.survey.v1.events.VariableMediaCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.VariableMediaCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.VariableMediaCreated.displayName = 'proto.pando.api.survey.v1.events.VariableMediaCreated';
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
proto.pando.api.survey.v1.events.VariableMediaDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.pando.api.survey.v1.events.VariableMediaDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pando.api.survey.v1.events.VariableMediaDeleted.displayName = 'proto.pando.api.survey.v1.events.VariableMediaDeleted';
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
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyInstanceCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCreated}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyInstanceCreated;
  return proto.pando.api.survey.v1.events.SurveyInstanceCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCreated}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyInstanceCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyInstanceAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed}
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyInstanceAccessed;
  return proto.pando.api.survey.v1.events.SurveyInstanceAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed}
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyInstanceAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed} returns this
*/
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyInstanceAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyInstanceDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted}
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyInstanceDeleted;
  return proto.pando.api.survey.v1.events.SurveyInstanceDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted}
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyInstanceDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyInstanceDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyInstanceCompleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    completionType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyInstanceCompleted;
  return proto.pando.api.survey.v1.events.SurveyInstanceCompleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {!proto.pando.api.survey.v1.CompletionType} */ (reader.readEnum());
      msg.setCompletionType(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyInstanceCompleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompletionType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.CompletionType completion_type = 2;
 * @return {!proto.pando.api.survey.v1.CompletionType}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.getCompletionType = function() {
  return /** @type {!proto.pando.api.survey.v1.CompletionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pando.api.survey.v1.CompletionType} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.setCompletionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyInstanceCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyInstanceCompleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAttemptStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.toObject = function(includeInstance, msg) {
  var f, obj = {
    attemptId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptStarted}
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAttemptStarted;
  return proto.pando.api.survey.v1.events.SurveyAttemptStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptStarted}
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttemptId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAttemptStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttemptId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string attempt_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.getAttemptId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptStarted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.setAttemptId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptStarted} returns this
*/
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptStarted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAttemptStarted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.toObject = function(includeInstance, msg) {
  var f, obj = {
    attemptId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved}
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAttemptRetrieved;
  return proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved}
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttemptId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttemptId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string attempt_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.getAttemptId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.setAttemptId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved} returns this
*/
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptRetrieved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAttemptRetrieved.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAttemptCompleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    attemptId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    completionType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted}
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAttemptCompleted;
  return proto.pando.api.survey.v1.events.SurveyAttemptCompleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted}
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttemptId(value);
      break;
    case 2:
      var value = /** @type {!proto.pando.api.survey.v1.CompletionType} */ (reader.readEnum());
      msg.setCompletionType(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAttemptCompleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttemptId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompletionType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string attempt_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.getAttemptId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.setAttemptId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.CompletionType completion_type = 2;
 * @return {!proto.pando.api.survey.v1.CompletionType}
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.getCompletionType = function() {
  return /** @type {!proto.pando.api.survey.v1.CompletionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pando.api.survey.v1.CompletionType} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.setCompletionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAttemptCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAttemptCompleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyMediaAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaAccessed}
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyMediaAccessed;
  return proto.pando.api.survey.v1.events.SurveyMediaAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaAccessed}
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyMediaAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaAccessed} returns this
*/
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyMediaAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded;
  return proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.getAnswerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.setAnswerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded} returns this
*/
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaUploaded.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    mediaId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed;
  return proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string media_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed} returns this
*/
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAnswerMediaAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    attemptId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attemptCompletionType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted}
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted;
  return proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted}
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttemptId(value);
      break;
    case 2:
      var value = /** @type {!proto.pando.api.survey.v1.CompletionType} */ (reader.readEnum());
      msg.setAttemptCompletionType(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttemptId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttemptCompletionType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string attempt_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.getAttemptId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.setAttemptId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.CompletionType attempt_completion_type = 2;
 * @return {!proto.pando.api.survey.v1.CompletionType}
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.getAttemptCompletionType = function() {
  return /** @type {!proto.pando.api.survey.v1.CompletionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pando.api.survey.v1.CompletionType} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.setAttemptCompletionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAnswerUploadCompleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAnswerCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCreated}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAnswerCreated;
  return proto.pando.api.survey.v1.events.SurveyAnswerCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCreated}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAnswerCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.getAnswerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.setAnswerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved}
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAnswerRetrieved;
  return proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved}
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.getAnswerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.setAnswerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved} returns this
*/
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerRetrieved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAnswerRetrieved.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAnswerSaved.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    answerText: jspb.Message.getFieldWithDefault(msg, 2, ""),
    answerType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    answerAction: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAnswerSaved;
  return proto.pando.api.survey.v1.events.SurveyAnswerSaved.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerText(value);
      break;
    case 3:
      var value = /** @type {!proto.pando.api.survey.v1.AnswerType} */ (reader.readEnum());
      msg.setAnswerType(value);
      break;
    case 4:
      var value = /** @type {!proto.pando.api.survey.v1.AnswerAction} */ (reader.readEnum());
      msg.setAnswerAction(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAnswerSaved.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnswerText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAnswerType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAnswerAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.getAnswerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.setAnswerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string answer_text = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.getAnswerText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.setAnswerText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.survey.v1.AnswerType answer_type = 3;
 * @return {!proto.pando.api.survey.v1.AnswerType}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.getAnswerType = function() {
  return /** @type {!proto.pando.api.survey.v1.AnswerType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pando.api.survey.v1.AnswerType} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.setAnswerType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional pando.api.survey.v1.AnswerAction answer_action = 4;
 * @return {!proto.pando.api.survey.v1.AnswerAction}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.getAnswerAction = function() {
  return /** @type {!proto.pando.api.survey.v1.AnswerAction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pando.api.survey.v1.AnswerAction} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.setAnswerAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} returns this
*/
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerSaved} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAnswerSaved.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAnswerCompleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    completionType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAnswerCompleted;
  return proto.pando.api.survey.v1.events.SurveyAnswerCompleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerId(value);
      break;
    case 2:
      var value = /** @type {!proto.pando.api.survey.v1.CompletionType} */ (reader.readEnum());
      msg.setCompletionType(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAnswerCompleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompletionType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.getAnswerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.setAnswerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.CompletionType completion_type = 2;
 * @return {!proto.pando.api.survey.v1.CompletionType}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.getCompletionType = function() {
  return /** @type {!proto.pando.api.survey.v1.CompletionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pando.api.survey.v1.CompletionType} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.setCompletionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAnswerCompleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAnswerCompleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SendSurveyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SendSurveyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    instanceGuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contactType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    contactInfo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contactOverridden: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    requestedBy: (f = msg.getRequestedBy()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SendSurveyRequest;
  return proto.pando.api.survey.v1.events.SendSurveyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SendSurveyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceGuid(value);
      break;
    case 3:
      var value = /** @type {!proto.pando.api.ContactType} */ (reader.readEnum());
      msg.setContactType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactInfo(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setContactOverridden(value);
      break;
    case 6:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setRequestedBy(value);
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
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SendSurveyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SendSurveyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInstanceGuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContactType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getContactInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContactOverridden();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRequestedBy();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest} returns this
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string instance_guid = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.getInstanceGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest} returns this
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.setInstanceGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.ContactType contact_type = 3;
 * @return {!proto.pando.api.ContactType}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.getContactType = function() {
  return /** @type {!proto.pando.api.ContactType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pando.api.ContactType} value
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest} returns this
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.setContactType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string contact_info = 4;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.getContactInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest} returns this
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.setContactInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool contact_overridden = 5;
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.getContactOverridden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest} returns this
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.setContactOverridden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional pando.api.UserMetadata requested_by = 6;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.getRequestedBy = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 6));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest} returns this
*/
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.setRequestedBy = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SendSurveyRequest} returns this
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.clearRequestedBy = function() {
  return this.setRequestedBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SendSurveyRequest.prototype.hasRequestedBy = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.repeatedFields_ = [2,3];



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
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.InstanceOwnerCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    clientIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated}
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.InstanceOwnerCreated;
  return proto.pando.api.survey.v1.events.InstanceOwnerCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated}
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addClientIds(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.InstanceOwnerCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getClientIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string user_ids = 2;
 * @return {!Array<string>}
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * repeated string client_ids = 3;
 * @return {!Array<string>}
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.getClientIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.setClientIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.addClientIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.clearClientIdsList = function() {
  return this.setClientIdsList([]);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
*/
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.InstanceOwnerCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.repeatedFields_ = [2,3];



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
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.InstanceOwnerDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    clientIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted}
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.InstanceOwnerDeleted;
  return proto.pando.api.survey.v1.events.InstanceOwnerDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted}
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addClientIds(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.InstanceOwnerDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getClientIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string user_ids = 2;
 * @return {!Array<string>}
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * repeated string client_ids = 3;
 * @return {!Array<string>}
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.getClientIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.setClientIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.addClientIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.clearClientIdsList = function() {
  return this.setClientIdsList([]);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
*/
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.InstanceOwnerDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.InstanceOwnerDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyMediaUploaded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaUploaded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaUploaded}
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyMediaUploaded;
  return proto.pando.api.survey.v1.events.SurveyMediaUploaded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaUploaded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaUploaded}
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyMediaUploaded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaUploaded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaUploaded} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaUploaded} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaUploaded} returns this
*/
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaUploaded} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyMediaUploaded.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyMediaDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaDeleted}
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyMediaDeleted;
  return proto.pando.api.survey.v1.events.SurveyMediaDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaDeleted}
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyMediaDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyMediaDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaDeleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyMediaDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyMediaDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyCreated}
 */
proto.pando.api.survey.v1.events.SurveyCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyCreated;
  return proto.pando.api.survey.v1.events.SurveyCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyCreated}
 */
proto.pando.api.survey.v1.events.SurveyCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyCreated.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyCreated.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyAccessed}
 */
proto.pando.api.survey.v1.events.SurveyAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyAccessed;
  return proto.pando.api.survey.v1.events.SurveyAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyAccessed}
 */
proto.pando.api.survey.v1.events.SurveyAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyAccessed} returns this
*/
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyDeleted}
 */
proto.pando.api.survey.v1.events.SurveyDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyDeleted;
  return proto.pando.api.survey.v1.events.SurveyDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyDeleted}
 */
proto.pando.api.survey.v1.events.SurveyDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyDeleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldModel: (f = msg.getOldModel()) && pando_api_survey_v1_shared_pb.Survey.toObject(includeInstance, f),
    newModel: (f = msg.getNewModel()) && pando_api_survey_v1_shared_pb.Survey.toObject(includeInstance, f),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged}
 */
proto.pando.api.survey.v1.events.SurveyChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyChanged;
  return proto.pando.api.survey.v1.events.SurveyChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged}
 */
proto.pando.api.survey.v1.events.SurveyChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 2:
      var value = new pando_api_survey_v1_shared_pb.Survey;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Survey.deserializeBinaryFromReader);
      msg.setOldModel(value);
      break;
    case 3:
      var value = new pando_api_survey_v1_shared_pb.Survey;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Survey.deserializeBinaryFromReader);
      msg.setNewModel(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pando_api_survey_v1_shared_pb.Survey.serializeBinaryToWriter
    );
  }
  f = message.getNewModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pando_api_survey_v1_shared_pb.Survey.serializeBinaryToWriter
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.Survey old_model = 2;
 * @return {?proto.pando.api.survey.v1.Survey}
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.getOldModel = function() {
  return /** @type{?proto.pando.api.survey.v1.Survey} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Survey, 2));
};


/**
 * @param {?proto.pando.api.survey.v1.Survey|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyChanged.prototype.setOldModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.clearOldModel = function() {
  return this.setOldModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.hasOldModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional pando.api.survey.v1.Survey new_model = 3;
 * @return {?proto.pando.api.survey.v1.Survey}
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.getNewModel = function() {
  return /** @type{?proto.pando.api.survey.v1.Survey} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Survey, 3));
};


/**
 * @param {?proto.pando.api.survey.v1.Survey|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyChanged.prototype.setNewModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.clearNewModel = function() {
  return this.setNewModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.hasNewModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyChanged.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyChanged.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionCreated}
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionCreated;
  return proto.pando.api.survey.v1.events.SurveyQuestionCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionCreated}
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string question_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed}
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionAccessed;
  return proto.pando.api.survey.v1.events.SurveyQuestionAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed}
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string question_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionDeleted;
  return proto.pando.api.survey.v1.events.SurveyQuestionDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string question_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldModel: (f = msg.getOldModel()) && pando_api_survey_v1_shared_pb.Question.toObject(includeInstance, f),
    newModel: (f = msg.getNewModel()) && pando_api_survey_v1_shared_pb.Question.toObject(includeInstance, f),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionChanged;
  return proto.pando.api.survey.v1.events.SurveyQuestionChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 2:
      var value = new pando_api_survey_v1_shared_pb.Question;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Question.deserializeBinaryFromReader);
      msg.setOldModel(value);
      break;
    case 3:
      var value = new pando_api_survey_v1_shared_pb.Question;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Question.deserializeBinaryFromReader);
      msg.setNewModel(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pando_api_survey_v1_shared_pb.Question.serializeBinaryToWriter
    );
  }
  f = message.getNewModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pando_api_survey_v1_shared_pb.Question.serializeBinaryToWriter
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string question_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.Question old_model = 2;
 * @return {?proto.pando.api.survey.v1.Question}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.getOldModel = function() {
  return /** @type{?proto.pando.api.survey.v1.Question} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Question, 2));
};


/**
 * @param {?proto.pando.api.survey.v1.Question|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.setOldModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.clearOldModel = function() {
  return this.setOldModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.hasOldModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional pando.api.survey.v1.Question new_model = 3;
 * @return {?proto.pando.api.survey.v1.Question}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.getNewModel = function() {
  return /** @type{?proto.pando.api.survey.v1.Question} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Question, 3));
};


/**
 * @param {?proto.pando.api.survey.v1.Question|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.setNewModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.clearNewModel = function() {
  return this.setNewModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.hasNewModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionChanged.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyQuestionDestinationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated;
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyQuestionDestinationId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyQuestionDestinationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_question_destination_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.getSurveyQuestionDestinationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.setSurveyQuestionDestinationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyQuestionDestinationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed;
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyQuestionDestinationId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyQuestionDestinationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_question_destination_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.getSurveyQuestionDestinationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.setSurveyQuestionDestinationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyQuestionDestinationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted;
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyQuestionDestinationId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyQuestionDestinationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_question_destination_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.getSurveyQuestionDestinationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.setSurveyQuestionDestinationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyQuestionDestinationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldModel: (f = msg.getOldModel()) && pando_api_survey_v1_shared_pb.SurveyQuestionDestination.toObject(includeInstance, f),
    newModel: (f = msg.getNewModel()) && pando_api_survey_v1_shared_pb.SurveyQuestionDestination.toObject(includeInstance, f),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged;
  return proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyQuestionDestinationId(value);
      break;
    case 2:
      var value = new pando_api_survey_v1_shared_pb.SurveyQuestionDestination;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinaryFromReader);
      msg.setOldModel(value);
      break;
    case 3:
      var value = new pando_api_survey_v1_shared_pb.SurveyQuestionDestination;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.SurveyQuestionDestination.deserializeBinaryFromReader);
      msg.setNewModel(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyQuestionDestinationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pando_api_survey_v1_shared_pb.SurveyQuestionDestination.serializeBinaryToWriter
    );
  }
  f = message.getNewModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pando_api_survey_v1_shared_pb.SurveyQuestionDestination.serializeBinaryToWriter
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_question_destination_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.getSurveyQuestionDestinationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.setSurveyQuestionDestinationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.SurveyQuestionDestination old_model = 2;
 * @return {?proto.pando.api.survey.v1.SurveyQuestionDestination}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.getOldModel = function() {
  return /** @type{?proto.pando.api.survey.v1.SurveyQuestionDestination} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.SurveyQuestionDestination, 2));
};


/**
 * @param {?proto.pando.api.survey.v1.SurveyQuestionDestination|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.setOldModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.clearOldModel = function() {
  return this.setOldModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.hasOldModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional pando.api.survey.v1.SurveyQuestionDestination new_model = 3;
 * @return {?proto.pando.api.survey.v1.SurveyQuestionDestination}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.getNewModel = function() {
  return /** @type{?proto.pando.api.survey.v1.SurveyQuestionDestination} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.SurveyQuestionDestination, 3));
};


/**
 * @param {?proto.pando.api.survey.v1.SurveyQuestionDestination|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.setNewModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.clearNewModel = function() {
  return this.setNewModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.hasNewModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} returns this
*/
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged} returns this
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyQuestionDestinationChanged.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.AnswerOptionCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerOptionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionCreated}
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.AnswerOptionCreated;
  return proto.pando.api.survey.v1.events.AnswerOptionCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionCreated}
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerOptionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.AnswerOptionCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerOptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_option_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.getAnswerOptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionCreated} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.setAnswerOptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionCreated} returns this
*/
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionCreated} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.AnswerOptionCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.AnswerOptionAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerOptionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionAccessed}
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.AnswerOptionAccessed;
  return proto.pando.api.survey.v1.events.AnswerOptionAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionAccessed}
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerOptionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.AnswerOptionAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerOptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_option_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.getAnswerOptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionAccessed} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.setAnswerOptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionAccessed} returns this
*/
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionAccessed} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.AnswerOptionAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.AnswerOptionDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerOptionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionDeleted}
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.AnswerOptionDeleted;
  return proto.pando.api.survey.v1.events.AnswerOptionDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionDeleted}
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerOptionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.AnswerOptionDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerOptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_option_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.getAnswerOptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionDeleted} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.setAnswerOptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionDeleted} returns this
*/
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionDeleted} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.AnswerOptionDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.AnswerOptionChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerOptionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldModel: (f = msg.getOldModel()) && pando_api_survey_v1_shared_pb.AnswerOption.toObject(includeInstance, f),
    newModel: (f = msg.getNewModel()) && pando_api_survey_v1_shared_pb.AnswerOption.toObject(includeInstance, f),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.AnswerOptionChanged;
  return proto.pando.api.survey.v1.events.AnswerOptionChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerOptionId(value);
      break;
    case 2:
      var value = new pando_api_survey_v1_shared_pb.AnswerOption;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinaryFromReader);
      msg.setOldModel(value);
      break;
    case 3:
      var value = new pando_api_survey_v1_shared_pb.AnswerOption;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.AnswerOption.deserializeBinaryFromReader);
      msg.setNewModel(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.AnswerOptionChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.AnswerOptionChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerOptionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pando_api_survey_v1_shared_pb.AnswerOption.serializeBinaryToWriter
    );
  }
  f = message.getNewModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pando_api_survey_v1_shared_pb.AnswerOption.serializeBinaryToWriter
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string answer_option_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.getAnswerOptionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.setAnswerOptionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.AnswerOption old_model = 2;
 * @return {?proto.pando.api.survey.v1.AnswerOption}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.getOldModel = function() {
  return /** @type{?proto.pando.api.survey.v1.AnswerOption} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.AnswerOption, 2));
};


/**
 * @param {?proto.pando.api.survey.v1.AnswerOption|undefined} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged} returns this
*/
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.setOldModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.clearOldModel = function() {
  return this.setOldModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.hasOldModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional pando.api.survey.v1.AnswerOption new_model = 3;
 * @return {?proto.pando.api.survey.v1.AnswerOption}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.getNewModel = function() {
  return /** @type{?proto.pando.api.survey.v1.AnswerOption} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.AnswerOption, 3));
};


/**
 * @param {?proto.pando.api.survey.v1.AnswerOption|undefined} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged} returns this
*/
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.setNewModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.clearNewModel = function() {
  return this.setNewModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.hasNewModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged} returns this
*/
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.AnswerOptionChanged} returns this
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.AnswerOptionChanged.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.PlaybackDataCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    playbackDataId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    questionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataCreated}
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.PlaybackDataCreated;
  return proto.pando.api.survey.v1.events.PlaybackDataCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataCreated}
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaybackDataId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.PlaybackDataCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaybackDataId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playback_data_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.getPlaybackDataId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataCreated} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.setPlaybackDataId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string question_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataCreated} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataCreated} returns this
*/
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataCreated} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.PlaybackDataCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.PlaybackDataAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    playbackDataId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    questionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataAccessed}
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.PlaybackDataAccessed;
  return proto.pando.api.survey.v1.events.PlaybackDataAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataAccessed}
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaybackDataId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.PlaybackDataAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaybackDataId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playback_data_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.getPlaybackDataId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataAccessed} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.setPlaybackDataId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string question_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataAccessed} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataAccessed} returns this
*/
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataAccessed} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.PlaybackDataAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.PlaybackDataDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    questionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playbackDataId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataDeleted}
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.PlaybackDataDeleted;
  return proto.pando.api.survey.v1.events.PlaybackDataDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataDeleted}
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaybackDataId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.PlaybackDataDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlaybackDataId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string question_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataDeleted} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string playback_data_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.getPlaybackDataId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataDeleted} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.setPlaybackDataId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataDeleted} returns this
*/
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataDeleted} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.PlaybackDataDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.PlaybackDataChanged.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataChanged} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.toObject = function(includeInstance, msg) {
  var f, obj = {
    playbackDataId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    questionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    oldModel: (f = msg.getOldModel()) && pando_api_survey_v1_shared_pb.PlaybackData.toObject(includeInstance, f),
    newModel: (f = msg.getNewModel()) && pando_api_survey_v1_shared_pb.PlaybackData.toObject(includeInstance, f),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.PlaybackDataChanged;
  return proto.pando.api.survey.v1.events.PlaybackDataChanged.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataChanged} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaybackDataId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionId(value);
      break;
    case 3:
      var value = new pando_api_survey_v1_shared_pb.PlaybackData;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinaryFromReader);
      msg.setOldModel(value);
      break;
    case 4:
      var value = new pando_api_survey_v1_shared_pb.PlaybackData;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.PlaybackData.deserializeBinaryFromReader);
      msg.setNewModel(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.PlaybackDataChanged.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.PlaybackDataChanged} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaybackDataId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuestionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOldModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pando_api_survey_v1_shared_pb.PlaybackData.serializeBinaryToWriter
    );
  }
  f = message.getNewModel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      pando_api_survey_v1_shared_pb.PlaybackData.serializeBinaryToWriter
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playback_data_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.getPlaybackDataId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.setPlaybackDataId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string question_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.getQuestionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.setQuestionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.survey.v1.PlaybackData old_model = 3;
 * @return {?proto.pando.api.survey.v1.PlaybackData}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.getOldModel = function() {
  return /** @type{?proto.pando.api.survey.v1.PlaybackData} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.PlaybackData, 3));
};


/**
 * @param {?proto.pando.api.survey.v1.PlaybackData|undefined} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
*/
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.setOldModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.clearOldModel = function() {
  return this.setOldModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.hasOldModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional pando.api.survey.v1.PlaybackData new_model = 4;
 * @return {?proto.pando.api.survey.v1.PlaybackData}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.getNewModel = function() {
  return /** @type{?proto.pando.api.survey.v1.PlaybackData} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.PlaybackData, 4));
};


/**
 * @param {?proto.pando.api.survey.v1.PlaybackData|undefined} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
*/
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.setNewModel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.clearNewModel = function() {
  return this.setNewModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.hasNewModel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
*/
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.PlaybackDataChanged} returns this
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.PlaybackDataChanged.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.VariableCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.VariableCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.VariableCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.VariableCreated}
 */
proto.pando.api.survey.v1.events.VariableCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.VariableCreated;
  return proto.pando.api.survey.v1.events.VariableCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.VariableCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.VariableCreated}
 */
proto.pando.api.survey.v1.events.VariableCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.VariableCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.VariableCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.VariableCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableCreated.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableCreated} returns this
 */
proto.pando.api.survey.v1.events.VariableCreated.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.VariableCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableCreated} returns this
*/
proto.pando.api.survey.v1.events.VariableCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableCreated} returns this
 */
proto.pando.api.survey.v1.events.VariableCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.VariableRetrieved.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.VariableRetrieved} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableRetrieved.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.VariableRetrieved}
 */
proto.pando.api.survey.v1.events.VariableRetrieved.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.VariableRetrieved;
  return proto.pando.api.survey.v1.events.VariableRetrieved.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.VariableRetrieved} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.VariableRetrieved}
 */
proto.pando.api.survey.v1.events.VariableRetrieved.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.VariableRetrieved.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.VariableRetrieved} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableRetrieved.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableRetrieved} returns this
 */
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableRetrieved} returns this
*/
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableRetrieved} returns this
 */
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableRetrieved.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.VariableDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.VariableDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.VariableDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.VariableDeleted}
 */
proto.pando.api.survey.v1.events.VariableDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.VariableDeleted;
  return proto.pando.api.survey.v1.events.VariableDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.VariableDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.VariableDeleted}
 */
proto.pando.api.survey.v1.events.VariableDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.VariableDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.VariableDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.VariableDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableDeleted.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableDeleted} returns this
 */
proto.pando.api.survey.v1.events.VariableDeleted.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.VariableDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableDeleted} returns this
*/
proto.pando.api.survey.v1.events.VariableDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableDeleted} returns this
 */
proto.pando.api.survey.v1.events.VariableDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.VariableUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.VariableUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.VariableUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldModel: (f = msg.getOldModel()) && pando_api_survey_v1_shared_pb.Variable.toObject(includeInstance, f),
    newModel: (f = msg.getNewModel()) && pando_api_survey_v1_shared_pb.Variable.toObject(includeInstance, f),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated}
 */
proto.pando.api.survey.v1.events.VariableUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.VariableUpdated;
  return proto.pando.api.survey.v1.events.VariableUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.VariableUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated}
 */
proto.pando.api.survey.v1.events.VariableUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 2:
      var value = new pando_api_survey_v1_shared_pb.Variable;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Variable.deserializeBinaryFromReader);
      msg.setOldModel(value);
      break;
    case 3:
      var value = new pando_api_survey_v1_shared_pb.Variable;
      reader.readMessage(value,pando_api_survey_v1_shared_pb.Variable.deserializeBinaryFromReader);
      msg.setNewModel(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.VariableUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.VariableUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.VariableUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      pando_api_survey_v1_shared_pb.Variable.serializeBinaryToWriter
    );
  }
  f = message.getNewModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pando_api_survey_v1_shared_pb.Variable.serializeBinaryToWriter
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated} returns this
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.survey.v1.Variable old_model = 2;
 * @return {?proto.pando.api.survey.v1.Variable}
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.getOldModel = function() {
  return /** @type{?proto.pando.api.survey.v1.Variable} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Variable, 2));
};


/**
 * @param {?proto.pando.api.survey.v1.Variable|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated} returns this
*/
proto.pando.api.survey.v1.events.VariableUpdated.prototype.setOldModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated} returns this
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.clearOldModel = function() {
  return this.setOldModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.hasOldModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional pando.api.survey.v1.Variable new_model = 3;
 * @return {?proto.pando.api.survey.v1.Variable}
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.getNewModel = function() {
  return /** @type{?proto.pando.api.survey.v1.Variable} */ (
    jspb.Message.getWrapperField(this, pando_api_survey_v1_shared_pb.Variable, 3));
};


/**
 * @param {?proto.pando.api.survey.v1.Variable|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated} returns this
*/
proto.pando.api.survey.v1.events.VariableUpdated.prototype.setNewModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated} returns this
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.clearNewModel = function() {
  return this.setNewModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.hasNewModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated} returns this
*/
proto.pando.api.survey.v1.events.VariableUpdated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableUpdated} returns this
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableUpdated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyVariableCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    surveyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableCreated}
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyVariableCreated;
  return proto.pando.api.survey.v1.events.SurveyVariableCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableCreated}
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyVariableCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string survey_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyVariableCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyVariableAccessed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableAccessed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    surveyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableAccessed}
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyVariableAccessed;
  return proto.pando.api.survey.v1.events.SurveyVariableAccessed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableAccessed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableAccessed}
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyVariableAccessed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableAccessed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string survey_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableAccessed} returns this
*/
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableAccessed} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyVariableAccessed.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyVariableDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    surveyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableDeleted}
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyVariableDeleted;
  return proto.pando.api.survey.v1.events.SurveyVariableDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableDeleted}
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyVariableDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyVariableDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string survey_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableDeleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyVariableDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyVariableDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyVersionCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyVersionCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    surveyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyVersionCreated}
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyVersionCreated;
  return proto.pando.api.survey.v1.events.SurveyVersionCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyVersionCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyVersionCreated}
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyVersionCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyVersionCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.getVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVersionCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.setVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string survey_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVersionCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyVersionCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyVersionCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyVersionCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signatoryId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated;
  return proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignatoryId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignatoryId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signatory_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.getSignatoryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.setSignatoryId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated} returns this
*/
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated} returns this
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted;
  return proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instance_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted} returns this
*/
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted} returns this
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.InstanceESignSignatoryDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    templateId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyESignTemplateCreated;
  return proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplateId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string template_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.getTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.setTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated} returns this
*/
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateCreated} returns this
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    surveyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    templateId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted;
  return proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurveyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateId(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSurveyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemplateId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string survey_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.getSurveyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.setSurveyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string template_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.getTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.setTemplateId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted} returns this
*/
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted} returns this
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.SurveyESignTemplateDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.VariableMediaCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.VariableMediaCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    variableValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.VariableMediaCreated}
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.VariableMediaCreated;
  return proto.pando.api.survey.v1.events.VariableMediaCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.VariableMediaCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.VariableMediaCreated}
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableValue(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.VariableMediaCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.VariableMediaCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVariableValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaCreated} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaCreated} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string variable_value = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.getVariableValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaCreated} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.setVariableValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaCreated} returns this
*/
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableMediaCreated} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableMediaCreated.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
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
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.pando.api.survey.v1.events.VariableMediaDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pando.api.survey.v1.events.VariableMediaDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    variableId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mediaId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    variableValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userData: (f = msg.getUserData()) && pando_api_shared_pb.UserMetadata.toObject(includeInstance, f)
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
 * @return {!proto.pando.api.survey.v1.events.VariableMediaDeleted}
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pando.api.survey.v1.events.VariableMediaDeleted;
  return proto.pando.api.survey.v1.events.VariableMediaDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pando.api.survey.v1.events.VariableMediaDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pando.api.survey.v1.events.VariableMediaDeleted}
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediaId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariableValue(value);
      break;
    case 1000:
      var value = new pando_api_shared_pb.UserMetadata;
      reader.readMessage(value,pando_api_shared_pb.UserMetadata.deserializeBinaryFromReader);
      msg.setUserData(value);
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
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pando.api.survey.v1.events.VariableMediaDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pando.api.survey.v1.events.VariableMediaDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariableId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMediaId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVariableValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      pando_api_shared_pb.UserMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string variable_id = 1;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.getVariableId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaDeleted} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.setVariableId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string media_id = 2;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.getMediaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaDeleted} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.setMediaId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string variable_value = 3;
 * @return {string}
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.getVariableValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaDeleted} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.setVariableValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional pando.api.UserMetadata user_data = 1000;
 * @return {?proto.pando.api.UserMetadata}
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.getUserData = function() {
  return /** @type{?proto.pando.api.UserMetadata} */ (
    jspb.Message.getWrapperField(this, pando_api_shared_pb.UserMetadata, 1000));
};


/**
 * @param {?proto.pando.api.UserMetadata|undefined} value
 * @return {!proto.pando.api.survey.v1.events.VariableMediaDeleted} returns this
*/
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pando.api.survey.v1.events.VariableMediaDeleted} returns this
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pando.api.survey.v1.events.VariableMediaDeleted.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * @enum {number}
 */
proto.pando.api.survey.v1.events.EventTypes = {
  INSTANCE_CREATED: 0,
  INSTANCE_RETRIEVED: 1,
  INSTANCE_DELETED: 2,
  INSTANCE_COMPLETED: 3,
  ATTEMPT_CREATED: 10,
  ATTEMPT_RETRIEVED: 11,
  ATTEMPT_COMPLETED: 12,
  SURVEY_MEDIA_CREATED: 20,
  SURVEY_MEDIA_RETRIEVED: 21,
  SURVEY_MEDIA_DELETED: 22,
  ANSWER_MEDIA_CREATED: 30,
  ANSWER_MEDIA_RETRIEVED: 31,
  ANSWER_MEDIA_COMPLETED: 32,
  ANSWER_CREATED: 40,
  ANSWER_UPDATED: 41,
  ANSWER_COMPLETED: 42,
  SURVEY_CREATED: 50,
  SURVEY_RETRIEVED: 51,
  SURVEY_DELETED: 52,
  SURVEY_UPDATED: 53,
  QUESTION_CREATED: 60,
  QUESTION_RETRIEVED: 61,
  QUESTION_DELETED: 62,
  QUESTION_UPDATED: 63,
  QUESTION_DESTINATION_CREATED: 70,
  QUESTION_DESTINATION_RETRIEVED: 71,
  QUESTION_DESTINATION_DELETED: 72,
  QUESTION_DESTINATION_UPDATED: 73,
  ANSWER_OPTION_CREATED: 80,
  ANSWER_OPTION_RETRIEVED: 81,
  ANSWER_OPTION_DELETED: 82,
  ANSWER_OPTION_UPDATED: 83,
  PLAYBACK_DATA_CREATED: 90,
  PLAYBACK_DATA_RETRIEVED: 91,
  PLAYBACK_DATA_DELETED: 92,
  PLAYBACK_DATA_UPDATED: 93,
  VARIABLE_CREATED: 100,
  VARIABLE_RETRIEVED: 101,
  VARIABLE_DELETED: 102,
  VARIABLE_UPDATED: 103,
  SURVEY_VARIABLE_CREATED: 110,
  SURVEY_VARIABLE_RETRIEVED: 111,
  SURVEY_VARIABLE_DELETED: 112,
  SURVEY_VERSION_CREATED: 120,
  SEND_SURVEY_REQUEST: 130,
  INSTANCE_OWNER_CREATED: 140,
  INSTANCE_OWNER_DELETED: 141,
  INSTANCE_ESIGN_SIGNATORY_CREATED: 150,
  INSTANCE_ESIGN_SIGNATORY_DELETED: 151,
  SURVEY_ESIGN_TEMPLATE_CREATED: 160,
  SURVEY_ESIGN_TEMPLATE_DELETED: 161,
  VARIABLE_MEDIA_CREATED: 170,
  VARIABLE_MEDIA_DELETED: 171
};

goog.object.extend(exports, proto.pando.api.survey.v1.events);
