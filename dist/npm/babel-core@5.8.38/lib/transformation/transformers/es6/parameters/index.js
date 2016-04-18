/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _traversalVisitors, visitors, _default, def, _rest, rest, metadata, visitor;

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
      exports.__esModule = true;_traversalVisitors = require("../../../../traversal/visitors");
      visitors = _interopRequireWildcard(_traversalVisitors);
      _default = require("./default");
      def = _interopRequireWildcard(_default);
      _rest = require("./rest");
      rest = _interopRequireWildcard(_rest);
      metadata = {
        group: "builtin-advanced"
      };


      exports.metadata = metadata;
      /**
       * [Please add a description.]
       */

      visitor = visitors.merge([rest.visitor, def.visitor]);

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9wYXJhbWV0ZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxxQkFBcUIsUUFBUSxnQ0FBUjtBQUVyQixpQkFBVyx3QkFBd0Isa0JBQXhCO0FBRVgsaUJBQVcsUUFBUSxXQUFSO0FBRVgsWUFBTSx3QkFBd0IsUUFBeEI7QUFFTixjQUFRLFFBQVEsUUFBUjtBQUVSLGFBQU8sd0JBQXdCLEtBQXhCO0FBRVAsaUJBQVc7QUFDYixlQUFPLGtCQUFQOzs7O0FBR0YsY0FBUSxRQUFSLEdBQW1CLFFBQW5COzs7OztBQUtJLGdCQUFVLFNBQVMsS0FBVCxDQUFlLENBQUMsS0FBSyxPQUFMLEVBQWMsSUFBSSxPQUFKLENBQTlCOztBQUNkLGNBQVEsT0FBUixHQUFrQixPQUFsQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL3RyYW5zZm9ybWVycy9lczYvcGFyYW1ldGVycy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF90cmF2ZXJzYWxWaXNpdG9ycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi90cmF2ZXJzYWwvdmlzaXRvcnNcIik7XG5cbnZhciB2aXNpdG9ycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmF2ZXJzYWxWaXNpdG9ycyk7XG5cbnZhciBfZGVmYXVsdCA9IHJlcXVpcmUoXCIuL2RlZmF1bHRcIik7XG5cbnZhciBkZWYgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZGVmYXVsdCk7XG5cbnZhciBfcmVzdCA9IHJlcXVpcmUoXCIuL3Jlc3RcIik7XG5cbnZhciByZXN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3Jlc3QpO1xuXG52YXIgbWV0YWRhdGEgPSB7XG4gIGdyb3VwOiBcImJ1aWx0aW4tYWR2YW5jZWRcIlxufTtcblxuZXhwb3J0cy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHZpc2l0b3JzLm1lcmdlKFtyZXN0LnZpc2l0b3IsIGRlZi52aXNpdG9yXSk7XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
