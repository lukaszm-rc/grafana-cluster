/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _createClass, _lodashCollectionIncludes, _lodashCollectionIncludes2, _repeating, _repeating2, _index, _index2, _lodashObjectDefaults, _lodashObjectDefaults2, _messages, messages, _binding, _binding2, _globals, _globals2, _lodashArrayFlatten, _lodashArrayFlatten2, _lodashObjectExtend, _lodashObjectExtend2, _helpersObject, _helpersObject2, _types, t, collectorVisitor, renameVisitor, Scope;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      // istanbul ignore next

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      _lodashCollectionIncludes = require("lodash/collection/includes");
      _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
      _repeating = require("repeating");
      _repeating2 = _interopRequireDefault(_repeating);
      _index = require("../index");
      _index2 = _interopRequireDefault(_index);
      _lodashObjectDefaults = require("lodash/object/defaults");
      _lodashObjectDefaults2 = _interopRequireDefault(_lodashObjectDefaults);
      _messages = require("../../messages");
      messages = _interopRequireWildcard(_messages);
      _binding = require("./binding");
      _binding2 = _interopRequireDefault(_binding);
      _globals = require("globals");
      _globals2 = _interopRequireDefault(_globals);
      _lodashArrayFlatten = require("lodash/array/flatten");
      _lodashArrayFlatten2 = _interopRequireDefault(_lodashArrayFlatten);
      _lodashObjectExtend = require("lodash/object/extend");
      _lodashObjectExtend2 = _interopRequireDefault(_lodashObjectExtend);
      _helpersObject = require("../../helpers/object");
      _helpersObject2 = _interopRequireDefault(_helpersObject);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      collectorVisitor = {
        For: function For() {
          var _arr = t.FOR_INIT_KEYS;

          for (var _i = 0; _i < _arr.length; _i++) {
            var key = _arr[_i];
            var declar = this.get(key);
            if (declar.isVar()) this.scope.getFunctionParent().registerBinding("var", declar);
          }
        },

        Declaration: function Declaration() {
          // delegate block scope handling to the `blockVariableVisitor`
          if (this.isBlockScoped()) return;

          // this will be hit again once we traverse into it after this iteration
          if (this.isExportDeclaration() && this.get("declaration").isDeclaration()) return;

          // we've ran into a declaration!
          this.scope.getFunctionParent().registerDeclaration(this);
        },

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          state.references.push(this);
        },

        ForXStatement: function ForXStatement(node, parent, scope, state) {
          var left = this.get("left");
          if (left.isPattern() || left.isIdentifier()) {
            state.constantViolations.push(left);
          }
        },

        ExportDeclaration: {
          exit: function exit(node, parent, scope) {
            var declar = node.declaration;
            if (t.isClassDeclaration(declar) || t.isFunctionDeclaration(declar)) {
              var binding = scope.getBinding(declar.id.name);
              if (binding) binding.reference();
            } else if (t.isVariableDeclaration(declar)) {
              var _arr2 = declar.declarations;

              for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
                var decl = _arr2[_i2];
                var ids = t.getBindingIdentifiers(decl);
                for (var _name in ids) {
                  var binding = scope.getBinding(_name);
                  if (binding) binding.reference();
                }
              }
            }
          }
        },

        LabeledStatement: function LabeledStatement() {
          this.scope.getProgramParent().addGlobal(this.node);
          this.scope.getBlockParent().registerDeclaration(this);
        },

        AssignmentExpression: function AssignmentExpression(node, parent, scope, state) {
          state.assignments.push(this);
        },

        UpdateExpression: function UpdateExpression(node, parent, scope, state) {
          state.constantViolations.push(this.get("argument"));
        },

        UnaryExpression: function UnaryExpression(node, parent, scope, state) {
          if (this.node.operator === "delete") {
            state.constantViolations.push(this.get("argument"));
          }
        },

        BlockScoped: function BlockScoped() {
          var scope = this.scope;
          if (scope.path === this) scope = scope.parent;
          scope.getBlockParent().registerDeclaration(this);
        },

        ClassDeclaration: function ClassDeclaration() {
          var name = this.node.id.name;
          this.scope.bindings[name] = this.scope.getBinding(name);
        },

        Block: function Block() {
          var paths = this.get("body");
          var _arr3 = paths;
          for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
            var bodyPath = _arr3[_i3];
            if (bodyPath.isFunctionDeclaration()) {
              this.scope.getBlockParent().registerDeclaration(bodyPath);
            }
          }
        }
      };
      renameVisitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          if (node.name === state.oldName) {
            node.name = state.newName;
          }
        },

        /**
         * [Please add a description.]
         */

        Scope: function Scope(node, parent, scope, state) {
          if (!scope.bindingIdentifierEquals(state.oldName, state.binding)) {
            this.skip();
          }
        },

        "AssignmentExpression|Declaration": function AssignmentExpressionDeclaration(node, parent, scope, state) {
          var ids = this.getBindingIdentifiers();

          for (var name in ids) {
            if (name === state.oldName) ids[name].name = state.newName;
          }
        }
      };

      Scope = function () {

        /**
         * This searches the current "scope" and collects all references/bindings
         * within.
         */

        function Scope(path, parent) {
          _classCallCheck(this, Scope);

          if (parent && parent.block === path.node) {
            return parent;
          }

          var cached = path.getData("scope");
          if (cached && cached.parent === parent && cached.block === path.node) {
            return cached;
          } else {
            path.setData("scope", this);
          }

          this.parent = parent;
          this.hub = path.hub;

          this.parentBlock = path.parent;
          this.block = path.node;
          this.path = path;
        }

        /**
         * Globals.
         */

        /**
         * Traverse node with current scope and path.
         */

        Scope.prototype.traverse = function traverse(node, opts, state) {
          _index2["default"](node, opts, this, state, this.path);
        };

        /**
         * Generate a unique identifier and add it to the current scope.
         */

        Scope.prototype.generateDeclaredUidIdentifier = function generateDeclaredUidIdentifier() {
          var name = arguments.length <= 0 || arguments[0] === undefined ? "temp" : arguments[0];

          var id = this.generateUidIdentifier(name);
          this.push({ id: id });
          return id;
        };

        /**
         * Generate a unique identifier.
         */

        Scope.prototype.generateUidIdentifier = function generateUidIdentifier(name) {
          return t.identifier(this.generateUid(name));
        };

        /**
         * Generate a unique `_id1` binding.
         */

        Scope.prototype.generateUid = function generateUid(name) {
          name = t.toIdentifier(name).replace(/^_+/, "");

          var uid;
          var i = 0;
          do {
            uid = this._generateUid(name, i);
            i++;
          } while (this.hasBinding(uid) || this.hasGlobal(uid) || this.hasReference(uid));

          var program = this.getProgramParent();
          program.references[uid] = true;
          program.uids[uid] = true;

          return uid;
        };

        /**
         * Generate an `_id1`.
         */

        Scope.prototype._generateUid = function _generateUid(name, i) {
          var id = name;
          if (i > 1) id += i;
          return "_" + id;
        };

        /**
         * Generate a unique identifier based on a node.
         */

        Scope.prototype.generateUidIdentifierBasedOnNode = function generateUidIdentifierBasedOnNode(parent, defaultName) {
          var node = parent;

          if (t.isAssignmentExpression(parent)) {
            node = parent.left;
          } else if (t.isVariableDeclarator(parent)) {
            node = parent.id;
          } else if (t.isProperty(node)) {
            node = node.key;
          }

          var parts = [];

          var add = function add(node) {
            if (t.isModuleDeclaration(node)) {
              if (node.source) {
                add(node.source);
              } else if (node.specifiers && node.specifiers.length) {
                var _arr4 = node.specifiers;

                for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
                  var specifier = _arr4[_i4];
                  add(specifier);
                }
              } else if (node.declaration) {
                add(node.declaration);
              }
            } else if (t.isModuleSpecifier(node)) {
              add(node.local);
            } else if (t.isMemberExpression(node)) {
              add(node.object);
              add(node.property);
            } else if (t.isIdentifier(node)) {
              parts.push(node.name);
            } else if (t.isLiteral(node)) {
              parts.push(node.value);
            } else if (t.isCallExpression(node)) {
              add(node.callee);
            } else if (t.isObjectExpression(node) || t.isObjectPattern(node)) {
              var _arr5 = node.properties;

              for (var _i5 = 0; _i5 < _arr5.length; _i5++) {
                var prop = _arr5[_i5];
                add(prop.key || prop.argument);
              }
            }
          };

          add(node);

          var id = parts.join("$");
          id = id.replace(/^_/, "") || defaultName || "ref";

          return this.generateUidIdentifier(id);
        };

        /**
         * Determine whether evaluating the specific input `node` is a consequenceless reference. ie.
         * evaluating it wont result in potentially arbitrary code from being ran. The following are
         * whitelisted and determined not to cause side effects:
         *
         *  - `this` expressions
         *  - `super` expressions
         *  - Bound identifiers
         */

        Scope.prototype.isStatic = function isStatic(node) {
          if (t.isThisExpression(node) || t.isSuper(node)) {
            return true;
          }

          if (t.isIdentifier(node)) {
            var binding = this.getBinding(node.name);
            if (binding) {
              return binding.constant;
            } else {
              return this.hasBinding(node.name);
            }
          }

          return false;
        };

        /**
         * Possibly generate a memoised identifier if it is not static and has consequences.
         */

        Scope.prototype.maybeGenerateMemoised = function maybeGenerateMemoised(node, dontPush) {
          if (this.isStatic(node)) {
            return null;
          } else {
            var id = this.generateUidIdentifierBasedOnNode(node);
            if (!dontPush) this.push({ id: id });
            return id;
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.checkBlockScopedCollisions = function checkBlockScopedCollisions(local, kind, name, id) {
          // ignore parameters
          if (kind === "param") return;

          // ignore hoisted functions if there's also a local let
          if (kind === "hoisted" && local.kind === "let") return;

          var duplicate = false;

          // don't allow duplicate bindings to exist alongside
          if (!duplicate) duplicate = kind === "let" || local.kind === "let" || local.kind === "const" || local.kind === "module";

          // don't allow a local of param with a kind of let
          if (!duplicate) duplicate = local.kind === "param" && (kind === "let" || kind === "const");

          if (duplicate) {
            throw this.hub.file.errorWithNode(id, messages.get("scopeDuplicateDeclaration", name), TypeError);
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.rename = function rename(oldName, newName, block) {
          newName = newName || this.generateUidIdentifier(oldName).name;

          var info = this.getBinding(oldName);
          if (!info) return;

          var state = {
            newName: newName,
            oldName: oldName,
            binding: info.identifier,
            info: info
          };

          var scope = info.scope;
          scope.traverse(block || scope.block, renameVisitor, state);

          if (!block) {
            scope.removeOwnBinding(oldName);
            scope.bindings[newName] = info;
            state.binding.name = newName;
          }

          var file = this.hub.file;
          if (file) {
            this._renameFromMap(file.moduleFormatter.localImports, oldName, newName, state.binding);
            //this._renameFromMap(file.moduleFormatter.localExports, oldName, newName);
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype._renameFromMap = function _renameFromMap(map, oldName, newName, value) {
          if (map[oldName]) {
            map[newName] = value;
            map[oldName] = null;
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.dump = function dump() {
          var sep = _repeating2["default"]("-", 60);
          console.log(sep);
          var scope = this;
          do {
            console.log("#", scope.block.type);
            for (var name in scope.bindings) {
              var binding = scope.bindings[name];
              console.log(" -", name, {
                constant: binding.constant,
                references: binding.references,
                kind: binding.kind
              });
            }
          } while (scope = scope.parent);
          console.log(sep);
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.toArray = function toArray(node, i) {
          var file = this.hub.file;

          if (t.isIdentifier(node)) {
            var binding = this.getBinding(node.name);
            if (binding && binding.constant && binding.path.isGenericType("Array")) return node;
          }

          if (t.isArrayExpression(node)) {
            return node;
          }

          if (t.isIdentifier(node, { name: "arguments" })) {
            return t.callExpression(t.memberExpression(file.addHelper("slice"), t.identifier("call")), [node]);
          }

          var helperName = "to-array";
          var args = [node];
          if (i === true) {
            helperName = "to-consumable-array";
          } else if (i) {
            args.push(t.literal(i));
            helperName = "sliced-to-array";
            if (this.hub.file.isLoose("es6.forOf")) helperName += "-loose";
          }
          return t.callExpression(file.addHelper(helperName), args);
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.registerDeclaration = function registerDeclaration(path) {
          if (path.isLabeledStatement()) {
            this.registerBinding("label", path);
          } else if (path.isFunctionDeclaration()) {
            this.registerBinding("hoisted", path.get("id"), path);
          } else if (path.isVariableDeclaration()) {
            var declarations = path.get("declarations");
            var _arr6 = declarations;
            for (var _i6 = 0; _i6 < _arr6.length; _i6++) {
              var declar = _arr6[_i6];
              this.registerBinding(path.node.kind, declar);
            }
          } else if (path.isClassDeclaration()) {
            this.registerBinding("let", path);
          } else if (path.isImportDeclaration()) {
            var specifiers = path.get("specifiers");
            var _arr7 = specifiers;
            for (var _i7 = 0; _i7 < _arr7.length; _i7++) {
              var specifier = _arr7[_i7];
              this.registerBinding("module", specifier);
            }
          } else if (path.isExportDeclaration()) {
            var declar = path.get("declaration");
            if (declar.isClassDeclaration() || declar.isFunctionDeclaration() || declar.isVariableDeclaration()) {
              this.registerDeclaration(declar);
            }
          } else {
            this.registerBinding("unknown", path);
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.registerConstantViolation = function registerConstantViolation(path) {
          var ids = path.getBindingIdentifiers();
          for (var _name2 in ids) {
            var binding = this.getBinding(_name2);
            if (binding) binding.reassign(path);
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.registerBinding = function registerBinding(kind, path) {
          var bindingPath = arguments.length <= 2 || arguments[2] === undefined ? path : arguments[2];
          return function () {
            if (!kind) throw new ReferenceError("no `kind`");

            if (path.isVariableDeclaration()) {
              var declarators = path.get("declarations");
              var _arr8 = declarators;
              for (var _i8 = 0; _i8 < _arr8.length; _i8++) {
                var declar = _arr8[_i8];
                this.registerBinding(kind, declar);
              }
              return;
            }

            var parent = this.getProgramParent();
            var ids = path.getBindingIdentifiers(true);

            for (var name in ids) {
              var _arr9 = ids[name];

              for (var _i9 = 0; _i9 < _arr9.length; _i9++) {
                var id = _arr9[_i9];
                var local = this.getOwnBinding(name);
                if (local) {
                  // same identifier so continue safely as we're likely trying to register it
                  // multiple times
                  if (local.identifier === id) continue;

                  this.checkBlockScopedCollisions(local, kind, name, id);
                }

                parent.references[name] = true;

                this.bindings[name] = new _binding2["default"]({
                  identifier: id,
                  existing: local,
                  scope: this,
                  path: bindingPath,
                  kind: kind
                });
              }
            }
          }.apply(this, arguments);
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.addGlobal = function addGlobal(node) {
          this.globals[node.name] = node;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.hasUid = function hasUid(name) {
          var scope = this;

          do {
            if (scope.uids[name]) return true;
          } while (scope = scope.parent);

          return false;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.hasGlobal = function hasGlobal(name) {
          var scope = this;

          do {
            if (scope.globals[name]) return true;
          } while (scope = scope.parent);

          return false;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.hasReference = function hasReference(name) {
          var scope = this;

          do {
            if (scope.references[name]) return true;
          } while (scope = scope.parent);

          return false;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.isPure = function isPure(node, constantsOnly) {
          if (t.isIdentifier(node)) {
            var binding = this.getBinding(node.name);
            if (!binding) return false;
            if (constantsOnly) return binding.constant;
            return true;
          } else if (t.isClass(node)) {
            return !node.superClass || this.isPure(node.superClass, constantsOnly);
          } else if (t.isBinary(node)) {
            return this.isPure(node.left, constantsOnly) && this.isPure(node.right, constantsOnly);
          } else if (t.isArrayExpression(node)) {
            var _arr10 = node.elements;

            for (var _i10 = 0; _i10 < _arr10.length; _i10++) {
              var elem = _arr10[_i10];
              if (!this.isPure(elem, constantsOnly)) return false;
            }
            return true;
          } else if (t.isObjectExpression(node)) {
            var _arr11 = node.properties;

            for (var _i11 = 0; _i11 < _arr11.length; _i11++) {
              var prop = _arr11[_i11];
              if (!this.isPure(prop, constantsOnly)) return false;
            }
            return true;
          } else if (t.isProperty(node)) {
            if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
            return this.isPure(node.value, constantsOnly);
          } else {
            return t.isPure(node);
          }
        };

        /**
         * Set some arbitrary data on the current scope.
         */

        Scope.prototype.setData = function setData(key, val) {
          return this.data[key] = val;
        };

        /**
         * Recursively walk up scope tree looking for the data `key`.
         */

        Scope.prototype.getData = function getData(key) {
          var scope = this;
          do {
            var data = scope.data[key];
            if (data != null) return data;
          } while (scope = scope.parent);
        };

        /**
         * Recursively walk up scope tree looking for the data `key` and if it exists,
         * remove it.
         */

        Scope.prototype.removeData = function removeData(key) {
          var scope = this;
          do {
            var data = scope.data[key];
            if (data != null) scope.data[key] = null;
          } while (scope = scope.parent);
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.init = function init() {
          if (!this.references) this.crawl();
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.crawl = function crawl() {
          var path = this.path;

          //

          var info = this.block._scopeInfo;
          if (info) return _lodashObjectExtend2["default"](this, info);

          info = this.block._scopeInfo = {
            references: _helpersObject2["default"](),
            bindings: _helpersObject2["default"](),
            globals: _helpersObject2["default"](),
            uids: _helpersObject2["default"](),
            data: _helpersObject2["default"]()
          };

          _lodashObjectExtend2["default"](this, info);

          // ForStatement - left, init

          if (path.isLoop()) {
            var _arr12 = t.FOR_INIT_KEYS;

            for (var _i12 = 0; _i12 < _arr12.length; _i12++) {
              var key = _arr12[_i12];
              var node = path.get(key);
              if (node.isBlockScoped()) this.registerBinding(node.node.kind, node);
            }
          }

          // FunctionExpression - id

          if (path.isFunctionExpression() && path.has("id")) {
            this.registerBinding("local", path.get("id"), path);
          }

          // Class

          if (path.isClassExpression() && path.has("id")) {
            this.registerBinding("local", path);
          }

          // Function - params, rest

          if (path.isFunction()) {
            var params = path.get("params");
            var _arr13 = params;
            for (var _i13 = 0; _i13 < _arr13.length; _i13++) {
              var param = _arr13[_i13];
              this.registerBinding("param", param);
            }
          }

          // CatchClause - param

          if (path.isCatchClause()) {
            this.registerBinding("let", path);
          }

          // ComprehensionExpression - blocks

          if (path.isComprehensionExpression()) {
            this.registerBinding("let", path);
          }

          // Program

          var parent = this.getProgramParent();
          if (parent.crawling) return;

          var state = {
            references: [],
            constantViolations: [],
            assignments: []
          };

          this.crawling = true;
          path.traverse(collectorVisitor, state);
          this.crawling = false;

          // register assignments
          for (var _iterator = state.assignments, _isArray = Array.isArray(_iterator), _i14 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i14 >= _iterator.length) break;
              _ref = _iterator[_i14++];
            } else {
              _i14 = _iterator.next();
              if (_i14.done) break;
              _ref = _i14.value;
            }

            var _path = _ref;

            // register undeclared bindings as globals
            var ids = _path.getBindingIdentifiers();
            var programParent = undefined;
            for (var _name3 in ids) {
              if (_path.scope.getBinding(_name3)) continue;

              programParent = programParent || _path.scope.getProgramParent();
              programParent.addGlobal(ids[_name3]);
            }

            // register as constant violation
            _path.scope.registerConstantViolation(_path);
          }

          // register references
          for (var _iterator2 = state.references, _isArray2 = Array.isArray(_iterator2), _i15 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i15 >= _iterator2.length) break;
              _ref2 = _iterator2[_i15++];
            } else {
              _i15 = _iterator2.next();
              if (_i15.done) break;
              _ref2 = _i15.value;
            }

            var ref = _ref2;

            var binding = ref.scope.getBinding(ref.node.name);
            if (binding) {
              binding.reference(ref);
            } else {
              ref.scope.getProgramParent().addGlobal(ref.node);
            }
          }

          // register constant violations
          for (var _iterator3 = state.constantViolations, _isArray3 = Array.isArray(_iterator3), _i16 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i16 >= _iterator3.length) break;
              _ref3 = _iterator3[_i16++];
            } else {
              _i16 = _iterator3.next();
              if (_i16.done) break;
              _ref3 = _i16.value;
            }

            var _path2 = _ref3;

            _path2.scope.registerConstantViolation(_path2);
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.push = function push(opts) {
          var path = this.path;

          if (path.isSwitchStatement()) {
            path = this.getFunctionParent().path;
          }

          if (path.isLoop() || path.isCatchClause() || path.isFunction()) {
            t.ensureBlock(path.node);
            path = path.get("body");
          }

          if (!path.isBlockStatement() && !path.isProgram()) {
            path = this.getBlockParent().path;
          }

          var unique = opts.unique;
          var kind = opts.kind || "var";
          var blockHoist = opts._blockHoist == null ? 2 : opts._blockHoist;

          var dataKey = "declaration:" + kind + ":" + blockHoist;
          var declarPath = !unique && path.getData(dataKey);

          if (!declarPath) {
            var declar = t.variableDeclaration(kind, []);
            declar._generated = true;
            declar._blockHoist = blockHoist;

            this.hub.file.attachAuxiliaryComment(declar);

            var _path$unshiftContainer = path.unshiftContainer("body", [declar]);

            declarPath = _path$unshiftContainer[0];

            if (!unique) path.setData(dataKey, declarPath);
          }

          var declarator = t.variableDeclarator(opts.id, opts.init);
          declarPath.node.declarations.push(declarator);
          this.registerBinding(kind, declarPath.get("declarations").pop());
        };

        /**
         * Walk up to the top of the scope tree and get the `Program`.
         */

        Scope.prototype.getProgramParent = function getProgramParent() {
          var scope = this;
          do {
            if (scope.path.isProgram()) {
              return scope;
            }
          } while (scope = scope.parent);
          throw new Error("We couldn't find a Function or Program...");
        };

        /**
         * Walk up the scope tree until we hit either a Function or reach the
         * very top and hit Program.
         */

        Scope.prototype.getFunctionParent = function getFunctionParent() {
          var scope = this;
          do {
            if (scope.path.isFunctionParent()) {
              return scope;
            }
          } while (scope = scope.parent);
          throw new Error("We couldn't find a Function or Program...");
        };

        /**
         * Walk up the scope tree until we hit either a BlockStatement/Loop/Program/Function/Switch or reach the
         * very top and hit Program.
         */

        Scope.prototype.getBlockParent = function getBlockParent() {
          var scope = this;
          do {
            if (scope.path.isBlockParent()) {
              return scope;
            }
          } while (scope = scope.parent);
          throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
        };

        /**
         * Walks the scope tree and gathers **all** bindings.
         */

        Scope.prototype.getAllBindings = function getAllBindings() {
          var ids = _helpersObject2["default"]();

          var scope = this;
          do {
            _lodashObjectDefaults2["default"](ids, scope.bindings);
            scope = scope.parent;
          } while (scope);

          return ids;
        };

        /**
         * Walks the scope tree and gathers all declarations of `kind`.
         */

        Scope.prototype.getAllBindingsOfKind = function getAllBindingsOfKind() {
          var ids = _helpersObject2["default"]();

          var _arr14 = arguments;
          for (var _i17 = 0; _i17 < _arr14.length; _i17++) {
            var kind = _arr14[_i17];
            var scope = this;
            do {
              for (var name in scope.bindings) {
                var binding = scope.bindings[name];
                if (binding.kind === kind) ids[name] = binding;
              }
              scope = scope.parent;
            } while (scope);
          }

          return ids;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.bindingIdentifierEquals = function bindingIdentifierEquals(name, node) {
          return this.getBindingIdentifier(name) === node;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.getBinding = function getBinding(name) {
          var scope = this;

          do {
            var binding = scope.getOwnBinding(name);
            if (binding) return binding;
          } while (scope = scope.parent);
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.getOwnBinding = function getOwnBinding(name) {
          return this.bindings[name];
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.getBindingIdentifier = function getBindingIdentifier(name) {
          var info = this.getBinding(name);
          return info && info.identifier;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.getOwnBindingIdentifier = function getOwnBindingIdentifier(name) {
          var binding = this.bindings[name];
          return binding && binding.identifier;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.hasOwnBinding = function hasOwnBinding(name) {
          return !!this.getOwnBinding(name);
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.hasBinding = function hasBinding(name, noGlobals) {
          if (!name) return false;
          if (this.hasOwnBinding(name)) return true;
          if (this.parentHasBinding(name, noGlobals)) return true;
          if (this.hasUid(name)) return true;
          if (!noGlobals && _lodashCollectionIncludes2["default"](Scope.globals, name)) return true;
          if (!noGlobals && _lodashCollectionIncludes2["default"](Scope.contextVariables, name)) return true;
          return false;
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.parentHasBinding = function parentHasBinding(name, noGlobals) {
          return this.parent && this.parent.hasBinding(name, noGlobals);
        };

        /**
         * Move a binding of `name` to another `scope`.
         */

        Scope.prototype.moveBindingTo = function moveBindingTo(name, scope) {
          var info = this.getBinding(name);
          if (info) {
            info.scope.removeOwnBinding(name);
            info.scope = scope;
            scope.bindings[name] = info;
          }
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.removeOwnBinding = function removeOwnBinding(name) {
          delete this.bindings[name];
        };

        /**
         * [Please add a description.]
         */

        Scope.prototype.removeBinding = function removeBinding(name) {
          // clear literal binding
          var info = this.getBinding(name);
          if (info) {
            info.scope.removeOwnBinding(name);
          }

          // clear uids with this name - https://github.com/babel/babel/issues/2101
          var scope = this;
          do {
            if (scope.uids[name]) {
              scope.uids[name] = false;
            }
          } while (scope = scope.parent);
        };

        _createClass(Scope, null, [{
          key: "globals",
          value: _lodashArrayFlatten2["default"]([_globals2["default"].builtin, _globals2["default"].browser, _globals2["default"].node].map(Object.keys)),

          /**
           * Variables available in current context.
           */

          enumerable: true
        }, {
          key: "contextVariables",
          value: ["arguments", "undefined", "Infinity", "NaN"],
          enumerable: true
        }]);

        return Scope;
      }();

      exports["default"] = Scope;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3Njb3BlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBU0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7QUFmQSxjQUFRLFVBQVIsR0FBcUIsSUFBckI7OztBQUdJLHFCQUFlLFlBQWE7QUFBRSxpQkFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QztBQUFFLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FB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QUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsVUFBM0IsRUFBdUMsS0FBdkMsQ0FBUDtBQUNBLHNCQUFZLElBQVo7U0Fad0IsQ0FBMUIsRUEvNkJ1Qjs7QUE4N0J2QixlQUFPLEtBQVAsQ0E5N0J1QjtPQUFaOztBQWk4QmIsY0FBUSxTQUFSLElBQXFCLEtBQXJCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYXZlcnNhbC9zY29wZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMgPSByZXF1aXJlKFwibG9kYXNoL2NvbGxlY3Rpb24vaW5jbHVkZXNcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlcyk7XG5cbnZhciBfcmVwZWF0aW5nID0gcmVxdWlyZShcInJlcGVhdGluZ1wiKTtcblxudmFyIF9yZXBlYXRpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVwZWF0aW5nKTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi9pbmRleFwiKTtcblxudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleCk7XG5cbnZhciBfbG9kYXNoT2JqZWN0RGVmYXVsdHMgPSByZXF1aXJlKFwibG9kYXNoL29iamVjdC9kZWZhdWx0c1wiKTtcblxudmFyIF9sb2Rhc2hPYmplY3REZWZhdWx0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3REZWZhdWx0cyk7XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfYmluZGluZyA9IHJlcXVpcmUoXCIuL2JpbmRpbmdcIik7XG5cbnZhciBfYmluZGluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kaW5nKTtcblxudmFyIF9nbG9iYWxzID0gcmVxdWlyZShcImdsb2JhbHNcIik7XG5cbnZhciBfZ2xvYmFsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nbG9iYWxzKTtcblxudmFyIF9sb2Rhc2hBcnJheUZsYXR0ZW4gPSByZXF1aXJlKFwibG9kYXNoL2FycmF5L2ZsYXR0ZW5cIik7XG5cbnZhciBfbG9kYXNoQXJyYXlGbGF0dGVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaEFycmF5RmxhdHRlbik7XG5cbnZhciBfbG9kYXNoT2JqZWN0RXh0ZW5kID0gcmVxdWlyZShcImxvZGFzaC9vYmplY3QvZXh0ZW5kXCIpO1xuXG52YXIgX2xvZGFzaE9iamVjdEV4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RFeHRlbmQpO1xuXG52YXIgX2hlbHBlcnNPYmplY3QgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9vYmplY3RcIik7XG5cbnZhciBfaGVscGVyc09iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzT2JqZWN0KTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgY29sbGVjdG9yVmlzaXRvciA9IHtcbiAgRm9yOiBmdW5jdGlvbiBGb3IoKSB7XG4gICAgdmFyIF9hcnIgPSB0LkZPUl9JTklUX0tFWVM7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBrZXkgPSBfYXJyW19pXTtcbiAgICAgIHZhciBkZWNsYXIgPSB0aGlzLmdldChrZXkpO1xuICAgICAgaWYgKGRlY2xhci5pc1ZhcigpKSB0aGlzLnNjb3BlLmdldEZ1bmN0aW9uUGFyZW50KCkucmVnaXN0ZXJCaW5kaW5nKFwidmFyXCIsIGRlY2xhcik7XG4gICAgfVxuICB9LFxuXG4gIERlY2xhcmF0aW9uOiBmdW5jdGlvbiBEZWNsYXJhdGlvbigpIHtcbiAgICAvLyBkZWxlZ2F0ZSBibG9jayBzY29wZSBoYW5kbGluZyB0byB0aGUgYGJsb2NrVmFyaWFibGVWaXNpdG9yYFxuICAgIGlmICh0aGlzLmlzQmxvY2tTY29wZWQoKSkgcmV0dXJuO1xuXG4gICAgLy8gdGhpcyB3aWxsIGJlIGhpdCBhZ2FpbiBvbmNlIHdlIHRyYXZlcnNlIGludG8gaXQgYWZ0ZXIgdGhpcyBpdGVyYXRpb25cbiAgICBpZiAodGhpcy5pc0V4cG9ydERlY2xhcmF0aW9uKCkgJiYgdGhpcy5nZXQoXCJkZWNsYXJhdGlvblwiKS5pc0RlY2xhcmF0aW9uKCkpIHJldHVybjtcblxuICAgIC8vIHdlJ3ZlIHJhbiBpbnRvIGEgZGVjbGFyYXRpb24hXG4gICAgdGhpcy5zY29wZS5nZXRGdW5jdGlvblBhcmVudCgpLnJlZ2lzdGVyRGVjbGFyYXRpb24odGhpcyk7XG4gIH0sXG5cbiAgUmVmZXJlbmNlZElkZW50aWZpZXI6IGZ1bmN0aW9uIFJlZmVyZW5jZWRJZGVudGlmaWVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgc3RhdGUucmVmZXJlbmNlcy5wdXNoKHRoaXMpO1xuICB9LFxuXG4gIEZvclhTdGF0ZW1lbnQ6IGZ1bmN0aW9uIEZvclhTdGF0ZW1lbnQobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZ2V0KFwibGVmdFwiKTtcbiAgICBpZiAobGVmdC5pc1BhdHRlcm4oKSB8fCBsZWZ0LmlzSWRlbnRpZmllcigpKSB7XG4gICAgICBzdGF0ZS5jb25zdGFudFZpb2xhdGlvbnMucHVzaChsZWZ0KTtcbiAgICB9XG4gIH0sXG5cbiAgRXhwb3J0RGVjbGFyYXRpb246IHtcbiAgICBleGl0OiBmdW5jdGlvbiBleGl0KG5vZGUsIHBhcmVudCwgc2NvcGUpIHtcbiAgICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uO1xuICAgICAgaWYgKHQuaXNDbGFzc0RlY2xhcmF0aW9uKGRlY2xhcikgfHwgdC5pc0Z1bmN0aW9uRGVjbGFyYXRpb24oZGVjbGFyKSkge1xuICAgICAgICB2YXIgYmluZGluZyA9IHNjb3BlLmdldEJpbmRpbmcoZGVjbGFyLmlkLm5hbWUpO1xuICAgICAgICBpZiAoYmluZGluZykgYmluZGluZy5yZWZlcmVuY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24oZGVjbGFyKSkge1xuICAgICAgICB2YXIgX2FycjIgPSBkZWNsYXIuZGVjbGFyYXRpb25zO1xuXG4gICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgICB2YXIgZGVjbCA9IF9hcnIyW19pMl07XG4gICAgICAgICAgdmFyIGlkcyA9IHQuZ2V0QmluZGluZ0lkZW50aWZpZXJzKGRlY2wpO1xuICAgICAgICAgIGZvciAodmFyIF9uYW1lIGluIGlkcykge1xuICAgICAgICAgICAgdmFyIGJpbmRpbmcgPSBzY29wZS5nZXRCaW5kaW5nKF9uYW1lKTtcbiAgICAgICAgICAgIGlmIChiaW5kaW5nKSBiaW5kaW5nLnJlZmVyZW5jZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBMYWJlbGVkU3RhdGVtZW50OiBmdW5jdGlvbiBMYWJlbGVkU3RhdGVtZW50KCkge1xuICAgIHRoaXMuc2NvcGUuZ2V0UHJvZ3JhbVBhcmVudCgpLmFkZEdsb2JhbCh0aGlzLm5vZGUpO1xuICAgIHRoaXMuc2NvcGUuZ2V0QmxvY2tQYXJlbnQoKS5yZWdpc3RlckRlY2xhcmF0aW9uKHRoaXMpO1xuICB9LFxuXG4gIEFzc2lnbm1lbnRFeHByZXNzaW9uOiBmdW5jdGlvbiBBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIHN0YXRlLmFzc2lnbm1lbnRzLnB1c2godGhpcyk7XG4gIH0sXG5cbiAgVXBkYXRlRXhwcmVzc2lvbjogZnVuY3Rpb24gVXBkYXRlRXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIHN0YXRlLmNvbnN0YW50VmlvbGF0aW9ucy5wdXNoKHRoaXMuZ2V0KFwiYXJndW1lbnRcIikpO1xuICB9LFxuXG4gIFVuYXJ5RXhwcmVzc2lvbjogZnVuY3Rpb24gVW5hcnlFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKHRoaXMubm9kZS5vcGVyYXRvciA9PT0gXCJkZWxldGVcIikge1xuICAgICAgc3RhdGUuY29uc3RhbnRWaW9sYXRpb25zLnB1c2godGhpcy5nZXQoXCJhcmd1bWVudFwiKSk7XG4gICAgfVxuICB9LFxuXG4gIEJsb2NrU2NvcGVkOiBmdW5jdGlvbiBCbG9ja1Njb3BlZCgpIHtcbiAgICB2YXIgc2NvcGUgPSB0aGlzLnNjb3BlO1xuICAgIGlmIChzY29wZS5wYXRoID09PSB0aGlzKSBzY29wZSA9IHNjb3BlLnBhcmVudDtcbiAgICBzY29wZS5nZXRCbG9ja1BhcmVudCgpLnJlZ2lzdGVyRGVjbGFyYXRpb24odGhpcyk7XG4gIH0sXG5cbiAgQ2xhc3NEZWNsYXJhdGlvbjogZnVuY3Rpb24gQ2xhc3NEZWNsYXJhdGlvbigpIHtcbiAgICB2YXIgbmFtZSA9IHRoaXMubm9kZS5pZC5uYW1lO1xuICAgIHRoaXMuc2NvcGUuYmluZGluZ3NbbmFtZV0gPSB0aGlzLnNjb3BlLmdldEJpbmRpbmcobmFtZSk7XG4gIH0sXG5cbiAgQmxvY2s6IGZ1bmN0aW9uIEJsb2NrKCkge1xuICAgIHZhciBwYXRocyA9IHRoaXMuZ2V0KFwiYm9keVwiKTtcbiAgICB2YXIgX2FycjMgPSBwYXRocztcbiAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBfYXJyMy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICB2YXIgYm9keVBhdGggPSBfYXJyM1tfaTNdO1xuICAgICAgaWYgKGJvZHlQYXRoLmlzRnVuY3Rpb25EZWNsYXJhdGlvbigpKSB7XG4gICAgICAgIHRoaXMuc2NvcGUuZ2V0QmxvY2tQYXJlbnQoKS5yZWdpc3RlckRlY2xhcmF0aW9uKGJvZHlQYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHJlbmFtZVZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZWZlcmVuY2VkSWRlbnRpZmllcjogZnVuY3Rpb24gUmVmZXJlbmNlZElkZW50aWZpZXIobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBpZiAobm9kZS5uYW1lID09PSBzdGF0ZS5vbGROYW1lKSB7XG4gICAgICBub2RlLm5hbWUgPSBzdGF0ZS5uZXdOYW1lO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlOiBmdW5jdGlvbiBTY29wZShub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIGlmICghc2NvcGUuYmluZGluZ0lkZW50aWZpZXJFcXVhbHMoc3RhdGUub2xkTmFtZSwgc3RhdGUuYmluZGluZykpIHtcbiAgICAgIHRoaXMuc2tpcCgpO1xuICAgIH1cbiAgfSxcblxuICBcIkFzc2lnbm1lbnRFeHByZXNzaW9ufERlY2xhcmF0aW9uXCI6IGZ1bmN0aW9uIEFzc2lnbm1lbnRFeHByZXNzaW9uRGVjbGFyYXRpb24obm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICB2YXIgaWRzID0gdGhpcy5nZXRCaW5kaW5nSWRlbnRpZmllcnMoKTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gaWRzKSB7XG4gICAgICBpZiAobmFtZSA9PT0gc3RhdGUub2xkTmFtZSkgaWRzW25hbWVdLm5hbWUgPSBzdGF0ZS5uZXdOYW1lO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgU2NvcGUgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBUaGlzIHNlYXJjaGVzIHRoZSBjdXJyZW50IFwic2NvcGVcIiBhbmQgY29sbGVjdHMgYWxsIHJlZmVyZW5jZXMvYmluZGluZ3NcbiAgICogd2l0aGluLlxuICAgKi9cblxuICBmdW5jdGlvbiBTY29wZShwYXRoLCBwYXJlbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2NvcGUpO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuYmxvY2sgPT09IHBhdGgubm9kZSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICB2YXIgY2FjaGVkID0gcGF0aC5nZXREYXRhKFwic2NvcGVcIik7XG4gICAgaWYgKGNhY2hlZCAmJiBjYWNoZWQucGFyZW50ID09PSBwYXJlbnQgJiYgY2FjaGVkLmJsb2NrID09PSBwYXRoLm5vZGUpIHtcbiAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGguc2V0RGF0YShcInNjb3BlXCIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuaHViID0gcGF0aC5odWI7XG5cbiAgICB0aGlzLnBhcmVudEJsb2NrID0gcGF0aC5wYXJlbnQ7XG4gICAgdGhpcy5ibG9jayA9IHBhdGgubm9kZTtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdsb2JhbHMuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUcmF2ZXJzZSBub2RlIHdpdGggY3VycmVudCBzY29wZSBhbmQgcGF0aC5cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLnRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgb3B0cywgc3RhdGUpIHtcbiAgICBfaW5kZXgyW1wiZGVmYXVsdFwiXShub2RlLCBvcHRzLCB0aGlzLCBzdGF0ZSwgdGhpcy5wYXRoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSB1bmlxdWUgaWRlbnRpZmllciBhbmQgYWRkIGl0IHRvIHRoZSBjdXJyZW50IHNjb3BlLlxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuZ2VuZXJhdGVEZWNsYXJlZFVpZElkZW50aWZpZXIgPSBmdW5jdGlvbiBnZW5lcmF0ZURlY2xhcmVkVWlkSWRlbnRpZmllcigpIHtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IFwidGVtcFwiIDogYXJndW1lbnRzWzBdO1xuXG4gICAgdmFyIGlkID0gdGhpcy5nZW5lcmF0ZVVpZElkZW50aWZpZXIobmFtZSk7XG4gICAgdGhpcy5wdXNoKHsgaWQ6IGlkIH0pO1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSB1bmlxdWUgaWRlbnRpZmllci5cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmdlbmVyYXRlVWlkSWRlbnRpZmllciA9IGZ1bmN0aW9uIGdlbmVyYXRlVWlkSWRlbnRpZmllcihuYW1lKSB7XG4gICAgcmV0dXJuIHQuaWRlbnRpZmllcih0aGlzLmdlbmVyYXRlVWlkKG5hbWUpKTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSB1bmlxdWUgYF9pZDFgIGJpbmRpbmcuXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5nZW5lcmF0ZVVpZCA9IGZ1bmN0aW9uIGdlbmVyYXRlVWlkKG5hbWUpIHtcbiAgICBuYW1lID0gdC50b0lkZW50aWZpZXIobmFtZSkucmVwbGFjZSgvXl8rLywgXCJcIik7XG5cbiAgICB2YXIgdWlkO1xuICAgIHZhciBpID0gMDtcbiAgICBkbyB7XG4gICAgICB1aWQgPSB0aGlzLl9nZW5lcmF0ZVVpZChuYW1lLCBpKTtcbiAgICAgIGkrKztcbiAgICB9IHdoaWxlICh0aGlzLmhhc0JpbmRpbmcodWlkKSB8fCB0aGlzLmhhc0dsb2JhbCh1aWQpIHx8IHRoaXMuaGFzUmVmZXJlbmNlKHVpZCkpO1xuXG4gICAgdmFyIHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW1QYXJlbnQoKTtcbiAgICBwcm9ncmFtLnJlZmVyZW5jZXNbdWlkXSA9IHRydWU7XG4gICAgcHJvZ3JhbS51aWRzW3VpZF0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHVpZDtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYW4gYF9pZDFgLlxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuX2dlbmVyYXRlVWlkID0gZnVuY3Rpb24gX2dlbmVyYXRlVWlkKG5hbWUsIGkpIHtcbiAgICB2YXIgaWQgPSBuYW1lO1xuICAgIGlmIChpID4gMSkgaWQgKz0gaTtcbiAgICByZXR1cm4gXCJfXCIgKyBpZDtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSB1bmlxdWUgaWRlbnRpZmllciBiYXNlZCBvbiBhIG5vZGUuXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5nZW5lcmF0ZVVpZElkZW50aWZpZXJCYXNlZE9uTm9kZSA9IGZ1bmN0aW9uIGdlbmVyYXRlVWlkSWRlbnRpZmllckJhc2VkT25Ob2RlKHBhcmVudCwgZGVmYXVsdE5hbWUpIHtcbiAgICB2YXIgbm9kZSA9IHBhcmVudDtcblxuICAgIGlmICh0LmlzQXNzaWdubWVudEV4cHJlc3Npb24ocGFyZW50KSkge1xuICAgICAgbm9kZSA9IHBhcmVudC5sZWZ0O1xuICAgIH0gZWxzZSBpZiAodC5pc1ZhcmlhYmxlRGVjbGFyYXRvcihwYXJlbnQpKSB7XG4gICAgICBub2RlID0gcGFyZW50LmlkO1xuICAgIH0gZWxzZSBpZiAodC5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgICBub2RlID0gbm9kZS5rZXk7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB2YXIgYWRkID0gZnVuY3Rpb24gYWRkKG5vZGUpIHtcbiAgICAgIGlmICh0LmlzTW9kdWxlRGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgICAgaWYgKG5vZGUuc291cmNlKSB7XG4gICAgICAgICAgYWRkKG5vZGUuc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLnNwZWNpZmllcnMgJiYgbm9kZS5zcGVjaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBfYXJyNCA9IG5vZGUuc3BlY2lmaWVycztcblxuICAgICAgICAgIGZvciAodmFyIF9pNCA9IDA7IF9pNCA8IF9hcnI0Lmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgICAgIHZhciBzcGVjaWZpZXIgPSBfYXJyNFtfaTRdO1xuICAgICAgICAgICAgYWRkKHNwZWNpZmllcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuZGVjbGFyYXRpb24pIHtcbiAgICAgICAgICBhZGQobm9kZS5kZWNsYXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodC5pc01vZHVsZVNwZWNpZmllcihub2RlKSkge1xuICAgICAgICBhZGQobm9kZS5sb2NhbCk7XG4gICAgICB9IGVsc2UgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgICAgIGFkZChub2RlLm9iamVjdCk7XG4gICAgICAgIGFkZChub2RlLnByb3BlcnR5KTtcbiAgICAgIH0gZWxzZSBpZiAodC5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICAgICAgcGFydHMucHVzaChub2RlLm5hbWUpO1xuICAgICAgfSBlbHNlIGlmICh0LmlzTGl0ZXJhbChub2RlKSkge1xuICAgICAgICBwYXJ0cy5wdXNoKG5vZGUudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0LmlzQ2FsbEV4cHJlc3Npb24obm9kZSkpIHtcbiAgICAgICAgYWRkKG5vZGUuY2FsbGVlKTtcbiAgICAgIH0gZWxzZSBpZiAodC5pc09iamVjdEV4cHJlc3Npb24obm9kZSkgfHwgdC5pc09iamVjdFBhdHRlcm4obm9kZSkpIHtcbiAgICAgICAgdmFyIF9hcnI1ID0gbm9kZS5wcm9wZXJ0aWVzO1xuXG4gICAgICAgIGZvciAodmFyIF9pNSA9IDA7IF9pNSA8IF9hcnI1Lmxlbmd0aDsgX2k1KyspIHtcbiAgICAgICAgICB2YXIgcHJvcCA9IF9hcnI1W19pNV07XG4gICAgICAgICAgYWRkKHByb3Aua2V5IHx8IHByb3AuYXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGFkZChub2RlKTtcblxuICAgIHZhciBpZCA9IHBhcnRzLmpvaW4oXCIkXCIpO1xuICAgIGlkID0gaWQucmVwbGFjZSgvXl8vLCBcIlwiKSB8fCBkZWZhdWx0TmFtZSB8fCBcInJlZlwiO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKGlkKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgZXZhbHVhdGluZyB0aGUgc3BlY2lmaWMgaW5wdXQgYG5vZGVgIGlzIGEgY29uc2VxdWVuY2VsZXNzIHJlZmVyZW5jZS4gaWUuXG4gICAqIGV2YWx1YXRpbmcgaXQgd29udCByZXN1bHQgaW4gcG90ZW50aWFsbHkgYXJiaXRyYXJ5IGNvZGUgZnJvbSBiZWluZyByYW4uIFRoZSBmb2xsb3dpbmcgYXJlXG4gICAqIHdoaXRlbGlzdGVkIGFuZCBkZXRlcm1pbmVkIG5vdCB0byBjYXVzZSBzaWRlIGVmZmVjdHM6XG4gICAqXG4gICAqICAtIGB0aGlzYCBleHByZXNzaW9uc1xuICAgKiAgLSBgc3VwZXJgIGV4cHJlc3Npb25zXG4gICAqICAtIEJvdW5kIGlkZW50aWZpZXJzXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5pc1N0YXRpYyA9IGZ1bmN0aW9uIGlzU3RhdGljKG5vZGUpIHtcbiAgICBpZiAodC5pc1RoaXNFeHByZXNzaW9uKG5vZGUpIHx8IHQuaXNTdXBlcihub2RlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHQuaXNJZGVudGlmaWVyKG5vZGUpKSB7XG4gICAgICB2YXIgYmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyhub2RlLm5hbWUpO1xuICAgICAgaWYgKGJpbmRpbmcpIHtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmcuY29uc3RhbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNCaW5kaW5nKG5vZGUubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQb3NzaWJseSBnZW5lcmF0ZSBhIG1lbW9pc2VkIGlkZW50aWZpZXIgaWYgaXQgaXMgbm90IHN0YXRpYyBhbmQgaGFzIGNvbnNlcXVlbmNlcy5cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLm1heWJlR2VuZXJhdGVNZW1vaXNlZCA9IGZ1bmN0aW9uIG1heWJlR2VuZXJhdGVNZW1vaXNlZChub2RlLCBkb250UHVzaCkge1xuICAgIGlmICh0aGlzLmlzU3RhdGljKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlkID0gdGhpcy5nZW5lcmF0ZVVpZElkZW50aWZpZXJCYXNlZE9uTm9kZShub2RlKTtcbiAgICAgIGlmICghZG9udFB1c2gpIHRoaXMucHVzaCh7IGlkOiBpZCB9KTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuY2hlY2tCbG9ja1Njb3BlZENvbGxpc2lvbnMgPSBmdW5jdGlvbiBjaGVja0Jsb2NrU2NvcGVkQ29sbGlzaW9ucyhsb2NhbCwga2luZCwgbmFtZSwgaWQpIHtcbiAgICAvLyBpZ25vcmUgcGFyYW1ldGVyc1xuICAgIGlmIChraW5kID09PSBcInBhcmFtXCIpIHJldHVybjtcblxuICAgIC8vIGlnbm9yZSBob2lzdGVkIGZ1bmN0aW9ucyBpZiB0aGVyZSdzIGFsc28gYSBsb2NhbCBsZXRcbiAgICBpZiAoa2luZCA9PT0gXCJob2lzdGVkXCIgJiYgbG9jYWwua2luZCA9PT0gXCJsZXRcIikgcmV0dXJuO1xuXG4gICAgdmFyIGR1cGxpY2F0ZSA9IGZhbHNlO1xuXG4gICAgLy8gZG9uJ3QgYWxsb3cgZHVwbGljYXRlIGJpbmRpbmdzIHRvIGV4aXN0IGFsb25nc2lkZVxuICAgIGlmICghZHVwbGljYXRlKSBkdXBsaWNhdGUgPSBraW5kID09PSBcImxldFwiIHx8IGxvY2FsLmtpbmQgPT09IFwibGV0XCIgfHwgbG9jYWwua2luZCA9PT0gXCJjb25zdFwiIHx8IGxvY2FsLmtpbmQgPT09IFwibW9kdWxlXCI7XG5cbiAgICAvLyBkb24ndCBhbGxvdyBhIGxvY2FsIG9mIHBhcmFtIHdpdGggYSBraW5kIG9mIGxldFxuICAgIGlmICghZHVwbGljYXRlKSBkdXBsaWNhdGUgPSBsb2NhbC5raW5kID09PSBcInBhcmFtXCIgJiYgKGtpbmQgPT09IFwibGV0XCIgfHwga2luZCA9PT0gXCJjb25zdFwiKTtcblxuICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgIHRocm93IHRoaXMuaHViLmZpbGUuZXJyb3JXaXRoTm9kZShpZCwgbWVzc2FnZXMuZ2V0KFwic2NvcGVEdXBsaWNhdGVEZWNsYXJhdGlvblwiLCBuYW1lKSwgVHlwZUVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUucmVuYW1lID0gZnVuY3Rpb24gcmVuYW1lKG9sZE5hbWUsIG5ld05hbWUsIGJsb2NrKSB7XG4gICAgbmV3TmFtZSA9IG5ld05hbWUgfHwgdGhpcy5nZW5lcmF0ZVVpZElkZW50aWZpZXIob2xkTmFtZSkubmFtZTtcblxuICAgIHZhciBpbmZvID0gdGhpcy5nZXRCaW5kaW5nKG9sZE5hbWUpO1xuICAgIGlmICghaW5mbykgcmV0dXJuO1xuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgbmV3TmFtZTogbmV3TmFtZSxcbiAgICAgIG9sZE5hbWU6IG9sZE5hbWUsXG4gICAgICBiaW5kaW5nOiBpbmZvLmlkZW50aWZpZXIsXG4gICAgICBpbmZvOiBpbmZvXG4gICAgfTtcblxuICAgIHZhciBzY29wZSA9IGluZm8uc2NvcGU7XG4gICAgc2NvcGUudHJhdmVyc2UoYmxvY2sgfHwgc2NvcGUuYmxvY2ssIHJlbmFtZVZpc2l0b3IsIHN0YXRlKTtcblxuICAgIGlmICghYmxvY2spIHtcbiAgICAgIHNjb3BlLnJlbW92ZU93bkJpbmRpbmcob2xkTmFtZSk7XG4gICAgICBzY29wZS5iaW5kaW5nc1tuZXdOYW1lXSA9IGluZm87XG4gICAgICBzdGF0ZS5iaW5kaW5nLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIHZhciBmaWxlID0gdGhpcy5odWIuZmlsZTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdGhpcy5fcmVuYW1lRnJvbU1hcChmaWxlLm1vZHVsZUZvcm1hdHRlci5sb2NhbEltcG9ydHMsIG9sZE5hbWUsIG5ld05hbWUsIHN0YXRlLmJpbmRpbmcpO1xuICAgICAgLy90aGlzLl9yZW5hbWVGcm9tTWFwKGZpbGUubW9kdWxlRm9ybWF0dGVyLmxvY2FsRXhwb3J0cywgb2xkTmFtZSwgbmV3TmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLl9yZW5hbWVGcm9tTWFwID0gZnVuY3Rpb24gX3JlbmFtZUZyb21NYXAobWFwLCBvbGROYW1lLCBuZXdOYW1lLCB2YWx1ZSkge1xuICAgIGlmIChtYXBbb2xkTmFtZV0pIHtcbiAgICAgIG1hcFtuZXdOYW1lXSA9IHZhbHVlO1xuICAgICAgbWFwW29sZE5hbWVdID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuZHVtcCA9IGZ1bmN0aW9uIGR1bXAoKSB7XG4gICAgdmFyIHNlcCA9IF9yZXBlYXRpbmcyW1wiZGVmYXVsdFwiXShcIi1cIiwgNjApO1xuICAgIGNvbnNvbGUubG9nKHNlcCk7XG4gICAgdmFyIHNjb3BlID0gdGhpcztcbiAgICBkbyB7XG4gICAgICBjb25zb2xlLmxvZyhcIiNcIiwgc2NvcGUuYmxvY2sudHlwZSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHNjb3BlLmJpbmRpbmdzKSB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gc2NvcGUuYmluZGluZ3NbbmFtZV07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIC1cIiwgbmFtZSwge1xuICAgICAgICAgIGNvbnN0YW50OiBiaW5kaW5nLmNvbnN0YW50LFxuICAgICAgICAgIHJlZmVyZW5jZXM6IGJpbmRpbmcucmVmZXJlbmNlcyxcbiAgICAgICAgICBraW5kOiBiaW5kaW5nLmtpbmRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoc2NvcGUgPSBzY29wZS5wYXJlbnQpO1xuICAgIGNvbnNvbGUubG9nKHNlcCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkobm9kZSwgaSkge1xuICAgIHZhciBmaWxlID0gdGhpcy5odWIuZmlsZTtcblxuICAgIGlmICh0LmlzSWRlbnRpZmllcihub2RlKSkge1xuICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcobm9kZS5uYW1lKTtcbiAgICAgIGlmIChiaW5kaW5nICYmIGJpbmRpbmcuY29uc3RhbnQgJiYgYmluZGluZy5wYXRoLmlzR2VuZXJpY1R5cGUoXCJBcnJheVwiKSkgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgaWYgKHQuaXNBcnJheUV4cHJlc3Npb24obm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGlmICh0LmlzSWRlbnRpZmllcihub2RlLCB7IG5hbWU6IFwiYXJndW1lbnRzXCIgfSkpIHtcbiAgICAgIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKHQubWVtYmVyRXhwcmVzc2lvbihmaWxlLmFkZEhlbHBlcihcInNsaWNlXCIpLCB0LmlkZW50aWZpZXIoXCJjYWxsXCIpKSwgW25vZGVdKTtcbiAgICB9XG5cbiAgICB2YXIgaGVscGVyTmFtZSA9IFwidG8tYXJyYXlcIjtcbiAgICB2YXIgYXJncyA9IFtub2RlXTtcbiAgICBpZiAoaSA9PT0gdHJ1ZSkge1xuICAgICAgaGVscGVyTmFtZSA9IFwidG8tY29uc3VtYWJsZS1hcnJheVwiO1xuICAgIH0gZWxzZSBpZiAoaSkge1xuICAgICAgYXJncy5wdXNoKHQubGl0ZXJhbChpKSk7XG4gICAgICBoZWxwZXJOYW1lID0gXCJzbGljZWQtdG8tYXJyYXlcIjtcbiAgICAgIGlmICh0aGlzLmh1Yi5maWxlLmlzTG9vc2UoXCJlczYuZm9yT2ZcIikpIGhlbHBlck5hbWUgKz0gXCItbG9vc2VcIjtcbiAgICB9XG4gICAgcmV0dXJuIHQuY2FsbEV4cHJlc3Npb24oZmlsZS5hZGRIZWxwZXIoaGVscGVyTmFtZSksIGFyZ3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLnJlZ2lzdGVyRGVjbGFyYXRpb24gPSBmdW5jdGlvbiByZWdpc3RlckRlY2xhcmF0aW9uKHBhdGgpIHtcbiAgICBpZiAocGF0aC5pc0xhYmVsZWRTdGF0ZW1lbnQoKSkge1xuICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoXCJsYWJlbFwiLCBwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguaXNGdW5jdGlvbkRlY2xhcmF0aW9uKCkpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJCaW5kaW5nKFwiaG9pc3RlZFwiLCBwYXRoLmdldChcImlkXCIpLCBwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguaXNWYXJpYWJsZURlY2xhcmF0aW9uKCkpIHtcbiAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBwYXRoLmdldChcImRlY2xhcmF0aW9uc1wiKTtcbiAgICAgIHZhciBfYXJyNiA9IGRlY2xhcmF0aW9ucztcbiAgICAgIGZvciAodmFyIF9pNiA9IDA7IF9pNiA8IF9hcnI2Lmxlbmd0aDsgX2k2KyspIHtcbiAgICAgICAgdmFyIGRlY2xhciA9IF9hcnI2W19pNl07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCaW5kaW5nKHBhdGgubm9kZS5raW5kLCBkZWNsYXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGF0aC5pc0NsYXNzRGVjbGFyYXRpb24oKSkge1xuICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoXCJsZXRcIiwgcGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmlzSW1wb3J0RGVjbGFyYXRpb24oKSkge1xuICAgICAgdmFyIHNwZWNpZmllcnMgPSBwYXRoLmdldChcInNwZWNpZmllcnNcIik7XG4gICAgICB2YXIgX2FycjcgPSBzcGVjaWZpZXJzO1xuICAgICAgZm9yICh2YXIgX2k3ID0gMDsgX2k3IDwgX2FycjcubGVuZ3RoOyBfaTcrKykge1xuICAgICAgICB2YXIgc3BlY2lmaWVyID0gX2FycjdbX2k3XTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoXCJtb2R1bGVcIiwgc3BlY2lmaWVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhdGguaXNFeHBvcnREZWNsYXJhdGlvbigpKSB7XG4gICAgICB2YXIgZGVjbGFyID0gcGF0aC5nZXQoXCJkZWNsYXJhdGlvblwiKTtcbiAgICAgIGlmIChkZWNsYXIuaXNDbGFzc0RlY2xhcmF0aW9uKCkgfHwgZGVjbGFyLmlzRnVuY3Rpb25EZWNsYXJhdGlvbigpIHx8IGRlY2xhci5pc1ZhcmlhYmxlRGVjbGFyYXRpb24oKSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRGVjbGFyYXRpb24oZGVjbGFyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoXCJ1bmtub3duXCIsIHBhdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5yZWdpc3RlckNvbnN0YW50VmlvbGF0aW9uID0gZnVuY3Rpb24gcmVnaXN0ZXJDb25zdGFudFZpb2xhdGlvbihwYXRoKSB7XG4gICAgdmFyIGlkcyA9IHBhdGguZ2V0QmluZGluZ0lkZW50aWZpZXJzKCk7XG4gICAgZm9yICh2YXIgX25hbWUyIGluIGlkcykge1xuICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcoX25hbWUyKTtcbiAgICAgIGlmIChiaW5kaW5nKSBiaW5kaW5nLnJlYXNzaWduKHBhdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5yZWdpc3RlckJpbmRpbmcgPSBmdW5jdGlvbiByZWdpc3RlckJpbmRpbmcoa2luZCwgcGF0aCkge1xuICAgIHZhciBiaW5kaW5nUGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IHBhdGggOiBhcmd1bWVudHNbMl07XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWtpbmQpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIm5vIGBraW5kYFwiKTtcblxuICAgICAgaWYgKHBhdGguaXNWYXJpYWJsZURlY2xhcmF0aW9uKCkpIHtcbiAgICAgICAgdmFyIGRlY2xhcmF0b3JzID0gcGF0aC5nZXQoXCJkZWNsYXJhdGlvbnNcIik7XG4gICAgICAgIHZhciBfYXJyOCA9IGRlY2xhcmF0b3JzO1xuICAgICAgICBmb3IgKHZhciBfaTggPSAwOyBfaTggPCBfYXJyOC5sZW5ndGg7IF9pOCsrKSB7XG4gICAgICAgICAgdmFyIGRlY2xhciA9IF9hcnI4W19pOF07XG4gICAgICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoa2luZCwgZGVjbGFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFByb2dyYW1QYXJlbnQoKTtcbiAgICAgIHZhciBpZHMgPSBwYXRoLmdldEJpbmRpbmdJZGVudGlmaWVycyh0cnVlKTtcblxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBpZHMpIHtcbiAgICAgICAgdmFyIF9hcnI5ID0gaWRzW25hbWVdO1xuXG4gICAgICAgIGZvciAodmFyIF9pOSA9IDA7IF9pOSA8IF9hcnI5Lmxlbmd0aDsgX2k5KyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBfYXJyOVtfaTldO1xuICAgICAgICAgIHZhciBsb2NhbCA9IHRoaXMuZ2V0T3duQmluZGluZyhuYW1lKTtcbiAgICAgICAgICBpZiAobG9jYWwpIHtcbiAgICAgICAgICAgIC8vIHNhbWUgaWRlbnRpZmllciBzbyBjb250aW51ZSBzYWZlbHkgYXMgd2UncmUgbGlrZWx5IHRyeWluZyB0byByZWdpc3RlciBpdFxuICAgICAgICAgICAgLy8gbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICAgIGlmIChsb2NhbC5pZGVudGlmaWVyID09PSBpZCkgY29udGludWU7XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tCbG9ja1Njb3BlZENvbGxpc2lvbnMobG9jYWwsIGtpbmQsIG5hbWUsIGlkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJlbnQucmVmZXJlbmNlc1tuYW1lXSA9IHRydWU7XG5cbiAgICAgICAgICB0aGlzLmJpbmRpbmdzW25hbWVdID0gbmV3IF9iaW5kaW5nMltcImRlZmF1bHRcIl0oe1xuICAgICAgICAgICAgaWRlbnRpZmllcjogaWQsXG4gICAgICAgICAgICBleGlzdGluZzogbG9jYWwsXG4gICAgICAgICAgICBzY29wZTogdGhpcyxcbiAgICAgICAgICAgIHBhdGg6IGJpbmRpbmdQYXRoLFxuICAgICAgICAgICAga2luZDoga2luZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5hZGRHbG9iYWwgPSBmdW5jdGlvbiBhZGRHbG9iYWwobm9kZSkge1xuICAgIHRoaXMuZ2xvYmFsc1tub2RlLm5hbWVdID0gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5oYXNVaWQgPSBmdW5jdGlvbiBoYXNVaWQobmFtZSkge1xuICAgIHZhciBzY29wZSA9IHRoaXM7XG5cbiAgICBkbyB7XG4gICAgICBpZiAoc2NvcGUudWlkc1tuYW1lXSkgcmV0dXJuIHRydWU7XG4gICAgfSB3aGlsZSAoc2NvcGUgPSBzY29wZS5wYXJlbnQpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmhhc0dsb2JhbCA9IGZ1bmN0aW9uIGhhc0dsb2JhbChuYW1lKSB7XG4gICAgdmFyIHNjb3BlID0gdGhpcztcblxuICAgIGRvIHtcbiAgICAgIGlmIChzY29wZS5nbG9iYWxzW25hbWVdKSByZXR1cm4gdHJ1ZTtcbiAgICB9IHdoaWxlIChzY29wZSA9IHNjb3BlLnBhcmVudCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuaGFzUmVmZXJlbmNlID0gZnVuY3Rpb24gaGFzUmVmZXJlbmNlKG5hbWUpIHtcbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHNjb3BlLnJlZmVyZW5jZXNbbmFtZV0pIHJldHVybiB0cnVlO1xuICAgIH0gd2hpbGUgKHNjb3BlID0gc2NvcGUucGFyZW50KTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5pc1B1cmUgPSBmdW5jdGlvbiBpc1B1cmUobm9kZSwgY29uc3RhbnRzT25seSkge1xuICAgIGlmICh0LmlzSWRlbnRpZmllcihub2RlKSkge1xuICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcobm9kZS5uYW1lKTtcbiAgICAgIGlmICghYmluZGluZykgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKGNvbnN0YW50c09ubHkpIHJldHVybiBiaW5kaW5nLmNvbnN0YW50O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0LmlzQ2xhc3Mobm9kZSkpIHtcbiAgICAgIHJldHVybiAhbm9kZS5zdXBlckNsYXNzIHx8IHRoaXMuaXNQdXJlKG5vZGUuc3VwZXJDbGFzcywgY29uc3RhbnRzT25seSk7XG4gICAgfSBlbHNlIGlmICh0LmlzQmluYXJ5KG5vZGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1B1cmUobm9kZS5sZWZ0LCBjb25zdGFudHNPbmx5KSAmJiB0aGlzLmlzUHVyZShub2RlLnJpZ2h0LCBjb25zdGFudHNPbmx5KTtcbiAgICB9IGVsc2UgaWYgKHQuaXNBcnJheUV4cHJlc3Npb24obm9kZSkpIHtcbiAgICAgIHZhciBfYXJyMTAgPSBub2RlLmVsZW1lbnRzO1xuXG4gICAgICBmb3IgKHZhciBfaTEwID0gMDsgX2kxMCA8IF9hcnIxMC5sZW5ndGg7IF9pMTArKykge1xuICAgICAgICB2YXIgZWxlbSA9IF9hcnIxMFtfaTEwXTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUHVyZShlbGVtLCBjb25zdGFudHNPbmx5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0LmlzT2JqZWN0RXhwcmVzc2lvbihub2RlKSkge1xuICAgICAgdmFyIF9hcnIxMSA9IG5vZGUucHJvcGVydGllcztcblxuICAgICAgZm9yICh2YXIgX2kxMSA9IDA7IF9pMTEgPCBfYXJyMTEubGVuZ3RoOyBfaTExKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBfYXJyMTFbX2kxMV07XG4gICAgICAgIGlmICghdGhpcy5pc1B1cmUocHJvcCwgY29uc3RhbnRzT25seSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodC5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgICBpZiAobm9kZS5jb21wdXRlZCAmJiAhdGhpcy5pc1B1cmUobm9kZS5rZXksIGNvbnN0YW50c09ubHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5pc1B1cmUobm9kZS52YWx1ZSwgY29uc3RhbnRzT25seSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0LmlzUHVyZShub2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBzb21lIGFyYml0cmFyeSBkYXRhIG9uIHRoZSBjdXJyZW50IHNjb3BlLlxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uIHNldERhdGEoa2V5LCB2YWwpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2tleV0gPSB2YWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdXAgc2NvcGUgdHJlZSBsb29raW5nIGZvciB0aGUgZGF0YSBga2V5YC5cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbiBnZXREYXRhKGtleSkge1xuICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgZG8ge1xuICAgICAgdmFyIGRhdGEgPSBzY29wZS5kYXRhW2tleV07XG4gICAgICBpZiAoZGF0YSAhPSBudWxsKSByZXR1cm4gZGF0YTtcbiAgICB9IHdoaWxlIChzY29wZSA9IHNjb3BlLnBhcmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdXAgc2NvcGUgdHJlZSBsb29raW5nIGZvciB0aGUgZGF0YSBga2V5YCBhbmQgaWYgaXQgZXhpc3RzLFxuICAgKiByZW1vdmUgaXQuXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5yZW1vdmVEYXRhID0gZnVuY3Rpb24gcmVtb3ZlRGF0YShrZXkpIHtcbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuICAgIGRvIHtcbiAgICAgIHZhciBkYXRhID0gc2NvcGUuZGF0YVtrZXldO1xuICAgICAgaWYgKGRhdGEgIT0gbnVsbCkgc2NvcGUuZGF0YVtrZXldID0gbnVsbDtcbiAgICB9IHdoaWxlIChzY29wZSA9IHNjb3BlLnBhcmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJlZmVyZW5jZXMpIHRoaXMuY3Jhd2woKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5jcmF3bCA9IGZ1bmN0aW9uIGNyYXdsKCkge1xuICAgIHZhciBwYXRoID0gdGhpcy5wYXRoO1xuXG4gICAgLy9cblxuICAgIHZhciBpbmZvID0gdGhpcy5ibG9jay5fc2NvcGVJbmZvO1xuICAgIGlmIChpbmZvKSByZXR1cm4gX2xvZGFzaE9iamVjdEV4dGVuZDJbXCJkZWZhdWx0XCJdKHRoaXMsIGluZm8pO1xuXG4gICAgaW5mbyA9IHRoaXMuYmxvY2suX3Njb3BlSW5mbyA9IHtcbiAgICAgIHJlZmVyZW5jZXM6IF9oZWxwZXJzT2JqZWN0MltcImRlZmF1bHRcIl0oKSxcbiAgICAgIGJpbmRpbmdzOiBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCksXG4gICAgICBnbG9iYWxzOiBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCksXG4gICAgICB1aWRzOiBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCksXG4gICAgICBkYXRhOiBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKClcbiAgICB9O1xuXG4gICAgX2xvZGFzaE9iamVjdEV4dGVuZDJbXCJkZWZhdWx0XCJdKHRoaXMsIGluZm8pO1xuXG4gICAgLy8gRm9yU3RhdGVtZW50IC0gbGVmdCwgaW5pdFxuXG4gICAgaWYgKHBhdGguaXNMb29wKCkpIHtcbiAgICAgIHZhciBfYXJyMTIgPSB0LkZPUl9JTklUX0tFWVM7XG5cbiAgICAgIGZvciAodmFyIF9pMTIgPSAwOyBfaTEyIDwgX2FycjEyLmxlbmd0aDsgX2kxMisrKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYXJyMTJbX2kxMl07XG4gICAgICAgIHZhciBub2RlID0gcGF0aC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKG5vZGUuaXNCbG9ja1Njb3BlZCgpKSB0aGlzLnJlZ2lzdGVyQmluZGluZyhub2RlLm5vZGUua2luZCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb25FeHByZXNzaW9uIC0gaWRcblxuICAgIGlmIChwYXRoLmlzRnVuY3Rpb25FeHByZXNzaW9uKCkgJiYgcGF0aC5oYXMoXCJpZFwiKSkge1xuICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoXCJsb2NhbFwiLCBwYXRoLmdldChcImlkXCIpLCBwYXRoKTtcbiAgICB9XG5cbiAgICAvLyBDbGFzc1xuXG4gICAgaWYgKHBhdGguaXNDbGFzc0V4cHJlc3Npb24oKSAmJiBwYXRoLmhhcyhcImlkXCIpKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyQmluZGluZyhcImxvY2FsXCIsIHBhdGgpO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIC0gcGFyYW1zLCByZXN0XG5cbiAgICBpZiAocGF0aC5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBwYXRoLmdldChcInBhcmFtc1wiKTtcbiAgICAgIHZhciBfYXJyMTMgPSBwYXJhbXM7XG4gICAgICBmb3IgKHZhciBfaTEzID0gMDsgX2kxMyA8IF9hcnIxMy5sZW5ndGg7IF9pMTMrKykge1xuICAgICAgICB2YXIgcGFyYW0gPSBfYXJyMTNbX2kxM107XG4gICAgICAgIHRoaXMucmVnaXN0ZXJCaW5kaW5nKFwicGFyYW1cIiwgcGFyYW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENhdGNoQ2xhdXNlIC0gcGFyYW1cblxuICAgIGlmIChwYXRoLmlzQ2F0Y2hDbGF1c2UoKSkge1xuICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoXCJsZXRcIiwgcGF0aCk7XG4gICAgfVxuXG4gICAgLy8gQ29tcHJlaGVuc2lvbkV4cHJlc3Npb24gLSBibG9ja3NcblxuICAgIGlmIChwYXRoLmlzQ29tcHJlaGVuc2lvbkV4cHJlc3Npb24oKSkge1xuICAgICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoXCJsZXRcIiwgcGF0aCk7XG4gICAgfVxuXG4gICAgLy8gUHJvZ3JhbVxuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0UHJvZ3JhbVBhcmVudCgpO1xuICAgIGlmIChwYXJlbnQuY3Jhd2xpbmcpIHJldHVybjtcblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHJlZmVyZW5jZXM6IFtdLFxuICAgICAgY29uc3RhbnRWaW9sYXRpb25zOiBbXSxcbiAgICAgIGFzc2lnbm1lbnRzOiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmNyYXdsaW5nID0gdHJ1ZTtcbiAgICBwYXRoLnRyYXZlcnNlKGNvbGxlY3RvclZpc2l0b3IsIHN0YXRlKTtcbiAgICB0aGlzLmNyYXdsaW5nID0gZmFsc2U7XG5cbiAgICAvLyByZWdpc3RlciBhc3NpZ25tZW50c1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHN0YXRlLmFzc2lnbm1lbnRzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kxNCA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgIGlmIChfaTE0ID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pMTQrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaTE0ID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKF9pMTQuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaTE0LnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3BhdGggPSBfcmVmO1xuXG4gICAgICAvLyByZWdpc3RlciB1bmRlY2xhcmVkIGJpbmRpbmdzIGFzIGdsb2JhbHNcbiAgICAgIHZhciBpZHMgPSBfcGF0aC5nZXRCaW5kaW5nSWRlbnRpZmllcnMoKTtcbiAgICAgIHZhciBwcm9ncmFtUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgZm9yICh2YXIgX25hbWUzIGluIGlkcykge1xuICAgICAgICBpZiAoX3BhdGguc2NvcGUuZ2V0QmluZGluZyhfbmFtZTMpKSBjb250aW51ZTtcblxuICAgICAgICBwcm9ncmFtUGFyZW50ID0gcHJvZ3JhbVBhcmVudCB8fCBfcGF0aC5zY29wZS5nZXRQcm9ncmFtUGFyZW50KCk7XG4gICAgICAgIHByb2dyYW1QYXJlbnQuYWRkR2xvYmFsKGlkc1tfbmFtZTNdKTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVnaXN0ZXIgYXMgY29uc3RhbnQgdmlvbGF0aW9uXG4gICAgICBfcGF0aC5zY29wZS5yZWdpc3RlckNvbnN0YW50VmlvbGF0aW9uKF9wYXRoKTtcbiAgICB9XG5cbiAgICAvLyByZWdpc3RlciByZWZlcmVuY2VzXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHN0YXRlLnJlZmVyZW5jZXMsIF9pc0FycmF5MiA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yMiksIF9pMTUgPSAwLCBfaXRlcmF0b3IyID0gX2lzQXJyYXkyID8gX2l0ZXJhdG9yMiA6IF9pdGVyYXRvcjJbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmMjtcblxuICAgICAgaWYgKF9pc0FycmF5Mikge1xuICAgICAgICBpZiAoX2kxNSA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTE1KytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kxNSA9IF9pdGVyYXRvcjIubmV4dCgpO1xuICAgICAgICBpZiAoX2kxNS5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjIgPSBfaTE1LnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmID0gX3JlZjI7XG5cbiAgICAgIHZhciBiaW5kaW5nID0gcmVmLnNjb3BlLmdldEJpbmRpbmcocmVmLm5vZGUubmFtZSk7XG4gICAgICBpZiAoYmluZGluZykge1xuICAgICAgICBiaW5kaW5nLnJlZmVyZW5jZShyZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVmLnNjb3BlLmdldFByb2dyYW1QYXJlbnQoKS5hZGRHbG9iYWwocmVmLm5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlZ2lzdGVyIGNvbnN0YW50IHZpb2xhdGlvbnNcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gc3RhdGUuY29uc3RhbnRWaW9sYXRpb25zLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTE2ID0gMCwgX2l0ZXJhdG9yMyA9IF9pc0FycmF5MyA/IF9pdGVyYXRvcjMgOiBfaXRlcmF0b3IzW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjM7XG5cbiAgICAgIGlmIChfaXNBcnJheTMpIHtcbiAgICAgICAgaWYgKF9pMTYgPj0gX2l0ZXJhdG9yMy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmMyA9IF9pdGVyYXRvcjNbX2kxNisrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pMTYgPSBfaXRlcmF0b3IzLm5leHQoKTtcbiAgICAgICAgaWYgKF9pMTYuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYzID0gX2kxNi52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9wYXRoMiA9IF9yZWYzO1xuXG4gICAgICBfcGF0aDIuc2NvcGUucmVnaXN0ZXJDb25zdGFudFZpb2xhdGlvbihfcGF0aDIpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaChvcHRzKSB7XG4gICAgdmFyIHBhdGggPSB0aGlzLnBhdGg7XG5cbiAgICBpZiAocGF0aC5pc1N3aXRjaFN0YXRlbWVudCgpKSB7XG4gICAgICBwYXRoID0gdGhpcy5nZXRGdW5jdGlvblBhcmVudCgpLnBhdGg7XG4gICAgfVxuXG4gICAgaWYgKHBhdGguaXNMb29wKCkgfHwgcGF0aC5pc0NhdGNoQ2xhdXNlKCkgfHwgcGF0aC5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgIHQuZW5zdXJlQmxvY2socGF0aC5ub2RlKTtcbiAgICAgIHBhdGggPSBwYXRoLmdldChcImJvZHlcIik7XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoLmlzQmxvY2tTdGF0ZW1lbnQoKSAmJiAhcGF0aC5pc1Byb2dyYW0oKSkge1xuICAgICAgcGF0aCA9IHRoaXMuZ2V0QmxvY2tQYXJlbnQoKS5wYXRoO1xuICAgIH1cblxuICAgIHZhciB1bmlxdWUgPSBvcHRzLnVuaXF1ZTtcbiAgICB2YXIga2luZCA9IG9wdHMua2luZCB8fCBcInZhclwiO1xuICAgIHZhciBibG9ja0hvaXN0ID0gb3B0cy5fYmxvY2tIb2lzdCA9PSBudWxsID8gMiA6IG9wdHMuX2Jsb2NrSG9pc3Q7XG5cbiAgICB2YXIgZGF0YUtleSA9IFwiZGVjbGFyYXRpb246XCIgKyBraW5kICsgXCI6XCIgKyBibG9ja0hvaXN0O1xuICAgIHZhciBkZWNsYXJQYXRoID0gIXVuaXF1ZSAmJiBwYXRoLmdldERhdGEoZGF0YUtleSk7XG5cbiAgICBpZiAoIWRlY2xhclBhdGgpIHtcbiAgICAgIHZhciBkZWNsYXIgPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oa2luZCwgW10pO1xuICAgICAgZGVjbGFyLl9nZW5lcmF0ZWQgPSB0cnVlO1xuICAgICAgZGVjbGFyLl9ibG9ja0hvaXN0ID0gYmxvY2tIb2lzdDtcblxuICAgICAgdGhpcy5odWIuZmlsZS5hdHRhY2hBdXhpbGlhcnlDb21tZW50KGRlY2xhcik7XG5cbiAgICAgIHZhciBfcGF0aCR1bnNoaWZ0Q29udGFpbmVyID0gcGF0aC51bnNoaWZ0Q29udGFpbmVyKFwiYm9keVwiLCBbZGVjbGFyXSk7XG5cbiAgICAgIGRlY2xhclBhdGggPSBfcGF0aCR1bnNoaWZ0Q29udGFpbmVyWzBdO1xuXG4gICAgICBpZiAoIXVuaXF1ZSkgcGF0aC5zZXREYXRhKGRhdGFLZXksIGRlY2xhclBhdGgpO1xuICAgIH1cblxuICAgIHZhciBkZWNsYXJhdG9yID0gdC52YXJpYWJsZURlY2xhcmF0b3Iob3B0cy5pZCwgb3B0cy5pbml0KTtcbiAgICBkZWNsYXJQYXRoLm5vZGUuZGVjbGFyYXRpb25zLnB1c2goZGVjbGFyYXRvcik7XG4gICAgdGhpcy5yZWdpc3RlckJpbmRpbmcoa2luZCwgZGVjbGFyUGF0aC5nZXQoXCJkZWNsYXJhdGlvbnNcIikucG9wKCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXYWxrIHVwIHRvIHRoZSB0b3Agb2YgdGhlIHNjb3BlIHRyZWUgYW5kIGdldCB0aGUgYFByb2dyYW1gLlxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuZ2V0UHJvZ3JhbVBhcmVudCA9IGZ1bmN0aW9uIGdldFByb2dyYW1QYXJlbnQoKSB7XG4gICAgdmFyIHNjb3BlID0gdGhpcztcbiAgICBkbyB7XG4gICAgICBpZiAoc2NvcGUucGF0aC5pc1Byb2dyYW0oKSkge1xuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoc2NvcGUgPSBzY29wZS5wYXJlbnQpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIldlIGNvdWxkbid0IGZpbmQgYSBGdW5jdGlvbiBvciBQcm9ncmFtLi4uXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXYWxrIHVwIHRoZSBzY29wZSB0cmVlIHVudGlsIHdlIGhpdCBlaXRoZXIgYSBGdW5jdGlvbiBvciByZWFjaCB0aGVcbiAgICogdmVyeSB0b3AgYW5kIGhpdCBQcm9ncmFtLlxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuZ2V0RnVuY3Rpb25QYXJlbnQgPSBmdW5jdGlvbiBnZXRGdW5jdGlvblBhcmVudCgpIHtcbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuICAgIGRvIHtcbiAgICAgIGlmIChzY29wZS5wYXRoLmlzRnVuY3Rpb25QYXJlbnQoKSkge1xuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoc2NvcGUgPSBzY29wZS5wYXJlbnQpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIldlIGNvdWxkbid0IGZpbmQgYSBGdW5jdGlvbiBvciBQcm9ncmFtLi4uXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXYWxrIHVwIHRoZSBzY29wZSB0cmVlIHVudGlsIHdlIGhpdCBlaXRoZXIgYSBCbG9ja1N0YXRlbWVudC9Mb29wL1Byb2dyYW0vRnVuY3Rpb24vU3dpdGNoIG9yIHJlYWNoIHRoZVxuICAgKiB2ZXJ5IHRvcCBhbmQgaGl0IFByb2dyYW0uXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5nZXRCbG9ja1BhcmVudCA9IGZ1bmN0aW9uIGdldEJsb2NrUGFyZW50KCkge1xuICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgZG8ge1xuICAgICAgaWYgKHNjb3BlLnBhdGguaXNCbG9ja1BhcmVudCgpKSB7XG4gICAgICAgIHJldHVybiBzY29wZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChzY29wZSA9IHNjb3BlLnBhcmVudCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiV2UgY291bGRuJ3QgZmluZCBhIEJsb2NrU3RhdGVtZW50LCBGb3IsIFN3aXRjaCwgRnVuY3Rpb24sIExvb3Agb3IgUHJvZ3JhbS4uLlwiKTtcbiAgfTtcblxuICAvKipcbiAgICogV2Fsa3MgdGhlIHNjb3BlIHRyZWUgYW5kIGdhdGhlcnMgKiphbGwqKiBiaW5kaW5ncy5cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmdldEFsbEJpbmRpbmdzID0gZnVuY3Rpb24gZ2V0QWxsQmluZGluZ3MoKSB7XG4gICAgdmFyIGlkcyA9IF9oZWxwZXJzT2JqZWN0MltcImRlZmF1bHRcIl0oKTtcblxuICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgZG8ge1xuICAgICAgX2xvZGFzaE9iamVjdERlZmF1bHRzMltcImRlZmF1bHRcIl0oaWRzLCBzY29wZS5iaW5kaW5ncyk7XG4gICAgICBzY29wZSA9IHNjb3BlLnBhcmVudDtcbiAgICB9IHdoaWxlIChzY29wZSk7XG5cbiAgICByZXR1cm4gaWRzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBXYWxrcyB0aGUgc2NvcGUgdHJlZSBhbmQgZ2F0aGVycyBhbGwgZGVjbGFyYXRpb25zIG9mIGBraW5kYC5cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmdldEFsbEJpbmRpbmdzT2ZLaW5kID0gZnVuY3Rpb24gZ2V0QWxsQmluZGluZ3NPZktpbmQoKSB7XG4gICAgdmFyIGlkcyA9IF9oZWxwZXJzT2JqZWN0MltcImRlZmF1bHRcIl0oKTtcblxuICAgIHZhciBfYXJyMTQgPSBhcmd1bWVudHM7XG4gICAgZm9yICh2YXIgX2kxNyA9IDA7IF9pMTcgPCBfYXJyMTQubGVuZ3RoOyBfaTE3KyspIHtcbiAgICAgIHZhciBraW5kID0gX2FycjE0W19pMTddO1xuICAgICAgdmFyIHNjb3BlID0gdGhpcztcbiAgICAgIGRvIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBzY29wZS5iaW5kaW5ncykge1xuICAgICAgICAgIHZhciBiaW5kaW5nID0gc2NvcGUuYmluZGluZ3NbbmFtZV07XG4gICAgICAgICAgaWYgKGJpbmRpbmcua2luZCA9PT0ga2luZCkgaWRzW25hbWVdID0gYmluZGluZztcbiAgICAgICAgfVxuICAgICAgICBzY29wZSA9IHNjb3BlLnBhcmVudDtcbiAgICAgIH0gd2hpbGUgKHNjb3BlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWRzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmJpbmRpbmdJZGVudGlmaWVyRXF1YWxzID0gZnVuY3Rpb24gYmluZGluZ0lkZW50aWZpZXJFcXVhbHMobmFtZSwgbm9kZSkge1xuICAgIHJldHVybiB0aGlzLmdldEJpbmRpbmdJZGVudGlmaWVyKG5hbWUpID09PSBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmdldEJpbmRpbmcgPSBmdW5jdGlvbiBnZXRCaW5kaW5nKG5hbWUpIHtcbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgZG8ge1xuICAgICAgdmFyIGJpbmRpbmcgPSBzY29wZS5nZXRPd25CaW5kaW5nKG5hbWUpO1xuICAgICAgaWYgKGJpbmRpbmcpIHJldHVybiBiaW5kaW5nO1xuICAgIH0gd2hpbGUgKHNjb3BlID0gc2NvcGUucGFyZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5nZXRPd25CaW5kaW5nID0gZnVuY3Rpb24gZ2V0T3duQmluZGluZyhuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbbmFtZV07XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuZ2V0QmluZGluZ0lkZW50aWZpZXIgPSBmdW5jdGlvbiBnZXRCaW5kaW5nSWRlbnRpZmllcihuYW1lKSB7XG4gICAgdmFyIGluZm8gPSB0aGlzLmdldEJpbmRpbmcobmFtZSk7XG4gICAgcmV0dXJuIGluZm8gJiYgaW5mby5pZGVudGlmaWVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU2NvcGUucHJvdG90eXBlLmdldE93bkJpbmRpbmdJZGVudGlmaWVyID0gZnVuY3Rpb24gZ2V0T3duQmluZGluZ0lkZW50aWZpZXIobmFtZSkge1xuICAgIHZhciBiaW5kaW5nID0gdGhpcy5iaW5kaW5nc1tuYW1lXTtcbiAgICByZXR1cm4gYmluZGluZyAmJiBiaW5kaW5nLmlkZW50aWZpZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUuaGFzT3duQmluZGluZyA9IGZ1bmN0aW9uIGhhc093bkJpbmRpbmcobmFtZSkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0T3duQmluZGluZyhuYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5oYXNCaW5kaW5nID0gZnVuY3Rpb24gaGFzQmluZGluZyhuYW1lLCBub0dsb2JhbHMpIHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5oYXNPd25CaW5kaW5nKG5hbWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodGhpcy5wYXJlbnRIYXNCaW5kaW5nKG5hbWUsIG5vR2xvYmFscykpIHJldHVybiB0cnVlO1xuICAgIGlmICh0aGlzLmhhc1VpZChuYW1lKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKCFub0dsb2JhbHMgJiYgX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlczJbXCJkZWZhdWx0XCJdKFNjb3BlLmdsb2JhbHMsIG5hbWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIW5vR2xvYmFscyAmJiBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMltcImRlZmF1bHRcIl0oU2NvcGUuY29udGV4dFZhcmlhYmxlcywgbmFtZSkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5wYXJlbnRIYXNCaW5kaW5nID0gZnVuY3Rpb24gcGFyZW50SGFzQmluZGluZyhuYW1lLCBub0dsb2JhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuaGFzQmluZGluZyhuYW1lLCBub0dsb2JhbHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNb3ZlIGEgYmluZGluZyBvZiBgbmFtZWAgdG8gYW5vdGhlciBgc2NvcGVgLlxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUubW92ZUJpbmRpbmdUbyA9IGZ1bmN0aW9uIG1vdmVCaW5kaW5nVG8obmFtZSwgc2NvcGUpIHtcbiAgICB2YXIgaW5mbyA9IHRoaXMuZ2V0QmluZGluZyhuYW1lKTtcbiAgICBpZiAoaW5mbykge1xuICAgICAgaW5mby5zY29wZS5yZW1vdmVPd25CaW5kaW5nKG5hbWUpO1xuICAgICAgaW5mby5zY29wZSA9IHNjb3BlO1xuICAgICAgc2NvcGUuYmluZGluZ3NbbmFtZV0gPSBpbmZvO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFNjb3BlLnByb3RvdHlwZS5yZW1vdmVPd25CaW5kaW5nID0gZnVuY3Rpb24gcmVtb3ZlT3duQmluZGluZyhuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuYmluZGluZ3NbbmFtZV07XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBTY29wZS5wcm90b3R5cGUucmVtb3ZlQmluZGluZyA9IGZ1bmN0aW9uIHJlbW92ZUJpbmRpbmcobmFtZSkge1xuICAgIC8vIGNsZWFyIGxpdGVyYWwgYmluZGluZ1xuICAgIHZhciBpbmZvID0gdGhpcy5nZXRCaW5kaW5nKG5hbWUpO1xuICAgIGlmIChpbmZvKSB7XG4gICAgICBpbmZvLnNjb3BlLnJlbW92ZU93bkJpbmRpbmcobmFtZSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgdWlkcyB3aXRoIHRoaXMgbmFtZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvMjEwMVxuICAgIHZhciBzY29wZSA9IHRoaXM7XG4gICAgZG8ge1xuICAgICAgaWYgKHNjb3BlLnVpZHNbbmFtZV0pIHtcbiAgICAgICAgc2NvcGUudWlkc1tuYW1lXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKHNjb3BlID0gc2NvcGUucGFyZW50KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU2NvcGUsIG51bGwsIFt7XG4gICAga2V5OiBcImdsb2JhbHNcIixcbiAgICB2YWx1ZTogX2xvZGFzaEFycmF5RmxhdHRlbjJbXCJkZWZhdWx0XCJdKFtfZ2xvYmFsczJbXCJkZWZhdWx0XCJdLmJ1aWx0aW4sIF9nbG9iYWxzMltcImRlZmF1bHRcIl0uYnJvd3NlciwgX2dsb2JhbHMyW1wiZGVmYXVsdFwiXS5ub2RlXS5tYXAoT2JqZWN0LmtleXMpKSxcblxuICAgIC8qKlxuICAgICAqIFZhcmlhYmxlcyBhdmFpbGFibGUgaW4gY3VycmVudCBjb250ZXh0LlxuICAgICAqL1xuXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRleHRWYXJpYWJsZXNcIixcbiAgICB2YWx1ZTogW1wiYXJndW1lbnRzXCIsIFwidW5kZWZpbmVkXCIsIFwiSW5maW5pdHlcIiwgXCJOYU5cIl0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XSk7XG5cbiAgcmV0dXJuIFNjb3BlO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTY29wZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
