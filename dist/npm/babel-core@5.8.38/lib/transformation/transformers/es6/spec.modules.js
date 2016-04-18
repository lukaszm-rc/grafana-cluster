/* */
"format cjs";
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

  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;_types = require("../../../types");
      t = _interopRequireWildcard(_types);
      metadata = {
        group: "builtin-pre",
        optional: true
      };


      exports.metadata = metadata;
      visitor = {
        Program: function Program() {
          var id = this.scope.generateUidIdentifier("null");
          this.unshiftContainer("body", [t.variableDeclaration("var", [t.variableDeclarator(id, t.literal(null))]), t.exportNamedDeclaration(null, [t.exportSpecifier(id, t.identifier("__proto__"))])]);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcGVjLm1vZHVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLFNBQVMsUUFBUSxnQkFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCO0FBRUosaUJBQVc7QUFDYixlQUFPLGFBQVA7QUFDQSxrQkFBVSxJQUFWOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5CO0FBQ0ksZ0JBQVU7QUFDWixpQkFBUyxTQUFTLE9BQVQsR0FBbUI7QUFDMUIsY0FBSSxLQUFLLEtBQUssS0FBTCxDQUFXLHFCQUFYLENBQWlDLE1BQWpDLENBQUwsQ0FEc0I7QUFFMUIsZUFBSyxnQkFBTCxDQUFzQixNQUF0QixFQUE4QixDQUFDLEVBQUUsbUJBQUYsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBQyxFQUFFLGtCQUFGLENBQXFCLEVBQXJCLEVBQXlCLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBekIsQ0FBRCxDQUE3QixDQUFELEVBQTRFLEVBQUUsc0JBQUYsQ0FBeUIsSUFBekIsRUFBK0IsQ0FBQyxFQUFFLGVBQUYsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBRSxVQUFGLENBQWEsV0FBYixDQUF0QixDQUFELENBQS9CLENBQTVFLENBQTlCLEVBRjBCO1NBQW5COzs7QUFLWCxjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L3NwZWMubW9kdWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tcHJlXCIsXG4gIG9wdGlvbmFsOiB0cnVlXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG52YXIgdmlzaXRvciA9IHtcbiAgUHJvZ3JhbTogZnVuY3Rpb24gUHJvZ3JhbSgpIHtcbiAgICB2YXIgaWQgPSB0aGlzLnNjb3BlLmdlbmVyYXRlVWlkSWRlbnRpZmllcihcIm51bGxcIik7XG4gICAgdGhpcy51bnNoaWZ0Q29udGFpbmVyKFwiYm9keVwiLCBbdC52YXJpYWJsZURlY2xhcmF0aW9uKFwidmFyXCIsIFt0LnZhcmlhYmxlRGVjbGFyYXRvcihpZCwgdC5saXRlcmFsKG51bGwpKV0pLCB0LmV4cG9ydE5hbWVkRGVjbGFyYXRpb24obnVsbCwgW3QuZXhwb3J0U3BlY2lmaWVyKGlkLCB0LmlkZW50aWZpZXIoXCJfX3Byb3RvX19cIikpXSldKTtcbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
