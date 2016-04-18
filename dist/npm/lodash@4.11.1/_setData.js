'use strict';

System.register([], function (_export, _context) {
  var baseSetData, now, HOT_COUNT, HOT_SPAN, setData;
  return {
    setters: [],
    execute: function () {
      baseSetData = require('./_baseSetData');
      now = require('./now');
      HOT_COUNT = 150;
      HOT_SPAN = 16;

      setData = function () {
        var count = 0,
            lastCalled = 0;
        return function (key, value) {
          var stamp = now(),
              remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return key;
            }
          } else {
            count = 0;
          }
          return baseSetData(key, value);
        };
      }();

      module.exports = setData;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zZXREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsWUFBTSxRQUFRLE9BQVI7QUFDTixrQkFBWTtBQUNaLGlCQUFXOztBQUNYLGdCQUFXLFlBQVc7QUFDeEIsWUFBSSxRQUFRLENBQVI7WUFDQSxhQUFhLENBQWIsQ0FGb0I7QUFHeEIsZUFBTyxVQUFTLEdBQVQsRUFBYyxLQUFkLEVBQXFCO0FBQzFCLGNBQUksUUFBUSxLQUFSO2NBQ0EsWUFBWSxZQUFZLFFBQVEsVUFBUixDQUFaLENBRlU7QUFHMUIsdUJBQWEsS0FBYixDQUgwQjtBQUkxQixjQUFJLFlBQVksQ0FBWixFQUFlO0FBQ2pCLGdCQUFJLEVBQUUsS0FBRixJQUFXLFNBQVgsRUFBc0I7QUFDeEIscUJBQU8sR0FBUCxDQUR3QjthQUExQjtXQURGLE1BSU87QUFDTCxvQkFBUSxDQUFSLENBREs7V0FKUDtBQU9BLGlCQUFPLFlBQVksR0FBWixFQUFpQixLQUFqQixDQUFQLENBWDBCO1NBQXJCLENBSGlCO09BQVg7O0FBaUJmLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fc2V0RGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VTZXREYXRhID0gcmVxdWlyZSgnLi9fYmFzZVNldERhdGEnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpO1xudmFyIEhPVF9DT1VOVCA9IDE1MCxcbiAgICBIT1RfU1BBTiA9IDE2O1xudmFyIHNldERhdGEgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgc3RhbXAgPSBub3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBiYXNlU2V0RGF0YShrZXksIHZhbHVlKTtcbiAgfTtcbn0oKSk7XG5tb2R1bGUuZXhwb3J0cyA9IHNldERhdGE7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
