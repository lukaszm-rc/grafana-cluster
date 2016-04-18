/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _messages, messages, _types, t, metadata, visitor;

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
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-pre"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        ForXStatement: function ForXStatement(node, parent, scope, file) {
          var left = node.left;
          if (t.isVariableDeclaration(left)) {
            var declar = left.declarations[0];
            if (declar.init) throw file.errorWithNode(declar, messages.get("noAssignmentsInForHead"));
          }
        },

        /**
         * [Please add a description.]
         */

        Property: function Property(node, parent, scope, file) {
          if (node.kind === "set") {
            var first = node.value.params[0];
            if (t.isRestElement(first)) {
              throw file.errorWithNode(first, messages.get("settersNoRest"));
            }
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFlBQVksUUFBUSxtQkFBUjtBQUVaLGlCQUFXLHdCQUF3QixTQUF4QjtBQUVYLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosaUJBQVc7QUFDYixlQUFPLGFBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7O0FBS0ksZ0JBQVU7Ozs7OztBQU1aLHVCQUFlLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUE2QixNQUE3QixFQUFxQyxLQUFyQyxFQUE0QyxJQUE1QyxFQUFrRDtBQUMvRCxjQUFJLE9BQU8sS0FBSyxJQUFMLENBRG9EO0FBRS9ELGNBQUksRUFBRSxxQkFBRixDQUF3QixJQUF4QixDQUFKLEVBQW1DO0FBQ2pDLGdCQUFJLFNBQVMsS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVQsQ0FENkI7QUFFakMsZ0JBQUksT0FBTyxJQUFQLEVBQWEsTUFBTSxLQUFLLGFBQUwsQ0FBbUIsTUFBbkIsRUFBMkIsU0FBUyxHQUFULENBQWEsd0JBQWIsQ0FBM0IsQ0FBTixDQUFqQjtXQUZGO1NBRmE7Ozs7OztBQVlmLGtCQUFVLFNBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QixNQUF4QixFQUFnQyxLQUFoQyxFQUF1QyxJQUF2QyxFQUE2QztBQUNyRCxjQUFJLEtBQUssSUFBTCxLQUFjLEtBQWQsRUFBcUI7QUFDdkIsZ0JBQUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCLENBQVIsQ0FEbUI7QUFFdkIsZ0JBQUksRUFBRSxhQUFGLENBQWdCLEtBQWhCLENBQUosRUFBNEI7QUFDMUIsb0JBQU0sS0FBSyxhQUFMLENBQW1CLEtBQW5CLEVBQTBCLFNBQVMsR0FBVCxDQUFhLGVBQWIsQ0FBMUIsQ0FBTixDQUQwQjthQUE1QjtXQUZGO1NBRFE7OztBQVNaLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9pbnRlcm5hbC92YWxpZGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX21lc3NhZ2VzID0gcmVxdWlyZShcIi4uLy4uLy4uL21lc3NhZ2VzXCIpO1xuXG52YXIgbWVzc2FnZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWVzc2FnZXMpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgZ3JvdXA6IFwiYnVpbHRpbi1wcmVcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZvclhTdGF0ZW1lbnQ6IGZ1bmN0aW9uIEZvclhTdGF0ZW1lbnQobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIHZhciBsZWZ0ID0gbm9kZS5sZWZ0O1xuICAgIGlmICh0LmlzVmFyaWFibGVEZWNsYXJhdGlvbihsZWZ0KSkge1xuICAgICAgdmFyIGRlY2xhciA9IGxlZnQuZGVjbGFyYXRpb25zWzBdO1xuICAgICAgaWYgKGRlY2xhci5pbml0KSB0aHJvdyBmaWxlLmVycm9yV2l0aE5vZGUoZGVjbGFyLCBtZXNzYWdlcy5nZXQoXCJub0Fzc2lnbm1lbnRzSW5Gb3JIZWFkXCIpKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBQcm9wZXJ0eTogZnVuY3Rpb24gUHJvcGVydHkobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIGlmIChub2RlLmtpbmQgPT09IFwic2V0XCIpIHtcbiAgICAgIHZhciBmaXJzdCA9IG5vZGUudmFsdWUucGFyYW1zWzBdO1xuICAgICAgaWYgKHQuaXNSZXN0RWxlbWVudChmaXJzdCkpIHtcbiAgICAgICAgdGhyb3cgZmlsZS5lcnJvcldpdGhOb2RlKGZpcnN0LCBtZXNzYWdlcy5nZXQoXCJzZXR0ZXJzTm9SZXN0XCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
