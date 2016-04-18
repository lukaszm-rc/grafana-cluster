'use strict';

System.register([], function (_export, _context) {
  var createWrapper, ARY_FLAG;

  function ary(func, n, guard) {
    n = guard ? undefined : n;
    n = func && n == null ? func.length : n;
    return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
  }
  return {
    setters: [],
    execute: function () {
      createWrapper = require('./_createWrapper');
      ARY_FLAG = 128;
      module.exports = ary;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2FyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsR0FBVCxDQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsS0FBdEIsRUFBNkI7QUFDM0IsUUFBSSxRQUFRLFNBQVIsR0FBb0IsQ0FBcEIsQ0FEdUI7QUFFM0IsUUFBSSxJQUFDLElBQVEsS0FBSyxJQUFMLEdBQWEsS0FBSyxNQUFMLEdBQWMsQ0FBcEMsQ0FGdUI7QUFHM0IsV0FBTyxjQUFjLElBQWQsRUFBb0IsUUFBcEIsRUFBOEIsU0FBOUIsRUFBeUMsU0FBekMsRUFBb0QsU0FBcEQsRUFBK0QsU0FBL0QsRUFBMEUsQ0FBMUUsQ0FBUCxDQUgyQjtHQUE3Qjs7OztBQUZJLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLGlCQUFXO0FBTWYsYUFBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2FyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwcGVyJyk7XG52YXIgQVJZX0ZMQUcgPSAxMjg7XG5mdW5jdGlvbiBhcnkoZnVuYywgbiwgZ3VhcmQpIHtcbiAgbiA9IGd1YXJkID8gdW5kZWZpbmVkIDogbjtcbiAgbiA9IChmdW5jICYmIG4gPT0gbnVsbCkgPyBmdW5jLmxlbmd0aCA6IG47XG4gIHJldHVybiBjcmVhdGVXcmFwcGVyKGZ1bmMsIEFSWV9GTEFHLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBhcnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
