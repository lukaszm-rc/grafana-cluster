/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersReplaceSupers, _helpersReplaceSupers2, _types, t, visitor;

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

  function Property(path, node, scope, getObjectRef, file) {
    if (!node.method && node.kind === "init") return;
    if (!t.isFunction(node.value)) return;

    var replaceSupers = new _helpersReplaceSupers2["default"]({
      getObjectRef: getObjectRef,
      methodNode: node,
      methodPath: path,
      isStatic: true,
      scope: scope,
      file: file
    });

    replaceSupers.replace();
  }

  /**
   * [Please add a description.]
   */

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_helpersReplaceSupers = require("../../helpers/replace-supers");
      _helpersReplaceSupers2 = _interopRequireDefault(_helpersReplaceSupers);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        ObjectExpression: function ObjectExpression(node, parent, scope, file) {
          var objectRef;
          var getObjectRef = function getObjectRef() {
            return objectRef = objectRef || scope.generateUidIdentifier("obj");
          };

          var propPaths = this.get("properties");
          for (var i = 0; i < node.properties.length; i++) {
            Property(propPaths[i], node.properties[i], scope, getObjectRef, file);
          }

          if (objectRef) {
            scope.push({ id: objectRef });
            return t.assignmentExpression("=", objectRef, node);
          }
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9vYmplY3Qtc3VwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7O0FBY0EsV0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLEtBQTlCLEVBQXFDLFlBQXJDLEVBQW1ELElBQW5ELEVBQXlEO0FBQ3ZELFFBQUksQ0FBQyxLQUFLLE1BQUwsSUFBZSxLQUFLLElBQUwsS0FBYyxNQUFkLEVBQXNCLE9BQTFDO0FBQ0EsUUFBSSxDQUFDLEVBQUUsVUFBRixDQUFhLEtBQUssS0FBTCxDQUFkLEVBQTJCLE9BQS9COztBQUVBLFFBQUksZ0JBQWdCLElBQUksdUJBQXVCLFNBQXZCLENBQUosQ0FBc0M7QUFDeEQsb0JBQWMsWUFBZDtBQUNBLGtCQUFZLElBQVo7QUFDQSxrQkFBWSxJQUFaO0FBQ0EsZ0JBQVUsSUFBVjtBQUNBLGFBQU8sS0FBUDtBQUNBLFlBQU0sSUFBTjtLQU5rQixDQUFoQixDQUptRDs7QUFhdkQsa0JBQWMsT0FBZCxHQWJ1RDtHQUF6RDs7Ozs7Ozs7O0FBckJBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQVNJLHdCQUF3QixRQUFRLDhCQUFSO0FBRXhCLCtCQUF5Qix1QkFBdUIscUJBQXZCO0FBRXpCLGVBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBMEJKLGdCQUFVOzs7Ozs7QUFNWiwwQkFBa0IsU0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxNQUFoQyxFQUF3QyxLQUF4QyxFQUErQyxJQUEvQyxFQUFxRDtBQUNyRSxjQUFJLFNBQUosQ0FEcUU7QUFFckUsY0FBSSxlQUFlLFNBQVMsWUFBVCxHQUF3QjtBQUN6QyxtQkFBTyxZQUFZLGFBQWEsTUFBTSxxQkFBTixDQUE0QixLQUE1QixDQUFiLENBRHNCO1dBQXhCLENBRmtEOztBQU1yRSxjQUFJLFlBQVksS0FBSyxHQUFMLENBQVMsWUFBVCxDQUFaLENBTmlFO0FBT3JFLGVBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssVUFBTCxDQUFnQixNQUFoQixFQUF3QixHQUE1QyxFQUFpRDtBQUMvQyxxQkFBUyxVQUFVLENBQVYsQ0FBVCxFQUF1QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBdkIsRUFBMkMsS0FBM0MsRUFBa0QsWUFBbEQsRUFBZ0UsSUFBaEUsRUFEK0M7V0FBakQ7O0FBSUEsY0FBSSxTQUFKLEVBQWU7QUFDYixrQkFBTSxJQUFOLENBQVcsRUFBRSxJQUFJLFNBQUosRUFBYixFQURhO0FBRWIsbUJBQU8sRUFBRSxvQkFBRixDQUF1QixHQUF2QixFQUE0QixTQUE1QixFQUF1QyxJQUF2QyxDQUFQLENBRmE7V0FBZjtTQVhnQjs7O0FBaUJwQixjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L29iamVjdC1zdXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfaGVscGVyc1JlcGxhY2VTdXBlcnMgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9yZXBsYWNlLXN1cGVyc1wiKTtcblxudmFyIF9oZWxwZXJzUmVwbGFjZVN1cGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzUmVwbGFjZVN1cGVycyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBQcm9wZXJ0eShwYXRoLCBub2RlLCBzY29wZSwgZ2V0T2JqZWN0UmVmLCBmaWxlKSB7XG4gIGlmICghbm9kZS5tZXRob2QgJiYgbm9kZS5raW5kID09PSBcImluaXRcIikgcmV0dXJuO1xuICBpZiAoIXQuaXNGdW5jdGlvbihub2RlLnZhbHVlKSkgcmV0dXJuO1xuXG4gIHZhciByZXBsYWNlU3VwZXJzID0gbmV3IF9oZWxwZXJzUmVwbGFjZVN1cGVyczJbXCJkZWZhdWx0XCJdKHtcbiAgICBnZXRPYmplY3RSZWY6IGdldE9iamVjdFJlZixcbiAgICBtZXRob2ROb2RlOiBub2RlLFxuICAgIG1ldGhvZFBhdGg6IHBhdGgsXG4gICAgaXNTdGF0aWM6IHRydWUsXG4gICAgc2NvcGU6IHNjb3BlLFxuICAgIGZpbGU6IGZpbGVcbiAgfSk7XG5cbiAgcmVwbGFjZVN1cGVycy5yZXBsYWNlKCk7XG59XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICAgKi9cblxuICBPYmplY3RFeHByZXNzaW9uOiBmdW5jdGlvbiBPYmplY3RFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICB2YXIgb2JqZWN0UmVmO1xuICAgIHZhciBnZXRPYmplY3RSZWYgPSBmdW5jdGlvbiBnZXRPYmplY3RSZWYoKSB7XG4gICAgICByZXR1cm4gb2JqZWN0UmVmID0gb2JqZWN0UmVmIHx8IHNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcIm9ialwiKTtcbiAgICB9O1xuXG4gICAgdmFyIHByb3BQYXRocyA9IHRoaXMuZ2V0KFwicHJvcGVydGllc1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgUHJvcGVydHkocHJvcFBhdGhzW2ldLCBub2RlLnByb3BlcnRpZXNbaV0sIHNjb3BlLCBnZXRPYmplY3RSZWYsIGZpbGUpO1xuICAgIH1cblxuICAgIGlmIChvYmplY3RSZWYpIHtcbiAgICAgIHNjb3BlLnB1c2goeyBpZDogb2JqZWN0UmVmIH0pO1xuICAgICAgcmV0dXJuIHQuYXNzaWdubWVudEV4cHJlc3Npb24oXCI9XCIsIG9iamVjdFJlZiwgbm9kZSk7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
