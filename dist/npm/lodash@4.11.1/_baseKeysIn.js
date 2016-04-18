'use strict';

System.register([], function (_export, _context) {
  var Reflect, iteratorToArray, objectProto, enumerate, propertyIsEnumerable;

  function baseKeysIn(object) {
    object = object == null ? object : Object(object);
    var result = [];
    for (var key in object) {
      result.push(key);
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      Reflect = require('./_Reflect');
      iteratorToArray = require('./_iteratorToArray');
      objectProto = Object.prototype;
      enumerate = Reflect ? Reflect.enumerate : undefined;
      propertyIsEnumerable = objectProto.propertyIsEnumerable;
      if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
        baseKeysIn = function baseKeysIn(object) {
          return iteratorToArray(enumerate(object));
        };
      }
      module.exports = baseKeysIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlS2V5c0luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCO0FBQzFCLGFBQVMsVUFBVSxJQUFWLEdBQWlCLE1BQWpCLEdBQTBCLE9BQU8sTUFBUCxDQUExQixDQURpQjtBQUUxQixRQUFJLFNBQVMsRUFBVCxDQUZzQjtBQUcxQixTQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3RCLGFBQU8sSUFBUCxDQUFZLEdBQVosRUFEc0I7S0FBeEI7QUFHQSxXQUFPLE1BQVAsQ0FOMEI7R0FBNUI7Ozs7QUFMSSxnQkFBVSxRQUFRLFlBQVI7QUFDVix3QkFBa0IsUUFBUSxvQkFBUjtBQUNsQixvQkFBYyxPQUFPLFNBQVA7QUFDZCxrQkFBWSxVQUFVLFFBQVEsU0FBUixHQUFvQixTQUE5QjtBQUNaLDZCQUF1QixZQUFZLG9CQUFaO0FBUzNCLFVBQUksYUFBYSxDQUFDLHFCQUFxQixJQUFyQixDQUEwQixFQUFDLFdBQVcsQ0FBWCxFQUEzQixFQUEwQyxTQUExQyxDQUFELEVBQXVEO0FBQ3RFLHFCQUFhLG9CQUFTLE1BQVQsRUFBaUI7QUFDNUIsaUJBQU8sZ0JBQWdCLFVBQVUsTUFBVixDQUFoQixDQUFQLENBRDRCO1NBQWpCLENBRHlEO09BQXhFO0FBS0EsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlS2V5c0luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgUmVmbGVjdCA9IHJlcXVpcmUoJy4vX1JlZmxlY3QnKSxcbiAgICBpdGVyYXRvclRvQXJyYXkgPSByZXF1aXJlKCcuL19pdGVyYXRvclRvQXJyYXknKTtcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgZW51bWVyYXRlID0gUmVmbGVjdCA/IFJlZmxlY3QuZW51bWVyYXRlIDogdW5kZWZpbmVkLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBvYmplY3QgPSBvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IE9iamVjdChvYmplY3QpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5pZiAoZW51bWVyYXRlICYmICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsndmFsdWVPZic6IDF9LCAndmFsdWVPZicpKSB7XG4gIGJhc2VLZXlzSW4gPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gaXRlcmF0b3JUb0FycmF5KGVudW1lcmF0ZShvYmplY3QpKTtcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
