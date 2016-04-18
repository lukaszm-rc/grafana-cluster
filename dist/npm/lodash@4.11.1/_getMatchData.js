'use strict';

System.register([], function (_export, _context) {
  var isStrictComparable, toPairs;

  function getMatchData(object) {
    var result = toPairs(object),
        length = result.length;
    while (length--) {
      result[length][2] = isStrictComparable(result[length][1]);
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      isStrictComparable = require('./_isStrictComparable');
      toPairs = require('./toPairs');
      module.exports = getMatchData;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRNYXRjaERhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDNUIsUUFBSSxTQUFTLFFBQVEsTUFBUixDQUFUO1FBQ0EsU0FBUyxPQUFPLE1BQVAsQ0FGZTtBQUc1QixXQUFPLFFBQVAsRUFBaUI7QUFDZixhQUFPLE1BQVAsRUFBZSxDQUFmLElBQW9CLG1CQUFtQixPQUFPLE1BQVAsRUFBZSxDQUFmLENBQW5CLENBQXBCLENBRGU7S0FBakI7QUFHQSxXQUFPLE1BQVAsQ0FONEI7R0FBOUI7Ozs7QUFGSSwyQkFBcUIsUUFBUSx1QkFBUjtBQUNyQixnQkFBVSxRQUFRLFdBQVI7QUFTZCxhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2dldE1hdGNoRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvUGFpcnMgPSByZXF1aXJlKCcuL3RvUGFpcnMnKTtcbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IHRvUGFpcnMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHJlc3VsdFtsZW5ndGhdWzJdID0gaXNTdHJpY3RDb21wYXJhYmxlKHJlc3VsdFtsZW5ndGhdWzFdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
