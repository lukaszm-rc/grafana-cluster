/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        optional: true
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        UnaryExpression: function UnaryExpression(node, parent, scope, file) {
          if (node._ignoreSpecSymbols) return;

          if (this.parentPath.isBinaryExpression() && t.EQUALITY_BINARY_OPERATORS.indexOf(parent.operator) >= 0) {
            // optimise `typeof foo === "string"` since we can determine that they'll never need to handle symbols
            var opposite = this.getOpposite();
            if (opposite.isLiteral() && opposite.node.value !== "symbol" && opposite.node.value !== "object") return;
          }

          if (node.operator === "typeof") {
            var call = t.callExpression(file.addHelper("typeof"), [node.argument]);
            if (this.get("argument").isIdentifier()) {
              var undefLiteral = t.literal("undefined");
              var unary = t.unaryExpression("typeof", node.argument);
              unary._ignoreSpecSymbols = true;
              return t.conditionalExpression(t.binaryExpression("===", unary, undefLiteral), undefLiteral, call);
            } else {
              return call;
            }
          }
        },

        /**
         * [Please add a description.]
         */

        BinaryExpression: function BinaryExpression(node, parent, scope, file) {
          if (node.operator === "instanceof") {
            return t.callExpression(file.addHelper("instanceof"), [node.left, node.right]);
          }
        },

        /**
         * [Please add a description.]
         */

        "VariableDeclaration|FunctionDeclaration": function VariableDeclarationFunctionDeclaration(node) {
          if (node._generated) this.skip();
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcGVjLnN5bWJvbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosaUJBQVc7QUFDYixrQkFBVSxJQUFWOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5COzs7OztBQUtJLGdCQUFVOzs7Ozs7QUFNWix5QkFBaUIsU0FBUyxlQUFULENBQXlCLElBQXpCLEVBQStCLE1BQS9CLEVBQXVDLEtBQXZDLEVBQThDLElBQTlDLEVBQW9EO0FBQ25FLGNBQUksS0FBSyxrQkFBTCxFQUF5QixPQUE3Qjs7QUFFQSxjQUFJLEtBQUssVUFBTCxDQUFnQixrQkFBaEIsTUFBd0MsRUFBRSx5QkFBRixDQUE0QixPQUE1QixDQUFvQyxPQUFPLFFBQVAsQ0FBcEMsSUFBd0QsQ0FBeEQsRUFBMkQ7O0FBRXJHLGdCQUFJLFdBQVcsS0FBSyxXQUFMLEVBQVgsQ0FGaUc7QUFHckcsZ0JBQUksU0FBUyxTQUFULE1BQXdCLFNBQVMsSUFBVCxDQUFjLEtBQWQsS0FBd0IsUUFBeEIsSUFBb0MsU0FBUyxJQUFULENBQWMsS0FBZCxLQUF3QixRQUF4QixFQUFrQyxPQUFsRztXQUhGOztBQU1BLGNBQUksS0FBSyxRQUFMLEtBQWtCLFFBQWxCLEVBQTRCO0FBQzlCLGdCQUFJLE9BQU8sRUFBRSxjQUFGLENBQWlCLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBakIsRUFBMkMsQ0FBQyxLQUFLLFFBQUwsQ0FBNUMsQ0FBUCxDQUQwQjtBQUU5QixnQkFBSSxLQUFLLEdBQUwsQ0FBUyxVQUFULEVBQXFCLFlBQXJCLEVBQUosRUFBeUM7QUFDdkMsa0JBQUksZUFBZSxFQUFFLE9BQUYsQ0FBVSxXQUFWLENBQWYsQ0FEbUM7QUFFdkMsa0JBQUksUUFBUSxFQUFFLGVBQUYsQ0FBa0IsUUFBbEIsRUFBNEIsS0FBSyxRQUFMLENBQXBDLENBRm1DO0FBR3ZDLG9CQUFNLGtCQUFOLEdBQTJCLElBQTNCLENBSHVDO0FBSXZDLHFCQUFPLEVBQUUscUJBQUYsQ0FBd0IsRUFBRSxnQkFBRixDQUFtQixLQUFuQixFQUEwQixLQUExQixFQUFpQyxZQUFqQyxDQUF4QixFQUF3RSxZQUF4RSxFQUFzRixJQUF0RixDQUFQLENBSnVDO2FBQXpDLE1BS087QUFDTCxxQkFBTyxJQUFQLENBREs7YUFMUDtXQUZGO1NBVGU7Ozs7OztBQTBCakIsMEJBQWtCLFNBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsRUFBd0MsS0FBeEMsRUFBK0MsSUFBL0MsRUFBcUQ7QUFDckUsY0FBSSxLQUFLLFFBQUwsS0FBa0IsWUFBbEIsRUFBZ0M7QUFDbEMsbUJBQU8sRUFBRSxjQUFGLENBQWlCLEtBQUssU0FBTCxDQUFlLFlBQWYsQ0FBakIsRUFBK0MsQ0FBQyxLQUFLLElBQUwsRUFBVyxLQUFLLEtBQUwsQ0FBM0QsQ0FBUCxDQURrQztXQUFwQztTQURnQjs7Ozs7O0FBVWxCLG1EQUEyQyxTQUFTLHNDQUFULENBQWdELElBQWhELEVBQXNEO0FBQy9GLGNBQUksS0FBSyxVQUFMLEVBQWlCLEtBQUssSUFBTCxHQUFyQjtTQUR5Qzs7O0FBSTdDLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczYvc3BlYy5zeW1ib2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgb3B0aW9uYWw6IHRydWVcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBVbmFyeUV4cHJlc3Npb246IGZ1bmN0aW9uIFVuYXJ5RXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgaWYgKG5vZGUuX2lnbm9yZVNwZWNTeW1ib2xzKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5wYXJlbnRQYXRoLmlzQmluYXJ5RXhwcmVzc2lvbigpICYmIHQuRVFVQUxJVFlfQklOQVJZX09QRVJBVE9SUy5pbmRleE9mKHBhcmVudC5vcGVyYXRvcikgPj0gMCkge1xuICAgICAgLy8gb3B0aW1pc2UgYHR5cGVvZiBmb28gPT09IFwic3RyaW5nXCJgIHNpbmNlIHdlIGNhbiBkZXRlcm1pbmUgdGhhdCB0aGV5J2xsIG5ldmVyIG5lZWQgdG8gaGFuZGxlIHN5bWJvbHNcbiAgICAgIHZhciBvcHBvc2l0ZSA9IHRoaXMuZ2V0T3Bwb3NpdGUoKTtcbiAgICAgIGlmIChvcHBvc2l0ZS5pc0xpdGVyYWwoKSAmJiBvcHBvc2l0ZS5ub2RlLnZhbHVlICE9PSBcInN5bWJvbFwiICYmIG9wcG9zaXRlLm5vZGUudmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5vcGVyYXRvciA9PT0gXCJ0eXBlb2ZcIikge1xuICAgICAgdmFyIGNhbGwgPSB0LmNhbGxFeHByZXNzaW9uKGZpbGUuYWRkSGVscGVyKFwidHlwZW9mXCIpLCBbbm9kZS5hcmd1bWVudF0pO1xuICAgICAgaWYgKHRoaXMuZ2V0KFwiYXJndW1lbnRcIikuaXNJZGVudGlmaWVyKCkpIHtcbiAgICAgICAgdmFyIHVuZGVmTGl0ZXJhbCA9IHQubGl0ZXJhbChcInVuZGVmaW5lZFwiKTtcbiAgICAgICAgdmFyIHVuYXJ5ID0gdC51bmFyeUV4cHJlc3Npb24oXCJ0eXBlb2ZcIiwgbm9kZS5hcmd1bWVudCk7XG4gICAgICAgIHVuYXJ5Ll9pZ25vcmVTcGVjU3ltYm9scyA9IHRydWU7XG4gICAgICAgIHJldHVybiB0LmNvbmRpdGlvbmFsRXhwcmVzc2lvbih0LmJpbmFyeUV4cHJlc3Npb24oXCI9PT1cIiwgdW5hcnksIHVuZGVmTGl0ZXJhbCksIHVuZGVmTGl0ZXJhbCwgY2FsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2FsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBCaW5hcnlFeHByZXNzaW9uOiBmdW5jdGlvbiBCaW5hcnlFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBpZiAobm9kZS5vcGVyYXRvciA9PT0gXCJpbnN0YW5jZW9mXCIpIHtcbiAgICAgIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKGZpbGUuYWRkSGVscGVyKFwiaW5zdGFuY2VvZlwiKSwgW25vZGUubGVmdCwgbm9kZS5yaWdodF0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFwiVmFyaWFibGVEZWNsYXJhdGlvbnxGdW5jdGlvbkRlY2xhcmF0aW9uXCI6IGZ1bmN0aW9uIFZhcmlhYmxlRGVjbGFyYXRpb25GdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICBpZiAobm9kZS5fZ2VuZXJhdGVkKSB0aGlzLnNraXAoKTtcbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
