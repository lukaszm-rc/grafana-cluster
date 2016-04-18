'use strict';

System.register([], function (_export, _context) {
  var baseSlice, toInteger;

  function dropRight(array, n, guard) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    n = guard || n === undefined ? 1 : toInteger(n);
    n = length - n;
    return baseSlice(array, 0, n < 0 ? 0 : n);
  }
  return {
    setters: [],
    execute: function () {
      baseSlice = require('./_baseSlice');
      toInteger = require('./toInteger');
      module.exports = dropRight;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Ryb3BSaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixDQUExQixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxRQUFJLFNBQVMsUUFBUSxNQUFNLE1BQU4sR0FBZSxDQUF2QixDQURxQjtBQUVsQyxRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFBTyxFQUFQLENBRFc7S0FBYjtBQUdBLFFBQUksS0FBQyxJQUFTLE1BQU0sU0FBTixHQUFtQixDQUE3QixHQUFpQyxVQUFVLENBQVYsQ0FBakMsQ0FMOEI7QUFNbEMsUUFBSSxTQUFTLENBQVQsQ0FOOEI7QUFPbEMsV0FBTyxVQUFVLEtBQVYsRUFBaUIsQ0FBakIsRUFBb0IsSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQVosQ0FBM0IsQ0FQa0M7R0FBcEM7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixrQkFBWSxRQUFRLGFBQVI7QUFVaEIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2Ryb3BSaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5mdW5jdGlvbiBkcm9wUmlnaHQoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG4gPSAoZ3VhcmQgfHwgbiA9PT0gdW5kZWZpbmVkKSA/IDEgOiB0b0ludGVnZXIobik7XG4gIG4gPSBsZW5ndGggLSBuO1xuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCAwLCBuIDwgMCA/IDAgOiBuKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZHJvcFJpZ2h0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
