/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _transformationHelpersReact, react, _types, t, ReferencedIdentifier, BindingIdentifier, Statement, Expression, Scope, Referenced, BlockScoped, Var, DirectiveLiteral, Directive, User, Generated, Flow;

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
      exports.__esModule = true;_transformationHelpersReact = require("../../../transformation/helpers/react");
      react = _interopRequireWildcard(_transformationHelpersReact);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      ReferencedIdentifier = {
        types: ["Identifier", "JSXIdentifier"],
        checkPath: function checkPath(_ref, opts) {
          var node = _ref.node;
          var parent = _ref.parent;

          if (!t.isIdentifier(node, opts)) {
            if (t.isJSXIdentifier(node, opts)) {
              if (react.isCompatTag(node.name)) return false;
            } else {
              // not a JSXIdentifier or an Identifier
              return false;
            }
          }

          // check if node is referenced
          return t.isReferenced(node, parent);
        }
      };


      exports.ReferencedIdentifier = ReferencedIdentifier;
      /**
       * [Please add a description.]
       */

      BindingIdentifier = {
        types: ["Identifier"],
        checkPath: function checkPath(_ref2) {
          var node = _ref2.node;
          var parent = _ref2.parent;

          return t.isBinding(node, parent);
        }
      };


      exports.BindingIdentifier = BindingIdentifier;
      /**
       * [Please add a description.]
       */

      Statement = {
        types: ["Statement"],
        checkPath: function checkPath(_ref3) {
          var node = _ref3.node;
          var parent = _ref3.parent;

          if (t.isStatement(node)) {
            if (t.isVariableDeclaration(node)) {
              if (t.isForXStatement(parent, { left: node })) return false;
              if (t.isForStatement(parent, { init: node })) return false;
            }

            return true;
          } else {
            return false;
          }
        }
      };


      exports.Statement = Statement;
      /**
       * [Please add a description.]
       */

      Expression = {
        types: ["Expression"],
        checkPath: function checkPath(path) {
          if (path.isIdentifier()) {
            return path.isReferencedIdentifier();
          } else {
            return t.isExpression(path.node);
          }
        }
      };


      exports.Expression = Expression;
      /**
       * [Please add a description.]
       */

      Scope = {
        types: ["Scopable"],
        checkPath: function checkPath(path) {
          return t.isScope(path.node, path.parent);
        }
      };


      exports.Scope = Scope;
      /**
       * [Please add a description.]
       */

      Referenced = {
        checkPath: function checkPath(path) {
          return t.isReferenced(path.node, path.parent);
        }
      };


      exports.Referenced = Referenced;
      /**
       * [Please add a description.]
       */

      BlockScoped = {
        checkPath: function checkPath(path) {
          return t.isBlockScoped(path.node);
        }
      };


      exports.BlockScoped = BlockScoped;
      /**
       * [Please add a description.]
       */

      Var = {
        types: ["VariableDeclaration"],
        checkPath: function checkPath(path) {
          return t.isVar(path.node);
        }
      };


      exports.Var = Var;
      /**
       * [Please add a description.]
       */

      DirectiveLiteral = {
        types: ["Literal"],
        checkPath: function checkPath(path) {
          return path.isLiteral() && path.parentPath.isExpressionStatement();
        }
      };


      exports.DirectiveLiteral = DirectiveLiteral;
      /**
       * [Please add a description.]
       */

      Directive = {
        types: ["ExpressionStatement"],
        checkPath: function checkPath(path) {
          return path.get("expression").isLiteral();
        }
      };


      exports.Directive = Directive;
      /**
       * [Please add a description.]
       */

      User = {
        checkPath: function checkPath(path) {
          return path.node && !!path.node.loc;
        }
      };


      exports.User = User;
      /**
       * [Please add a description.]
       */

      Generated = {
        checkPath: function checkPath(path) {
          return !path.isUser();
        }
      };


      exports.Generated = Generated;
      /**
       * [Please add a description.]
       */

      Flow = {
        types: ["Flow", "ImportDeclaration", "ExportDeclaration"],
        checkPath: function checkPath(_ref4) {
          var node = _ref4.node;

          if (t.isFlow(node)) {
            return true;
          } else if (t.isImportDeclaration(node)) {
            return node.importKind === "type" || node.importKind === "typeof";
          } else if (t.isExportDeclaration(node)) {
            return node.exportKind === "type";
          } else {
            return false;
          }
        }
      };

      exports.Flow = Flow;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvbGliL3ZpcnR1YWwtdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLDhCQUE4QixRQUFRLHVDQUFSO0FBRTlCLGNBQVEsd0JBQXdCLDJCQUF4QjtBQUVSLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBTUosNkJBQXVCO0FBQ3pCLGVBQU8sQ0FBQyxZQUFELEVBQWUsZUFBZixDQUFQO0FBQ0EsbUJBQVcsU0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCO0FBQ3hDLGNBQUksT0FBTyxLQUFLLElBQUwsQ0FENkI7QUFFeEMsY0FBSSxTQUFTLEtBQUssTUFBTCxDQUYyQjs7QUFJeEMsY0FBSSxDQUFDLEVBQUUsWUFBRixDQUFlLElBQWYsRUFBcUIsSUFBckIsQ0FBRCxFQUE2QjtBQUMvQixnQkFBSSxFQUFFLGVBQUYsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsQ0FBSixFQUFt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Q0FBSixFQUFpQztBQUN0QyxtQkFBTyxLQUFLLFVBQUwsS0FBb0IsTUFBcEIsSUFBOEIsS0FBSyxVQUFMLEtBQW9CLFFBQXBCLENBREM7V0FBakMsTUFFQSxJQUFJLEVBQUUsbUJBQUYsQ0FBc0IsSUFBdEIsQ0FBSixFQUFpQztBQUN0QyxtQkFBTyxLQUFLLFVBQUwsS0FBb0IsTUFBcEIsQ0FEK0I7V0FBakMsTUFFQTtBQUNMLG1CQUFPLEtBQVAsQ0FESztXQUZBO1NBUEU7OztBQWNiLGNBQVEsSUFBUixHQUFlLElBQWYiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmF2ZXJzYWwvcGF0aC9saWIvdmlydHVhbC10eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90cmFuc2Zvcm1hdGlvbkhlbHBlcnNSZWFjdCA9IHJlcXVpcmUoXCIuLi8uLi8uLi90cmFuc2Zvcm1hdGlvbi9oZWxwZXJzL3JlYWN0XCIpO1xuXG52YXIgcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtYXRpb25IZWxwZXJzUmVhY3QpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIFJlZmVyZW5jZWRJZGVudGlmaWVyID0ge1xuICB0eXBlczogW1wiSWRlbnRpZmllclwiLCBcIkpTWElkZW50aWZpZXJcIl0sXG4gIGNoZWNrUGF0aDogZnVuY3Rpb24gY2hlY2tQYXRoKF9yZWYsIG9wdHMpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWYubm9kZTtcbiAgICB2YXIgcGFyZW50ID0gX3JlZi5wYXJlbnQ7XG5cbiAgICBpZiAoIXQuaXNJZGVudGlmaWVyKG5vZGUsIG9wdHMpKSB7XG4gICAgICBpZiAodC5pc0pTWElkZW50aWZpZXIobm9kZSwgb3B0cykpIHtcbiAgICAgICAgaWYgKHJlYWN0LmlzQ29tcGF0VGFnKG5vZGUubmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdCBhIEpTWElkZW50aWZpZXIgb3IgYW4gSWRlbnRpZmllclxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgbm9kZSBpcyByZWZlcmVuY2VkXG4gICAgcmV0dXJuIHQuaXNSZWZlcmVuY2VkKG5vZGUsIHBhcmVudCk7XG4gIH1cbn07XG5cbmV4cG9ydHMuUmVmZXJlbmNlZElkZW50aWZpZXIgPSBSZWZlcmVuY2VkSWRlbnRpZmllcjtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIEJpbmRpbmdJZGVudGlmaWVyID0ge1xuICB0eXBlczogW1wiSWRlbnRpZmllclwiXSxcbiAgY2hlY2tQYXRoOiBmdW5jdGlvbiBjaGVja1BhdGgoX3JlZjIpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWYyLm5vZGU7XG4gICAgdmFyIHBhcmVudCA9IF9yZWYyLnBhcmVudDtcblxuICAgIHJldHVybiB0LmlzQmluZGluZyhub2RlLCBwYXJlbnQpO1xuICB9XG59O1xuXG5leHBvcnRzLkJpbmRpbmdJZGVudGlmaWVyID0gQmluZGluZ0lkZW50aWZpZXI7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBTdGF0ZW1lbnQgPSB7XG4gIHR5cGVzOiBbXCJTdGF0ZW1lbnRcIl0sXG4gIGNoZWNrUGF0aDogZnVuY3Rpb24gY2hlY2tQYXRoKF9yZWYzKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVmMy5ub2RlO1xuICAgIHZhciBwYXJlbnQgPSBfcmVmMy5wYXJlbnQ7XG5cbiAgICBpZiAodC5pc1N0YXRlbWVudChub2RlKSkge1xuICAgICAgaWYgKHQuaXNWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgICAgIGlmICh0LmlzRm9yWFN0YXRlbWVudChwYXJlbnQsIHsgbGVmdDogbm9kZSB9KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodC5pc0ZvclN0YXRlbWVudChwYXJlbnQsIHsgaW5pdDogbm9kZSB9KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5TdGF0ZW1lbnQgPSBTdGF0ZW1lbnQ7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBFeHByZXNzaW9uID0ge1xuICB0eXBlczogW1wiRXhwcmVzc2lvblwiXSxcbiAgY2hlY2tQYXRoOiBmdW5jdGlvbiBjaGVja1BhdGgocGF0aCkge1xuICAgIGlmIChwYXRoLmlzSWRlbnRpZmllcigpKSB7XG4gICAgICByZXR1cm4gcGF0aC5pc1JlZmVyZW5jZWRJZGVudGlmaWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0LmlzRXhwcmVzc2lvbihwYXRoLm5vZGUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5FeHByZXNzaW9uID0gRXhwcmVzc2lvbjtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIFNjb3BlID0ge1xuICB0eXBlczogW1wiU2NvcGFibGVcIl0sXG4gIGNoZWNrUGF0aDogZnVuY3Rpb24gY2hlY2tQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gdC5pc1Njb3BlKHBhdGgubm9kZSwgcGF0aC5wYXJlbnQpO1xuICB9XG59O1xuXG5leHBvcnRzLlNjb3BlID0gU2NvcGU7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBSZWZlcmVuY2VkID0ge1xuICBjaGVja1BhdGg6IGZ1bmN0aW9uIGNoZWNrUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHQuaXNSZWZlcmVuY2VkKHBhdGgubm9kZSwgcGF0aC5wYXJlbnQpO1xuICB9XG59O1xuXG5leHBvcnRzLlJlZmVyZW5jZWQgPSBSZWZlcmVuY2VkO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgQmxvY2tTY29wZWQgPSB7XG4gIGNoZWNrUGF0aDogZnVuY3Rpb24gY2hlY2tQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gdC5pc0Jsb2NrU2NvcGVkKHBhdGgubm9kZSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuQmxvY2tTY29wZWQgPSBCbG9ja1Njb3BlZDtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIFZhciA9IHtcbiAgdHlwZXM6IFtcIlZhcmlhYmxlRGVjbGFyYXRpb25cIl0sXG4gIGNoZWNrUGF0aDogZnVuY3Rpb24gY2hlY2tQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gdC5pc1ZhcihwYXRoLm5vZGUpO1xuICB9XG59O1xuXG5leHBvcnRzLlZhciA9IFZhcjtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIERpcmVjdGl2ZUxpdGVyYWwgPSB7XG4gIHR5cGVzOiBbXCJMaXRlcmFsXCJdLFxuICBjaGVja1BhdGg6IGZ1bmN0aW9uIGNoZWNrUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaXNMaXRlcmFsKCkgJiYgcGF0aC5wYXJlbnRQYXRoLmlzRXhwcmVzc2lvblN0YXRlbWVudCgpO1xuICB9XG59O1xuXG5leHBvcnRzLkRpcmVjdGl2ZUxpdGVyYWwgPSBEaXJlY3RpdmVMaXRlcmFsO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgRGlyZWN0aXZlID0ge1xuICB0eXBlczogW1wiRXhwcmVzc2lvblN0YXRlbWVudFwiXSxcbiAgY2hlY2tQYXRoOiBmdW5jdGlvbiBjaGVja1BhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmdldChcImV4cHJlc3Npb25cIikuaXNMaXRlcmFsKCk7XG4gIH1cbn07XG5cbmV4cG9ydHMuRGlyZWN0aXZlID0gRGlyZWN0aXZlO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgVXNlciA9IHtcbiAgY2hlY2tQYXRoOiBmdW5jdGlvbiBjaGVja1BhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLm5vZGUgJiYgISFwYXRoLm5vZGUubG9jO1xuICB9XG59O1xuXG5leHBvcnRzLlVzZXIgPSBVc2VyO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgR2VuZXJhdGVkID0ge1xuICBjaGVja1BhdGg6IGZ1bmN0aW9uIGNoZWNrUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuICFwYXRoLmlzVXNlcigpO1xuICB9XG59O1xuXG5leHBvcnRzLkdlbmVyYXRlZCA9IEdlbmVyYXRlZDtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIEZsb3cgPSB7XG4gIHR5cGVzOiBbXCJGbG93XCIsIFwiSW1wb3J0RGVjbGFyYXRpb25cIiwgXCJFeHBvcnREZWNsYXJhdGlvblwiXSxcbiAgY2hlY2tQYXRoOiBmdW5jdGlvbiBjaGVja1BhdGgoX3JlZjQpIHtcbiAgICB2YXIgbm9kZSA9IF9yZWY0Lm5vZGU7XG5cbiAgICBpZiAodC5pc0Zsb3cobm9kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodC5pc0ltcG9ydERlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbm9kZS5pbXBvcnRLaW5kID09PSBcInR5cGVcIiB8fCBub2RlLmltcG9ydEtpbmQgPT09IFwidHlwZW9mXCI7XG4gICAgfSBlbHNlIGlmICh0LmlzRXhwb3J0RGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlLmV4cG9ydEtpbmQgPT09IFwidHlwZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5GbG93ID0gRmxvdzsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
