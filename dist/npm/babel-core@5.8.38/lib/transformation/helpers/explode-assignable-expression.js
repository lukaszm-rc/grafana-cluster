/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, getObjRef, getPropRef;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../types");
      t = _interopRequireWildcard(_types);

      getObjRef = function getObjRef(node, nodes, file, scope) {
        var ref;
        if (t.isIdentifier(node)) {
          if (scope.hasBinding(node.name)) {
            // this variable is declared in scope so we can be 100% sure
            // that evaluating it multiple times wont trigger a getter
            // or something else
            return node;
          } else {
            // could possibly trigger a getter so we need to only evaluate
            // it once
            ref = node;
          }
        } else if (t.isMemberExpression(node)) {
          ref = node.object;

          if (t.isIdentifier(ref) && scope.hasGlobal(ref.name)) {
            // the object reference that we need to save is locally declared
            // so as per the previous comment we can be 100% sure evaluating
            // it multiple times will be safe
            return ref;
          }
        } else {
          throw new Error("We can't explode this node type " + node.type);
        }

        var temp = scope.generateUidIdentifierBasedOnNode(ref);
        nodes.push(t.variableDeclaration("var", [t.variableDeclarator(temp, ref)]));
        return temp;
      };

      getPropRef = function getPropRef(node, nodes, file, scope) {
        var prop = node.property;
        var key = t.toComputedKey(node, prop);
        if (t.isLiteral(key)) return key;

        var temp = scope.generateUidIdentifierBasedOnNode(prop);
        nodes.push(t.variableDeclaration("var", [t.variableDeclarator(temp, prop)]));
        return temp;
      };

      /**
       * [Please add a description.]
       */

      exports["default"] = function (node, nodes, file, scope, allowedSingleIdent) {
        var obj;
        if (t.isIdentifier(node) && allowedSingleIdent) {
          obj = node;
        } else {
          obj = getObjRef(node, nodes, file, scope);
        }

        var ref, uid;

        if (t.isIdentifier(node)) {
          ref = node;
          uid = obj;
        } else {
          var prop = getPropRef(node, nodes, file, scope);
          var computed = node.computed || t.isLiteral(prop);
          uid = ref = t.memberExpression(obj, prop, computed);
        }

        return {
          uid: uid,
          ref: ref
        };
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9leHBsb2RlLWFzc2lnbmFibGUtZXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGFBQVI7QUFFVCxVQUFJLHdCQUF3QixNQUF4Qjs7QUFNSixrQkFBWSxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUIsS0FBekIsRUFBZ0MsSUFBaEMsRUFBc0MsS0FBdEMsRUFBNkM7QUFDM0QsWUFBSSxHQUFKLENBRDJEO0FBRTNELFlBQUksRUFBRSxZQUFGLENBQWUsSUFBZixDQUFKLEVBQTBCO0FBQ3hCLGNBQUksTUFBTSxVQUFOLENBQWlCLEtBQUssSUFBTCxDQUFyQixFQUFpQzs7OztBQUkvQixtQkFBTyxJQUFQLENBSitCO1dBQWpDLE1BS087OztBQUdMLGtCQUFNLElBQU4sQ0FISztXQUxQO1NBREYsTUFXTyxJQUFJLEVBQUUsa0JBQUYsQ0FBcUIsSUFBckIsQ0FBSixFQUFnQztBQUNyQyxnQkFBTSxLQUFLLE1BQUwsQ0FEK0I7O0FBR3JDLGNBQUksRUFBRSxZQUFGLENBQWUsR0FBZixLQUF1QixNQUFNLFNBQU4sQ0FBZ0IsSUFBSSxJQUFKLENBQXZDLEVBQWtEOzs7O0FBSXBELG1CQUFPLEdBQVAsQ0FKb0Q7V0FBdEQ7U0FISyxNQVNBO0FBQ0wsZ0JBQU0sSUFBSSxLQUFKLENBQVUscUNBQXFDLEtBQUssSUFBTCxDQUFyRCxDQURLO1NBVEE7O0FBYVAsWUFBSSxPQUFPLE1BQU0sZ0NBQU4sQ0FBdUMsR0FBdkMsQ0FBUCxDQTFCdUQ7QUEyQjNELGNBQU0sSUFBTixDQUFXLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBQyxFQUFFLGtCQUFGLENBQXFCLElBQXJCLEVBQTJCLEdBQTNCLENBQUQsQ0FBN0IsQ0FBWCxFQTNCMkQ7QUE0QjNELGVBQU8sSUFBUCxDQTVCMkQ7T0FBN0M7O0FBbUNaLG1CQUFhLFNBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFpQyxJQUFqQyxFQUF1QyxLQUF2QyxFQUE4QztBQUM3RCxZQUFJLE9BQU8sS0FBSyxRQUFMLENBRGtEO0FBRTdELFlBQUksTUFBTSxFQUFFLGFBQUYsQ0FBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsQ0FBTixDQUZ5RDtBQUc3RCxZQUFJLEVBQUUsU0FBRixDQUFZLEdBQVosQ0FBSixFQUFzQixPQUFPLEdBQVAsQ0FBdEI7O0FBRUEsWUFBSSxPQUFPLE1BQU0sZ0NBQU4sQ0FBdUMsSUFBdkMsQ0FBUCxDQUx5RDtBQU03RCxjQUFNLElBQU4sQ0FBVyxFQUFFLG1CQUFGLENBQXNCLEtBQXRCLEVBQTZCLENBQUMsRUFBRSxrQkFBRixDQUFxQixJQUFyQixFQUEyQixJQUEzQixDQUFELENBQTdCLENBQVgsRUFONkQ7QUFPN0QsZUFBTyxJQUFQLENBUDZEO09BQTlDOzs7Ozs7QUFjakIsY0FBUSxTQUFSLElBQXFCLFVBQVUsSUFBVixFQUFnQixLQUFoQixFQUF1QixJQUF2QixFQUE2QixLQUE3QixFQUFvQyxrQkFBcEMsRUFBd0Q7QUFDM0UsWUFBSSxHQUFKLENBRDJFO0FBRTNFLFlBQUksRUFBRSxZQUFGLENBQWUsSUFBZixLQUF3QixrQkFBeEIsRUFBNEM7QUFDOUMsZ0JBQU0sSUFBTixDQUQ4QztTQUFoRCxNQUVPO0FBQ0wsZ0JBQU0sVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCLElBQXZCLEVBQTZCLEtBQTdCLENBQU4sQ0FESztTQUZQOztBQU1BLFlBQUksR0FBSixFQUFTLEdBQVQsQ0FSMkU7O0FBVTNFLFlBQUksRUFBRSxZQUFGLENBQWUsSUFBZixDQUFKLEVBQTBCO0FBQ3hCLGdCQUFNLElBQU4sQ0FEd0I7QUFFeEIsZ0JBQU0sR0FBTixDQUZ3QjtTQUExQixNQUdPO0FBQ0wsY0FBSSxPQUFPLFdBQVcsSUFBWCxFQUFpQixLQUFqQixFQUF3QixJQUF4QixFQUE4QixLQUE5QixDQUFQLENBREM7QUFFTCxjQUFJLFdBQVcsS0FBSyxRQUFMLElBQWlCLEVBQUUsU0FBRixDQUFZLElBQVosQ0FBakIsQ0FGVjtBQUdMLGdCQUFNLE1BQU0sRUFBRSxnQkFBRixDQUFtQixHQUFuQixFQUF3QixJQUF4QixFQUE4QixRQUE5QixDQUFOLENBSEQ7U0FIUDs7QUFTQSxlQUFPO0FBQ0wsZUFBSyxHQUFMO0FBQ0EsZUFBSyxHQUFMO1NBRkYsQ0FuQjJFO09BQXhEOztBQXlCckIsYUFBTyxPQUFQLEdBQWlCLFFBQVEsU0FBUixDQUFqQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2hlbHBlcnMvZXhwbG9kZS1hc3NpZ25hYmxlLWV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgZ2V0T2JqUmVmID0gZnVuY3Rpb24gZ2V0T2JqUmVmKG5vZGUsIG5vZGVzLCBmaWxlLCBzY29wZSkge1xuICB2YXIgcmVmO1xuICBpZiAodC5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICBpZiAoc2NvcGUuaGFzQmluZGluZyhub2RlLm5hbWUpKSB7XG4gICAgICAvLyB0aGlzIHZhcmlhYmxlIGlzIGRlY2xhcmVkIGluIHNjb3BlIHNvIHdlIGNhbiBiZSAxMDAlIHN1cmVcbiAgICAgIC8vIHRoYXQgZXZhbHVhdGluZyBpdCBtdWx0aXBsZSB0aW1lcyB3b250IHRyaWdnZXIgYSBnZXR0ZXJcbiAgICAgIC8vIG9yIHNvbWV0aGluZyBlbHNlXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY291bGQgcG9zc2libHkgdHJpZ2dlciBhIGdldHRlciBzbyB3ZSBuZWVkIHRvIG9ubHkgZXZhbHVhdGVcbiAgICAgIC8vIGl0IG9uY2VcbiAgICAgIHJlZiA9IG5vZGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKHQuaXNNZW1iZXJFeHByZXNzaW9uKG5vZGUpKSB7XG4gICAgcmVmID0gbm9kZS5vYmplY3Q7XG5cbiAgICBpZiAodC5pc0lkZW50aWZpZXIocmVmKSAmJiBzY29wZS5oYXNHbG9iYWwocmVmLm5hbWUpKSB7XG4gICAgICAvLyB0aGUgb2JqZWN0IHJlZmVyZW5jZSB0aGF0IHdlIG5lZWQgdG8gc2F2ZSBpcyBsb2NhbGx5IGRlY2xhcmVkXG4gICAgICAvLyBzbyBhcyBwZXIgdGhlIHByZXZpb3VzIGNvbW1lbnQgd2UgY2FuIGJlIDEwMCUgc3VyZSBldmFsdWF0aW5nXG4gICAgICAvLyBpdCBtdWx0aXBsZSB0aW1lcyB3aWxsIGJlIHNhZmVcbiAgICAgIHJldHVybiByZWY7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIldlIGNhbid0IGV4cGxvZGUgdGhpcyBub2RlIHR5cGUgXCIgKyBub2RlLnR5cGUpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBzY29wZS5nZW5lcmF0ZVVpZElkZW50aWZpZXJCYXNlZE9uTm9kZShyZWYpO1xuICBub2Rlcy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodGVtcCwgcmVmKV0pKTtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciBnZXRQcm9wUmVmID0gZnVuY3Rpb24gZ2V0UHJvcFJlZihub2RlLCBub2RlcywgZmlsZSwgc2NvcGUpIHtcbiAgdmFyIHByb3AgPSBub2RlLnByb3BlcnR5O1xuICB2YXIga2V5ID0gdC50b0NvbXB1dGVkS2V5KG5vZGUsIHByb3ApO1xuICBpZiAodC5pc0xpdGVyYWwoa2V5KSkgcmV0dXJuIGtleTtcblxuICB2YXIgdGVtcCA9IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllckJhc2VkT25Ob2RlKHByb3ApO1xuICBub2Rlcy5wdXNoKHQudmFyaWFibGVEZWNsYXJhdGlvbihcInZhclwiLCBbdC52YXJpYWJsZURlY2xhcmF0b3IodGVtcCwgcHJvcCldKSk7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChub2RlLCBub2RlcywgZmlsZSwgc2NvcGUsIGFsbG93ZWRTaW5nbGVJZGVudCkge1xuICB2YXIgb2JqO1xuICBpZiAodC5pc0lkZW50aWZpZXIobm9kZSkgJiYgYWxsb3dlZFNpbmdsZUlkZW50KSB7XG4gICAgb2JqID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBvYmogPSBnZXRPYmpSZWYobm9kZSwgbm9kZXMsIGZpbGUsIHNjb3BlKTtcbiAgfVxuXG4gIHZhciByZWYsIHVpZDtcblxuICBpZiAodC5pc0lkZW50aWZpZXIobm9kZSkpIHtcbiAgICByZWYgPSBub2RlO1xuICAgIHVpZCA9IG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJvcCA9IGdldFByb3BSZWYobm9kZSwgbm9kZXMsIGZpbGUsIHNjb3BlKTtcbiAgICB2YXIgY29tcHV0ZWQgPSBub2RlLmNvbXB1dGVkIHx8IHQuaXNMaXRlcmFsKHByb3ApO1xuICAgIHVpZCA9IHJlZiA9IHQubWVtYmVyRXhwcmVzc2lvbihvYmosIHByb3AsIGNvbXB1dGVkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdWlkOiB1aWQsXG4gICAgcmVmOiByZWZcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
