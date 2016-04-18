"use strict";

System.register([], function (_export, _context) {
  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = iteratorToArray;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pdGVyYXRvclRvQXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLFdBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQztBQUNqQyxRQUFJLElBQUo7UUFDSSxTQUFTLEVBQVQsQ0FGNkI7O0FBSWpDLFdBQU8sQ0FBQyxDQUFDLE9BQU8sU0FBUyxJQUFULEVBQVAsQ0FBRCxDQUF5QixJQUF6QixFQUErQjtBQUNyQyxhQUFPLElBQVAsQ0FBWSxLQUFLLEtBQUwsQ0FBWixDQURxQztLQUF2QztBQUdBLFdBQU8sTUFBUCxDQVBpQztHQUFuQzs7Ozs7QUFVQSxhQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2l0ZXJhdG9yVG9BcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29udmVydHMgYGl0ZXJhdG9yYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGl0ZXJhdG9yIFRoZSBpdGVyYXRvciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yVG9BcnJheShpdGVyYXRvcikge1xuICB2YXIgZGF0YSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICghKGRhdGEgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICByZXN1bHQucHVzaChkYXRhLnZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZXJhdG9yVG9BcnJheTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
