'use strict';

System.register([], function (_export, _context) {
  var baseValues, keysIn;

  function valuesIn(object) {
    return object == null ? [] : baseValues(object, keysIn(object));
  }
  return {
    setters: [],
    execute: function () {
      baseValues = require('./_baseValues');
      keysIn = require('./keysIn');
      module.exports = valuesIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3ZhbHVlc0luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxRQUFULENBQWtCLE1BQWxCLEVBQTBCO0FBQ3hCLFdBQU8sVUFBVSxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCLFdBQVcsTUFBWCxFQUFtQixPQUFPLE1BQVAsQ0FBbkIsQ0FBdEIsQ0FEaUI7R0FBMUI7Ozs7QUFGSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixlQUFTLFFBQVEsVUFBUjtBQUliLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS92YWx1ZXNJbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VWYWx1ZXMgPSByZXF1aXJlKCcuL19iYXNlVmFsdWVzJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcbmZ1bmN0aW9uIHZhbHVlc0luKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBbXSA6IGJhc2VWYWx1ZXMob2JqZWN0LCBrZXlzSW4ob2JqZWN0KSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlc0luO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
