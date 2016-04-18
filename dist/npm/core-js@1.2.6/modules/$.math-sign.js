"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 20.2.2.28 Math.sign(x)
      module.exports = Math.sign || function sign(x) {
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5tYXRoLXNpZ24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLGFBQU8sT0FBUCxHQUFpQixLQUFLLElBQUwsSUFBYSxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWdCO0FBQzVDLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBRCxDQUFMLElBQVksQ0FBWixJQUFpQixLQUFLLENBQUwsR0FBUyxDQUExQixHQUE4QixJQUFJLENBQUosR0FBUSxDQUFDLENBQUQsR0FBSyxDQUFiLENBRE87T0FBaEIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLm1hdGgtc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
