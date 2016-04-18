'use strict';

System.register([], function (_export, _context) {
  var toInteger, toLength;

  function baseFill(array, value, start, end) {
    var length = array.length;
    start = toInteger(start);
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end === undefined || end > length ? length : toInteger(end);
    if (end < 0) {
      end += length;
    }
    end = start > end ? 0 : toLength(end);
    while (start < end) {
      array[start++] = value;
    }
    return array;
  }
  return {
    setters: [],
    execute: function () {
      toInteger = require('./toInteger');
      toLength = require('./toLength');
      module.exports = baseFill;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRmlsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQyxLQUFoQyxFQUF1QyxHQUF2QyxFQUE0QztBQUMxQyxRQUFJLFNBQVMsTUFBTSxNQUFOLENBRDZCO0FBRTFDLFlBQVEsVUFBVSxLQUFWLENBQVIsQ0FGMEM7QUFHMUMsUUFBSSxRQUFRLENBQVIsRUFBVztBQUNiLGNBQVEsQ0FBQyxLQUFELEdBQVMsTUFBVCxHQUFrQixDQUFsQixHQUF1QixTQUFTLEtBQVQsQ0FEbEI7S0FBZjtBQUdBLFVBQU0sR0FBQyxLQUFRLFNBQVIsSUFBcUIsTUFBTSxNQUFOLEdBQWdCLE1BQXRDLEdBQStDLFVBQVUsR0FBVixDQUEvQyxDQU5vQztBQU8xQyxRQUFJLE1BQU0sQ0FBTixFQUFTO0FBQ1gsYUFBTyxNQUFQLENBRFc7S0FBYjtBQUdBLFVBQU0sUUFBUSxHQUFSLEdBQWMsQ0FBZCxHQUFrQixTQUFTLEdBQVQsQ0FBbEIsQ0FWb0M7QUFXMUMsV0FBTyxRQUFRLEdBQVIsRUFBYTtBQUNsQixZQUFNLE9BQU4sSUFBaUIsS0FBakIsQ0FEa0I7S0FBcEI7QUFHQSxXQUFPLEtBQVAsQ0FkMEM7R0FBNUM7Ozs7QUFGSSxrQkFBWSxRQUFRLGFBQVI7QUFDWixpQkFBVyxRQUFRLFlBQVI7QUFpQmYsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyksXG4gICAgdG9MZW5ndGggPSByZXF1aXJlKCcuL3RvTGVuZ3RoJyk7XG5mdW5jdGlvbiBiYXNlRmlsbChhcnJheSwgdmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgc3RhcnQgPSB0b0ludGVnZXIoc3RhcnQpO1xuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gbGVuZ3RoKSA/IGxlbmd0aCA6IHRvSW50ZWdlcihlbmQpO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgZW5kID0gc3RhcnQgPiBlbmQgPyAwIDogdG9MZW5ndGgoZW5kKTtcbiAgd2hpbGUgKHN0YXJ0IDwgZW5kKSB7XG4gICAgYXJyYXlbc3RhcnQrK10gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaWxsO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
