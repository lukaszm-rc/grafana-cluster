'use strict';

System.register([], function (_export, _context) {
  var getTag, isObjectLike, setTag;

  function isSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }
  return {
    setters: [],
    execute: function () {
      getTag = require('./_getTag');
      isObjectLike = require('./isObjectLike');
      setTag = '[object Set]';
      module.exports = isSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzU2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUNwQixXQUFPLGFBQWEsS0FBYixLQUF1QixPQUFPLEtBQVAsS0FBaUIsTUFBakIsQ0FEVjtHQUF0Qjs7OztBQUhJLGVBQVMsUUFBUSxXQUFSO0FBQ1QscUJBQWUsUUFBUSxnQkFBUjtBQUNmLGVBQVM7QUFJYixhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaXNTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuZnVuY3Rpb24gaXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
