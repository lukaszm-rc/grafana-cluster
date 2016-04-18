"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 20.2.2.14 Math.expm1(x)
      module.exports = Math.expm1 || function expm1(x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm1hdGgtZXhwbTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLGFBQU8sT0FBUCxHQUFpQixLQUFLLEtBQUwsSUFBYyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWlCO0FBQzlDLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBRCxDQUFMLElBQVksQ0FBWixHQUFnQixDQUFoQixHQUFvQixJQUFJLENBQUMsSUFBRCxJQUFTLElBQUksSUFBSixHQUFXLElBQUksSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLEtBQUssR0FBTCxDQUFTLENBQVQsSUFBYyxDQUFkLENBRHJCO09BQWpCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm1hdGgtZXhwbTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmV4cG0xIHx8IGZ1bmN0aW9uIGV4cG0xKHgpe1xuICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogTWF0aC5leHAoeCkgLSAxO1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
