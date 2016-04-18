'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper, LodashWrapper, baseAt, baseFlatten, isIndex, rest, thru, wrapperAt;
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      LodashWrapper = require('./_LodashWrapper');
      baseAt = require('./_baseAt');
      baseFlatten = require('./_baseFlatten');
      isIndex = require('./_isIndex');
      rest = require('./rest');
      thru = require('./thru');
      wrapperAt = rest(function (paths) {
        paths = baseFlatten(paths, 1);
        var length = paths.length,
            start = length ? paths[0] : 0,
            value = this.__wrapped__,
            interceptor = function interceptor(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          'func': thru,
          'args': [interceptor],
          'thisArg': undefined
        });
        return new LodashWrapper(value, this.__chain__).thru(function (array) {
          if (length && !array.length) {
            array.push(undefined);
          }
          return array;
        });
      });

      module.exports = wrapperAt;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3dyYXBwZXJBdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksb0JBQWMsUUFBUSxnQkFBUjtBQUNkLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLGVBQVMsUUFBUSxXQUFSO0FBQ1Qsb0JBQWMsUUFBUSxnQkFBUjtBQUNkLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGFBQU8sUUFBUSxRQUFSO0FBQ1AsYUFBTyxRQUFRLFFBQVI7QUFDUCxrQkFBWSxLQUFLLFVBQVMsS0FBVCxFQUFnQjtBQUNuQyxnQkFBUSxZQUFZLEtBQVosRUFBbUIsQ0FBbkIsQ0FBUixDQURtQztBQUVuQyxZQUFJLFNBQVMsTUFBTSxNQUFOO1lBQ1QsUUFBUSxTQUFTLE1BQU0sQ0FBTixDQUFULEdBQW9CLENBQXBCO1lBQ1IsUUFBUSxLQUFLLFdBQUw7WUFDUixjQUFjLFNBQWQsV0FBYyxDQUFTLE1BQVQsRUFBaUI7QUFDN0IsaUJBQU8sT0FBTyxNQUFQLEVBQWUsS0FBZixDQUFQLENBRDZCO1NBQWpCLENBTGlCO0FBUW5DLFlBQUksU0FBUyxDQUFULElBQWMsS0FBSyxXQUFMLENBQWlCLE1BQWpCLElBQTJCLEVBQUUsaUJBQWlCLFdBQWpCLENBQUYsSUFBbUMsQ0FBQyxRQUFRLEtBQVIsQ0FBRCxFQUFpQjtBQUMvRixpQkFBTyxLQUFLLElBQUwsQ0FBVSxXQUFWLENBQVAsQ0FEK0Y7U0FBakc7QUFHQSxnQkFBUSxNQUFNLEtBQU4sQ0FBWSxLQUFaLEVBQW1CLENBQUMsS0FBRCxJQUFVLFNBQVMsQ0FBVCxHQUFhLENBQWIsQ0FBVixDQUEzQixDQVhtQztBQVluQyxjQUFNLFdBQU4sQ0FBa0IsSUFBbEIsQ0FBdUI7QUFDckIsa0JBQVEsSUFBUjtBQUNBLGtCQUFRLENBQUMsV0FBRCxDQUFSO0FBQ0EscUJBQVcsU0FBWDtTQUhGLEVBWm1DO0FBaUJuQyxlQUFPLElBQUksYUFBSixDQUFrQixLQUFsQixFQUF5QixLQUFLLFNBQUwsQ0FBekIsQ0FBeUMsSUFBekMsQ0FBOEMsVUFBUyxLQUFULEVBQWdCO0FBQ25FLGNBQUksVUFBVSxDQUFDLE1BQU0sTUFBTixFQUFjO0FBQzNCLGtCQUFNLElBQU4sQ0FBVyxTQUFYLEVBRDJCO1dBQTdCO0FBR0EsaUJBQU8sS0FBUCxDQUptRTtTQUFoQixDQUFyRCxDQWpCbUM7T0FBaEI7O0FBd0JyQixhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvd3JhcHBlckF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTGF6eVdyYXBwZXIgPSByZXF1aXJlKCcuL19MYXp5V3JhcHBlcicpLFxuICAgIExvZGFzaFdyYXBwZXIgPSByZXF1aXJlKCcuL19Mb2Rhc2hXcmFwcGVyJyksXG4gICAgYmFzZUF0ID0gcmVxdWlyZSgnLi9fYmFzZUF0JyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpLFxuICAgIHRocnUgPSByZXF1aXJlKCcuL3RocnUnKTtcbnZhciB3cmFwcGVyQXQgPSByZXN0KGZ1bmN0aW9uKHBhdGhzKSB7XG4gIHBhdGhzID0gYmFzZUZsYXR0ZW4ocGF0aHMsIDEpO1xuICB2YXIgbGVuZ3RoID0gcGF0aHMubGVuZ3RoLFxuICAgICAgc3RhcnQgPSBsZW5ndGggPyBwYXRoc1swXSA6IDAsXG4gICAgICB2YWx1ZSA9IHRoaXMuX193cmFwcGVkX18sXG4gICAgICBpbnRlcmNlcHRvciA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gYmFzZUF0KG9iamVjdCwgcGF0aHMpO1xuICAgICAgfTtcbiAgaWYgKGxlbmd0aCA+IDEgfHwgdGhpcy5fX2FjdGlvbnNfXy5sZW5ndGggfHwgISh2YWx1ZSBpbnN0YW5jZW9mIExhenlXcmFwcGVyKSB8fCAhaXNJbmRleChzdGFydCkpIHtcbiAgICByZXR1cm4gdGhpcy50aHJ1KGludGVyY2VwdG9yKTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnNsaWNlKHN0YXJ0LCArc3RhcnQgKyAobGVuZ3RoID8gMSA6IDApKTtcbiAgdmFsdWUuX19hY3Rpb25zX18ucHVzaCh7XG4gICAgJ2Z1bmMnOiB0aHJ1LFxuICAgICdhcmdzJzogW2ludGVyY2VwdG9yXSxcbiAgICAndGhpc0FyZyc6IHVuZGVmaW5lZFxuICB9KTtcbiAgcmV0dXJuIG5ldyBMb2Rhc2hXcmFwcGVyKHZhbHVlLCB0aGlzLl9fY2hhaW5fXykudGhydShmdW5jdGlvbihhcnJheSkge1xuICAgIGlmIChsZW5ndGggJiYgIWFycmF5Lmxlbmd0aCkge1xuICAgICAgYXJyYXkucHVzaCh1bmRlZmluZWQpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0pO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBwZXJBdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
