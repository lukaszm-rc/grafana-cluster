/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";

System.register([], function (_export, _context) {
	var _createClass, utls, JsonRpcError;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
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

			JsonRpcError = function () {
				/**
     *
     * @param message
     * @param code
     */

				function JsonRpcError(message, code) {
					_classCallCheck(this, JsonRpcError);

					if (utls.getType(message) === 'String') {
						this.setMessage(message);
					}
					if (utls.getType(code) === 'Integer') {
						this.setCode(code);
					}
				}

				/**
     *
     * @returns {Number}
     */


				_createClass(JsonRpcError, [{
					key: 'getCode',
					value: function getCode() {
						return this.code;
					}
				}, {
					key: 'getMessage',
					value: function getMessage() {
						return this.message;
					}
				}, {
					key: 'setCode',
					value: function setCode(code) {
						if (utls.getType(code) !== 'Integer') {
							throw new Error('Code must be number');
						}
						this.code = code;
						return this;
					}
				}, {
					key: 'setMessage',
					value: function setMessage(message) {
						if (utls.getType(message) !== 'String' && !message.length) {
							throw new Error('Message must be non-zero length string');
						}
						this.message = message;
						return this;
					}
				}], [{
					key: 'isValid',
					value: function isValid(error) {
						return error instanceof JsonRpcError || utls.getType(error) === 'Object' && utls.equals(Object.getOwnPropertyNames(error).sort(), ['code', 'message']) && utls.getType(error.code) === 'Integer' && utls.getType(error.message) === 'String' && !!error.message.length;
					}
				}]);

				return JsonRpcError;
			}();

			/**
    * Parse error
    * @type {{code: number, message: string}}
    */
			JsonRpcError.E_PARSE = {
				code: -1,
				message: 'Parse error'
			};
			/**
    * Invalid Request
    * @type {{code: number, message: string}}
    */
			JsonRpcError.E_INVALID_REQUEST = {
				code: -2,
				message: 'Invalid Request'
			};
			/**
    * Namespace not found
    * @type {{code: number, message: string}}
    */
			JsonRpcError.E_NAMESPACE_NOT_FOUND = {
				code: -3,
				message: 'Namespace not found'
			};
			/**
    * Method not found
    * @type {{code: number, message: string}}
    */
			JsonRpcError.E_METHOD_NOT_FOUND = {
				code: -4,
				message: 'Method not found'
			};
			/**
    * Invalid params
    * @type {{code: number, message: string}}
    */
			JsonRpcError.E_INVALID_PARAMS = {
				code: -5,
				message: 'Invalid params'
			};
			/**
    * Internal error
    * @type {{code: number, message: string}}
    */
			JsonRpcError.E_INTERNAL = {
				code: -6,
				message: 'Internal error'
			};
			module.exports = JsonRpcError;
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvc3JjL0pzb25ScGNFcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDSSxVQUFPLFFBQVEsTUFBUjs7QUFJTDs7Ozs7OztBQU1MLGFBTkssWUFNTCxDQUFZLE9BQVosRUFBcUIsSUFBckIsRUFBMkI7MkJBTnRCLGNBTXNCOztBQUMxQixTQUFJLEtBQUssT0FBTCxDQUFhLE9BQWIsTUFBMEIsUUFBMUIsRUFBb0M7QUFDdkMsV0FBSyxVQUFMLENBQWdCLE9BQWhCLEVBRHVDO01BQXhDO0FBR0EsU0FBSSxLQUFLLE9BQUwsQ0FBYSxJQUFiLE1BQXVCLFNBQXZCLEVBQWtDO0FBQ3JDLFdBQUssT0FBTCxDQUFhLElBQWIsRUFEcUM7TUFBdEM7S0FKRDs7Ozs7Ozs7aUJBTks7OytCQW1CSztBQUNULGFBQU8sS0FBSyxJQUFMLENBREU7Ozs7a0NBUUc7QUFDWixhQUFPLEtBQUssT0FBTCxDQURLOzs7OzZCQVNMLE1BQU07QUFDYixVQUFJLEtBQUssT0FBTCxDQUFhLElBQWIsTUFBdUIsU0FBdkIsRUFBa0M7QUFDckMsYUFBTSxJQUFJLEtBQUosQ0FBVSxxQkFBVixDQUFOLENBRHFDO09BQXRDO0FBR0EsV0FBSyxJQUFMLEdBQVksSUFBWixDQUphO0FBS2IsYUFBTyxJQUFQLENBTGE7Ozs7Z0NBYUgsU0FBUztBQUNuQixVQUFJLEtBQUssT0FBTCxDQUFhLE9BQWIsTUFBMEIsUUFBMUIsSUFBc0MsQ0FBQyxRQUFRLE1BQVIsRUFBZ0I7QUFDMUQsYUFBTSxJQUFJLEtBQUosQ0FBVSx3Q0FBVixDQUFOLENBRDBEO09BQTNEO0FBR0EsV0FBSyxPQUFMLEdBQWUsT0FBZixDQUptQjtBQUtuQixhQUFPLElBQVAsQ0FMbUI7Ozs7NkJBYUwsT0FBTztBQUNyQixhQUFPLGlCQUFpQixZQUFqQixJQUFrQyxLQUFLLE9BQUwsQ0FBYSxLQUFiLE1BQXdCLFFBQXhCLElBQW9DLEtBQUssTUFBTCxDQUFZLE9BQU8sbUJBQVAsQ0FBMkIsS0FBM0IsRUFBa0MsSUFBbEMsRUFBWixFQUFzRCxDQUNqSSxNQURpSSxFQUVqSSxTQUZpSSxDQUF0RCxDQUFwQyxJQUdsQyxLQUFLLE9BQUwsQ0FBYSxNQUFNLElBQU4sQ0FBYixLQUE2QixTQUE3QixJQUEwQyxLQUFLLE9BQUwsQ0FBYSxNQUFNLE9BQU4sQ0FBYixLQUFnQyxRQUFoQyxJQUE0QyxDQUFDLENBQUMsTUFBTSxPQUFOLENBQWMsTUFBZCxDQUoxRTs7OztXQTlEakI7Ozs7Ozs7QUF5RU4sZ0JBQWEsT0FBYixHQUF1QjtBQUN0QixVQUFPLENBQUMsQ0FBRDtBQUNQLGFBQVUsYUFBVjtJQUZEOzs7OztBQVFBLGdCQUFhLGlCQUFiLEdBQWlDO0FBQ2hDLFVBQU8sQ0FBQyxDQUFEO0FBQ1AsYUFBVSxpQkFBVjtJQUZEOzs7OztBQVFBLGdCQUFhLHFCQUFiLEdBQXFDO0FBQ3BDLFVBQU8sQ0FBQyxDQUFEO0FBQ1AsYUFBVSxxQkFBVjtJQUZEOzs7OztBQVFBLGdCQUFhLGtCQUFiLEdBQWtDO0FBQ2pDLFVBQU8sQ0FBQyxDQUFEO0FBQ1AsYUFBVSxrQkFBVjtJQUZEOzs7OztBQVFBLGdCQUFhLGdCQUFiLEdBQWdDO0FBQy9CLFVBQU8sQ0FBQyxDQUFEO0FBQ1AsYUFBVSxnQkFBVjtJQUZEOzs7OztBQVFBLGdCQUFhLFVBQWIsR0FBMEI7QUFDekIsVUFBTyxDQUFDLENBQUQ7QUFDUCxhQUFVLGdCQUFWO0lBRkQ7QUFJQSxVQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoiZ2l0aHViL2V0ay1wbC9qc29ucnBjQG1hc3Rlci9zcmMvSnNvblJwY0Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIE1pY2hhxYIgxbthbG91ZGlrIDxtaWNoYWwuemFsb3VkaWtAcmVkY2FydC5wbD5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRscyA9IHJlcXVpcmUoJ3V0bHMnKTtcbi8qKlxuICogQGF1dGhvciBNaWNoYcWCIMW7YWxvdWRpayA8bWljaGFsLnphbG91ZGlrQHJlZGNhcnQucGw+XG4gKi9cbmNsYXNzIEpzb25ScGNFcnJvciB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gbWVzc2FnZVxuXHQgKiBAcGFyYW0gY29kZVxuXHQgKi9cblx0Y29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuXHRcdGlmICh1dGxzLmdldFR5cGUobWVzc2FnZSkgPT09ICdTdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnNldE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0fVxuXHRcdGlmICh1dGxzLmdldFR5cGUoY29kZSkgPT09ICdJbnRlZ2VyJykge1xuXHRcdFx0dGhpcy5zZXRDb2RlKGNvZGUpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0Z2V0Q29kZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRNZXNzYWdlKCkge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2U7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIGNvZGVcblx0ICogQHJldHVybnMge0pzb25ScGNFcnJvcn1cblx0ICovXG5cdHNldENvZGUoY29kZSkge1xuXHRcdGlmICh1dGxzLmdldFR5cGUoY29kZSkgIT09ICdJbnRlZ2VyJykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb2RlIG11c3QgYmUgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIG1lc3NhZ2Vcblx0ICogQHJldHVybnMge0pzb25ScGNFcnJvcn1cblx0ICovXG5cdHNldE1lc3NhZ2UobWVzc2FnZSkge1xuXHRcdGlmICh1dGxzLmdldFR5cGUobWVzc2FnZSkgIT09ICdTdHJpbmcnICYmICFtZXNzYWdlLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIG11c3QgYmUgbm9uLXplcm8gbGVuZ3RoIHN0cmluZycpO1xuXHRcdH1cblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSBlcnJvclxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdHN0YXRpYyBpc1ZhbGlkKGVycm9yKSB7XG5cdFx0cmV0dXJuIGVycm9yIGluc3RhbmNlb2YgSnNvblJwY0Vycm9yIHx8ICh1dGxzLmdldFR5cGUoZXJyb3IpID09PSAnT2JqZWN0JyAmJiB1dGxzLmVxdWFscyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlcnJvcikuc29ydCgpLCBbXG5cdFx0XHRcdCdjb2RlJyxcblx0XHRcdFx0J21lc3NhZ2UnXG5cdFx0XHRdKSAmJiB1dGxzLmdldFR5cGUoZXJyb3IuY29kZSkgPT09ICdJbnRlZ2VyJyAmJiB1dGxzLmdldFR5cGUoZXJyb3IubWVzc2FnZSkgPT09ICdTdHJpbmcnICYmICEhZXJyb3IubWVzc2FnZS5sZW5ndGgpO1xuXHR9XG59XG4vKipcbiAqIFBhcnNlIGVycm9yXG4gKiBAdHlwZSB7e2NvZGU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nfX1cbiAqL1xuSnNvblJwY0Vycm9yLkVfUEFSU0UgPSB7XG5cdGNvZGUgOiAtMSxcblx0bWVzc2FnZSA6ICdQYXJzZSBlcnJvcidcbn07XG4vKipcbiAqIEludmFsaWQgUmVxdWVzdFxuICogQHR5cGUge3tjb2RlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbkpzb25ScGNFcnJvci5FX0lOVkFMSURfUkVRVUVTVCA9IHtcblx0Y29kZSA6IC0yLFxuXHRtZXNzYWdlIDogJ0ludmFsaWQgUmVxdWVzdCdcbn07XG4vKipcbiAqIE5hbWVzcGFjZSBub3QgZm91bmRcbiAqIEB0eXBlIHt7Y29kZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmd9fVxuICovXG5Kc29uUnBjRXJyb3IuRV9OQU1FU1BBQ0VfTk9UX0ZPVU5EID0ge1xuXHRjb2RlIDogLTMsXG5cdG1lc3NhZ2UgOiAnTmFtZXNwYWNlIG5vdCBmb3VuZCdcbn07XG4vKipcbiAqIE1ldGhvZCBub3QgZm91bmRcbiAqIEB0eXBlIHt7Y29kZTogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmd9fVxuICovXG5Kc29uUnBjRXJyb3IuRV9NRVRIT0RfTk9UX0ZPVU5EID0ge1xuXHRjb2RlIDogLTQsXG5cdG1lc3NhZ2UgOiAnTWV0aG9kIG5vdCBmb3VuZCdcbn07XG4vKipcbiAqIEludmFsaWQgcGFyYW1zXG4gKiBAdHlwZSB7e2NvZGU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nfX1cbiAqL1xuSnNvblJwY0Vycm9yLkVfSU5WQUxJRF9QQVJBTVMgPSB7XG5cdGNvZGUgOiAtNSxcblx0bWVzc2FnZSA6ICdJbnZhbGlkIHBhcmFtcydcbn07XG4vKipcbiAqIEludGVybmFsIGVycm9yXG4gKiBAdHlwZSB7e2NvZGU6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nfX1cbiAqL1xuSnNvblJwY0Vycm9yLkVfSU5URVJOQUwgPSB7XG5cdGNvZGUgOiAtNixcblx0bWVzc2FnZSA6ICdJbnRlcm5hbCBlcnJvcidcbn07XG5tb2R1bGUuZXhwb3J0cyA9IEpzb25ScGNFcnJvcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
