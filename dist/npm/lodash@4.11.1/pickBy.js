'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, basePickBy;

  function pickBy(object, predicate) {
    return object == null ? {} : basePickBy(object, baseIteratee(predicate));
  }
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      basePickBy = require('./_basePickBy');
      module.exports = pickBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BpY2tCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixTQUF4QixFQUFtQztBQUNqQyxXQUFPLFVBQVUsSUFBVixHQUFpQixFQUFqQixHQUFzQixXQUFXLE1BQVgsRUFBbUIsYUFBYSxTQUFiLENBQW5CLENBQXRCLENBRDBCO0dBQW5DOzs7O0FBRkkscUJBQWUsUUFBUSxpQkFBUjtBQUNmLG1CQUFhLFFBQVEsZUFBUjtBQUlqQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvcGlja0J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVBpY2tCeSA9IHJlcXVpcmUoJy4vX2Jhc2VQaWNrQnknKTtcbmZ1bmN0aW9uIHBpY2tCeShvYmplY3QsIHByZWRpY2F0ZSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB7fSA6IGJhc2VQaWNrQnkob2JqZWN0LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHBpY2tCeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
