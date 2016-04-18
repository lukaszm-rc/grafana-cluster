"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 7.2.9 SameValue(x, y)
      module.exports = Object.is || function is(x, y) {
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnNhbWUtdmFsdWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLGFBQU8sT0FBUCxHQUFpQixPQUFPLEVBQVAsSUFBYSxTQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFpQjtBQUM3QyxlQUFPLE1BQU0sQ0FBTixHQUFVLE1BQU0sQ0FBTixJQUFXLElBQUksQ0FBSixLQUFVLElBQUksQ0FBSixHQUFRLEtBQUssQ0FBTCxJQUFVLEtBQUssQ0FBTCxDQURYO09BQWpCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnNhbWUtdmFsdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
