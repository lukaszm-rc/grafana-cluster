/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _whitespace, _whitespace2, _parentheses, parens, _lodashCollectionEach, _lodashCollectionEach2, _lodashCollectionSome, _lodashCollectionSome2, _types, t, find, Node;

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

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_whitespace = require("./whitespace");
      _whitespace2 = _interopRequireDefault(_whitespace);
      _parentheses = require("./parentheses");
      parens = _interopRequireWildcard(_parentheses);
      _lodashCollectionEach = require("lodash/collection/each");
      _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
      _lodashCollectionSome = require("lodash/collection/some");
      _lodashCollectionSome2 = _interopRequireDefault(_lodashCollectionSome);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      find = function find(obj, node, parent) {
        if (!obj) return;
        var result;

        var types = Object.keys(obj);
        for (var i = 0; i < types.length; i++) {
          var type = types[i];

          if (t.is(type, node)) {
            var fn = obj[type];
            result = fn(node, parent);
            if (result != null) break;
          }
        }

        return result;
      };

      Node = function () {
        function Node(node, parent) {
          _classCallCheck(this, Node);

          this.parent = parent;
          this.node = node;
        }

        /**
         * Add all static methods from `Node` to `Node.prototype`.
         */

        /**
         * Test if `node` can have whitespace set by the user.
         */

        Node.isUserWhitespacable = function isUserWhitespacable(node) {
          return t.isUserWhitespacable(node);
        };

        /**
         * Test if a `node` requires whitespace.
         */

        Node.needsWhitespace = function needsWhitespace(node, parent, type) {
          if (!node) return 0;

          if (t.isExpressionStatement(node)) {
            node = node.expression;
          }

          var linesInfo = find(_whitespace2["default"].nodes, node, parent);

          if (!linesInfo) {
            var items = find(_whitespace2["default"].list, node, parent);
            if (items) {
              for (var i = 0; i < items.length; i++) {
                linesInfo = Node.needsWhitespace(items[i], node, type);
                if (linesInfo) break;
              }
            }
          }

          return linesInfo && linesInfo[type] || 0;
        };

        /**
         * Test if a `node` requires whitespace before it.
         */

        Node.needsWhitespaceBefore = function needsWhitespaceBefore(node, parent) {
          return Node.needsWhitespace(node, parent, "before");
        };

        /**
         * Test if a `note` requires whitespace after it.
         */

        Node.needsWhitespaceAfter = function needsWhitespaceAfter(node, parent) {
          return Node.needsWhitespace(node, parent, "after");
        };

        /**
         * Test if a `node` needs parentheses around it.
         */

        Node.needsParens = function needsParens(node, parent) {
          if (!parent) return false;

          if (t.isNewExpression(parent) && parent.callee === node) {
            if (t.isCallExpression(node)) return true;

            var hasCall = _lodashCollectionSome2["default"](node, function (val) {
              return t.isCallExpression(val);
            });
            if (hasCall) return true;
          }

          return find(parens, node, parent);
        };

        return Node;
      }();

      exports["default"] = Node;
      _lodashCollectionEach2["default"](Node, function (fn, key) {
        Node.prototype[key] = function () {
          // Avoid leaking arguments to prevent deoptimization
          var args = new Array(arguments.length + 2);

          args[0] = this.node;
          args[1] = this.parent;

          for (var i = 0; i < args.length; i++) {
            args[i + 2] = arguments[i];
          }

          return Node[key].apply(null, args);
        };
      });
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9ub2RlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7QUFYQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FhSSxjQUFjLFFBQVEsY0FBUjtBQUVkLHFCQUFlLHVCQUF1QixXQUF2QjtBQUVmLHFCQUFlLFFBQVEsZUFBUjtBQUVmLGVBQVMsd0JBQXdCLFlBQXhCO0FBRVQsOEJBQXdCLFFBQVEsd0JBQVI7QUFFeEIsK0JBQXlCLHVCQUF1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ZCxDQURvQztXQUF0Qzs7QUFJQSxpQkFBTyxLQUFLLEdBQUwsRUFBVSxLQUFWLENBQWdCLElBQWhCLEVBQXNCLElBQXRCLENBQVAsQ0FYZ0M7U0FBWixDQURtQztPQUFuQixDQUF4QztBQWVBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi9nZW5lcmF0aW9uL25vZGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX3doaXRlc3BhY2UgPSByZXF1aXJlKFwiLi93aGl0ZXNwYWNlXCIpO1xuXG52YXIgX3doaXRlc3BhY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2hpdGVzcGFjZSk7XG5cbnZhciBfcGFyZW50aGVzZXMgPSByZXF1aXJlKFwiLi9wYXJlbnRoZXNlc1wiKTtcblxudmFyIHBhcmVucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wYXJlbnRoZXNlcyk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkVhY2ggPSByZXF1aXJlKFwibG9kYXNoL2NvbGxlY3Rpb24vZWFjaFwiKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uRWFjaCk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvblNvbWUgPSByZXF1aXJlKFwibG9kYXNoL2NvbGxlY3Rpb24vc29tZVwiKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uU29tZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uU29tZSk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBUZXN0IGlmIG5vZGUgbWF0Y2hlcyBhIHNldCBvZiB0eXBlLW1hdGNoZXIgcGFpcnMuXG4gKiBAZXhhbXBsZVxuICogZmluZCh7XG4gKiAgIFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSwgcGFyZW50KSB7XG4gKiAgICAgcmV0dXJuIHRydWU7XG4gKiAgIH1cbiAqIH0sIG5vZGUsIHBhcmVudCk7XG4gKi9cblxudmFyIGZpbmQgPSBmdW5jdGlvbiBmaW5kKG9iaiwgbm9kZSwgcGFyZW50KSB7XG4gIGlmICghb2JqKSByZXR1cm47XG4gIHZhciByZXN1bHQ7XG5cbiAgdmFyIHR5cGVzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0eXBlID0gdHlwZXNbaV07XG5cbiAgICBpZiAodC5pcyh0eXBlLCBub2RlKSkge1xuICAgICAgdmFyIGZuID0gb2JqW3R5cGVdO1xuICAgICAgcmVzdWx0ID0gZm4obm9kZSwgcGFyZW50KTtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogV2hpdGVzcGFjZSBhbmQgUGFyZW50aGVzaXMgcmVsYXRlZCBtZXRob2RzIGZvciBub2Rlcy5cbiAqL1xuXG52YXIgTm9kZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vZGUobm9kZSwgcGFyZW50KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIHN0YXRpYyBtZXRob2RzIGZyb20gYE5vZGVgIHRvIGBOb2RlLnByb3RvdHlwZWAuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGBub2RlYCBjYW4gaGF2ZSB3aGl0ZXNwYWNlIHNldCBieSB0aGUgdXNlci5cbiAgICovXG5cbiAgTm9kZS5pc1VzZXJXaGl0ZXNwYWNhYmxlID0gZnVuY3Rpb24gaXNVc2VyV2hpdGVzcGFjYWJsZShub2RlKSB7XG4gICAgcmV0dXJuIHQuaXNVc2VyV2hpdGVzcGFjYWJsZShub2RlKTtcbiAgfTtcblxuICAvKipcbiAgICogVGVzdCBpZiBhIGBub2RlYCByZXF1aXJlcyB3aGl0ZXNwYWNlLlxuICAgKi9cblxuICBOb2RlLm5lZWRzV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIG5lZWRzV2hpdGVzcGFjZShub2RlLCBwYXJlbnQsIHR5cGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybiAwO1xuXG4gICAgaWYgKHQuaXNFeHByZXNzaW9uU3RhdGVtZW50KG5vZGUpKSB7XG4gICAgICBub2RlID0gbm9kZS5leHByZXNzaW9uO1xuICAgIH1cblxuICAgIHZhciBsaW5lc0luZm8gPSBmaW5kKF93aGl0ZXNwYWNlMltcImRlZmF1bHRcIl0ubm9kZXMsIG5vZGUsIHBhcmVudCk7XG5cbiAgICBpZiAoIWxpbmVzSW5mbykge1xuICAgICAgdmFyIGl0ZW1zID0gZmluZChfd2hpdGVzcGFjZTJbXCJkZWZhdWx0XCJdLmxpc3QsIG5vZGUsIHBhcmVudCk7XG4gICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxpbmVzSW5mbyA9IE5vZGUubmVlZHNXaGl0ZXNwYWNlKGl0ZW1zW2ldLCBub2RlLCB0eXBlKTtcbiAgICAgICAgICBpZiAobGluZXNJbmZvKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaW5lc0luZm8gJiYgbGluZXNJbmZvW3R5cGVdIHx8IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYSBgbm9kZWAgcmVxdWlyZXMgd2hpdGVzcGFjZSBiZWZvcmUgaXQuXG4gICAqL1xuXG4gIE5vZGUubmVlZHNXaGl0ZXNwYWNlQmVmb3JlID0gZnVuY3Rpb24gbmVlZHNXaGl0ZXNwYWNlQmVmb3JlKG5vZGUsIHBhcmVudCkge1xuICAgIHJldHVybiBOb2RlLm5lZWRzV2hpdGVzcGFjZShub2RlLCBwYXJlbnQsIFwiYmVmb3JlXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGEgYG5vdGVgIHJlcXVpcmVzIHdoaXRlc3BhY2UgYWZ0ZXIgaXQuXG4gICAqL1xuXG4gIE5vZGUubmVlZHNXaGl0ZXNwYWNlQWZ0ZXIgPSBmdW5jdGlvbiBuZWVkc1doaXRlc3BhY2VBZnRlcihub2RlLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gTm9kZS5uZWVkc1doaXRlc3BhY2Uobm9kZSwgcGFyZW50LCBcImFmdGVyXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGEgYG5vZGVgIG5lZWRzIHBhcmVudGhlc2VzIGFyb3VuZCBpdC5cbiAgICovXG5cbiAgTm9kZS5uZWVkc1BhcmVucyA9IGZ1bmN0aW9uIG5lZWRzUGFyZW5zKG5vZGUsIHBhcmVudCkge1xuICAgIGlmICghcGFyZW50KSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodC5pc05ld0V4cHJlc3Npb24ocGFyZW50KSAmJiBwYXJlbnQuY2FsbGVlID09PSBub2RlKSB7XG4gICAgICBpZiAodC5pc0NhbGxFeHByZXNzaW9uKG5vZGUpKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgdmFyIGhhc0NhbGwgPSBfbG9kYXNoQ29sbGVjdGlvblNvbWUyW1wiZGVmYXVsdFwiXShub2RlLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiB0LmlzQ2FsbEV4cHJlc3Npb24odmFsKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGhhc0NhbGwpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5kKHBhcmVucywgbm9kZSwgcGFyZW50KTtcbiAgfTtcblxuICByZXR1cm4gTm9kZTtcbn0pKCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTm9kZTtcbl9sb2Rhc2hDb2xsZWN0aW9uRWFjaDJbXCJkZWZhdWx0XCJdKE5vZGUsIGZ1bmN0aW9uIChmbiwga2V5KSB7XG4gIE5vZGUucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQXZvaWQgbGVha2luZyBhcmd1bWVudHMgdG8gcHJldmVudCBkZW9wdGltaXphdGlvblxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggKyAyKTtcblxuICAgIGFyZ3NbMF0gPSB0aGlzLm5vZGU7XG4gICAgYXJnc1sxXSA9IHRoaXMucGFyZW50O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgKyAyXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gTm9kZVtrZXldLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
