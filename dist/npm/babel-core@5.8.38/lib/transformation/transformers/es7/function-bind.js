/* */
"format cjs";
// https://github.com/zenparsing/es-function-bind

"use strict";

System.register([], function (_export, _context) {
  var _types, t, metadata, visitor;

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

  function getTempId(scope) {
    var id = scope.path.getData("functionBind");
    if (id) return id;

    id = scope.generateDeclaredUidIdentifier("context");
    return scope.path.setData("functionBind", id);
  }

  /**
   * [Please add a description.]
   */

  function getStaticContext(bind, scope) {
    var object = bind.object || bind.callee.object;
    return scope.isStatic(object) && object;
  }

  /**
   * [Please add a description.]
   */

  function inferBindContext(bind, scope) {
    var staticContext = getStaticContext(bind, scope);
    if (staticContext) return staticContext;

    var tempId = getTempId(scope);
    if (bind.object) {
      bind.callee = t.sequenceExpression([t.assignmentExpression("=", tempId, bind.object), bind.callee]);
    } else {
      bind.callee.object = t.assignmentExpression("=", tempId, bind.callee.object);
    }
    return tempId;
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        optional: true,
        stage: 0
      };


      exports.metadata = metadata;visitor = {

        /**
         * [Please add a description.]
         */

        CallExpression: function CallExpression(node, parent, scope) {
          var bind = node.callee;
          if (!t.isBindExpression(bind)) return;

          var context = inferBindContext(bind, scope);
          node.callee = t.memberExpression(bind.callee, t.identifier("call"));
          node.arguments.unshift(context);
        },

        /**
         * [Please add a description.]
         */

        BindExpression: function BindExpression(node, parent, scope) {
          var context = inferBindContext(node, scope);
          return t.callExpression(t.memberExpression(node.callee, t.identifier("bind")), [context]);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9mdW5jdGlvbi1iaW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7O0FBR0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7Ozs7QUFnQkEsV0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQUksS0FBSyxNQUFNLElBQU4sQ0FBVyxPQUFYLENBQW1CLGNBQW5CLENBQUwsQ0FEb0I7QUFFeEIsUUFBSSxFQUFKLEVBQVEsT0FBTyxFQUFQLENBQVI7O0FBRUEsU0FBSyxNQUFNLDZCQUFOLENBQW9DLFNBQXBDLENBQUwsQ0FKd0I7QUFLeEIsV0FBTyxNQUFNLElBQU4sQ0FBVyxPQUFYLENBQW1CLGNBQW5CLEVBQW1DLEVBQW5DLENBQVAsQ0FMd0I7R0FBMUI7Ozs7OztBQVlBLFdBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0MsS0FBaEMsRUFBdUM7QUFDckMsUUFBSSxTQUFTLEtBQUssTUFBTCxJQUFlLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FEUztBQUVyQyxXQUFPLE1BQU0sUUFBTixDQUFlLE1BQWYsS0FBMEIsTUFBMUIsQ0FGOEI7R0FBdkM7Ozs7OztBQVNBLFdBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0MsS0FBaEMsRUFBdUM7QUFDckMsUUFBSSxnQkFBZ0IsaUJBQWlCLElBQWpCLEVBQXVCLEtBQXZCLENBQWhCLENBRGlDO0FBRXJDLFFBQUksYUFBSixFQUFtQixPQUFPLGFBQVAsQ0FBbkI7O0FBRUEsUUFBSSxTQUFTLFVBQVUsS0FBVixDQUFULENBSmlDO0FBS3JDLFFBQUksS0FBSyxNQUFMLEVBQWE7QUFDZixXQUFLLE1BQUwsR0FBYyxFQUFFLGtCQUFGLENBQXFCLENBQUMsRUFBRSxvQkFBRixDQUF1QixHQUF2QixFQUE0QixNQUE1QixFQUFvQyxLQUFLLE1BQUwsQ0FBckMsRUFBbUQsS0FBSyxNQUFMLENBQXhFLENBQWQsQ0FEZTtLQUFqQixNQUVPO0FBQ0wsV0FBSyxNQUFMLENBQVksTUFBWixHQUFxQixFQUFFLG9CQUFGLENBQXVCLEdBQXZCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBekQsQ0FESztLQUZQO0FBS0EsV0FBTyxNQUFQLENBVnFDO0dBQXZDOzs7Ozs7Ozs7QUF4Q0EsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGtCQUFVLElBQVY7QUFDQSxlQUFPLENBQVA7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkIsQ0EyQ0ksVUFBVTs7Ozs7O0FBTVosd0JBQWdCLFNBQVMsY0FBVCxDQUF3QixJQUF4QixFQUE4QixNQUE5QixFQUFzQyxLQUF0QyxFQUE2QztBQUMzRCxjQUFJLE9BQU8sS0FBSyxNQUFMLENBRGdEO0FBRTNELGNBQUksQ0FBQyxFQUFFLGdCQUFGLENBQW1CLElBQW5CLENBQUQsRUFBMkIsT0FBL0I7O0FBRUEsY0FBSSxVQUFVLGlCQUFpQixJQUFqQixFQUF1QixLQUF2QixDQUFWLENBSnVEO0FBSzNELGVBQUssTUFBTCxHQUFjLEVBQUUsZ0JBQUYsQ0FBbUIsS0FBSyxNQUFMLEVBQWEsRUFBRSxVQUFGLENBQWEsTUFBYixDQUFoQyxDQUFkLENBTDJEO0FBTTNELGVBQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsT0FBdkIsRUFOMkQ7U0FBN0M7Ozs7OztBQWFoQix3QkFBZ0IsU0FBUyxjQUFULENBQXdCLElBQXhCLEVBQThCLE1BQTlCLEVBQXNDLEtBQXRDLEVBQTZDO0FBQzNELGNBQUksVUFBVSxpQkFBaUIsSUFBakIsRUFBdUIsS0FBdkIsQ0FBVixDQUR1RDtBQUUzRCxpQkFBTyxFQUFFLGNBQUYsQ0FBaUIsRUFBRSxnQkFBRixDQUFtQixLQUFLLE1BQUwsRUFBYSxFQUFFLFVBQUYsQ0FBYSxNQUFiLENBQWhDLENBQWpCLEVBQXdFLENBQUMsT0FBRCxDQUF4RSxDQUFQLENBRjJEO1NBQTdDOzs7QUFLbEIsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9mdW5jdGlvbi1iaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLWZ1bmN0aW9uLWJpbmRcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxudmFyIG1ldGFkYXRhID0ge1xuICBvcHRpb25hbDogdHJ1ZSxcbiAgc3RhZ2U6IDBcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gZ2V0VGVtcElkKHNjb3BlKSB7XG4gIHZhciBpZCA9IHNjb3BlLnBhdGguZ2V0RGF0YShcImZ1bmN0aW9uQmluZFwiKTtcbiAgaWYgKGlkKSByZXR1cm4gaWQ7XG5cbiAgaWQgPSBzY29wZS5nZW5lcmF0ZURlY2xhcmVkVWlkSWRlbnRpZmllcihcImNvbnRleHRcIik7XG4gIHJldHVybiBzY29wZS5wYXRoLnNldERhdGEoXCJmdW5jdGlvbkJpbmRcIiwgaWQpO1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGdldFN0YXRpY0NvbnRleHQoYmluZCwgc2NvcGUpIHtcbiAgdmFyIG9iamVjdCA9IGJpbmQub2JqZWN0IHx8IGJpbmQuY2FsbGVlLm9iamVjdDtcbiAgcmV0dXJuIHNjb3BlLmlzU3RhdGljKG9iamVjdCkgJiYgb2JqZWN0O1xufVxuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbmZ1bmN0aW9uIGluZmVyQmluZENvbnRleHQoYmluZCwgc2NvcGUpIHtcbiAgdmFyIHN0YXRpY0NvbnRleHQgPSBnZXRTdGF0aWNDb250ZXh0KGJpbmQsIHNjb3BlKTtcbiAgaWYgKHN0YXRpY0NvbnRleHQpIHJldHVybiBzdGF0aWNDb250ZXh0O1xuXG4gIHZhciB0ZW1wSWQgPSBnZXRUZW1wSWQoc2NvcGUpO1xuICBpZiAoYmluZC5vYmplY3QpIHtcbiAgICBiaW5kLmNhbGxlZSA9IHQuc2VxdWVuY2VFeHByZXNzaW9uKFt0LmFzc2lnbm1lbnRFeHByZXNzaW9uKFwiPVwiLCB0ZW1wSWQsIGJpbmQub2JqZWN0KSwgYmluZC5jYWxsZWVdKTtcbiAgfSBlbHNlIHtcbiAgICBiaW5kLmNhbGxlZS5vYmplY3QgPSB0LmFzc2lnbm1lbnRFeHByZXNzaW9uKFwiPVwiLCB0ZW1wSWQsIGJpbmQuY2FsbGVlLm9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHRlbXBJZDtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIENhbGxFeHByZXNzaW9uOiBmdW5jdGlvbiBDYWxsRXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlKSB7XG4gICAgdmFyIGJpbmQgPSBub2RlLmNhbGxlZTtcbiAgICBpZiAoIXQuaXNCaW5kRXhwcmVzc2lvbihiaW5kKSkgcmV0dXJuO1xuXG4gICAgdmFyIGNvbnRleHQgPSBpbmZlckJpbmRDb250ZXh0KGJpbmQsIHNjb3BlKTtcbiAgICBub2RlLmNhbGxlZSA9IHQubWVtYmVyRXhwcmVzc2lvbihiaW5kLmNhbGxlZSwgdC5pZGVudGlmaWVyKFwiY2FsbFwiKSk7XG4gICAgbm9kZS5hcmd1bWVudHMudW5zaGlmdChjb250ZXh0KTtcbiAgfSxcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIEJpbmRFeHByZXNzaW9uOiBmdW5jdGlvbiBCaW5kRXhwcmVzc2lvbihub2RlLCBwYXJlbnQsIHNjb3BlKSB7XG4gICAgdmFyIGNvbnRleHQgPSBpbmZlckJpbmRDb250ZXh0KG5vZGUsIHNjb3BlKTtcbiAgICByZXR1cm4gdC5jYWxsRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24obm9kZS5jYWxsZWUsIHQuaWRlbnRpZmllcihcImJpbmRcIikpLCBbY29udGV4dF0pO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
