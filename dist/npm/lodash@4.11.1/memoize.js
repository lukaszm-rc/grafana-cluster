'use strict';

System.register([], function (_export, _context) {
  var MapCache, FUNC_ERROR_TEXT;

  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function memoized() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result);
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }
  return {
    setters: [],
    execute: function () {
      MapCache = require('./_MapCache');
      FUNC_ERROR_TEXT = 'Expected a function';
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21lbW9pemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsUUFBdkIsRUFBaUM7QUFDL0IsUUFBSSxPQUFPLElBQVAsSUFBZSxVQUFmLElBQThCLFlBQVksT0FBTyxRQUFQLElBQW1CLFVBQW5CLEVBQWdDO0FBQzVFLFlBQU0sSUFBSSxTQUFKLENBQWMsZUFBZCxDQUFOLENBRDRFO0tBQTlFO0FBR0EsUUFBSSxXQUFXLFNBQVgsUUFBVyxHQUFXO0FBQ3hCLFVBQUksT0FBTyxTQUFQO1VBQ0EsTUFBTSxXQUFXLFNBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUIsSUFBckIsQ0FBWCxHQUF3QyxLQUFLLENBQUwsQ0FBeEM7VUFDTixRQUFRLFNBQVMsS0FBVCxDQUhZO0FBSXhCLFVBQUksTUFBTSxHQUFOLENBQVUsR0FBVixDQUFKLEVBQW9CO0FBQ2xCLGVBQU8sTUFBTSxHQUFOLENBQVUsR0FBVixDQUFQLENBRGtCO09BQXBCO0FBR0EsVUFBSSxTQUFTLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsSUFBakIsQ0FBVCxDQVBvQjtBQVF4QixlQUFTLEtBQVQsR0FBaUIsTUFBTSxHQUFOLENBQVUsR0FBVixFQUFlLE1BQWYsQ0FBakIsQ0FSd0I7QUFTeEIsYUFBTyxNQUFQLENBVHdCO0tBQVgsQ0FKZ0I7QUFlL0IsYUFBUyxLQUFULEdBQWlCLEtBQUssUUFBUSxLQUFSLElBQWlCLFFBQWpCLENBQUwsRUFBakIsQ0FmK0I7QUFnQi9CLFdBQU8sUUFBUCxDQWhCK0I7R0FBakM7Ozs7QUFGSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCx3QkFBa0I7QUFtQnRCLGNBQVEsS0FBUixHQUFnQixRQUFoQjtBQUNBLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9tZW1vaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
