'use strict';

System.register([], function (_export, _context) {
  var baseIsMatch, getMatchData;

  function isMatchWith(object, source, customizer) {
    customizer = typeof customizer == 'function' ? customizer : undefined;
    return baseIsMatch(object, source, getMatchData(source), customizer);
  }
  return {
    setters: [],
    execute: function () {
      baseIsMatch = require('./_baseIsMatch');
      getMatchData = require('./_getMatchData');
      module.exports = isMatchWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzTWF0Y2hXaXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxXQUFULENBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLFVBQXJDLEVBQWlEO0FBQy9DLGlCQUFhLE9BQU8sVUFBUCxJQUFxQixVQUFyQixHQUFrQyxVQUFsQyxHQUErQyxTQUEvQyxDQURrQztBQUUvQyxXQUFPLFlBQVksTUFBWixFQUFvQixNQUFwQixFQUE0QixhQUFhLE1BQWIsQ0FBNUIsRUFBa0QsVUFBbEQsQ0FBUCxDQUYrQztHQUFqRDs7OztBQUZJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxxQkFBZSxRQUFRLGlCQUFSO0FBS25CLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9pc01hdGNoV2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKTtcbmZ1bmN0aW9uIGlzTWF0Y2hXaXRoKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKSB7XG4gIGN1c3RvbWl6ZXIgPSB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nID8gY3VzdG9taXplciA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBnZXRNYXRjaERhdGEoc291cmNlKSwgY3VzdG9taXplcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzTWF0Y2hXaXRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
