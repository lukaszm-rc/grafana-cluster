'use strict';

System.register([], function (_export, _context) {
  var arrayMap, copyArray, isArray, isSymbol, stringToPath, toKey;

  function toPath(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }
    return isSymbol(value) ? [value] : copyArray(stringToPath(value));
  }
  return {
    setters: [],
    execute: function () {
      arrayMap = require('./_arrayMap');
      copyArray = require('./_copyArray');
      isArray = require('./isArray');
      isSymbol = require('./isSymbol');
      stringToPath = require('./_stringToPath');
      toKey = require('./_toKey');
      module.exports = toPath;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvUGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLFdBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUNyQixRQUFJLFFBQVEsS0FBUixDQUFKLEVBQW9CO0FBQ2xCLGFBQU8sU0FBUyxLQUFULEVBQWdCLEtBQWhCLENBQVAsQ0FEa0I7S0FBcEI7QUFHQSxXQUFPLFNBQVMsS0FBVCxJQUFrQixDQUFDLEtBQUQsQ0FBbEIsR0FBNEIsVUFBVSxhQUFhLEtBQWIsQ0FBVixDQUE1QixDQUpjO0dBQXZCOzs7O0FBTkksaUJBQVcsUUFBUSxhQUFSO0FBQ1gsa0JBQVksUUFBUSxjQUFSO0FBQ1osZ0JBQVUsUUFBUSxXQUFSO0FBQ1YsaUJBQVcsUUFBUSxZQUFSO0FBQ1gscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGNBQVEsUUFBUSxVQUFSO0FBT1osYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RvUGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuZnVuY3Rpb24gdG9QYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgdG9LZXkpO1xuICB9XG4gIHJldHVybiBpc1N5bWJvbCh2YWx1ZSkgPyBbdmFsdWVdIDogY29weUFycmF5KHN0cmluZ1RvUGF0aCh2YWx1ZSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
