'use strict';

System.register([], function (_export, _context) {
  var isObject, cof, MATCH;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');
      cof = require('./$.cof');
      MATCH = require('./$.wks')('match');

      module.exports = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pcy1yZWdleHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjtBQUNYLFlBQU0sUUFBUSxTQUFSO0FBQ04sY0FBUSxRQUFRLFNBQVIsRUFBbUIsT0FBbkI7O0FBQ1osYUFBTyxPQUFQLEdBQWlCLFVBQVMsRUFBVCxFQUFhO0FBQzVCLFlBQUksUUFBSixDQUQ0QjtBQUU1QixlQUFPLFNBQVMsRUFBVCxNQUFpQixDQUFDLFdBQVcsR0FBRyxLQUFILENBQVgsQ0FBRCxLQUEyQixTQUEzQixHQUF1QyxDQUFDLENBQUMsUUFBRCxHQUFZLElBQUksRUFBSixLQUFXLFFBQVgsQ0FBckUsQ0FGcUI7T0FBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuaXMtcmVnZXhwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpLFxuICAgIE1BVENIID0gcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
