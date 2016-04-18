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

      exports["default"] = function (exports, opts) {

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
          if (!opts.is(expr, file)) return;

          var nodes = [];

          var exploded = _explodeAssignableExpression2["default"](expr.left, nodes, file, scope);

          nodes.push(t.ifStatement(opts.build(exploded.uid, file), t.expressionStatement(buildAssignment(exploded.ref, expr.right))));

          return nodes;
        };

        /**
         * [Please add a description.]
         */

        exports.AssignmentExpression = function (node, parent, scope, file) {
          if (!opts.is(node, file)) return;

          var nodes = [];
          var exploded = _explodeAssignableExpression2["default"](node.left, nodes, file, scope);

          nodes.push(t.logicalExpression("&&", opts.build(exploded.uid, file), buildAssignment(exploded.ref, node.right)));

          // todo: duplicate expression node
          nodes.push(exploded.ref);

          return nodes;
        };
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9idWlsZC1jb25kaXRpb25hbC1hc3NpZ25tZW50LW9wZXJhdG9yLXRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksK0JBQStCLFFBQVEsaUNBQVI7QUFFL0Isc0NBQWdDLHVCQUF1Qiw0QkFBdkI7QUFFaEMsZUFBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4Qjs7Ozs7OztBQU1SLGNBQVEsU0FBUixJQUFxQixVQUFVLE9BQVYsRUFBbUIsSUFBbkIsRUFBeUI7Ozs7OztBQU01QyxZQUFJLGtCQUFrQixTQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0M7QUFDMUQsaUJBQU8sRUFBRSxvQkFBRixDQUF1QixHQUF2QixFQUE0QixJQUE1QixFQUFrQyxLQUFsQyxDQUFQLENBRDBEO1NBQXRDOzs7Ozs7QUFOc0IsZUFjNUMsQ0FBUSxtQkFBUixHQUE4QixVQUFVLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsRUFBcUM7O0FBRWpFLGNBQUksS0FBSyxrQkFBTCxFQUFKLEVBQStCLE9BQS9COztBQUVBLGNBQUksT0FBTyxLQUFLLFVBQUwsQ0FKc0Q7QUFLakUsY0FBSSxDQUFDLEtBQUssRUFBTCxDQUFRLElBQVIsRUFBYyxJQUFkLENBQUQsRUFBc0IsT0FBMUI7O0FBRUEsY0FBSSxRQUFRLEVBQVIsQ0FQNkQ7O0FBU2pFLGNBQUksV0FBVyw4QkFBOEIsU0FBOUIsRUFBeUMsS0FBSyxJQUFMLEVBQVcsS0FBcEQsRUFBMkQsSUFBM0QsRUFBaUUsS0FBakUsQ0FBWCxDQVQ2RDs7QUFXakUsZ0JBQU0sSUFBTixDQUFXLEVBQUUsV0FBRixDQUFjLEtBQUssS0FBTCxDQUFXLFNBQVMsR0FBVCxFQUFjLElBQXpCLENBQWQsRUFBOEMsRUFBRSxtQkFBRixDQUFzQixnQkFBZ0IsU0FBUyxHQUFULEVBQWMsS0FBSyxLQUFMLENBQXBELENBQTlDLENBQVgsRUFYaUU7O0FBYWpFLGlCQUFPLEtBQVAsQ0FiaUU7U0FBckM7Ozs7OztBQWRjLGVBa0M1QyxDQUFRLG9CQUFSLEdBQStCLFVBQVUsSUFBVixFQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUErQixJQUEvQixFQUFxQztBQUNsRSxjQUFJLENBQUMsS0FBSyxFQUFMLENBQVEsSUFBUixFQUFjLElBQWQsQ0FBRCxFQUFzQixPQUExQjs7QUFFQSxjQUFJLFFBQVEsRUFBUixDQUg4RDtBQUlsRSxjQUFJLFdBQVcsOEJBQThCLFNBQTlCLEVBQXlDLEtBQUssSUFBTCxFQUFXLEtBQXBELEVBQTJELElBQTNELEVBQWlFLEtBQWpFLENBQVgsQ0FKOEQ7O0FBTWxFLGdCQUFNLElBQU4sQ0FBVyxFQUFFLGlCQUFGLENBQW9CLElBQXBCLEVBQTBCLEtBQUssS0FBTCxDQUFXLFNBQVMsR0FBVCxFQUFjLElBQXpCLENBQTFCLEVBQTBELGdCQUFnQixTQUFTLEdBQVQsRUFBYyxLQUFLLEtBQUwsQ0FBeEYsQ0FBWDs7O0FBTmtFLGVBU2xFLENBQU0sSUFBTixDQUFXLFNBQVMsR0FBVCxDQUFYLENBVGtFOztBQVdsRSxpQkFBTyxLQUFQLENBWGtFO1NBQXJDLENBbENhO09BQXpCOztBQWlEckIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2hlbHBlcnMvYnVpbGQtY29uZGl0aW9uYWwtYXNzaWdubWVudC1vcGVyYXRvci10cmFuc2Zvcm1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZXhwbG9kZUFzc2lnbmFibGVFeHByZXNzaW9uID0gcmVxdWlyZShcIi4vZXhwbG9kZS1hc3NpZ25hYmxlLWV4cHJlc3Npb25cIik7XG5cbnZhciBfZXhwbG9kZUFzc2lnbmFibGVFeHByZXNzaW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4cGxvZGVBc3NpZ25hYmxlRXhwcmVzc2lvbik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChleHBvcnRzLCBvcHRzKSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICB2YXIgYnVpbGRBc3NpZ25tZW50ID0gZnVuY3Rpb24gYnVpbGRBc3NpZ25tZW50KGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIGxlZnQsIHJpZ2h0KTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIGV4cG9ydHMuRXhwcmVzc2lvblN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgLy8gaGl0IHRoZSBgQXNzaWdubWVudEV4cHJlc3Npb25gIG9uZSBiZWxvd1xuICAgIGlmICh0aGlzLmlzQ29tcGxldGlvblJlY29yZCgpKSByZXR1cm47XG5cbiAgICB2YXIgZXhwciA9IG5vZGUuZXhwcmVzc2lvbjtcbiAgICBpZiAoIW9wdHMuaXMoZXhwciwgZmlsZSkpIHJldHVybjtcblxuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgdmFyIGV4cGxvZGVkID0gX2V4cGxvZGVBc3NpZ25hYmxlRXhwcmVzc2lvbjJbXCJkZWZhdWx0XCJdKGV4cHIubGVmdCwgbm9kZXMsIGZpbGUsIHNjb3BlKTtcblxuICAgIG5vZGVzLnB1c2godC5pZlN0YXRlbWVudChvcHRzLmJ1aWxkKGV4cGxvZGVkLnVpZCwgZmlsZSksIHQuZXhwcmVzc2lvblN0YXRlbWVudChidWlsZEFzc2lnbm1lbnQoZXhwbG9kZWQucmVmLCBleHByLnJpZ2h0KSkpKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIGV4cG9ydHMuQXNzaWdubWVudEV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIGlmICghb3B0cy5pcyhub2RlLCBmaWxlKSkgcmV0dXJuO1xuXG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIGV4cGxvZGVkID0gX2V4cGxvZGVBc3NpZ25hYmxlRXhwcmVzc2lvbjJbXCJkZWZhdWx0XCJdKG5vZGUubGVmdCwgbm9kZXMsIGZpbGUsIHNjb3BlKTtcblxuICAgIG5vZGVzLnB1c2godC5sb2dpY2FsRXhwcmVzc2lvbihcIiYmXCIsIG9wdHMuYnVpbGQoZXhwbG9kZWQudWlkLCBmaWxlKSwgYnVpbGRBc3NpZ25tZW50KGV4cGxvZGVkLnJlZiwgbm9kZS5yaWdodCkpKTtcblxuICAgIC8vIHRvZG86IGR1cGxpY2F0ZSBleHByZXNzaW9uIG5vZGVcbiAgICBub2Rlcy5wdXNoKGV4cGxvZGVkLnJlZik7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
