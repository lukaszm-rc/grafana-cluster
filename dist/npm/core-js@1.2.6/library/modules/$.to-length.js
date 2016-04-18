'use strict';

System.register([], function (_export, _context) {
  var toInteger, min;
  return {
    setters: [],
    execute: function () {
      toInteger = require('./$.to-integer');
      min = Math.min;

      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxnQkFBUjtBQUNaLFlBQU0sS0FBSyxHQUFMOztBQUNWLGFBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYTtBQUM1QixlQUFPLEtBQUssQ0FBTCxHQUFTLElBQUksVUFBVSxFQUFWLENBQUosRUFBbUIsZ0JBQW5CLENBQVQsR0FBZ0QsQ0FBaEQsQ0FEcUI7T0FBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC50by1sZW5ndGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpLFxuICAgIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
