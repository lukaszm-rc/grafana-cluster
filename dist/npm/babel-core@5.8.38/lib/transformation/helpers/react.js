/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, isReactComponent;

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

  function isCompatTag(tagName) {
    return tagName && /^[a-z]|\-/.test(tagName);
  }

  /**
   * [Please add a description.]
   */

  function cleanJSXElementLiteralChild(child, args) {
    var lines = child.value.split(/\r\n|\n|\r/);

    var lastNonEmptyLine = 0;

    for (var i = 0; i < lines.length; i++) {
      if (lines[i].match(/[^ \t]/)) {
        lastNonEmptyLine = i;
      }
    }

    var str = "";

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      var isFirstLine = i === 0;
      var isLastLine = i === lines.length - 1;
      var isLastNonEmptyLine = i === lastNonEmptyLine;

      // replace rendered whitespace tabs with spaces
      var trimmedLine = line.replace(/\t/g, " ");

      // trim whitespace touching a newline
      if (!isFirstLine) {
        trimmedLine = trimmedLine.replace(/^[ ]+/, "");
      }

      // trim whitespace touching an endline
      if (!isLastLine) {
        trimmedLine = trimmedLine.replace(/[ ]+$/, "");
      }

      if (trimmedLine) {
        if (!isLastNonEmptyLine) {
          trimmedLine += " ";
        }

        str += trimmedLine;
      }
    }

    if (str) args.push(t.literal(str));
  }

  /**
   * [Please add a description.]
   */

  function buildChildren(node) {
    var elems = [];

    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];

      if (t.isLiteral(child) && typeof child.value === "string") {
        cleanJSXElementLiteralChild(child, elems);
        continue;
      }

      if (t.isJSXExpressionContainer(child)) child = child.expression;
      if (t.isJSXEmptyExpression(child)) continue;

      elems.push(child);
    }

    return elems;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.isCompatTag = isCompatTag;
      exports.buildChildren = buildChildren;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      isReactComponent = t.buildMatchMemberExpression("React.Component");


      exports.isReactComponent = isReactComponent;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQU9BLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQWFBLFdBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM1QixXQUFPLFdBQVcsWUFBWSxJQUFaLENBQWlCLE9BQWpCLENBQVgsQ0FEcUI7R0FBOUI7Ozs7OztBQVFBLFdBQVMsMkJBQVQsQ0FBcUMsS0FBckMsRUFBNEMsSUFBNUMsRUFBa0Q7QUFDaEQsUUFBSSxRQUFRLE1BQU0sS0FBTixDQUFZLEtBQVosQ0FBa0IsWUFBbEIsQ0FBUixDQUQ0Qzs7QUFHaEQsUUFBSSxtQkFBbUIsQ0FBbkIsQ0FINEM7O0FBS2hELFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3JDLFVBQUksTUFBTSxDQUFOLEVBQVMsS0FBVCxDQUFlLFFBQWYsQ0FBSixFQUE4QjtBQUM1QiwyQkFBbUIsQ0FBbkIsQ0FENEI7T0FBOUI7S0FERjs7QUFNQSxRQUFJLE1BQU0sRUFBTixDQVg0Qzs7QUFhaEQsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbEMsRUFBdUM7QUFDckMsVUFBSSxPQUFPLE1BQU0sQ0FBTixDQUFQLENBRGlDOztBQUdyQyxVQUFJLGNBQWMsTUFBTSxDQUFOLENBSG1CO0FBSXJDLFVBQUksYUFBYSxNQUFNLE1BQU0sTUFBTixHQUFlLENBQWYsQ0FKYztBQUtyQyxVQUFJLHFCQUFxQixNQUFNLGdCQUFOOzs7QUFMWSxVQVFqQyxjQUFjLEtBQUssT0FBTCxDQUFhLEtBQWIsRUFBb0IsR0FBcEIsQ0FBZDs7O0FBUmlDLFVBV2pDLENBQUMsV0FBRCxFQUFjO0FBQ2hCLHNCQUFjLFlBQVksT0FBWixDQUFvQixPQUFwQixFQUE2QixFQUE3QixDQUFkLENBRGdCO09BQWxCOzs7QUFYcUMsVUFnQmpDLENBQUMsVUFBRCxFQUFhO0FBQ2Ysc0JBQWMsWUFBWSxPQUFaLENBQW9CLE9BQXBCLEVBQTZCLEVBQTdCLENBQWQsQ0FEZTtPQUFqQjs7QUFJQSxVQUFJLFdBQUosRUFBaUI7QUFDZixZQUFJLENBQUMsa0JBQUQsRUFBcUI7QUFDdkIseUJBQWUsR0FBZixDQUR1QjtTQUF6Qjs7QUFJQSxlQUFPLFdBQVAsQ0FMZTtPQUFqQjtLQXBCRjs7QUE2QkEsUUFBSSxHQUFKLEVBQVMsS0FBSyxJQUFMLENBQVUsRUFBRSxPQUFGLENBQVUsR0FBVixDQUFWLEVBQVQ7R0ExQ0Y7Ozs7OztBQWlEQSxXQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkI7QUFDM0IsUUFBSSxRQUFRLEVBQVIsQ0FEdUI7O0FBRzNCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssUUFBTCxDQUFjLE1BQWQsRUFBc0IsR0FBMUMsRUFBK0M7QUFDN0MsVUFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBUixDQUR5Qzs7QUFHN0MsVUFBSSxFQUFFLFNBQUYsQ0FBWSxLQUFaLEtBQXNCLE9BQU8sTUFBTSxLQUFOLEtBQWdCLFFBQXZCLEVBQWlDO0FBQ3pELG9DQUE0QixLQUE1QixFQUFtQyxLQUFuQyxFQUR5RDtBQUV6RCxpQkFGeUQ7T0FBM0Q7O0FBS0EsVUFBSSxFQUFFLHdCQUFGLENBQTJCLEtBQTNCLENBQUosRUFBdUMsUUFBUSxNQUFNLFVBQU4sQ0FBL0M7QUFDQSxVQUFJLEVBQUUsb0JBQUYsQ0FBdUIsS0FBdkIsQ0FBSixFQUFtQyxTQUFuQzs7QUFFQSxZQUFNLElBQU4sQ0FBVyxLQUFYLEVBWDZDO0tBQS9DOztBQWNBLFdBQU8sS0FBUCxDQWpCMkI7R0FBN0I7Ozs7QUEzRUEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxXQUFSLEdBQXNCLFdBQXRCO0FBQ0EsY0FBUSxhQUFSLEdBQXdCLGFBQXhCLENBS0ksU0FBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQUVKLHlCQUFtQixFQUFFLDBCQUFGLENBQTZCLGlCQUE3Qjs7O0FBRXZCLGNBQVEsZ0JBQVIsR0FBMkIsZ0JBQTNCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaXNDb21wYXRUYWcgPSBpc0NvbXBhdFRhZztcbmV4cG9ydHMuYnVpbGRDaGlsZHJlbiA9IGJ1aWxkQ2hpbGRyZW47XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIGlzUmVhY3RDb21wb25lbnQgPSB0LmJ1aWxkTWF0Y2hNZW1iZXJFeHByZXNzaW9uKFwiUmVhY3QuQ29tcG9uZW50XCIpO1xuXG5leHBvcnRzLmlzUmVhY3RDb21wb25lbnQgPSBpc1JlYWN0Q29tcG9uZW50O1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBpc0NvbXBhdFRhZyh0YWdOYW1lKSB7XG4gIHJldHVybiB0YWdOYW1lICYmIC9eW2Etel18XFwtLy50ZXN0KHRhZ05hbWUpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGNsZWFuSlNYRWxlbWVudExpdGVyYWxDaGlsZChjaGlsZCwgYXJncykge1xuICB2YXIgbGluZXMgPSBjaGlsZC52YWx1ZS5zcGxpdCgvXFxyXFxufFxcbnxcXHIvKTtcblxuICB2YXIgbGFzdE5vbkVtcHR5TGluZSA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsaW5lc1tpXS5tYXRjaCgvW14gXFx0XS8pKSB7XG4gICAgICBsYXN0Tm9uRW1wdHlMaW5lID0gaTtcbiAgICB9XG4gIH1cblxuICB2YXIgc3RyID0gXCJcIjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcblxuICAgIHZhciBpc0ZpcnN0TGluZSA9IGkgPT09IDA7XG4gICAgdmFyIGlzTGFzdExpbmUgPSBpID09PSBsaW5lcy5sZW5ndGggLSAxO1xuICAgIHZhciBpc0xhc3ROb25FbXB0eUxpbmUgPSBpID09PSBsYXN0Tm9uRW1wdHlMaW5lO1xuXG4gICAgLy8gcmVwbGFjZSByZW5kZXJlZCB3aGl0ZXNwYWNlIHRhYnMgd2l0aCBzcGFjZXNcbiAgICB2YXIgdHJpbW1lZExpbmUgPSBsaW5lLnJlcGxhY2UoL1xcdC9nLCBcIiBcIik7XG5cbiAgICAvLyB0cmltIHdoaXRlc3BhY2UgdG91Y2hpbmcgYSBuZXdsaW5lXG4gICAgaWYgKCFpc0ZpcnN0TGluZSkge1xuICAgICAgdHJpbW1lZExpbmUgPSB0cmltbWVkTGluZS5yZXBsYWNlKC9eWyBdKy8sIFwiXCIpO1xuICAgIH1cblxuICAgIC8vIHRyaW0gd2hpdGVzcGFjZSB0b3VjaGluZyBhbiBlbmRsaW5lXG4gICAgaWYgKCFpc0xhc3RMaW5lKSB7XG4gICAgICB0cmltbWVkTGluZSA9IHRyaW1tZWRMaW5lLnJlcGxhY2UoL1sgXSskLywgXCJcIik7XG4gICAgfVxuXG4gICAgaWYgKHRyaW1tZWRMaW5lKSB7XG4gICAgICBpZiAoIWlzTGFzdE5vbkVtcHR5TGluZSkge1xuICAgICAgICB0cmltbWVkTGluZSArPSBcIiBcIjtcbiAgICAgIH1cblxuICAgICAgc3RyICs9IHRyaW1tZWRMaW5lO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdHIpIGFyZ3MucHVzaCh0LmxpdGVyYWwoc3RyKSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gYnVpbGRDaGlsZHJlbihub2RlKSB7XG4gIHZhciBlbGVtcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5baV07XG5cbiAgICBpZiAodC5pc0xpdGVyYWwoY2hpbGQpICYmIHR5cGVvZiBjaGlsZC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY2xlYW5KU1hFbGVtZW50TGl0ZXJhbENoaWxkKGNoaWxkLCBlbGVtcyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodC5pc0pTWEV4cHJlc3Npb25Db250YWluZXIoY2hpbGQpKSBjaGlsZCA9IGNoaWxkLmV4cHJlc3Npb247XG4gICAgaWYgKHQuaXNKU1hFbXB0eUV4cHJlc3Npb24oY2hpbGQpKSBjb250aW51ZTtcblxuICAgIGVsZW1zLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1zO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
