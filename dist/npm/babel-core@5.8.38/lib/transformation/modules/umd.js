/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _default, _default2, _amd, _amd2, _lodashObjectValues, _lodashObjectValues2, _path, _path2, _util, util, _types, t, UMDFormatter;

  // istanbul ignore next

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj["default"] = obj;return newObj;
    }
  }

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // istanbul ignore next

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      exports.__esModule = true;_default = require("./_default");
      _default2 = _interopRequireDefault(_default);
      _amd = require("./amd");
      _amd2 = _interopRequireDefault(_amd);
      _lodashObjectValues = require("lodash/object/values");
      _lodashObjectValues2 = _interopRequireDefault(_lodashObjectValues);
      _path = require("path");
      _path2 = _interopRequireDefault(_path);
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      UMDFormatter = function (_AMDFormatter) {
        _inherits(UMDFormatter, _AMDFormatter);

        function UMDFormatter() {
          _classCallCheck(this, UMDFormatter);

          _AMDFormatter.apply(this, arguments);
        }

        /**
         * [Please add a description.]
         */

        UMDFormatter.prototype.transform = function transform(program) {
          _default2["default"].prototype.transform.apply(this, arguments);

          var body = program.body;

          // build an array of module names

          var names = [];
          for (var _name in this.ids) {
            names.push(t.literal(_name));
          }

          // factory

          var ids = _lodashObjectValues2["default"](this.ids);
          var args = [t.identifier("exports")];
          if (this.passModuleArg) args.push(t.identifier("module"));
          args = args.concat(ids);

          var factory = t.functionExpression(null, args, t.blockStatement(body));

          // amd

          var defineArgs = [t.literal("exports")];
          if (this.passModuleArg) defineArgs.push(t.literal("module"));
          defineArgs = defineArgs.concat(names);
          defineArgs = [t.arrayExpression(defineArgs)];

          // common

          var testExports = util.template("test-exports");
          var testModule = util.template("test-module");
          var commonTests = this.passModuleArg ? t.logicalExpression("&&", testExports, testModule) : testExports;

          var commonArgs = [t.identifier("exports")];
          if (this.passModuleArg) commonArgs.push(t.identifier("module"));
          commonArgs = commonArgs.concat(names.map(function (name) {
            return t.callExpression(t.identifier("require"), [name]);
          }));

          // globals

          var browserArgs = [];
          if (this.passModuleArg) browserArgs.push(t.identifier("mod"));

          for (var _name2 in this.ids) {
            var id = this.defaultIds[_name2] || t.identifier(t.toIdentifier(_path2["default"].basename(_name2, _path2["default"].extname(_name2))));
            browserArgs.push(t.memberExpression(t.identifier("global"), id));
          }

          //

          var moduleName = this.getModuleName();
          if (moduleName) defineArgs.unshift(t.literal(moduleName));

          //
          var globalArg = this.file.opts.basename;
          if (moduleName) globalArg = moduleName;
          globalArg = t.identifier(t.toIdentifier(globalArg));

          var runner = util.template("umd-runner-body", {
            AMD_ARGUMENTS: defineArgs,
            COMMON_TEST: commonTests,
            COMMON_ARGUMENTS: commonArgs,
            BROWSER_ARGUMENTS: browserArgs,
            GLOBAL_ARG: globalArg
          });

          //

          program.body = [t.expressionStatement(t.callExpression(runner, [t.thisExpression(), factory]))];
        };

        return UMDFormatter;
      }(_amd2["default"]);

      exports["default"] = UMDFormatter;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy91bWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7O0FBSUEsV0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLFVBQTdCLEVBQXlDO0FBQUUsUUFBSSxPQUFPLFVBQVAsS0FBc0IsVUFBdEIsSUFBb0MsZUFBZSxJQUFmLEVBQXFCO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsK0RBQXBFLENBQXBCLENBQUY7S0FBN0QsUUFBc0ssQ0FBUyxTQUFULEdBQXFCLE9BQU8sTUFBUCxDQUFjLGNBQWMsV0FBVyxTQUFYLEVBQXNCLEVBQUUsYUFBYSxFQUFFLE9BQU8sUUFBUCxFQUFpQixZQUFZLEtBQVosRUFBbUIsVUFBVSxJQUFWLEVBQWdCLGNBQWMsSUFBZCxFQUFuRSxFQUFwRCxDQUFyQixDQUF4SyxJQUFpVixVQUFKLEVBQWdCLE9BQU8sY0FBUCxHQUF3QixPQUFPLGNBQVAsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBaEMsQ0FBeEIsR0FBc0UsU0FBUyxTQUFULEdBQXFCLFVBQXJCLENBQXRGO0dBQXRYOzs7Ozs7Ozs7O0FBZkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBaUJJLFdBQVcsUUFBUSxZQUFSO0FBRVgsa0JBQVksdUJBQXVCLFFBQXZCO0FBRVosYUFBTyxRQUFRLE9BQVI7QUFFUCxjQUFRLHVCQUF1QixJQUF2QjtBQUVSLDRCQUFzQixRQUFRLHNCQUFSO0FBRXRCLDZCQUF1Qix1QkFBdUIsbUJBQXZCO0FBRXZCLGNBQVEsUUFBUSxNQUFSO0FBRVIsZUFBUyx1QkFBdUIsS0FBdkI7QUFFVCxjQUFRLFFBQVEsWUFBUjtBQUVSLGFBQU8sd0JBQXdCLEtBQXhCO0FBRVAsZUFBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4Qjs7QUFNSixxQkFBZSxVQUFXLGFBQVYsRUFBeUI7QUFDM0Msa0JBQVUsWUFBVixFQUF3QixhQUF4QixFQUQyQzs7QUFHM0MsaUJBQVMsWUFBVCxHQUF3QjtBQUN0QiwwQkFBZ0IsSUFBaEIsRUFBc0IsWUFBdEIsRUFEc0I7O0FBR3RCLHdCQUFjLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEIsU0FBMUIsRUFIc0I7U0FBeEI7Ozs7OztBQUgyQyxvQkFhM0MsQ0FBYSxTQUFiLENBQXVCLFNBQXZCLEdBQW1DLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUM3RCxvQkFBVSxTQUFWLEVBQXFCLFNBQXJCLENBQStCLFNBQS9CLENBQXlDLEtBQXpDLENBQStDLElBQS9DLEVBQXFELFNBQXJELEVBRDZEOztBQUc3RCxjQUFJLE9BQU8sUUFBUSxJQUFSOzs7O0FBSGtELGNBT3pELFFBQVEsRUFBUixDQVB5RDtBQVE3RCxlQUFLLElBQUksS0FBSixJQUFhLEtBQUssR0FBTCxFQUFVO0FBQzFCLGtCQUFNLElBQU4sQ0FBVyxFQUFFLE9BQUYsQ0FBVSxLQUFWLENBQVgsRUFEMEI7V0FBNUI7Ozs7QUFSNkQsY0FjekQsTUFBTSxxQkFBcUIsU0FBckIsRUFBZ0MsS0FBSyxHQUFMLENBQXRDLENBZHlEO0FBZTdELGNBQUksT0FBTyxDQUFDLEVBQUUsVUFBRixDQUFhLFNBQWIsQ0FBRCxDQUFQLENBZnlEO0FBZ0I3RCxjQUFJLEtBQUssYUFBTCxFQUFvQixLQUFLLElBQUwsQ0FBVSxFQUFFLFVBQUYsQ0FBYSxRQUFiLENBQVYsRUFBeEI7QUFDQSxpQkFBTyxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVAsQ0FqQjZEOztBQW1CN0QsY0FBSSxVQUFVLEVBQUUsa0JBQUYsQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsRUFBRSxjQUFGLENBQWlCLElBQWpCLENBQWpDLENBQVY7Ozs7QUFuQnlELGNBdUJ6RCxhQUFhLENBQUMsRUFBRSxPQUFGLENBQVUsU0FBVixDQUFELENBQWIsQ0F2QnlEO0FBd0I3RCxjQUFJLEtBQUssYUFBTCxFQUFvQixXQUFXLElBQVgsQ0FBZ0IsRUFBRSxPQUFGLENBQVUsUUFBVixDQUFoQixFQUF4QjtBQUNBLHVCQUFhLFdBQVcsTUFBWCxDQUFrQixLQUFsQixDQUFiLENBekI2RDtBQTBCN0QsdUJBQWEsQ0FBQyxFQUFFLGVBQUYsQ0FBa0IsVUFBbEIsQ0FBRCxDQUFiOzs7O0FBMUI2RCxjQThCekQsY0FBYyxLQUFLLFFBQUwsQ0FBYyxjQUFkLENBQWQsQ0E5QnlEO0FBK0I3RCxjQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUFiLENBL0J5RDtBQWdDN0QsY0FBSSxjQUFjLEtBQUssYUFBTCxHQUFxQixFQUFFLGlCQUFGLENBQW9CLElBQXBCLEVBQTBCLFdBQTFCLEVBQXVDLFVBQXZDLENBQXJCLEdBQTBFLFdBQTFFLENBaEMyQzs7QUFrQzdELGNBQUksYUFBYSxDQUFDLEVBQUUsVUFBRixDQUFhLFNBQWIsQ0FBRCxDQUFiLENBbEN5RDtBQW1DN0QsY0FBSSxLQUFLLGFBQUwsRUFBb0IsV0FBVyxJQUFYLENBQWdCLEVBQUUsVUFBRixDQUFhLFFBQWIsQ0FBaEIsRUFBeEI7QUFDQSx1QkFBYSxXQUFXLE1BQVgsQ0FBa0IsTUFBTSxHQUFOLENBQVUsVUFBVSxJQUFWLEVBQWdCO0FBQ3ZELG1CQUFPLEVBQUUsY0FBRixDQUFpQixFQUFFLFVBQUYsQ0FBYSxTQUFiLENBQWpCLEVBQTBDLENBQUMsSUFBRCxDQUExQyxDQUFQLENBRHVEO1dBQWhCLENBQTVCLENBQWI7Ozs7QUFwQzZELGNBMEN6RCxjQUFjLEVBQWQsQ0ExQ3lEO0FBMkM3RCxjQUFJLEtBQUssYUFBTCxFQUFvQixZQUFZLElBQVosQ0FBaUIsRUFBRSxVQUFGLENBQWEsS0FBYixDQUFqQixFQUF4Qjs7QUFFQSxlQUFLLElBQUksTUFBSixJQUFjLEtBQUssR0FBTCxFQUFVO0FBQzNCLGdCQUFJLEtBQUssS0FBSyxVQUFMLENBQWdCLE1BQWhCLEtBQTJCLEVBQUUsVUFBRixDQUFhLEVBQUUsWUFBRixDQUFlLE9BQU8sU0FBUCxFQUFrQixRQUFsQixDQUEyQixNQUEzQixFQUFtQyxPQUFPLFNBQVAsRUFBa0IsT0FBbEIsQ0FBMEIsTUFBMUIsQ0FBbkMsQ0FBZixDQUFiLENBQTNCLENBRGtCO0FBRTNCLHdCQUFZLElBQVosQ0FBaUIsRUFBRSxnQkFBRixDQUFtQixFQUFFLFVBQUYsQ0FBYSxRQUFiLENBQW5CLEVBQTJDLEVBQTNDLENBQWpCLEVBRjJCO1dBQTdCOzs7O0FBN0M2RCxjQW9EekQsYUFBYSxLQUFLLGFBQUwsRUFBYixDQXBEeUQ7QUFxRDdELGNBQUksVUFBSixFQUFnQixXQUFXLE9BQVgsQ0FBbUIsRUFBRSxPQUFGLENBQVUsVUFBVixDQUFuQixFQUFoQjs7O0FBckQ2RCxjQXdEekQsWUFBWSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsUUFBZixDQXhENkM7QUF5RDdELGNBQUksVUFBSixFQUFnQixZQUFZLFVBQVosQ0FBaEI7QUFDQSxzQkFBWSxFQUFFLFVBQUYsQ0FBYSxFQUFFLFlBQUYsQ0FBZSxTQUFmLENBQWIsQ0FBWixDQTFENkQ7O0FBNEQ3RCxjQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsaUJBQWQsRUFBaUM7QUFDNUMsMkJBQWUsVUFBZjtBQUNBLHlCQUFhLFdBQWI7QUFDQSw4QkFBa0IsVUFBbEI7QUFDQSwrQkFBbUIsV0FBbkI7QUFDQSx3QkFBWSxTQUFaO1dBTFcsQ0FBVDs7OztBQTVEeUQsaUJBc0U3RCxDQUFRLElBQVIsR0FBZSxDQUFDLEVBQUUsbUJBQUYsQ0FBc0IsRUFBRSxjQUFGLENBQWlCLE1BQWpCLEVBQXlCLENBQUMsRUFBRSxjQUFGLEVBQUQsRUFBcUIsT0FBckIsQ0FBekIsQ0FBdEIsQ0FBRCxDQUFmLENBdEU2RDtTQUE1QixDQWJROztBQXNGM0MsZUFBTyxZQUFQLENBdEYyQztPQUF6QixDQXVGakIsTUFBTSxTQUFOLENBdkZnQjs7QUF5Rm5CLGNBQVEsU0FBUixJQUFxQixZQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9tb2R1bGVzL3VtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX2RlZmF1bHQgPSByZXF1aXJlKFwiLi9fZGVmYXVsdFwiKTtcblxudmFyIF9kZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHQpO1xuXG52YXIgX2FtZCA9IHJlcXVpcmUoXCIuL2FtZFwiKTtcblxudmFyIF9hbWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW1kKTtcblxudmFyIF9sb2Rhc2hPYmplY3RWYWx1ZXMgPSByZXF1aXJlKFwibG9kYXNoL29iamVjdC92YWx1ZXNcIik7XG5cbnZhciBfbG9kYXNoT2JqZWN0VmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaE9iamVjdFZhbHVlcyk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBVTURGb3JtYXR0ZXIgPSAoZnVuY3Rpb24gKF9BTURGb3JtYXR0ZXIpIHtcbiAgX2luaGVyaXRzKFVNREZvcm1hdHRlciwgX0FNREZvcm1hdHRlcik7XG5cbiAgZnVuY3Rpb24gVU1ERm9ybWF0dGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVTURGb3JtYXR0ZXIpO1xuXG4gICAgX0FNREZvcm1hdHRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBVTURGb3JtYXR0ZXIucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShwcm9ncmFtKSB7XG4gICAgX2RlZmF1bHQyW1wiZGVmYXVsdFwiXS5wcm90b3R5cGUudHJhbnNmb3JtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgYm9keSA9IHByb2dyYW0uYm9keTtcblxuICAgIC8vIGJ1aWxkIGFuIGFycmF5IG9mIG1vZHVsZSBuYW1lc1xuXG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIgX25hbWUgaW4gdGhpcy5pZHMpIHtcbiAgICAgIG5hbWVzLnB1c2godC5saXRlcmFsKF9uYW1lKSk7XG4gICAgfVxuXG4gICAgLy8gZmFjdG9yeVxuXG4gICAgdmFyIGlkcyA9IF9sb2Rhc2hPYmplY3RWYWx1ZXMyW1wiZGVmYXVsdFwiXSh0aGlzLmlkcyk7XG4gICAgdmFyIGFyZ3MgPSBbdC5pZGVudGlmaWVyKFwiZXhwb3J0c1wiKV07XG4gICAgaWYgKHRoaXMucGFzc01vZHVsZUFyZykgYXJncy5wdXNoKHQuaWRlbnRpZmllcihcIm1vZHVsZVwiKSk7XG4gICAgYXJncyA9IGFyZ3MuY29uY2F0KGlkcyk7XG5cbiAgICB2YXIgZmFjdG9yeSA9IHQuZnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIGFyZ3MsIHQuYmxvY2tTdGF0ZW1lbnQoYm9keSkpO1xuXG4gICAgLy8gYW1kXG5cbiAgICB2YXIgZGVmaW5lQXJncyA9IFt0LmxpdGVyYWwoXCJleHBvcnRzXCIpXTtcbiAgICBpZiAodGhpcy5wYXNzTW9kdWxlQXJnKSBkZWZpbmVBcmdzLnB1c2godC5saXRlcmFsKFwibW9kdWxlXCIpKTtcbiAgICBkZWZpbmVBcmdzID0gZGVmaW5lQXJncy5jb25jYXQobmFtZXMpO1xuICAgIGRlZmluZUFyZ3MgPSBbdC5hcnJheUV4cHJlc3Npb24oZGVmaW5lQXJncyldO1xuXG4gICAgLy8gY29tbW9uXG5cbiAgICB2YXIgdGVzdEV4cG9ydHMgPSB1dGlsLnRlbXBsYXRlKFwidGVzdC1leHBvcnRzXCIpO1xuICAgIHZhciB0ZXN0TW9kdWxlID0gdXRpbC50ZW1wbGF0ZShcInRlc3QtbW9kdWxlXCIpO1xuICAgIHZhciBjb21tb25UZXN0cyA9IHRoaXMucGFzc01vZHVsZUFyZyA/IHQubG9naWNhbEV4cHJlc3Npb24oXCImJlwiLCB0ZXN0RXhwb3J0cywgdGVzdE1vZHVsZSkgOiB0ZXN0RXhwb3J0cztcblxuICAgIHZhciBjb21tb25BcmdzID0gW3QuaWRlbnRpZmllcihcImV4cG9ydHNcIildO1xuICAgIGlmICh0aGlzLnBhc3NNb2R1bGVBcmcpIGNvbW1vbkFyZ3MucHVzaCh0LmlkZW50aWZpZXIoXCJtb2R1bGVcIikpO1xuICAgIGNvbW1vbkFyZ3MgPSBjb21tb25BcmdzLmNvbmNhdChuYW1lcy5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKHQuaWRlbnRpZmllcihcInJlcXVpcmVcIiksIFtuYW1lXSk7XG4gICAgfSkpO1xuXG4gICAgLy8gZ2xvYmFsc1xuXG4gICAgdmFyIGJyb3dzZXJBcmdzID0gW107XG4gICAgaWYgKHRoaXMucGFzc01vZHVsZUFyZykgYnJvd3NlckFyZ3MucHVzaCh0LmlkZW50aWZpZXIoXCJtb2RcIikpO1xuXG4gICAgZm9yICh2YXIgX25hbWUyIGluIHRoaXMuaWRzKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzLmRlZmF1bHRJZHNbX25hbWUyXSB8fCB0LmlkZW50aWZpZXIodC50b0lkZW50aWZpZXIoX3BhdGgyW1wiZGVmYXVsdFwiXS5iYXNlbmFtZShfbmFtZTIsIF9wYXRoMltcImRlZmF1bHRcIl0uZXh0bmFtZShfbmFtZTIpKSkpO1xuICAgICAgYnJvd3NlckFyZ3MucHVzaCh0Lm1lbWJlckV4cHJlc3Npb24odC5pZGVudGlmaWVyKFwiZ2xvYmFsXCIpLCBpZCkpO1xuICAgIH1cblxuICAgIC8vXG5cbiAgICB2YXIgbW9kdWxlTmFtZSA9IHRoaXMuZ2V0TW9kdWxlTmFtZSgpO1xuICAgIGlmIChtb2R1bGVOYW1lKSBkZWZpbmVBcmdzLnVuc2hpZnQodC5saXRlcmFsKG1vZHVsZU5hbWUpKTtcblxuICAgIC8vXG4gICAgdmFyIGdsb2JhbEFyZyA9IHRoaXMuZmlsZS5vcHRzLmJhc2VuYW1lO1xuICAgIGlmIChtb2R1bGVOYW1lKSBnbG9iYWxBcmcgPSBtb2R1bGVOYW1lO1xuICAgIGdsb2JhbEFyZyA9IHQuaWRlbnRpZmllcih0LnRvSWRlbnRpZmllcihnbG9iYWxBcmcpKTtcblxuICAgIHZhciBydW5uZXIgPSB1dGlsLnRlbXBsYXRlKFwidW1kLXJ1bm5lci1ib2R5XCIsIHtcbiAgICAgIEFNRF9BUkdVTUVOVFM6IGRlZmluZUFyZ3MsXG4gICAgICBDT01NT05fVEVTVDogY29tbW9uVGVzdHMsXG4gICAgICBDT01NT05fQVJHVU1FTlRTOiBjb21tb25BcmdzLFxuICAgICAgQlJPV1NFUl9BUkdVTUVOVFM6IGJyb3dzZXJBcmdzLFxuICAgICAgR0xPQkFMX0FSRzogZ2xvYmFsQXJnXG4gICAgfSk7XG5cbiAgICAvL1xuXG4gICAgcHJvZ3JhbS5ib2R5ID0gW3QuZXhwcmVzc2lvblN0YXRlbWVudCh0LmNhbGxFeHByZXNzaW9uKHJ1bm5lciwgW3QudGhpc0V4cHJlc3Npb24oKSwgZmFjdG9yeV0pKV07XG4gIH07XG5cbiAgcmV0dXJuIFVNREZvcm1hdHRlcjtcbn0pKF9hbWQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVU1ERm9ybWF0dGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
