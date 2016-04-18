'use strict';

System.register([], function (_export, _context) {
  var baseGet;

  function basePropertyDeep(path) {
    return function (object) {
      return baseGet(object, path);
    };
  }
  return {
    setters: [],
    execute: function () {
      baseGet = require('./_baseGet');
      module.exports = basePropertyDeep;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUHJvcGVydHlEZWVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQztBQUM5QixXQUFPLFVBQVMsTUFBVCxFQUFpQjtBQUN0QixhQUFPLFFBQVEsTUFBUixFQUFnQixJQUFoQixDQUFQLENBRHNCO0tBQWpCLENBRHVCO0dBQWhDOzs7O0FBREksZ0JBQVUsUUFBUSxZQUFSO0FBTWQsYUFBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZVByb3BlcnR5RGVlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
