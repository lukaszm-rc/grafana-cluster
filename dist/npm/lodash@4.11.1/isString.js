'use strict';

System.register([], function (_export, _context) {
  var isArray, isObjectLike, stringTag, objectProto, objectToString;

  function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
  }
  return {
    setters: [],
    execute: function () {
      isArray = require('./isArray');
      isObjectLike = require('./isObjectLike');
      stringTag = '[object String]';
      objectProto = Object.prototype;
      objectToString = objectProto.toString;
      module.exports = isString;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzU3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFdBQU8sT0FBTyxLQUFQLElBQWdCLFFBQWhCLElBQTZCLENBQUMsUUFBUSxLQUFSLENBQUQsSUFBbUIsYUFBYSxLQUFiLENBQW5CLElBQTBDLGVBQWUsSUFBZixDQUFvQixLQUFwQixLQUE4QixTQUE5QixDQUR2RDtHQUF6Qjs7OztBQUxJLGdCQUFVLFFBQVEsV0FBUjtBQUNWLHFCQUFlLFFBQVEsZ0JBQVI7QUFDZixrQkFBWTtBQUNaLG9CQUFjLE9BQU8sU0FBUDtBQUNkLHVCQUFpQixZQUFZLFFBQVo7QUFJckIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzU3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8ICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
