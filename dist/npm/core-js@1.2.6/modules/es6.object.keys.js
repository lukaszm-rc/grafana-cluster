'use strict';

System.register([], function (_export, _context) {
  var toObject;
  return {
    setters: [],
    execute: function () {
      toObject = require('./$.to-object');

      require('./$.object-sap')('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7O0FBQ2YsY0FBUSxnQkFBUixFQUEwQixNQUExQixFQUFrQyxVQUFTLEtBQVQsRUFBZ0I7QUFDaEQsZUFBTyxTQUFTLElBQVQsQ0FBYyxFQUFkLEVBQWtCO0FBQ3ZCLGlCQUFPLE1BQU0sU0FBUyxFQUFULENBQU4sQ0FBUCxDQUR1QjtTQUFsQixDQUR5QztPQUFoQixDQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
