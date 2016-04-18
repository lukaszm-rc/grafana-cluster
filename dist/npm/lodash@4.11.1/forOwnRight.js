'use strict';

System.register([], function (_export, _context) {
  var baseForOwnRight, baseIteratee;

  function forOwnRight(object, iteratee) {
    return object && baseForOwnRight(object, baseIteratee(iteratee));
  }
  return {
    setters: [],
    execute: function () {
      baseForOwnRight = require('./_baseForOwnRight');
      baseIteratee = require('./_baseIteratee');
      module.exports = forOwnRight;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Zvck93blJpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxXQUFULENBQXFCLE1BQXJCLEVBQTZCLFFBQTdCLEVBQXVDO0FBQ3JDLFdBQU8sVUFBVSxnQkFBZ0IsTUFBaEIsRUFBd0IsYUFBYSxRQUFiLENBQXhCLENBQVYsQ0FEOEI7R0FBdkM7Ozs7QUFGSSx3QkFBa0IsUUFBUSxvQkFBUjtBQUNsQixxQkFBZSxRQUFRLGlCQUFSO0FBSW5CLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mb3JPd25SaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGb3JPd25SaWdodCA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd25SaWdodCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuZnVuY3Rpb24gZm9yT3duUmlnaHQob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3JPd25SaWdodChvYmplY3QsIGJhc2VJdGVyYXRlZShpdGVyYXRlZSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmb3JPd25SaWdodDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
