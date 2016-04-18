'use strict';

System.register([], function (_export, _context) {
  var isArrayLikeObject;

  function castArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
  }
  return {
    setters: [],
    execute: function () {
      isArrayLikeObject = require('./isArrayLikeObject');
      module.exports = castArrayLikeObject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jYXN0QXJyYXlMaWtlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxtQkFBVCxDQUE2QixLQUE3QixFQUFvQztBQUNsQyxXQUFPLGtCQUFrQixLQUFsQixJQUEyQixLQUEzQixHQUFtQyxFQUFuQyxDQUQyQjtHQUFwQzs7OztBQURJLDBCQUFvQixRQUFRLHFCQUFSO0FBSXhCLGFBQU8sT0FBUCxHQUFpQixtQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Nhc3RBcnJheUxpa2VPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKTtcbmZ1bmN0aW9uIGNhc3RBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogW107XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RBcnJheUxpa2VPYmplY3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
