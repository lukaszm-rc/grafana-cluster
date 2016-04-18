'use strict';

System.register([], function (_export, _context) {
  var toInteger, min;
  return {
    setters: [],
    execute: function () {
      toInteger = require('./$.to-integer');
      min = Math.min;

      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50by1sZW5ndGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGtCQUFZLFFBQVEsZ0JBQVI7QUFDWixZQUFNLEtBQUssR0FBTDs7QUFDVixhQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWE7QUFDNUIsZUFBTyxLQUFLLENBQUwsR0FBUyxJQUFJLFVBQVUsRUFBVixDQUFKLEVBQW1CLGdCQUFuQixDQUFULEdBQWdELENBQWhELENBRHFCO09BQWIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJyksXG4gICAgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
