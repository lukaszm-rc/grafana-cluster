/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _default, _default2, _common, _common2, _lodashCollectionIncludes, _lodashCollectionIncludes2, _lodashObjectValues, _lodashObjectValues2, _util, util, _types, t, AMDFormatter;

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

  // istanbul ignore next

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // istanbul ignore next

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      exports.__esModule = true;_default = require("./_default");
      _default2 = _interopRequireDefault(_default);
      _common = require("./common");
      _common2 = _interopRequireDefault(_common);
      _lodashCollectionIncludes = require("lodash/collection/includes");
      _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
      _lodashObjectValues = require("lodash/object/values");
      _lodashObjectValues2 = _interopRequireDefault(_lodashObjectValues);
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      AMDFormatter = function (_DefaultFormatter) {
        _inherits(AMDFormatter, _DefaultFormatter);

        function AMDFormatter() {
          _classCallCheck(this, AMDFormatter);

          _DefaultFormatter.apply(this, arguments);
        }

        /**
         * [Please add a description.]
         */

        AMDFormatter.prototype.setup = function setup() {
          _common2["default"].prototype._setup.call(this, this.hasNonDefaultExports);
        };

        /**
         * [Please add a description.]
         */

        AMDFormatter.prototype.buildDependencyLiterals = function buildDependencyLiterals() {
          var names = [];
          for (var name in this.ids) {
            names.push(t.literal(name));
          }
          return names;
        };

        /**
         * Wrap the entire body in a `define` wrapper.
         */

        AMDFormatter.prototype.transform = function transform(program) {
          _common2["default"].prototype.transform.apply(this, arguments);

          var body = program.body;

          // build an array of module names

          var names = [t.literal("exports")];
          if (this.passModuleArg) names.push(t.literal("module"));
          names = names.concat(this.buildDependencyLiterals());
          names = t.arrayExpression(names);

          // build up define container

          var params = _lodashObjectValues2["default"](this.ids);
          if (this.passModuleArg) params.unshift(t.identifier("module"));
          params.unshift(t.identifier("exports"));

          var container = t.functionExpression(null, params, t.blockStatement(body));

          var defineArgs = [names, container];
          var moduleName = this.getModuleName();
          if (moduleName) defineArgs.unshift(t.literal(moduleName));

          var call = t.callExpression(t.identifier("define"), defineArgs);

          program.body = [t.expressionStatement(call)];
        };

        /**
         * Get the AMD module name that we'll prepend to the wrapper
         * to define this module
         */

        AMDFormatter.prototype.getModuleName = function getModuleName() {
          if (this.file.opts.moduleIds) {
            return _default2["default"].prototype.getModuleName.apply(this, arguments);
          } else {
            return null;
          }
        };

        /**
         * [Please add a description.]
         */

        AMDFormatter.prototype._getExternalReference = function _getExternalReference(node) {
          return this.scope.generateUidIdentifier(node.source.value);
        };

        /**
         * [Please add a description.]
         */

        AMDFormatter.prototype.importDeclaration = function importDeclaration(node) {
          this.getExternalReference(node);
        };

        /**
         * [Please add a description.]
         */

        AMDFormatter.prototype.importSpecifier = function importSpecifier(specifier, node, nodes, scope) {
          var key = node.source.value;
          var ref = this.getExternalReference(node);

          if (t.isImportNamespaceSpecifier(specifier) || t.isImportDefaultSpecifier(specifier)) {
            this.defaultIds[key] = specifier.local;
          }

          if (this.isModuleType(node, "absolute")) {
            // absolute module reference
          } else if (this.isModuleType(node, "absoluteDefault")) {
              // prevent unnecessary renaming of dynamic imports
              this.ids[node.source.value] = ref;
              ref = t.memberExpression(ref, t.identifier("default"));
            } else if (t.isImportNamespaceSpecifier(specifier)) {
              // import * as bar from "foo";
            } else if (!_lodashCollectionIncludes2["default"](this.file.dynamicImported, node) && t.isSpecifierDefault(specifier) && !this.noInteropRequireImport) {
                // import foo from "foo";
                var uid = scope.generateUidIdentifier(specifier.local.name);
                nodes.push(t.variableDeclaration("var", [t.variableDeclarator(uid, t.callExpression(this.file.addHelper("interop-require-default"), [ref]))]));
                ref = t.memberExpression(uid, t.identifier("default"));
              } else {
                // import { foo } from "foo";
                var imported = specifier.imported;
                if (t.isSpecifierDefault(specifier)) imported = t.identifier("default");
                ref = t.memberExpression(ref, imported);
              }

          this.remaps.add(scope, specifier.local.name, ref);
        };

        /**
         * [Please add a description.]
         */

        AMDFormatter.prototype.exportSpecifier = function exportSpecifier(specifier, node, nodes) {
          if (this.doDefaultExportInterop(specifier)) {
            this.passModuleArg = true;

            if (specifier.exported !== specifier.local && !node.source) {
              nodes.push(util.template("exports-default-assign", {
                VALUE: specifier.local
              }, true));
              return;
            }
          }

          _common2["default"].prototype.exportSpecifier.apply(this, arguments);
        };

        /**
         * [Please add a description.]
         */

        AMDFormatter.prototype.exportDeclaration = function exportDeclaration(node, nodes) {
          if (this.doDefaultExportInterop(node)) {
            this.passModuleArg = true;

            var declar = node.declaration;
            var assign = util.template("exports-default-assign", {
              VALUE: this._pushStatement(declar, nodes)
            }, true);

            if (t.isFunctionDeclaration(declar)) {
              // we can hoist this assignment to the top of the file
              assign._blockHoist = 3;
            }

            nodes.push(assign);
            return;
          }

          _default2["default"].prototype.exportDeclaration.apply(this, arguments);
        };

        return AMDFormatter;
      }(_default2["default"]);

      exports["default"] = AMDFormatter;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9hbWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7O0FBSUEsV0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLFVBQTdCLEVBQXlDO0FBQUUsUUFBSSxPQUFPLFVBQVAsS0FBc0IsVUFBdEIsSUFBb0MsZUFBZSxJQUFmLEVBQXFCO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsK0RBQXBFLENBQXBCLENBQUY7S0FB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OUMsQ0FBb0QsSUFBcEQsRUFBMEQsU0FBMUQsRUFad0Y7U0FBakQ7Ozs7OztBQWxJTSxvQkFxSi9DLENBQWEsU0FBYixDQUF1QixpQkFBdkIsR0FBMkMsU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQyxLQUFqQyxFQUF3QztBQUNqRixjQUFJLEtBQUssc0JBQUwsQ0FBNEIsSUFBNUIsQ0FBSixFQUF1QztBQUNyQyxpQkFBSyxhQUFMLEdBQXFCLElBQXJCLENBRHFDOztBQUdyQyxnQkFBSSxTQUFTLEtBQUssV0FBTCxDQUh3QjtBQUlyQyxnQkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLHdCQUFkLEVBQXdDO0FBQ25ELHFCQUFPLEtBQUssY0FBTCxDQUFvQixNQUFwQixFQUE0QixLQUE1QixDQUFQO2FBRFcsRUFFVixJQUZVLENBQVQsQ0FKaUM7O0FBUXJDLGdCQUFJLEVBQUUscUJBQUYsQ0FBd0IsTUFBeEIsQ0FBSixFQUFxQzs7QUFFbkMscUJBQU8sV0FBUCxHQUFxQixDQUFyQixDQUZtQzthQUFyQzs7QUFLQSxrQkFBTSxJQUFOLENBQVcsTUFBWCxFQWJxQztBQWNyQyxtQkFkcUM7V0FBdkM7O0FBaUJBLG9CQUFVLFNBQVYsRUFBcUIsU0FBckIsQ0FBK0IsaUJBQS9CLENBQWlELEtBQWpELENBQXVELElBQXZELEVBQTZELFNBQTdELEVBbEJpRjtTQUF4QyxDQXJKSTs7QUEwSy9DLGVBQU8sWUFBUCxDQTFLK0M7T0FBN0IsQ0EyS2pCLFVBQVUsU0FBVixDQTNLZ0I7O0FBNktuQixjQUFRLFNBQVIsSUFBcUIsWUFBckI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9hbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9kZWZhdWx0ID0gcmVxdWlyZShcIi4vX2RlZmF1bHRcIik7XG5cbnZhciBfZGVmYXVsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0KTtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfY29tbW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbW1vbik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzID0gcmVxdWlyZShcImxvZGFzaC9jb2xsZWN0aW9uL2luY2x1ZGVzXCIpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMpO1xuXG52YXIgX2xvZGFzaE9iamVjdFZhbHVlcyA9IHJlcXVpcmUoXCJsb2Rhc2gvb2JqZWN0L3ZhbHVlc1wiKTtcblxudmFyIF9sb2Rhc2hPYmplY3RWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoT2JqZWN0VmFsdWVzKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uLy4uL3V0aWxcIik7XG5cbnZhciB1dGlsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWwpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIEFNREZvcm1hdHRlciA9IChmdW5jdGlvbiAoX0RlZmF1bHRGb3JtYXR0ZXIpIHtcbiAgX2luaGVyaXRzKEFNREZvcm1hdHRlciwgX0RlZmF1bHRGb3JtYXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIEFNREZvcm1hdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQU1ERm9ybWF0dGVyKTtcblxuICAgIF9EZWZhdWx0Rm9ybWF0dGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEFNREZvcm1hdHRlci5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICBfY29tbW9uMltcImRlZmF1bHRcIl0ucHJvdG90eXBlLl9zZXR1cC5jYWxsKHRoaXMsIHRoaXMuaGFzTm9uRGVmYXVsdEV4cG9ydHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQU1ERm9ybWF0dGVyLnByb3RvdHlwZS5idWlsZERlcGVuZGVuY3lMaXRlcmFscyA9IGZ1bmN0aW9uIGJ1aWxkRGVwZW5kZW5jeUxpdGVyYWxzKCkge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5pZHMpIHtcbiAgICAgIG5hbWVzLnB1c2godC5saXRlcmFsKG5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXcmFwIHRoZSBlbnRpcmUgYm9keSBpbiBhIGBkZWZpbmVgIHdyYXBwZXIuXG4gICAqL1xuXG4gIEFNREZvcm1hdHRlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHByb2dyYW0pIHtcbiAgICBfY29tbW9uMltcImRlZmF1bHRcIl0ucHJvdG90eXBlLnRyYW5zZm9ybS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGJvZHkgPSBwcm9ncmFtLmJvZHk7XG5cbiAgICAvLyBidWlsZCBhbiBhcnJheSBvZiBtb2R1bGUgbmFtZXNcblxuICAgIHZhciBuYW1lcyA9IFt0LmxpdGVyYWwoXCJleHBvcnRzXCIpXTtcbiAgICBpZiAodGhpcy5wYXNzTW9kdWxlQXJnKSBuYW1lcy5wdXNoKHQubGl0ZXJhbChcIm1vZHVsZVwiKSk7XG4gICAgbmFtZXMgPSBuYW1lcy5jb25jYXQodGhpcy5idWlsZERlcGVuZGVuY3lMaXRlcmFscygpKTtcbiAgICBuYW1lcyA9IHQuYXJyYXlFeHByZXNzaW9uKG5hbWVzKTtcblxuICAgIC8vIGJ1aWxkIHVwIGRlZmluZSBjb250YWluZXJcblxuICAgIHZhciBwYXJhbXMgPSBfbG9kYXNoT2JqZWN0VmFsdWVzMltcImRlZmF1bHRcIl0odGhpcy5pZHMpO1xuICAgIGlmICh0aGlzLnBhc3NNb2R1bGVBcmcpIHBhcmFtcy51bnNoaWZ0KHQuaWRlbnRpZmllcihcIm1vZHVsZVwiKSk7XG4gICAgcGFyYW1zLnVuc2hpZnQodC5pZGVudGlmaWVyKFwiZXhwb3J0c1wiKSk7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdC5mdW5jdGlvbkV4cHJlc3Npb24obnVsbCwgcGFyYW1zLCB0LmJsb2NrU3RhdGVtZW50KGJvZHkpKTtcblxuICAgIHZhciBkZWZpbmVBcmdzID0gW25hbWVzLCBjb250YWluZXJdO1xuICAgIHZhciBtb2R1bGVOYW1lID0gdGhpcy5nZXRNb2R1bGVOYW1lKCk7XG4gICAgaWYgKG1vZHVsZU5hbWUpIGRlZmluZUFyZ3MudW5zaGlmdCh0LmxpdGVyYWwobW9kdWxlTmFtZSkpO1xuXG4gICAgdmFyIGNhbGwgPSB0LmNhbGxFeHByZXNzaW9uKHQuaWRlbnRpZmllcihcImRlZmluZVwiKSwgZGVmaW5lQXJncyk7XG5cbiAgICBwcm9ncmFtLmJvZHkgPSBbdC5leHByZXNzaW9uU3RhdGVtZW50KGNhbGwpXTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBBTUQgbW9kdWxlIG5hbWUgdGhhdCB3ZSdsbCBwcmVwZW5kIHRvIHRoZSB3cmFwcGVyXG4gICAqIHRvIGRlZmluZSB0aGlzIG1vZHVsZVxuICAgKi9cblxuICBBTURGb3JtYXR0ZXIucHJvdG90eXBlLmdldE1vZHVsZU5hbWUgPSBmdW5jdGlvbiBnZXRNb2R1bGVOYW1lKCkge1xuICAgIGlmICh0aGlzLmZpbGUub3B0cy5tb2R1bGVJZHMpIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEFNREZvcm1hdHRlci5wcm90b3R5cGUuX2dldEV4dGVybmFsUmVmZXJlbmNlID0gZnVuY3Rpb24gX2dldEV4dGVybmFsUmVmZXJlbmNlKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIobm9kZS5zb3VyY2UudmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQU1ERm9ybWF0dGVyLnByb3RvdHlwZS5pbXBvcnREZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIGltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICB0aGlzLmdldEV4dGVybmFsUmVmZXJlbmNlKG5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQU1ERm9ybWF0dGVyLnByb3RvdHlwZS5pbXBvcnRTcGVjaWZpZXIgPSBmdW5jdGlvbiBpbXBvcnRTcGVjaWZpZXIoc3BlY2lmaWVyLCBub2RlLCBub2Rlcywgc2NvcGUpIHtcbiAgICB2YXIga2V5ID0gbm9kZS5zb3VyY2UudmFsdWU7XG4gICAgdmFyIHJlZiA9IHRoaXMuZ2V0RXh0ZXJuYWxSZWZlcmVuY2Uobm9kZSk7XG5cbiAgICBpZiAodC5pc0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcihzcGVjaWZpZXIpIHx8IHQuaXNJbXBvcnREZWZhdWx0U3BlY2lmaWVyKHNwZWNpZmllcikpIHtcbiAgICAgIHRoaXMuZGVmYXVsdElkc1trZXldID0gc3BlY2lmaWVyLmxvY2FsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTW9kdWxlVHlwZShub2RlLCBcImFic29sdXRlXCIpKSB7XG4gICAgICAvLyBhYnNvbHV0ZSBtb2R1bGUgcmVmZXJlbmNlXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzTW9kdWxlVHlwZShub2RlLCBcImFic29sdXRlRGVmYXVsdFwiKSkge1xuICAgICAgICAvLyBwcmV2ZW50IHVubmVjZXNzYXJ5IHJlbmFtaW5nIG9mIGR5bmFtaWMgaW1wb3J0c1xuICAgICAgICB0aGlzLmlkc1tub2RlLnNvdXJjZS52YWx1ZV0gPSByZWY7XG4gICAgICAgIHJlZiA9IHQubWVtYmVyRXhwcmVzc2lvbihyZWYsIHQuaWRlbnRpZmllcihcImRlZmF1bHRcIikpO1xuICAgICAgfSBlbHNlIGlmICh0LmlzSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyKHNwZWNpZmllcikpIHtcbiAgICAgICAgLy8gaW1wb3J0ICogYXMgYmFyIGZyb20gXCJmb29cIjtcbiAgICAgIH0gZWxzZSBpZiAoIV9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMyW1wiZGVmYXVsdFwiXSh0aGlzLmZpbGUuZHluYW1pY0ltcG9ydGVkLCBub2RlKSAmJiB0LmlzU3BlY2lmaWVyRGVmYXVsdChzcGVjaWZpZXIpICYmICF0aGlzLm5vSW50ZXJvcFJlcXVpcmVJbXBvcnQpIHtcbiAgICAgICAgICAvLyBpbXBvcnQgZm9vIGZyb20gXCJmb29cIjtcbiAgICAgICAgICB2YXIgdWlkID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKHNwZWNpZmllci5sb2NhbC5uYW1lKTtcbiAgICAgICAgICBub2Rlcy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodWlkLCB0LmNhbGxFeHByZXNzaW9uKHRoaXMuZmlsZS5hZGRIZWxwZXIoXCJpbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKSwgW3JlZl0pKV0pKTtcbiAgICAgICAgICByZWYgPSB0Lm1lbWJlckV4cHJlc3Npb24odWlkLCB0LmlkZW50aWZpZXIoXCJkZWZhdWx0XCIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpbXBvcnQgeyBmb28gfSBmcm9tIFwiZm9vXCI7XG4gICAgICAgICAgdmFyIGltcG9ydGVkID0gc3BlY2lmaWVyLmltcG9ydGVkO1xuICAgICAgICAgIGlmICh0LmlzU3BlY2lmaWVyRGVmYXVsdChzcGVjaWZpZXIpKSBpbXBvcnRlZCA9IHQuaWRlbnRpZmllcihcImRlZmF1bHRcIik7XG4gICAgICAgICAgcmVmID0gdC5tZW1iZXJFeHByZXNzaW9uKHJlZiwgaW1wb3J0ZWQpO1xuICAgICAgICB9XG5cbiAgICB0aGlzLnJlbWFwcy5hZGQoc2NvcGUsIHNwZWNpZmllci5sb2NhbC5uYW1lLCByZWYpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQU1ERm9ybWF0dGVyLnByb3RvdHlwZS5leHBvcnRTcGVjaWZpZXIgPSBmdW5jdGlvbiBleHBvcnRTcGVjaWZpZXIoc3BlY2lmaWVyLCBub2RlLCBub2Rlcykge1xuICAgIGlmICh0aGlzLmRvRGVmYXVsdEV4cG9ydEludGVyb3Aoc3BlY2lmaWVyKSkge1xuICAgICAgdGhpcy5wYXNzTW9kdWxlQXJnID0gdHJ1ZTtcblxuICAgICAgaWYgKHNwZWNpZmllci5leHBvcnRlZCAhPT0gc3BlY2lmaWVyLmxvY2FsICYmICFub2RlLnNvdXJjZSkge1xuICAgICAgICBub2Rlcy5wdXNoKHV0aWwudGVtcGxhdGUoXCJleHBvcnRzLWRlZmF1bHQtYXNzaWduXCIsIHtcbiAgICAgICAgICBWQUxVRTogc3BlY2lmaWVyLmxvY2FsXG4gICAgICAgIH0sIHRydWUpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9jb21tb24yW1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuZXhwb3J0U3BlY2lmaWVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBBTURGb3JtYXR0ZXIucHJvdG90eXBlLmV4cG9ydERlY2xhcmF0aW9uID0gZnVuY3Rpb24gZXhwb3J0RGVjbGFyYXRpb24obm9kZSwgbm9kZXMpIHtcbiAgICBpZiAodGhpcy5kb0RlZmF1bHRFeHBvcnRJbnRlcm9wKG5vZGUpKSB7XG4gICAgICB0aGlzLnBhc3NNb2R1bGVBcmcgPSB0cnVlO1xuXG4gICAgICB2YXIgZGVjbGFyID0gbm9kZS5kZWNsYXJhdGlvbjtcbiAgICAgIHZhciBhc3NpZ24gPSB1dGlsLnRlbXBsYXRlKFwiZXhwb3J0cy1kZWZhdWx0LWFzc2lnblwiLCB7XG4gICAgICAgIFZBTFVFOiB0aGlzLl9wdXNoU3RhdGVtZW50KGRlY2xhciwgbm9kZXMpXG4gICAgICB9LCB0cnVlKTtcblxuICAgICAgaWYgKHQuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKGRlY2xhcikpIHtcbiAgICAgICAgLy8gd2UgY2FuIGhvaXN0IHRoaXMgYXNzaWdubWVudCB0byB0aGUgdG9wIG9mIHRoZSBmaWxlXG4gICAgICAgIGFzc2lnbi5fYmxvY2tIb2lzdCA9IDM7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzLnB1c2goYXNzaWduKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5leHBvcnREZWNsYXJhdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiBBTURGb3JtYXR0ZXI7XG59KShfZGVmYXVsdDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBTURGb3JtYXR0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
