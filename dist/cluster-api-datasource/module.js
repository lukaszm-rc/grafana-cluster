'use strict';

System.register(['@etk/jsonrpc', './cluster-api-datasource', './query_ctrl'], function (_export, _context) {
  var jsonrpc, ClusterApiDataSource, GenericDatasourceQueryCtrl, GenericConfigCtrl, GenericQueryOptionsCtrl, GenericAnnotationsQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_etkJsonrpc) {
      jsonrpc = _etkJsonrpc.default;
    }, function (_clusterApiDatasource) {
      ClusterApiDataSource = _clusterApiDatasource.ClusterApiDataSource;
    }, function (_query_ctrl) {
      GenericDatasourceQueryCtrl = _query_ctrl.GenericDatasourceQueryCtrl;
    }],
    execute: function () {
      _export('configView', GenericConfigCtrl = function GenericConfigCtrl() {
        _classCallCheck(this, GenericConfigCtrl);
      });

      GenericConfigCtrl.templateUrl = 'partials/config.html';

      _export('metricsQueryEditor', GenericQueryOptionsCtrl = function GenericQueryOptionsCtrl() {
        _classCallCheck(this, GenericQueryOptionsCtrl);
      });

      GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('annotationsQueryEditor', GenericAnnotationsQueryCtrl = function GenericAnnotationsQueryCtrl() {
        _classCallCheck(this, GenericAnnotationsQueryCtrl);
      });

      GenericAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

      _export('Datasource', ClusterApiDataSource);

      _export('QueryCtrl', GenericDatasourceQueryCtrl);

      _export('configView', GenericConfigCtrl);

      _export('metricsQueryEditor', GenericQueryOptionsCtrl);

      _export('annotationsQueryEditor', GenericAnnotationsQueryCtrl);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdXN0ZXItYXBpLWRhdGFzb3VyY2UvbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTzs7QUFDQzs7QUFDQTs7OzRCQUVGOzs7O0FBQ04sd0JBQWtCLFdBQWxCLEdBQWdDLHNCQUFoQzs7b0NBRU07Ozs7QUFDTiw4QkFBd0IsV0FBeEIsR0FBc0MsNkJBQXRDOzt3Q0FFTTs7OztBQUNOLGtDQUE0QixXQUE1QixHQUEwQyxrQ0FBMUM7OzRCQUdFOzsyQkFDQTs7NEJBQ0E7O29DQUNBOzt3Q0FDQSIsImZpbGUiOiJjbHVzdGVyLWFwaS1kYXRhc291cmNlL21vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqc29ucnBjIGZyb20gJ0BldGsvanNvbnJwYyc7XG5pbXBvcnQge0NsdXN0ZXJBcGlEYXRhU291cmNlfSBmcm9tICcuL2NsdXN0ZXItYXBpLWRhdGFzb3VyY2UnO1xuaW1wb3J0IHtHZW5lcmljRGF0YXNvdXJjZVF1ZXJ5Q3RybH0gZnJvbSAnLi9xdWVyeV9jdHJsJztcblxuY2xhc3MgR2VuZXJpY0NvbmZpZ0N0cmwge31cbkdlbmVyaWNDb25maWdDdHJsLnRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2NvbmZpZy5odG1sJztcblxuY2xhc3MgR2VuZXJpY1F1ZXJ5T3B0aW9uc0N0cmwge31cbkdlbmVyaWNRdWVyeU9wdGlvbnNDdHJsLnRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL3F1ZXJ5Lm9wdGlvbnMuaHRtbCc7XG5cbmNsYXNzIEdlbmVyaWNBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB7fVxuR2VuZXJpY0Fubm90YXRpb25zUXVlcnlDdHJsLnRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJ1xuXG5leHBvcnQge1xuICBDbHVzdGVyQXBpRGF0YVNvdXJjZSBhcyBEYXRhc291cmNlLFxuICBHZW5lcmljRGF0YXNvdXJjZVF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmwsXG4gIEdlbmVyaWNDb25maWdDdHJsIGFzIGNvbmZpZ1ZpZXcsXG4gIEdlbmVyaWNRdWVyeU9wdGlvbnNDdHJsIGFzIG1ldHJpY3NRdWVyeUVkaXRvcixcbiAgR2VuZXJpY0Fubm90YXRpb25zUXVlcnlDdHJsIGFzIGFubm90YXRpb25zUXVlcnlFZGl0b3Jcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
