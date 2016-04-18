'use strict';

System.register(['app/plugins/sdk', './css/query-editor.css!'], function (_export, _context) {
  var QueryCtrl, _createClass, GenericDatasourceQueryCtrl;

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
    setters: [function (_appPluginsSdk) {
      QueryCtrl = _appPluginsSdk.QueryCtrl;
    }, function (_cssQueryEditorCss) {}],
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

      _export('GenericDatasourceQueryCtrl', GenericDatasourceQueryCtrl = function (_QueryCtrl) {
        _inherits(GenericDatasourceQueryCtrl, _QueryCtrl);

        function GenericDatasourceQueryCtrl($scope, $injector, uiSegmentSrv) {
          _classCallCheck(this, GenericDatasourceQueryCtrl);

          var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GenericDatasourceQueryCtrl).call(this, $scope, $injector));

          _this.scope = $scope;
          _this.uiSegmentSrv = uiSegmentSrv;
          _this.target.target = _this.target.target || 'select metric';
          return _this;
        }

        _createClass(GenericDatasourceQueryCtrl, [{
          key: 'getOptions',
          value: function getOptions() {
            return this.datasource.metricFindQuery(this.target).then(this.uiSegmentSrv.transformToSegments(false));
            // Options have to be transformed by uiSegmentSrv to be usable by metric-segment-model directive
          }
        }, {
          key: 'onChangeInternal',
          value: function onChangeInternal() {
            this.panelCtrl.refresh(); // Asks the panel to refresh data.
          }
        }]);

        return GenericDatasourceQueryCtrl;
      }(QueryCtrl));

      _export('GenericDatasourceQueryCtrl', GenericDatasourceQueryCtrl);

      GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdXN0ZXItYXBpLWRhdGFzb3VyY2UvcXVlcnlfY3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FFSzs7O0FBRVgsaUJBRlcsMEJBRVgsQ0FBWSxNQUFaLEVBQW9CLFNBQXBCLEVBQStCLFlBQS9CLEVBQThDO2dDQUZuQyw0QkFFbUM7OzZFQUZuQyx1Q0FHSCxRQUFRLFlBRDhCOztBQUc1QyxnQkFBSyxLQUFMLEdBQWEsTUFBYixDQUg0QztBQUk1QyxnQkFBSyxZQUFMLEdBQW9CLFlBQXBCLENBSjRDO0FBSzVDLGdCQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQXFCLE1BQUssTUFBTCxDQUFZLE1BQVosSUFBc0IsZUFBdEIsQ0FMdUI7O1NBQTlDOztxQkFGVzs7dUNBVUU7QUFDWCxtQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsZUFBaEIsQ0FBZ0MsS0FBSyxNQUFMLENBQWhDLENBQ0osSUFESSxDQUNDLEtBQUssWUFBTCxDQUFrQixtQkFBbEIsQ0FBc0MsS0FBdEMsQ0FERCxDQUFQOztBQURXOzs7NkNBTU07QUFDakIsaUJBQUssU0FBTCxDQUFlLE9BQWY7QUFEaUI7OztlQWhCUjtRQUFtQzs7OztBQXFCaEQsaUNBQTJCLFdBQTNCLEdBQXlDLDRCQUF6QyIsImZpbGUiOiJjbHVzdGVyLWFwaS1kYXRhc291cmNlL3F1ZXJ5X2N0cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1F1ZXJ5Q3RybH0gZnJvbSAnYXBwL3BsdWdpbnMvc2RrJztcbmltcG9ydCAnLi9jc3MvcXVlcnktZWRpdG9yLmNzcyEnXG5leHBvcnQgY2xhc3MgR2VuZXJpY0RhdGFzb3VyY2VRdWVyeUN0cmwgZXh0ZW5kcyBRdWVyeUN0cmwge1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yLCB1aVNlZ21lbnRTcnYpICB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLnVpU2VnbWVudFNydiA9IHVpU2VnbWVudFNydjtcbiAgICB0aGlzLnRhcmdldC50YXJnZXQgPSB0aGlzLnRhcmdldC50YXJnZXQgfHwgJ3NlbGVjdCBtZXRyaWMnO1xuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLnRhcmdldClcbiAgICAgIC50aGVuKHRoaXMudWlTZWdtZW50U3J2LnRyYW5zZm9ybVRvU2VnbWVudHMoZmFsc2UpKTtcbiAgICAgIC8vIE9wdGlvbnMgaGF2ZSB0byBiZSB0cmFuc2Zvcm1lZCBieSB1aVNlZ21lbnRTcnYgdG8gYmUgdXNhYmxlIGJ5IG1ldHJpYy1zZWdtZW50LW1vZGVsIGRpcmVjdGl2ZVxuICB9XG5cbiAgb25DaGFuZ2VJbnRlcm5hbCgpIHtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKCk7IC8vIEFza3MgdGhlIHBhbmVsIHRvIHJlZnJlc2ggZGF0YS5cbiAgfVxufVxuXG5HZW5lcmljRGF0YXNvdXJjZVF1ZXJ5Q3RybC50ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9xdWVyeS5lZGl0b3IuaHRtbCc7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
