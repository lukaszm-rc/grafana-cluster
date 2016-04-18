'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('./$.typed-array')('Float64', 8, function (init) {
        return function Float64Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLGNBQVEsaUJBQVIsRUFBMkIsU0FBM0IsRUFBc0MsQ0FBdEMsRUFBeUMsVUFBUyxJQUFULEVBQWU7QUFDdEQsZUFBTyxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0Q7QUFDckQsaUJBQU8sS0FBSyxJQUFMLEVBQVcsSUFBWCxFQUFpQixVQUFqQixFQUE2QixNQUE3QixDQUFQLENBRHFEO1NBQWhELENBRCtDO09BQWYsQ0FBekMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxucmVxdWlyZSgnLi8kLnR5cGVkLWFycmF5JykoJ0Zsb2F0NjQnLCA4LCBmdW5jdGlvbihpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDY0QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9