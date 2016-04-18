'use strict';

System.register([], function (_export, _context) {
  var isObject, floor;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');
      floor = Math.floor;

      module.exports = function isInteger(it) {
        return !isObject(it) && isFinite(it) && floor(it) === it;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmlzLWludGVnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGNBQVEsS0FBSyxLQUFMOztBQUNaLGFBQU8sT0FBUCxHQUFpQixTQUFTLFNBQVQsQ0FBbUIsRUFBbkIsRUFBdUI7QUFDdEMsZUFBTyxDQUFDLFNBQVMsRUFBVCxDQUFELElBQWlCLFNBQVMsRUFBVCxDQUFqQixJQUFpQyxNQUFNLEVBQU4sTUFBYyxFQUFkLENBREY7T0FBdkIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuaXMtaW50ZWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
