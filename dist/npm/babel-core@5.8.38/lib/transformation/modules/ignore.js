/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _default, _default2, _types, t, IgnoreFormatter;

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
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      IgnoreFormatter = function (_DefaultFormatter) {
        _inherits(IgnoreFormatter, _DefaultFormatter);

        function IgnoreFormatter() {
          _classCallCheck(this, IgnoreFormatter);

          _DefaultFormatter.apply(this, arguments);
        }

        /**
         * [Please add a description.]
         */

        IgnoreFormatter.prototype.exportDeclaration = function exportDeclaration(node, nodes) {
          var declar = t.toStatement(node.declaration, true);
          if (declar) nodes.push(t.inherits(declar, node));
        };

        /**
         * [Please add a description.]
         */

        IgnoreFormatter.prototype.exportAllDeclaration = function exportAllDeclaration() {};

        IgnoreFormatter.prototype.importDeclaration = function importDeclaration() {};

        IgnoreFormatter.prototype.importSpecifier = function importSpecifier() {};

        IgnoreFormatter.prototype.exportSpecifier = function exportSpecifier() {};

        IgnoreFormatter.prototype.transform = function transform() {};

        return IgnoreFormatter;
      }(_default2["default"]);

      exports["default"] = IgnoreFormatter;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9pZ25vcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7O0FBSUEsV0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLFVBQTdCLEVBQXlDO0FBQUUsUUFBSSxPQUFPLFVBQVAsS0FBc0IsVUFBdEIsSUFBb0MsZUFBZSxJQUFmLEVBQXFCO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsK0RBQXBFLENBQXBCLENBQUY7S0FBN0QsUUFBc0ssQ0FBUyxTQUFULEdBQXFCLE9BQU8sTUFBUCxDQUFjLGNBQWMsV0FBVyxTQUFYLEVBQXNCLEVBQUUsYUFBYSxFQUFFLE9BQU8sUUFBUCxFQUFpQixZQUFZLEtBQVosRUFBbUIsVUFBVSxJQUFWLEVBQWdCLGNBQWMsSUFBZCxFQUFuRSxFQUFwRCxDQUFyQixDQUF4SyxJQUFpVixVQUFKLEVBQWdCLE9BQU8sY0FBUCxHQUF3QixPQUFPLGNBQVAsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBaEMsQ0FBeEIsR0FBc0UsU0FBUyxTQUFULEdBQXFCLFVBQXJCLENBQXRGO0dBQXRYOzs7Ozs7Ozs7O0FBZkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBaUJJLFdBQVcsUUFBUSxZQUFSO0FBRVgsa0JBQVksdUJBQXVCLFFBQXZCO0FBRVosZUFBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4Qjs7QUFNSix3QkFBa0IsVUFBVyxpQkFBVixFQUE2QjtBQUNsRCxrQkFBVSxlQUFWLEVBQTJCLGlCQUEzQixFQURrRDs7QUFHbEQsaUJBQVMsZUFBVCxHQUEyQjtBQUN6QiwwQkFBZ0IsSUFBaEIsRUFBc0IsZUFBdEIsRUFEeUI7O0FBR3pCLDRCQUFrQixLQUFsQixDQUF3QixJQUF4QixFQUE4QixTQUE5QixFQUh5QjtTQUEzQjs7Ozs7O0FBSGtELHVCQWFsRCxDQUFnQixTQUFoQixDQUEwQixpQkFBMUIsR0FBOEMsU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQyxLQUFqQyxFQUF3QztBQUNwRixjQUFJLFNBQVMsRUFBRSxXQUFGLENBQWMsS0FBSyxXQUFMLEVBQWtCLElBQWhDLENBQVQsQ0FEZ0Y7QUFFcEYsY0FBSSxNQUFKLEVBQVksTUFBTSxJQUFOLENBQVcsRUFBRSxRQUFGLENBQVcsTUFBWCxFQUFtQixJQUFuQixDQUFYLEVBQVo7U0FGNEM7Ozs7OztBQWJJLHVCQXNCbEQsQ0FBZ0IsU0FBaEIsQ0FBMEIsb0JBQTFCLEdBQWlELFNBQVMsb0JBQVQsR0FBZ0MsRUFBaEMsQ0F0QkM7O0FBd0JsRCx3QkFBZ0IsU0FBaEIsQ0FBMEIsaUJBQTFCLEdBQThDLFNBQVMsaUJBQVQsR0FBNkIsRUFBN0IsQ0F4Qkk7O0FBMEJsRCx3QkFBZ0IsU0FBaEIsQ0FBMEIsZUFBMUIsR0FBNEMsU0FBUyxlQUFULEdBQTJCLEVBQTNCLENBMUJNOztBQTRCbEQsd0JBQWdCLFNBQWhCLENBQTBCLGVBQTFCLEdBQTRDLFNBQVMsZUFBVCxHQUEyQixFQUEzQixDQTVCTTs7QUE4QmxELHdCQUFnQixTQUFoQixDQUEwQixTQUExQixHQUFzQyxTQUFTLFNBQVQsR0FBcUIsRUFBckIsQ0E5Qlk7O0FBZ0NsRCxlQUFPLGVBQVAsQ0FoQ2tEO09BQTdCLENBaUNwQixVQUFVLFNBQVYsQ0FqQ21COztBQW1DdEIsY0FBUSxTQUFSLElBQXFCLGVBQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL21vZHVsZXMvaWdub3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfZGVmYXVsdCA9IHJlcXVpcmUoXCIuL19kZWZhdWx0XCIpO1xuXG52YXIgX2RlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdCk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgSWdub3JlRm9ybWF0dGVyID0gKGZ1bmN0aW9uIChfRGVmYXVsdEZvcm1hdHRlcikge1xuICBfaW5oZXJpdHMoSWdub3JlRm9ybWF0dGVyLCBfRGVmYXVsdEZvcm1hdHRlcik7XG5cbiAgZnVuY3Rpb24gSWdub3JlRm9ybWF0dGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJZ25vcmVGb3JtYXR0ZXIpO1xuXG4gICAgX0RlZmF1bHRGb3JtYXR0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgSWdub3JlRm9ybWF0dGVyLnByb3RvdHlwZS5leHBvcnREZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIGV4cG9ydERlY2xhcmF0aW9uKG5vZGUsIG5vZGVzKSB7XG4gICAgdmFyIGRlY2xhciA9IHQudG9TdGF0ZW1lbnQobm9kZS5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgaWYgKGRlY2xhcikgbm9kZXMucHVzaCh0LmluaGVyaXRzKGRlY2xhciwgbm9kZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgSWdub3JlRm9ybWF0dGVyLnByb3RvdHlwZS5leHBvcnRBbGxEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIGV4cG9ydEFsbERlY2xhcmF0aW9uKCkge307XG5cbiAgSWdub3JlRm9ybWF0dGVyLnByb3RvdHlwZS5pbXBvcnREZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIGltcG9ydERlY2xhcmF0aW9uKCkge307XG5cbiAgSWdub3JlRm9ybWF0dGVyLnByb3RvdHlwZS5pbXBvcnRTcGVjaWZpZXIgPSBmdW5jdGlvbiBpbXBvcnRTcGVjaWZpZXIoKSB7fTtcblxuICBJZ25vcmVGb3JtYXR0ZXIucHJvdG90eXBlLmV4cG9ydFNwZWNpZmllciA9IGZ1bmN0aW9uIGV4cG9ydFNwZWNpZmllcigpIHt9O1xuXG4gIElnbm9yZUZvcm1hdHRlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKCkge307XG5cbiAgcmV0dXJuIElnbm9yZUZvcm1hdHRlcjtcbn0pKF9kZWZhdWx0MltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IElnbm9yZUZvcm1hdHRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
