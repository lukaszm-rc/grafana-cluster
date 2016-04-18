'use strict';

System.register([], function (_export, _context) {
  var baseEach, isArrayLike;

  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function (value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseEach = require('./_baseEach');
      isArrayLike = require('./isArrayLike');
      module.exports = baseMap;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxPQUFULENBQWlCLFVBQWpCLEVBQTZCLFFBQTdCLEVBQXVDO0FBQ3JDLFFBQUksUUFBUSxDQUFDLENBQUQ7UUFDUixTQUFTLFlBQVksVUFBWixJQUEwQixNQUFNLFdBQVcsTUFBWCxDQUFoQyxHQUFxRCxFQUFyRCxDQUZ3QjtBQUdyQyxhQUFTLFVBQVQsRUFBcUIsVUFBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLFVBQXJCLEVBQWlDO0FBQ3BELGFBQU8sRUFBRSxLQUFGLENBQVAsR0FBa0IsU0FBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLFVBQXJCLENBQWxCLENBRG9EO0tBQWpDLENBQXJCLENBSHFDO0FBTXJDLFdBQU8sTUFBUCxDQU5xQztHQUF2Qzs7OztBQUZJLGlCQUFXLFFBQVEsYUFBUjtBQUNYLG9CQUFjLFFBQVEsZUFBUjtBQVNsQixhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5mdW5jdGlvbiBiYXNlTWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBBcnJheShjb2xsZWN0aW9uLmxlbmd0aCkgOiBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hcDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
