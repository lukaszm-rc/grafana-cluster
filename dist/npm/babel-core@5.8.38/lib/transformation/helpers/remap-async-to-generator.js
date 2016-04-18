/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, awaitVisitor, referenceVisitor;

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
      exports.__esModule = true;_types = require("../../types");
      t = _interopRequireWildcard(_types);
      awaitVisitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function() {
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        AwaitExpression: function AwaitExpression(node) {
          node.type = "YieldExpression";

          if (node.all) {
            // await* foo; -> yield Promise.all(foo);
            node.all = false;
            node.argument = t.callExpression(t.memberExpression(t.identifier("Promise"), t.identifier("all")), [node.argument]);
          }
        }
      };
      referenceVisitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          var name = state.id.name;
          if (node.name === name && scope.bindingIdentifierEquals(name, state.id)) {
            return state.ref = state.ref || scope.generateUidIdentifier(name);
          }
        }
      };


      /**
       * [Please add a description.]
       */

      exports["default"] = function (path, callId) {
        var node = path.node;

        node.async = false;
        node.generator = true;

        path.traverse(awaitVisitor, state);

        var call = t.callExpression(callId, [node]);

        var id = node.id;
        node.id = null;

        if (t.isFunctionDeclaration(node)) {
          var declar = t.variableDeclaration("let", [t.variableDeclarator(id, call)]);
          declar._blockHoist = true;
          return declar;
        } else {
          if (id) {
            var state = { id: id };
            path.traverse(referenceVisitor, state);

            if (state.ref) {
              path.scope.parent.push({ id: state.ref });
              return t.assignmentExpression("=", state.ref, call);
            }
          }

          return call;
        }
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9yZW1hcC1hc3luYy10by1nZW5lcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxhQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFNSixxQkFBZTs7Ozs7O0FBTWpCLGtCQUFVLFNBQVMsUUFBVCxHQUFvQjtBQUM1QixlQUFLLElBQUwsR0FENEI7U0FBcEI7Ozs7OztBQVFWLHlCQUFpQixTQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0I7QUFDOUMsZUFBSyxJQUFMLEdBQVksaUJBQVosQ0FEOEM7O0FBRzlDLGNBQUksS0FBSyxHQUFMLEVBQVU7O0FBRVosaUJBQUssR0FBTCxHQUFXLEtBQVgsQ0FGWTtBQUdaLGlCQUFLLFFBQUwsR0FBZ0IsRUFBRSxjQUFGLENBQWlCLEVBQUUsZ0JBQUYsQ0FBbUIsRUFBRSxVQUFGLENBQWEsU0FBYixDQUFuQixFQUE0QyxFQUFFLFVBQUYsQ0FBYSxLQUFiLENBQTVDLENBQWpCLEVBQW1GLENBQUMsS0FBSyxRQUFMLENBQXBGLENBQWhCLENBSFk7V0FBZDtTQUhlOztBQWVmLHlCQUFtQjs7Ozs7O0FBTXJCLDhCQUFzQixTQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELEtBQW5ELEVBQTBEO0FBQzlFLGNBQUksT0FBTyxNQUFNLEVBQU4sQ0FBUyxJQUFULENBRG1FO0FBRTlFLGNBQUksS0FBSyxJQUFMLEtBQWMsSUFBZCxJQUFzQixNQUFNLHVCQUFOLENBQThCLElBQTlCLEVBQW9DLE1BQU0sRUFBTixDQUExRCxFQUFxRTtBQUN2RSxtQkFBTyxNQUFNLEdBQU4sR0FBWSxNQUFNLEdBQU4sSUFBYSxNQUFNLHFCQUFOLENBQTRCLElBQTVCLENBQWIsQ0FEb0Q7V0FBekU7U0FGb0I7Ozs7Ozs7O0FBWXhCLGNBQVEsU0FBUixJQUFxQixVQUFVLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0I7QUFDM0MsWUFBSSxPQUFPLEtBQUssSUFBTCxDQURnQzs7QUFHM0MsYUFBSyxLQUFMLEdBQWEsS0FBYixDQUgyQztBQUkzQyxhQUFLLFNBQUwsR0FBaUIsSUFBakIsQ0FKMkM7O0FBTTNDLGFBQUssUUFBTCxDQUFjLFlBQWQsRUFBNEIsS0FBNUIsRUFOMkM7O0FBUTNDLFlBQUksT0FBTyxFQUFFLGNBQUYsQ0FBaUIsTUFBakIsRUFBeUIsQ0FBQyxJQUFELENBQXpCLENBQVAsQ0FSdUM7O0FBVTNDLFlBQUksS0FBSyxLQUFLLEVBQUwsQ0FWa0M7QUFXM0MsYUFBSyxFQUFMLEdBQVUsSUFBVixDQVgyQzs7QUFhM0MsWUFBSSxFQUFFLHFCQUFGLENBQXdCLElBQXhCLENBQUosRUFBbUM7QUFDakMsY0FBSSxTQUFTLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBQyxFQUFFLGtCQUFGLENBQXFCLEVBQXJCLEVBQXlCLElBQXpCLENBQUQsQ0FBN0IsQ0FBVCxDQUQ2QjtBQUVqQyxpQkFBTyxXQUFQLEdBQXFCLElBQXJCLENBRmlDO0FBR2pDLGlCQUFPLE1BQVAsQ0FIaUM7U0FBbkMsTUFJTztBQUNMLGNBQUksRUFBSixFQUFRO0FBQ04sZ0JBQUksUUFBUSxFQUFFLElBQUksRUFBSixFQUFWLENBREU7QUFFTixpQkFBSyxRQUFMLENBQWMsZ0JBQWQsRUFBZ0MsS0FBaEMsRUFGTTs7QUFJTixnQkFBSSxNQUFNLEdBQU4sRUFBVztBQUNiLG1CQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLElBQWxCLENBQXVCLEVBQUUsSUFBSSxNQUFNLEdBQU4sRUFBN0IsRUFEYTtBQUViLHFCQUFPLEVBQUUsb0JBQUYsQ0FBdUIsR0FBdkIsRUFBNEIsTUFBTSxHQUFOLEVBQVcsSUFBdkMsQ0FBUCxDQUZhO2FBQWY7V0FKRjs7QUFVQSxpQkFBTyxJQUFQLENBWEs7U0FKUDtPQWJtQjs7QUFnQ3JCLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9oZWxwZXJzL3JlbWFwLWFzeW5jLXRvLWdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBhd2FpdFZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGdW5jdGlvbjogZnVuY3Rpb24gRnVuY3Rpb24oKSB7XG4gICAgdGhpcy5za2lwKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBBd2FpdEV4cHJlc3Npb246IGZ1bmN0aW9uIEF3YWl0RXhwcmVzc2lvbihub2RlKSB7XG4gICAgbm9kZS50eXBlID0gXCJZaWVsZEV4cHJlc3Npb25cIjtcblxuICAgIGlmIChub2RlLmFsbCkge1xuICAgICAgLy8gYXdhaXQqIGZvbzsgLT4geWllbGQgUHJvbWlzZS5hbGwoZm9vKTtcbiAgICAgIG5vZGUuYWxsID0gZmFsc2U7XG4gICAgICBub2RlLmFyZ3VtZW50ID0gdC5jYWxsRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24odC5pZGVudGlmaWVyKFwiUHJvbWlzZVwiKSwgdC5pZGVudGlmaWVyKFwiYWxsXCIpKSwgW25vZGUuYXJndW1lbnRdKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHJlZmVyZW5jZVZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZWZlcmVuY2VkSWRlbnRpZmllcjogZnVuY3Rpb24gUmVmZXJlbmNlZElkZW50aWZpZXIobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICB2YXIgbmFtZSA9IHN0YXRlLmlkLm5hbWU7XG4gICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSAmJiBzY29wZS5iaW5kaW5nSWRlbnRpZmllckVxdWFscyhuYW1lLCBzdGF0ZS5pZCkpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5yZWYgPSBzdGF0ZS5yZWYgfHwgc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKG5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChwYXRoLCBjYWxsSWQpIHtcbiAgdmFyIG5vZGUgPSBwYXRoLm5vZGU7XG5cbiAgbm9kZS5hc3luYyA9IGZhbHNlO1xuICBub2RlLmdlbmVyYXRvciA9IHRydWU7XG5cbiAgcGF0aC50cmF2ZXJzZShhd2FpdFZpc2l0b3IsIHN0YXRlKTtcblxuICB2YXIgY2FsbCA9IHQuY2FsbEV4cHJlc3Npb24oY2FsbElkLCBbbm9kZV0pO1xuXG4gIHZhciBpZCA9IG5vZGUuaWQ7XG4gIG5vZGUuaWQgPSBudWxsO1xuXG4gIGlmICh0LmlzRnVuY3Rpb25EZWNsYXJhdGlvbihub2RlKSkge1xuICAgIHZhciBkZWNsYXIgPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJsZXRcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKGlkLCBjYWxsKV0pO1xuICAgIGRlY2xhci5fYmxvY2tIb2lzdCA9IHRydWU7XG4gICAgcmV0dXJuIGRlY2xhcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHsgaWQ6IGlkIH07XG4gICAgICBwYXRoLnRyYXZlcnNlKHJlZmVyZW5jZVZpc2l0b3IsIHN0YXRlKTtcblxuICAgICAgaWYgKHN0YXRlLnJlZikge1xuICAgICAgICBwYXRoLnNjb3BlLnBhcmVudC5wdXNoKHsgaWQ6IHN0YXRlLnJlZiB9KTtcbiAgICAgICAgcmV0dXJuIHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHN0YXRlLnJlZiwgY2FsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
