/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersMemoiseDecorators, _helpersMemoiseDecorators2, _helpersReplaceSupers, _helpersReplaceSupers2, _helpersNameMethod, nameMethod, _helpersDefineMap, defineMap, _messages, messages, _util, util, _types, t, PROPERTY_COLLISION_METHOD_NAME, collectPropertyReferencesVisitor, verifyConstructorVisitor, ClassTransformer;

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
      exports.__esModule = true;_helpersMemoiseDecorators = require("../../../helpers/memoise-decorators");
      _helpersMemoiseDecorators2 = _interopRequireDefault(_helpersMemoiseDecorators);
      _helpersReplaceSupers = require("../../../helpers/replace-supers");
      _helpersReplaceSupers2 = _interopRequireDefault(_helpersReplaceSupers);
      _helpersNameMethod = require("../../../helpers/name-method");
      nameMethod = _interopRequireWildcard(_helpersNameMethod);
      _helpersDefineMap = require("../../../helpers/define-map");
      defineMap = _interopRequireWildcard(_helpersDefineMap);
      _messages = require("../../../../messages");
      messages = _interopRequireWildcard(_messages);
      _util = require("../../../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../../../types");
      t = _interopRequireWildcard(_types);
      PROPERTY_COLLISION_METHOD_NAME = "__initializeProperties";
      collectPropertyReferencesVisitor = {

        /**
         * [Please add a description.]
         */

        Identifier: {
          enter: function enter(node, parent, scope, state) {
            if (this.parentPath.isClassProperty({ key: node })) {
              return;
            }

            if (this.isReferenced() && scope.getBinding(node.name) === state.scope.getBinding(node.name)) {
              state.references[node.name] = true;
            }
          }
        }
      };
      verifyConstructorVisitor = {

        /**
         * [Please add a description.]
         */

        MethodDefinition: function MethodDefinition() {
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        Property: function Property(node) {
          if (node.method) this.skip();
        },

        /**
         * [Please add a description.]
         */

        CallExpression: {
          exit: function exit(node, parent, scope, state) {
            if (this.get("callee").isSuper()) {
              state.hasBareSuper = true;
              state.bareSuper = this;

              if (!state.isDerived) {
                throw this.errorWithNode("super call is only allowed in derived constructor");
              }
            }
          }
        },

        /**
         * [Please add a description.]
         */

        "FunctionDeclaration|FunctionExpression": function FunctionDeclarationFunctionExpression() {
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        ThisExpression: function ThisExpression(node, parent, scope, state) {
          if (state.isDerived && !state.hasBareSuper) {
            if (this.inShadow()) {
              // https://github.com/babel/babel/issues/1920
              var thisAlias = state.constructorPath.getData("this");

              if (!thisAlias) {
                thisAlias = state.constructorPath.setData("this", state.constructorPath.scope.generateUidIdentifier("this"));
              }

              return thisAlias;
            } else {
              throw this.errorWithNode("'this' is not allowed before super()");
            }
          }
        },

        /**
         * [Please add a description.]
         */

        Super: function Super(node, parent, scope, state) {
          if (state.isDerived && !state.hasBareSuper && !this.parentPath.isCallExpression({ callee: node })) {
            throw this.errorWithNode("'super.*' is not allowed before super()");
          }
        }
      };

      ClassTransformer = function () {
        function ClassTransformer(path, file) {
          _classCallCheck(this, ClassTransformer);

          this.parent = path.parent;
          this.scope = path.scope;
          this.node = path.node;
          this.path = path;
          this.file = file;

          this.clearDescriptors();

          this.instancePropBody = [];
          this.instancePropRefs = {};
          this.staticPropBody = [];
          this.body = [];

          this.pushedConstructor = false;
          this.pushedInherits = false;
          this.hasDecorators = false;
          this.isLoose = false;

          // class id
          this.classId = this.node.id;

          // this is the name of the binding that will **always** reference the class we've constructed
          this.classRef = this.node.id || this.scope.generateUidIdentifier("class");

          // this is a direct reference to the class we're building, class decorators can shadow the classRef
          this.directRef = null;

          this.superName = this.node.superClass || t.identifier("Function");
          this.isDerived = !!this.node.superClass;
        }

        /**
         * [Please add a description.]
         * @returns {Array}
         */

        ClassTransformer.prototype.run = function run() {
          var superName = this.superName;
          var file = this.file;

          //

          var body = this.body;

          //

          var constructorBody = this.constructorBody = t.blockStatement([]);
          this.constructor = this.buildConstructor();

          //

          var closureParams = [];
          var closureArgs = [];

          //
          if (this.isDerived) {
            closureArgs.push(superName);

            superName = this.scope.generateUidIdentifierBasedOnNode(superName);
            closureParams.push(superName);

            this.superName = superName;
          }

          //
          var decorators = this.node.decorators;
          if (decorators) {
            // this is so super calls and the decorators have access to the raw function
            this.directRef = this.scope.generateUidIdentifier(this.classRef);
          } else {
            this.directRef = this.classRef;
          }

          //
          this.buildBody();

          // make sure this class isn't directly called
          constructorBody.body.unshift(t.expressionStatement(t.callExpression(file.addHelper("class-call-check"), [t.thisExpression(), this.directRef])));

          //
          this.pushDecorators();

          body = body.concat(this.staticPropBody);

          if (this.classId) {
            // named class with only a constructor
            if (body.length === 1) return t.toExpression(body[0]);
          }

          //
          body.push(t.returnStatement(this.classRef));

          var container = t.functionExpression(null, closureParams, t.blockStatement(body));
          container.shadow = true;
          return t.callExpression(container, closureArgs);
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.buildConstructor = function buildConstructor() {
          var func = t.functionDeclaration(this.classRef, [], this.constructorBody);
          t.inherits(func, this.node);
          return func;
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.pushToMap = function pushToMap(node, enumerable) {
          var kind = arguments.length <= 2 || arguments[2] === undefined ? "value" : arguments[2];

          var mutatorMap;
          if (node["static"]) {
            this.hasStaticDescriptors = true;
            mutatorMap = this.staticMutatorMap;
          } else {
            this.hasInstanceDescriptors = true;
            mutatorMap = this.instanceMutatorMap;
          }

          var map = defineMap.push(mutatorMap, node, kind, this.file);

          if (enumerable) {
            map.enumerable = t.literal(true);
          }

          if (map.decorators) {
            this.hasDecorators = true;
          }
        };

        /**
         * [Please add a description.]
         * https://www.youtube.com/watch?v=fWNaR-rxAic
         */

        ClassTransformer.prototype.constructorMeMaybe = function constructorMeMaybe() {
          var hasConstructor = false;
          var paths = this.path.get("body.body");
          var _arr = paths;
          for (var _i = 0; _i < _arr.length; _i++) {
            var path = _arr[_i];
            hasConstructor = path.equals("kind", "constructor");
            if (hasConstructor) break;
          }
          if (hasConstructor) return;

          var constructor;
          if (this.isDerived) {
            constructor = util.template("class-derived-default-constructor");
          } else {
            constructor = t.functionExpression(null, [], t.blockStatement([]));
          }

          this.path.get("body").unshiftContainer("body", t.methodDefinition(t.identifier("constructor"), constructor, "constructor"));
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.buildBody = function buildBody() {
          this.constructorMeMaybe();
          this.pushBody();
          this.placePropertyInitializers();

          if (this.userConstructor) {
            var constructorBody = this.constructorBody;
            constructorBody.body = constructorBody.body.concat(this.userConstructor.body.body);
            t.inherits(this.constructor, this.userConstructor);
            t.inherits(constructorBody, this.userConstructor.body);
          }

          this.pushDescriptors();
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.pushBody = function pushBody() {
          var classBodyPaths = this.path.get("body.body");

          var _arr2 = classBodyPaths;
          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var path = _arr2[_i2];
            var node = path.node;

            if (node.decorators) {
              _helpersMemoiseDecorators2["default"](node.decorators, this.scope);
            }

            if (t.isMethodDefinition(node)) {
              var isConstructor = node.kind === "constructor";
              if (isConstructor) this.verifyConstructor(path);

              var replaceSupers = new _helpersReplaceSupers2["default"]({
                methodPath: path,
                methodNode: node,
                objectRef: this.directRef,
                superRef: this.superName,
                isStatic: node["static"],
                isLoose: this.isLoose,
                scope: this.scope,
                file: this.file
              }, true);

              replaceSupers.replace();

              if (isConstructor) {
                this.pushConstructor(node, path);
              } else {
                this.pushMethod(node, path);
              }
            } else if (t.isClassProperty(node)) {
              this.pushProperty(node, path);
            }
          }
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.clearDescriptors = function clearDescriptors() {
          this.hasInstanceDescriptors = false;
          this.hasStaticDescriptors = false;

          this.instanceMutatorMap = {};
          this.staticMutatorMap = {};
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.pushDescriptors = function pushDescriptors() {
          this.pushInherits();

          var body = this.body;

          var instanceProps;
          var staticProps;
          var classHelper = "create-class";
          if (this.hasDecorators) classHelper = "create-decorated-class";

          if (this.hasInstanceDescriptors) {
            instanceProps = defineMap.toClassObject(this.instanceMutatorMap);
          }

          if (this.hasStaticDescriptors) {
            staticProps = defineMap.toClassObject(this.staticMutatorMap);
          }

          if (instanceProps || staticProps) {
            if (instanceProps) instanceProps = defineMap.toComputedObjectFromClass(instanceProps);
            if (staticProps) staticProps = defineMap.toComputedObjectFromClass(staticProps);

            var nullNode = t.literal(null);

            // (Constructor, instanceDescriptors, staticDescriptors, instanceInitializers, staticInitializers)
            var args = [this.classRef, nullNode, nullNode, nullNode, nullNode];

            if (instanceProps) args[1] = instanceProps;
            if (staticProps) args[2] = staticProps;

            if (this.instanceInitializersId) {
              args[3] = this.instanceInitializersId;
              body.unshift(this.buildObjectAssignment(this.instanceInitializersId));
            }

            if (this.staticInitializersId) {
              args[4] = this.staticInitializersId;
              body.unshift(this.buildObjectAssignment(this.staticInitializersId));
            }

            var lastNonNullIndex = 0;
            for (var i = 0; i < args.length; i++) {
              if (args[i] !== nullNode) lastNonNullIndex = i;
            }
            args = args.slice(0, lastNonNullIndex + 1);

            body.push(t.expressionStatement(t.callExpression(this.file.addHelper(classHelper), args)));
          }

          this.clearDescriptors();
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.buildObjectAssignment = function buildObjectAssignment(id) {
          return t.variableDeclaration("var", [t.variableDeclarator(id, t.objectExpression([]))]);
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.placePropertyInitializers = function placePropertyInitializers() {
          var body = this.instancePropBody;
          if (!body.length) return;

          if (this.hasPropertyCollision()) {
            var call = t.expressionStatement(t.callExpression(t.memberExpression(t.thisExpression(), t.identifier(PROPERTY_COLLISION_METHOD_NAME)), []));

            this.pushMethod(t.methodDefinition(t.identifier(PROPERTY_COLLISION_METHOD_NAME), t.functionExpression(null, [], t.blockStatement(body))), null, true);

            if (this.isDerived) {
              this.bareSuper.insertAfter(call);
            } else {
              this.constructorBody.body.unshift(call);
            }
          } else {
            if (this.isDerived) {
              this.bareSuper.insertAfter(body);
            } else {
              this.constructorBody.body = body.concat(this.constructorBody.body);
            }
          }
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.hasPropertyCollision = function hasPropertyCollision() {
          if (this.userConstructorPath) {
            for (var name in this.instancePropRefs) {
              if (this.userConstructorPath.scope.hasOwnBinding(name)) {
                return true;
              }
            }
          }

          return false;
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.verifyConstructor = function verifyConstructor(path) {
          var state = {
            constructorPath: path.get("value"),
            hasBareSuper: false,
            bareSuper: null,
            isDerived: this.isDerived,
            file: this.file
          };

          state.constructorPath.traverse(verifyConstructorVisitor, state);

          var thisAlias = state.constructorPath.getData("this");
          if (thisAlias && state.bareSuper) {
            state.bareSuper.insertAfter(t.variableDeclaration("var", [t.variableDeclarator(thisAlias, t.thisExpression())]));
          }

          this.bareSuper = state.bareSuper;

          if (!state.hasBareSuper && this.isDerived) {
            throw path.errorWithNode("Derived constructor must call super()");
          }
        };

        /**
         * Push a method to its respective mutatorMap.
         */

        ClassTransformer.prototype.pushMethod = function pushMethod(node, path, allowedIllegal) {
          if (!allowedIllegal && t.isLiteral(t.toComputedKey(node), { value: PROPERTY_COLLISION_METHOD_NAME })) {
            throw this.file.errorWithNode(node, messages.get("illegalMethodName", PROPERTY_COLLISION_METHOD_NAME));
          }

          if (node.kind === "method") {
            nameMethod.property(node, this.file, path ? path.get("value").scope : this.scope);
            if (this._processMethod(node)) return;
          }

          this.pushToMap(node);
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype._processMethod = function _processMethod() {
          return false;
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype.pushProperty = function pushProperty(node, path) {
          path.traverse(collectPropertyReferencesVisitor, {
            references: this.instancePropRefs,
            scope: this.scope
          });

          if (node.decorators) {
            var body = [];
            if (node.value) {
              body.push(t.returnStatement(node.value));
              node.value = t.functionExpression(null, [], t.blockStatement(body));
            } else {
              node.value = t.literal(null);
            }
            this.pushToMap(node, true, "initializer");

            var initializers;
            var target;
            if (node["static"]) {
              initializers = this.staticInitializersId = this.staticInitializersId || this.scope.generateUidIdentifier("staticInitializers");
              body = this.staticPropBody;
              target = this.classRef;
            } else {
              initializers = this.instanceInitializersId = this.instanceInitializersId || this.scope.generateUidIdentifier("instanceInitializers");
              body = this.instancePropBody;
              target = t.thisExpression();
            }

            body.push(t.expressionStatement(t.callExpression(this.file.addHelper("define-decorated-property-descriptor"), [target, t.literal(node.key.name), initializers])));
          } else {
            if (!node.value && !node.decorators) return;

            if (node["static"]) {
              // can just be added to the static map
              this.pushToMap(node, true);
            } else if (node.value) {
              // add this to the instancePropBody which will be added after the super call in a derived constructor
              // or at the start of a constructor for a non-derived constructor
              this.instancePropBody.push(t.expressionStatement(t.assignmentExpression("=", t.memberExpression(t.thisExpression(), node.key), node.value)));
            }
          }
        };

        /**
         * Replace the constructor body of our class.
         */

        ClassTransformer.prototype.pushConstructor = function pushConstructor(method, path) {
          // https://github.com/babel/babel/issues/1077
          var fnPath = path.get("value");
          if (fnPath.scope.hasOwnBinding(this.classRef.name)) {
            fnPath.scope.rename(this.classRef.name);
          }

          var construct = this.constructor;
          var fn = method.value;

          this.userConstructorPath = fnPath;
          this.userConstructor = fn;
          this.hasConstructor = true;

          t.inheritsComments(construct, method);

          construct._ignoreUserWhitespace = true;
          construct.params = fn.params;

          t.inherits(construct.body, fn.body);

          // push constructor to body
          this._pushConstructor();
        };

        /**
         * [Please add a description.]
         */

        ClassTransformer.prototype._pushConstructor = function _pushConstructor() {
          if (this.pushedConstructor) return;
          this.pushedConstructor = true;

          // we haven't pushed any descriptors yet
          if (this.hasInstanceDescriptors || this.hasStaticDescriptors) {
            this.pushDescriptors();
          }

          this.body.push(this.constructor);

          this.pushInherits();
        };

        /**
         * Push inherits helper to body.
         */

        ClassTransformer.prototype.pushInherits = function pushInherits() {
          if (!this.isDerived || this.pushedInherits) return;

          // Unshift to ensure that the constructor inheritance is set up before
          // any properties can be assigned to the prototype.
          this.pushedInherits = true;
          this.body.unshift(t.expressionStatement(t.callExpression(this.file.addHelper("inherits"), [this.classRef, this.superName])));
        };

        /**
         * Push decorators to body.
         */

        ClassTransformer.prototype.pushDecorators = function pushDecorators() {
          var decorators = this.node.decorators;
          if (!decorators) return;

          this.body.push(t.variableDeclaration("var", [t.variableDeclarator(this.directRef, this.classRef)]));

          // reverse the decorators so we execute them in the right order
          decorators = decorators.reverse();

          var _arr3 = decorators;
          for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
            var decorator = _arr3[_i3];
            var decoratorNode = util.template("class-decorator", {
              DECORATOR: decorator.expression,
              CLASS_REF: this.classRef
            }, true);
            decoratorNode.expression._ignoreModulesRemap = true;
            this.body.push(decoratorNode);
          }
        };

        return ClassTransformer;
      }();

      exports["default"] = ClassTransformer;
      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9jbGFzc2VzL3ZhbmlsbGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7OztBQVhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQWFJLDRCQUE0QixRQUFRLHFDQUFSO0FBRTVCLG1DQUE2Qix1QkFBdUIseUJBQXZCO0FBRTdCLDhCQUF3QixRQUFRLGlDQUFSO0FBRXhCLCtCQUF5Qix1QkFBdUIscUJBQXZCO0FB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QU5nRTtTQUF4Qjs7Ozs7O0FBaGZSLHdCQTZmbEMsQ0FBaUIsU0FBakIsQ0FBMkIsY0FBM0IsR0FBNEMsU0FBUyxjQUFULEdBQTBCO0FBQ3BFLGNBQUksYUFBYSxLQUFLLElBQUwsQ0FBVSxVQUFWLENBRG1EO0FBRXBFLGNBQUksQ0FBQyxVQUFELEVBQWEsT0FBakI7O0FBRUEsZUFBSyxJQUFMLENBQVUsSUFBVixDQUFlLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBQyxFQUFFLGtCQUFGLENBQXFCLEtBQUssU0FBTCxFQUFnQixLQUFLLFFBQUwsQ0FBdEMsQ0FBN0IsQ0FBZjs7O0FBSm9FLG9CQU9wRSxHQUFhLFdBQVcsT0FBWCxFQUFiLENBUG9FOztBQVNwRSxjQUFJLFFBQVEsVUFBUixDQVRnRTtBQVVwRSxlQUFLLElBQUksTUFBTSxDQUFOLEVBQVMsTUFBTSxNQUFNLE1BQU4sRUFBYyxLQUF0QyxFQUE2QztBQUMzQyxnQkFBSSxZQUFZLE1BQU0sR0FBTixDQUFaLENBRHVDO0FBRTNDLGdCQUFJLGdCQUFnQixLQUFLLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQztBQUNuRCx5QkFBVyxVQUFVLFVBQVY7QUFDWCx5QkFBVyxLQUFLLFFBQUw7YUFGTyxFQUdqQixJQUhpQixDQUFoQixDQUZ1QztBQU0zQywwQkFBYyxVQUFkLENBQXlCLG1CQUF6QixHQUErQyxJQUEvQyxDQU4yQztBQU8zQyxpQkFBSyxJQUFMLENBQVUsSUFBVixDQUFlLGFBQWYsRUFQMkM7V0FBN0M7U0FWMEMsQ0E3ZlY7O0FBa2hCbEMsZUFBTyxnQkFBUCxDQWxoQmtDO09BQVo7O0FBcWhCeEIsY0FBUSxTQUFSLElBQXFCLGdCQUFyQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L2NsYXNzZXMvdmFuaWxsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfaGVscGVyc01lbW9pc2VEZWNvcmF0b3JzID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvbWVtb2lzZS1kZWNvcmF0b3JzXCIpO1xuXG52YXIgX2hlbHBlcnNNZW1vaXNlRGVjb3JhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTWVtb2lzZURlY29yYXRvcnMpO1xuXG52YXIgX2hlbHBlcnNSZXBsYWNlU3VwZXJzID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvcmVwbGFjZS1zdXBlcnNcIik7XG5cbnZhciBfaGVscGVyc1JlcGxhY2VTdXBlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc1JlcGxhY2VTdXBlcnMpO1xuXG52YXIgX2hlbHBlcnNOYW1lTWV0aG9kID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvbmFtZS1tZXRob2RcIik7XG5cbnZhciBuYW1lTWV0aG9kID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnNOYW1lTWV0aG9kKTtcblxudmFyIF9oZWxwZXJzRGVmaW5lTWFwID0gcmVxdWlyZShcIi4uLy4uLy4uL2hlbHBlcnMvZGVmaW5lLW1hcFwiKTtcblxudmFyIGRlZmluZU1hcCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzRGVmaW5lTWFwKTtcblxudmFyIF9tZXNzYWdlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9tZXNzYWdlc1wiKTtcblxudmFyIG1lc3NhZ2VzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX21lc3NhZ2VzKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3V0aWxcIik7XG5cbnZhciB1dGlsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWwpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBQUk9QRVJUWV9DT0xMSVNJT05fTUVUSE9EX05BTUUgPSBcIl9faW5pdGlhbGl6ZVByb3BlcnRpZXNcIjtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgY29sbGVjdFByb3BlcnR5UmVmZXJlbmNlc1Zpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBJZGVudGlmaWVyOiB7XG4gICAgZW50ZXI6IGZ1bmN0aW9uIGVudGVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5wYXJlbnRQYXRoLmlzQ2xhc3NQcm9wZXJ0eSh7IGtleTogbm9kZSB9KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzUmVmZXJlbmNlZCgpICYmIHNjb3BlLmdldEJpbmRpbmcobm9kZS5uYW1lKSA9PT0gc3RhdGUuc2NvcGUuZ2V0QmluZGluZyhub2RlLm5hbWUpKSB7XG4gICAgICAgIHN0YXRlLnJlZmVyZW5jZXNbbm9kZS5uYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2ZXJpZnlDb25zdHJ1Y3RvclZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBNZXRob2REZWZpbml0aW9uOiBmdW5jdGlvbiBNZXRob2REZWZpbml0aW9uKCkge1xuICAgIHRoaXMuc2tpcCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUHJvcGVydHk6IGZ1bmN0aW9uIFByb3BlcnR5KG5vZGUpIHtcbiAgICBpZiAobm9kZS5tZXRob2QpIHRoaXMuc2tpcCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2FsbEV4cHJlc3Npb246IHtcbiAgICBleGl0OiBmdW5jdGlvbiBleGl0KG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5nZXQoXCJjYWxsZWVcIikuaXNTdXBlcigpKSB7XG4gICAgICAgIHN0YXRlLmhhc0JhcmVTdXBlciA9IHRydWU7XG4gICAgICAgIHN0YXRlLmJhcmVTdXBlciA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFzdGF0ZS5pc0Rlcml2ZWQpIHtcbiAgICAgICAgICB0aHJvdyB0aGlzLmVycm9yV2l0aE5vZGUoXCJzdXBlciBjYWxsIGlzIG9ubHkgYWxsb3dlZCBpbiBkZXJpdmVkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgXCJGdW5jdGlvbkRlY2xhcmF0aW9ufEZ1bmN0aW9uRXhwcmVzc2lvblwiOiBmdW5jdGlvbiBGdW5jdGlvbkRlY2xhcmF0aW9uRnVuY3Rpb25FeHByZXNzaW9uKCkge1xuICAgIHRoaXMuc2tpcCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgVGhpc0V4cHJlc3Npb246IGZ1bmN0aW9uIFRoaXNFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmlzRGVyaXZlZCAmJiAhc3RhdGUuaGFzQmFyZVN1cGVyKSB7XG4gICAgICBpZiAodGhpcy5pblNoYWRvdygpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvMTkyMFxuICAgICAgICB2YXIgdGhpc0FsaWFzID0gc3RhdGUuY29uc3RydWN0b3JQYXRoLmdldERhdGEoXCJ0aGlzXCIpO1xuXG4gICAgICAgIGlmICghdGhpc0FsaWFzKSB7XG4gICAgICAgICAgdGhpc0FsaWFzID0gc3RhdGUuY29uc3RydWN0b3JQYXRoLnNldERhdGEoXCJ0aGlzXCIsIHN0YXRlLmNvbnN0cnVjdG9yUGF0aC5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJ0aGlzXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzQWxpYXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyB0aGlzLmVycm9yV2l0aE5vZGUoXCIndGhpcycgaXMgbm90IGFsbG93ZWQgYmVmb3JlIHN1cGVyKClcIik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgU3VwZXI6IGZ1bmN0aW9uIFN1cGVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmlzRGVyaXZlZCAmJiAhc3RhdGUuaGFzQmFyZVN1cGVyICYmICF0aGlzLnBhcmVudFBhdGguaXNDYWxsRXhwcmVzc2lvbih7IGNhbGxlZTogbm9kZSB9KSkge1xuICAgICAgdGhyb3cgdGhpcy5lcnJvcldpdGhOb2RlKFwiJ3N1cGVyLionIGlzIG5vdCBhbGxvd2VkIGJlZm9yZSBzdXBlcigpXCIpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgQ2xhc3NUcmFuc2Zvcm1lciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENsYXNzVHJhbnNmb3JtZXIocGF0aCwgZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGFzc1RyYW5zZm9ybWVyKTtcblxuICAgIHRoaXMucGFyZW50ID0gcGF0aC5wYXJlbnQ7XG4gICAgdGhpcy5zY29wZSA9IHBhdGguc2NvcGU7XG4gICAgdGhpcy5ub2RlID0gcGF0aC5ub2RlO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcblxuICAgIHRoaXMuY2xlYXJEZXNjcmlwdG9ycygpO1xuXG4gICAgdGhpcy5pbnN0YW5jZVByb3BCb2R5ID0gW107XG4gICAgdGhpcy5pbnN0YW5jZVByb3BSZWZzID0ge307XG4gICAgdGhpcy5zdGF0aWNQcm9wQm9keSA9IFtdO1xuICAgIHRoaXMuYm9keSA9IFtdO1xuXG4gICAgdGhpcy5wdXNoZWRDb25zdHJ1Y3RvciA9IGZhbHNlO1xuICAgIHRoaXMucHVzaGVkSW5oZXJpdHMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0RlY29yYXRvcnMgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9vc2UgPSBmYWxzZTtcblxuICAgIC8vIGNsYXNzIGlkXG4gICAgdGhpcy5jbGFzc0lkID0gdGhpcy5ub2RlLmlkO1xuXG4gICAgLy8gdGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUgYmluZGluZyB0aGF0IHdpbGwgKiphbHdheXMqKiByZWZlcmVuY2UgdGhlIGNsYXNzIHdlJ3ZlIGNvbnN0cnVjdGVkXG4gICAgdGhpcy5jbGFzc1JlZiA9IHRoaXMubm9kZS5pZCB8fCB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcImNsYXNzXCIpO1xuXG4gICAgLy8gdGhpcyBpcyBhIGRpcmVjdCByZWZlcmVuY2UgdG8gdGhlIGNsYXNzIHdlJ3JlIGJ1aWxkaW5nLCBjbGFzcyBkZWNvcmF0b3JzIGNhbiBzaGFkb3cgdGhlIGNsYXNzUmVmXG4gICAgdGhpcy5kaXJlY3RSZWYgPSBudWxsO1xuXG4gICAgdGhpcy5zdXBlck5hbWUgPSB0aGlzLm5vZGUuc3VwZXJDbGFzcyB8fCB0LmlkZW50aWZpZXIoXCJGdW5jdGlvblwiKTtcbiAgICB0aGlzLmlzRGVyaXZlZCA9ICEhdGhpcy5ub2RlLnN1cGVyQ2xhc3M7XG4gIH1cblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICovXG5cbiAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBzdXBlck5hbWUgPSB0aGlzLnN1cGVyTmFtZTtcbiAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZTtcblxuICAgIC8vXG5cbiAgICB2YXIgYm9keSA9IHRoaXMuYm9keTtcblxuICAgIC8vXG5cbiAgICB2YXIgY29uc3RydWN0b3JCb2R5ID0gdGhpcy5jb25zdHJ1Y3RvckJvZHkgPSB0LmJsb2NrU3RhdGVtZW50KFtdKTtcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gdGhpcy5idWlsZENvbnN0cnVjdG9yKCk7XG5cbiAgICAvL1xuXG4gICAgdmFyIGNsb3N1cmVQYXJhbXMgPSBbXTtcbiAgICB2YXIgY2xvc3VyZUFyZ3MgPSBbXTtcblxuICAgIC8vXG4gICAgaWYgKHRoaXMuaXNEZXJpdmVkKSB7XG4gICAgICBjbG9zdXJlQXJncy5wdXNoKHN1cGVyTmFtZSk7XG5cbiAgICAgIHN1cGVyTmFtZSA9IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyQmFzZWRPbk5vZGUoc3VwZXJOYW1lKTtcbiAgICAgIGNsb3N1cmVQYXJhbXMucHVzaChzdXBlck5hbWUpO1xuXG4gICAgICB0aGlzLnN1cGVyTmFtZSA9IHN1cGVyTmFtZTtcbiAgICB9XG5cbiAgICAvL1xuICAgIHZhciBkZWNvcmF0b3JzID0gdGhpcy5ub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIC8vIHRoaXMgaXMgc28gc3VwZXIgY2FsbHMgYW5kIHRoZSBkZWNvcmF0b3JzIGhhdmUgYWNjZXNzIHRvIHRoZSByYXcgZnVuY3Rpb25cbiAgICAgIHRoaXMuZGlyZWN0UmVmID0gdGhpcy5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIodGhpcy5jbGFzc1JlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlyZWN0UmVmID0gdGhpcy5jbGFzc1JlZjtcbiAgICB9XG5cbiAgICAvL1xuICAgIHRoaXMuYnVpbGRCb2R5KCk7XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhpcyBjbGFzcyBpc24ndCBkaXJlY3RseSBjYWxsZWRcbiAgICBjb25zdHJ1Y3RvckJvZHkuYm9keS51bnNoaWZ0KHQuZXhwcmVzc2lvblN0YXRlbWVudCh0LmNhbGxFeHByZXNzaW9uKGZpbGUuYWRkSGVscGVyKFwiY2xhc3MtY2FsbC1jaGVja1wiKSwgW3QudGhpc0V4cHJlc3Npb24oKSwgdGhpcy5kaXJlY3RSZWZdKSkpO1xuXG4gICAgLy9cbiAgICB0aGlzLnB1c2hEZWNvcmF0b3JzKCk7XG5cbiAgICBib2R5ID0gYm9keS5jb25jYXQodGhpcy5zdGF0aWNQcm9wQm9keSk7XG5cbiAgICBpZiAodGhpcy5jbGFzc0lkKSB7XG4gICAgICAvLyBuYW1lZCBjbGFzcyB3aXRoIG9ubHkgYSBjb25zdHJ1Y3RvclxuICAgICAgaWYgKGJvZHkubGVuZ3RoID09PSAxKSByZXR1cm4gdC50b0V4cHJlc3Npb24oYm9keVswXSk7XG4gICAgfVxuXG4gICAgLy9cbiAgICBib2R5LnB1c2godC5yZXR1cm5TdGF0ZW1lbnQodGhpcy5jbGFzc1JlZikpO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHQuZnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIGNsb3N1cmVQYXJhbXMsIHQuYmxvY2tTdGF0ZW1lbnQoYm9keSkpO1xuICAgIGNvbnRhaW5lci5zaGFkb3cgPSB0cnVlO1xuICAgIHJldHVybiB0LmNhbGxFeHByZXNzaW9uKGNvbnRhaW5lciwgY2xvc3VyZUFyZ3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuYnVpbGRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIGJ1aWxkQ29uc3RydWN0b3IoKSB7XG4gICAgdmFyIGZ1bmMgPSB0LmZ1bmN0aW9uRGVjbGFyYXRpb24odGhpcy5jbGFzc1JlZiwgW10sIHRoaXMuY29uc3RydWN0b3JCb2R5KTtcbiAgICB0LmluaGVyaXRzKGZ1bmMsIHRoaXMubm9kZSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5wdXNoVG9NYXAgPSBmdW5jdGlvbiBwdXNoVG9NYXAobm9kZSwgZW51bWVyYWJsZSkge1xuICAgIHZhciBraW5kID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gXCJ2YWx1ZVwiIDogYXJndW1lbnRzWzJdO1xuXG4gICAgdmFyIG11dGF0b3JNYXA7XG4gICAgaWYgKG5vZGVbXCJzdGF0aWNcIl0pIHtcbiAgICAgIHRoaXMuaGFzU3RhdGljRGVzY3JpcHRvcnMgPSB0cnVlO1xuICAgICAgbXV0YXRvck1hcCA9IHRoaXMuc3RhdGljTXV0YXRvck1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXNJbnN0YW5jZURlc2NyaXB0b3JzID0gdHJ1ZTtcbiAgICAgIG11dGF0b3JNYXAgPSB0aGlzLmluc3RhbmNlTXV0YXRvck1hcDtcbiAgICB9XG5cbiAgICB2YXIgbWFwID0gZGVmaW5lTWFwLnB1c2gobXV0YXRvck1hcCwgbm9kZSwga2luZCwgdGhpcy5maWxlKTtcblxuICAgIGlmIChlbnVtZXJhYmxlKSB7XG4gICAgICBtYXAuZW51bWVyYWJsZSA9IHQubGl0ZXJhbCh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAobWFwLmRlY29yYXRvcnMpIHtcbiAgICAgIHRoaXMuaGFzRGVjb3JhdG9ycyA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICogaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1mV05hUi1yeEFpY1xuICAgKi9cblxuICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5jb25zdHJ1Y3Rvck1lTWF5YmUgPSBmdW5jdGlvbiBjb25zdHJ1Y3Rvck1lTWF5YmUoKSB7XG4gICAgdmFyIGhhc0NvbnN0cnVjdG9yID0gZmFsc2U7XG4gICAgdmFyIHBhdGhzID0gdGhpcy5wYXRoLmdldChcImJvZHkuYm9keVwiKTtcbiAgICB2YXIgX2FyciA9IHBhdGhzO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIHBhdGggPSBfYXJyW19pXTtcbiAgICAgIGhhc0NvbnN0cnVjdG9yID0gcGF0aC5lcXVhbHMoXCJraW5kXCIsIFwiY29uc3RydWN0b3JcIik7XG4gICAgICBpZiAoaGFzQ29uc3RydWN0b3IpIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoaGFzQ29uc3RydWN0b3IpIHJldHVybjtcblxuICAgIHZhciBjb25zdHJ1Y3RvcjtcbiAgICBpZiAodGhpcy5pc0Rlcml2ZWQpIHtcbiAgICAgIGNvbnN0cnVjdG9yID0gdXRpbC50ZW1wbGF0ZShcImNsYXNzLWRlcml2ZWQtZGVmYXVsdC1jb25zdHJ1Y3RvclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3RydWN0b3IgPSB0LmZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbXSwgdC5ibG9ja1N0YXRlbWVudChbXSkpO1xuICAgIH1cblxuICAgIHRoaXMucGF0aC5nZXQoXCJib2R5XCIpLnVuc2hpZnRDb250YWluZXIoXCJib2R5XCIsIHQubWV0aG9kRGVmaW5pdGlvbih0LmlkZW50aWZpZXIoXCJjb25zdHJ1Y3RvclwiKSwgY29uc3RydWN0b3IsIFwiY29uc3RydWN0b3JcIikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuYnVpbGRCb2R5ID0gZnVuY3Rpb24gYnVpbGRCb2R5KCkge1xuICAgIHRoaXMuY29uc3RydWN0b3JNZU1heWJlKCk7XG4gICAgdGhpcy5wdXNoQm9keSgpO1xuICAgIHRoaXMucGxhY2VQcm9wZXJ0eUluaXRpYWxpemVycygpO1xuXG4gICAgaWYgKHRoaXMudXNlckNvbnN0cnVjdG9yKSB7XG4gICAgICB2YXIgY29uc3RydWN0b3JCb2R5ID0gdGhpcy5jb25zdHJ1Y3RvckJvZHk7XG4gICAgICBjb25zdHJ1Y3RvckJvZHkuYm9keSA9IGNvbnN0cnVjdG9yQm9keS5ib2R5LmNvbmNhdCh0aGlzLnVzZXJDb25zdHJ1Y3Rvci5ib2R5LmJvZHkpO1xuICAgICAgdC5pbmhlcml0cyh0aGlzLmNvbnN0cnVjdG9yLCB0aGlzLnVzZXJDb25zdHJ1Y3Rvcik7XG4gICAgICB0LmluaGVyaXRzKGNvbnN0cnVjdG9yQm9keSwgdGhpcy51c2VyQ29uc3RydWN0b3IuYm9keSk7XG4gICAgfVxuXG4gICAgdGhpcy5wdXNoRGVzY3JpcHRvcnMoKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLnB1c2hCb2R5ID0gZnVuY3Rpb24gcHVzaEJvZHkoKSB7XG4gICAgdmFyIGNsYXNzQm9keVBhdGhzID0gdGhpcy5wYXRoLmdldChcImJvZHkuYm9keVwiKTtcblxuICAgIHZhciBfYXJyMiA9IGNsYXNzQm9keVBhdGhzO1xuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBwYXRoID0gX2FycjJbX2kyXTtcbiAgICAgIHZhciBub2RlID0gcGF0aC5ub2RlO1xuXG4gICAgICBpZiAobm9kZS5kZWNvcmF0b3JzKSB7XG4gICAgICAgIF9oZWxwZXJzTWVtb2lzZURlY29yYXRvcnMyW1wiZGVmYXVsdFwiXShub2RlLmRlY29yYXRvcnMsIHRoaXMuc2NvcGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodC5pc01ldGhvZERlZmluaXRpb24obm9kZSkpIHtcbiAgICAgICAgdmFyIGlzQ29uc3RydWN0b3IgPSBub2RlLmtpbmQgPT09IFwiY29uc3RydWN0b3JcIjtcbiAgICAgICAgaWYgKGlzQ29uc3RydWN0b3IpIHRoaXMudmVyaWZ5Q29uc3RydWN0b3IocGF0aCk7XG5cbiAgICAgICAgdmFyIHJlcGxhY2VTdXBlcnMgPSBuZXcgX2hlbHBlcnNSZXBsYWNlU3VwZXJzMltcImRlZmF1bHRcIl0oe1xuICAgICAgICAgIG1ldGhvZFBhdGg6IHBhdGgsXG4gICAgICAgICAgbWV0aG9kTm9kZTogbm9kZSxcbiAgICAgICAgICBvYmplY3RSZWY6IHRoaXMuZGlyZWN0UmVmLFxuICAgICAgICAgIHN1cGVyUmVmOiB0aGlzLnN1cGVyTmFtZSxcbiAgICAgICAgICBpc1N0YXRpYzogbm9kZVtcInN0YXRpY1wiXSxcbiAgICAgICAgICBpc0xvb3NlOiB0aGlzLmlzTG9vc2UsXG4gICAgICAgICAgc2NvcGU6IHRoaXMuc2NvcGUsXG4gICAgICAgICAgZmlsZTogdGhpcy5maWxlXG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJlcGxhY2VTdXBlcnMucmVwbGFjZSgpO1xuXG4gICAgICAgIGlmIChpc0NvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgdGhpcy5wdXNoQ29uc3RydWN0b3Iobm9kZSwgcGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wdXNoTWV0aG9kKG5vZGUsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHQuaXNDbGFzc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgICAgIHRoaXMucHVzaFByb3BlcnR5KG5vZGUsIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLmNsZWFyRGVzY3JpcHRvcnMgPSBmdW5jdGlvbiBjbGVhckRlc2NyaXB0b3JzKCkge1xuICAgIHRoaXMuaGFzSW5zdGFuY2VEZXNjcmlwdG9ycyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzU3RhdGljRGVzY3JpcHRvcnMgPSBmYWxzZTtcblxuICAgIHRoaXMuaW5zdGFuY2VNdXRhdG9yTWFwID0ge307XG4gICAgdGhpcy5zdGF0aWNNdXRhdG9yTWFwID0ge307XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5wdXNoRGVzY3JpcHRvcnMgPSBmdW5jdGlvbiBwdXNoRGVzY3JpcHRvcnMoKSB7XG4gICAgdGhpcy5wdXNoSW5oZXJpdHMoKTtcblxuICAgIHZhciBib2R5ID0gdGhpcy5ib2R5O1xuXG4gICAgdmFyIGluc3RhbmNlUHJvcHM7XG4gICAgdmFyIHN0YXRpY1Byb3BzO1xuICAgIHZhciBjbGFzc0hlbHBlciA9IFwiY3JlYXRlLWNsYXNzXCI7XG4gICAgaWYgKHRoaXMuaGFzRGVjb3JhdG9ycykgY2xhc3NIZWxwZXIgPSBcImNyZWF0ZS1kZWNvcmF0ZWQtY2xhc3NcIjtcblxuICAgIGlmICh0aGlzLmhhc0luc3RhbmNlRGVzY3JpcHRvcnMpIHtcbiAgICAgIGluc3RhbmNlUHJvcHMgPSBkZWZpbmVNYXAudG9DbGFzc09iamVjdCh0aGlzLmluc3RhbmNlTXV0YXRvck1hcCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzU3RhdGljRGVzY3JpcHRvcnMpIHtcbiAgICAgIHN0YXRpY1Byb3BzID0gZGVmaW5lTWFwLnRvQ2xhc3NPYmplY3QodGhpcy5zdGF0aWNNdXRhdG9yTWFwKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2VQcm9wcyB8fCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKGluc3RhbmNlUHJvcHMpIGluc3RhbmNlUHJvcHMgPSBkZWZpbmVNYXAudG9Db21wdXRlZE9iamVjdEZyb21DbGFzcyhpbnN0YW5jZVByb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgc3RhdGljUHJvcHMgPSBkZWZpbmVNYXAudG9Db21wdXRlZE9iamVjdEZyb21DbGFzcyhzdGF0aWNQcm9wcyk7XG5cbiAgICAgIHZhciBudWxsTm9kZSA9IHQubGl0ZXJhbChudWxsKTtcblxuICAgICAgLy8gKENvbnN0cnVjdG9yLCBpbnN0YW5jZURlc2NyaXB0b3JzLCBzdGF0aWNEZXNjcmlwdG9ycywgaW5zdGFuY2VJbml0aWFsaXplcnMsIHN0YXRpY0luaXRpYWxpemVycylcbiAgICAgIHZhciBhcmdzID0gW3RoaXMuY2xhc3NSZWYsIG51bGxOb2RlLCBudWxsTm9kZSwgbnVsbE5vZGUsIG51bGxOb2RlXTtcblxuICAgICAgaWYgKGluc3RhbmNlUHJvcHMpIGFyZ3NbMV0gPSBpbnN0YW5jZVByb3BzO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBhcmdzWzJdID0gc3RhdGljUHJvcHM7XG5cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlSW5pdGlhbGl6ZXJzSWQpIHtcbiAgICAgICAgYXJnc1szXSA9IHRoaXMuaW5zdGFuY2VJbml0aWFsaXplcnNJZDtcbiAgICAgICAgYm9keS51bnNoaWZ0KHRoaXMuYnVpbGRPYmplY3RBc3NpZ25tZW50KHRoaXMuaW5zdGFuY2VJbml0aWFsaXplcnNJZCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0aWNJbml0aWFsaXplcnNJZCkge1xuICAgICAgICBhcmdzWzRdID0gdGhpcy5zdGF0aWNJbml0aWFsaXplcnNJZDtcbiAgICAgICAgYm9keS51bnNoaWZ0KHRoaXMuYnVpbGRPYmplY3RBc3NpZ25tZW50KHRoaXMuc3RhdGljSW5pdGlhbGl6ZXJzSWQpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhc3ROb25OdWxsSW5kZXggPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcmdzW2ldICE9PSBudWxsTm9kZSkgbGFzdE5vbk51bGxJbmRleCA9IGk7XG4gICAgICB9XG4gICAgICBhcmdzID0gYXJncy5zbGljZSgwLCBsYXN0Tm9uTnVsbEluZGV4ICsgMSk7XG5cbiAgICAgIGJvZHkucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5jYWxsRXhwcmVzc2lvbih0aGlzLmZpbGUuYWRkSGVscGVyKGNsYXNzSGVscGVyKSwgYXJncykpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyRGVzY3JpcHRvcnMoKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLmJ1aWxkT2JqZWN0QXNzaWdubWVudCA9IGZ1bmN0aW9uIGJ1aWxkT2JqZWN0QXNzaWdubWVudChpZCkge1xuICAgIHJldHVybiB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKGlkLCB0Lm9iamVjdEV4cHJlc3Npb24oW10pKV0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUucGxhY2VQcm9wZXJ0eUluaXRpYWxpemVycyA9IGZ1bmN0aW9uIHBsYWNlUHJvcGVydHlJbml0aWFsaXplcnMoKSB7XG4gICAgdmFyIGJvZHkgPSB0aGlzLmluc3RhbmNlUHJvcEJvZHk7XG4gICAgaWYgKCFib2R5Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuaGFzUHJvcGVydHlDb2xsaXNpb24oKSkge1xuICAgICAgdmFyIGNhbGwgPSB0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5jYWxsRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24odC50aGlzRXhwcmVzc2lvbigpLCB0LmlkZW50aWZpZXIoUFJPUEVSVFlfQ09MTElTSU9OX01FVEhPRF9OQU1FKSksIFtdKSk7XG5cbiAgICAgIHRoaXMucHVzaE1ldGhvZCh0Lm1ldGhvZERlZmluaXRpb24odC5pZGVudGlmaWVyKFBST1BFUlRZX0NPTExJU0lPTl9NRVRIT0RfTkFNRSksIHQuZnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIFtdLCB0LmJsb2NrU3RhdGVtZW50KGJvZHkpKSksIG51bGwsIHRydWUpO1xuXG4gICAgICBpZiAodGhpcy5pc0Rlcml2ZWQpIHtcbiAgICAgICAgdGhpcy5iYXJlU3VwZXIuaW5zZXJ0QWZ0ZXIoY2FsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yQm9keS5ib2R5LnVuc2hpZnQoY2FsbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzRGVyaXZlZCkge1xuICAgICAgICB0aGlzLmJhcmVTdXBlci5pbnNlcnRBZnRlcihib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3JCb2R5LmJvZHkgPSBib2R5LmNvbmNhdCh0aGlzLmNvbnN0cnVjdG9yQm9keS5ib2R5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5oYXNQcm9wZXJ0eUNvbGxpc2lvbiA9IGZ1bmN0aW9uIGhhc1Byb3BlcnR5Q29sbGlzaW9uKCkge1xuICAgIGlmICh0aGlzLnVzZXJDb25zdHJ1Y3RvclBhdGgpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5pbnN0YW5jZVByb3BSZWZzKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJDb25zdHJ1Y3RvclBhdGguc2NvcGUuaGFzT3duQmluZGluZyhuYW1lKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUudmVyaWZ5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiB2ZXJpZnlDb25zdHJ1Y3RvcihwYXRoKSB7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgY29uc3RydWN0b3JQYXRoOiBwYXRoLmdldChcInZhbHVlXCIpLFxuICAgICAgaGFzQmFyZVN1cGVyOiBmYWxzZSxcbiAgICAgIGJhcmVTdXBlcjogbnVsbCxcbiAgICAgIGlzRGVyaXZlZDogdGhpcy5pc0Rlcml2ZWQsXG4gICAgICBmaWxlOiB0aGlzLmZpbGVcbiAgICB9O1xuXG4gICAgc3RhdGUuY29uc3RydWN0b3JQYXRoLnRyYXZlcnNlKHZlcmlmeUNvbnN0cnVjdG9yVmlzaXRvciwgc3RhdGUpO1xuXG4gICAgdmFyIHRoaXNBbGlhcyA9IHN0YXRlLmNvbnN0cnVjdG9yUGF0aC5nZXREYXRhKFwidGhpc1wiKTtcbiAgICBpZiAodGhpc0FsaWFzICYmIHN0YXRlLmJhcmVTdXBlcikge1xuICAgICAgc3RhdGUuYmFyZVN1cGVyLmluc2VydEFmdGVyKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodGhpc0FsaWFzLCB0LnRoaXNFeHByZXNzaW9uKCkpXSkpO1xuICAgIH1cblxuICAgIHRoaXMuYmFyZVN1cGVyID0gc3RhdGUuYmFyZVN1cGVyO1xuXG4gICAgaWYgKCFzdGF0ZS5oYXNCYXJlU3VwZXIgJiYgdGhpcy5pc0Rlcml2ZWQpIHtcbiAgICAgIHRocm93IHBhdGguZXJyb3JXaXRoTm9kZShcIkRlcml2ZWQgY29uc3RydWN0b3IgbXVzdCBjYWxsIHN1cGVyKClcIik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQdXNoIGEgbWV0aG9kIHRvIGl0cyByZXNwZWN0aXZlIG11dGF0b3JNYXAuXG4gICAqL1xuXG4gIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLnB1c2hNZXRob2QgPSBmdW5jdGlvbiBwdXNoTWV0aG9kKG5vZGUsIHBhdGgsIGFsbG93ZWRJbGxlZ2FsKSB7XG4gICAgaWYgKCFhbGxvd2VkSWxsZWdhbCAmJiB0LmlzTGl0ZXJhbCh0LnRvQ29tcHV0ZWRLZXkobm9kZSksIHsgdmFsdWU6IFBST1BFUlRZX0NPTExJU0lPTl9NRVRIT0RfTkFNRSB9KSkge1xuICAgICAgdGhyb3cgdGhpcy5maWxlLmVycm9yV2l0aE5vZGUobm9kZSwgbWVzc2FnZXMuZ2V0KFwiaWxsZWdhbE1ldGhvZE5hbWVcIiwgUFJPUEVSVFlfQ09MTElTSU9OX01FVEhPRF9OQU1FKSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUua2luZCA9PT0gXCJtZXRob2RcIikge1xuICAgICAgbmFtZU1ldGhvZC5wcm9wZXJ0eShub2RlLCB0aGlzLmZpbGUsIHBhdGggPyBwYXRoLmdldChcInZhbHVlXCIpLnNjb3BlIDogdGhpcy5zY29wZSk7XG4gICAgICBpZiAodGhpcy5fcHJvY2Vzc01ldGhvZChub2RlKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHVzaFRvTWFwKG5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUuX3Byb2Nlc3NNZXRob2QgPSBmdW5jdGlvbiBfcHJvY2Vzc01ldGhvZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5wdXNoUHJvcGVydHkgPSBmdW5jdGlvbiBwdXNoUHJvcGVydHkobm9kZSwgcGF0aCkge1xuICAgIHBhdGgudHJhdmVyc2UoY29sbGVjdFByb3BlcnR5UmVmZXJlbmNlc1Zpc2l0b3IsIHtcbiAgICAgIHJlZmVyZW5jZXM6IHRoaXMuaW5zdGFuY2VQcm9wUmVmcyxcbiAgICAgIHNjb3BlOiB0aGlzLnNjb3BlXG4gICAgfSk7XG5cbiAgICBpZiAobm9kZS5kZWNvcmF0b3JzKSB7XG4gICAgICB2YXIgYm9keSA9IFtdO1xuICAgICAgaWYgKG5vZGUudmFsdWUpIHtcbiAgICAgICAgYm9keS5wdXNoKHQucmV0dXJuU3RhdGVtZW50KG5vZGUudmFsdWUpKTtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHQuZnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIFtdLCB0LmJsb2NrU3RhdGVtZW50KGJvZHkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB0LmxpdGVyYWwobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hUb01hcChub2RlLCB0cnVlLCBcImluaXRpYWxpemVyXCIpO1xuXG4gICAgICB2YXIgaW5pdGlhbGl6ZXJzO1xuICAgICAgdmFyIHRhcmdldDtcbiAgICAgIGlmIChub2RlW1wic3RhdGljXCJdKSB7XG4gICAgICAgIGluaXRpYWxpemVycyA9IHRoaXMuc3RhdGljSW5pdGlhbGl6ZXJzSWQgPSB0aGlzLnN0YXRpY0luaXRpYWxpemVyc0lkIHx8IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwic3RhdGljSW5pdGlhbGl6ZXJzXCIpO1xuICAgICAgICBib2R5ID0gdGhpcy5zdGF0aWNQcm9wQm9keTtcbiAgICAgICAgdGFyZ2V0ID0gdGhpcy5jbGFzc1JlZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxpemVycyA9IHRoaXMuaW5zdGFuY2VJbml0aWFsaXplcnNJZCA9IHRoaXMuaW5zdGFuY2VJbml0aWFsaXplcnNJZCB8fCB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcImluc3RhbmNlSW5pdGlhbGl6ZXJzXCIpO1xuICAgICAgICBib2R5ID0gdGhpcy5pbnN0YW5jZVByb3BCb2R5O1xuICAgICAgICB0YXJnZXQgPSB0LnRoaXNFeHByZXNzaW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGJvZHkucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5jYWxsRXhwcmVzc2lvbih0aGlzLmZpbGUuYWRkSGVscGVyKFwiZGVmaW5lLWRlY29yYXRlZC1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBbdGFyZ2V0LCB0LmxpdGVyYWwobm9kZS5rZXkubmFtZSksIGluaXRpYWxpemVyc10pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbm9kZS52YWx1ZSAmJiAhbm9kZS5kZWNvcmF0b3JzKSByZXR1cm47XG5cbiAgICAgIGlmIChub2RlW1wic3RhdGljXCJdKSB7XG4gICAgICAgIC8vIGNhbiBqdXN0IGJlIGFkZGVkIHRvIHRoZSBzdGF0aWMgbWFwXG4gICAgICAgIHRoaXMucHVzaFRvTWFwKG5vZGUsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICAgIC8vIGFkZCB0aGlzIHRvIHRoZSBpbnN0YW5jZVByb3BCb2R5IHdoaWNoIHdpbGwgYmUgYWRkZWQgYWZ0ZXIgdGhlIHN1cGVyIGNhbGwgaW4gYSBkZXJpdmVkIGNvbnN0cnVjdG9yXG4gICAgICAgIC8vIG9yIGF0IHRoZSBzdGFydCBvZiBhIGNvbnN0cnVjdG9yIGZvciBhIG5vbi1kZXJpdmVkIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuaW5zdGFuY2VQcm9wQm9keS5wdXNoKHQuZXhwcmVzc2lvblN0YXRlbWVudCh0LmFzc2lnbm1lbnRFeHByZXNzaW9uKFwiPVwiLCB0Lm1lbWJlckV4cHJlc3Npb24odC50aGlzRXhwcmVzc2lvbigpLCBub2RlLmtleSksIG5vZGUudmFsdWUpKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb25zdHJ1Y3RvciBib2R5IG9mIG91ciBjbGFzcy5cbiAgICovXG5cbiAgQ2xhc3NUcmFuc2Zvcm1lci5wcm90b3R5cGUucHVzaENvbnN0cnVjdG9yID0gZnVuY3Rpb24gcHVzaENvbnN0cnVjdG9yKG1ldGhvZCwgcGF0aCkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvMTA3N1xuICAgIHZhciBmblBhdGggPSBwYXRoLmdldChcInZhbHVlXCIpO1xuICAgIGlmIChmblBhdGguc2NvcGUuaGFzT3duQmluZGluZyh0aGlzLmNsYXNzUmVmLm5hbWUpKSB7XG4gICAgICBmblBhdGguc2NvcGUucmVuYW1lKHRoaXMuY2xhc3NSZWYubmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnN0cnVjdCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgdmFyIGZuID0gbWV0aG9kLnZhbHVlO1xuXG4gICAgdGhpcy51c2VyQ29uc3RydWN0b3JQYXRoID0gZm5QYXRoO1xuICAgIHRoaXMudXNlckNvbnN0cnVjdG9yID0gZm47XG4gICAgdGhpcy5oYXNDb25zdHJ1Y3RvciA9IHRydWU7XG5cbiAgICB0LmluaGVyaXRzQ29tbWVudHMoY29uc3RydWN0LCBtZXRob2QpO1xuXG4gICAgY29uc3RydWN0Ll9pZ25vcmVVc2VyV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgY29uc3RydWN0LnBhcmFtcyA9IGZuLnBhcmFtcztcblxuICAgIHQuaW5oZXJpdHMoY29uc3RydWN0LmJvZHksIGZuLmJvZHkpO1xuXG4gICAgLy8gcHVzaCBjb25zdHJ1Y3RvciB0byBib2R5XG4gICAgdGhpcy5fcHVzaENvbnN0cnVjdG9yKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5fcHVzaENvbnN0cnVjdG9yID0gZnVuY3Rpb24gX3B1c2hDb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAodGhpcy5wdXNoZWRDb25zdHJ1Y3RvcikgcmV0dXJuO1xuICAgIHRoaXMucHVzaGVkQ29uc3RydWN0b3IgPSB0cnVlO1xuXG4gICAgLy8gd2UgaGF2ZW4ndCBwdXNoZWQgYW55IGRlc2NyaXB0b3JzIHlldFxuICAgIGlmICh0aGlzLmhhc0luc3RhbmNlRGVzY3JpcHRvcnMgfHwgdGhpcy5oYXNTdGF0aWNEZXNjcmlwdG9ycykge1xuICAgICAgdGhpcy5wdXNoRGVzY3JpcHRvcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmJvZHkucHVzaCh0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgIHRoaXMucHVzaEluaGVyaXRzKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1c2ggaW5oZXJpdHMgaGVscGVyIHRvIGJvZHkuXG4gICAqL1xuXG4gIENsYXNzVHJhbnNmb3JtZXIucHJvdG90eXBlLnB1c2hJbmhlcml0cyA9IGZ1bmN0aW9uIHB1c2hJbmhlcml0cygpIHtcbiAgICBpZiAoIXRoaXMuaXNEZXJpdmVkIHx8IHRoaXMucHVzaGVkSW5oZXJpdHMpIHJldHVybjtcblxuICAgIC8vIFVuc2hpZnQgdG8gZW5zdXJlIHRoYXQgdGhlIGNvbnN0cnVjdG9yIGluaGVyaXRhbmNlIGlzIHNldCB1cCBiZWZvcmVcbiAgICAvLyBhbnkgcHJvcGVydGllcyBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHByb3RvdHlwZS5cbiAgICB0aGlzLnB1c2hlZEluaGVyaXRzID0gdHJ1ZTtcbiAgICB0aGlzLmJvZHkudW5zaGlmdCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5jYWxsRXhwcmVzc2lvbih0aGlzLmZpbGUuYWRkSGVscGVyKFwiaW5oZXJpdHNcIiksIFt0aGlzLmNsYXNzUmVmLCB0aGlzLnN1cGVyTmFtZV0pKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1c2ggZGVjb3JhdG9ycyB0byBib2R5LlxuICAgKi9cblxuICBDbGFzc1RyYW5zZm9ybWVyLnByb3RvdHlwZS5wdXNoRGVjb3JhdG9ycyA9IGZ1bmN0aW9uIHB1c2hEZWNvcmF0b3JzKCkge1xuICAgIHZhciBkZWNvcmF0b3JzID0gdGhpcy5ub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKCFkZWNvcmF0b3JzKSByZXR1cm47XG5cbiAgICB0aGlzLmJvZHkucHVzaCh0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKHRoaXMuZGlyZWN0UmVmLCB0aGlzLmNsYXNzUmVmKV0pKTtcblxuICAgIC8vIHJldmVyc2UgdGhlIGRlY29yYXRvcnMgc28gd2UgZXhlY3V0ZSB0aGVtIGluIHRoZSByaWdodCBvcmRlclxuICAgIGRlY29yYXRvcnMgPSBkZWNvcmF0b3JzLnJldmVyc2UoKTtcblxuICAgIHZhciBfYXJyMyA9IGRlY29yYXRvcnM7XG4gICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgX2FycjMubGVuZ3RoOyBfaTMrKykge1xuICAgICAgdmFyIGRlY29yYXRvciA9IF9hcnIzW19pM107XG4gICAgICB2YXIgZGVjb3JhdG9yTm9kZSA9IHV0aWwudGVtcGxhdGUoXCJjbGFzcy1kZWNvcmF0b3JcIiwge1xuICAgICAgICBERUNPUkFUT1I6IGRlY29yYXRvci5leHByZXNzaW9uLFxuICAgICAgICBDTEFTU19SRUY6IHRoaXMuY2xhc3NSZWZcbiAgICAgIH0sIHRydWUpO1xuICAgICAgZGVjb3JhdG9yTm9kZS5leHByZXNzaW9uLl9pZ25vcmVNb2R1bGVzUmVtYXAgPSB0cnVlO1xuICAgICAgdGhpcy5ib2R5LnB1c2goZGVjb3JhdG9yTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDbGFzc1RyYW5zZm9ybWVyO1xufSkoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDbGFzc1RyYW5zZm9ybWVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
