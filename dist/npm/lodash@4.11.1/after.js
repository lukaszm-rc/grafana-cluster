'use strict';

System.register([], function (_export, _context) {
  var toInteger, FUNC_ERROR_TEXT;

  function after(n, func) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function () {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  }
  return {
    setters: [],
    execute: function () {
      toInteger = require('./toInteger');
      FUNC_ERROR_TEXT = 'Expected a function';
      module.exports = after;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2FmdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQixJQUFsQixFQUF3QjtBQUN0QixRQUFJLE9BQU8sSUFBUCxJQUFlLFVBQWYsRUFBMkI7QUFDN0IsWUFBTSxJQUFJLFNBQUosQ0FBYyxlQUFkLENBQU4sQ0FENkI7S0FBL0I7QUFHQSxRQUFJLFVBQVUsQ0FBVixDQUFKLENBSnNCO0FBS3RCLFdBQU8sWUFBVztBQUNoQixVQUFJLEVBQUUsQ0FBRixHQUFNLENBQU4sRUFBUztBQUNYLGVBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixTQUFqQixDQUFQLENBRFc7T0FBYjtLQURLLENBTGU7R0FBeEI7Ozs7QUFGSSxrQkFBWSxRQUFRLGFBQVI7QUFDWix3QkFBa0I7QUFZdEIsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2FmdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5mdW5jdGlvbiBhZnRlcihuLCBmdW5jKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIG4gPSB0b0ludGVnZXIobik7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoLS1uIDwgMSkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFmdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
