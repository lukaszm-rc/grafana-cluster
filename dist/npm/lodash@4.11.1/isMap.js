'use strict';

System.register([], function (_export, _context) {
  var getTag, isObjectLike, mapTag;

  function isMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }
  return {
    setters: [],
    execute: function () {
      getTag = require('./_getTag');
      isObjectLike = require('./isObjectLike');
      mapTag = '[object Map]';
      module.exports = isMap;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUNwQixXQUFPLGFBQWEsS0FBYixLQUF1QixPQUFPLEtBQVAsS0FBaUIsTUFBakIsQ0FEVjtHQUF0Qjs7OztBQUhJLGVBQVMsUUFBUSxXQUFSO0FBQ1QscUJBQWUsUUFBUSxnQkFBUjtBQUNmLGVBQVM7QUFJYixhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaXNNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuZnVuY3Rpb24gaXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
