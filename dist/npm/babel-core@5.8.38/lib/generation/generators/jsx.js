/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t;

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
   * Prints JSXAttribute, prints name and value.
   */

  function JSXAttribute(node, print) {
    print.plain(node.name);
    if (node.value) {
      this.push("=");
      print.plain(node.value);
    }
  }

  /**
   * Prints JSXIdentifier, prints name.
   */

  function JSXIdentifier(node) {
    this.push(node.name);
  }

  /**
   * Prints JSXNamespacedName, prints namespace and name.
   */

  function JSXNamespacedName(node, print) {
    print.plain(node.namespace);
    this.push(":");
    print.plain(node.name);
  }

  /**
   * Prints JSXMemberExpression, prints object and property.
   */

  function JSXMemberExpression(node, print) {
    print.plain(node.object);
    this.push(".");
    print.plain(node.property);
  }

  /**
   * Prints JSXSpreadAttribute, prints argument.
   */

  function JSXSpreadAttribute(node, print) {
    this.push("{...");
    print.plain(node.argument);
    this.push("}");
  }

  /**
   * Prints JSXExpressionContainer, prints expression.
   */

  function JSXExpressionContainer(node, print) {
    this.push("{");
    print.plain(node.expression);
    this.push("}");
  }

  /**
   * Prints JSXElement, prints openingElement, children, and closingElement.
   */

  function JSXElement(node, print) {
    var open = node.openingElement;
    print.plain(open);
    if (open.selfClosing) return;

    this.indent();
    var _arr = node.children;
    for (var _i = 0; _i < _arr.length; _i++) {
      var child = _arr[_i];
      if (t.isLiteral(child)) {
        this.push(child.value, true);
      } else {
        print.plain(child);
      }
    }
    this.dedent();

    print.plain(node.closingElement);
  }

  /**
   * Prints JSXOpeningElement, prints name and attributes, handles selfClosing.
   */

  function JSXOpeningElement(node, print) {
    this.push("<");
    print.plain(node.name);
    if (node.attributes.length > 0) {
      this.push(" ");
      print.join(node.attributes, { separator: " " });
    }
    this.push(node.selfClosing ? " />" : ">");
  }

  /**
   * Prints JSXClosingElement, prints name.
   */

  function JSXClosingElement(node, print) {
    this.push("</");
    print.plain(node.name);
    this.push(">");
  }

  /**
   * Prints JSXEmptyExpression.
   */

  function JSXEmptyExpression() {}
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.JSXAttribute = JSXAttribute;
      exports.JSXIdentifier = JSXIdentifier;
      exports.JSXNamespacedName = JSXNamespacedName;
      exports.JSXMemberExpression = JSXMemberExpression;
      exports.JSXSpreadAttribute = JSXSpreadAttribute;
      exports.JSXExpressionContainer = JSXExpressionContainer;
      exports.JSXElement = JSXElement;
      exports.JSXOpeningElement = JSXOpeningElement;
      exports.JSXClosingElement = JSXClosingElement;
      exports.JSXEmptyExpression = JSXEmptyExpression;_types = require("../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL2pzeC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQWVBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQVVBLFdBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QixLQUE1QixFQUFtQztBQUNqQyxVQUFNLEtBQU4sQ0FBWSxLQUFLLElBQUwsQ0FBWixDQURpQztBQUVqQyxRQUFJLEtBQUssS0FBTCxFQUFZO0FBQ2QsV0FBSyxJQUFMLENBQVUsR0FBVixFQURjO0FBRWQsWUFBTSxLQUFOLENBQVksS0FBSyxLQUFMLENBQVosQ0FGYztLQUFoQjtHQUZGOzs7Ozs7QUFZQSxXQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkI7QUFDM0IsU0FBSyxJQUFMLENBQVUsS0FBSyxJQUFMLENBQVYsQ0FEMkI7R0FBN0I7Ozs7OztBQVFBLFdBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUMsS0FBakMsRUFBd0M7QUFDdEMsVUFBTSxLQUFOLENBQVksS0FBSyxTQUFMLENBQVosQ0FEc0M7QUFFdEMsU0FBSyxJQUFMLENBQVUsR0FBVixFQUZz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aUMsc0JBQWpDO0FBQ0EsY0FBUSxVQUFSLEdBQXFCLFVBQXJCO0FBQ0EsY0FBUSxpQkFBUixHQUE0QixpQkFBNUI7QUFDQSxjQUFRLGlCQUFSLEdBQTRCLGlCQUE1QjtBQUNBLGNBQVEsa0JBQVIsR0FBNkIsa0JBQTdCLENBS0ksU0FBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2dlbmVyYXRpb24vZ2VuZXJhdG9ycy9qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkpTWEF0dHJpYnV0ZSA9IEpTWEF0dHJpYnV0ZTtcbmV4cG9ydHMuSlNYSWRlbnRpZmllciA9IEpTWElkZW50aWZpZXI7XG5leHBvcnRzLkpTWE5hbWVzcGFjZWROYW1lID0gSlNYTmFtZXNwYWNlZE5hbWU7XG5leHBvcnRzLkpTWE1lbWJlckV4cHJlc3Npb24gPSBKU1hNZW1iZXJFeHByZXNzaW9uO1xuZXhwb3J0cy5KU1hTcHJlYWRBdHRyaWJ1dGUgPSBKU1hTcHJlYWRBdHRyaWJ1dGU7XG5leHBvcnRzLkpTWEV4cHJlc3Npb25Db250YWluZXIgPSBKU1hFeHByZXNzaW9uQ29udGFpbmVyO1xuZXhwb3J0cy5KU1hFbGVtZW50ID0gSlNYRWxlbWVudDtcbmV4cG9ydHMuSlNYT3BlbmluZ0VsZW1lbnQgPSBKU1hPcGVuaW5nRWxlbWVudDtcbmV4cG9ydHMuSlNYQ2xvc2luZ0VsZW1lbnQgPSBKU1hDbG9zaW5nRWxlbWVudDtcbmV4cG9ydHMuSlNYRW1wdHlFeHByZXNzaW9uID0gSlNYRW1wdHlFeHByZXNzaW9uO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogUHJpbnRzIEpTWEF0dHJpYnV0ZSwgcHJpbnRzIG5hbWUgYW5kIHZhbHVlLlxuICovXG5cbmZ1bmN0aW9uIEpTWEF0dHJpYnV0ZShub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLm5hbWUpO1xuICBpZiAobm9kZS52YWx1ZSkge1xuICAgIHRoaXMucHVzaChcIj1cIik7XG4gICAgcHJpbnQucGxhaW4obm9kZS52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmludHMgSlNYSWRlbnRpZmllciwgcHJpbnRzIG5hbWUuXG4gKi9cblxuZnVuY3Rpb24gSlNYSWRlbnRpZmllcihub2RlKSB7XG4gIHRoaXMucHVzaChub2RlLm5hbWUpO1xufVxuXG4vKipcbiAqIFByaW50cyBKU1hOYW1lc3BhY2VkTmFtZSwgcHJpbnRzIG5hbWVzcGFjZSBhbmQgbmFtZS5cbiAqL1xuXG5mdW5jdGlvbiBKU1hOYW1lc3BhY2VkTmFtZShub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLm5hbWVzcGFjZSk7XG4gIHRoaXMucHVzaChcIjpcIik7XG4gIHByaW50LnBsYWluKG5vZGUubmFtZSk7XG59XG5cbi8qKlxuICogUHJpbnRzIEpTWE1lbWJlckV4cHJlc3Npb24sIHByaW50cyBvYmplY3QgYW5kIHByb3BlcnR5LlxuICovXG5cbmZ1bmN0aW9uIEpTWE1lbWJlckV4cHJlc3Npb24obm9kZSwgcHJpbnQpIHtcbiAgcHJpbnQucGxhaW4obm9kZS5vYmplY3QpO1xuICB0aGlzLnB1c2goXCIuXCIpO1xuICBwcmludC5wbGFpbihub2RlLnByb3BlcnR5KTtcbn1cblxuLyoqXG4gKiBQcmludHMgSlNYU3ByZWFkQXR0cmlidXRlLCBwcmludHMgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gSlNYU3ByZWFkQXR0cmlidXRlKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcInsuLi5cIik7XG4gIHByaW50LnBsYWluKG5vZGUuYXJndW1lbnQpO1xuICB0aGlzLnB1c2goXCJ9XCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBKU1hFeHByZXNzaW9uQ29udGFpbmVyLCBwcmludHMgZXhwcmVzc2lvbi5cbiAqL1xuXG5mdW5jdGlvbiBKU1hFeHByZXNzaW9uQ29udGFpbmVyKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcIntcIik7XG4gIHByaW50LnBsYWluKG5vZGUuZXhwcmVzc2lvbik7XG4gIHRoaXMucHVzaChcIn1cIik7XG59XG5cbi8qKlxuICogUHJpbnRzIEpTWEVsZW1lbnQsIHByaW50cyBvcGVuaW5nRWxlbWVudCwgY2hpbGRyZW4sIGFuZCBjbG9zaW5nRWxlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiBKU1hFbGVtZW50KG5vZGUsIHByaW50KSB7XG4gIHZhciBvcGVuID0gbm9kZS5vcGVuaW5nRWxlbWVudDtcbiAgcHJpbnQucGxhaW4ob3Blbik7XG4gIGlmIChvcGVuLnNlbGZDbG9zaW5nKSByZXR1cm47XG5cbiAgdGhpcy5pbmRlbnQoKTtcbiAgdmFyIF9hcnIgPSBub2RlLmNoaWxkcmVuO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgY2hpbGQgPSBfYXJyW19pXTtcbiAgICBpZiAodC5pc0xpdGVyYWwoY2hpbGQpKSB7XG4gICAgICB0aGlzLnB1c2goY2hpbGQudmFsdWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmludC5wbGFpbihjaGlsZCk7XG4gICAgfVxuICB9XG4gIHRoaXMuZGVkZW50KCk7XG5cbiAgcHJpbnQucGxhaW4obm9kZS5jbG9zaW5nRWxlbWVudCk7XG59XG5cbi8qKlxuICogUHJpbnRzIEpTWE9wZW5pbmdFbGVtZW50LCBwcmludHMgbmFtZSBhbmQgYXR0cmlidXRlcywgaGFuZGxlcyBzZWxmQ2xvc2luZy5cbiAqL1xuXG5mdW5jdGlvbiBKU1hPcGVuaW5nRWxlbWVudChub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCI8XCIpO1xuICBwcmludC5wbGFpbihub2RlLm5hbWUpO1xuICBpZiAobm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLnB1c2goXCIgXCIpO1xuICAgIHByaW50LmpvaW4obm9kZS5hdHRyaWJ1dGVzLCB7IHNlcGFyYXRvcjogXCIgXCIgfSk7XG4gIH1cbiAgdGhpcy5wdXNoKG5vZGUuc2VsZkNsb3NpbmcgPyBcIiAvPlwiIDogXCI+XCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBKU1hDbG9zaW5nRWxlbWVudCwgcHJpbnRzIG5hbWUuXG4gKi9cblxuZnVuY3Rpb24gSlNYQ2xvc2luZ0VsZW1lbnQobm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwiPC9cIik7XG4gIHByaW50LnBsYWluKG5vZGUubmFtZSk7XG4gIHRoaXMucHVzaChcIj5cIik7XG59XG5cbi8qKlxuICogUHJpbnRzIEpTWEVtcHR5RXhwcmVzc2lvbi5cbiAqL1xuXG5mdW5jdGlvbiBKU1hFbXB0eUV4cHJlc3Npb24oKSB7fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
