/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _messages, messages, visitor;

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
      exports.__esModule = true;_messages = require("../../../messages");
      messages = _interopRequireWildcard(_messages);
      visitor = {

        /**
         * Look for any constants (or modules) in scope.
         * If they have any `constantViolations` throw an error.
         */

        Scope: function Scope(node, parent, scope) {
          for (var name in scope.bindings) {
            var binding = scope.bindings[name];

            // not a constant
            if (binding.kind !== "const" && binding.kind !== "module") continue;

            var _arr = binding.constantViolations;
            for (var _i = 0; _i < _arr.length; _i++) {
              var violation = _arr[_i];
              throw violation.errorWithNode(messages.get("readOnly", name));
            }
          }
        },

        /**
         * Look for constants.
         * Turn them into `let` variables.
         */

        VariableDeclaration: function VariableDeclaration(node) {
          if (node.kind === "const") node.kind = "let";
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFlBQVksUUFBUSxtQkFBUjtBQUVaLGlCQUFXLHdCQUF3QixTQUF4QjtBQXFCWCxnQkFBVTs7Ozs7OztBQU9aLGVBQU8sU0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQztBQUN6QyxlQUFLLElBQUksSUFBSixJQUFZLE1BQU0sUUFBTixFQUFnQjtBQUMvQixnQkFBSSxVQUFVLE1BQU0sUUFBTixDQUFlLElBQWYsQ0FBVjs7O0FBRDJCLGdCQUkzQixRQUFRLElBQVIsS0FBaUIsT0FBakIsSUFBNEIsUUFBUSxJQUFSLEtBQWlCLFFBQWpCLEVBQTJCLFNBQTNEOztBQUVBLGdCQUFJLE9BQU8sUUFBUSxrQkFBUixDQU5vQjtBQU8vQixpQkFBSyxJQUFJLEtBQUssQ0FBTCxFQUFRLEtBQUssS0FBSyxNQUFMLEVBQWEsSUFBbkMsRUFBeUM7QUFDdkMsa0JBQUksWUFBWSxLQUFLLEVBQUwsQ0FBWixDQURtQztBQUV2QyxvQkFBTSxVQUFVLGFBQVYsQ0FBd0IsU0FBUyxHQUFULENBQWEsVUFBYixFQUF5QixJQUF6QixDQUF4QixDQUFOLENBRnVDO2FBQXpDO1dBUEY7U0FESzs7Ozs7OztBQW9CUCw2QkFBcUIsU0FBUyxtQkFBVCxDQUE2QixJQUE3QixFQUFtQztBQUN0RCxjQUFJLEtBQUssSUFBTCxLQUFjLE9BQWQsRUFBdUIsS0FBSyxJQUFMLEdBQVksS0FBWixDQUEzQjtTQURtQjs7O0FBSXZCLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczYvY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX21lc3NhZ2VzID0gcmVxdWlyZShcIi4uLy4uLy4uL21lc3NhZ2VzXCIpO1xuXG52YXIgbWVzc2FnZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWVzc2FnZXMpO1xuXG4vKipcbiAqIFR1cm4gY29uc3RhbnRzIGludG8gdmFyaWFibGVzLlxuICogRW5zdXJlIHRoZXJlIGFyZSBubyBjb25zdGFudCB2aW9sYXRpb25zIGluIGFueSBzY29wZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICoqSW4qKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IE1VTFRJUExJRVIgPSA1O1xuICogYGBgXG4gKlxuICogKipPdXQqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBNVUxUSVBMSUVSID0gNTtcbiAqIGBgYFxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBMb29rIGZvciBhbnkgY29uc3RhbnRzIChvciBtb2R1bGVzKSBpbiBzY29wZS5cbiAgICogSWYgdGhleSBoYXZlIGFueSBgY29uc3RhbnRWaW9sYXRpb25zYCB0aHJvdyBhbiBlcnJvci5cbiAgICovXG5cbiAgU2NvcGU6IGZ1bmN0aW9uIFNjb3BlKG5vZGUsIHBhcmVudCwgc2NvcGUpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHNjb3BlLmJpbmRpbmdzKSB7XG4gICAgICB2YXIgYmluZGluZyA9IHNjb3BlLmJpbmRpbmdzW25hbWVdO1xuXG4gICAgICAvLyBub3QgYSBjb25zdGFudFxuICAgICAgaWYgKGJpbmRpbmcua2luZCAhPT0gXCJjb25zdFwiICYmIGJpbmRpbmcua2luZCAhPT0gXCJtb2R1bGVcIikgY29udGludWU7XG5cbiAgICAgIHZhciBfYXJyID0gYmluZGluZy5jb25zdGFudFZpb2xhdGlvbnM7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHZpb2xhdGlvbiA9IF9hcnJbX2ldO1xuICAgICAgICB0aHJvdyB2aW9sYXRpb24uZXJyb3JXaXRoTm9kZShtZXNzYWdlcy5nZXQoXCJyZWFkT25seVwiLCBuYW1lKSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMb29rIGZvciBjb25zdGFudHMuXG4gICAqIFR1cm4gdGhlbSBpbnRvIGBsZXRgIHZhcmlhYmxlcy5cbiAgICovXG5cbiAgVmFyaWFibGVEZWNsYXJhdGlvbjogZnVuY3Rpb24gVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSB7XG4gICAgaWYgKG5vZGUua2luZCA9PT0gXCJjb25zdFwiKSBub2RlLmtpbmQgPSBcImxldFwiO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
