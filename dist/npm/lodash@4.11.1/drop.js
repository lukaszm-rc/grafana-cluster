'use strict';

System.register([], function (_export, _context) {
  var baseSlice, toInteger;

  function drop(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    n = guard || n === undefined ? 1 : toInteger(n);
    return baseSlice(array, n < 0 ? 0 : n, length);
  }
  return {
    setters: [],
    execute: function () {
      baseSlice = require('./_baseSlice');
      toInteger = require('./toInteger');
      module.exports = drop;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Ryb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCLENBQXJCLEVBQXdCLEtBQXhCLEVBQStCO0FBQzdCLFFBQUksU0FBUyxRQUFRLE1BQU0sTUFBTixHQUFlLENBQXZCLENBRGdCO0FBRTdCLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDWCxhQUFPLEVBQVAsQ0FEVztLQUFiO0FBR0EsUUFBSSxLQUFDLElBQVMsTUFBTSxTQUFOLEdBQW1CLENBQTdCLEdBQWlDLFVBQVUsQ0FBVixDQUFqQyxDQUx5QjtBQU03QixXQUFPLFVBQVUsS0FBVixFQUFpQixJQUFJLENBQUosR0FBUSxDQUFSLEdBQVksQ0FBWixFQUFlLE1BQWhDLENBQVAsQ0FONkI7R0FBL0I7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixrQkFBWSxRQUFRLGFBQVI7QUFTaEIsYUFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2Ryb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuZnVuY3Rpb24gZHJvcChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbiA9IChndWFyZCB8fCBuID09PSB1bmRlZmluZWQpID8gMSA6IHRvSW50ZWdlcihuKTtcbiAgcmV0dXJuIGJhc2VTbGljZShhcnJheSwgbiA8IDAgPyAwIDogbiwgbGVuZ3RoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZHJvcDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
