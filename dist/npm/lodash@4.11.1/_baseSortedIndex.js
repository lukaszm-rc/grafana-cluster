'use strict';

System.register([], function (_export, _context) {
  var baseSortedIndexBy, identity, MAX_ARRAY_LENGTH, HALF_MAX_ARRAY_LENGTH;

  function baseSortedIndex(array, value, retHighest) {
    var low = 0,
        high = array ? array.length : low;
    if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
      while (low < high) {
        var mid = low + high >>> 1,
            computed = array[mid];
        if ((retHighest ? computed <= value : computed < value) && computed !== null) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return high;
    }
    return baseSortedIndexBy(array, value, identity, retHighest);
  }
  return {
    setters: [],
    execute: function () {
      baseSortedIndexBy = require('./_baseSortedIndexBy');
      identity = require('./identity');
      MAX_ARRAY_LENGTH = 4294967295;
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      module.exports = baseSortedIndex;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlU29ydGVkSW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxXQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0MsS0FBaEMsRUFBdUMsVUFBdkMsRUFBbUQ7QUFDakQsUUFBSSxNQUFNLENBQU47UUFDQSxPQUFPLFFBQVEsTUFBTSxNQUFOLEdBQWUsR0FBdkIsQ0FGc0M7QUFHakQsUUFBSSxPQUFPLEtBQVAsSUFBZ0IsUUFBaEIsSUFBNEIsVUFBVSxLQUFWLElBQW1CLFFBQVEscUJBQVIsRUFBK0I7QUFDaEYsYUFBTyxNQUFNLElBQU4sRUFBWTtBQUNqQixZQUFJLE1BQU0sR0FBQyxHQUFNLElBQU4sS0FBZ0IsQ0FBakI7WUFDTixXQUFXLE1BQU0sR0FBTixDQUFYLENBRmE7QUFHakIsWUFBSSxDQUFDLGFBQWMsWUFBWSxLQUFaLEdBQXNCLFdBQVcsS0FBWCxDQUFyQyxJQUEyRCxhQUFhLElBQWIsRUFBbUI7QUFDaEYsZ0JBQU0sTUFBTSxDQUFOLENBRDBFO1NBQWxGLE1BRU87QUFDTCxpQkFBTyxHQUFQLENBREs7U0FGUDtPQUhGO0FBU0EsYUFBTyxJQUFQLENBVmdGO0tBQWxGO0FBWUEsV0FBTyxrQkFBa0IsS0FBbEIsRUFBeUIsS0FBekIsRUFBZ0MsUUFBaEMsRUFBMEMsVUFBMUMsQ0FBUCxDQWZpRDtHQUFuRDs7OztBQUpJLDBCQUFvQixRQUFRLHNCQUFSO0FBQ3BCLGlCQUFXLFFBQVEsWUFBUjtBQUNYLHlCQUFtQjtBQUNuQiw4QkFBd0IscUJBQXFCLENBQXJCO0FBa0I1QixhQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VTb3J0ZWRJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VTb3J0ZWRJbmRleEJ5ID0gcmVxdWlyZSgnLi9fYmFzZVNvcnRlZEluZGV4QnknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcbnZhciBNQVhfQVJSQVlfTEVOR1RIID0gNDI5NDk2NzI5NSxcbiAgICBIQUxGX01BWF9BUlJBWV9MRU5HVEggPSBNQVhfQVJSQVlfTEVOR1RIID4+PiAxO1xuZnVuY3Rpb24gYmFzZVNvcnRlZEluZGV4KGFycmF5LCB2YWx1ZSwgcmV0SGlnaGVzdCkge1xuICB2YXIgbG93ID0gMCxcbiAgICAgIGhpZ2ggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IGxvdztcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA9PT0gdmFsdWUgJiYgaGlnaCA8PSBIQUxGX01BWF9BUlJBWV9MRU5HVEgpIHtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IChsb3cgKyBoaWdoKSA+Pj4gMSxcbiAgICAgICAgICBjb21wdXRlZCA9IGFycmF5W21pZF07XG4gICAgICBpZiAoKHJldEhpZ2hlc3QgPyAoY29tcHV0ZWQgPD0gdmFsdWUpIDogKGNvbXB1dGVkIDwgdmFsdWUpKSAmJiBjb21wdXRlZCAhPT0gbnVsbCkge1xuICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhpZ2g7XG4gIH1cbiAgcmV0dXJuIGJhc2VTb3J0ZWRJbmRleEJ5KGFycmF5LCB2YWx1ZSwgaWRlbnRpdHksIHJldEhpZ2hlc3QpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU29ydGVkSW5kZXg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
