'use strict';

System.register([], function (_export, _context) {
  var _typeof, isArray, isSymbol, reIsDeepProp, reIsPlainProp;

  function isKey(value, object) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (type == 'number' || type == 'symbol') {
      return true;
    }
    return !isArray(value) && (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object));
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      isArray = require('./isArray');
      isSymbol = require('./isSymbol');
      reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      reIsPlainProp = /^\w*$/;
      module.exports = isKey;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc0tleS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsTUFBdEIsRUFBOEI7QUFDNUIsUUFBSSxjQUFjLG9EQUFkLENBRHdCO0FBRTVCLFFBQUksUUFBUSxRQUFSLElBQW9CLFFBQVEsUUFBUixFQUFrQjtBQUN4QyxhQUFPLElBQVAsQ0FEd0M7S0FBMUM7QUFHQSxXQUFPLENBQUMsUUFBUSxLQUFSLENBQUQsS0FBb0IsU0FBUyxLQUFULEtBQW1CLGNBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFuQixJQUFnRCxDQUFDLGFBQWEsSUFBYixDQUFrQixLQUFsQixDQUFELElBQThCLFVBQVUsSUFBVixJQUFrQixTQUFTLE9BQU8sTUFBUCxDQUFULENBQXBILENBTHFCO0dBQTlCOzs7Ozs7Ozs7QUFKSSxnQkFBVSxRQUFRLFdBQVI7QUFDVixpQkFBVyxRQUFRLFlBQVI7QUFDWCxxQkFBZTtBQUNmLHNCQUFnQjtBQVFwQixhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2lzS2V5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiAhaXNBcnJheSh2YWx1ZSkgJiYgKGlzU3ltYm9sKHZhbHVlKSB8fCByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHwgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
