'use strict';

System.register([], function (_export, _context) {
  var redefine;
  return {
    setters: [],
    execute: function () {
      redefine = require('./$.redefine');

      module.exports = function (target, src) {
        for (var key in src) {
          redefine(target, key, src[key]);
        }return target;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsY0FBUjs7QUFDZixhQUFPLE9BQVAsR0FBaUIsVUFBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCO0FBQ3JDLGFBQUssSUFBSSxHQUFKLElBQVcsR0FBaEI7QUFDRSxtQkFBUyxNQUFULEVBQWlCLEdBQWpCLEVBQXNCLElBQUksR0FBSixDQUF0QjtTQURGLE9BRU8sTUFBUCxDQUhxQztPQUF0QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQucmVkZWZpbmUtYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYylcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
