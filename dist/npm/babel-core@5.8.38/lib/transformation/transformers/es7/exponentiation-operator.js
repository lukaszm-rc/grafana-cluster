/* */
"format cjs";
// https://github.com/rwaldron/exponentiation-operator

"use strict";

System.register([], function (_export, _context) {
  var _helpersBuildBinaryAssignmentOperatorTransformer, _helpersBuildBinaryAssignmentOperatorTransformer2, _types, t, metadata, MATH_POW, visitor;

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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_helpersBuildBinaryAssignmentOperatorTransformer = require("../../helpers/build-binary-assignment-operator-transformer");
      _helpersBuildBinaryAssignmentOperatorTransformer2 = _interopRequireDefault(_helpersBuildBinaryAssignmentOperatorTransformer);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        stage: 3
      };


      exports.metadata = metadata;
      MATH_POW = t.memberExpression(t.identifier("Math"), t.identifier("pow"));
      visitor = _helpersBuildBinaryAssignmentOperatorTransformer2["default"]({
        operator: "**",

        /**
         * [Please add a description.]
         */

        build: function build(left, right) {
          return t.callExpression(MATH_POW, [left, right]);
        }
      });

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9leHBvbmVudGlhdGlvbi1vcGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7OztBQUlBLFdBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFKLEdBQWlCLEdBQXhCLEdBQThCLEVBQUUsV0FBVyxHQUFYLEVBQWhDLENBQVQ7R0FBckM7Ozs7O0FBUEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBU0ksbURBQW1ELFFBQVEsNERBQVI7QUFFbkQsMERBQW9ELHVCQUF1QixnREFBdkI7QUFFcEQsZUFBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGVBQU8sQ0FBUDs7OztBQUdGLGNBQVEsUUFBUixHQUFtQixRQUFuQjtBQUNJLGlCQUFXLEVBQUUsZ0JBQUYsQ0FBbUIsRUFBRSxVQUFGLENBQWEsTUFBYixDQUFuQixFQUF5QyxFQUFFLFVBQUYsQ0FBYSxLQUFiLENBQXpDO0FBTVgsZ0JBQVUsa0RBQWtELFNBQWxELEVBQTZEO0FBQ3pFLGtCQUFVLElBQVY7Ozs7OztBQU1BLGVBQU8sU0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixLQUFyQixFQUE0QjtBQUNqQyxpQkFBTyxFQUFFLGNBQUYsQ0FBaUIsUUFBakIsRUFBMkIsQ0FBQyxJQUFELEVBQU8sS0FBUCxDQUEzQixDQUFQLENBRGlDO1NBQTVCO09BUEs7O0FBV2QsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNy9leHBvbmVudGlhdGlvbi1vcGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcndhbGRyb24vZXhwb25lbnRpYXRpb24tb3BlcmF0b3JcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2hlbHBlcnNCdWlsZEJpbmFyeUFzc2lnbm1lbnRPcGVyYXRvclRyYW5zZm9ybWVyID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlcnMvYnVpbGQtYmluYXJ5LWFzc2lnbm1lbnQtb3BlcmF0b3ItdHJhbnNmb3JtZXJcIik7XG5cbnZhciBfaGVscGVyc0J1aWxkQmluYXJ5QXNzaWdubWVudE9wZXJhdG9yVHJhbnNmb3JtZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0J1aWxkQmluYXJ5QXNzaWdubWVudE9wZXJhdG9yVHJhbnNmb3JtZXIpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbnZhciBtZXRhZGF0YSA9IHtcbiAgc3RhZ2U6IDNcbn07XG5cbmV4cG9ydHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbnZhciBNQVRIX1BPVyA9IHQubWVtYmVyRXhwcmVzc2lvbih0LmlkZW50aWZpZXIoXCJNYXRoXCIpLCB0LmlkZW50aWZpZXIoXCJwb3dcIikpO1xuXG4vKipcbiAqIFtQbGVhc2UgYWRkIGEgZGVzY3JpcHRpb24uXVxuICovXG5cbnZhciB2aXNpdG9yID0gX2hlbHBlcnNCdWlsZEJpbmFyeUFzc2lnbm1lbnRPcGVyYXRvclRyYW5zZm9ybWVyMltcImRlZmF1bHRcIl0oe1xuICBvcGVyYXRvcjogXCIqKlwiLFxuXG4gIC8qKlxuICAgKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAgICovXG5cbiAgYnVpbGQ6IGZ1bmN0aW9uIGJ1aWxkKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIHQuY2FsbEV4cHJlc3Npb24oTUFUSF9QT1csIFtsZWZ0LCByaWdodF0pO1xuICB9XG59KTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
