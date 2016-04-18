/* */
"format cjs";
"use strict";

// istanbul ignore next

System.register([], function (_export, _context) {
  var _lodashLangIsBoolean, _lodashLangIsBoolean2, _lodashCollectionEach, _lodashCollectionEach2, _lodashCollectionMap, _lodashCollectionMap2, _types, t;

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
   * Crawl a node to test if it contains a CallExpression, a Function, or a Helper.
   *
   * @example
   * crawl(node)
   * // { hasCall: false, hasFunction: true, hasHelper: false }
   */

  function crawl(node) {
    var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (t.isMemberExpression(node)) {
      crawl(node.object, state);
      if (node.computed) crawl(node.property, state);
    } else if (t.isBinary(node) || t.isAssignmentExpression(node)) {
      crawl(node.left, state);
      crawl(node.right, state);
    } else if (t.isCallExpression(node)) {
      state.hasCall = true;
      crawl(node.callee, state);
    } else if (t.isFunction(node)) {
      state.hasFunction = true;
    } else if (t.isIdentifier(node)) {
      state.hasHelper = state.hasHelper || isHelper(node.callee);
    }

    return state;
  }

  /**
   * Test if a node is or has a helper.
   */

  function isHelper(node) {
    if (t.isMemberExpression(node)) {
      return isHelper(node.object) || isHelper(node.property);
    } else if (t.isIdentifier(node)) {
      return node.name === "require" || node.name[0] === "_";
    } else if (t.isCallExpression(node)) {
      return isHelper(node.callee);
    } else if (t.isBinary(node) || t.isAssignmentExpression(node)) {
      return t.isIdentifier(node.left) && isHelper(node.left) || isHelper(node.right);
    } else {
      return false;
    }
  }

  /**
   * [Please add a description.]
   */

  function isType(node) {
    return t.isLiteral(node) || t.isObjectExpression(node) || t.isArrayExpression(node) || t.isIdentifier(node) || t.isMemberExpression(node);
  }

  /**
   * Tests for node types that need whitespace.
   */

  return {
    setters: [],
    execute: function () {
      _lodashLangIsBoolean = require("lodash/lang/isBoolean");
      _lodashLangIsBoolean2 = _interopRequireDefault(_lodashLangIsBoolean);
      _lodashCollectionEach = require("lodash/collection/each");
      _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
      _lodashCollectionMap = require("lodash/collection/map");
      _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      exports.nodes = {

        /**
         * Test if AssignmentExpression needs whitespace.
         */

        AssignmentExpression: function AssignmentExpression(node) {
          var state = crawl(node.right);
          if (state.hasCall && state.hasHelper || state.hasFunction) {
            return {
              before: state.hasFunction,
              after: true
            };
          }
        },

        /**
         * Test if SwitchCase needs whitespace.
         */

        SwitchCase: function SwitchCase(node, parent) {
          return {
            before: node.consequent.length || parent.cases[0] === node
          };
        },

        /**
         * Test if LogicalExpression needs whitespace.
         */

        LogicalExpression: function LogicalExpression(node) {
          if (t.isFunction(node.left) || t.isFunction(node.right)) {
            return {
              after: true
            };
          }
        },

        /**
         * Test if Literal needs whitespace.
         */

        Literal: function Literal(node) {
          if (node.value === "use strict") {
            return {
              after: true
            };
          }
        },

        /**
         * Test if CallExpression needs whitespace.
         */

        CallExpression: function CallExpression(node) {
          if (t.isFunction(node.callee) || isHelper(node)) {
            return {
              before: true,
              after: true
            };
          }
        },

        /**
         * Test if VariableDeclaration needs whitespace.
         */

        VariableDeclaration: function VariableDeclaration(node) {
          for (var i = 0; i < node.declarations.length; i++) {
            var declar = node.declarations[i];

            var enabled = isHelper(declar.id) && !isType(declar.init);
            if (!enabled) {
              var state = crawl(declar.init);
              enabled = isHelper(declar.init) && state.hasCall || state.hasFunction;
            }

            if (enabled) {
              return {
                before: true,
                after: true
              };
            }
          }
        },

        /**
         * Test if IfStatement needs whitespace.
         */

        IfStatement: function IfStatement(node) {
          if (t.isBlockStatement(node.consequent)) {
            return {
              before: true,
              after: true
            };
          }
        }
      };

      /**
       * Test if Property or SpreadProperty needs whitespace.
       */

      exports.nodes.Property = exports.nodes.SpreadProperty = function (node, parent) {
        if (parent.properties[0] === node) {
          return {
            before: true
          };
        }
      };

      /**
       * Returns lists from node types that need whitespace.
       */

      exports.list = {

        /**
         * Return VariableDeclaration declarations init properties.
         */

        VariableDeclaration: function VariableDeclaration(node) {
          return _lodashCollectionMap2["default"](node.declarations, "init");
        },

        /**
         * Return VariableDeclaration elements.
         */

        ArrayExpression: function ArrayExpression(node) {
          return node.elements;
        },

        /**
         * Return VariableDeclaration properties.
         */

        ObjectExpression: function ObjectExpression(node) {
          return node.properties;
        }
      };

      /**
       * Add whitespace tests for nodes and their aliases.
       */

      _lodashCollectionEach2["default"]({
        Function: true,
        Class: true,
        Loop: true,
        LabeledStatement: true,
        SwitchStatement: true,
        TryStatement: true
      }, function (amounts, type) {
        if (_lodashLangIsBoolean2["default"](amounts)) {
          amounts = { after: amounts, before: amounts };
        }

        _lodashCollectionEach2["default"]([type].concat(t.FLIPPED_ALIAS_KEYS[type] || []), function (type) {
          exports.nodes[type] = function () {
            return amounts;
          };
        });
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvZ2VuZXJhdGlvbi9ub2RlL3doaXRlc3BhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7Ozs7OztBQTBCQSxXQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCO0FBQ25CLFFBQUksUUFBUSxVQUFVLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUIsVUFBVSxDQUFWLE1BQWlCLFNBQWpCLEdBQTZCLEVBQXRELEdBQTJELFVBQVUsQ0FBVixDQUEzRCxDQURPOztBQUduQixRQUFJLEVBQUUsa0JBQUYsQ0FBcUIsSUFBckIsQ0FBSixFQUFnQztBQUM5QixZQUFNLEtBQUssTUFBTCxFQUFhLEtBQW5CLEVBRDhCO0FBRTlCLFVBQUksS0FBSyxRQUFMLEVBQWUsTUFBTSxLQUFLLFFBQUwsRUFBZSxLQUFyQixFQUFuQjtLQUZGLE1BR08sSUFBSSxFQUFFLFFBQUYsQ0FBVyxJQUFYLEtBQW9CLEVBQUUsc0JBQUYsQ0FBeUIsSUFBekIsQ0FBcEIsRUFBb0Q7QUFDN0QsWUFBTSxLQUFLLElBQUwsRUFBVyxLQUFqQixFQUQ2RDtBQUU3RCxZQUFNLEtBQUssS0FBTCxFQUFZLEtBQWxCLEVBRjZEO0tBQXhELE1BR0EsSUFBSSxFQUFFLGdCQUFGLENBQW1CLElBQW5CLENBQUosRUFBOEI7QUFDbkMsWUFBTSxPQUFOLEdBQWdCLElBQWhCLENBRG1DO0FBRW5DLFlBQU0sS0FBSyxNQUFMLEVBQWEsS0FBbkIsRUFGbUM7S0FBOUIsTUFHQSxJQUFJLEVBQUUsVUFBRixDQUFhLElBQWIsQ0FBSixFQUF3QjtBQUM3QixZQUFNLFdBQU4sR0FBb0IsSUFBcEIsQ0FENkI7S0FBeEIsTUFFQSxJQUFJLEVBQUUsWUFBRixDQUFlLElBQWYsQ0FBSixFQUEwQjtBQUMvQixZQUFNLFNBQU4sR0FBa0IsTUFBTSxTQUFOLElBQW1CLFNBQVMsS0FBSyxNQUFMLENBQTVCLENBRGE7S0FBMUI7O0FBSVAsV0FBTyxLQUFQLENBbEJtQjtHQUFyQjs7Ozs7O0FBeUJBLFdBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QjtBQUN0QixRQUFJLEVBQUUsa0JBQUYsQ0FBcUIsSUFBckIsQ0FBSixFQUFnQztBQUM5QixhQUFPLFNBQVMsS0FBSyxNQUFMLENBQVQsSUFBeUIsU0FBUyxLQUFLLFFBQUwsQ0FBbEMsQ0FEdUI7S0FBaEMsTUFFTyxJQUFJLEVBQUUsWUFBRixDQUFlLElBQWYsQ0FBSixFQUEwQjtBQUMvQixhQUFPLEtBQUssSUFBTCxLQUFjLFNBQWQsSUFBMkIsS0FBSyxJQUFMLENBQVUsQ0FBVixNQUFpQixHQUFqQixDQURIO0tBQTFCLE1BRUEsSUFBSSxFQUFFLGdCQUFGLENBQW1CLElBQW5CLENBQUosRUFBOEI7QUFDbkMsYUFBTyxTQUFTLEtBQUssTUFBTCxDQUFoQixDQURtQztLQUE5QixNQUVBLElBQUksRUFBRSxRQUFGLENBQVcsSUFBWCxLQUFvQixFQUFFLHNCQUFGLENBQXlCLElBQXpCLENBQXBCLEVBQW9EO0FBQzdELGFBQU8sRUFBRSxZQUFGLENBQWUsS0FBSyxJQUFMLENBQWYsSUFBNkIsU0FBUyxLQUFLLElBQUwsQ0FBdEMsSUFBb0QsU0FBUyxLQUFLLEtBQUwsQ0FBN0QsQ0FEc0Q7S0FBeEQsTUFFQTtBQUNMLGFBQU8sS0FBUCxDQURLO0tBRkE7R0FQVDs7Ozs7O0FBa0JBLFdBQVMsTUFBVCxDQUFnQixJQUFoQixFQUFzQjtBQUNwQixXQUFPLEVBQUUsU0FBRixDQUFZLElBQVosS0FBcUIsRUFBRSxrQkFBRixDQUFxQixJQUFyQixDQUFyQixJQUFtRCxFQUFFLGlCQUFGLENBQW9CLElBQXBCLENBQW5ELElBQWdGLEVBQUUsWUFBRixDQUFlLElBQWYsQ0FBaEYsSUFBd0csRUFBRSxrQkFBRixDQUFxQixJQUFyQixDQUF4RyxDQURhO0dBQXRCOzs7Ozs7Ozs7QUFuRUksNkJBQXVCLFFBQVEsdUJBQVI7QUFFdkIsOEJBQXdCLHVCQUF1QixvQkFBdkI7QUFFeEIsOEJBQXdCLFFBQVEsd0JBQVI7QUFFeEIsK0JBQXlCLHVCQUF1QixxQkFBdkI7QUFFekIsNkJBQXVCLFFBQVEsdUJBQVI7QUFFdkIsOEJBQXdCLHVCQUF1QixvQkFBdkI7QUFFeEIsZUFBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQTZEUixjQUFRLEtBQVIsR0FBZ0I7Ozs7OztBQU1kLDhCQUFzQixTQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DO0FBQ3hELGNBQUksUUFBUSxNQUFNLEtBQUssS0FBTCxDQUFkLENBRG9EO0FBRXhELGNBQUksTUFBTSxPQUFOLElBQWlCLE1BQU0sU0FBTixJQUFtQixNQUFNLFdBQU4sRUFBbUI7QUFDekQsbUJBQU87QUFDTCxzQkFBUSxNQUFNLFdBQU47QUFDUixxQkFBTyxJQUFQO2FBRkYsQ0FEeUQ7V0FBM0Q7U0FGb0I7Ozs7OztBQWN0QixvQkFBWSxTQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEIsTUFBMUIsRUFBa0M7QUFDNUMsaUJBQU87QUFDTCxvQkFBUSxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsSUFBMEIsT0FBTyxLQUFQLENBQWEsQ0FBYixNQUFvQixJQUFwQjtXQURwQyxDQUQ0QztTQUFsQzs7Ozs7O0FBVVosMkJBQW1CLFNBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUM7QUFDbEQsY0FBSSxFQUFFLFVBQUYsQ0FBYSxLQUFLLElBQUwsQ0FBYixJQUEyQixFQUFFLFVBQUYsQ0FBYSxLQUFLLEtBQUwsQ0FBeEMsRUFBcUQ7QUFDdkQsbUJBQU87QUFDTCxxQkFBTyxJQUFQO2FBREYsQ0FEdUQ7V0FBekQ7U0FEaUI7Ozs7OztBQVluQixpQkFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUI7QUFDOUIsY0FBSSxLQUFLLEtBQUwsS0FBZSxZQUFmLEVBQTZCO0FBQy9CLG1CQUFPO0FBQ0wscUJBQU8sSUFBUDthQURGLENBRCtCO1dBQWpDO1NBRE87Ozs7OztBQVlULHdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDNUMsY0FBSSxFQUFFLFVBQUYsQ0FBYSxLQUFLLE1BQUwsQ0FBYixJQUE2QixTQUFTLElBQVQsQ0FBN0IsRUFBNkM7QUFDL0MsbUJBQU87QUFDTCxzQkFBUSxJQUFSO0FBQ0EscUJBQU8sSUFBUDthQUZGLENBRCtDO1dBQWpEO1NBRGM7Ozs7OztBQWFoQiw2QkFBcUIsU0FBUyxtQkFBVCxDQUE2QixJQUE3QixFQUFtQztBQUN0RCxlQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEIsR0FBOUMsRUFBbUQ7QUFDakQsZ0JBQUksU0FBUyxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBVCxDQUQ2Qzs7QUFHakQsZ0JBQUksVUFBVSxTQUFTLE9BQU8sRUFBUCxDQUFULElBQXVCLENBQUMsT0FBTyxPQUFPLElBQVAsQ0FBUixDQUhZO0FBSWpELGdCQUFJLENBQUMsT0FBRCxFQUFVO0FBQ1osa0JBQUksUUFBUSxNQUFNLE9BQU8sSUFBUCxDQUFkLENBRFE7QUFFWix3QkFBVSxTQUFTLE9BQU8sSUFBUCxDQUFULElBQXlCLE1BQU0sT0FBTixJQUFpQixNQUFNLFdBQU4sQ0FGeEM7YUFBZDs7QUFLQSxnQkFBSSxPQUFKLEVBQWE7QUFDWCxxQkFBTztBQUNMLHdCQUFRLElBQVI7QUFDQSx1QkFBTyxJQUFQO2VBRkYsQ0FEVzthQUFiO1dBVEY7U0FEbUI7Ozs7OztBQXVCckIscUJBQWEsU0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCO0FBQ3RDLGNBQUksRUFBRSxnQkFBRixDQUFtQixLQUFLLFVBQUwsQ0FBdkIsRUFBeUM7QUFDdkMsbUJBQU87QUFDTCxzQkFBUSxJQUFSO0FBQ0EscUJBQU8sSUFBUDthQUZGLENBRHVDO1dBQXpDO1NBRFc7T0ExRmY7Ozs7OztBQXdHQSxjQUFRLEtBQVIsQ0FBYyxRQUFkLEdBQXlCLFFBQVEsS0FBUixDQUFjLGNBQWQsR0FBK0IsVUFBVSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCO0FBQzlFLFlBQUksT0FBTyxVQUFQLENBQWtCLENBQWxCLE1BQXlCLElBQXpCLEVBQStCO0FBQ2pDLGlCQUFPO0FBQ0wsb0JBQVEsSUFBUjtXQURGLENBRGlDO1NBQW5DO09BRHNEOzs7Ozs7QUFZeEQsY0FBUSxJQUFSLEdBQWU7Ozs7OztBQU1iLDZCQUFxQixTQUFTLG1CQUFULENBQTZCLElBQTdCLEVBQW1DO0FBQ3RELGlCQUFPLHNCQUFzQixTQUF0QixFQUFpQyxLQUFLLFlBQUwsRUFBbUIsTUFBcEQsQ0FBUCxDQURzRDtTQUFuQzs7Ozs7O0FBUXJCLHlCQUFpQixTQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0I7QUFDOUMsaUJBQU8sS0FBSyxRQUFMLENBRHVDO1NBQS9COzs7Ozs7QUFRakIsMEJBQWtCLFNBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0M7QUFDaEQsaUJBQU8sS0FBSyxVQUFMLENBRHlDO1NBQWhDO09BdEJwQjs7Ozs7O0FBK0JBLDZCQUF1QixTQUF2QixFQUFrQztBQUNoQyxrQkFBVSxJQUFWO0FBQ0EsZUFBTyxJQUFQO0FBQ0EsY0FBTSxJQUFOO0FBQ0EsMEJBQWtCLElBQWxCO0FBQ0EseUJBQWlCLElBQWpCO0FBQ0Esc0JBQWMsSUFBZDtPQU5GLEVBT0csVUFBVSxPQUFWLEVBQW1CLElBQW5CLEVBQXlCO0FBQzFCLFlBQUksc0JBQXNCLFNBQXRCLEVBQWlDLE9BQWpDLENBQUosRUFBK0M7QUFDN0Msb0JBQVUsRUFBRSxPQUFPLE9BQVAsRUFBZ0IsUUFBUSxPQUFSLEVBQTVCLENBRDZDO1NBQS9DOztBQUlBLCtCQUF1QixTQUF2QixFQUFrQyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQWMsRUFBRSxrQkFBRixDQUFxQixJQUFyQixLQUE4QixFQUE5QixDQUFoRCxFQUFtRixVQUFVLElBQVYsRUFBZ0I7QUFDakcsa0JBQVEsS0FBUixDQUFjLElBQWQsSUFBc0IsWUFBWTtBQUNoQyxtQkFBTyxPQUFQLENBRGdDO1dBQVosQ0FEMkU7U0FBaEIsQ0FBbkYsQ0FMMEI7T0FBekIsQ0FQSCIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL2dlbmVyYXRpb24vbm9kZS93aGl0ZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaExhbmdJc0Jvb2xlYW4gPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvaXNCb29sZWFuXCIpO1xuXG52YXIgX2xvZGFzaExhbmdJc0Jvb2xlYW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzQm9vbGVhbik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkVhY2ggPSByZXF1aXJlKFwibG9kYXNoL2NvbGxlY3Rpb24vZWFjaFwiKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uRWFjaCk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbk1hcCA9IHJlcXVpcmUoXCJsb2Rhc2gvY29sbGVjdGlvbi9tYXBcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbk1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uTWFwKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIENyYXdsIGEgbm9kZSB0byB0ZXN0IGlmIGl0IGNvbnRhaW5zIGEgQ2FsbEV4cHJlc3Npb24sIGEgRnVuY3Rpb24sIG9yIGEgSGVscGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjcmF3bChub2RlKVxuICogLy8geyBoYXNDYWxsOiBmYWxzZSwgaGFzRnVuY3Rpb246IHRydWUsIGhhc0hlbHBlcjogZmFsc2UgfVxuICovXG5cbmZ1bmN0aW9uIGNyYXdsKG5vZGUpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgY3Jhd2wobm9kZS5vYmplY3QsIHN0YXRlKTtcbiAgICBpZiAobm9kZS5jb21wdXRlZCkgY3Jhd2wobm9kZS5wcm9wZXJ0eSwgc3RhdGUpO1xuICB9IGVsc2UgaWYgKHQuaXNCaW5hcnkobm9kZSkgfHwgdC5pc0Fzc2lnbm1lbnRFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgY3Jhd2wobm9kZS5sZWZ0LCBzdGF0ZSk7XG4gICAgY3Jhd2wobm9kZS5yaWdodCwgc3RhdGUpO1xuICB9IGVsc2UgaWYgKHQuaXNDYWxsRXhwcmVzc2lvbihub2RlKSkge1xuICAgIHN0YXRlLmhhc0NhbGwgPSB0cnVlO1xuICAgIGNyYXdsKG5vZGUuY2FsbGVlLCBzdGF0ZSk7XG4gIH0gZWxzZSBpZiAodC5pc0Z1bmN0aW9uKG5vZGUpKSB7XG4gICAgc3RhdGUuaGFzRnVuY3Rpb24gPSB0cnVlO1xuICB9IGVsc2UgaWYgKHQuaXNJZGVudGlmaWVyKG5vZGUpKSB7XG4gICAgc3RhdGUuaGFzSGVscGVyID0gc3RhdGUuaGFzSGVscGVyIHx8IGlzSGVscGVyKG5vZGUuY2FsbGVlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIGEgbm9kZSBpcyBvciBoYXMgYSBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gaXNIZWxwZXIobm9kZSkge1xuICBpZiAodC5pc01lbWJlckV4cHJlc3Npb24obm9kZSkpIHtcbiAgICByZXR1cm4gaXNIZWxwZXIobm9kZS5vYmplY3QpIHx8IGlzSGVscGVyKG5vZGUucHJvcGVydHkpO1xuICB9IGVsc2UgaWYgKHQuaXNJZGVudGlmaWVyKG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUubmFtZSA9PT0gXCJyZXF1aXJlXCIgfHwgbm9kZS5uYW1lWzBdID09PSBcIl9cIjtcbiAgfSBlbHNlIGlmICh0LmlzQ2FsbEV4cHJlc3Npb24obm9kZSkpIHtcbiAgICByZXR1cm4gaXNIZWxwZXIobm9kZS5jYWxsZWUpO1xuICB9IGVsc2UgaWYgKHQuaXNCaW5hcnkobm9kZSkgfHwgdC5pc0Fzc2lnbm1lbnRFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgcmV0dXJuIHQuaXNJZGVudGlmaWVyKG5vZGUubGVmdCkgJiYgaXNIZWxwZXIobm9kZS5sZWZ0KSB8fCBpc0hlbHBlcihub2RlLnJpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBpc1R5cGUobm9kZSkge1xuICByZXR1cm4gdC5pc0xpdGVyYWwobm9kZSkgfHwgdC5pc09iamVjdEV4cHJlc3Npb24obm9kZSkgfHwgdC5pc0FycmF5RXhwcmVzc2lvbihub2RlKSB8fCB0LmlzSWRlbnRpZmllcihub2RlKSB8fCB0LmlzTWVtYmVyRXhwcmVzc2lvbihub2RlKTtcbn1cblxuLyoqXG4gKiBUZXN0cyBmb3Igbm9kZSB0eXBlcyB0aGF0IG5lZWQgd2hpdGVzcGFjZS5cbiAqL1xuXG5leHBvcnRzLm5vZGVzID0ge1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIEFzc2lnbm1lbnRFeHByZXNzaW9uIG5lZWRzIHdoaXRlc3BhY2UuXG4gICAqL1xuXG4gIEFzc2lnbm1lbnRFeHByZXNzaW9uOiBmdW5jdGlvbiBBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlKSB7XG4gICAgdmFyIHN0YXRlID0gY3Jhd2wobm9kZS5yaWdodCk7XG4gICAgaWYgKHN0YXRlLmhhc0NhbGwgJiYgc3RhdGUuaGFzSGVscGVyIHx8IHN0YXRlLmhhc0Z1bmN0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiZWZvcmU6IHN0YXRlLmhhc0Z1bmN0aW9uLFxuICAgICAgICBhZnRlcjogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgU3dpdGNoQ2FzZSBuZWVkcyB3aGl0ZXNwYWNlLlxuICAgKi9cblxuICBTd2l0Y2hDYXNlOiBmdW5jdGlvbiBTd2l0Y2hDYXNlKG5vZGUsIHBhcmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICBiZWZvcmU6IG5vZGUuY29uc2VxdWVudC5sZW5ndGggfHwgcGFyZW50LmNhc2VzWzBdID09PSBub2RlXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogVGVzdCBpZiBMb2dpY2FsRXhwcmVzc2lvbiBuZWVkcyB3aGl0ZXNwYWNlLlxuICAgKi9cblxuICBMb2dpY2FsRXhwcmVzc2lvbjogZnVuY3Rpb24gTG9naWNhbEV4cHJlc3Npb24obm9kZSkge1xuICAgIGlmICh0LmlzRnVuY3Rpb24obm9kZS5sZWZ0KSB8fCB0LmlzRnVuY3Rpb24obm9kZS5yaWdodCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFmdGVyOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGVzdCBpZiBMaXRlcmFsIG5lZWRzIHdoaXRlc3BhY2UuXG4gICAqL1xuXG4gIExpdGVyYWw6IGZ1bmN0aW9uIExpdGVyYWwobm9kZSkge1xuICAgIGlmIChub2RlLnZhbHVlID09PSBcInVzZSBzdHJpY3RcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWZ0ZXI6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIENhbGxFeHByZXNzaW9uIG5lZWRzIHdoaXRlc3BhY2UuXG4gICAqL1xuXG4gIENhbGxFeHByZXNzaW9uOiBmdW5jdGlvbiBDYWxsRXhwcmVzc2lvbihub2RlKSB7XG4gICAgaWYgKHQuaXNGdW5jdGlvbihub2RlLmNhbGxlZSkgfHwgaXNIZWxwZXIobm9kZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJlZm9yZTogdHJ1ZSxcbiAgICAgICAgYWZ0ZXI6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIFZhcmlhYmxlRGVjbGFyYXRpb24gbmVlZHMgd2hpdGVzcGFjZS5cbiAgICovXG5cbiAgVmFyaWFibGVEZWNsYXJhdGlvbjogZnVuY3Rpb24gVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmRlY2xhcmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlY2xhciA9IG5vZGUuZGVjbGFyYXRpb25zW2ldO1xuXG4gICAgICB2YXIgZW5hYmxlZCA9IGlzSGVscGVyKGRlY2xhci5pZCkgJiYgIWlzVHlwZShkZWNsYXIuaW5pdCk7XG4gICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gY3Jhd2woZGVjbGFyLmluaXQpO1xuICAgICAgICBlbmFibGVkID0gaXNIZWxwZXIoZGVjbGFyLmluaXQpICYmIHN0YXRlLmhhc0NhbGwgfHwgc3RhdGUuaGFzRnVuY3Rpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmVmb3JlOiB0cnVlLFxuICAgICAgICAgIGFmdGVyOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIElmU3RhdGVtZW50IG5lZWRzIHdoaXRlc3BhY2UuXG4gICAqL1xuXG4gIElmU3RhdGVtZW50OiBmdW5jdGlvbiBJZlN0YXRlbWVudChub2RlKSB7XG4gICAgaWYgKHQuaXNCbG9ja1N0YXRlbWVudChub2RlLmNvbnNlcXVlbnQpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiZWZvcmU6IHRydWUsXG4gICAgICAgIGFmdGVyOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBUZXN0IGlmIFByb3BlcnR5IG9yIFNwcmVhZFByb3BlcnR5IG5lZWRzIHdoaXRlc3BhY2UuXG4gKi9cblxuZXhwb3J0cy5ub2Rlcy5Qcm9wZXJ0eSA9IGV4cG9ydHMubm9kZXMuU3ByZWFkUHJvcGVydHkgPSBmdW5jdGlvbiAobm9kZSwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQucHJvcGVydGllc1swXSA9PT0gbm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBiZWZvcmU6IHRydWVcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgbGlzdHMgZnJvbSBub2RlIHR5cGVzIHRoYXQgbmVlZCB3aGl0ZXNwYWNlLlxuICovXG5cbmV4cG9ydHMubGlzdCA9IHtcblxuICAvKipcbiAgICogUmV0dXJuIFZhcmlhYmxlRGVjbGFyYXRpb24gZGVjbGFyYXRpb25zIGluaXQgcHJvcGVydGllcy5cbiAgICovXG5cbiAgVmFyaWFibGVEZWNsYXJhdGlvbjogZnVuY3Rpb24gVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIF9sb2Rhc2hDb2xsZWN0aW9uTWFwMltcImRlZmF1bHRcIl0obm9kZS5kZWNsYXJhdGlvbnMsIFwiaW5pdFwiKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIFZhcmlhYmxlRGVjbGFyYXRpb24gZWxlbWVudHMuXG4gICAqL1xuXG4gIEFycmF5RXhwcmVzc2lvbjogZnVuY3Rpb24gQXJyYXlFeHByZXNzaW9uKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5lbGVtZW50cztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIFZhcmlhYmxlRGVjbGFyYXRpb24gcHJvcGVydGllcy5cbiAgICovXG5cbiAgT2JqZWN0RXhwcmVzc2lvbjogZnVuY3Rpb24gT2JqZWN0RXhwcmVzc2lvbihub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUucHJvcGVydGllcztcbiAgfVxufTtcblxuLyoqXG4gKiBBZGQgd2hpdGVzcGFjZSB0ZXN0cyBmb3Igbm9kZXMgYW5kIHRoZWlyIGFsaWFzZXMuXG4gKi9cblxuX2xvZGFzaENvbGxlY3Rpb25FYWNoMltcImRlZmF1bHRcIl0oe1xuICBGdW5jdGlvbjogdHJ1ZSxcbiAgQ2xhc3M6IHRydWUsXG4gIExvb3A6IHRydWUsXG4gIExhYmVsZWRTdGF0ZW1lbnQ6IHRydWUsXG4gIFN3aXRjaFN0YXRlbWVudDogdHJ1ZSxcbiAgVHJ5U3RhdGVtZW50OiB0cnVlXG59LCBmdW5jdGlvbiAoYW1vdW50cywgdHlwZSkge1xuICBpZiAoX2xvZGFzaExhbmdJc0Jvb2xlYW4yW1wiZGVmYXVsdFwiXShhbW91bnRzKSkge1xuICAgIGFtb3VudHMgPSB7IGFmdGVyOiBhbW91bnRzLCBiZWZvcmU6IGFtb3VudHMgfTtcbiAgfVxuXG4gIF9sb2Rhc2hDb2xsZWN0aW9uRWFjaDJbXCJkZWZhdWx0XCJdKFt0eXBlXS5jb25jYXQodC5GTElQUEVEX0FMSUFTX0tFWVNbdHlwZV0gfHwgW10pLCBmdW5jdGlvbiAodHlwZSkge1xuICAgIGV4cG9ydHMubm9kZXNbdHlwZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYW1vdW50cztcbiAgICB9O1xuICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
