'use strict';

System.register([], function (_export, _context) {
  var apply, arrayPush, castSlice, rest, toInteger, FUNC_ERROR_TEXT, nativeMax;

  function spread(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
    return rest(function (args) {
      var array = args[start],
          otherArgs = castSlice(args, 0, start);
      if (array) {
        arrayPush(otherArgs, array);
      }
      return apply(func, this, otherArgs);
    });
  }
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      arrayPush = require('./_arrayPush');
      castSlice = require('./_castSlice');
      rest = require('./rest');
      toInteger = require('./toInteger');
      FUNC_ERROR_TEXT = 'Expected a function';
      nativeMax = Math.max;
      module.exports = spread;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NwcmVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLFdBQVMsTUFBVCxDQUFnQixJQUFoQixFQUFzQixLQUF0QixFQUE2QjtBQUMzQixRQUFJLE9BQU8sSUFBUCxJQUFlLFVBQWYsRUFBMkI7QUFDN0IsWUFBTSxJQUFJLFNBQUosQ0FBYyxlQUFkLENBQU4sQ0FENkI7S0FBL0I7QUFHQSxZQUFRLFVBQVUsU0FBVixHQUFzQixDQUF0QixHQUEwQixVQUFVLFVBQVUsS0FBVixDQUFWLEVBQTRCLENBQTVCLENBQTFCLENBSm1CO0FBSzNCLFdBQU8sS0FBSyxVQUFTLElBQVQsRUFBZTtBQUN6QixVQUFJLFFBQVEsS0FBSyxLQUFMLENBQVI7VUFDQSxZQUFZLFVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixLQUFuQixDQUFaLENBRnFCO0FBR3pCLFVBQUksS0FBSixFQUFXO0FBQ1Qsa0JBQVUsU0FBVixFQUFxQixLQUFyQixFQURTO09BQVg7QUFHQSxhQUFPLE1BQU0sSUFBTixFQUFZLElBQVosRUFBa0IsU0FBbEIsQ0FBUCxDQU55QjtLQUFmLENBQVosQ0FMMkI7R0FBN0I7Ozs7QUFQSSxjQUFRLFFBQVEsVUFBUjtBQUNSLGtCQUFZLFFBQVEsY0FBUjtBQUNaLGtCQUFZLFFBQVEsY0FBUjtBQUNaLGFBQU8sUUFBUSxRQUFSO0FBQ1Asa0JBQVksUUFBUSxhQUFSO0FBQ1osd0JBQWtCO0FBQ2xCLGtCQUFZLEtBQUssR0FBTDtBQWVoQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvc3ByZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpLFxuICAgIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcbmZ1bmN0aW9uIHNwcmVhZChmdW5jLCBzdGFydCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBzdGFydCA9IHN0YXJ0ID09PSB1bmRlZmluZWQgPyAwIDogbmF0aXZlTWF4KHRvSW50ZWdlcihzdGFydCksIDApO1xuICByZXR1cm4gcmVzdChmdW5jdGlvbihhcmdzKSB7XG4gICAgdmFyIGFycmF5ID0gYXJnc1tzdGFydF0sXG4gICAgICAgIG90aGVyQXJncyA9IGNhc3RTbGljZShhcmdzLCAwLCBzdGFydCk7XG4gICAgaWYgKGFycmF5KSB7XG4gICAgICBhcnJheVB1c2gob3RoZXJBcmdzLCBhcnJheSk7XG4gICAgfVxuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gc3ByZWFkO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
