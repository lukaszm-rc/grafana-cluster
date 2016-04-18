'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, INFINITY;

  function flattenDeep(array) {
    var length = array ? array.length : 0;
    return length ? baseFlatten(array, INFINITY) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      INFINITY = 1 / 0;
      module.exports = flattenDeep;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZsYXR0ZW5EZWVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQzFCLFFBQUksU0FBUyxRQUFRLE1BQU0sTUFBTixHQUFlLENBQXZCLENBRGE7QUFFMUIsV0FBTyxTQUFTLFlBQVksS0FBWixFQUFtQixRQUFuQixDQUFULEdBQXdDLEVBQXhDLENBRm1CO0dBQTVCOzs7O0FBRkksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGlCQUFXLElBQUksQ0FBSjtBQUtmLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mbGF0dGVuRGVlcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKTtcbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuZnVuY3Rpb24gZmxhdHRlbkRlZXAoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuIGxlbmd0aCA/IGJhc2VGbGF0dGVuKGFycmF5LCBJTkZJTklUWSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkRlZXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
