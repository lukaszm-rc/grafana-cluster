/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _default, _default2, _util, util, _types, t, CommonJSFormatter;

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
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);

      CommonJSFormatter = function (_DefaultFormatter) {
        _inherits(CommonJSFormatter, _DefaultFormatter);

        function CommonJSFormatter() {
          _classCallCheck(this, CommonJSFormatter);

          _DefaultFormatter.apply(this, arguments);
        }

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype.setup = function setup() {
          this._setup(this.hasLocalExports);
        };

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype._setup = function _setup(conditional) {
          var file = this.file;
          var scope = file.scope;

          scope.rename("module");
          scope.rename("exports");

          if (!this.noInteropRequireImport && conditional) {
            var templateName = "exports-module-declaration";
            if (this.file.isLoose("es6.modules")) templateName += "-loose";
            var declar = util.template(templateName, true);
            declar._blockHoist = 3;
            file.path.unshiftContainer("body", [declar]);
          }
        };

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype.transform = function transform(program) {
          _default2["default"].prototype.transform.apply(this, arguments);

          if (this.hasDefaultOnlyExport) {
            program.body.push(t.expressionStatement(t.assignmentExpression("=", t.memberExpression(t.identifier("module"), t.identifier("exports")), t.memberExpression(t.identifier("exports"), t.identifier("default")))));
          }
        };

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype.importSpecifier = function importSpecifier(specifier, node, nodes, scope) {
          var variableName = specifier.local;

          var ref = this.getExternalReference(node, nodes);

          // import foo from "foo";
          if (t.isSpecifierDefault(specifier)) {
            if (this.isModuleType(node, "absolute")) {
              // absolute module reference
            } else if (this.isModuleType(node, "absoluteDefault")) {
                this.remaps.add(scope, variableName.name, ref);
              } else if (this.noInteropRequireImport) {
                this.remaps.add(scope, variableName.name, t.memberExpression(ref, t.identifier("default")));
              } else {
                var uid = this.scope.generateUidIdentifierBasedOnNode(node, "import");

                nodes.push(t.variableDeclaration("var", [t.variableDeclarator(uid, t.callExpression(this.file.addHelper("interop-require-default"), [ref]))]));

                this.remaps.add(scope, variableName.name, t.memberExpression(uid, t.identifier("default")));
              }
          } else {
            if (t.isImportNamespaceSpecifier(specifier)) {
              if (!this.noInteropRequireImport) {
                ref = t.callExpression(this.file.addHelper("interop-require-wildcard"), [ref]);
              }

              // import * as bar from "foo";
              nodes.push(t.variableDeclaration("var", [t.variableDeclarator(variableName, ref)]));
            } else {
              // import { foo } from "foo";
              this.remaps.add(scope, variableName.name, t.memberExpression(ref, t.identifier(specifier.imported.name)));
            }
          }
        };

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype.importDeclaration = function importDeclaration(node, nodes) {
          // import "foo";
          nodes.push(util.template("require", {
            MODULE_NAME: node.source
          }, true));
        };

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype.exportSpecifier = function exportSpecifier(specifier) {
          if (this.doDefaultExportInterop(specifier)) {
            this.hasDefaultOnlyExport = true;
          }

          _default2["default"].prototype.exportSpecifier.apply(this, arguments);
        };

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype.exportDeclaration = function exportDeclaration(node) {
          if (this.doDefaultExportInterop(node)) {
            this.hasDefaultOnlyExport = true;
          }

          _default2["default"].prototype.exportDeclaration.apply(this, arguments);
        };

        /**
         * [Please add a description.]
         */

        CommonJSFormatter.prototype._getExternalReference = function _getExternalReference(node, nodes) {
          var call = t.callExpression(t.identifier("require"), [node.source]);
          var uid;

          if (this.isModuleType(node, "absolute")) {
            // absolute module reference
          } else if (this.isModuleType(node, "absoluteDefault")) {
              call = t.memberExpression(call, t.identifier("default"));
            } else {
              uid = this.scope.generateUidIdentifierBasedOnNode(node, "import");
            }

          uid = uid || node.specifiers[0].local;

          var declar = t.variableDeclaration("var", [t.variableDeclarator(uid, call)]);
          nodes.push(declar);
          return uid;
        };

        return CommonJSFormatter;
      }(_default2["default"]);

      exports["default"] = CommonJSFormatter;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9jb21tb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7O0FBSUEsV0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLFVBQTdCLEVBQXlDO0FBQUUsUUFBSSxPQUFPLFVBQVAsS0FBc0IsVUFBdEIsSUFBb0MsZUFBZSxJQUFmLEVBQXFCO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsK0RBQXBFLENBQXBCLENBQUY7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LG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLENBQUMsRUFBRSxrQkFBRixDQUFxQixHQUFyQixFQUEwQixJQUExQixDQUFELENBQTdCLENBQVQsQ0FkMEY7QUFlOUYsZ0JBQU0sSUFBTixDQUFXLE1BQVgsRUFmOEY7QUFnQjlGLGlCQUFPLEdBQVAsQ0FoQjhGO1NBQTVDLENBL0hBOztBQWtKcEQsZUFBTyxpQkFBUCxDQWxKb0Q7T0FBN0IsQ0FtSnRCLFVBQVUsU0FBVixDQW5KcUI7O0FBcUp4QixjQUFRLFNBQVIsSUFBcUIsaUJBQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL21vZHVsZXMvY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfZGVmYXVsdCA9IHJlcXVpcmUoXCIuL19kZWZhdWx0XCIpO1xuXG52YXIgX2RlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpO1xuXG52YXIgdXRpbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBDb21tb25KU0Zvcm1hdHRlciA9IChmdW5jdGlvbiAoX0RlZmF1bHRGb3JtYXR0ZXIpIHtcbiAgX2luaGVyaXRzKENvbW1vbkpTRm9ybWF0dGVyLCBfRGVmYXVsdEZvcm1hdHRlcik7XG5cbiAgZnVuY3Rpb24gQ29tbW9uSlNGb3JtYXR0ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbW1vbkpTRm9ybWF0dGVyKTtcblxuICAgIF9EZWZhdWx0Rm9ybWF0dGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvbW1vbkpTRm9ybWF0dGVyLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIHRoaXMuX3NldHVwKHRoaXMuaGFzTG9jYWxFeHBvcnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvbW1vbkpTRm9ybWF0dGVyLnByb3RvdHlwZS5fc2V0dXAgPSBmdW5jdGlvbiBfc2V0dXAoY29uZGl0aW9uYWwpIHtcbiAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZTtcbiAgICB2YXIgc2NvcGUgPSBmaWxlLnNjb3BlO1xuXG4gICAgc2NvcGUucmVuYW1lKFwibW9kdWxlXCIpO1xuICAgIHNjb3BlLnJlbmFtZShcImV4cG9ydHNcIik7XG5cbiAgICBpZiAoIXRoaXMubm9JbnRlcm9wUmVxdWlyZUltcG9ydCAmJiBjb25kaXRpb25hbCkge1xuICAgICAgdmFyIHRlbXBsYXRlTmFtZSA9IFwiZXhwb3J0cy1tb2R1bGUtZGVjbGFyYXRpb25cIjtcbiAgICAgIGlmICh0aGlzLmZpbGUuaXNMb29zZShcImVzNi5tb2R1bGVzXCIpKSB0ZW1wbGF0ZU5hbWUgKz0gXCItbG9vc2VcIjtcbiAgICAgIHZhciBkZWNsYXIgPSB1dGlsLnRlbXBsYXRlKHRlbXBsYXRlTmFtZSwgdHJ1ZSk7XG4gICAgICBkZWNsYXIuX2Jsb2NrSG9pc3QgPSAzO1xuICAgICAgZmlsZS5wYXRoLnVuc2hpZnRDb250YWluZXIoXCJib2R5XCIsIFtkZWNsYXJdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDb21tb25KU0Zvcm1hdHRlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHByb2dyYW0pIHtcbiAgICBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS50cmFuc2Zvcm0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGlmICh0aGlzLmhhc0RlZmF1bHRPbmx5RXhwb3J0KSB7XG4gICAgICBwcm9ncmFtLmJvZHkucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgdC5tZW1iZXJFeHByZXNzaW9uKHQuaWRlbnRpZmllcihcIm1vZHVsZVwiKSwgdC5pZGVudGlmaWVyKFwiZXhwb3J0c1wiKSksIHQubWVtYmVyRXhwcmVzc2lvbih0LmlkZW50aWZpZXIoXCJleHBvcnRzXCIpLCB0LmlkZW50aWZpZXIoXCJkZWZhdWx0XCIpKSkpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDb21tb25KU0Zvcm1hdHRlci5wcm90b3R5cGUuaW1wb3J0U3BlY2lmaWVyID0gZnVuY3Rpb24gaW1wb3J0U3BlY2lmaWVyKHNwZWNpZmllciwgbm9kZSwgbm9kZXMsIHNjb3BlKSB7XG4gICAgdmFyIHZhcmlhYmxlTmFtZSA9IHNwZWNpZmllci5sb2NhbDtcblxuICAgIHZhciByZWYgPSB0aGlzLmdldEV4dGVybmFsUmVmZXJlbmNlKG5vZGUsIG5vZGVzKTtcblxuICAgIC8vIGltcG9ydCBmb28gZnJvbSBcImZvb1wiO1xuICAgIGlmICh0LmlzU3BlY2lmaWVyRGVmYXVsdChzcGVjaWZpZXIpKSB7XG4gICAgICBpZiAodGhpcy5pc01vZHVsZVR5cGUobm9kZSwgXCJhYnNvbHV0ZVwiKSkge1xuICAgICAgICAvLyBhYnNvbHV0ZSBtb2R1bGUgcmVmZXJlbmNlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNNb2R1bGVUeXBlKG5vZGUsIFwiYWJzb2x1dGVEZWZhdWx0XCIpKSB7XG4gICAgICAgICAgdGhpcy5yZW1hcHMuYWRkKHNjb3BlLCB2YXJpYWJsZU5hbWUubmFtZSwgcmVmKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5vSW50ZXJvcFJlcXVpcmVJbXBvcnQpIHtcbiAgICAgICAgICB0aGlzLnJlbWFwcy5hZGQoc2NvcGUsIHZhcmlhYmxlTmFtZS5uYW1lLCB0Lm1lbWJlckV4cHJlc3Npb24ocmVmLCB0LmlkZW50aWZpZXIoXCJkZWZhdWx0XCIpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHVpZCA9IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyQmFzZWRPbk5vZGUobm9kZSwgXCJpbXBvcnRcIik7XG5cbiAgICAgICAgICBub2Rlcy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodWlkLCB0LmNhbGxFeHByZXNzaW9uKHRoaXMuZmlsZS5hZGRIZWxwZXIoXCJpbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKSwgW3JlZl0pKV0pKTtcblxuICAgICAgICAgIHRoaXMucmVtYXBzLmFkZChzY29wZSwgdmFyaWFibGVOYW1lLm5hbWUsIHQubWVtYmVyRXhwcmVzc2lvbih1aWQsIHQuaWRlbnRpZmllcihcImRlZmF1bHRcIikpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodC5pc0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcihzcGVjaWZpZXIpKSB7XG4gICAgICAgIGlmICghdGhpcy5ub0ludGVyb3BSZXF1aXJlSW1wb3J0KSB7XG4gICAgICAgICAgcmVmID0gdC5jYWxsRXhwcmVzc2lvbih0aGlzLmZpbGUuYWRkSGVscGVyKFwiaW50ZXJvcC1yZXF1aXJlLXdpbGRjYXJkXCIpLCBbcmVmXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbXBvcnQgKiBhcyBiYXIgZnJvbSBcImZvb1wiO1xuICAgICAgICBub2Rlcy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodmFyaWFibGVOYW1lLCByZWYpXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaW1wb3J0IHsgZm9vIH0gZnJvbSBcImZvb1wiO1xuICAgICAgICB0aGlzLnJlbWFwcy5hZGQoc2NvcGUsIHZhcmlhYmxlTmFtZS5uYW1lLCB0Lm1lbWJlckV4cHJlc3Npb24ocmVmLCB0LmlkZW50aWZpZXIoc3BlY2lmaWVyLmltcG9ydGVkLm5hbWUpKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ29tbW9uSlNGb3JtYXR0ZXIucHJvdG90eXBlLmltcG9ydERlY2xhcmF0aW9uID0gZnVuY3Rpb24gaW1wb3J0RGVjbGFyYXRpb24obm9kZSwgbm9kZXMpIHtcbiAgICAvLyBpbXBvcnQgXCJmb29cIjtcbiAgICBub2Rlcy5wdXNoKHV0aWwudGVtcGxhdGUoXCJyZXF1aXJlXCIsIHtcbiAgICAgIE1PRFVMRV9OQU1FOiBub2RlLnNvdXJjZVxuICAgIH0sIHRydWUpKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvbW1vbkpTRm9ybWF0dGVyLnByb3RvdHlwZS5leHBvcnRTcGVjaWZpZXIgPSBmdW5jdGlvbiBleHBvcnRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gICAgaWYgKHRoaXMuZG9EZWZhdWx0RXhwb3J0SW50ZXJvcChzcGVjaWZpZXIpKSB7XG4gICAgICB0aGlzLmhhc0RlZmF1bHRPbmx5RXhwb3J0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5leHBvcnRTcGVjaWZpZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENvbW1vbkpTRm9ybWF0dGVyLnByb3RvdHlwZS5leHBvcnREZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIGV4cG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICBpZiAodGhpcy5kb0RlZmF1bHRFeHBvcnRJbnRlcm9wKG5vZGUpKSB7XG4gICAgICB0aGlzLmhhc0RlZmF1bHRPbmx5RXhwb3J0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5leHBvcnREZWNsYXJhdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ29tbW9uSlNGb3JtYXR0ZXIucHJvdG90eXBlLl9nZXRFeHRlcm5hbFJlZmVyZW5jZSA9IGZ1bmN0aW9uIF9nZXRFeHRlcm5hbFJlZmVyZW5jZShub2RlLCBub2Rlcykge1xuICAgIHZhciBjYWxsID0gdC5jYWxsRXhwcmVzc2lvbih0LmlkZW50aWZpZXIoXCJyZXF1aXJlXCIpLCBbbm9kZS5zb3VyY2VdKTtcbiAgICB2YXIgdWlkO1xuXG4gICAgaWYgKHRoaXMuaXNNb2R1bGVUeXBlKG5vZGUsIFwiYWJzb2x1dGVcIikpIHtcbiAgICAgIC8vIGFic29sdXRlIG1vZHVsZSByZWZlcmVuY2VcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNNb2R1bGVUeXBlKG5vZGUsIFwiYWJzb2x1dGVEZWZhdWx0XCIpKSB7XG4gICAgICAgIGNhbGwgPSB0Lm1lbWJlckV4cHJlc3Npb24oY2FsbCwgdC5pZGVudGlmaWVyKFwiZGVmYXVsdFwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1aWQgPSB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllckJhc2VkT25Ob2RlKG5vZGUsIFwiaW1wb3J0XCIpO1xuICAgICAgfVxuXG4gICAgdWlkID0gdWlkIHx8IG5vZGUuc3BlY2lmaWVyc1swXS5sb2NhbDtcblxuICAgIHZhciBkZWNsYXIgPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKHVpZCwgY2FsbCldKTtcbiAgICBub2Rlcy5wdXNoKGRlY2xhcik7XG4gICAgcmV0dXJuIHVpZDtcbiAgfTtcblxuICByZXR1cm4gQ29tbW9uSlNGb3JtYXR0ZXI7XG59KShfZGVmYXVsdDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb21tb25KU0Zvcm1hdHRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
