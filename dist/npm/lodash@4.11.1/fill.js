'use strict';

System.register([], function (_export, _context) {
  var baseFill, isIterateeCall;

  function fill(array, value, start, end) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
      start = 0;
      end = length;
    }
    return baseFill(array, value, start, end);
  }
  return {
    setters: [],
    execute: function () {
      baseFill = require('./_baseFill');
      isIterateeCall = require('./_isIterateeCall');
      module.exports = fill;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCLEtBQXJCLEVBQTRCLEtBQTVCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3RDLFFBQUksU0FBUyxRQUFRLE1BQU0sTUFBTixHQUFlLENBQXZCLENBRHlCO0FBRXRDLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDWCxhQUFPLEVBQVAsQ0FEVztLQUFiO0FBR0EsUUFBSSxTQUFTLE9BQU8sS0FBUCxJQUFnQixRQUFoQixJQUE0QixlQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsQ0FBckMsRUFBMEU7QUFDNUUsY0FBUSxDQUFSLENBRDRFO0FBRTVFLFlBQU0sTUFBTixDQUY0RTtLQUE5RTtBQUlBLFdBQU8sU0FBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLEdBQTlCLENBQVAsQ0FUc0M7R0FBeEM7Ozs7QUFGSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCx1QkFBaUIsUUFBUSxtQkFBUjtBQVlyQixhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGaWxsID0gcmVxdWlyZSgnLi9fYmFzZUZpbGwnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyk7XG5mdW5jdGlvbiBmaWxsKGFycmF5LCB2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoc3RhcnQgJiYgdHlwZW9mIHN0YXJ0ICE9ICdudW1iZXInICYmIGlzSXRlcmF0ZWVDYWxsKGFycmF5LCB2YWx1ZSwgc3RhcnQpKSB7XG4gICAgc3RhcnQgPSAwO1xuICAgIGVuZCA9IGxlbmd0aDtcbiAgfVxuICByZXR1cm4gYmFzZUZpbGwoYXJyYXksIHZhbHVlLCBzdGFydCwgZW5kKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZmlsbDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
