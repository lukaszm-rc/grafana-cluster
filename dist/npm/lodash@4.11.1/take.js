'use strict';

System.register([], function (_export, _context) {
  var baseSlice, toInteger;

  function take(array, n, guard) {
    if (!(array && array.length)) {
      return [];
    }
    n = guard || n === undefined ? 1 : toInteger(n);
    return baseSlice(array, 0, n < 0 ? 0 : n);
  }
  return {
    setters: [],
    execute: function () {
      baseSlice = require('./_baseSlice');
      toInteger = require('./toInteger');
      module.exports = take;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Rha2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCLENBQXJCLEVBQXdCLEtBQXhCLEVBQStCO0FBQzdCLFFBQUksRUFBRSxTQUFTLE1BQU0sTUFBTixDQUFYLEVBQTBCO0FBQzVCLGFBQU8sRUFBUCxDQUQ0QjtLQUE5QjtBQUdBLFFBQUksS0FBQyxJQUFTLE1BQU0sU0FBTixHQUFtQixDQUE3QixHQUFpQyxVQUFVLENBQVYsQ0FBakMsQ0FKeUI7QUFLN0IsV0FBTyxVQUFVLEtBQVYsRUFBaUIsQ0FBakIsRUFBb0IsSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQVosQ0FBM0IsQ0FMNkI7R0FBL0I7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixrQkFBWSxRQUFRLGFBQVI7QUFRaEIsYUFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3Rha2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuZnVuY3Rpb24gdGFrZShhcnJheSwgbiwgZ3VhcmQpIHtcbiAgaWYgKCEoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBuID0gKGd1YXJkIHx8IG4gPT09IHVuZGVmaW5lZCkgPyAxIDogdG9JbnRlZ2VyKG4pO1xuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCAwLCBuIDwgMCA/IDAgOiBuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdGFrZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
