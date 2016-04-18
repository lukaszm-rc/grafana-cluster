/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashLangIsPlainObject, _lodashLangIsPlainObject2, _lodashLangIsNumber, _lodashLangIsNumber2, _lodashLangIsRegExp, _lodashLangIsRegExp2, _lodashLangIsString, _lodashLangIsString2, _traversal, _traversal2, _index, t;

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
   * [Please add a description.]
   */

  function toComputedKey(node) {
    var key = arguments.length <= 1 || arguments[1] === undefined ? node.key || node.property : arguments[1];
    return function () {
      if (!node.computed) {
        if (t.isIdentifier(key)) key = t.literal(key.name);
      }
      return key;
    }();
  }

  /**
   * Turn an array of statement `nodes` into a `SequenceExpression`.
   *
   * Variable declarations are turned into simple assignments and their
   * declarations hoisted to the top of the current scope.
   *
   * Expression statements are just resolved to their expression.
   */

  function toSequenceExpression(nodes, scope) {
    var declars = [];
    var bailed = false;

    var result = convert(nodes);
    if (bailed) return;

    for (var i = 0; i < declars.length; i++) {
      scope.push(declars[i]);
    }

    return result;

    function convert(nodes) {
      var ensureLastUndefined = false;
      var exprs = [];

      var _arr = nodes;
      for (var _i = 0; _i < _arr.length; _i++) {
        var node = _arr[_i];
        if (t.isExpression(node)) {
          exprs.push(node);
        } else if (t.isExpressionStatement(node)) {
          exprs.push(node.expression);
        } else if (t.isVariableDeclaration(node)) {
          if (node.kind !== "var") return bailed = true; // bailed

          var _arr2 = node.declarations;
          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var declar = _arr2[_i2];
            var bindings = t.getBindingIdentifiers(declar);
            for (var key in bindings) {
              declars.push({
                kind: node.kind,
                id: bindings[key]
              });
            }

            if (declar.init) {
              exprs.push(t.assignmentExpression("=", declar.id, declar.init));
            }
          }

          ensureLastUndefined = true;
          continue;
        } else if (t.isIfStatement(node)) {
          var consequent = node.consequent ? convert([node.consequent]) : t.identifier("undefined");
          var alternate = node.alternate ? convert([node.alternate]) : t.identifier("undefined");
          if (!consequent || !alternate) return bailed = true;

          exprs.push(t.conditionalExpression(node.test, consequent, alternate));
        } else if (t.isBlockStatement(node)) {
          exprs.push(convert(node.body));
        } else if (t.isEmptyStatement(node)) {
          // empty statement so ensure the last item is undefined if we're last
          ensureLastUndefined = true;
          continue;
        } else {
          // bailed, we can't turn this statement into an expression
          return bailed = true;
        }

        ensureLastUndefined = false;
      }

      if (ensureLastUndefined) {
        exprs.push(t.identifier("undefined"));
      }

      //

      if (exprs.length === 1) {
        return exprs[0];
      } else {
        return t.sequenceExpression(exprs);
      }
    }
  }

  /**
   * [Please add a description.]
   */

  function toKeyAlias(node) {
    var key = arguments.length <= 1 || arguments[1] === undefined ? node.key : arguments[1];
    return function () {
      var alias;

      if (node.kind === "method") {
        return toKeyAlias.uid++;
      } else if (t.isIdentifier(key)) {
        alias = key.name;
      } else if (t.isLiteral(key)) {
        alias = JSON.stringify(key.value);
      } else {
        alias = JSON.stringify(_traversal2["default"].removeProperties(t.cloneDeep(key)));
      }

      if (node.computed) {
        alias = "[" + alias + "]";
      }

      return alias;
    }();
  }

  /**
   * [Please add a description.]
   */

  function toIdentifier(name) {
    if (t.isIdentifier(name)) return name.name;

    name = name + "";

    // replace all non-valid identifiers with dashes
    name = name.replace(/[^a-zA-Z0-9$_]/g, "-");

    // remove all dashes and numbers from start of name
    name = name.replace(/^[-0-9]+/, "");

    // camel case
    name = name.replace(/[-\s]+(.)?/g, function (match, c) {
      return c ? c.toUpperCase() : "";
    });

    if (!t.isValidIdentifier(name)) {
      name = "_" + name;
    }

    return name || "_";
  }

  /**
   * [Please add a description.]
   */

  function toBindingIdentifierName(name) {
    name = toIdentifier(name);
    if (name === "eval" || name === "arguments") name = "_" + name;
    return name;
  }

  /**
   * [Please add a description.]
   * @returns {Object|Boolean}
   */

  function toStatement(node, ignore) {
    if (t.isStatement(node)) {
      return node;
    }

    var mustHaveId = false;
    var newType;

    if (t.isClass(node)) {
      mustHaveId = true;
      newType = "ClassDeclaration";
    } else if (t.isFunction(node)) {
      mustHaveId = true;
      newType = "FunctionDeclaration";
    } else if (t.isAssignmentExpression(node)) {
      return t.expressionStatement(node);
    }

    if (mustHaveId && !node.id) {
      newType = false;
    }

    if (!newType) {
      if (ignore) {
        return false;
      } else {
        throw new Error("cannot turn " + node.type + " to a statement");
      }
    }

    node.type = newType;

    return node;
  }

  /**
   * [Please add a description.]
   */

  function toExpression(node) {
    if (t.isExpressionStatement(node)) {
      node = node.expression;
    }

    if (t.isClass(node)) {
      node.type = "ClassExpression";
    } else if (t.isFunction(node)) {
      node.type = "FunctionExpression";
    }

    if (t.isExpression(node)) {
      return node;
    } else {
      throw new Error("cannot turn " + node.type + " to an expression");
    }
  }

  /**
   * [Please add a description.]
   */

  function toBlock(node, parent) {
    if (t.isBlockStatement(node)) {
      return node;
    }

    if (t.isEmptyStatement(node)) {
      node = [];
    }

    if (!Array.isArray(node)) {
      if (!t.isStatement(node)) {
        if (t.isFunction(parent)) {
          node = t.returnStatement(node);
        } else {
          node = t.expressionStatement(node);
        }
      }

      node = [node];
    }

    return t.blockStatement(node);
  }

  /**
   * [Please add a description.]
   */

  function valueToNode(value) {
    // undefined
    if (value === undefined) {
      return t.identifier("undefined");
    }

    // null, booleans, strings, numbers, regexs
    if (value === true || value === false || value === null || _lodashLangIsString2["default"](value) || _lodashLangIsNumber2["default"](value) || _lodashLangIsRegExp2["default"](value)) {
      return t.literal(value);
    }

    // array
    if (Array.isArray(value)) {
      return t.arrayExpression(value.map(t.valueToNode));
    }

    // object
    if (_lodashLangIsPlainObject2["default"](value)) {
      var props = [];
      for (var key in value) {
        var nodeKey;
        if (t.isValidIdentifier(key)) {
          nodeKey = t.identifier(key);
        } else {
          nodeKey = t.literal(key);
        }
        props.push(t.property("init", nodeKey, t.valueToNode(value[key])));
      }
      return t.objectExpression(props);
    }

    throw new Error("don't know how to turn this value into a node");
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.toComputedKey = toComputedKey;
      exports.toSequenceExpression = toSequenceExpression;
      exports.toKeyAlias = toKeyAlias;
      exports.toIdentifier = toIdentifier;
      exports.toBindingIdentifierName = toBindingIdentifierName;
      exports.toStatement = toStatement;
      exports.toExpression = toExpression;
      exports.toBlock = toBlock;
      exports.valueToNode = valueToNode;_lodashLangIsPlainObject = require("lodash/lang/isPlainObject");
      _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
      _lodashLangIsNumber = require("lodash/lang/isNumber");
      _lodashLangIsNumber2 = _interopRequireDefault(_lodashLangIsNumber);
      _lodashLangIsRegExp = require("lodash/lang/isRegExp");
      _lodashLangIsRegExp2 = _interopRequireDefault(_lodashLangIsRegExp);
      _lodashLangIsString = require("lodash/lang/isString");
      _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);
      _traversal = require("../traversal");
      _traversal2 = _interopRequireDefault(_traversal);
      _index = require("./index");
      t = _interopRequireWildcard(_index);
      toKeyAlias.uid = 0;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvY29udmVydGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQWNBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUE4QkEsV0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTZCO0FBQzNCLFFBQUksTUFBTSxVQUFVLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUIsVUFBVSxDQUFWLE1BQWlCLFNBQWpCLEdBQTZCLEtBQUssR0FBTCxJQUFZLEtBQUssUUFBTCxHQUFnQixVQUFVLENBQVYsQ0FBbEYsQ0FEaUI7QUFFM0IsV0FBTyxZQUFhO0FBQ2xCLFVBQUksQ0FBQyxLQUFLLFFBQUwsRUFBZTtBQUNsQixZQUFJLEVBQUUsWUFBRixDQUFlLEdBQWYsQ0FBSixFQUF5QixNQUFNLEVBQUUsT0FBRixDQUFVLElBQUksSUFBSixDQUFoQixDQUF6QjtPQURGO0FBR0Es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dkI7QUFDQSxjQUFRLHVCQUFSLEdBQWtDLHVCQUFsQztBQUNBLGNBQVEsV0FBUixHQUFzQixXQUF0QjtBQUNBLGNBQVEsWUFBUixHQUF1QixZQUF2QjtBQUNBLGNBQVEsT0FBUixHQUFrQixPQUFsQjtBQUNBLGNBQVEsV0FBUixHQUFzQixXQUF0QixDQVNJLDJCQUEyQixRQUFRLDJCQUFSO0FBRTNCLGtDQUE0Qix1QkFBdUIsd0JBQXZCO0FBRTVCLDRCQUFzQixRQUFRLHNCQUFSO0FBRXRCLDZCQUF1Qix1QkFBdUIsbUJBQXZCO0FBRXZCLDRCQUFzQixRQUFRLHNCQUFSO0FBRXRCLDZCQUF1Qix1QkFBdUIsbUJBQXZCO0FBRXZCLDRCQUFzQixRQUFRLHNCQUFSO0FBRXRCLDZCQUF1Qix1QkFBdUIsbUJBQXZCO0FBRXZCLG1CQUFhLFFBQVEsY0FBUjtBQUViLG9CQUFjLHVCQUF1QixVQUF2QjtBQUVkLGVBQVMsUUFBUSxTQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFtSVIsaUJBQVcsR0FBWCxHQUFpQixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3R5cGVzL2NvbnZlcnRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRvQ29tcHV0ZWRLZXkgPSB0b0NvbXB1dGVkS2V5O1xuZXhwb3J0cy50b1NlcXVlbmNlRXhwcmVzc2lvbiA9IHRvU2VxdWVuY2VFeHByZXNzaW9uO1xuZXhwb3J0cy50b0tleUFsaWFzID0gdG9LZXlBbGlhcztcbmV4cG9ydHMudG9JZGVudGlmaWVyID0gdG9JZGVudGlmaWVyO1xuZXhwb3J0cy50b0JpbmRpbmdJZGVudGlmaWVyTmFtZSA9IHRvQmluZGluZ0lkZW50aWZpZXJOYW1lO1xuZXhwb3J0cy50b1N0YXRlbWVudCA9IHRvU3RhdGVtZW50O1xuZXhwb3J0cy50b0V4cHJlc3Npb24gPSB0b0V4cHJlc3Npb247XG5leHBvcnRzLnRvQmxvY2sgPSB0b0Jsb2NrO1xuZXhwb3J0cy52YWx1ZVRvTm9kZSA9IHZhbHVlVG9Ob2RlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hMYW5nSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoXCJsb2Rhc2gvbGFuZy9pc1BsYWluT2JqZWN0XCIpO1xuXG52YXIgX2xvZGFzaExhbmdJc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaExhbmdJc1BsYWluT2JqZWN0KTtcblxudmFyIF9sb2Rhc2hMYW5nSXNOdW1iZXIgPSByZXF1aXJlKFwibG9kYXNoL2xhbmcvaXNOdW1iZXJcIik7XG5cbnZhciBfbG9kYXNoTGFuZ0lzTnVtYmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaExhbmdJc051bWJlcik7XG5cbnZhciBfbG9kYXNoTGFuZ0lzUmVnRXhwID0gcmVxdWlyZShcImxvZGFzaC9sYW5nL2lzUmVnRXhwXCIpO1xuXG52YXIgX2xvZGFzaExhbmdJc1JlZ0V4cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hMYW5nSXNSZWdFeHApO1xuXG52YXIgX2xvZGFzaExhbmdJc1N0cmluZyA9IHJlcXVpcmUoXCJsb2Rhc2gvbGFuZy9pc1N0cmluZ1wiKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoTGFuZ0lzU3RyaW5nKTtcblxudmFyIF90cmF2ZXJzYWwgPSByZXF1aXJlKFwiLi4vdHJhdmVyc2FsXCIpO1xuXG52YXIgX3RyYXZlcnNhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmF2ZXJzYWwpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2luZGV4KTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB0b0NvbXB1dGVkS2V5KG5vZGUpIHtcbiAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG5vZGUua2V5IHx8IG5vZGUucHJvcGVydHkgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbm9kZS5jb21wdXRlZCkge1xuICAgICAgaWYgKHQuaXNJZGVudGlmaWVyKGtleSkpIGtleSA9IHQubGl0ZXJhbChrZXkubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pKCk7XG59XG5cbi8qKlxuICogVHVybiBhbiBhcnJheSBvZiBzdGF0ZW1lbnQgYG5vZGVzYCBpbnRvIGEgYFNlcXVlbmNlRXhwcmVzc2lvbmAuXG4gKlxuICogVmFyaWFibGUgZGVjbGFyYXRpb25zIGFyZSB0dXJuZWQgaW50byBzaW1wbGUgYXNzaWdubWVudHMgYW5kIHRoZWlyXG4gKiBkZWNsYXJhdGlvbnMgaG9pc3RlZCB0byB0aGUgdG9wIG9mIHRoZSBjdXJyZW50IHNjb3BlLlxuICpcbiAqIEV4cHJlc3Npb24gc3RhdGVtZW50cyBhcmUganVzdCByZXNvbHZlZCB0byB0aGVpciBleHByZXNzaW9uLlxuICovXG5cbmZ1bmN0aW9uIHRvU2VxdWVuY2VFeHByZXNzaW9uKG5vZGVzLCBzY29wZSkge1xuICB2YXIgZGVjbGFycyA9IFtdO1xuICB2YXIgYmFpbGVkID0gZmFsc2U7XG5cbiAgdmFyIHJlc3VsdCA9IGNvbnZlcnQobm9kZXMpO1xuICBpZiAoYmFpbGVkKSByZXR1cm47XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWNsYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2NvcGUucHVzaChkZWNsYXJzW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gY29udmVydChub2Rlcykge1xuICAgIHZhciBlbnN1cmVMYXN0VW5kZWZpbmVkID0gZmFsc2U7XG4gICAgdmFyIGV4cHJzID0gW107XG5cbiAgICB2YXIgX2FyciA9IG5vZGVzO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIG5vZGUgPSBfYXJyW19pXTtcbiAgICAgIGlmICh0LmlzRXhwcmVzc2lvbihub2RlKSkge1xuICAgICAgICBleHBycy5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIGlmICh0LmlzRXhwcmVzc2lvblN0YXRlbWVudChub2RlKSkge1xuICAgICAgICBleHBycy5wdXNoKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICB9IGVsc2UgaWYgKHQuaXNWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgICAgIGlmIChub2RlLmtpbmQgIT09IFwidmFyXCIpIHJldHVybiBiYWlsZWQgPSB0cnVlOyAvLyBiYWlsZWRcblxuICAgICAgICB2YXIgX2FycjIgPSBub2RlLmRlY2xhcmF0aW9ucztcbiAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgX2FycjIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgIHZhciBkZWNsYXIgPSBfYXJyMltfaTJdO1xuICAgICAgICAgIHZhciBiaW5kaW5ncyA9IHQuZ2V0QmluZGluZ0lkZW50aWZpZXJzKGRlY2xhcik7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGJpbmRpbmdzKSB7XG4gICAgICAgICAgICBkZWNsYXJzLnB1c2goe1xuICAgICAgICAgICAgICBraW5kOiBub2RlLmtpbmQsXG4gICAgICAgICAgICAgIGlkOiBiaW5kaW5nc1trZXldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGVjbGFyLmluaXQpIHtcbiAgICAgICAgICAgIGV4cHJzLnB1c2godC5hc3NpZ25tZW50RXhwcmVzc2lvbihcIj1cIiwgZGVjbGFyLmlkLCBkZWNsYXIuaW5pdCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVuc3VyZUxhc3RVbmRlZmluZWQgPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAodC5pc0lmU3RhdGVtZW50KG5vZGUpKSB7XG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gbm9kZS5jb25zZXF1ZW50ID8gY29udmVydChbbm9kZS5jb25zZXF1ZW50XSkgOiB0LmlkZW50aWZpZXIoXCJ1bmRlZmluZWRcIik7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSBub2RlLmFsdGVybmF0ZSA/IGNvbnZlcnQoW25vZGUuYWx0ZXJuYXRlXSkgOiB0LmlkZW50aWZpZXIoXCJ1bmRlZmluZWRcIik7XG4gICAgICAgIGlmICghY29uc2VxdWVudCB8fCAhYWx0ZXJuYXRlKSByZXR1cm4gYmFpbGVkID0gdHJ1ZTtcblxuICAgICAgICBleHBycy5wdXNoKHQuY29uZGl0aW9uYWxFeHByZXNzaW9uKG5vZGUudGVzdCwgY29uc2VxdWVudCwgYWx0ZXJuYXRlKSk7XG4gICAgICB9IGVsc2UgaWYgKHQuaXNCbG9ja1N0YXRlbWVudChub2RlKSkge1xuICAgICAgICBleHBycy5wdXNoKGNvbnZlcnQobm9kZS5ib2R5KSk7XG4gICAgICB9IGVsc2UgaWYgKHQuaXNFbXB0eVN0YXRlbWVudChub2RlKSkge1xuICAgICAgICAvLyBlbXB0eSBzdGF0ZW1lbnQgc28gZW5zdXJlIHRoZSBsYXN0IGl0ZW0gaXMgdW5kZWZpbmVkIGlmIHdlJ3JlIGxhc3RcbiAgICAgICAgZW5zdXJlTGFzdFVuZGVmaW5lZCA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmFpbGVkLCB3ZSBjYW4ndCB0dXJuIHRoaXMgc3RhdGVtZW50IGludG8gYW4gZXhwcmVzc2lvblxuICAgICAgICByZXR1cm4gYmFpbGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZW5zdXJlTGFzdFVuZGVmaW5lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChlbnN1cmVMYXN0VW5kZWZpbmVkKSB7XG4gICAgICBleHBycy5wdXNoKHQuaWRlbnRpZmllcihcInVuZGVmaW5lZFwiKSk7XG4gICAgfVxuXG4gICAgLy9cblxuICAgIGlmIChleHBycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBleHByc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHQuc2VxdWVuY2VFeHByZXNzaW9uKGV4cHJzKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB0b0tleUFsaWFzKG5vZGUpIHtcbiAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG5vZGUua2V5IDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWxpYXM7XG5cbiAgICBpZiAobm9kZS5raW5kID09PSBcIm1ldGhvZFwiKSB7XG4gICAgICByZXR1cm4gdG9LZXlBbGlhcy51aWQrKztcbiAgICB9IGVsc2UgaWYgKHQuaXNJZGVudGlmaWVyKGtleSkpIHtcbiAgICAgIGFsaWFzID0ga2V5Lm5hbWU7XG4gICAgfSBlbHNlIGlmICh0LmlzTGl0ZXJhbChrZXkpKSB7XG4gICAgICBhbGlhcyA9IEpTT04uc3RyaW5naWZ5KGtleS52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsaWFzID0gSlNPTi5zdHJpbmdpZnkoX3RyYXZlcnNhbDJbXCJkZWZhdWx0XCJdLnJlbW92ZVByb3BlcnRpZXModC5jbG9uZURlZXAoa2V5KSkpO1xuICAgIH1cblxuICAgIGlmIChub2RlLmNvbXB1dGVkKSB7XG4gICAgICBhbGlhcyA9IFwiW1wiICsgYWxpYXMgKyBcIl1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxpYXM7XG4gIH0pKCk7XG59XG5cbnRvS2V5QWxpYXMudWlkID0gMDtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB0b0lkZW50aWZpZXIobmFtZSkge1xuICBpZiAodC5pc0lkZW50aWZpZXIobmFtZSkpIHJldHVybiBuYW1lLm5hbWU7XG5cbiAgbmFtZSA9IG5hbWUgKyBcIlwiO1xuXG4gIC8vIHJlcGxhY2UgYWxsIG5vbi12YWxpZCBpZGVudGlmaWVycyB3aXRoIGRhc2hlc1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOSRfXS9nLCBcIi1cIik7XG5cbiAgLy8gcmVtb3ZlIGFsbCBkYXNoZXMgYW5kIG51bWJlcnMgZnJvbSBzdGFydCBvZiBuYW1lXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15bLTAtOV0rLywgXCJcIik7XG5cbiAgLy8gY2FtZWwgY2FzZVxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bLVxcc10rKC4pPy9nLCBmdW5jdGlvbiAobWF0Y2gsIGMpIHtcbiAgICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6IFwiXCI7XG4gIH0pO1xuXG4gIGlmICghdC5pc1ZhbGlkSWRlbnRpZmllcihuYW1lKSkge1xuICAgIG5hbWUgPSBcIl9cIiArIG5hbWU7XG4gIH1cblxuICByZXR1cm4gbmFtZSB8fCBcIl9cIjtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiB0b0JpbmRpbmdJZGVudGlmaWVyTmFtZShuYW1lKSB7XG4gIG5hbWUgPSB0b0lkZW50aWZpZXIobmFtZSk7XG4gIGlmIChuYW1lID09PSBcImV2YWxcIiB8fCBuYW1lID09PSBcImFyZ3VtZW50c1wiKSBuYW1lID0gXCJfXCIgKyBuYW1lO1xuICByZXR1cm4gbmFtZTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqIEByZXR1cm5zIHtPYmplY3R8Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiB0b1N0YXRlbWVudChub2RlLCBpZ25vcmUpIHtcbiAgaWYgKHQuaXNTdGF0ZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZhciBtdXN0SGF2ZUlkID0gZmFsc2U7XG4gIHZhciBuZXdUeXBlO1xuXG4gIGlmICh0LmlzQ2xhc3Mobm9kZSkpIHtcbiAgICBtdXN0SGF2ZUlkID0gdHJ1ZTtcbiAgICBuZXdUeXBlID0gXCJDbGFzc0RlY2xhcmF0aW9uXCI7XG4gIH0gZWxzZSBpZiAodC5pc0Z1bmN0aW9uKG5vZGUpKSB7XG4gICAgbXVzdEhhdmVJZCA9IHRydWU7XG4gICAgbmV3VHlwZSA9IFwiRnVuY3Rpb25EZWNsYXJhdGlvblwiO1xuICB9IGVsc2UgaWYgKHQuaXNBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlKSkge1xuICAgIHJldHVybiB0LmV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSk7XG4gIH1cblxuICBpZiAobXVzdEhhdmVJZCAmJiAhbm9kZS5pZCkge1xuICAgIG5ld1R5cGUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghbmV3VHlwZSkge1xuICAgIGlmIChpZ25vcmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHR1cm4gXCIgKyBub2RlLnR5cGUgKyBcIiB0byBhIHN0YXRlbWVudFwiKTtcbiAgICB9XG4gIH1cblxuICBub2RlLnR5cGUgPSBuZXdUeXBlO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHRvRXhwcmVzc2lvbihub2RlKSB7XG4gIGlmICh0LmlzRXhwcmVzc2lvblN0YXRlbWVudChub2RlKSkge1xuICAgIG5vZGUgPSBub2RlLmV4cHJlc3Npb247XG4gIH1cblxuICBpZiAodC5pc0NsYXNzKG5vZGUpKSB7XG4gICAgbm9kZS50eXBlID0gXCJDbGFzc0V4cHJlc3Npb25cIjtcbiAgfSBlbHNlIGlmICh0LmlzRnVuY3Rpb24obm9kZSkpIHtcbiAgICBub2RlLnR5cGUgPSBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiO1xuICB9XG5cbiAgaWYgKHQuaXNFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHR1cm4gXCIgKyBub2RlLnR5cGUgKyBcIiB0byBhbiBleHByZXNzaW9uXCIpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gdG9CbG9jayhub2RlLCBwYXJlbnQpIHtcbiAgaWYgKHQuaXNCbG9ja1N0YXRlbWVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaWYgKHQuaXNFbXB0eVN0YXRlbWVudChub2RlKSkge1xuICAgIG5vZGUgPSBbXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGlmICghdC5pc1N0YXRlbWVudChub2RlKSkge1xuICAgICAgaWYgKHQuaXNGdW5jdGlvbihwYXJlbnQpKSB7XG4gICAgICAgIG5vZGUgPSB0LnJldHVyblN0YXRlbWVudChub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSB0LmV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZSA9IFtub2RlXTtcbiAgfVxuXG4gIHJldHVybiB0LmJsb2NrU3RhdGVtZW50KG5vZGUpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIHZhbHVlVG9Ob2RlKHZhbHVlKSB7XG4gIC8vIHVuZGVmaW5lZFxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0LmlkZW50aWZpZXIoXCJ1bmRlZmluZWRcIik7XG4gIH1cblxuICAvLyBudWxsLCBib29sZWFucywgc3RyaW5ncywgbnVtYmVycywgcmVnZXhzXG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgX2xvZGFzaExhbmdJc1N0cmluZzJbXCJkZWZhdWx0XCJdKHZhbHVlKSB8fCBfbG9kYXNoTGFuZ0lzTnVtYmVyMltcImRlZmF1bHRcIl0odmFsdWUpIHx8IF9sb2Rhc2hMYW5nSXNSZWdFeHAyW1wiZGVmYXVsdFwiXSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdC5saXRlcmFsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIGFycmF5XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB0LmFycmF5RXhwcmVzc2lvbih2YWx1ZS5tYXAodC52YWx1ZVRvTm9kZSkpO1xuICB9XG5cbiAgLy8gb2JqZWN0XG4gIGlmIChfbG9kYXNoTGFuZ0lzUGxhaW5PYmplY3QyW1wiZGVmYXVsdFwiXSh2YWx1ZSkpIHtcbiAgICB2YXIgcHJvcHMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIHZhciBub2RlS2V5O1xuICAgICAgaWYgKHQuaXNWYWxpZElkZW50aWZpZXIoa2V5KSkge1xuICAgICAgICBub2RlS2V5ID0gdC5pZGVudGlmaWVyKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlS2V5ID0gdC5saXRlcmFsKGtleSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5wdXNoKHQucHJvcGVydHkoXCJpbml0XCIsIG5vZGVLZXksIHQudmFsdWVUb05vZGUodmFsdWVba2V5XSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHQub2JqZWN0RXhwcmVzc2lvbihwcm9wcyk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJkb24ndCBrbm93IGhvdyB0byB0dXJuIHRoaXMgdmFsdWUgaW50byBhIG5vZGVcIik7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
