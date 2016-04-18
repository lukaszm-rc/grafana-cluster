'use strict';

System.register([], function (_export, _context) {
  var assocGet;

  function stackGet(key) {
    var data = this.__data__,
        array = data.array;
    return array ? assocGet(array, key) : data.map.get(key);
  }
  return {
    setters: [],
    execute: function () {
      assocGet = require('./_assocGet');
      module.exports = stackGet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zdGFja0dldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QjtBQUNyQixRQUFJLE9BQU8sS0FBSyxRQUFMO1FBQ1AsUUFBUSxLQUFLLEtBQUwsQ0FGUztBQUdyQixXQUFPLFFBQVEsU0FBUyxLQUFULEVBQWdCLEdBQWhCLENBQVIsR0FBK0IsS0FBSyxHQUFMLENBQVMsR0FBVCxDQUFhLEdBQWIsQ0FBL0IsQ0FIYztHQUF2Qjs7OztBQURJLGlCQUFXLFFBQVEsYUFBUjtBQU1mLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fc3RhY2tHZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhc3NvY0dldCA9IHJlcXVpcmUoJy4vX2Fzc29jR2V0Jyk7XG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgYXJyYXkgPSBkYXRhLmFycmF5O1xuICByZXR1cm4gYXJyYXkgPyBhc3NvY0dldChhcnJheSwga2V5KSA6IGRhdGEubWFwLmdldChrZXkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
