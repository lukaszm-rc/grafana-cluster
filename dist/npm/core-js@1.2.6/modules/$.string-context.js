'use strict';

System.register([], function (_export, _context) {
  var isRegExp, defined;
  return {
    setters: [],
    execute: function () {
      isRegExp = require('./$.is-regexp');
      defined = require('./$.defined');

      module.exports = function (that, searchString, NAME) {
        if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
        return String(defined(that));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zdHJpbmctY29udGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSO0FBQ1gsZ0JBQVUsUUFBUSxhQUFSOztBQUNkLGFBQU8sT0FBUCxHQUFpQixVQUFTLElBQVQsRUFBZSxZQUFmLEVBQTZCLElBQTdCLEVBQW1DO0FBQ2xELFlBQUksU0FBUyxZQUFULENBQUosRUFDRSxNQUFNLFVBQVUsWUFBWSxJQUFaLEdBQW1CLHdCQUFuQixDQUFoQixDQURGO0FBRUEsZUFBTyxPQUFPLFFBQVEsSUFBUixDQUFQLENBQVAsQ0FIa0Q7T0FBbkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnN0cmluZy1jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLyQuaXMtcmVnZXhwJyksXG4gICAgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSkge1xuICBpZiAoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
