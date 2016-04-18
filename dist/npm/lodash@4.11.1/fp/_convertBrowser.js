'use strict';

System.register([], function (_export, _context) {
  var baseConvert;

  function browserConvert(lodash, options) {
    return baseConvert(lodash, lodash, options);
  }
  return {
    setters: [],
    execute: function () {
      baseConvert = require('./_baseConvert');
      if (typeof _ == 'function') {
        _ = browserConvert(_.runInContext());
      }
      module.exports = browserConvert;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL19jb252ZXJ0QnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxPQUFoQyxFQUF5QztBQUN2QyxXQUFPLFlBQVksTUFBWixFQUFvQixNQUFwQixFQUE0QixPQUE1QixDQUFQLENBRHVDO0dBQXpDOzs7O0FBREksb0JBQWMsUUFBUSxnQkFBUjtBQUlsQixVQUFJLE9BQU8sQ0FBUCxJQUFZLFVBQVosRUFBd0I7QUFDMUIsWUFBSSxlQUFlLEVBQUUsWUFBRixFQUFmLENBQUosQ0FEMEI7T0FBNUI7QUFHQSxhQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnAvX2NvbnZlcnRCcm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUNvbnZlcnQgPSByZXF1aXJlKCcuL19iYXNlQ29udmVydCcpO1xuZnVuY3Rpb24gYnJvd3NlckNvbnZlcnQobG9kYXNoLCBvcHRpb25zKSB7XG4gIHJldHVybiBiYXNlQ29udmVydChsb2Rhc2gsIGxvZGFzaCwgb3B0aW9ucyk7XG59XG5pZiAodHlwZW9mIF8gPT0gJ2Z1bmN0aW9uJykge1xuICBfID0gYnJvd3NlckNvbnZlcnQoXy5ydW5JbkNvbnRleHQoKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXJDb252ZXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
