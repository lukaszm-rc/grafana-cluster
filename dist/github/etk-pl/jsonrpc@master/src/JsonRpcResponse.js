/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";

System.register([], function (_export, _context) {
	var _createClass, utls, JsonRpc, JsonRpcResponse;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	return {
		setters: [],
		execute: function () {
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
			JsonRpc = require('./JsonRpc.js');

			JsonRpcResponse = function (_JsonRpc) {
				_inherits(JsonRpcResponse, _JsonRpc);

				/**
     * @param {Object} message
     */

				function JsonRpcResponse(message) {
					_classCallCheck(this, JsonRpcResponse);

					if (message !== undefined) {
						if (utls.getType(message) !== 'Object') {
							throw new Error('Message must be object type');
						}
						message.version = message.version || JsonRpc.version;
						if (!JsonRpc.isValidResponse(message)) {
							throw new Error('Message is not valid json rpc response');
						}
					} else {
						message = {};
						message.version = JsonRpc.version;
					}
					return _possibleConstructorReturn(this, Object.getPrototypeOf(JsonRpcResponse).call(this, message));
				}

				/**
     * @private
     * @param version
     */


				_createClass(JsonRpcResponse, [{
					key: 'setVersion',
					value: function setVersion(version) {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'getResource',
					value: function getResource() {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'setResource',
					value: function setResource(resource) {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'getMethod',
					value: function getMethod() {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'setMethod',
					value: function setMethod(method) {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'getCallback',
					value: function getCallback() {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'setCallback',
					value: function setCallback(callback, tls) {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'getParams',
					value: function getParams() {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}, {
					key: 'setParams',
					value: function setParams(params) {
						throw new Error('Method not available in module "JsonRpcResponse"');
					}
				}]);

				return JsonRpcResponse;
			}(JsonRpc);

			module.exports = JsonRpcResponse;
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvc3JjL0pzb25ScGNSZXNwb25zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDSSxVQUFPLFFBQVEsTUFBUjtBQUNQLGFBQVUsUUFBUSxjQUFSOztBQUtSOzs7Ozs7O0FBSUwsYUFKSyxlQUlMLENBQVksT0FBWixFQUFxQjsyQkFKaEIsaUJBSWdCOztBQUNwQixTQUFJLFlBQVksU0FBWixFQUF1QjtBQUMxQixVQUFJLEtBQUssT0FBTCxDQUFhLE9BQWIsTUFBMEIsUUFBMUIsRUFBb0M7QUFDdkMsYUFBTSxJQUFJLEtBQUosQ0FBVSw2QkFBVixDQUFOLENBRHVDO09BQXhDO0FBR0EsY0FBUSxPQUFSLEdBQWtCLFFBQVEsT0FBUixJQUFtQixRQUFRLE9BQVIsQ0FKWDtBQUsxQixVQUFJLENBQUMsUUFBUSxlQUFSLENBQXdCLE9BQXhCLENBQUQsRUFBbUM7QUFDdEMsYUFBTSxJQUFJLEtBQUosQ0FBVSx3Q0FBVixDQUFOLENBRHNDO09BQXZDO01BTEQsTUFRTztBQUNOLGdCQUFVLEVBQVYsQ0FETTtBQUVOLGNBQVEsT0FBUixHQUFrQixRQUFRLE9BQVIsQ0FGWjtNQVJQO21FQUxJLDRCQWlCRSxVQWJjO0tBQXJCOzs7Ozs7OztpQkFKSzs7Z0NBd0JNLFNBQVM7QUFDbkIsWUFBTSxJQUFJLEtBQUosQ0FBVSxrREFBVixDQUFOLENBRG1COzs7O21DQVFOO0FBQ2IsWUFBTSxJQUFJLEtBQUosQ0FBVSxrREFBVixDQUFOLENBRGE7Ozs7aUNBU0YsVUFBVTtBQUNyQixZQUFNLElBQUksS0FBSixDQUFVLGtEQUFWLENBQU4sQ0FEcUI7Ozs7aUNBUVY7QUFDWCxZQUFNLElBQUksS0FBSixDQUFVLGtEQUFWLENBQU4sQ0FEVzs7OzsrQkFTRixRQUFRO0FBQ2pCLFlBQU0sSUFBSSxLQUFKLENBQVUsa0RBQVYsQ0FBTixDQURpQjs7OzttQ0FRSjtBQUNiLFlBQU0sSUFBSSxLQUFKLENBQVUsa0RBQVYsQ0FBTixDQURhOzs7O2lDQVVGLFVBQVUsS0FBSztBQUMxQixZQUFNLElBQUksS0FBSixDQUFVLGtEQUFWLENBQU4sQ0FEMEI7Ozs7aUNBUWY7QUFDWCxZQUFNLElBQUksS0FBSixDQUFVLGtEQUFWLENBQU4sQ0FEVzs7OzsrQkFTRixRQUFRO0FBQ2pCLFlBQU0sSUFBSSxLQUFKLENBQVUsa0RBQVYsQ0FBTixDQURpQjs7OztXQTdGYjtLQUF3Qjs7QUFpRzlCLFVBQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJnaXRodWIvZXRrLXBsL2pzb25ycGNAbWFzdGVyL3NyYy9Kc29uUnBjUmVzcG9uc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWljaGHFgiDFu2Fsb3VkaWsgPG1pY2hhbC56YWxvdWRpa0ByZWRjYXJ0LnBsPlxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciB1dGxzID0gcmVxdWlyZSgndXRscycpO1xudmFyIEpzb25ScGMgPSByZXF1aXJlKCcuL0pzb25ScGMuanMnKTtcbi8qKlxuICogQGF1dGhvciBNaWNoYcWCIMW7YWxvdWRpayA8bWljaGFsLnphbG91ZGlrQHJlZGNhcnQucGw+XG4gKiBAZXh0ZW5kcyBKc29uUnBjXG4gKi9cbmNsYXNzIEpzb25ScGNSZXNwb25zZSBleHRlbmRzIEpzb25ScGMge1xuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2Vcblx0ICovXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcblx0XHRpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAodXRscy5nZXRUeXBlKG1lc3NhZ2UpICE9PSAnT2JqZWN0Jykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgbXVzdCBiZSBvYmplY3QgdHlwZScpO1xuXHRcdFx0fVxuXHRcdFx0bWVzc2FnZS52ZXJzaW9uID0gbWVzc2FnZS52ZXJzaW9uIHx8IEpzb25ScGMudmVyc2lvbjtcblx0XHRcdGlmICghSnNvblJwYy5pc1ZhbGlkUmVzcG9uc2UobWVzc2FnZSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIGlzIG5vdCB2YWxpZCBqc29uIHJwYyByZXNwb25zZScpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZXNzYWdlID0ge307XG5cdFx0XHRtZXNzYWdlLnZlcnNpb24gPSBKc29uUnBjLnZlcnNpb247XG5cdFx0fVxuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB2ZXJzaW9uXG5cdCAqL1xuXHRzZXRWZXJzaW9uKHZlcnNpb24pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgYXZhaWxhYmxlIGluIG1vZHVsZSBcIkpzb25ScGNSZXNwb25zZVwiJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXRSZXNvdXJjZSgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgYXZhaWxhYmxlIGluIG1vZHVsZSBcIkpzb25ScGNSZXNwb25zZVwiJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHJlc291cmNlXG5cdCAqIEByZXR1cm5zIHtKc29uUnBjfVxuXHQgKi9cblx0c2V0UmVzb3VyY2UocmVzb3VyY2UpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgYXZhaWxhYmxlIGluIG1vZHVsZSBcIkpzb25ScGNSZXNwb25zZVwiJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXRNZXRob2QoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjUmVzcG9uc2VcIicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSBtZXRob2Rcblx0ICogQHJldHVybnMge0pzb25ScGN9XG5cdCAqL1xuXHRzZXRNZXRob2QobWV0aG9kKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjUmVzcG9uc2VcIicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0Q2FsbGJhY2soKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjUmVzcG9uc2VcIicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0bHNcblx0ICogQHJldHVybnMge0pzb25ScGN9XG5cdCAqL1xuXHRzZXRDYWxsYmFjayhjYWxsYmFjaywgdGxzKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjUmVzcG9uc2VcIicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0UGFyYW1zKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBhdmFpbGFibGUgaW4gbW9kdWxlIFwiSnNvblJwY1Jlc3BvbnNlXCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0gcGFyYW1zXG5cdCAqIEByZXR1cm5zIHtKc29uUnBjfVxuXHQgKi9cblx0c2V0UGFyYW1zKHBhcmFtcykge1xuXHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBhdmFpbGFibGUgaW4gbW9kdWxlIFwiSnNvblJwY1Jlc3BvbnNlXCInKTtcblx0fVxufVxubW9kdWxlLmV4cG9ydHMgPSBKc29uUnBjUmVzcG9uc2U7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
