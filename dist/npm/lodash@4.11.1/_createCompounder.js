'use strict';

System.register([], function (_export, _context) {
  var arrayReduce, deburr, words, rsApos, reApos;

  function createCompounder(callback) {
    return function (string) {
      return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
  }
  return {
    setters: [],
    execute: function () {
      arrayReduce = require('./_arrayReduce');
      deburr = require('./deburr');
      words = require('./words');
      rsApos = '[\'’]';
      reApos = RegExp(rsApos, 'g');
      module.exports = createCompounder;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVDb21wb3VuZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxnQkFBVCxDQUEwQixRQUExQixFQUFvQztBQUNsQyxXQUFPLFVBQVMsTUFBVCxFQUFpQjtBQUN0QixhQUFPLFlBQVksTUFBTSxPQUFPLE1BQVAsRUFBZSxPQUFmLENBQXVCLE1BQXZCLEVBQStCLEVBQS9CLENBQU4sQ0FBWixFQUF1RCxRQUF2RCxFQUFpRSxFQUFqRSxDQUFQLENBRHNCO0tBQWpCLENBRDJCO0dBQXBDOzs7O0FBTEksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGVBQVMsUUFBUSxVQUFSO0FBQ1QsY0FBUSxRQUFRLFNBQVI7QUFDUixlQUFTO0FBQ1QsZUFBUyxPQUFPLE1BQVAsRUFBZSxHQUFmO0FBTWIsYUFBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY3JlYXRlQ29tcG91bmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiO1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5mdW5jdGlvbiBjcmVhdGVDb21wb3VuZGVyKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2Uod29yZHMoZGVidXJyKHN0cmluZykucmVwbGFjZShyZUFwb3MsICcnKSksIGNhbGxiYWNrLCAnJyk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
