'use strict';

System.register([], function (_export, _context) {
  var apply, arrayMap, baseIteratee, rest, FUNC_ERROR_TEXT;

  function cond(pairs) {
    var length = pairs ? pairs.length : 0,
        toIteratee = baseIteratee;
    pairs = !length ? [] : arrayMap(pairs, function (pair) {
      if (typeof pair[1] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return [toIteratee(pair[0]), pair[1]];
    });
    return rest(function (args) {
      var index = -1;
      while (++index < length) {
        var pair = pairs[index];
        if (apply(pair[0], this, args)) {
          return apply(pair[1], this, args);
        }
      }
    });
  }
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      arrayMap = require('./_arrayMap');
      baseIteratee = require('./_baseIteratee');
      rest = require('./rest');
      FUNC_ERROR_TEXT = 'Expected a function';
      module.exports = cond;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NvbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ25CLFFBQUksU0FBUyxRQUFRLE1BQU0sTUFBTixHQUFlLENBQXZCO1FBQ1QsYUFBYSxZQUFiLENBRmU7QUFHbkIsWUFBUSxDQUFDLE1BQUQsR0FBVSxFQUFWLEdBQWUsU0FBUyxLQUFULEVBQWdCLFVBQVMsSUFBVCxFQUFlO0FBQ3BELFVBQUksT0FBTyxLQUFLLENBQUwsQ0FBUCxJQUFrQixVQUFsQixFQUE4QjtBQUNoQyxjQUFNLElBQUksU0FBSixDQUFjLGVBQWQsQ0FBTixDQURnQztPQUFsQztBQUdBLGFBQU8sQ0FBQyxXQUFXLEtBQUssQ0FBTCxDQUFYLENBQUQsRUFBc0IsS0FBSyxDQUFMLENBQXRCLENBQVAsQ0FKb0Q7S0FBZixDQUEvQixDQUhXO0FBU25CLFdBQU8sS0FBSyxVQUFTLElBQVQsRUFBZTtBQUN6QixVQUFJLFFBQVEsQ0FBQyxDQUFELENBRGE7QUFFekIsYUFBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFlBQUksT0FBTyxNQUFNLEtBQU4sQ0FBUCxDQURtQjtBQUV2QixZQUFJLE1BQU0sS0FBSyxDQUFMLENBQU4sRUFBZSxJQUFmLEVBQXFCLElBQXJCLENBQUosRUFBZ0M7QUFDOUIsaUJBQU8sTUFBTSxLQUFLLENBQUwsQ0FBTixFQUFlLElBQWYsRUFBcUIsSUFBckIsQ0FBUCxDQUQ4QjtTQUFoQztPQUZGO0tBRlUsQ0FBWixDQVRtQjtHQUFyQjs7OztBQUxJLGNBQVEsUUFBUSxVQUFSO0FBQ1IsaUJBQVcsUUFBUSxhQUFSO0FBQ1gscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGFBQU8sUUFBUSxRQUFSO0FBQ1Asd0JBQWtCO0FBb0J0QixhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvY29uZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcbmZ1bmN0aW9uIGNvbmQocGFpcnMpIHtcbiAgdmFyIGxlbmd0aCA9IHBhaXJzID8gcGFpcnMubGVuZ3RoIDogMCxcbiAgICAgIHRvSXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWU7XG4gIHBhaXJzID0gIWxlbmd0aCA/IFtdIDogYXJyYXlNYXAocGFpcnMsIGZ1bmN0aW9uKHBhaXIpIHtcbiAgICBpZiAodHlwZW9mIHBhaXJbMV0gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICAgIH1cbiAgICByZXR1cm4gW3RvSXRlcmF0ZWUocGFpclswXSksIHBhaXJbMV1dO1xuICB9KTtcbiAgcmV0dXJuIHJlc3QoZnVuY3Rpb24oYXJncykge1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgcGFpciA9IHBhaXJzW2luZGV4XTtcbiAgICAgIGlmIChhcHBseShwYWlyWzBdLCB0aGlzLCBhcmdzKSkge1xuICAgICAgICByZXR1cm4gYXBwbHkocGFpclsxXSwgdGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY29uZDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
