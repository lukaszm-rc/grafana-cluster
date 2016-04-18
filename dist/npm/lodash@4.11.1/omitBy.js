'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, basePickBy;

  function omitBy(object, predicate) {
    predicate = baseIteratee(predicate);
    return basePickBy(object, function (value, key) {
      return !predicate(value, key);
    });
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      basePickBy = require('./_basePickBy');
      module.exports = omitBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL29taXRCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixTQUF4QixFQUFtQztBQUNqQyxnQkFBWSxhQUFhLFNBQWIsQ0FBWixDQURpQztBQUVqQyxXQUFPLFdBQVcsTUFBWCxFQUFtQixVQUFTLEtBQVQsRUFBZ0IsR0FBaEIsRUFBcUI7QUFDN0MsYUFBTyxDQUFDLFVBQVUsS0FBVixFQUFpQixHQUFqQixDQUFELENBRHNDO0tBQXJCLENBQTFCLENBRmlDO0dBQW5DOzs7O0FBRkkscUJBQWUsUUFBUSxpQkFBUjtBQUNmLG1CQUFhLFFBQVEsZUFBUjtBQU9qQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvb21pdEJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVBpY2tCeSA9IHJlcXVpcmUoJy4vX2Jhc2VQaWNrQnknKTtcbmZ1bmN0aW9uIG9taXRCeShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBwcmVkaWNhdGUgPSBiYXNlSXRlcmF0ZWUocHJlZGljYXRlKTtcbiAgcmV0dXJuIGJhc2VQaWNrQnkob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuICFwcmVkaWNhdGUodmFsdWUsIGtleSk7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBvbWl0Qnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
