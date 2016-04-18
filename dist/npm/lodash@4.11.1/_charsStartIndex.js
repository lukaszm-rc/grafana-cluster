'use strict';

System.register([], function (_export, _context) {
  var baseIndexOf;

  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;
    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }
  return {
    setters: [],
    execute: function () {
      baseIndexOf = require('./_baseIndexOf');
      module.exports = charsStartIndex;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jaGFyc1N0YXJ0SW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLGVBQVQsQ0FBeUIsVUFBekIsRUFBcUMsVUFBckMsRUFBaUQ7QUFDL0MsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsV0FBVyxNQUFYLENBRmtDO0FBRy9DLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixJQUFvQixZQUFZLFVBQVosRUFBd0IsV0FBVyxLQUFYLENBQXhCLEVBQTJDLENBQTNDLElBQWdELENBQUMsQ0FBRCxFQUFJLEVBQS9FO0FBQ0EsV0FBTyxLQUFQLENBSitDO0dBQWpEOzs7O0FBREksb0JBQWMsUUFBUSxnQkFBUjtBQU9sQixhQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NoYXJzU3RhcnRJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcbmZ1bmN0aW9uIGNoYXJzU3RhcnRJbmRleChzdHJTeW1ib2xzLCBjaHJTeW1ib2xzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc3RyU3ltYm9scy5sZW5ndGg7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoICYmIGJhc2VJbmRleE9mKGNoclN5bWJvbHMsIHN0clN5bWJvbHNbaW5kZXhdLCAwKSA+IC0xKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJzU3RhcnRJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
