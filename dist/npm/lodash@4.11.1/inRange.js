'use strict';

System.register([], function (_export, _context) {
  var baseInRange, toNumber;

  function inRange(number, start, end) {
    start = toNumber(start) || 0;
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toNumber(end) || 0;
    }
    number = toNumber(number);
    return baseInRange(number, start, end);
  }
  return {
    setters: [],
    execute: function () {
      baseInRange = require('./_baseInRange');
      toNumber = require('./toNumber');
      module.exports = inRange;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2luUmFuZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsS0FBekIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbkMsWUFBUSxTQUFTLEtBQVQsS0FBbUIsQ0FBbkIsQ0FEMkI7QUFFbkMsUUFBSSxRQUFRLFNBQVIsRUFBbUI7QUFDckIsWUFBTSxLQUFOLENBRHFCO0FBRXJCLGNBQVEsQ0FBUixDQUZxQjtLQUF2QixNQUdPO0FBQ0wsWUFBTSxTQUFTLEdBQVQsS0FBaUIsQ0FBakIsQ0FERDtLQUhQO0FBTUEsYUFBUyxTQUFTLE1BQVQsQ0FBVCxDQVJtQztBQVNuQyxXQUFPLFlBQVksTUFBWixFQUFvQixLQUFwQixFQUEyQixHQUEzQixDQUFQLENBVG1DO0dBQXJDOzs7O0FBRkksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGlCQUFXLFFBQVEsWUFBUjtBQVlmLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pblJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUluUmFuZ2UgPSByZXF1aXJlKCcuL19iYXNlSW5SYW5nZScpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuZnVuY3Rpb24gaW5SYW5nZShudW1iZXIsIHN0YXJ0LCBlbmQpIHtcbiAgc3RhcnQgPSB0b051bWJlcihzdGFydCkgfHwgMDtcbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gc3RhcnQ7XG4gICAgc3RhcnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGVuZCA9IHRvTnVtYmVyKGVuZCkgfHwgMDtcbiAgfVxuICBudW1iZXIgPSB0b051bWJlcihudW1iZXIpO1xuICByZXR1cm4gYmFzZUluUmFuZ2UobnVtYmVyLCBzdGFydCwgZW5kKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5SYW5nZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
