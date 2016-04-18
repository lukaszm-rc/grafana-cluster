'use strict';

System.register([], function (_export, _context) {
  var baseUnset;

  function unset(object, path) {
    return object == null ? true : baseUnset(object, path);
  }
  return {
    setters: [],
    execute: function () {
      baseUnset = require('./_baseUnset');
      module.exports = unset;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Vuc2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QjtBQUMzQixXQUFPLFVBQVUsSUFBVixHQUFpQixJQUFqQixHQUF3QixVQUFVLE1BQVYsRUFBa0IsSUFBbEIsQ0FBeEIsQ0FEb0I7R0FBN0I7Ozs7QUFESSxrQkFBWSxRQUFRLGNBQVI7QUFJaEIsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3Vuc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVVuc2V0ID0gcmVxdWlyZSgnLi9fYmFzZVVuc2V0Jyk7XG5mdW5jdGlvbiB1bnNldChvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdHJ1ZSA6IGJhc2VVbnNldChvYmplY3QsIHBhdGgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB1bnNldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
