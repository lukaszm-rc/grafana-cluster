'use strict';

System.register([], function (_export, _context) {
  var baseIsEqual, get, hasIn, isKey, isStrictComparable, matchesStrictComparable, UNORDERED_COMPARE_FLAG, PARTIAL_COMPARE_FLAG;

  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(path, srcValue);
    }
    return function (object) {
      var objValue = get(object, path);
      return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
    };
  }
  return {
    setters: [],
    execute: function () {
      baseIsEqual = require('./_baseIsEqual');
      get = require('./get');
      hasIn = require('./hasIn');
      isKey = require('./_isKey');
      isStrictComparable = require('./_isStrictComparable');
      matchesStrictComparable = require('./_matchesStrictComparable');
      UNORDERED_COMPARE_FLAG = 1;
      PARTIAL_COMPARE_FLAG = 2;
      module.exports = baseMatchesProperty;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsV0FBUyxtQkFBVCxDQUE2QixJQUE3QixFQUFtQyxRQUFuQyxFQUE2QztBQUMzQyxRQUFJLE1BQU0sSUFBTixLQUFlLG1CQUFtQixRQUFuQixDQUFmLEVBQTZDO0FBQy9DLGFBQU8sd0JBQXdCLElBQXhCLEVBQThCLFFBQTlCLENBQVAsQ0FEK0M7S0FBakQ7QUFHQSxXQUFPLFVBQVMsTUFBVCxFQUFpQjtBQUN0QixVQUFJLFdBQVcsSUFBSSxNQUFKLEVBQVksSUFBWixDQUFYLENBRGtCO0FBRXRCLGFBQU8sUUFBQyxLQUFhLFNBQWIsSUFBMEIsYUFBYSxRQUFiLEdBQXlCLE1BQU0sTUFBTixFQUFjLElBQWQsQ0FBcEQsR0FBMEUsWUFBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLFNBQWhDLEVBQTJDLHlCQUF5QixvQkFBekIsQ0FBckgsQ0FGZTtLQUFqQixDQUpvQztHQUE3Qzs7OztBQVJJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxZQUFNLFFBQVEsT0FBUjtBQUNOLGNBQVEsUUFBUSxTQUFSO0FBQ1IsY0FBUSxRQUFRLFVBQVI7QUFDUiwyQkFBcUIsUUFBUSx1QkFBUjtBQUNyQixnQ0FBMEIsUUFBUSw0QkFBUjtBQUMxQiwrQkFBeUI7QUFDekIsNkJBQXVCO0FBVTNCLGFBQU8sT0FBUCxHQUFpQixtQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xudmFyIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcgPSAxLFxuICAgIFBBUlRJQUxfQ09NUEFSRV9GTEFHID0gMjtcbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUocGF0aCwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKSA/IGhhc0luKG9iamVjdCwgcGF0aCkgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIHVuZGVmaW5lZCwgVU5PUkRFUkVEX0NPTVBBUkVfRkxBRyB8IFBBUlRJQUxfQ09NUEFSRV9GTEFHKTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
