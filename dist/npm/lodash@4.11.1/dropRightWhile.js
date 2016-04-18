'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseWhile;

  function dropRightWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3), true, true) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseWhile = require('./_baseWhile');
      module.exports = dropRightWhile;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Ryb3BSaWdodFdoaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLFNBQS9CLEVBQTBDO0FBQ3hDLFdBQU8sS0FBQyxJQUFTLE1BQU0sTUFBTixHQUFnQixVQUFVLEtBQVYsRUFBaUIsYUFBYSxTQUFiLEVBQXdCLENBQXhCLENBQWpCLEVBQTZDLElBQTdDLEVBQW1ELElBQW5ELENBQTFCLEdBQXFGLEVBQXJGLENBRGlDO0dBQTFDOzs7O0FBRkkscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGtCQUFZLFFBQVEsY0FBUjtBQUloQixhQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZHJvcFJpZ2h0V2hpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlV2hpbGUgPSByZXF1aXJlKCcuL19iYXNlV2hpbGUnKTtcbmZ1bmN0aW9uIGRyb3BSaWdodFdoaWxlKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVdoaWxlKGFycmF5LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSwgdHJ1ZSwgdHJ1ZSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZHJvcFJpZ2h0V2hpbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
