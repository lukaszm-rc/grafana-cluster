/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashCollectionReduceRight, _lodashCollectionReduceRight2, _messages, messages, _lodashArrayFlatten, _lodashArrayFlatten2, _util, util, _lodashCollectionMap, _lodashCollectionMap2, _types, t, metadata, visitor, visitor, TailCallTransformer;

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

  function returnBlock(expr) {
    return t.blockStatement([t.returnStatement(expr)]);
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_lodashCollectionReduceRight = require("lodash/collection/reduceRight");
      _lodashCollectionReduceRight2 = _interopRequireDefault(_lodashCollectionReduceRight);
      _messages = require("../../../messages");
      messages = _interopRequireWildcard(_messages);
      _lodashArrayFlatten = require("lodash/array/flatten");
      _lodashArrayFlatten2 = _interopRequireDefault(_lodashArrayFlatten);
      _util = require("../../../util");
      util = _interopRequireWildcard(_util);
      _lodashCollectionMap = require("lodash/collection/map");
      _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-trailing"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function(node, parent, scope, file) {
          if (node.generator || node.async) return;
          var tailCall = new TailCallTransformer(this, scope, file);
          tailCall.run();
        }
      };


      exports.visitor = visitor;visitor = {

        /**
         * [Please add a description.]
         */

        enter: function enter(node, parent) {
          if (t.isTryStatement(parent)) {
            if (node === parent.block) {
              this.skip();
            } else if (parent.finalizer && node !== parent.finalizer) {
              this.skip();
            }
          }
        },

        /**
         * [Please add a description.]
         */

        ReturnStatement: function ReturnStatement(node, parent, scope, state) {
          return state.subTransform(node.argument);
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

        VariableDeclaration: function VariableDeclaration(node, parent, scope, state) {
          state.vars.push(node);
        },

        /**
         * [Please add a description.]
         */

        ThisExpression: function ThisExpression(node, parent, scope, state) {
          if (!state.isShadowed) {
            state.needsThis = true;
            state.thisPaths.push(this);
          }
        },

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          if (node.name === "arguments" && (!state.isShadowed || node._shadowedFunctionLiteral)) {
            state.needsArguments = true;
            state.argumentsPaths.push(this);
          }
        }
      };

      TailCallTransformer = function () {
        function TailCallTransformer(path, scope, file) {
          _classCallCheck(this, TailCallTransformer);

          this.hasTailRecursion = false;

          this.needsArguments = false;
          this.argumentsPaths = [];
          this.setsArguments = false;

          this.needsThis = false;
          this.thisPaths = [];

          this.isShadowed = path.isArrowFunctionExpression() || path.is("shadow");
          this.ownerId = path.node.id;
          this.vars = [];

          this.scope = scope;
          this.path = path;
          this.file = file;
          this.node = path.node;
        }

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.getArgumentsId = function getArgumentsId() {
          return this.argumentsId = this.argumentsId || this.scope.generateUidIdentifier("arguments");
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.getThisId = function getThisId() {
          return this.thisId = this.thisId || this.scope.generateUidIdentifier("this");
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.getLeftId = function getLeftId() {
          return this.leftId = this.leftId || this.scope.generateUidIdentifier("left");
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.getFunctionId = function getFunctionId() {
          return this.functionId = this.functionId || this.scope.generateUidIdentifier("function");
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.getAgainId = function getAgainId() {
          return this.againId = this.againId || this.scope.generateUidIdentifier("again");
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.getParams = function getParams() {
          var params = this.params;

          if (!params) {
            params = this.node.params;
            this.paramDecls = [];

            for (var i = 0; i < params.length; i++) {
              var param = params[i];
              if (!param._isDefaultPlaceholder) {
                this.paramDecls.push(t.variableDeclarator(param, params[i] = this.scope.generateUidIdentifier("x")));
              }
            }
          }

          return this.params = params;
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.hasDeopt = function hasDeopt() {
          // check if the ownerId has been reassigned, if it has then it's not safe to
          // perform optimisations
          var ownerIdInfo = this.scope.getBinding(this.ownerId.name);
          return ownerIdInfo && !ownerIdInfo.constant;
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.run = function run() {
          var node = this.node;

          // only tail recursion can be optimized as for now, so we can skip anonymous
          // functions entirely
          var ownerId = this.ownerId;
          if (!ownerId) return;

          // traverse the function and look for tail recursion
          this.path.traverse(visitor, this);

          // has no tail call recursion
          if (!this.hasTailRecursion) return;

          // the function binding isn't constant so we can't be sure that it's the same function :(
          if (this.hasDeopt()) {
            this.file.log.deopt(node, messages.get("tailCallReassignmentDeopt"));
            return;
          }

          //

          var body = this.path.ensureBlock().body;

          for (var i = 0; i < body.length; i++) {
            var bodyNode = body[i];
            if (!t.isFunctionDeclaration(bodyNode)) continue;

            bodyNode = body[i] = t.variableDeclaration("var", [t.variableDeclarator(bodyNode.id, t.toExpression(bodyNode))]);
            bodyNode._blockHoist = 2;
          }

          var paramDecls = this.paramDecls;
          if (paramDecls.length > 0) {
            var paramDecl = t.variableDeclaration("var", paramDecls);
            paramDecl._blockHoist = Infinity;
            body.unshift(paramDecl);
          }

          body.unshift(t.expressionStatement(t.assignmentExpression("=", this.getAgainId(), t.literal(false))));

          node.body = util.template("tail-call-body", {
            FUNCTION_ID: this.getFunctionId(),
            AGAIN_ID: this.getAgainId(),
            BLOCK: node.body
          });

          var topVars = [];

          if (this.needsThis) {
            var _arr = this.thisPaths;

            for (var _i = 0; _i < _arr.length; _i++) {
              var path = _arr[_i];
              path.replaceWith(this.getThisId());
            }

            topVars.push(t.variableDeclarator(this.getThisId(), t.thisExpression()));
          }

          if (this.needsArguments || this.setsArguments) {
            var _arr2 = this.argumentsPaths;

            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
              var _path = _arr2[_i2];
              _path.replaceWith(this.argumentsId);
            }

            var decl = t.variableDeclarator(this.argumentsId);
            if (this.argumentsId) {
              decl.init = t.identifier("arguments");
              decl.init._shadowedFunctionLiteral = this.path;
            }
            topVars.push(decl);
          }

          var leftId = this.leftId;
          if (leftId) {
            topVars.push(t.variableDeclarator(leftId));
          }

          if (topVars.length > 0) {
            node.body.body.unshift(t.variableDeclaration("var", topVars));
          }
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.subTransform = function subTransform(node) {
          if (!node) return;

          var handler = this["subTransform" + node.type];
          if (handler) return handler.call(this, node);
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.subTransformConditionalExpression = function subTransformConditionalExpression(node) {
          var callConsequent = this.subTransform(node.consequent);
          var callAlternate = this.subTransform(node.alternate);
          if (!callConsequent && !callAlternate) {
            return;
          }

          // if ternary operator had tail recursion in value, convert to optimized if-statement
          node.type = "IfStatement";
          node.consequent = callConsequent ? t.toBlock(callConsequent) : returnBlock(node.consequent);

          if (callAlternate) {
            node.alternate = t.isIfStatement(callAlternate) ? callAlternate : t.toBlock(callAlternate);
          } else {
            node.alternate = returnBlock(node.alternate);
          }

          return [node];
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.subTransformLogicalExpression = function subTransformLogicalExpression(node) {
          // only call in right-value of can be optimized
          var callRight = this.subTransform(node.right);
          if (!callRight) return;

          // cache left value as it might have side-effects
          var leftId = this.getLeftId();
          var testExpr = t.assignmentExpression("=", leftId, node.left);

          if (node.operator === "&&") {
            testExpr = t.unaryExpression("!", testExpr);
          }

          return [t.ifStatement(testExpr, returnBlock(leftId))].concat(callRight);
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.subTransformSequenceExpression = function subTransformSequenceExpression(node) {
          var seq = node.expressions;

          // only last element can be optimized
          var lastCall = this.subTransform(seq[seq.length - 1]);
          if (!lastCall) {
            return;
          }

          // remove converted expression from sequence
          // and convert to regular expression if needed
          if (--seq.length === 1) {
            node = seq[0];
          }

          return [t.expressionStatement(node)].concat(lastCall);
        };

        /**
         * [Please add a description.]
         */

        TailCallTransformer.prototype.subTransformCallExpression = function subTransformCallExpression(node) {
          var callee = node.callee;
          var thisBinding, args;

          if (t.isMemberExpression(callee, { computed: false }) && t.isIdentifier(callee.property)) {
            switch (callee.property.name) {
              case "call":
                args = t.arrayExpression(node.arguments.slice(1));
                break;

              case "apply":
                args = node.arguments[1] || t.identifier("undefined");
                this.needsArguments = true;
                break;

              default:
                return;
            }

            thisBinding = node.arguments[0];
            callee = callee.object;
          }

          // only tail recursion can be optimized as for now
          if (!t.isIdentifier(callee) || !this.scope.bindingIdentifierEquals(callee.name, this.ownerId)) {
            return;
          }

          this.hasTailRecursion = true;

          if (this.hasDeopt()) return;

          var body = [];

          if (this.needsThis && !t.isThisExpression(thisBinding)) {
            body.push(t.expressionStatement(t.assignmentExpression("=", this.getThisId(), thisBinding || t.identifier("undefined"))));
          }

          if (!args) {
            args = t.arrayExpression(node.arguments);
          }

          var argumentsId = this.getArgumentsId();
          var params = this.getParams();

          if (this.needsArguments) {
            body.push(t.expressionStatement(t.assignmentExpression("=", argumentsId, args)));
          }

          if (t.isArrayExpression(args)) {
            var elems = args.elements;

            // pad out the args so all the function args are reset - https://github.com/babel/babel/issues/1938
            while (elems.length < params.length) {
              elems.push(t.identifier("undefined"));
            }

            for (var i = 0; i < elems.length; i++) {
              var param = params[i];
              var elem = elems[i];

              if (param && !param._isDefaultPlaceholder) {
                elems[i] = t.assignmentExpression("=", param, elem);
              } else {
                // exceeds parameters but push it anyway to ensure correct execution
              }
            }

            if (!this.needsArguments) {
              var _arr3 = elems;

              for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
                var elem = _arr3[_i3];
                // only push expressions that we really need, this will skip pure arguments that exceed the
                // parameter length of the current function
                if (!this.scope.isPure(elem)) {
                  body.push(t.expressionStatement(elem));
                }
              }
            }
          } else {
            this.setsArguments = true;
            for (var i = 0; i < params.length; i++) {
              var param = params[i];
              if (!param._isDefaultPlaceholder) {
                body.push(t.expressionStatement(t.assignmentExpression("=", param, t.memberExpression(argumentsId, t.literal(i), true))));
              }
            }
          }

          body.push(t.expressionStatement(t.assignmentExpression("=", this.getAgainId(), t.literal(true))));

          if (this.vars.length > 0) {
            var declarations = _lodashArrayFlatten2["default"](_lodashCollectionMap2["default"](this.vars, function (decl) {
              return decl.declarations;
            }));

            var assignment = _lodashCollectionReduceRight2["default"](declarations, function (expr, decl) {
              return t.assignmentExpression("=", decl.id, expr);
            }, t.identifier("undefined"));

            var statement = t.expressionStatement(assignment);
            body.push(statement);
          }

          body.push(t.continueStatement(this.getFunctionId()));

          return body;
        };

        return TailCallTransformer;
      }();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi90YWlsLWNhbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7Ozs7QUFxREEsV0FBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCO0FBQ3pCLFdBQU8sRUFBRSxjQUFGLENBQWlCLENBQUMsRUFBRSxlQUFGLENBQWtCLElBQWxCLENBQUQsQ0FBakIsQ0FBUCxDQUR5QjtHQUEzQjs7Ozs7Ozs7O0FBaEVBLGNBQVEs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QTRCLEtBQUssRUFBTCxFQUFTLElBQXJDLENBQVAsQ0FENEY7YUFBdEIsRUFFckUsRUFBRSxVQUFGLENBQWEsV0FBYixDQUZjLENBQWIsQ0FMb0I7O0FBU3hCLGdCQUFJLFlBQVksRUFBRSxtQkFBRixDQUFzQixVQUF0QixDQUFaLENBVG9CO0FBVXhCLGlCQUFLLElBQUwsQ0FBVSxTQUFWLEVBVndCO1dBQTFCOztBQWFBLGVBQUssSUFBTCxDQUFVLEVBQUUsaUJBQUYsQ0FBb0IsS0FBSyxhQUFMLEVBQXBCLENBQVYsRUF6R21HOztBQTJHbkcsaUJBQU8sSUFBUCxDQTNHbUc7U0FBMUMsQ0EzUXRCOztBQXlYckMsZUFBTyxtQkFBUCxDQXpYcUM7T0FBWiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczYvdGFpbC1jYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uUmVkdWNlUmlnaHQgPSByZXF1aXJlKFwibG9kYXNoL2NvbGxlY3Rpb24vcmVkdWNlUmlnaHRcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvblJlZHVjZVJpZ2h0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25SZWR1Y2VSaWdodCk7XG5cbnZhciBfbWVzc2FnZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbWVzc2FnZXNcIik7XG5cbnZhciBtZXNzYWdlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tZXNzYWdlcyk7XG5cbnZhciBfbG9kYXNoQXJyYXlGbGF0dGVuID0gcmVxdWlyZShcImxvZGFzaC9hcnJheS9mbGF0dGVuXCIpO1xuXG52YXIgX2xvZGFzaEFycmF5RmxhdHRlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hBcnJheUZsYXR0ZW4pO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbFwiKTtcblxudmFyIHV0aWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbCk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbk1hcCA9IHJlcXVpcmUoXCJsb2Rhc2gvY29sbGVjdGlvbi9tYXBcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbk1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uTWFwKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tdHJhaWxpbmdcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZ1bmN0aW9uOiBmdW5jdGlvbiBGdW5jdGlvbihub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgaWYgKG5vZGUuZ2VuZXJhdG9yIHx8IG5vZGUuYXN5bmMpIHJldHVybjtcbiAgICB2YXIgdGFpbENhbGwgPSBuZXcgVGFpbENhbGxUcmFuc2Zvcm1lcih0aGlzLCBzY29wZSwgZmlsZSk7XG4gICAgdGFpbENhbGwucnVuKCk7XG4gIH1cbn07XG5cbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHJldHVybkJsb2NrKGV4cHIpIHtcbiAgcmV0dXJuIHQuYmxvY2tTdGF0ZW1lbnQoW3QucmV0dXJuU3RhdGVtZW50KGV4cHIpXSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBlbnRlcjogZnVuY3Rpb24gZW50ZXIobm9kZSwgcGFyZW50KSB7XG4gICAgaWYgKHQuaXNUcnlTdGF0ZW1lbnQocGFyZW50KSkge1xuICAgICAgaWYgKG5vZGUgPT09IHBhcmVudC5ibG9jaykge1xuICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LmZpbmFsaXplciAmJiBub2RlICE9PSBwYXJlbnQuZmluYWxpemVyKSB7XG4gICAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFJldHVyblN0YXRlbWVudDogZnVuY3Rpb24gUmV0dXJuU3RhdGVtZW50KG5vZGUsIHBhcmVudCwgc2NvcGUsIHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnN1YlRyYW5zZm9ybShub2RlLmFyZ3VtZW50KTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZ1bmN0aW9uOiBmdW5jdGlvbiBGdW5jdGlvbigpIHtcbiAgICB0aGlzLnNraXAoKTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFZhcmlhYmxlRGVjbGFyYXRpb246IGZ1bmN0aW9uIFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBzdGF0ZS52YXJzLnB1c2gobm9kZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUaGlzRXhwcmVzc2lvbjogZnVuY3Rpb24gVGhpc0V4cHJlc3Npb24obm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmlzU2hhZG93ZWQpIHtcbiAgICAgIHN0YXRlLm5lZWRzVGhpcyA9IHRydWU7XG4gICAgICBzdGF0ZS50aGlzUGF0aHMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZWZlcmVuY2VkSWRlbnRpZmllcjogZnVuY3Rpb24gUmVmZXJlbmNlZElkZW50aWZpZXIobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBpZiAobm9kZS5uYW1lID09PSBcImFyZ3VtZW50c1wiICYmICghc3RhdGUuaXNTaGFkb3dlZCB8fCBub2RlLl9zaGFkb3dlZEZ1bmN0aW9uTGl0ZXJhbCkpIHtcbiAgICAgIHN0YXRlLm5lZWRzQXJndW1lbnRzID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmFyZ3VtZW50c1BhdGhzLnB1c2godGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBUYWlsQ2FsbFRyYW5zZm9ybWVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGFpbENhbGxUcmFuc2Zvcm1lcihwYXRoLCBzY29wZSwgZmlsZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWlsQ2FsbFRyYW5zZm9ybWVyKTtcblxuICAgIHRoaXMuaGFzVGFpbFJlY3Vyc2lvbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5uZWVkc0FyZ3VtZW50cyA9IGZhbHNlO1xuICAgIHRoaXMuYXJndW1lbnRzUGF0aHMgPSBbXTtcbiAgICB0aGlzLnNldHNBcmd1bWVudHMgPSBmYWxzZTtcblxuICAgIHRoaXMubmVlZHNUaGlzID0gZmFsc2U7XG4gICAgdGhpcy50aGlzUGF0aHMgPSBbXTtcblxuICAgIHRoaXMuaXNTaGFkb3dlZCA9IHBhdGguaXNBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbigpIHx8IHBhdGguaXMoXCJzaGFkb3dcIik7XG4gICAgdGhpcy5vd25lcklkID0gcGF0aC5ub2RlLmlkO1xuICAgIHRoaXMudmFycyA9IFtdO1xuXG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB0aGlzLm5vZGUgPSBwYXRoLm5vZGU7XG4gIH1cblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhaWxDYWxsVHJhbnNmb3JtZXIucHJvdG90eXBlLmdldEFyZ3VtZW50c0lkID0gZnVuY3Rpb24gZ2V0QXJndW1lbnRzSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndW1lbnRzSWQgPSB0aGlzLmFyZ3VtZW50c0lkIHx8IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwiYXJndW1lbnRzXCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgVGFpbENhbGxUcmFuc2Zvcm1lci5wcm90b3R5cGUuZ2V0VGhpc0lkID0gZnVuY3Rpb24gZ2V0VGhpc0lkKCkge1xuICAgIHJldHVybiB0aGlzLnRoaXNJZCA9IHRoaXMudGhpc0lkIHx8IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwidGhpc1wiKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhaWxDYWxsVHJhbnNmb3JtZXIucHJvdG90eXBlLmdldExlZnRJZCA9IGZ1bmN0aW9uIGdldExlZnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0SWQgPSB0aGlzLmxlZnRJZCB8fCB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcImxlZnRcIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUYWlsQ2FsbFRyYW5zZm9ybWVyLnByb3RvdHlwZS5nZXRGdW5jdGlvbklkID0gZnVuY3Rpb24gZ2V0RnVuY3Rpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mdW5jdGlvbklkID0gdGhpcy5mdW5jdGlvbklkIHx8IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwiZnVuY3Rpb25cIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUYWlsQ2FsbFRyYW5zZm9ybWVyLnByb3RvdHlwZS5nZXRBZ2FpbklkID0gZnVuY3Rpb24gZ2V0QWdhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZ2FpbklkID0gdGhpcy5hZ2FpbklkIHx8IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwiYWdhaW5cIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBUYWlsQ2FsbFRyYW5zZm9ybWVyLnByb3RvdHlwZS5nZXRQYXJhbXMgPSBmdW5jdGlvbiBnZXRQYXJhbXMoKSB7XG4gICAgdmFyIHBhcmFtcyA9IHRoaXMucGFyYW1zO1xuXG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHBhcmFtcyA9IHRoaXMubm9kZS5wYXJhbXM7XG4gICAgICB0aGlzLnBhcmFtRGVjbHMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1zW2ldO1xuICAgICAgICBpZiAoIXBhcmFtLl9pc0RlZmF1bHRQbGFjZWhvbGRlcikge1xuICAgICAgICAgIHRoaXMucGFyYW1EZWNscy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdG9yKHBhcmFtLCBwYXJhbXNbaV0gPSB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcInhcIikpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhaWxDYWxsVHJhbnNmb3JtZXIucHJvdG90eXBlLmhhc0Rlb3B0ID0gZnVuY3Rpb24gaGFzRGVvcHQoKSB7XG4gICAgLy8gY2hlY2sgaWYgdGhlIG93bmVySWQgaGFzIGJlZW4gcmVhc3NpZ25lZCwgaWYgaXQgaGFzIHRoZW4gaXQncyBub3Qgc2FmZSB0b1xuICAgIC8vIHBlcmZvcm0gb3B0aW1pc2F0aW9uc1xuICAgIHZhciBvd25lcklkSW5mbyA9IHRoaXMuc2NvcGUuZ2V0QmluZGluZyh0aGlzLm93bmVySWQubmFtZSk7XG4gICAgcmV0dXJuIG93bmVySWRJbmZvICYmICFvd25lcklkSW5mby5jb25zdGFudDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhaWxDYWxsVHJhbnNmb3JtZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZTtcblxuICAgIC8vIG9ubHkgdGFpbCByZWN1cnNpb24gY2FuIGJlIG9wdGltaXplZCBhcyBmb3Igbm93LCBzbyB3ZSBjYW4gc2tpcCBhbm9ueW1vdXNcbiAgICAvLyBmdW5jdGlvbnMgZW50aXJlbHlcbiAgICB2YXIgb3duZXJJZCA9IHRoaXMub3duZXJJZDtcbiAgICBpZiAoIW93bmVySWQpIHJldHVybjtcblxuICAgIC8vIHRyYXZlcnNlIHRoZSBmdW5jdGlvbiBhbmQgbG9vayBmb3IgdGFpbCByZWN1cnNpb25cbiAgICB0aGlzLnBhdGgudHJhdmVyc2UodmlzaXRvciwgdGhpcyk7XG5cbiAgICAvLyBoYXMgbm8gdGFpbCBjYWxsIHJlY3Vyc2lvblxuICAgIGlmICghdGhpcy5oYXNUYWlsUmVjdXJzaW9uKSByZXR1cm47XG5cbiAgICAvLyB0aGUgZnVuY3Rpb24gYmluZGluZyBpc24ndCBjb25zdGFudCBzbyB3ZSBjYW4ndCBiZSBzdXJlIHRoYXQgaXQncyB0aGUgc2FtZSBmdW5jdGlvbiA6KFxuICAgIGlmICh0aGlzLmhhc0Rlb3B0KCkpIHtcbiAgICAgIHRoaXMuZmlsZS5sb2cuZGVvcHQobm9kZSwgbWVzc2FnZXMuZ2V0KFwidGFpbENhbGxSZWFzc2lnbm1lbnREZW9wdFwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9cblxuICAgIHZhciBib2R5ID0gdGhpcy5wYXRoLmVuc3VyZUJsb2NrKCkuYm9keTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGJvZHlOb2RlID0gYm9keVtpXTtcbiAgICAgIGlmICghdC5pc0Z1bmN0aW9uRGVjbGFyYXRpb24oYm9keU5vZGUpKSBjb250aW51ZTtcblxuICAgICAgYm9keU5vZGUgPSBib2R5W2ldID0gdC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihib2R5Tm9kZS5pZCwgdC50b0V4cHJlc3Npb24oYm9keU5vZGUpKV0pO1xuICAgICAgYm9keU5vZGUuX2Jsb2NrSG9pc3QgPSAyO1xuICAgIH1cblxuICAgIHZhciBwYXJhbURlY2xzID0gdGhpcy5wYXJhbURlY2xzO1xuICAgIGlmIChwYXJhbURlY2xzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBwYXJhbURlY2wgPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgcGFyYW1EZWNscyk7XG4gICAgICBwYXJhbURlY2wuX2Jsb2NrSG9pc3QgPSBJbmZpbml0eTtcbiAgICAgIGJvZHkudW5zaGlmdChwYXJhbURlY2wpO1xuICAgIH1cblxuICAgIGJvZHkudW5zaGlmdCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgdGhpcy5nZXRBZ2FpbklkKCksIHQubGl0ZXJhbChmYWxzZSkpKSk7XG5cbiAgICBub2RlLmJvZHkgPSB1dGlsLnRlbXBsYXRlKFwidGFpbC1jYWxsLWJvZHlcIiwge1xuICAgICAgRlVOQ1RJT05fSUQ6IHRoaXMuZ2V0RnVuY3Rpb25JZCgpLFxuICAgICAgQUdBSU5fSUQ6IHRoaXMuZ2V0QWdhaW5JZCgpLFxuICAgICAgQkxPQ0s6IG5vZGUuYm9keVxuICAgIH0pO1xuXG4gICAgdmFyIHRvcFZhcnMgPSBbXTtcblxuICAgIGlmICh0aGlzLm5lZWRzVGhpcykge1xuICAgICAgdmFyIF9hcnIgPSB0aGlzLnRoaXNQYXRocztcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBwYXRoID0gX2FycltfaV07XG4gICAgICAgIHBhdGgucmVwbGFjZVdpdGgodGhpcy5nZXRUaGlzSWQoKSk7XG4gICAgICB9XG5cbiAgICAgIHRvcFZhcnMucHVzaCh0LnZhcmlhYmxlRGVjbGFyYXRvcih0aGlzLmdldFRoaXNJZCgpLCB0LnRoaXNFeHByZXNzaW9uKCkpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZWVkc0FyZ3VtZW50cyB8fCB0aGlzLnNldHNBcmd1bWVudHMpIHtcbiAgICAgIHZhciBfYXJyMiA9IHRoaXMuYXJndW1lbnRzUGF0aHM7XG5cbiAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgdmFyIF9wYXRoID0gX2FycjJbX2kyXTtcbiAgICAgICAgX3BhdGgucmVwbGFjZVdpdGgodGhpcy5hcmd1bWVudHNJZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWNsID0gdC52YXJpYWJsZURlY2xhcmF0b3IodGhpcy5hcmd1bWVudHNJZCk7XG4gICAgICBpZiAodGhpcy5hcmd1bWVudHNJZCkge1xuICAgICAgICBkZWNsLmluaXQgPSB0LmlkZW50aWZpZXIoXCJhcmd1bWVudHNcIik7XG4gICAgICAgIGRlY2wuaW5pdC5fc2hhZG93ZWRGdW5jdGlvbkxpdGVyYWwgPSB0aGlzLnBhdGg7XG4gICAgICB9XG4gICAgICB0b3BWYXJzLnB1c2goZGVjbCk7XG4gICAgfVxuXG4gICAgdmFyIGxlZnRJZCA9IHRoaXMubGVmdElkO1xuICAgIGlmIChsZWZ0SWQpIHtcbiAgICAgIHRvcFZhcnMucHVzaCh0LnZhcmlhYmxlRGVjbGFyYXRvcihsZWZ0SWQpKTtcbiAgICB9XG5cbiAgICBpZiAodG9wVmFycy5sZW5ndGggPiAwKSB7XG4gICAgICBub2RlLmJvZHkuYm9keS51bnNoaWZ0KHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCB0b3BWYXJzKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgVGFpbENhbGxUcmFuc2Zvcm1lci5wcm90b3R5cGUuc3ViVHJhbnNmb3JtID0gZnVuY3Rpb24gc3ViVHJhbnNmb3JtKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcblxuICAgIHZhciBoYW5kbGVyID0gdGhpc1tcInN1YlRyYW5zZm9ybVwiICsgbm9kZS50eXBlXTtcbiAgICBpZiAoaGFuZGxlcikgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBub2RlKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhaWxDYWxsVHJhbnNmb3JtZXIucHJvdG90eXBlLnN1YlRyYW5zZm9ybUNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIHN1YlRyYW5zZm9ybUNvbmRpdGlvbmFsRXhwcmVzc2lvbihub2RlKSB7XG4gICAgdmFyIGNhbGxDb25zZXF1ZW50ID0gdGhpcy5zdWJUcmFuc2Zvcm0obm9kZS5jb25zZXF1ZW50KTtcbiAgICB2YXIgY2FsbEFsdGVybmF0ZSA9IHRoaXMuc3ViVHJhbnNmb3JtKG5vZGUuYWx0ZXJuYXRlKTtcbiAgICBpZiAoIWNhbGxDb25zZXF1ZW50ICYmICFjYWxsQWx0ZXJuYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGVybmFyeSBvcGVyYXRvciBoYWQgdGFpbCByZWN1cnNpb24gaW4gdmFsdWUsIGNvbnZlcnQgdG8gb3B0aW1pemVkIGlmLXN0YXRlbWVudFxuICAgIG5vZGUudHlwZSA9IFwiSWZTdGF0ZW1lbnRcIjtcbiAgICBub2RlLmNvbnNlcXVlbnQgPSBjYWxsQ29uc2VxdWVudCA/IHQudG9CbG9jayhjYWxsQ29uc2VxdWVudCkgOiByZXR1cm5CbG9jayhub2RlLmNvbnNlcXVlbnQpO1xuXG4gICAgaWYgKGNhbGxBbHRlcm5hdGUpIHtcbiAgICAgIG5vZGUuYWx0ZXJuYXRlID0gdC5pc0lmU3RhdGVtZW50KGNhbGxBbHRlcm5hdGUpID8gY2FsbEFsdGVybmF0ZSA6IHQudG9CbG9jayhjYWxsQWx0ZXJuYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5hbHRlcm5hdGUgPSByZXR1cm5CbG9jayhub2RlLmFsdGVybmF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtub2RlXTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhaWxDYWxsVHJhbnNmb3JtZXIucHJvdG90eXBlLnN1YlRyYW5zZm9ybUxvZ2ljYWxFeHByZXNzaW9uID0gZnVuY3Rpb24gc3ViVHJhbnNmb3JtTG9naWNhbEV4cHJlc3Npb24obm9kZSkge1xuICAgIC8vIG9ubHkgY2FsbCBpbiByaWdodC12YWx1ZSBvZiBjYW4gYmUgb3B0aW1pemVkXG4gICAgdmFyIGNhbGxSaWdodCA9IHRoaXMuc3ViVHJhbnNmb3JtKG5vZGUucmlnaHQpO1xuICAgIGlmICghY2FsbFJpZ2h0KSByZXR1cm47XG5cbiAgICAvLyBjYWNoZSBsZWZ0IHZhbHVlIGFzIGl0IG1pZ2h0IGhhdmUgc2lkZS1lZmZlY3RzXG4gICAgdmFyIGxlZnRJZCA9IHRoaXMuZ2V0TGVmdElkKCk7XG4gICAgdmFyIHRlc3RFeHByID0gdC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgbGVmdElkLCBub2RlLmxlZnQpO1xuXG4gICAgaWYgKG5vZGUub3BlcmF0b3IgPT09IFwiJiZcIikge1xuICAgICAgdGVzdEV4cHIgPSB0LnVuYXJ5RXhwcmVzc2lvbihcIiFcIiwgdGVzdEV4cHIpO1xuICAgIH1cblxuICAgIHJldHVybiBbdC5pZlN0YXRlbWVudCh0ZXN0RXhwciwgcmV0dXJuQmxvY2sobGVmdElkKSldLmNvbmNhdChjYWxsUmlnaHQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgVGFpbENhbGxUcmFuc2Zvcm1lci5wcm90b3R5cGUuc3ViVHJhbnNmb3JtU2VxdWVuY2VFeHByZXNzaW9uID0gZnVuY3Rpb24gc3ViVHJhbnNmb3JtU2VxdWVuY2VFeHByZXNzaW9uKG5vZGUpIHtcbiAgICB2YXIgc2VxID0gbm9kZS5leHByZXNzaW9ucztcblxuICAgIC8vIG9ubHkgbGFzdCBlbGVtZW50IGNhbiBiZSBvcHRpbWl6ZWRcbiAgICB2YXIgbGFzdENhbGwgPSB0aGlzLnN1YlRyYW5zZm9ybShzZXFbc2VxLmxlbmd0aCAtIDFdKTtcbiAgICBpZiAoIWxhc3RDYWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGNvbnZlcnRlZCBleHByZXNzaW9uIGZyb20gc2VxdWVuY2VcbiAgICAvLyBhbmQgY29udmVydCB0byByZWd1bGFyIGV4cHJlc3Npb24gaWYgbmVlZGVkXG4gICAgaWYgKC0tc2VxLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbm9kZSA9IHNlcVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3QuZXhwcmVzc2lvblN0YXRlbWVudChub2RlKV0uY29uY2F0KGxhc3RDYWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFRhaWxDYWxsVHJhbnNmb3JtZXIucHJvdG90eXBlLnN1YlRyYW5zZm9ybUNhbGxFeHByZXNzaW9uID0gZnVuY3Rpb24gc3ViVHJhbnNmb3JtQ2FsbEV4cHJlc3Npb24obm9kZSkge1xuICAgIHZhciBjYWxsZWUgPSBub2RlLmNhbGxlZTtcbiAgICB2YXIgdGhpc0JpbmRpbmcsIGFyZ3M7XG5cbiAgICBpZiAodC5pc01lbWJlckV4cHJlc3Npb24oY2FsbGVlLCB7IGNvbXB1dGVkOiBmYWxzZSB9KSAmJiB0LmlzSWRlbnRpZmllcihjYWxsZWUucHJvcGVydHkpKSB7XG4gICAgICBzd2l0Y2ggKGNhbGxlZS5wcm9wZXJ0eS5uYW1lKSB7XG4gICAgICAgIGNhc2UgXCJjYWxsXCI6XG4gICAgICAgICAgYXJncyA9IHQuYXJyYXlFeHByZXNzaW9uKG5vZGUuYXJndW1lbnRzLnNsaWNlKDEpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYXBwbHlcIjpcbiAgICAgICAgICBhcmdzID0gbm9kZS5hcmd1bWVudHNbMV0gfHwgdC5pZGVudGlmaWVyKFwidW5kZWZpbmVkXCIpO1xuICAgICAgICAgIHRoaXMubmVlZHNBcmd1bWVudHMgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzQmluZGluZyA9IG5vZGUuYXJndW1lbnRzWzBdO1xuICAgICAgY2FsbGVlID0gY2FsbGVlLm9iamVjdDtcbiAgICB9XG5cbiAgICAvLyBvbmx5IHRhaWwgcmVjdXJzaW9uIGNhbiBiZSBvcHRpbWl6ZWQgYXMgZm9yIG5vd1xuICAgIGlmICghdC5pc0lkZW50aWZpZXIoY2FsbGVlKSB8fCAhdGhpcy5zY29wZS5iaW5kaW5nSWRlbnRpZmllckVxdWFscyhjYWxsZWUubmFtZSwgdGhpcy5vd25lcklkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGFzVGFpbFJlY3Vyc2lvbiA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5oYXNEZW9wdCgpKSByZXR1cm47XG5cbiAgICB2YXIgYm9keSA9IFtdO1xuXG4gICAgaWYgKHRoaXMubmVlZHNUaGlzICYmICF0LmlzVGhpc0V4cHJlc3Npb24odGhpc0JpbmRpbmcpKSB7XG4gICAgICBib2R5LnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHRoaXMuZ2V0VGhpc0lkKCksIHRoaXNCaW5kaW5nIHx8IHQuaWRlbnRpZmllcihcInVuZGVmaW5lZFwiKSkpKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyZ3MpIHtcbiAgICAgIGFyZ3MgPSB0LmFycmF5RXhwcmVzc2lvbihub2RlLmFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3VtZW50c0lkID0gdGhpcy5nZXRBcmd1bWVudHNJZCgpO1xuICAgIHZhciBwYXJhbXMgPSB0aGlzLmdldFBhcmFtcygpO1xuXG4gICAgaWYgKHRoaXMubmVlZHNBcmd1bWVudHMpIHtcbiAgICAgIGJvZHkucHVzaCh0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgYXJndW1lbnRzSWQsIGFyZ3MpKSk7XG4gICAgfVxuXG4gICAgaWYgKHQuaXNBcnJheUV4cHJlc3Npb24oYXJncykpIHtcbiAgICAgIHZhciBlbGVtcyA9IGFyZ3MuZWxlbWVudHM7XG5cbiAgICAgIC8vIHBhZCBvdXQgdGhlIGFyZ3Mgc28gYWxsIHRoZSBmdW5jdGlvbiBhcmdzIGFyZSByZXNldCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvMTkzOFxuICAgICAgd2hpbGUgKGVsZW1zLmxlbmd0aCA8IHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgZWxlbXMucHVzaCh0LmlkZW50aWZpZXIoXCJ1bmRlZmluZWRcIikpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJhbSA9IHBhcmFtc1tpXTtcbiAgICAgICAgdmFyIGVsZW0gPSBlbGVtc1tpXTtcblxuICAgICAgICBpZiAocGFyYW0gJiYgIXBhcmFtLl9pc0RlZmF1bHRQbGFjZWhvbGRlcikge1xuICAgICAgICAgIGVsZW1zW2ldID0gdC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgcGFyYW0sIGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGV4Y2VlZHMgcGFyYW1ldGVycyBidXQgcHVzaCBpdCBhbnl3YXkgdG8gZW5zdXJlIGNvcnJlY3QgZXhlY3V0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm5lZWRzQXJndW1lbnRzKSB7XG4gICAgICAgIHZhciBfYXJyMyA9IGVsZW1zO1xuXG4gICAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IF9hcnIzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgICAgICB2YXIgZWxlbSA9IF9hcnIzW19pM107XG4gICAgICAgICAgLy8gb25seSBwdXNoIGV4cHJlc3Npb25zIHRoYXQgd2UgcmVhbGx5IG5lZWQsIHRoaXMgd2lsbCBza2lwIHB1cmUgYXJndW1lbnRzIHRoYXQgZXhjZWVkIHRoZVxuICAgICAgICAgIC8vIHBhcmFtZXRlciBsZW5ndGggb2YgdGhlIGN1cnJlbnQgZnVuY3Rpb25cbiAgICAgICAgICBpZiAoIXRoaXMuc2NvcGUuaXNQdXJlKGVsZW0pKSB7XG4gICAgICAgICAgICBib2R5LnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KGVsZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRzQXJndW1lbnRzID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJhbSA9IHBhcmFtc1tpXTtcbiAgICAgICAgaWYgKCFwYXJhbS5faXNEZWZhdWx0UGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBib2R5LnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHBhcmFtLCB0Lm1lbWJlckV4cHJlc3Npb24oYXJndW1lbnRzSWQsIHQubGl0ZXJhbChpKSwgdHJ1ZSkpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBib2R5LnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHRoaXMuZ2V0QWdhaW5JZCgpLCB0LmxpdGVyYWwodHJ1ZSkpKSk7XG5cbiAgICBpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBkZWNsYXJhdGlvbnMgPSBfbG9kYXNoQXJyYXlGbGF0dGVuMltcImRlZmF1bHRcIl0oX2xvZGFzaENvbGxlY3Rpb25NYXAyW1wiZGVmYXVsdFwiXSh0aGlzLnZhcnMsIGZ1bmN0aW9uIChkZWNsKSB7XG4gICAgICAgIHJldHVybiBkZWNsLmRlY2xhcmF0aW9ucztcbiAgICAgIH0pKTtcblxuICAgICAgdmFyIGFzc2lnbm1lbnQgPSBfbG9kYXNoQ29sbGVjdGlvblJlZHVjZVJpZ2h0MltcImRlZmF1bHRcIl0oZGVjbGFyYXRpb25zLCBmdW5jdGlvbiAoZXhwciwgZGVjbCkge1xuICAgICAgICByZXR1cm4gdC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgZGVjbC5pZCwgZXhwcik7XG4gICAgICB9LCB0LmlkZW50aWZpZXIoXCJ1bmRlZmluZWRcIikpO1xuXG4gICAgICB2YXIgc3RhdGVtZW50ID0gdC5leHByZXNzaW9uU3RhdGVtZW50KGFzc2lnbm1lbnQpO1xuICAgICAgYm9keS5wdXNoKHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgYm9keS5wdXNoKHQuY29udGludWVTdGF0ZW1lbnQodGhpcy5nZXRGdW5jdGlvbklkKCkpKTtcblxuICAgIHJldHVybiBib2R5O1xuICB9O1xuXG4gIHJldHVybiBUYWlsQ2FsbFRyYW5zZm9ybWVyO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
