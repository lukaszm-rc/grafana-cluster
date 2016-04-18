/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _retrievers, _esutils, _esutils2, _index, t;

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
   * Check if the input `node` is a binding identifier.
   */

  function isBinding(node, parent) {
    var keys = _retrievers.getBindingIdentifiers.keys[parent.type];
    if (keys) {
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = parent[key];
        if (Array.isArray(val)) {
          if (val.indexOf(node) >= 0) return true;
        } else {
          if (val === node) return true;
        }
      }
    }

    return false;
  }

  /**
   * Check if the input `node` is a reference to a bound variable.
   */

  function isReferenced(node, parent) {
    switch (parent.type) {
      // yes: PARENT[NODE]
      // yes: NODE.child
      // no: parent.NODE
      case "MemberExpression":
      case "JSXMemberExpression":
        if (parent.property === node && parent.computed) {
          return true;
        } else if (parent.object === node) {
          return true;
        } else {
          return false;
        }

      // no: new.NODE
      // no: NODE.target
      case "MetaProperty":
        return false;

      // yes: { [NODE]: "" }
      // yes: { NODE }
      // no: { NODE: "" }
      case "Property":
        if (parent.key === node) {
          return parent.computed;
        }

      // no: var NODE = init;
      // yes: var id = NODE;
      case "VariableDeclarator":
        return parent.id !== node;

      // no: function NODE() {}
      // no: function foo(NODE) {}
      case "ArrowFunctionExpression":
      case "FunctionDeclaration":
      case "FunctionExpression":
        var _arr = parent.params;

        for (var _i = 0; _i < _arr.length; _i++) {
          var param = _arr[_i];
          if (param === node) return false;
        }

        return parent.id !== node;

      // no: export { foo as NODE };
      // yes: export { NODE as foo };
      // no: export { NODE as foo } from "foo";
      case "ExportSpecifier":
        if (parent.source) {
          return false;
        } else {
          return parent.local === node;
        }

      // no: <div NODE="foo" />
      case "JSXAttribute":
        return parent.name !== node;

      // no: class { NODE = value; }
      // yes: class { key = NODE; }
      case "ClassProperty":
        return parent.value === node;

      // no: import NODE from "foo";
      // no: import * as NODE from "foo";
      // no: import { NODE as foo } from "foo";
      // no: import { foo as NODE } from "foo";
      // no: import NODE from "bar";
      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
        return false;

      // no: class NODE {}
      case "ClassDeclaration":
      case "ClassExpression":
        return parent.id !== node;

      // yes: class { [NODE](){} }
      case "MethodDefinition":
        return parent.key === node && parent.computed;

      // no: NODE: for (;;) {}
      case "LabeledStatement":
        return false;

      // no: try {} catch (NODE) {}
      case "CatchClause":
        return parent.param !== node;

      // no: function foo(...NODE) {}
      case "RestElement":
        return false;

      // yes: left = NODE;
      // no: NODE = right;
      case "AssignmentExpression":
        return parent.right === node;

      // no: [NODE = foo] = [];
      // yes: [foo = NODE] = [];
      case "AssignmentPattern":
        return parent.right === node;

      // no: [NODE] = [];
      // no: ({ NODE }) = [];
      case "ObjectPattern":
      case "ArrayPattern":
        return false;
    }

    return true;
  }

  /**
   * Check if the input `name` is a valid identifier name
   * and isn't a reserved word.
   */

  function isValidIdentifier(name) {
    if (typeof name !== "string" || _esutils2["default"].keyword.isReservedWordES6(name, true)) {
      return false;
    } else {
      return _esutils2["default"].keyword.isIdentifierNameES6(name);
    }
  }

  /**
   * Check if the input `node` is a `let` variable declaration.
   */

  function isLet(node) {
    return t.isVariableDeclaration(node) && (node.kind !== "var" || node._let);
  }

  /**
   * Check if the input `node` is block scoped.
   */

  function isBlockScoped(node) {
    return t.isFunctionDeclaration(node) || t.isClassDeclaration(node) || t.isLet(node);
  }

  /**
   * Check if the input `node` is a variable declaration.
   */

  function isVar(node) {
    return t.isVariableDeclaration(node, { kind: "var" }) && !node._let;
  }

  /**
   * Check if the input `specifier` is a `default` import or export.
   */

  function isSpecifierDefault(specifier) {
    return t.isImportDefaultSpecifier(specifier) || t.isIdentifier(specifier.imported || specifier.exported, { name: "default" });
  }

  /**
   * Check if the input `node` is a scope.
   */

  function isScope(node, parent) {
    if (t.isBlockStatement(node) && t.isFunction(parent, { body: node })) {
      return false;
    }

    return t.isScopable(node);
  }

  /**
   * Check if the input `node` is definitely immutable.
   */

  function isImmutable(node) {
    if (t.isType(node.type, "Immutable")) return true;

    if (t.isLiteral(node)) {
      if (node.regex) {
        // regexs are mutable
        return false;
      } else {
        // immutable!
        return true;
      }
    } else if (t.isIdentifier(node)) {
      if (node.name === "undefined") {
        // immutable!
        return true;
      } else {
        // no idea...
        return false;
      }
    }

    return false;
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.isBinding = isBinding;
      exports.isReferenced = isReferenced;
      exports.isValidIdentifier = isValidIdentifier;
      exports.isLet = isLet;
      exports.isBlockScoped = isBlockScoped;
      exports.isVar = isVar;
      exports.isSpecifierDefault = isSpecifierDefault;
      exports.isScope = isScope;
      exports.isImmutable = isImmutable;_retrievers = require("./retrievers");
      _esutils = require("esutils");
      _esutils2 = _interopRequireDefault(_esutils);
      _index = require("./index");
      t = _interopRequireWildcard(_index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvdmFsaWRhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQWNBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFnQkEsV0FBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCLE1BQXpCLEVBQWlDO0FBQy9CLFFBQUksT0FBTyxZQUFZLHFCQUFaLENBQWtDLElBQWxDLENBQXVDLE9BQU8sSUFBUCxDQUE5QyxDQUQyQjtBQUUvQixRQUFJLElBQUosRUFBVTtBQUNSLFdBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssTUFBTCxFQUFhLEdBQWpDLEVBQXNDO0FBQ3BDLFlBQUksTUFBTSxLQUFLLENBQUwsQ0FBTixDQURnQztBQUVwQyxZQUFJLE1BQU0sT0FBTyxHQUFQLENBQU4sQ0FGZ0M7QUFHcEMsWUFBSSxNQUFNLE9BQU4sQ0FBYyxHQUFk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QVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3R5cGVzL3ZhbGlkYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmlzQmluZGluZyA9IGlzQmluZGluZztcbmV4cG9ydHMuaXNSZWZlcmVuY2VkID0gaXNSZWZlcmVuY2VkO1xuZXhwb3J0cy5pc1ZhbGlkSWRlbnRpZmllciA9IGlzVmFsaWRJZGVudGlmaWVyO1xuZXhwb3J0cy5pc0xldCA9IGlzTGV0O1xuZXhwb3J0cy5pc0Jsb2NrU2NvcGVkID0gaXNCbG9ja1Njb3BlZDtcbmV4cG9ydHMuaXNWYXIgPSBpc1ZhcjtcbmV4cG9ydHMuaXNTcGVjaWZpZXJEZWZhdWx0ID0gaXNTcGVjaWZpZXJEZWZhdWx0O1xuZXhwb3J0cy5pc1Njb3BlID0gaXNTY29wZTtcbmV4cG9ydHMuaXNJbW11dGFibGUgPSBpc0ltbXV0YWJsZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfcmV0cmlldmVycyA9IHJlcXVpcmUoXCIuL3JldHJpZXZlcnNcIik7XG5cbnZhciBfZXN1dGlscyA9IHJlcXVpcmUoXCJlc3V0aWxzXCIpO1xuXG52YXIgX2VzdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXN1dGlscyk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW5kZXgpO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBpbnB1dCBgbm9kZWAgaXMgYSBiaW5kaW5nIGlkZW50aWZpZXIuXG4gKi9cblxuZnVuY3Rpb24gaXNCaW5kaW5nKG5vZGUsIHBhcmVudCkge1xuICB2YXIga2V5cyA9IF9yZXRyaWV2ZXJzLmdldEJpbmRpbmdJZGVudGlmaWVycy5rZXlzW3BhcmVudC50eXBlXTtcbiAgaWYgKGtleXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgdmFyIHZhbCA9IHBhcmVudFtrZXldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICBpZiAodmFsLmluZGV4T2Yobm9kZSkgPj0gMCkgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsID09PSBub2RlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGlucHV0IGBub2RlYCBpcyBhIHJlZmVyZW5jZSB0byBhIGJvdW5kIHZhcmlhYmxlLlxuICovXG5cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlZChub2RlLCBwYXJlbnQpIHtcbiAgc3dpdGNoIChwYXJlbnQudHlwZSkge1xuICAgIC8vIHllczogUEFSRU5UW05PREVdXG4gICAgLy8geWVzOiBOT0RFLmNoaWxkXG4gICAgLy8gbm86IHBhcmVudC5OT0RFXG4gICAgY2FzZSBcIk1lbWJlckV4cHJlc3Npb25cIjpcbiAgICBjYXNlIFwiSlNYTWVtYmVyRXhwcmVzc2lvblwiOlxuICAgICAgaWYgKHBhcmVudC5wcm9wZXJ0eSA9PT0gbm9kZSAmJiBwYXJlbnQuY29tcHV0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC5vYmplY3QgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAvLyBubzogbmV3Lk5PREVcbiAgICAvLyBubzogTk9ERS50YXJnZXRcbiAgICBjYXNlIFwiTWV0YVByb3BlcnR5XCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyB5ZXM6IHsgW05PREVdOiBcIlwiIH1cbiAgICAvLyB5ZXM6IHsgTk9ERSB9XG4gICAgLy8gbm86IHsgTk9ERTogXCJcIiB9XG4gICAgY2FzZSBcIlByb3BlcnR5XCI6XG4gICAgICBpZiAocGFyZW50LmtleSA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmNvbXB1dGVkO1xuICAgICAgfVxuXG4gICAgLy8gbm86IHZhciBOT0RFID0gaW5pdDtcbiAgICAvLyB5ZXM6IHZhciBpZCA9IE5PREU7XG4gICAgY2FzZSBcIlZhcmlhYmxlRGVjbGFyYXRvclwiOlxuICAgICAgcmV0dXJuIHBhcmVudC5pZCAhPT0gbm9kZTtcblxuICAgIC8vIG5vOiBmdW5jdGlvbiBOT0RFKCkge31cbiAgICAvLyBubzogZnVuY3Rpb24gZm9vKE5PREUpIHt9XG4gICAgY2FzZSBcIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCI6XG4gICAgY2FzZSBcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIjpcbiAgICBjYXNlIFwiRnVuY3Rpb25FeHByZXNzaW9uXCI6XG4gICAgICB2YXIgX2FyciA9IHBhcmVudC5wYXJhbXM7XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcGFyYW0gPSBfYXJyW19pXTtcbiAgICAgICAgaWYgKHBhcmFtID09PSBub2RlKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnQuaWQgIT09IG5vZGU7XG5cbiAgICAvLyBubzogZXhwb3J0IHsgZm9vIGFzIE5PREUgfTtcbiAgICAvLyB5ZXM6IGV4cG9ydCB7IE5PREUgYXMgZm9vIH07XG4gICAgLy8gbm86IGV4cG9ydCB7IE5PREUgYXMgZm9vIH0gZnJvbSBcImZvb1wiO1xuICAgIGNhc2UgXCJFeHBvcnRTcGVjaWZpZXJcIjpcbiAgICAgIGlmIChwYXJlbnQuc291cmNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQubG9jYWwgPT09IG5vZGU7XG4gICAgICB9XG5cbiAgICAvLyBubzogPGRpdiBOT0RFPVwiZm9vXCIgLz5cbiAgICBjYXNlIFwiSlNYQXR0cmlidXRlXCI6XG4gICAgICByZXR1cm4gcGFyZW50Lm5hbWUgIT09IG5vZGU7XG5cbiAgICAvLyBubzogY2xhc3MgeyBOT0RFID0gdmFsdWU7IH1cbiAgICAvLyB5ZXM6IGNsYXNzIHsga2V5ID0gTk9ERTsgfVxuICAgIGNhc2UgXCJDbGFzc1Byb3BlcnR5XCI6XG4gICAgICByZXR1cm4gcGFyZW50LnZhbHVlID09PSBub2RlO1xuXG4gICAgLy8gbm86IGltcG9ydCBOT0RFIGZyb20gXCJmb29cIjtcbiAgICAvLyBubzogaW1wb3J0ICogYXMgTk9ERSBmcm9tIFwiZm9vXCI7XG4gICAgLy8gbm86IGltcG9ydCB7IE5PREUgYXMgZm9vIH0gZnJvbSBcImZvb1wiO1xuICAgIC8vIG5vOiBpbXBvcnQgeyBmb28gYXMgTk9ERSB9IGZyb20gXCJmb29cIjtcbiAgICAvLyBubzogaW1wb3J0IE5PREUgZnJvbSBcImJhclwiO1xuICAgIGNhc2UgXCJJbXBvcnREZWZhdWx0U3BlY2lmaWVyXCI6XG4gICAgY2FzZSBcIkltcG9ydE5hbWVzcGFjZVNwZWNpZmllclwiOlxuICAgIGNhc2UgXCJJbXBvcnRTcGVjaWZpZXJcIjpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIC8vIG5vOiBjbGFzcyBOT0RFIHt9XG4gICAgY2FzZSBcIkNsYXNzRGVjbGFyYXRpb25cIjpcbiAgICBjYXNlIFwiQ2xhc3NFeHByZXNzaW9uXCI6XG4gICAgICByZXR1cm4gcGFyZW50LmlkICE9PSBub2RlO1xuXG4gICAgLy8geWVzOiBjbGFzcyB7IFtOT0RFXSgpe30gfVxuICAgIGNhc2UgXCJNZXRob2REZWZpbml0aW9uXCI6XG4gICAgICByZXR1cm4gcGFyZW50LmtleSA9PT0gbm9kZSAmJiBwYXJlbnQuY29tcHV0ZWQ7XG5cbiAgICAvLyBubzogTk9ERTogZm9yICg7Oykge31cbiAgICBjYXNlIFwiTGFiZWxlZFN0YXRlbWVudFwiOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gbm86IHRyeSB7fSBjYXRjaCAoTk9ERSkge31cbiAgICBjYXNlIFwiQ2F0Y2hDbGF1c2VcIjpcbiAgICAgIHJldHVybiBwYXJlbnQucGFyYW0gIT09IG5vZGU7XG5cbiAgICAvLyBubzogZnVuY3Rpb24gZm9vKC4uLk5PREUpIHt9XG4gICAgY2FzZSBcIlJlc3RFbGVtZW50XCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyB5ZXM6IGxlZnQgPSBOT0RFO1xuICAgIC8vIG5vOiBOT0RFID0gcmlnaHQ7XG4gICAgY2FzZSBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCI6XG4gICAgICByZXR1cm4gcGFyZW50LnJpZ2h0ID09PSBub2RlO1xuXG4gICAgLy8gbm86IFtOT0RFID0gZm9vXSA9IFtdO1xuICAgIC8vIHllczogW2ZvbyA9IE5PREVdID0gW107XG4gICAgY2FzZSBcIkFzc2lnbm1lbnRQYXR0ZXJuXCI6XG4gICAgICByZXR1cm4gcGFyZW50LnJpZ2h0ID09PSBub2RlO1xuXG4gICAgLy8gbm86IFtOT0RFXSA9IFtdO1xuICAgIC8vIG5vOiAoeyBOT0RFIH0pID0gW107XG4gICAgY2FzZSBcIk9iamVjdFBhdHRlcm5cIjpcbiAgICBjYXNlIFwiQXJyYXlQYXR0ZXJuXCI6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgaW5wdXQgYG5hbWVgIGlzIGEgdmFsaWQgaWRlbnRpZmllciBuYW1lXG4gKiBhbmQgaXNuJ3QgYSByZXNlcnZlZCB3b3JkLlxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRJZGVudGlmaWVyKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IF9lc3V0aWxzMltcImRlZmF1bHRcIl0ua2V5d29yZC5pc1Jlc2VydmVkV29yZEVTNihuYW1lLCB0cnVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2VzdXRpbHMyW1wiZGVmYXVsdFwiXS5rZXl3b3JkLmlzSWRlbnRpZmllck5hbWVFUzYobmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgaW5wdXQgYG5vZGVgIGlzIGEgYGxldGAgdmFyaWFibGUgZGVjbGFyYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gaXNMZXQobm9kZSkge1xuICByZXR1cm4gdC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSkgJiYgKG5vZGUua2luZCAhPT0gXCJ2YXJcIiB8fCBub2RlLl9sZXQpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBpbnB1dCBgbm9kZWAgaXMgYmxvY2sgc2NvcGVkLlxuICovXG5cbmZ1bmN0aW9uIGlzQmxvY2tTY29wZWQobm9kZSkge1xuICByZXR1cm4gdC5pc0Z1bmN0aW9uRGVjbGFyYXRpb24obm9kZSkgfHwgdC5pc0NsYXNzRGVjbGFyYXRpb24obm9kZSkgfHwgdC5pc0xldChub2RlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgaW5wdXQgYG5vZGVgIGlzIGEgdmFyaWFibGUgZGVjbGFyYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gaXNWYXIobm9kZSkge1xuICByZXR1cm4gdC5pc1ZhcmlhYmxlRGVjbGFyYXRpb24obm9kZSwgeyBraW5kOiBcInZhclwiIH0pICYmICFub2RlLl9sZXQ7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGlucHV0IGBzcGVjaWZpZXJgIGlzIGEgYGRlZmF1bHRgIGltcG9ydCBvciBleHBvcnQuXG4gKi9cblxuZnVuY3Rpb24gaXNTcGVjaWZpZXJEZWZhdWx0KHNwZWNpZmllcikge1xuICByZXR1cm4gdC5pc0ltcG9ydERlZmF1bHRTcGVjaWZpZXIoc3BlY2lmaWVyKSB8fCB0LmlzSWRlbnRpZmllcihzcGVjaWZpZXIuaW1wb3J0ZWQgfHwgc3BlY2lmaWVyLmV4cG9ydGVkLCB7IG5hbWU6IFwiZGVmYXVsdFwiIH0pO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBpbnB1dCBgbm9kZWAgaXMgYSBzY29wZS5cbiAqL1xuXG5mdW5jdGlvbiBpc1Njb3BlKG5vZGUsIHBhcmVudCkge1xuICBpZiAodC5pc0Jsb2NrU3RhdGVtZW50KG5vZGUpICYmIHQuaXNGdW5jdGlvbihwYXJlbnQsIHsgYm9keTogbm9kZSB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0LmlzU2NvcGFibGUobm9kZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGlucHV0IGBub2RlYCBpcyBkZWZpbml0ZWx5IGltbXV0YWJsZS5cbiAqL1xuXG5mdW5jdGlvbiBpc0ltbXV0YWJsZShub2RlKSB7XG4gIGlmICh0LmlzVHlwZShub2RlLnR5cGUsIFwiSW1tdXRhYmxlXCIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodC5pc0xpdGVyYWwobm9kZSkpIHtcbiAgICBpZiAobm9kZS5yZWdleCkge1xuICAgICAgLy8gcmVnZXhzIGFyZSBtdXRhYmxlXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGltbXV0YWJsZSFcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0LmlzSWRlbnRpZmllcihub2RlKSkge1xuICAgIGlmIChub2RlLm5hbWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIGltbXV0YWJsZSFcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBubyBpZGVhLi4uXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
