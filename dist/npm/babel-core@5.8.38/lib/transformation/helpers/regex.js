/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _lodashArrayPull, _lodashArrayPull2, _types, t;

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

  function is(node, flag) {
    return t.isLiteral(node) && node.regex && node.regex.flags.indexOf(flag) >= 0;
  }

  /**
   * [Please add a description.]
   */

  function pullFlag(node, flag) {
    var flags = node.regex.flags.split("");
    if (node.regex.flags.indexOf(flag) < 0) return;
    _lodashArrayPull2["default"](flags, flag);
    node.regex.flags = flags.join("");
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.is = is;
      exports.pullFlag = pullFlag;_lodashArrayPull = require("lodash/array/pull");
      _lodashArrayPull2 = _interopRequireDefault(_lodashArrayPull);
      _types = require("../../types");
      t = _interopRequireWildcard(_types);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9yZWdleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQU9BLFdBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0M7QUFBRSxRQUFJLE9BQU8sSUFBSSxVQUFKLEVBQWdCO0FBQUUsYUFBTyxHQUFQLENBQUY7S0FBM0IsTUFBZ0Q7QUFBRSxVQUFJLFNBQVMsRUFBVCxDQUFOLElBQXVCLE9BQU8sSUFBUCxFQUFhO0FBQUUsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQixFQUFxQjtBQUFFLGNBQUksT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBQWdDLElBQWhDLENBQXFDLEdBQXJDLEVBQTBDLEdBQTFDLENBQUosRUFBb0QsT0FBTyxHQUFQLElBQWMsSUFBSSxHQUFKLENBQWQsQ0FBcEQ7U0FBdkI7T0FBbkIsTUFBMEgsQ0FBTyxTQUFQLElBQW9CLEdBQXBCLENBQTdJLE9BQTZLLE1BQVAsQ0FBdEs7S0FBaEQ7R0FBeEM7Ozs7QUFJQSxXQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBSixHQUFpQixHQUF4QixHQUE4QixFQUFFLFdBQVcsR0FBWCxFQUFoQyxDQUFUO0dBQXJDOzs7Ozs7QUFjQSxXQUFTLEVBQVQsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCO0FBQ3RCLFdBQU8sRUFBRSxTQUFGLENBQVksSUFBWixLQUFxQixLQUFLLEtBQUwsSUFBYyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLElBQXpCLEtBQWtDLENBQWxDLENBRHBCO0dBQXhCOzs7Ozs7QUFRQSxXQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDNUIsUUFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBdUIsRUFBdkIsQ0FBUixDQUR3QjtBQUU1QixRQUFJLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakIsQ0FBeUIsSUFBekIsSUFBaUMsQ0FBakMsRUFBb0MsT0FBeEM7QUFDQSxzQkFBa0IsU0FBbEIsRUFBNkIsS0FBN0IsRUFBb0MsSUFBcEMsRUFINEI7QUFJNUIsU0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixNQUFNLElBQU4sQ0FBVyxFQUFYLENBQW5CLENBSjRCO0dBQTlCOzs7O0FBL0JBLGNBQVEsVUFBUixHQUFxQixJQUFyQjtBQUNBLGNBQVEsRUFBUixHQUFhLEVBQWI7QUFDQSxjQUFRLFFBQVIsR0FBbUIsUUFBbkIsQ0FTSSxtQkFBbUIsUUFBUSxtQkFBUjtBQUVuQiwwQkFBb0IsdUJBQXVCLGdCQUF2QjtBQUVwQixlQUFTLFFBQVEsYUFBUjtBQUVULFVBQUksd0JBQXdCLE1BQXhCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vaGVscGVycy9yZWdleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaXMgPSBpcztcbmV4cG9ydHMucHVsbEZsYWcgPSBwdWxsRmxhZztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfbG9kYXNoQXJyYXlQdWxsID0gcmVxdWlyZShcImxvZGFzaC9hcnJheS9wdWxsXCIpO1xuXG52YXIgX2xvZGFzaEFycmF5UHVsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hBcnJheVB1bGwpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xuXG52YXIgdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90eXBlcyk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gaXMobm9kZSwgZmxhZykge1xuICByZXR1cm4gdC5pc0xpdGVyYWwobm9kZSkgJiYgbm9kZS5yZWdleCAmJiBub2RlLnJlZ2V4LmZsYWdzLmluZGV4T2YoZmxhZykgPj0gMDtcbn1cblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG5mdW5jdGlvbiBwdWxsRmxhZyhub2RlLCBmbGFnKSB7XG4gIHZhciBmbGFncyA9IG5vZGUucmVnZXguZmxhZ3Muc3BsaXQoXCJcIik7XG4gIGlmIChub2RlLnJlZ2V4LmZsYWdzLmluZGV4T2YoZmxhZykgPCAwKSByZXR1cm47XG4gIF9sb2Rhc2hBcnJheVB1bGwyW1wiZGVmYXVsdFwiXShmbGFncywgZmxhZyk7XG4gIG5vZGUucmVnZXguZmxhZ3MgPSBmbGFncy5qb2luKFwiXCIpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
