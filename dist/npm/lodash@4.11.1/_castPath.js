'use strict';

System.register([], function (_export, _context) {
  var isArray, stringToPath;

  function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
  }
  return {
    setters: [],
    execute: function () {
      isArray = require('./isArray');
      stringToPath = require('./_stringToPath');
      module.exports = castPath;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jYXN0UGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUN2QixXQUFPLFFBQVEsS0FBUixJQUFpQixLQUFqQixHQUF5QixhQUFhLEtBQWIsQ0FBekIsQ0FEZ0I7R0FBekI7Ozs7QUFGSSxnQkFBVSxRQUFRLFdBQVI7QUFDVixxQkFBZSxRQUFRLGlCQUFSO0FBSW5CLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY2FzdFBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyk7XG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHN0cmluZ1RvUGF0aCh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
