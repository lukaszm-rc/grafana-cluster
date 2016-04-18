/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  var _slash, _slash2, _util, util, filename;

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
   * Get a transformer list from a value.
   */

  function transformerList(val) {
    return util.arrayify(val);
  }

  /**
   * Validate transformer list. Maps "all" to all transformer names.
   */

  /**
   * Cast a value to a number.
   */

  function number(val) {
    return +val;
  }

  /**
   * Cast a value to a boolean.
   */

  /**
   * [Please add a description.]
   */

  function boolean(val) {
    return !!val;
  }

  /**
   * Cast a boolean-like string to a boolean.
   */

  function booleanString(val) {
    return util.booleanify(val);
  }

  /**
   * Cast a value to an array, splitting strings by ",".
   */

  function list(val) {
    return util.list(val);
  }
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;
      exports.transformerList = transformerList;
      exports.number = number;
      exports.boolean = boolean;
      exports.booleanString = booleanString;
      exports.list = list;_slash = require("slash");
      _slash2 = _interopRequireDefault(_slash);
      _util = require("../../../util");
      util = _interopRequireWildcard(_util);
      transformerList.validate = function (key, val, pipeline) {
        if (val.indexOf("all") >= 0 || val.indexOf(true) >= 0) {
          val = Object.keys(pipeline.transformers);
        }

        return pipeline._ensureTransformerNames(key, val);
      };filename = _slash2["default"];


      exports.filename = filename;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvdHJhbnNmb3JtYXRpb24vZmlsZS9vcHRpb25zL3BhcnNlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFVQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDO0FBQUUsUUFBSSxPQUFPLElBQUksVUFBSixFQUFnQjtBQUFFLGFBQU8sR0FBUCxDQUFGO0tBQTNCLE1BQWdEO0FBQUUsVUFBSSxTQUFTLEVBQVQsQ0FBTixJQUF1QixPQUFPLElBQVAsRUFBYTtBQUFFLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEIsRUFBcUI7QUFBRSxjQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFKLEVBQW9ELE9BQU8sR0FBUCxJQUFjLElBQUksR0FBSixDQUFkLENBQXBEO1NBQXZCO09BQW5CLE1BQTBILENBQU8sU0FBUCxJQUFvQixHQUFwQixDQUE3SSxPQUE2SyxNQUFQLENBQXRLO0tBQWhEO0dBQXhDOzs7O0FBSUEsV0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQUosR0FBaUIsR0FBeEIsR0FBOEIsRUFBRSxXQUFXLEdBQVgsRUFBaEMsQ0FBVDtHQUFyQzs7Ozs7O0FBY0EsV0FBUyxlQUFULENBQXlCLEdBQXpCLEVBQThCO0FBQzVCLFdBQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFQLENBRDRCO0dBQTlCOzs7Ozs7Ozs7O0FBb0JBLFdBQVMsTUFBVCxDQUFnQixHQUFoQixFQUFxQjtBQUNuQixXQUFPLENBQUMsR0FBRCxDQURZO0dBQXJCOzs7Ozs7Ozs7O0FBZUEsV0FBUyxPQUFULENBQWlCLEdBQWpCLEVBQXNCO0FBQ3BCLFdBQU8sQ0FBQyxDQUFDLEdBQUQsQ0FEWTtHQUF0Qjs7Ozs7O0FBUUEsV0FBUyxhQUFULENBQXVCLEdBQXZCLEVBQTRCO0FBQzFCLFdBQU8sS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQVAsQ0FEMEI7R0FBNUI7Ozs7OztBQVFBLFdBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDakIsV0FBTyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQVAsQ0FEaUI7R0FBbkI7Ozs7QUE3RUEsY0FBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsY0FBUSxlQUFSLEdBQTBCLGVBQTFCO0FBQ0EsY0FBUSxNQUFSLEdBQWlCLE1BQWpCO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLE9BQWxCO0FBQ0EsY0FBUSxhQUFSLEdBQXdCLGFBQXhCO0FBQ0EsY0FBUSxJQUFSLEdBQWUsSUFBZixDQVNJLFNBQVMsUUFBUSxPQUFSO0FBRVQsZ0JBQVUsdUJBQXVCLE1BQXZCO0FBRVYsY0FBUSxRQUFRLGVBQVI7QUFFUixhQUFPLHdCQUF3QixLQUF4QjtBQWNYLHNCQUFnQixRQUFoQixHQUEyQixVQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLFFBQXBCLEVBQThCO0FBQ3ZELFlBQUksSUFBSSxPQUFKLENBQVksS0FBWixLQUFzQixDQUF0QixJQUEyQixJQUFJLE9BQUosQ0FBWSxJQUFaLEtBQXFCLENBQXJCLEVBQXdCO0FBQ3JELGdCQUFNLE9BQU8sSUFBUCxDQUFZLFNBQVMsWUFBVCxDQUFsQixDQURxRDtTQUF2RDs7QUFJQSxlQUFPLFNBQVMsdUJBQVQsQ0FBaUMsR0FBakMsRUFBc0MsR0FBdEMsQ0FBUCxDQUx1RDtPQUE5QixDQW9CdkIsV0FBVyxRQUFRLFNBQVI7OztBQUVmLGNBQVEsUUFBUixHQUFtQixRQUFuQiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3RyYW5zZm9ybWF0aW9uL2ZpbGUvb3B0aW9ucy9wYXJzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50cmFuc2Zvcm1lckxpc3QgPSB0cmFuc2Zvcm1lckxpc3Q7XG5leHBvcnRzLm51bWJlciA9IG51bWJlcjtcbmV4cG9ydHMuYm9vbGVhbiA9IGJvb2xlYW47XG5leHBvcnRzLmJvb2xlYW5TdHJpbmcgPSBib29sZWFuU3RyaW5nO1xuZXhwb3J0cy5saXN0ID0gbGlzdDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfc2xhc2ggPSByZXF1aXJlKFwic2xhc2hcIik7XG5cbnZhciBfc2xhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2xhc2gpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbFwiKTtcblxudmFyIHV0aWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbCk7XG5cbi8qKlxuICogR2V0IGEgdHJhbnNmb3JtZXIgbGlzdCBmcm9tIGEgdmFsdWUuXG4gKi9cblxuZnVuY3Rpb24gdHJhbnNmb3JtZXJMaXN0KHZhbCkge1xuICByZXR1cm4gdXRpbC5hcnJheWlmeSh2YWwpO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHRyYW5zZm9ybWVyIGxpc3QuIE1hcHMgXCJhbGxcIiB0byBhbGwgdHJhbnNmb3JtZXIgbmFtZXMuXG4gKi9cblxudHJhbnNmb3JtZXJMaXN0LnZhbGlkYXRlID0gZnVuY3Rpb24gKGtleSwgdmFsLCBwaXBlbGluZSkge1xuICBpZiAodmFsLmluZGV4T2YoXCJhbGxcIikgPj0gMCB8fCB2YWwuaW5kZXhPZih0cnVlKSA+PSAwKSB7XG4gICAgdmFsID0gT2JqZWN0LmtleXMocGlwZWxpbmUudHJhbnNmb3JtZXJzKTtcbiAgfVxuXG4gIHJldHVybiBwaXBlbGluZS5fZW5zdXJlVHJhbnNmb3JtZXJOYW1lcyhrZXksIHZhbCk7XG59O1xuXG4vKipcbiAqIENhc3QgYSB2YWx1ZSB0byBhIG51bWJlci5cbiAqL1xuXG5mdW5jdGlvbiBudW1iZXIodmFsKSB7XG4gIHJldHVybiArdmFsO1xufVxuXG4vKipcbiAqIENhc3QgYSB2YWx1ZSB0byBhIGJvb2xlYW4uXG4gKi9cblxudmFyIGZpbGVuYW1lID0gX3NsYXNoMltcImRlZmF1bHRcIl07XG5cbmV4cG9ydHMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbi8qKlxuICogW1BsZWFzZSBhZGQgYSBkZXNjcmlwdGlvbi5dXG4gKi9cblxuZnVuY3Rpb24gYm9vbGVhbih2YWwpIHtcbiAgcmV0dXJuICEhdmFsO1xufVxuXG4vKipcbiAqIENhc3QgYSBib29sZWFuLWxpa2Ugc3RyaW5nIHRvIGEgYm9vbGVhbi5cbiAqL1xuXG5mdW5jdGlvbiBib29sZWFuU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdXRpbC5ib29sZWFuaWZ5KHZhbCk7XG59XG5cbi8qKlxuICogQ2FzdCBhIHZhbHVlIHRvIGFuIGFycmF5LCBzcGxpdHRpbmcgc3RyaW5ncyBieSBcIixcIi5cbiAqL1xuXG5mdW5jdGlvbiBsaXN0KHZhbCkge1xuICByZXR1cm4gdXRpbC5saXN0KHZhbCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
