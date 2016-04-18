/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _inferers, inferers, _types, t;

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
   * Infer the type of the current `NodePath`.
   */

  function getTypeAnnotation() {
    if (this.typeAnnotation) return this.typeAnnotation;

    var type = this._getTypeAnnotation() || t.anyTypeAnnotation();
    if (t.isTypeAnnotation(type)) type = type.typeAnnotation;
    return this.typeAnnotation = type;
  }

  /**
   * todo: split up this method
   */

  function _getTypeAnnotation() {
    var node = this.node;

    if (!node) {
      // handle initializerless variables, add in checks for loop initializers too
      if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
        var declar = this.parentPath.parentPath;
        var declarParent = declar.parentPath;

        // for (var NODE in bar) {}
        if (declar.key === "left" && declarParent.isForInStatement()) {
          return t.stringTypeAnnotation();
        }

        // for (var NODE of bar) {}
        if (declar.key === "left" && declarParent.isForOfStatement()) {
          return t.anyTypeAnnotation();
        }

        return t.voidTypeAnnotation();
      } else {
        return;
      }
    }

    if (node.typeAnnotation) {
      return node.typeAnnotation;
    }

    var inferer = inferers[node.type];
    if (inferer) {
      return inferer.call(this, node);
    }

    inferer = inferers[this.parentPath.type];
    if (inferer && inferer.validParent) {
      return this.parentPath.getTypeAnnotation();
    }
  }

  /**
   * [Please add a description.]
   */

  function isBaseType(baseName, soft) {
    return _isBaseType(baseName, this.getTypeAnnotation(), soft);
  }

  /**
   * [Please add a description.]
   */

  function _isBaseType(baseName, type, soft) {
    if (baseName === "string") {
      return t.isStringTypeAnnotation(type);
    } else if (baseName === "number") {
      return t.isNumberTypeAnnotation(type);
    } else if (baseName === "boolean") {
      return t.isBooleanTypeAnnotation(type);
    } else if (baseName === "any") {
      return t.isAnyTypeAnnotation(type);
    } else if (baseName === "mixed") {
      return t.isMixedTypeAnnotation(type);
    } else if (baseName === "void") {
      return t.isVoidTypeAnnotation(type);
    } else {
      if (soft) {
        return false;
      } else {
        throw new Error("Unknown base type " + baseName);
      }
    }
  }

  /**
   * [Please add a description.]
   */

  function couldBeBaseType(name) {
    var type = this.getTypeAnnotation();
    if (t.isAnyTypeAnnotation(type)) return true;

    if (t.isUnionTypeAnnotation(type)) {
      var _arr = type.types;

      for (var _i = 0; _i < _arr.length; _i++) {
        var type2 = _arr[_i];
        if (t.isAnyTypeAnnotation(type2) || _isBaseType(name, type2, true)) {
          return true;
        }
      }
      return false;
    } else {
      return _isBaseType(name, type, true);
    }
  }

  /**
   * [Please add a description.]
   */

  function baseTypeStrictlyMatches(right) {
    var left = this.getTypeAnnotation();
    right = right.getTypeAnnotation();

    if (!t.isAnyTypeAnnotation() && t.isFlowBaseAnnotation(left)) {
      return right.type === left.type;
    }
  }

  /**
   * [Please add a description.]
   */

  function isGenericType(genericName) {
    var type = this.getTypeAnnotation();
    return t.isGenericTypeAnnotation(type) && t.isIdentifier(type.id, { name: genericName });
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.getTypeAnnotation = getTypeAnnotation;
      exports._getTypeAnnotation = _getTypeAnnotation;
      exports.isBaseType = isBaseType;
      exports.couldBeBaseType = couldBeBaseType;
      exports.baseTypeStrictlyMatches = baseTypeStrictlyMatches;
      exports.isGenericType = isGenericType;_inferers = require("./inferers");
      inferers = _interopRequireWildcard(_inferers);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvaW5mZXJlbmNlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBV0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7O0FBY0EsV0FBUyxpQkFBVCxHQUE2QjtBQUMzQixRQUFJLEtBQUssY0FBTCxFQUFxQixPQUFPLEtBQUssY0FBTCxDQUFoQzs7QUFFQSxRQUFJLE9BQU8sS0FBSyxrQkFBTCxNQUE2QixFQUFFLGlCQUFGLEVBQTdCLENBSGdCO0FBSTNCLFFBQUksRUFBRSxnQkFBRixDQUFtQixJQUFuQixDQUFKLEVBQThCLE9BQU8sS0FBSyxjQUFMLENBQXJDO0FBQ0EsV0FBTyxLQUFLLGNBQUwsR0FBc0IsSUFBdEIsQ0FMb0I7R0FBN0I7Ozs7OztBQVlBLFdBQVMsa0JBQVQsR0FBOEI7QUFDNUIsUUFBSSxPQUFPLEtBQUssSUFBTCxDQURpQjs7QUFHNUIsUUFBSSxDQUFDLElBQUQsRUFBTzs7QUFFVCxVQUFJLEtBQUssR0FBTCxLQUFhLE1BQWIsSUFBdUIsS0FBSyxVQUFMLENBQWdCLG9CQUFoQixFQUF2QixFQUErRDtBQUNq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OC9saWIvdHJhdmVyc2FsL3BhdGgvaW5mZXJlbmNlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRUeXBlQW5ub3RhdGlvbiA9IGdldFR5cGVBbm5vdGF0aW9uO1xuZXhwb3J0cy5fZ2V0VHlwZUFubm90YXRpb24gPSBfZ2V0VHlwZUFubm90YXRpb247XG5leHBvcnRzLmlzQmFzZVR5cGUgPSBpc0Jhc2VUeXBlO1xuZXhwb3J0cy5jb3VsZEJlQmFzZVR5cGUgPSBjb3VsZEJlQmFzZVR5cGU7XG5leHBvcnRzLmJhc2VUeXBlU3RyaWN0bHlNYXRjaGVzID0gYmFzZVR5cGVTdHJpY3RseU1hdGNoZXM7XG5leHBvcnRzLmlzR2VuZXJpY1R5cGUgPSBpc0dlbmVyaWNUeXBlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX2luZmVyZXJzID0gcmVxdWlyZShcIi4vaW5mZXJlcnNcIik7XG5cbnZhciBpbmZlcmVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbmZlcmVycyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBJbmZlciB0aGUgdHlwZSBvZiB0aGUgY3VycmVudCBgTm9kZVBhdGhgLlxuICovXG5cbmZ1bmN0aW9uIGdldFR5cGVBbm5vdGF0aW9uKCkge1xuICBpZiAodGhpcy50eXBlQW5ub3RhdGlvbikgcmV0dXJuIHRoaXMudHlwZUFubm90YXRpb247XG5cbiAgdmFyIHR5cGUgPSB0aGlzLl9nZXRUeXBlQW5ub3RhdGlvbigpIHx8IHQuYW55VHlwZUFubm90YXRpb24oKTtcbiAgaWYgKHQuaXNUeXBlQW5ub3RhdGlvbih0eXBlKSkgdHlwZSA9IHR5cGUudHlwZUFubm90YXRpb247XG4gIHJldHVybiB0aGlzLnR5cGVBbm5vdGF0aW9uID0gdHlwZTtcbn1cblxuLyoqXG4gKiB0b2RvOiBzcGxpdCB1cCB0aGlzIG1ldGhvZFxuICovXG5cbmZ1bmN0aW9uIF9nZXRUeXBlQW5ub3RhdGlvbigpIHtcbiAgdmFyIG5vZGUgPSB0aGlzLm5vZGU7XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgLy8gaGFuZGxlIGluaXRpYWxpemVybGVzcyB2YXJpYWJsZXMsIGFkZCBpbiBjaGVja3MgZm9yIGxvb3AgaW5pdGlhbGl6ZXJzIHRvb1xuICAgIGlmICh0aGlzLmtleSA9PT0gXCJpbml0XCIgJiYgdGhpcy5wYXJlbnRQYXRoLmlzVmFyaWFibGVEZWNsYXJhdG9yKCkpIHtcbiAgICAgIHZhciBkZWNsYXIgPSB0aGlzLnBhcmVudFBhdGgucGFyZW50UGF0aDtcbiAgICAgIHZhciBkZWNsYXJQYXJlbnQgPSBkZWNsYXIucGFyZW50UGF0aDtcblxuICAgICAgLy8gZm9yICh2YXIgTk9ERSBpbiBiYXIpIHt9XG4gICAgICBpZiAoZGVjbGFyLmtleSA9PT0gXCJsZWZ0XCIgJiYgZGVjbGFyUGFyZW50LmlzRm9ySW5TdGF0ZW1lbnQoKSkge1xuICAgICAgICByZXR1cm4gdC5zdHJpbmdUeXBlQW5ub3RhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3IgKHZhciBOT0RFIG9mIGJhcikge31cbiAgICAgIGlmIChkZWNsYXIua2V5ID09PSBcImxlZnRcIiAmJiBkZWNsYXJQYXJlbnQuaXNGb3JPZlN0YXRlbWVudCgpKSB7XG4gICAgICAgIHJldHVybiB0LmFueVR5cGVBbm5vdGF0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0LnZvaWRUeXBlQW5ub3RhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUudHlwZUFubm90YXRpb24pIHtcbiAgICByZXR1cm4gbm9kZS50eXBlQW5ub3RhdGlvbjtcbiAgfVxuXG4gIHZhciBpbmZlcmVyID0gaW5mZXJlcnNbbm9kZS50eXBlXTtcbiAgaWYgKGluZmVyZXIpIHtcbiAgICByZXR1cm4gaW5mZXJlci5jYWxsKHRoaXMsIG5vZGUpO1xuICB9XG5cbiAgaW5mZXJlciA9IGluZmVyZXJzW3RoaXMucGFyZW50UGF0aC50eXBlXTtcbiAgaWYgKGluZmVyZXIgJiYgaW5mZXJlci52YWxpZFBhcmVudCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudFBhdGguZ2V0VHlwZUFubm90YXRpb24oKTtcbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGlzQmFzZVR5cGUoYmFzZU5hbWUsIHNvZnQpIHtcbiAgcmV0dXJuIF9pc0Jhc2VUeXBlKGJhc2VOYW1lLCB0aGlzLmdldFR5cGVBbm5vdGF0aW9uKCksIHNvZnQpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIF9pc0Jhc2VUeXBlKGJhc2VOYW1lLCB0eXBlLCBzb2Z0KSB7XG4gIGlmIChiYXNlTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB0LmlzU3RyaW5nVHlwZUFubm90YXRpb24odHlwZSk7XG4gIH0gZWxzZSBpZiAoYmFzZU5hbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gdC5pc051bWJlclR5cGVBbm5vdGF0aW9uKHR5cGUpO1xuICB9IGVsc2UgaWYgKGJhc2VOYW1lID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiB0LmlzQm9vbGVhblR5cGVBbm5vdGF0aW9uKHR5cGUpO1xuICB9IGVsc2UgaWYgKGJhc2VOYW1lID09PSBcImFueVwiKSB7XG4gICAgcmV0dXJuIHQuaXNBbnlUeXBlQW5ub3RhdGlvbih0eXBlKTtcbiAgfSBlbHNlIGlmIChiYXNlTmFtZSA9PT0gXCJtaXhlZFwiKSB7XG4gICAgcmV0dXJuIHQuaXNNaXhlZFR5cGVBbm5vdGF0aW9uKHR5cGUpO1xuICB9IGVsc2UgaWYgKGJhc2VOYW1lID09PSBcInZvaWRcIikge1xuICAgIHJldHVybiB0LmlzVm9pZFR5cGVBbm5vdGF0aW9uKHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzb2Z0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gYmFzZSB0eXBlIFwiICsgYmFzZU5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGNvdWxkQmVCYXNlVHlwZShuYW1lKSB7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRUeXBlQW5ub3RhdGlvbigpO1xuICBpZiAodC5pc0FueVR5cGVBbm5vdGF0aW9uKHR5cGUpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodC5pc1VuaW9uVHlwZUFubm90YXRpb24odHlwZSkpIHtcbiAgICB2YXIgX2FyciA9IHR5cGUudHlwZXM7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciB0eXBlMiA9IF9hcnJbX2ldO1xuICAgICAgaWYgKHQuaXNBbnlUeXBlQW5ub3RhdGlvbih0eXBlMikgfHwgX2lzQmFzZVR5cGUobmFtZSwgdHlwZTIsIHRydWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9pc0Jhc2VUeXBlKG5hbWUsIHR5cGUsIHRydWUpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gYmFzZVR5cGVTdHJpY3RseU1hdGNoZXMocmlnaHQpIHtcbiAgdmFyIGxlZnQgPSB0aGlzLmdldFR5cGVBbm5vdGF0aW9uKCk7XG4gIHJpZ2h0ID0gcmlnaHQuZ2V0VHlwZUFubm90YXRpb24oKTtcblxuICBpZiAoIXQuaXNBbnlUeXBlQW5ub3RhdGlvbigpICYmIHQuaXNGbG93QmFzZUFubm90YXRpb24obGVmdCkpIHtcbiAgICByZXR1cm4gcmlnaHQudHlwZSA9PT0gbGVmdC50eXBlO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gaXNHZW5lcmljVHlwZShnZW5lcmljTmFtZSkge1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0VHlwZUFubm90YXRpb24oKTtcbiAgcmV0dXJuIHQuaXNHZW5lcmljVHlwZUFubm90YXRpb24odHlwZSkgJiYgdC5pc0lkZW50aWZpZXIodHlwZS5pZCwgeyBuYW1lOiBnZW5lcmljTmFtZSB9KTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
