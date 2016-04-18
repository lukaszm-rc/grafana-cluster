/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor, optimizeSettersVisitor;

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
      metadata = {
        optional: true,
        group: "builtin-trailing"
      };


      exports.metadata = metadata;
      visitor = {
        Program: function Program(node, parent, scope, file) {
          if (file.moduleFormatter._setters) {
            scope.traverse(file.moduleFormatter._setters, optimizeSettersVisitor, {
              exportFunctionIdentifier: file.moduleFormatter.exportIdentifier
            });
          }
        }
      };


      exports.visitor = visitor;
      /**
       * Setters are optimized to avoid slow export behavior in modules that rely on deep hierarchies
       * of export-from declarations.
       * More info in https://github.com/babel/babel/pull/1722 and
       * https://github.com/ModuleLoader/es6-module-loader/issues/386.
       *
       * TODO: Ideally this would be optimized during construction of the setters, but the current
       * architecture of the module formatters make that difficult.
       */
      optimizeSettersVisitor = {
        FunctionExpression: {
          enter: function enter(node, parent, scope, state) {
            state.hasExports = false;
            state.exportObjectIdentifier = scope.generateUidIdentifier("exportObj");
          },
          exit: function exit(node, parent, scope, state) {
            if (!state.hasExports) return;

            node.body.body.unshift(t.variableDeclaration("var", [t.variableDeclarator(t.cloneDeep(state.exportObjectIdentifier), t.objectExpression([]))]));
            node.body.body.push(t.expressionStatement(t.callExpression(t.cloneDeep(state.exportFunctionIdentifier), [t.cloneDeep(state.exportObjectIdentifier)])));
          }
        },
        CallExpression: function CallExpression(node, parent, scope, state) {
          if (!t.isIdentifier(node.callee, { name: state.exportFunctionIdentifier.name })) return;

          state.hasExports = true;
          var memberNode = t.memberExpression(t.cloneDeep(state.exportObjectIdentifier), node.arguments[0], true);
          return t.assignmentExpression("=", memberNode, node.arguments[1]);
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL29wdGltaXNhdGlvbi9tb2R1bGVzLnN5c3RlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGtCQUFVLElBQVY7QUFDQSxlQUFPLGtCQUFQOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0ksZ0JBQVU7QUFDWixpQkFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsRUFBK0IsS0FBL0IsRUFBc0MsSUFBdEMsRUFBNEM7QUFDbkQsY0FBSSxLQUFLLGVBQUwsQ0FBcUIsUUFBckIsRUFBK0I7QUFDakMsa0JBQU0sUUFBTixDQUFlLEtBQUssZUFBTCxDQUFxQixRQUFyQixFQUErQixzQkFBOUMsRUFBc0U7QUFDcEUsd0NBQTBCLEtBQUssZUFBTCxDQUFxQixnQkFBckI7YUFENUIsRUFEaUM7V0FBbkM7U0FETzs7OztBQVNYLGNBQVEsT0FBUixHQUFrQixPQUFsQjs7Ozs7Ozs7OztBQVVJLCtCQUF5QjtBQUMzQiw0QkFBb0I7QUFDbEIsaUJBQU8sU0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQztBQUNoRCxrQkFBTSxVQUFOLEdBQW1CLEtBQW5CLENBRGdEO0FBRWhELGtCQUFNLHNCQUFOLEdBQStCLE1BQU0scUJBQU4sQ0FBNEIsV0FBNUIsQ0FBL0IsQ0FGZ0Q7V0FBM0M7QUFJUCxnQkFBTSxTQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CLE1BQXBCLEVBQTRCLEtBQTVCLEVBQW1DLEtBQW5DLEVBQTBDO0FBQzlDLGdCQUFJLENBQUMsTUFBTSxVQUFOLEVBQWtCLE9BQXZCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsT0FBZixDQUF1QixFQUFFLG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLENBQUMsRUFBRSxrQkFBRixDQUFxQixFQUFFLFNBQUYsQ0FBWSxNQUFNLHNCQUFOLENBQWpDLEVBQWdFLEVBQUUsZ0JBQUYsQ0FBbUIsRUFBbkIsQ0FBaEUsQ0FBRCxDQUE3QixDQUF2QixFQUg4QztBQUk5QyxpQkFBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWYsQ0FBb0IsRUFBRSxtQkFBRixDQUFzQixFQUFFLGNBQUYsQ0FBaUIsRUFBRSxTQUFGLENBQVksTUFBTSx3QkFBTixDQUE3QixFQUE4RCxDQUFDLEVBQUUsU0FBRixDQUFZLE1BQU0sc0JBQU4sQ0FBYixDQUE5RCxDQUF0QixDQUFwQixFQUo4QztXQUExQztTQUxSO0FBWUEsd0JBQWdCLFNBQVMsY0FBVCxDQUF3QixJQUF4QixFQUE4QixNQUE5QixFQUFzQyxLQUF0QyxFQUE2QyxLQUE3QyxFQUFvRDtBQUNsRSxjQUFJLENBQUMsRUFBRSxZQUFGLENBQWUsS0FBSyxNQUFMLEVBQWEsRUFBRSxNQUFNLE1BQU0sd0JBQU4sQ0FBK0IsSUFBL0IsRUFBcEMsQ0FBRCxFQUE2RSxPQUFqRjs7QUFFQSxnQkFBTSxVQUFOLEdBQW1CLElBQW5CLENBSGtFO0FBSWxFLGNBQUksYUFBYSxFQUFFLGdCQUFGLENBQW1CLEVBQUUsU0FBRixDQUFZLE1BQU0sc0JBQU4sQ0FBL0IsRUFBOEQsS0FBSyxTQUFMLENBQWUsQ0FBZixDQUE5RCxFQUFpRixJQUFqRixDQUFiLENBSjhEO0FBS2xFLGlCQUFPLEVBQUUsb0JBQUYsQ0FBdUIsR0FBdkIsRUFBNEIsVUFBNUIsRUFBd0MsS0FBSyxTQUFMLENBQWUsQ0FBZixDQUF4QyxDQUFQLENBTGtFO1NBQXBEIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL29wdGltaXNhdGlvbi9tb2R1bGVzLnN5c3RlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIG9wdGlvbmFsOiB0cnVlLFxuICBncm91cDogXCJidWlsdGluLXRyYWlsaW5nXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbnZhciB2aXNpdG9yID0ge1xuICBQcm9ncmFtOiBmdW5jdGlvbiBQcm9ncmFtKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBpZiAoZmlsZS5tb2R1bGVGb3JtYXR0ZXIuX3NldHRlcnMpIHtcbiAgICAgIHNjb3BlLnRyYXZlcnNlKGZpbGUubW9kdWxlRm9ybWF0dGVyLl9zZXR0ZXJzLCBvcHRpbWl6ZVNldHRlcnNWaXNpdG9yLCB7XG4gICAgICAgIGV4cG9ydEZ1bmN0aW9uSWRlbnRpZmllcjogZmlsZS5tb2R1bGVGb3JtYXR0ZXIuZXhwb3J0SWRlbnRpZmllclxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yO1xuLyoqXG4gKiBTZXR0ZXJzIGFyZSBvcHRpbWl6ZWQgdG8gYXZvaWQgc2xvdyBleHBvcnQgYmVoYXZpb3IgaW4gbW9kdWxlcyB0aGF0IHJlbHkgb24gZGVlcCBoaWVyYXJjaGllc1xuICogb2YgZXhwb3J0LWZyb20gZGVjbGFyYXRpb25zLlxuICogTW9yZSBpbmZvIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzE3MjIgYW5kXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kdWxlTG9hZGVyL2VzNi1tb2R1bGUtbG9hZGVyL2lzc3Vlcy8zODYuXG4gKlxuICogVE9ETzogSWRlYWxseSB0aGlzIHdvdWxkIGJlIG9wdGltaXplZCBkdXJpbmcgY29uc3RydWN0aW9uIG9mIHRoZSBzZXR0ZXJzLCBidXQgdGhlIGN1cnJlbnRcbiAqIGFyY2hpdGVjdHVyZSBvZiB0aGUgbW9kdWxlIGZvcm1hdHRlcnMgbWFrZSB0aGF0IGRpZmZpY3VsdC5cbiAqL1xudmFyIG9wdGltaXplU2V0dGVyc1Zpc2l0b3IgPSB7XG4gIEZ1bmN0aW9uRXhwcmVzc2lvbjoge1xuICAgIGVudGVyOiBmdW5jdGlvbiBlbnRlcihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgICAgc3RhdGUuaGFzRXhwb3J0cyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXhwb3J0T2JqZWN0SWRlbnRpZmllciA9IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcImV4cG9ydE9ialwiKTtcbiAgICB9LFxuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICAgIGlmICghc3RhdGUuaGFzRXhwb3J0cykgcmV0dXJuO1xuXG4gICAgICBub2RlLmJvZHkuYm9keS51bnNoaWZ0KHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodC5jbG9uZURlZXAoc3RhdGUuZXhwb3J0T2JqZWN0SWRlbnRpZmllciksIHQub2JqZWN0RXhwcmVzc2lvbihbXSkpXSkpO1xuICAgICAgbm9kZS5ib2R5LmJvZHkucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5jYWxsRXhwcmVzc2lvbih0LmNsb25lRGVlcChzdGF0ZS5leHBvcnRGdW5jdGlvbklkZW50aWZpZXIpLCBbdC5jbG9uZURlZXAoc3RhdGUuZXhwb3J0T2JqZWN0SWRlbnRpZmllcildKSkpO1xuICAgIH1cbiAgfSxcbiAgQ2FsbEV4cHJlc3Npb246IGZ1bmN0aW9uIENhbGxFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKCF0LmlzSWRlbnRpZmllcihub2RlLmNhbGxlZSwgeyBuYW1lOiBzdGF0ZS5leHBvcnRGdW5jdGlvbklkZW50aWZpZXIubmFtZSB9KSkgcmV0dXJuO1xuXG4gICAgc3RhdGUuaGFzRXhwb3J0cyA9IHRydWU7XG4gICAgdmFyIG1lbWJlck5vZGUgPSB0Lm1lbWJlckV4cHJlc3Npb24odC5jbG9uZURlZXAoc3RhdGUuZXhwb3J0T2JqZWN0SWRlbnRpZmllciksIG5vZGUuYXJndW1lbnRzWzBdLCB0cnVlKTtcbiAgICByZXR1cm4gdC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgbWVtYmVyTm9kZSwgbm9kZS5hcmd1bWVudHNbMV0pO1xuICB9XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
