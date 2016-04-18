'use strict';

System.register([], function (_export, _context) {
  var MapCache, assocSet, LARGE_ARRAY_SIZE;

  function stackSet(key, value) {
    var data = this.__data__,
        array = data.array;
    if (array) {
      if (array.length < LARGE_ARRAY_SIZE - 1) {
        assocSet(array, key, value);
      } else {
        data.array = null;
        data.map = new MapCache(array);
      }
    }
    var map = data.map;
    if (map) {
      map.set(key, value);
    }
    return this;
  }
  return {
    setters: [],
    execute: function () {
      MapCache = require('./_MapCache');
      assocSet = require('./_assocSet');
      LARGE_ARRAY_SIZE = 200;
      module.exports = stackSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zdGFja1NldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QixLQUF2QixFQUE4QjtBQUM1QixRQUFJLE9BQU8sS0FBSyxRQUFMO1FBQ1AsUUFBUSxLQUFLLEtBQUwsQ0FGZ0I7QUFHNUIsUUFBSSxLQUFKLEVBQVc7QUFDVCxVQUFJLE1BQU0sTUFBTixHQUFnQixtQkFBbUIsQ0FBbkIsRUFBdUI7QUFDekMsaUJBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFxQixLQUFyQixFQUR5QztPQUEzQyxNQUVPO0FBQ0wsYUFBSyxLQUFMLEdBQWEsSUFBYixDQURLO0FBRUwsYUFBSyxHQUFMLEdBQVcsSUFBSSxRQUFKLENBQWEsS0FBYixDQUFYLENBRks7T0FGUDtLQURGO0FBUUEsUUFBSSxNQUFNLEtBQUssR0FBTCxDQVhrQjtBQVk1QixRQUFJLEdBQUosRUFBUztBQUNQLFVBQUksR0FBSixDQUFRLEdBQVIsRUFBYSxLQUFiLEVBRE87S0FBVDtBQUdBLFdBQU8sSUFBUCxDQWY0QjtHQUE5Qjs7OztBQUhJLGlCQUFXLFFBQVEsYUFBUjtBQUNYLGlCQUFXLFFBQVEsYUFBUjtBQUNYLHlCQUFtQjtBQWtCdkIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19zdGFja1NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBhc3NvY1NldCA9IHJlcXVpcmUoJy4vX2Fzc29jU2V0Jyk7XG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgYXJyYXkgPSBkYXRhLmFycmF5O1xuICBpZiAoYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgKExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgYXNzb2NTZXQoYXJyYXksIGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmFycmF5ID0gbnVsbDtcbiAgICAgIGRhdGEubWFwID0gbmV3IE1hcENhY2hlKGFycmF5KTtcbiAgICB9XG4gIH1cbiAgdmFyIG1hcCA9IGRhdGEubWFwO1xuICBpZiAobWFwKSB7XG4gICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
