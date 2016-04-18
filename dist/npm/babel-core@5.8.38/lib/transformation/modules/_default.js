/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _libMetadata, metadataVisitor, _messages, messages, _libRemaps, _libRemaps2, _helpersObject, _helpersObject2, _util, util, _types, t, DefaultFormatter;

  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_libMetadata = require("./lib/metadata");
      metadataVisitor = _interopRequireWildcard(_libMetadata);
      _messages = require("../../messages");
      messages = _interopRequireWildcard(_messages);
      _libRemaps = require("./lib/remaps");
      _libRemaps2 = _interopRequireDefault(_libRemaps);
      _helpersObject = require("../../helpers/object");
      _helpersObject2 = _interopRequireDefault(_helpersObject);
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      DefaultFormatter = function () {
        function DefaultFormatter(file) {
          _classCallCheck(this, DefaultFormatter);

          // object containg all module sources with the scope that they're contained in
          this.sourceScopes = _helpersObject2["default"]();

          // ids for use in module ids
          this.defaultIds = _helpersObject2["default"]();
          this.ids = _helpersObject2["default"]();

          // contains reference aliases for live bindings
          this.remaps = new _libRemaps2["default"](file, this);

          this.scope = file.scope;
          this.file = file;

          this.hasNonDefaultExports = false;

          this.hasLocalExports = false;
          this.hasLocalImports = false;

          this.localExports = _helpersObject2["default"]();
          this.localImports = _helpersObject2["default"]();

          this.metadata = file.metadata.modules;
          this.getMetadata();
        }

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.addScope = function addScope(path) {
          var source = path.node.source && path.node.source.value;
          if (!source) return;

          var existingScope = this.sourceScopes[source];
          if (existingScope && existingScope !== path.scope) {
            throw path.errorWithNode(messages.get("modulesDuplicateDeclarations"));
          }

          this.sourceScopes[source] = path.scope;
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.isModuleType = function isModuleType(node, type) {
          var modules = this.file.dynamicImportTypes[type];
          return modules && modules.indexOf(node) >= 0;
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.transform = function transform() {
          this.remapAssignments();
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.doDefaultExportInterop = function doDefaultExportInterop(node) {
          return (t.isExportDefaultDeclaration(node) || t.isSpecifierDefault(node)) && !this.noInteropRequireExport && !this.hasNonDefaultExports;
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.getMetadata = function getMetadata() {
          var has = false;
          var _arr = this.file.ast.program.body;
          for (var _i = 0; _i < _arr.length; _i++) {
            var node = _arr[_i];
            if (t.isModuleDeclaration(node)) {
              has = true;
              break;
            }
          }
          if (has || this.isLoose()) {
            this.file.path.traverse(metadataVisitor, this);
          }
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.remapAssignments = function remapAssignments() {
          if (this.hasLocalExports || this.hasLocalImports) {
            this.remaps.run();
          }
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.remapExportAssignment = function remapExportAssignment(node, exported) {
          var assign = node;

          for (var i = 0; i < exported.length; i++) {
            assign = t.assignmentExpression("=", t.memberExpression(t.identifier("exports"), exported[i]), assign);
          }

          return assign;
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype._addExport = function _addExport(name, exported) {
          var info = this.localExports[name] = this.localExports[name] || {
            binding: this.scope.getBindingIdentifier(name),
            exported: []
          };
          info.exported.push(exported);
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.getExport = function getExport(node, scope) {
          if (!t.isIdentifier(node)) return;

          var local = this.localExports[node.name];
          if (local && local.binding === scope.getBindingIdentifier(node.name)) {
            return local.exported;
          }
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.getModuleName = function getModuleName() {
          var opts = this.file.opts;
          // moduleId is n/a if a `getModuleId()` is provided
          if (opts.moduleId != null && !opts.getModuleId) {
            return opts.moduleId;
          }

          var filenameRelative = opts.filenameRelative;
          var moduleName = "";

          if (opts.moduleRoot != null) {
            moduleName = opts.moduleRoot + "/";
          }

          if (!opts.filenameRelative) {
            return moduleName + opts.filename.replace(/^\//, "");
          }

          if (opts.sourceRoot != null) {
            // remove sourceRoot from filename
            var sourceRootRegEx = new RegExp("^" + opts.sourceRoot + "\/?");
            filenameRelative = filenameRelative.replace(sourceRootRegEx, "");
          }

          if (!opts.keepModuleIdExtensions) {
            // remove extension
            filenameRelative = filenameRelative.replace(/\.(\w*?)$/, "");
          }

          moduleName += filenameRelative;

          // normalize path separators
          moduleName = moduleName.replace(/\\/g, "/");

          if (opts.getModuleId) {
            // If return is falsy, assume they want us to use our generated default name
            return opts.getModuleId(moduleName) || moduleName;
          } else {
            return moduleName;
          }
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype._pushStatement = function _pushStatement(ref, nodes) {
          if (t.isClass(ref) || t.isFunction(ref)) {
            if (ref.id) {
              nodes.push(t.toStatement(ref));
              ref = ref.id;
            }
          }

          return ref;
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype._hoistExport = function _hoistExport(declar, assign, priority) {
          if (t.isFunctionDeclaration(declar)) {
            assign._blockHoist = priority || 2;
          }

          return assign;
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.getExternalReference = function getExternalReference(node, nodes) {
          var ids = this.ids;
          var id = node.source.value;

          if (ids[id]) {
            return ids[id];
          } else {
            return this.ids[id] = this._getExternalReference(node, nodes);
          }
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.checkExportIdentifier = function checkExportIdentifier(node) {
          if (t.isIdentifier(node, { name: "__esModule" })) {
            throw this.file.errorWithNode(node, messages.get("modulesIllegalExportName", node.name));
          }
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.exportAllDeclaration = function exportAllDeclaration(node, nodes) {
          var ref = this.getExternalReference(node, nodes);
          nodes.push(this.buildExportsWildcard(ref, node));
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.isLoose = function isLoose() {
          return this.file.isLoose("es6.modules");
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.exportSpecifier = function exportSpecifier(specifier, node, nodes) {
          if (node.source) {
            var ref = this.getExternalReference(node, nodes);

            if (specifier.local.name === "default" && !this.noInteropRequireExport) {
              // importing a default so we need to normalize it
              ref = t.callExpression(this.file.addHelper("interop-require"), [ref]);
            } else {
              ref = t.memberExpression(ref, specifier.local);

              if (!this.isLoose()) {
                nodes.push(this.buildExportsFromAssignment(specifier.exported, ref, node));
                return;
              }
            }

            // export { foo } from "test";
            nodes.push(this.buildExportsAssignment(specifier.exported, ref, node));
          } else {
            // export { foo };
            nodes.push(this.buildExportsAssignment(specifier.exported, specifier.local, node));
          }
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.buildExportsWildcard = function buildExportsWildcard(objectIdentifier) {
          return t.expressionStatement(t.callExpression(this.file.addHelper("defaults"), [t.identifier("exports"), t.callExpression(this.file.addHelper("interop-export-wildcard"), [objectIdentifier, this.file.addHelper("defaults")])]));
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.buildExportsFromAssignment = function buildExportsFromAssignment(id, init) {
          this.checkExportIdentifier(id);
          return util.template("exports-from-assign", {
            INIT: init,
            ID: t.literal(id.name)
          }, true);
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.buildExportsAssignment = function buildExportsAssignment(id, init) {
          this.checkExportIdentifier(id);
          return util.template("exports-assign", {
            VALUE: init,
            KEY: id
          }, true);
        };

        /**
         * [Please add a description.]
         */

        DefaultFormatter.prototype.exportDeclaration = function exportDeclaration(node, nodes) {
          var declar = node.declaration;

          var id = declar.id;

          if (t.isExportDefaultDeclaration(node)) {
            id = t.identifier("default");
          }

          var assign;

          if (t.isVariableDeclaration(declar)) {
            for (var i = 0; i < declar.declarations.length; i++) {
              var decl = declar.declarations[i];

              decl.init = this.buildExportsAssignment(decl.id, decl.init, node).expression;

              var newDeclar = t.variableDeclaration(declar.kind, [decl]);
              if (i === 0) t.inherits(newDeclar, declar);
              nodes.push(newDeclar);
            }
          } else {
            var ref = declar;

            if (t.isFunctionDeclaration(declar) || t.isClassDeclaration(declar)) {
              ref = declar.id;
              nodes.push(declar);
            }

            assign = this.buildExportsAssignment(id, ref, node);

            nodes.push(assign);

            this._hoistExport(declar, assign);
          }
        };

        return DefaultFormatter;
      }();

      exports["default"] = DefaultFormatter;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9fZGVmYXVsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFLG9CQUFvQixXQUFwQixDQUFGLEVBQW9DO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxtQ0FBZCxDQUFOLENBQUY7S0FBeEM7R0FBbEQ7Ozs7O0FBWEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBYUksZUFBZSxRQUFRLGdCQUFSO0FBRWYsd0JBQWtCLHdCQUF3QixZQUF4QjtBQUVsQixrQkFBWSxRQUFRLGdCQUFSO0FBRVosaUJBQVcsd0JBQXdCLFNBQXhCO0FBRVgsbUJBQWEsUUFBUSxjQUFSO0FBRWIs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QURGLE1BVU87QUFDTCxnQkFBSSxNQUFNLE1BQU4sQ0FEQzs7QUFHTCxnQkFBSSxFQUFFLHFCQUFGLENBQXdCLE1BQXhCLEtBQW1DLEVBQUUsa0JBQUYsQ0FBcUIsTUFBckIsQ0FBbkMsRUFBaUU7QUFDbkUsb0JBQU0sT0FBTyxFQUFQLENBRDZEO0FBRW5FLG9CQUFNLElBQU4sQ0FBVyxNQUFYLEVBRm1FO2FBQXJFOztBQUtBLHFCQUFTLEtBQUssc0JBQUwsQ0FBNEIsRUFBNUIsRUFBZ0MsR0FBaEMsRUFBcUMsSUFBckMsQ0FBVCxDQVJLOztBQVVMLGtCQUFNLElBQU4sQ0FBVyxNQUFYLEVBVks7O0FBWUwsaUJBQUssWUFBTCxDQUFrQixNQUFsQixFQUEwQixNQUExQixFQVpLO1dBVlA7U0FYNkMsQ0E3VGI7O0FBa1dsQyxlQUFPLGdCQUFQLENBbFdrQztPQUFaOztBQXFXeEIsY0FBUSxTQUFSLElBQXFCLGdCQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9tb2R1bGVzL19kZWZhdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9saWJNZXRhZGF0YSA9IHJlcXVpcmUoXCIuL2xpYi9tZXRhZGF0YVwiKTtcblxudmFyIG1ldGFkYXRhVmlzaXRvciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9saWJNZXRhZGF0YSk7XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfbGliUmVtYXBzID0gcmVxdWlyZShcIi4vbGliL3JlbWFwc1wiKTtcblxudmFyIF9saWJSZW1hcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGliUmVtYXBzKTtcblxudmFyIF9oZWxwZXJzT2JqZWN0ID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvb2JqZWN0XCIpO1xuXG52YXIgX2hlbHBlcnNPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc09iamVjdCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBEZWZhdWx0Rm9ybWF0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdEZvcm1hdHRlcihmaWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERlZmF1bHRGb3JtYXR0ZXIpO1xuXG4gICAgLy8gb2JqZWN0IGNvbnRhaW5nIGFsbCBtb2R1bGUgc291cmNlcyB3aXRoIHRoZSBzY29wZSB0aGF0IHRoZXkncmUgY29udGFpbmVkIGluXG4gICAgdGhpcy5zb3VyY2VTY29wZXMgPSBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCk7XG5cbiAgICAvLyBpZHMgZm9yIHVzZSBpbiBtb2R1bGUgaWRzXG4gICAgdGhpcy5kZWZhdWx0SWRzID0gX2hlbHBlcnNPYmplY3QyW1wiZGVmYXVsdFwiXSgpO1xuICAgIHRoaXMuaWRzID0gX2hlbHBlcnNPYmplY3QyW1wiZGVmYXVsdFwiXSgpO1xuXG4gICAgLy8gY29udGFpbnMgcmVmZXJlbmNlIGFsaWFzZXMgZm9yIGxpdmUgYmluZGluZ3NcbiAgICB0aGlzLnJlbWFwcyA9IG5ldyBfbGliUmVtYXBzMltcImRlZmF1bHRcIl0oZmlsZSwgdGhpcyk7XG5cbiAgICB0aGlzLnNjb3BlID0gZmlsZS5zY29wZTtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuXG4gICAgdGhpcy5oYXNOb25EZWZhdWx0RXhwb3J0cyA9IGZhbHNlO1xuXG4gICAgdGhpcy5oYXNMb2NhbEV4cG9ydHMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0xvY2FsSW1wb3J0cyA9IGZhbHNlO1xuXG4gICAgdGhpcy5sb2NhbEV4cG9ydHMgPSBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCk7XG4gICAgdGhpcy5sb2NhbEltcG9ydHMgPSBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCk7XG5cbiAgICB0aGlzLm1ldGFkYXRhID0gZmlsZS5tZXRhZGF0YS5tb2R1bGVzO1xuICAgIHRoaXMuZ2V0TWV0YWRhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVmYXVsdEZvcm1hdHRlci5wcm90b3R5cGUuYWRkU2NvcGUgPSBmdW5jdGlvbiBhZGRTY29wZShwYXRoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHBhdGgubm9kZS5zb3VyY2UgJiYgcGF0aC5ub2RlLnNvdXJjZS52YWx1ZTtcbiAgICBpZiAoIXNvdXJjZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV4aXN0aW5nU2NvcGUgPSB0aGlzLnNvdXJjZVNjb3Blc1tzb3VyY2VdO1xuICAgIGlmIChleGlzdGluZ1Njb3BlICYmIGV4aXN0aW5nU2NvcGUgIT09IHBhdGguc2NvcGUpIHtcbiAgICAgIHRocm93IHBhdGguZXJyb3JXaXRoTm9kZShtZXNzYWdlcy5nZXQoXCJtb2R1bGVzRHVwbGljYXRlRGVjbGFyYXRpb25zXCIpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZVNjb3Blc1tzb3VyY2VdID0gcGF0aC5zY29wZTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLmlzTW9kdWxlVHlwZSA9IGZ1bmN0aW9uIGlzTW9kdWxlVHlwZShub2RlLCB0eXBlKSB7XG4gICAgdmFyIG1vZHVsZXMgPSB0aGlzLmZpbGUuZHluYW1pY0ltcG9ydFR5cGVzW3R5cGVdO1xuICAgIHJldHVybiBtb2R1bGVzICYmIG1vZHVsZXMuaW5kZXhPZihub2RlKSA+PSAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVmYXVsdEZvcm1hdHRlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKCkge1xuICAgIHRoaXMucmVtYXBBc3NpZ25tZW50cygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVmYXVsdEZvcm1hdHRlci5wcm90b3R5cGUuZG9EZWZhdWx0RXhwb3J0SW50ZXJvcCA9IGZ1bmN0aW9uIGRvRGVmYXVsdEV4cG9ydEludGVyb3Aobm9kZSkge1xuICAgIHJldHVybiAodC5pc0V4cG9ydERlZmF1bHREZWNsYXJhdGlvbihub2RlKSB8fCB0LmlzU3BlY2lmaWVyRGVmYXVsdChub2RlKSkgJiYgIXRoaXMubm9JbnRlcm9wUmVxdWlyZUV4cG9ydCAmJiAhdGhpcy5oYXNOb25EZWZhdWx0RXhwb3J0cztcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLmdldE1ldGFkYXRhID0gZnVuY3Rpb24gZ2V0TWV0YWRhdGEoKSB7XG4gICAgdmFyIGhhcyA9IGZhbHNlO1xuICAgIHZhciBfYXJyID0gdGhpcy5maWxlLmFzdC5wcm9ncmFtLmJvZHk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgbm9kZSA9IF9hcnJbX2ldO1xuICAgICAgaWYgKHQuaXNNb2R1bGVEZWNsYXJhdGlvbihub2RlKSkge1xuICAgICAgICBoYXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhcyB8fCB0aGlzLmlzTG9vc2UoKSkge1xuICAgICAgdGhpcy5maWxlLnBhdGgudHJhdmVyc2UobWV0YWRhdGFWaXNpdG9yLCB0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZWZhdWx0Rm9ybWF0dGVyLnByb3RvdHlwZS5yZW1hcEFzc2lnbm1lbnRzID0gZnVuY3Rpb24gcmVtYXBBc3NpZ25tZW50cygpIHtcbiAgICBpZiAodGhpcy5oYXNMb2NhbEV4cG9ydHMgfHwgdGhpcy5oYXNMb2NhbEltcG9ydHMpIHtcbiAgICAgIHRoaXMucmVtYXBzLnJ1bigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLnJlbWFwRXhwb3J0QXNzaWdubWVudCA9IGZ1bmN0aW9uIHJlbWFwRXhwb3J0QXNzaWdubWVudChub2RlLCBleHBvcnRlZCkge1xuICAgIHZhciBhc3NpZ24gPSBub2RlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgYXNzaWduID0gdC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgdC5tZW1iZXJFeHByZXNzaW9uKHQuaWRlbnRpZmllcihcImV4cG9ydHNcIiksIGV4cG9ydGVkW2ldKSwgYXNzaWduKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzaWduO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVmYXVsdEZvcm1hdHRlci5wcm90b3R5cGUuX2FkZEV4cG9ydCA9IGZ1bmN0aW9uIF9hZGRFeHBvcnQobmFtZSwgZXhwb3J0ZWQpIHtcbiAgICB2YXIgaW5mbyA9IHRoaXMubG9jYWxFeHBvcnRzW25hbWVdID0gdGhpcy5sb2NhbEV4cG9ydHNbbmFtZV0gfHwge1xuICAgICAgYmluZGluZzogdGhpcy5zY29wZS5nZXRCaW5kaW5nSWRlbnRpZmllcihuYW1lKSxcbiAgICAgIGV4cG9ydGVkOiBbXVxuICAgIH07XG4gICAgaW5mby5leHBvcnRlZC5wdXNoKGV4cG9ydGVkKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLmdldEV4cG9ydCA9IGZ1bmN0aW9uIGdldEV4cG9ydChub2RlLCBzY29wZSkge1xuICAgIGlmICghdC5pc0lkZW50aWZpZXIobm9kZSkpIHJldHVybjtcblxuICAgIHZhciBsb2NhbCA9IHRoaXMubG9jYWxFeHBvcnRzW25vZGUubmFtZV07XG4gICAgaWYgKGxvY2FsICYmIGxvY2FsLmJpbmRpbmcgPT09IHNjb3BlLmdldEJpbmRpbmdJZGVudGlmaWVyKG5vZGUubmFtZSkpIHtcbiAgICAgIHJldHVybiBsb2NhbC5leHBvcnRlZDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZWZhdWx0Rm9ybWF0dGVyLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gZ2V0TW9kdWxlTmFtZSgpIHtcbiAgICB2YXIgb3B0cyA9IHRoaXMuZmlsZS5vcHRzO1xuICAgIC8vIG1vZHVsZUlkIGlzIG4vYSBpZiBhIGBnZXRNb2R1bGVJZCgpYCBpcyBwcm92aWRlZFxuICAgIGlmIChvcHRzLm1vZHVsZUlkICE9IG51bGwgJiYgIW9wdHMuZ2V0TW9kdWxlSWQpIHtcbiAgICAgIHJldHVybiBvcHRzLm1vZHVsZUlkO1xuICAgIH1cblxuICAgIHZhciBmaWxlbmFtZVJlbGF0aXZlID0gb3B0cy5maWxlbmFtZVJlbGF0aXZlO1xuICAgIHZhciBtb2R1bGVOYW1lID0gXCJcIjtcblxuICAgIGlmIChvcHRzLm1vZHVsZVJvb3QgIT0gbnVsbCkge1xuICAgICAgbW9kdWxlTmFtZSA9IG9wdHMubW9kdWxlUm9vdCArIFwiL1wiO1xuICAgIH1cblxuICAgIGlmICghb3B0cy5maWxlbmFtZVJlbGF0aXZlKSB7XG4gICAgICByZXR1cm4gbW9kdWxlTmFtZSArIG9wdHMuZmlsZW5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgLy8gcmVtb3ZlIHNvdXJjZVJvb3QgZnJvbSBmaWxlbmFtZVxuICAgICAgdmFyIHNvdXJjZVJvb3RSZWdFeCA9IG5ldyBSZWdFeHAoXCJeXCIgKyBvcHRzLnNvdXJjZVJvb3QgKyBcIlxcLz9cIik7XG4gICAgICBmaWxlbmFtZVJlbGF0aXZlID0gZmlsZW5hbWVSZWxhdGl2ZS5yZXBsYWNlKHNvdXJjZVJvb3RSZWdFeCwgXCJcIik7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRzLmtlZXBNb2R1bGVJZEV4dGVuc2lvbnMpIHtcbiAgICAgIC8vIHJlbW92ZSBleHRlbnNpb25cbiAgICAgIGZpbGVuYW1lUmVsYXRpdmUgPSBmaWxlbmFtZVJlbGF0aXZlLnJlcGxhY2UoL1xcLihcXHcqPykkLywgXCJcIik7XG4gICAgfVxuXG4gICAgbW9kdWxlTmFtZSArPSBmaWxlbmFtZVJlbGF0aXZlO1xuXG4gICAgLy8gbm9ybWFsaXplIHBhdGggc2VwYXJhdG9yc1xuICAgIG1vZHVsZU5hbWUgPSBtb2R1bGVOYW1lLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xuXG4gICAgaWYgKG9wdHMuZ2V0TW9kdWxlSWQpIHtcbiAgICAgIC8vIElmIHJldHVybiBpcyBmYWxzeSwgYXNzdW1lIHRoZXkgd2FudCB1cyB0byB1c2Ugb3VyIGdlbmVyYXRlZCBkZWZhdWx0IG5hbWVcbiAgICAgIHJldHVybiBvcHRzLmdldE1vZHVsZUlkKG1vZHVsZU5hbWUpIHx8IG1vZHVsZU5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb2R1bGVOYW1lO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLl9wdXNoU3RhdGVtZW50ID0gZnVuY3Rpb24gX3B1c2hTdGF0ZW1lbnQocmVmLCBub2Rlcykge1xuICAgIGlmICh0LmlzQ2xhc3MocmVmKSB8fCB0LmlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgaWYgKHJlZi5pZCkge1xuICAgICAgICBub2Rlcy5wdXNoKHQudG9TdGF0ZW1lbnQocmVmKSk7XG4gICAgICAgIHJlZiA9IHJlZi5pZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVmYXVsdEZvcm1hdHRlci5wcm90b3R5cGUuX2hvaXN0RXhwb3J0ID0gZnVuY3Rpb24gX2hvaXN0RXhwb3J0KGRlY2xhciwgYXNzaWduLCBwcmlvcml0eSkge1xuICAgIGlmICh0LmlzRnVuY3Rpb25EZWNsYXJhdGlvbihkZWNsYXIpKSB7XG4gICAgICBhc3NpZ24uX2Jsb2NrSG9pc3QgPSBwcmlvcml0eSB8fCAyO1xuICAgIH1cblxuICAgIHJldHVybiBhc3NpZ247XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZWZhdWx0Rm9ybWF0dGVyLnByb3RvdHlwZS5nZXRFeHRlcm5hbFJlZmVyZW5jZSA9IGZ1bmN0aW9uIGdldEV4dGVybmFsUmVmZXJlbmNlKG5vZGUsIG5vZGVzKSB7XG4gICAgdmFyIGlkcyA9IHRoaXMuaWRzO1xuICAgIHZhciBpZCA9IG5vZGUuc291cmNlLnZhbHVlO1xuXG4gICAgaWYgKGlkc1tpZF0pIHtcbiAgICAgIHJldHVybiBpZHNbaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pZHNbaWRdID0gdGhpcy5fZ2V0RXh0ZXJuYWxSZWZlcmVuY2Uobm9kZSwgbm9kZXMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLmNoZWNrRXhwb3J0SWRlbnRpZmllciA9IGZ1bmN0aW9uIGNoZWNrRXhwb3J0SWRlbnRpZmllcihub2RlKSB7XG4gICAgaWYgKHQuaXNJZGVudGlmaWVyKG5vZGUsIHsgbmFtZTogXCJfX2VzTW9kdWxlXCIgfSkpIHtcbiAgICAgIHRocm93IHRoaXMuZmlsZS5lcnJvcldpdGhOb2RlKG5vZGUsIG1lc3NhZ2VzLmdldChcIm1vZHVsZXNJbGxlZ2FsRXhwb3J0TmFtZVwiLCBub2RlLm5hbWUpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZWZhdWx0Rm9ybWF0dGVyLnByb3RvdHlwZS5leHBvcnRBbGxEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIGV4cG9ydEFsbERlY2xhcmF0aW9uKG5vZGUsIG5vZGVzKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMuZ2V0RXh0ZXJuYWxSZWZlcmVuY2Uobm9kZSwgbm9kZXMpO1xuICAgIG5vZGVzLnB1c2godGhpcy5idWlsZEV4cG9ydHNXaWxkY2FyZChyZWYsIG5vZGUpKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLmlzTG9vc2UgPSBmdW5jdGlvbiBpc0xvb3NlKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGUuaXNMb29zZShcImVzNi5tb2R1bGVzXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVmYXVsdEZvcm1hdHRlci5wcm90b3R5cGUuZXhwb3J0U3BlY2lmaWVyID0gZnVuY3Rpb24gZXhwb3J0U3BlY2lmaWVyKHNwZWNpZmllciwgbm9kZSwgbm9kZXMpIHtcbiAgICBpZiAobm9kZS5zb3VyY2UpIHtcbiAgICAgIHZhciByZWYgPSB0aGlzLmdldEV4dGVybmFsUmVmZXJlbmNlKG5vZGUsIG5vZGVzKTtcblxuICAgICAgaWYgKHNwZWNpZmllci5sb2NhbC5uYW1lID09PSBcImRlZmF1bHRcIiAmJiAhdGhpcy5ub0ludGVyb3BSZXF1aXJlRXhwb3J0KSB7XG4gICAgICAgIC8vIGltcG9ydGluZyBhIGRlZmF1bHQgc28gd2UgbmVlZCB0byBub3JtYWxpemUgaXRcbiAgICAgICAgcmVmID0gdC5jYWxsRXhwcmVzc2lvbih0aGlzLmZpbGUuYWRkSGVscGVyKFwiaW50ZXJvcC1yZXF1aXJlXCIpLCBbcmVmXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWYgPSB0Lm1lbWJlckV4cHJlc3Npb24ocmVmLCBzcGVjaWZpZXIubG9jYWwpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0xvb3NlKCkpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKHRoaXMuYnVpbGRFeHBvcnRzRnJvbUFzc2lnbm1lbnQoc3BlY2lmaWVyLmV4cG9ydGVkLCByZWYsIG5vZGUpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZXhwb3J0IHsgZm9vIH0gZnJvbSBcInRlc3RcIjtcbiAgICAgIG5vZGVzLnB1c2godGhpcy5idWlsZEV4cG9ydHNBc3NpZ25tZW50KHNwZWNpZmllci5leHBvcnRlZCwgcmVmLCBub2RlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4cG9ydCB7IGZvbyB9O1xuICAgICAgbm9kZXMucHVzaCh0aGlzLmJ1aWxkRXhwb3J0c0Fzc2lnbm1lbnQoc3BlY2lmaWVyLmV4cG9ydGVkLCBzcGVjaWZpZXIubG9jYWwsIG5vZGUpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZWZhdWx0Rm9ybWF0dGVyLnByb3RvdHlwZS5idWlsZEV4cG9ydHNXaWxkY2FyZCA9IGZ1bmN0aW9uIGJ1aWxkRXhwb3J0c1dpbGRjYXJkKG9iamVjdElkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gdC5leHByZXNzaW9uU3RhdGVtZW50KHQuY2FsbEV4cHJlc3Npb24odGhpcy5maWxlLmFkZEhlbHBlcihcImRlZmF1bHRzXCIpLCBbdC5pZGVudGlmaWVyKFwiZXhwb3J0c1wiKSwgdC5jYWxsRXhwcmVzc2lvbih0aGlzLmZpbGUuYWRkSGVscGVyKFwiaW50ZXJvcC1leHBvcnQtd2lsZGNhcmRcIiksIFtvYmplY3RJZGVudGlmaWVyLCB0aGlzLmZpbGUuYWRkSGVscGVyKFwiZGVmYXVsdHNcIildKV0pKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlZmF1bHRGb3JtYXR0ZXIucHJvdG90eXBlLmJ1aWxkRXhwb3J0c0Zyb21Bc3NpZ25tZW50ID0gZnVuY3Rpb24gYnVpbGRFeHBvcnRzRnJvbUFzc2lnbm1lbnQoaWQsIGluaXQpIHtcbiAgICB0aGlzLmNoZWNrRXhwb3J0SWRlbnRpZmllcihpZCk7XG4gICAgcmV0dXJuIHV0aWwudGVtcGxhdGUoXCJleHBvcnRzLWZyb20tYXNzaWduXCIsIHtcbiAgICAgIElOSVQ6IGluaXQsXG4gICAgICBJRDogdC5saXRlcmFsKGlkLm5hbWUpXG4gICAgfSwgdHJ1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZWZhdWx0Rm9ybWF0dGVyLnByb3RvdHlwZS5idWlsZEV4cG9ydHNBc3NpZ25tZW50ID0gZnVuY3Rpb24gYnVpbGRFeHBvcnRzQXNzaWdubWVudChpZCwgaW5pdCkge1xuICAgIHRoaXMuY2hlY2tFeHBvcnRJZGVudGlmaWVyKGlkKTtcbiAgICByZXR1cm4gdXRpbC50ZW1wbGF0ZShcImV4cG9ydHMtYXNzaWduXCIsIHtcbiAgICAgIFZBTFVFOiBpbml0LFxuICAgICAgS0VZOiBpZFxuICAgIH0sIHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVmYXVsdEZvcm1hdHRlci5wcm90b3R5cGUuZXhwb3J0RGVjbGFyYXRpb24gPSBmdW5jdGlvbiBleHBvcnREZWNsYXJhdGlvbihub2RlLCBub2Rlcykge1xuICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uO1xuXG4gICAgdmFyIGlkID0gZGVjbGFyLmlkO1xuXG4gICAgaWYgKHQuaXNFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgIGlkID0gdC5pZGVudGlmaWVyKFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgICB2YXIgYXNzaWduO1xuXG4gICAgaWYgKHQuaXNWYXJpYWJsZURlY2xhcmF0aW9uKGRlY2xhcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVjbGFyLmRlY2xhcmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVjbCA9IGRlY2xhci5kZWNsYXJhdGlvbnNbaV07XG5cbiAgICAgICAgZGVjbC5pbml0ID0gdGhpcy5idWlsZEV4cG9ydHNBc3NpZ25tZW50KGRlY2wuaWQsIGRlY2wuaW5pdCwgbm9kZSkuZXhwcmVzc2lvbjtcblxuICAgICAgICB2YXIgbmV3RGVjbGFyID0gdC52YXJpYWJsZURlY2xhcmF0aW9uKGRlY2xhci5raW5kLCBbZGVjbF0pO1xuICAgICAgICBpZiAoaSA9PT0gMCkgdC5pbmhlcml0cyhuZXdEZWNsYXIsIGRlY2xhcik7XG4gICAgICAgIG5vZGVzLnB1c2gobmV3RGVjbGFyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlZiA9IGRlY2xhcjtcblxuICAgICAgaWYgKHQuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKGRlY2xhcikgfHwgdC5pc0NsYXNzRGVjbGFyYXRpb24oZGVjbGFyKSkge1xuICAgICAgICByZWYgPSBkZWNsYXIuaWQ7XG4gICAgICAgIG5vZGVzLnB1c2goZGVjbGFyKTtcbiAgICAgIH1cblxuICAgICAgYXNzaWduID0gdGhpcy5idWlsZEV4cG9ydHNBc3NpZ25tZW50KGlkLCByZWYsIG5vZGUpO1xuXG4gICAgICBub2Rlcy5wdXNoKGFzc2lnbik7XG5cbiAgICAgIHRoaXMuX2hvaXN0RXhwb3J0KGRlY2xhciwgYXNzaWduKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIERlZmF1bHRGb3JtYXR0ZXI7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERlZmF1bHRGb3JtYXR0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
