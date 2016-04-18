'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, baseUniq, isArrayLikeObject, last, rest, unionWith;
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      baseUniq = require('./_baseUniq');
      isArrayLikeObject = require('./isArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      unionWith = rest(function (arrays) {
        var comparator = last(arrays);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
      });

      module.exports = unionWith;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuaW9uV2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGlCQUFXLFFBQVEsYUFBUjtBQUNYLDBCQUFvQixRQUFRLHFCQUFSO0FBQ3BCLGFBQU8sUUFBUSxRQUFSO0FBQ1AsYUFBTyxRQUFRLFFBQVI7QUFDUCxrQkFBWSxLQUFLLFVBQVMsTUFBVCxFQUFpQjtBQUNwQyxZQUFJLGFBQWEsS0FBSyxNQUFMLENBQWIsQ0FEZ0M7QUFFcEMsWUFBSSxrQkFBa0IsVUFBbEIsQ0FBSixFQUFtQztBQUNqQyx1QkFBYSxTQUFiLENBRGlDO1NBQW5DO0FBR0EsZUFBTyxTQUFTLFlBQVksTUFBWixFQUFvQixDQUFwQixFQUF1QixpQkFBdkIsRUFBMEMsSUFBMUMsQ0FBVCxFQUEwRCxTQUExRCxFQUFxRSxVQUFyRSxDQUFQLENBTG9DO09BQWpCOztBQU9yQixhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdW5pb25XaXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIHVuaW9uV2l0aCA9IHJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBjb21wYXJhdG9yID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoY29tcGFyYXRvcikpIHtcbiAgICBjb21wYXJhdG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihhcnJheXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSwgdW5kZWZpbmVkLCBjb21wYXJhdG9yKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB1bmlvbldpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
