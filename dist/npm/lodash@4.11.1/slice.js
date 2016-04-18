'use strict';

System.register([], function (_export, _context) {
  var baseSlice, isIterateeCall, toInteger;

  function slice(array, start, end) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
      start = 0;
      end = length;
    } else {
      start = start == null ? 0 : toInteger(start);
      end = end === undefined ? length : toInteger(end);
    }
    return baseSlice(array, start, end);
  }
  return {
    setters: [],
    execute: function () {
      baseSlice = require('./_baseSlice');
      isIterateeCall = require('./_isIterateeCall');
      toInteger = require('./toInteger');
      module.exports = slice;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NsaWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixHQUE3QixFQUFrQztBQUNoQyxRQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QixDQURtQjtBQUVoQyxRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFBTyxFQUFQLENBRFc7S0FBYjtBQUdBLFFBQUksT0FBTyxPQUFPLEdBQVAsSUFBYyxRQUFkLElBQTBCLGVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixHQUE3QixDQUFqQyxFQUFvRTtBQUN0RSxjQUFRLENBQVIsQ0FEc0U7QUFFdEUsWUFBTSxNQUFOLENBRnNFO0tBQXhFLE1BR087QUFDTCxjQUFRLFNBQVMsSUFBVCxHQUFnQixDQUFoQixHQUFvQixVQUFVLEtBQVYsQ0FBcEIsQ0FESDtBQUVMLFlBQU0sUUFBUSxTQUFSLEdBQW9CLE1BQXBCLEdBQTZCLFVBQVUsR0FBVixDQUE3QixDQUZEO0tBSFA7QUFPQSxXQUFPLFVBQVUsS0FBVixFQUFpQixLQUFqQixFQUF3QixHQUF4QixDQUFQLENBWmdDO0dBQWxDOzs7O0FBSEksa0JBQVksUUFBUSxjQUFSO0FBQ1osdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsa0JBQVksUUFBUSxhQUFSO0FBZWhCLGFBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9zbGljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuZnVuY3Rpb24gc2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKGVuZCAmJiB0eXBlb2YgZW5kICE9ICdudW1iZXInICYmIGlzSXRlcmF0ZWVDYWxsKGFycmF5LCBzdGFydCwgZW5kKSkge1xuICAgIHN0YXJ0ID0gMDtcbiAgICBlbmQgPSBsZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBzdGFydCA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihzdGFydCk7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0ludGVnZXIoZW5kKTtcbiAgfVxuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gc2xpY2U7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
