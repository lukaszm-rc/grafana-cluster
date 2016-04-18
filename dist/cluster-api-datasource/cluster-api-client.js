"use strict";

System.register(["@etk/jsonrpc"], function (_export, _context) {
    var jsonrpc, _createClass, instance, ClusterApiClient;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_etkJsonrpc) {
            jsonrpc = _etkJsonrpc.default;
        }],
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

            instance = null;

            _export("ClusterApiClient", ClusterApiClient = function () {
                function ClusterApiClient() {
                    _classCallCheck(this, ClusterApiClient);

                    return ClusterApiClient.getInstance();
                }

                _createClass(ClusterApiClient, null, [{
                    key: "getInstance",
                    value: function getInstance() {
                        if (!instance) {
                            instance = new ClusterApiClient();
                        }
                        return instance;
                    }
                }, {
                    key: "_handleEvent",
                    value: function _handleEvent(event, connectionClosed, reconnect) {
                        if (connectionClosed) {
                            ClusterApiClient.connectionStatus = 0;
                            if (reconnect) {
                                ClusterApiClient.reconnectService = setTimeout(ClusterApiClient.connect, 5000);
                            }
                        }
                    }
                }, {
                    key: "connect",
                    value: function connect() {
                        ClusterApiClient.ws = new WebSocket(ClusterApiClient.serverAddress);
                        ClusterApiClient.ws.on("open", function (e) {
                            return ClusterApiClient.connectionStatus = 1;
                        }).on("close", function (e) {
                            return ClusterApiClient._handleEvent(e, true, false);
                        }).on("error", function (e) {
                            return ClusterApiClient._handleEvent(e, true, false);
                        }).on("message", function (e) {
                            var json = jsonrpc.parse(e);
                            console.error(json.toString());
                        });
                    }
                }, {
                    key: "send",
                    value: function send(jsonrpcObject, callback) {
                        ClusterApiClient.messages[jsonrpcObject.id] = callback;
                        ClusterApiClient.ws.send(jsonrpcObject.toString(), function (err) {
                            return console.error(err);
                        });
                    }
                }, {
                    key: "getConnectionStatus",
                    get: function get() {
                        return ClusterApiClient.connectionStatus;
                    }
                }]);

                return ClusterApiClient;
            }());

            _export("ClusterApiClient", ClusterApiClient);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdXN0ZXItYXBpLWRhdGFzb3VyY2UvY2x1c3Rlci1hcGktY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREgsdUJBQVc7O3dDQUVGO0FBTVQseUJBTlMsZ0JBTVQsR0FBYzswQ0FOTCxrQkFNSzs7QUFDViwyQkFBTyxpQkFBaUIsV0FBakIsRUFBUCxDQURVO2lCQUFkOzs2QkFOUzs7a0RBVVk7QUFDakIsNEJBQUksQ0FBQyxRQUFELEVBQVc7QUFDWCx1Q0FBVyxJQUFJLGdCQUFKLEVBQVgsQ0FEVzt5QkFBZjtBQUdBLCtCQUFPLFFBQVAsQ0FKaUI7Ozs7aURBV0QsT0FBTyxrQkFBa0IsV0FBVztBQUNwRCw0QkFBSSxnQkFBSixFQUFzQjtBQUNsQiw2Q0FBaUIsZ0JBQWpCLEdBQW9DLENBQXBDLENBRGtCO0FBRWxCLGdDQUFJLFNBQUosRUFBZTtBQUNYLGlEQUFpQixnQkFBakIsR0FBb0MsV0FBVyxpQkFBaUIsT0FBakIsRUFBMEIsSUFBckMsQ0FBcEMsQ0FEVzs2QkFBZjt5QkFGSjs7Ozs4Q0FTYTtBQUNiLHlDQUFpQixFQUFqQixHQUFzQixJQUFJLFNBQUosQ0FBYyxpQkFBaUIsYUFBakIsQ0FBcEMsQ0FEYTtBQUViLHlDQUFpQixFQUFqQixDQUNLLEVBREwsQ0FDUSxNQURSLEVBQ2dCO21DQUFLLGlCQUFpQixnQkFBakIsR0FBb0MsQ0FBcEM7eUJBQUwsQ0FEaEIsQ0FFSyxFQUZMLENBRVEsT0FGUixFQUVpQjttQ0FBSyxpQkFBaUIsWUFBakIsQ0FBOEIsQ0FBOUIsRUFBaUMsSUFBakMsRUFBdUMsS0FBdkM7eUJBQUwsQ0FGakIsQ0FHSyxFQUhMLENBR1EsT0FIUixFQUdpQjttQ0FBSyxpQkFBaUIsWUFBakIsQ0FBOEIsQ0FBOUIsRUFBaUMsSUFBakMsRUFBdUMsS0FBdkM7eUJBQUwsQ0FIakIsQ0FJSyxFQUpMLENBSVEsU0FKUixFQUltQixhQUFLO0FBQ2hCLGdDQUFJLE9BQU8sUUFBUSxLQUFSLENBQWMsQ0FBZCxDQUFQLENBRFk7QUFFaEIsb0NBQVEsS0FBUixDQUFjLEtBQUssUUFBTCxFQUFkLEVBRmdCO3lCQUFMLENBSm5CLENBRmE7Ozs7eUNBWUwsZUFBZSxVQUFVO0FBQ2pDLHlDQUFpQixRQUFqQixDQUEwQixjQUFjLEVBQWQsQ0FBMUIsR0FBOEMsUUFBOUMsQ0FEaUM7QUFFakMseUNBQWlCLEVBQWpCLENBQW9CLElBQXBCLENBQXlCLGNBQWMsUUFBZCxFQUF6QixFQUFtRCxVQUFDLEdBQUQ7bUNBQVMsUUFBUSxLQUFSLENBQWMsR0FBZDt5QkFBVCxDQUFuRCxDQUZpQzs7Ozt3Q0ExQko7QUFDN0IsK0JBQU8saUJBQWlCLGdCQUFqQixDQURzQjs7Ozt1QkFqQnhCIiwiZmlsZSI6ImNsdXN0ZXItYXBpLWRhdGFzb3VyY2UvY2x1c3Rlci1hcGktY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGluc3RhbmNlID0gbnVsbDtcbmltcG9ydCBqc29ucnBjIGZyb20gXCJAZXRrL2pzb25ycGNcIjtcbmV4cG9ydCBjbGFzcyBDbHVzdGVyQXBpQ2xpZW50IHtcbiAgICBzdGF0aWMgd3M7XG4gICAgc3RhdGljIHNlcnZlckFkZHJlc3M7XG4gICAgc3RhdGljIGNvbm5lY3Rpb25TdGF0dXM7XG4gICAgc3RhdGljIG1lc3NhZ2VzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBDbHVzdGVyQXBpQ2xpZW50LmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbHVzdGVyQXBpQ2xpZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgZ2V0Q29ubmVjdGlvblN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIENsdXN0ZXJBcGlDbGllbnQuY29ubmVjdGlvblN0YXR1cztcbiAgICB9XG5cbiAgICBzdGF0aWMgX2hhbmRsZUV2ZW50KGV2ZW50LCBjb25uZWN0aW9uQ2xvc2VkLCByZWNvbm5lY3QpIHtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25DbG9zZWQpIHtcbiAgICAgICAgICAgIENsdXN0ZXJBcGlDbGllbnQuY29ubmVjdGlvblN0YXR1cyA9IDA7XG4gICAgICAgICAgICBpZiAocmVjb25uZWN0KSB7XG4gICAgICAgICAgICAgICAgQ2x1c3RlckFwaUNsaWVudC5yZWNvbm5lY3RTZXJ2aWNlID0gc2V0VGltZW91dChDbHVzdGVyQXBpQ2xpZW50LmNvbm5lY3QsIDUwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgY29ubmVjdCgpIHtcbiAgICAgICAgQ2x1c3RlckFwaUNsaWVudC53cyA9IG5ldyBXZWJTb2NrZXQoQ2x1c3RlckFwaUNsaWVudC5zZXJ2ZXJBZGRyZXNzKTtcbiAgICAgICAgQ2x1c3RlckFwaUNsaWVudC53c1xuICAgICAgICAgICAgLm9uKFwib3BlblwiLCBlID0+IENsdXN0ZXJBcGlDbGllbnQuY29ubmVjdGlvblN0YXR1cyA9IDEpXG4gICAgICAgICAgICAub24oXCJjbG9zZVwiLCBlID0+IENsdXN0ZXJBcGlDbGllbnQuX2hhbmRsZUV2ZW50KGUsIHRydWUsIGZhbHNlKSlcbiAgICAgICAgICAgIC5vbihcImVycm9yXCIsIGUgPT4gQ2x1c3RlckFwaUNsaWVudC5faGFuZGxlRXZlbnQoZSwgdHJ1ZSwgZmFsc2UpKVxuICAgICAgICAgICAgLm9uKFwibWVzc2FnZVwiLCBlID0+IHtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IGpzb25ycGMucGFyc2UoZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmQoanNvbnJwY09iamVjdCwgY2FsbGJhY2spIHtcbiAgICAgICAgQ2x1c3RlckFwaUNsaWVudC5tZXNzYWdlc1tqc29ucnBjT2JqZWN0LmlkXSA9IGNhbGxiYWNrO1xuICAgICAgICBDbHVzdGVyQXBpQ2xpZW50LndzLnNlbmQoanNvbnJwY09iamVjdC50b1N0cmluZygpLCAoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
