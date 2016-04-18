/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, visitor;

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

  function statementList(key, path) {
    var paths = path.get(key);

    for (var i = 0; i < paths.length; i++) {
      var _path = paths[i];

      var func = _path.node;
      if (!t.isFunctionDeclaration(func)) continue;

      var declar = t.variableDeclaration("let", [t.variableDeclarator(func.id, t.toExpression(func))]);

      // hoist it up above everything else
      declar._blockHoist = 2;

      // todo: name this
      func.id = null;

      _path.replaceWith(declar);
    }
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        BlockStatement: function BlockStatement(node, parent) {
          if (t.isFunction(parent) && parent.body === node || t.isExportDeclaration(parent)) {
            return;
          }

          statementList("body", this);
        },

        /**
         * [Please add a description.]
         */

        SwitchCase: function SwitchCase() {
          statementList("consequent", this);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL3NwZWMvYmxvY2stc2NvcGVkLWZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7OztBQVVBLFdBQVMsYUFBVCxDQUF1QixHQUF2QixFQUE0QixJQUE1QixFQUFrQztBQUNoQyxRQUFJLFFBQVEsS0FBSyxHQUFMLENBQVMsR0FBVCxDQUFSLENBRDRCOztBQUdoQyxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxHQUFsQyxFQUF1QztBQUNyQyxVQUFJLFFBQVEsTUFBTSxDQUFOLENBQVIsQ0FEaUM7O0FBR3JDLFVBQUksT0FBTyxNQUFNLElBQU4sQ0FIMEI7QUFJckMsVUFBSSxDQUFDLEVBQUUscUJBQUYsQ0FBd0IsSUFBeEIsQ0FBRCxFQUFnQyxTQUFwQzs7QUFFQSxVQUFJLFNBQVMsRUFBRSxtQkFBRixDQUFzQixLQUF0QixFQUE2QixDQUFDLEVBQUUsa0JBQUYsQ0FBcUIsS0FBSyxFQUFMLEVBQVMsRUFBRSxZQUFGLENBQWUsSUFBZixDQUE5QixDQUFELENBQTdCLENBQVQ7OztBQU5pQyxZQVNyQyxDQUFPLFdBQVAsR0FBcUIsQ0FBckI7OztBQVRxQyxVQVlyQyxDQUFLLEVBQUwsR0FBVSxJQUFWLENBWnFDOztBQWNyQyxZQUFNLFdBQU4sQ0FBa0IsTUFBbEIsRUFkcUM7S0FBdkM7R0FIRjs7Ozs7Ozs7O0FBYkEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUErQkosZ0JBQVU7Ozs7OztBQU1aLHdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsTUFBOUIsRUFBc0M7QUFDcEQsY0FBSSxFQUFFLFVBQUYsQ0FBYSxNQUFiLEtBQXdCLE9BQU8sSUFBUCxLQUFnQixJQUFoQixJQUF3QixFQUFFLG1CQUFGLENBQXNCLE1BQXRCLENBQWhELEVBQStFO0FBQ2pGLG1CQURpRjtXQUFuRjs7QUFJQSx3QkFBYyxNQUFkLEVBQXNCLElBQXRCLEVBTG9EO1NBQXRDOzs7Ozs7QUFZaEIsb0JBQVksU0FBUyxVQUFULEdBQXNCO0FBQ2hDLHdCQUFjLFlBQWQsRUFBNEIsSUFBNUIsRUFEZ0M7U0FBdEI7OztBQUlkLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9zcGVjL2Jsb2NrLXNjb3BlZC1mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRMaXN0KGtleSwgcGF0aCkge1xuICB2YXIgcGF0aHMgPSBwYXRoLmdldChrZXkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3BhdGggPSBwYXRoc1tpXTtcblxuICAgIHZhciBmdW5jID0gX3BhdGgubm9kZTtcbiAgICBpZiAoIXQuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKGZ1bmMpKSBjb250aW51ZTtcblxuICAgIHZhciBkZWNsYXIgPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJsZXRcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKGZ1bmMuaWQsIHQudG9FeHByZXNzaW9uKGZ1bmMpKV0pO1xuXG4gICAgLy8gaG9pc3QgaXQgdXAgYWJvdmUgZXZlcnl0aGluZyBlbHNlXG4gICAgZGVjbGFyLl9ibG9ja0hvaXN0ID0gMjtcblxuICAgIC8vIHRvZG86IG5hbWUgdGhpc1xuICAgIGZ1bmMuaWQgPSBudWxsO1xuXG4gICAgX3BhdGgucmVwbGFjZVdpdGgoZGVjbGFyKTtcbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uIEJsb2NrU3RhdGVtZW50KG5vZGUsIHBhcmVudCkge1xuICAgIGlmICh0LmlzRnVuY3Rpb24ocGFyZW50KSAmJiBwYXJlbnQuYm9keSA9PT0gbm9kZSB8fCB0LmlzRXhwb3J0RGVjbGFyYXRpb24ocGFyZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXRlbWVudExpc3QoXCJib2R5XCIsIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU3dpdGNoQ2FzZTogZnVuY3Rpb24gU3dpdGNoQ2FzZSgpIHtcbiAgICBzdGF0ZW1lbnRMaXN0KFwiY29uc2VxdWVudFwiLCB0aGlzKTtcbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
