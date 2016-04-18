/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";

System.register([], function (_export, _context) {
	var _typeof, _createClass, utls, JSONLess, __version, __id, __callbacks, __callbacksTimeout, __options, JsonRpc, Request, Response, Notification, JsonRpcError;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [],
		execute: function () {
			_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
				return typeof obj;
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
			};

			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			utls = require('utls');
			JSONLess = require('json-less');
			__version = '1.1.0';
			__id = 0;
			__callbacks = {};
			__callbacksTimeout = 60000;
			__options = { autoFireCallbacks: true };

			JsonRpc = function () {
				/**
     * @param {Object} message
     */

				function JsonRpc(message) {
					_classCallCheck(this, JsonRpc);

					if (this.constructor === JsonRpc) {
						throw new TypeError('Abstract class "JsonRpc" cannot be instantiated directly.');
					}
					if (message.callback !== undefined) {
						var callback = message.callback;
						delete message.callback;
					}
					this.message = message;
					if (callback) {
						this.setCallback(callback);
					}
					if (this.constructor === Response) {
						if (__options.autoFireCallbacks) {
							if (__callbacks[this.getId()] !== undefined) {
								JsonRpc.fireCallback(this);
							}
						}
					}
				}

				/**
     * Sets global options
     * @param {Object} options
     */


				_createClass(JsonRpc, [{
					key: 'getVersion',
					value: function getVersion() {
						return this.message.version;
					}
				}, {
					key: 'setVersion',
					value: function setVersion(version) {
						this.message.version = version;
						return this;
					}
				}, {
					key: 'getId',
					value: function getId() {
						return this.message.id;
					}
				}, {
					key: 'setId',
					value: function setId(id) {
						if (utls.getType(id) !== 'Integer') {
							throw new Error('Id must be integer');
						}
						this.message.id = id;
						return this;
					}
				}, {
					key: 'getResource',
					value: function getResource() {
						return this.message.resource;
					}
				}, {
					key: 'setResource',
					value: function setResource(resource) {
						if (utls.getType(resource) !== 'String') {
							throw new Error('Resource must be "String" type');
						}
						this.message.resource = resource;
						return this;
					}
				}, {
					key: 'getMethod',
					value: function getMethod() {
						return this.message.method;
					}
				}, {
					key: 'setMethod',
					value: function setMethod(method) {
						if (utls.getType(method) !== 'String') {
							throw new Error('Method must be "String" type');
						}
						this.message.method = method;
						return this;
					}
				}, {
					key: 'getCallback',
					value: function getCallback() {
						return _typeof(__callbacks[this.message.id]) === 'object' ? __callbacks[this.message.id].cb : undefined;
					}
				}, {
					key: 'setCallback',
					value: function setCallback(callback, tls) {
						tls = tls || __callbacksTimeout;
						if (typeof callback !== 'function') {
							throw new Error('Callback must be function');
						}
						var self = this;
						var timeout = setTimeout(function () {
							JsonRpc.removeCallback(self.message.id);
						}, tls);
						__callbacks[this.message.id] = {
							cb: callback,
							timeout: timeout
						};
						return this;
					}
				}, {
					key: 'getParams',
					value: function getParams() {
						return this.message.params;
					}
				}, {
					key: 'setParams',
					value: function setParams(params) {
						if (utls.getType(params) !== 'Object') {
							throw new Error('Params must be "Object" type');
						}
						this.message.params = params;
						return this;
					}
				}, {
					key: 'getResult',
					value: function getResult() {
						return this.message.result;
					}
				}, {
					key: 'setResult',
					value: function setResult(result) {
						this.message.result = result;
						return this;
					}
				}, {
					key: 'getError',
					value: function getError() {
						return this.message.error;
					}
				}, {
					key: 'setError',
					value: function setError(error) {
						if (!(error instanceof JsonRpcError)) {
							error = new JsonRpcError(error);
						}
						this.message.error = error;
						return this;
					}
				}, {
					key: 'toJSON',
					value: function toJSON() {
						return this.message;
					}
				}, {
					key: 'toString',
					value: function toString() {
						return JSONLess.stringify(this.toJSON());
					}
				}, {
					key: 'isRequest',
					get: function get() {
						return this instanceof Request;
					}
				}, {
					key: 'isResponse',
					get: function get() {
						return this instanceof Response;
					}
				}, {
					key: 'isNotification',
					get: function get() {
						return this instanceof Notification;
					}
				}], [{
					key: 'setOptions',
					value: function setOptions(options) {
						utls.extend(__options, options);
					}
				}, {
					key: 'getOptions',
					value: function getOptions() {
						return __options;
					}
				}, {
					key: 'getType',
					value: function getType(message) {
						if (!(message instanceof Object)) {
							throw new Error('Message parameter must be object');
						}
						switch (true) {
							case JsonRpc.isValidRequest(message):
								return 'request';
							case JsonRpc.isValidResponse(message):
								return 'response';
							case JsonRpc.isValidNotification(message):
								return 'notification';
							default:
								break;
						}
					}
				}, {
					key: 'parse',
					value: function parse(message) {
						if (utls.getType(message) !== 'Object') {
							if (utls.getType(message) === 'String') {
								try {
									message = JSONLess.parse(message);
								} catch (e) {
									throw new Error(JsonRpcError.E_PARSE.message, JsonRpcError.E_PARSE.code);
								}
							} else {
								throw new Error('Message must be string or object type');
							}
						}
						switch (JsonRpc.getType(message)) {
							case 'request':
								return new Request(message);
							case 'response':
								return new Response(message);
							case 'notification':
								return new Notification(message);
							default:
								throw new Error('Unknown message type');
						}
					}
				}, {
					key: 'isValidRequest',
					value: function isValidRequest(message) {
						if (utls.getType(message) !== 'Object') {
							return false;
						}
						if (message.error !== undefined || message.result !== undefined) {
							return false;
						}
						return message.version === __version && utls.getType(message.id) === 'Integer' && message.id > 0 && utls.getType(message.resource) === 'String' && !!message.resource.length && utls.getType(message.method) === 'String' && !!message.method.length && utls.getType(message.params) === 'Object';
					}
				}, {
					key: 'isValidResponse',
					value: function isValidResponse(message) {
						if (utls.getType(message) !== 'Object') {
							return false;
						}
						if (message.method !== undefined || message.resource !== undefined || message.params !== undefined) {
							return false;
						}
						if (message.id !== undefined) {
							if (utls.getType(message.id) !== 'Integer' || message.id <= 0) {
								return false;
							}
						}
						return message.version === __version && (message.result !== undefined || utls.getType(message.error) === 'Object' && utls.equals(Object.getOwnPropertyNames(message.error).sort(), ['code', 'message']) && utls.getType(message.error.code) === 'Integer' && utls.getType(message.error.message) === 'String' && !!message.error.message || utls.getType(message.error) === 'JsonRpcError' && JsonRpcError.isValid(message.error));
					}
				}, {
					key: 'isValidNotification',
					value: function isValidNotification(message) {
						if (utls.getType(message) !== 'Object') {
							return false;
						}
						if (message.error !== undefined || message.result !== undefined || message.id !== undefined) {
							return false;
						}
						return message.version === __version && utls.getType(message.resource) === 'String' && message.resource.length && utls.getType(message.method) === 'String' && message.method.length && utls.getType(message.params) === 'Object';
					}
				}, {
					key: 'hasValidSyntax',
					value: function hasValidSyntax(message) {
						return JsonRpc.isValidRequest(message) || JsonRpc.isValidResponse(message) || JsonRpc.isValidNotification(message);
					}
				}, {
					key: 'getNextId',
					value: function getNextId() {
						return ++__id;
					}
				}, {
					key: 'fireCallback',
					value: function fireCallback(response) {
						if (response instanceof Response) {
							var callback = __callbacks[response.getId()];
							if (callback instanceof Object && callback.cb instanceof Function) {
								callback.cb(response);
								JsonRpc.removeCallback(response.getId());
							}
						} else {
							throw new Error('Response must be instance of JsonRpcResponse');
						}
					}
				}, {
					key: 'removeCallback',
					value: function removeCallback(id) {
						var callback = __callbacks[id];
						if (callback instanceof Object) {
							clearTimeout(callback.timeout);
							delete __callbacks[id];
						}
					}
				}]);

				return JsonRpc;
			}();

			module.exports = JsonRpc;
			Request = require('./JsonRpcRequest.js');
			Response = require('./JsonRpcResponse.js');
			Notification = require('./JsonRpcNotification.js');
			JsonRpcError = require('./JsonRpcError.js');

			module.exports.Request = Request;
			module.exports.Response = Response;
			module.exports.Notification = Notification;
			module.exports.JsonRpcError = JsonRpcError;
			module.exports.version = __version;
			module.exports.addHandler = JSONLess.addHandler;
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvc3JjL0pzb25ScGMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0ksVUFBTyxRQUFRLE1BQVI7QUFDUCxjQUFXLFFBQVEsV0FBUjtBQUNYLGVBQVk7QUFDWixVQUFPO0FBQ1AsaUJBQWM7QUFDZCx3QkFBcUI7QUFDckIsZUFBWSxFQUFDLG1CQUFvQixJQUFwQjs7QUFLWDs7Ozs7QUFJTCxhQUpLLE9BSUwsQ0FBWSxPQUFaLEVBQXFCOzJCQUpoQixTQUlnQjs7QUFDcEIsU0FBSSxLQUFLLFdBQUwsS0FBcUIsT0FBckIsRUFBOEI7QUFDakMsWUFBTSxJQUFJLFNBQUosQ0FBYywyREFBZCxDQUFOLENBRGlDO01BQWxDO0FBR0EsU0FBSSxRQUFRLFFBQVIsS0FBcUIsU0FBckIsRUFBZ0M7QUFDbkMsVUFBSSxXQUFXLFFBQVEsUUFBUixDQURvQjtBQUVuQyxhQUFPLFFBQVEsUUFBUixDQUY0QjtNQUFwQztBQUlBLFVBQUssT0FBTCxHQUFlLE9BQWYsQ0FSb0I7QUFTcEIsU0FBSSxRQUFKLEVBQWM7QUFDYixXQUFLLFdBQUwsQ0FBaUIsUUFBakIsRUFEYTtNQUFkO0FBR0EsU0FBSSxLQUFLLFdBQUwsS0FBcUIsUUFBckIsRUFBK0I7QUFDbEMsVUFBSSxVQUFVLGlCQUFWLEVBQTZCO0FBQ2hDLFdBQUksWUFBWSxLQUFLLEtBQUwsRUFBWixNQUE4QixTQUE5QixFQUF5QztBQUM1QyxnQkFBUSxZQUFSLENBQXFCLElBQXJCLEVBRDRDO1FBQTdDO09BREQ7TUFERDtLQVpEOzs7Ozs7OztpQkFKSzs7a0NBMk5RO0FBQ1osYUFBTyxLQUFLLE9BQUwsQ0FBYSxPQUFiLENBREs7Ozs7Z0NBU0YsU0FBUztBQUNuQixXQUFLLE9BQUwsQ0FBYSxPQUFiLEdBQXVCLE9BQXZCLENBRG1CO0FBRW5CLGFBQU8sSUFBUCxDQUZtQjs7Ozs2QkFT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QUNWLGNBQVcsUUFBUSxzQkFBUjtBQUNYLGtCQUFlLFFBQVEsMEJBQVI7QUFDZixrQkFBZSxRQUFRLG1CQUFSOztBQUNuQixVQUFPLE9BQVAsQ0FBZSxPQUFmLEdBQXlCLE9BQXpCO0FBQ0EsVUFBTyxPQUFQLENBQWUsUUFBZixHQUEwQixRQUExQjtBQUNBLFVBQU8sT0FBUCxDQUFlLFlBQWYsR0FBOEIsWUFBOUI7QUFDQSxVQUFPLE9BQVAsQ0FBZSxZQUFmLEdBQThCLFlBQTlCO0FBQ0EsVUFBTyxPQUFQLENBQWUsT0FBZixHQUF5QixTQUF6QjtBQUNBLFVBQU8sT0FBUCxDQUFlLFVBQWYsR0FBNEIsU0FBUyxVQUFUIiwiZmlsZSI6ImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvc3JjL0pzb25ScGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWljaGHFgiDFu2Fsb3VkaWsgPG1pY2hhbC56YWxvdWRpa0ByZWRjYXJ0LnBsPlxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciB1dGxzID0gcmVxdWlyZSgndXRscycpO1xudmFyIEpTT05MZXNzID0gcmVxdWlyZSgnanNvbi1sZXNzJyk7XG52YXIgX192ZXJzaW9uID0gJzEuMS4wJztcbnZhciBfX2lkID0gMDtcbnZhciBfX2NhbGxiYWNrcyA9IHt9O1xudmFyIF9fY2FsbGJhY2tzVGltZW91dCA9IDYwMDAwO1xudmFyIF9fb3B0aW9ucyA9IHthdXRvRmlyZUNhbGxiYWNrcyA6IHRydWV9O1xuLyoqXG4gKiBAYWJzdHJhY3RcbiAqIEBhdXRob3IgTWljaGHFgiDFu2Fsb3VkaWsgPG1pY2hhbC56YWxvdWRpa0ByZWRjYXJ0LnBsPlxuICovXG5jbGFzcyBKc29uUnBjIHtcblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG5cdFx0aWYgKHRoaXMuY29uc3RydWN0b3IgPT09IEpzb25ScGMpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fic3RyYWN0IGNsYXNzIFwiSnNvblJwY1wiIGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQgZGlyZWN0bHkuJyk7XG5cdFx0fVxuXHRcdGlmIChtZXNzYWdlLmNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBjYWxsYmFjayA9IG1lc3NhZ2UuY2FsbGJhY2s7XG5cdFx0XHRkZWxldGUgbWVzc2FnZS5jYWxsYmFjaztcblx0XHR9XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdHRoaXMuc2V0Q2FsbGJhY2soY2FsbGJhY2spO1xuXHRcdH1cblx0XHRpZiAodGhpcy5jb25zdHJ1Y3RvciA9PT0gUmVzcG9uc2UpIHtcblx0XHRcdGlmIChfX29wdGlvbnMuYXV0b0ZpcmVDYWxsYmFja3MpIHtcblx0XHRcdFx0aWYgKF9fY2FsbGJhY2tzW3RoaXMuZ2V0SWQoKV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdEpzb25ScGMuZmlyZUNhbGxiYWNrKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgZ2xvYmFsIG9wdGlvbnNcblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdHN0YXRpYyBzZXRPcHRpb25zKG9wdGlvbnMpIHtcblx0XHR1dGxzLmV4dGVuZChfX29wdGlvbnMsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgZ2xvYmFsIG9wdGlvbnNcblx0ICogQHJldHVybnMge09iamVjdH1cblx0ICovXG5cdHN0YXRpYyBnZXRPcHRpb25zKCkge1xuXHRcdHJldHVybiBfX29wdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBtZXNzYWdlIHR5cGVcblx0ICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2Vcblx0ICogQHJldHVybnMge3N0cmluZ30gUG9zaWJsZSB2YWx1ZXM6IHJlcXVlc3QsIHJlc3BvbnNlLCBub3RpZmljYXRpb25cblx0ICogQHRocm93cyB7RXJyb3J9XG5cdCAqL1xuXHRzdGF0aWMgZ2V0VHlwZShtZXNzYWdlKSB7XG5cdFx0aWYgKCEobWVzc2FnZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBwYXJhbWV0ZXIgbXVzdCBiZSBvYmplY3QnKTtcblx0XHR9XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIEpzb25ScGMuaXNWYWxpZFJlcXVlc3QobWVzc2FnZSk6XG5cdFx0XHRcdHJldHVybiAncmVxdWVzdCc7XG5cdFx0XHRjYXNlIEpzb25ScGMuaXNWYWxpZFJlc3BvbnNlKG1lc3NhZ2UpOlxuXHRcdFx0XHRyZXR1cm4gJ3Jlc3BvbnNlJztcblx0XHRcdGNhc2UgSnNvblJwYy5pc1ZhbGlkTm90aWZpY2F0aW9uKG1lc3NhZ2UpOlxuXHRcdFx0XHRyZXR1cm4gJ25vdGlmaWNhdGlvbic7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2UgbWVzc2FnZVxuXHQgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG1lc3NhZ2Vcblx0ICogQHJldHVybnMge0pzb25ScGNSZXF1ZXN0fEpzb25ScGNSZXNwb25zZXxKc29uUnBjTm90aWZpY2F0aW9ufVxuXHQgKiBAdGhyb3dzIHtFcnJvcn1cblx0ICovXG5cdHN0YXRpYyBwYXJzZShtZXNzYWdlKSB7XG5cdFx0aWYgKHV0bHMuZ2V0VHlwZShtZXNzYWdlKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdGlmICh1dGxzLmdldFR5cGUobWVzc2FnZSkgPT09ICdTdHJpbmcnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bWVzc2FnZSA9IEpTT05MZXNzLnBhcnNlKG1lc3NhZ2UpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKEpzb25ScGNFcnJvci5FX1BBUlNFLm1lc3NhZ2UsIEpzb25ScGNFcnJvci5FX1BBUlNFLmNvZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgbXVzdCBiZSBzdHJpbmcgb3Igb2JqZWN0IHR5cGUnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3dpdGNoIChKc29uUnBjLmdldFR5cGUobWVzc2FnZSkpIHtcblx0XHRcdGNhc2UgJ3JlcXVlc3QnOlxuXHRcdFx0XHRyZXR1cm4gbmV3IFJlcXVlc3QobWVzc2FnZSk7XG5cdFx0XHRjYXNlICdyZXNwb25zZSc6XG5cdFx0XHRcdHJldHVybiBuZXcgUmVzcG9uc2UobWVzc2FnZSk7XG5cdFx0XHRjYXNlICdub3RpZmljYXRpb24nOlxuXHRcdFx0XHRyZXR1cm4gbmV3IE5vdGlmaWNhdGlvbihtZXNzYWdlKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtZXNzYWdlIHR5cGUnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHRoYXQgbWVzc2FnZSBpcyB2YWxpZCByZXF1ZXN0XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgKi9cblx0c3RhdGljIGlzVmFsaWRSZXF1ZXN0KG1lc3NhZ2UpIHtcblx0XHRpZiAodXRscy5nZXRUeXBlKG1lc3NhZ2UpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAobWVzc2FnZS5lcnJvciAhPT0gdW5kZWZpbmVkIHx8IG1lc3NhZ2UucmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIG1lc3NhZ2UudmVyc2lvbiA9PT0gX192ZXJzaW9uICYmIHV0bHMuZ2V0VHlwZShtZXNzYWdlLmlkKSA9PT0gJ0ludGVnZXInICYmIG1lc3NhZ2UuaWQgPiAwICYmIHV0bHMuZ2V0VHlwZShtZXNzYWdlLnJlc291cmNlKSA9PT0gJ1N0cmluZycgJiYgISFtZXNzYWdlLnJlc291cmNlLmxlbmd0aCAmJiB1dGxzLmdldFR5cGUobWVzc2FnZS5tZXRob2QpID09PSAnU3RyaW5nJyAmJiAhIW1lc3NhZ2UubWV0aG9kLmxlbmd0aCAmJiB1dGxzLmdldFR5cGUobWVzc2FnZS5wYXJhbXMpID09PSAnT2JqZWN0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgdGhhdCBtZXNzYWdlIGlzIHZhbGlkIHJlc3BvbnNlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgKi9cblx0c3RhdGljIGlzVmFsaWRSZXNwb25zZShtZXNzYWdlKSB7XG5cdFx0aWYgKHV0bHMuZ2V0VHlwZShtZXNzYWdlKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG1lc3NhZ2UubWV0aG9kICE9PSB1bmRlZmluZWQgfHwgbWVzc2FnZS5yZXNvdXJjZSAhPT0gdW5kZWZpbmVkIHx8IG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHV0bHMuZ2V0VHlwZShtZXNzYWdlLmlkKSAhPT0gJ0ludGVnZXInIHx8IG1lc3NhZ2UuaWQgPD0gMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBtZXNzYWdlLnZlcnNpb24gPT09IF9fdmVyc2lvbiAmJiAobWVzc2FnZS5yZXN1bHQgIT09IHVuZGVmaW5lZCB8fCAoKHV0bHMuZ2V0VHlwZShtZXNzYWdlLmVycm9yKSA9PT0gJ09iamVjdCcgJiYgdXRscy5lcXVhbHMoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWVzc2FnZS5lcnJvcikuc29ydCgpLCBbXG5cdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0J21lc3NhZ2UnXG5cdFx0XHRdKSAmJiB1dGxzLmdldFR5cGUobWVzc2FnZS5lcnJvci5jb2RlKSA9PT0gJ0ludGVnZXInICYmIHV0bHMuZ2V0VHlwZShtZXNzYWdlLmVycm9yLm1lc3NhZ2UpID09PSAnU3RyaW5nJyAmJiAhIW1lc3NhZ2UuZXJyb3IubWVzc2FnZSkgfHwgKHV0bHMuZ2V0VHlwZShtZXNzYWdlLmVycm9yKSA9PT0gJ0pzb25ScGNFcnJvcicgJiYgSnNvblJwY0Vycm9yLmlzVmFsaWQobWVzc2FnZS5lcnJvcikpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHRoYXQgbWVzc2FnZSBpcyB2YWxpZCBub3RpZmljYXRpb25cblx0ICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2Vcblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgaXNWYWxpZE5vdGlmaWNhdGlvbihtZXNzYWdlKSB7XG5cdFx0aWYgKHV0bHMuZ2V0VHlwZShtZXNzYWdlKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG1lc3NhZ2UuZXJyb3IgIT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlLnJlc3VsdCAhPT0gdW5kZWZpbmVkIHx8IG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gbWVzc2FnZS52ZXJzaW9uID09PSBfX3ZlcnNpb24gJiYgdXRscy5nZXRUeXBlKG1lc3NhZ2UucmVzb3VyY2UpID09PSAnU3RyaW5nJyAmJiBtZXNzYWdlLnJlc291cmNlLmxlbmd0aCAmJiB1dGxzLmdldFR5cGUobWVzc2FnZS5tZXRob2QpID09PSAnU3RyaW5nJyAmJiBtZXNzYWdlLm1ldGhvZC5sZW5ndGggJiYgdXRscy5nZXRUeXBlKG1lc3NhZ2UucGFyYW1zKSA9PT0gJ09iamVjdCc7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHRoYXQgbWVzc2FnZSBoYXMgY29ycmVjdCBzeW50YXhcblx0ICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2Vcblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRzdGF0aWMgaGFzVmFsaWRTeW50YXgobWVzc2FnZSkge1xuXHRcdHJldHVybiBKc29uUnBjLmlzVmFsaWRSZXF1ZXN0KG1lc3NhZ2UpIHx8IEpzb25ScGMuaXNWYWxpZFJlc3BvbnNlKG1lc3NhZ2UpIHx8IEpzb25ScGMuaXNWYWxpZE5vdGlmaWNhdGlvbihtZXNzYWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGlkIGZvciBuZXcgcmVxdWVzdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0c3RhdGljIGdldE5leHRJZCgpIHtcblx0XHRyZXR1cm4gKytfX2lkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpcmVzIGNhbGxiYWNrIGZvciByZXNwb25zZSBpZiBhbnksIGlmIGNhbGxiYWNrIG5vdCBmb3VuZCBkbyBub3RoaW5nXG5cdCAqIEBwYXJhbSB7SnNvblJwY1Jlc3BvbnNlfSByZXNwb25zZVxuXHQgKi9cblx0c3RhdGljIGZpcmVDYWxsYmFjayhyZXNwb25zZSkge1xuXHRcdGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG5cdFx0XHR2YXIgY2FsbGJhY2sgPSBfX2NhbGxiYWNrc1tyZXNwb25zZS5nZXRJZCgpXTtcblx0XHRcdGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIE9iamVjdCAmJiBjYWxsYmFjay5jYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRcdGNhbGxiYWNrLmNiKHJlc3BvbnNlKTtcblx0XHRcdFx0SnNvblJwYy5yZW1vdmVDYWxsYmFjayhyZXNwb25zZS5nZXRJZCgpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdSZXNwb25zZSBtdXN0IGJlIGluc3RhbmNlIG9mIEpzb25ScGNSZXNwb25zZScpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIHJlZ2lzdGVyZCBjYWxsYmFjayBpZiBleGlzdHNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGlkXG5cdCAqL1xuXHRzdGF0aWMgcmVtb3ZlQ2FsbGJhY2soaWQpIHtcblx0XHR2YXIgY2FsbGJhY2sgPSBfX2NhbGxiYWNrc1tpZF07XG5cdFx0aWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgT2JqZWN0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoY2FsbGJhY2sudGltZW91dCk7XG5cdFx0XHRkZWxldGUgX19jYWxsYmFja3NbaWRdO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmF0ZXMgaXMgY3VycmVudCBtZXNzYWdlIGlzIHJlcXVlc3Rcblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNSZXF1ZXN0KCkge1xuXHRcdHJldHVybiB0aGlzIGluc3RhbmNlb2YgUmVxdWVzdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmF0ZXMgaXMgY3VycmVudCBtZXNzYWdlIGlzIHJlc3BvbnNlXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IGlzUmVzcG9uc2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBSZXNwb25zZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmF0ZXMgaXMgY3VycmVudCBtZXNzYWdlIGlzIG5vdGlmaWNhdGlvblxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBpc05vdGlmaWNhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIE5vdGlmaWNhdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIG1lc3NlYWdlIHNjaGVtYSB2ZXJzaW9uXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRWZXJzaW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2UudmVyc2lvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIG1lc3NlYWdlIHNjaGVtYSB2ZXJzaW9uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2ZXJzaW9uXG5cdCAqIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiAxLjMueFxuXHQgKi9cblx0c2V0VmVyc2lvbih2ZXJzaW9uKSB7XG5cdFx0dGhpcy5tZXNzYWdlLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgbWVzc2VhZ2UgaWRcblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdGdldElkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2UuaWQ7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBtZXNzZWFnZSBpZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gaWRcblx0ICogQHJldHVybnMge0pzb25ScGN9XG5cdCAqL1xuXHRzZXRJZChpZCkge1xuXHRcdGlmICh1dGxzLmdldFR5cGUoaWQpICE9PSAnSW50ZWdlcicpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSWQgbXVzdCBiZSBpbnRlZ2VyJyk7XG5cdFx0fVxuXHRcdHRoaXMubWVzc2FnZS5pZCA9IGlkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgbWVzc2VhZ2UgcmVzb3VyY2UgZm9yIG1ldGhvZFxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0UmVzb3VyY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZS5yZXNvdXJjZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIG1lc3NlYWdlIHJlc291cmNlIGZvciBtZXRob2Rcblx0ICogQHBhcmFtIHtTdHJpbmd9IHJlc291cmNlXG5cdCAqIEByZXR1cm5zIHtKc29uUnBjfVxuXHQgKi9cblx0c2V0UmVzb3VyY2UocmVzb3VyY2UpIHtcblx0XHRpZiAodXRscy5nZXRUeXBlKHJlc291cmNlKSAhPT0gJ1N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignUmVzb3VyY2UgbXVzdCBiZSBcIlN0cmluZ1wiIHR5cGUnKTtcblx0XHR9XG5cdFx0dGhpcy5tZXNzYWdlLnJlc291cmNlID0gcmVzb3VyY2U7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBtZXNzZWFnZSBtZXRob2Rcblx0ICogQHJldHVybnMge1N0cmluZ31cblx0ICovXG5cdGdldE1ldGhvZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlLm1ldGhvZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIG1lc3NlYWdlIG1ldGhvZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG5cdCAqIEByZXR1cm5zIHtKc29uUnBjfVxuXHQgKi9cblx0c2V0TWV0aG9kKG1ldGhvZCkge1xuXHRcdGlmICh1dGxzLmdldFR5cGUobWV0aG9kKSAhPT0gJ1N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgXCJTdHJpbmdcIiB0eXBlJyk7XG5cdFx0fVxuXHRcdHRoaXMubWVzc2FnZS5tZXRob2QgPSBtZXRob2Q7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBtZXNzZWFnZSBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb258dW5kZWZpbmVkfVxuXHQgKi9cblx0Z2V0Q2FsbGJhY2soKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBfX2NhbGxiYWNrc1t0aGlzLm1lc3NhZ2UuaWRdID09PSAnb2JqZWN0JyA/IF9fY2FsbGJhY2tzW3RoaXMubWVzc2FnZS5pZF0uY2IgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBtZXNzZWFnZSBjYWxsYmFja1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIGdvdCByZXNwb25zZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gdGxzIFRpbWUgaW4gbXMgaG93IGxvbmcga2VlcCB1bmNhbGxlZCBjYWxsYmFja1xuXHQgKiBAcmV0dXJucyB7SnNvblJwY31cblx0ICovXG5cdHNldENhbGxiYWNrKGNhbGxiYWNrLCB0bHMpIHtcblx0XHR0bHMgPSB0bHMgfHwgX19jYWxsYmFja3NUaW1lb3V0O1xuXHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgbXVzdCBiZSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdEpzb25ScGMucmVtb3ZlQ2FsbGJhY2soc2VsZi5tZXNzYWdlLmlkKTtcblx0XHR9LCB0bHMpO1xuXHRcdF9fY2FsbGJhY2tzW3RoaXMubWVzc2FnZS5pZF0gPSB7XG5cdFx0XHRjYiA6IGNhbGxiYWNrLFxuXHRcdFx0dGltZW91dCA6IHRpbWVvdXRcblx0XHR9O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgbWVzc2VhZ2UgcGFyYW1ldGVycyBmb3IgbWV0aG9kXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XG5cdCAqL1xuXHRnZXRQYXJhbXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZS5wYXJhbXM7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBtZXNzZWFnZSBwYXJhbWV0ZXJzIGZvciBtZXRob2Rcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuXHQgKiBAcmV0dXJucyB7SnNvblJwY31cblx0ICovXG5cdHNldFBhcmFtcyhwYXJhbXMpIHtcblx0XHRpZiAodXRscy5nZXRUeXBlKHBhcmFtcykgIT09ICdPYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtcyBtdXN0IGJlIFwiT2JqZWN0XCIgdHlwZScpO1xuXHRcdH1cblx0XHR0aGlzLm1lc3NhZ2UucGFyYW1zID0gcGFyYW1zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgbWVzc2VhZ2UgcmVzdWx0XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0UmVzdWx0KCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2UucmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgbWVzc2VhZ2UgcmVzdWx0XG5cdCAqIEBwYXJhbSB7Kn0gcmVzdWx0XG5cdCAqIEByZXR1cm5zIHtKc29uUnBjfVxuXHQgKi9cblx0c2V0UmVzdWx0KHJlc3VsdCkge1xuXHRcdHRoaXMubWVzc2FnZS5yZXN1bHQgPSByZXN1bHQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBtZXNzZWFnZSBFcnJvclxuXHQgKiBAcmV0dXJucyB7SnNvblJwY0Vycm9yfVxuXHQgKi9cblx0Z2V0RXJyb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZS5lcnJvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIG1lc3NlYWdlXG5cdCAqIEBwYXJhbSB7SnNvblJwY0Vycm9yfE9iamVjdH0gZXJyb3Jcblx0ICogQHJldHVybnMge0pzb25ScGN9XG5cdCAqL1xuXHRzZXRFcnJvcihlcnJvcikge1xuXHRcdGlmICghKGVycm9yIGluc3RhbmNlb2YgSnNvblJwY0Vycm9yKSkge1xuXHRcdFx0ZXJyb3IgPSBuZXcgSnNvblJwY0Vycm9yKGVycm9yKTtcblx0XHR9XG5cdFx0dGhpcy5tZXNzYWdlLmVycm9yID0gZXJyb3I7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHJldHVybnMge3t2ZXJzaW9uOiAqLCBpZDogKiwgcmVzb3VyY2U6ICosIG1ldGhvZDogKiwgcGFyYW1zOiAqLCBjYWxsYmFjazogKn19XG5cdCAqL1xuXHR0b0pTT04oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVzc2FnZTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfVxuXHQgKi9cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIEpTT05MZXNzLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKTtcblx0fVxufVxubW9kdWxlLmV4cG9ydHMgPSBKc29uUnBjO1xudmFyIFJlcXVlc3QgPSByZXF1aXJlKCcuL0pzb25ScGNSZXF1ZXN0LmpzJyk7XG52YXIgUmVzcG9uc2UgPSByZXF1aXJlKCcuL0pzb25ScGNSZXNwb25zZS5qcycpO1xudmFyIE5vdGlmaWNhdGlvbiA9IHJlcXVpcmUoJy4vSnNvblJwY05vdGlmaWNhdGlvbi5qcycpO1xudmFyIEpzb25ScGNFcnJvciA9IHJlcXVpcmUoJy4vSnNvblJwY0Vycm9yLmpzJyk7XG5tb2R1bGUuZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbm1vZHVsZS5leHBvcnRzLlJlc3BvbnNlID0gUmVzcG9uc2U7XG5tb2R1bGUuZXhwb3J0cy5Ob3RpZmljYXRpb24gPSBOb3RpZmljYXRpb247XG5tb2R1bGUuZXhwb3J0cy5Kc29uUnBjRXJyb3IgPSBKc29uUnBjRXJyb3I7XG5tb2R1bGUuZXhwb3J0cy52ZXJzaW9uID0gX192ZXJzaW9uO1xubW9kdWxlLmV4cG9ydHMuYWRkSGFuZGxlciA9IEpTT05MZXNzLmFkZEhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
