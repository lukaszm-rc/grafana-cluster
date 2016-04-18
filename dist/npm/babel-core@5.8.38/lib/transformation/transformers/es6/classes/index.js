/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _loose, _loose2, _vanilla, _vanilla2, _types, t, _helpersNameMethod, visitor;

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
      exports.__esModule = true;_loose = require("./loose");
      _loose2 = _interopRequireDefault(_loose);
      _vanilla = require("./vanilla");
      _vanilla2 = _interopRequireDefault(_vanilla);
      _types = require("../../../../types");
      t = _interopRequireWildcard(_types);
      _helpersNameMethod = require("../../../helpers/name-method");
      visitor = {

        /**
         * [Please add a description.]
         */

        ClassDeclaration: function ClassDeclaration(node) {
          return t.variableDeclaration("let", [t.variableDeclarator(node.id, t.toExpression(node))]);
        },

        /**
         * [Please add a description.]
         */

        ClassExpression: function ClassExpression(node, parent, scope, file) {
          var inferred = _helpersNameMethod.bare(node, parent, scope);
          if (inferred) return inferred;

          if (file.isLoose("es6.classes")) {
            return new _loose2["default"](this, file).run();
          } else {
            return new _vanilla2["default"](this, file).run();
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9jbGFzc2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksU0FBUyxRQUFRLFNBQVI7QUFFVCxnQkFBVSx1QkFBdUIsTUFBdkI7QUFFVixpQkFBVyxRQUFRLFdBQVI7QUFFWCxrQkFBWSx1QkFBdUIsUUFBdkI7QUFFWixlQUFTLFFBQVEsbUJBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQUVKLDJCQUFxQixRQUFRLDhCQUFSO0FBTXJCLGdCQUFVOzs7Ozs7QUFNWiwwQkFBa0IsU0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQztBQUNoRCxpQkFBTyxFQUFFLG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLENBQUMsRUFBRSxrQkFBRixDQUFxQixLQUFLLEVBQUwsRUFBUyxFQUFFLFlBQUYsQ0FBZSxJQUFmLENBQTlCLENBQUQsQ0FBN0IsQ0FBUCxDQURnRDtTQUFoQzs7Ozs7O0FBUWxCLHlCQUFpQixTQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0IsTUFBL0IsRUFBdUMsS0FBdkMsRUFBOEMsSUFBOUMsRUFBb0Q7QUFDbkUsY0FBSSxXQUFXLG1CQUFtQixJQUFuQixDQUF3QixJQUF4QixFQUE4QixNQUE5QixFQUFzQyxLQUF0QyxDQUFYLENBRCtEO0FBRW5FLGNBQUksUUFBSixFQUFjLE9BQU8sUUFBUCxDQUFkOztBQUVBLGNBQUksS0FBSyxPQUFMLENBQWEsYUFBYixDQUFKLEVBQWlDO0FBQy9CLG1CQUFPLElBQUksUUFBUSxTQUFSLENBQUosQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsR0FBbkMsRUFBUCxDQUQrQjtXQUFqQyxNQUVPO0FBQ0wsbUJBQU8sSUFBSSxVQUFVLFNBQVYsQ0FBSixDQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxHQUFyQyxFQUFQLENBREs7V0FGUDtTQUplOzs7QUFXbkIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9jbGFzc2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9sb29zZSA9IHJlcXVpcmUoXCIuL2xvb3NlXCIpO1xuXG52YXIgX2xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3NlKTtcblxudmFyIF92YW5pbGxhID0gcmVxdWlyZShcIi4vdmFuaWxsYVwiKTtcblxudmFyIF92YW5pbGxhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbmlsbGEpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBfaGVscGVyc05hbWVNZXRob2QgPSByZXF1aXJlKFwiLi4vLi4vLi4vaGVscGVycy9uYW1lLW1ldGhvZFwiKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENsYXNzRGVjbGFyYXRpb246IGZ1bmN0aW9uIENsYXNzRGVjbGFyYXRpb24obm9kZSkge1xuICAgIHJldHVybiB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJsZXRcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKG5vZGUuaWQsIHQudG9FeHByZXNzaW9uKG5vZGUpKV0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2xhc3NFeHByZXNzaW9uOiBmdW5jdGlvbiBDbGFzc0V4cHJlc3Npb24obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIHZhciBpbmZlcnJlZCA9IF9oZWxwZXJzTmFtZU1ldGhvZC5iYXJlKG5vZGUsIHBhcmVudCwgc2NvcGUpO1xuICAgIGlmIChpbmZlcnJlZCkgcmV0dXJuIGluZmVycmVkO1xuXG4gICAgaWYgKGZpbGUuaXNMb29zZShcImVzNi5jbGFzc2VzXCIpKSB7XG4gICAgICByZXR1cm4gbmV3IF9sb29zZTJbXCJkZWZhdWx0XCJdKHRoaXMsIGZpbGUpLnJ1bigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IF92YW5pbGxhMltcImRlZmF1bHRcIl0odGhpcywgZmlsZSkucnVuKCk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
