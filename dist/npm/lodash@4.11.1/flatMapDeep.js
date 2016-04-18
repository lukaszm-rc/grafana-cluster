'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, map, INFINITY;

  function flatMapDeep(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), INFINITY);
  }
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      map = require('./map');
      INFINITY = 1 / 0;
      module.exports = flatMapDeep;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZsYXRNYXBEZWVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxXQUFULENBQXFCLFVBQXJCLEVBQWlDLFFBQWpDLEVBQTJDO0FBQ3pDLFdBQU8sWUFBWSxJQUFJLFVBQUosRUFBZ0IsUUFBaEIsQ0FBWixFQUF1QyxRQUF2QyxDQUFQLENBRHlDO0dBQTNDOzs7O0FBSEksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLFlBQU0sUUFBUSxPQUFSO0FBQ04saUJBQVcsSUFBSSxDQUFKO0FBSWYsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZsYXRNYXBEZWVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcbmZ1bmN0aW9uIGZsYXRNYXBEZWVwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlRmxhdHRlbihtYXAoY29sbGVjdGlvbiwgaXRlcmF0ZWUpLCBJTkZJTklUWSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZsYXRNYXBEZWVwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
