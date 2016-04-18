/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashObjectExtend, _lodashObjectExtend2, _types, t, ModuleDeclaration, ImportDeclaration;

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
   * [Please add a description.]
   */

  function ExportDeclaration(node, parent, scope, formatter) {
    formatter.hasLocalExports = true;

    var source = node.source ? node.source.value : null;
    var exports = formatter.metadata.exports;

    // export function foo() {}
    // export var foo = "bar";
    var declar = this.get("declaration");
    if (declar.isStatement()) {
      var bindings = declar.getBindingIdentifiers();

      for (var name in bindings) {
        var binding = bindings[name];
        formatter._addExport(name, binding);

        exports.exported.push(name);
        exports.specifiers.push({
          kind: "local",
          local: name,
          exported: this.isExportDefaultDeclaration() ? "default" : name
        });
      }
    }

    if (this.isExportNamedDeclaration() && node.specifiers) {
      var _arr2 = node.specifiers;

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var specifier = _arr2[_i2];
        var exported = specifier.exported.name;
        exports.exported.push(exported);

        // export foo from "bar";
        if (t.isExportDefaultSpecifier(specifier)) {
          exports.specifiers.push({
            kind: "external",
            local: exported,
            exported: exported,
            source: source
          });
        }

        // export * as foo from "bar";
        if (t.isExportNamespaceSpecifier(specifier)) {
          exports.specifiers.push({
            kind: "external-namespace",
            exported: exported,
            source: source
          });
        }

        var local = specifier.local;
        if (!local) continue;

        formatter._addExport(local.name, specifier.exported);

        // export { foo } from "bar";
        // export { foo as bar } from "bar";
        if (source) {
          exports.specifiers.push({
            kind: "external",
            local: local.name,
            exported: exported,
            source: source
          });
        }

        // export { foo };
        // export { foo as bar };
        if (!source) {
          exports.specifiers.push({
            kind: "local",
            local: local.name,
            exported: exported
          });
        }
      }
    }

    // export * from "bar";
    if (this.isExportAllDeclaration()) {
      exports.specifiers.push({
        kind: "external-all",
        source: source
      });
    }

    if (!t.isExportDefaultDeclaration(node) && !declar.isTypeAlias()) {
      var onlyDefault = node.specifiers && node.specifiers.length === 1 && t.isSpecifierDefault(node.specifiers[0]);
      if (!onlyDefault) {
        formatter.hasNonDefaultExports = true;
      }
    }
  }

  /**
   * [Please add a description.]
   */

  function Scope(node, parent, scope, formatter) {
    if (!formatter.isLoose()) {
      this.skip();
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.ExportDeclaration = ExportDeclaration;
      exports.Scope = Scope;_lodashObjectExtend = require("lodash/object/extend");
      _lodashObjectExtend2 = _interopRequireDefault(_lodashObjectExtend);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      ModuleDeclaration = {
        enter: function enter(node, parent, scope, formatter) {
          if (node.source) {
            node.source.value = formatter.file.resolveModuleSource(node.source.value);
            formatter.addScope(this);
          }
        }
      };


      exports.ModuleDeclaration = ModuleDeclaration;
      /**
       * [Please add a description.]
       */

      ImportDeclaration = {
        exit: function exit(node, parent, scope, formatter) {
          formatter.hasLocalImports = true;

          var specifiers = [];
          var imported = [];
          formatter.metadata.imports.push({
            source: node.source.value,
            imported: imported,
            specifiers: specifiers
          });

          var _arr = this.get("specifiers");

          for (var _i = 0; _i < _arr.length; _i++) {
            var specifier = _arr[_i];
            var ids = specifier.getBindingIdentifiers();
            _lodashObjectExtend2["default"](formatter.localImports, ids);

            var local = specifier.node.local.name;

            if (specifier.isImportDefaultSpecifier()) {
              imported.push("default");
              specifiers.push({
                kind: "named",
                imported: "default",
                local: local
              });
            }

            if (specifier.isImportSpecifier()) {
              var importedName = specifier.node.imported.name;
              imported.push(importedName);
              specifiers.push({
                kind: "named",
                imported: importedName,
                local: local
              });
            }

            if (specifier.isImportNamespaceSpecifier()) {
              imported.push("*");
              specifiers.push({
                kind: "namespace",
                local: local
              });
            }
          }
        }
      };


      exports.ImportDeclaration = ImportDeclaration;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9saWIvbWV0YWRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7O0FBb0ZBLFdBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBaUMsTUFBakMsRUFBeUMsS0FBekMsRUFBZ0QsU0FBaEQsRUFBMkQ7QUFDekQsY0FBVSxlQUFWLEdBQTRCLElBQTVCLENBRHlEOztBQUd6RCxRQUFJLFNBQVMsS0FBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLENBQVksS0FBWixHQUFvQixJQUFsQyxDQUg0QztBQUl6RCxRQUFJLFVBQVUsVUFBVSxRQUFWLENBQW1CLE9BQW5COzs7O0FBSjJDLFFBUXJELFNBQVMsS0FBSyxHQUFMLENBQVMsYUFBVCxDQUFULENBUnFEO0FBU3pELFFBQUksT0FBTyxX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Q0FYOEM7O0FBYWxELGVBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLEtBQUssTUFBTCxFQUFhLElBQW5DLEVBQXlDO0FBQ3ZDLGdCQUFJLFlBQVksS0FBSyxFQUFMLENBQVosQ0FEbUM7QUFFdkMsZ0JBQUksTUFBTSxVQUFVLHFCQUFWLEVBQU4sQ0FGbUM7QUFHdkMsaUNBQXFCLFNBQXJCLEVBQWdDLFVBQVUsWUFBVixFQUF3QixHQUF4RCxFQUh1Qzs7QUFLdkMsZ0JBQUksUUFBUSxVQUFVLElBQVYsQ0FBZSxLQUFmLENBQXFCLElBQXJCLENBTDJCOztBQU92QyxnQkFBSSxVQUFVLHdCQUFWLEVBQUosRUFBMEM7QUFDeEMsdUJBQVMsSUFBVCxDQUFjLFNBQWQsRUFEd0M7QUFFeEMseUJBQVcsSUFBWCxDQUFnQjtBQUNkLHNCQUFNLE9BQU47QUFDQSwwQkFBVSxTQUFWO0FBQ0EsdUJBQU8sS0FBUDtlQUhGLEVBRndDO2FBQTFDOztBQVNBLGdCQUFJLFVBQVUsaUJBQVYsRUFBSixFQUFtQztBQUNqQyxrQkFBSSxlQUFlLFVBQVUsSUFBVixDQUFlLFFBQWYsQ0FBd0IsSUFBeEIsQ0FEYztBQUVqQyx1QkFBUyxJQUFULENBQWMsWUFBZCxFQUZpQztBQUdqQyx5QkFBVyxJQUFYLENBQWdCO0FBQ2Qsc0JBQU0sT0FBTjtBQUNBLDBCQUFVLFlBQVY7QUFDQSx1QkFBTyxLQUFQO2VBSEYsRUFIaUM7YUFBbkM7O0FBVUEsZ0JBQUksVUFBVSwwQkFBVixFQUFKLEVBQTRDO0FBQzFDLHVCQUFTLElBQVQsQ0FBYyxHQUFkLEVBRDBDO0FBRTFDLHlCQUFXLElBQVgsQ0FBZ0I7QUFDZCxzQkFBTSxXQUFOO0FBQ0EsdUJBQU8sS0FBUDtlQUZGLEVBRjBDO2FBQTVDO1dBMUJGO1NBYkk7Ozs7QUFrRFIsY0FBUSxpQkFBUixHQUE0QixpQkFBNUIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9tb2R1bGVzL2xpYi9tZXRhZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuRXhwb3J0RGVjbGFyYXRpb24gPSBFeHBvcnREZWNsYXJhdGlvbjtcbmV4cG9ydHMuU2NvcGUgPSBTY29wZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoT2JqZWN0RXh0ZW5kID0gcmVxdWlyZShcImxvZGFzaC9vYmplY3QvZXh0ZW5kXCIpO1xuXG52YXIgX2xvZGFzaE9iamVjdEV4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RFeHRlbmQpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIE1vZHVsZURlY2xhcmF0aW9uID0ge1xuICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSwgcGFyZW50LCBzY29wZSwgZm9ybWF0dGVyKSB7XG4gICAgaWYgKG5vZGUuc291cmNlKSB7XG4gICAgICBub2RlLnNvdXJjZS52YWx1ZSA9IGZvcm1hdHRlci5maWxlLnJlc29sdmVNb2R1bGVTb3VyY2Uobm9kZS5zb3VyY2UudmFsdWUpO1xuICAgICAgZm9ybWF0dGVyLmFkZFNjb3BlKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5Nb2R1bGVEZWNsYXJhdGlvbiA9IE1vZHVsZURlY2xhcmF0aW9uO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgSW1wb3J0RGVjbGFyYXRpb24gPSB7XG4gIGV4aXQ6IGZ1bmN0aW9uIGV4aXQobm9kZSwgcGFyZW50LCBzY29wZSwgZm9ybWF0dGVyKSB7XG4gICAgZm9ybWF0dGVyLmhhc0xvY2FsSW1wb3J0cyA9IHRydWU7XG5cbiAgICB2YXIgc3BlY2lmaWVycyA9IFtdO1xuICAgIHZhciBpbXBvcnRlZCA9IFtdO1xuICAgIGZvcm1hdHRlci5tZXRhZGF0YS5pbXBvcnRzLnB1c2goe1xuICAgICAgc291cmNlOiBub2RlLnNvdXJjZS52YWx1ZSxcbiAgICAgIGltcG9ydGVkOiBpbXBvcnRlZCxcbiAgICAgIHNwZWNpZmllcnM6IHNwZWNpZmllcnNcbiAgICB9KTtcblxuICAgIHZhciBfYXJyID0gdGhpcy5nZXQoXCJzcGVjaWZpZXJzXCIpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgc3BlY2lmaWVyID0gX2FycltfaV07XG4gICAgICB2YXIgaWRzID0gc3BlY2lmaWVyLmdldEJpbmRpbmdJZGVudGlmaWVycygpO1xuICAgICAgX2xvZGFzaE9iamVjdEV4dGVuZDJbXCJkZWZhdWx0XCJdKGZvcm1hdHRlci5sb2NhbEltcG9ydHMsIGlkcyk7XG5cbiAgICAgIHZhciBsb2NhbCA9IHNwZWNpZmllci5ub2RlLmxvY2FsLm5hbWU7XG5cbiAgICAgIGlmIChzcGVjaWZpZXIuaXNJbXBvcnREZWZhdWx0U3BlY2lmaWVyKCkpIHtcbiAgICAgICAgaW1wb3J0ZWQucHVzaChcImRlZmF1bHRcIik7XG4gICAgICAgIHNwZWNpZmllcnMucHVzaCh7XG4gICAgICAgICAga2luZDogXCJuYW1lZFwiLFxuICAgICAgICAgIGltcG9ydGVkOiBcImRlZmF1bHRcIixcbiAgICAgICAgICBsb2NhbDogbG9jYWxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGVjaWZpZXIuaXNJbXBvcnRTcGVjaWZpZXIoKSkge1xuICAgICAgICB2YXIgaW1wb3J0ZWROYW1lID0gc3BlY2lmaWVyLm5vZGUuaW1wb3J0ZWQubmFtZTtcbiAgICAgICAgaW1wb3J0ZWQucHVzaChpbXBvcnRlZE5hbWUpO1xuICAgICAgICBzcGVjaWZpZXJzLnB1c2goe1xuICAgICAgICAgIGtpbmQ6IFwibmFtZWRcIixcbiAgICAgICAgICBpbXBvcnRlZDogaW1wb3J0ZWROYW1lLFxuICAgICAgICAgIGxvY2FsOiBsb2NhbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNwZWNpZmllci5pc0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcigpKSB7XG4gICAgICAgIGltcG9ydGVkLnB1c2goXCIqXCIpO1xuICAgICAgICBzcGVjaWZpZXJzLnB1c2goe1xuICAgICAgICAgIGtpbmQ6IFwibmFtZXNwYWNlXCIsXG4gICAgICAgICAgbG9jYWw6IGxvY2FsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5JbXBvcnREZWNsYXJhdGlvbiA9IEltcG9ydERlY2xhcmF0aW9uO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBFeHBvcnREZWNsYXJhdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmb3JtYXR0ZXIpIHtcbiAgZm9ybWF0dGVyLmhhc0xvY2FsRXhwb3J0cyA9IHRydWU7XG5cbiAgdmFyIHNvdXJjZSA9IG5vZGUuc291cmNlID8gbm9kZS5zb3VyY2UudmFsdWUgOiBudWxsO1xuICB2YXIgZXhwb3J0cyA9IGZvcm1hdHRlci5tZXRhZGF0YS5leHBvcnRzO1xuXG4gIC8vIGV4cG9ydCBmdW5jdGlvbiBmb28oKSB7fVxuICAvLyBleHBvcnQgdmFyIGZvbyA9IFwiYmFyXCI7XG4gIHZhciBkZWNsYXIgPSB0aGlzLmdldChcImRlY2xhcmF0aW9uXCIpO1xuICBpZiAoZGVjbGFyLmlzU3RhdGVtZW50KCkpIHtcbiAgICB2YXIgYmluZGluZ3MgPSBkZWNsYXIuZ2V0QmluZGluZ0lkZW50aWZpZXJzKCk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIGJpbmRpbmdzKSB7XG4gICAgICB2YXIgYmluZGluZyA9IGJpbmRpbmdzW25hbWVdO1xuICAgICAgZm9ybWF0dGVyLl9hZGRFeHBvcnQobmFtZSwgYmluZGluZyk7XG5cbiAgICAgIGV4cG9ydHMuZXhwb3J0ZWQucHVzaChuYW1lKTtcbiAgICAgIGV4cG9ydHMuc3BlY2lmaWVycy5wdXNoKHtcbiAgICAgICAga2luZDogXCJsb2NhbFwiLFxuICAgICAgICBsb2NhbDogbmFtZSxcbiAgICAgICAgZXhwb3J0ZWQ6IHRoaXMuaXNFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24oKSA/IFwiZGVmYXVsdFwiIDogbmFtZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuaXNFeHBvcnROYW1lZERlY2xhcmF0aW9uKCkgJiYgbm9kZS5zcGVjaWZpZXJzKSB7XG4gICAgdmFyIF9hcnIyID0gbm9kZS5zcGVjaWZpZXJzO1xuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIHNwZWNpZmllciA9IF9hcnIyW19pMl07XG4gICAgICB2YXIgZXhwb3J0ZWQgPSBzcGVjaWZpZXIuZXhwb3J0ZWQubmFtZTtcbiAgICAgIGV4cG9ydHMuZXhwb3J0ZWQucHVzaChleHBvcnRlZCk7XG5cbiAgICAgIC8vIGV4cG9ydCBmb28gZnJvbSBcImJhclwiO1xuICAgICAgaWYgKHQuaXNFeHBvcnREZWZhdWx0U3BlY2lmaWVyKHNwZWNpZmllcikpIHtcbiAgICAgICAgZXhwb3J0cy5zcGVjaWZpZXJzLnB1c2goe1xuICAgICAgICAgIGtpbmQ6IFwiZXh0ZXJuYWxcIixcbiAgICAgICAgICBsb2NhbDogZXhwb3J0ZWQsXG4gICAgICAgICAgZXhwb3J0ZWQ6IGV4cG9ydGVkLFxuICAgICAgICAgIHNvdXJjZTogc291cmNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBleHBvcnQgKiBhcyBmb28gZnJvbSBcImJhclwiO1xuICAgICAgaWYgKHQuaXNFeHBvcnROYW1lc3BhY2VTcGVjaWZpZXIoc3BlY2lmaWVyKSkge1xuICAgICAgICBleHBvcnRzLnNwZWNpZmllcnMucHVzaCh7XG4gICAgICAgICAga2luZDogXCJleHRlcm5hbC1uYW1lc3BhY2VcIixcbiAgICAgICAgICBleHBvcnRlZDogZXhwb3J0ZWQsXG4gICAgICAgICAgc291cmNlOiBzb3VyY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsb2NhbCA9IHNwZWNpZmllci5sb2NhbDtcbiAgICAgIGlmICghbG9jYWwpIGNvbnRpbnVlO1xuXG4gICAgICBmb3JtYXR0ZXIuX2FkZEV4cG9ydChsb2NhbC5uYW1lLCBzcGVjaWZpZXIuZXhwb3J0ZWQpO1xuXG4gICAgICAvLyBleHBvcnQgeyBmb28gfSBmcm9tIFwiYmFyXCI7XG4gICAgICAvLyBleHBvcnQgeyBmb28gYXMgYmFyIH0gZnJvbSBcImJhclwiO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBleHBvcnRzLnNwZWNpZmllcnMucHVzaCh7XG4gICAgICAgICAga2luZDogXCJleHRlcm5hbFwiLFxuICAgICAgICAgIGxvY2FsOiBsb2NhbC5uYW1lLFxuICAgICAgICAgIGV4cG9ydGVkOiBleHBvcnRlZCxcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gZXhwb3J0IHsgZm9vIH07XG4gICAgICAvLyBleHBvcnQgeyBmb28gYXMgYmFyIH07XG4gICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBleHBvcnRzLnNwZWNpZmllcnMucHVzaCh7XG4gICAgICAgICAga2luZDogXCJsb2NhbFwiLFxuICAgICAgICAgIGxvY2FsOiBsb2NhbC5uYW1lLFxuICAgICAgICAgIGV4cG9ydGVkOiBleHBvcnRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBleHBvcnQgKiBmcm9tIFwiYmFyXCI7XG4gIGlmICh0aGlzLmlzRXhwb3J0QWxsRGVjbGFyYXRpb24oKSkge1xuICAgIGV4cG9ydHMuc3BlY2lmaWVycy5wdXNoKHtcbiAgICAgIGtpbmQ6IFwiZXh0ZXJuYWwtYWxsXCIsXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCF0LmlzRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKG5vZGUpICYmICFkZWNsYXIuaXNUeXBlQWxpYXMoKSkge1xuICAgIHZhciBvbmx5RGVmYXVsdCA9IG5vZGUuc3BlY2lmaWVycyAmJiBub2RlLnNwZWNpZmllcnMubGVuZ3RoID09PSAxICYmIHQuaXNTcGVjaWZpZXJEZWZhdWx0KG5vZGUuc3BlY2lmaWVyc1swXSk7XG4gICAgaWYgKCFvbmx5RGVmYXVsdCkge1xuICAgICAgZm9ybWF0dGVyLmhhc05vbkRlZmF1bHRFeHBvcnRzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBTY29wZShub2RlLCBwYXJlbnQsIHNjb3BlLCBmb3JtYXR0ZXIpIHtcbiAgaWYgKCFmb3JtYXR0ZXIuaXNMb29zZSgpKSB7XG4gICAgdGhpcy5za2lwKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
