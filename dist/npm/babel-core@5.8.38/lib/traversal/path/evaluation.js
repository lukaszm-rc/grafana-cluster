/* */
"format cjs";
/* eslint eqeqeq: 0 */

"use strict";

System.register([], function (_export, _context) {
  var _typeof, VALID_CALLEES;

  /**
   * Walk the input `node` and statically evaluate if it's truthy.
   *
   * Returning `true` when we're sure that the expression will evaluate to a
   * truthy value, `false` if we're sure that it will evaluate to a falsy
   * value and `undefined` if we aren't sure. Because of this please do not
   * rely on coercion when using this method and check with === if it's false.
   *
   * For example do:
   *
   *   if (t.evaluateTruthy(node) === false) falsyLogic();
   *
   * **AND NOT**
   *
   *   if (!t.evaluateTruthy(node)) falsyLogic();
   *
   */

  function evaluateTruthy() {
    var res = this.evaluate();
    if (res.confident) return !!res.value;
  }

  /**
   * Walk the input `node` and statically evaluate it.
   *
   * Returns an object in the form `{ confident, value }`. `confident` indicates
   * whether or not we had to drop out of evaluating the expression because of
   * hitting an unknown node that we couldn't confidently find the value of.
   *
   * Example:
   *
   *   t.evaluate(parse("5 + 5")) // { confident: true, value: 10 }
   *   t.evaluate(parse("!true")) // { confident: true, value: false }
   *   t.evaluate(parse("foo + foo")) // { confident: false, value: undefined }
   *
   */

  function evaluate() {
    var confident = true;

    var value = evaluate(this);
    if (!confident) value = undefined;
    return {
      confident: confident,
      value: value
    };

    function evaluate(path) {
      if (!confident) return;

      var node = path.node;

      if (path.isSequenceExpression()) {
        var exprs = path.get("expressions");
        return evaluate(exprs[exprs.length - 1]);
      }

      if (path.isLiteral()) {
        if (node.regex) {
          // we have a regex and we can't represent it natively
        } else {
            return node.value;
          }
      }

      if (path.isConditionalExpression()) {
        if (evaluate(path.get("test"))) {
          return evaluate(path.get("consequent"));
        } else {
          return evaluate(path.get("alternate"));
        }
      }

      if (path.isTypeCastExpression()) {
        return evaluate(path.get("expression"));
      }

      if (path.isIdentifier() && !path.scope.hasBinding(node.name, true)) {
        if (node.name === "undefined") {
          return undefined;
        } else if (node.name === "Infinity") {
          return Infinity;
        } else if (node.name === "NaN") {
          return NaN;
        }
      }

      // "foo".length
      if (path.isMemberExpression() && !path.parentPath.isCallExpression({ callee: node })) {
        var _property = path.get("property");
        var object = path.get("object");

        if (object.isLiteral() && _property.isIdentifier()) {
          var _value = object.node.value;
          var type = typeof _value === "undefined" ? "undefined" : _typeof(_value);
          if (type === "number" || type === "string") {
            return _value[_property.node.name];
          }
        }
      }

      if (path.isReferencedIdentifier()) {
        var binding = path.scope.getBinding(node.name);
        if (binding && binding.hasValue) {
          return binding.value;
        } else {
          var resolved = path.resolve();
          if (resolved === path) {
            return confident = false;
          } else {
            return evaluate(resolved);
          }
        }
      }

      if (path.isUnaryExpression({ prefix: true })) {
        var argument = path.get("argument");
        var arg = evaluate(argument);
        switch (node.operator) {
          case "void":
            return undefined;
          case "!":
            return !arg;
          case "+":
            return +arg;
          case "-":
            return -arg;
          case "~":
            return ~arg;
          case "typeof":
            if (argument.isFunction()) {
              return "function";
            } else {
              return typeof arg === "undefined" ? "undefined" : _typeof(arg);
            }
        }
      }

      if (path.isArrayExpression() || path.isObjectExpression()) {
        // we could evaluate these but it's probably impractical and not very useful
      }

      if (path.isLogicalExpression()) {
        // If we are confident that one side of an && is false, or one side of
        // an || is true, we can be confident about the entire expression
        var wasConfident = confident;
        var left = evaluate(path.get("left"));
        var leftConfident = confident;
        confident = wasConfident;
        var right = evaluate(path.get("right"));
        var rightConfident = confident;
        var uncertain = leftConfident !== rightConfident;
        confident = leftConfident && rightConfident;

        switch (node.operator) {
          case "||":
            if ((left || right) && uncertain) {
              confident = true;
            }
            return left || right;
          case "&&":
            if (!left && leftConfident || !right && rightConfident) {
              confident = true;
            }
            return left && right;
        }
      }

      if (path.isBinaryExpression()) {
        var left = evaluate(path.get("left"));
        var right = evaluate(path.get("right"));

        switch (node.operator) {
          case "-":
            return left - right;
          case "+":
            return left + right;
          case "/":
            return left / right;
          case "*":
            return left * right;
          case "%":
            return left % right;
          case "**":
            return Math.pow(left, right);
          case "<":
            return left < right;
          case ">":
            return left > right;
          case "<=":
            return left <= right;
          case ">=":
            return left >= right;
          case "==":
            return left == right;
          case "!=":
            return left != right;
          case "===":
            return left === right;
          case "!==":
            return left !== right;
          case "|":
            return left | right;
          case "&":
            return left & right;
          case "^":
            return left ^ right;
          case "<<":
            return left << right;
          case ">>":
            return left >> right;
          case ">>>":
            return left >>> right;
        }
      }

      if (path.isCallExpression()) {
        var callee = path.get("callee");
        var context;
        var func;

        // Number(1);
        if (callee.isIdentifier() && !path.scope.getBinding(callee.node.name, true) && VALID_CALLEES.indexOf(callee.node.name) >= 0) {
          func = global[node.callee.name];
        }

        if (callee.isMemberExpression()) {
          var object = callee.get("object");
          var property = callee.get("property");

          // Math.min(1, 2)
          if (object.isIdentifier() && property.isIdentifier() && VALID_CALLEES.indexOf(object.node.name) >= 0) {
            context = global[object.node.name];
            func = context[property.node.name];
          }

          // "abc".charCodeAt(4)
          if (object.isLiteral() && property.isIdentifier()) {
            var type = _typeof(object.node.value);
            if (type === "string" || type === "number") {
              context = object.node.value;
              func = context[property.node.name];
            }
          }
        }

        if (func) {
          var args = path.get("arguments").map(evaluate);
          if (!confident) return;

          return func.apply(context, args);
        }
      }

      confident = false;
    }
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      exports.__esModule = true;
      exports.evaluateTruthy = evaluateTruthy;
      exports.evaluate = evaluate;
      VALID_CALLEES = ["String", "Number", "Math"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvZXZhbHVhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxXQUFTLGNBQVQsR0FBMEI7QUFDeEIsUUFBSSxNQUFNLEtBQUssUUFBTCxFQUFOLENBRG9CO0FBRXhCLFFBQUksSUFBSSxTQUFKLEVBQWUsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFKLENBQTVCO0dBRkY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLFdBQVMsUUFBVCxHQUFvQjtBQUNsQixRQUFJLFlBQVksSUFBWixDQURjOztBQUdsQixRQUFJLFFBQVEsU0FBUyxJQUFULENBQVIsQ0FIYztBQUlsQixRQUFJLENBQUMsU0FBRCxFQUFZLFFBQVEsU0FBUixDQUFoQjtBQUNBLFdBQU87QUFDTCxpQkFBVyxTQUFYO0FBQ0EsYUFBTyxLQUFQO0tBRkYsQ0FMa0I7O0FBVWxCLGFBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QjtBQUN0QixVQUFJLENBQUMsU0FBRCxFQUFZLE9BQWhCOztBQUVBLFVBQUksT0FBTyxLQUFLLElBQUwsQ0FIVzs7QUFLdEIsVUFBSSxLQUFLLG9CQUFMLEVBQUosRUFBaUM7QUFDL0IsWUFBSSxRQUFRLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBUixDQUQyQjtBQUUvQixlQUFPLFNBQVMsTUFBTSxNQUFNLE1BQU4sR0FBZSxDQUFmLENBQWYsQ0FBUCxDQUYrQjtPQUFqQzs7QUFLQSxVQUFJLEtBQUssU0FBTCxFQUFKLEVBQXNCO0FBQ3BCLFlBQUksS0FBSyxLQUFMLEVBQVk7O1NBQWhCLE1BRU87QUFDSCxtQkFBTyxLQUFLLEtBQUwsQ0FESjtXQUZQO09BREY7O0FBUUEsVUFBSSxLQUFLLHVCQUFMLEVBQUosRUFBb0M7QUFDbEMsWUFBSSxTQUFTLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBVCxDQUFKLEVBQWdDO0FBQzlCLGlCQUFPLFNBQVMsS0FBSyxHQUFMLENBQVMsWUFBVCxDQUFULENBQVAsQ0FEOEI7U0FBaEMsTUFFTztBQUNMLGlCQUFPLFNBQVMsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFULENBQVAsQ0FESztTQUZQO09BREY7O0FBUUEsVUFBSSxLQUFLLG9CQUFMLEVBQUosRUFBaUM7QUFDL0IsZUFBTyxTQUFTLEtBQUssR0FBTCxDQUFTLFlBQVQsQ0FBVCxDQUFQLENBRCtCO09BQWpDOztBQUlBLFVBQUksS0FBSyxZQUFMLE1BQXVCLENBQUMsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixLQUFLLElBQUwsRUFBVyxJQUFqQyxDQUFELEVBQXlDO0FBQ2xFLFlBQUksS0FBSyxJQUFMLEtBQWMsV0FBZCxFQUEyQjtBQUM3QixpQkFBTyxTQUFQLENBRDZCO1NBQS9CLE1BRU8sSUFBSSxLQUFLLElBQUwsS0FBYyxVQUFkLEVBQTBCO0FBQ25DLGlCQUFPLFFBQVAsQ0FEbUM7U0FBOUIsTUFFQSxJQUFJLEtBQUssSUFBTCxLQUFjLEtBQWQsRUFBcUI7QUFDOUIsaUJBQU8sR0FBUCxDQUQ4QjtTQUF6QjtPQUxUOzs7QUE5QnNCLFVBeUNsQixLQUFLLGtCQUFMLE1BQTZCLENBQUMsS0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxFQUFFLFFBQVEsSUFBUixFQUFuQyxDQUFELEVBQXFEO0FBQ3BGLFlBQUksWUFBWSxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQVosQ0FEZ0Y7QUFFcEYsWUFBSSxTQUFTLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBVCxDQUZnRjs7QUFJcEYsWUFBSSxPQUFPLFNBQVAsTUFBc0IsVUFBVSxZQUFWLEVBQXRCLEVBQWdEO0FBQ2xELGNBQUksU0FBUyxPQUFPLElBQVAsQ0FBWSxLQUFaLENBRHFDO0FBRWxELGNBQUksY0FBYyxzREFBZCxDQUY4QztBQUdsRCxjQUFJLFNBQVMsUUFBVCxJQUFxQixTQUFTLFFBQVQsRUFBbUI7QUFDMUMsbUJBQU8sT0FBTyxVQUFVLElBQVYsQ0FBZSxJQUFmLENBQWQsQ0FEMEM7V0FBNUM7U0FIRjtPQUpGOztBQWFBLFVBQUksS0FBSyxzQkFBTCxFQUFKLEVBQW1DO0FBQ2pDLFlBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEtBQUssSUFBTCxDQUFoQyxDQUQ2QjtBQUVqQyxZQUFJLFdBQVcsUUFBUSxRQUFSLEVBQWtCO0FBQy9CLGlCQUFPLFFBQVEsS0FBUixDQUR3QjtTQUFqQyxNQUVPO0FBQ0wsY0FBSSxXQUFXLEtBQUssT0FBTCxFQUFYLENBREM7QUFFTCxjQUFJLGFBQWEsSUFBYixFQUFtQjtBQUNyQixtQkFBTyxZQUFZLEtBQVosQ0FEYztXQUF2QixNQUVPO0FBQ0wsbUJBQU8sU0FBUyxRQUFULENBQVAsQ0FESztXQUZQO1NBSkY7T0FGRjs7QUFjQSxVQUFJLEtBQUssaUJBQUwsQ0FBdUIsRUFBRSxRQUFRLElBQVIsRUFBekIsQ0FBSixFQUE4QztBQUM1QyxZQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFYLENBRHdDO0FBRTVDLFlBQUksTUFBTSxTQUFTLFFBQVQsQ0FBTixDQUZ3QztBQUc1QyxnQkFBUSxLQUFLLFFBQUw7QUFDTixlQUFLLE1BQUw7QUFDRSxtQkFBTyxTQUFQLENBREY7QUFERixlQUdPLEdBQUw7QUFDRSxtQkFBTyxDQUFDLEdBQUQsQ0FEVDtBQUhGLGVBS08sR0FBTDtBQUNFLG1CQUFPLENBQUMsR0FBRCxDQURUO0FBTEYsZUFPTyxHQUFMO0FBQ0UsbUJBQU8sQ0FBQyxHQUFELENBRFQ7QUFQRixlQVNPLEdBQUw7QUFDRSxtQkFBTyxDQUFDLEdBQUQsQ0FEVDtBQVRGLGVBV08sUUFBTDtBQUNFLGdCQUFJLFNBQVMsVUFBVCxFQUFKLEVBQTJCO0FBQ3pCLHFCQUFPLFVBQVAsQ0FEeUI7YUFBM0IsTUFFTztBQUNMLDRCQUFjLGdEQUFkLENBREs7YUFGUDtBQVpKLFNBSDRDO09BQTlDOztBQXVCQSxVQUFJLEtBQUssaUJBQUwsTUFBNEIsS0FBSyxrQkFBTCxFQUE1QixFQUF1RDs7T0FBM0Q7O0FBSUEsVUFBSSxLQUFLLG1CQUFMLEVBQUosRUFBZ0M7OztBQUc5QixZQUFJLGVBQWUsU0FBZixDQUgwQjtBQUk5QixZQUFJLE9BQU8sU0FBUyxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQVQsQ0FBUCxDQUowQjtBQUs5QixZQUFJLGdCQUFnQixTQUFoQixDQUwwQjtBQU05QixvQkFBWSxZQUFaLENBTjhCO0FBTzlCLFlBQUksUUFBUSxTQUFTLEtBQUssR0FBTCxDQUFTLE9BQVQsQ0FBVCxDQUFSLENBUDBCO0FBUTlCLFlBQUksaUJBQWlCLFNBQWpCLENBUjBCO0FBUzlCLFlBQUksWUFBWSxrQkFBa0IsY0FBbEIsQ0FUYztBQVU5QixvQkFBWSxpQkFBaUIsY0FBakIsQ0FWa0I7O0FBWTlCLGdCQUFRLEtBQUssUUFBTDtBQUNOLGVBQUssSUFBTDtBQUNFLGdCQUFJLENBQUMsUUFBUSxLQUFSLENBQUQsSUFBbUIsU0FBbkIsRUFBOEI7QUFDaEMsMEJBQVksSUFBWixDQURnQzthQUFsQztBQUdBLG1CQUFPLFFBQVEsS0FBUixDQUpUO0FBREYsZUFNTyxJQUFMO0FBQ0UsZ0JBQUksQ0FBQyxJQUFELElBQVMsYUFBVCxJQUEwQixDQUFDLEtBQUQsSUFBVSxjQUFWLEVBQTBCO0FBQ3RELDBCQUFZLElBQVosQ0FEc0Q7YUFBeEQ7QUFHQSxtQkFBTyxRQUFRLEtBQVIsQ0FKVDtBQU5GLFNBWjhCO09BQWhDOztBQTBCQSxVQUFJLEtBQUssa0JBQUwsRUFBSixFQUErQjtBQUM3QixZQUFJLE9BQU8sU0FBUyxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQVQsQ0FBUCxDQUR5QjtBQUU3QixZQUFJLFFBQVEsU0FBUyxLQUFLLEdBQUwsQ0FBUyxPQUFULENBQVQsQ0FBUixDQUZ5Qjs7QUFJN0IsZ0JBQVEsS0FBSyxRQUFMO0FBQ04sZUFBSyxHQUFMO0FBQ0UsbUJBQU8sT0FBTyxLQUFQLENBRFQ7QUFERixlQUdPLEdBQUw7QUFDRSxtQkFBTyxPQUFPLEtBQVAsQ0FEVDtBQUhGLGVBS08sR0FBTDtBQUNFLG1CQUFPLE9BQU8sS0FBUCxDQURUO0FBTEYsZUFPTyxHQUFMO0FBQ0UsbUJBQU8sT0FBTyxLQUFQLENBRFQ7QUFQRixlQVNPLEdBQUw7QUFDRSxtQkFBTyxPQUFPLEtBQVAsQ0FEVDtBQVRGLGVBV08sSUFBTDtBQUNFLG1CQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxLQUFmLENBQVAsQ0FERjtBQVhGLGVBYU8sR0FBTDtBQUNFLG1CQUFPLE9BQU8sS0FBUCxDQURUO0FBYkYsZUFlTyxHQUFMO0FBQ0UsbUJBQU8sT0FBTyxLQUFQLENBRFQ7QUFmRixlQWlCTyxJQUFMO0FBQ0UsbUJBQU8sUUFBUSxLQUFSLENBRFQ7QUFqQkYsZUFtQk8sSUFBTDtBQUNFLG1CQUFPLFFBQVEsS0FBUixDQURUO0FBbkJGLGVBcUJPLElBQUw7QUFDRSxtQkFBTyxRQUFRLEtBQVIsQ0FEVDtBQXJCRixlQXVCTyxJQUFMO0FBQ0UsbUJBQU8sUUFBUSxLQUFSLENBRFQ7QUF2QkYsZUF5Qk8sS0FBTDtBQUNFLG1CQUFPLFNBQVMsS0FBVCxDQURUO0FBekJGLGVBMkJPLEtBQUw7QUFDRSxtQkFBTyxTQUFTLEtBQVQsQ0FEVDtBQTNCRixlQTZCTyxHQUFMO0FBQ0UsbUJBQU8sT0FBTyxLQUFQLENBRFQ7QUE3QkYsZUErQk8sR0FBTDtBQUNFLG1CQUFPLE9BQU8sS0FBUCxDQURUO0FBL0JGLGVBaUNPLEdBQUw7QUFDRSxtQkFBTyxPQUFPLEtBQVAsQ0FEVDtBQWpDRixlQW1DTyxJQUFMO0FBQ0UsbUJBQU8sUUFBUSxLQUFSLENBRFQ7QUFuQ0YsZUFxQ08sSUFBTDtBQUNFLG1CQUFPLFFBQVEsS0FBUixDQURUO0FBckNGLGVBdUNPLEtBQUw7QUFDRSxtQkFBTyxTQUFTLEtBQVQsQ0FEVDtBQXZDRixTQUo2QjtPQUEvQjs7QUFnREEsVUFBSSxLQUFLLGdCQUFMLEVBQUosRUFBNkI7QUFDM0IsWUFBSSxTQUFTLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBVCxDQUR1QjtBQUUzQixZQUFJLE9BQUosQ0FGMkI7QUFHM0IsWUFBSSxJQUFKOzs7QUFIMkIsWUFNdkIsT0FBTyxZQUFQLE1BQXlCLENBQUMsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixPQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLElBQXhDLENBQUQsSUFBa0QsY0FBYyxPQUFkLENBQXNCLE9BQU8sSUFBUCxDQUFZLElBQVosQ0FBdEIsSUFBMkMsQ0FBM0MsRUFBOEM7QUFDM0gsaUJBQU8sT0FBTyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWQsQ0FEMkg7U0FBN0g7O0FBSUEsWUFBSSxPQUFPLGtCQUFQLEVBQUosRUFBaUM7QUFDL0IsY0FBSSxTQUFTLE9BQU8sR0FBUCxDQUFXLFFBQVgsQ0FBVCxDQUQyQjtBQUUvQixjQUFJLFdBQVcsT0FBTyxHQUFQLENBQVcsVUFBWCxDQUFYOzs7QUFGMkIsY0FLM0IsT0FBTyxZQUFQLE1BQXlCLFNBQVMsWUFBVCxFQUF6QixJQUFvRCxjQUFjLE9BQWQsQ0FBc0IsT0FBTyxJQUFQLENBQVksSUFBWixDQUF0QixJQUEyQyxDQUEzQyxFQUE4QztBQUNwRyxzQkFBVSxPQUFPLE9BQU8sSUFBUCxDQUFZLElBQVosQ0FBakIsQ0FEb0c7QUFFcEcsbUJBQU8sUUFBUSxTQUFTLElBQVQsQ0FBYyxJQUFkLENBQWYsQ0FGb0c7V0FBdEc7OztBQUwrQixjQVczQixPQUFPLFNBQVAsTUFBc0IsU0FBUyxZQUFULEVBQXRCLEVBQStDO0FBQ2pELGdCQUFJLGVBQWMsT0FBTyxJQUFQLENBQVksS0FBWixDQUFkLENBRDZDO0FBRWpELGdCQUFJLFNBQVMsUUFBVCxJQUFxQixTQUFTLFFBQVQsRUFBbUI7QUFDMUMsd0JBQVUsT0FBTyxJQUFQLENBQVksS0FBWixDQURnQztBQUUxQyxxQkFBTyxRQUFRLFNBQVMsSUFBVCxDQUFjLElBQWQsQ0FBZixDQUYwQzthQUE1QztXQUZGO1NBWEY7O0FBb0JBLFlBQUksSUFBSixFQUFVO0FBQ1IsY0FBSSxPQUFPLEtBQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsR0FBdEIsQ0FBMEIsUUFBMUIsQ0FBUCxDQURJO0FBRVIsY0FBSSxDQUFDLFNBQUQsRUFBWSxPQUFoQjs7QUFFQSxpQkFBTyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCLENBQVAsQ0FKUTtTQUFWO09BOUJGOztBQXNDQSxrQkFBWSxLQUFaLENBL01zQjtLQUF4QjtHQVZGOzs7Ozs7Ozs7QUEzQ0EsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxjQUFSLEdBQXlCLGNBQXpCO0FBQ0EsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0ksc0JBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsTUFBckIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmF2ZXJzYWwvcGF0aC9ldmFsdWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcbi8qIGVzbGludCBlcWVxZXE6IDAgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmV2YWx1YXRlVHJ1dGh5ID0gZXZhbHVhdGVUcnV0aHk7XG5leHBvcnRzLmV2YWx1YXRlID0gZXZhbHVhdGU7XG52YXIgVkFMSURfQ0FMTEVFUyA9IFtcIlN0cmluZ1wiLCBcIk51bWJlclwiLCBcIk1hdGhcIl07XG5cbi8qKlxuICogV2FsayB0aGUgaW5wdXQgYG5vZGVgIGFuZCBzdGF0aWNhbGx5IGV2YWx1YXRlIGlmIGl0J3MgdHJ1dGh5LlxuICpcbiAqIFJldHVybmluZyBgdHJ1ZWAgd2hlbiB3ZSdyZSBzdXJlIHRoYXQgdGhlIGV4cHJlc3Npb24gd2lsbCBldmFsdWF0ZSB0byBhXG4gKiB0cnV0aHkgdmFsdWUsIGBmYWxzZWAgaWYgd2UncmUgc3VyZSB0aGF0IGl0IHdpbGwgZXZhbHVhdGUgdG8gYSBmYWxzeVxuICogdmFsdWUgYW5kIGB1bmRlZmluZWRgIGlmIHdlIGFyZW4ndCBzdXJlLiBCZWNhdXNlIG9mIHRoaXMgcGxlYXNlIGRvIG5vdFxuICogcmVseSBvbiBjb2VyY2lvbiB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kIGFuZCBjaGVjayB3aXRoID09PSBpZiBpdCdzIGZhbHNlLlxuICpcbiAqIEZvciBleGFtcGxlIGRvOlxuICpcbiAqICAgaWYgKHQuZXZhbHVhdGVUcnV0aHkobm9kZSkgPT09IGZhbHNlKSBmYWxzeUxvZ2ljKCk7XG4gKlxuICogKipBTkQgTk9UKipcbiAqXG4gKiAgIGlmICghdC5ldmFsdWF0ZVRydXRoeShub2RlKSkgZmFsc3lMb2dpYygpO1xuICpcbiAqL1xuXG5mdW5jdGlvbiBldmFsdWF0ZVRydXRoeSgpIHtcbiAgdmFyIHJlcyA9IHRoaXMuZXZhbHVhdGUoKTtcbiAgaWYgKHJlcy5jb25maWRlbnQpIHJldHVybiAhIXJlcy52YWx1ZTtcbn1cblxuLyoqXG4gKiBXYWxrIHRoZSBpbnB1dCBgbm9kZWAgYW5kIHN0YXRpY2FsbHkgZXZhbHVhdGUgaXQuXG4gKlxuICogUmV0dXJucyBhbiBvYmplY3QgaW4gdGhlIGZvcm0gYHsgY29uZmlkZW50LCB2YWx1ZSB9YC4gYGNvbmZpZGVudGAgaW5kaWNhdGVzXG4gKiB3aGV0aGVyIG9yIG5vdCB3ZSBoYWQgdG8gZHJvcCBvdXQgb2YgZXZhbHVhdGluZyB0aGUgZXhwcmVzc2lvbiBiZWNhdXNlIG9mXG4gKiBoaXR0aW5nIGFuIHVua25vd24gbm9kZSB0aGF0IHdlIGNvdWxkbid0IGNvbmZpZGVudGx5IGZpbmQgdGhlIHZhbHVlIG9mLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICB0LmV2YWx1YXRlKHBhcnNlKFwiNSArIDVcIikpIC8vIHsgY29uZmlkZW50OiB0cnVlLCB2YWx1ZTogMTAgfVxuICogICB0LmV2YWx1YXRlKHBhcnNlKFwiIXRydWVcIikpIC8vIHsgY29uZmlkZW50OiB0cnVlLCB2YWx1ZTogZmFsc2UgfVxuICogICB0LmV2YWx1YXRlKHBhcnNlKFwiZm9vICsgZm9vXCIpKSAvLyB7IGNvbmZpZGVudDogZmFsc2UsIHZhbHVlOiB1bmRlZmluZWQgfVxuICpcbiAqL1xuXG5mdW5jdGlvbiBldmFsdWF0ZSgpIHtcbiAgdmFyIGNvbmZpZGVudCA9IHRydWU7XG5cbiAgdmFyIHZhbHVlID0gZXZhbHVhdGUodGhpcyk7XG4gIGlmICghY29uZmlkZW50KSB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHtcbiAgICBjb25maWRlbnQ6IGNvbmZpZGVudCxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcblxuICBmdW5jdGlvbiBldmFsdWF0ZShwYXRoKSB7XG4gICAgaWYgKCFjb25maWRlbnQpIHJldHVybjtcblxuICAgIHZhciBub2RlID0gcGF0aC5ub2RlO1xuXG4gICAgaWYgKHBhdGguaXNTZXF1ZW5jZUV4cHJlc3Npb24oKSkge1xuICAgICAgdmFyIGV4cHJzID0gcGF0aC5nZXQoXCJleHByZXNzaW9uc1wiKTtcbiAgICAgIHJldHVybiBldmFsdWF0ZShleHByc1tleHBycy5sZW5ndGggLSAxXSk7XG4gICAgfVxuXG4gICAgaWYgKHBhdGguaXNMaXRlcmFsKCkpIHtcbiAgICAgIGlmIChub2RlLnJlZ2V4KSB7XG4gICAgICAgIC8vIHdlIGhhdmUgYSByZWdleCBhbmQgd2UgY2FuJ3QgcmVwcmVzZW50IGl0IG5hdGl2ZWx5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhdGguaXNDb25kaXRpb25hbEV4cHJlc3Npb24oKSkge1xuICAgICAgaWYgKGV2YWx1YXRlKHBhdGguZ2V0KFwidGVzdFwiKSkpIHtcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRlKHBhdGguZ2V0KFwiY29uc2VxdWVudFwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXZhbHVhdGUocGF0aC5nZXQoXCJhbHRlcm5hdGVcIikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXRoLmlzVHlwZUNhc3RFeHByZXNzaW9uKCkpIHtcbiAgICAgIHJldHVybiBldmFsdWF0ZShwYXRoLmdldChcImV4cHJlc3Npb25cIikpO1xuICAgIH1cblxuICAgIGlmIChwYXRoLmlzSWRlbnRpZmllcigpICYmICFwYXRoLnNjb3BlLmhhc0JpbmRpbmcobm9kZS5uYW1lLCB0cnVlKSkge1xuICAgICAgaWYgKG5vZGUubmFtZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChub2RlLm5hbWUgPT09IFwiSW5maW5pdHlcIikge1xuICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubmFtZSA9PT0gXCJOYU5cIikge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFwiZm9vXCIubGVuZ3RoXG4gICAgaWYgKHBhdGguaXNNZW1iZXJFeHByZXNzaW9uKCkgJiYgIXBhdGgucGFyZW50UGF0aC5pc0NhbGxFeHByZXNzaW9uKHsgY2FsbGVlOiBub2RlIH0pKSB7XG4gICAgICB2YXIgX3Byb3BlcnR5ID0gcGF0aC5nZXQoXCJwcm9wZXJ0eVwiKTtcbiAgICAgIHZhciBvYmplY3QgPSBwYXRoLmdldChcIm9iamVjdFwiKTtcblxuICAgICAgaWYgKG9iamVjdC5pc0xpdGVyYWwoKSAmJiBfcHJvcGVydHkuaXNJZGVudGlmaWVyKCkpIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IG9iamVjdC5ub2RlLnZhbHVlO1xuICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBfdmFsdWU7XG4gICAgICAgIGlmICh0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gX3ZhbHVlW19wcm9wZXJ0eS5ub2RlLm5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhdGguaXNSZWZlcmVuY2VkSWRlbnRpZmllcigpKSB7XG4gICAgICB2YXIgYmluZGluZyA9IHBhdGguc2NvcGUuZ2V0QmluZGluZyhub2RlLm5hbWUpO1xuICAgICAgaWYgKGJpbmRpbmcgJiYgYmluZGluZy5oYXNWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBhdGgucmVzb2x2ZSgpO1xuICAgICAgICBpZiAocmVzb2x2ZWQgPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gY29uZmlkZW50ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlKHJlc29sdmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXRoLmlzVW5hcnlFeHByZXNzaW9uKHsgcHJlZml4OiB0cnVlIH0pKSB7XG4gICAgICB2YXIgYXJndW1lbnQgPSBwYXRoLmdldChcImFyZ3VtZW50XCIpO1xuICAgICAgdmFyIGFyZyA9IGV2YWx1YXRlKGFyZ3VtZW50KTtcbiAgICAgIHN3aXRjaCAobm9kZS5vcGVyYXRvcikge1xuICAgICAgICBjYXNlIFwidm9pZFwiOlxuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGNhc2UgXCIhXCI6XG4gICAgICAgICAgcmV0dXJuICFhcmc7XG4gICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgcmV0dXJuICthcmc7XG4gICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgcmV0dXJuIC1hcmc7XG4gICAgICAgIGNhc2UgXCJ+XCI6XG4gICAgICAgICAgcmV0dXJuIH5hcmc7XG4gICAgICAgIGNhc2UgXCJ0eXBlb2ZcIjpcbiAgICAgICAgICBpZiAoYXJndW1lbnQuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhdGguaXNBcnJheUV4cHJlc3Npb24oKSB8fCBwYXRoLmlzT2JqZWN0RXhwcmVzc2lvbigpKSB7XG4gICAgICAvLyB3ZSBjb3VsZCBldmFsdWF0ZSB0aGVzZSBidXQgaXQncyBwcm9iYWJseSBpbXByYWN0aWNhbCBhbmQgbm90IHZlcnkgdXNlZnVsXG4gICAgfVxuXG4gICAgaWYgKHBhdGguaXNMb2dpY2FsRXhwcmVzc2lvbigpKSB7XG4gICAgICAvLyBJZiB3ZSBhcmUgY29uZmlkZW50IHRoYXQgb25lIHNpZGUgb2YgYW4gJiYgaXMgZmFsc2UsIG9yIG9uZSBzaWRlIG9mXG4gICAgICAvLyBhbiB8fCBpcyB0cnVlLCB3ZSBjYW4gYmUgY29uZmlkZW50IGFib3V0IHRoZSBlbnRpcmUgZXhwcmVzc2lvblxuICAgICAgdmFyIHdhc0NvbmZpZGVudCA9IGNvbmZpZGVudDtcbiAgICAgIHZhciBsZWZ0ID0gZXZhbHVhdGUocGF0aC5nZXQoXCJsZWZ0XCIpKTtcbiAgICAgIHZhciBsZWZ0Q29uZmlkZW50ID0gY29uZmlkZW50O1xuICAgICAgY29uZmlkZW50ID0gd2FzQ29uZmlkZW50O1xuICAgICAgdmFyIHJpZ2h0ID0gZXZhbHVhdGUocGF0aC5nZXQoXCJyaWdodFwiKSk7XG4gICAgICB2YXIgcmlnaHRDb25maWRlbnQgPSBjb25maWRlbnQ7XG4gICAgICB2YXIgdW5jZXJ0YWluID0gbGVmdENvbmZpZGVudCAhPT0gcmlnaHRDb25maWRlbnQ7XG4gICAgICBjb25maWRlbnQgPSBsZWZ0Q29uZmlkZW50ICYmIHJpZ2h0Q29uZmlkZW50O1xuXG4gICAgICBzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBcInx8XCI6XG4gICAgICAgICAgaWYgKChsZWZ0IHx8IHJpZ2h0KSAmJiB1bmNlcnRhaW4pIHtcbiAgICAgICAgICAgIGNvbmZpZGVudCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsZWZ0IHx8IHJpZ2h0O1xuICAgICAgICBjYXNlIFwiJiZcIjpcbiAgICAgICAgICBpZiAoIWxlZnQgJiYgbGVmdENvbmZpZGVudCB8fCAhcmlnaHQgJiYgcmlnaHRDb25maWRlbnQpIHtcbiAgICAgICAgICAgIGNvbmZpZGVudCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsZWZ0ICYmIHJpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXRoLmlzQmluYXJ5RXhwcmVzc2lvbigpKSB7XG4gICAgICB2YXIgbGVmdCA9IGV2YWx1YXRlKHBhdGguZ2V0KFwibGVmdFwiKSk7XG4gICAgICB2YXIgcmlnaHQgPSBldmFsdWF0ZShwYXRoLmdldChcInJpZ2h0XCIpKTtcblxuICAgICAgc3dpdGNoIChub2RlLm9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgcmV0dXJuIGxlZnQgLSByaWdodDtcbiAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICByZXR1cm4gbGVmdCArIHJpZ2h0O1xuICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHQ7XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodDtcbiAgICAgICAgY2FzZSBcIiVcIjpcbiAgICAgICAgICByZXR1cm4gbGVmdCAlIHJpZ2h0O1xuICAgICAgICBjYXNlIFwiKipcIjpcbiAgICAgICAgICByZXR1cm4gTWF0aC5wb3cobGVmdCwgcmlnaHQpO1xuICAgICAgICBjYXNlIFwiPFwiOlxuICAgICAgICAgIHJldHVybiBsZWZ0IDwgcmlnaHQ7XG4gICAgICAgIGNhc2UgXCI+XCI6XG4gICAgICAgICAgcmV0dXJuIGxlZnQgPiByaWdodDtcbiAgICAgICAgY2FzZSBcIjw9XCI6XG4gICAgICAgICAgcmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG4gICAgICAgIGNhc2UgXCI+PVwiOlxuICAgICAgICAgIHJldHVybiBsZWZ0ID49IHJpZ2h0O1xuICAgICAgICBjYXNlIFwiPT1cIjpcbiAgICAgICAgICByZXR1cm4gbGVmdCA9PSByaWdodDtcbiAgICAgICAgY2FzZSBcIiE9XCI6XG4gICAgICAgICAgcmV0dXJuIGxlZnQgIT0gcmlnaHQ7XG4gICAgICAgIGNhc2UgXCI9PT1cIjpcbiAgICAgICAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG4gICAgICAgIGNhc2UgXCIhPT1cIjpcbiAgICAgICAgICByZXR1cm4gbGVmdCAhPT0gcmlnaHQ7XG4gICAgICAgIGNhc2UgXCJ8XCI6XG4gICAgICAgICAgcmV0dXJuIGxlZnQgfCByaWdodDtcbiAgICAgICAgY2FzZSBcIiZcIjpcbiAgICAgICAgICByZXR1cm4gbGVmdCAmIHJpZ2h0O1xuICAgICAgICBjYXNlIFwiXlwiOlxuICAgICAgICAgIHJldHVybiBsZWZ0IF4gcmlnaHQ7XG4gICAgICAgIGNhc2UgXCI8PFwiOlxuICAgICAgICAgIHJldHVybiBsZWZ0IDw8IHJpZ2h0O1xuICAgICAgICBjYXNlIFwiPj5cIjpcbiAgICAgICAgICByZXR1cm4gbGVmdCA+PiByaWdodDtcbiAgICAgICAgY2FzZSBcIj4+PlwiOlxuICAgICAgICAgIHJldHVybiBsZWZ0ID4+PiByaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGF0aC5pc0NhbGxFeHByZXNzaW9uKCkpIHtcbiAgICAgIHZhciBjYWxsZWUgPSBwYXRoLmdldChcImNhbGxlZVwiKTtcbiAgICAgIHZhciBjb250ZXh0O1xuICAgICAgdmFyIGZ1bmM7XG5cbiAgICAgIC8vIE51bWJlcigxKTtcbiAgICAgIGlmIChjYWxsZWUuaXNJZGVudGlmaWVyKCkgJiYgIXBhdGguc2NvcGUuZ2V0QmluZGluZyhjYWxsZWUubm9kZS5uYW1lLCB0cnVlKSAmJiBWQUxJRF9DQUxMRUVTLmluZGV4T2YoY2FsbGVlLm5vZGUubmFtZSkgPj0gMCkge1xuICAgICAgICBmdW5jID0gZ2xvYmFsW25vZGUuY2FsbGVlLm5hbWVdO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGVlLmlzTWVtYmVyRXhwcmVzc2lvbigpKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSBjYWxsZWUuZ2V0KFwib2JqZWN0XCIpO1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBjYWxsZWUuZ2V0KFwicHJvcGVydHlcIik7XG5cbiAgICAgICAgLy8gTWF0aC5taW4oMSwgMilcbiAgICAgICAgaWYgKG9iamVjdC5pc0lkZW50aWZpZXIoKSAmJiBwcm9wZXJ0eS5pc0lkZW50aWZpZXIoKSAmJiBWQUxJRF9DQUxMRUVTLmluZGV4T2Yob2JqZWN0Lm5vZGUubmFtZSkgPj0gMCkge1xuICAgICAgICAgIGNvbnRleHQgPSBnbG9iYWxbb2JqZWN0Lm5vZGUubmFtZV07XG4gICAgICAgICAgZnVuYyA9IGNvbnRleHRbcHJvcGVydHkubm9kZS5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFwiYWJjXCIuY2hhckNvZGVBdCg0KVxuICAgICAgICBpZiAob2JqZWN0LmlzTGl0ZXJhbCgpICYmIHByb3BlcnR5LmlzSWRlbnRpZmllcigpKSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqZWN0Lm5vZGUudmFsdWU7XG4gICAgICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgY29udGV4dCA9IG9iamVjdC5ub2RlLnZhbHVlO1xuICAgICAgICAgICAgZnVuYyA9IGNvbnRleHRbcHJvcGVydHkubm9kZS5uYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBwYXRoLmdldChcImFyZ3VtZW50c1wiKS5tYXAoZXZhbHVhdGUpO1xuICAgICAgICBpZiAoIWNvbmZpZGVudCkgcmV0dXJuO1xuXG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZGVudCA9IGZhbHNlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
