'use strict';

System.register([], function (_export, _context) {
  var baseNth, toInteger;

  function nth(array, n) {
    return array && array.length ? baseNth(array, toInteger(n)) : undefined;
  }
  return {
    setters: [],
    execute: function () {
      baseNth = require('./_baseNth');
      toInteger = require('./toInteger');
      module.exports = nth;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL250aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsR0FBVCxDQUFhLEtBQWIsRUFBb0IsQ0FBcEIsRUFBdUI7QUFDckIsV0FBTyxLQUFDLElBQVMsTUFBTSxNQUFOLEdBQWdCLFFBQVEsS0FBUixFQUFlLFVBQVUsQ0FBVixDQUFmLENBQTFCLEdBQXlELFNBQXpELENBRGM7R0FBdkI7Ozs7QUFGSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixrQkFBWSxRQUFRLGFBQVI7QUFJaEIsYUFBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL250aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VOdGggPSByZXF1aXJlKCcuL19iYXNlTnRoJyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcbmZ1bmN0aW9uIG50aChhcnJheSwgbikge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlTnRoKGFycmF5LCB0b0ludGVnZXIobikpIDogdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBudGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
