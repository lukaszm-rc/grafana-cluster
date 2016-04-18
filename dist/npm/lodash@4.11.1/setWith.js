'use strict';

System.register([], function (_export, _context) {
  var baseSet;

  function setWith(object, path, value, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return object == null ? object : baseSet(object, path, value, customizer);
  }
  return {
    setters: [],
    execute: function () {
      baseSet = require('./_baseSet');
      module.exports = setWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NldFdpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsVUFBdEMsRUFBa0Q7QUFDaEQsaUJBQWEsT0FBTyxVQUFQLElBQXFCLFVBQXJCLEdBQWtDLFVBQWxDLEdBQStDLFNBQS9DLENBRG1DO0FBRWhELFdBQU8sVUFBVSxJQUFWLEdBQWlCLE1BQWpCLEdBQTBCLFFBQVEsTUFBUixFQUFnQixJQUFoQixFQUFzQixLQUF0QixFQUE2QixVQUE3QixDQUExQixDQUZ5QztHQUFsRDs7OztBQURJLGdCQUFVLFFBQVEsWUFBUjtBQUtkLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9zZXRXaXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVNldCA9IHJlcXVpcmUoJy4vX2Jhc2VTZXQnKTtcbmZ1bmN0aW9uIHNldFdpdGgob2JqZWN0LCBwYXRoLCB2YWx1ZSwgY3VzdG9taXplcikge1xuICBjdXN0b21pemVyID0gdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbWl6ZXIgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSwgY3VzdG9taXplcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldFdpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
