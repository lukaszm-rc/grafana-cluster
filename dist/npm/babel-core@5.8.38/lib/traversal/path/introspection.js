/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashCollectionIncludes, _lodashCollectionIncludes2, _types, t, is;

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
   * Match the current node if it matches the provided `pattern`.
   *
   * For example, given the match `React.createClass` it would match the
   * parsed nodes of `React.createClass` and `React["createClass"]`.
   */

  function matchesPattern(pattern, allowPartial) {
    // not a member expression
    if (!this.isMemberExpression()) return false;

    var parts = pattern.split(".");
    var search = [this.node];
    var i = 0;

    function matches(name) {
      var part = parts[i];
      return part === "*" || name === part;
    }

    while (search.length) {
      var node = search.shift();

      if (allowPartial && i === parts.length) {
        return true;
      }

      if (t.isIdentifier(node)) {
        // this part doesn't match
        if (!matches(node.name)) return false;
      } else if (t.isLiteral(node)) {
        // this part doesn't match
        if (!matches(node.value)) return false;
      } else if (t.isMemberExpression(node)) {
        if (node.computed && !t.isLiteral(node.property)) {
          // we can't deal with this
          return false;
        } else {
          search.unshift(node.property);
          search.unshift(node.object);
          continue;
        }
      } else if (t.isThisExpression(node)) {
        if (!matches("this")) return false;
      } else {
        // we can't deal with this
        return false;
      }

      // too many parts
      if (++i > parts.length) {
        return false;
      }
    }

    return i === parts.length;
  }

  /**
   * Check whether we have the input `key`. If the `key` references an array then we check
   * if the array has any items, otherwise we just check if it's falsy.
   */

  function has(key) {
    var val = this.node[key];
    if (val && Array.isArray(val)) {
      return !!val.length;
    } else {
      return !!val;
    }
  }

  /**
   * Alias of `has`.
   */

  /**
   * Opposite of `has`.
   */

  function isnt(key) {
    return !this.has(key);
  }

  /**
   * Check whether the path node `key` strict equals `value`.
   */

  function equals(key, value) {
    return this.node[key] === value;
  }

  /**
   * Check the type against our stored internal type of the node. This is handy when a node has
   * been removed yet we still internally know the type and need it to calculate node replacement.
   */

  function isNodeType(type) {
    return t.isType(this.type, type);
  }

  /**
   * This checks whether or not we're in one of the following positions:
   *
   *   for (KEY in right);
   *   for (KEY;;);
   *
   * This is because these spots allow VariableDeclarations AND normal expressions so we need
   * to tell the path replacement that it's ok to replace this with an expression.
   */

  function canHaveVariableDeclarationOrExpression() {
    return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
  }

  /**
   * This checks whether we are swapping an arrow function's body between an
   * expression and a block statement (or vice versa).
   *
   * This is because arrow functions may implicitly return an expression, which
   * is the same as containing a block statement.
   */

  function canSwapBetweenExpressionAndStatement(replacement) {
    if (this.key !== "body" || !this.parentPath.isArrowFunctionExpression()) {
      return false;
    }

    if (this.isExpression()) {
      return t.isBlockStatement(replacement);
    } else if (this.isBlockStatement()) {
      return t.isExpression(replacement);
    }

    return false;
  }

  /**
   * Check whether the current path references a completion record
   */

  function isCompletionRecord(allowInsideFunction) {
    var path = this;
    var first = true;

    do {
      var container = path.container;

      // we're in a function so can't be a completion record
      if (path.isFunction() && !first) {
        return !!allowInsideFunction;
      }

      first = false;

      // check to see if we're the last item in the container and if we are
      // we're a completion record!
      if (Array.isArray(container) && path.key !== container.length - 1) {
        return false;
      }
    } while ((path = path.parentPath) && !path.isProgram());

    return true;
  }

  /**
   * Check whether or not the current `key` allows either a single statement or block statement
   * so we can explode it if necessary.
   */

  function isStatementOrBlock() {
    if (this.parentPath.isLabeledStatement() || t.isBlockStatement(this.container)) {
      return false;
    } else {
      return _lodashCollectionIncludes2["default"](t.STATEMENT_OR_BLOCK_KEYS, this.key);
    }
  }

  /**
   * Check if the currently assigned path references the `importName` of `moduleSource`.
   */

  function referencesImport(moduleSource, importName) {
    if (!this.isReferencedIdentifier()) return false;

    var binding = this.scope.getBinding(this.node.name);
    if (!binding || binding.kind !== "module") return false;

    var path = binding.path;
    var parent = path.parentPath;
    if (!parent.isImportDeclaration()) return false;

    // check moduleSource
    if (parent.node.source.value === moduleSource) {
      if (!importName) return true;
    } else {
      return false;
    }

    if (path.isImportDefaultSpecifier() && importName === "default") {
      return true;
    }

    if (path.isImportNamespaceSpecifier() && importName === "*") {
      return true;
    }

    if (path.isImportSpecifier() && path.node.imported.name === importName) {
      return true;
    }

    return false;
  }

  /**
   * Get the source code associated with this node.
   */

  function getSource() {
    var node = this.node;
    if (node.end) {
      return this.hub.file.code.slice(node.start, node.end);
    } else {
      return "";
    }
  }

  /**
   * [Please add a description.]
   */

  function willIMaybeExecuteBefore(target) {
    return this._guessExecutionStatusRelativeTo(target) !== "after";
  }

  /**
   * Given a `target` check the execution status of it relative to the current path.
   *
   * "Execution status" simply refers to where or not we **think** this will execuete
   * before or after the input `target` element.
   */

  function _guessExecutionStatusRelativeTo(target) {
    // check if the two paths are in different functions, we can't track execution of these
    var targetFuncParent = target.scope.getFunctionParent();
    var selfFuncParent = this.scope.getFunctionParent();
    if (targetFuncParent !== selfFuncParent) {
      return "function";
    }

    var targetPaths = target.getAncestry();
    //if (targetPaths.indexOf(this) >= 0) return "after";

    var selfPaths = this.getAncestry();

    // get ancestor where the branches intersect
    var commonPath;
    var targetIndex;
    var selfIndex;
    for (selfIndex = 0; selfIndex < selfPaths.length; selfIndex++) {
      var selfPath = selfPaths[selfIndex];
      targetIndex = targetPaths.indexOf(selfPath);
      if (targetIndex >= 0) {
        commonPath = selfPath;
        break;
      }
    }
    if (!commonPath) {
      return "before";
    }

    // get the relationship paths that associate these nodes to their common ancestor
    var targetRelationship = targetPaths[targetIndex - 1];
    var selfRelationship = selfPaths[selfIndex - 1];
    if (!targetRelationship || !selfRelationship) {
      return "before";
    }

    // container list so let's see which one is after the other
    if (targetRelationship.listKey && targetRelationship.container === selfRelationship.container) {
      return targetRelationship.key > selfRelationship.key ? "before" : "after";
    }

    // otherwise we're associated by a parent node, check which key comes before the other
    var targetKeyPosition = t.VISITOR_KEYS[targetRelationship.type].indexOf(targetRelationship.key);
    var selfKeyPosition = t.VISITOR_KEYS[selfRelationship.type].indexOf(selfRelationship.key);
    return targetKeyPosition > selfKeyPosition ? "before" : "after";
  }

  /**
   * Resolve a "pointer" `NodePath` to it's absolute path.
   */

  function resolve(dangerous, resolved) {
    return this._resolve(dangerous, resolved) || this;
  }

  /**
   * [Please add a description.]
   */

  function _resolve(dangerous, resolved) {
    // detect infinite recursion
    // todo: possibly have a max length on this just to be safe
    if (resolved && resolved.indexOf(this) >= 0) return;

    // we store all the paths we've "resolved" in this array to prevent infinite recursion
    resolved = resolved || [];
    resolved.push(this);

    if (this.isVariableDeclarator()) {
      if (this.get("id").isIdentifier()) {
        return this.get("init").resolve(dangerous, resolved);
      } else {
        // otherwise it's a request for a pattern and that's a bit more tricky
      }
    } else if (this.isReferencedIdentifier()) {
        var binding = this.scope.getBinding(this.node.name);
        if (!binding) return;

        // reassigned so we can't really resolve it
        if (!binding.constant) return;

        // todo - lookup module in dependency graph
        if (binding.kind === "module") return;

        if (binding.path !== this) {
          return binding.path.resolve(dangerous, resolved);
        }
      } else if (this.isTypeCastExpression()) {
        return this.get("expression").resolve(dangerous, resolved);
      } else if (dangerous && this.isMemberExpression()) {
        // this is dangerous, as non-direct target assignments will mutate it's state
        // making this resolution inaccurate

        var targetKey = this.toComputedKey();
        if (!t.isLiteral(targetKey)) return;

        var targetName = targetKey.value;

        var target = this.get("object").resolve(dangerous, resolved);

        if (target.isObjectExpression()) {
          var props = target.get("properties");
          var _arr = props;
          for (var _i = 0; _i < _arr.length; _i++) {
            var prop = _arr[_i];
            if (!prop.isProperty()) continue;

            var key = prop.get("key");

            // { foo: obj }
            var match = prop.isnt("computed") && key.isIdentifier({ name: targetName });

            // { "foo": "obj" } or { ["foo"]: "obj" }
            match = match || key.isLiteral({ value: targetName });

            if (match) return prop.get("value").resolve(dangerous, resolved);
          }
        } else if (target.isArrayExpression() && !isNaN(+targetName)) {
          var elems = target.get("elements");
          var elem = elems[targetName];
          if (elem) return elem.resolve(dangerous, resolved);
        }
      }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.matchesPattern = matchesPattern;
      exports.has = has;
      exports.isnt = isnt;
      exports.equals = equals;
      exports.isNodeType = isNodeType;
      exports.canHaveVariableDeclarationOrExpression = canHaveVariableDeclarationOrExpression;
      exports.canSwapBetweenExpressionAndStatement = canSwapBetweenExpressionAndStatement;
      exports.isCompletionRecord = isCompletionRecord;
      exports.isStatementOrBlock = isStatementOrBlock;
      exports.referencesImport = referencesImport;
      exports.getSource = getSource;
      exports.willIMaybeExecuteBefore = willIMaybeExecuteBefore;
      exports._guessExecutionStatusRelativeTo = _guessExecutionStatusRelativeTo;
      exports.resolve = resolve;
      exports._resolve = _resolve;_lodashCollectionIncludes = require("lodash/collection/includes");
      _lodashCollectionIncludes2 = _interopRequireDefault(_lodashCollectionIncludes);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
      is = has;


      exports.is = is;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvaW50cm9zcGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQW9CQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7Ozs7O0FBaUJBLFdBQVMsY0FBVCxDQUF3QixPQUF4QixFQUFpQyxZQUFqQyxFQUErQzs7QUFFN0MsUUFBSSxDQUFDLEtBQUssa0JBQUwsRUFBRCxFQUE0QixPQUFPLEtBQVAsQ0FBaEM7O0FBRUEsUUFBSSxRQUFRLFFBQVEsS0FBUixDQUFjLEdBQWQsQ0FBUixDQUp5QztBQUs3QyxRQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUwsQ0FBVixDQUx5QztBQU03QyxRQUFJLElBQUksQ0FBSixDQU55Qzs7QUFRN0MsYUFBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQ3JCLFVBQUksT0FBTyxNQUFNLENBQU4sQ0FBUCxD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QVIsR0FBMEMsK0JBQTFDO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxRQUFSLEdBQW1CLFFBQW5CLENBU0ksNEJBQTRCLFFBQVEsNEJBQVI7QUFFNUIsbUNBQTZCLHVCQUF1Qix5QkFBdkI7QUFFN0IsZUFBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QjtBQThFSixXQUFLOzs7QUFFVCxjQUFRLEVBQVIsR0FBYSxFQUFiIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvaW50cm9zcGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubWF0Y2hlc1BhdHRlcm4gPSBtYXRjaGVzUGF0dGVybjtcbmV4cG9ydHMuaGFzID0gaGFzO1xuZXhwb3J0cy5pc250ID0gaXNudDtcbmV4cG9ydHMuZXF1YWxzID0gZXF1YWxzO1xuZXhwb3J0cy5pc05vZGVUeXBlID0gaXNOb2RlVHlwZTtcbmV4cG9ydHMuY2FuSGF2ZVZhcmlhYmxlRGVjbGFyYXRpb25PckV4cHJlc3Npb24gPSBjYW5IYXZlVmFyaWFibGVEZWNsYXJhdGlvbk9yRXhwcmVzc2lvbjtcbmV4cG9ydHMuY2FuU3dhcEJldHdlZW5FeHByZXNzaW9uQW5kU3RhdGVtZW50ID0gY2FuU3dhcEJldHdlZW5FeHByZXNzaW9uQW5kU3RhdGVtZW50O1xuZXhwb3J0cy5pc0NvbXBsZXRpb25SZWNvcmQgPSBpc0NvbXBsZXRpb25SZWNvcmQ7XG5leHBvcnRzLmlzU3RhdGVtZW50T3JCbG9jayA9IGlzU3RhdGVtZW50T3JCbG9jaztcbmV4cG9ydHMucmVmZXJlbmNlc0ltcG9ydCA9IHJlZmVyZW5jZXNJbXBvcnQ7XG5leHBvcnRzLmdldFNvdXJjZSA9IGdldFNvdXJjZTtcbmV4cG9ydHMud2lsbElNYXliZUV4ZWN1dGVCZWZvcmUgPSB3aWxsSU1heWJlRXhlY3V0ZUJlZm9yZTtcbmV4cG9ydHMuX2d1ZXNzRXhlY3V0aW9uU3RhdHVzUmVsYXRpdmVUbyA9IF9ndWVzc0V4ZWN1dGlvblN0YXR1c1JlbGF0aXZlVG87XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlO1xuZXhwb3J0cy5fcmVzb2x2ZSA9IF9yZXNvbHZlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uSW5jbHVkZXMgPSByZXF1aXJlKFwibG9kYXNoL2NvbGxlY3Rpb24vaW5jbHVkZXNcIik7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25JbmNsdWRlcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBNYXRjaCB0aGUgY3VycmVudCBub2RlIGlmIGl0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIGBwYXR0ZXJuYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIG1hdGNoIGBSZWFjdC5jcmVhdGVDbGFzc2AgaXQgd291bGQgbWF0Y2ggdGhlXG4gKiBwYXJzZWQgbm9kZXMgb2YgYFJlYWN0LmNyZWF0ZUNsYXNzYCBhbmQgYFJlYWN0W1wiY3JlYXRlQ2xhc3NcIl1gLlxuICovXG5cbmZ1bmN0aW9uIG1hdGNoZXNQYXR0ZXJuKHBhdHRlcm4sIGFsbG93UGFydGlhbCkge1xuICAvLyBub3QgYSBtZW1iZXIgZXhwcmVzc2lvblxuICBpZiAoIXRoaXMuaXNNZW1iZXJFeHByZXNzaW9uKCkpIHJldHVybiBmYWxzZTtcblxuICB2YXIgcGFydHMgPSBwYXR0ZXJuLnNwbGl0KFwiLlwiKTtcbiAgdmFyIHNlYXJjaCA9IFt0aGlzLm5vZGVdO1xuICB2YXIgaSA9IDA7XG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhuYW1lKSB7XG4gICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICByZXR1cm4gcGFydCA9PT0gXCIqXCIgfHwgbmFtZSA9PT0gcGFydDtcbiAgfVxuXG4gIHdoaWxlIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgdmFyIG5vZGUgPSBzZWFyY2guc2hpZnQoKTtcblxuICAgIGlmIChhbGxvd1BhcnRpYWwgJiYgaSA9PT0gcGFydHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodC5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICAgIC8vIHRoaXMgcGFydCBkb2Vzbid0IG1hdGNoXG4gICAgICBpZiAoIW1hdGNoZXMobm9kZS5uYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodC5pc0xpdGVyYWwobm9kZSkpIHtcbiAgICAgIC8vIHRoaXMgcGFydCBkb2Vzbid0IG1hdGNoXG4gICAgICBpZiAoIW1hdGNoZXMobm9kZS52YWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgICBpZiAobm9kZS5jb21wdXRlZCAmJiAhdC5pc0xpdGVyYWwobm9kZS5wcm9wZXJ0eSkpIHtcbiAgICAgICAgLy8gd2UgY2FuJ3QgZGVhbCB3aXRoIHRoaXNcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoLnVuc2hpZnQobm9kZS5wcm9wZXJ0eSk7XG4gICAgICAgIHNlYXJjaC51bnNoaWZ0KG5vZGUub2JqZWN0KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0LmlzVGhpc0V4cHJlc3Npb24obm9kZSkpIHtcbiAgICAgIGlmICghbWF0Y2hlcyhcInRoaXNcIikpIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgY2FuJ3QgZGVhbCB3aXRoIHRoaXNcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0b28gbWFueSBwYXJ0c1xuICAgIGlmICgrK2kgPiBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaSA9PT0gcGFydHMubGVuZ3RoO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgd2UgaGF2ZSB0aGUgaW5wdXQgYGtleWAuIElmIHRoZSBga2V5YCByZWZlcmVuY2VzIGFuIGFycmF5IHRoZW4gd2UgY2hlY2tcbiAqIGlmIHRoZSBhcnJheSBoYXMgYW55IGl0ZW1zLCBvdGhlcndpc2Ugd2UganVzdCBjaGVjayBpZiBpdCdzIGZhbHN5LlxuICovXG5cbmZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgdmFyIHZhbCA9IHRoaXMubm9kZVtrZXldO1xuICBpZiAodmFsICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiAhIXZhbC5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICEhdmFsO1xuICB9XG59XG5cbi8qKlxuICogQWxpYXMgb2YgYGhhc2AuXG4gKi9cblxudmFyIGlzID0gaGFzO1xuXG5leHBvcnRzLmlzID0gaXM7XG4vKipcbiAqIE9wcG9zaXRlIG9mIGBoYXNgLlxuICovXG5cbmZ1bmN0aW9uIGlzbnQoa2V5KSB7XG4gIHJldHVybiAhdGhpcy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBwYXRoIG5vZGUgYGtleWAgc3RyaWN0IGVxdWFscyBgdmFsdWVgLlxuICovXG5cbmZ1bmN0aW9uIGVxdWFscyhrZXksIHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLm5vZGVba2V5XSA9PT0gdmFsdWU7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHR5cGUgYWdhaW5zdCBvdXIgc3RvcmVkIGludGVybmFsIHR5cGUgb2YgdGhlIG5vZGUuIFRoaXMgaXMgaGFuZHkgd2hlbiBhIG5vZGUgaGFzXG4gKiBiZWVuIHJlbW92ZWQgeWV0IHdlIHN0aWxsIGludGVybmFsbHkga25vdyB0aGUgdHlwZSBhbmQgbmVlZCBpdCB0byBjYWxjdWxhdGUgbm9kZSByZXBsYWNlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiBpc05vZGVUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHQuaXNUeXBlKHRoaXMudHlwZSwgdHlwZSk7XG59XG5cbi8qKlxuICogVGhpcyBjaGVja3Mgd2hldGhlciBvciBub3Qgd2UncmUgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgcG9zaXRpb25zOlxuICpcbiAqICAgZm9yIChLRVkgaW4gcmlnaHQpO1xuICogICBmb3IgKEtFWTs7KTtcbiAqXG4gKiBUaGlzIGlzIGJlY2F1c2UgdGhlc2Ugc3BvdHMgYWxsb3cgVmFyaWFibGVEZWNsYXJhdGlvbnMgQU5EIG5vcm1hbCBleHByZXNzaW9ucyBzbyB3ZSBuZWVkXG4gKiB0byB0ZWxsIHRoZSBwYXRoIHJlcGxhY2VtZW50IHRoYXQgaXQncyBvayB0byByZXBsYWNlIHRoaXMgd2l0aCBhbiBleHByZXNzaW9uLlxuICovXG5cbmZ1bmN0aW9uIGNhbkhhdmVWYXJpYWJsZURlY2xhcmF0aW9uT3JFeHByZXNzaW9uKCkge1xuICByZXR1cm4gKHRoaXMua2V5ID09PSBcImluaXRcIiB8fCB0aGlzLmtleSA9PT0gXCJsZWZ0XCIpICYmIHRoaXMucGFyZW50UGF0aC5pc0ZvcigpO1xufVxuXG4vKipcbiAqIFRoaXMgY2hlY2tzIHdoZXRoZXIgd2UgYXJlIHN3YXBwaW5nIGFuIGFycm93IGZ1bmN0aW9uJ3MgYm9keSBiZXR3ZWVuIGFuXG4gKiBleHByZXNzaW9uIGFuZCBhIGJsb2NrIHN0YXRlbWVudCAob3IgdmljZSB2ZXJzYSkuXG4gKlxuICogVGhpcyBpcyBiZWNhdXNlIGFycm93IGZ1bmN0aW9ucyBtYXkgaW1wbGljaXRseSByZXR1cm4gYW4gZXhwcmVzc2lvbiwgd2hpY2hcbiAqIGlzIHRoZSBzYW1lIGFzIGNvbnRhaW5pbmcgYSBibG9jayBzdGF0ZW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gY2FuU3dhcEJldHdlZW5FeHByZXNzaW9uQW5kU3RhdGVtZW50KHJlcGxhY2VtZW50KSB7XG4gIGlmICh0aGlzLmtleSAhPT0gXCJib2R5XCIgfHwgIXRoaXMucGFyZW50UGF0aC5pc0Fycm93RnVuY3Rpb25FeHByZXNzaW9uKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5pc0V4cHJlc3Npb24oKSkge1xuICAgIHJldHVybiB0LmlzQmxvY2tTdGF0ZW1lbnQocmVwbGFjZW1lbnQpO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNCbG9ja1N0YXRlbWVudCgpKSB7XG4gICAgcmV0dXJuIHQuaXNFeHByZXNzaW9uKHJlcGxhY2VtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IHBhdGggcmVmZXJlbmNlcyBhIGNvbXBsZXRpb24gcmVjb3JkXG4gKi9cblxuZnVuY3Rpb24gaXNDb21wbGV0aW9uUmVjb3JkKGFsbG93SW5zaWRlRnVuY3Rpb24pIHtcbiAgdmFyIHBhdGggPSB0aGlzO1xuICB2YXIgZmlyc3QgPSB0cnVlO1xuXG4gIGRvIHtcbiAgICB2YXIgY29udGFpbmVyID0gcGF0aC5jb250YWluZXI7XG5cbiAgICAvLyB3ZSdyZSBpbiBhIGZ1bmN0aW9uIHNvIGNhbid0IGJlIGEgY29tcGxldGlvbiByZWNvcmRcbiAgICBpZiAocGF0aC5pc0Z1bmN0aW9uKCkgJiYgIWZpcnN0KSB7XG4gICAgICByZXR1cm4gISFhbGxvd0luc2lkZUZ1bmN0aW9uO1xuICAgIH1cblxuICAgIGZpcnN0ID0gZmFsc2U7XG5cbiAgICAvLyBjaGVjayB0byBzZWUgaWYgd2UncmUgdGhlIGxhc3QgaXRlbSBpbiB0aGUgY29udGFpbmVyIGFuZCBpZiB3ZSBhcmVcbiAgICAvLyB3ZSdyZSBhIGNvbXBsZXRpb24gcmVjb3JkIVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRhaW5lcikgJiYgcGF0aC5rZXkgIT09IGNvbnRhaW5lci5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IHdoaWxlICgocGF0aCA9IHBhdGgucGFyZW50UGF0aCkgJiYgIXBhdGguaXNQcm9ncmFtKCkpO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgb3Igbm90IHRoZSBjdXJyZW50IGBrZXlgIGFsbG93cyBlaXRoZXIgYSBzaW5nbGUgc3RhdGVtZW50IG9yIGJsb2NrIHN0YXRlbWVudFxuICogc28gd2UgY2FuIGV4cGxvZGUgaXQgaWYgbmVjZXNzYXJ5LlxuICovXG5cbmZ1bmN0aW9uIGlzU3RhdGVtZW50T3JCbG9jaygpIHtcbiAgaWYgKHRoaXMucGFyZW50UGF0aC5pc0xhYmVsZWRTdGF0ZW1lbnQoKSB8fCB0LmlzQmxvY2tTdGF0ZW1lbnQodGhpcy5jb250YWluZXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfbG9kYXNoQ29sbGVjdGlvbkluY2x1ZGVzMltcImRlZmF1bHRcIl0odC5TVEFURU1FTlRfT1JfQkxPQ0tfS0VZUywgdGhpcy5rZXkpO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGN1cnJlbnRseSBhc3NpZ25lZCBwYXRoIHJlZmVyZW5jZXMgdGhlIGBpbXBvcnROYW1lYCBvZiBgbW9kdWxlU291cmNlYC5cbiAqL1xuXG5mdW5jdGlvbiByZWZlcmVuY2VzSW1wb3J0KG1vZHVsZVNvdXJjZSwgaW1wb3J0TmFtZSkge1xuICBpZiAoIXRoaXMuaXNSZWZlcmVuY2VkSWRlbnRpZmllcigpKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGJpbmRpbmcgPSB0aGlzLnNjb3BlLmdldEJpbmRpbmcodGhpcy5ub2RlLm5hbWUpO1xuICBpZiAoIWJpbmRpbmcgfHwgYmluZGluZy5raW5kICE9PSBcIm1vZHVsZVwiKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHBhdGggPSBiaW5kaW5nLnBhdGg7XG4gIHZhciBwYXJlbnQgPSBwYXRoLnBhcmVudFBhdGg7XG4gIGlmICghcGFyZW50LmlzSW1wb3J0RGVjbGFyYXRpb24oKSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIGNoZWNrIG1vZHVsZVNvdXJjZVxuICBpZiAocGFyZW50Lm5vZGUuc291cmNlLnZhbHVlID09PSBtb2R1bGVTb3VyY2UpIHtcbiAgICBpZiAoIWltcG9ydE5hbWUpIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwYXRoLmlzSW1wb3J0RGVmYXVsdFNwZWNpZmllcigpICYmIGltcG9ydE5hbWUgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocGF0aC5pc0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcigpICYmIGltcG9ydE5hbWUgPT09IFwiKlwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocGF0aC5pc0ltcG9ydFNwZWNpZmllcigpICYmIHBhdGgubm9kZS5pbXBvcnRlZC5uYW1lID09PSBpbXBvcnROYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzb3VyY2UgY29kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLlxuICovXG5cbmZ1bmN0aW9uIGdldFNvdXJjZSgpIHtcbiAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XG4gIGlmIChub2RlLmVuZCkge1xuICAgIHJldHVybiB0aGlzLmh1Yi5maWxlLmNvZGUuc2xpY2Uobm9kZS5zdGFydCwgbm9kZS5lbmQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gd2lsbElNYXliZUV4ZWN1dGVCZWZvcmUodGFyZ2V0KSB7XG4gIHJldHVybiB0aGlzLl9ndWVzc0V4ZWN1dGlvblN0YXR1c1JlbGF0aXZlVG8odGFyZ2V0KSAhPT0gXCJhZnRlclwiO1xufVxuXG4vKipcbiAqIEdpdmVuIGEgYHRhcmdldGAgY2hlY2sgdGhlIGV4ZWN1dGlvbiBzdGF0dXMgb2YgaXQgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgcGF0aC5cbiAqXG4gKiBcIkV4ZWN1dGlvbiBzdGF0dXNcIiBzaW1wbHkgcmVmZXJzIHRvIHdoZXJlIG9yIG5vdCB3ZSAqKnRoaW5rKiogdGhpcyB3aWxsIGV4ZWN1ZXRlXG4gKiBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGlucHV0IGB0YXJnZXRgIGVsZW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gX2d1ZXNzRXhlY3V0aW9uU3RhdHVzUmVsYXRpdmVUbyh0YXJnZXQpIHtcbiAgLy8gY2hlY2sgaWYgdGhlIHR3byBwYXRocyBhcmUgaW4gZGlmZmVyZW50IGZ1bmN0aW9ucywgd2UgY2FuJ3QgdHJhY2sgZXhlY3V0aW9uIG9mIHRoZXNlXG4gIHZhciB0YXJnZXRGdW5jUGFyZW50ID0gdGFyZ2V0LnNjb3BlLmdldEZ1bmN0aW9uUGFyZW50KCk7XG4gIHZhciBzZWxmRnVuY1BhcmVudCA9IHRoaXMuc2NvcGUuZ2V0RnVuY3Rpb25QYXJlbnQoKTtcbiAgaWYgKHRhcmdldEZ1bmNQYXJlbnQgIT09IHNlbGZGdW5jUGFyZW50KSB7XG4gICAgcmV0dXJuIFwiZnVuY3Rpb25cIjtcbiAgfVxuXG4gIHZhciB0YXJnZXRQYXRocyA9IHRhcmdldC5nZXRBbmNlc3RyeSgpO1xuICAvL2lmICh0YXJnZXRQYXRocy5pbmRleE9mKHRoaXMpID49IDApIHJldHVybiBcImFmdGVyXCI7XG5cbiAgdmFyIHNlbGZQYXRocyA9IHRoaXMuZ2V0QW5jZXN0cnkoKTtcblxuICAvLyBnZXQgYW5jZXN0b3Igd2hlcmUgdGhlIGJyYW5jaGVzIGludGVyc2VjdFxuICB2YXIgY29tbW9uUGF0aDtcbiAgdmFyIHRhcmdldEluZGV4O1xuICB2YXIgc2VsZkluZGV4O1xuICBmb3IgKHNlbGZJbmRleCA9IDA7IHNlbGZJbmRleCA8IHNlbGZQYXRocy5sZW5ndGg7IHNlbGZJbmRleCsrKSB7XG4gICAgdmFyIHNlbGZQYXRoID0gc2VsZlBhdGhzW3NlbGZJbmRleF07XG4gICAgdGFyZ2V0SW5kZXggPSB0YXJnZXRQYXRocy5pbmRleE9mKHNlbGZQYXRoKTtcbiAgICBpZiAodGFyZ2V0SW5kZXggPj0gMCkge1xuICAgICAgY29tbW9uUGF0aCA9IHNlbGZQYXRoO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmICghY29tbW9uUGF0aCkge1xuICAgIHJldHVybiBcImJlZm9yZVwiO1xuICB9XG5cbiAgLy8gZ2V0IHRoZSByZWxhdGlvbnNoaXAgcGF0aHMgdGhhdCBhc3NvY2lhdGUgdGhlc2Ugbm9kZXMgdG8gdGhlaXIgY29tbW9uIGFuY2VzdG9yXG4gIHZhciB0YXJnZXRSZWxhdGlvbnNoaXAgPSB0YXJnZXRQYXRoc1t0YXJnZXRJbmRleCAtIDFdO1xuICB2YXIgc2VsZlJlbGF0aW9uc2hpcCA9IHNlbGZQYXRoc1tzZWxmSW5kZXggLSAxXTtcbiAgaWYgKCF0YXJnZXRSZWxhdGlvbnNoaXAgfHwgIXNlbGZSZWxhdGlvbnNoaXApIHtcbiAgICByZXR1cm4gXCJiZWZvcmVcIjtcbiAgfVxuXG4gIC8vIGNvbnRhaW5lciBsaXN0IHNvIGxldCdzIHNlZSB3aGljaCBvbmUgaXMgYWZ0ZXIgdGhlIG90aGVyXG4gIGlmICh0YXJnZXRSZWxhdGlvbnNoaXAubGlzdEtleSAmJiB0YXJnZXRSZWxhdGlvbnNoaXAuY29udGFpbmVyID09PSBzZWxmUmVsYXRpb25zaGlwLmNvbnRhaW5lcikge1xuICAgIHJldHVybiB0YXJnZXRSZWxhdGlvbnNoaXAua2V5ID4gc2VsZlJlbGF0aW9uc2hpcC5rZXkgPyBcImJlZm9yZVwiIDogXCJhZnRlclwiO1xuICB9XG5cbiAgLy8gb3RoZXJ3aXNlIHdlJ3JlIGFzc29jaWF0ZWQgYnkgYSBwYXJlbnQgbm9kZSwgY2hlY2sgd2hpY2gga2V5IGNvbWVzIGJlZm9yZSB0aGUgb3RoZXJcbiAgdmFyIHRhcmdldEtleVBvc2l0aW9uID0gdC5WSVNJVE9SX0tFWVNbdGFyZ2V0UmVsYXRpb25zaGlwLnR5cGVdLmluZGV4T2YodGFyZ2V0UmVsYXRpb25zaGlwLmtleSk7XG4gIHZhciBzZWxmS2V5UG9zaXRpb24gPSB0LlZJU0lUT1JfS0VZU1tzZWxmUmVsYXRpb25zaGlwLnR5cGVdLmluZGV4T2Yoc2VsZlJlbGF0aW9uc2hpcC5rZXkpO1xuICByZXR1cm4gdGFyZ2V0S2V5UG9zaXRpb24gPiBzZWxmS2V5UG9zaXRpb24gPyBcImJlZm9yZVwiIDogXCJhZnRlclwiO1xufVxuXG4vKipcbiAqIFJlc29sdmUgYSBcInBvaW50ZXJcIiBgTm9kZVBhdGhgIHRvIGl0J3MgYWJzb2x1dGUgcGF0aC5cbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlKGRhbmdlcm91cywgcmVzb2x2ZWQpIHtcbiAgcmV0dXJuIHRoaXMuX3Jlc29sdmUoZGFuZ2Vyb3VzLCByZXNvbHZlZCkgfHwgdGhpcztcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBfcmVzb2x2ZShkYW5nZXJvdXMsIHJlc29sdmVkKSB7XG4gIC8vIGRldGVjdCBpbmZpbml0ZSByZWN1cnNpb25cbiAgLy8gdG9kbzogcG9zc2libHkgaGF2ZSBhIG1heCBsZW5ndGggb24gdGhpcyBqdXN0IHRvIGJlIHNhZmVcbiAgaWYgKHJlc29sdmVkICYmIHJlc29sdmVkLmluZGV4T2YodGhpcykgPj0gMCkgcmV0dXJuO1xuXG4gIC8vIHdlIHN0b3JlIGFsbCB0aGUgcGF0aHMgd2UndmUgXCJyZXNvbHZlZFwiIGluIHRoaXMgYXJyYXkgdG8gcHJldmVudCBpbmZpbml0ZSByZWN1cnNpb25cbiAgcmVzb2x2ZWQgPSByZXNvbHZlZCB8fCBbXTtcbiAgcmVzb2x2ZWQucHVzaCh0aGlzKTtcblxuICBpZiAodGhpcy5pc1ZhcmlhYmxlRGVjbGFyYXRvcigpKSB7XG4gICAgaWYgKHRoaXMuZ2V0KFwiaWRcIikuaXNJZGVudGlmaWVyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldChcImluaXRcIikucmVzb2x2ZShkYW5nZXJvdXMsIHJlc29sdmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIGl0J3MgYSByZXF1ZXN0IGZvciBhIHBhdHRlcm4gYW5kIHRoYXQncyBhIGJpdCBtb3JlIHRyaWNreVxuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLmlzUmVmZXJlbmNlZElkZW50aWZpZXIoKSkge1xuICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLnNjb3BlLmdldEJpbmRpbmcodGhpcy5ub2RlLm5hbWUpO1xuICAgICAgaWYgKCFiaW5kaW5nKSByZXR1cm47XG5cbiAgICAgIC8vIHJlYXNzaWduZWQgc28gd2UgY2FuJ3QgcmVhbGx5IHJlc29sdmUgaXRcbiAgICAgIGlmICghYmluZGluZy5jb25zdGFudCkgcmV0dXJuO1xuXG4gICAgICAvLyB0b2RvIC0gbG9va3VwIG1vZHVsZSBpbiBkZXBlbmRlbmN5IGdyYXBoXG4gICAgICBpZiAoYmluZGluZy5raW5kID09PSBcIm1vZHVsZVwiKSByZXR1cm47XG5cbiAgICAgIGlmIChiaW5kaW5nLnBhdGggIT09IHRoaXMpIHtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmcucGF0aC5yZXNvbHZlKGRhbmdlcm91cywgcmVzb2x2ZWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1R5cGVDYXN0RXhwcmVzc2lvbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoXCJleHByZXNzaW9uXCIpLnJlc29sdmUoZGFuZ2Vyb3VzLCByZXNvbHZlZCk7XG4gICAgfSBlbHNlIGlmIChkYW5nZXJvdXMgJiYgdGhpcy5pc01lbWJlckV4cHJlc3Npb24oKSkge1xuICAgICAgLy8gdGhpcyBpcyBkYW5nZXJvdXMsIGFzIG5vbi1kaXJlY3QgdGFyZ2V0IGFzc2lnbm1lbnRzIHdpbGwgbXV0YXRlIGl0J3Mgc3RhdGVcbiAgICAgIC8vIG1ha2luZyB0aGlzIHJlc29sdXRpb24gaW5hY2N1cmF0ZVxuXG4gICAgICB2YXIgdGFyZ2V0S2V5ID0gdGhpcy50b0NvbXB1dGVkS2V5KCk7XG4gICAgICBpZiAoIXQuaXNMaXRlcmFsKHRhcmdldEtleSkpIHJldHVybjtcblxuICAgICAgdmFyIHRhcmdldE5hbWUgPSB0YXJnZXRLZXkudmFsdWU7XG5cbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmdldChcIm9iamVjdFwiKS5yZXNvbHZlKGRhbmdlcm91cywgcmVzb2x2ZWQpO1xuXG4gICAgICBpZiAodGFyZ2V0LmlzT2JqZWN0RXhwcmVzc2lvbigpKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRhcmdldC5nZXQoXCJwcm9wZXJ0aWVzXCIpO1xuICAgICAgICB2YXIgX2FyciA9IHByb3BzO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICB2YXIgcHJvcCA9IF9hcnJbX2ldO1xuICAgICAgICAgIGlmICghcHJvcC5pc1Byb3BlcnR5KCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgdmFyIGtleSA9IHByb3AuZ2V0KFwia2V5XCIpO1xuXG4gICAgICAgICAgLy8geyBmb286IG9iaiB9XG4gICAgICAgICAgdmFyIG1hdGNoID0gcHJvcC5pc250KFwiY29tcHV0ZWRcIikgJiYga2V5LmlzSWRlbnRpZmllcih7IG5hbWU6IHRhcmdldE5hbWUgfSk7XG5cbiAgICAgICAgICAvLyB7IFwiZm9vXCI6IFwib2JqXCIgfSBvciB7IFtcImZvb1wiXTogXCJvYmpcIiB9XG4gICAgICAgICAgbWF0Y2ggPSBtYXRjaCB8fCBrZXkuaXNMaXRlcmFsKHsgdmFsdWU6IHRhcmdldE5hbWUgfSk7XG5cbiAgICAgICAgICBpZiAobWF0Y2gpIHJldHVybiBwcm9wLmdldChcInZhbHVlXCIpLnJlc29sdmUoZGFuZ2Vyb3VzLCByZXNvbHZlZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmlzQXJyYXlFeHByZXNzaW9uKCkgJiYgIWlzTmFOKCt0YXJnZXROYW1lKSkge1xuICAgICAgICB2YXIgZWxlbXMgPSB0YXJnZXQuZ2V0KFwiZWxlbWVudHNcIik7XG4gICAgICAgIHZhciBlbGVtID0gZWxlbXNbdGFyZ2V0TmFtZV07XG4gICAgICAgIGlmIChlbGVtKSByZXR1cm4gZWxlbS5yZXNvbHZlKGRhbmdlcm91cywgcmVzb2x2ZWQpO1xuICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
