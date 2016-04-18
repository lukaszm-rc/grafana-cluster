'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('isExtensible', function ($isExtensible) {
        return function isExtensible(it) {
          return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7O0FBQ2YsY0FBUSxnQkFBUixFQUEwQixjQUExQixFQUEwQyxVQUFTLGFBQVQsRUFBd0I7QUFDaEUsZUFBTyxTQUFTLFlBQVQsQ0FBc0IsRUFBdEIsRUFBMEI7QUFDL0IsaUJBQU8sU0FBUyxFQUFULElBQWUsZ0JBQWdCLGNBQWMsRUFBZCxDQUFoQixHQUFvQyxJQUFwQyxHQUEyQyxLQUExRCxDQUR3QjtTQUExQixDQUR5RDtPQUF4QixDQUExQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24oJGlzRXh0ZW5zaWJsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKGl0KSA6IHRydWUgOiBmYWxzZTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
