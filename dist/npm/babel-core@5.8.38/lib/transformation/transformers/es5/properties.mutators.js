/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersDefineMap, defineMap, _types, t, visitor;

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
      exports.__esModule = true;_helpersDefineMap = require("../../helpers/define-map");
      defineMap = _interopRequireWildcard(_helpersDefineMap);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * Look for getters and setters on an object.
         * Filter them out and wrap the object with an `Object.defineProperties` that
         * defines the getters and setters.
         */

        ObjectExpression: function ObjectExpression(node, parent, scope, file) {
          var hasAny = false;
          var _arr = node.properties;
          for (var _i = 0; _i < _arr.length; _i++) {
            var prop = _arr[_i];
            if (prop.kind === "get" || prop.kind === "set") {
              hasAny = true;
              break;
            }
          }
          if (!hasAny) return;

          var mutatorMap = {};

          node.properties = node.properties.filter(function (prop) {
            if (prop.kind === "get" || prop.kind === "set") {
              defineMap.push(mutatorMap, prop, prop.kind, file);
              return false;
            } else {
              return true;
            }
          });

          return t.callExpression(t.memberExpression(t.identifier("Object"), t.identifier("defineProperties")), [node, defineMap.toDefineObject(mutatorMap)]);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNS9wcm9wZXJ0aWVzLm11dGF0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxvQkFBb0IsUUFBUSwwQkFBUjtBQUVwQixrQkFBWSx3QkFBd0IsaUJBQXhCO0FBRVosZUFBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUErQkosZ0JBQVU7Ozs7Ozs7O0FBUVosMEJBQWtCLFNBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsRUFBZ0MsTUFBaEMsRUFBd0MsS0FBeEMsRUFBK0MsSUFBL0MsRUFBcUQ7QUFDckUsY0FBSSxTQUFTLEtBQVQsQ0FEaUU7QUFFckUsY0FBSSxPQUFPLEtBQUssVUFBTCxDQUYwRDtBQUdyRSxlQUFLLElBQUksS0FBSyxDQUFMLEVBQVEsS0FBSyxLQUFLLE1BQUwsRUFBYSxJQUFuQyxFQUF5QztBQUN2QyxnQkFBSSxPQUFPLEtBQUssRUFBTCxDQUFQLENBRG1DO0FBRXZDLGdCQUFJLEtBQUssSUFBTCxLQUFjLEtBQWQsSUFBdUIsS0FBSyxJQUFMLEtBQWMsS0FBZCxFQUFxQjtBQUM5Qyx1QkFBUyxJQUFULENBRDhDO0FBRTlDLG9CQUY4QzthQUFoRDtXQUZGO0FBT0EsY0FBSSxDQUFDLE1BQUQsRUFBUyxPQUFiOztBQUVBLGNBQUksYUFBYSxFQUFiLENBWmlFOztBQWNyRSxlQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLFVBQVUsSUFBVixFQUFnQjtBQUN2RCxnQkFBSSxLQUFLLElBQUwsS0FBYyxLQUFkLElBQXVCLEtBQUssSUFBTCxLQUFjLEtBQWQsRUFBcUI7QUFDOUMsd0JBQVUsSUFBVixDQUFlLFVBQWYsRUFBMkIsSUFBM0IsRUFBaUMsS0FBSyxJQUFMLEVBQVcsSUFBNUMsRUFEOEM7QUFFOUMscUJBQU8sS0FBUCxDQUY4QzthQUFoRCxNQUdPO0FBQ0wscUJBQU8sSUFBUCxDQURLO2FBSFA7V0FEdUMsQ0FBekMsQ0FkcUU7O0FBdUJyRSxpQkFBTyxFQUFFLGNBQUYsQ0FBaUIsRUFBRSxnQkFBRixDQUFtQixFQUFFLFVBQUYsQ0FBYSxRQUFiLENBQW5CLEVBQTJDLEVBQUUsVUFBRixDQUFhLGtCQUFiLENBQTNDLENBQWpCLEVBQStGLENBQUMsSUFBRCxFQUFPLFVBQVUsY0FBVixDQUF5QixVQUF6QixDQUFQLENBQS9GLENBQVAsQ0F2QnFFO1NBQXJEOzs7QUEwQnBCLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczUvcHJvcGVydGllcy5tdXRhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9oZWxwZXJzRGVmaW5lTWFwID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvZGVmaW5lLW1hcFwiKTtcblxudmFyIGRlZmluZU1hcCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oZWxwZXJzRGVmaW5lTWFwKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG4vKipcbiAqIFR1cm4gW29iamVjdCBpbml0aWFsaXplciBtdXRhdG9yc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL09iamVjdF9pbml0aWFsaXplciNNZXRob2RfZGVmaW5pdGlvbnMpXG4gKiBpbnRvIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AuXG4gKlxuICogKipJbioqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIGZvbyA9IHtcbiAqICAgZ2V0IGJhcigpIHtcbiAqICAgICByZXR1cm4gXCJiYXJcIjtcbiAqICAgfVxuICogfTtcbiAqIGBgYFxuICpcbiAqICoqT3V0KipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgZm9vID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoe30sIHtcbiAqICAgYmFyOiB7XG4gKiAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICByZXR1cm4gXCJiYXJcIjtcbiAqICAgICB9LFxuICogICAgIGVudW1lcmFibGU6IHRydWUsXG4gKiAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKi9cblxudmFyIHZpc2l0b3IgPSB7XG5cbiAgLyoqXG4gICAqIExvb2sgZm9yIGdldHRlcnMgYW5kIHNldHRlcnMgb24gYW4gb2JqZWN0LlxuICAgKiBGaWx0ZXIgdGhlbSBvdXQgYW5kIHdyYXAgdGhlIG9iamVjdCB3aXRoIGFuIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgdGhhdFxuICAgKiBkZWZpbmVzIHRoZSBnZXR0ZXJzIGFuZCBzZXR0ZXJzLlxuICAgKi9cblxuICBPYmplY3RFeHByZXNzaW9uOiBmdW5jdGlvbiBPYmplY3RFeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICB2YXIgaGFzQW55ID0gZmFsc2U7XG4gICAgdmFyIF9hcnIgPSBub2RlLnByb3BlcnRpZXM7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgcHJvcCA9IF9hcnJbX2ldO1xuICAgICAgaWYgKHByb3Aua2luZCA9PT0gXCJnZXRcIiB8fCBwcm9wLmtpbmQgPT09IFwic2V0XCIpIHtcbiAgICAgICAgaGFzQW55ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaGFzQW55KSByZXR1cm47XG5cbiAgICB2YXIgbXV0YXRvck1hcCA9IHt9O1xuXG4gICAgbm9kZS5wcm9wZXJ0aWVzID0gbm9kZS5wcm9wZXJ0aWVzLmZpbHRlcihmdW5jdGlvbiAocHJvcCkge1xuICAgICAgaWYgKHByb3Aua2luZCA9PT0gXCJnZXRcIiB8fCBwcm9wLmtpbmQgPT09IFwic2V0XCIpIHtcbiAgICAgICAgZGVmaW5lTWFwLnB1c2gobXV0YXRvck1hcCwgcHJvcCwgcHJvcC5raW5kLCBmaWxlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdC5jYWxsRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24odC5pZGVudGlmaWVyKFwiT2JqZWN0XCIpLCB0LmlkZW50aWZpZXIoXCJkZWZpbmVQcm9wZXJ0aWVzXCIpKSwgW25vZGUsIGRlZmluZU1hcC50b0RlZmluZU9iamVjdChtdXRhdG9yTWFwKV0pO1xuICB9XG59O1xuZXhwb3J0cy52aXNpdG9yID0gdmlzaXRvcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
