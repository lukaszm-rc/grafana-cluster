/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _messages, messages, _types, t, visitor;

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

  // check if the input Literal `source` is an alternate casing of "react"
  function check(source, file) {
    if (t.isLiteral(source)) {
      var name = source.value;
      var lower = name.toLowerCase();

      if (lower === "react" && name !== lower) {
        throw file.errorWithNode(source, messages.get("didYouMean", "react"));
      }
    }
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_messages = require("../../../messages");
      messages = _interopRequireWildcard(_messages);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        CallExpression: function CallExpression(node, parent, scope, file) {
          if (this.get("callee").isIdentifier({ name: "require" }) && node.arguments.length === 1) {
            check(node.arguments[0], file);
          }
        },

        /**
         * [Please add a description.]
         */

        ModuleDeclaration: function ModuleDeclaration(node, parent, scope, file) {
          check(node.source, file);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL3ZhbGlkYXRpb24vcmVhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7QUFXQSxXQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCO0FBQzNCLFFBQUksRUFBRSxTQUFGLENBQVksTUFBWixDQUFKLEVBQXlCO0FBQ3ZCLFVBQUksT0FBTyxPQUFPLEtBQVAsQ0FEWTtBQUV2QixVQUFJLFFBQVEsS0FBSyxXQUFMLEVBQVIsQ0FGbUI7O0FBSXZCLFVBQUksVUFBVSxPQUFWLElBQXFCLFNBQVMsS0FBVCxFQUFnQjtBQUN2QyxjQUFNLEtBQUssYUFBTCxDQUFtQixNQUFuQixFQUEyQixTQUFTLEdBQVQsQ0FBYSxZQUFiLEVBQTJCLE9BQTNCLENBQTNCLENBQU4sQ0FEdUM7T0FBekM7S0FKRjtHQURGOzs7Ozs7Ozs7QUFkQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxZQUFZLFFBQVEsbUJBQVI7QUFFWixpQkFBVyx3QkFBd0IsU0FBeEI7QUFFWCxlQUFTLFFBQVEsZ0JBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQWtCSixnQkFBVTs7Ozs7O0FBTVosd0JBQWdCLFNBQVMsY0FBVCxDQUF3QixJQUF4QixFQUE4QixNQUE5QixFQUFzQyxLQUF0QyxFQUE2QyxJQUE3QyxFQUFtRDtBQUNqRSxjQUFJLEtBQUssR0FBTCxDQUFTLFFBQVQsRUFBbUIsWUFBbkIsQ0FBZ0MsRUFBRSxNQUFNLFNBQU4sRUFBbEMsS0FBd0QsS0FBSyxTQUFMLENBQWUsTUFBZixLQUEwQixDQUExQixFQUE2QjtBQUN2RixrQkFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sRUFBeUIsSUFBekIsRUFEdUY7V0FBekY7U0FEYzs7Ozs7O0FBVWhCLDJCQUFtQixTQUFTLGlCQUFULENBQTJCLElBQTNCLEVBQWlDLE1BQWpDLEVBQXlDLEtBQXpDLEVBQWdELElBQWhELEVBQXNEO0FBQ3ZFLGdCQUFNLEtBQUssTUFBTCxFQUFhLElBQW5CLEVBRHVFO1NBQXREOzs7QUFJckIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL3ZhbGlkYXRpb24vcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLy8gY2hlY2sgaWYgdGhlIGlucHV0IExpdGVyYWwgYHNvdXJjZWAgaXMgYW4gYWx0ZXJuYXRlIGNhc2luZyBvZiBcInJlYWN0XCJcbmZ1bmN0aW9uIGNoZWNrKHNvdXJjZSwgZmlsZSkge1xuICBpZiAodC5pc0xpdGVyYWwoc291cmNlKSkge1xuICAgIHZhciBuYW1lID0gc291cmNlLnZhbHVlO1xuICAgIHZhciBsb3dlciA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChsb3dlciA9PT0gXCJyZWFjdFwiICYmIG5hbWUgIT09IGxvd2VyKSB7XG4gICAgICB0aHJvdyBmaWxlLmVycm9yV2l0aE5vZGUoc291cmNlLCBtZXNzYWdlcy5nZXQoXCJkaWRZb3VNZWFuXCIsIFwicmVhY3RcIikpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2FsbEV4cHJlc3Npb246IGZ1bmN0aW9uIENhbGxFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBpZiAodGhpcy5nZXQoXCJjYWxsZWVcIikuaXNJZGVudGlmaWVyKHsgbmFtZTogXCJyZXF1aXJlXCIgfSkgJiYgbm9kZS5hcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjaGVjayhub2RlLmFyZ3VtZW50c1swXSwgZmlsZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgTW9kdWxlRGVjbGFyYXRpb246IGZ1bmN0aW9uIE1vZHVsZURlY2xhcmF0aW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBjaGVjayhub2RlLnNvdXJjZSwgZmlsZSk7XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
