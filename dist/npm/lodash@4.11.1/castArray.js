'use strict';

System.register([], function (_export, _context) {
  var isArray;

  function castArray() {
    if (!arguments.length) {
      return [];
    }
    var value = arguments[0];
    return isArray(value) ? value : [value];
  }
  return {
    setters: [],
    execute: function () {
      isArray = require('./isArray');
      module.exports = castArray;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Nhc3RBcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsU0FBVCxHQUFxQjtBQUNuQixRQUFJLENBQUMsVUFBVSxNQUFWLEVBQWtCO0FBQ3JCLGFBQU8sRUFBUCxDQURxQjtLQUF2QjtBQUdBLFFBQUksUUFBUSxVQUFVLENBQVYsQ0FBUixDQUplO0FBS25CLFdBQU8sUUFBUSxLQUFSLElBQWlCLEtBQWpCLEdBQXlCLENBQUMsS0FBRCxDQUF6QixDQUxZO0dBQXJCOzs7O0FBREksZ0JBQVUsUUFBUSxXQUFSO0FBUWQsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2Nhc3RBcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcbmZ1bmN0aW9uIGNhc3RBcnJheSgpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1swXTtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjYXN0QXJyYXk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
