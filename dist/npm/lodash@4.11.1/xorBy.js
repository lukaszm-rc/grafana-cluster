'use strict';

System.register([], function (_export, _context) {
  var arrayFilter, baseIteratee, baseXor, isArrayLikeObject, last, rest, xorBy;
  return {
    setters: [],
    execute: function () {
      arrayFilter = require('./_arrayFilter');
      baseIteratee = require('./_baseIteratee');
      baseXor = require('./_baseXor');
      isArrayLikeObject = require('./isArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      xorBy = rest(function (arrays) {
        var iteratee = last(arrays);
        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee));
      });

      module.exports = xorBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3hvckJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2QscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGdCQUFVLFFBQVEsWUFBUjtBQUNWLDBCQUFvQixRQUFRLHFCQUFSO0FBQ3BCLGFBQU8sUUFBUSxRQUFSO0FBQ1AsYUFBTyxRQUFRLFFBQVI7QUFDUCxjQUFRLEtBQUssVUFBUyxNQUFULEVBQWlCO0FBQ2hDLFlBQUksV0FBVyxLQUFLLE1BQUwsQ0FBWCxDQUQ0QjtBQUVoQyxZQUFJLGtCQUFrQixRQUFsQixDQUFKLEVBQWlDO0FBQy9CLHFCQUFXLFNBQVgsQ0FEK0I7U0FBakM7QUFHQSxlQUFPLFFBQVEsWUFBWSxNQUFaLEVBQW9CLGlCQUFwQixDQUFSLEVBQWdELGFBQWEsUUFBYixDQUFoRCxDQUFQLENBTGdDO09BQWpCOztBQU9qQixhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEveG9yQnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVhvciA9IHJlcXVpcmUoJy4vX2Jhc2VYb3InKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIHhvckJ5ID0gcmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VYb3IoYXJyYXlGaWx0ZXIoYXJyYXlzLCBpc0FycmF5TGlrZU9iamVjdCksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSkpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHhvckJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
