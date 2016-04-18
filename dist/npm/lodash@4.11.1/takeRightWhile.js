'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, baseWhile;

  function takeRightWhile(array, predicate) {
    return array && array.length ? baseWhile(array, baseIteratee(predicate, 3), false, true) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      baseWhile = require('./_baseWhile');
      module.exports = takeRightWhile;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Rha2VSaWdodFdoaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLFNBQS9CLEVBQTBDO0FBQ3hDLFdBQU8sS0FBQyxJQUFTLE1BQU0sTUFBTixHQUFnQixVQUFVLEtBQVYsRUFBaUIsYUFBYSxTQUFiLEVBQXdCLENBQXhCLENBQWpCLEVBQTZDLEtBQTdDLEVBQW9ELElBQXBELENBQTFCLEdBQXNGLEVBQXRGLENBRGlDO0dBQTFDOzs7O0FBRkkscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGtCQUFZLFFBQVEsY0FBUjtBQUloQixhQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdGFrZVJpZ2h0V2hpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlV2hpbGUgPSByZXF1aXJlKCcuL19iYXNlV2hpbGUnKTtcbmZ1bmN0aW9uIHRha2VSaWdodFdoaWxlKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVdoaWxlKGFycmF5LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSwgZmFsc2UsIHRydWUpIDogW107XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRha2VSaWdodFdoaWxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
