/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _vanilla, _vanilla2, _types, t, LooseClassTransformer;

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
      exports.__esModule = true;_vanilla = require("./vanilla");
      _vanilla2 = _interopRequireDefault(_vanilla);
      _types = require("../../../../types");
      t = _interopRequireWildcard(_types);

      LooseClassTransformer = function (_VanillaTransformer) {
        _inherits(LooseClassTransformer, _VanillaTransformer);

        function LooseClassTransformer() {
          _classCallCheck(this, LooseClassTransformer);

          _VanillaTransformer.apply(this, arguments);
          this.isLoose = true;
        }

        /**
         * [Please add a description.]
         */

        LooseClassTransformer.prototype._processMethod = function _processMethod(node) {
          if (!node.decorators) {
            // use assignments instead of define properties for loose classes

            var classRef = this.classRef;
            if (!node["static"]) classRef = t.memberExpression(classRef, t.identifier("prototype"));
            var methodName = t.memberExpression(classRef, node.key, node.computed || t.isLiteral(node.key));

            var expr = t.expressionStatement(t.assignmentExpression("=", methodName, node.value));
            t.inheritsComments(expr, node);
            this.body.push(expr);
            return true;
          }
        };

        return LooseClassTransformer;
      }(_vanilla2["default"]);

      exports["default"] = LooseClassTransformer;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9jbGFzc2VzL2xvb3NlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7OztBQUlBLFdBQVMsU0FBVCxDQUFtQixRQUFuQixFQUE2QixVQUE3QixFQUF5QztBQUFFLFFBQUksT0FBTyxVQUFQLEtBQXNCLFVBQXRCLElBQW9DLGVBQWUsSUFBZixFQUFxQjtBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMscUVBQW9FLCtEQUFwRSxDQUFwQixDQUFGO0tBQTdELFFBQXNLLENBQVMsU0FBVCxHQUFxQixPQUFPLE1BQVAsQ0FBYyxjQUFjLFdBQVcsU0FBWCxFQUFzQixFQUFFLGFBQWEsRUFBRSxPQUFPLFFBQVAsRUFBaUIsWUFBWSxLQUFaLEVBQW1CLFVBQVUsSUFBVixFQUFnQixjQUFjLElBQWQsRUFBbkUsRUFBcEQsQ0FBckIsQ0FBeEssSUFBaVYsVUFBSixFQUFnQixPQUFPLGNBQVAsR0FBd0IsT0FBTyxjQUFQLENBQXNCLFFBQXRCLEVBQWdDLFVBQWhDLENBQXhCLEdBQXNFLFNBQVMsU0FBVCxHQUFxQixVQUFyQixDQUF0RjtHQUF0WDs7Ozs7Ozs7OztBQWZBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQWlCSSxXQUFXLFFBQVEsV0FBUjtBQUVYLGtCQUFZLHVCQUF1QixRQUF2QjtBQUVaLGVBQVMsUUFBUSxtQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCOztBQU1KLDhCQUF3QixVQUFXLG1CQUFWLEVBQStCO0FBQzFELGtCQUFVLHFCQUFWLEVBQWlDLG1CQUFqQyxFQUQwRDs7QUFHMUQsaUJBQVMscUJBQVQsR0FBaUM7QUFDL0IsMEJBQWdCLElBQWhCLEVBQXNCLHFCQUF0QixFQUQrQjs7QUFHL0IsOEJBQW9CLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDLFNBQWhDLEVBSCtCO0FBSS9CLGVBQUssT0FBTCxHQUFlLElBQWYsQ0FKK0I7U0FBakM7Ozs7OztBQUgwRCw2QkFjMUQsQ0FBc0IsU0FBdEIsQ0FBZ0MsY0FBaEMsR0FBaUQsU0FBUyxjQUFULENBQXdCLElBQXhCLEVBQThCO0FBQzdFLGNBQUksQ0FBQyxLQUFLLFVBQUwsRUFBaUI7OztBQUdwQixnQkFBSSxXQUFXLEtBQUssUUFBTCxDQUhLO0FBSXBCLGdCQUFJLENBQUMsS0FBSyxRQUFMLENBQUQsRUFBaUIsV0FBVyxFQUFFLGdCQUFGLENBQW1CLFFBQW5CLEVBQTZCLEVBQUUsVUFBRixDQUFhLFdBQWIsQ0FBN0IsQ0FBWCxDQUFyQjtBQUNBLGdCQUFJLGFBQWEsRUFBRSxnQkFBRixDQUFtQixRQUFuQixFQUE2QixLQUFLLEdBQUwsRUFBVSxLQUFLLFFBQUwsSUFBaUIsRUFBRSxTQUFGLENBQVksS0FBSyxHQUFMLENBQTdCLENBQXBELENBTGdCOztBQU9wQixnQkFBSSxPQUFPLEVBQUUsbUJBQUYsQ0FBc0IsRUFBRSxvQkFBRixDQUF1QixHQUF2QixFQUE0QixVQUE1QixFQUF3QyxLQUFLLEtBQUwsQ0FBOUQsQ0FBUCxDQVBnQjtBQVFwQixjQUFFLGdCQUFGLENBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBUm9CO0FBU3BCLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixFQVRvQjtBQVVwQixtQkFBTyxJQUFQLENBVm9CO1dBQXRCO1NBRCtDLENBZFM7O0FBNkIxRCxlQUFPLHFCQUFQLENBN0IwRDtPQUEvQixDQThCMUIsVUFBVSxTQUFWLENBOUJ5Qjs7QUFnQzVCLGNBQVEsU0FBUixJQUFxQixxQkFBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9jbGFzc2VzL2xvb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfdmFuaWxsYSA9IHJlcXVpcmUoXCIuL3ZhbmlsbGFcIik7XG5cbnZhciBfdmFuaWxsYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YW5pbGxhKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBMb29zZUNsYXNzVHJhbnNmb3JtZXIgPSAoZnVuY3Rpb24gKF9WYW5pbGxhVHJhbnNmb3JtZXIpIHtcbiAgX2luaGVyaXRzKExvb3NlQ2xhc3NUcmFuc2Zvcm1lciwgX1ZhbmlsbGFUcmFuc2Zvcm1lcik7XG5cbiAgZnVuY3Rpb24gTG9vc2VDbGFzc1RyYW5zZm9ybWVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb29zZUNsYXNzVHJhbnNmb3JtZXIpO1xuXG4gICAgX1ZhbmlsbGFUcmFuc2Zvcm1lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNMb29zZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIExvb3NlQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuX3Byb2Nlc3NNZXRob2QgPSBmdW5jdGlvbiBfcHJvY2Vzc01ldGhvZChub2RlKSB7XG4gICAgaWYgKCFub2RlLmRlY29yYXRvcnMpIHtcbiAgICAgIC8vIHVzZSBhc3NpZ25tZW50cyBpbnN0ZWFkIG9mIGRlZmluZSBwcm9wZXJ0aWVzIGZvciBsb29zZSBjbGFzc2VzXG5cbiAgICAgIHZhciBjbGFzc1JlZiA9IHRoaXMuY2xhc3NSZWY7XG4gICAgICBpZiAoIW5vZGVbXCJzdGF0aWNcIl0pIGNsYXNzUmVmID0gdC5tZW1iZXJFeHByZXNzaW9uKGNsYXNzUmVmLCB0LmlkZW50aWZpZXIoXCJwcm90b3R5cGVcIikpO1xuICAgICAgdmFyIG1ldGhvZE5hbWUgPSB0Lm1lbWJlckV4cHJlc3Npb24oY2xhc3NSZWYsIG5vZGUua2V5LCBub2RlLmNvbXB1dGVkIHx8IHQuaXNMaXRlcmFsKG5vZGUua2V5KSk7XG5cbiAgICAgIHZhciBleHByID0gdC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIG1ldGhvZE5hbWUsIG5vZGUudmFsdWUpKTtcbiAgICAgIHQuaW5oZXJpdHNDb21tZW50cyhleHByLCBub2RlKTtcbiAgICAgIHRoaXMuYm9keS5wdXNoKGV4cHIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBMb29zZUNsYXNzVHJhbnNmb3JtZXI7XG59KShfdmFuaWxsYTJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb29zZUNsYXNzVHJhbnNmb3JtZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
