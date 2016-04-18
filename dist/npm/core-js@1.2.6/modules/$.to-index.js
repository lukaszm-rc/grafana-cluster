'use strict';

System.register([], function (_export, _context) {
  var toInteger, max, min;
  return {
    setters: [],
    execute: function () {
      toInteger = require('./$.to-integer');
      max = Math.max;
      min = Math.min;

      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50by1pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxnQkFBUjtBQUNaLFlBQU0sS0FBSyxHQUFMO0FBQ04sWUFBTSxLQUFLLEdBQUw7O0FBQ1YsYUFBTyxPQUFQLEdBQWlCLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUN2QyxnQkFBUSxVQUFVLEtBQVYsQ0FBUixDQUR1QztBQUV2QyxlQUFPLFFBQVEsQ0FBUixHQUFZLElBQUksUUFBUSxNQUFSLEVBQWdCLENBQXBCLENBQVosR0FBcUMsSUFBSSxLQUFKLEVBQVcsTUFBWCxDQUFyQyxDQUZnQztPQUF4QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQudG8taW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpLFxuICAgIG1heCA9IE1hdGgubWF4LFxuICAgIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
