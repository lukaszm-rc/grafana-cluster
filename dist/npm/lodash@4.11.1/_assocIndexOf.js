'use strict';

System.register([], function (_export, _context) {
  var eq;

  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  return {
    setters: [],
    execute: function () {
      eq = require('./eq');
      module.exports = assocIndexOf;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hc3NvY0luZGV4T2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsR0FBN0IsRUFBa0M7QUFDaEMsUUFBSSxTQUFTLE1BQU0sTUFBTixDQURtQjtBQUVoQyxXQUFPLFFBQVAsRUFBaUI7QUFDZixVQUFJLEdBQUcsTUFBTSxNQUFOLEVBQWMsQ0FBZCxDQUFILEVBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsZUFBTyxNQUFQLENBRDZCO09BQS9CO0tBREY7QUFLQSxXQUFPLENBQUMsQ0FBRCxDQVB5QjtHQUFsQzs7OztBQURJLFdBQUssUUFBUSxNQUFSO0FBVVQsYUFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19hc3NvY0luZGV4T2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
