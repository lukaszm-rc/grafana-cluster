'use strict';

System.register(['app/plugins/sdk', '../css/example-app.css!'], function (_export, _context) {
  var PanelCtrl, ExampleAppPanelCtrl;

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
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }, function (_cssExampleAppCss) {}],
    execute: function () {
      _export('PanelCtrl', ExampleAppPanelCtrl = function (_PanelCtrl) {
        _inherits(ExampleAppPanelCtrl, _PanelCtrl);

        function ExampleAppPanelCtrl($scope, $injector) {
          _classCallCheck(this, ExampleAppPanelCtrl);

          return _possibleConstructorReturn(this, Object.getPrototypeOf(ExampleAppPanelCtrl).call(this, $scope, $injector));
        }

        return ExampleAppPanelCtrl;
      }(PanelCtrl));

      ExampleAppPanelCtrl.template = '<h2 class="example-app-heading">Example app!</h2>';

      _export('PanelCtrl', ExampleAppPanelCtrl);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVE7OzsyQkFHRjs7O0FBRUosaUJBRkksbUJBRUosQ0FBWSxNQUFaLEVBQW9CLFNBQXBCLEVBQStCO2dDQUYzQixxQkFFMkI7O3dFQUYzQixnQ0FHSSxRQUFRLFlBRGU7U0FBL0I7O2VBRkk7UUFBNEI7O0FBT2xDLDBCQUFvQixRQUFwQixHQUErQixtREFBL0I7OzJCQUdFIiwiZmlsZSI6InBhbmVsL21vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFuZWxDdHJsfSBmcm9tICAnYXBwL3BsdWdpbnMvc2RrJztcbmltcG9ydCAnLi4vY3NzL2V4YW1wbGUtYXBwLmNzcyEnXG5cbmNsYXNzIEV4YW1wbGVBcHBQYW5lbEN0cmwgZXh0ZW5kcyBQYW5lbEN0cmwge1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGluamVjdG9yKSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuICB9XG5cbn1cbkV4YW1wbGVBcHBQYW5lbEN0cmwudGVtcGxhdGUgPSAnPGgyIGNsYXNzPVwiZXhhbXBsZS1hcHAtaGVhZGluZ1wiPkV4YW1wbGUgYXBwITwvaDI+JztcblxuZXhwb3J0IHtcbiAgRXhhbXBsZUFwcFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
