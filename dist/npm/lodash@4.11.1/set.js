'use strict';

System.register([], function (_export, _context) {
  var baseSet;

  function set(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
  }
  return {
    setters: [],
    execute: function () {
      baseSet = require('./_baseSet');
      module.exports = set;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsR0FBVCxDQUFhLE1BQWIsRUFBcUIsSUFBckIsRUFBMkIsS0FBM0IsRUFBa0M7QUFDaEMsV0FBTyxVQUFVLElBQVYsR0FBaUIsTUFBakIsR0FBMEIsUUFBUSxNQUFSLEVBQWdCLElBQWhCLEVBQXNCLEtBQXRCLENBQTFCLENBRHlCO0dBQWxDOzs7O0FBREksZ0JBQVUsUUFBUSxZQUFSO0FBSWQsYUFBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VTZXQgPSByZXF1aXJlKCcuL19iYXNlU2V0Jyk7XG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBvYmplY3QgOiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
