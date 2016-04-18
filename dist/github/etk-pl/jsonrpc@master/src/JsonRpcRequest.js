/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";
/**
 * Global request counter
 * @type {number}
 * @private
 */

System.register([], function (_export, _context) {
	var _createClass, utls, JsonRpc, JsonRpcRequest;

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

			JsonRpcRequest = function (_JsonRpc) {
				_inherits(JsonRpcRequest, _JsonRpc);

				/**
     * @param {Object} message
     */

				function JsonRpcRequest(message) {
					_classCallCheck(this, JsonRpcRequest);

					if (message !== undefined) {
						if (utls.getType(message) !== 'Object') {
							throw new Error('Message must be object type');
						}
						message.version = message.version || JsonRpc.version;
						message.id = message.id || JsonRpc.getNextId();
						message.resource = message.resource || '__global__';
						message.params = message.params || {};
						if (!JsonRpc.isValidRequest(message)) {
							throw new Error('Message is not valid json rpc request');
						}
					} else {
						message = {};
						message.version = JsonRpc.version;
						message.id = JsonRpc.getNextId();
						message.resource = '__global__';
						message.params = message.params || {};
					}
					return _possibleConstructorReturn(this, Object.getPrototypeOf(JsonRpcRequest).call(this, message));
				}

				/**
     * @private
     * @param version
     */


				_createClass(JsonRpcRequest, [{
					key: 'setVersion',
					value: function setVersion(version) {
						throw new Error('Method not available in module "JsonRpcRequest"');
					}
				}, {
					key: 'getError',
					value: function getError() {
						throw new Error('Method not available in module "JsonRpcRequest"');
					}
				}, {
					key: 'setError',
					value: function setError(error) {
						throw new Error('Method not available in module "JsonRpcRequest"');
					}
				}, {
					key: 'getResult',
					value: function getResult() {
						throw new Error('Method not available in module "JsonRpcRequest"');
					}
				}, {
					key: 'setResult',
					value: function setResult(result) {
						throw new Error('Method not available in module "JsonRpcRequest"');
					}
				}]);

				return JsonRpcRequest;
			}(JsonRpc);

			module.exports = JsonRpcRequest;
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvc3JjL0pzb25ScGNSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUksVUFBTyxRQUFRLE1BQVI7QUFDUCxhQUFVLFFBQVEsY0FBUjs7QUFLUjs7Ozs7OztBQUlMLGFBSkssY0FJTCxDQUFZLE9BQVosRUFBcUI7MkJBSmhCLGdCQUlnQjs7QUFDcEIsU0FBSSxZQUFZLFNBQVosRUFBdUI7QUFDMUIsVUFBSSxLQUFLLE9BQUwsQ0FBYSxPQUFiLE1BQTBCLFFBQTFCLEVBQW9DO0FBQ3ZDLGFBQU0sSUFBSSxLQUFKLENBQVUsNkJBQVYsQ0FBTixDQUR1QztPQUF4QztBQUdBLGNBQVEsT0FBUixHQUFrQixRQUFRLE9BQVIsSUFBbUIsUUFBUSxPQUFSLENBSlg7QUFLMUIsY0FBUSxFQUFSLEdBQWEsUUFBUSxFQUFSLElBQWMsUUFBUSxTQUFSLEVBQWQsQ0FMYTtBQU0xQixjQUFRLFFBQVIsR0FBbUIsUUFBUSxRQUFSLElBQW9CLFlBQXBCLENBTk87QUFPMUIsY0FBUSxNQUFSLEdBQWlCLFFBQVEsTUFBUixJQUFrQixFQUFsQixDQVBTO0FBUTFCLFVBQUksQ0FBQyxRQUFRLGNBQVIsQ0FBdUIsT0FBdkIsQ0FBRCxFQUFrQztBQUNyQyxhQUFNLElBQUksS0FBSixDQUFVLHVDQUFWLENBQU4sQ0FEcUM7T0FBdEM7TUFSRCxNQVdPO0FBQ04sZ0JBQVUsRUFBVixDQURNO0FBRU4sY0FBUSxPQUFSLEdBQWtCLFFBQVEsT0FBUixDQUZaO0FBR04sY0FBUSxFQUFSLEdBQWEsUUFBUSxTQUFSLEVBQWIsQ0FITTtBQUlOLGNBQVEsUUFBUixHQUFtQixZQUFuQixDQUpNO0FBS04sY0FBUSxNQUFSLEdBQWlCLFFBQVEsTUFBUixJQUFrQixFQUFsQixDQUxYO01BWFA7bUVBTEksMkJBdUJFLFVBbkJjO0tBQXJCOzs7Ozs7OztpQkFKSzs7Z0NBOEJNLFNBQVM7QUFDbkIsWUFBTSxJQUFJLEtBQUosQ0FBVSxpREFBVixDQUFOLENBRG1COzs7O2dDQU9UO0FBQ1YsWUFBTSxJQUFJLEtBQUosQ0FBVSxpREFBVixDQUFOLENBRFU7Ozs7OEJBUUYsT0FBTztBQUNmLFlBQU0sSUFBSSxLQUFKLENBQVUsaURBQVYsQ0FBTixDQURlOzs7O2lDQU9KO0FBQ1gsWUFBTSxJQUFJLEtBQUosQ0FBVSxpREFBVixDQUFOLENBRFc7Ozs7K0JBUUYsUUFBUTtBQUNqQixZQUFNLElBQUksS0FBSixDQUFVLGlEQUFWLENBQU4sQ0FEaUI7Ozs7V0E1RGI7S0FBdUI7O0FBZ0U3QixVQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoiZ2l0aHViL2V0ay1wbC9qc29ucnBjQG1hc3Rlci9zcmMvSnNvblJwY1JlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWljaGHFgiDFu2Fsb3VkaWsgPG1pY2hhbC56YWxvdWRpa0ByZWRjYXJ0LnBsPlxuICovXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogR2xvYmFsIHJlcXVlc3QgY291bnRlclxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciB1dGxzID0gcmVxdWlyZSgndXRscycpO1xudmFyIEpzb25ScGMgPSByZXF1aXJlKCcuL0pzb25ScGMuanMnKVxuLyoqXG4gKiBAYXV0aG9yIE1pY2hhxYIgxbthbG91ZGlrIDxtaWNoYWwuemFsb3VkaWtAcmVkY2FydC5wbD5cbiAqIEBleHRlbmRzIEpzb25ScGNcbiAqL1xuY2xhc3MgSnNvblJwY1JlcXVlc3QgZXh0ZW5kcyBKc29uUnBjIHtcblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG5cdFx0aWYgKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHV0bHMuZ2V0VHlwZShtZXNzYWdlKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIG11c3QgYmUgb2JqZWN0IHR5cGUnKTtcblx0XHRcdH1cblx0XHRcdG1lc3NhZ2UudmVyc2lvbiA9IG1lc3NhZ2UudmVyc2lvbiB8fCBKc29uUnBjLnZlcnNpb247XG5cdFx0XHRtZXNzYWdlLmlkID0gbWVzc2FnZS5pZCB8fCBKc29uUnBjLmdldE5leHRJZCgpO1xuXHRcdFx0bWVzc2FnZS5yZXNvdXJjZSA9IG1lc3NhZ2UucmVzb3VyY2UgfHwgJ19fZ2xvYmFsX18nO1xuXHRcdFx0bWVzc2FnZS5wYXJhbXMgPSBtZXNzYWdlLnBhcmFtcyB8fCB7fTtcblx0XHRcdGlmICghSnNvblJwYy5pc1ZhbGlkUmVxdWVzdChtZXNzYWdlKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgaXMgbm90IHZhbGlkIGpzb24gcnBjIHJlcXVlc3QnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVzc2FnZSA9IHt9O1xuXHRcdFx0bWVzc2FnZS52ZXJzaW9uID0gSnNvblJwYy52ZXJzaW9uO1xuXHRcdFx0bWVzc2FnZS5pZCA9IEpzb25ScGMuZ2V0TmV4dElkKCk7XG5cdFx0XHRtZXNzYWdlLnJlc291cmNlID0gJ19fZ2xvYmFsX18nO1xuXHRcdFx0bWVzc2FnZS5wYXJhbXMgPSBtZXNzYWdlLnBhcmFtcyB8fCB7fTtcblx0XHR9XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHZlcnNpb25cblx0ICovXG5cdHNldFZlcnNpb24odmVyc2lvbikge1xuXHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBhdmFpbGFibGUgaW4gbW9kdWxlIFwiSnNvblJwY1JlcXVlc3RcIicpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRnZXRFcnJvcigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgYXZhaWxhYmxlIGluIG1vZHVsZSBcIkpzb25ScGNSZXF1ZXN0XCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0gZXJyb3Jcblx0ICovXG5cdHNldEVycm9yKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjUmVxdWVzdFwiJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGdldFJlc3VsdCgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgYXZhaWxhYmxlIGluIG1vZHVsZSBcIkpzb25ScGNSZXF1ZXN0XCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0gcmVzdWx0XG5cdCAqL1xuXHRzZXRSZXN1bHQocmVzdWx0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjUmVxdWVzdFwiJyk7XG5cdH1cbn1cbm1vZHVsZS5leHBvcnRzID0gSnNvblJwY1JlcXVlc3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
