/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersRemapAsyncToGenerator, _helpersRemapAsyncToGenerator2, _types, t, metadata, visitor;

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

  /**
   * [Please add a description.]
   */

  function manipulateOptions(opts) {
    opts.blacklist.push("regenerator");
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.manipulateOptions = manipulateOptions;_helpersRemapAsyncToGenerator = require("../../helpers/remap-async-to-generator");
      _helpersRemapAsyncToGenerator2 = _interopRequireDefault(_helpersRemapAsyncToGenerator);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        optional: true,
        dependencies: ["es7.asyncFunctions", "es6.classes"]
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function(node, parent, scope, file) {
          if (!node.async || node.generator) return;

          return _helpersRemapAsyncToGenerator2["default"](this, t.memberExpression(file.addImport("bluebird", null, "absolute"), t.identifier("coroutine")));
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL2JsdWViaXJkLWNvcm91dGluZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFNQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7O0FBY0EsV0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQztBQUMvQixTQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLGFBQXBCLEVBRCtCO0dBQWpDOzs7OztBQXRCQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7QUFDQSxjQUFRLGlCQUFSLEdBQTRCLGlCQUE1QixDQVNJLGdDQUFnQyxRQUFRLHdDQUFSO0FBRWhDLHVDQUFpQyx1QkFBdUIsNkJBQXZCO0FBRWpDLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBVUosaUJBQVc7QUFDYixrQkFBVSxJQUFWO0FBQ0Esc0JBQWMsQ0FBQyxvQkFBRCxFQUF1QixhQUF2QixDQUFkOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5COzs7OztBQUtJLGdCQUFVOzs7Ozs7QUFNWixrQkFBVSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsRUFBdUMsSUFBdkMsRUFBNkM7QUFDckQsY0FBSSxDQUFDLEtBQUssS0FBTCxJQUFjLEtBQUssU0FBTCxFQUFnQixPQUFuQzs7QUFFQSxpQkFBTywrQkFBK0IsU0FBL0IsRUFBMEMsSUFBMUMsRUFBZ0QsRUFBRSxnQkFBRixDQUFtQixLQUFLLFNBQUwsQ0FBZSxVQUFmLEVBQTJCLElBQTNCLEVBQWlDLFVBQWpDLENBQW5CLEVBQWlFLEVBQUUsVUFBRixDQUFhLFdBQWIsQ0FBakUsQ0FBaEQsQ0FBUCxDQUhxRDtTQUE3Qzs7O0FBTVosY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL2JsdWViaXJkLWNvcm91dGluZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLm1hbmlwdWxhdGVPcHRpb25zID0gbWFuaXB1bGF0ZU9wdGlvbnM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2hlbHBlcnNSZW1hcEFzeW5jVG9HZW5lcmF0b3IgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9yZW1hcC1hc3luYy10by1nZW5lcmF0b3JcIik7XG5cbnZhciBfaGVscGVyc1JlbWFwQXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzUmVtYXBBc3luY1RvR2VuZXJhdG9yKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIG1hbmlwdWxhdGVPcHRpb25zKG9wdHMpIHtcbiAgb3B0cy5ibGFja2xpc3QucHVzaChcInJlZ2VuZXJhdG9yXCIpO1xufVxuXG52YXIgbWV0YWRhdGEgPSB7XG4gIG9wdGlvbmFsOiB0cnVlLFxuICBkZXBlbmRlbmNpZXM6IFtcImVzNy5hc3luY0Z1bmN0aW9uc1wiLCBcImVzNi5jbGFzc2VzXCJdXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRnVuY3Rpb246IGZ1bmN0aW9uIEZ1bmN0aW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBpZiAoIW5vZGUuYXN5bmMgfHwgbm9kZS5nZW5lcmF0b3IpIHJldHVybjtcblxuICAgIHJldHVybiBfaGVscGVyc1JlbWFwQXN5bmNUb0dlbmVyYXRvcjJbXCJkZWZhdWx0XCJdKHRoaXMsIHQubWVtYmVyRXhwcmVzc2lvbihmaWxlLmFkZEltcG9ydChcImJsdWViaXJkXCIsIG51bGwsIFwiYWJzb2x1dGVcIiksIHQuaWRlbnRpZmllcihcImNvcm91dGluZVwiKSkpO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
