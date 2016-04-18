'use strict';

System.register([], function (_export, _context) {
  var _typeof, eq, isArrayLike, isIndex, isObject;

  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      eq = require('./eq');
      isArrayLike = require('./isArrayLike');
      isIndex = require('./_isIndex');
      isObject = require('./isObject');
      module.exports = isIterateeCall;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc0l0ZXJhdGVlQ2FsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQixLQUEvQixFQUFzQyxNQUF0QyxFQUE4QztBQUM1QyxRQUFJLENBQUMsU0FBUyxNQUFULENBQUQsRUFBbUI7QUFDckIsYUFBTyxLQUFQLENBRHFCO0tBQXZCO0FBR0EsUUFBSSxjQUFjLG9EQUFkLENBSndDO0FBSzVDLFFBQUksUUFBUSxRQUFSLEdBQW9CLFlBQVksTUFBWixLQUF1QixRQUFRLEtBQVIsRUFBZSxPQUFPLE1BQVAsQ0FBdEMsR0FBeUQsUUFBUSxRQUFSLElBQW9CLFNBQVMsTUFBVCxFQUFrQjtBQUNySCxhQUFPLEdBQUcsT0FBTyxLQUFQLENBQUgsRUFBa0IsS0FBbEIsQ0FBUCxDQURxSDtLQUF2SDtBQUdBLFdBQU8sS0FBUCxDQVI0QztHQUE5Qzs7Ozs7Ozs7O0FBSkksV0FBSyxRQUFRLE1BQVI7QUFDTCxvQkFBYyxRQUFRLGVBQVI7QUFDZCxnQkFBVSxRQUFRLFlBQVI7QUFDVixpQkFBVyxRQUFRLFlBQVI7QUFXZixhQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2lzSXRlcmF0ZWVDYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSkgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
