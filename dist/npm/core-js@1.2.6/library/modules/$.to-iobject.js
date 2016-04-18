'use strict';

System.register([], function (_export, _context) {
  var IObject, defined;
  return {
    setters: [],
    execute: function () {
      IObject = require('./$.iobject');
      defined = require('./$.defined');

      module.exports = function (it) {
        return IObject(defined(it));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsYUFBUjtBQUNWLGdCQUFVLFFBQVEsYUFBUjs7QUFDZCxhQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWE7QUFDNUIsZUFBTyxRQUFRLFFBQVEsRUFBUixDQUFSLENBQVAsQ0FENEI7T0FBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JyksXG4gICAgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
