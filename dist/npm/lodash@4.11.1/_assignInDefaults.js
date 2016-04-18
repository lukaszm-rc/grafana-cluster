'use strict';

System.register([], function (_export, _context) {
  var eq, objectProto, hasOwnProperty;

  function assignInDefaults(objValue, srcValue, key, object) {
    if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
      return srcValue;
    }
    return objValue;
  }
  return {
    setters: [],
    execute: function () {
      eq = require('./eq');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = assignInDefaults;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hc3NpZ25JbkRlZmF1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxRQUFwQyxFQUE4QyxHQUE5QyxFQUFtRCxNQUFuRCxFQUEyRDtBQUN6RCxRQUFJLGFBQWEsU0FBYixJQUEyQixHQUFHLFFBQUgsRUFBYSxZQUFZLEdBQVosQ0FBYixLQUFrQyxDQUFDLGVBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixHQUE1QixDQUFELEVBQW9DO0FBQ25HLGFBQU8sUUFBUCxDQURtRztLQUFyRztBQUdBLFdBQU8sUUFBUCxDQUp5RDtHQUEzRDs7OztBQUhJLFdBQUssUUFBUSxNQUFSO0FBQ0wsb0JBQWMsT0FBTyxTQUFQO0FBQ2QsdUJBQWlCLFlBQVksY0FBWjtBQU9yQixhQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19hc3NpZ25JbkRlZmF1bHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBhc3NpZ25JbkRlZmF1bHRzKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgfHwgKGVxKG9ialZhbHVlLCBvYmplY3RQcm90b1trZXldKSAmJiAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSB7XG4gICAgcmV0dXJuIHNyY1ZhbHVlO1xuICB9XG4gIHJldHVybiBvYmpWYWx1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduSW5EZWZhdWx0cztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
