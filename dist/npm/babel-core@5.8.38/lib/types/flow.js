/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _index, t;

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
   * Takes an array of `types` and flattens them, removing duplicates and
   * returns a `UnionTypeAnnotation` node containg them.
   */

  function createUnionTypeAnnotation(types) {
    var flattened = removeTypeDuplicates(types);

    if (flattened.length === 1) {
      return flattened[0];
    } else {
      return t.unionTypeAnnotation(flattened);
    }
  }

  /**
   * Dedupe type annotations.
   */

  function removeTypeDuplicates(nodes) {
    var generics = {};
    var bases = {};

    // store union type groups to circular references
    var typeGroups = [];

    var types = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!node) continue;

      // detect duplicates
      if (types.indexOf(node) >= 0) {
        continue;
      }

      // this type matches anything
      if (t.isAnyTypeAnnotation(node)) {
        return [node];
      }

      //
      if (t.isFlowBaseAnnotation(node)) {
        bases[node.type] = node;
        continue;
      }

      //
      if (t.isUnionTypeAnnotation(node)) {
        if (typeGroups.indexOf(node.types) < 0) {
          nodes = nodes.concat(node.types);
          typeGroups.push(node.types);
        }
        continue;
      }

      // find a matching generic type and merge and deduplicate the type parameters
      if (t.isGenericTypeAnnotation(node)) {
        var _name = node.id.name;

        if (generics[_name]) {
          var existing = generics[_name];
          if (existing.typeParameters) {
            if (node.typeParameters) {
              existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
            }
          } else {
            existing = node.typeParameters;
          }
        } else {
          generics[_name] = node;
        }

        continue;
      }

      types.push(node);
    }

    // add back in bases
    for (var type in bases) {
      types.push(bases[type]);
    }

    // add back in generics
    for (var _name2 in generics) {
      types.push(generics[_name2]);
    }

    return types;
  }

  /**
   * Create a type anotation based on typeof expression.
   */

  function createTypeAnnotationBasedOnTypeof(type) {
    if (type === "string") {
      return t.stringTypeAnnotation();
    } else if (type === "number") {
      return t.numberTypeAnnotation();
    } else if (type === "undefined") {
      return t.voidTypeAnnotation();
    } else if (type === "boolean") {
      return t.booleanTypeAnnotation();
    } else if (type === "function") {
      return t.genericTypeAnnotation(t.identifier("Function"));
    } else if (type === "object") {
      return t.genericTypeAnnotation(t.identifier("Object"));
    } else if (type === "symbol") {
      return t.genericTypeAnnotation(t.identifier("Symbol"));
    } else {
      throw new Error("Invalid typeof value");
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.createUnionTypeAnnotation = createUnionTypeAnnotation;
      exports.removeTypeDuplicates = removeTypeDuplicates;
      exports.createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof;_index = require("./index");
      t = _interopRequireWildcard(_index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHlwZXMvZmxvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQVFBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7Ozs7QUFXQSxXQUFTLHlCQUFULENBQW1DLEtBQW5DLEVBQTBDO0FBQ3hDLFFBQUksWUFBWSxxQkFBcUIsS0FBckIsQ0FBWixDQURvQzs7QUFHeEMsUUFBSSxVQUFVLE1BQVYsS0FBcUIsQ0FBckIsRUFBd0I7QUFDMUIsYUFBTyxVQUFVLENBQVYsQ0FBUCxDQUQwQjtLQUE1QixNQUVPO0FBQ0wsYUFBTyxFQUFFLG1CQUFGLENBQXNCLFNBQXRCLENBQVAsQ0FESztLQUZQO0dBSEY7Ozs7OztBQWNBLFdBQVMsb0JBQVQsQ0FBOEIsS0FBOUIsRUFBcUM7QUFDbkMsUUFBSSxXQUFXLEVBQVgsQ0FEK0I7QUFFbkMsUUFBSSxRQUFRLEVBQVI7OztBQUYrQixRQUsvQixhQUFhLEVBQWIsQ0FMK0I7O0FBT25DLFFBQUksUUFBUSxFQUFSLENBUCtCOztBQVNuQyxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxHQUFsQyxFQUF1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LEVBQUUscUJBQUYsQ0FBd0IsRUFBRSxVQUFGLENBQWEsUUFBYixDQUF4QixDQUFQLENBRDRCO0tBQXZCLE1BRUE7QUFDTCxZQUFNLElBQUksS0FBSixDQUFVLHNCQUFWLENBQU4sQ0FESztLQUZBO0dBYlQ7Ozs7QUE3R0EsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSx5QkFBUixHQUFvQyx5QkFBcEM7QUFDQSxjQUFRLG9CQUFSLEdBQStCLG9CQUEvQjtBQUNBLGNBQVEsaUNBQVIsR0FBNEMsaUNBQTVDLENBS0ksU0FBUyxRQUFRLFNBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3R5cGVzL2Zsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZVVuaW9uVHlwZUFubm90YXRpb24gPSBjcmVhdGVVbmlvblR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5yZW1vdmVUeXBlRHVwbGljYXRlcyA9IHJlbW92ZVR5cGVEdXBsaWNhdGVzO1xuZXhwb3J0cy5jcmVhdGVUeXBlQW5ub3RhdGlvbkJhc2VkT25UeXBlb2YgPSBjcmVhdGVUeXBlQW5ub3RhdGlvbkJhc2VkT25UeXBlb2Y7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW5kZXgpO1xuXG4vKipcbiAqIFRha2VzIGFuIGFycmF5IG9mIGB0eXBlc2AgYW5kIGZsYXR0ZW5zIHRoZW0sIHJlbW92aW5nIGR1cGxpY2F0ZXMgYW5kXG4gKiByZXR1cm5zIGEgYFVuaW9uVHlwZUFubm90YXRpb25gIG5vZGUgY29udGFpbmcgdGhlbS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVBbm5vdGF0aW9uKHR5cGVzKSB7XG4gIHZhciBmbGF0dGVuZWQgPSByZW1vdmVUeXBlRHVwbGljYXRlcyh0eXBlcyk7XG5cbiAgaWYgKGZsYXR0ZW5lZC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZmxhdHRlbmVkWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0LnVuaW9uVHlwZUFubm90YXRpb24oZmxhdHRlbmVkKTtcbiAgfVxufVxuXG4vKipcbiAqIERlZHVwZSB0eXBlIGFubm90YXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVEdXBsaWNhdGVzKG5vZGVzKSB7XG4gIHZhciBnZW5lcmljcyA9IHt9O1xuICB2YXIgYmFzZXMgPSB7fTtcblxuICAvLyBzdG9yZSB1bmlvbiB0eXBlIGdyb3VwcyB0byBjaXJjdWxhciByZWZlcmVuY2VzXG4gIHZhciB0eXBlR3JvdXBzID0gW107XG5cbiAgdmFyIHR5cGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgaWYgKCFub2RlKSBjb250aW51ZTtcblxuICAgIC8vIGRldGVjdCBkdXBsaWNhdGVzXG4gICAgaWYgKHR5cGVzLmluZGV4T2Yobm9kZSkgPj0gMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGhpcyB0eXBlIG1hdGNoZXMgYW55dGhpbmdcbiAgICBpZiAodC5pc0FueVR5cGVBbm5vdGF0aW9uKG5vZGUpKSB7XG4gICAgICByZXR1cm4gW25vZGVdO1xuICAgIH1cblxuICAgIC8vXG4gICAgaWYgKHQuaXNGbG93QmFzZUFubm90YXRpb24obm9kZSkpIHtcbiAgICAgIGJhc2VzW25vZGUudHlwZV0gPSBub2RlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy9cbiAgICBpZiAodC5pc1VuaW9uVHlwZUFubm90YXRpb24obm9kZSkpIHtcbiAgICAgIGlmICh0eXBlR3JvdXBzLmluZGV4T2Yobm9kZS50eXBlcykgPCAwKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KG5vZGUudHlwZXMpO1xuICAgICAgICB0eXBlR3JvdXBzLnB1c2gobm9kZS50eXBlcyk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGEgbWF0Y2hpbmcgZ2VuZXJpYyB0eXBlIGFuZCBtZXJnZSBhbmQgZGVkdXBsaWNhdGUgdGhlIHR5cGUgcGFyYW1ldGVyc1xuICAgIGlmICh0LmlzR2VuZXJpY1R5cGVBbm5vdGF0aW9uKG5vZGUpKSB7XG4gICAgICB2YXIgX25hbWUgPSBub2RlLmlkLm5hbWU7XG5cbiAgICAgIGlmIChnZW5lcmljc1tfbmFtZV0pIHtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gZ2VuZXJpY3NbX25hbWVdO1xuICAgICAgICBpZiAoZXhpc3RpbmcudHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICBpZiAobm9kZS50eXBlUGFyYW1ldGVycykge1xuICAgICAgICAgICAgZXhpc3RpbmcudHlwZVBhcmFtZXRlcnMucGFyYW1zID0gcmVtb3ZlVHlwZUR1cGxpY2F0ZXMoZXhpc3RpbmcudHlwZVBhcmFtZXRlcnMucGFyYW1zLmNvbmNhdChub2RlLnR5cGVQYXJhbWV0ZXJzLnBhcmFtcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGlzdGluZyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlbmVyaWNzW19uYW1lXSA9IG5vZGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHR5cGVzLnB1c2gobm9kZSk7XG4gIH1cblxuICAvLyBhZGQgYmFjayBpbiBiYXNlc1xuICBmb3IgKHZhciB0eXBlIGluIGJhc2VzKSB7XG4gICAgdHlwZXMucHVzaChiYXNlc1t0eXBlXSk7XG4gIH1cblxuICAvLyBhZGQgYmFjayBpbiBnZW5lcmljc1xuICBmb3IgKHZhciBfbmFtZTIgaW4gZ2VuZXJpY3MpIHtcbiAgICB0eXBlcy5wdXNoKGdlbmVyaWNzW19uYW1lMl0pO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHR5cGUgYW5vdGF0aW9uIGJhc2VkIG9uIHR5cGVvZiBleHByZXNzaW9uLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVR5cGVBbm5vdGF0aW9uQmFzZWRPblR5cGVvZih0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHQuc3RyaW5nVHlwZUFubm90YXRpb24oKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIHQubnVtYmVyVHlwZUFubm90YXRpb24oKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHQudm9pZFR5cGVBbm5vdGF0aW9uKCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gdC5ib29sZWFuVHlwZUFubm90YXRpb24oKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdC5nZW5lcmljVHlwZUFubm90YXRpb24odC5pZGVudGlmaWVyKFwiRnVuY3Rpb25cIikpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gdC5nZW5lcmljVHlwZUFubm90YXRpb24odC5pZGVudGlmaWVyKFwiT2JqZWN0XCIpKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInN5bWJvbFwiKSB7XG4gICAgcmV0dXJuIHQuZ2VuZXJpY1R5cGVBbm5vdGF0aW9uKHQuaWRlbnRpZmllcihcIlN5bWJvbFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0eXBlb2YgdmFsdWVcIik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
