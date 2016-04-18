'use strict';

System.register([], function (_export, _context) {
  var createCompounder, kebabCase;
  return {
    setters: [],
    execute: function () {
      createCompounder = require('./_createCompounder');
      kebabCase = createCompounder(function (result, word, index) {
        return result + (index ? '-' : '') + word.toLowerCase();
      });

      module.exports = kebabCase;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2tlYmFiQ2FzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0kseUJBQW1CLFFBQVEscUJBQVI7QUFDbkIsa0JBQVksaUJBQWlCLFVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QixLQUF2QixFQUE4QjtBQUM3RCxlQUFPLFVBQVUsUUFBUSxHQUFSLEdBQWMsRUFBZCxDQUFWLEdBQThCLEtBQUssV0FBTCxFQUE5QixDQURzRDtPQUE5Qjs7QUFHakMsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2tlYmFiQ2FzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyk7XG52YXIga2ViYWJDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyAnLScgOiAnJykgKyB3b3JkLnRvTG93ZXJDYXNlKCk7XG59KTtcbm1vZHVsZS5leHBvcnRzID0ga2ViYWJDYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9