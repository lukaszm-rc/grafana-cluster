'use strict';

System.register([], function (_export, _context) {
  var castPath, isIndex, isKey, last, parent, arrayProto, splice;

  function basePullAt(array, indexes) {
    var length = array ? indexes.length : 0,
        lastIndex = length - 1;
    while (length--) {
      var index = indexes[length];
      if (lastIndex == length || index != previous) {
        var previous = index;
        if (isIndex(index)) {
          splice.call(array, index, 1);
        } else if (!isKey(index, array)) {
          var path = castPath(index),
              object = parent(array, path);
          if (object != null) {
            delete object[last(path)];
          }
        } else {
          delete array[index];
        }
      }
    }
    return array;
  }
  return {
    setters: [],
    execute: function () {
      castPath = require('./_castPath');
      isIndex = require('./_isIndex');
      isKey = require('./_isKey');
      last = require('./last');
      parent = require('./_parent');
      arrayProto = Array.prototype;
      splice = arrayProto.splice;
      module.exports = basePullAt;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUHVsbEF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBUUEsV0FBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCLE9BQTNCLEVBQW9DO0FBQ2xDLFFBQUksU0FBUyxRQUFRLFFBQVEsTUFBUixHQUFpQixDQUF6QjtRQUNULFlBQVksU0FBUyxDQUFULENBRmtCO0FBR2xDLFdBQU8sUUFBUCxFQUFpQjtBQUNmLFVBQUksUUFBUSxRQUFRLE1BQVIsQ0FBUixDQURXO0FBRWYsVUFBSSxhQUFhLE1BQWIsSUFBdUIsU0FBUyxRQUFULEVBQW1CO0FBQzVDLFlBQUksV0FBVyxLQUFYLENBRHdDO0FBRTVDLFlBQUksUUFBUSxLQUFSLENBQUosRUFBb0I7QUFDbEIsaUJBQU8sSUFBUCxDQUFZLEtBQVosRUFBbUIsS0FBbkIsRUFBMEIsQ0FBMUIsRUFEa0I7U0FBcEIsTUFFTyxJQUFJLENBQUMsTUFBTSxLQUFOLEVBQWEsS0FBYixDQUFELEVBQXNCO0FBQy9CLGNBQUksT0FBTyxTQUFTLEtBQVQsQ0FBUDtjQUNBLFNBQVMsT0FBTyxLQUFQLEVBQWMsSUFBZCxDQUFULENBRjJCO0FBRy9CLGNBQUksVUFBVSxJQUFWLEVBQWdCO0FBQ2xCLG1CQUFPLE9BQU8sS0FBSyxJQUFMLENBQVAsQ0FBUCxDQURrQjtXQUFwQjtTQUhLLE1BTUE7QUFDTCxpQkFBTyxNQUFNLEtBQU4sQ0FBUCxDQURLO1NBTkE7T0FKVDtLQUZGO0FBaUJBLFdBQU8sS0FBUCxDQXBCa0M7R0FBcEM7Ozs7QUFQSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxnQkFBVSxRQUFRLFlBQVI7QUFDVixjQUFRLFFBQVEsVUFBUjtBQUNSLGFBQU8sUUFBUSxRQUFSO0FBQ1AsZUFBUyxRQUFRLFdBQVI7QUFDVCxtQkFBYSxNQUFNLFNBQU47QUFDYixlQUFTLFdBQVcsTUFBWDtBQXVCYixhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VQdWxsQXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpLFxuICAgIHBhcmVudCA9IHJlcXVpcmUoJy4vX3BhcmVudCcpO1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5mdW5jdGlvbiBiYXNlUHVsbEF0KGFycmF5LCBpbmRleGVzKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGluZGV4ZXMubGVuZ3RoIDogMCxcbiAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBpbmRleCA9IGluZGV4ZXNbbGVuZ3RoXTtcbiAgICBpZiAobGFzdEluZGV4ID09IGxlbmd0aCB8fCBpbmRleCAhPSBwcmV2aW91cykge1xuICAgICAgdmFyIHByZXZpb3VzID0gaW5kZXg7XG4gICAgICBpZiAoaXNJbmRleChpbmRleCkpIHtcbiAgICAgICAgc3BsaWNlLmNhbGwoYXJyYXksIGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzS2V5KGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBjYXN0UGF0aChpbmRleCksXG4gICAgICAgICAgICBvYmplY3QgPSBwYXJlbnQoYXJyYXksIHBhdGgpO1xuICAgICAgICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICBkZWxldGUgb2JqZWN0W2xhc3QocGF0aCldO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgYXJyYXlbaW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQdWxsQXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
