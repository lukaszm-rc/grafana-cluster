/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _messages, messages, _types, t, metadata, visitor, arrayUnpackVisitor, DestructuringTransformer;

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

  /**
   * Test if a VariableDeclaration's declarations contains any Patterns.
   */

  function variableDeclarationHasPattern(node) {
    for (var i = 0; i < node.declarations.length; i++) {
      if (t.isPattern(node.declarations[i].id)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Test if an ArrayPattern's elements contain any RestElements.
   */

  function hasRest(pattern) {
    for (var i = 0; i < pattern.elements.length; i++) {
      if (t.isRestElement(pattern.elements[i])) {
        return true;
      }
    }
    return false;
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_messages = require("../../../messages");
      messages = _interopRequireWildcard(_messages);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
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

        ForXStatement: function ForXStatement(node, parent, scope, file) {
          var left = node.left;

          if (t.isPattern(left)) {
            // for ({ length: k } in { abc: 3 });

            var temp = scope.generateUidIdentifier("ref");

            node.left = t.variableDeclaration("var", [t.variableDeclarator(temp)]);

            this.ensureBlock();

            node.body.body.unshift(t.variableDeclaration("var", [t.variableDeclarator(left, temp)]));

            return;
          }

          if (!t.isVariableDeclaration(left)) return;

          var pattern = left.declarations[0].id;
          if (!t.isPattern(pattern)) return;

          var key = scope.generateUidIdentifier("ref");
          node.left = t.variableDeclaration(left.kind, [t.variableDeclarator(key, null)]);

          var nodes = [];

          var destructuring = new DestructuringTransformer({
            kind: left.kind,
            file: file,
            scope: scope,
            nodes: nodes
          });

          destructuring.init(pattern, key);

          this.ensureBlock();

          var block = node.body;
          block.body = nodes.concat(block.body);
        },

        /**
         * [Please add a description.]
         */

        Function: function Function(node, parent, scope, file) {
          var hasDestructuring = false;
          var _arr = node.params;
          for (var _i = 0; _i < _arr.length; _i++) {
            var pattern = _arr[_i];
            if (t.isPattern(pattern)) {
              hasDestructuring = true;
              break;
            }
          }
          if (!hasDestructuring) return;

          var nodes = [];

          for (var i = 0; i < node.params.length; i++) {
            var pattern = node.params[i];
            if (!t.isPattern(pattern)) continue;

            var ref = scope.generateUidIdentifier("ref");
            if (t.isAssignmentPattern(pattern)) {
              var _pattern = pattern;
              pattern = pattern.left;
              _pattern.left = ref;
            } else {
              node.params[i] = ref;
            }

            t.inherits(ref, pattern);

            var destructuring = new DestructuringTransformer({
              blockHoist: node.params.length - i,
              nodes: nodes,
              scope: scope,
              file: file,
              kind: "let"
            });

            destructuring.init(pattern, ref);
          }

          this.ensureBlock();

          var block = node.body;
          block.body = nodes.concat(block.body);
        },

        /**
         * [Please add a description.]
         */

        CatchClause: function CatchClause(node, parent, scope, file) {
          var pattern = node.param;
          if (!t.isPattern(pattern)) return;

          var ref = scope.generateUidIdentifier("ref");
          node.param = ref;

          var nodes = [];

          var destructuring = new DestructuringTransformer({
            kind: "let",
            file: file,
            scope: scope,
            nodes: nodes
          });
          destructuring.init(pattern, ref);

          node.body.body = nodes.concat(node.body.body);
        },

        /**
         * [Please add a description.]
         */

        AssignmentExpression: function AssignmentExpression(node, parent, scope, file) {
          if (!t.isPattern(node.left)) return;

          var nodes = [];

          var destructuring = new DestructuringTransformer({
            operator: node.operator,
            file: file,
            scope: scope,
            nodes: nodes
          });

          var ref;
          if (this.isCompletionRecord() || !this.parentPath.isExpressionStatement()) {
            ref = scope.generateUidIdentifierBasedOnNode(node.right, "ref");

            nodes.push(t.variableDeclaration("var", [t.variableDeclarator(ref, node.right)]));

            if (t.isArrayExpression(node.right)) {
              destructuring.arrays[ref.name] = true;
            }
          }

          destructuring.init(node.left, ref || node.right);

          if (ref) {
            nodes.push(t.expressionStatement(ref));
          }

          return nodes;
        },

        /**
         * [Please add a description.]
         */

        VariableDeclaration: function VariableDeclaration(node, parent, scope, file) {
          if (t.isForXStatement(parent)) return;
          if (!variableDeclarationHasPattern(node)) return;

          var nodes = [];
          var declar;

          for (var i = 0; i < node.declarations.length; i++) {
            declar = node.declarations[i];

            var patternId = declar.init;
            var pattern = declar.id;

            var destructuring = new DestructuringTransformer({
              nodes: nodes,
              scope: scope,
              kind: node.kind,
              file: file
            });

            if (t.isPattern(pattern)) {
              destructuring.init(pattern, patternId);

              if (+i !== node.declarations.length - 1) {
                // we aren't the last declarator so let's just make the
                // last transformed node inherit from us
                t.inherits(nodes[nodes.length - 1], declar);
              }
            } else {
              nodes.push(t.inherits(destructuring.buildVariableAssignment(declar.id, declar.init), declar));
            }
          }

          if (!t.isProgram(parent) && !t.isBlockStatement(parent)) {
            // https://github.com/babel/babel/issues/113
            // for (let [x] = [0]; false;) {}

            declar = null;

            for (i = 0; i < nodes.length; i++) {
              node = nodes[i];
              declar = declar || t.variableDeclaration(node.kind, []);

              if (!t.isVariableDeclaration(node) && declar.kind !== node.kind) {
                throw file.errorWithNode(node, messages.get("invalidParentForThisNode"));
              }

              declar.declarations = declar.declarations.concat(node.declarations);
            }

            return declar;
          }

          return nodes;
        }
      };


      exports.visitor = visitor;arrayUnpackVisitor = {

        /**
         * [Please add a description.]
         */

        ReferencedIdentifier: function ReferencedIdentifier(node, parent, scope, state) {
          if (state.bindings[node.name]) {
            state.deopt = true;
            this.stop();
          }
        }
      };

      DestructuringTransformer = function () {
        function DestructuringTransformer(opts) {
          _classCallCheck(this, DestructuringTransformer);

          this.blockHoist = opts.blockHoist;
          this.operator = opts.operator;
          this.arrays = {};
          this.nodes = opts.nodes || [];
          this.scope = opts.scope;
          this.file = opts.file;
          this.kind = opts.kind;
        }

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.buildVariableAssignment = function buildVariableAssignment(id, init) {
          var op = this.operator;
          if (t.isMemberExpression(id)) op = "=";

          var node;

          if (op) {
            node = t.expressionStatement(t.assignmentExpression(op, id, init));
          } else {
            node = t.variableDeclaration(this.kind, [t.variableDeclarator(id, init)]);
          }

          node._blockHoist = this.blockHoist;

          return node;
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.buildVariableDeclaration = function buildVariableDeclaration(id, init) {
          var declar = t.variableDeclaration("var", [t.variableDeclarator(id, init)]);
          declar._blockHoist = this.blockHoist;
          return declar;
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.push = function push(id, init) {
          if (t.isObjectPattern(id)) {
            this.pushObjectPattern(id, init);
          } else if (t.isArrayPattern(id)) {
            this.pushArrayPattern(id, init);
          } else if (t.isAssignmentPattern(id)) {
            this.pushAssignmentPattern(id, init);
          } else {
            this.nodes.push(this.buildVariableAssignment(id, init));
          }
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.toArray = function toArray(node, count) {
          if (this.file.isLoose("es6.destructuring") || t.isIdentifier(node) && this.arrays[node.name]) {
            return node;
          } else {
            return this.scope.toArray(node, count);
          }
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.pushAssignmentPattern = function pushAssignmentPattern(pattern, valueRef) {
          // we need to assign the current value of the assignment to avoid evaluating
          // it more than once

          var tempValueRef = this.scope.generateUidIdentifierBasedOnNode(valueRef);

          var declar = t.variableDeclaration("var", [t.variableDeclarator(tempValueRef, valueRef)]);
          declar._blockHoist = this.blockHoist;
          this.nodes.push(declar);

          //

          var tempConditional = t.conditionalExpression(t.binaryExpression("===", tempValueRef, t.identifier("undefined")), pattern.right, tempValueRef);

          var left = pattern.left;
          if (t.isPattern(left)) {
            var tempValueDefault = t.expressionStatement(t.assignmentExpression("=", tempValueRef, tempConditional));
            tempValueDefault._blockHoist = this.blockHoist;

            this.nodes.push(tempValueDefault);
            this.push(left, tempValueRef);
          } else {
            this.nodes.push(this.buildVariableAssignment(left, tempConditional));
          }
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.pushObjectSpread = function pushObjectSpread(pattern, objRef, spreadProp, spreadPropIndex) {
          // get all the keys that appear in this object before the current spread

          var keys = [];

          for (var i = 0; i < pattern.properties.length; i++) {
            var prop = pattern.properties[i];

            // we've exceeded the index of the spread property to all properties to the
            // right need to be ignored
            if (i >= spreadPropIndex) break;

            // ignore other spread properties
            if (t.isSpreadProperty(prop)) continue;

            var key = prop.key;
            if (t.isIdentifier(key) && !prop.computed) key = t.literal(prop.key.name);
            keys.push(key);
          }

          keys = t.arrayExpression(keys);

          //

          var value = t.callExpression(this.file.addHelper("object-without-properties"), [objRef, keys]);
          this.nodes.push(this.buildVariableAssignment(spreadProp.argument, value));
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.pushObjectProperty = function pushObjectProperty(prop, propRef) {
          if (t.isLiteral(prop.key)) prop.computed = true;

          var pattern = prop.value;
          var objRef = t.memberExpression(propRef, prop.key, prop.computed);

          if (t.isPattern(pattern)) {
            this.push(pattern, objRef);
          } else {
            this.nodes.push(this.buildVariableAssignment(pattern, objRef));
          }
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.pushObjectPattern = function pushObjectPattern(pattern, objRef) {
          // https://github.com/babel/babel/issues/681

          if (!pattern.properties.length) {
            this.nodes.push(t.expressionStatement(t.callExpression(this.file.addHelper("object-destructuring-empty"), [objRef])));
          }

          // if we have more than one properties in this pattern and the objectRef is a
          // member expression then we need to assign it to a temporary variable so it's
          // only evaluated once

          if (pattern.properties.length > 1 && !this.scope.isStatic(objRef)) {
            var temp = this.scope.generateUidIdentifierBasedOnNode(objRef);
            this.nodes.push(this.buildVariableDeclaration(temp, objRef));
            objRef = temp;
          }

          //

          for (var i = 0; i < pattern.properties.length; i++) {
            var prop = pattern.properties[i];
            if (t.isSpreadProperty(prop)) {
              this.pushObjectSpread(pattern, objRef, prop, i);
            } else {
              this.pushObjectProperty(prop, objRef);
            }
          }
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.canUnpackArrayPattern = function canUnpackArrayPattern(pattern, arr) {
          // not an array so there's no way we can deal with this
          if (!t.isArrayExpression(arr)) return false;

          // pattern has less elements than the array and doesn't have a rest so some
          // elements wont be evaluated
          if (pattern.elements.length > arr.elements.length) return;
          if (pattern.elements.length < arr.elements.length && !hasRest(pattern)) return false;

          var _arr2 = pattern.elements;
          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var elem = _arr2[_i2];
            // deopt on holes
            if (!elem) return false;

            // deopt on member expressions as they may be included in the RHS
            if (t.isMemberExpression(elem)) return false;
          }

          var _arr3 = arr.elements;
          for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
            var elem = _arr3[_i3];
            // deopt on spread elements
            if (t.isSpreadElement(elem)) return false;
          }

          // deopt on reference to left side identifiers
          var bindings = t.getBindingIdentifiers(pattern);
          var state = { deopt: false, bindings: bindings };
          this.scope.traverse(arr, arrayUnpackVisitor, state);
          return !state.deopt;
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.pushUnpackedArrayPattern = function pushUnpackedArrayPattern(pattern, arr) {
          for (var i = 0; i < pattern.elements.length; i++) {
            var elem = pattern.elements[i];
            if (t.isRestElement(elem)) {
              this.push(elem.argument, t.arrayExpression(arr.elements.slice(i)));
            } else {
              this.push(elem, arr.elements[i]);
            }
          }
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.pushArrayPattern = function pushArrayPattern(pattern, arrayRef) {
          if (!pattern.elements) return;

          // optimise basic array destructuring of an array expression
          //
          // we can't do this to a pattern of unequal size to it's right hand
          // array expression as then there will be values that wont be evaluated
          //
          // eg: var [a, b] = [1, 2];

          if (this.canUnpackArrayPattern(pattern, arrayRef)) {
            return this.pushUnpackedArrayPattern(pattern, arrayRef);
          }

          // if we have a rest then we need all the elements so don't tell
          // `scope.toArray` to only get a certain amount

          var count = !hasRest(pattern) && pattern.elements.length;

          // so we need to ensure that the `arrayRef` is an array, `scope.toArray` will
          // return a locally bound identifier if it's been inferred to be an array,
          // otherwise it'll be a call to a helper that will ensure it's one

          var toArray = this.toArray(arrayRef, count);

          if (t.isIdentifier(toArray)) {
            // we've been given an identifier so it must have been inferred to be an
            // array
            arrayRef = toArray;
          } else {
            arrayRef = this.scope.generateUidIdentifierBasedOnNode(arrayRef);
            this.arrays[arrayRef.name] = true;
            this.nodes.push(this.buildVariableDeclaration(arrayRef, toArray));
          }

          //

          for (var i = 0; i < pattern.elements.length; i++) {
            var elem = pattern.elements[i];

            // hole
            if (!elem) continue;

            var elemRef;

            if (t.isRestElement(elem)) {
              elemRef = this.toArray(arrayRef);

              if (i > 0) {
                elemRef = t.callExpression(t.memberExpression(elemRef, t.identifier("slice")), [t.literal(i)]);
              }

              // set the element to the rest element argument since we've dealt with it
              // being a rest already
              elem = elem.argument;
            } else {
              elemRef = t.memberExpression(arrayRef, t.literal(i), true);
            }

            this.push(elem, elemRef);
          }
        };

        /**
         * [Please add a description.]
         */

        DestructuringTransformer.prototype.init = function init(pattern, ref) {
          // trying to destructure a value that we can't evaluate more than once so we
          // need to save it to a variable

          if (!t.isArrayExpression(ref) && !t.isMemberExpression(ref)) {
            var memo = this.scope.maybeGenerateMemoised(ref, true);
            if (memo) {
              this.nodes.push(this.buildVariableDeclaration(memo, ref));
              ref = memo;
            }
          }

          //

          this.push(pattern, ref);

          return this.nodes;
        };

        return DestructuringTransformer;
      }();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9kZXN0cnVjdHVyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBcEIsQ0FBRixFQUFvQztBQUFFLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTixDQUFGO0tBQXhDO0dBQWxEOzs7Ozs7QUFtUEEsV0FBUyw2QkFBVCxDQUF1QyxJQUF2QyxFQUE2QztBQUMzQyxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEIsR0FBOUMsRUFBbUQ7QUFDakQsVUFBSSxFQUFFLFNBQUYsQ0FBWSxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUIsRUFBckIsQ0FBaEIsRUFBMEM7QUFDeEMsZUFBTyxJQUFQLENBRHdDO09BQTFDO0tBREY7QUFLQSxXQUFPLEtBQVAsQ0FOMkM7R0FBN0M7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Q0FUa0I7YUFBM0IsTUFVTztBQUNMLHdCQUFVLEVBQUUsZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNkIsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUE3QixFQUEyQyxJQUEzQyxDQUFWLENBREs7YUFWUDs7QUFjQSxpQkFBSyxJQUFMLENBQVUsSUFBVixFQUFnQixPQUFoQixFQXRCZ0Q7V0FBbEQ7U0FyQ29EOzs7Ozs7QUFoUFosZ0NBbVQxQyxDQUF5QixTQUF6QixDQUFtQyxJQUFuQyxHQUEwQyxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLEdBQXZCLEVBQTRCOzs7O0FBSXBFLGNBQUksQ0FBQyxFQUFFLGlCQUFGLENBQW9CLEdBQXBCLENBQUQsSUFBNkIsQ0FBQyxFQUFFLGtCQUFGLENBQXFCLEdBQXJCLENBQUQsRUFBNEI7QUFDM0QsZ0JBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxxQkFBWCxDQUFpQyxHQUFqQyxFQUFzQyxJQUF0QyxDQUFQLENBRHVEO0FBRTNELGdCQUFJLElBQUosRUFBVTtBQUNSLG1CQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQUssd0JBQUwsQ0FBOEIsSUFBOUIsRUFBb0MsR0FBcEMsQ0FBaEIsRUFEUTtBQUVSLG9CQUFNLElBQU4sQ0FGUTthQUFWO1dBRkY7Ozs7QUFKb0UsY0FjcEUsQ0FBSyxJQUFMLENBQVUsT0FBVixFQUFtQixHQUFuQixFQWRvRTs7QUFnQnBFLGlCQUFPLEtBQUssS0FBTCxDQWhCNkQ7U0FBNUIsQ0FuVEE7O0FBc1UxQyxlQUFPLHdCQUFQLENBdFUwQztPQUFaIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9kZXN0cnVjdHVyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX21lc3NhZ2VzID0gcmVxdWlyZShcIi4uLy4uLy4uL21lc3NhZ2VzXCIpO1xuXG52YXIgbWVzc2FnZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbWVzc2FnZXMpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgZ3JvdXA6IFwiYnVpbHRpbi1hZHZhbmNlZFwiXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0ge1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRm9yWFN0YXRlbWVudDogZnVuY3Rpb24gRm9yWFN0YXRlbWVudChub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgdmFyIGxlZnQgPSBub2RlLmxlZnQ7XG5cbiAgICBpZiAodC5pc1BhdHRlcm4obGVmdCkpIHtcbiAgICAgIC8vIGZvciAoeyBsZW5ndGg6IGsgfSBpbiB7IGFiYzogMyB9KTtcblxuICAgICAgdmFyIHRlbXAgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJyZWZcIik7XG5cbiAgICAgIG5vZGUubGVmdCA9IHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodGVtcCldKTtcblxuICAgICAgdGhpcy5lbnN1cmVCbG9jaygpO1xuXG4gICAgICBub2RlLmJvZHkuYm9keS51bnNoaWZ0KHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IobGVmdCwgdGVtcCldKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXQuaXNWYXJpYWJsZURlY2xhcmF0aW9uKGxlZnQpKSByZXR1cm47XG5cbiAgICB2YXIgcGF0dGVybiA9IGxlZnQuZGVjbGFyYXRpb25zWzBdLmlkO1xuICAgIGlmICghdC5pc1BhdHRlcm4ocGF0dGVybikpIHJldHVybjtcblxuICAgIHZhciBrZXkgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJyZWZcIik7XG4gICAgbm9kZS5sZWZ0ID0gdC52YXJpYWJsZURlY2xhcmF0aW9uKGxlZnQua2luZCwgW3QudmFyaWFibGVEZWNsYXJhdG9yKGtleSwgbnVsbCldKTtcblxuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgdmFyIGRlc3RydWN0dXJpbmcgPSBuZXcgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyKHtcbiAgICAgIGtpbmQ6IGxlZnQua2luZCxcbiAgICAgIGZpbGU6IGZpbGUsXG4gICAgICBzY29wZTogc2NvcGUsXG4gICAgICBub2Rlczogbm9kZXNcbiAgICB9KTtcblxuICAgIGRlc3RydWN0dXJpbmcuaW5pdChwYXR0ZXJuLCBrZXkpO1xuXG4gICAgdGhpcy5lbnN1cmVCbG9jaygpO1xuXG4gICAgdmFyIGJsb2NrID0gbm9kZS5ib2R5O1xuICAgIGJsb2NrLmJvZHkgPSBub2Rlcy5jb25jYXQoYmxvY2suYm9keSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBGdW5jdGlvbjogZnVuY3Rpb24gRnVuY3Rpb24obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIHZhciBoYXNEZXN0cnVjdHVyaW5nID0gZmFsc2U7XG4gICAgdmFyIF9hcnIgPSBub2RlLnBhcmFtcztcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBwYXR0ZXJuID0gX2FycltfaV07XG4gICAgICBpZiAodC5pc1BhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgICAgaGFzRGVzdHJ1Y3R1cmluZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWhhc0Rlc3RydWN0dXJpbmcpIHJldHVybjtcblxuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLnBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhdHRlcm4gPSBub2RlLnBhcmFtc1tpXTtcbiAgICAgIGlmICghdC5pc1BhdHRlcm4ocGF0dGVybikpIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgcmVmID0gc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyKFwicmVmXCIpO1xuICAgICAgaWYgKHQuaXNBc3NpZ25tZW50UGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgICB2YXIgX3BhdHRlcm4gPSBwYXR0ZXJuO1xuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5sZWZ0O1xuICAgICAgICBfcGF0dGVybi5sZWZ0ID0gcmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5wYXJhbXNbaV0gPSByZWY7XG4gICAgICB9XG5cbiAgICAgIHQuaW5oZXJpdHMocmVmLCBwYXR0ZXJuKTtcblxuICAgICAgdmFyIGRlc3RydWN0dXJpbmcgPSBuZXcgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyKHtcbiAgICAgICAgYmxvY2tIb2lzdDogbm9kZS5wYXJhbXMubGVuZ3RoIC0gaSxcbiAgICAgICAgbm9kZXM6IG5vZGVzLFxuICAgICAgICBzY29wZTogc2NvcGUsXG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgIGtpbmQ6IFwibGV0XCJcbiAgICAgIH0pO1xuXG4gICAgICBkZXN0cnVjdHVyaW5nLmluaXQocGF0dGVybiwgcmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLmVuc3VyZUJsb2NrKCk7XG5cbiAgICB2YXIgYmxvY2sgPSBub2RlLmJvZHk7XG4gICAgYmxvY2suYm9keSA9IG5vZGVzLmNvbmNhdChibG9jay5ib2R5KTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENhdGNoQ2xhdXNlOiBmdW5jdGlvbiBDYXRjaENsYXVzZShub2RlLCBwYXJlbnQsIHNjb3BlLCBmaWxlKSB7XG4gICAgdmFyIHBhdHRlcm4gPSBub2RlLnBhcmFtO1xuICAgIGlmICghdC5pc1BhdHRlcm4ocGF0dGVybikpIHJldHVybjtcblxuICAgIHZhciByZWYgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXIoXCJyZWZcIik7XG4gICAgbm9kZS5wYXJhbSA9IHJlZjtcblxuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgdmFyIGRlc3RydWN0dXJpbmcgPSBuZXcgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyKHtcbiAgICAgIGtpbmQ6IFwibGV0XCIsXG4gICAgICBmaWxlOiBmaWxlLFxuICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgbm9kZXM6IG5vZGVzXG4gICAgfSk7XG4gICAgZGVzdHJ1Y3R1cmluZy5pbml0KHBhdHRlcm4sIHJlZik7XG5cbiAgICBub2RlLmJvZHkuYm9keSA9IG5vZGVzLmNvbmNhdChub2RlLmJvZHkuYm9keSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBBc3NpZ25tZW50RXhwcmVzc2lvbjogZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb24obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIGlmICghdC5pc1BhdHRlcm4obm9kZS5sZWZ0KSkgcmV0dXJuO1xuXG4gICAgdmFyIG5vZGVzID0gW107XG5cbiAgICB2YXIgZGVzdHJ1Y3R1cmluZyA9IG5ldyBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIoe1xuICAgICAgb3BlcmF0b3I6IG5vZGUub3BlcmF0b3IsXG4gICAgICBmaWxlOiBmaWxlLFxuICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgbm9kZXM6IG5vZGVzXG4gICAgfSk7XG5cbiAgICB2YXIgcmVmO1xuICAgIGlmICh0aGlzLmlzQ29tcGxldGlvblJlY29yZCgpIHx8ICF0aGlzLnBhcmVudFBhdGguaXNFeHByZXNzaW9uU3RhdGVtZW50KCkpIHtcbiAgICAgIHJlZiA9IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllckJhc2VkT25Ob2RlKG5vZGUucmlnaHQsIFwicmVmXCIpO1xuXG4gICAgICBub2Rlcy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IocmVmLCBub2RlLnJpZ2h0KV0pKTtcblxuICAgICAgaWYgKHQuaXNBcnJheUV4cHJlc3Npb24obm9kZS5yaWdodCkpIHtcbiAgICAgICAgZGVzdHJ1Y3R1cmluZy5hcnJheXNbcmVmLm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cnVjdHVyaW5nLmluaXQobm9kZS5sZWZ0LCByZWYgfHwgbm9kZS5yaWdodCk7XG5cbiAgICBpZiAocmVmKSB7XG4gICAgICBub2Rlcy5wdXNoKHQuZXhwcmVzc2lvblN0YXRlbWVudChyZWYpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBWYXJpYWJsZURlY2xhcmF0aW9uOiBmdW5jdGlvbiBWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBpZiAodC5pc0ZvclhTdGF0ZW1lbnQocGFyZW50KSkgcmV0dXJuO1xuICAgIGlmICghdmFyaWFibGVEZWNsYXJhdGlvbkhhc1BhdHRlcm4obm9kZSkpIHJldHVybjtcblxuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIHZhciBkZWNsYXI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuZGVjbGFyYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWNsYXIgPSBub2RlLmRlY2xhcmF0aW9uc1tpXTtcblxuICAgICAgdmFyIHBhdHRlcm5JZCA9IGRlY2xhci5pbml0O1xuICAgICAgdmFyIHBhdHRlcm4gPSBkZWNsYXIuaWQ7XG5cbiAgICAgIHZhciBkZXN0cnVjdHVyaW5nID0gbmV3IERlc3RydWN0dXJpbmdUcmFuc2Zvcm1lcih7XG4gICAgICAgIG5vZGVzOiBub2RlcyxcbiAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICBraW5kOiBub2RlLmtpbmQsXG4gICAgICAgIGZpbGU6IGZpbGVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodC5pc1BhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgICAgZGVzdHJ1Y3R1cmluZy5pbml0KHBhdHRlcm4sIHBhdHRlcm5JZCk7XG5cbiAgICAgICAgaWYgKCtpICE9PSBub2RlLmRlY2xhcmF0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgLy8gd2UgYXJlbid0IHRoZSBsYXN0IGRlY2xhcmF0b3Igc28gbGV0J3MganVzdCBtYWtlIHRoZVxuICAgICAgICAgIC8vIGxhc3QgdHJhbnNmb3JtZWQgbm9kZSBpbmhlcml0IGZyb20gdXNcbiAgICAgICAgICB0LmluaGVyaXRzKG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLCBkZWNsYXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlcy5wdXNoKHQuaW5oZXJpdHMoZGVzdHJ1Y3R1cmluZy5idWlsZFZhcmlhYmxlQXNzaWdubWVudChkZWNsYXIuaWQsIGRlY2xhci5pbml0KSwgZGVjbGFyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0LmlzUHJvZ3JhbShwYXJlbnQpICYmICF0LmlzQmxvY2tTdGF0ZW1lbnQocGFyZW50KSkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy8xMTNcbiAgICAgIC8vIGZvciAobGV0IFt4XSA9IFswXTsgZmFsc2U7KSB7fVxuXG4gICAgICBkZWNsYXIgPSBudWxsO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBkZWNsYXIgPSBkZWNsYXIgfHwgdC52YXJpYWJsZURlY2xhcmF0aW9uKG5vZGUua2luZCwgW10pO1xuXG4gICAgICAgIGlmICghdC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSkgJiYgZGVjbGFyLmtpbmQgIT09IG5vZGUua2luZCkge1xuICAgICAgICAgIHRocm93IGZpbGUuZXJyb3JXaXRoTm9kZShub2RlLCBtZXNzYWdlcy5nZXQoXCJpbnZhbGlkUGFyZW50Rm9yVGhpc05vZGVcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjbGFyLmRlY2xhcmF0aW9ucyA9IGRlY2xhci5kZWNsYXJhdGlvbnMuY29uY2F0KG5vZGUuZGVjbGFyYXRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlY2xhcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn07XG5cbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7XG4vKipcbiAqIFRlc3QgaWYgYSBWYXJpYWJsZURlY2xhcmF0aW9uJ3MgZGVjbGFyYXRpb25zIGNvbnRhaW5zIGFueSBQYXR0ZXJucy5cbiAqL1xuXG5mdW5jdGlvbiB2YXJpYWJsZURlY2xhcmF0aW9uSGFzUGF0dGVybihub2RlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5kZWNsYXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodC5pc1BhdHRlcm4obm9kZS5kZWNsYXJhdGlvbnNbaV0uaWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFRlc3QgaWYgYW4gQXJyYXlQYXR0ZXJuJ3MgZWxlbWVudHMgY29udGFpbiBhbnkgUmVzdEVsZW1lbnRzLlxuICovXG5cbmZ1bmN0aW9uIGhhc1Jlc3QocGF0dGVybikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm4uZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodC5pc1Jlc3RFbGVtZW50KHBhdHRlcm4uZWxlbWVudHNbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBhcnJheVVucGFja1Zpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBSZWZlcmVuY2VkSWRlbnRpZmllcjogZnVuY3Rpb24gUmVmZXJlbmNlZElkZW50aWZpZXIobm9kZSwgcGFyZW50LCBzY29wZSwgc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuYmluZGluZ3Nbbm9kZS5uYW1lXSkge1xuICAgICAgc3RhdGUuZGVvcHQgPSB0cnVlO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIpO1xuXG4gICAgdGhpcy5ibG9ja0hvaXN0ID0gb3B0cy5ibG9ja0hvaXN0O1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcHRzLm9wZXJhdG9yO1xuICAgIHRoaXMuYXJyYXlzID0ge307XG4gICAgdGhpcy5ub2RlcyA9IG9wdHMubm9kZXMgfHwgW107XG4gICAgdGhpcy5zY29wZSA9IG9wdHMuc2NvcGU7XG4gICAgdGhpcy5maWxlID0gb3B0cy5maWxlO1xuICAgIHRoaXMua2luZCA9IG9wdHMua2luZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyLnByb3RvdHlwZS5idWlsZFZhcmlhYmxlQXNzaWdubWVudCA9IGZ1bmN0aW9uIGJ1aWxkVmFyaWFibGVBc3NpZ25tZW50KGlkLCBpbml0KSB7XG4gICAgdmFyIG9wID0gdGhpcy5vcGVyYXRvcjtcbiAgICBpZiAodC5pc01lbWJlckV4cHJlc3Npb24oaWQpKSBvcCA9IFwiPVwiO1xuXG4gICAgdmFyIG5vZGU7XG5cbiAgICBpZiAob3ApIHtcbiAgICAgIG5vZGUgPSB0LmV4cHJlc3Npb25TdGF0ZW1lbnQodC5hc3NpZ25tZW50RXhwcmVzc2lvbihvcCwgaWQsIGluaXQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHQudmFyaWFibGVEZWNsYXJhdGlvbih0aGlzLmtpbmQsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihpZCwgaW5pdCldKTtcbiAgICB9XG5cbiAgICBub2RlLl9ibG9ja0hvaXN0ID0gdGhpcy5ibG9ja0hvaXN0O1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIucHJvdG90eXBlLmJ1aWxkVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIGJ1aWxkVmFyaWFibGVEZWNsYXJhdGlvbihpZCwgaW5pdCkge1xuICAgIHZhciBkZWNsYXIgPSB0LnZhcmlhYmxlRGVjbGFyYXRpb24oXCJ2YXJcIiwgW3QudmFyaWFibGVEZWNsYXJhdG9yKGlkLCBpbml0KV0pO1xuICAgIGRlY2xhci5fYmxvY2tIb2lzdCA9IHRoaXMuYmxvY2tIb2lzdDtcbiAgICByZXR1cm4gZGVjbGFyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaChpZCwgaW5pdCkge1xuICAgIGlmICh0LmlzT2JqZWN0UGF0dGVybihpZCkpIHtcbiAgICAgIHRoaXMucHVzaE9iamVjdFBhdHRlcm4oaWQsIGluaXQpO1xuICAgIH0gZWxzZSBpZiAodC5pc0FycmF5UGF0dGVybihpZCkpIHtcbiAgICAgIHRoaXMucHVzaEFycmF5UGF0dGVybihpZCwgaW5pdCk7XG4gICAgfSBlbHNlIGlmICh0LmlzQXNzaWdubWVudFBhdHRlcm4oaWQpKSB7XG4gICAgICB0aGlzLnB1c2hBc3NpZ25tZW50UGF0dGVybihpZCwgaW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZXMucHVzaCh0aGlzLmJ1aWxkVmFyaWFibGVBc3NpZ25tZW50KGlkLCBpbml0KSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheShub2RlLCBjb3VudCkge1xuICAgIGlmICh0aGlzLmZpbGUuaXNMb29zZShcImVzNi5kZXN0cnVjdHVyaW5nXCIpIHx8IHQuaXNJZGVudGlmaWVyKG5vZGUpICYmIHRoaXMuYXJyYXlzW25vZGUubmFtZV0pIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zY29wZS50b0FycmF5KG5vZGUsIGNvdW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIucHJvdG90eXBlLnB1c2hBc3NpZ25tZW50UGF0dGVybiA9IGZ1bmN0aW9uIHB1c2hBc3NpZ25tZW50UGF0dGVybihwYXR0ZXJuLCB2YWx1ZVJlZikge1xuICAgIC8vIHdlIG5lZWQgdG8gYXNzaWduIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBhc3NpZ25tZW50IHRvIGF2b2lkIGV2YWx1YXRpbmdcbiAgICAvLyBpdCBtb3JlIHRoYW4gb25jZVxuXG4gICAgdmFyIHRlbXBWYWx1ZVJlZiA9IHRoaXMuc2NvcGUuZ2VuZXJhdGVVaWRJZGVudGlmaWVyQmFzZWRPbk5vZGUodmFsdWVSZWYpO1xuXG4gICAgdmFyIGRlY2xhciA9IHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodGVtcFZhbHVlUmVmLCB2YWx1ZVJlZildKTtcbiAgICBkZWNsYXIuX2Jsb2NrSG9pc3QgPSB0aGlzLmJsb2NrSG9pc3Q7XG4gICAgdGhpcy5ub2Rlcy5wdXNoKGRlY2xhcik7XG5cbiAgICAvL1xuXG4gICAgdmFyIHRlbXBDb25kaXRpb25hbCA9IHQuY29uZGl0aW9uYWxFeHByZXNzaW9uKHQuYmluYXJ5RXhwcmVzc2lvbihcIj09PVwiLCB0ZW1wVmFsdWVSZWYsIHQuaWRlbnRpZmllcihcInVuZGVmaW5lZFwiKSksIHBhdHRlcm4ucmlnaHQsIHRlbXBWYWx1ZVJlZik7XG5cbiAgICB2YXIgbGVmdCA9IHBhdHRlcm4ubGVmdDtcbiAgICBpZiAodC5pc1BhdHRlcm4obGVmdCkpIHtcbiAgICAgIHZhciB0ZW1wVmFsdWVEZWZhdWx0ID0gdC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHRlbXBWYWx1ZVJlZiwgdGVtcENvbmRpdGlvbmFsKSk7XG4gICAgICB0ZW1wVmFsdWVEZWZhdWx0Ll9ibG9ja0hvaXN0ID0gdGhpcy5ibG9ja0hvaXN0O1xuXG4gICAgICB0aGlzLm5vZGVzLnB1c2godGVtcFZhbHVlRGVmYXVsdCk7XG4gICAgICB0aGlzLnB1c2gobGVmdCwgdGVtcFZhbHVlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2Rlcy5wdXNoKHRoaXMuYnVpbGRWYXJpYWJsZUFzc2lnbm1lbnQobGVmdCwgdGVtcENvbmRpdGlvbmFsKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyLnByb3RvdHlwZS5wdXNoT2JqZWN0U3ByZWFkID0gZnVuY3Rpb24gcHVzaE9iamVjdFNwcmVhZChwYXR0ZXJuLCBvYmpSZWYsIHNwcmVhZFByb3AsIHNwcmVhZFByb3BJbmRleCkge1xuICAgIC8vIGdldCBhbGwgdGhlIGtleXMgdGhhdCBhcHBlYXIgaW4gdGhpcyBvYmplY3QgYmVmb3JlIHRoZSBjdXJyZW50IHNwcmVhZFxuXG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcHJvcCA9IHBhdHRlcm4ucHJvcGVydGllc1tpXTtcblxuICAgICAgLy8gd2UndmUgZXhjZWVkZWQgdGhlIGluZGV4IG9mIHRoZSBzcHJlYWQgcHJvcGVydHkgdG8gYWxsIHByb3BlcnRpZXMgdG8gdGhlXG4gICAgICAvLyByaWdodCBuZWVkIHRvIGJlIGlnbm9yZWRcbiAgICAgIGlmIChpID49IHNwcmVhZFByb3BJbmRleCkgYnJlYWs7XG5cbiAgICAgIC8vIGlnbm9yZSBvdGhlciBzcHJlYWQgcHJvcGVydGllc1xuICAgICAgaWYgKHQuaXNTcHJlYWRQcm9wZXJ0eShwcm9wKSkgY29udGludWU7XG5cbiAgICAgIHZhciBrZXkgPSBwcm9wLmtleTtcbiAgICAgIGlmICh0LmlzSWRlbnRpZmllcihrZXkpICYmICFwcm9wLmNvbXB1dGVkKSBrZXkgPSB0LmxpdGVyYWwocHJvcC5rZXkubmFtZSk7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG5cbiAgICBrZXlzID0gdC5hcnJheUV4cHJlc3Npb24oa2V5cyk7XG5cbiAgICAvL1xuXG4gICAgdmFyIHZhbHVlID0gdC5jYWxsRXhwcmVzc2lvbih0aGlzLmZpbGUuYWRkSGVscGVyKFwib2JqZWN0LXdpdGhvdXQtcHJvcGVydGllc1wiKSwgW29ialJlZiwga2V5c10pO1xuICAgIHRoaXMubm9kZXMucHVzaCh0aGlzLmJ1aWxkVmFyaWFibGVBc3NpZ25tZW50KHNwcmVhZFByb3AuYXJndW1lbnQsIHZhbHVlKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIucHJvdG90eXBlLnB1c2hPYmplY3RQcm9wZXJ0eSA9IGZ1bmN0aW9uIHB1c2hPYmplY3RQcm9wZXJ0eShwcm9wLCBwcm9wUmVmKSB7XG4gICAgaWYgKHQuaXNMaXRlcmFsKHByb3Aua2V5KSkgcHJvcC5jb21wdXRlZCA9IHRydWU7XG5cbiAgICB2YXIgcGF0dGVybiA9IHByb3AudmFsdWU7XG4gICAgdmFyIG9ialJlZiA9IHQubWVtYmVyRXhwcmVzc2lvbihwcm9wUmVmLCBwcm9wLmtleSwgcHJvcC5jb21wdXRlZCk7XG5cbiAgICBpZiAodC5pc1BhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHRoaXMucHVzaChwYXR0ZXJuLCBvYmpSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGVzLnB1c2godGhpcy5idWlsZFZhcmlhYmxlQXNzaWdubWVudChwYXR0ZXJuLCBvYmpSZWYpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIucHJvdG90eXBlLnB1c2hPYmplY3RQYXR0ZXJuID0gZnVuY3Rpb24gcHVzaE9iamVjdFBhdHRlcm4ocGF0dGVybiwgb2JqUmVmKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82ODFcblxuICAgIGlmICghcGF0dGVybi5wcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5ub2Rlcy5wdXNoKHQuZXhwcmVzc2lvblN0YXRlbWVudCh0LmNhbGxFeHByZXNzaW9uKHRoaXMuZmlsZS5hZGRIZWxwZXIoXCJvYmplY3QtZGVzdHJ1Y3R1cmluZy1lbXB0eVwiKSwgW29ialJlZl0pKSk7XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIHByb3BlcnRpZXMgaW4gdGhpcyBwYXR0ZXJuIGFuZCB0aGUgb2JqZWN0UmVmIGlzIGFcbiAgICAvLyBtZW1iZXIgZXhwcmVzc2lvbiB0aGVuIHdlIG5lZWQgdG8gYXNzaWduIGl0IHRvIGEgdGVtcG9yYXJ5IHZhcmlhYmxlIHNvIGl0J3NcbiAgICAvLyBvbmx5IGV2YWx1YXRlZCBvbmNlXG5cbiAgICBpZiAocGF0dGVybi5wcm9wZXJ0aWVzLmxlbmd0aCA+IDEgJiYgIXRoaXMuc2NvcGUuaXNTdGF0aWMob2JqUmVmKSkge1xuICAgICAgdmFyIHRlbXAgPSB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllckJhc2VkT25Ob2RlKG9ialJlZik7XG4gICAgICB0aGlzLm5vZGVzLnB1c2godGhpcy5idWlsZFZhcmlhYmxlRGVjbGFyYXRpb24odGVtcCwgb2JqUmVmKSk7XG4gICAgICBvYmpSZWYgPSB0ZW1wO1xuICAgIH1cblxuICAgIC8vXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm4ucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb3AgPSBwYXR0ZXJuLnByb3BlcnRpZXNbaV07XG4gICAgICBpZiAodC5pc1NwcmVhZFByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHRoaXMucHVzaE9iamVjdFNwcmVhZChwYXR0ZXJuLCBvYmpSZWYsIHByb3AsIGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wdXNoT2JqZWN0UHJvcGVydHkocHJvcCwgb2JqUmVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIucHJvdG90eXBlLmNhblVucGFja0FycmF5UGF0dGVybiA9IGZ1bmN0aW9uIGNhblVucGFja0FycmF5UGF0dGVybihwYXR0ZXJuLCBhcnIpIHtcbiAgICAvLyBub3QgYW4gYXJyYXkgc28gdGhlcmUncyBubyB3YXkgd2UgY2FuIGRlYWwgd2l0aCB0aGlzXG4gICAgaWYgKCF0LmlzQXJyYXlFeHByZXNzaW9uKGFycikpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIHBhdHRlcm4gaGFzIGxlc3MgZWxlbWVudHMgdGhhbiB0aGUgYXJyYXkgYW5kIGRvZXNuJ3QgaGF2ZSBhIHJlc3Qgc28gc29tZVxuICAgIC8vIGVsZW1lbnRzIHdvbnQgYmUgZXZhbHVhdGVkXG4gICAgaWYgKHBhdHRlcm4uZWxlbWVudHMubGVuZ3RoID4gYXJyLmVsZW1lbnRzLmxlbmd0aCkgcmV0dXJuO1xuICAgIGlmIChwYXR0ZXJuLmVsZW1lbnRzLmxlbmd0aCA8IGFyci5lbGVtZW50cy5sZW5ndGggJiYgIWhhc1Jlc3QocGF0dGVybikpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBfYXJyMiA9IHBhdHRlcm4uZWxlbWVudHM7XG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGVsZW0gPSBfYXJyMltfaTJdO1xuICAgICAgLy8gZGVvcHQgb24gaG9sZXNcbiAgICAgIGlmICghZWxlbSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvLyBkZW9wdCBvbiBtZW1iZXIgZXhwcmVzc2lvbnMgYXMgdGhleSBtYXkgYmUgaW5jbHVkZWQgaW4gdGhlIFJIU1xuICAgICAgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKGVsZW0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF9hcnIzID0gYXJyLmVsZW1lbnRzO1xuICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IF9hcnIzLmxlbmd0aDsgX2kzKyspIHtcbiAgICAgIHZhciBlbGVtID0gX2FycjNbX2kzXTtcbiAgICAgIC8vIGRlb3B0IG9uIHNwcmVhZCBlbGVtZW50c1xuICAgICAgaWYgKHQuaXNTcHJlYWRFbGVtZW50KGVsZW0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVvcHQgb24gcmVmZXJlbmNlIHRvIGxlZnQgc2lkZSBpZGVudGlmaWVyc1xuICAgIHZhciBiaW5kaW5ncyA9IHQuZ2V0QmluZGluZ0lkZW50aWZpZXJzKHBhdHRlcm4pO1xuICAgIHZhciBzdGF0ZSA9IHsgZGVvcHQ6IGZhbHNlLCBiaW5kaW5nczogYmluZGluZ3MgfTtcbiAgICB0aGlzLnNjb3BlLnRyYXZlcnNlKGFyciwgYXJyYXlVbnBhY2tWaXNpdG9yLCBzdGF0ZSk7XG4gICAgcmV0dXJuICFzdGF0ZS5kZW9wdDtcbiAgfTtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIERlc3RydWN0dXJpbmdUcmFuc2Zvcm1lci5wcm90b3R5cGUucHVzaFVucGFja2VkQXJyYXlQYXR0ZXJuID0gZnVuY3Rpb24gcHVzaFVucGFja2VkQXJyYXlQYXR0ZXJuKHBhdHRlcm4sIGFycikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVsZW0gPSBwYXR0ZXJuLmVsZW1lbnRzW2ldO1xuICAgICAgaWYgKHQuaXNSZXN0RWxlbWVudChlbGVtKSkge1xuICAgICAgICB0aGlzLnB1c2goZWxlbS5hcmd1bWVudCwgdC5hcnJheUV4cHJlc3Npb24oYXJyLmVsZW1lbnRzLnNsaWNlKGkpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1c2goZWxlbSwgYXJyLmVsZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBEZXN0cnVjdHVyaW5nVHJhbnNmb3JtZXIucHJvdG90eXBlLnB1c2hBcnJheVBhdHRlcm4gPSBmdW5jdGlvbiBwdXNoQXJyYXlQYXR0ZXJuKHBhdHRlcm4sIGFycmF5UmVmKSB7XG4gICAgaWYgKCFwYXR0ZXJuLmVsZW1lbnRzKSByZXR1cm47XG5cbiAgICAvLyBvcHRpbWlzZSBiYXNpYyBhcnJheSBkZXN0cnVjdHVyaW5nIG9mIGFuIGFycmF5IGV4cHJlc3Npb25cbiAgICAvL1xuICAgIC8vIHdlIGNhbid0IGRvIHRoaXMgdG8gYSBwYXR0ZXJuIG9mIHVuZXF1YWwgc2l6ZSB0byBpdCdzIHJpZ2h0IGhhbmRcbiAgICAvLyBhcnJheSBleHByZXNzaW9uIGFzIHRoZW4gdGhlcmUgd2lsbCBiZSB2YWx1ZXMgdGhhdCB3b250IGJlIGV2YWx1YXRlZFxuICAgIC8vXG4gICAgLy8gZWc6IHZhciBbYSwgYl0gPSBbMSwgMl07XG5cbiAgICBpZiAodGhpcy5jYW5VbnBhY2tBcnJheVBhdHRlcm4ocGF0dGVybiwgYXJyYXlSZWYpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoVW5wYWNrZWRBcnJheVBhdHRlcm4ocGF0dGVybiwgYXJyYXlSZWYpO1xuICAgIH1cblxuICAgIC8vIGlmIHdlIGhhdmUgYSByZXN0IHRoZW4gd2UgbmVlZCBhbGwgdGhlIGVsZW1lbnRzIHNvIGRvbid0IHRlbGxcbiAgICAvLyBgc2NvcGUudG9BcnJheWAgdG8gb25seSBnZXQgYSBjZXJ0YWluIGFtb3VudFxuXG4gICAgdmFyIGNvdW50ID0gIWhhc1Jlc3QocGF0dGVybikgJiYgcGF0dGVybi5lbGVtZW50cy5sZW5ndGg7XG5cbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGVuc3VyZSB0aGF0IHRoZSBgYXJyYXlSZWZgIGlzIGFuIGFycmF5LCBgc2NvcGUudG9BcnJheWAgd2lsbFxuICAgIC8vIHJldHVybiBhIGxvY2FsbHkgYm91bmQgaWRlbnRpZmllciBpZiBpdCdzIGJlZW4gaW5mZXJyZWQgdG8gYmUgYW4gYXJyYXksXG4gICAgLy8gb3RoZXJ3aXNlIGl0J2xsIGJlIGEgY2FsbCB0byBhIGhlbHBlciB0aGF0IHdpbGwgZW5zdXJlIGl0J3Mgb25lXG5cbiAgICB2YXIgdG9BcnJheSA9IHRoaXMudG9BcnJheShhcnJheVJlZiwgY291bnQpO1xuXG4gICAgaWYgKHQuaXNJZGVudGlmaWVyKHRvQXJyYXkpKSB7XG4gICAgICAvLyB3ZSd2ZSBiZWVuIGdpdmVuIGFuIGlkZW50aWZpZXIgc28gaXQgbXVzdCBoYXZlIGJlZW4gaW5mZXJyZWQgdG8gYmUgYW5cbiAgICAgIC8vIGFycmF5XG4gICAgICBhcnJheVJlZiA9IHRvQXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycmF5UmVmID0gdGhpcy5zY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXJCYXNlZE9uTm9kZShhcnJheVJlZik7XG4gICAgICB0aGlzLmFycmF5c1thcnJheVJlZi5uYW1lXSA9IHRydWU7XG4gICAgICB0aGlzLm5vZGVzLnB1c2godGhpcy5idWlsZFZhcmlhYmxlRGVjbGFyYXRpb24oYXJyYXlSZWYsIHRvQXJyYXkpKTtcbiAgICB9XG5cbiAgICAvL1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZWxlbSA9IHBhdHRlcm4uZWxlbWVudHNbaV07XG5cbiAgICAgIC8vIGhvbGVcbiAgICAgIGlmICghZWxlbSkgY29udGludWU7XG5cbiAgICAgIHZhciBlbGVtUmVmO1xuXG4gICAgICBpZiAodC5pc1Jlc3RFbGVtZW50KGVsZW0pKSB7XG4gICAgICAgIGVsZW1SZWYgPSB0aGlzLnRvQXJyYXkoYXJyYXlSZWYpO1xuXG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGVsZW1SZWYgPSB0LmNhbGxFeHByZXNzaW9uKHQubWVtYmVyRXhwcmVzc2lvbihlbGVtUmVmLCB0LmlkZW50aWZpZXIoXCJzbGljZVwiKSksIFt0LmxpdGVyYWwoaSldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGUgZWxlbWVudCB0byB0aGUgcmVzdCBlbGVtZW50IGFyZ3VtZW50IHNpbmNlIHdlJ3ZlIGRlYWx0IHdpdGggaXRcbiAgICAgICAgLy8gYmVpbmcgYSByZXN0IGFscmVhZHlcbiAgICAgICAgZWxlbSA9IGVsZW0uYXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtUmVmID0gdC5tZW1iZXJFeHByZXNzaW9uKGFycmF5UmVmLCB0LmxpdGVyYWwoaSksIHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnB1c2goZWxlbSwgZWxlbVJlZik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgRGVzdHJ1Y3R1cmluZ1RyYW5zZm9ybWVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gaW5pdChwYXR0ZXJuLCByZWYpIHtcbiAgICAvLyB0cnlpbmcgdG8gZGVzdHJ1Y3R1cmUgYSB2YWx1ZSB0aGF0IHdlIGNhbid0IGV2YWx1YXRlIG1vcmUgdGhhbiBvbmNlIHNvIHdlXG4gICAgLy8gbmVlZCB0byBzYXZlIGl0IHRvIGEgdmFyaWFibGVcblxuICAgIGlmICghdC5pc0FycmF5RXhwcmVzc2lvbihyZWYpICYmICF0LmlzTWVtYmVyRXhwcmVzc2lvbihyZWYpKSB7XG4gICAgICB2YXIgbWVtbyA9IHRoaXMuc2NvcGUubWF5YmVHZW5lcmF0ZU1lbW9pc2VkKHJlZiwgdHJ1ZSk7XG4gICAgICBpZiAobWVtbykge1xuICAgICAgICB0aGlzLm5vZGVzLnB1c2godGhpcy5idWlsZFZhcmlhYmxlRGVjbGFyYXRpb24obWVtbywgcmVmKSk7XG4gICAgICAgIHJlZiA9IG1lbW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cblxuICAgIHRoaXMucHVzaChwYXR0ZXJuLCByZWYpO1xuXG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH07XG5cbiAgcmV0dXJuIERlc3RydWN0dXJpbmdUcmFuc2Zvcm1lcjtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
