'use strict';

System.register([], function (_export, _context) {
  var arrayConcat, baseFlatten, castArray, copyArray;

  function concat() {
    var length = arguments.length,
        array = castArray(arguments[0]);
    if (length < 2) {
      return length ? copyArray(array) : [];
    }
    var args = Array(length - 1);
    while (length--) {
      args[length - 1] = arguments[length];
    }
    return arrayConcat(array, baseFlatten(args, 1));
  }
  return {
    setters: [],
    execute: function () {
      arrayConcat = require('./_arrayConcat');
      baseFlatten = require('./_baseFlatten');
      castArray = require('./castArray');
      copyArray = require('./_copyArray');
      module.exports = concat;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NvbmNhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsTUFBVCxHQUFrQjtBQUNoQixRQUFJLFNBQVMsVUFBVSxNQUFWO1FBQ1QsUUFBUSxVQUFVLFVBQVUsQ0FBVixDQUFWLENBQVIsQ0FGWTtBQUdoQixRQUFJLFNBQVMsQ0FBVCxFQUFZO0FBQ2QsYUFBTyxTQUFTLFVBQVUsS0FBVixDQUFULEdBQTRCLEVBQTVCLENBRE87S0FBaEI7QUFHQSxRQUFJLE9BQU8sTUFBTSxTQUFTLENBQVQsQ0FBYixDQU5ZO0FBT2hCLFdBQU8sUUFBUCxFQUFpQjtBQUNmLFdBQUssU0FBUyxDQUFULENBQUwsR0FBbUIsVUFBVSxNQUFWLENBQW5CLENBRGU7S0FBakI7QUFHQSxXQUFPLFlBQVksS0FBWixFQUFtQixZQUFZLElBQVosRUFBa0IsQ0FBbEIsQ0FBbkIsQ0FBUCxDQVZnQjtHQUFsQjs7OztBQUpJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsa0JBQVksUUFBUSxhQUFSO0FBQ1osa0JBQVksUUFBUSxjQUFSO0FBYWhCLGFBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9jb25jYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUNvbmNhdCA9IHJlcXVpcmUoJy4vX2FycmF5Q29uY2F0JyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGNhc3RBcnJheSA9IHJlcXVpcmUoJy4vY2FzdEFycmF5JyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5Jyk7XG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgYXJyYXkgPSBjYXN0QXJyYXkoYXJndW1lbnRzWzBdKTtcbiAgaWYgKGxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gbGVuZ3RoID8gY29weUFycmF5KGFycmF5KSA6IFtdO1xuICB9XG4gIHZhciBhcmdzID0gQXJyYXkobGVuZ3RoIC0gMSk7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGFyZ3NbbGVuZ3RoIC0gMV0gPSBhcmd1bWVudHNbbGVuZ3RoXTtcbiAgfVxuICByZXR1cm4gYXJyYXlDb25jYXQoYXJyYXksIGJhc2VGbGF0dGVuKGFyZ3MsIDEpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY29uY2F0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
