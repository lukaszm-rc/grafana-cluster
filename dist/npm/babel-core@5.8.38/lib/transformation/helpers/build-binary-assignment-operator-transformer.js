/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _explodeAssignableExpression, _explodeAssignableExpression2, _types, t;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_explodeAssignableExpression = require("./explode-assignable-expression");
      _explodeAssignableExpression2 = _interopRequireDefault(_explodeAssignableExpression);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);


      /**
       * [Please add a description.]
       */

      exports["default"] = function (opts) {
        var exports = {};

        /**
         * [Please add a description.]
         */

        var isAssignment = function isAssignment(node) {
          return node.operator === opts.operator + "=";
        };

        /**
         * [Please add a description.]
         */

        var buildAssignment = function buildAssignment(left, right) {
          return t.assignmentExpression("=", left, right);
        };

        /**
         * [Please add a description.]
         */

        exports.ExpressionStatement = function (node, parent, scope, file) {
          // hit the `AssignmentExpression` one below
          if (this.isCompletionRecord()) return;

          var expr = node.expression;
          if (!isAssignment(expr)) return;

          var nodes = [];
          var exploded = _explodeAssignableExpression2["default"](expr.left, nodes, file, scope, true);

          nodes.push(t.expressionStatement(buildAssignment(exploded.ref, opts.build(exploded.uid, expr.right))));

          return nodes;
        };

        /**
         * [Please add a description.]
         */

        exports.AssignmentExpression = function (node, parent, scope, file) {
          if (!isAssignment(node)) return;

          var nodes = [];
          var exploded = _explodeAssignableExpression2["default"](node.left, nodes, file, scope);
          nodes.push(buildAssignment(exploded.ref, opts.build(exploded.uid, node.right)));
          return nodes;
        };

        /**
         * [Please add a description.]
         */

        exports.BinaryExpression = function (node) {
          if (node.operator !== opts.operator) return;
          return opts.build(node.left, node.right);
        };

        return exports;
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9idWlsZC1iaW5hcnktYXNzaWdubWVudC1vcGVyYXRvci10cmFuc2Zvcm1lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7OztBQVBBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQVNJLCtCQUErQixRQUFRLGlDQUFSO0FBRS9CLHNDQUFnQyx1QkFBdUIsNEJBQXZCO0FBRWhDLGVBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7Ozs7Ozs7QUFNUixjQUFRLFNBQVIsSUFBcUIsVUFBVSxJQUFWLEVBQWdCO0FBQ25DLFlBQUksVUFBVSxFQUFWOzs7Ozs7QUFEK0IsWUFPL0IsZUFBZSxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEI7QUFDN0MsaUJBQU8sS0FBSyxRQUFMLEtBQWtCLEtBQUssUUFBTCxHQUFnQixHQUFoQixDQURvQjtTQUE1Qjs7Ozs7O0FBUGdCLFlBZS9CLGtCQUFrQixTQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0M7QUFDMUQsaUJBQU8sRUFBRSxvQkFBRixDQUF1QixHQUF2QixFQUE0QixJQUE1QixFQUFrQyxLQUFsQyxDQUFQLENBRDBEO1NBQXRDOzs7Ozs7QUFmYSxlQXVCbkMsQ0FBUSxtQkFBUixHQUE4QixVQUFVLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsRUFBcUM7O0FBRWpFLGNBQUksS0FBSyxrQkFBTCxFQUFKLEVBQStCLE9BQS9COztBQUVBLGNBQUksT0FBTyxLQUFLLFVBQUwsQ0FKc0Q7QUFLakUsY0FBSSxDQUFDLGFBQWEsSUFBYixDQUFELEVBQXFCLE9BQXpCOztBQUVBLGNBQUksUUFBUSxFQUFSLENBUDZEO0FBUWpFLGNBQUksV0FBVyw4QkFBOEIsU0FBOUIsRUFBeUMsS0FBSyxJQUFMLEVBQVcsS0FBcEQsRUFBMkQsSUFBM0QsRUFBaUUsS0FBakUsRUFBd0UsSUFBeEUsQ0FBWCxDQVI2RDs7QUFVakUsZ0JBQU0sSUFBTixDQUFXLEVBQUUsbUJBQUYsQ0FBc0IsZ0JBQWdCLFNBQVMsR0FBVCxFQUFjLEtBQUssS0FBTCxDQUFXLFNBQVMsR0FBVCxFQUFjLEtBQUssS0FBTCxDQUF2RCxDQUF0QixDQUFYLEVBVmlFOztBQVlqRSxpQkFBTyxLQUFQLENBWmlFO1NBQXJDOzs7Ozs7QUF2QkssZUEwQ25DLENBQVEsb0JBQVIsR0FBK0IsVUFBVSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCLEtBQXhCLEVBQStCLElBQS9CLEVBQXFDO0FBQ2xFLGNBQUksQ0FBQyxhQUFhLElBQWIsQ0FBRCxFQUFxQixPQUF6Qjs7QUFFQSxjQUFJLFFBQVEsRUFBUixDQUg4RDtBQUlsRSxjQUFJLFdBQVcsOEJBQThCLFNBQTlCLEVBQXlDLEtBQUssSUFBTCxFQUFXLEtBQXBELEVBQTJELElBQTNELEVBQWlFLEtBQWpFLENBQVgsQ0FKOEQ7QUFLbEUsZ0JBQU0sSUFBTixDQUFXLGdCQUFnQixTQUFTLEdBQVQsRUFBYyxLQUFLLEtBQUwsQ0FBVyxTQUFTLEdBQVQsRUFBYyxLQUFLLEtBQUwsQ0FBdkQsQ0FBWCxFQUxrRTtBQU1sRSxpQkFBTyxLQUFQLENBTmtFO1NBQXJDOzs7Ozs7QUExQ0ksZUF1RG5DLENBQVEsZ0JBQVIsR0FBMkIsVUFBVSxJQUFWLEVBQWdCO0FBQ3pDLGNBQUksS0FBSyxRQUFMLEtBQWtCLEtBQUssUUFBTCxFQUFlLE9BQXJDO0FBQ0EsaUJBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxJQUFMLEVBQVcsS0FBSyxLQUFMLENBQTdCLENBRnlDO1NBQWhCLENBdkRROztBQTREbkMsZUFBTyxPQUFQLENBNURtQztPQUFoQjs7QUErRHJCLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9oZWxwZXJzL2J1aWxkLWJpbmFyeS1hc3NpZ25tZW50LW9wZXJhdG9yLXRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9leHBsb2RlQXNzaWduYWJsZUV4cHJlc3Npb24gPSByZXF1aXJlKFwiLi9leHBsb2RlLWFzc2lnbmFibGUtZXhwcmVzc2lvblwiKTtcblxudmFyIF9leHBsb2RlQXNzaWduYWJsZUV4cHJlc3Npb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhwbG9kZUFzc2lnbmFibGVFeHByZXNzaW9uKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIGV4cG9ydHMgPSB7fTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIHZhciBpc0Fzc2lnbm1lbnQgPSBmdW5jdGlvbiBpc0Fzc2lnbm1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm9wZXJhdG9yID09PSBvcHRzLm9wZXJhdG9yICsgXCI9XCI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICB2YXIgYnVpbGRBc3NpZ25tZW50ID0gZnVuY3Rpb24gYnVpbGRBc3NpZ25tZW50KGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIGxlZnQsIHJpZ2h0KTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIGV4cG9ydHMuRXhwcmVzc2lvblN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgLy8gaGl0IHRoZSBgQXNzaWdubWVudEV4cHJlc3Npb25gIG9uZSBiZWxvd1xuICAgIGlmICh0aGlzLmlzQ29tcGxldGlvblJlY29yZCgpKSByZXR1cm47XG5cbiAgICB2YXIgZXhwciA9IG5vZGUuZXhwcmVzc2lvbjtcbiAgICBpZiAoIWlzQXNzaWdubWVudChleHByKSkgcmV0dXJuO1xuXG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIGV4cGxvZGVkID0gX2V4cGxvZGVBc3NpZ25hYmxlRXhwcmVzc2lvbjJbXCJkZWZhdWx0XCJdKGV4cHIubGVmdCwgbm9kZXMsIGZpbGUsIHNjb3BlLCB0cnVlKTtcblxuICAgIG5vZGVzLnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KGJ1aWxkQXNzaWdubWVudChleHBsb2RlZC5yZWYsIG9wdHMuYnVpbGQoZXhwbG9kZWQudWlkLCBleHByLnJpZ2h0KSkpKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIGV4cG9ydHMuQXNzaWdubWVudEV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIGlmICghaXNBc3NpZ25tZW50KG5vZGUpKSByZXR1cm47XG5cbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICB2YXIgZXhwbG9kZWQgPSBfZXhwbG9kZUFzc2lnbmFibGVFeHByZXNzaW9uMltcImRlZmF1bHRcIl0obm9kZS5sZWZ0LCBub2RlcywgZmlsZSwgc2NvcGUpO1xuICAgIG5vZGVzLnB1c2goYnVpbGRBc3NpZ25tZW50KGV4cGxvZGVkLnJlZiwgb3B0cy5idWlsZChleHBsb2RlZC51aWQsIG5vZGUucmlnaHQpKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgZXhwb3J0cy5CaW5hcnlFeHByZXNzaW9uID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZS5vcGVyYXRvciAhPT0gb3B0cy5vcGVyYXRvcikgcmV0dXJuO1xuICAgIHJldHVybiBvcHRzLmJ1aWxkKG5vZGUubGVmdCwgbm9kZS5yaWdodCk7XG4gIH07XG5cbiAgcmV0dXJuIGV4cG9ydHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
