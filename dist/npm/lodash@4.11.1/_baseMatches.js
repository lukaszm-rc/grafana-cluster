'use strict';

System.register([], function (_export, _context) {
  var baseIsMatch, getMatchData, matchesStrictComparable;

  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function (object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  return {
    setters: [],
    execute: function () {
      baseIsMatch = require('./_baseIsMatch');
      getMatchData = require('./_getMatchData');
      matchesStrictComparable = require('./_matchesStrictComparable');
      module.exports = baseMatches;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTWF0Y2hlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QjtBQUMzQixRQUFJLFlBQVksYUFBYSxNQUFiLENBQVosQ0FEdUI7QUFFM0IsUUFBSSxVQUFVLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUIsVUFBVSxDQUFWLEVBQWEsQ0FBYixDQUF6QixFQUEwQztBQUM1QyxhQUFPLHdCQUF3QixVQUFVLENBQVYsRUFBYSxDQUFiLENBQXhCLEVBQXlDLFVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBekMsQ0FBUCxDQUQ0QztLQUE5QztBQUdBLFdBQU8sVUFBUyxNQUFULEVBQWlCO0FBQ3RCLGFBQU8sV0FBVyxNQUFYLElBQXFCLFlBQVksTUFBWixFQUFvQixNQUFwQixFQUE0QixTQUE1QixDQUFyQixDQURlO0tBQWpCLENBTG9CO0dBQTdCOzs7O0FBSEksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixnQ0FBMEIsUUFBUSw0QkFBUjtBQVU5QixhQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VNYXRjaGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
