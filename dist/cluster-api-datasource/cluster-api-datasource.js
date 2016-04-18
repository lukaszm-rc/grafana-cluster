'use strict';

System.register(['./cluster-api-client', '@etk/jsonrpc'], function (_export, _context) {
    var ClusterApiClient, jsonrpc, _createClass, ClusterApiDataSource;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_clusterApiClient) {
            ClusterApiClient = _clusterApiClient.ClusterApiClient;
        }, function (_etkJsonrpc) {
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

            _export('ClusterApiDataSource', ClusterApiDataSource = function () {
                function ClusterApiDataSource(instanceSettings, $q, backendSrv) {
                    _classCallCheck(this, ClusterApiDataSource);

                    this.type = instanceSettings.type;
                    this.url = instanceSettings.url;
                    this.name = instanceSettings.name;
                    this.q = $q;
                    this.backendSrv = backendSrv;
                    this.clusterApiClient = ClusterApiClient.getInstance();
                }

                // Called once per panel (graph)


                _createClass(ClusterApiDataSource, [{
                    key: 'query',
                    value: function query(options) {
                        var query = this.buildQueryParameters(options);

                        if (query.targets.length <= 0) {
                            return this.q.when([]);
                        }
                        var request = new jsonrpc.Request({
                            resource: "annotations",
                            method: "query",
                            params: { "data": query },
                            callback: this.mapToTextValue
                        });
                        this.clusterApiClient.send(request.toString());
                    }
                }, {
                    key: 'testDatasource',
                    value: function testDatasource() {
                        return ClusterApiClient.isConnected;
                    }
                }, {
                    key: 'annotationQuery',
                    value: function annotationQuery(options) {
                        var request = new jsonrpc.Request({
                            resource: "annotations",
                            method: "list",
                            params: { "query": "annotations" },
                            callback: this.mapToTextValue
                        });
                        this.clusterApiClient.send(request.toString());
                    }
                }, {
                    key: 'metricFindQuery',
                    value: function metricFindQuery(options) {
                        var request = new jsonrpc.Request({
                            resource: "Grafana",
                            method: "list",
                            params: { "query": "metrics" },
                            callback: this.mapToTextValue
                        });
                        this.clusterApiClient.send(request.toString());
                    }
                }, {
                    key: 'mapToTextValue',
                    value: function mapToTextValue(result) {
                        return _.map(result.data, function (d, i) {
                            return { text: d, value: i };
                        });
                    }
                }, {
                    key: 'buildQueryParameters',
                    value: function buildQueryParameters(options) {
                        //remove placeholder targets
                        options.targets = _.filter(options.targets, function (target) {
                            return target.target !== 'select metric';
                        });

                        return options;
                    }
                }]);

                return ClusterApiDataSource;
            }());

            _export('ClusterApiDataSource', ClusterApiDataSource);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdXN0ZXItYXBpLWRhdGFzb3VyY2UvY2x1c3Rlci1hcGktZGF0YXNvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FDTTtBQUVULHlCQUZTLG9CQUVULENBQVksZ0JBQVosRUFBOEIsRUFBOUIsRUFBa0MsVUFBbEMsRUFBOEM7MENBRnJDLHNCQUVxQzs7QUFDMUMseUJBQUssSUFBTCxHQUFZLGlCQUFpQixJQUFqQixDQUQ4QjtBQUUxQyx5QkFBSyxHQUFMLEdBQVcsaUJBQWlCLEdBQWpCLENBRitCO0FBRzFDLHlCQUFLLElBQUwsR0FBWSxpQkFBaUIsSUFBakIsQ0FIOEI7QUFJMUMseUJBQUssQ0FBTCxHQUFTLEVBQVQsQ0FKMEM7QUFLMUMseUJBQUssVUFBTCxHQUFrQixVQUFsQixDQUwwQztBQU0xQyx5QkFBSyxnQkFBTCxHQUF3QixpQkFBaUIsV0FBakIsRUFBeEIsQ0FOMEM7aUJBQTlDOzs7Ozs2QkFGUzs7MENBWUgsU0FBUztBQUNYLDRCQUFJLFFBQVEsS0FBSyxvQkFBTCxDQUEwQixPQUExQixDQUFSLENBRE87O0FBR1gsNEJBQUksTUFBTSxPQUFOLENBQWMsTUFBZCxJQUF3QixDQUF4QixFQUEyQjtBQUMzQixtQ0FBTyxLQUFLLENBQUwsQ0FBTyxJQUFQLENBQVksRUFBWixDQUFQLENBRDJCO3lCQUEvQjtBQUdBLDRCQUFJLFVBQVUsSUFBSSxRQUFRLE9BQVIsQ0FBZ0I7QUFDOUIsc0NBQVUsYUFBVjtBQUNBLG9DQUFRLE9BQVI7QUFDQSxvQ0FBUSxFQUFDLFFBQVEsS0FBUixFQUFUO0FBQ0Esc0NBQVUsS0FBSyxjQUFMO3lCQUpBLENBQVYsQ0FOTztBQVlYLDZCQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLFFBQVEsUUFBUixFQUEzQixFQVpXOzs7O3FEQWlCRTtBQUNiLCtCQUFPLGlCQUFpQixXQUFqQixDQURNOzs7O29EQUlELFNBQVM7QUFDckIsNEJBQUksVUFBVSxJQUFJLFFBQVEsT0FBUixDQUFnQjtBQUM5QixzQ0FBVSxhQUFWO0FBQ0Esb0NBQVEsTUFBUjtBQUNBLG9DQUFRLEVBQUMsU0FBUyxhQUFULEVBQVQ7QUFDQSxzQ0FBVSxLQUFLLGNBQUw7eUJBSkEsQ0FBVixDQURpQjtBQU9yQiw2QkFBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixRQUFRLFFBQVIsRUFBM0IsRUFQcUI7Ozs7b0RBWVQsU0FBUztBQUNyQiw0QkFBSSxVQUFVLElBQUksUUFBUSxPQUFSLENBQWdCO0FBQzlCLHNDQUFVLFNBQVY7QUFDQSxvQ0FBUSxNQUFSO0FBQ0Esb0NBQVEsRUFBQyxTQUFTLFNBQVQsRUFBVDtBQUNBLHNDQUFVLEtBQUssY0FBTDt5QkFKQSxDQUFWLENBRGlCO0FBT3JCLDZCQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLFFBQVEsUUFBUixFQUEzQixFQVBxQjs7OzttREFVVixRQUFRO0FBQ25CLCtCQUFPLEVBQUUsR0FBRixDQUFNLE9BQU8sSUFBUCxFQUFhLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUNoQyxtQ0FBTyxFQUFDLE1BQU0sQ0FBTixFQUFTLE9BQU8sQ0FBUCxFQUFqQixDQURnQzt5QkFBVixDQUExQixDQURtQjs7Ozt5REFNRixTQUFTOztBQUUxQixnQ0FBUSxPQUFSLEdBQWtCLEVBQUUsTUFBRixDQUFTLFFBQVEsT0FBUixFQUFpQixrQkFBVTtBQUNsRCxtQ0FBTyxPQUFPLE1BQVAsS0FBa0IsZUFBbEIsQ0FEMkM7eUJBQVYsQ0FBNUMsQ0FGMEI7O0FBTTFCLCtCQUFPLE9BQVAsQ0FOMEI7Ozs7dUJBN0RyQiIsImZpbGUiOiJjbHVzdGVyLWFwaS1kYXRhc291cmNlL2NsdXN0ZXItYXBpLWRhdGFzb3VyY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsdXN0ZXJBcGlDbGllbnR9IGZyb20gJy4vY2x1c3Rlci1hcGktY2xpZW50JztcbmltcG9ydCBqc29ucnBjIGZyb20gJ0BldGsvanNvbnJwYyc7XG5leHBvcnQgY2xhc3MgQ2x1c3RlckFwaURhdGFTb3VyY2Uge1xuXG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5ncywgJHEsIGJhY2tlbmRTcnYpIHtcbiAgICAgICAgdGhpcy50eXBlID0gaW5zdGFuY2VTZXR0aW5ncy50eXBlO1xuICAgICAgICB0aGlzLnVybCA9IGluc3RhbmNlU2V0dGluZ3MudXJsO1xuICAgICAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XG4gICAgICAgIHRoaXMucSA9ICRxO1xuICAgICAgICB0aGlzLmJhY2tlbmRTcnYgPSBiYWNrZW5kU3J2O1xuICAgICAgICB0aGlzLmNsdXN0ZXJBcGlDbGllbnQgPSBDbHVzdGVyQXBpQ2xpZW50LmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIG9uY2UgcGVyIHBhbmVsIChncmFwaClcbiAgICBxdWVyeShvcHRpb25zKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMuYnVpbGRRdWVyeVBhcmFtZXRlcnMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LnRhcmdldHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnEud2hlbihbXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcganNvbnJwYy5SZXF1ZXN0KHtcbiAgICAgICAgICAgIHJlc291cmNlOiBcImFubm90YXRpb25zXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwicXVlcnlcIixcbiAgICAgICAgICAgIHBhcmFtczoge1wiZGF0YVwiOiBxdWVyeX0sXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5tYXBUb1RleHRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbHVzdGVyQXBpQ2xpZW50LnNlbmQocmVxdWVzdC50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICAvLyBSZXF1aXJlZFxuICAgIC8vIFVzZWQgZm9yIHRlc3RpbmcgZGF0YXNvdXJjZSBpbiBkYXRhc291cmNlIGNvbmZpZ3VyYXRpb24gcGFuZ2VcbiAgICB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIENsdXN0ZXJBcGlDbGllbnQuaXNDb25uZWN0ZWQ7XG4gICAgfVxuXG4gICAgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcganNvbnJwYy5SZXF1ZXN0KHtcbiAgICAgICAgICAgIHJlc291cmNlOiBcImFubm90YXRpb25zXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwibGlzdFwiLFxuICAgICAgICAgICAgcGFyYW1zOiB7XCJxdWVyeVwiOiBcImFubm90YXRpb25zXCJ9LFxuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMubWFwVG9UZXh0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2x1c3RlckFwaUNsaWVudC5zZW5kKHJlcXVlc3QudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uYWxcbiAgICAvLyBSZXF1aXJlZCBmb3IgdGVtcGxhdGluZ1xuICAgIG1ldHJpY0ZpbmRRdWVyeShvcHRpb25zKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IGpzb25ycGMuUmVxdWVzdCh7XG4gICAgICAgICAgICByZXNvdXJjZTogXCJHcmFmYW5hXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwibGlzdFwiLFxuICAgICAgICAgICAgcGFyYW1zOiB7XCJxdWVyeVwiOiBcIm1ldHJpY3NcIn0sXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5tYXBUb1RleHRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbHVzdGVyQXBpQ2xpZW50LnNlbmQocmVxdWVzdC50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBtYXBUb1RleHRWYWx1ZShyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIF8ubWFwKHJlc3VsdC5kYXRhLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHt0ZXh0OiBkLCB2YWx1ZTogaX07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ1aWxkUXVlcnlQYXJhbWV0ZXJzKG9wdGlvbnMpIHtcbiAgICAgICAgLy9yZW1vdmUgcGxhY2Vob2xkZXIgdGFyZ2V0c1xuICAgICAgICBvcHRpb25zLnRhcmdldHMgPSBfLmZpbHRlcihvcHRpb25zLnRhcmdldHMsIHRhcmdldCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRhcmdldCAhPT0gJ3NlbGVjdCBtZXRyaWMnO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
