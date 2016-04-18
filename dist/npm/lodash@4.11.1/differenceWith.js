'use strict';

System.register([], function (_export, _context) {
  var baseDifference, baseFlatten, isArrayLikeObject, last, rest, differenceWith;
  return {
    setters: [],
    execute: function () {
      baseDifference = require('./_baseDifference');
      baseFlatten = require('./_baseFlatten');
      isArrayLikeObject = require('./isArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      differenceWith = rest(function (array, values) {
        var comparator = last(values);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
      });

      module.exports = differenceWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RpZmZlcmVuY2VXaXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSx1QkFBaUIsUUFBUSxtQkFBUjtBQUNqQixvQkFBYyxRQUFRLGdCQUFSO0FBQ2QsMEJBQW9CLFFBQVEscUJBQVI7QUFDcEIsYUFBTyxRQUFRLFFBQVI7QUFDUCxhQUFPLFFBQVEsUUFBUjtBQUNQLHVCQUFpQixLQUFLLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUNoRCxZQUFJLGFBQWEsS0FBSyxNQUFMLENBQWIsQ0FENEM7QUFFaEQsWUFBSSxrQkFBa0IsVUFBbEIsQ0FBSixFQUFtQztBQUNqQyx1QkFBYSxTQUFiLENBRGlDO1NBQW5DO0FBR0EsZUFBTyxrQkFBa0IsS0FBbEIsSUFBMkIsZUFBZSxLQUFmLEVBQXNCLFlBQVksTUFBWixFQUFvQixDQUFwQixFQUF1QixpQkFBdkIsRUFBMEMsSUFBMUMsQ0FBdEIsRUFBdUUsU0FBdkUsRUFBa0YsVUFBbEYsQ0FBM0IsR0FBMkgsRUFBM0gsQ0FMeUM7T0FBeEI7O0FBTzFCLGFBQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9kaWZmZXJlbmNlV2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBkaWZmZXJlbmNlV2l0aCA9IHJlc3QoZnVuY3Rpb24oYXJyYXksIHZhbHVlcykge1xuICB2YXIgY29tcGFyYXRvciA9IGxhc3QodmFsdWVzKTtcbiAgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KGNvbXBhcmF0b3IpKSB7XG4gICAgY29tcGFyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QoYXJyYXkpID8gYmFzZURpZmZlcmVuY2UoYXJyYXksIGJhc2VGbGF0dGVuKHZhbHVlcywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpLCB1bmRlZmluZWQsIGNvbXBhcmF0b3IpIDogW107XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZVdpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
