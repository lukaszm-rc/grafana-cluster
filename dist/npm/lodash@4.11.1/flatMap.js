'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, map;

  function flatMap(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), 1);
  }
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      map = require('./map');
      module.exports = flatMap;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZsYXRNYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDckMsV0FBTyxZQUFZLElBQUksVUFBSixFQUFnQixRQUFoQixDQUFaLEVBQXVDLENBQXZDLENBQVAsQ0FEcUM7R0FBdkM7Ozs7QUFGSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsWUFBTSxRQUFRLE9BQVI7QUFJVixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZmxhdE1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuZnVuY3Rpb24gZmxhdE1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICByZXR1cm4gYmFzZUZsYXR0ZW4obWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSwgMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZsYXRNYXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
