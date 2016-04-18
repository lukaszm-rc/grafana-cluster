/* */
"format cjs";
// this file contains hooks that handle ancestry cleanup of parent nodes when removing children

"use strict";

System.register([], function (_export, _context) {
  var _types, t, pre, post;

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
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      pre = [

      /**
       * [Please add a description.]
       */

      function (self) {
        if (self.key === "body" && (self.isBlockStatement() || self.isClassBody())) {
          // function () NODE
          // class NODE
          // attempting to remove a block statement that's someones body so let's just clear all the inner
          // statements instead
          self.node.body = [];
          return true;
        }
      },

      /**
       * [Please add a description.]
       */

      function (self, parent) {
        var replace = false;

        // () => NODE;
        // removing the body of an arrow function
        replace = replace || self.key === "body" && parent.isArrowFunctionExpression();

        // throw NODE;
        // removing a throw statement argument
        replace = replace || self.key === "argument" && parent.isThrowStatement();

        if (replace) {
          self.replaceWith(t.identifier("undefined"));
          return true;
        }
      }];


      exports.pre = pre;
      /**
       * Post hooks should be used for cleaning up parents
       */

      post = [

      /**
       * [Please add a description.]
       */

      function (self, parent) {
        var removeParent = false;

        // while (NODE);
        // removing the test of a while/switch, we can either just remove it entirely *or* turn the `test` into `true`
        // unlikely that the latter will ever be what's wanted so we just remove the loop to avoid infinite recursion
        removeParent = removeParent || self.key === "test" && (parent.isWhile() || parent.isSwitchCase());

        // export NODE;
        // just remove a declaration for an export as this is no longer valid
        removeParent = removeParent || self.key === "declaration" && parent.isExportDeclaration();

        // label: NODE
        // stray labeled statement with no body
        removeParent = removeParent || self.key === "body" && parent.isLabeledStatement();

        // var NODE;
        // remove an entire declaration if there are no declarators left
        removeParent = removeParent || self.listKey === "declarations" && parent.isVariableDeclaration() && parent.node.declarations.length === 0;

        // NODE;
        // remove the entire expression statement if there's no expression
        removeParent = removeParent || self.key === "expression" && parent.isExpressionStatement();

        // if (NODE);
        // remove the entire if since the consequent is never going to be hit, if there's an alternate then it's already been
        // handled with the `pre` hook
        removeParent = removeParent || self.key === "test" && parent.isIfStatement();

        if (removeParent) {
          parent.dangerouslyRemove();
          return true;
        }
      },

      /**
       * [Please add a description.]
       */

      function (self, parent) {
        if (parent.isSequenceExpression() && parent.node.expressions.length === 1) {
          // (node, NODE);
          // we've just removed the second element of a sequence expression so let's turn that sequence
          // expression into a regular expression
          parent.replaceWith(parent.node.expressions[0]);
          return true;
        }
      },

      /**
       * [Please add a description.]
       */

      function (self, parent) {
        if (parent.isBinary()) {
          // left + NODE;
          // NODE + right;
          // we're in a binary expression, better remove it and replace it with the last expression
          if (self.key === "left") {
            parent.replaceWith(parent.node.right);
          } else {
            // key === "right"
            parent.replaceWith(parent.node.left);
          }
          return true;
        }
      }];

      exports.post = post;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvbGliL3JlbW92YWwtaG9va3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7QUFHQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFNSixZQUFNOzs7Ozs7QUFNVixnQkFBVSxJQUFWLEVBQWdCO0FBQ2QsWUFBSSxLQUFLLEdBQUwsS0FBYSxNQUFiLEtBQXdCLEtBQUssZ0JBQUwsTUFBMkIsS0FBSyxXQUFMLEVBQTNCLENBQXhCLEVBQXdFOzs7OztBQUsxRSxlQUFLLElBQUwsQ0FBVSxJQUFWLEdBQWlCLEVBQWpCLENBTDBFO0FBTTFFLGlCQUFPLElBQVAsQ0FOMEU7U0FBNUU7T0FERjs7Ozs7O0FBZUEsZ0JBQVUsSUFBVixFQUFnQixNQUFoQixFQUF3QjtBQUN0QixZQUFJLFVBQVUsS0FBVjs7OztBQURrQixlQUt0QixHQUFVLFdBQVcsS0FBSyxHQUFMLEtBQWEsTUFBYixJQUF1QixPQUFPLHlCQUFQLEVBQXZCOzs7O0FBTEMsZUFTdEIsR0FBVSxXQUFXLEtBQUssR0FBTCxLQUFhLFVBQWIsSUFBMkIsT0FBTyxnQkFBUCxFQUEzQixDQVRDOztBQVd0QixZQUFJLE9BQUosRUFBYTtBQUNYLGVBQUssV0FBTCxDQUFpQixFQUFFLFVBQUYsQ0FBYSxXQUFiLENBQWpCLEVBRFc7QUFFWCxpQkFBTyxJQUFQLENBRlc7U0FBYjtPQVhGOzs7QUFpQkEsY0FBUSxHQUFSLEdBQWMsR0FBZDs7Ozs7QUFLSSxhQUFPOzs7Ozs7QUFNWCxnQkFBVSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCO0FBQ3RCLFlBQUksZUFBZSxLQUFmOzs7OztBQURrQixvQkFNdEIsR0FBZSxnQkFBZ0IsS0FBSyxHQUFMLEtBQWEsTUFBYixLQUF3QixPQUFPLE9BQVAsTUFBb0IsT0FBTyxZQUFQLEVBQXBCLENBQXhCOzs7O0FBTlQsb0JBVXRCLEdBQWUsZ0JBQWdCLEtBQUssR0FBTCxLQUFhLGFBQWIsSUFBOEIsT0FBTyxtQkFBUCxFQUE5Qjs7OztBQVZULG9CQWN0QixHQUFlLGdCQUFnQixLQUFLLEdBQUwsS0FBYSxNQUFiLElBQXVCLE9BQU8sa0JBQVAsRUFBdkI7Ozs7QUFkVCxvQkFrQnRCLEdBQWUsZ0JBQWdCLEtBQUssT0FBTCxLQUFpQixjQUFqQixJQUFtQyxPQUFPLHFCQUFQLEVBQW5DLElBQXFFLE9BQU8sSUFBUCxDQUFZLFlBQVosQ0FBeUIsTUFBekIsS0FBb0MsQ0FBcEM7Ozs7QUFsQjlFLG9CQXNCdEIsR0FBZSxnQkFBZ0IsS0FBSyxHQUFMLEtBQWEsWUFBYixJQUE2QixPQUFPLHFCQUFQLEVBQTdCOzs7OztBQXRCVCxvQkEyQnRCLEdBQWUsZ0JBQWdCLEtBQUssR0FBTCxLQUFhLE1BQWIsSUFBdUIsT0FBTyxhQUFQLEVBQXZCLENBM0JUOztBQTZCdEIsWUFBSSxZQUFKLEVBQWtCO0FBQ2hCLGlCQUFPLGlCQUFQLEdBRGdCO0FBRWhCLGlCQUFPLElBQVAsQ0FGZ0I7U0FBbEI7T0E3QkY7Ozs7OztBQXVDQSxnQkFBVSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCO0FBQ3RCLFlBQUksT0FBTyxvQkFBUCxNQUFpQyxPQUFPLElBQVAsQ0FBWSxXQUFaLENBQXdCLE1BQXhCLEtBQW1DLENBQW5DLEVBQXNDOzs7O0FBSXpFLGlCQUFPLFdBQVAsQ0FBbUIsT0FBTyxJQUFQLENBQVksV0FBWixDQUF3QixDQUF4QixDQUFuQixFQUp5RTtBQUt6RSxpQkFBTyxJQUFQLENBTHlFO1NBQTNFO09BREY7Ozs7OztBQWNBLGdCQUFVLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0I7QUFDdEIsWUFBSSxPQUFPLFFBQVAsRUFBSixFQUF1Qjs7OztBQUlyQixjQUFJLEtBQUssR0FBTCxLQUFhLE1BQWIsRUFBcUI7QUFDdkIsbUJBQU8sV0FBUCxDQUFtQixPQUFPLElBQVAsQ0FBWSxLQUFaLENBQW5CLENBRHVCO1dBQXpCLE1BRU87O0FBRUwsbUJBQU8sV0FBUCxDQUFtQixPQUFPLElBQVAsQ0FBWSxJQUFaLENBQW5CLENBRks7V0FGUDtBQU1BLGlCQUFPLElBQVAsQ0FWcUI7U0FBdkI7T0FERjs7QUFjQSxjQUFRLElBQVIsR0FBZSxJQUFmIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvbGliL3JlbW92YWwtaG9va3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLy8gdGhpcyBmaWxlIGNvbnRhaW5zIGhvb2tzIHRoYXQgaGFuZGxlIGFuY2VzdHJ5IGNsZWFudXAgb2YgcGFyZW50IG5vZGVzIHdoZW4gcmVtb3ZpbmcgY2hpbGRyZW5cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBQcmUgaG9va3Mgc2hvdWxkIGJlIHVzZWQgZm9yIGVpdGhlciByZWplY3RpbmcgcmVtb3ZhbCBvciBkZWxlZ2F0aW5nIHJlbW92YWxcbiAqL1xuXG52YXIgcHJlID0gW1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIChzZWxmKSB7XG4gIGlmIChzZWxmLmtleSA9PT0gXCJib2R5XCIgJiYgKHNlbGYuaXNCbG9ja1N0YXRlbWVudCgpIHx8IHNlbGYuaXNDbGFzc0JvZHkoKSkpIHtcbiAgICAvLyBmdW5jdGlvbiAoKSBOT0RFXG4gICAgLy8gY2xhc3MgTk9ERVxuICAgIC8vIGF0dGVtcHRpbmcgdG8gcmVtb3ZlIGEgYmxvY2sgc3RhdGVtZW50IHRoYXQncyBzb21lb25lcyBib2R5IHNvIGxldCdzIGp1c3QgY2xlYXIgYWxsIHRoZSBpbm5lclxuICAgIC8vIHN0YXRlbWVudHMgaW5zdGVhZFxuICAgIHNlbGYubm9kZS5ib2R5ID0gW107XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0sXG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gKHNlbGYsIHBhcmVudCkge1xuICB2YXIgcmVwbGFjZSA9IGZhbHNlO1xuXG4gIC8vICgpID0+IE5PREU7XG4gIC8vIHJlbW92aW5nIHRoZSBib2R5IG9mIGFuIGFycm93IGZ1bmN0aW9uXG4gIHJlcGxhY2UgPSByZXBsYWNlIHx8IHNlbGYua2V5ID09PSBcImJvZHlcIiAmJiBwYXJlbnQuaXNBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbigpO1xuXG4gIC8vIHRocm93IE5PREU7XG4gIC8vIHJlbW92aW5nIGEgdGhyb3cgc3RhdGVtZW50IGFyZ3VtZW50XG4gIHJlcGxhY2UgPSByZXBsYWNlIHx8IHNlbGYua2V5ID09PSBcImFyZ3VtZW50XCIgJiYgcGFyZW50LmlzVGhyb3dTdGF0ZW1lbnQoKTtcblxuICBpZiAocmVwbGFjZSkge1xuICAgIHNlbGYucmVwbGFjZVdpdGgodC5pZGVudGlmaWVyKFwidW5kZWZpbmVkXCIpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufV07XG5cbmV4cG9ydHMucHJlID0gcHJlO1xuLyoqXG4gKiBQb3N0IGhvb2tzIHNob3VsZCBiZSB1c2VkIGZvciBjbGVhbmluZyB1cCBwYXJlbnRzXG4gKi9cblxudmFyIHBvc3QgPSBbXG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gKHNlbGYsIHBhcmVudCkge1xuICB2YXIgcmVtb3ZlUGFyZW50ID0gZmFsc2U7XG5cbiAgLy8gd2hpbGUgKE5PREUpO1xuICAvLyByZW1vdmluZyB0aGUgdGVzdCBvZiBhIHdoaWxlL3N3aXRjaCwgd2UgY2FuIGVpdGhlciBqdXN0IHJlbW92ZSBpdCBlbnRpcmVseSAqb3IqIHR1cm4gdGhlIGB0ZXN0YCBpbnRvIGB0cnVlYFxuICAvLyB1bmxpa2VseSB0aGF0IHRoZSBsYXR0ZXIgd2lsbCBldmVyIGJlIHdoYXQncyB3YW50ZWQgc28gd2UganVzdCByZW1vdmUgdGhlIGxvb3AgdG8gYXZvaWQgaW5maW5pdGUgcmVjdXJzaW9uXG4gIHJlbW92ZVBhcmVudCA9IHJlbW92ZVBhcmVudCB8fCBzZWxmLmtleSA9PT0gXCJ0ZXN0XCIgJiYgKHBhcmVudC5pc1doaWxlKCkgfHwgcGFyZW50LmlzU3dpdGNoQ2FzZSgpKTtcblxuICAvLyBleHBvcnQgTk9ERTtcbiAgLy8ganVzdCByZW1vdmUgYSBkZWNsYXJhdGlvbiBmb3IgYW4gZXhwb3J0IGFzIHRoaXMgaXMgbm8gbG9uZ2VyIHZhbGlkXG4gIHJlbW92ZVBhcmVudCA9IHJlbW92ZVBhcmVudCB8fCBzZWxmLmtleSA9PT0gXCJkZWNsYXJhdGlvblwiICYmIHBhcmVudC5pc0V4cG9ydERlY2xhcmF0aW9uKCk7XG5cbiAgLy8gbGFiZWw6IE5PREVcbiAgLy8gc3RyYXkgbGFiZWxlZCBzdGF0ZW1lbnQgd2l0aCBubyBib2R5XG4gIHJlbW92ZVBhcmVudCA9IHJlbW92ZVBhcmVudCB8fCBzZWxmLmtleSA9PT0gXCJib2R5XCIgJiYgcGFyZW50LmlzTGFiZWxlZFN0YXRlbWVudCgpO1xuXG4gIC8vIHZhciBOT0RFO1xuICAvLyByZW1vdmUgYW4gZW50aXJlIGRlY2xhcmF0aW9uIGlmIHRoZXJlIGFyZSBubyBkZWNsYXJhdG9ycyBsZWZ0XG4gIHJlbW92ZVBhcmVudCA9IHJlbW92ZVBhcmVudCB8fCBzZWxmLmxpc3RLZXkgPT09IFwiZGVjbGFyYXRpb25zXCIgJiYgcGFyZW50LmlzVmFyaWFibGVEZWNsYXJhdGlvbigpICYmIHBhcmVudC5ub2RlLmRlY2xhcmF0aW9ucy5sZW5ndGggPT09IDA7XG5cbiAgLy8gTk9ERTtcbiAgLy8gcmVtb3ZlIHRoZSBlbnRpcmUgZXhwcmVzc2lvbiBzdGF0ZW1lbnQgaWYgdGhlcmUncyBubyBleHByZXNzaW9uXG4gIHJlbW92ZVBhcmVudCA9IHJlbW92ZVBhcmVudCB8fCBzZWxmLmtleSA9PT0gXCJleHByZXNzaW9uXCIgJiYgcGFyZW50LmlzRXhwcmVzc2lvblN0YXRlbWVudCgpO1xuXG4gIC8vIGlmIChOT0RFKTtcbiAgLy8gcmVtb3ZlIHRoZSBlbnRpcmUgaWYgc2luY2UgdGhlIGNvbnNlcXVlbnQgaXMgbmV2ZXIgZ29pbmcgdG8gYmUgaGl0LCBpZiB0aGVyZSdzIGFuIGFsdGVybmF0ZSB0aGVuIGl0J3MgYWxyZWFkeSBiZWVuXG4gIC8vIGhhbmRsZWQgd2l0aCB0aGUgYHByZWAgaG9va1xuICByZW1vdmVQYXJlbnQgPSByZW1vdmVQYXJlbnQgfHwgc2VsZi5rZXkgPT09IFwidGVzdFwiICYmIHBhcmVudC5pc0lmU3RhdGVtZW50KCk7XG5cbiAgaWYgKHJlbW92ZVBhcmVudCkge1xuICAgIHBhcmVudC5kYW5nZXJvdXNseVJlbW92ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59LFxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIChzZWxmLCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudC5pc1NlcXVlbmNlRXhwcmVzc2lvbigpICYmIHBhcmVudC5ub2RlLmV4cHJlc3Npb25zLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIChub2RlLCBOT0RFKTtcbiAgICAvLyB3ZSd2ZSBqdXN0IHJlbW92ZWQgdGhlIHNlY29uZCBlbGVtZW50IG9mIGEgc2VxdWVuY2UgZXhwcmVzc2lvbiBzbyBsZXQncyB0dXJuIHRoYXQgc2VxdWVuY2VcbiAgICAvLyBleHByZXNzaW9uIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb25cbiAgICBwYXJlbnQucmVwbGFjZVdpdGgocGFyZW50Lm5vZGUuZXhwcmVzc2lvbnNbMF0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59LFxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIChzZWxmLCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudC5pc0JpbmFyeSgpKSB7XG4gICAgLy8gbGVmdCArIE5PREU7XG4gICAgLy8gTk9ERSArIHJpZ2h0O1xuICAgIC8vIHdlJ3JlIGluIGEgYmluYXJ5IGV4cHJlc3Npb24sIGJldHRlciByZW1vdmUgaXQgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbGFzdCBleHByZXNzaW9uXG4gICAgaWYgKHNlbGYua2V5ID09PSBcImxlZnRcIikge1xuICAgICAgcGFyZW50LnJlcGxhY2VXaXRoKHBhcmVudC5ub2RlLnJpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8ga2V5ID09PSBcInJpZ2h0XCJcbiAgICAgIHBhcmVudC5yZXBsYWNlV2l0aChwYXJlbnQubm9kZS5sZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1dO1xuZXhwb3J0cy5wb3N0ID0gcG9zdDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
