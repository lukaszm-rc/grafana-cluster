/* */
"format cjs";
// in this transformer we have to split up classes and function declarations
// from their exports. why? because sometimes we need to replace classes with
// nodes that aren't allowed in the same contexts. also, if you're exporting
// a generator function as a default then regenerator will destroy the export
// declaration and leave a variable declaration in it's place... yeah, handy.

"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor;

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

  function getDeclar(node) {
    var declar = node.declaration;
    t.inheritsComments(declar, node);
    t.removeComments(node);
    declar._ignoreUserWhitespace = true;
    return declar;
  }

  /**
   * [Please add a description.]
   */

  function buildExportSpecifier(id) {
    return t.exportSpecifier(cloneIdentifier(id), cloneIdentifier(id));
  }

  function cloneIdentifier(_ref) {
    var name = _ref.name;
    var loc = _ref.loc;

    var id = t.identifier(name);
    id._loc = loc;
    return id;
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-pre"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        ExportDefaultDeclaration: function ExportDefaultDeclaration(node, parent, scope) {
          var declar = node.declaration;

          if (t.isClassDeclaration(declar)) {
            // export default class Foo {};
            var nodes = [getDeclar(node), node];
            node.declaration = declar.id;
            return nodes;
          } else if (t.isClassExpression(declar)) {
            // export default class {};
            var temp = scope.generateUidIdentifier("default");
            node.declaration = t.variableDeclaration("var", [t.variableDeclarator(temp, declar)]);

            var nodes = [getDeclar(node), node];
            node.declaration = temp;
            return nodes;
          } else if (t.isFunctionDeclaration(declar)) {
            // export default function Foo() {}
            node._blockHoist = 2;

            var nodes = [getDeclar(node), node];
            node.declaration = declar.id;
            return nodes;
          }
        },

        /**
         * [Please add a description.]
         */

        ExportNamedDeclaration: function ExportNamedDeclaration(node) {
          var declar = node.declaration;

          if (t.isClassDeclaration(declar)) {
            // export class Foo {}
            node.specifiers = [buildExportSpecifier(declar.id)];

            var nodes = [getDeclar(node), node];
            node.declaration = null;
            return nodes;
          } else if (t.isFunctionDeclaration(declar)) {
            // export function Foo() {}
            var newExport = t.exportNamedDeclaration(null, [buildExportSpecifier(declar.id)]);
            newExport._blockHoist = 2;
            return [getDeclar(node), newExport];
          } else if (t.isVariableDeclaration(declar)) {
            // export var foo = "bar";
            var specifiers = [];
            var bindings = this.get("declaration").getBindingIdentifiers();
            for (var key in bindings) {
              specifiers.push(buildExportSpecifier(bindings[key]));
            }
            return [declar, t.exportNamedDeclaration(null, specifiers)];
          }
        },

        /**
         * [Please add a description.]
         */

        Program: {
          enter: function enter(node) {
            var imports = [];
            var rest = [];

            for (var i = 0; i < node.body.length; i++) {
              var bodyNode = node.body[i];
              if (t.isImportDeclaration(bodyNode)) {
                imports.push(bodyNode);
              } else {
                rest.push(bodyNode);
              }
            }

            node.body = imports.concat(rest);
          },

          exit: function exit(node, parent, scope, file) {
            if (!file.transformers["es6.modules"].canTransform()) return;

            if (file.moduleFormatter.setup) {
              file.moduleFormatter.setup();
            }
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL21vZHVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBT0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFVQSxXQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUI7QUFDdkIsUUFBSSxTQUFTLEtBQUssV0FBTCxDQURVO0FBRXZCLE1BQUUsZ0JBQUYsQ0FBbUIsTUFBbkIsRUFBMkIsSUFBM0IsRUFGdUI7QUFHdkIsTUFBRSxjQUFGLENBQWlCLElBQWpCLEVBSHVCO0FBSXZCLFdBQU8scUJBQVAsR0FBK0IsSUFBL0IsQ0FKdUI7QUFLdkIsV0FBTyxNQUFQLENBTHVCO0dBQXpCOzs7Ozs7QUFZQSxXQUFTLG9CQUFULENBQThCLEVBQTlCLEVBQWtDO0FBQ2hDLFdBQU8sRUFBRSxlQUFGLENBQWtCLGdCQUFnQixFQUFoQixDQUFsQixFQUF1QyxnQkFBZ0IsRUFBaEIsQ0FBdkMsQ0FBUCxDQURnQztHQUFsQzs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0I7QUFDN0IsUUFB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IiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2ludGVybmFsL21vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuLy8gaW4gdGhpcyB0cmFuc2Zvcm1lciB3ZSBoYXZlIHRvIHNwbGl0IHVwIGNsYXNzZXMgYW5kIGZ1bmN0aW9uIGRlY2xhcmF0aW9uc1xuLy8gZnJvbSB0aGVpciBleHBvcnRzLiB3aHk/IGJlY2F1c2Ugc29tZXRpbWVzIHdlIG5lZWQgdG8gcmVwbGFjZSBjbGFzc2VzIHdpdGhcbi8vIG5vZGVzIHRoYXQgYXJlbid0IGFsbG93ZWQgaW4gdGhlIHNhbWUgY29udGV4dHMuIGFsc28sIGlmIHlvdSdyZSBleHBvcnRpbmdcbi8vIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIGFzIGEgZGVmYXVsdCB0aGVuIHJlZ2VuZXJhdG9yIHdpbGwgZGVzdHJveSB0aGUgZXhwb3J0XG4vLyBkZWNsYXJhdGlvbiBhbmQgbGVhdmUgYSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpbiBpdCdzIHBsYWNlLi4uIHllYWgsIGhhbmR5LlxuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGdldERlY2xhcihub2RlKSB7XG4gIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uO1xuICB0LmluaGVyaXRzQ29tbWVudHMoZGVjbGFyLCBub2RlKTtcbiAgdC5yZW1vdmVDb21tZW50cyhub2RlKTtcbiAgZGVjbGFyLl9pZ25vcmVVc2VyV2hpdGVzcGFjZSA9IHRydWU7XG4gIHJldHVybiBkZWNsYXI7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gYnVpbGRFeHBvcnRTcGVjaWZpZXIoaWQpIHtcbiAgcmV0dXJuIHQuZXhwb3J0U3BlY2lmaWVyKGNsb25lSWRlbnRpZmllcihpZCksIGNsb25lSWRlbnRpZmllcihpZCkpO1xufVxuXG5mdW5jdGlvbiBjbG9uZUlkZW50aWZpZXIoX3JlZikge1xuICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIGxvYyA9IF9yZWYubG9jO1xuXG4gIHZhciBpZCA9IHQuaWRlbnRpZmllcihuYW1lKTtcbiAgaWQuX2xvYyA9IGxvYztcbiAgcmV0dXJuIGlkO1xufVxuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tcHJlXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBFeHBvcnREZWZhdWx0RGVjbGFyYXRpb246IGZ1bmN0aW9uIEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlKSB7XG4gICAgdmFyIGRlY2xhciA9IG5vZGUuZGVjbGFyYXRpb247XG5cbiAgICBpZiAodC5pc0NsYXNzRGVjbGFyYXRpb24oZGVjbGFyKSkge1xuICAgICAgLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vIHt9O1xuICAgICAgdmFyIG5vZGVzID0gW2dldERlY2xhcihub2RlKSwgbm9kZV07XG4gICAgICBub2RlLmRlY2xhcmF0aW9uID0gZGVjbGFyLmlkO1xuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH0gZWxzZSBpZiAodC5pc0NsYXNzRXhwcmVzc2lvbihkZWNsYXIpKSB7XG4gICAgICAvLyBleHBvcnQgZGVmYXVsdCBjbGFzcyB7fTtcbiAgICAgIHZhciB0ZW1wID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwiZGVmYXVsdFwiKTtcbiAgICAgIG5vZGUuZGVjbGFyYXRpb24gPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKHRlbXAsIGRlY2xhcildKTtcblxuICAgICAgdmFyIG5vZGVzID0gW2dldERlY2xhcihub2RlKSwgbm9kZV07XG4gICAgICBub2RlLmRlY2xhcmF0aW9uID0gdGVtcDtcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9IGVsc2UgaWYgKHQuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKGRlY2xhcikpIHtcbiAgICAgIC8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvbygpIHt9XG4gICAgICBub2RlLl9ibG9ja0hvaXN0ID0gMjtcblxuICAgICAgdmFyIG5vZGVzID0gW2dldERlY2xhcihub2RlKSwgbm9kZV07XG4gICAgICBub2RlLmRlY2xhcmF0aW9uID0gZGVjbGFyLmlkO1xuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEV4cG9ydE5hbWVkRGVjbGFyYXRpb246IGZ1bmN0aW9uIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24obm9kZSkge1xuICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uO1xuXG4gICAgaWYgKHQuaXNDbGFzc0RlY2xhcmF0aW9uKGRlY2xhcikpIHtcbiAgICAgIC8vIGV4cG9ydCBjbGFzcyBGb28ge31cbiAgICAgIG5vZGUuc3BlY2lmaWVycyA9IFtidWlsZEV4cG9ydFNwZWNpZmllcihkZWNsYXIuaWQpXTtcblxuICAgICAgdmFyIG5vZGVzID0gW2dldERlY2xhcihub2RlKSwgbm9kZV07XG4gICAgICBub2RlLmRlY2xhcmF0aW9uID0gbnVsbDtcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9IGVsc2UgaWYgKHQuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKGRlY2xhcikpIHtcbiAgICAgIC8vIGV4cG9ydCBmdW5jdGlvbiBGb28oKSB7fVxuICAgICAgdmFyIG5ld0V4cG9ydCA9IHQuZXhwb3J0TmFtZWREZWNsYXJhdGlvbihudWxsLCBbYnVpbGRFeHBvcnRTcGVjaWZpZXIoZGVjbGFyLmlkKV0pO1xuICAgICAgbmV3RXhwb3J0Ll9ibG9ja0hvaXN0ID0gMjtcbiAgICAgIHJldHVybiBbZ2V0RGVjbGFyKG5vZGUpLCBuZXdFeHBvcnRdO1xuICAgIH0gZWxzZSBpZiAodC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24oZGVjbGFyKSkge1xuICAgICAgLy8gZXhwb3J0IHZhciBmb28gPSBcImJhclwiO1xuICAgICAgdmFyIHNwZWNpZmllcnMgPSBbXTtcbiAgICAgIHZhciBiaW5kaW5ncyA9IHRoaXMuZ2V0KFwiZGVjbGFyYXRpb25cIikuZ2V0QmluZGluZ0lkZW50aWZpZXJzKCk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYmluZGluZ3MpIHtcbiAgICAgICAgc3BlY2lmaWVycy5wdXNoKGJ1aWxkRXhwb3J0U3BlY2lmaWVyKGJpbmRpbmdzW2tleV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbZGVjbGFyLCB0LmV4cG9ydE5hbWVkRGVjbGFyYXRpb24obnVsbCwgc3BlY2lmaWVycyldO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFByb2dyYW06IHtcbiAgICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSkge1xuICAgICAgdmFyIGltcG9ydHMgPSBbXTtcbiAgICAgIHZhciByZXN0ID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5ib2R5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBib2R5Tm9kZSA9IG5vZGUuYm9keVtpXTtcbiAgICAgICAgaWYgKHQuaXNJbXBvcnREZWNsYXJhdGlvbihib2R5Tm9kZSkpIHtcbiAgICAgICAgICBpbXBvcnRzLnB1c2goYm9keU5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3QucHVzaChib2R5Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbm9kZS5ib2R5ID0gaW1wb3J0cy5jb25jYXQocmVzdCk7XG4gICAgfSxcblxuICAgIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgICAgaWYgKCFmaWxlLnRyYW5zZm9ybWVyc1tcImVzNi5tb2R1bGVzXCJdLmNhblRyYW5zZm9ybSgpKSByZXR1cm47XG5cbiAgICAgIGlmIChmaWxlLm1vZHVsZUZvcm1hdHRlci5zZXR1cCkge1xuICAgICAgICBmaWxlLm1vZHVsZUZvcm1hdHRlci5zZXR1cCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
