"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 20.2.2.14 Math.expm1(x)
      module.exports = Math.expm1 || function expm1(x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5tYXRoLWV4cG0xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxhQUFPLE9BQVAsR0FBaUIsS0FBSyxLQUFMLElBQWMsU0FBUyxLQUFULENBQWUsQ0FBZixFQUFpQjtBQUM5QyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUQsQ0FBTCxJQUFZLENBQVosR0FBZ0IsQ0FBaEIsR0FBb0IsSUFBSSxDQUFDLElBQUQsSUFBUyxJQUFJLElBQUosR0FBVyxJQUFJLElBQUksQ0FBSixHQUFRLENBQVIsR0FBWSxLQUFLLEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBZCxDQURyQjtPQUFqQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQubWF0aC1leHBtMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguZXhwbTEgfHwgZnVuY3Rpb24gZXhwbTEoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
