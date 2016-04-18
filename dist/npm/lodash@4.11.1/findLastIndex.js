'use strict';

System.register([], function (_export, _context) {
  var baseFindIndex, baseIteratee;

  function findLastIndex(array, predicate) {
    return array && array.length ? baseFindIndex(array, baseIteratee(predicate, 3), true) : -1;
  }
  return {
    setters: [],
    execute: function () {
      baseFindIndex = require('./_baseFindIndex');
      baseIteratee = require('./_baseIteratee');
      module.exports = findLastIndex;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbmRMYXN0SW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsU0FBOUIsRUFBeUM7QUFDdkMsV0FBTyxLQUFDLElBQVMsTUFBTSxNQUFOLEdBQWdCLGNBQWMsS0FBZCxFQUFxQixhQUFhLFNBQWIsRUFBd0IsQ0FBeEIsQ0FBckIsRUFBaUQsSUFBakQsQ0FBMUIsR0FBbUYsQ0FBQyxDQUFELENBRG5EO0dBQXpDOzs7O0FBRkksc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIscUJBQWUsUUFBUSxpQkFBUjtBQUluQixhQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZmluZExhc3RJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyk7XG5mdW5jdGlvbiBmaW5kTGFzdEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyksIHRydWUpIDogLTE7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRMYXN0SW5kZXg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
