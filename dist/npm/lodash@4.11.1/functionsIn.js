'use strict';

System.register([], function (_export, _context) {
  var baseFunctions, keysIn;

  function functionsIn(object) {
    return object == null ? [] : baseFunctions(object, keysIn(object));
  }
  return {
    setters: [],
    execute: function () {
      baseFunctions = require('./_baseFunctions');
      keysIn = require('./keysIn');
      module.exports = functionsIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Z1bmN0aW9uc0luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxXQUFULENBQXFCLE1BQXJCLEVBQTZCO0FBQzNCLFdBQU8sVUFBVSxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCLGNBQWMsTUFBZCxFQUFzQixPQUFPLE1BQVAsQ0FBdEIsQ0FBdEIsQ0FEb0I7R0FBN0I7Ozs7QUFGSSxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixlQUFTLFFBQVEsVUFBUjtBQUliLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mdW5jdGlvbnNJbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGdW5jdGlvbnMgPSByZXF1aXJlKCcuL19iYXNlRnVuY3Rpb25zJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcbmZ1bmN0aW9uIGZ1bmN0aW9uc0luKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBbXSA6IGJhc2VGdW5jdGlvbnMob2JqZWN0LCBrZXlzSW4ob2JqZWN0KSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uc0luO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
