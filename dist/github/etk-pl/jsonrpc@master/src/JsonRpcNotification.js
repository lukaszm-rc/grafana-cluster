/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";

System.register([], function (_export, _context) {
	var _createClass, utls, JsonRpc, JsonRpcNotification;

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

			JsonRpcNotification = function (_JsonRpc) {
				_inherits(JsonRpcNotification, _JsonRpc);

				/**
     * @param {Object} message
     */

				function JsonRpcNotification(message) {
					_classCallCheck(this, JsonRpcNotification);

					if (message !== undefined) {
						if (utls.getType(message) !== 'Object') {
							throw new Error('Message must be object type');
						}
						message.version = message.version || JsonRpc.version;
						message.resource = message.resource || '__global__';
						message.params = message.params || {};
						if (!JsonRpc.isValidNotification(message)) {
							throw new Error('Message is not valid json rpc notification');
						}
					} else {
						message = {};
						message.version = JsonRpc.version;
						message.resource = '__global__';
						message.params = message.params || {};
					}
					return _possibleConstructorReturn(this, Object.getPrototypeOf(JsonRpcNotification).call(this, message));
				}

				/**
     * @private
     * @param version
     */


				_createClass(JsonRpcNotification, [{
					key: 'setVersion',
					value: function setVersion(version) {
						throw new Error('Method not available in module "JsonRpcNotification"');
					}
				}, {
					key: 'getId',
					value: function getId() {
						throw new Error('Method not available in module "JsonRpcNotification"');
					}
				}, {
					key: 'setId',
					value: function setId(id) {
						throw new Error('Method not available in module "JsonRpcNotification"');
					}
				}, {
					key: 'getError',
					value: function getError() {
						throw new Error('Method not available in module "JsonRpcNotification"');
					}
				}, {
					key: 'setError',
					value: function setError(error) {
						throw new Error('Method not available in module "JsonRpcNotification"');
					}
				}, {
					key: 'getResult',
					value: function getResult() {
						throw new Error('Method not available in module "JsonRpcNotification"');
					}
				}, {
					key: 'setResult',
					value: function setResult(result) {
						throw new Error('Method not available in module "JsonRpcNotification"');
					}
				}]);

				return JsonRpcNotification;
			}(JsonRpc);

			module.exports = JsonRpcNotification;
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvc3JjL0pzb25ScGNOb3RpZmljYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0ksVUFBTyxRQUFRLE1BQVI7QUFDUCxhQUFVLFFBQVEsY0FBUjs7QUFLUjs7Ozs7OztBQUlMLGFBSkssbUJBSUwsQ0FBWSxPQUFaLEVBQXFCOzJCQUpoQixxQkFJZ0I7O0FBQ3BCLFNBQUksWUFBWSxTQUFaLEVBQXVCO0FBQzFCLFVBQUksS0FBSyxPQUFMLENBQWEsT0FBYixNQUEwQixRQUExQixFQUFvQztBQUN2QyxhQUFNLElBQUksS0FBSixDQUFVLDZCQUFWLENBQU4sQ0FEdUM7T0FBeEM7QUFHQSxjQUFRLE9BQVIsR0FBa0IsUUFBUSxPQUFSLElBQW1CLFFBQVEsT0FBUixDQUpYO0FBSzFCLGNBQVEsUUFBUixHQUFtQixRQUFRLFFBQVIsSUFBb0IsWUFBcEIsQ0FMTztBQU0xQixjQUFRLE1BQVIsR0FBaUIsUUFBUSxNQUFSLElBQWtCLEVBQWxCLENBTlM7QUFPMUIsVUFBSSxDQUFDLFFBQVEsbUJBQVIsQ0FBNEIsT0FBNUIsQ0FBRCxFQUF1QztBQUMxQyxhQUFNLElBQUksS0FBSixDQUFVLDRDQUFWLENBQU4sQ0FEMEM7T0FBM0M7TUFQRCxNQVVPO0FBQ04sZ0JBQVUsRUFBVixDQURNO0FBRU4sY0FBUSxPQUFSLEdBQWtCLFFBQVEsT0FBUixDQUZaO0FBR04sY0FBUSxRQUFSLEdBQW1CLFlBQW5CLENBSE07QUFJTixjQUFRLE1BQVIsR0FBaUIsUUFBUSxNQUFSLElBQWtCLEVBQWxCLENBSlg7TUFWUDttRUFMSSxnQ0FxQkUsVUFqQmM7S0FBckI7Ozs7Ozs7O2lCQUpLOztnQ0E0Qk0sU0FBUztBQUNuQixZQUFNLElBQUksS0FBSixDQUFVLHNEQUFWLENBQU4sQ0FEbUI7Ozs7NkJBT1o7QUFDUCxZQUFNLElBQUksS0FBSixDQUFVLHNEQUFWLENBQU4sQ0FETzs7OzsyQkFRRixJQUFJO0FBQ1QsWUFBTSxJQUFJLEtBQUosQ0FBVSxzREFBVixDQUFOLENBRFM7Ozs7Z0NBT0M7QUFDVixZQUFNLElBQUksS0FBSixDQUFVLHNEQUFWLENBQU4sQ0FEVTs7Ozs4QkFRRixPQUFPO0FBQ2YsWUFBTSxJQUFJLEtBQUosQ0FBVSxzREFBVixDQUFOLENBRGU7Ozs7aUNBT0o7QUFDWCxZQUFNLElBQUksS0FBSixDQUFVLHNEQUFWLENBQU4sQ0FEVzs7OzsrQkFRRixRQUFRO0FBQ2pCLFlBQU0sSUFBSSxLQUFKLENBQVUsc0RBQVYsQ0FBTixDQURpQjs7OztXQXpFYjtLQUE0Qjs7QUE2RWxDLFVBQU8sT0FBUCxHQUFpQixtQkFBakIiLCJmaWxlIjoiZ2l0aHViL2V0ay1wbC9qc29ucnBjQG1hc3Rlci9zcmMvSnNvblJwY05vdGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNaWNoYcWCIMW7YWxvdWRpayA8bWljaGFsLnphbG91ZGlrQHJlZGNhcnQucGw+XG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIHV0bHMgPSByZXF1aXJlKCd1dGxzJyk7XG52YXIgSnNvblJwYyA9IHJlcXVpcmUoJy4vSnNvblJwYy5qcycpXG4vKipcbiAqIEBhdXRob3IgTWljaGHFgiDFu2Fsb3VkaWsgPG1pY2hhbC56YWxvdWRpa0ByZWRjYXJ0LnBsPlxuICogQGV4dGVuZHMgSnNvblJwY1xuICovXG5jbGFzcyBKc29uUnBjTm90aWZpY2F0aW9uIGV4dGVuZHMgSnNvblJwYyB7XG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZVxuXHQgKi9cblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmICh1dGxzLmdldFR5cGUobWVzc2FnZSkgIT09ICdPYmplY3QnKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBtdXN0IGJlIG9iamVjdCB0eXBlJyk7XG5cdFx0XHR9XG5cdFx0XHRtZXNzYWdlLnZlcnNpb24gPSBtZXNzYWdlLnZlcnNpb24gfHwgSnNvblJwYy52ZXJzaW9uO1xuXHRcdFx0bWVzc2FnZS5yZXNvdXJjZSA9IG1lc3NhZ2UucmVzb3VyY2UgfHwgJ19fZ2xvYmFsX18nO1xuXHRcdFx0bWVzc2FnZS5wYXJhbXMgPSBtZXNzYWdlLnBhcmFtcyB8fCB7fTtcblx0XHRcdGlmICghSnNvblJwYy5pc1ZhbGlkTm90aWZpY2F0aW9uKG1lc3NhZ2UpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBpcyBub3QgdmFsaWQganNvbiBycGMgbm90aWZpY2F0aW9uJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lc3NhZ2UgPSB7fTtcblx0XHRcdG1lc3NhZ2UudmVyc2lvbiA9IEpzb25ScGMudmVyc2lvbjtcblx0XHRcdG1lc3NhZ2UucmVzb3VyY2UgPSAnX19nbG9iYWxfXyc7XG5cdFx0XHRtZXNzYWdlLnBhcmFtcyA9IG1lc3NhZ2UucGFyYW1zIHx8IHt9O1xuXHRcdH1cblx0XHRzdXBlcihtZXNzYWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0gdmVyc2lvblxuXHQgKi9cblx0c2V0VmVyc2lvbih2ZXJzaW9uKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjTm90aWZpY2F0aW9uXCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0Z2V0SWQoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjTm90aWZpY2F0aW9uXCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0gaWRcblx0ICovXG5cdHNldElkKGlkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjTm90aWZpY2F0aW9uXCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0Z2V0RXJyb3IoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjTm90aWZpY2F0aW9uXCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0gZXJyb3Jcblx0ICovXG5cdHNldEVycm9yKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGF2YWlsYWJsZSBpbiBtb2R1bGUgXCJKc29uUnBjTm90aWZpY2F0aW9uXCInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0Z2V0UmVzdWx0KCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBhdmFpbGFibGUgaW4gbW9kdWxlIFwiSnNvblJwY05vdGlmaWNhdGlvblwiJyk7XG5cdH1cblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHJlc3VsdFxuXHQgKi9cblx0c2V0UmVzdWx0KHJlc3VsdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBhdmFpbGFibGUgaW4gbW9kdWxlIFwiSnNvblJwY05vdGlmaWNhdGlvblwiJyk7XG5cdH1cbn1cbm1vZHVsZS5leHBvcnRzID0gSnNvblJwY05vdGlmaWNhdGlvbjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
