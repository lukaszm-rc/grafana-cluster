/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, visitor;

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
      exports.__esModule = true;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        enter: function enter(node, parent, scope, state) {
          if (this.isThisExpression() || this.isReferencedIdentifier({ name: "arguments" })) {
            state.found = true;
            this.stop();
          }
        },

        /**
         * [Please add a description.]
         */

        Function: function Function() {
          this.skip();
        }
      };


      /**
       * [Please add a description.]
       */

      exports["default"] = function (node, scope) {
        var container = t.functionExpression(null, [], node.body, node.generator, node.async);

        var callee = container;
        var args = [];

        var state = { found: false };
        scope.traverse(node, visitor, state);
        if (state.found) {
          callee = t.memberExpression(container, t.identifier("apply"));
          args = [t.thisExpression(), t.identifier("arguments")];
        }

        var call = t.callExpression(callee, args);
        if (node.generator) call = t.yieldExpression(call, true);

        return t.returnStatement(call);
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9jYWxsLWRlbGVnYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxTQUFTLFFBQVEsYUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBTUosZ0JBQVU7Ozs7OztBQU1aLGVBQU8sU0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQztBQUNoRCxjQUFJLEtBQUssZ0JBQUwsTUFBMkIsS0FBSyxzQkFBTCxDQUE0QixFQUFFLE1BQU0sV0FBTixFQUE5QixDQUEzQixFQUErRTtBQUNqRixrQkFBTSxLQUFOLEdBQWMsSUFBZCxDQURpRjtBQUVqRixpQkFBSyxJQUFMLEdBRmlGO1dBQW5GO1NBREs7Ozs7OztBQVdQLGtCQUFVLFNBQVMsUUFBVCxHQUFvQjtBQUM1QixlQUFLLElBQUwsR0FENEI7U0FBcEI7Ozs7Ozs7O0FBU1osY0FBUSxTQUFSLElBQXFCLFVBQVUsSUFBVixFQUFnQixLQUFoQixFQUF1QjtBQUMxQyxZQUFJLFlBQVksRUFBRSxrQkFBRixDQUFxQixJQUFyQixFQUEyQixFQUEzQixFQUErQixLQUFLLElBQUwsRUFBVyxLQUFLLFNBQUwsRUFBZ0IsS0FBSyxLQUFMLENBQXRFLENBRHNDOztBQUcxQyxZQUFJLFNBQVMsU0FBVCxDQUhzQztBQUkxQyxZQUFJLE9BQU8sRUFBUCxDQUpzQzs7QUFNMUMsWUFBSSxRQUFRLEVBQUUsT0FBTyxLQUFQLEVBQVYsQ0FOc0M7QUFPMUMsY0FBTSxRQUFOLENBQWUsSUFBZixFQUFxQixPQUFyQixFQUE4QixLQUE5QixFQVAwQztBQVExQyxZQUFJLE1BQU0sS0FBTixFQUFhO0FBQ2YsbUJBQVMsRUFBRSxnQkFBRixDQUFtQixTQUFuQixFQUE4QixFQUFFLFVBQUYsQ0FBYSxPQUFiLENBQTlCLENBQVQsQ0FEZTtBQUVmLGlCQUFPLENBQUMsRUFBRSxjQUFGLEVBQUQsRUFBcUIsRUFBRSxVQUFGLENBQWEsV0FBYixDQUFyQixDQUFQLENBRmU7U0FBakI7O0FBS0EsWUFBSSxPQUFPLEVBQUUsY0FBRixDQUFpQixNQUFqQixFQUF5QixJQUF6QixDQUFQLENBYnNDO0FBYzFDLFlBQUksS0FBSyxTQUFMLEVBQWdCLE9BQU8sRUFBRSxlQUFGLENBQWtCLElBQWxCLEVBQXdCLElBQXhCLENBQVAsQ0FBcEI7O0FBRUEsZUFBTyxFQUFFLGVBQUYsQ0FBa0IsSUFBbEIsQ0FBUCxDQWhCMEM7T0FBdkI7O0FBbUJyQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9jYWxsLWRlbGVnYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBpZiAodGhpcy5pc1RoaXNFeHByZXNzaW9uKCkgfHwgdGhpcy5pc1JlZmVyZW5jZWRJZGVudGlmaWVyKHsgbmFtZTogXCJhcmd1bWVudHNcIiB9KSkge1xuICAgICAgc3RhdGUuZm91bmQgPSB0cnVlO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRnVuY3Rpb246IGZ1bmN0aW9uIEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2tpcCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG5vZGUsIHNjb3BlKSB7XG4gIHZhciBjb250YWluZXIgPSB0LmZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbXSwgbm9kZS5ib2R5LCBub2RlLmdlbmVyYXRvciwgbm9kZS5hc3luYyk7XG5cbiAgdmFyIGNhbGxlZSA9IGNvbnRhaW5lcjtcbiAgdmFyIGFyZ3MgPSBbXTtcblxuICB2YXIgc3RhdGUgPSB7IGZvdW5kOiBmYWxzZSB9O1xuICBzY29wZS50cmF2ZXJzZShub2RlLCB2aXNpdG9yLCBzdGF0ZSk7XG4gIGlmIChzdGF0ZS5mb3VuZCkge1xuICAgIGNhbGxlZSA9IHQubWVtYmVyRXhwcmVzc2lvbihjb250YWluZXIsIHQuaWRlbnRpZmllcihcImFwcGx5XCIpKTtcbiAgICBhcmdzID0gW3QudGhpc0V4cHJlc3Npb24oKSwgdC5pZGVudGlmaWVyKFwiYXJndW1lbnRzXCIpXTtcbiAgfVxuXG4gIHZhciBjYWxsID0gdC5jYWxsRXhwcmVzc2lvbihjYWxsZWUsIGFyZ3MpO1xuICBpZiAobm9kZS5nZW5lcmF0b3IpIGNhbGwgPSB0LnlpZWxkRXhwcmVzc2lvbihjYWxsLCB0cnVlKTtcblxuICByZXR1cm4gdC5yZXR1cm5TdGF0ZW1lbnQoY2FsbCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
