"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 20.2.2.20 Math.log1p(x)
      module.exports = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5tYXRoLWxvZzFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxhQUFPLE9BQVAsR0FBaUIsS0FBSyxLQUFMLElBQWMsU0FBUyxLQUFULENBQWUsQ0FBZixFQUFpQjtBQUM5QyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQUMsSUFBRCxJQUFTLElBQUksSUFBSixHQUFXLElBQUksSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLEtBQUssR0FBTCxDQUFTLElBQUksQ0FBSixDQUF4RCxDQUR1QztPQUFqQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQubWF0aC1sb2cxcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
