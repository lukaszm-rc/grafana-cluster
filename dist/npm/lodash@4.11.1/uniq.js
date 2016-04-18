'use strict';

System.register([], function (_export, _context) {
  var baseUniq;

  function uniq(array) {
    return array && array.length ? baseUniq(array) : [];
  }
  return {
    setters: [],
    execute: function () {
      baseUniq = require('./_baseUniq');
      module.exports = uniq;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuaXEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ25CLFdBQU8sS0FBQyxJQUFTLE1BQU0sTUFBTixHQUFnQixTQUFTLEtBQVQsQ0FBMUIsR0FBNEMsRUFBNUMsQ0FEWTtHQUFyQjs7OztBQURJLGlCQUFXLFFBQVEsYUFBUjtBQUlmLGFBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS91bmlxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuZnVuY3Rpb24gdW5pcShhcnJheSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSkgOiBbXTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdW5pcTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
