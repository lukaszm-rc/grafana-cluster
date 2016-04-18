'use strict';

System.register([], function (_export, _context) {
  var baseClone, baseIteratee;

  function iteratee(func) {
    return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
  }
  return {
    setters: [],
    execute: function () {
      baseClone = require('./_baseClone');
      baseIteratee = require('./_baseIteratee');
      module.exports = iteratee;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2l0ZXJhdGVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCO0FBQ3RCLFdBQU8sYUFBYSxPQUFPLElBQVAsSUFBZSxVQUFmLEdBQTRCLElBQTVCLEdBQW1DLFVBQVUsSUFBVixFQUFnQixJQUFoQixDQUFuQyxDQUFwQixDQURzQjtHQUF4Qjs7OztBQUZJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLHFCQUFlLFFBQVEsaUJBQVI7QUFJbkIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2l0ZXJhdGVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyk7XG5mdW5jdGlvbiBpdGVyYXRlZShmdW5jKSB7XG4gIHJldHVybiBiYXNlSXRlcmF0ZWUodHlwZW9mIGZ1bmMgPT0gJ2Z1bmN0aW9uJyA/IGZ1bmMgOiBiYXNlQ2xvbmUoZnVuYywgdHJ1ZSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRlZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
