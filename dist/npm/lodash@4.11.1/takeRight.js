'use strict';

System.register([], function (_export, _context) {
  var baseSlice, toInteger;

  function takeRight(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    n = guard || n === undefined ? 1 : toInteger(n);
    n = length - n;
    return baseSlice(array, n < 0 ? 0 : n, length);
  }
  return {
    setters: [],
    execute: function () {
      baseSlice = require('./_baseSlice');
      toInteger = require('./toInteger');
      module.exports = takeRight;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Rha2VSaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixDQUExQixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxRQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QixDQURxQjtBQUVsQyxRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFBTyxFQUFQLENBRFc7S0FBYjtBQUdBLFFBQUksS0FBQyxJQUFTLE1BQU0sU0FBTixHQUFtQixDQUE3QixHQUFpQyxVQUFVLENBQVYsQ0FBakMsQ0FMOEI7QUFNbEMsUUFBSSxTQUFTLENBQVQsQ0FOOEI7QUFPbEMsV0FBTyxVQUFVLEtBQVYsRUFBaUIsSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQVosRUFBZSxNQUFoQyxDQUFQLENBUGtDO0dBQXBDOzs7O0FBRkksa0JBQVksUUFBUSxjQUFSO0FBQ1osa0JBQVksUUFBUSxhQUFSO0FBVWhCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90YWtlUmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuZnVuY3Rpb24gdGFrZVJpZ2h0KGFycmF5LCBuLCBndWFyZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBuID0gKGd1YXJkIHx8IG4gPT09IHVuZGVmaW5lZCkgPyAxIDogdG9JbnRlZ2VyKG4pO1xuICBuID0gbGVuZ3RoIC0gbjtcbiAgcmV0dXJuIGJhc2VTbGljZShhcnJheSwgbiA8IDAgPyAwIDogbiwgbGVuZ3RoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdGFrZVJpZ2h0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
