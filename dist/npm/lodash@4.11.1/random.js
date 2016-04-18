'use strict';

System.register([], function (_export, _context) {
  var baseRandom, isIterateeCall, toNumber, freeParseFloat, nativeMin, nativeRandom;

  function random(lower, upper, floating) {
    if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
      upper = floating = undefined;
    }
    if (floating === undefined) {
      if (typeof upper == 'boolean') {
        floating = upper;
        upper = undefined;
      } else if (typeof lower == 'boolean') {
        floating = lower;
        lower = undefined;
      }
    }
    if (lower === undefined && upper === undefined) {
      lower = 0;
      upper = 1;
    } else {
      lower = toNumber(lower) || 0;
      if (upper === undefined) {
        upper = lower;
        lower = 0;
      } else {
        upper = toNumber(upper) || 0;
      }
    }
    if (lower > upper) {
      var temp = lower;
      lower = upper;
      upper = temp;
    }
    if (floating || lower % 1 || upper % 1) {
      var rand = nativeRandom();
      return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
    }
    return baseRandom(lower, upper);
  }
  return {
    setters: [],
    execute: function () {
      baseRandom = require('./_baseRandom');
      isIterateeCall = require('./_isIterateeCall');
      toNumber = require('./toNumber');
      freeParseFloat = parseFloat;
      nativeMin = Math.min;
      nativeRandom = Math.random;
      module.exports = random;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JhbmRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLFdBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUE4QixRQUE5QixFQUF3QztBQUN0QyxRQUFJLFlBQVksT0FBTyxRQUFQLElBQW1CLFNBQW5CLElBQWdDLGVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixRQUE3QixDQUE1QyxFQUFvRjtBQUN0RixjQUFRLFdBQVcsU0FBWCxDQUQ4RTtLQUF4RjtBQUdBLFFBQUksYUFBYSxTQUFiLEVBQXdCO0FBQzFCLFVBQUksT0FBTyxLQUFQLElBQWdCLFNBQWhCLEVBQTJCO0FBQzdCLG1CQUFXLEtBQVgsQ0FENkI7QUFFN0IsZ0JBQVEsU0FBUixDQUY2QjtPQUEvQixNQUdPLElBQUksT0FBTyxLQUFQLElBQWdCLFNBQWhCLEVBQTJCO0FBQ3BDLG1CQUFXLEtBQVgsQ0FEb0M7QUFFcEMsZ0JBQVEsU0FBUixDQUZvQztPQUEvQjtLQUpUO0FBU0EsUUFBSSxVQUFVLFNBQVYsSUFBdUIsVUFBVSxTQUFWLEVBQXFCO0FBQzlDLGNBQVEsQ0FBUixDQUQ4QztBQUU5QyxjQUFRLENBQVIsQ0FGOEM7S0FBaEQsTUFHTztBQUNMLGNBQVEsU0FBUyxLQUFULEtBQW1CLENBQW5CLENBREg7QUFFTCxVQUFJLFVBQVUsU0FBVixFQUFxQjtBQUN2QixnQkFBUSxLQUFSLENBRHVCO0FBRXZCLGdCQUFRLENBQVIsQ0FGdUI7T0FBekIsTUFHTztBQUNMLGdCQUFRLFNBQVMsS0FBVCxLQUFtQixDQUFuQixDQURIO09BSFA7S0FMRjtBQVlBLFFBQUksUUFBUSxLQUFSLEVBQWU7QUFDakIsVUFBSSxPQUFPLEtBQVAsQ0FEYTtBQUVqQixjQUFRLEtBQVIsQ0FGaUI7QUFHakIsY0FBUSxJQUFSLENBSGlCO0tBQW5CO0FBS0EsUUFBSSxZQUFZLFFBQVEsQ0FBUixJQUFhLFFBQVEsQ0FBUixFQUFXO0FBQ3RDLFVBQUksT0FBTyxjQUFQLENBRGtDO0FBRXRDLGFBQU8sVUFBVSxRQUFTLFFBQVEsUUFBUSxLQUFSLEdBQWdCLGVBQWUsU0FBUyxDQUFDLE9BQU8sRUFBUCxDQUFELENBQVksTUFBWixHQUFxQixDQUFyQixDQUFULENBQS9CLENBQVIsRUFBNEUsS0FBL0YsQ0FBUCxDQUZzQztLQUF4QztBQUlBLFdBQU8sV0FBVyxLQUFYLEVBQWtCLEtBQWxCLENBQVAsQ0FsQ3NDO0dBQXhDOzs7O0FBTkksbUJBQWEsUUFBUSxlQUFSO0FBQ2IsdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsaUJBQVcsUUFBUSxZQUFSO0FBQ1gsdUJBQWlCO0FBQ2pCLGtCQUFZLEtBQUssR0FBTDtBQUNaLHFCQUFlLEtBQUssTUFBTDtBQXFDbkIsYUFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3JhbmRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VSYW5kb20gPSByZXF1aXJlKCcuL19iYXNlUmFuZG9tJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xudmFyIGZyZWVQYXJzZUZsb2F0ID0gcGFyc2VGbG9hdDtcbnZhciBuYXRpdmVNaW4gPSBNYXRoLm1pbixcbiAgICBuYXRpdmVSYW5kb20gPSBNYXRoLnJhbmRvbTtcbmZ1bmN0aW9uIHJhbmRvbShsb3dlciwgdXBwZXIsIGZsb2F0aW5nKSB7XG4gIGlmIChmbG9hdGluZyAmJiB0eXBlb2YgZmxvYXRpbmcgIT0gJ2Jvb2xlYW4nICYmIGlzSXRlcmF0ZWVDYWxsKGxvd2VyLCB1cHBlciwgZmxvYXRpbmcpKSB7XG4gICAgdXBwZXIgPSBmbG9hdGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoZmxvYXRpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgdXBwZXIgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBmbG9hdGluZyA9IHVwcGVyO1xuICAgICAgdXBwZXIgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbG93ZXIgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBmbG9hdGluZyA9IGxvd2VyO1xuICAgICAgbG93ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGlmIChsb3dlciA9PT0gdW5kZWZpbmVkICYmIHVwcGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBsb3dlciA9IDA7XG4gICAgdXBwZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIGxvd2VyID0gdG9OdW1iZXIobG93ZXIpIHx8IDA7XG4gICAgaWYgKHVwcGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHVwcGVyID0gbG93ZXI7XG4gICAgICBsb3dlciA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwcGVyID0gdG9OdW1iZXIodXBwZXIpIHx8IDA7XG4gICAgfVxuICB9XG4gIGlmIChsb3dlciA+IHVwcGVyKSB7XG4gICAgdmFyIHRlbXAgPSBsb3dlcjtcbiAgICBsb3dlciA9IHVwcGVyO1xuICAgIHVwcGVyID0gdGVtcDtcbiAgfVxuICBpZiAoZmxvYXRpbmcgfHwgbG93ZXIgJSAxIHx8IHVwcGVyICUgMSkge1xuICAgIHZhciByYW5kID0gbmF0aXZlUmFuZG9tKCk7XG4gICAgcmV0dXJuIG5hdGl2ZU1pbihsb3dlciArIChyYW5kICogKHVwcGVyIC0gbG93ZXIgKyBmcmVlUGFyc2VGbG9hdCgnMWUtJyArICgocmFuZCArICcnKS5sZW5ndGggLSAxKSkpKSwgdXBwZXIpO1xuICB9XG4gIHJldHVybiBiYXNlUmFuZG9tKGxvd2VyLCB1cHBlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
