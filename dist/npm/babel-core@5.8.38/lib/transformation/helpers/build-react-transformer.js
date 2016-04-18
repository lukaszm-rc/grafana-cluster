/* */
"format cjs";
// Based upon the excellent jsx-transpiler by Ingvar Stepanyan (RReverser)
// https://github.com/RReverser/jsx-transpiler

// jsx

"use strict";

System.register([], function (_export, _context) {
  var _lodashLangIsString, _lodashLangIsString2, _messages, messages, _esutils, _esutils2, _react, react, _types, t;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_lodashLangIsString = require("lodash/lang/isString");
      _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);
      _messages = require("../../messages");
      messages = _interopRequireWildcard(_messages);
      _esutils = require("esutils");
      _esutils2 = _interopRequireDefault(_esutils);
      _react = require("./react");
      react = _interopRequireWildcard(_react);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);


      /**
       * [Please add a description.]
       */

      exports["default"] = function (opts) {
        var visitor = {};

        /**
         * [Please add a description.]
         */

        visitor.JSXIdentifier = function (node) {
          if (node.name === "this" && this.isReferenced()) {
            return t.thisExpression();
          } else if (_esutils2["default"].keyword.isIdentifierNameES6(node.name)) {
            node.type = "Identifier";
          } else {
            return t.literal(node.name);
          }
        };

        /**
         * [Please add a description.]
         */

        visitor.JSXNamespacedName = function () {
          throw this.errorWithNode(messages.get("JSXNamespacedTags"));
        };

        /**
         * [Please add a description.]
         */

        visitor.JSXMemberExpression = {
          exit: function exit(node) {
            node.computed = t.isLiteral(node.property);
            node.type = "MemberExpression";
          }
        };

        /**
         * [Please add a description.]
         */

        visitor.JSXExpressionContainer = function (node) {
          return node.expression;
        };

        /**
         * [Please add a description.]
         */

        visitor.JSXAttribute = {
          enter: function enter(node) {
            var value = node.value;
            if (t.isLiteral(value) && _lodashLangIsString2["default"](value.value)) {
              value.value = value.value.replace(/\n\s+/g, " ");
            }
          },

          exit: function exit(node) {
            var value = node.value || t.literal(true);
            return t.inherits(t.property("init", node.name, value), node);
          }
        };

        /**
         * [Please add a description.]
         */

        visitor.JSXOpeningElement = {
          exit: function exit(node, parent, scope, file) {
            parent.children = react.buildChildren(parent);

            var tagExpr = node.name;
            var args = [];

            var tagName;
            if (t.isIdentifier(tagExpr)) {
              tagName = tagExpr.name;
            } else if (t.isLiteral(tagExpr)) {
              tagName = tagExpr.value;
            }

            var state = {
              tagExpr: tagExpr,
              tagName: tagName,
              args: args
            };

            if (opts.pre) {
              opts.pre(state, file);
            }

            var attribs = node.attributes;
            if (attribs.length) {
              attribs = buildJSXOpeningElementAttributes(attribs, file);
            } else {
              attribs = t.literal(null);
            }

            args.push(attribs);

            if (opts.post) {
              opts.post(state, file);
            }

            return state.call || t.callExpression(state.callee, args);
          }
        };

        /**
         * The logic for this is quite terse. It's because we need to
         * support spread elements. We loop over all attributes,
         * breaking on spreads, we then push a new object containg
         * all prior attributes to an array for later processing.
         */

        var buildJSXOpeningElementAttributes = function buildJSXOpeningElementAttributes(attribs, file) {
          var _props = [];
          var objs = [];

          var pushProps = function pushProps() {
            if (!_props.length) return;

            objs.push(t.objectExpression(_props));
            _props = [];
          };

          while (attribs.length) {
            var prop = attribs.shift();
            if (t.isJSXSpreadAttribute(prop)) {
              pushProps();
              objs.push(prop.argument);
            } else {
              _props.push(prop);
            }
          }

          pushProps();

          if (objs.length === 1) {
            // only one object
            attribs = objs[0];
          } else {
            // looks like we have multiple objects
            if (!t.isObjectExpression(objs[0])) {
              objs.unshift(t.objectExpression([]));
            }

            // spread it
            attribs = t.callExpression(file.addHelper("extends"), objs);
          }

          return attribs;
        };

        /**
         * [Please add a description.]
         */

        visitor.JSXElement = {
          exit: function exit(node) {
            var callExpr = node.openingElement;

            callExpr.arguments = callExpr.arguments.concat(node.children);

            if (callExpr.arguments.length >= 3) {
              callExpr._prettyCall = true;
            }

            return t.inherits(callExpr, node);
          }
        };

        return visitor;
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9idWlsZC1yZWFjdC10cmFuc2Zvcm1lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7OztBQU1BOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksc0JBQXNCLFFBQVEsc0JBQVI7QUFFdEIsNkJBQXVCLHVCQUF1QixtQkFBdkI7QUFFdkIsa0JBQVksUUFBUSxnQkFBUjtBQUVaLGlCQUFXLHdCQUF3QixTQUF4QjtBQUVYLGlCQUFXLFFBQVEsU0FBUjtBQUVYLGtCQUFZLHVCQUF1QixRQUF2QjtBQUVaLGVBQVMsUUFBUSxTQUFSO0FBRVQsY0FBUSx3QkFBd0IsTUFBeEI7QUFFUixlQUFTLFFBQVEsYUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCOzs7Ozs7O0FBTVIs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S0FBZ0IsQ0FBaEIsRUFBbUI7O0FBRXJCLHNCQUFVLEtBQUssQ0FBTCxDQUFWLENBRnFCO1dBQXZCLE1BR087O0FBRUwsZ0JBQUksQ0FBQyxFQUFFLGtCQUFGLENBQXFCLEtBQUssQ0FBTCxDQUFyQixDQUFELEVBQWdDO0FBQ2xDLG1CQUFLLE9BQUwsQ0FBYSxFQUFFLGdCQUFGLENBQW1CLEVBQW5CLENBQWIsRUFEa0M7YUFBcEM7OztBQUZLLG1CQU9MLEdBQVUsRUFBRSxjQUFGLENBQWlCLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FBakIsRUFBNEMsSUFBNUMsQ0FBVixDQVBLO1dBSFA7O0FBYUEsaUJBQU8sT0FBUCxDQXBDOEY7U0FBekQ7Ozs7OztBQWxISixlQTZKbkMsQ0FBUSxVQUFSLEdBQXFCO0FBQ25CLGdCQUFNLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0I7QUFDeEIsZ0JBQUksV0FBVyxLQUFLLGNBQUwsQ0FEUzs7QUFHeEIscUJBQVMsU0FBVCxHQUFxQixTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsS0FBSyxRQUFMLENBQS9DLENBSHdCOztBQUt4QixnQkFBSSxTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsSUFBNkIsQ0FBN0IsRUFBZ0M7QUFDbEMsdUJBQVMsV0FBVCxHQUF1QixJQUF2QixDQURrQzthQUFwQzs7QUFJQSxtQkFBTyxFQUFFLFFBQUYsQ0FBVyxRQUFYLEVBQXFCLElBQXJCLENBQVAsQ0FUd0I7V0FBcEI7U0FEUixDQTdKbUM7O0FBMktuQyxlQUFPLE9BQVAsQ0EzS21DO09BQWhCOztBQThLckIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2hlbHBlcnMvYnVpbGQtcmVhY3QtdHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLy8gQmFzZWQgdXBvbiB0aGUgZXhjZWxsZW50IGpzeC10cmFuc3BpbGVyIGJ5IEluZ3ZhciBTdGVwYW55YW4gKFJSZXZlcnNlcilcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9SUmV2ZXJzZXIvanN4LXRyYW5zcGlsZXJcblxuLy8ganN4XG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hMYW5nSXNTdHJpbmcgPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvaXNTdHJpbmdcIik7XG5cbnZhciBfbG9kYXNoTGFuZ0lzU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaExhbmdJc1N0cmluZyk7XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfZXN1dGlscyA9IHJlcXVpcmUoXCJlc3V0aWxzXCIpO1xuXG52YXIgX2VzdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXN1dGlscyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwiLi9yZWFjdFwiKTtcblxudmFyIHJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0KTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIHZpc2l0b3IgPSB7fTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIHZpc2l0b3IuSlNYSWRlbnRpZmllciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUubmFtZSA9PT0gXCJ0aGlzXCIgJiYgdGhpcy5pc1JlZmVyZW5jZWQoKSkge1xuICAgICAgcmV0dXJuIHQudGhpc0V4cHJlc3Npb24oKTtcbiAgICB9IGVsc2UgaWYgKF9lc3V0aWxzMltcImRlZmF1bHRcIl0ua2V5d29yZC5pc0lkZW50aWZpZXJOYW1lRVM2KG5vZGUubmFtZSkpIHtcbiAgICAgIG5vZGUudHlwZSA9IFwiSWRlbnRpZmllclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdC5saXRlcmFsKG5vZGUubmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgdmlzaXRvci5KU1hOYW1lc3BhY2VkTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyB0aGlzLmVycm9yV2l0aE5vZGUobWVzc2FnZXMuZ2V0KFwiSlNYTmFtZXNwYWNlZFRhZ3NcIikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgdmlzaXRvci5KU1hNZW1iZXJFeHByZXNzaW9uID0ge1xuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSkge1xuICAgICAgbm9kZS5jb21wdXRlZCA9IHQuaXNMaXRlcmFsKG5vZGUucHJvcGVydHkpO1xuICAgICAgbm9kZS50eXBlID0gXCJNZW1iZXJFeHByZXNzaW9uXCI7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgdmlzaXRvci5KU1hFeHByZXNzaW9uQ29udGFpbmVyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5leHByZXNzaW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgdmlzaXRvci5KU1hBdHRyaWJ1dGUgPSB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgICBpZiAodC5pc0xpdGVyYWwodmFsdWUpICYmIF9sb2Rhc2hMYW5nSXNTdHJpbmcyW1wiZGVmYXVsdFwiXSh2YWx1ZS52YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUudmFsdWUgPSB2YWx1ZS52YWx1ZS5yZXBsYWNlKC9cXG5cXHMrL2csIFwiIFwiKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZXhpdDogZnVuY3Rpb24gZXhpdChub2RlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlIHx8IHQubGl0ZXJhbCh0cnVlKTtcbiAgICAgIHJldHVybiB0LmluaGVyaXRzKHQucHJvcGVydHkoXCJpbml0XCIsIG5vZGUubmFtZSwgdmFsdWUpLCBub2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICB2aXNpdG9yLkpTWE9wZW5pbmdFbGVtZW50ID0ge1xuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuID0gcmVhY3QuYnVpbGRDaGlsZHJlbihwYXJlbnQpO1xuXG4gICAgICB2YXIgdGFnRXhwciA9IG5vZGUubmFtZTtcbiAgICAgIHZhciBhcmdzID0gW107XG5cbiAgICAgIHZhciB0YWdOYW1lO1xuICAgICAgaWYgKHQuaXNJZGVudGlmaWVyKHRhZ0V4cHIpKSB7XG4gICAgICAgIHRhZ05hbWUgPSB0YWdFeHByLm5hbWU7XG4gICAgICB9IGVsc2UgaWYgKHQuaXNMaXRlcmFsKHRhZ0V4cHIpKSB7XG4gICAgICAgIHRhZ05hbWUgPSB0YWdFeHByLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIHRhZ0V4cHI6IHRhZ0V4cHIsXG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRzLnByZSkge1xuICAgICAgICBvcHRzLnByZShzdGF0ZSwgZmlsZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdHRyaWJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgaWYgKGF0dHJpYnMubGVuZ3RoKSB7XG4gICAgICAgIGF0dHJpYnMgPSBidWlsZEpTWE9wZW5pbmdFbGVtZW50QXR0cmlidXRlcyhhdHRyaWJzLCBmaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHJpYnMgPSB0LmxpdGVyYWwobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaChhdHRyaWJzKTtcblxuICAgICAgaWYgKG9wdHMucG9zdCkge1xuICAgICAgICBvcHRzLnBvc3Qoc3RhdGUsIGZpbGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGUuY2FsbCB8fCB0LmNhbGxFeHByZXNzaW9uKHN0YXRlLmNhbGxlZSwgYXJncyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgbG9naWMgZm9yIHRoaXMgaXMgcXVpdGUgdGVyc2UuIEl0J3MgYmVjYXVzZSB3ZSBuZWVkIHRvXG4gICAqIHN1cHBvcnQgc3ByZWFkIGVsZW1lbnRzLiBXZSBsb29wIG92ZXIgYWxsIGF0dHJpYnV0ZXMsXG4gICAqIGJyZWFraW5nIG9uIHNwcmVhZHMsIHdlIHRoZW4gcHVzaCBhIG5ldyBvYmplY3QgY29udGFpbmdcbiAgICogYWxsIHByaW9yIGF0dHJpYnV0ZXMgdG8gYW4gYXJyYXkgZm9yIGxhdGVyIHByb2Nlc3NpbmcuXG4gICAqL1xuXG4gIHZhciBidWlsZEpTWE9wZW5pbmdFbGVtZW50QXR0cmlidXRlcyA9IGZ1bmN0aW9uIGJ1aWxkSlNYT3BlbmluZ0VsZW1lbnRBdHRyaWJ1dGVzKGF0dHJpYnMsIGZpbGUpIHtcbiAgICB2YXIgX3Byb3BzID0gW107XG4gICAgdmFyIG9ianMgPSBbXTtcblxuICAgIHZhciBwdXNoUHJvcHMgPSBmdW5jdGlvbiBwdXNoUHJvcHMoKSB7XG4gICAgICBpZiAoIV9wcm9wcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgb2Jqcy5wdXNoKHQub2JqZWN0RXhwcmVzc2lvbihfcHJvcHMpKTtcbiAgICAgIF9wcm9wcyA9IFtdO1xuICAgIH07XG5cbiAgICB3aGlsZSAoYXR0cmlicy5sZW5ndGgpIHtcbiAgICAgIHZhciBwcm9wID0gYXR0cmlicy5zaGlmdCgpO1xuICAgICAgaWYgKHQuaXNKU1hTcHJlYWRBdHRyaWJ1dGUocHJvcCkpIHtcbiAgICAgICAgcHVzaFByb3BzKCk7XG4gICAgICAgIG9ianMucHVzaChwcm9wLmFyZ3VtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9wcm9wcy5wdXNoKHByb3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1c2hQcm9wcygpO1xuXG4gICAgaWYgKG9ianMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBvbmx5IG9uZSBvYmplY3RcbiAgICAgIGF0dHJpYnMgPSBvYmpzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsb29rcyBsaWtlIHdlIGhhdmUgbXVsdGlwbGUgb2JqZWN0c1xuICAgICAgaWYgKCF0LmlzT2JqZWN0RXhwcmVzc2lvbihvYmpzWzBdKSkge1xuICAgICAgICBvYmpzLnVuc2hpZnQodC5vYmplY3RFeHByZXNzaW9uKFtdKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNwcmVhZCBpdFxuICAgICAgYXR0cmlicyA9IHQuY2FsbEV4cHJlc3Npb24oZmlsZS5hZGRIZWxwZXIoXCJleHRlbmRzXCIpLCBvYmpzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlicztcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIHZpc2l0b3IuSlNYRWxlbWVudCA9IHtcbiAgICBleGl0OiBmdW5jdGlvbiBleGl0KG5vZGUpIHtcbiAgICAgIHZhciBjYWxsRXhwciA9IG5vZGUub3BlbmluZ0VsZW1lbnQ7XG5cbiAgICAgIGNhbGxFeHByLmFyZ3VtZW50cyA9IGNhbGxFeHByLmFyZ3VtZW50cy5jb25jYXQobm9kZS5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChjYWxsRXhwci5hcmd1bWVudHMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgY2FsbEV4cHIuX3ByZXR0eUNhbGwgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdC5pbmhlcml0cyhjYWxsRXhwciwgbm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB2aXNpdG9yO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
