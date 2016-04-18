/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersReact, react, _types, t, metadata, visitor;

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

  /**
   * [Please add a description.]
   */

  function manipulateOptions(opts) {
    opts.blacklist.push("react");
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.manipulateOptions = manipulateOptions;_helpersReact = require("../../helpers/react");
      react = _interopRequireWildcard(_helpersReact);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        optional: true,
        group: "builtin-advanced"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = require("../../helpers/build-react-transformer")({

        /**
         * [Please add a description.]
         */

        pre: function pre(state) {
          state.callee = state.tagExpr;
        },

        /**
         * [Please add a description.]
         */

        post: function post(state) {
          if (react.isCompatTag(state.tagName)) {
            state.call = t.callExpression(t.memberExpression(t.memberExpression(t.identifier("React"), t.identifier("DOM")), state.tagExpr, t.isLiteral(state.tagExpr)), state.args);
          }
        }
      });

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL3JlYWN0LWNvbXBhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQU1BLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQWNBLFdBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUM7QUFDL0IsU0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixPQUFwQixFQUQrQjtHQUFqQzs7Ozs7QUFsQkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxpQkFBUixHQUE0QixpQkFBNUIsQ0FLSSxnQkFBZ0IsUUFBUSxxQkFBUjtBQUVoQixjQUFRLHdCQUF3QixhQUF4QjtBQUVSLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBVUosaUJBQVc7QUFDYixrQkFBVSxJQUFWO0FBQ0EsZUFBTyxrQkFBUDs7OztBQUdGLGNBQVEsUUFBUixHQUFtQixRQUFuQjs7Ozs7QUFLSSxnQkFBVSxRQUFRLHVDQUFSLEVBQWlEOzs7Ozs7QUFNN0QsYUFBSyxTQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CO0FBQ3ZCLGdCQUFNLE1BQU4sR0FBZSxNQUFNLE9BQU4sQ0FEUTtTQUFwQjs7Ozs7O0FBUUwsY0FBTSxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3pCLGNBQUksTUFBTSxXQUFOLENBQWtCLE1BQU0sT0FBTixDQUF0QixFQUFzQztBQUNwQyxrQkFBTSxJQUFOLEdBQWEsRUFBRSxjQUFGLENBQWlCLEVBQUUsZ0JBQUYsQ0FBbUIsRUFBRSxnQkFBRixDQUFtQixFQUFFLFVBQUYsQ0FBYSxPQUFiLENBQW5CLEVBQTBDLEVBQUUsVUFBRixDQUFhLEtBQWIsQ0FBMUMsQ0FBbkIsRUFBbUYsTUFBTSxPQUFOLEVBQWUsRUFBRSxTQUFGLENBQVksTUFBTSxPQUFOLENBQTlHLENBQWpCLEVBQWdKLE1BQU0sSUFBTixDQUE3SixDQURvQztXQUF0QztTQURJO09BZE07O0FBb0JkLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9vdGhlci9yZWFjdC1jb21wYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLm1hbmlwdWxhdGVPcHRpb25zID0gbWFuaXB1bGF0ZU9wdGlvbnM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfaGVscGVyc1JlYWN0ID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvcmVhY3RcIik7XG5cbnZhciByZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzUmVhY3QpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gbWFuaXB1bGF0ZU9wdGlvbnMob3B0cykge1xuICBvcHRzLmJsYWNrbGlzdC5wdXNoKFwicmVhY3RcIik7XG59XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgb3B0aW9uYWw6IHRydWUsXG4gIGdyb3VwOiBcImJ1aWx0aW4tYWR2YW5jZWRcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXJzL2J1aWxkLXJlYWN0LXRyYW5zZm9ybWVyXCIpKHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIHByZTogZnVuY3Rpb24gcHJlKHN0YXRlKSB7XG4gICAgc3RhdGUuY2FsbGVlID0gc3RhdGUudGFnRXhwcjtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIHBvc3Q6IGZ1bmN0aW9uIHBvc3Qoc3RhdGUpIHtcbiAgICBpZiAocmVhY3QuaXNDb21wYXRUYWcoc3RhdGUudGFnTmFtZSkpIHtcbiAgICAgIHN0YXRlLmNhbGwgPSB0LmNhbGxFeHByZXNzaW9uKHQubWVtYmVyRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24odC5pZGVudGlmaWVyKFwiUmVhY3RcIiksIHQuaWRlbnRpZmllcihcIkRPTVwiKSksIHN0YXRlLnRhZ0V4cHIsIHQuaXNMaXRlcmFsKHN0YXRlLnRhZ0V4cHIpKSwgc3RhdGUuYXJncyk7XG4gICAgfVxuICB9XG59KTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
