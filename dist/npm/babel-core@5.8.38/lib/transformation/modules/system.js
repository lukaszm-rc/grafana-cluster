/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _default, _default2, _amd, _amd2, _util, util, _lodashArrayLast, _lodashArrayLast2, _lodashCollectionMap, _lodashCollectionMap2, _types, t, hoistVariablesVisitor, hoistFunctionsVisitor, runnerSettersVisitor, SystemFormatter;

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
      _amd = require("./amd");
      _amd2 = _interopRequireDefault(_amd);
      _util = require("../../util");
      util = _interopRequireWildcard(_util);
      _lodashArrayLast = require("lodash/array/last");
      _lodashArrayLast2 = _interopRequireDefault(_lodashArrayLast);
      _lodashCollectionMap = require("lodash/collection/map");
      _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      hoistVariablesVisitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function() {
          // nothing inside is accessible
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        VariableDeclaration: function VariableDeclaration(node, parent, scope, state) {
          if (node.kind !== "var" && !t.isProgram(parent)) {
            // let, const
            // can't be accessed
            return;
          }

          // ignore block hoisted nodes as these can be left in
          if (state.formatter._canHoist(node)) return;

          var nodes = [];

          for (var i = 0; i < node.declarations.length; i++) {
            var declar = node.declarations[i];
            state.hoistDeclarators.push(t.variableDeclarator(declar.id));
            if (declar.init) {
              // no initializer so we can just hoist it as-is
              var assign = t.expressionStatement(t.assignmentExpression("=", declar.id, declar.init));
              nodes.push(assign);
            }
          }

          // for (var i in test)
          if (t.isFor(parent) && parent.left === node) {
            return node.declarations[0].id;
          }

          return nodes;
        }
      };
      hoistFunctionsVisitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function() {
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        enter: function enter(node, parent, scope, state) {
          if (t.isFunctionDeclaration(node) || state.formatter._canHoist(node)) {
            state.handlerBody.push(node);
            this.dangerouslyRemove();
          }
        }
      };
      runnerSettersVisitor = {

        /**
         * [Please add a description.]
         */

        enter: function enter(node, parent, scope, state) {
          if (node._importSource === state.source) {
            if (t.isVariableDeclaration(node)) {
              var _arr = node.declarations;

              for (var _i = 0; _i < _arr.length; _i++) {
                var declar = _arr[_i];
                state.hoistDeclarators.push(t.variableDeclarator(declar.id));
                state.nodes.push(t.expressionStatement(t.assignmentExpression("=", declar.id, declar.init)));
              }
            } else {
              state.nodes.push(node);
            }

            this.dangerouslyRemove();
          }
        }
      };

      SystemFormatter = function (_AMDFormatter) {
        _inherits(SystemFormatter, _AMDFormatter);

        function SystemFormatter(file) {
          _classCallCheck(this, SystemFormatter);

          _AMDFormatter.call(this, file);

          this._setters = null;
          this.exportIdentifier = file.scope.generateUidIdentifier("export");
          this.noInteropRequireExport = true;
          this.noInteropRequireImport = true;

          this.remaps.clearAll();
        }

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype._addImportSource = function _addImportSource(node, exportNode) {
          if (node) node._importSource = exportNode.source && exportNode.source.value;
          return node;
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype.buildExportsWildcard = function buildExportsWildcard(objectIdentifier, node) {
          var leftIdentifier = this.scope.generateUidIdentifier("key");
          var valIdentifier = t.memberExpression(objectIdentifier, leftIdentifier, true);

          var left = t.variableDeclaration("var", [t.variableDeclarator(leftIdentifier)]);

          var right = objectIdentifier;

          var block = t.blockStatement([t.ifStatement(t.binaryExpression("!==", leftIdentifier, t.literal("default")), t.expressionStatement(this._buildExportCall(leftIdentifier, valIdentifier)))]);

          return this._addImportSource(t.forInStatement(left, right, block), node);
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype.buildExportsAssignment = function buildExportsAssignment(id, init, node) {
          var call = this._buildExportCall(t.literal(id.name), init, true);
          return this._addImportSource(call, node);
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype.buildExportsFromAssignment = function buildExportsFromAssignment() {
          return this.buildExportsAssignment.apply(this, arguments);
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype.remapExportAssignment = function remapExportAssignment(node, exported) {
          var assign = node;

          for (var i = 0; i < exported.length; i++) {
            assign = this._buildExportCall(t.literal(exported[i].name), assign);
          }

          return assign;
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype._buildExportCall = function _buildExportCall(id, init, isStatement) {
          var call = t.callExpression(this.exportIdentifier, [id, init]);
          if (isStatement) {
            return t.expressionStatement(call);
          } else {
            return call;
          }
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype.importSpecifier = function importSpecifier(specifier, node, nodes) {
          _amd2["default"].prototype.importSpecifier.apply(this, arguments);

          var _arr2 = this.remaps.getAll();

          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var remap = _arr2[_i2];
            nodes.push(t.variableDeclaration("var", [t.variableDeclarator(t.identifier(remap.name), remap.node)]));
          }

          this.remaps.clearAll();

          this._addImportSource(_lodashArrayLast2["default"](nodes), node);
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype._buildRunnerSetters = function _buildRunnerSetters(block, hoistDeclarators) {
          var scope = this.file.scope;

          return t.arrayExpression(_lodashCollectionMap2["default"](this.ids, function (uid, source) {
            var state = {
              hoistDeclarators: hoistDeclarators,
              source: source,
              nodes: []
            };

            scope.traverse(block, runnerSettersVisitor, state);

            return t.functionExpression(null, [uid], t.blockStatement(state.nodes));
          }));
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype._canHoist = function _canHoist(node) {
          return node._blockHoist && !this.file.dynamicImports.length;
        };

        /**
         * [Please add a description.]
         */

        SystemFormatter.prototype.transform = function transform(program) {
          _default2["default"].prototype.transform.apply(this, arguments);

          var hoistDeclarators = [];
          var moduleName = this.getModuleName();
          var moduleNameLiteral = t.literal(moduleName);

          var block = t.blockStatement(program.body);

          var setterListNode = this._buildRunnerSetters(block, hoistDeclarators);
          this._setters = setterListNode;

          var runner = util.template("system", {
            MODULE_DEPENDENCIES: t.arrayExpression(this.buildDependencyLiterals()),
            EXPORT_IDENTIFIER: this.exportIdentifier,
            MODULE_NAME: moduleNameLiteral,
            SETTERS: setterListNode,
            EXECUTE: t.functionExpression(null, [], block)
          }, true);

          var handlerBody = runner.expression.arguments[2].body.body;
          if (!moduleName) runner.expression.arguments.shift();

          var returnStatement = handlerBody.pop();

          // hoist up all variable declarations
          this.file.scope.traverse(block, hoistVariablesVisitor, {
            formatter: this,
            hoistDeclarators: hoistDeclarators
          });

          if (hoistDeclarators.length) {
            var hoistDeclar = t.variableDeclaration("var", hoistDeclarators);
            hoistDeclar._blockHoist = true;
            handlerBody.unshift(hoistDeclar);
          }

          // hoist up function declarations for circular references
          this.file.scope.traverse(block, hoistFunctionsVisitor, {
            formatter: this,
            handlerBody: handlerBody
          });

          handlerBody.push(returnStatement);

          program.body = [runner];
        };

        return SystemFormatter;
      }(_amd2["default"]);

      exports["default"] = SystemFormatter;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9zeXN0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7O0FBSUEsV0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLFVBQTdCLEVBQXlDO0FBQUUsUUFBSSxPQUFPLFVBQVAsS0FBc0IsVUFBdEIsSUFBb0MsZUFBZSxJQUFmLEVBQXFCO0FBQUUsWUFBTSxJQUFJLFNBQUosQ0FBYyxxRUFBb0UsK0RBQXBFLENBQXBCLENBQUY7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QkFBYSxXQUFiO1dBRkYsRUF0Q2dFOztBQTJDaEUsc0JBQVksSUFBWixDQUFpQixlQUFqQixFQTNDZ0U7O0FBNkNoRSxrQkFBUSxJQUFSLEdBQWUsQ0FBQyxNQUFELENBQWYsQ0E3Q2dFO1NBQTVCLENBeklROztBQXlMOUMsZUFBTyxlQUFQLENBekw4QztPQUF6QixDQTBMcEIsTUFBTSxTQUFOLENBMUxtQjs7QUE0THRCLGNBQVEsU0FBUixJQUFxQixlQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi9tb2R1bGVzL3N5c3RlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX2RlZmF1bHQgPSByZXF1aXJlKFwiLi9fZGVmYXVsdFwiKTtcblxudmFyIF9kZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHQpO1xuXG52YXIgX2FtZCA9IHJlcXVpcmUoXCIuL2FtZFwiKTtcblxudmFyIF9hbWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW1kKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uLy4uL3V0aWxcIik7XG5cbnZhciB1dGlsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWwpO1xuXG52YXIgX2xvZGFzaEFycmF5TGFzdCA9IHJlcXVpcmUoXCJsb2Rhc2gvYXJyYXkvbGFzdFwiKTtcblxudmFyIF9sb2Rhc2hBcnJheUxhc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQXJyYXlMYXN0KTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uTWFwID0gcmVxdWlyZShcImxvZGFzaC9jb2xsZWN0aW9uL21hcFwiKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25NYXApO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIGhvaXN0VmFyaWFibGVzVmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZ1bmN0aW9uOiBmdW5jdGlvbiBGdW5jdGlvbigpIHtcbiAgICAvLyBub3RoaW5nIGluc2lkZSBpcyBhY2Nlc3NpYmxlXG4gICAgdGhpcy5za2lwKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBWYXJpYWJsZURlY2xhcmF0aW9uOiBmdW5jdGlvbiBWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKG5vZGUua2luZCAhPT0gXCJ2YXJcIiAmJiAhdC5pc1Byb2dyYW0ocGFyZW50KSkge1xuICAgICAgLy8gbGV0LCBjb25zdFxuICAgICAgLy8gY2FuJ3QgYmUgYWNjZXNzZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZ25vcmUgYmxvY2sgaG9pc3RlZCBub2RlcyBhcyB0aGVzZSBjYW4gYmUgbGVmdCBpblxuICAgIGlmIChzdGF0ZS5mb3JtYXR0ZXIuX2NhbkhvaXN0KG5vZGUpKSByZXR1cm47XG5cbiAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5kZWNsYXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uc1tpXTtcbiAgICAgIHN0YXRlLmhvaXN0RGVjbGFyYXRvcnMucHVzaCh0LnZhcmlhYmxlRGVjbGFyYXRvcihkZWNsYXIuaWQpKTtcbiAgICAgIGlmIChkZWNsYXIuaW5pdCkge1xuICAgICAgICAvLyBubyBpbml0aWFsaXplciBzbyB3ZSBjYW4ganVzdCBob2lzdCBpdCBhcy1pc1xuICAgICAgICB2YXIgYXNzaWduID0gdC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIGRlY2xhci5pZCwgZGVjbGFyLmluaXQpKTtcbiAgICAgICAgbm9kZXMucHVzaChhc3NpZ24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZvciAodmFyIGkgaW4gdGVzdClcbiAgICBpZiAodC5pc0ZvcihwYXJlbnQpICYmIHBhcmVudC5sZWZ0ID09PSBub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5kZWNsYXJhdGlvbnNbMF0uaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBob2lzdEZ1bmN0aW9uc1Zpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGdW5jdGlvbjogZnVuY3Rpb24gRnVuY3Rpb24oKSB7XG4gICAgdGhpcy5za2lwKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBpZiAodC5pc0Z1bmN0aW9uRGVjbGFyYXRpb24obm9kZSkgfHwgc3RhdGUuZm9ybWF0dGVyLl9jYW5Ib2lzdChub2RlKSkge1xuICAgICAgc3RhdGUuaGFuZGxlckJvZHkucHVzaChub2RlKTtcbiAgICAgIHRoaXMuZGFuZ2Vyb3VzbHlSZW1vdmUoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHJ1bm5lclNldHRlcnNWaXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKG5vZGUuX2ltcG9ydFNvdXJjZSA9PT0gc3RhdGUuc291cmNlKSB7XG4gICAgICBpZiAodC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgICAgdmFyIF9hcnIgPSBub2RlLmRlY2xhcmF0aW9ucztcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICB2YXIgZGVjbGFyID0gX2FycltfaV07XG4gICAgICAgICAgc3RhdGUuaG9pc3REZWNsYXJhdG9ycy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdG9yKGRlY2xhci5pZCkpO1xuICAgICAgICAgIHN0YXRlLm5vZGVzLnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIGRlY2xhci5pZCwgZGVjbGFyLmluaXQpKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGFuZ2Vyb3VzbHlSZW1vdmUoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIFN5c3RlbUZvcm1hdHRlciA9IChmdW5jdGlvbiAoX0FNREZvcm1hdHRlcikge1xuICBfaW5oZXJpdHMoU3lzdGVtRm9ybWF0dGVyLCBfQU1ERm9ybWF0dGVyKTtcblxuICBmdW5jdGlvbiBTeXN0ZW1Gb3JtYXR0ZXIoZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTeXN0ZW1Gb3JtYXR0ZXIpO1xuXG4gICAgX0FNREZvcm1hdHRlci5jYWxsKHRoaXMsIGZpbGUpO1xuXG4gICAgdGhpcy5fc2V0dGVycyA9IG51bGw7XG4gICAgdGhpcy5leHBvcnRJZGVudGlmaWVyID0gZmlsZS5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJleHBvcnRcIik7XG4gICAgdGhpcy5ub0ludGVyb3BSZXF1aXJlRXhwb3J0ID0gdHJ1ZTtcbiAgICB0aGlzLm5vSW50ZXJvcFJlcXVpcmVJbXBvcnQgPSB0cnVlO1xuXG4gICAgdGhpcy5yZW1hcHMuY2xlYXJBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU3lzdGVtRm9ybWF0dGVyLnByb3RvdHlwZS5fYWRkSW1wb3J0U291cmNlID0gZnVuY3Rpb24gX2FkZEltcG9ydFNvdXJjZShub2RlLCBleHBvcnROb2RlKSB7XG4gICAgaWYgKG5vZGUpIG5vZGUuX2ltcG9ydFNvdXJjZSA9IGV4cG9ydE5vZGUuc291cmNlICYmIGV4cG9ydE5vZGUuc291cmNlLnZhbHVlO1xuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU3lzdGVtRm9ybWF0dGVyLnByb3RvdHlwZS5idWlsZEV4cG9ydHNXaWxkY2FyZCA9IGZ1bmN0aW9uIGJ1aWxkRXhwb3J0c1dpbGRjYXJkKG9iamVjdElkZW50aWZpZXIsIG5vZGUpIHtcbiAgICB2YXIgbGVmdElkZW50aWZpZXIgPSB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcImtleVwiKTtcbiAgICB2YXIgdmFsSWRlbnRpZmllciA9IHQubWVtYmVyRXhwcmVzc2lvbihvYmplY3RJZGVudGlmaWVyLCBsZWZ0SWRlbnRpZmllciwgdHJ1ZSk7XG5cbiAgICB2YXIgbGVmdCA9IHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IobGVmdElkZW50aWZpZXIpXSk7XG5cbiAgICB2YXIgcmlnaHQgPSBvYmplY3RJZGVudGlmaWVyO1xuXG4gICAgdmFyIGJsb2NrID0gdC5ibG9ja1N0YXRlbWVudChbdC5pZlN0YXRlbWVudCh0LmJpbmFyeUV4cHJlc3Npb24oXCIhPT1cIiwgbGVmdElkZW50aWZpZXIsIHQubGl0ZXJhbChcImRlZmF1bHRcIikpLCB0LmV4cHJlc3Npb25TdGF0ZW1lbnQodGhpcy5fYnVpbGRFeHBvcnRDYWxsKGxlZnRJZGVudGlmaWVyLCB2YWxJZGVudGlmaWVyKSkpXSk7XG5cbiAgICByZXR1cm4gdGhpcy5fYWRkSW1wb3J0U291cmNlKHQuZm9ySW5TdGF0ZW1lbnQobGVmdCwgcmlnaHQsIGJsb2NrKSwgbm9kZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTeXN0ZW1Gb3JtYXR0ZXIucHJvdG90eXBlLmJ1aWxkRXhwb3J0c0Fzc2lnbm1lbnQgPSBmdW5jdGlvbiBidWlsZEV4cG9ydHNBc3NpZ25tZW50KGlkLCBpbml0LCBub2RlKSB7XG4gICAgdmFyIGNhbGwgPSB0aGlzLl9idWlsZEV4cG9ydENhbGwodC5saXRlcmFsKGlkLm5hbWUpLCBpbml0LCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkSW1wb3J0U291cmNlKGNhbGwsIG5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU3lzdGVtRm9ybWF0dGVyLnByb3RvdHlwZS5idWlsZEV4cG9ydHNGcm9tQXNzaWdubWVudCA9IGZ1bmN0aW9uIGJ1aWxkRXhwb3J0c0Zyb21Bc3NpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkRXhwb3J0c0Fzc2lnbm1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFN5c3RlbUZvcm1hdHRlci5wcm90b3R5cGUucmVtYXBFeHBvcnRBc3NpZ25tZW50ID0gZnVuY3Rpb24gcmVtYXBFeHBvcnRBc3NpZ25tZW50KG5vZGUsIGV4cG9ydGVkKSB7XG4gICAgdmFyIGFzc2lnbiA9IG5vZGU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cG9ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhc3NpZ24gPSB0aGlzLl9idWlsZEV4cG9ydENhbGwodC5saXRlcmFsKGV4cG9ydGVkW2ldLm5hbWUpLCBhc3NpZ24pO1xuICAgIH1cblxuICAgIHJldHVybiBhc3NpZ247XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTeXN0ZW1Gb3JtYXR0ZXIucHJvdG90eXBlLl9idWlsZEV4cG9ydENhbGwgPSBmdW5jdGlvbiBfYnVpbGRFeHBvcnRDYWxsKGlkLCBpbml0LCBpc1N0YXRlbWVudCkge1xuICAgIHZhciBjYWxsID0gdC5jYWxsRXhwcmVzc2lvbih0aGlzLmV4cG9ydElkZW50aWZpZXIsIFtpZCwgaW5pdF0pO1xuICAgIGlmIChpc1N0YXRlbWVudCkge1xuICAgICAgcmV0dXJuIHQuZXhwcmVzc2lvblN0YXRlbWVudChjYWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNhbGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU3lzdGVtRm9ybWF0dGVyLnByb3RvdHlwZS5pbXBvcnRTcGVjaWZpZXIgPSBmdW5jdGlvbiBpbXBvcnRTcGVjaWZpZXIoc3BlY2lmaWVyLCBub2RlLCBub2Rlcykge1xuICAgIF9hbWQyW1wiZGVmYXVsdFwiXS5wcm90b3R5cGUuaW1wb3J0U3BlY2lmaWVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgX2FycjIgPSB0aGlzLnJlbWFwcy5nZXRBbGwoKTtcblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciByZW1hcCA9IF9hcnIyW19pMl07XG4gICAgICBub2Rlcy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodC5pZGVudGlmaWVyKHJlbWFwLm5hbWUpLCByZW1hcC5ub2RlKV0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbWFwcy5jbGVhckFsbCgpO1xuXG4gICAgdGhpcy5fYWRkSW1wb3J0U291cmNlKF9sb2Rhc2hBcnJheUxhc3QyW1wiZGVmYXVsdFwiXShub2RlcyksIG5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU3lzdGVtRm9ybWF0dGVyLnByb3RvdHlwZS5fYnVpbGRSdW5uZXJTZXR0ZXJzID0gZnVuY3Rpb24gX2J1aWxkUnVubmVyU2V0dGVycyhibG9jaywgaG9pc3REZWNsYXJhdG9ycykge1xuICAgIHZhciBzY29wZSA9IHRoaXMuZmlsZS5zY29wZTtcblxuICAgIHJldHVybiB0LmFycmF5RXhwcmVzc2lvbihfbG9kYXNoQ29sbGVjdGlvbk1hcDJbXCJkZWZhdWx0XCJdKHRoaXMuaWRzLCBmdW5jdGlvbiAodWlkLCBzb3VyY2UpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgaG9pc3REZWNsYXJhdG9yczogaG9pc3REZWNsYXJhdG9ycyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIG5vZGVzOiBbXVxuICAgICAgfTtcblxuICAgICAgc2NvcGUudHJhdmVyc2UoYmxvY2ssIHJ1bm5lclNldHRlcnNWaXNpdG9yLCBzdGF0ZSk7XG5cbiAgICAgIHJldHVybiB0LmZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbdWlkXSwgdC5ibG9ja1N0YXRlbWVudChzdGF0ZS5ub2RlcykpO1xuICAgIH0pKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFN5c3RlbUZvcm1hdHRlci5wcm90b3R5cGUuX2NhbkhvaXN0ID0gZnVuY3Rpb24gX2NhbkhvaXN0KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5fYmxvY2tIb2lzdCAmJiAhdGhpcy5maWxlLmR5bmFtaWNJbXBvcnRzLmxlbmd0aDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFN5c3RlbUZvcm1hdHRlci5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHByb2dyYW0pIHtcbiAgICBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS50cmFuc2Zvcm0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBob2lzdERlY2xhcmF0b3JzID0gW107XG4gICAgdmFyIG1vZHVsZU5hbWUgPSB0aGlzLmdldE1vZHVsZU5hbWUoKTtcbiAgICB2YXIgbW9kdWxlTmFtZUxpdGVyYWwgPSB0LmxpdGVyYWwobW9kdWxlTmFtZSk7XG5cbiAgICB2YXIgYmxvY2sgPSB0LmJsb2NrU3RhdGVtZW50KHByb2dyYW0uYm9keSk7XG5cbiAgICB2YXIgc2V0dGVyTGlzdE5vZGUgPSB0aGlzLl9idWlsZFJ1bm5lclNldHRlcnMoYmxvY2ssIGhvaXN0RGVjbGFyYXRvcnMpO1xuICAgIHRoaXMuX3NldHRlcnMgPSBzZXR0ZXJMaXN0Tm9kZTtcblxuICAgIHZhciBydW5uZXIgPSB1dGlsLnRlbXBsYXRlKFwic3lzdGVtXCIsIHtcbiAgICAgIE1PRFVMRV9ERVBFTkRFTkNJRVM6IHQuYXJyYXlFeHByZXNzaW9uKHRoaXMuYnVpbGREZXBlbmRlbmN5TGl0ZXJhbHMoKSksXG4gICAgICBFWFBPUlRfSURFTlRJRklFUjogdGhpcy5leHBvcnRJZGVudGlmaWVyLFxuICAgICAgTU9EVUxFX05BTUU6IG1vZHVsZU5hbWVMaXRlcmFsLFxuICAgICAgU0VUVEVSUzogc2V0dGVyTGlzdE5vZGUsXG4gICAgICBFWEVDVVRFOiB0LmZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbXSwgYmxvY2spXG4gICAgfSwgdHJ1ZSk7XG5cbiAgICB2YXIgaGFuZGxlckJvZHkgPSBydW5uZXIuZXhwcmVzc2lvbi5hcmd1bWVudHNbMl0uYm9keS5ib2R5O1xuICAgIGlmICghbW9kdWxlTmFtZSkgcnVubmVyLmV4cHJlc3Npb24uYXJndW1lbnRzLnNoaWZ0KCk7XG5cbiAgICB2YXIgcmV0dXJuU3RhdGVtZW50ID0gaGFuZGxlckJvZHkucG9wKCk7XG5cbiAgICAvLyBob2lzdCB1cCBhbGwgdmFyaWFibGUgZGVjbGFyYXRpb25zXG4gICAgdGhpcy5maWxlLnNjb3BlLnRyYXZlcnNlKGJsb2NrLCBob2lzdFZhcmlhYmxlc1Zpc2l0b3IsIHtcbiAgICAgIGZvcm1hdHRlcjogdGhpcyxcbiAgICAgIGhvaXN0RGVjbGFyYXRvcnM6IGhvaXN0RGVjbGFyYXRvcnNcbiAgICB9KTtcblxuICAgIGlmIChob2lzdERlY2xhcmF0b3JzLmxlbmd0aCkge1xuICAgICAgdmFyIGhvaXN0RGVjbGFyID0gdC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIGhvaXN0RGVjbGFyYXRvcnMpO1xuICAgICAgaG9pc3REZWNsYXIuX2Jsb2NrSG9pc3QgPSB0cnVlO1xuICAgICAgaGFuZGxlckJvZHkudW5zaGlmdChob2lzdERlY2xhcik7XG4gICAgfVxuXG4gICAgLy8gaG9pc3QgdXAgZnVuY3Rpb24gZGVjbGFyYXRpb25zIGZvciBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgdGhpcy5maWxlLnNjb3BlLnRyYXZlcnNlKGJsb2NrLCBob2lzdEZ1bmN0aW9uc1Zpc2l0b3IsIHtcbiAgICAgIGZvcm1hdHRlcjogdGhpcyxcbiAgICAgIGhhbmRsZXJCb2R5OiBoYW5kbGVyQm9keVxuICAgIH0pO1xuXG4gICAgaGFuZGxlckJvZHkucHVzaChyZXR1cm5TdGF0ZW1lbnQpO1xuXG4gICAgcHJvZ3JhbS5ib2R5ID0gW3J1bm5lcl07XG4gIH07XG5cbiAgcmV0dXJuIFN5c3RlbUZvcm1hdHRlcjtcbn0pKF9hbWQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3lzdGVtRm9ybWF0dGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
