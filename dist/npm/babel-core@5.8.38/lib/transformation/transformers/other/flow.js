/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, FLOW_DIRECTIVE, visitor;

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
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-trailing"
      };


      exports.metadata = metadata;
      FLOW_DIRECTIVE = "@flow";
      visitor = {

        /**
         * [Please add a description.]
         */

        Program: function Program(node, parent, scope, file) {
          var _arr = file.ast.comments;

          for (var _i = 0; _i < _arr.length; _i++) {
            var comment = _arr[_i];
            if (comment.value.indexOf(FLOW_DIRECTIVE) >= 0) {
              // remove flow directive
              comment.value = comment.value.replace(FLOW_DIRECTIVE, "");

              // remove the comment completely if it only consists of whitespace and/or stars
              if (!comment.value.replace(/\*/g, "").trim()) comment._displayed = true;
            }
          }
        },

        /**
         * [Please add a description.]
         */

        Flow: function Flow() {
          this.dangerouslyRemove();
        },

        /**
         * [Please add a description.]
         */

        ClassProperty: function ClassProperty(node) {
          node.typeAnnotation = null;
          if (!node.value) this.dangerouslyRemove();
        },

        /**
         * [Please add a description.]
         */

        Class: function Class(node) {
          node["implements"] = null;
        },

        /**
         * [Please add a description.]
         */

        Function: function Function(node) {
          for (var i = 0; i < node.params.length; i++) {
            var param = node.params[i];
            param.optional = false;
          }
        },

        /**
         * [Please add a description.]
         */

        TypeCastExpression: function TypeCastExpression(node) {
          do {
            node = node.expression;
          } while (t.isTypeCastExpression(node));
          return node;
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL2Zsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosaUJBQVc7QUFDYixlQUFPLGtCQUFQOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0ksdUJBQWlCO0FBTWpCLGdCQUFVOzs7Ozs7QUFNWixpQkFBUyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsRUFBK0IsS0FBL0IsRUFBc0MsSUFBdEMsRUFBNEM7QUFDbkQsY0FBSSxPQUFPLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FEd0M7O0FBR25ELGVBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLEtBQUssTUFBTCxFQUFhLElBQW5DLEVBQXlDO0FBQ3ZDLGdCQUFJLFVBQVUsS0FBSyxFQUFMLENBQVYsQ0FEbUM7QUFFdkMsZ0JBQUksUUFBUSxLQUFSLENBQWMsT0FBZCxDQUFzQixjQUF0QixLQUF5QyxDQUF6QyxFQUE0Qzs7QUFFOUMsc0JBQVEsS0FBUixHQUFnQixRQUFRLEtBQVIsQ0FBYyxPQUFkLENBQXNCLGNBQXRCLEVBQXNDLEVBQXRDLENBQWhCOzs7QUFGOEMsa0JBSzFDLENBQUMsUUFBUSxLQUFSLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE2QixFQUE3QixFQUFpQyxJQUFqQyxFQUFELEVBQTBDLFFBQVEsVUFBUixHQUFxQixJQUFyQixDQUE5QzthQUxGO1dBRkY7U0FITzs7Ozs7O0FBbUJULGNBQU0sU0FBUyxJQUFULEdBQWdCO0FBQ3BCLGVBQUssaUJBQUwsR0FEb0I7U0FBaEI7Ozs7OztBQVFOLHVCQUFlLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUE2QjtBQUMxQyxlQUFLLGNBQUwsR0FBc0IsSUFBdEIsQ0FEMEM7QUFFMUMsY0FBSSxDQUFDLEtBQUssS0FBTCxFQUFZLEtBQUssaUJBQUwsR0FBakI7U0FGYTs7Ozs7O0FBU2YsZUFBTyxTQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCO0FBQzFCLGVBQUssWUFBTCxJQUFxQixJQUFyQixDQUQwQjtTQUFyQjs7Ozs7O0FBUVAsa0JBQVUsU0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCO0FBQ2hDLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssTUFBTCxDQUFZLE1BQVosRUFBb0IsR0FBeEMsRUFBNkM7QUFDM0MsZ0JBQUksUUFBUSxLQUFLLE1BQUwsQ0FBWSxDQUFaLENBQVIsQ0FEdUM7QUFFM0Msa0JBQU0sUUFBTixHQUFpQixLQUFqQixDQUYyQztXQUE3QztTQURROzs7Ozs7QUFXViw0QkFBb0IsU0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQztBQUNwRCxhQUFHO0FBQ0QsbUJBQU8sS0FBSyxVQUFMLENBRE47V0FBSCxRQUVTLEVBQUUsb0JBQUYsQ0FBdUIsSUFBdkIsQ0FGVCxFQURvRDtBQUlwRCxpQkFBTyxJQUFQLENBSm9EO1NBQWxDOzs7QUFPdEIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL290aGVyL2Zsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwiZm9ybWF0IGNqc1wiO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBncm91cDogXCJidWlsdGluLXRyYWlsaW5nXCJcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbnZhciBGTE9XX0RJUkVDVElWRSA9IFwiQGZsb3dcIjtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFByb2dyYW06IGZ1bmN0aW9uIFByb2dyYW0obm9kZSwgcGFyZW50LCBzY29wZSwgZmlsZSkge1xuICAgIHZhciBfYXJyID0gZmlsZS5hc3QuY29tbWVudHM7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBjb21tZW50ID0gX2FycltfaV07XG4gICAgICBpZiAoY29tbWVudC52YWx1ZS5pbmRleE9mKEZMT1dfRElSRUNUSVZFKSA+PSAwKSB7XG4gICAgICAgIC8vIHJlbW92ZSBmbG93IGRpcmVjdGl2ZVxuICAgICAgICBjb21tZW50LnZhbHVlID0gY29tbWVudC52YWx1ZS5yZXBsYWNlKEZMT1dfRElSRUNUSVZFLCBcIlwiKTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGNvbW1lbnQgY29tcGxldGVseSBpZiBpdCBvbmx5IGNvbnNpc3RzIG9mIHdoaXRlc3BhY2UgYW5kL29yIHN0YXJzXG4gICAgICAgIGlmICghY29tbWVudC52YWx1ZS5yZXBsYWNlKC9cXCovZywgXCJcIikudHJpbSgpKSBjb21tZW50Ll9kaXNwbGF5ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZsb3c6IGZ1bmN0aW9uIEZsb3coKSB7XG4gICAgdGhpcy5kYW5nZXJvdXNseVJlbW92ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgQ2xhc3NQcm9wZXJ0eTogZnVuY3Rpb24gQ2xhc3NQcm9wZXJ0eShub2RlKSB7XG4gICAgbm9kZS50eXBlQW5ub3RhdGlvbiA9IG51bGw7XG4gICAgaWYgKCFub2RlLnZhbHVlKSB0aGlzLmRhbmdlcm91c2x5UmVtb3ZlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBDbGFzczogZnVuY3Rpb24gQ2xhc3Mobm9kZSkge1xuICAgIG5vZGVbXCJpbXBsZW1lbnRzXCJdID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEZ1bmN0aW9uOiBmdW5jdGlvbiBGdW5jdGlvbihub2RlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLnBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcmFtID0gbm9kZS5wYXJhbXNbaV07XG4gICAgICBwYXJhbS5vcHRpb25hbCA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIFR5cGVDYXN0RXhwcmVzc2lvbjogZnVuY3Rpb24gVHlwZUNhc3RFeHByZXNzaW9uKG5vZGUpIHtcbiAgICBkbyB7XG4gICAgICBub2RlID0gbm9kZS5leHByZXNzaW9uO1xuICAgIH0gd2hpbGUgKHQuaXNUeXBlQ2FzdEV4cHJlc3Npb24obm9kZSkpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
