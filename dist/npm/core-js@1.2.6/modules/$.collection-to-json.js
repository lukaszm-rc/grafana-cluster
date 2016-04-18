'use strict';

System.register([], function (_export, _context) {
  var forOf, classof;
  return {
    setters: [],
    execute: function () {
      forOf = require('./$.for-of');
      classof = require('./$.classof');

      module.exports = function (NAME) {
        return function toJSON() {
          if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
          var arr = [];
          forOf(this, false, arr.push, arr);
          return arr;
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGNBQVEsUUFBUSxZQUFSO0FBQ1IsZ0JBQVUsUUFBUSxhQUFSOztBQUNkLGFBQU8sT0FBUCxHQUFpQixVQUFTLElBQVQsRUFBZTtBQUM5QixlQUFPLFNBQVMsTUFBVCxHQUFrQjtBQUN2QixjQUFJLFFBQVEsSUFBUixLQUFpQixJQUFqQixFQUNGLE1BQU0sVUFBVSxPQUFPLHVCQUFQLENBQWhCLENBREY7QUFFQSxjQUFJLE1BQU0sRUFBTixDQUhtQjtBQUl2QixnQkFBTSxJQUFOLEVBQVksS0FBWixFQUFtQixJQUFJLElBQUosRUFBVSxHQUE3QixFQUp1QjtBQUt2QixpQkFBTyxHQUFQLENBTHVCO1NBQWxCLENBRHVCO09BQWYiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmNvbGxlY3Rpb24tdG8tanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGZvck9mID0gcmVxdWlyZSgnLi8kLmZvci1vZicpLFxuICAgIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSlcbiAgICAgIHRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvck9mKHRoaXMsIGZhbHNlLCBhcnIucHVzaCwgYXJyKTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
