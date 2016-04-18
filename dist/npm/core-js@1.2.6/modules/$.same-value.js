"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 7.2.9 SameValue(x, y)
      module.exports = Object.is || function is(x, y) {
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxhQUFPLE9BQVAsR0FBaUIsT0FBTyxFQUFQLElBQWEsU0FBUyxFQUFULENBQVksQ0FBWixFQUFlLENBQWYsRUFBaUI7QUFDN0MsZUFBTyxNQUFNLENBQU4sR0FBVSxNQUFNLENBQU4sSUFBVyxJQUFJLENBQUosS0FBVSxJQUFJLENBQUosR0FBUSxLQUFLLENBQUwsSUFBVSxLQUFLLENBQUwsQ0FEWDtPQUFqQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuc2FtZS12YWx1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSl7XG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
