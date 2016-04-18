'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, toInteger;

  function flattenDepth(array, depth) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    depth = depth === undefined ? 1 : toInteger(depth);
    return baseFlatten(array, depth);
  }
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      toInteger = require('./toInteger');
      module.exports = flattenDepth;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZsYXR0ZW5EZXB0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxRQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QixDQURxQjtBQUVsQyxRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFBTyxFQUFQLENBRFc7S0FBYjtBQUdBLFlBQVEsVUFBVSxTQUFWLEdBQXNCLENBQXRCLEdBQTBCLFVBQVUsS0FBVixDQUExQixDQUwwQjtBQU1sQyxXQUFPLFlBQVksS0FBWixFQUFtQixLQUFuQixDQUFQLENBTmtDO0dBQXBDOzs7O0FBRkksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGtCQUFZLFFBQVEsYUFBUjtBQVNoQixhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZmxhdHRlbkRlcHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5mdW5jdGlvbiBmbGF0dGVuRGVwdGgoYXJyYXksIGRlcHRoKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGRlcHRoID0gZGVwdGggPT09IHVuZGVmaW5lZCA/IDEgOiB0b0ludGVnZXIoZGVwdGgpO1xuICByZXR1cm4gYmFzZUZsYXR0ZW4oYXJyYXksIGRlcHRoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkRlcHRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
