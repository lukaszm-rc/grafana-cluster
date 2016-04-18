/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _traversal, _traversal2, _helpersObject, _helpersObject2, _util, util, _types, t, _lodashObjectValues, _lodashObjectValues2, _lodashObjectExtend, _lodashObjectExtend2, metadata, visitor, replaceVisitor, letReferenceBlockVisitor, letReferenceFunctionVisitor, hoistVarDeclarationsVisitor, loopLabelVisitor, continuationVisitor, loopNodeTo, loopVisitor, BlockScoping;

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

  /**
   * [Please add a description.]
   */

  function isLet(node, parent) {
    if (!t.isVariableDeclaration(node)) return false;
    if (node._let) return true;
    if (node.kind !== "let") return false;

    // https://github.com/babel/babel/issues/255
    if (isLetInitable(node, parent)) {
      for (var i = 0; i < node.declarations.length; i++) {
        var declar = node.declarations[i];
        declar.init = declar.init || t.identifier("undefined");
      }
    }

    node._let = true;
    node.kind = "var";
    return true;
  }

  /**
   * [Please add a description.]
   */

  function isLetInitable(node, parent) {
    return !t.isFor(parent) || !t.isFor(parent, { left: node });
  }

  /**
   * [Please add a description.]
   */

  function isVar(node, parent) {
    return t.isVariableDeclaration(node, { kind: "var" }) && !isLet(node, parent);
  }

  /**
   * [Please add a description.]
   */

  function standardizeLets(declars) {
    var _arr = declars;

    for (var _i = 0; _i < _arr.length; _i++) {
      var declar = _arr[_i];
      delete declar._let;
    }
  }

  /**
   * [Please add a description.]
   */

  function replace(node, parent, scope, remaps) {
    var remap = remaps[node.name];
    if (!remap) return;

    var ownBinding = scope.getBindingIdentifier(node.name);
    if (ownBinding === remap.binding) {
      node.name = remap.uid;
    } else {
      // scope already has it's own binding that doesn't
      // match the one we have a stored replacement for
      if (this) this.skip();
    }
  }

  /**
   * [Please add a description.]
   */

  /**
   * [Please add a description.]
   */

  function traverseReplace(node, parent, scope, remaps) {
    if (t.isIdentifier(node)) {
      replace(node, parent, scope, remaps);
    }

    if (t.isAssignmentExpression(node)) {
      var ids = t.getBindingIdentifiers(node);
      for (var name in ids) {
        replace(ids[name], parent, scope, remaps);
      }
    }

    scope.traverse(node, replaceVisitor, remaps);
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_traversal = require("../../../traversal");
      _traversal2 = _interopRequireDefault(_traversal);
      _helpersObject = require("../../../helpers/object");
      _helpersObject2 = _interopRequireDefault(_helpersObject);
      _util = require("../../../util");
      util = _interopRequireWildcard(_util);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      _lodashObjectValues = require("lodash/object/values");
      _lodashObjectValues2 = _interopRequireDefault(_lodashObjectValues);
      _lodashObjectExtend = require("lodash/object/extend");
      _lodashObjectExtend2 = _interopRequireDefault(_lodashObjectExtend);
      metadata = {
        group: "builtin-advanced"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        VariableDeclaration: function VariableDeclaration(node, parent, scope, file) {
          if (!isLet(node, parent)) return;

          if (isLetInitable(node) && file.transformers["es6.spec.blockScoping"].canTransform()) {
            var nodes = [node];

            for (var i = 0; i < node.declarations.length; i++) {
              var decl = node.declarations[i];
              if (decl.init) {
                var assign = t.assignmentExpression("=", decl.id, decl.init);
                assign._ignoreBlockScopingTDZ = true;
                nodes.push(t.expressionStatement(assign));
              }
              decl.init = file.addHelper("temporal-undefined");
            }

            node._blockHoist = 2;

            return nodes;
          }
        },

        /**
         * [Please add a description.]
         */

        Loop: function Loop(node, parent, scope, file) {
          var init = node.left || node.init;
          if (isLet(init, node)) {
            t.ensureBlock(node);
            node.body._letDeclarators = [init];
          }

          var blockScoping = new BlockScoping(this, this.get("body"), parent, scope, file);
          return blockScoping.run();
        },

        /**
         * [Please add a description.]
         */

        "BlockStatement|Program": function BlockStatementProgram(block, parent, scope, file) {
          if (!t.isLoop(parent)) {
            var blockScoping = new BlockScoping(null, this, parent, scope, file);
            blockScoping.run();
          }
        }
      };


      exports.visitor = visitor;replaceVisitor = {
        ReferencedIdentifier: replace,

        /**
         * [Please add a description.]
         */

        AssignmentExpression: function AssignmentExpression(node, parent, scope, remaps) {
          var ids = this.getBindingIdentifiers();
          for (var name in ids) {
            replace(ids[name], node, scope, remaps);
          }
        }
      };
      letReferenceBlockVisitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function(node, parent, scope, state) {
          this.traverse(letReferenceFunctionVisitor, state);
          return this.skip();
        }
      };
      letReferenceFunctionVisitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          var ref = state.letReferences[node.name];

          // not a part of our scope
          if (!ref) return;

          // this scope has a variable with the same name so it couldn't belong
          // to our let scope
          var localBinding = scope.getBindingIdentifier(node.name);
          if (localBinding && localBinding !== ref) return;

          state.closurify = true;
        }
      };
      hoistVarDeclarationsVisitor = {
        enter: function enter(node, parent, scope, self) {
          if (this.isForStatement()) {
            if (isVar(node.init, node)) {
              var nodes = self.pushDeclar(node.init);
              if (nodes.length === 1) {
                node.init = nodes[0];
              } else {
                node.init = t.sequenceExpression(nodes);
              }
            }
          } else if (this.isFor()) {
            if (isVar(node.left, node)) {
              self.pushDeclar(node.left);
              node.left = node.left.declarations[0].id;
            }
          } else if (isVar(node, parent)) {
            return self.pushDeclar(node).map(t.expressionStatement);
          } else if (this.isFunction()) {
            return this.skip();
          }
        }
      };
      loopLabelVisitor = {
        LabeledStatement: function LabeledStatement(node, parent, scope, state) {
          state.innerLabels.push(node.label.name);
        }
      };
      continuationVisitor = {
        enter: function enter(node, parent, scope, state) {
          if (this.isAssignmentExpression() || this.isUpdateExpression()) {
            var bindings = this.getBindingIdentifiers();
            for (var name in bindings) {
              if (state.outsideReferences[name] !== scope.getBindingIdentifier(name)) continue;
              state.reassignments[name] = true;
            }
          }
        }
      };

      loopNodeTo = function loopNodeTo(node) {
        if (t.isBreakStatement(node)) {
          return "break";
        } else if (t.isContinueStatement(node)) {
          return "continue";
        }
      };

      loopVisitor = {

        /**
         * [Please add a description.]
         */

        Loop: function Loop(node, parent, scope, state) {
          var oldIgnoreLabeless = state.ignoreLabeless;
          state.ignoreLabeless = true;
          this.traverse(loopVisitor, state);
          state.ignoreLabeless = oldIgnoreLabeless;
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        Function: function Function() {
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        SwitchCase: function SwitchCase(node, parent, scope, state) {
          var oldInSwitchCase = state.inSwitchCase;
          state.inSwitchCase = true;
          this.traverse(loopVisitor, state);
          state.inSwitchCase = oldInSwitchCase;
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        enter: function enter(node, parent, scope, state) {
          var replace;
          var loopText = loopNodeTo(node);

          if (loopText) {
            if (node.label) {
              // we shouldn't be transforming this because it exists somewhere inside
              if (state.innerLabels.indexOf(node.label.name) >= 0) {
                return;
              }

              loopText = loopText + "|" + node.label.name;
            } else {
              // we shouldn't be transforming these statements because
              // they don't refer to the actual loop we're scopifying
              if (state.ignoreLabeless) return;

              //
              if (state.inSwitchCase) return;

              // break statements mean something different in this context
              if (t.isBreakStatement(node) && t.isSwitchCase(parent)) return;
            }

            state.hasBreakContinue = true;
            state.map[loopText] = node;
            replace = t.literal(loopText);
          }

          if (this.isReturnStatement()) {
            state.hasReturn = true;
            replace = t.objectExpression([t.property("init", t.identifier("v"), node.argument || t.identifier("undefined"))]);
          }

          if (replace) {
            replace = t.returnStatement(replace);
            this.skip();
            return t.inherits(replace, node);
          }
        }
      };

      BlockScoping = function () {
        function BlockScoping(loopPath, blockPath, parent, scope, file) {
          _classCallCheck(this, BlockScoping);

          this.parent = parent;
          this.scope = scope;
          this.file = file;

          this.blockPath = blockPath;
          this.block = blockPath.node;

          this.outsideLetReferences = _helpersObject2["default"]();
          this.hasLetReferences = false;
          this.letReferences = this.block._letReferences = _helpersObject2["default"]();
          this.body = [];

          if (loopPath) {
            this.loopParent = loopPath.parent;
            this.loopLabel = t.isLabeledStatement(this.loopParent) && this.loopParent.label;
            this.loopPath = loopPath;
            this.loop = loopPath.node;
          }
        }

        /**
         * Start the ball rolling.
         */

        BlockScoping.prototype.run = function run() {
          var block = this.block;
          if (block._letDone) return;
          block._letDone = true;

          var needsClosure = this.getLetReferences();

          // this is a block within a `Function/Program` so we can safely leave it be
          if (t.isFunction(this.parent) || t.isProgram(this.block)) return;

          // we can skip everything
          if (!this.hasLetReferences) return;

          if (needsClosure) {
            this.wrapClosure();
          } else {
            this.remap();
          }

          if (this.loopLabel && !t.isLabeledStatement(this.loopParent)) {
            return t.labeledStatement(this.loopLabel, this.loop);
          }
        };

        /**
         * [Please add a description.]
         */

        BlockScoping.prototype.remap = function remap() {
          var hasRemaps = false;
          var letRefs = this.letReferences;
          var scope = this.scope;

          // alright, so since we aren't wrapping this block in a closure
          // we have to check if any of our let variables collide with
          // those in upper scopes and then if they do, generate a uid
          // for them and replace all references with it
          var remaps = _helpersObject2["default"]();

          for (var key in letRefs) {
            // just an Identifier node we collected in `getLetReferences`
            // this is the defining identifier of a declaration
            var ref = letRefs[key];

            // todo: could skip this if the colliding binding is in another function
            if (scope.parentHasBinding(key) || scope.hasGlobal(key)) {
              var uid = scope.generateUidIdentifier(ref.name).name;
              ref.name = uid;

              hasRemaps = true;
              remaps[key] = remaps[uid] = {
                binding: ref,
                uid: uid
              };
            }
          }

          if (!hasRemaps) return;

          //

          var loop = this.loop;
          if (loop) {
            traverseReplace(loop.right, loop, scope, remaps);
            traverseReplace(loop.test, loop, scope, remaps);
            traverseReplace(loop.update, loop, scope, remaps);
          }

          this.blockPath.traverse(replaceVisitor, remaps);
        };

        /**
         * [Please add a description.]
         */

        BlockScoping.prototype.wrapClosure = function wrapClosure() {
          var block = this.block;

          var outsideRefs = this.outsideLetReferences;

          // remap loop heads with colliding variables
          if (this.loop) {
            for (var name in outsideRefs) {
              var id = outsideRefs[name];

              if (this.scope.hasGlobal(id.name) || this.scope.parentHasBinding(id.name)) {
                delete outsideRefs[id.name];
                delete this.letReferences[id.name];

                this.scope.rename(id.name);

                this.letReferences[id.name] = id;
                outsideRefs[id.name] = id;
              }
            }
          }

          // if we're inside of a for loop then we search to see if there are any
          // `break`s, `continue`s, `return`s etc
          this.has = this.checkLoop();

          // hoist var references to retain scope
          this.hoistVarDeclarations();

          // turn outsideLetReferences into an array
          var params = _lodashObjectValues2["default"](outsideRefs);
          var args = _lodashObjectValues2["default"](outsideRefs);

          // build the closure that we're going to wrap the block with
          var fn = t.functionExpression(null, params, t.blockStatement(block.body));
          fn.shadow = true;

          // continuation
          this.addContinuations(fn);

          // replace the current block body with the one we're going to build
          block.body = this.body;

          var ref = fn;

          if (this.loop) {
            ref = this.scope.generateUidIdentifier("loop");
            this.loopPath.insertBefore(t.variableDeclaration("var", [t.variableDeclarator(ref, fn)]));
          }

          // build a call and a unique id that we can assign the return value to
          var call = t.callExpression(ref, args);
          var ret = this.scope.generateUidIdentifier("ret");

          // handle generators
          var hasYield = _traversal2["default"].hasType(fn.body, this.scope, "YieldExpression", t.FUNCTION_TYPES);
          if (hasYield) {
            fn.generator = true;
            call = t.yieldExpression(call, true);
          }

          // handlers async functions
          var hasAsync = _traversal2["default"].hasType(fn.body, this.scope, "AwaitExpression", t.FUNCTION_TYPES);
          if (hasAsync) {
            fn.async = true;
            call = t.awaitExpression(call);
          }

          this.buildClosure(ret, call);
        };

        /**
         * Push the closure to the body.
         */

        BlockScoping.prototype.buildClosure = function buildClosure(ret, call) {
          var has = this.has;
          if (has.hasReturn || has.hasBreakContinue) {
            this.buildHas(ret, call);
          } else {
            this.body.push(t.expressionStatement(call));
          }
        };

        /**
         * If any of the outer let variables are reassigned then we need to rename them in
         * the closure so we can get direct access to the outer variable to continue the
         * iteration with bindings based on each iteration.
         *
         * Reference: https://github.com/babel/babel/issues/1078
         */

        BlockScoping.prototype.addContinuations = function addContinuations(fn) {
          var state = {
            reassignments: {},
            outsideReferences: this.outsideLetReferences
          };

          this.scope.traverse(fn, continuationVisitor, state);

          for (var i = 0; i < fn.params.length; i++) {
            var param = fn.params[i];
            if (!state.reassignments[param.name]) continue;

            var newParam = this.scope.generateUidIdentifier(param.name);
            fn.params[i] = newParam;

            this.scope.rename(param.name, newParam.name, fn);

            // assign outer reference as it's been modified internally and needs to be retained
            fn.body.body.push(t.expressionStatement(t.assignmentExpression("=", param, newParam)));
          }
        };

        /**
         * [Please add a description.]
         */

        BlockScoping.prototype.getLetReferences = function getLetReferences() {
          var block = this.block;

          var declarators = block._letDeclarators || [];

          //
          for (var i = 0; i < declarators.length; i++) {
            var declar = declarators[i];
            _lodashObjectExtend2["default"](this.outsideLetReferences, t.getBindingIdentifiers(declar));
          }

          //
          if (block.body) {
            for (var i = 0; i < block.body.length; i++) {
              var declar = block.body[i];
              if (isLet(declar, block)) {
                declarators = declarators.concat(declar.declarations);
              }
            }
          }

          //
          for (var i = 0; i < declarators.length; i++) {
            var declar = declarators[i];
            var keys = t.getBindingIdentifiers(declar);
            _lodashObjectExtend2["default"](this.letReferences, keys);
            this.hasLetReferences = true;
          }

          // no let references so we can just quit
          if (!this.hasLetReferences) return;

          // set let references to plain var references
          standardizeLets(declarators);

          var state = {
            letReferences: this.letReferences,
            closurify: false
          };

          // traverse through this block, stopping on functions and checking if they
          // contain any local let references
          this.blockPath.traverse(letReferenceBlockVisitor, state);

          return state.closurify;
        };

        /**
         * If we're inside of a loop then traverse it and check if it has one of
         * the following node types `ReturnStatement`, `BreakStatement`,
         * `ContinueStatement` and replace it with a return value that we can track
         * later on.
         *
         * @returns {Object}
         */

        BlockScoping.prototype.checkLoop = function checkLoop() {
          var state = {
            hasBreakContinue: false,
            ignoreLabeless: false,
            inSwitchCase: false,
            innerLabels: [],
            hasReturn: false,
            isLoop: !!this.loop,
            map: {}
          };

          this.blockPath.traverse(loopLabelVisitor, state);
          this.blockPath.traverse(loopVisitor, state);

          return state;
        };

        /**
         * Hoist all var declarations in this block to before it so they retain scope
         * once we wrap everything in a closure.
         */

        BlockScoping.prototype.hoistVarDeclarations = function hoistVarDeclarations() {
          this.blockPath.traverse(hoistVarDeclarationsVisitor, this);
        };

        /**
         * Turn a `VariableDeclaration` into an array of `AssignmentExpressions` with
         * their declarations hoisted to before the closure wrapper.
         */

        BlockScoping.prototype.pushDeclar = function pushDeclar(node) {
          var declars = [];
          var names = t.getBindingIdentifiers(node);
          for (var name in names) {
            declars.push(t.variableDeclarator(names[name]));
          }

          this.body.push(t.variableDeclaration(node.kind, declars));

          var replace = [];

          for (var i = 0; i < node.declarations.length; i++) {
            var declar = node.declarations[i];
            if (!declar.init) continue;

            var expr = t.assignmentExpression("=", declar.id, declar.init);
            replace.push(t.inherits(expr, declar));
          }

          return replace;
        };

        /**
         * [Please add a description.]
         */

        BlockScoping.prototype.buildHas = function buildHas(ret, call) {
          var body = this.body;

          body.push(t.variableDeclaration("var", [t.variableDeclarator(ret, call)]));

          var retCheck;
          var has = this.has;
          var cases = [];

          if (has.hasReturn) {
            // typeof ret === "object"
            retCheck = util.template("let-scoping-return", {
              RETURN: ret
            });
          }

          if (has.hasBreakContinue) {
            for (var key in has.map) {
              cases.push(t.switchCase(t.literal(key), [has.map[key]]));
            }

            if (has.hasReturn) {
              cases.push(t.switchCase(null, [retCheck]));
            }

            if (cases.length === 1) {
              var single = cases[0];
              body.push(this.file.attachAuxiliaryComment(t.ifStatement(t.binaryExpression("===", ret, single.test), single.consequent[0])));
            } else {
              // https://github.com/babel/babel/issues/998
              for (var i = 0; i < cases.length; i++) {
                var caseConsequent = cases[i].consequent[0];
                if (t.isBreakStatement(caseConsequent) && !caseConsequent.label) {
                  caseConsequent.label = this.loopLabel = this.loopLabel || this.file.scope.generateUidIdentifier("loop");
                }
              }

              body.push(this.file.attachAuxiliaryComment(t.switchStatement(ret, cases)));
            }
          } else {
            if (has.hasReturn) {
              body.push(this.file.attachAuxiliaryComment(retCheck));
            }
          }
        };

        return BlockScoping;
      }();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9ibG9jay1zY29waW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7QUFJQSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXBCLENBQUYsRUFBb0M7QUFBRSxZQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU4sQ0FBRjtLQUF4QztHQUFsRDs7Ozs7O0FBOEJBLFdBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUIsTUFBckIsRUFBNkI7QUFDM0IsUUFBSSxDQUFDLEVBQUUscUJBQUYsQ0FBd0IsSUFBeEIsQ0FBRCxFQUFnQyxPQUFPLEtBQVAsQ0FBcEM7QUFDQSxRQUFJLEtBQUssSUFBTCxF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QUFDTCxnQkFBSSxJQUFJLFNBQUosRUFBZTtBQUNqQixtQkFBSyxJQUFMLENBQVUsS0FBSyxJQUFMLENBQVUsc0JBQVYsQ0FBaUMsUUFBakMsQ0FBVixFQURpQjthQUFuQjtXQXhCRjtTQWhCZ0MsQ0E5VUo7O0FBNFg5QixlQUFPLFlBQVAsQ0E1WDhCO09BQVoiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L2Jsb2NrLXNjb3BpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX3RyYXZlcnNhbCA9IHJlcXVpcmUoXCIuLi8uLi8uLi90cmF2ZXJzYWxcIik7XG5cbnZhciBfdHJhdmVyc2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYXZlcnNhbCk7XG5cbnZhciBfaGVscGVyc09iamVjdCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9oZWxwZXJzL29iamVjdFwiKTtcblxudmFyIF9oZWxwZXJzT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNPYmplY3QpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbFwiKTtcblxudmFyIHV0aWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbCk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIF9sb2Rhc2hPYmplY3RWYWx1ZXMgPSByZXF1aXJlKFwibG9kYXNoL29iamVjdC92YWx1ZXNcIik7XG5cbnZhciBfbG9kYXNoT2JqZWN0VmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaE9iamVjdFZhbHVlcyk7XG5cbnZhciBfbG9kYXNoT2JqZWN0RXh0ZW5kID0gcmVxdWlyZShcImxvZGFzaC9vYmplY3QvZXh0ZW5kXCIpO1xuXG52YXIgX2xvZGFzaE9iamVjdEV4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RFeHRlbmQpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGlzTGV0KG5vZGUsIHBhcmVudCkge1xuICBpZiAoIXQuaXNWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChub2RlLl9sZXQpIHJldHVybiB0cnVlO1xuICBpZiAobm9kZS5raW5kICE9PSBcImxldFwiKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy8yNTVcbiAgaWYgKGlzTGV0SW5pdGFibGUobm9kZSwgcGFyZW50KSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5kZWNsYXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uc1tpXTtcbiAgICAgIGRlY2xhci5pbml0ID0gZGVjbGFyLmluaXQgfHwgdC5pZGVudGlmaWVyKFwidW5kZWZpbmVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIG5vZGUuX2xldCA9IHRydWU7XG4gIG5vZGUua2luZCA9IFwidmFyXCI7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGlzTGV0SW5pdGFibGUobm9kZSwgcGFyZW50KSB7XG4gIHJldHVybiAhdC5pc0ZvcihwYXJlbnQpIHx8ICF0LmlzRm9yKHBhcmVudCwgeyBsZWZ0OiBub2RlIH0pO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGlzVmFyKG5vZGUsIHBhcmVudCkge1xuICByZXR1cm4gdC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSwgeyBraW5kOiBcInZhclwiIH0pICYmICFpc0xldChub2RlLCBwYXJlbnQpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHN0YW5kYXJkaXplTGV0cyhkZWNsYXJzKSB7XG4gIHZhciBfYXJyID0gZGVjbGFycztcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgZGVjbGFyID0gX2FycltfaV07XG4gICAgZGVsZXRlIGRlY2xhci5fbGV0O1xuICB9XG59XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgZ3JvdXA6IFwiYnVpbHRpbi1hZHZhbmNlZFwiXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgVmFyaWFibGVEZWNsYXJhdGlvbjogZnVuY3Rpb24gVmFyaWFibGVEZWNsYXJhdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgaWYgKCFpc0xldChub2RlLCBwYXJlbnQpKSByZXR1cm47XG5cbiAgICBpZiAoaXNMZXRJbml0YWJsZShub2RlKSAmJiBmaWxlLnRyYW5zZm9ybWVyc1tcImVzNi5zcGVjLmJsb2NrU2NvcGluZ1wiXS5jYW5UcmFuc2Zvcm0oKSkge1xuICAgICAgdmFyIG5vZGVzID0gW25vZGVdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuZGVjbGFyYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZWNsID0gbm9kZS5kZWNsYXJhdGlvbnNbaV07XG4gICAgICAgIGlmIChkZWNsLmluaXQpIHtcbiAgICAgICAgICB2YXIgYXNzaWduID0gdC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgZGVjbC5pZCwgZGVjbC5pbml0KTtcbiAgICAgICAgICBhc3NpZ24uX2lnbm9yZUJsb2NrU2NvcGluZ1REWiA9IHRydWU7XG4gICAgICAgICAgbm9kZXMucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQoYXNzaWduKSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVjbC5pbml0ID0gZmlsZS5hZGRIZWxwZXIoXCJ0ZW1wb3JhbC11bmRlZmluZWRcIik7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX2Jsb2NrSG9pc3QgPSAyO1xuXG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgTG9vcDogZnVuY3Rpb24gTG9vcChub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgdmFyIGluaXQgPSBub2RlLmxlZnQgfHwgbm9kZS5pbml0O1xuICAgIGlmIChpc0xldChpbml0LCBub2RlKSkge1xuICAgICAgdC5lbnN1cmVCbG9jayhub2RlKTtcbiAgICAgIG5vZGUuYm9keS5fbGV0RGVjbGFyYXRvcnMgPSBbaW5pdF07XG4gICAgfVxuXG4gICAgdmFyIGJsb2NrU2NvcGluZyA9IG5ldyBCbG9ja1Njb3BpbmcodGhpcywgdGhpcy5nZXQoXCJib2R5XCIpLCBwYXJlbnQsIHNjb3BlLCBmaWxlKTtcbiAgICByZXR1cm4gYmxvY2tTY29waW5nLnJ1bigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgXCJCbG9ja1N0YXRlbWVudHxQcm9ncmFtXCI6IGZ1bmN0aW9uIEJsb2NrU3RhdGVtZW50UHJvZ3JhbShibG9jaywgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIGlmICghdC5pc0xvb3AocGFyZW50KSkge1xuICAgICAgdmFyIGJsb2NrU2NvcGluZyA9IG5ldyBCbG9ja1Njb3BpbmcobnVsbCwgdGhpcywgcGFyZW50LCBzY29wZSwgZmlsZSk7XG4gICAgICBibG9ja1Njb3BpbmcucnVuKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiByZXBsYWNlKG5vZGUsIHBhcmVudCwgc2NvcGUsIHJlbWFwcykge1xuICB2YXIgcmVtYXAgPSByZW1hcHNbbm9kZS5uYW1lXTtcbiAgaWYgKCFyZW1hcCkgcmV0dXJuO1xuXG4gIHZhciBvd25CaW5kaW5nID0gc2NvcGUuZ2V0QmluZGluZ0lkZW50aWZpZXIobm9kZS5uYW1lKTtcbiAgaWYgKG93bkJpbmRpbmcgPT09IHJlbWFwLmJpbmRpbmcpIHtcbiAgICBub2RlLm5hbWUgPSByZW1hcC51aWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gc2NvcGUgYWxyZWFkeSBoYXMgaXQncyBvd24gYmluZGluZyB0aGF0IGRvZXNuJ3RcbiAgICAvLyBtYXRjaCB0aGUgb25lIHdlIGhhdmUgYSBzdG9yZWQgcmVwbGFjZW1lbnQgZm9yXG4gICAgaWYgKHRoaXMpIHRoaXMuc2tpcCgpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHJlcGxhY2VWaXNpdG9yID0ge1xuICBSZWZlcmVuY2VkSWRlbnRpZmllcjogcmVwbGFjZSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEFzc2lnbm1lbnRFeHByZXNzaW9uOiBmdW5jdGlvbiBBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlLCByZW1hcHMpIHtcbiAgICB2YXIgaWRzID0gdGhpcy5nZXRCaW5kaW5nSWRlbnRpZmllcnMoKTtcbiAgICBmb3IgKHZhciBuYW1lIGluIGlkcykge1xuICAgICAgcmVwbGFjZShpZHNbbmFtZV0sIG5vZGUsIHNjb3BlLCByZW1hcHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB0cmF2ZXJzZVJlcGxhY2Uobm9kZSwgcGFyZW50LCBzY29wZSwgcmVtYXBzKSB7XG4gIGlmICh0LmlzSWRlbnRpZmllcihub2RlKSkge1xuICAgIHJlcGxhY2Uobm9kZSwgcGFyZW50LCBzY29wZSwgcmVtYXBzKTtcbiAgfVxuXG4gIGlmICh0LmlzQXNzaWdubWVudEV4cHJlc3Npb24obm9kZSkpIHtcbiAgICB2YXIgaWRzID0gdC5nZXRCaW5kaW5nSWRlbnRpZmllcnMobm9kZSk7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBpZHMpIHtcbiAgICAgIHJlcGxhY2UoaWRzW25hbWVdLCBwYXJlbnQsIHNjb3BlLCByZW1hcHMpO1xuICAgIH1cbiAgfVxuXG4gIHNjb3BlLnRyYXZlcnNlKG5vZGUsIHJlcGxhY2VWaXNpdG9yLCByZW1hcHMpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBsZXRSZWZlcmVuY2VCbG9ja1Zpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGdW5jdGlvbjogZnVuY3Rpb24gRnVuY3Rpb24obm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICB0aGlzLnRyYXZlcnNlKGxldFJlZmVyZW5jZUZ1bmN0aW9uVmlzaXRvciwgc3RhdGUpO1xuICAgIHJldHVybiB0aGlzLnNraXAoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgbGV0UmVmZXJlbmNlRnVuY3Rpb25WaXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgUmVmZXJlbmNlZElkZW50aWZpZXI6IGZ1bmN0aW9uIFJlZmVyZW5jZWRJZGVudGlmaWVyKG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgdmFyIHJlZiA9IHN0YXRlLmxldFJlZmVyZW5jZXNbbm9kZS5uYW1lXTtcblxuICAgIC8vIG5vdCBhIHBhcnQgb2Ygb3VyIHNjb3BlXG4gICAgaWYgKCFyZWYpIHJldHVybjtcblxuICAgIC8vIHRoaXMgc2NvcGUgaGFzIGEgdmFyaWFibGUgd2l0aCB0aGUgc2FtZSBuYW1lIHNvIGl0IGNvdWxkbid0IGJlbG9uZ1xuICAgIC8vIHRvIG91ciBsZXQgc2NvcGVcbiAgICB2YXIgbG9jYWxCaW5kaW5nID0gc2NvcGUuZ2V0QmluZGluZ0lkZW50aWZpZXIobm9kZS5uYW1lKTtcbiAgICBpZiAobG9jYWxCaW5kaW5nICYmIGxvY2FsQmluZGluZyAhPT0gcmVmKSByZXR1cm47XG5cbiAgICBzdGF0ZS5jbG9zdXJpZnkgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBob2lzdFZhckRlY2xhcmF0aW9uc1Zpc2l0b3IgPSB7XG4gIGVudGVyOiBmdW5jdGlvbiBlbnRlcihub2RlLCBwYXJlbnQsIHNjb3BlLCBzZWxmKSB7XG4gICAgaWYgKHRoaXMuaXNGb3JTdGF0ZW1lbnQoKSkge1xuICAgICAgaWYgKGlzVmFyKG5vZGUuaW5pdCwgbm9kZSkpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gc2VsZi5wdXNoRGVjbGFyKG5vZGUuaW5pdCk7XG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBub2RlLmluaXQgPSBub2Rlc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLmluaXQgPSB0LnNlcXVlbmNlRXhwcmVzc2lvbihub2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNGb3IoKSkge1xuICAgICAgaWYgKGlzVmFyKG5vZGUubGVmdCwgbm9kZSkpIHtcbiAgICAgICAgc2VsZi5wdXNoRGVjbGFyKG5vZGUubGVmdCk7XG4gICAgICAgIG5vZGUubGVmdCA9IG5vZGUubGVmdC5kZWNsYXJhdGlvbnNbMF0uaWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1Zhcihub2RlLCBwYXJlbnQpKSB7XG4gICAgICByZXR1cm4gc2VsZi5wdXNoRGVjbGFyKG5vZGUpLm1hcCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNraXAoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIGxvb3BMYWJlbFZpc2l0b3IgPSB7XG4gIExhYmVsZWRTdGF0ZW1lbnQ6IGZ1bmN0aW9uIExhYmVsZWRTdGF0ZW1lbnQobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBzdGF0ZS5pbm5lckxhYmVscy5wdXNoKG5vZGUubGFiZWwubmFtZSk7XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIGNvbnRpbnVhdGlvblZpc2l0b3IgPSB7XG4gIGVudGVyOiBmdW5jdGlvbiBlbnRlcihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIGlmICh0aGlzLmlzQXNzaWdubWVudEV4cHJlc3Npb24oKSB8fCB0aGlzLmlzVXBkYXRlRXhwcmVzc2lvbigpKSB7XG4gICAgICB2YXIgYmluZGluZ3MgPSB0aGlzLmdldEJpbmRpbmdJZGVudGlmaWVycygpO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBiaW5kaW5ncykge1xuICAgICAgICBpZiAoc3RhdGUub3V0c2lkZVJlZmVyZW5jZXNbbmFtZV0gIT09IHNjb3BlLmdldEJpbmRpbmdJZGVudGlmaWVyKG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgc3RhdGUucmVhc3NpZ25tZW50c1tuYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBsb29wTm9kZVRvID0gZnVuY3Rpb24gbG9vcE5vZGVUbyhub2RlKSB7XG4gIGlmICh0LmlzQnJlYWtTdGF0ZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gXCJicmVha1wiO1xuICB9IGVsc2UgaWYgKHQuaXNDb250aW51ZVN0YXRlbWVudChub2RlKSkge1xuICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIGxvb3BWaXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgTG9vcDogZnVuY3Rpb24gTG9vcChub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIHZhciBvbGRJZ25vcmVMYWJlbGVzcyA9IHN0YXRlLmlnbm9yZUxhYmVsZXNzO1xuICAgIHN0YXRlLmlnbm9yZUxhYmVsZXNzID0gdHJ1ZTtcbiAgICB0aGlzLnRyYXZlcnNlKGxvb3BWaXNpdG9yLCBzdGF0ZSk7XG4gICAgc3RhdGUuaWdub3JlTGFiZWxlc3MgPSBvbGRJZ25vcmVMYWJlbGVzcztcbiAgICB0aGlzLnNraXAoKTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZ1bmN0aW9uOiBmdW5jdGlvbiBGdW5jdGlvbigpIHtcbiAgICB0aGlzLnNraXAoKTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFN3aXRjaENhc2U6IGZ1bmN0aW9uIFN3aXRjaENhc2Uobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICB2YXIgb2xkSW5Td2l0Y2hDYXNlID0gc3RhdGUuaW5Td2l0Y2hDYXNlO1xuICAgIHN0YXRlLmluU3dpdGNoQ2FzZSA9IHRydWU7XG4gICAgdGhpcy50cmF2ZXJzZShsb29wVmlzaXRvciwgc3RhdGUpO1xuICAgIHN0YXRlLmluU3dpdGNoQ2FzZSA9IG9sZEluU3dpdGNoQ2FzZTtcbiAgICB0aGlzLnNraXAoKTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIGVudGVyOiBmdW5jdGlvbiBlbnRlcihub2RlLCBwYXJlbnQsIHNjb3BlLCBzdGF0ZSkge1xuICAgIHZhciByZXBsYWNlO1xuICAgIHZhciBsb29wVGV4dCA9IGxvb3BOb2RlVG8obm9kZSk7XG5cbiAgICBpZiAobG9vcFRleHQpIHtcbiAgICAgIGlmIChub2RlLmxhYmVsKSB7XG4gICAgICAgIC8vIHdlIHNob3VsZG4ndCBiZSB0cmFuc2Zvcm1pbmcgdGhpcyBiZWNhdXNlIGl0IGV4aXN0cyBzb21ld2hlcmUgaW5zaWRlXG4gICAgICAgIGlmIChzdGF0ZS5pbm5lckxhYmVscy5pbmRleE9mKG5vZGUubGFiZWwubmFtZSkgPj0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvb3BUZXh0ID0gbG9vcFRleHQgKyBcInxcIiArIG5vZGUubGFiZWwubmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHdlIHNob3VsZG4ndCBiZSB0cmFuc2Zvcm1pbmcgdGhlc2Ugc3RhdGVtZW50cyBiZWNhdXNlXG4gICAgICAgIC8vIHRoZXkgZG9uJ3QgcmVmZXIgdG8gdGhlIGFjdHVhbCBsb29wIHdlJ3JlIHNjb3BpZnlpbmdcbiAgICAgICAgaWYgKHN0YXRlLmlnbm9yZUxhYmVsZXNzKSByZXR1cm47XG5cbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHN0YXRlLmluU3dpdGNoQ2FzZSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGJyZWFrIHN0YXRlbWVudHMgbWVhbiBzb21ldGhpbmcgZGlmZmVyZW50IGluIHRoaXMgY29udGV4dFxuICAgICAgICBpZiAodC5pc0JyZWFrU3RhdGVtZW50KG5vZGUpICYmIHQuaXNTd2l0Y2hDYXNlKHBhcmVudCkpIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuaGFzQnJlYWtDb250aW51ZSA9IHRydWU7XG4gICAgICBzdGF0ZS5tYXBbbG9vcFRleHRdID0gbm9kZTtcbiAgICAgIHJlcGxhY2UgPSB0LmxpdGVyYWwobG9vcFRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmV0dXJuU3RhdGVtZW50KCkpIHtcbiAgICAgIHN0YXRlLmhhc1JldHVybiA9IHRydWU7XG4gICAgICByZXBsYWNlID0gdC5vYmplY3RFeHByZXNzaW9uKFt0LnByb3BlcnR5KFwiaW5pdFwiLCB0LmlkZW50aWZpZXIoXCJ2XCIpLCBub2RlLmFyZ3VtZW50IHx8IHQuaWRlbnRpZmllcihcInVuZGVmaW5lZFwiKSldKTtcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgcmVwbGFjZSA9IHQucmV0dXJuU3RhdGVtZW50KHJlcGxhY2UpO1xuICAgICAgdGhpcy5za2lwKCk7XG4gICAgICByZXR1cm4gdC5pbmhlcml0cyhyZXBsYWNlLCBub2RlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIEJsb2NrU2NvcGluZyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJsb2NrU2NvcGluZyhsb29wUGF0aCwgYmxvY2tQYXRoLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJsb2NrU2NvcGluZyk7XG5cbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcblxuICAgIHRoaXMuYmxvY2tQYXRoID0gYmxvY2tQYXRoO1xuICAgIHRoaXMuYmxvY2sgPSBibG9ja1BhdGgubm9kZTtcblxuICAgIHRoaXMub3V0c2lkZUxldFJlZmVyZW5jZXMgPSBfaGVscGVyc09iamVjdDJbXCJkZWZhdWx0XCJdKCk7XG4gICAgdGhpcy5oYXNMZXRSZWZlcmVuY2VzID0gZmFsc2U7XG4gICAgdGhpcy5sZXRSZWZlcmVuY2VzID0gdGhpcy5ibG9jay5fbGV0UmVmZXJlbmNlcyA9IF9oZWxwZXJzT2JqZWN0MltcImRlZmF1bHRcIl0oKTtcbiAgICB0aGlzLmJvZHkgPSBbXTtcblxuICAgIGlmIChsb29wUGF0aCkge1xuICAgICAgdGhpcy5sb29wUGFyZW50ID0gbG9vcFBhdGgucGFyZW50O1xuICAgICAgdGhpcy5sb29wTGFiZWwgPSB0LmlzTGFiZWxlZFN0YXRlbWVudCh0aGlzLmxvb3BQYXJlbnQpICYmIHRoaXMubG9vcFBhcmVudC5sYWJlbDtcbiAgICAgIHRoaXMubG9vcFBhdGggPSBsb29wUGF0aDtcbiAgICAgIHRoaXMubG9vcCA9IGxvb3BQYXRoLm5vZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBiYWxsIHJvbGxpbmcuXG4gICAqL1xuXG4gIEJsb2NrU2NvcGluZy5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2s7XG4gICAgaWYgKGJsb2NrLl9sZXREb25lKSByZXR1cm47XG4gICAgYmxvY2suX2xldERvbmUgPSB0cnVlO1xuXG4gICAgdmFyIG5lZWRzQ2xvc3VyZSA9IHRoaXMuZ2V0TGV0UmVmZXJlbmNlcygpO1xuXG4gICAgLy8gdGhpcyBpcyBhIGJsb2NrIHdpdGhpbiBhIGBGdW5jdGlvbi9Qcm9ncmFtYCBzbyB3ZSBjYW4gc2FmZWx5IGxlYXZlIGl0IGJlXG4gICAgaWYgKHQuaXNGdW5jdGlvbih0aGlzLnBhcmVudCkgfHwgdC5pc1Byb2dyYW0odGhpcy5ibG9jaykpIHJldHVybjtcblxuICAgIC8vIHdlIGNhbiBza2lwIGV2ZXJ5dGhpbmdcbiAgICBpZiAoIXRoaXMuaGFzTGV0UmVmZXJlbmNlcykgcmV0dXJuO1xuXG4gICAgaWYgKG5lZWRzQ2xvc3VyZSkge1xuICAgICAgdGhpcy53cmFwQ2xvc3VyZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbWFwKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9vcExhYmVsICYmICF0LmlzTGFiZWxlZFN0YXRlbWVudCh0aGlzLmxvb3BQYXJlbnQpKSB7XG4gICAgICByZXR1cm4gdC5sYWJlbGVkU3RhdGVtZW50KHRoaXMubG9vcExhYmVsLCB0aGlzLmxvb3ApO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEJsb2NrU2NvcGluZy5wcm90b3R5cGUucmVtYXAgPSBmdW5jdGlvbiByZW1hcCgpIHtcbiAgICB2YXIgaGFzUmVtYXBzID0gZmFsc2U7XG4gICAgdmFyIGxldFJlZnMgPSB0aGlzLmxldFJlZmVyZW5jZXM7XG4gICAgdmFyIHNjb3BlID0gdGhpcy5zY29wZTtcblxuICAgIC8vIGFscmlnaHQsIHNvIHNpbmNlIHdlIGFyZW4ndCB3cmFwcGluZyB0aGlzIGJsb2NrIGluIGEgY2xvc3VyZVxuICAgIC8vIHdlIGhhdmUgdG8gY2hlY2sgaWYgYW55IG9mIG91ciBsZXQgdmFyaWFibGVzIGNvbGxpZGUgd2l0aFxuICAgIC8vIHRob3NlIGluIHVwcGVyIHNjb3BlcyBhbmQgdGhlbiBpZiB0aGV5IGRvLCBnZW5lcmF0ZSBhIHVpZFxuICAgIC8vIGZvciB0aGVtIGFuZCByZXBsYWNlIGFsbCByZWZlcmVuY2VzIHdpdGggaXRcbiAgICB2YXIgcmVtYXBzID0gX2hlbHBlcnNPYmplY3QyW1wiZGVmYXVsdFwiXSgpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGxldFJlZnMpIHtcbiAgICAgIC8vIGp1c3QgYW4gSWRlbnRpZmllciBub2RlIHdlIGNvbGxlY3RlZCBpbiBgZ2V0TGV0UmVmZXJlbmNlc2BcbiAgICAgIC8vIHRoaXMgaXMgdGhlIGRlZmluaW5nIGlkZW50aWZpZXIgb2YgYSBkZWNsYXJhdGlvblxuICAgICAgdmFyIHJlZiA9IGxldFJlZnNba2V5XTtcblxuICAgICAgLy8gdG9kbzogY291bGQgc2tpcCB0aGlzIGlmIHRoZSBjb2xsaWRpbmcgYmluZGluZyBpcyBpbiBhbm90aGVyIGZ1bmN0aW9uXG4gICAgICBpZiAoc2NvcGUucGFyZW50SGFzQmluZGluZyhrZXkpIHx8IHNjb3BlLmhhc0dsb2JhbChrZXkpKSB7XG4gICAgICAgIHZhciB1aWQgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIocmVmLm5hbWUpLm5hbWU7XG4gICAgICAgIHJlZi5uYW1lID0gdWlkO1xuXG4gICAgICAgIGhhc1JlbWFwcyA9IHRydWU7XG4gICAgICAgIHJlbWFwc1trZXldID0gcmVtYXBzW3VpZF0gPSB7XG4gICAgICAgICAgYmluZGluZzogcmVmLFxuICAgICAgICAgIHVpZDogdWlkXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoYXNSZW1hcHMpIHJldHVybjtcblxuICAgIC8vXG5cbiAgICB2YXIgbG9vcCA9IHRoaXMubG9vcDtcbiAgICBpZiAobG9vcCkge1xuICAgICAgdHJhdmVyc2VSZXBsYWNlKGxvb3AucmlnaHQsIGxvb3AsIHNjb3BlLCByZW1hcHMpO1xuICAgICAgdHJhdmVyc2VSZXBsYWNlKGxvb3AudGVzdCwgbG9vcCwgc2NvcGUsIHJlbWFwcyk7XG4gICAgICB0cmF2ZXJzZVJlcGxhY2UobG9vcC51cGRhdGUsIGxvb3AsIHNjb3BlLCByZW1hcHMpO1xuICAgIH1cblxuICAgIHRoaXMuYmxvY2tQYXRoLnRyYXZlcnNlKHJlcGxhY2VWaXNpdG9yLCByZW1hcHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQmxvY2tTY29waW5nLnByb3RvdHlwZS53cmFwQ2xvc3VyZSA9IGZ1bmN0aW9uIHdyYXBDbG9zdXJlKCkge1xuICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2s7XG5cbiAgICB2YXIgb3V0c2lkZVJlZnMgPSB0aGlzLm91dHNpZGVMZXRSZWZlcmVuY2VzO1xuXG4gICAgLy8gcmVtYXAgbG9vcCBoZWFkcyB3aXRoIGNvbGxpZGluZyB2YXJpYWJsZXNcbiAgICBpZiAodGhpcy5sb29wKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG91dHNpZGVSZWZzKSB7XG4gICAgICAgIHZhciBpZCA9IG91dHNpZGVSZWZzW25hbWVdO1xuXG4gICAgICAgIGlmICh0aGlzLnNjb3BlLmhhc0dsb2JhbChpZC5uYW1lKSB8fCB0aGlzLnNjb3BlLnBhcmVudEhhc0JpbmRpbmcoaWQubmFtZSkpIHtcbiAgICAgICAgICBkZWxldGUgb3V0c2lkZVJlZnNbaWQubmFtZV07XG4gICAgICAgICAgZGVsZXRlIHRoaXMubGV0UmVmZXJlbmNlc1tpZC5uYW1lXTtcblxuICAgICAgICAgIHRoaXMuc2NvcGUucmVuYW1lKGlkLm5hbWUpO1xuXG4gICAgICAgICAgdGhpcy5sZXRSZWZlcmVuY2VzW2lkLm5hbWVdID0gaWQ7XG4gICAgICAgICAgb3V0c2lkZVJlZnNbaWQubmFtZV0gPSBpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHdlJ3JlIGluc2lkZSBvZiBhIGZvciBsb29wIHRoZW4gd2Ugc2VhcmNoIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55XG4gICAgLy8gYGJyZWFrYHMsIGBjb250aW51ZWBzLCBgcmV0dXJuYHMgZXRjXG4gICAgdGhpcy5oYXMgPSB0aGlzLmNoZWNrTG9vcCgpO1xuXG4gICAgLy8gaG9pc3QgdmFyIHJlZmVyZW5jZXMgdG8gcmV0YWluIHNjb3BlXG4gICAgdGhpcy5ob2lzdFZhckRlY2xhcmF0aW9ucygpO1xuXG4gICAgLy8gdHVybiBvdXRzaWRlTGV0UmVmZXJlbmNlcyBpbnRvIGFuIGFycmF5XG4gICAgdmFyIHBhcmFtcyA9IF9sb2Rhc2hPYmplY3RWYWx1ZXMyW1wiZGVmYXVsdFwiXShvdXRzaWRlUmVmcyk7XG4gICAgdmFyIGFyZ3MgPSBfbG9kYXNoT2JqZWN0VmFsdWVzMltcImRlZmF1bHRcIl0ob3V0c2lkZVJlZnMpO1xuXG4gICAgLy8gYnVpbGQgdGhlIGNsb3N1cmUgdGhhdCB3ZSdyZSBnb2luZyB0byB3cmFwIHRoZSBibG9jayB3aXRoXG4gICAgdmFyIGZuID0gdC5mdW5jdGlvbkV4cHJlc3Npb24obnVsbCwgcGFyYW1zLCB0LmJsb2NrU3RhdGVtZW50KGJsb2NrLmJvZHkpKTtcbiAgICBmbi5zaGFkb3cgPSB0cnVlO1xuXG4gICAgLy8gY29udGludWF0aW9uXG4gICAgdGhpcy5hZGRDb250aW51YXRpb25zKGZuKTtcblxuICAgIC8vIHJlcGxhY2UgdGhlIGN1cnJlbnQgYmxvY2sgYm9keSB3aXRoIHRoZSBvbmUgd2UncmUgZ29pbmcgdG8gYnVpbGRcbiAgICBibG9jay5ib2R5ID0gdGhpcy5ib2R5O1xuXG4gICAgdmFyIHJlZiA9IGZuO1xuXG4gICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgcmVmID0gdGhpcy5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJsb29wXCIpO1xuICAgICAgdGhpcy5sb29wUGF0aC5pbnNlcnRCZWZvcmUodC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihyZWYsIGZuKV0pKTtcbiAgICB9XG5cbiAgICAvLyBidWlsZCBhIGNhbGwgYW5kIGEgdW5pcXVlIGlkIHRoYXQgd2UgY2FuIGFzc2lnbiB0aGUgcmV0dXJuIHZhbHVlIHRvXG4gICAgdmFyIGNhbGwgPSB0LmNhbGxFeHByZXNzaW9uKHJlZiwgYXJncyk7XG4gICAgdmFyIHJldCA9IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwicmV0XCIpO1xuXG4gICAgLy8gaGFuZGxlIGdlbmVyYXRvcnNcbiAgICB2YXIgaGFzWWllbGQgPSBfdHJhdmVyc2FsMltcImRlZmF1bHRcIl0uaGFzVHlwZShmbi5ib2R5LCB0aGlzLnNjb3BlLCBcIllpZWxkRXhwcmVzc2lvblwiLCB0LkZVTkNUSU9OX1RZUEVTKTtcbiAgICBpZiAoaGFzWWllbGQpIHtcbiAgICAgIGZuLmdlbmVyYXRvciA9IHRydWU7XG4gICAgICBjYWxsID0gdC55aWVsZEV4cHJlc3Npb24oY2FsbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlcnMgYXN5bmMgZnVuY3Rpb25zXG4gICAgdmFyIGhhc0FzeW5jID0gX3RyYXZlcnNhbDJbXCJkZWZhdWx0XCJdLmhhc1R5cGUoZm4uYm9keSwgdGhpcy5zY29wZSwgXCJBd2FpdEV4cHJlc3Npb25cIiwgdC5GVU5DVElPTl9UWVBFUyk7XG4gICAgaWYgKGhhc0FzeW5jKSB7XG4gICAgICBmbi5hc3luYyA9IHRydWU7XG4gICAgICBjYWxsID0gdC5hd2FpdEV4cHJlc3Npb24oY2FsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5idWlsZENsb3N1cmUocmV0LCBjYWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogUHVzaCB0aGUgY2xvc3VyZSB0byB0aGUgYm9keS5cbiAgICovXG5cbiAgQmxvY2tTY29waW5nLnByb3RvdHlwZS5idWlsZENsb3N1cmUgPSBmdW5jdGlvbiBidWlsZENsb3N1cmUocmV0LCBjYWxsKSB7XG4gICAgdmFyIGhhcyA9IHRoaXMuaGFzO1xuICAgIGlmIChoYXMuaGFzUmV0dXJuIHx8IGhhcy5oYXNCcmVha0NvbnRpbnVlKSB7XG4gICAgICB0aGlzLmJ1aWxkSGFzKHJldCwgY2FsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm9keS5wdXNoKHQuZXhwcmVzc2lvblN0YXRlbWVudChjYWxsKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBhbnkgb2YgdGhlIG91dGVyIGxldCB2YXJpYWJsZXMgYXJlIHJlYXNzaWduZWQgdGhlbiB3ZSBuZWVkIHRvIHJlbmFtZSB0aGVtIGluXG4gICAqIHRoZSBjbG9zdXJlIHNvIHdlIGNhbiBnZXQgZGlyZWN0IGFjY2VzcyB0byB0aGUgb3V0ZXIgdmFyaWFibGUgdG8gY29udGludWUgdGhlXG4gICAqIGl0ZXJhdGlvbiB3aXRoIGJpbmRpbmdzIGJhc2VkIG9uIGVhY2ggaXRlcmF0aW9uLlxuICAgKlxuICAgKiBSZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvMTA3OFxuICAgKi9cblxuICBCbG9ja1Njb3BpbmcucHJvdG90eXBlLmFkZENvbnRpbnVhdGlvbnMgPSBmdW5jdGlvbiBhZGRDb250aW51YXRpb25zKGZuKSB7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcmVhc3NpZ25tZW50czoge30sXG4gICAgICBvdXRzaWRlUmVmZXJlbmNlczogdGhpcy5vdXRzaWRlTGV0UmVmZXJlbmNlc1xuICAgIH07XG5cbiAgICB0aGlzLnNjb3BlLnRyYXZlcnNlKGZuLCBjb250aW51YXRpb25WaXNpdG9yLCBzdGF0ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZuLnBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcmFtID0gZm4ucGFyYW1zW2ldO1xuICAgICAgaWYgKCFzdGF0ZS5yZWFzc2lnbm1lbnRzW3BhcmFtLm5hbWVdKSBjb250aW51ZTtcblxuICAgICAgdmFyIG5ld1BhcmFtID0gdGhpcy5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIocGFyYW0ubmFtZSk7XG4gICAgICBmbi5wYXJhbXNbaV0gPSBuZXdQYXJhbTtcblxuICAgICAgdGhpcy5zY29wZS5yZW5hbWUocGFyYW0ubmFtZSwgbmV3UGFyYW0ubmFtZSwgZm4pO1xuXG4gICAgICAvLyBhc3NpZ24gb3V0ZXIgcmVmZXJlbmNlIGFzIGl0J3MgYmVlbiBtb2RpZmllZCBpbnRlcm5hbGx5IGFuZCBuZWVkcyB0byBiZSByZXRhaW5lZFxuICAgICAgZm4uYm9keS5ib2R5LnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHBhcmFtLCBuZXdQYXJhbSkpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBCbG9ja1Njb3BpbmcucHJvdG90eXBlLmdldExldFJlZmVyZW5jZXMgPSBmdW5jdGlvbiBnZXRMZXRSZWZlcmVuY2VzKCkge1xuICAgIHZhciBibG9jayA9IHRoaXMuYmxvY2s7XG5cbiAgICB2YXIgZGVjbGFyYXRvcnMgPSBibG9jay5fbGV0RGVjbGFyYXRvcnMgfHwgW107XG5cbiAgICAvL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVjbGFyYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZWNsYXIgPSBkZWNsYXJhdG9yc1tpXTtcbiAgICAgIF9sb2Rhc2hPYmplY3RFeHRlbmQyW1wiZGVmYXVsdFwiXSh0aGlzLm91dHNpZGVMZXRSZWZlcmVuY2VzLCB0LmdldEJpbmRpbmdJZGVudGlmaWVycyhkZWNsYXIpKTtcbiAgICB9XG5cbiAgICAvL1xuICAgIGlmIChibG9jay5ib2R5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrLmJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlY2xhciA9IGJsb2NrLmJvZHlbaV07XG4gICAgICAgIGlmIChpc0xldChkZWNsYXIsIGJsb2NrKSkge1xuICAgICAgICAgIGRlY2xhcmF0b3JzID0gZGVjbGFyYXRvcnMuY29uY2F0KGRlY2xhci5kZWNsYXJhdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlY2xhcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVjbGFyID0gZGVjbGFyYXRvcnNbaV07XG4gICAgICB2YXIga2V5cyA9IHQuZ2V0QmluZGluZ0lkZW50aWZpZXJzKGRlY2xhcik7XG4gICAgICBfbG9kYXNoT2JqZWN0RXh0ZW5kMltcImRlZmF1bHRcIl0odGhpcy5sZXRSZWZlcmVuY2VzLCBrZXlzKTtcbiAgICAgIHRoaXMuaGFzTGV0UmVmZXJlbmNlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gbm8gbGV0IHJlZmVyZW5jZXMgc28gd2UgY2FuIGp1c3QgcXVpdFxuICAgIGlmICghdGhpcy5oYXNMZXRSZWZlcmVuY2VzKSByZXR1cm47XG5cbiAgICAvLyBzZXQgbGV0IHJlZmVyZW5jZXMgdG8gcGxhaW4gdmFyIHJlZmVyZW5jZXNcbiAgICBzdGFuZGFyZGl6ZUxldHMoZGVjbGFyYXRvcnMpO1xuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgbGV0UmVmZXJlbmNlczogdGhpcy5sZXRSZWZlcmVuY2VzLFxuICAgICAgY2xvc3VyaWZ5OiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyB0cmF2ZXJzZSB0aHJvdWdoIHRoaXMgYmxvY2ssIHN0b3BwaW5nIG9uIGZ1bmN0aW9ucyBhbmQgY2hlY2tpbmcgaWYgdGhleVxuICAgIC8vIGNvbnRhaW4gYW55IGxvY2FsIGxldCByZWZlcmVuY2VzXG4gICAgdGhpcy5ibG9ja1BhdGgudHJhdmVyc2UobGV0UmVmZXJlbmNlQmxvY2tWaXNpdG9yLCBzdGF0ZSk7XG5cbiAgICByZXR1cm4gc3RhdGUuY2xvc3VyaWZ5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiB3ZSdyZSBpbnNpZGUgb2YgYSBsb29wIHRoZW4gdHJhdmVyc2UgaXQgYW5kIGNoZWNrIGlmIGl0IGhhcyBvbmUgb2ZcbiAgICogdGhlIGZvbGxvd2luZyBub2RlIHR5cGVzIGBSZXR1cm5TdGF0ZW1lbnRgLCBgQnJlYWtTdGF0ZW1lbnRgLFxuICAgKiBgQ29udGludWVTdGF0ZW1lbnRgIGFuZCByZXBsYWNlIGl0IHdpdGggYSByZXR1cm4gdmFsdWUgdGhhdCB3ZSBjYW4gdHJhY2tcbiAgICogbGF0ZXIgb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuXG4gIEJsb2NrU2NvcGluZy5wcm90b3R5cGUuY2hlY2tMb29wID0gZnVuY3Rpb24gY2hlY2tMb29wKCkge1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIGhhc0JyZWFrQ29udGludWU6IGZhbHNlLFxuICAgICAgaWdub3JlTGFiZWxlc3M6IGZhbHNlLFxuICAgICAgaW5Td2l0Y2hDYXNlOiBmYWxzZSxcbiAgICAgIGlubmVyTGFiZWxzOiBbXSxcbiAgICAgIGhhc1JldHVybjogZmFsc2UsXG4gICAgICBpc0xvb3A6ICEhdGhpcy5sb29wLFxuICAgICAgbWFwOiB7fVxuICAgIH07XG5cbiAgICB0aGlzLmJsb2NrUGF0aC50cmF2ZXJzZShsb29wTGFiZWxWaXNpdG9yLCBzdGF0ZSk7XG4gICAgdGhpcy5ibG9ja1BhdGgudHJhdmVyc2UobG9vcFZpc2l0b3IsIHN0YXRlKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICAvKipcbiAgICogSG9pc3QgYWxsIHZhciBkZWNsYXJhdGlvbnMgaW4gdGhpcyBibG9jayB0byBiZWZvcmUgaXQgc28gdGhleSByZXRhaW4gc2NvcGVcbiAgICogb25jZSB3ZSB3cmFwIGV2ZXJ5dGhpbmcgaW4gYSBjbG9zdXJlLlxuICAgKi9cblxuICBCbG9ja1Njb3BpbmcucHJvdG90eXBlLmhvaXN0VmFyRGVjbGFyYXRpb25zID0gZnVuY3Rpb24gaG9pc3RWYXJEZWNsYXJhdGlvbnMoKSB7XG4gICAgdGhpcy5ibG9ja1BhdGgudHJhdmVyc2UoaG9pc3RWYXJEZWNsYXJhdGlvbnNWaXNpdG9yLCB0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogVHVybiBhIGBWYXJpYWJsZURlY2xhcmF0aW9uYCBpbnRvIGFuIGFycmF5IG9mIGBBc3NpZ25tZW50RXhwcmVzc2lvbnNgIHdpdGhcbiAgICogdGhlaXIgZGVjbGFyYXRpb25zIGhvaXN0ZWQgdG8gYmVmb3JlIHRoZSBjbG9zdXJlIHdyYXBwZXIuXG4gICAqL1xuXG4gIEJsb2NrU2NvcGluZy5wcm90b3R5cGUucHVzaERlY2xhciA9IGZ1bmN0aW9uIHB1c2hEZWNsYXIobm9kZSkge1xuICAgIHZhciBkZWNsYXJzID0gW107XG4gICAgdmFyIG5hbWVzID0gdC5nZXRCaW5kaW5nSWRlbnRpZmllcnMobm9kZSk7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBuYW1lcykge1xuICAgICAgZGVjbGFycy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdG9yKG5hbWVzW25hbWVdKSk7XG4gICAgfVxuXG4gICAgdGhpcy5ib2R5LnB1c2godC52YXJpYWJsZURlY2xhcmF0aW9uKG5vZGUua2luZCwgZGVjbGFycykpO1xuXG4gICAgdmFyIHJlcGxhY2UgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5kZWNsYXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uc1tpXTtcbiAgICAgIGlmICghZGVjbGFyLmluaXQpIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgZXhwciA9IHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIGRlY2xhci5pZCwgZGVjbGFyLmluaXQpO1xuICAgICAgcmVwbGFjZS5wdXNoKHQuaW5oZXJpdHMoZXhwciwgZGVjbGFyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBCbG9ja1Njb3BpbmcucHJvdG90eXBlLmJ1aWxkSGFzID0gZnVuY3Rpb24gYnVpbGRIYXMocmV0LCBjYWxsKSB7XG4gICAgdmFyIGJvZHkgPSB0aGlzLmJvZHk7XG5cbiAgICBib2R5LnB1c2godC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihyZXQsIGNhbGwpXSkpO1xuXG4gICAgdmFyIHJldENoZWNrO1xuICAgIHZhciBoYXMgPSB0aGlzLmhhcztcbiAgICB2YXIgY2FzZXMgPSBbXTtcblxuICAgIGlmIChoYXMuaGFzUmV0dXJuKSB7XG4gICAgICAvLyB0eXBlb2YgcmV0ID09PSBcIm9iamVjdFwiXG4gICAgICByZXRDaGVjayA9IHV0aWwudGVtcGxhdGUoXCJsZXQtc2NvcGluZy1yZXR1cm5cIiwge1xuICAgICAgICBSRVRVUk46IHJldFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGhhcy5oYXNCcmVha0NvbnRpbnVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaGFzLm1hcCkge1xuICAgICAgICBjYXNlcy5wdXNoKHQuc3dpdGNoQ2FzZSh0LmxpdGVyYWwoa2V5KSwgW2hhcy5tYXBba2V5XV0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhcy5oYXNSZXR1cm4pIHtcbiAgICAgICAgY2FzZXMucHVzaCh0LnN3aXRjaENhc2UobnVsbCwgW3JldENoZWNrXSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FzZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBzaW5nbGUgPSBjYXNlc1swXTtcbiAgICAgICAgYm9keS5wdXNoKHRoaXMuZmlsZS5hdHRhY2hBdXhpbGlhcnlDb21tZW50KHQuaWZTdGF0ZW1lbnQodC5iaW5hcnlFeHByZXNzaW9uKFwiPT09XCIsIHJldCwgc2luZ2xlLnRlc3QpLCBzaW5nbGUuY29uc2VxdWVudFswXSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvOTk4XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FzZUNvbnNlcXVlbnQgPSBjYXNlc1tpXS5jb25zZXF1ZW50WzBdO1xuICAgICAgICAgIGlmICh0LmlzQnJlYWtTdGF0ZW1lbnQoY2FzZUNvbnNlcXVlbnQpICYmICFjYXNlQ29uc2VxdWVudC5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZUNvbnNlcXVlbnQubGFiZWwgPSB0aGlzLmxvb3BMYWJlbCA9IHRoaXMubG9vcExhYmVsIHx8IHRoaXMuZmlsZS5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJsb29wXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkucHVzaCh0aGlzLmZpbGUuYXR0YWNoQXV4aWxpYXJ5Q29tbWVudCh0LnN3aXRjaFN0YXRlbWVudChyZXQsIGNhc2VzKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzLmhhc1JldHVybikge1xuICAgICAgICBib2R5LnB1c2godGhpcy5maWxlLmF0dGFjaEF1eGlsaWFyeUNvbW1lbnQocmV0Q2hlY2spKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEJsb2NrU2NvcGluZztcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
