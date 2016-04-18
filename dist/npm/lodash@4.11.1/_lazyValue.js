'use strict';

System.register([], function (_export, _context) {
  var baseWrapperValue, getView, isArray, LARGE_ARRAY_SIZE, LAZY_FILTER_FLAG, LAZY_MAP_FLAG, nativeMin;

  function lazyValue() {
    var array = this.__wrapped__.value(),
        dir = this.__dir__,
        isArr = isArray(array),
        isRight = dir < 0,
        arrLength = isArr ? array.length : 0,
        view = getView(0, arrLength, this.__views__),
        start = view.start,
        end = view.end,
        length = end - start,
        index = isRight ? end : start - 1,
        iteratees = this.__iteratees__,
        iterLength = iteratees.length,
        resIndex = 0,
        takeCount = nativeMin(length, this.__takeCount__);
    if (!isArr || arrLength < LARGE_ARRAY_SIZE || arrLength == length && takeCount == length) {
      return baseWrapperValue(array, this.__actions__);
    }
    var result = [];
    outer: while (length-- && resIndex < takeCount) {
      index += dir;
      var iterIndex = -1,
          value = array[index];
      while (++iterIndex < iterLength) {
        var data = iteratees[iterIndex],
            iteratee = data.iteratee,
            type = data.type,
            computed = iteratee(value);
        if (type == LAZY_MAP_FLAG) {
          value = computed;
        } else if (!computed) {
          if (type == LAZY_FILTER_FLAG) {
            continue outer;
          } else {
            break outer;
          }
        }
      }
      result[resIndex++] = value;
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseWrapperValue = require('./_baseWrapperValue');
      getView = require('./_getView');
      isArray = require('./isArray');
      LARGE_ARRAY_SIZE = 200;
      LAZY_FILTER_FLAG = 1;
      LAZY_MAP_FLAG = 2;
      nativeMin = Math.min;
      module.exports = lazyValue;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19sYXp5VmFsdWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxXQUFTLFNBQVQsR0FBcUI7QUFDbkIsUUFBSSxRQUFRLEtBQUssV0FBTCxDQUFpQixLQUFqQixFQUFSO1FBQ0EsTUFBTSxLQUFLLE9BQUw7UUFDTixRQUFRLFFBQVEsS0FBUixDQUFSO1FBQ0EsVUFBVSxNQUFNLENBQU47UUFDVixZQUFZLFFBQVEsTUFBTSxNQUFOLEdBQWUsQ0FBdkI7UUFDWixPQUFPLFFBQVEsQ0FBUixFQUFXLFNBQVgsRUFBc0IsS0FBSyxTQUFMLENBQTdCO1FBQ0EsUUFBUSxLQUFLLEtBQUw7UUFDUixNQUFNLEtBQUssR0FBTDtRQUNOLFNBQVMsTUFBTSxLQUFOO1FBQ1QsUUFBUSxVQUFVLEdBQVYsR0FBaUIsUUFBUSxDQUFSO1FBQ3pCLFlBQVksS0FBSyxhQUFMO1FBQ1osYUFBYSxVQUFVLE1BQVY7UUFDYixXQUFXLENBQVg7UUFDQSxZQUFZLFVBQVUsTUFBVixFQUFrQixLQUFLLGFBQUwsQ0FBOUIsQ0FkZTtBQWVuQixRQUFJLENBQUMsS0FBRCxJQUFVLFlBQVksZ0JBQVosSUFBaUMsYUFBYSxNQUFiLElBQXVCLGFBQWEsTUFBYixFQUFzQjtBQUMxRixhQUFPLGlCQUFpQixLQUFqQixFQUF3QixLQUFLLFdBQUwsQ0FBL0IsQ0FEMEY7S0FBNUY7QUFHQSxRQUFJLFNBQVMsRUFBVCxDQWxCZTtBQW1CbkIsV0FBTyxPQUFPLFlBQVksV0FBVyxTQUFYLEVBQXNCO0FBQzlDLGVBQVMsR0FBVCxDQUQ4QztBQUU5QyxVQUFJLFlBQVksQ0FBQyxDQUFEO1VBQ1osUUFBUSxNQUFNLEtBQU4sQ0FBUixDQUgwQztBQUk5QyxhQUFPLEVBQUUsU0FBRixHQUFjLFVBQWQsRUFBMEI7QUFDL0IsWUFBSSxPQUFPLFVBQVUsU0FBVixDQUFQO1lBQ0EsV0FBVyxLQUFLLFFBQUw7WUFDWCxPQUFPLEtBQUssSUFBTDtZQUNQLFdBQVcsU0FBUyxLQUFULENBQVgsQ0FKMkI7QUFLL0IsWUFBSSxRQUFRLGFBQVIsRUFBdUI7QUFDekIsa0JBQVEsUUFBUixDQUR5QjtTQUEzQixNQUVPLElBQUksQ0FBQyxRQUFELEVBQVc7QUFDcEIsY0FBSSxRQUFRLGdCQUFSLEVBQTBCO0FBQzVCLHFCQUFTLEtBQVQsQ0FENEI7V0FBOUIsTUFFTztBQUNMLGtCQUFNLEtBQU4sQ0FESztXQUZQO1NBREs7T0FQVDtBQWVBLGFBQU8sVUFBUCxJQUFxQixLQUFyQixDQW5COEM7S0FBekM7QUFxQlAsV0FBTyxNQUFQLENBeENtQjtHQUFyQjs7OztBQVBJLHlCQUFtQixRQUFRLHFCQUFSO0FBQ25CLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGdCQUFVLFFBQVEsV0FBUjtBQUNWLHlCQUFtQjtBQUNuQix5QkFBbUI7QUFDbkIsc0JBQWdCO0FBQ2hCLGtCQUFZLEtBQUssR0FBTDtBQTJDaEIsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19sYXp5VmFsdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlV3JhcHBlclZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZVdyYXBwZXJWYWx1ZScpLFxuICAgIGdldFZpZXcgPSByZXF1aXJlKCcuL19nZXRWaWV3JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG52YXIgTEFaWV9GSUxURVJfRkxBRyA9IDEsXG4gICAgTEFaWV9NQVBfRkxBRyA9IDI7XG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5mdW5jdGlvbiBsYXp5VmFsdWUoKSB7XG4gIHZhciBhcnJheSA9IHRoaXMuX193cmFwcGVkX18udmFsdWUoKSxcbiAgICAgIGRpciA9IHRoaXMuX19kaXJfXyxcbiAgICAgIGlzQXJyID0gaXNBcnJheShhcnJheSksXG4gICAgICBpc1JpZ2h0ID0gZGlyIDwgMCxcbiAgICAgIGFyckxlbmd0aCA9IGlzQXJyID8gYXJyYXkubGVuZ3RoIDogMCxcbiAgICAgIHZpZXcgPSBnZXRWaWV3KDAsIGFyckxlbmd0aCwgdGhpcy5fX3ZpZXdzX18pLFxuICAgICAgc3RhcnQgPSB2aWV3LnN0YXJ0LFxuICAgICAgZW5kID0gdmlldy5lbmQsXG4gICAgICBsZW5ndGggPSBlbmQgLSBzdGFydCxcbiAgICAgIGluZGV4ID0gaXNSaWdodCA/IGVuZCA6IChzdGFydCAtIDEpLFxuICAgICAgaXRlcmF0ZWVzID0gdGhpcy5fX2l0ZXJhdGVlc19fLFxuICAgICAgaXRlckxlbmd0aCA9IGl0ZXJhdGVlcy5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICB0YWtlQ291bnQgPSBuYXRpdmVNaW4obGVuZ3RoLCB0aGlzLl9fdGFrZUNvdW50X18pO1xuICBpZiAoIWlzQXJyIHx8IGFyckxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgfHwgKGFyckxlbmd0aCA9PSBsZW5ndGggJiYgdGFrZUNvdW50ID09IGxlbmd0aCkpIHtcbiAgICByZXR1cm4gYmFzZVdyYXBwZXJWYWx1ZShhcnJheSwgdGhpcy5fX2FjdGlvbnNfXyk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBvdXRlcjogd2hpbGUgKGxlbmd0aC0tICYmIHJlc0luZGV4IDwgdGFrZUNvdW50KSB7XG4gICAgaW5kZXggKz0gZGlyO1xuICAgIHZhciBpdGVySW5kZXggPSAtMSxcbiAgICAgICAgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgd2hpbGUgKCsraXRlckluZGV4IDwgaXRlckxlbmd0aCkge1xuICAgICAgdmFyIGRhdGEgPSBpdGVyYXRlZXNbaXRlckluZGV4XSxcbiAgICAgICAgICBpdGVyYXRlZSA9IGRhdGEuaXRlcmF0ZWUsXG4gICAgICAgICAgdHlwZSA9IGRhdGEudHlwZSxcbiAgICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlKHZhbHVlKTtcbiAgICAgIGlmICh0eXBlID09IExBWllfTUFQX0ZMQUcpIHtcbiAgICAgICAgdmFsdWUgPSBjb21wdXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoIWNvbXB1dGVkKSB7XG4gICAgICAgIGlmICh0eXBlID09IExBWllfRklMVEVSX0ZMQUcpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhayBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBsYXp5VmFsdWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
