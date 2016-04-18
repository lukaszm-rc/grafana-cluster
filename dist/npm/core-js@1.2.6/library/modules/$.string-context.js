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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1jb250ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7QUFDWCxnQkFBVSxRQUFRLGFBQVI7O0FBQ2QsYUFBTyxPQUFQLEdBQWlCLFVBQVMsSUFBVCxFQUFlLFlBQWYsRUFBNkIsSUFBN0IsRUFBbUM7QUFDbEQsWUFBSSxTQUFTLFlBQVQsQ0FBSixFQUNFLE1BQU0sVUFBVSxZQUFZLElBQVosR0FBbUIsd0JBQW5CLENBQWhCLENBREY7QUFFQSxlQUFPLE9BQU8sUUFBUSxJQUFSLENBQVAsQ0FBUCxDQUhrRDtPQUFuQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi8kLmlzLXJlZ2V4cCcpLFxuICAgIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpIHtcbiAgaWYgKGlzUmVnRXhwKHNlYXJjaFN0cmluZykpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG4gIHJldHVybiBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
