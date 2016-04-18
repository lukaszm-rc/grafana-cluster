/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashCollectionEach, _lodashCollectionEach2, _types, t, PRECEDENCE;

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
   * Test if NullableTypeAnnotation needs parentheses.
   */

  function NullableTypeAnnotation(node, parent) {
    return t.isArrayTypeAnnotation(parent);
  }

  /**
   * Alias NullableTypeAnnotation test as FunctionTypeAnnotation.
   */

  /**
   * Test if UpdateExpression needs parentheses.
   */

  function UpdateExpression(node, parent) {
    if (t.isMemberExpression(parent) && parent.object === node) {
      // (foo++).test()
      return true;
    }
  }

  /**
   * Test if ObjectExpression needs parentheses.
   */

  function ObjectExpression(node, parent) {
    if (t.isExpressionStatement(parent)) {
      // ({ foo: "bar" });
      return true;
    }

    if (t.isMemberExpression(parent) && parent.object === node) {
      // ({ foo: "bar" }).foo
      return true;
    }

    return false;
  }

  /**
   * Test if Binary needs parentheses.
   */

  function Binary(node, parent) {
    if ((t.isCallExpression(parent) || t.isNewExpression(parent)) && parent.callee === node) {
      return true;
    }

    if (t.isUnaryLike(parent)) {
      return true;
    }

    if (t.isMemberExpression(parent) && parent.object === node) {
      return true;
    }

    if (t.isBinary(parent)) {
      var parentOp = parent.operator;
      var parentPos = PRECEDENCE[parentOp];

      var nodeOp = node.operator;
      var nodePos = PRECEDENCE[nodeOp];

      if (parentPos > nodePos) {
        return true;
      }

      // Logical expressions with the same precedence don't need parens.
      if (parentPos === nodePos && parent.right === node && !t.isLogicalExpression(parent)) {
        return true;
      }
    }
  }

  /**
   * Test if BinaryExpression needs parentheses.
   */

  function BinaryExpression(node, parent) {
    if (node.operator === "in") {
      // var i = (1 in []);
      if (t.isVariableDeclarator(parent)) {
        return true;
      }

      // for ((1 in []);;);
      if (t.isFor(parent)) {
        return true;
      }
    }
  }

  /**
   * Test if SequenceExpression needs parentheses.
   */

  function SequenceExpression(node, parent) {
    if (t.isForStatement(parent)) {
      // Although parentheses wouldn't hurt around sequence
      // expressions in the head of for loops, traditional style
      // dictates that e.g. i++, j++ should not be wrapped with
      // parentheses.
      return false;
    }

    if (t.isExpressionStatement(parent) && parent.expression === node) {
      return false;
    }

    if (t.isReturnStatement(parent)) {
      return false;
    }

    // Otherwise err on the side of overparenthesization, adding
    // explicit exceptions above if this proves overzealous.
    return true;
  }

  /**
   * Test if YieldExpression needs parentheses.
   */

  function YieldExpression(node, parent) {
    return t.isBinary(parent) || t.isUnaryLike(parent) || t.isCallExpression(parent) || t.isMemberExpression(parent) || t.isNewExpression(parent) || t.isConditionalExpression(parent) || t.isYieldExpression(parent);
  }

  /**
   * Test if ClassExpression needs parentheses.
   */

  function ClassExpression(node, parent) {
    return t.isExpressionStatement(parent);
  }

  /**
   * Test if UnaryLike needs parentheses.
   */

  function UnaryLike(node, parent) {
    return t.isMemberExpression(parent) && parent.object === node;
  }

  /**
   * Test if FunctionExpression needs parentheses.
   */

  function FunctionExpression(node, parent) {
    // function () {};
    if (t.isExpressionStatement(parent)) {
      return true;
    }

    // (function test() {}).name;
    if (t.isMemberExpression(parent) && parent.object === node) {
      return true;
    }

    // (function () {})();
    if (t.isCallExpression(parent) && parent.callee === node) {
      return true;
    }
  }

  /**
   * Test if ConditionalExpression needs parentheses.
   */

  function ConditionalExpression(node, parent) {
    if (t.isUnaryLike(parent)) {
      return true;
    }

    if (t.isBinary(parent)) {
      return true;
    }

    if (t.isCallExpression(parent) || t.isNewExpression(parent)) {
      if (parent.callee === node) {
        return true;
      }
    }

    if (t.isConditionalExpression(parent) && parent.test === node) {
      return true;
    }

    if (t.isMemberExpression(parent) && parent.object === node) {
      return true;
    }

    return false;
  }

  /**
   * Test if AssignmentExpression needs parentheses.
   */

  function AssignmentExpression(node) {
    if (t.isObjectPattern(node.left)) {
      return true;
    } else {
      return ConditionalExpression.apply(undefined, arguments);
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.NullableTypeAnnotation = NullableTypeAnnotation;
      exports.UpdateExpression = UpdateExpression;
      exports.ObjectExpression = ObjectExpression;
      exports.Binary = Binary;
      exports.BinaryExpression = BinaryExpression;
      exports.SequenceExpression = SequenceExpression;
      exports.YieldExpression = YieldExpression;
      exports.ClassExpression = ClassExpression;
      exports.UnaryLike = UnaryLike;
      exports.FunctionExpression = FunctionExpression;
      exports.ConditionalExpression = ConditionalExpression;
      exports.AssignmentExpression = AssignmentExpression;_lodashCollectionEach = require("lodash/collection/each");
      _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      PRECEDENCE = {};


      _lodashCollectionEach2["default"]([["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]], function (tier, i) {
        _lodashCollectionEach2["default"](tier, function (op) {
          PRECEDENCE[op] = i;
        });
      });exports.FunctionTypeAnnotation = NullableTypeAnnotation;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9ub2RlL3BhcmVudGhlc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBaUJBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUE0QkEsV0FBUyxzQkFBVCxDQUFnQyxJQUFoQyxFQUFzQyxNQUF0QyxFQUE4QztBQUM1QyxXQUFPLEVBQUUscUJBQUYsQ0FBd0IsTUFBeEIsQ0FBUCxDQUQ0QztHQUE5Qzs7Ozs7Ozs7OztBQWNBLFdBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsRUFBd0M7QUFDdEMsUUFBSSxFQUFFLGtCQUFGLENBQXFCLE1BQXJCLEtBQWdDLE9BQU8sTUFBUCxLQUFrQixJQUFsQixFQUF3Qjs7QUFFMUQsYUFBTyxJQUFQLENBRjBEO0tBQTVEO0dBREY7Ozs7OztBQVdBLFdBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIs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O0FBRWpCLDZCQUF1QixTQUF2QixFQUFrQyxDQUFDLENBQUMsSUFBRCxDQUFELEVBQVMsQ0FBQyxJQUFELENBQVQsRUFBaUIsQ0FBQyxHQUFELENBQWpCLEVBQXdCLENBQUMsR0FBRCxDQUF4QixFQUErQixDQUFDLEdBQUQsQ0FBL0IsRUFBc0MsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsS0FBcEIsQ0FBdEMsRUFBa0UsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsWUFBN0IsQ0FBbEUsRUFBOEcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsQ0FBOUcsRUFBbUksQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFuSSxFQUErSSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUEvSSxFQUFnSyxDQUFDLElBQUQsQ0FBaEssQ0FBbEMsRUFBMk0sVUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CO0FBQzVOLCtCQUF1QixTQUF2QixFQUFrQyxJQUFsQyxFQUF3QyxVQUFVLEVBQVYsRUFBYztBQUNwRCxxQkFBVyxFQUFYLElBQWlCLENBQWpCLENBRG9EO1NBQWQsQ0FBeEMsQ0FENE47T0FBbkIsQ0FBM00sQ0FrQkEsUUFBUSxzQkFBUixHQUFpQyxzQkFBakMiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL25vZGUvcGFyZW50aGVzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLk51bGxhYmxlVHlwZUFubm90YXRpb24gPSBOdWxsYWJsZVR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5VcGRhdGVFeHByZXNzaW9uID0gVXBkYXRlRXhwcmVzc2lvbjtcbmV4cG9ydHMuT2JqZWN0RXhwcmVzc2lvbiA9IE9iamVjdEV4cHJlc3Npb247XG5leHBvcnRzLkJpbmFyeSA9IEJpbmFyeTtcbmV4cG9ydHMuQmluYXJ5RXhwcmVzc2lvbiA9IEJpbmFyeUV4cHJlc3Npb247XG5leHBvcnRzLlNlcXVlbmNlRXhwcmVzc2lvbiA9IFNlcXVlbmNlRXhwcmVzc2lvbjtcbmV4cG9ydHMuWWllbGRFeHByZXNzaW9uID0gWWllbGRFeHByZXNzaW9uO1xuZXhwb3J0cy5DbGFzc0V4cHJlc3Npb24gPSBDbGFzc0V4cHJlc3Npb247XG5leHBvcnRzLlVuYXJ5TGlrZSA9IFVuYXJ5TGlrZTtcbmV4cG9ydHMuRnVuY3Rpb25FeHByZXNzaW9uID0gRnVuY3Rpb25FeHByZXNzaW9uO1xuZXhwb3J0cy5Db25kaXRpb25hbEV4cHJlc3Npb24gPSBDb25kaXRpb25hbEV4cHJlc3Npb247XG5leHBvcnRzLkFzc2lnbm1lbnRFeHByZXNzaW9uID0gQXNzaWdubWVudEV4cHJlc3Npb247XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25FYWNoID0gcmVxdWlyZShcImxvZGFzaC9jb2xsZWN0aW9uL2VhY2hcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQ29sbGVjdGlvbkVhY2gpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFwcGluZyBvZiBvcGVyYXRvcnMgdG8gcHJlY2VuZGVuY2UuXG4gKlxuICogQGV4YW1wbGVcbiAqIHsgXCI9PVwiOiA2LCBcIitcIjogOSB9XG4gKi9cbnZhciBQUkVDRURFTkNFID0ge307XG5cbl9sb2Rhc2hDb2xsZWN0aW9uRWFjaDJbXCJkZWZhdWx0XCJdKFtbXCJ8fFwiXSwgW1wiJiZcIl0sIFtcInxcIl0sIFtcIl5cIl0sIFtcIiZcIl0sIFtcIj09XCIsIFwiPT09XCIsIFwiIT1cIiwgXCIhPT1cIl0sIFtcIjxcIiwgXCI+XCIsIFwiPD1cIiwgXCI+PVwiLCBcImluXCIsIFwiaW5zdGFuY2VvZlwiXSwgW1wiPj5cIiwgXCI8PFwiLCBcIj4+PlwiXSwgW1wiK1wiLCBcIi1cIl0sIFtcIipcIiwgXCIvXCIsIFwiJVwiXSwgW1wiKipcIl1dLCBmdW5jdGlvbiAodGllciwgaSkge1xuICBfbG9kYXNoQ29sbGVjdGlvbkVhY2gyW1wiZGVmYXVsdFwiXSh0aWVyLCBmdW5jdGlvbiAob3ApIHtcbiAgICBQUkVDRURFTkNFW29wXSA9IGk7XG4gIH0pO1xufSk7XG5cbi8qKlxuICogVGVzdCBpZiBOdWxsYWJsZVR5cGVBbm5vdGF0aW9uIG5lZWRzIHBhcmVudGhlc2VzLlxuICovXG5cbmZ1bmN0aW9uIE51bGxhYmxlVHlwZUFubm90YXRpb24obm9kZSwgcGFyZW50KSB7XG4gIHJldHVybiB0LmlzQXJyYXlUeXBlQW5ub3RhdGlvbihwYXJlbnQpO1xufVxuXG4vKipcbiAqIEFsaWFzIE51bGxhYmxlVHlwZUFubm90YXRpb24gdGVzdCBhcyBGdW5jdGlvblR5cGVBbm5vdGF0aW9uLlxuICovXG5cbmV4cG9ydHMuRnVuY3Rpb25UeXBlQW5ub3RhdGlvbiA9IE51bGxhYmxlVHlwZUFubm90YXRpb247XG5cbi8qKlxuICogVGVzdCBpZiBVcGRhdGVFeHByZXNzaW9uIG5lZWRzIHBhcmVudGhlc2VzLlxuICovXG5cbmZ1bmN0aW9uIFVwZGF0ZUV4cHJlc3Npb24obm9kZSwgcGFyZW50KSB7XG4gIGlmICh0LmlzTWVtYmVyRXhwcmVzc2lvbihwYXJlbnQpICYmIHBhcmVudC5vYmplY3QgPT09IG5vZGUpIHtcbiAgICAvLyAoZm9vKyspLnRlc3QoKVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGVzdCBpZiBPYmplY3RFeHByZXNzaW9uIG5lZWRzIHBhcmVudGhlc2VzLlxuICovXG5cbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb24obm9kZSwgcGFyZW50KSB7XG4gIGlmICh0LmlzRXhwcmVzc2lvblN0YXRlbWVudChwYXJlbnQpKSB7XG4gICAgLy8gKHsgZm9vOiBcImJhclwiIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKHBhcmVudCkgJiYgcGFyZW50Lm9iamVjdCA9PT0gbm9kZSkge1xuICAgIC8vICh7IGZvbzogXCJiYXJcIiB9KS5mb29cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIEJpbmFyeSBuZWVkcyBwYXJlbnRoZXNlcy5cbiAqL1xuXG5mdW5jdGlvbiBCaW5hcnkobm9kZSwgcGFyZW50KSB7XG4gIGlmICgodC5pc0NhbGxFeHByZXNzaW9uKHBhcmVudCkgfHwgdC5pc05ld0V4cHJlc3Npb24ocGFyZW50KSkgJiYgcGFyZW50LmNhbGxlZSA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHQuaXNVbmFyeUxpa2UocGFyZW50KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKHBhcmVudCkgJiYgcGFyZW50Lm9iamVjdCA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHQuaXNCaW5hcnkocGFyZW50KSkge1xuICAgIHZhciBwYXJlbnRPcCA9IHBhcmVudC5vcGVyYXRvcjtcbiAgICB2YXIgcGFyZW50UG9zID0gUFJFQ0VERU5DRVtwYXJlbnRPcF07XG5cbiAgICB2YXIgbm9kZU9wID0gbm9kZS5vcGVyYXRvcjtcbiAgICB2YXIgbm9kZVBvcyA9IFBSRUNFREVOQ0Vbbm9kZU9wXTtcblxuICAgIGlmIChwYXJlbnRQb3MgPiBub2RlUG9zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBMb2dpY2FsIGV4cHJlc3Npb25zIHdpdGggdGhlIHNhbWUgcHJlY2VkZW5jZSBkb24ndCBuZWVkIHBhcmVucy5cbiAgICBpZiAocGFyZW50UG9zID09PSBub2RlUG9zICYmIHBhcmVudC5yaWdodCA9PT0gbm9kZSAmJiAhdC5pc0xvZ2ljYWxFeHByZXNzaW9uKHBhcmVudCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRlc3QgaWYgQmluYXJ5RXhwcmVzc2lvbiBuZWVkcyBwYXJlbnRoZXNlcy5cbiAqL1xuXG5mdW5jdGlvbiBCaW5hcnlFeHByZXNzaW9uKG5vZGUsIHBhcmVudCkge1xuICBpZiAobm9kZS5vcGVyYXRvciA9PT0gXCJpblwiKSB7XG4gICAgLy8gdmFyIGkgPSAoMSBpbiBbXSk7XG4gICAgaWYgKHQuaXNWYXJpYWJsZURlY2xhcmF0b3IocGFyZW50KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZm9yICgoMSBpbiBbXSk7Oyk7XG4gICAgaWYgKHQuaXNGb3IocGFyZW50KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGVzdCBpZiBTZXF1ZW5jZUV4cHJlc3Npb24gbmVlZHMgcGFyZW50aGVzZXMuXG4gKi9cblxuZnVuY3Rpb24gU2VxdWVuY2VFeHByZXNzaW9uKG5vZGUsIHBhcmVudCkge1xuICBpZiAodC5pc0ZvclN0YXRlbWVudChwYXJlbnQpKSB7XG4gICAgLy8gQWx0aG91Z2ggcGFyZW50aGVzZXMgd291bGRuJ3QgaHVydCBhcm91bmQgc2VxdWVuY2VcbiAgICAvLyBleHByZXNzaW9ucyBpbiB0aGUgaGVhZCBvZiBmb3IgbG9vcHMsIHRyYWRpdGlvbmFsIHN0eWxlXG4gICAgLy8gZGljdGF0ZXMgdGhhdCBlLmcuIGkrKywgaisrIHNob3VsZCBub3QgYmUgd3JhcHBlZCB3aXRoXG4gICAgLy8gcGFyZW50aGVzZXMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KHBhcmVudCkgJiYgcGFyZW50LmV4cHJlc3Npb24gPT09IG5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodC5pc1JldHVyblN0YXRlbWVudChwYXJlbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlIGVyciBvbiB0aGUgc2lkZSBvZiBvdmVycGFyZW50aGVzaXphdGlvbiwgYWRkaW5nXG4gIC8vIGV4cGxpY2l0IGV4Y2VwdGlvbnMgYWJvdmUgaWYgdGhpcyBwcm92ZXMgb3ZlcnplYWxvdXMuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFRlc3QgaWYgWWllbGRFeHByZXNzaW9uIG5lZWRzIHBhcmVudGhlc2VzLlxuICovXG5cbmZ1bmN0aW9uIFlpZWxkRXhwcmVzc2lvbihub2RlLCBwYXJlbnQpIHtcbiAgcmV0dXJuIHQuaXNCaW5hcnkocGFyZW50KSB8fCB0LmlzVW5hcnlMaWtlKHBhcmVudCkgfHwgdC5pc0NhbGxFeHByZXNzaW9uKHBhcmVudCkgfHwgdC5pc01lbWJlckV4cHJlc3Npb24ocGFyZW50KSB8fCB0LmlzTmV3RXhwcmVzc2lvbihwYXJlbnQpIHx8IHQuaXNDb25kaXRpb25hbEV4cHJlc3Npb24ocGFyZW50KSB8fCB0LmlzWWllbGRFeHByZXNzaW9uKHBhcmVudCk7XG59XG5cbi8qKlxuICogVGVzdCBpZiBDbGFzc0V4cHJlc3Npb24gbmVlZHMgcGFyZW50aGVzZXMuXG4gKi9cblxuZnVuY3Rpb24gQ2xhc3NFeHByZXNzaW9uKG5vZGUsIHBhcmVudCkge1xuICByZXR1cm4gdC5pc0V4cHJlc3Npb25TdGF0ZW1lbnQocGFyZW50KTtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIFVuYXJ5TGlrZSBuZWVkcyBwYXJlbnRoZXNlcy5cbiAqL1xuXG5mdW5jdGlvbiBVbmFyeUxpa2Uobm9kZSwgcGFyZW50KSB7XG4gIHJldHVybiB0LmlzTWVtYmVyRXhwcmVzc2lvbihwYXJlbnQpICYmIHBhcmVudC5vYmplY3QgPT09IG5vZGU7XG59XG5cbi8qKlxuICogVGVzdCBpZiBGdW5jdGlvbkV4cHJlc3Npb24gbmVlZHMgcGFyZW50aGVzZXMuXG4gKi9cblxuZnVuY3Rpb24gRnVuY3Rpb25FeHByZXNzaW9uKG5vZGUsIHBhcmVudCkge1xuICAvLyBmdW5jdGlvbiAoKSB7fTtcbiAgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KHBhcmVudCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIChmdW5jdGlvbiB0ZXN0KCkge30pLm5hbWU7XG4gIGlmICh0LmlzTWVtYmVyRXhwcmVzc2lvbihwYXJlbnQpICYmIHBhcmVudC5vYmplY3QgPT09IG5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIChmdW5jdGlvbiAoKSB7fSkoKTtcbiAgaWYgKHQuaXNDYWxsRXhwcmVzc2lvbihwYXJlbnQpICYmIHBhcmVudC5jYWxsZWUgPT09IG5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRlc3QgaWYgQ29uZGl0aW9uYWxFeHByZXNzaW9uIG5lZWRzIHBhcmVudGhlc2VzLlxuICovXG5cbmZ1bmN0aW9uIENvbmRpdGlvbmFsRXhwcmVzc2lvbihub2RlLCBwYXJlbnQpIHtcbiAgaWYgKHQuaXNVbmFyeUxpa2UocGFyZW50KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHQuaXNCaW5hcnkocGFyZW50KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHQuaXNDYWxsRXhwcmVzc2lvbihwYXJlbnQpIHx8IHQuaXNOZXdFeHByZXNzaW9uKHBhcmVudCkpIHtcbiAgICBpZiAocGFyZW50LmNhbGxlZSA9PT0gbm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHQuaXNDb25kaXRpb25hbEV4cHJlc3Npb24ocGFyZW50KSAmJiBwYXJlbnQudGVzdCA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKHBhcmVudCkgJiYgcGFyZW50Lm9iamVjdCA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFRlc3QgaWYgQXNzaWdubWVudEV4cHJlc3Npb24gbmVlZHMgcGFyZW50aGVzZXMuXG4gKi9cblxuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb24obm9kZSkge1xuICBpZiAodC5pc09iamVjdFBhdHRlcm4obm9kZS5sZWZ0KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBDb25kaXRpb25hbEV4cHJlc3Npb24uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
