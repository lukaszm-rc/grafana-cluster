/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _isInteger, _isInteger2, _lodashLangIsNumber, _lodashLangIsNumber2, _node, _node2, _types, t, SCIENTIFIC_NOTATION, ZERO_DECIMAL_INTEGER, NON_DECIMAL_NUMERIC_LITERAL, buildYieldAwait, YieldExpression, AwaitExpression;

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
   * Prints UnaryExpression, prints operator and argument.
   */

  function UnaryExpression(node, print) {
    var needsSpace = /[a-z]$/.test(node.operator);
    var arg = node.argument;

    if (t.isUpdateExpression(arg) || t.isUnaryExpression(arg)) {
      needsSpace = true;
    }

    if (t.isUnaryExpression(arg) && arg.operator === "!") {
      needsSpace = false;
    }

    this.push(node.operator);
    if (needsSpace) this.push(" ");
    print.plain(node.argument);
  }

  /**
   * Prints DoExpression, prints body.
   */

  function DoExpression(node, print) {
    this.push("do");
    this.space();
    print.plain(node.body);
  }

  /**
   * Prints ParenthesizedExpression, prints expression.
   */

  function ParenthesizedExpression(node, print) {
    this.push("(");
    print.plain(node.expression);
    this.push(")");
  }

  /**
   * Prints UpdateExpression, prints operator and argument.
   */

  function UpdateExpression(node, print) {
    if (node.prefix) {
      this.push(node.operator);
      print.plain(node.argument);
    } else {
      print.plain(node.argument);
      this.push(node.operator);
    }
  }

  /**
   * Prints ConditionalExpression, prints test, consequent, and alternate.
   */

  function ConditionalExpression(node, print) {
    print.plain(node.test);
    this.space();
    this.push("?");
    this.space();
    print.plain(node.consequent);
    this.space();
    this.push(":");
    this.space();
    print.plain(node.alternate);
  }

  /**
   * Prints NewExpression, prints callee and arguments.
   */

  function NewExpression(node, print) {
    this.push("new ");
    print.plain(node.callee);
    this.push("(");
    print.list(node.arguments);
    this.push(")");
  }

  /**
   * Prints SequenceExpression.expressions.
   */

  function SequenceExpression(node, print) {
    print.list(node.expressions);
  }

  /**
   * Prints ThisExpression.
   */

  function ThisExpression() {
    this.push("this");
  }

  /**
   * Prints Super.
   */

  function Super() {
    this.push("super");
  }

  /**
   * Prints Decorator, prints expression.
   */

  function Decorator(node, print) {
    this.push("@");
    print.plain(node.expression);
    this.newline();
  }

  /**
   * Prints CallExpression, prints callee and arguments.
   */

  function CallExpression(node, print) {
    print.plain(node.callee);

    this.push("(");

    var isPrettyCall = node._prettyCall && !this.format.retainLines && !this.format.compact;

    var separator;
    if (isPrettyCall) {
      separator = ",\n";
      this.newline();
      this.indent();
    }

    print.list(node.arguments, { separator: separator });

    if (isPrettyCall) {
      this.newline();
      this.dedent();
    }

    this.push(")");
  }

  /**
   * Builds yield or await expression printer.
   * Prints delegate, all, and argument.
   */

  /**
   * Prints EmptyStatement.
   */

  function EmptyStatement() {
    this.semicolon();
  }

  /**
   * Prints ExpressionStatement, prints expression.
   */

  function ExpressionStatement(node, print) {
    print.plain(node.expression);
    this.semicolon();
  }

  /**
   * Prints AssignmentPattern, prints left and right.
   */

  function AssignmentPattern(node, print) {
    print.plain(node.left);
    this.push(" = ");
    print.plain(node.right);
  }

  /**
   * Prints AssignmentExpression, prints left, operator, and right.
   */

  function AssignmentExpression(node, print, parent) {
    // Somewhere inside a for statement `init` node but doesn't usually
    // needs a paren except for `in` expressions: `for (a in b ? a : b;;)`
    var parens = this._inForStatementInit && node.operator === "in" && !_node2["default"].needsParens(node, parent);

    if (parens) {
      this.push("(");
    }

    // todo: add cases where the spaces can be dropped when in compact mode
    print.plain(node.left);

    var spaces = node.operator === "in" || node.operator === "instanceof";
    spaces = true; // todo: https://github.com/babel/babel/issues/1835
    this.space(spaces);

    this.push(node.operator);

    if (!spaces) {
      // space is mandatory to avoid outputting <!--
      // http://javascript.spec.whatwg.org/#comment-syntax
      spaces = node.operator === "<" && t.isUnaryExpression(node.right, { prefix: true, operator: "!" }) && t.isUnaryExpression(node.right.argument, { prefix: true, operator: "--" });
    }

    this.space(spaces);

    print.plain(node.right);

    if (parens) {
      this.push(")");
    }
  }

  /**
   * Prints BindExpression, prints object and callee.
   */

  function BindExpression(node, print) {
    print.plain(node.object);
    this.push("::");
    print.plain(node.callee);
  }

  /**
   * Alias ClassDeclaration printer as ClassExpression,
   * and AssignmentExpression printer as LogicalExpression.
   */

  /**
   * Print MemberExpression, prints object, property, and value. Handles computed.
   */

  function MemberExpression(node, print) {
    var obj = node.object;
    print.plain(obj);

    if (!node.computed && t.isMemberExpression(node.property)) {
      throw new TypeError("Got a MemberExpression for MemberExpression property");
    }

    var computed = node.computed;
    if (t.isLiteral(node.property) && _lodashLangIsNumber2["default"](node.property.value)) {
      computed = true;
    }

    if (computed) {
      this.push("[");
      print.plain(node.property);
      this.push("]");
    } else {
      if (t.isLiteral(node.object)) {
        var val = this._Literal(node.object);
        if (_isInteger2["default"](+val) && !ZERO_DECIMAL_INTEGER.test(val) && !SCIENTIFIC_NOTATION.test(val) && !this.endsWith(".") && !NON_DECIMAL_NUMERIC_LITERAL.test(val)) {
          this.push(".");
        }
      }

      this.push(".");
      print.plain(node.property);
    }
  }

  /**
   * Print MetaProperty, prints meta and property.
   */

  function MetaProperty(node, print) {
    print.plain(node.meta);
    this.push(".");
    print.plain(node.property);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.UnaryExpression = UnaryExpression;
      exports.DoExpression = DoExpression;
      exports.ParenthesizedExpression = ParenthesizedExpression;
      exports.UpdateExpression = UpdateExpression;
      exports.ConditionalExpression = ConditionalExpression;
      exports.NewExpression = NewExpression;
      exports.SequenceExpression = SequenceExpression;
      exports.ThisExpression = ThisExpression;
      exports.Super = Super;
      exports.Decorator = Decorator;
      exports.CallExpression = CallExpression;
      exports.EmptyStatement = EmptyStatement;
      exports.ExpressionStatement = ExpressionStatement;
      exports.AssignmentPattern = AssignmentPattern;
      exports.AssignmentExpression = AssignmentExpression;
      exports.BindExpression = BindExpression;
      exports.MemberExpression = MemberExpression;
      exports.MetaProperty = MetaProperty;_isInteger = require("is-integer");
      _isInteger2 = _interopRequireDefault(_isInteger);
      _lodashLangIsNumber = require("lodash/lang/isNumber");
      _lodashLangIsNumber2 = _interopRequireDefault(_lodashLangIsNumber);
      _node = require("../node");
      _node2 = _interopRequireDefault(_node);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      SCIENTIFIC_NOTATION = /e/i;
      ZERO_DECIMAL_INTEGER = /\.0+$/;
      NON_DECIMAL_NUMERIC_LITERAL = /^0(b|o|x)/i;

      buildYieldAwait = function buildYieldAwait(keyword) {
        return function (node, print) {
          this.push(keyword);

          if (node.delegate || node.all) {
            this.push("*");
          }

          if (node.argument) {
            this.push(" ");
            var terminatorState = this.startTerminatorless();
            print.plain(node.argument);
            this.endTerminatorless(terminatorState);
          }
        };
      };

      YieldExpression = buildYieldAwait("yield");

      exports.YieldExpression = YieldExpression;
      AwaitExpression = buildYieldAwait("await");


      exports.AwaitExpression = AwaitExpression;exports.BinaryExpression = AssignmentExpression;
      exports.LogicalExpression = AssignmentExpression;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9nZW5lcmF0b3JzL2V4cHJlc3Npb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBdUJBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFvQ0EsV0FBUyxlQUFULENBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDO0FBQ3BDLFFBQUksYUFBYSxTQUFTLElBQVQsQ0FBYyxLQUFLLFFBQUwsQ0FBM0IsQ0FEZ0M7QUFFcEMsUUFBSSxNQUFNLEtBQUssUUFBTCxDQUYwQjs7QUFJcEMsUUFBSSxFQUFFLGtCQUFGLENBQXFCLEdBQXJCLEtBQTZCLEVBQUUsaUJBQUYsQ0FBb0IsR0FBcEIsQ0FBN0IsRUFBdUQ7QUFDekQsbUJBQWEsSUFBYixDQUR5RDtLQUEzRDs7QUFJQSxRQUFJLEVBQUUsaUJBQUYsQ0FBb0IsR0FBcEIsS0FBNEIsSUFBSSxR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QkFBdUIsS0FBdkI7QUFFVCxlQUFTLFFBQVEsYUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBTUosNEJBQXNCO0FBQ3RCLDZCQUF1QjtBQU92QixvQ0FBOEI7O0FBd0o5Qix3QkFBa0IsU0FBUyxlQUFULENBQXlCLE9BQXpCLEVBQWtDO0FBQ3RELGVBQU8sVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCO0FBQzVCLGVBQUssSUFBTCxDQUFVLE9BQVYsRUFENEI7O0FBRzVCLGNBQUksS0FBSyxRQUFMLElBQWlCLEtBQUssR0FBTCxFQUFVO0FBQzdCLGlCQUFLLElBQUwsQ0FBVSxHQUFWLEVBRDZCO1dBQS9COztBQUlBLGNBQUksS0FBSyxRQUFMLEVBQWU7QUFDakIsaUJBQUssSUFBTCxDQUFVLEdBQVYsRUFEaUI7QUFFakIsZ0JBQUksa0JBQWtCLEtBQUssbUJBQUwsRUFBbEIsQ0FGYTtBQUdqQixrQkFBTSxLQUFOLENBQVksS0FBSyxRQUFMLENBQVosQ0FIaUI7QUFJakIsaUJBQUssaUJBQUwsQ0FBdUIsZUFBdkIsRUFKaUI7V0FBbkI7U0FQSyxDQUQrQztPQUFsQzs7QUFxQmxCLHdCQUFrQixnQkFBZ0IsT0FBaEI7O0FBQ3RCLGNBQVEsZUFBUixHQUEwQixlQUExQjtBQUNJLHdCQUFrQixnQkFBZ0IsT0FBaEI7OztBQUV0QixjQUFRLGVBQVIsR0FBMEIsZUFBMUIsQ0FnRkEsUUFBUSxnQkFBUixHQUEyQixvQkFBM0I7QUFDQSxjQUFRLGlCQUFSLEdBQTRCLG9CQUE1QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2dlbmVyYXRpb24vZ2VuZXJhdG9ycy9leHByZXNzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuVW5hcnlFeHByZXNzaW9uID0gVW5hcnlFeHByZXNzaW9uO1xuZXhwb3J0cy5Eb0V4cHJlc3Npb24gPSBEb0V4cHJlc3Npb247XG5leHBvcnRzLlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uID0gUGFyZW50aGVzaXplZEV4cHJlc3Npb247XG5leHBvcnRzLlVwZGF0ZUV4cHJlc3Npb24gPSBVcGRhdGVFeHByZXNzaW9uO1xuZXhwb3J0cy5Db25kaXRpb25hbEV4cHJlc3Npb24gPSBDb25kaXRpb25hbEV4cHJlc3Npb247XG5leHBvcnRzLk5ld0V4cHJlc3Npb24gPSBOZXdFeHByZXNzaW9uO1xuZXhwb3J0cy5TZXF1ZW5jZUV4cHJlc3Npb24gPSBTZXF1ZW5jZUV4cHJlc3Npb247XG5leHBvcnRzLlRoaXNFeHByZXNzaW9uID0gVGhpc0V4cHJlc3Npb247XG5leHBvcnRzLlN1cGVyID0gU3VwZXI7XG5leHBvcnRzLkRlY29yYXRvciA9IERlY29yYXRvcjtcbmV4cG9ydHMuQ2FsbEV4cHJlc3Npb24gPSBDYWxsRXhwcmVzc2lvbjtcbmV4cG9ydHMuRW1wdHlTdGF0ZW1lbnQgPSBFbXB0eVN0YXRlbWVudDtcbmV4cG9ydHMuRXhwcmVzc2lvblN0YXRlbWVudCA9IEV4cHJlc3Npb25TdGF0ZW1lbnQ7XG5leHBvcnRzLkFzc2lnbm1lbnRQYXR0ZXJuID0gQXNzaWdubWVudFBhdHRlcm47XG5leHBvcnRzLkFzc2lnbm1lbnRFeHByZXNzaW9uID0gQXNzaWdubWVudEV4cHJlc3Npb247XG5leHBvcnRzLkJpbmRFeHByZXNzaW9uID0gQmluZEV4cHJlc3Npb247XG5leHBvcnRzLk1lbWJlckV4cHJlc3Npb24gPSBNZW1iZXJFeHByZXNzaW9uO1xuZXhwb3J0cy5NZXRhUHJvcGVydHkgPSBNZXRhUHJvcGVydHk7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2lzSW50ZWdlciA9IHJlcXVpcmUoXCJpcy1pbnRlZ2VyXCIpO1xuXG52YXIgX2lzSW50ZWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0ludGVnZXIpO1xuXG52YXIgX2xvZGFzaExhbmdJc051bWJlciA9IHJlcXVpcmUoXCJsb2Rhc2gvbGFuZy9pc051bWJlclwiKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNOdW1iZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzTnVtYmVyKTtcblxudmFyIF9ub2RlID0gcmVxdWlyZShcIi4uL25vZGVcIik7XG5cbnZhciBfbm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub2RlKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFJlZ0V4cCBmb3IgdGVzdGluZyBzY2llbnRpZmljIG5vdGF0aW9uIGluIGxpdGVyYWxzLlxuICovXG5cbnZhciBTQ0lFTlRJRklDX05PVEFUSU9OID0gL2UvaTtcbnZhciBaRVJPX0RFQ0lNQUxfSU5URUdFUiA9IC9cXC4wKyQvO1xuXG4vKipcbiAqIFJlZ0V4cCBmb3IgdGVzdGluZyBpZiBhIG51bWVyaWMgbGl0ZXJhbCBpc1xuICogYSBCaW5hcnlJbnRlZ2VyTGl0ZXJhbCwgT2N0YWxJbnRlZ2VyTGl0ZXJhbCBvciBIZXhJbnRlZ2VyTGl0ZXJhbC5cbiAqL1xuXG52YXIgTk9OX0RFQ0lNQUxfTlVNRVJJQ19MSVRFUkFMID0gL14wKGJ8b3x4KS9pO1xuXG4vKipcbiAqIFByaW50cyBVbmFyeUV4cHJlc3Npb24sIHByaW50cyBvcGVyYXRvciBhbmQgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uKG5vZGUsIHByaW50KSB7XG4gIHZhciBuZWVkc1NwYWNlID0gL1thLXpdJC8udGVzdChub2RlLm9wZXJhdG9yKTtcbiAgdmFyIGFyZyA9IG5vZGUuYXJndW1lbnQ7XG5cbiAgaWYgKHQuaXNVcGRhdGVFeHByZXNzaW9uKGFyZykgfHwgdC5pc1VuYXJ5RXhwcmVzc2lvbihhcmcpKSB7XG4gICAgbmVlZHNTcGFjZSA9IHRydWU7XG4gIH1cblxuICBpZiAodC5pc1VuYXJ5RXhwcmVzc2lvbihhcmcpICYmIGFyZy5vcGVyYXRvciA9PT0gXCIhXCIpIHtcbiAgICBuZWVkc1NwYWNlID0gZmFsc2U7XG4gIH1cblxuICB0aGlzLnB1c2gobm9kZS5vcGVyYXRvcik7XG4gIGlmIChuZWVkc1NwYWNlKSB0aGlzLnB1c2goXCIgXCIpO1xuICBwcmludC5wbGFpbihub2RlLmFyZ3VtZW50KTtcbn1cblxuLyoqXG4gKiBQcmludHMgRG9FeHByZXNzaW9uLCBwcmludHMgYm9keS5cbiAqL1xuXG5mdW5jdGlvbiBEb0V4cHJlc3Npb24obm9kZSwgcHJpbnQpIHtcbiAgdGhpcy5wdXNoKFwiZG9cIik7XG4gIHRoaXMuc3BhY2UoKTtcbiAgcHJpbnQucGxhaW4obm9kZS5ib2R5KTtcbn1cblxuLyoqXG4gKiBQcmludHMgUGFyZW50aGVzaXplZEV4cHJlc3Npb24sIHByaW50cyBleHByZXNzaW9uLlxuICovXG5cbmZ1bmN0aW9uIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcIihcIik7XG4gIHByaW50LnBsYWluKG5vZGUuZXhwcmVzc2lvbik7XG4gIHRoaXMucHVzaChcIilcIik7XG59XG5cbi8qKlxuICogUHJpbnRzIFVwZGF0ZUV4cHJlc3Npb24sIHByaW50cyBvcGVyYXRvciBhbmQgYXJndW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gVXBkYXRlRXhwcmVzc2lvbihub2RlLCBwcmludCkge1xuICBpZiAobm9kZS5wcmVmaXgpIHtcbiAgICB0aGlzLnB1c2gobm9kZS5vcGVyYXRvcik7XG4gICAgcHJpbnQucGxhaW4obm9kZS5hcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgcHJpbnQucGxhaW4obm9kZS5hcmd1bWVudCk7XG4gICAgdGhpcy5wdXNoKG5vZGUub3BlcmF0b3IpO1xuICB9XG59XG5cbi8qKlxuICogUHJpbnRzIENvbmRpdGlvbmFsRXhwcmVzc2lvbiwgcHJpbnRzIHRlc3QsIGNvbnNlcXVlbnQsIGFuZCBhbHRlcm5hdGUuXG4gKi9cblxuZnVuY3Rpb24gQ29uZGl0aW9uYWxFeHByZXNzaW9uKG5vZGUsIHByaW50KSB7XG4gIHByaW50LnBsYWluKG5vZGUudGVzdCk7XG4gIHRoaXMuc3BhY2UoKTtcbiAgdGhpcy5wdXNoKFwiP1wiKTtcbiAgdGhpcy5zcGFjZSgpO1xuICBwcmludC5wbGFpbihub2RlLmNvbnNlcXVlbnQpO1xuICB0aGlzLnNwYWNlKCk7XG4gIHRoaXMucHVzaChcIjpcIik7XG4gIHRoaXMuc3BhY2UoKTtcbiAgcHJpbnQucGxhaW4obm9kZS5hbHRlcm5hdGUpO1xufVxuXG4vKipcbiAqIFByaW50cyBOZXdFeHByZXNzaW9uLCBwcmludHMgY2FsbGVlIGFuZCBhcmd1bWVudHMuXG4gKi9cblxuZnVuY3Rpb24gTmV3RXhwcmVzc2lvbihub2RlLCBwcmludCkge1xuICB0aGlzLnB1c2goXCJuZXcgXCIpO1xuICBwcmludC5wbGFpbihub2RlLmNhbGxlZSk7XG4gIHRoaXMucHVzaChcIihcIik7XG4gIHByaW50Lmxpc3Qobm9kZS5hcmd1bWVudHMpO1xuICB0aGlzLnB1c2goXCIpXCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBTZXF1ZW5jZUV4cHJlc3Npb24uZXhwcmVzc2lvbnMuXG4gKi9cblxuZnVuY3Rpb24gU2VxdWVuY2VFeHByZXNzaW9uKG5vZGUsIHByaW50KSB7XG4gIHByaW50Lmxpc3Qobm9kZS5leHByZXNzaW9ucyk7XG59XG5cbi8qKlxuICogUHJpbnRzIFRoaXNFeHByZXNzaW9uLlxuICovXG5cbmZ1bmN0aW9uIFRoaXNFeHByZXNzaW9uKCkge1xuICB0aGlzLnB1c2goXCJ0aGlzXCIpO1xufVxuXG4vKipcbiAqIFByaW50cyBTdXBlci5cbiAqL1xuXG5mdW5jdGlvbiBTdXBlcigpIHtcbiAgdGhpcy5wdXNoKFwic3VwZXJcIik7XG59XG5cbi8qKlxuICogUHJpbnRzIERlY29yYXRvciwgcHJpbnRzIGV4cHJlc3Npb24uXG4gKi9cblxuZnVuY3Rpb24gRGVjb3JhdG9yKG5vZGUsIHByaW50KSB7XG4gIHRoaXMucHVzaChcIkBcIik7XG4gIHByaW50LnBsYWluKG5vZGUuZXhwcmVzc2lvbik7XG4gIHRoaXMubmV3bGluZSgpO1xufVxuXG4vKipcbiAqIFByaW50cyBDYWxsRXhwcmVzc2lvbiwgcHJpbnRzIGNhbGxlZSBhbmQgYXJndW1lbnRzLlxuICovXG5cbmZ1bmN0aW9uIENhbGxFeHByZXNzaW9uKG5vZGUsIHByaW50KSB7XG4gIHByaW50LnBsYWluKG5vZGUuY2FsbGVlKTtcblxuICB0aGlzLnB1c2goXCIoXCIpO1xuXG4gIHZhciBpc1ByZXR0eUNhbGwgPSBub2RlLl9wcmV0dHlDYWxsICYmICF0aGlzLmZvcm1hdC5yZXRhaW5MaW5lcyAmJiAhdGhpcy5mb3JtYXQuY29tcGFjdDtcblxuICB2YXIgc2VwYXJhdG9yO1xuICBpZiAoaXNQcmV0dHlDYWxsKSB7XG4gICAgc2VwYXJhdG9yID0gXCIsXFxuXCI7XG4gICAgdGhpcy5uZXdsaW5lKCk7XG4gICAgdGhpcy5pbmRlbnQoKTtcbiAgfVxuXG4gIHByaW50Lmxpc3Qobm9kZS5hcmd1bWVudHMsIHsgc2VwYXJhdG9yOiBzZXBhcmF0b3IgfSk7XG5cbiAgaWYgKGlzUHJldHR5Q2FsbCkge1xuICAgIHRoaXMubmV3bGluZSgpO1xuICAgIHRoaXMuZGVkZW50KCk7XG4gIH1cblxuICB0aGlzLnB1c2goXCIpXCIpO1xufVxuXG4vKipcbiAqIEJ1aWxkcyB5aWVsZCBvciBhd2FpdCBleHByZXNzaW9uIHByaW50ZXIuXG4gKiBQcmludHMgZGVsZWdhdGUsIGFsbCwgYW5kIGFyZ3VtZW50LlxuICovXG5cbnZhciBidWlsZFlpZWxkQXdhaXQgPSBmdW5jdGlvbiBidWlsZFlpZWxkQXdhaXQoa2V5d29yZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIHByaW50KSB7XG4gICAgdGhpcy5wdXNoKGtleXdvcmQpO1xuXG4gICAgaWYgKG5vZGUuZGVsZWdhdGUgfHwgbm9kZS5hbGwpIHtcbiAgICAgIHRoaXMucHVzaChcIipcIik7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYXJndW1lbnQpIHtcbiAgICAgIHRoaXMucHVzaChcIiBcIik7XG4gICAgICB2YXIgdGVybWluYXRvclN0YXRlID0gdGhpcy5zdGFydFRlcm1pbmF0b3JsZXNzKCk7XG4gICAgICBwcmludC5wbGFpbihub2RlLmFyZ3VtZW50KTtcbiAgICAgIHRoaXMuZW5kVGVybWluYXRvcmxlc3ModGVybWluYXRvclN0YXRlKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBZaWVsZEV4cHJlc3Npb24gYW5kIEF3YWl0RXhwcmVzc2lvbiBwcmludGVycy5cbiAqL1xuXG52YXIgWWllbGRFeHByZXNzaW9uID0gYnVpbGRZaWVsZEF3YWl0KFwieWllbGRcIik7XG5leHBvcnRzLllpZWxkRXhwcmVzc2lvbiA9IFlpZWxkRXhwcmVzc2lvbjtcbnZhciBBd2FpdEV4cHJlc3Npb24gPSBidWlsZFlpZWxkQXdhaXQoXCJhd2FpdFwiKTtcblxuZXhwb3J0cy5Bd2FpdEV4cHJlc3Npb24gPSBBd2FpdEV4cHJlc3Npb247XG4vKipcbiAqIFByaW50cyBFbXB0eVN0YXRlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiBFbXB0eVN0YXRlbWVudCgpIHtcbiAgdGhpcy5zZW1pY29sb24oKTtcbn1cblxuLyoqXG4gKiBQcmludHMgRXhwcmVzc2lvblN0YXRlbWVudCwgcHJpbnRzIGV4cHJlc3Npb24uXG4gKi9cblxuZnVuY3Rpb24gRXhwcmVzc2lvblN0YXRlbWVudChub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLmV4cHJlc3Npb24pO1xuICB0aGlzLnNlbWljb2xvbigpO1xufVxuXG4vKipcbiAqIFByaW50cyBBc3NpZ25tZW50UGF0dGVybiwgcHJpbnRzIGxlZnQgYW5kIHJpZ2h0LlxuICovXG5cbmZ1bmN0aW9uIEFzc2lnbm1lbnRQYXR0ZXJuKG5vZGUsIHByaW50KSB7XG4gIHByaW50LnBsYWluKG5vZGUubGVmdCk7XG4gIHRoaXMucHVzaChcIiA9IFwiKTtcbiAgcHJpbnQucGxhaW4obm9kZS5yaWdodCk7XG59XG5cbi8qKlxuICogUHJpbnRzIEFzc2lnbm1lbnRFeHByZXNzaW9uLCBwcmludHMgbGVmdCwgb3BlcmF0b3IsIGFuZCByaWdodC5cbiAqL1xuXG5mdW5jdGlvbiBBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlLCBwcmludCwgcGFyZW50KSB7XG4gIC8vIFNvbWV3aGVyZSBpbnNpZGUgYSBmb3Igc3RhdGVtZW50IGBpbml0YCBub2RlIGJ1dCBkb2Vzbid0IHVzdWFsbHlcbiAgLy8gbmVlZHMgYSBwYXJlbiBleGNlcHQgZm9yIGBpbmAgZXhwcmVzc2lvbnM6IGBmb3IgKGEgaW4gYiA/IGEgOiBiOzspYFxuICB2YXIgcGFyZW5zID0gdGhpcy5faW5Gb3JTdGF0ZW1lbnRJbml0ICYmIG5vZGUub3BlcmF0b3IgPT09IFwiaW5cIiAmJiAhX25vZGUyW1wiZGVmYXVsdFwiXS5uZWVkc1BhcmVucyhub2RlLCBwYXJlbnQpO1xuXG4gIGlmIChwYXJlbnMpIHtcbiAgICB0aGlzLnB1c2goXCIoXCIpO1xuICB9XG5cbiAgLy8gdG9kbzogYWRkIGNhc2VzIHdoZXJlIHRoZSBzcGFjZXMgY2FuIGJlIGRyb3BwZWQgd2hlbiBpbiBjb21wYWN0IG1vZGVcbiAgcHJpbnQucGxhaW4obm9kZS5sZWZ0KTtcblxuICB2YXIgc3BhY2VzID0gbm9kZS5vcGVyYXRvciA9PT0gXCJpblwiIHx8IG5vZGUub3BlcmF0b3IgPT09IFwiaW5zdGFuY2VvZlwiO1xuICBzcGFjZXMgPSB0cnVlOyAvLyB0b2RvOiBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzE4MzVcbiAgdGhpcy5zcGFjZShzcGFjZXMpO1xuXG4gIHRoaXMucHVzaChub2RlLm9wZXJhdG9yKTtcblxuICBpZiAoIXNwYWNlcykge1xuICAgIC8vIHNwYWNlIGlzIG1hbmRhdG9yeSB0byBhdm9pZCBvdXRwdXR0aW5nIDwhLS1cbiAgICAvLyBodHRwOi8vamF2YXNjcmlwdC5zcGVjLndoYXR3Zy5vcmcvI2NvbW1lbnQtc3ludGF4XG4gICAgc3BhY2VzID0gbm9kZS5vcGVyYXRvciA9PT0gXCI8XCIgJiYgdC5pc1VuYXJ5RXhwcmVzc2lvbihub2RlLnJpZ2h0LCB7IHByZWZpeDogdHJ1ZSwgb3BlcmF0b3I6IFwiIVwiIH0pICYmIHQuaXNVbmFyeUV4cHJlc3Npb24obm9kZS5yaWdodC5hcmd1bWVudCwgeyBwcmVmaXg6IHRydWUsIG9wZXJhdG9yOiBcIi0tXCIgfSk7XG4gIH1cblxuICB0aGlzLnNwYWNlKHNwYWNlcyk7XG5cbiAgcHJpbnQucGxhaW4obm9kZS5yaWdodCk7XG5cbiAgaWYgKHBhcmVucykge1xuICAgIHRoaXMucHVzaChcIilcIik7XG4gIH1cbn1cblxuLyoqXG4gKiBQcmludHMgQmluZEV4cHJlc3Npb24sIHByaW50cyBvYmplY3QgYW5kIGNhbGxlZS5cbiAqL1xuXG5mdW5jdGlvbiBCaW5kRXhwcmVzc2lvbihub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLm9iamVjdCk7XG4gIHRoaXMucHVzaChcIjo6XCIpO1xuICBwcmludC5wbGFpbihub2RlLmNhbGxlZSk7XG59XG5cbi8qKlxuICogQWxpYXMgQ2xhc3NEZWNsYXJhdGlvbiBwcmludGVyIGFzIENsYXNzRXhwcmVzc2lvbixcbiAqIGFuZCBBc3NpZ25tZW50RXhwcmVzc2lvbiBwcmludGVyIGFzIExvZ2ljYWxFeHByZXNzaW9uLlxuICovXG5cbmV4cG9ydHMuQmluYXJ5RXhwcmVzc2lvbiA9IEFzc2lnbm1lbnRFeHByZXNzaW9uO1xuZXhwb3J0cy5Mb2dpY2FsRXhwcmVzc2lvbiA9IEFzc2lnbm1lbnRFeHByZXNzaW9uO1xuXG4vKipcbiAqIFByaW50IE1lbWJlckV4cHJlc3Npb24sIHByaW50cyBvYmplY3QsIHByb3BlcnR5LCBhbmQgdmFsdWUuIEhhbmRsZXMgY29tcHV0ZWQuXG4gKi9cblxuZnVuY3Rpb24gTWVtYmVyRXhwcmVzc2lvbihub2RlLCBwcmludCkge1xuICB2YXIgb2JqID0gbm9kZS5vYmplY3Q7XG4gIHByaW50LnBsYWluKG9iaik7XG5cbiAgaWYgKCFub2RlLmNvbXB1dGVkICYmIHQuaXNNZW1iZXJFeHByZXNzaW9uKG5vZGUucHJvcGVydHkpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdvdCBhIE1lbWJlckV4cHJlc3Npb24gZm9yIE1lbWJlckV4cHJlc3Npb24gcHJvcGVydHlcIik7XG4gIH1cblxuICB2YXIgY29tcHV0ZWQgPSBub2RlLmNvbXB1dGVkO1xuICBpZiAodC5pc0xpdGVyYWwobm9kZS5wcm9wZXJ0eSkgJiYgX2xvZGFzaExhbmdJc051bWJlcjJbXCJkZWZhdWx0XCJdKG5vZGUucHJvcGVydHkudmFsdWUpKSB7XG4gICAgY29tcHV0ZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVkKSB7XG4gICAgdGhpcy5wdXNoKFwiW1wiKTtcbiAgICBwcmludC5wbGFpbihub2RlLnByb3BlcnR5KTtcbiAgICB0aGlzLnB1c2goXCJdXCIpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0LmlzTGl0ZXJhbChub2RlLm9iamVjdCkpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLl9MaXRlcmFsKG5vZGUub2JqZWN0KTtcbiAgICAgIGlmIChfaXNJbnRlZ2VyMltcImRlZmF1bHRcIl0oK3ZhbCkgJiYgIVpFUk9fREVDSU1BTF9JTlRFR0VSLnRlc3QodmFsKSAmJiAhU0NJRU5USUZJQ19OT1RBVElPTi50ZXN0KHZhbCkgJiYgIXRoaXMuZW5kc1dpdGgoXCIuXCIpICYmICFOT05fREVDSU1BTF9OVU1FUklDX0xJVEVSQUwudGVzdCh2YWwpKSB7XG4gICAgICAgIHRoaXMucHVzaChcIi5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wdXNoKFwiLlwiKTtcbiAgICBwcmludC5wbGFpbihub2RlLnByb3BlcnR5KTtcbiAgfVxufVxuXG4vKipcbiAqIFByaW50IE1ldGFQcm9wZXJ0eSwgcHJpbnRzIG1ldGEgYW5kIHByb3BlcnR5LlxuICovXG5cbmZ1bmN0aW9uIE1ldGFQcm9wZXJ0eShub2RlLCBwcmludCkge1xuICBwcmludC5wbGFpbihub2RlLm1ldGEpO1xuICB0aGlzLnB1c2goXCIuXCIpO1xuICBwcmludC5wbGFpbihub2RlLnByb3BlcnR5KTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
