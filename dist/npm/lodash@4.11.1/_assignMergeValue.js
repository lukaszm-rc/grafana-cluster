'use strict';

System.register([], function (_export, _context) {
  var eq;

  function assignMergeValue(object, key, value) {
    if (value !== undefined && !eq(object[key], value) || typeof key == 'number' && value === undefined && !(key in object)) {
      object[key] = value;
    }
  }
  return {
    setters: [],
    execute: function () {
      eq = require('./eq');
      module.exports = assignMergeValue;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hc3NpZ25NZXJnZVZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxHQUFsQyxFQUF1QyxLQUF2QyxFQUE4QztBQUM1QyxRQUFJLEtBQUMsS0FBVSxTQUFWLElBQXVCLENBQUMsR0FBRyxPQUFPLEdBQVAsQ0FBSCxFQUFnQixLQUFoQixDQUFELElBQTZCLE9BQU8sR0FBUCxJQUFjLFFBQWQsSUFBMEIsVUFBVSxTQUFWLElBQXVCLEVBQUUsT0FBTyxNQUFQLENBQUYsRUFBbUI7QUFDM0gsYUFBTyxHQUFQLElBQWMsS0FBZCxDQUQySDtLQUE3SDtHQURGOzs7O0FBREksV0FBSyxRQUFRLE1BQVI7QUFNVCxhQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19hc3NpZ25NZXJnZVZhbHVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8ICh0eXBlb2Yga2V5ID09ICdudW1iZXInICYmIHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbk1lcmdlVmFsdWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
