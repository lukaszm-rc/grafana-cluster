/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t;

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

  // todo


  /**
   * [Please add a description.]
   */

  function getTypeAnnotationBindingConstantViolations(path, name) {
    var binding = path.scope.getBinding(name);

    var types = [];
    path.typeAnnotation = t.unionTypeAnnotation(types);

    var functionConstantViolations = [];
    var constantViolations = getConstantViolationsBefore(binding, path, functionConstantViolations);

    var testType = getConditionalAnnotation(path, name);
    if (testType) {
      var testConstantViolations = getConstantViolationsBefore(binding, testType.ifStatement);

      // remove constant violations observed before the IfStatement
      constantViolations = constantViolations.filter(function (path) {
        return testConstantViolations.indexOf(path) < 0;
      });

      // clear current types and add in observed test type
      types.push(testType.typeAnnotation);
    }

    if (constantViolations.length) {
      // pick one constant from each scope which will represent the last possible
      // control flow path that it could've taken/been
      var rawConstantViolations = constantViolations.reverse();
      var visitedScopes = [];
      constantViolations = [];
      var _arr = rawConstantViolations;
      for (var _i = 0; _i < _arr.length; _i++) {
        var violation = _arr[_i];
        var violationScope = violation.scope;
        if (visitedScopes.indexOf(violationScope) >= 0) continue;

        visitedScopes.push(violationScope);
        constantViolations.push(violation);

        if (violationScope === path.scope) {
          constantViolations = [violation];
          break;
        }
      }

      // add back on function constant violations since we can't track calls
      constantViolations = constantViolations.concat(functionConstantViolations);

      // push on inferred types of violated paths
      var _arr2 = constantViolations;
      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var violation = _arr2[_i2];
        types.push(violation.getTypeAnnotation());
      }
    }

    if (types.length) {
      return t.createUnionTypeAnnotation(types);
    }
  }

  /**
   * [Please add a description.]
   */

  function getConstantViolationsBefore(binding, path, functions) {
    var violations = binding.constantViolations.slice();
    violations.unshift(binding.path);
    return violations.filter(function (violation) {
      violation = violation.resolve();
      var status = violation._guessExecutionStatusRelativeTo(path);
      if (functions && status === "function") functions.push(violation);
      return status === "before";
    });
  }

  /**
   * [Please add a description.]
   */

  function inferAnnotationFromBinaryExpression(name, path) {
    var operator = path.node.operator;

    var right = path.get("right").resolve();
    var left = path.get("left").resolve();

    var target;
    if (left.isIdentifier({ name: name })) {
      target = right;
    } else if (right.isIdentifier({ name: name })) {
      target = left;
    }
    if (target) {
      if (operator === "===") {
        return target.getTypeAnnotation();
      } else if (t.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
        return t.numberTypeAnnotation();
      } else {
        return;
      }
    } else {
      if (operator !== "===") return;
    }

    //
    var typeofPath;
    var typePath;
    if (left.isUnaryExpression({ operator: "typeof" })) {
      typeofPath = left;
      typePath = right;
    } else if (right.isUnaryExpression({ operator: "typeof" })) {
      typeofPath = right;
      typePath = left;
    }
    if (!typePath && !typeofPath) return;

    // ensure that the type path is a Literal
    typePath = typePath.resolve();
    if (!typePath.isLiteral()) return;

    // and that it's a string so we can infer it
    var typeValue = typePath.node.value;
    if (typeof typeValue !== "string") return;

    // and that the argument of the typeof path references us!
    if (!typeofPath.get("argument").isIdentifier({ name: name })) return;

    // turn type value into a type annotation
    return t.createTypeAnnotationBasedOnTypeof(typePath.node.value);
  }

  /**
   * [Please add a description.]
   */

  function getParentConditionalPath(path) {
    var parentPath;
    while (parentPath = path.parentPath) {
      if (parentPath.isIfStatement() || parentPath.isConditionalExpression()) {
        if (path.key === "test") {
          return;
        } else {
          return parentPath;
        }
      } else {
        path = parentPath;
      }
    }
  }

  /**
   * [Please add a description.]
   */

  function getConditionalAnnotation(path, name) {
    var ifStatement = getParentConditionalPath(path);
    if (!ifStatement) return;

    var test = ifStatement.get("test");
    var paths = [test];
    var types = [];

    do {
      var _path = paths.shift().resolve();

      if (_path.isLogicalExpression()) {
        paths.push(_path.get("left"));
        paths.push(_path.get("right"));
      }

      if (_path.isBinaryExpression()) {
        var type = inferAnnotationFromBinaryExpression(name, _path);
        if (type) types.push(type);
      }
    } while (paths.length);

    if (types.length) {
      return {
        typeAnnotation: t.createUnionTypeAnnotation(types),
        ifStatement: ifStatement
      };
    } else {
      return getConditionalAnnotation(ifStatement, name);
    }
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);


      /**
       * [Please add a description.]
       */

      exports["default"] = function (node) {
        if (!this.isReferenced()) return;

        // check if a binding exists of this value and if so then return a union type of all
        // possible types that the binding could be
        var binding = this.scope.getBinding(node.name);
        if (binding) {
          if (binding.identifier.typeAnnotation) {
            return binding.identifier.typeAnnotation;
          } else {
            return getTypeAnnotationBindingConstantViolations(this, node.name);
          }
        }

        // built-in values
        if (node.name === "undefined") {
          return t.voidTypeAnnotation();
        } else if (node.name === "NaN" || node.name === "Infinity") {
          return t.numberTypeAnnotation();
        } else if (node.name === "arguments") {}
      };module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhdmVyc2FsL3BhdGgvaW5mZXJlbmNlL2luZmVyZXItcmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7Ozs7O0FBc0NBLFdBQVMsMENBQVQsQ0FBb0QsSUFBcEQsRUFBMEQsSUFBMUQsRUFBZ0U7QUFDOUQsUUFBSSxVQUFVLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsSUFBdEIsQ0FBVixDQUQwRDs7QUFHOUQsUUFBSSxRQUFRLEVBQVIsQ0FIMEQ7QUFJOUQsU0FBSyxjQUFMLEdBQXNCLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsQ0FBdEIsQ0FKOEQ7O0FBTTlELFFBQUksNkJBQTZCLEVBQTdCLENBTjBEO0FBTzlELFFBQUkscUJBQXFCLDRCQUE0QixPQUE1QixFQUFxQyxJQUFyQyxFQUEyQywwQkFBM0MsQ0FBckIsQ0FQMEQ7O0FBUzlELFFBQUksV0FBVyx5QkFBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FBWCxDQVQwRDtBQVU5RCxRQUFJLFFBQUosRUFBYztBQUNaLFVBQUkseUJBQXlCLDRCQUE0QixPQUE1QixFQUFxQyxTQUFTLFdBQVQsQ0FBOUQ7OztBQURRLHdCQUlaLEdBQXFCLG1CQUFtQixNQUFuQixDQUEwQixVQUFVLElBQVYsRUFBZ0I7QUFDN0QsZUFBTyx1QkFBdUIsT0FBdkIsQ0FBK0IsSUFBL0IsSUFBdUMsQ0FBdkMsQ0FEc0Q7T0FBaEIsQ0FBL0M7OztBQUpZLFdBU1osQ0FBTSxJQUFOLENBQVcsU0FBUyxjQUFULENBQVgsQ0FUWTtLQUFkOztBQVlBLFFBQUksbUJBQW1CLE1BQW5CLEVBQTJCOzs7QUFHN0IsVUFBSSx3QkFBd0IsbUJBQW1CLE9BQW5CLEVBQXhCLENBSHlCO0FBSTdCLFVBQUksZ0JBQWdCLEVBQWhCLENBSnlCO0FBSzdCLDJCQUFxQixFQUFyQixDQUw2QjtBQU03QixVQUFJLE9BQU8scUJBQVAsQ0FOeUI7QUFPN0IsV0FBSyxJQUFJLEtBQUssQ0FBTCxFQUFRLEtBQUssS0FBSyxNQUFMLEVBQWEsSUFBbkMsRUFBeUM7QUFDdkMsWUFBSSxZQUFZLEtBQUssRUFBTCxDQUFaLENBRG1DO0FBRXZDLFlBQUksaUJBQWlCLFVBQVUsS0FBVixDQUZrQjtBQUd2QyxZQUFJLGNBQWMsT0FBZCxDQUFzQixjQUF0QixLQUF5QyxDQUF6QyxFQUE0QyxTQUFoRDs7QUFFQSxzQkFBYyxJQUFkLENBQW1CLGNBQW5CLEVBTHVDO0FBTXZDLDJCQUFtQixJQUFuQixDQUF3QixTQUF4QixFQU51Qzs7QUFRdkMsWUFBSSxtQkFBbUIsS0FBSyxLQUFMLEVBQVk7QUFDakMsK0JBQXFCLENBQUMsU0FBRCxDQUFyQixDQURpQztBQUVqQyxnQkFGaUM7U0FBbkM7T0FSRjs7O0FBUDZCLHdCQXNCN0IsR0FBcUIsbUJBQW1CLE1BQW5CLENBQTBCLDBCQUExQixDQUFyQjs7O0FBdEI2QixVQXlCekIsUUFBUSxrQkFBUixDQXpCeUI7QUEwQjdCLFdBQUssSUFBSSxNQUFNLENBQU4sRUFBUyxNQUFNLE1BQU0sTUFBTixFQUFjLEtBQXRDLEVBQTZDO0FBQzNDLFlBQUksWUFBWSxNQUFNLEdBQU4sQ0FBWixDQUR1QztBQUUzQyxjQUFNLElBQU4sQ0FBVyxVQUFVLGlCQUFWLEVBQVgsRUFGMkM7T0FBN0M7S0ExQkY7O0FBZ0NBLFFBQUksTUFBTSxNQUFOLEVBQWM7QUFDaEIsYUFBTyxFQUFFLHlCQUFGLENBQTRCLEtBQTVCLENBQVAsQ0FEZ0I7S0FBbEI7R0F0REY7Ozs7OztBQStEQSxXQUFTLDJCQUFULENBQXFDLE9BQXJDLEVBQThDLElBQTlDLEVBQW9ELFNBQXBELEVBQStEO0FBQzdELFFBQUksYUFBYSxRQUFRLGtCQUFSLENBQTJCLEtBQTNCLEVBQWIsQ0FEeUQ7QUFFN0QsZUFBVyxPQUFYLENBQW1CLFFBQVEsSUFBUixDQUFuQixDQUY2RDtBQUc3RCxXQUFPLFdBQVcsTUFBWCxDQUFrQixVQUFVLFNBQVYsRUFBcUI7QUFDNUMsa0JBQVksVUFBVSxPQUFWLEVBQVosQ0FENEM7QUFFNUMsVUFBSSxTQUFTLFVBQVUsK0JBQVYsQ0FBMEMsSUFBMUMsQ0FBVCxDQUZ3QztBQUc1QyxVQUFJLGFBQWEsV0FBVyxVQUFYLEVBQXVCLFVBQVUsSUFBVixDQUFlLFNBQWYsRUFBeEM7QUFDQSxhQUFPLFdBQVcsUUFBWCxDQUpxQztLQUFyQixDQUF6QixDQUg2RDtHQUEvRDs7Ozs7O0FBZUEsV0FBUyxtQ0FBVCxDQUE2QyxJQUE3QyxFQUFtRCxJQUFuRCxFQUF5RDtBQUN2RCxRQUFJLFdBQVcsS0FBSyxJQUFMLENBQVUsUUFBVixDQUR3Qzs7QUFHdkQsUUFBSSxRQUFRLEtBQUssR0FBTCxDQUFTLE9BQVQsRUFBa0IsT0FBbEIsRUFBUixDQUhtRDtBQUl2RCxRQUFJLE9BQU8sS0FBSyxHQUFMLENBQVMsTUFBVCxFQUFpQixPQUFqQixFQUFQLENBSm1EOztBQU12RCxRQUFJLE1BQUosQ0FOdUQ7QUFPdkQsUUFBSSxLQUFLLFlBQUwsQ0FBa0IsRUFBRSxNQUFNLElBQU4sRUFBcEIsQ0FBSixFQUF1QztBQUNyQyxlQUFTLEtBQVQsQ0FEcUM7S0FBdkMsTUFFTyxJQUFJLE1BQU0sWUFBTixDQUFtQixFQUFFLE1BQU0sSUFBTixFQUFyQixDQUFKLEVBQXdDO0FBQzdDLGVBQVMsSUFBVCxDQUQ2QztLQUF4QztBQUdQLFFBQUksTUFBSixFQUFZO0FBQ1YsVUFBSSxhQUFhLEtBQWIsRUFBb0I7QUFDdEIsZUFBTyxPQUFPLGlCQUFQLEVBQVAsQ0FEc0I7T0FBeEIsTUFFTyxJQUFJLEVBQUUsK0JBQUYsQ0FBa0MsT0FBbEMsQ0FBMEMsUUFBMUMsS0FBdUQsQ0FBdkQsRUFBMEQ7QUFDbkUsZUFBTyxFQUFFLG9CQUFGLEVBQVAsQ0FEbUU7T0FBOUQsTUFFQTtBQUNMLGVBREs7T0FGQTtLQUhULE1BUU87QUFDTCxVQUFJLGFBQWEsS0FBYixFQUFvQixPQUF4QjtLQVRGOzs7QUFadUQsUUF5Qm5ELFVBQUosQ0F6QnVEO0FBMEJ2RCxRQUFJLFFBQUosQ0ExQnVEO0FBMkJ2RCxRQUFJLEtBQUssaUJBQUwsQ0FBdUIsRUFBRSxVQUFVLFFBQVYsRUFBekIsQ0FBSixFQUFvRDtBQUNsRCxtQkFBYSxJQUFiLENBRGtEO0FBRWxELGlCQUFXLEtBQVgsQ0FGa0Q7S0FBcEQsTUFHTyxJQUFJLE1BQU0saUJBQU4sQ0FBd0IsRUFBRSxVQUFVLFFBQVYsRUFBMUIsQ0FBSixFQUFxRDtBQUMxRCxtQkFBYSxLQUFiLENBRDBEO0FBRTFELGlCQUFXLElBQVgsQ0FGMEQ7S0FBckQ7QUFJUCxRQUFJLENBQUMsUUFBRCxJQUFhLENBQUMsVUFBRCxFQUFhLE9BQTlCOzs7QUFsQ3VELFlBcUN2RCxHQUFXLFNBQVMsT0FBVCxFQUFYLENBckN1RDtBQXNDdkQsUUFBSSxDQUFDLFNBQVMsU0FBVCxFQUFELEVBQXVCLE9BQTNCOzs7QUF0Q3VELFFBeUNuRCxZQUFZLFNBQVMsSUFBVCxDQUFjLEtBQWQsQ0F6Q3VDO0FBMEN2RCxRQUFJLE9BQU8sU0FBUCxLQUFxQixRQUFyQixFQUErQixPQUFuQzs7O0FBMUN1RCxRQTZDbkQsQ0FBQyxXQUFXLEdBQVgsQ0FBZSxVQUFmLEVBQTJCLFlBQTNCLENBQXdDLEVBQUUsTUFBTSxJQUFOLEVBQTFDLENBQUQsRUFBMEQsT0FBOUQ7OztBQTdDdUQsV0FnRGhELEVBQUUsaUNBQUYsQ0FBb0MsU0FBUyxJQUFULENBQWMsS0FBZCxDQUEzQyxDQWhEdUQ7R0FBekQ7Ozs7OztBQXVEQSxXQUFTLHdCQUFULENBQWtDLElBQWxDLEVBQXdDO0FBQ3RDLFFBQUksVUFBSixDQURzQztBQUV0QyxXQUFPLGFBQWEsS0FBSyxVQUFMLEVBQWlCO0FBQ25DLFVBQUksV0FBVyxhQUFYLE1BQThCLFdBQVcsdUJBQVgsRUFBOUIsRUFBb0U7QUFDdEUsWUFBSSxLQUFLLEdBQUwsS0FBYSxNQUFiLEVBQXFCO0FBQ3ZCLGlCQUR1QjtTQUF6QixNQUVPO0FBQ0wsaUJBQU8sVUFBUCxDQURLO1NBRlA7T0FERixNQU1PO0FBQ0wsZUFBTyxVQUFQLENBREs7T0FOUDtLQURGO0dBRkY7Ozs7OztBQW1CQSxXQUFTLHdCQUFULENBQWtDLElBQWxDLEVBQXdDLElBQXhDLEVBQThDO0FBQzVDLFFBQUksY0FBYyx5QkFBeUIsSUFBekIsQ0FBZCxDQUR3QztBQUU1QyxRQUFJLENBQUMsV0FBRCxFQUFjLE9BQWxCOztBQUVBLFFBQUksT0FBTyxZQUFZLEdBQVosQ0FBZ0IsTUFBaEIsQ0FBUCxDQUp3QztBQUs1QyxRQUFJLFFBQVEsQ0FBQyxJQUFELENBQVIsQ0FMd0M7QUFNNUMsUUFBSSxRQUFRLEVBQVIsQ0FOd0M7O0FBUTVDLE9BQUc7QUFDRCxVQUFJLFFBQVEsTUFBTSxLQUFOLEdBQWMsT0FBZCxFQUFSLENBREg7O0FBR0QsVUFBSSxNQUFNLG1CQUFOLEVBQUosRUFBaUM7QUFDL0IsY0FBTSxJQUFOLENBQVcsTUFBTSxHQUFOLENBQVUsTUFBVixDQUFYLEVBRCtCO0FBRS9CLGNBQU0sSUFBTixDQUFXLE1BQU0sR0FBTixDQUFVLE9BQVYsQ0FBWCxFQUYrQjtPQUFqQzs7QUFLQSxVQUFJLE1BQU0sa0JBQU4sRUFBSixFQUFnQztBQUM5QixZQUFJLE9BQU8sb0NBQW9DLElBQXBDLEVBQTBDLEtBQTFDLENBQVAsQ0FEMEI7QUFFOUIsWUFBSSxJQUFKLEVBQVUsTUFBTSxJQUFOLENBQVcsSUFBWCxFQUFWO09BRkY7S0FSRixRQVlTLE1BQU0sTUFBTixFQXBCbUM7O0FBc0I1QyxRQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2hCLGFBQU87QUFDTCx3QkFBZ0IsRUFBRSx5QkFBRixDQUE0QixLQUE1QixDQUFoQjtBQUNBLHFCQUFhLFdBQWI7T0FGRixDQURnQjtLQUFsQixNQUtPO0FBQ0wsYUFBTyx5QkFBeUIsV0FBekIsRUFBc0MsSUFBdEMsQ0FBUCxDQURLO0tBTFA7R0F0QkY7Ozs7QUFqTUEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7Ozs7Ozs7QUFNUixjQUFRLFNBQVIsSUFBcUIsVUFBVSxJQUFWLEVBQWdCO0FBQ25DLFlBQUksQ0FBQyxLQUFLLFlBQUwsRUFBRCxFQUFzQixPQUExQjs7OztBQURtQyxZQUsvQixVQUFVLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsS0FBSyxJQUFMLENBQWhDLENBTCtCO0FBTW5DLFlBQUksT0FBSixFQUFhO0FBQ1gsY0FBSSxRQUFRLFVBQVIsQ0FBbUIsY0FBbkIsRUFBbUM7QUFDckMsbUJBQU8sUUFBUSxVQUFSLENBQW1CLGNBQW5CLENBRDhCO1dBQXZDLE1BRU87QUFDTCxtQkFBTywyQ0FBMkMsSUFBM0MsRUFBaUQsS0FBSyxJQUFMLENBQXhELENBREs7V0FGUDtTQURGOzs7QUFObUMsWUFlL0IsS0FBSyxJQUFMLEtBQWMsV0FBZCxFQUEyQjtBQUM3QixpQkFBTyxFQUFFLGtCQUFGLEVBQVAsQ0FENkI7U0FBL0IsTUFFTyxJQUFJLEtBQUssSUFBTCxLQUFjLEtBQWQsSUFBdUIsS0FBSyxJQUFMLEtBQWMsVUFBZCxFQUEwQjtBQUMxRCxpQkFBTyxFQUFFLG9CQUFGLEVBQVAsQ0FEMEQ7U0FBckQsTUFFQSxJQUFJLEtBQUssSUFBTCxLQUFjLFdBQWQsRUFBMkIsRUFBL0I7T0FuQlksQ0FtTnJCLE9BQU8sT0FBUCxHQUFpQixRQUFRLFNBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmF2ZXJzYWwvcGF0aC9pbmZlcmVuY2UvaW5mZXJlci1yZWZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmICghdGhpcy5pc1JlZmVyZW5jZWQoKSkgcmV0dXJuO1xuXG4gIC8vIGNoZWNrIGlmIGEgYmluZGluZyBleGlzdHMgb2YgdGhpcyB2YWx1ZSBhbmQgaWYgc28gdGhlbiByZXR1cm4gYSB1bmlvbiB0eXBlIG9mIGFsbFxuICAvLyBwb3NzaWJsZSB0eXBlcyB0aGF0IHRoZSBiaW5kaW5nIGNvdWxkIGJlXG4gIHZhciBiaW5kaW5nID0gdGhpcy5zY29wZS5nZXRCaW5kaW5nKG5vZGUubmFtZSk7XG4gIGlmIChiaW5kaW5nKSB7XG4gICAgaWYgKGJpbmRpbmcuaWRlbnRpZmllci50eXBlQW5ub3RhdGlvbikge1xuICAgICAgcmV0dXJuIGJpbmRpbmcuaWRlbnRpZmllci50eXBlQW5ub3RhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldFR5cGVBbm5vdGF0aW9uQmluZGluZ0NvbnN0YW50VmlvbGF0aW9ucyh0aGlzLCBub2RlLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1aWx0LWluIHZhbHVlc1xuICBpZiAobm9kZS5uYW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHQudm9pZFR5cGVBbm5vdGF0aW9uKCk7XG4gIH0gZWxzZSBpZiAobm9kZS5uYW1lID09PSBcIk5hTlwiIHx8IG5vZGUubmFtZSA9PT0gXCJJbmZpbml0eVwiKSB7XG4gICAgcmV0dXJuIHQubnVtYmVyVHlwZUFubm90YXRpb24oKTtcbiAgfSBlbHNlIGlmIChub2RlLm5hbWUgPT09IFwiYXJndW1lbnRzXCIpIHtcbiAgICAvLyB0b2RvXG4gIH1cbn07XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0VHlwZUFubm90YXRpb25CaW5kaW5nQ29uc3RhbnRWaW9sYXRpb25zKHBhdGgsIG5hbWUpIHtcbiAgdmFyIGJpbmRpbmcgPSBwYXRoLnNjb3BlLmdldEJpbmRpbmcobmFtZSk7XG5cbiAgdmFyIHR5cGVzID0gW107XG4gIHBhdGgudHlwZUFubm90YXRpb24gPSB0LnVuaW9uVHlwZUFubm90YXRpb24odHlwZXMpO1xuXG4gIHZhciBmdW5jdGlvbkNvbnN0YW50VmlvbGF0aW9ucyA9IFtdO1xuICB2YXIgY29uc3RhbnRWaW9sYXRpb25zID0gZ2V0Q29uc3RhbnRWaW9sYXRpb25zQmVmb3JlKGJpbmRpbmcsIHBhdGgsIGZ1bmN0aW9uQ29uc3RhbnRWaW9sYXRpb25zKTtcblxuICB2YXIgdGVzdFR5cGUgPSBnZXRDb25kaXRpb25hbEFubm90YXRpb24ocGF0aCwgbmFtZSk7XG4gIGlmICh0ZXN0VHlwZSkge1xuICAgIHZhciB0ZXN0Q29uc3RhbnRWaW9sYXRpb25zID0gZ2V0Q29uc3RhbnRWaW9sYXRpb25zQmVmb3JlKGJpbmRpbmcsIHRlc3RUeXBlLmlmU3RhdGVtZW50KTtcblxuICAgIC8vIHJlbW92ZSBjb25zdGFudCB2aW9sYXRpb25zIG9ic2VydmVkIGJlZm9yZSB0aGUgSWZTdGF0ZW1lbnRcbiAgICBjb25zdGFudFZpb2xhdGlvbnMgPSBjb25zdGFudFZpb2xhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICByZXR1cm4gdGVzdENvbnN0YW50VmlvbGF0aW9ucy5pbmRleE9mKHBhdGgpIDwgMDtcbiAgICB9KTtcblxuICAgIC8vIGNsZWFyIGN1cnJlbnQgdHlwZXMgYW5kIGFkZCBpbiBvYnNlcnZlZCB0ZXN0IHR5cGVcbiAgICB0eXBlcy5wdXNoKHRlc3RUeXBlLnR5cGVBbm5vdGF0aW9uKTtcbiAgfVxuXG4gIGlmIChjb25zdGFudFZpb2xhdGlvbnMubGVuZ3RoKSB7XG4gICAgLy8gcGljayBvbmUgY29uc3RhbnQgZnJvbSBlYWNoIHNjb3BlIHdoaWNoIHdpbGwgcmVwcmVzZW50IHRoZSBsYXN0IHBvc3NpYmxlXG4gICAgLy8gY29udHJvbCBmbG93IHBhdGggdGhhdCBpdCBjb3VsZCd2ZSB0YWtlbi9iZWVuXG4gICAgdmFyIHJhd0NvbnN0YW50VmlvbGF0aW9ucyA9IGNvbnN0YW50VmlvbGF0aW9ucy5yZXZlcnNlKCk7XG4gICAgdmFyIHZpc2l0ZWRTY29wZXMgPSBbXTtcbiAgICBjb25zdGFudFZpb2xhdGlvbnMgPSBbXTtcbiAgICB2YXIgX2FyciA9IHJhd0NvbnN0YW50VmlvbGF0aW9ucztcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciB2aW9sYXRpb24gPSBfYXJyW19pXTtcbiAgICAgIHZhciB2aW9sYXRpb25TY29wZSA9IHZpb2xhdGlvbi5zY29wZTtcbiAgICAgIGlmICh2aXNpdGVkU2NvcGVzLmluZGV4T2YodmlvbGF0aW9uU2NvcGUpID49IDApIGNvbnRpbnVlO1xuXG4gICAgICB2aXNpdGVkU2NvcGVzLnB1c2godmlvbGF0aW9uU2NvcGUpO1xuICAgICAgY29uc3RhbnRWaW9sYXRpb25zLnB1c2godmlvbGF0aW9uKTtcblxuICAgICAgaWYgKHZpb2xhdGlvblNjb3BlID09PSBwYXRoLnNjb3BlKSB7XG4gICAgICAgIGNvbnN0YW50VmlvbGF0aW9ucyA9IFt2aW9sYXRpb25dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgYmFjayBvbiBmdW5jdGlvbiBjb25zdGFudCB2aW9sYXRpb25zIHNpbmNlIHdlIGNhbid0IHRyYWNrIGNhbGxzXG4gICAgY29uc3RhbnRWaW9sYXRpb25zID0gY29uc3RhbnRWaW9sYXRpb25zLmNvbmNhdChmdW5jdGlvbkNvbnN0YW50VmlvbGF0aW9ucyk7XG5cbiAgICAvLyBwdXNoIG9uIGluZmVycmVkIHR5cGVzIG9mIHZpb2xhdGVkIHBhdGhzXG4gICAgdmFyIF9hcnIyID0gY29uc3RhbnRWaW9sYXRpb25zO1xuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciB2aW9sYXRpb24gPSBfYXJyMltfaTJdO1xuICAgICAgdHlwZXMucHVzaCh2aW9sYXRpb24uZ2V0VHlwZUFubm90YXRpb24oKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVzLmxlbmd0aCkge1xuICAgIHJldHVybiB0LmNyZWF0ZVVuaW9uVHlwZUFubm90YXRpb24odHlwZXMpO1xuICB9XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q29uc3RhbnRWaW9sYXRpb25zQmVmb3JlKGJpbmRpbmcsIHBhdGgsIGZ1bmN0aW9ucykge1xuICB2YXIgdmlvbGF0aW9ucyA9IGJpbmRpbmcuY29uc3RhbnRWaW9sYXRpb25zLnNsaWNlKCk7XG4gIHZpb2xhdGlvbnMudW5zaGlmdChiaW5kaW5nLnBhdGgpO1xuICByZXR1cm4gdmlvbGF0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHZpb2xhdGlvbikge1xuICAgIHZpb2xhdGlvbiA9IHZpb2xhdGlvbi5yZXNvbHZlKCk7XG4gICAgdmFyIHN0YXR1cyA9IHZpb2xhdGlvbi5fZ3Vlc3NFeGVjdXRpb25TdGF0dXNSZWxhdGl2ZVRvKHBhdGgpO1xuICAgIGlmIChmdW5jdGlvbnMgJiYgc3RhdHVzID09PSBcImZ1bmN0aW9uXCIpIGZ1bmN0aW9ucy5wdXNoKHZpb2xhdGlvbik7XG4gICAgcmV0dXJuIHN0YXR1cyA9PT0gXCJiZWZvcmVcIjtcbiAgfSk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gaW5mZXJBbm5vdGF0aW9uRnJvbUJpbmFyeUV4cHJlc3Npb24obmFtZSwgcGF0aCkge1xuICB2YXIgb3BlcmF0b3IgPSBwYXRoLm5vZGUub3BlcmF0b3I7XG5cbiAgdmFyIHJpZ2h0ID0gcGF0aC5nZXQoXCJyaWdodFwiKS5yZXNvbHZlKCk7XG4gIHZhciBsZWZ0ID0gcGF0aC5nZXQoXCJsZWZ0XCIpLnJlc29sdmUoKTtcblxuICB2YXIgdGFyZ2V0O1xuICBpZiAobGVmdC5pc0lkZW50aWZpZXIoeyBuYW1lOiBuYW1lIH0pKSB7XG4gICAgdGFyZ2V0ID0gcmlnaHQ7XG4gIH0gZWxzZSBpZiAocmlnaHQuaXNJZGVudGlmaWVyKHsgbmFtZTogbmFtZSB9KSkge1xuICAgIHRhcmdldCA9IGxlZnQ7XG4gIH1cbiAgaWYgKHRhcmdldCkge1xuICAgIGlmIChvcGVyYXRvciA9PT0gXCI9PT1cIikge1xuICAgICAgcmV0dXJuIHRhcmdldC5nZXRUeXBlQW5ub3RhdGlvbigpO1xuICAgIH0gZWxzZSBpZiAodC5CT09MRUFOX05VTUJFUl9CSU5BUllfT1BFUkFUT1JTLmluZGV4T2Yob3BlcmF0b3IpID49IDApIHtcbiAgICAgIHJldHVybiB0Lm51bWJlclR5cGVBbm5vdGF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wZXJhdG9yICE9PSBcIj09PVwiKSByZXR1cm47XG4gIH1cblxuICAvL1xuICB2YXIgdHlwZW9mUGF0aDtcbiAgdmFyIHR5cGVQYXRoO1xuICBpZiAobGVmdC5pc1VuYXJ5RXhwcmVzc2lvbih7IG9wZXJhdG9yOiBcInR5cGVvZlwiIH0pKSB7XG4gICAgdHlwZW9mUGF0aCA9IGxlZnQ7XG4gICAgdHlwZVBhdGggPSByaWdodDtcbiAgfSBlbHNlIGlmIChyaWdodC5pc1VuYXJ5RXhwcmVzc2lvbih7IG9wZXJhdG9yOiBcInR5cGVvZlwiIH0pKSB7XG4gICAgdHlwZW9mUGF0aCA9IHJpZ2h0O1xuICAgIHR5cGVQYXRoID0gbGVmdDtcbiAgfVxuICBpZiAoIXR5cGVQYXRoICYmICF0eXBlb2ZQYXRoKSByZXR1cm47XG5cbiAgLy8gZW5zdXJlIHRoYXQgdGhlIHR5cGUgcGF0aCBpcyBhIExpdGVyYWxcbiAgdHlwZVBhdGggPSB0eXBlUGF0aC5yZXNvbHZlKCk7XG4gIGlmICghdHlwZVBhdGguaXNMaXRlcmFsKCkpIHJldHVybjtcblxuICAvLyBhbmQgdGhhdCBpdCdzIGEgc3RyaW5nIHNvIHdlIGNhbiBpbmZlciBpdFxuICB2YXIgdHlwZVZhbHVlID0gdHlwZVBhdGgubm9kZS52YWx1ZTtcbiAgaWYgKHR5cGVvZiB0eXBlVmFsdWUgIT09IFwic3RyaW5nXCIpIHJldHVybjtcblxuICAvLyBhbmQgdGhhdCB0aGUgYXJndW1lbnQgb2YgdGhlIHR5cGVvZiBwYXRoIHJlZmVyZW5jZXMgdXMhXG4gIGlmICghdHlwZW9mUGF0aC5nZXQoXCJhcmd1bWVudFwiKS5pc0lkZW50aWZpZXIoeyBuYW1lOiBuYW1lIH0pKSByZXR1cm47XG5cbiAgLy8gdHVybiB0eXBlIHZhbHVlIGludG8gYSB0eXBlIGFubm90YXRpb25cbiAgcmV0dXJuIHQuY3JlYXRlVHlwZUFubm90YXRpb25CYXNlZE9uVHlwZW9mKHR5cGVQYXRoLm5vZGUudmFsdWUpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGdldFBhcmVudENvbmRpdGlvbmFsUGF0aChwYXRoKSB7XG4gIHZhciBwYXJlbnRQYXRoO1xuICB3aGlsZSAocGFyZW50UGF0aCA9IHBhdGgucGFyZW50UGF0aCkge1xuICAgIGlmIChwYXJlbnRQYXRoLmlzSWZTdGF0ZW1lbnQoKSB8fCBwYXJlbnRQYXRoLmlzQ29uZGl0aW9uYWxFeHByZXNzaW9uKCkpIHtcbiAgICAgIGlmIChwYXRoLmtleSA9PT0gXCJ0ZXN0XCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudFBhdGg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBwYXJlbnRQYXRoO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGdldENvbmRpdGlvbmFsQW5ub3RhdGlvbihwYXRoLCBuYW1lKSB7XG4gIHZhciBpZlN0YXRlbWVudCA9IGdldFBhcmVudENvbmRpdGlvbmFsUGF0aChwYXRoKTtcbiAgaWYgKCFpZlN0YXRlbWVudCkgcmV0dXJuO1xuXG4gIHZhciB0ZXN0ID0gaWZTdGF0ZW1lbnQuZ2V0KFwidGVzdFwiKTtcbiAgdmFyIHBhdGhzID0gW3Rlc3RdO1xuICB2YXIgdHlwZXMgPSBbXTtcblxuICBkbyB7XG4gICAgdmFyIF9wYXRoID0gcGF0aHMuc2hpZnQoKS5yZXNvbHZlKCk7XG5cbiAgICBpZiAoX3BhdGguaXNMb2dpY2FsRXhwcmVzc2lvbigpKSB7XG4gICAgICBwYXRocy5wdXNoKF9wYXRoLmdldChcImxlZnRcIikpO1xuICAgICAgcGF0aHMucHVzaChfcGF0aC5nZXQoXCJyaWdodFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKF9wYXRoLmlzQmluYXJ5RXhwcmVzc2lvbigpKSB7XG4gICAgICB2YXIgdHlwZSA9IGluZmVyQW5ub3RhdGlvbkZyb21CaW5hcnlFeHByZXNzaW9uKG5hbWUsIF9wYXRoKTtcbiAgICAgIGlmICh0eXBlKSB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSB3aGlsZSAocGF0aHMubGVuZ3RoKTtcblxuICBpZiAodHlwZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGVBbm5vdGF0aW9uOiB0LmNyZWF0ZVVuaW9uVHlwZUFubm90YXRpb24odHlwZXMpLFxuICAgICAgaWZTdGF0ZW1lbnQ6IGlmU3RhdGVtZW50XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0Q29uZGl0aW9uYWxBbm5vdGF0aW9uKGlmU3RhdGVtZW50LCBuYW1lKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
