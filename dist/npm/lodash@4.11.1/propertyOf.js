'use strict';

System.register([], function (_export, _context) {
  var baseGet;

  function propertyOf(object) {
    return function (path) {
      return object == null ? undefined : baseGet(object, path);
    };
  }
  return {
    setters: [],
    execute: function () {
      baseGet = require('./_baseGet');
      module.exports = propertyOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Byb3BlcnR5T2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEI7QUFDMUIsV0FBTyxVQUFTLElBQVQsRUFBZTtBQUNwQixhQUFPLFVBQVUsSUFBVixHQUFpQixTQUFqQixHQUE2QixRQUFRLE1BQVIsRUFBZ0IsSUFBaEIsQ0FBN0IsQ0FEYTtLQUFmLENBRG1CO0dBQTVCOzs7O0FBREksZ0JBQVUsUUFBUSxZQUFSO0FBTWQsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3Byb3BlcnR5T2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuZnVuY3Rpb24gcHJvcGVydHlPZihvYmplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5T2Y7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
