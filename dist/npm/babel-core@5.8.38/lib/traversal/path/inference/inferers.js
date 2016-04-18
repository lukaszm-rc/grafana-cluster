/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, _infererReference;

  // istanbul ignore next

  function _interopRequire(obj) {
    return obj && obj.__esModule ? obj["default"] : obj;
  }

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

  /**
   * [Please add a description.]
   */

  function VariableDeclarator() {
    var id = this.get("id");

    if (id.isIdentifier()) {
      return this.get("init").getTypeAnnotation();
    } else {
      return;
    }
  }

  /**
   * [Please add a description.]
   */

  function TypeCastExpression(node) {
    return node.typeAnnotation;
  }

  /**
   * [Please add a description.]
   */

  function NewExpression(node) {
    if (this.get("callee").isIdentifier()) {
      // only resolve identifier callee
      return t.genericTypeAnnotation(node.callee);
    }
  }

  /**
   * [Please add a description.]
   */

  function TemplateLiteral() {
    return t.stringTypeAnnotation();
  }

  /**
   * [Please add a description.]
   */

  function UnaryExpression(node) {
    var operator = node.operator;

    if (operator === "void") {
      return t.voidTypeAnnotation();
    } else if (t.NUMBER_UNARY_OPERATORS.indexOf(operator) >= 0) {
      return t.numberTypeAnnotation();
    } else if (t.STRING_UNARY_OPERATORS.indexOf(operator) >= 0) {
      return t.stringTypeAnnotation();
    } else if (t.BOOLEAN_UNARY_OPERATORS.indexOf(operator) >= 0) {
      return t.booleanTypeAnnotation();
    }
  }

  /**
   * [Please add a description.]
   */

  function BinaryExpression(node) {
    var operator = node.operator;

    if (t.NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
      return t.numberTypeAnnotation();
    } else if (t.BOOLEAN_BINARY_OPERATORS.indexOf(operator) >= 0) {
      return t.booleanTypeAnnotation();
    } else if (operator === "+") {
      var right = this.get("right");
      var left = this.get("left");

      if (left.isBaseType("number") && right.isBaseType("number")) {
        // both numbers so this will be a number
        return t.numberTypeAnnotation();
      } else if (left.isBaseType("string") || right.isBaseType("string")) {
        // one is a string so the result will be a string
        return t.stringTypeAnnotation();
      }

      // unsure if left and right are strings or numbers so stay on the safe side
      return t.unionTypeAnnotation([t.stringTypeAnnotation(), t.numberTypeAnnotation()]);
    }
  }

  /**
   * [Please add a description.]
   */

  function LogicalExpression() {
    return t.createUnionTypeAnnotation([this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()]);
  }

  /**
   * [Please add a description.]
   */

  function ConditionalExpression() {
    return t.createUnionTypeAnnotation([this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()]);
  }

  /**
   * [Please add a description.]
   */

  function SequenceExpression() {
    return this.get("expressions").pop().getTypeAnnotation();
  }

  /**
   * [Please add a description.]
   */

  function AssignmentExpression() {
    return this.get("right").getTypeAnnotation();
  }

  /**
   * [Please add a description.]
   */

  function UpdateExpression(node) {
    var operator = node.operator;
    if (operator === "++" || operator === "--") {
      return t.numberTypeAnnotation();
    }
  }

  /**
   * [Please add a description.]
   */

  function Literal(node) {
    var value = node.value;
    if (typeof value === "string") return t.stringTypeAnnotation();
    if (typeof value === "number") return t.numberTypeAnnotation();
    if (typeof value === "boolean") return t.booleanTypeAnnotation();
    if (value === null) return t.voidTypeAnnotation();
    if (node.regex) return t.genericTypeAnnotation(t.identifier("RegExp"));
  }

  /**
   * [Please add a description.]
   */

  function ObjectExpression() {
    return t.genericTypeAnnotation(t.identifier("Object"));
  }

  /**
   * [Please add a description.]
   */

  function ArrayExpression() {
    return t.genericTypeAnnotation(t.identifier("Array"));
  }

  /**
   * [Please add a description.]
   */

  function RestElement() {
    return ArrayExpression();
  }

  /**
   * [Please add a description.]
   */

  function Func() {
    return t.genericTypeAnnotation(t.identifier("Function"));
  }

  /**
   * [Please add a description.]
   */

  function CallExpression() {
    return resolveCall(this.get("callee"));
  }

  /**
   * [Please add a description.]
   */

  function TaggedTemplateExpression() {
    return resolveCall(this.get("tag"));
  }

  /**
   * [Please add a description.]
   */

  function resolveCall(callee) {
    callee = callee.resolve();

    if (callee.isFunction()) {
      if (callee.is("async")) {
        if (callee.is("generator")) {
          return t.genericTypeAnnotation(t.identifier("AsyncIterator"));
        } else {
          return t.genericTypeAnnotation(t.identifier("Promise"));
        }
      } else {
        if (callee.node.returnType) {
          return callee.node.returnType;
        } else {
          // todo: get union type of all return arguments
        }
      }
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.VariableDeclarator = VariableDeclarator;
      exports.TypeCastExpression = TypeCastExpression;
      exports.NewExpression = NewExpression;
      exports.TemplateLiteral = TemplateLiteral;
      exports.UnaryExpression = UnaryExpression;
      exports.BinaryExpression = BinaryExpression;
      exports.LogicalExpression = LogicalExpression;
      exports.ConditionalExpression = ConditionalExpression;
      exports.SequenceExpression = SequenceExpression;
      exports.AssignmentExpression = AssignmentExpression;
      exports.UpdateExpression = UpdateExpression;
      exports.Literal = Literal;
      exports.ObjectExpression = ObjectExpression;
      exports.ArrayExpression = ArrayExpression;
      exports.RestElement = RestElement;
      exports.CallExpression = CallExpression;
      exports.TaggedTemplateExpression = TaggedTemplateExpression;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      _infererReference = require("./inferer-reference");


      exports.Identifier = _interopRequire(_infererReference);TypeCastExpression.validParent = true;RestElement.validParent = true;exports.Function = Func;
      exports.Class = Func;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvaW5mZXJlbmNlL2luZmVyZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBc0JBLFdBQVMsZUFBVCxDQUF5QixHQUF6QixFQUE4QjtBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsSUFBSSxTQUFKLENBQXhCLEdBQXlDLEdBQXpDLENBQVQ7R0FBOUI7Ozs7QUFJQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFjQSxXQUFTLGtCQUFULEdBQThCO0FBQzVCLFFBQUksS0FBSyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQUwsQ0FEd0I7O0FBRzVCLFFBQUksR0FBRyxZQUFILEVBQUosRUFBdUI7QUFDckIsYUFBTyxLQUFLLEdBQUwsQ0FBUyxNQUFULEVBQWlCLGlCQUFqQixFQUFQLENBRHFCO0tBQXZCLE1BRU87QUFDTCxhQURLO0tBRlA7R0FIRjs7Ozs7O0FBY0EsV0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQztBQUNoQyxXQUFPLEtBQUssY0FBTCxDQUR5QjtHQUFsQzs7Ozs7O0FBVUEsV0FBUyxhQUFULENBQXVCLElB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QTJCLGdCQUEzQjtBQUNBLGNBQVEsaUJBQVIsR0FBNEIsaUJBQTVCO0FBQ0EsY0FBUSxxQkFBUixHQUFnQyxxQkFBaEM7QUFDQSxjQUFRLGtCQUFSLEdBQTZCLGtCQUE3QjtBQUNBLGNBQVEsb0JBQVIsR0FBK0Isb0JBQS9CO0FBQ0EsY0FBUSxnQkFBUixHQUEyQixnQkFBM0I7QUFDQSxjQUFRLE9BQVIsR0FBa0IsT0FBbEI7QUFDQSxjQUFRLGdCQUFSLEdBQTJCLGdCQUEzQjtBQUNBLGNBQVEsZUFBUixHQUEwQixlQUExQjtBQUNBLGNBQVEsV0FBUixHQUFzQixXQUF0QjtBQUNBLGNBQVEsY0FBUixHQUF5QixjQUF6QjtBQUNBLGNBQVEsd0JBQVIsR0FBbUMsd0JBQW5DLENBU0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSiwwQkFBb0IsUUFBUSxxQkFBUjs7O0FBRXhCLGNBQVEsVUFBUixHQUFxQixnQkFBZ0IsaUJBQWhCLENBQXJCLENBd0JBLG1CQUFtQixXQUFuQixHQUFpQyxJQUFqQyxDQW1KQSxZQUFZLFdBQVosR0FBMEIsSUFBMUIsQ0FVQSxRQUFRLFFBQVIsR0FBbUIsSUFBbkI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsSUFBaEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmF2ZXJzYWwvcGF0aC9pbmZlcmVuY2UvaW5mZXJlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlZhcmlhYmxlRGVjbGFyYXRvciA9IFZhcmlhYmxlRGVjbGFyYXRvcjtcbmV4cG9ydHMuVHlwZUNhc3RFeHByZXNzaW9uID0gVHlwZUNhc3RFeHByZXNzaW9uO1xuZXhwb3J0cy5OZXdFeHByZXNzaW9uID0gTmV3RXhwcmVzc2lvbjtcbmV4cG9ydHMuVGVtcGxhdGVMaXRlcmFsID0gVGVtcGxhdGVMaXRlcmFsO1xuZXhwb3J0cy5VbmFyeUV4cHJlc3Npb24gPSBVbmFyeUV4cHJlc3Npb247XG5leHBvcnRzLkJpbmFyeUV4cHJlc3Npb24gPSBCaW5hcnlFeHByZXNzaW9uO1xuZXhwb3J0cy5Mb2dpY2FsRXhwcmVzc2lvbiA9IExvZ2ljYWxFeHByZXNzaW9uO1xuZXhwb3J0cy5Db25kaXRpb25hbEV4cHJlc3Npb24gPSBDb25kaXRpb25hbEV4cHJlc3Npb247XG5leHBvcnRzLlNlcXVlbmNlRXhwcmVzc2lvbiA9IFNlcXVlbmNlRXhwcmVzc2lvbjtcbmV4cG9ydHMuQXNzaWdubWVudEV4cHJlc3Npb24gPSBBc3NpZ25tZW50RXhwcmVzc2lvbjtcbmV4cG9ydHMuVXBkYXRlRXhwcmVzc2lvbiA9IFVwZGF0ZUV4cHJlc3Npb247XG5leHBvcnRzLkxpdGVyYWwgPSBMaXRlcmFsO1xuZXhwb3J0cy5PYmplY3RFeHByZXNzaW9uID0gT2JqZWN0RXhwcmVzc2lvbjtcbmV4cG9ydHMuQXJyYXlFeHByZXNzaW9uID0gQXJyYXlFeHByZXNzaW9uO1xuZXhwb3J0cy5SZXN0RWxlbWVudCA9IFJlc3RFbGVtZW50O1xuZXhwb3J0cy5DYWxsRXhwcmVzc2lvbiA9IENhbGxFeHByZXNzaW9uO1xuZXhwb3J0cy5UYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb24gPSBUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb247XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmUob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqOyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgX2luZmVyZXJSZWZlcmVuY2UgPSByZXF1aXJlKFwiLi9pbmZlcmVyLXJlZmVyZW5jZVwiKTtcblxuZXhwb3J0cy5JZGVudGlmaWVyID0gX2ludGVyb3BSZXF1aXJlKF9pbmZlcmVyUmVmZXJlbmNlKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBWYXJpYWJsZURlY2xhcmF0b3IoKSB7XG4gIHZhciBpZCA9IHRoaXMuZ2V0KFwiaWRcIik7XG5cbiAgaWYgKGlkLmlzSWRlbnRpZmllcigpKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFwiaW5pdFwiKS5nZXRUeXBlQW5ub3RhdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIFR5cGVDYXN0RXhwcmVzc2lvbihub2RlKSB7XG4gIHJldHVybiBub2RlLnR5cGVBbm5vdGF0aW9uO1xufVxuXG5UeXBlQ2FzdEV4cHJlc3Npb24udmFsaWRQYXJlbnQgPSB0cnVlO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIE5ld0V4cHJlc3Npb24obm9kZSkge1xuICBpZiAodGhpcy5nZXQoXCJjYWxsZWVcIikuaXNJZGVudGlmaWVyKCkpIHtcbiAgICAvLyBvbmx5IHJlc29sdmUgaWRlbnRpZmllciBjYWxsZWVcbiAgICByZXR1cm4gdC5nZW5lcmljVHlwZUFubm90YXRpb24obm9kZS5jYWxsZWUpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gVGVtcGxhdGVMaXRlcmFsKCkge1xuICByZXR1cm4gdC5zdHJpbmdUeXBlQW5ub3RhdGlvbigpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIFVuYXJ5RXhwcmVzc2lvbihub2RlKSB7XG4gIHZhciBvcGVyYXRvciA9IG5vZGUub3BlcmF0b3I7XG5cbiAgaWYgKG9wZXJhdG9yID09PSBcInZvaWRcIikge1xuICAgIHJldHVybiB0LnZvaWRUeXBlQW5ub3RhdGlvbigpO1xuICB9IGVsc2UgaWYgKHQuTlVNQkVSX1VOQVJZX09QRVJBVE9SUy5pbmRleE9mKG9wZXJhdG9yKSA+PSAwKSB7XG4gICAgcmV0dXJuIHQubnVtYmVyVHlwZUFubm90YXRpb24oKTtcbiAgfSBlbHNlIGlmICh0LlNUUklOR19VTkFSWV9PUEVSQVRPUlMuaW5kZXhPZihvcGVyYXRvcikgPj0gMCkge1xuICAgIHJldHVybiB0LnN0cmluZ1R5cGVBbm5vdGF0aW9uKCk7XG4gIH0gZWxzZSBpZiAodC5CT09MRUFOX1VOQVJZX09QRVJBVE9SUy5pbmRleE9mKG9wZXJhdG9yKSA+PSAwKSB7XG4gICAgcmV0dXJuIHQuYm9vbGVhblR5cGVBbm5vdGF0aW9uKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBCaW5hcnlFeHByZXNzaW9uKG5vZGUpIHtcbiAgdmFyIG9wZXJhdG9yID0gbm9kZS5vcGVyYXRvcjtcblxuICBpZiAodC5OVU1CRVJfQklOQVJZX09QRVJBVE9SUy5pbmRleE9mKG9wZXJhdG9yKSA+PSAwKSB7XG4gICAgcmV0dXJuIHQubnVtYmVyVHlwZUFubm90YXRpb24oKTtcbiAgfSBlbHNlIGlmICh0LkJPT0xFQU5fQklOQVJZX09QRVJBVE9SUy5pbmRleE9mKG9wZXJhdG9yKSA+PSAwKSB7XG4gICAgcmV0dXJuIHQuYm9vbGVhblR5cGVBbm5vdGF0aW9uKCk7XG4gIH0gZWxzZSBpZiAob3BlcmF0b3IgPT09IFwiK1wiKSB7XG4gICAgdmFyIHJpZ2h0ID0gdGhpcy5nZXQoXCJyaWdodFwiKTtcbiAgICB2YXIgbGVmdCA9IHRoaXMuZ2V0KFwibGVmdFwiKTtcblxuICAgIGlmIChsZWZ0LmlzQmFzZVR5cGUoXCJudW1iZXJcIikgJiYgcmlnaHQuaXNCYXNlVHlwZShcIm51bWJlclwiKSkge1xuICAgICAgLy8gYm90aCBudW1iZXJzIHNvIHRoaXMgd2lsbCBiZSBhIG51bWJlclxuICAgICAgcmV0dXJuIHQubnVtYmVyVHlwZUFubm90YXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKGxlZnQuaXNCYXNlVHlwZShcInN0cmluZ1wiKSB8fCByaWdodC5pc0Jhc2VUeXBlKFwic3RyaW5nXCIpKSB7XG4gICAgICAvLyBvbmUgaXMgYSBzdHJpbmcgc28gdGhlIHJlc3VsdCB3aWxsIGJlIGEgc3RyaW5nXG4gICAgICByZXR1cm4gdC5zdHJpbmdUeXBlQW5ub3RhdGlvbigpO1xuICAgIH1cblxuICAgIC8vIHVuc3VyZSBpZiBsZWZ0IGFuZCByaWdodCBhcmUgc3RyaW5ncyBvciBudW1iZXJzIHNvIHN0YXkgb24gdGhlIHNhZmUgc2lkZVxuICAgIHJldHVybiB0LnVuaW9uVHlwZUFubm90YXRpb24oW3Quc3RyaW5nVHlwZUFubm90YXRpb24oKSwgdC5udW1iZXJUeXBlQW5ub3RhdGlvbigpXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBMb2dpY2FsRXhwcmVzc2lvbigpIHtcbiAgcmV0dXJuIHQuY3JlYXRlVW5pb25UeXBlQW5ub3RhdGlvbihbdGhpcy5nZXQoXCJsZWZ0XCIpLmdldFR5cGVBbm5vdGF0aW9uKCksIHRoaXMuZ2V0KFwicmlnaHRcIikuZ2V0VHlwZUFubm90YXRpb24oKV0pO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIENvbmRpdGlvbmFsRXhwcmVzc2lvbigpIHtcbiAgcmV0dXJuIHQuY3JlYXRlVW5pb25UeXBlQW5ub3RhdGlvbihbdGhpcy5nZXQoXCJjb25zZXF1ZW50XCIpLmdldFR5cGVBbm5vdGF0aW9uKCksIHRoaXMuZ2V0KFwiYWx0ZXJuYXRlXCIpLmdldFR5cGVBbm5vdGF0aW9uKCldKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBTZXF1ZW5jZUV4cHJlc3Npb24oKSB7XG4gIHJldHVybiB0aGlzLmdldChcImV4cHJlc3Npb25zXCIpLnBvcCgpLmdldFR5cGVBbm5vdGF0aW9uKCk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gQXNzaWdubWVudEV4cHJlc3Npb24oKSB7XG4gIHJldHVybiB0aGlzLmdldChcInJpZ2h0XCIpLmdldFR5cGVBbm5vdGF0aW9uKCk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gVXBkYXRlRXhwcmVzc2lvbihub2RlKSB7XG4gIHZhciBvcGVyYXRvciA9IG5vZGUub3BlcmF0b3I7XG4gIGlmIChvcGVyYXRvciA9PT0gXCIrK1wiIHx8IG9wZXJhdG9yID09PSBcIi0tXCIpIHtcbiAgICByZXR1cm4gdC5udW1iZXJUeXBlQW5ub3RhdGlvbigpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gTGl0ZXJhbChub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHJldHVybiB0LnN0cmluZ1R5cGVBbm5vdGF0aW9uKCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHJldHVybiB0Lm51bWJlclR5cGVBbm5vdGF0aW9uKCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSByZXR1cm4gdC5ib29sZWFuVHlwZUFubm90YXRpb24oKTtcbiAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gdC52b2lkVHlwZUFubm90YXRpb24oKTtcbiAgaWYgKG5vZGUucmVnZXgpIHJldHVybiB0LmdlbmVyaWNUeXBlQW5ub3RhdGlvbih0LmlkZW50aWZpZXIoXCJSZWdFeHBcIikpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIE9iamVjdEV4cHJlc3Npb24oKSB7XG4gIHJldHVybiB0LmdlbmVyaWNUeXBlQW5ub3RhdGlvbih0LmlkZW50aWZpZXIoXCJPYmplY3RcIikpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIEFycmF5RXhwcmVzc2lvbigpIHtcbiAgcmV0dXJuIHQuZ2VuZXJpY1R5cGVBbm5vdGF0aW9uKHQuaWRlbnRpZmllcihcIkFycmF5XCIpKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBSZXN0RWxlbWVudCgpIHtcbiAgcmV0dXJuIEFycmF5RXhwcmVzc2lvbigpO1xufVxuXG5SZXN0RWxlbWVudC52YWxpZFBhcmVudCA9IHRydWU7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gRnVuYygpIHtcbiAgcmV0dXJuIHQuZ2VuZXJpY1R5cGVBbm5vdGF0aW9uKHQuaWRlbnRpZmllcihcIkZ1bmN0aW9uXCIpKTtcbn1cblxuZXhwb3J0cy5GdW5jdGlvbiA9IEZ1bmM7XG5leHBvcnRzLkNsYXNzID0gRnVuYztcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBDYWxsRXhwcmVzc2lvbigpIHtcbiAgcmV0dXJuIHJlc29sdmVDYWxsKHRoaXMuZ2V0KFwiY2FsbGVlXCIpKTtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb24oKSB7XG4gIHJldHVybiByZXNvbHZlQ2FsbCh0aGlzLmdldChcInRhZ1wiKSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZUNhbGwoY2FsbGVlKSB7XG4gIGNhbGxlZSA9IGNhbGxlZS5yZXNvbHZlKCk7XG5cbiAgaWYgKGNhbGxlZS5pc0Z1bmN0aW9uKCkpIHtcbiAgICBpZiAoY2FsbGVlLmlzKFwiYXN5bmNcIikpIHtcbiAgICAgIGlmIChjYWxsZWUuaXMoXCJnZW5lcmF0b3JcIikpIHtcbiAgICAgICAgcmV0dXJuIHQuZ2VuZXJpY1R5cGVBbm5vdGF0aW9uKHQuaWRlbnRpZmllcihcIkFzeW5jSXRlcmF0b3JcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHQuZ2VuZXJpY1R5cGVBbm5vdGF0aW9uKHQuaWRlbnRpZmllcihcIlByb21pc2VcIikpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2FsbGVlLm5vZGUucmV0dXJuVHlwZSkge1xuICAgICAgICByZXR1cm4gY2FsbGVlLm5vZGUucmV0dXJuVHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvZG86IGdldCB1bmlvbiB0eXBlIG9mIGFsbCByZXR1cm4gYXJndW1lbnRzXG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
