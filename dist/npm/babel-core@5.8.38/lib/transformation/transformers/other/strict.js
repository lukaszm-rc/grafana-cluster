/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, THIS_BREAK_KEYS, visitor;

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

  function isUseStrict(node) {
    if (!t.isLiteral(node)) return false;

    if (node.raw && node.rawValue === node.value) {
      return node.rawValue === "use strict";
    } else {
      return node.value === "use strict";
    }
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-pre"
      };


      exports.metadata = metadata;
      THIS_BREAK_KEYS = ["FunctionExpression", "FunctionDeclaration", "ClassProperty"];
      visitor = {

        /**
         * [Please add a description.]
         */

        Program: {
          enter: function enter(program) {
            var first = program.body[0];

            var directive;
            if (t.isExpressionStatement(first) && isUseStrict(first.expression)) {
              directive = first;
            } else {
              directive = t.expressionStatement(t.literal("use strict"));
              this.unshiftContainer("body", directive);
              if (first) {
                directive.leadingComments = first.leadingComments;
                first.leadingComments = [];
              }
            }
            directive._blockHoist = Infinity;
          }
        },

        /**
         * [Please add a description.]
         */

        ThisExpression: function ThisExpression() {
          if (!this.findParent(function (path) {
            return !path.is("shadow") && THIS_BREAK_KEYS.indexOf(path.type) >= 0;
          })) {
            return t.identifier("undefined");
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL3N0cmljdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7O0FBYUEsV0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCO0FBQ3pCLFFBQUksQ0FBQyxFQUFFLFNBQUYsQ0FBWSxJQUFaLENBQUQsRUFBb0IsT0FBTyxLQUFQLENBQXhCOztBQUVBLFFBQUksS0FBSyxHQUFMLElBQVksS0FBSyxRQUFMLEtBQWtCLEtBQUssS0FBTCxFQUFZO0FBQzVDLGFBQU8sS0FBSyxRQUFMLEtBQWtCLFlBQWxCLENBRHFDO0tBQTlDLE1BRU87QUFDTCxhQUFPLEtBQUssS0FBTCxLQUFlLFlBQWYsQ0FERjtLQUZQO0dBSEY7Ozs7Ozs7OztBQWhCQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxTQUFTLFFBQVEsZ0JBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQUVKLGlCQUFXO0FBQ2IsZUFBTyxhQUFQOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0ksd0JBQWtCLENBQUMsb0JBQUQsRUFBdUIscUJBQXZCLEVBQThDLGVBQTlDO0FBZ0JsQixnQkFBVTs7Ozs7O0FBTVosaUJBQVM7QUFDUCxpQkFBTyxTQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQXdCO0FBQzdCLGdCQUFJLFFBQVEsUUFBUSxJQUFSLENBQWEsQ0FBYixDQUFSLENBRHlCOztBQUc3QixnQkFBSSxTQUFKLENBSDZCO0FBSTdCLGdCQUFJLEVBQUUscUJBQUYsQ0FBd0IsS0FBeEIsS0FBa0MsWUFBWSxNQUFNLFVBQU4sQ0FBOUMsRUFBaUU7QUFDbkUsMEJBQVksS0FBWixDQURtRTthQUFyRSxNQUVPO0FBQ0wsMEJBQVksRUFBRSxtQkFBRixDQUFzQixFQUFFLE9BQUYsQ0FBVSxZQUFWLENBQXRCLENBQVosQ0FESztBQUVMLG1CQUFLLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCLFNBQTlCLEVBRks7QUFHTCxrQkFBSSxLQUFKLEVBQVc7QUFDVCwwQkFBVSxlQUFWLEdBQTRCLE1BQU0sZUFBTixDQURuQjtBQUVULHNCQUFNLGVBQU4sR0FBd0IsRUFBeEIsQ0FGUztlQUFYO2FBTEY7QUFVQSxzQkFBVSxXQUFWLEdBQXdCLFFBQXhCLENBZDZCO1dBQXhCO1NBRFQ7Ozs7OztBQXVCQSx3QkFBZ0IsU0FBUyxjQUFULEdBQTBCO0FBQ3hDLGNBQUksQ0FBQyxLQUFLLFVBQUwsQ0FBZ0IsVUFBVSxJQUFWLEVBQWdCO0FBQ25DLG1CQUFPLENBQUMsS0FBSyxFQUFMLENBQVEsUUFBUixDQUFELElBQXNCLGdCQUFnQixPQUFoQixDQUF3QixLQUFLLElBQUwsQ0FBeEIsSUFBc0MsQ0FBdEMsQ0FETTtXQUFoQixDQUFqQixFQUVBO0FBQ0YsbUJBQU8sRUFBRSxVQUFGLENBQWEsV0FBYixDQUFQLENBREU7V0FGSjtTQURjOzs7QUFRbEIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL3N0cmljdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tcHJlXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbnZhciBUSElTX0JSRUFLX0tFWVMgPSBbXCJGdW5jdGlvbkV4cHJlc3Npb25cIiwgXCJGdW5jdGlvbkRlY2xhcmF0aW9uXCIsIFwiQ2xhc3NQcm9wZXJ0eVwiXTtcblxuZnVuY3Rpb24gaXNVc2VTdHJpY3Qobm9kZSkge1xuICBpZiAoIXQuaXNMaXRlcmFsKG5vZGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKG5vZGUucmF3ICYmIG5vZGUucmF3VmFsdWUgPT09IG5vZGUudmFsdWUpIHtcbiAgICByZXR1cm4gbm9kZS5yYXdWYWx1ZSA9PT0gXCJ1c2Ugc3RyaWN0XCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGUudmFsdWUgPT09IFwidXNlIHN0cmljdFwiO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQcm9ncmFtOiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKHByb2dyYW0pIHtcbiAgICAgIHZhciBmaXJzdCA9IHByb2dyYW0uYm9keVswXTtcblxuICAgICAgdmFyIGRpcmVjdGl2ZTtcbiAgICAgIGlmICh0LmlzRXhwcmVzc2lvblN0YXRlbWVudChmaXJzdCkgJiYgaXNVc2VTdHJpY3QoZmlyc3QuZXhwcmVzc2lvbikpIHtcbiAgICAgICAgZGlyZWN0aXZlID0gZmlyc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJlY3RpdmUgPSB0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5saXRlcmFsKFwidXNlIHN0cmljdFwiKSk7XG4gICAgICAgIHRoaXMudW5zaGlmdENvbnRhaW5lcihcImJvZHlcIiwgZGlyZWN0aXZlKTtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgZGlyZWN0aXZlLmxlYWRpbmdDb21tZW50cyA9IGZpcnN0LmxlYWRpbmdDb21tZW50cztcbiAgICAgICAgICBmaXJzdC5sZWFkaW5nQ29tbWVudHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlyZWN0aXZlLl9ibG9ja0hvaXN0ID0gSW5maW5pdHk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgVGhpc0V4cHJlc3Npb246IGZ1bmN0aW9uIFRoaXNFeHByZXNzaW9uKCkge1xuICAgIGlmICghdGhpcy5maW5kUGFyZW50KGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICByZXR1cm4gIXBhdGguaXMoXCJzaGFkb3dcIikgJiYgVEhJU19CUkVBS19LRVlTLmluZGV4T2YocGF0aC50eXBlKSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICByZXR1cm4gdC5pZGVudGlmaWVyKFwidW5kZWZpbmVkXCIpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
