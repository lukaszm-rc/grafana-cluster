/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersCodeFrame, _helpersCodeFrame2, _index, _index2, _index3, _index4, _helpersParse, _helpersParse2, _types, t, hoistVariablesVisitor;

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
   * Replace a node with an array of multiple. This method performs the following steps:
   *
   *  - Inherit the comments of first provided node with that of the current node.
   *  - Insert the provided nodes after the current node.
   *  - Remove the current node.
   */

  function replaceWithMultiple(nodes) {
    this.resync();

    nodes = this._verifyNodeList(nodes);
    t.inheritLeadingComments(nodes[0], this.node);
    t.inheritTrailingComments(nodes[nodes.length - 1], this.node);
    this.node = this.container[this.key] = null;
    this.insertAfter(nodes);
    if (!this.node) this.dangerouslyRemove();
  }

  /**
   * Parse a string as an expression and replace the current node with the result.
   *
   * NOTE: This is typically not a good idea to use. Building source strings when
   * transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's
   * easier to use, your transforms will be extremely brittle.
   */

  function replaceWithSourceString(replacement) {
    this.resync();

    try {
      replacement = "(" + replacement + ")";
      replacement = _helpersParse2["default"](replacement);
    } catch (err) {
      var loc = err.loc;
      if (loc) {
        err.message += " - make sure this is an expression.";
        err.message += "\n" + _helpersCodeFrame2["default"](replacement, loc.line, loc.column + 1);
      }
      throw err;
    }

    replacement = replacement.program.body[0].expression;
    _index2["default"].removeProperties(replacement);
    return this.replaceWith(replacement);
  }

  /**
   * Replace the current node with another.
   */

  function replaceWith(replacement, whateverAllowed) {
    this.resync();

    if (this.removed) {
      throw new Error("You can't replace this node, we've already removed it");
    }

    if (replacement instanceof _index4["default"]) {
      replacement = replacement.node;
    }

    if (!replacement) {
      throw new Error("You passed `path.replaceWith()` a falsy node, use `path.dangerouslyRemove()` instead");
    }

    if (this.node === replacement) {
      return;
    }

    if (this.isProgram() && !t.isProgram(replacement)) {
      throw new Error("You can only replace a Program root node with another Program node");
    }

    // normalise inserting an entire AST
    if (t.isProgram(replacement) && !this.isProgram()) {
      replacement = replacement.body;
      whateverAllowed = true;
    }

    if (Array.isArray(replacement)) {
      if (whateverAllowed) {
        return this.replaceWithMultiple(replacement);
      } else {
        throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
      }
    }

    if (typeof replacement === "string") {
      // triggers an error
      return this.replaceWithSourceString();
    }

    if (this.isNodeType("Statement") && t.isExpression(replacement)) {
      if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
        // replacing a statement with an expression so wrap it in an expression statement
        replacement = t.expressionStatement(replacement);
      }
    }

    if (this.isNodeType("Expression") && t.isStatement(replacement)) {
      if (!this.canSwapBetweenExpressionAndStatement(replacement)) {
        // replacing an expression with a statement so let's explode it
        return this.replaceExpressionWithStatements([replacement]);
      }
    }

    var oldNode = this.node;
    if (oldNode) t.inheritsComments(replacement, oldNode);

    // replace the node
    this.node = this.container[this.key] = replacement;
    this.type = replacement.type;

    // potentially create new scope
    this.setScope();
  }

  /**
   * This method takes an array of statements nodes and then explodes it
   * into expressions. This method retains completion records which is
   * extremely important to retain original semantics.
   */

  function replaceExpressionWithStatements(nodes) {
    this.resync();

    var toSequenceExpression = t.toSequenceExpression(nodes, this.scope);

    if (toSequenceExpression) {
      return this.replaceWith(toSequenceExpression);
    } else {
      var container = t.functionExpression(null, [], t.blockStatement(nodes));
      container.shadow = true;

      this.replaceWith(t.callExpression(container, []));
      this.traverse(hoistVariablesVisitor);

      // add implicit returns to all ending expression statements
      var last = this.get("callee").getCompletionRecords();
      var _arr2 = last;
      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var lastNode = _arr2[_i2];
        if (!lastNode.isExpressionStatement()) continue;

        var loop = lastNode.findParent(function (path) {
          return path.isLoop();
        });
        if (loop) {
          var uid = this.get("callee").scope.generateDeclaredUidIdentifier("ret");
          this.get("callee.body").pushContainer("body", t.returnStatement(uid));
          lastNode.get("expression").replaceWith(t.assignmentExpression("=", uid, lastNode.node.expression));
        } else {
          lastNode.replaceWith(t.returnStatement(lastNode.node.expression));
        }
      }

      return this.node;
    }
  }

  /**
   * [Please add a description.]
   */

  function replaceInline(nodes) {
    this.resync();

    if (Array.isArray(nodes)) {
      if (Array.isArray(this.container)) {
        nodes = this._verifyNodeList(nodes);
        this._containerInsertAfter(nodes);
        return this.dangerouslyRemove();
      } else {
        return this.replaceWithMultiple(nodes);
      }
    } else {
      return this.replaceWith(nodes);
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.replaceWithMultiple = replaceWithMultiple;
      exports.replaceWithSourceString = replaceWithSourceString;
      exports.replaceWith = replaceWith;
      exports.replaceExpressionWithStatements = replaceExpressionWithStatements;
      exports.replaceInline = replaceInline;_helpersCodeFrame = require("../../helpers/code-frame");
      _helpersCodeFrame2 = _interopRequireDefault(_helpersCodeFrame);
      _index = require("../index");
      _index2 = _interopRequireDefault(_index);
      _index3 = require("./index");
      _index4 = _interopRequireDefault(_index3);
      _helpersParse = require("../../helpers/parse");
      _helpersParse2 = _interopRequireDefault(_helpersParse);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      hoistVariablesVisitor = {

        /**
         * [Please add a description.]
         */

        Function: function Function() {
          this.skip();
        },

        /**
         * [Please add a description.]
         */

        VariableDeclaration: function VariableDeclaration(node, parent, scope) {
          if (node.kind !== "var") return;

          var bindings = this.getBindingIdentifiers();
          for (var key in bindings) {
            scope.push({ id: bindings[key] });
          }

          var exprs = [];

          var _arr = node.declarations;
          for (var _i = 0; _i < _arr.length; _i++) {
            var declar = _arr[_i];
            if (declar.init) {
              exprs.push(t.expressionStatement(t.assignmentExpression("=", declar.id, declar.init)));
            }
          }

          return exprs;
        }
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvcmVwbGFjZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFVQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7Ozs7OztBQXNFQSxXQUFTLG1CQUFULENBQTZCLEtBQTdCLEVBQW9DO0FBQ2xDLFNBQUssTUFBTCxHQURrQzs7QUFHbEMsWUFBUSxLQUFLLGVBQUwsQ0FBcUIsS0FBckIsQ0FBUixDQUhrQztBQUlsQyxNQUFFLHNCQUFGLENBQXlCLE1BQU0sQ0FBTixDQUF6QixFQUFtQyxLQUFLLElBQUwsQ0FBbkMsQ0FKa0M7QUFLbEMsTUFBRSx1QkFBRixDQUEwQixNQUFNLE1BQU0sTUFBTixHQUFlLENBQWYsQ0FBaEMsRUFBbUQsS0FBSyxJQUFMLENBQW5ELENBTGtDO0FBTWxDLFNBQUssSUFBTCxHQUFZLEtBQUssU0FBTCxDQUFl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UmlFOztBQVVyRSxjQUFJLE9BQU8sS0FBSyxZQUFMLENBVjBEO0FBV3JFLGVBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLEtBQUssTUFBTCxFQUFhLElBQW5DLEVBQXlDO0FBQ3ZDLGdCQUFJLFNBQVMsS0FBSyxFQUFMLENBQVQsQ0FEbUM7QUFFdkMsZ0JBQUksT0FBTyxJQUFQLEVBQWE7QUFDZixvQkFBTSxJQUFOLENBQVcsRUFBRSxtQkFBRixDQUFzQixFQUFFLG9CQUFGLENBQXVCLEdBQXZCLEVBQTRCLE9BQU8sRUFBUCxFQUFXLE9BQU8sSUFBUCxDQUE3RCxDQUFYLEVBRGU7YUFBakI7V0FGRjs7QUFPQSxpQkFBTyxLQUFQLENBbEJxRTtTQUFsRCIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYXZlcnNhbC9wYXRoL3JlcGxhY2VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5yZXBsYWNlV2l0aE11bHRpcGxlID0gcmVwbGFjZVdpdGhNdWx0aXBsZTtcbmV4cG9ydHMucmVwbGFjZVdpdGhTb3VyY2VTdHJpbmcgPSByZXBsYWNlV2l0aFNvdXJjZVN0cmluZztcbmV4cG9ydHMucmVwbGFjZVdpdGggPSByZXBsYWNlV2l0aDtcbmV4cG9ydHMucmVwbGFjZUV4cHJlc3Npb25XaXRoU3RhdGVtZW50cyA9IHJlcGxhY2VFeHByZXNzaW9uV2l0aFN0YXRlbWVudHM7XG5leHBvcnRzLnJlcGxhY2VJbmxpbmUgPSByZXBsYWNlSW5saW5lO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9oZWxwZXJzQ29kZUZyYW1lID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvY29kZS1mcmFtZVwiKTtcblxudmFyIF9oZWxwZXJzQ29kZUZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNDb2RlRnJhbWUpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uL2luZGV4XCIpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIF9pbmRleDQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleDMpO1xuXG52YXIgX2hlbHBlcnNQYXJzZSA9IHJlcXVpcmUoXCIuLi8uLi9oZWxwZXJzL3BhcnNlXCIpO1xuXG52YXIgX2hlbHBlcnNQYXJzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzUGFyc2UpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIGhvaXN0VmFyaWFibGVzVmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZ1bmN0aW9uOiBmdW5jdGlvbiBGdW5jdGlvbigpIHtcbiAgICB0aGlzLnNraXAoKTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFZhcmlhYmxlRGVjbGFyYXRpb246IGZ1bmN0aW9uIFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSwgcGFyZW50LCBzY29wZSkge1xuICAgIGlmIChub2RlLmtpbmQgIT09IFwidmFyXCIpIHJldHVybjtcblxuICAgIHZhciBiaW5kaW5ncyA9IHRoaXMuZ2V0QmluZGluZ0lkZW50aWZpZXJzKCk7XG4gICAgZm9yICh2YXIga2V5IGluIGJpbmRpbmdzKSB7XG4gICAgICBzY29wZS5wdXNoKHsgaWQ6IGJpbmRpbmdzW2tleV0gfSk7XG4gICAgfVxuXG4gICAgdmFyIGV4cHJzID0gW107XG5cbiAgICB2YXIgX2FyciA9IG5vZGUuZGVjbGFyYXRpb25zO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGRlY2xhciA9IF9hcnJbX2ldO1xuICAgICAgaWYgKGRlY2xhci5pbml0KSB7XG4gICAgICAgIGV4cHJzLnB1c2godC5leHByZXNzaW9uU3RhdGVtZW50KHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIGRlY2xhci5pZCwgZGVjbGFyLmluaXQpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHJzO1xuICB9XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgYSBub2RlIHdpdGggYW4gYXJyYXkgb2YgbXVsdGlwbGUuIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHRoZSBmb2xsb3dpbmcgc3RlcHM6XG4gKlxuICogIC0gSW5oZXJpdCB0aGUgY29tbWVudHMgb2YgZmlyc3QgcHJvdmlkZWQgbm9kZSB3aXRoIHRoYXQgb2YgdGhlIGN1cnJlbnQgbm9kZS5cbiAqICAtIEluc2VydCB0aGUgcHJvdmlkZWQgbm9kZXMgYWZ0ZXIgdGhlIGN1cnJlbnQgbm9kZS5cbiAqICAtIFJlbW92ZSB0aGUgY3VycmVudCBub2RlLlxuICovXG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoTXVsdGlwbGUobm9kZXMpIHtcbiAgdGhpcy5yZXN5bmMoKTtcblxuICBub2RlcyA9IHRoaXMuX3ZlcmlmeU5vZGVMaXN0KG5vZGVzKTtcbiAgdC5pbmhlcml0TGVhZGluZ0NvbW1lbnRzKG5vZGVzWzBdLCB0aGlzLm5vZGUpO1xuICB0LmluaGVyaXRUcmFpbGluZ0NvbW1lbnRzKG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLCB0aGlzLm5vZGUpO1xuICB0aGlzLm5vZGUgPSB0aGlzLmNvbnRhaW5lclt0aGlzLmtleV0gPSBudWxsO1xuICB0aGlzLmluc2VydEFmdGVyKG5vZGVzKTtcbiAgaWYgKCF0aGlzLm5vZGUpIHRoaXMuZGFuZ2Vyb3VzbHlSZW1vdmUoKTtcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBhcyBhbiBleHByZXNzaW9uIGFuZCByZXBsYWNlIHRoZSBjdXJyZW50IG5vZGUgd2l0aCB0aGUgcmVzdWx0LlxuICpcbiAqIE5PVEU6IFRoaXMgaXMgdHlwaWNhbGx5IG5vdCBhIGdvb2QgaWRlYSB0byB1c2UuIEJ1aWxkaW5nIHNvdXJjZSBzdHJpbmdzIHdoZW5cbiAqIHRyYW5zZm9ybWluZyBBU1RzIGlzIGFuIGFudGlwYXR0ZXJuIGFuZCBTSE9VTEQgTk9UIGJlIGVuY291cmFnZWQuIEV2ZW4gaWYgaXQnc1xuICogZWFzaWVyIHRvIHVzZSwgeW91ciB0cmFuc2Zvcm1zIHdpbGwgYmUgZXh0cmVtZWx5IGJyaXR0bGUuXG4gKi9cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhTb3VyY2VTdHJpbmcocmVwbGFjZW1lbnQpIHtcbiAgdGhpcy5yZXN5bmMoKTtcblxuICB0cnkge1xuICAgIHJlcGxhY2VtZW50ID0gXCIoXCIgKyByZXBsYWNlbWVudCArIFwiKVwiO1xuICAgIHJlcGxhY2VtZW50ID0gX2hlbHBlcnNQYXJzZTJbXCJkZWZhdWx0XCJdKHJlcGxhY2VtZW50KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdmFyIGxvYyA9IGVyci5sb2M7XG4gICAgaWYgKGxvYykge1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gXCIgLSBtYWtlIHN1cmUgdGhpcyBpcyBhbiBleHByZXNzaW9uLlwiO1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gXCJcXG5cIiArIF9oZWxwZXJzQ29kZUZyYW1lMltcImRlZmF1bHRcIl0ocmVwbGFjZW1lbnQsIGxvYy5saW5lLCBsb2MuY29sdW1uICsgMSk7XG4gICAgfVxuICAgIHRocm93IGVycjtcbiAgfVxuXG4gIHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucHJvZ3JhbS5ib2R5WzBdLmV4cHJlc3Npb247XG4gIF9pbmRleDJbXCJkZWZhdWx0XCJdLnJlbW92ZVByb3BlcnRpZXMocmVwbGFjZW1lbnQpO1xuICByZXR1cm4gdGhpcy5yZXBsYWNlV2l0aChyZXBsYWNlbWVudCk7XG59XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgY3VycmVudCBub2RlIHdpdGggYW5vdGhlci5cbiAqL1xuXG5mdW5jdGlvbiByZXBsYWNlV2l0aChyZXBsYWNlbWVudCwgd2hhdGV2ZXJBbGxvd2VkKSB7XG4gIHRoaXMucmVzeW5jKCk7XG5cbiAgaWYgKHRoaXMucmVtb3ZlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4ndCByZXBsYWNlIHRoaXMgbm9kZSwgd2UndmUgYWxyZWFkeSByZW1vdmVkIGl0XCIpO1xuICB9XG5cbiAgaWYgKHJlcGxhY2VtZW50IGluc3RhbmNlb2YgX2luZGV4NFtcImRlZmF1bHRcIl0pIHtcbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50Lm5vZGU7XG4gIH1cblxuICBpZiAoIXJlcGxhY2VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHBhc3NlZCBgcGF0aC5yZXBsYWNlV2l0aCgpYCBhIGZhbHN5IG5vZGUsIHVzZSBgcGF0aC5kYW5nZXJvdXNseVJlbW92ZSgpYCBpbnN0ZWFkXCIpO1xuICB9XG5cbiAgaWYgKHRoaXMubm9kZSA9PT0gcmVwbGFjZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5pc1Byb2dyYW0oKSAmJiAhdC5pc1Byb2dyYW0ocmVwbGFjZW1lbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbiBvbmx5IHJlcGxhY2UgYSBQcm9ncmFtIHJvb3Qgbm9kZSB3aXRoIGFub3RoZXIgUHJvZ3JhbSBub2RlXCIpO1xuICB9XG5cbiAgLy8gbm9ybWFsaXNlIGluc2VydGluZyBhbiBlbnRpcmUgQVNUXG4gIGlmICh0LmlzUHJvZ3JhbShyZXBsYWNlbWVudCkgJiYgIXRoaXMuaXNQcm9ncmFtKCkpIHtcbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LmJvZHk7XG4gICAgd2hhdGV2ZXJBbGxvd2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHJlcGxhY2VtZW50KSkge1xuICAgIGlmICh3aGF0ZXZlckFsbG93ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VXaXRoTXVsdGlwbGUocmVwbGFjZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb24ndCB1c2UgYHBhdGgucmVwbGFjZVdpdGgoKWAgd2l0aCBhbiBhcnJheSBvZiBub2RlcywgdXNlIGBwYXRoLnJlcGxhY2VXaXRoTXVsdGlwbGUoKWBcIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiByZXBsYWNlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgIC8vIHRyaWdnZXJzIGFuIGVycm9yXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZVdpdGhTb3VyY2VTdHJpbmcoKTtcbiAgfVxuXG4gIGlmICh0aGlzLmlzTm9kZVR5cGUoXCJTdGF0ZW1lbnRcIikgJiYgdC5pc0V4cHJlc3Npb24ocmVwbGFjZW1lbnQpKSB7XG4gICAgaWYgKCF0aGlzLmNhbkhhdmVWYXJpYWJsZURlY2xhcmF0aW9uT3JFeHByZXNzaW9uKCkgJiYgIXRoaXMuY2FuU3dhcEJldHdlZW5FeHByZXNzaW9uQW5kU3RhdGVtZW50KHJlcGxhY2VtZW50KSkge1xuICAgICAgLy8gcmVwbGFjaW5nIGEgc3RhdGVtZW50IHdpdGggYW4gZXhwcmVzc2lvbiBzbyB3cmFwIGl0IGluIGFuIGV4cHJlc3Npb24gc3RhdGVtZW50XG4gICAgICByZXBsYWNlbWVudCA9IHQuZXhwcmVzc2lvblN0YXRlbWVudChyZXBsYWNlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuaXNOb2RlVHlwZShcIkV4cHJlc3Npb25cIikgJiYgdC5pc1N0YXRlbWVudChyZXBsYWNlbWVudCkpIHtcbiAgICBpZiAoIXRoaXMuY2FuU3dhcEJldHdlZW5FeHByZXNzaW9uQW5kU3RhdGVtZW50KHJlcGxhY2VtZW50KSkge1xuICAgICAgLy8gcmVwbGFjaW5nIGFuIGV4cHJlc3Npb24gd2l0aCBhIHN0YXRlbWVudCBzbyBsZXQncyBleHBsb2RlIGl0XG4gICAgICByZXR1cm4gdGhpcy5yZXBsYWNlRXhwcmVzc2lvbldpdGhTdGF0ZW1lbnRzKFtyZXBsYWNlbWVudF0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvbGROb2RlID0gdGhpcy5ub2RlO1xuICBpZiAob2xkTm9kZSkgdC5pbmhlcml0c0NvbW1lbnRzKHJlcGxhY2VtZW50LCBvbGROb2RlKTtcblxuICAvLyByZXBsYWNlIHRoZSBub2RlXG4gIHRoaXMubm9kZSA9IHRoaXMuY29udGFpbmVyW3RoaXMua2V5XSA9IHJlcGxhY2VtZW50O1xuICB0aGlzLnR5cGUgPSByZXBsYWNlbWVudC50eXBlO1xuXG4gIC8vIHBvdGVudGlhbGx5IGNyZWF0ZSBuZXcgc2NvcGVcbiAgdGhpcy5zZXRTY29wZSgpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHRha2VzIGFuIGFycmF5IG9mIHN0YXRlbWVudHMgbm9kZXMgYW5kIHRoZW4gZXhwbG9kZXMgaXRcbiAqIGludG8gZXhwcmVzc2lvbnMuIFRoaXMgbWV0aG9kIHJldGFpbnMgY29tcGxldGlvbiByZWNvcmRzIHdoaWNoIGlzXG4gKiBleHRyZW1lbHkgaW1wb3J0YW50IHRvIHJldGFpbiBvcmlnaW5hbCBzZW1hbnRpY3MuXG4gKi9cblxuZnVuY3Rpb24gcmVwbGFjZUV4cHJlc3Npb25XaXRoU3RhdGVtZW50cyhub2Rlcykge1xuICB0aGlzLnJlc3luYygpO1xuXG4gIHZhciB0b1NlcXVlbmNlRXhwcmVzc2lvbiA9IHQudG9TZXF1ZW5jZUV4cHJlc3Npb24obm9kZXMsIHRoaXMuc2NvcGUpO1xuXG4gIGlmICh0b1NlcXVlbmNlRXhwcmVzc2lvbikge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VXaXRoKHRvU2VxdWVuY2VFeHByZXNzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY29udGFpbmVyID0gdC5mdW5jdGlvbkV4cHJlc3Npb24obnVsbCwgW10sIHQuYmxvY2tTdGF0ZW1lbnQobm9kZXMpKTtcbiAgICBjb250YWluZXIuc2hhZG93ID0gdHJ1ZTtcblxuICAgIHRoaXMucmVwbGFjZVdpdGgodC5jYWxsRXhwcmVzc2lvbihjb250YWluZXIsIFtdKSk7XG4gICAgdGhpcy50cmF2ZXJzZShob2lzdFZhcmlhYmxlc1Zpc2l0b3IpO1xuXG4gICAgLy8gYWRkIGltcGxpY2l0IHJldHVybnMgdG8gYWxsIGVuZGluZyBleHByZXNzaW9uIHN0YXRlbWVudHNcbiAgICB2YXIgbGFzdCA9IHRoaXMuZ2V0KFwiY2FsbGVlXCIpLmdldENvbXBsZXRpb25SZWNvcmRzKCk7XG4gICAgdmFyIF9hcnIyID0gbGFzdDtcbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBfYXJyMi5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgbGFzdE5vZGUgPSBfYXJyMltfaTJdO1xuICAgICAgaWYgKCFsYXN0Tm9kZS5pc0V4cHJlc3Npb25TdGF0ZW1lbnQoKSkgY29udGludWU7XG5cbiAgICAgIHZhciBsb29wID0gbGFzdE5vZGUuZmluZFBhcmVudChmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICByZXR1cm4gcGF0aC5pc0xvb3AoKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgdmFyIHVpZCA9IHRoaXMuZ2V0KFwiY2FsbGVlXCIpLnNjb3BlLmdlbmVyYXRlRGVjbGFyZWRVaWRJZGVudGlmaWVyKFwicmV0XCIpO1xuICAgICAgICB0aGlzLmdldChcImNhbGxlZS5ib2R5XCIpLnB1c2hDb250YWluZXIoXCJib2R5XCIsIHQucmV0dXJuU3RhdGVtZW50KHVpZCkpO1xuICAgICAgICBsYXN0Tm9kZS5nZXQoXCJleHByZXNzaW9uXCIpLnJlcGxhY2VXaXRoKHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIHVpZCwgbGFzdE5vZGUubm9kZS5leHByZXNzaW9uKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0Tm9kZS5yZXBsYWNlV2l0aCh0LnJldHVyblN0YXRlbWVudChsYXN0Tm9kZS5ub2RlLmV4cHJlc3Npb24pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gcmVwbGFjZUlubGluZShub2Rlcykge1xuICB0aGlzLnJlc3luYygpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY29udGFpbmVyKSkge1xuICAgICAgbm9kZXMgPSB0aGlzLl92ZXJpZnlOb2RlTGlzdChub2Rlcyk7XG4gICAgICB0aGlzLl9jb250YWluZXJJbnNlcnRBZnRlcihub2Rlcyk7XG4gICAgICByZXR1cm4gdGhpcy5kYW5nZXJvdXNseVJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXBsYWNlV2l0aE11bHRpcGxlKG5vZGVzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZVdpdGgobm9kZXMpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
