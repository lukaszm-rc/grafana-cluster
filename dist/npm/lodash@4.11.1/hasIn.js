'use strict';

System.register([], function (_export, _context) {
  var baseHasIn, hasPath;

  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  return {
    setters: [],
    execute: function () {
      baseHasIn = require('./_baseHasIn');
      hasPath = require('./_hasPath');
      module.exports = hasIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2hhc0luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QjtBQUMzQixXQUFPLFVBQVUsSUFBVixJQUFrQixRQUFRLE1BQVIsRUFBZ0IsSUFBaEIsRUFBc0IsU0FBdEIsQ0FBbEIsQ0FEb0I7R0FBN0I7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixnQkFBVSxRQUFRLFlBQVI7QUFJZCxhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaGFzSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
