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
        ArrowFunctionExpression: function ArrowFunctionExpression(node, parent, scope, file) {
          if (node.shadow) return;
          node.shadow = { "this": false };

          var boundThis = t.thisExpression();
          boundThis._forceShadow = this;

          // make sure that arrow function won't be instantiated
          t.ensureBlock(node);
          this.get("body").unshiftContainer("body", t.expressionStatement(t.callExpression(file.addHelper("new-arrow-check"), [t.thisExpression(), boundThis])));

          return t.callExpression(t.memberExpression(node, t.identifier("bind")), [t.thisExpression()]);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcGVjLmFycm93LWZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQUtBLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7O0FBSEEsY0FBUSxVQUFSLEdBQXFCLElBQXJCLENBS0ksU0FBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFFSixpQkFBVztBQUNiLGVBQU8sYUFBUDtBQUNBLGtCQUFVLElBQVY7Ozs7QUFHRixjQUFRLFFBQVIsR0FBbUIsUUFBbkI7QUFDSSxnQkFBVTtBQUNaLGlDQUF5QixTQUFTLHVCQUFULENBQWlDLElBQWpDLEVBQXVDLE1BQXZDLEVBQStDLEtBQS9DLEVBQXNELElBQXRELEVBQTREO0FBQ25GLGNBQUksS0FBSyxNQUFMLEVBQWEsT0FBakI7QUFDQSxlQUFLLE1BQUwsR0FBYyxFQUFFLFFBQVEsS0FBUixFQUFoQixDQUZtRjs7QUFJbkYsY0FBSSxZQUFZLEVBQUUsY0FBRixFQUFaLENBSitFO0FBS25GLG9CQUFVLFlBQVYsR0FBeUIsSUFBekI7OztBQUxtRixXQVFuRixDQUFFLFdBQUYsQ0FBYyxJQUFkLEVBUm1GO0FBU25GLGVBQUssR0FBTCxDQUFTLE1BQVQsRUFBaUIsZ0JBQWpCLENBQWtDLE1BQWxDLEVBQTBDLEVBQUUsbUJBQUYsQ0FBc0IsRUFBRSxjQUFGLENBQWlCLEtBQUssU0FBTCxDQUFlLGlCQUFmLENBQWpCLEVBQW9ELENBQUMsRUFBRSxjQUFGLEVBQUQsRUFBcUIsU0FBckIsQ0FBcEQsQ0FBdEIsQ0FBMUMsRUFUbUY7O0FBV25GLGlCQUFPLEVBQUUsY0FBRixDQUFpQixFQUFFLGdCQUFGLENBQW1CLElBQW5CLEVBQXlCLEVBQUUsVUFBRixDQUFhLE1BQWIsQ0FBekIsQ0FBakIsRUFBaUUsQ0FBQyxFQUFFLGNBQUYsRUFBRCxDQUFqRSxDQUFQLENBWG1GO1NBQTVEOzs7QUFjM0IsY0FBUSxPQUFSLEdBQWtCLE9BQWxCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9zcGVjLmFycm93LWZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi90eXBlc1wiKTtcblxudmFyIHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHlwZXMpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tcHJlXCIsXG4gIG9wdGlvbmFsOiB0cnVlXG59O1xuXG5leHBvcnRzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG52YXIgdmlzaXRvciA9IHtcbiAgQXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IGZ1bmN0aW9uIEFycm93RnVuY3Rpb25FeHByZXNzaW9uKG5vZGUsIHBhcmVudCwgc2NvcGUsIGZpbGUpIHtcbiAgICBpZiAobm9kZS5zaGFkb3cpIHJldHVybjtcbiAgICBub2RlLnNoYWRvdyA9IHsgXCJ0aGlzXCI6IGZhbHNlIH07XG5cbiAgICB2YXIgYm91bmRUaGlzID0gdC50aGlzRXhwcmVzc2lvbigpO1xuICAgIGJvdW5kVGhpcy5fZm9yY2VTaGFkb3cgPSB0aGlzO1xuXG4gICAgLy8gbWFrZSBzdXJlIHRoYXQgYXJyb3cgZnVuY3Rpb24gd29uJ3QgYmUgaW5zdGFudGlhdGVkXG4gICAgdC5lbnN1cmVCbG9jayhub2RlKTtcbiAgICB0aGlzLmdldChcImJvZHlcIikudW5zaGlmdENvbnRhaW5lcihcImJvZHlcIiwgdC5leHByZXNzaW9uU3RhdGVtZW50KHQuY2FsbEV4cHJlc3Npb24oZmlsZS5hZGRIZWxwZXIoXCJuZXctYXJyb3ctY2hlY2tcIiksIFt0LnRoaXNFeHByZXNzaW9uKCksIGJvdW5kVGhpc10pKSk7XG5cbiAgICByZXR1cm4gdC5jYWxsRXhwcmVzc2lvbih0Lm1lbWJlckV4cHJlc3Npb24obm9kZSwgdC5pZGVudGlmaWVyKFwiYmluZFwiKSksIFt0LnRoaXNFeHByZXNzaW9uKCldKTtcbiAgfVxufTtcbmV4cG9ydHMudmlzaXRvciA9IHZpc2l0b3I7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
