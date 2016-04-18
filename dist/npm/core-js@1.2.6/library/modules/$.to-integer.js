"use strict";

System.register([], function (_export, _context) {
  var ceil, floor;
  return {
    setters: [],
    execute: function () {
      ceil = Math.ceil;
      floor = Math.floor;

      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRvLWludGVnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGFBQVEsS0FBSyxJQUFMO0FBQ1IsY0FBUSxLQUFLLEtBQUw7O0FBQ1osYUFBTyxPQUFQLEdBQWlCLFVBQVMsRUFBVCxFQUFZO0FBQzNCLGVBQU8sTUFBTSxLQUFLLENBQUMsRUFBRCxDQUFYLEdBQWtCLENBQWxCLEdBQXNCLENBQUMsS0FBSyxDQUFMLEdBQVMsS0FBVCxHQUFpQixJQUFqQixDQUFELENBQXdCLEVBQXhCLENBQXRCLENBRG9CO09BQVoiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
