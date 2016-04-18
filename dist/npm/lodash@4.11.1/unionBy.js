'use strict';

System.register([], function (_export, _context) {
  var baseFlatten, baseIteratee, baseUniq, isArrayLikeObject, last, rest, unionBy;
  return {
    setters: [],
    execute: function () {
      baseFlatten = require('./_baseFlatten');
      baseIteratee = require('./_baseIteratee');
      baseUniq = require('./_baseUniq');
      isArrayLikeObject = require('./isArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      unionBy = rest(function (arrays) {
        var iteratee = last(arrays);
        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), baseIteratee(iteratee));
      });

      module.exports = unionBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuaW9uQnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsaUJBQVcsUUFBUSxhQUFSO0FBQ1gsMEJBQW9CLFFBQVEscUJBQVI7QUFDcEIsYUFBTyxRQUFRLFFBQVI7QUFDUCxhQUFPLFFBQVEsUUFBUjtBQUNQLGdCQUFVLEtBQUssVUFBUyxNQUFULEVBQWlCO0FBQ2xDLFlBQUksV0FBVyxLQUFLLE1BQUwsQ0FBWCxDQUQ4QjtBQUVsQyxZQUFJLGtCQUFrQixRQUFsQixDQUFKLEVBQWlDO0FBQy9CLHFCQUFXLFNBQVgsQ0FEK0I7U0FBakM7QUFHQSxlQUFPLFNBQVMsWUFBWSxNQUFaLEVBQW9CLENBQXBCLEVBQXVCLGlCQUF2QixFQUEwQyxJQUExQyxDQUFULEVBQTBELGFBQWEsUUFBYixDQUExRCxDQUFQLENBTGtDO09BQWpCOztBQU9uQixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdW5pb25CeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciB1bmlvbkJ5ID0gcmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB1bmlvbkJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
