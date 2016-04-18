/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersRemapAsyncToGenerator, _helpersRemapAsyncToGenerator2, _bluebirdCoroutines, metadata, visitor;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_helpersRemapAsyncToGenerator = require("../../helpers/remap-async-to-generator");
      _helpersRemapAsyncToGenerator2 = _interopRequireDefault(_helpersRemapAsyncToGenerator);
      _bluebirdCoroutines = require("./bluebird-coroutines");


      exports.manipulateOptions = _bluebirdCoroutines.manipulateOptions;
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

          return _helpersRemapAsyncToGenerator2["default"](this, file.addHelper("async-to-generator"));
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL2FzeW5jLXRvLWdlbmVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksZ0NBQWdDLFFBQVEsd0NBQVI7QUFFaEMsdUNBQWlDLHVCQUF1Qiw2QkFBdkI7QUFFakMsNEJBQXNCLFFBQVEsdUJBQVI7OztBQUUxQixjQUFRLGlCQUFSLEdBQTRCLG9CQUFvQixpQkFBcEI7QUFDeEIsaUJBQVc7QUFDYixrQkFBVSxJQUFWO0FBQ0Esc0JBQWMsQ0FBQyxvQkFBRCxFQUF1QixhQUF2QixDQUFkOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5COzs7OztBQUtJLGdCQUFVOzs7Ozs7QUFNWixrQkFBVSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsRUFBdUMsSUFBdkMsRUFBNkM7QUFDckQsY0FBSSxDQUFDLEtBQUssS0FBTCxJQUFjLEtBQUssU0FBTCxFQUFnQixPQUFuQzs7QUFFQSxpQkFBTywrQkFBK0IsU0FBL0IsRUFBMEMsSUFBMUMsRUFBZ0QsS0FBSyxTQUFMLENBQWUsb0JBQWYsQ0FBaEQsQ0FBUCxDQUhxRDtTQUE3Qzs7O0FBTVosY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL2FzeW5jLXRvLWdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2hlbHBlcnNSZW1hcEFzeW5jVG9HZW5lcmF0b3IgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9yZW1hcC1hc3luYy10by1nZW5lcmF0b3JcIik7XG5cbnZhciBfaGVscGVyc1JlbWFwQXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzUmVtYXBBc3luY1RvR2VuZXJhdG9yKTtcblxudmFyIF9ibHVlYmlyZENvcm91dGluZXMgPSByZXF1aXJlKFwiLi9ibHVlYmlyZC1jb3JvdXRpbmVzXCIpO1xuXG5leHBvcnRzLm1hbmlwdWxhdGVPcHRpb25zID0gX2JsdWViaXJkQ29yb3V0aW5lcy5tYW5pcHVsYXRlT3B0aW9ucztcbnZhciBtZXRhZGF0YSA9IHtcbiAgb3B0aW9uYWw6IHRydWUsXG4gIGRlcGVuZGVuY2llczogW1wiZXM3LmFzeW5jRnVuY3Rpb25zXCIsIFwiZXM2LmNsYXNzZXNcIl1cbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGdW5jdGlvbjogZnVuY3Rpb24gRnVuY3Rpb24obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIGlmICghbm9kZS5hc3luYyB8fCBub2RlLmdlbmVyYXRvcikgcmV0dXJuO1xuXG4gICAgcmV0dXJuIF9oZWxwZXJzUmVtYXBBc3luY1RvR2VuZXJhdG9yMltcImRlZmF1bHRcIl0odGhpcywgZmlsZS5hZGRIZWxwZXIoXCJhc3luYy10by1nZW5lcmF0b3JcIikpO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
