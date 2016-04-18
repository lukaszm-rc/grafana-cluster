'use strict';

System.register([], function (_export, _context) {
  var isObject, regexpTag, objectProto, objectToString;

  function isRegExp(value) {
    return isObject(value) && objectToString.call(value) == regexpTag;
  }
  return {
    setters: [],
    execute: function () {
      isObject = require('./isObject');
      regexpTag = '[object RegExp]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isRegExp;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzUmVnRXhwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFdBQU8sU0FBUyxLQUFULEtBQW1CLGVBQWUsSUFBZixDQUFvQixLQUFwQixLQUE4QixTQUE5QixDQURIO0dBQXpCOzs7O0FBSkksaUJBQVcsUUFBUSxZQUFSO0FBQ1gsa0JBQVk7QUFDWixvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxRQUFaO0FBSXJCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc1JlZ0V4cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xudmFyIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSByZWdleHBUYWc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzUmVnRXhwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
