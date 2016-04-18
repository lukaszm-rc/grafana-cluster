/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _util, util;

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
      exports.__esModule = true;_util = require("../../util");
      util = _interopRequireWildcard(_util);


      /**
       * [Please add a description.]
       */

      exports["default"] = function (Parent) {
        var Constructor = function Constructor() {
          this.noInteropRequireImport = true;
          this.noInteropRequireExport = true;
          Parent.apply(this, arguments);
        };

        util.inherits(Constructor, Parent);

        return Constructor;
      };

      module.exports = exports["default"];
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9fc3RyaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBOzs7Ozs7O0FBS0EsV0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUFFLFFBQUksT0FBTyxJQUFJLFVBQUosRUFBZ0I7QUFBRSxhQUFPLEdBQVAsQ0FBRjtLQUEzQixNQUFnRDtBQUFFLFVBQUksU0FBUyxFQUFULENBQU4sSUFBdUIsT0FBTyxJQUFQLEVBQWE7QUFBRSxhQUFLLElBQUksR0FBSixJQUFXLEdBQWhCLEVBQXFCO0FBQUUsY0FBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBSixFQUFvRCxPQUFPLEdBQVAsSUFBYyxJQUFJLEdBQUosQ0FBZCxDQUFwRDtTQUF2QjtPQUFuQixNQUEwSCxDQUFPLFNBQVAsSUFBb0IsR0FBcEIsQ0FBN0ksT0FBNkssTUFBUCxDQUF0SztLQUFoRDtHQUF4Qzs7Ozs7QUFIQSxjQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FLSSxRQUFRLFFBQVEsWUFBUjtBQUVSLGFBQU8sd0JBQXdCLEtBQXhCOzs7Ozs7O0FBTVgsY0FBUSxTQUFSLElBQXFCLFVBQVUsTUFBVixFQUFrQjtBQUNyQyxZQUFJLGNBQWMsU0FBUyxXQUFULEdBQXVCO0FBQ3ZDLGVBQUssc0JBQUwsR0FBOEIsSUFBOUIsQ0FEdUM7QUFFdkMsZUFBSyxzQkFBTCxHQUE4QixJQUE5QixDQUZ1QztBQUd2QyxpQkFBTyxLQUFQLENBQWEsSUFBYixFQUFtQixTQUFuQixFQUh1QztTQUF2QixDQURtQjs7QUFPckMsYUFBSyxRQUFMLENBQWMsV0FBZCxFQUEyQixNQUEzQixFQVBxQzs7QUFTckMsZUFBTyxXQUFQLENBVHFDO09BQWxCOztBQVlyQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxTQUFSLENBQWpCIiwiZmlsZSI6Im5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vbW9kdWxlcy9fc3RyaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vLi4vdXRpbFwiKTtcblxudmFyIHV0aWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbCk7XG5cbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoUGFyZW50KSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIENvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubm9JbnRlcm9wUmVxdWlyZUltcG9ydCA9IHRydWU7XG4gICAgdGhpcy5ub0ludGVyb3BSZXF1aXJlRXhwb3J0ID0gdHJ1ZTtcbiAgICBQYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICB1dGlsLmluaGVyaXRzKENvbnN0cnVjdG9yLCBQYXJlbnQpO1xuXG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
