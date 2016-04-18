/* */
"format cjs";
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

  function keepBlockHoist(node, nodes) {
    if (node._blockHoist) {
      for (var i = 0; i < nodes.length; i++) {
        nodes[i]._blockHoist = node._blockHoist;
      }
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-modules"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        ImportDeclaration: function ImportDeclaration(node, parent, scope, file) {
          // flow type
          if (node.importKind === "type" || node.importKind === "typeof") return;

          var nodes = [];

          if (node.specifiers.length) {
            var _arr = node.specifiers;

            for (var _i = 0; _i < _arr.length; _i++) {
              var specifier = _arr[_i];
              file.moduleFormatter.importSpecifier(specifier, node, nodes, scope);
            }
          } else {
            file.moduleFormatter.importDeclaration(node, nodes, scope);
          }

          if (nodes.length === 1) {
            // inherit `_blockHoist` - this is for `_blockHoist` in File.prototype.addImport
            nodes[0]._blockHoist = node._blockHoist;
          }

          return nodes;
        },

        /**
         * [Please add a description.]
         */

        ExportAllDeclaration: function ExportAllDeclaration(node, parent, scope, file) {
          var nodes = [];
          file.moduleFormatter.exportAllDeclaration(node, nodes, scope);
          keepBlockHoist(node, nodes);
          return nodes;
        },

        /**
         * [Please add a description.]
         */

        ExportDefaultDeclaration: function ExportDefaultDeclaration(node, parent, scope, file) {
          var nodes = [];
          file.moduleFormatter.exportDeclaration(node, nodes, scope);
          keepBlockHoist(node, nodes);
          return nodes;
        },

        /**
         * [Please add a description.]
         */

        ExportNamedDeclaration: function ExportNamedDeclaration(node, parent, scope, file) {
          // flow type
          if (this.get("declaration").isTypeAlias()) return;

          var nodes = [];

          if (node.declaration) {
            // make sure variable exports have an initializer
            // this is done here to avoid duplicating it in the module formatters
            if (t.isVariableDeclaration(node.declaration)) {
              var declar = node.declaration.declarations[0];
              declar.init = declar.init || t.identifier("undefined");
            }

            file.moduleFormatter.exportDeclaration(node, nodes, scope);
          } else if (node.specifiers) {
            for (var i = 0; i < node.specifiers.length; i++) {
              file.moduleFormatter.exportSpecifier(node.specifiers[i], node, nodes, scope);
            }
          }

          keepBlockHoist(node, nodes);

          return nodes;
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9tb2R1bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7QUFNQSxXQUFTLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBOUIsRUFBcUM7QUFDbkMsUUFBSSxLQUFLLFdBQUwsRUFBa0I7QUFDcEIsV0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbEMsRUFBdUM7QUFDckMsY0FBTSxDQUFOLEVBQVMsV0FBVCxHQUF1QixLQUFLLFdBQUwsQ0FEYztPQUF2QztLQURGO0dBREY7Ozs7O0FBVEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFVSixpQkFBVztBQUNiLGVBQU8saUJBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7Ozs7O0FBS0ksZ0JBQVU7Ozs7OztBQU1aLDJCQUFtQixTQUFTLGlCQUFULENBQTJCLElBQTNCLEVBQWlDLE1B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LEVBQXFCLEtBQXJCLEVBckJpRjs7QUF1QmpGLGlCQUFPLEtBQVAsQ0F2QmlGO1NBQTNEOzs7QUEwQjFCLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczYvbW9kdWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG5mdW5jdGlvbiBrZWVwQmxvY2tIb2lzdChub2RlLCBub2Rlcykge1xuICBpZiAobm9kZS5fYmxvY2tIb2lzdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGVzW2ldLl9ibG9ja0hvaXN0ID0gbm9kZS5fYmxvY2tIb2lzdDtcbiAgICB9XG4gIH1cbn1cblxudmFyIG1ldGFkYXRhID0ge1xuICBncm91cDogXCJidWlsdGluLW1vZHVsZXNcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEltcG9ydERlY2xhcmF0aW9uOiBmdW5jdGlvbiBJbXBvcnREZWNsYXJhdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgLy8gZmxvdyB0eXBlXG4gICAgaWYgKG5vZGUuaW1wb3J0S2luZCA9PT0gXCJ0eXBlXCIgfHwgbm9kZS5pbXBvcnRLaW5kID09PSBcInR5cGVvZlwiKSByZXR1cm47XG5cbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGlmIChub2RlLnNwZWNpZmllcnMubGVuZ3RoKSB7XG4gICAgICB2YXIgX2FyciA9IG5vZGUuc3BlY2lmaWVycztcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBzcGVjaWZpZXIgPSBfYXJyW19pXTtcbiAgICAgICAgZmlsZS5tb2R1bGVGb3JtYXR0ZXIuaW1wb3J0U3BlY2lmaWVyKHNwZWNpZmllciwgbm9kZSwgbm9kZXMsIHNjb3BlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmlsZS5tb2R1bGVGb3JtYXR0ZXIuaW1wb3J0RGVjbGFyYXRpb24obm9kZSwgbm9kZXMsIHNjb3BlKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBpbmhlcml0IGBfYmxvY2tIb2lzdGAgLSB0aGlzIGlzIGZvciBgX2Jsb2NrSG9pc3RgIGluIEZpbGUucHJvdG90eXBlLmFkZEltcG9ydFxuICAgICAgbm9kZXNbMF0uX2Jsb2NrSG9pc3QgPSBub2RlLl9ibG9ja0hvaXN0O1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEV4cG9ydEFsbERlY2xhcmF0aW9uOiBmdW5jdGlvbiBFeHBvcnRBbGxEZWNsYXJhdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgZmlsZS5tb2R1bGVGb3JtYXR0ZXIuZXhwb3J0QWxsRGVjbGFyYXRpb24obm9kZSwgbm9kZXMsIHNjb3BlKTtcbiAgICBrZWVwQmxvY2tIb2lzdChub2RlLCBub2Rlcyk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uOiBmdW5jdGlvbiBFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIGZpbGUubW9kdWxlRm9ybWF0dGVyLmV4cG9ydERlY2xhcmF0aW9uKG5vZGUsIG5vZGVzLCBzY29wZSk7XG4gICAga2VlcEJsb2NrSG9pc3Qobm9kZSwgbm9kZXMpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEV4cG9ydE5hbWVkRGVjbGFyYXRpb246IGZ1bmN0aW9uIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIC8vIGZsb3cgdHlwZVxuICAgIGlmICh0aGlzLmdldChcImRlY2xhcmF0aW9uXCIpLmlzVHlwZUFsaWFzKCkpIHJldHVybjtcblxuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgaWYgKG5vZGUuZGVjbGFyYXRpb24pIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB2YXJpYWJsZSBleHBvcnRzIGhhdmUgYW4gaW5pdGlhbGl6ZXJcbiAgICAgIC8vIHRoaXMgaXMgZG9uZSBoZXJlIHRvIGF2b2lkIGR1cGxpY2F0aW5nIGl0IGluIHRoZSBtb2R1bGUgZm9ybWF0dGVyc1xuICAgICAgaWYgKHQuaXNWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUuZGVjbGFyYXRpb24pKSB7XG4gICAgICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9uc1swXTtcbiAgICAgICAgZGVjbGFyLmluaXQgPSBkZWNsYXIuaW5pdCB8fCB0LmlkZW50aWZpZXIoXCJ1bmRlZmluZWRcIik7XG4gICAgICB9XG5cbiAgICAgIGZpbGUubW9kdWxlRm9ybWF0dGVyLmV4cG9ydERlY2xhcmF0aW9uKG5vZGUsIG5vZGVzLCBzY29wZSk7XG4gICAgfSBlbHNlIGlmIChub2RlLnNwZWNpZmllcnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5zcGVjaWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGUubW9kdWxlRm9ybWF0dGVyLmV4cG9ydFNwZWNpZmllcihub2RlLnNwZWNpZmllcnNbaV0sIG5vZGUsIG5vZGVzLCBzY29wZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAga2VlcEJsb2NrSG9pc3Qobm9kZSwgbm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
