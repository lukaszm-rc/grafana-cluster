/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _helpersRegex, regex, _types, t, visitor;

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
      exports.__esModule = true;_helpersRegex = require("../../helpers/regex");
      regex = _interopRequireWildcard(_helpersRegex);
      _types = require("../../../types");
      t = _interopRequireWildcard(_types);
      visitor = {

        /**
         * [Please add a description.]
         */

        Literal: function Literal(node) {
          if (!regex.is(node, "y")) return;
          return t.newExpression(t.identifier("RegExp"), [t.literal(node.regex.pattern), t.literal(node.regex.flags)]);
        }
      };

      exports.visitor = visitor;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vdHJhbnNmb3JtZXJzL2VzNi9yZWdleC5zdGlja3kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFLQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7OztBQUhBLGNBQVEsVUFBUixHQUFxQixJQUFyQixDQUtJLGdCQUFnQixRQUFRLHFCQUFSO0FBRWhCLGNBQVEsd0JBQXdCLGFBQXhCO0FBRVIsZUFBUyxRQUFRLGdCQUFSO0FBRVQsVUFBSSx3QkFBd0IsTUFBeEI7QUFNSixnQkFBVTs7Ozs7O0FBTVosaUJBQVMsU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQzlCLGNBQUksQ0FBQyxNQUFNLEVBQU4sQ0FBUyxJQUFULEVBQWUsR0FBZixDQUFELEVBQXNCLE9BQTFCO0FBQ0EsaUJBQU8sRUFBRSxhQUFGLENBQWdCLEVBQUUsVUFBRixDQUFhLFFBQWIsQ0FBaEIsRUFBd0MsQ0FBQyxFQUFFLE9BQUYsQ0FBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQVgsRUFBZ0MsRUFBRSxPQUFGLENBQVUsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUExQyxDQUF4QyxDQUFQLENBRjhCO1NBQXZCOzs7QUFLWCxjQUFRLE9BQVIsR0FBa0IsT0FBbEIiLCJmaWxlIjoibnBtL2JhYmVsLWNvcmVANS44LjM4L2xpYi90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1lcnMvZXM2L3JlZ2V4LnN0aWNreS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJmb3JtYXQgY2pzXCI7XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9oZWxwZXJzUmVnZXggPSByZXF1aXJlKFwiLi4vLi4vaGVscGVycy9yZWdleFwiKTtcblxudmFyIHJlZ2V4ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnNSZWdleCk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vLi4vdHlwZXNcIik7XG5cbnZhciB0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3R5cGVzKTtcblxuLyoqXG4gKiBbUGxlYXNlIGFkZCBhIGRlc2NyaXB0aW9uLl1cbiAqL1xuXG52YXIgdmlzaXRvciA9IHtcblxuICAvKipcbiAgICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gICAqL1xuXG4gIExpdGVyYWw6IGZ1bmN0aW9uIExpdGVyYWwobm9kZSkge1xuICAgIGlmICghcmVnZXguaXMobm9kZSwgXCJ5XCIpKSByZXR1cm47XG4gICAgcmV0dXJuIHQubmV3RXhwcmVzc2lvbih0LmlkZW50aWZpZXIoXCJSZWdFeHBcIiksIFt0LmxpdGVyYWwobm9kZS5yZWdleC5wYXR0ZXJuKSwgdC5saXRlcmFsKG5vZGUucmVnZXguZmxhZ3MpXSk7XG4gIH1cbn07XG5leHBvcnRzLnZpc2l0b3IgPSB2aXNpdG9yOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
