'use strict';

System.register([], function (_export, _context) {
  var baseFindIndex, baseIteratee;

  function findIndex(array, predicate) {
    return array && array.length ? baseFindIndex(array, baseIteratee(predicate, 3)) : -1;
  }
  return {
    setters: [],
    execute: function () {
      baseFindIndex = require('./_baseFindIndex');
      baseIteratee = require('./_baseIteratee');
      module.exports = findIndex;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbmRJbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixTQUExQixFQUFxQztBQUNuQyxXQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sR0FBZ0IsY0FBYyxLQUFkLEVBQXFCLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFyQixDQUExQixHQUE2RSxDQUFDLENBQUQsQ0FEakQ7R0FBckM7Ozs7QUFGSSxzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixxQkFBZSxRQUFRLGlCQUFSO0FBSW5CLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9maW5kSW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMykpIDogLTE7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
