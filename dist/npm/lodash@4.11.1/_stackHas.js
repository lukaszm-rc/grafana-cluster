'use strict';

System.register([], function (_export, _context) {
  var assocHas;

  function stackHas(key) {
    var data = this.__data__,
        array = data.array;
    return array ? assocHas(array, key) : data.map.has(key);
  }
  return {
    setters: [],
    execute: function () {
      assocHas = require('./_assocHas');
      module.exports = stackHas;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zdGFja0hhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QjtBQUNyQixRQUFJLE9BQU8sS0FBSyxRQUFMO1FBQ1AsUUFBUSxLQUFLLEtBQUwsQ0FGUztBQUdyQixXQUFPLFFBQVEsU0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQVIsR0FBK0IsS0FBSyxHQUFMLENBQVMsR0FBVCxDQUFhLEdBQWIsQ0FBL0IsQ0FIYztHQUF2Qjs7OztBQURJLGlCQUFXLFFBQVEsYUFBUjtBQU1mLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fc3RhY2tIYXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhc3NvY0hhcyA9IHJlcXVpcmUoJy4vX2Fzc29jSGFzJyk7XG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgYXJyYXkgPSBkYXRhLmFycmF5O1xuICByZXR1cm4gYXJyYXkgPyBhc3NvY0hhcyhhcnJheSwga2V5KSA6IGRhdGEubWFwLmhhcyhrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
