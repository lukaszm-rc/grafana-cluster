'use strict';

System.register([], function (_export, _context) {
  var assert, util;

  function CustomError(msg) {
    Error.call(this);
    Object.defineProperty(this, 'message', {
      value: msg,
      enumerable: false
    });
    Object.defineProperty(this, 'name', {
      value: 'CustomError',
      enumerable: false
    });
  }
  return {
    setters: [],
    execute: function () {
      assert = require('assert');
      util = require('../../util');

      assert.equal(util.format(), '');
      assert.equal(util.format(''), '');
      assert.equal(util.format([]), '[]');
      assert.equal(util.format({}), '{}');
      assert.equal(util.format(null), 'null');
      assert.equal(util.format(true), 'true');
      assert.equal(util.format(false), 'false');
      assert.equal(util.format('test'), 'test');
      assert.equal(util.format('foo', 'bar', 'baz'), 'foo bar baz');
      assert.equal(util.format('%d', 42.0), '42');
      assert.equal(util.format('%d', 42), '42');
      assert.equal(util.format('%s', 42), '42');
      assert.equal(util.format('%j', 42), '42');
      assert.equal(util.format('%d', '42.0'), '42');
      assert.equal(util.format('%d', '42'), '42');
      assert.equal(util.format('%s', '42'), '42');
      assert.equal(util.format('%j', '42'), '"42"');
      assert.equal(util.format('%%s%s', 'foo'), '%sfoo');
      assert.equal(util.format('%s'), '%s');
      assert.equal(util.format('%s', undefined), 'undefined');
      assert.equal(util.format('%s', 'foo'), 'foo');
      assert.equal(util.format('%s:%s'), '%s:%s');
      assert.equal(util.format('%s:%s', undefined), 'undefined:%s');
      assert.equal(util.format('%s:%s', 'foo'), 'foo:%s');
      assert.equal(util.format('%s:%s', 'foo', 'bar'), 'foo:bar');
      assert.equal(util.format('%s:%s', 'foo', 'bar', 'baz'), 'foo:bar baz');
      assert.equal(util.format('%%%s%%', 'hi'), '%hi%');
      assert.equal(util.format('%%%s%%%%', 'hi'), '%hi%%');
      (function () {
        var o = {};
        o.o = o;
        assert.equal(util.format('%j', o), '[Circular]');
      })();
      assert.equal(util.format(new Error('foo')), '[Error: foo]');util.inherits(CustomError, Error);
      assert.equal(util.format(new CustomError('bar')), '[CustomError: bar]');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS91dGlsQDAuMTAuMy90ZXN0L25vZGUvZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBcUNBLFdBQVMsV0FBVCxDQUFxQixHQUFyQixFQUEwQjtBQUN4QixVQUFNLElBQU4sQ0FBVyxJQUFYLEVBRHdCO0FBRXhCLFdBQU8sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQyxhQUFPLEdBQVA7QUFDQSxrQkFBWSxLQUFaO0tBRkYsRUFGd0I7QUFNeEIsV0FBTyxjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DO0FBQ2xDLGFBQU8sYUFBUDtBQUNBLGtCQUFZLEtBQVo7S0FGRixFQU53QjtHQUExQjs7OztBQXBDSSxlQUFTLFFBQVEsUUFBUjtBQUNULGFBQU8sUUFBUSxZQUFSOztBQUNYLGFBQU8sS0FBUCxDQUFhLEtBQUssTUFBTCxFQUFiLEVBQTRCLEVBQTVCO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksRUFBWixDQUFiLEVBQThCLEVBQTlCO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksRUFBWixDQUFiLEVBQThCLElBQTlCO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksRUFBWixDQUFiLEVBQThCLElBQTlCO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixDQUFiLEVBQWdDLE1BQWhDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixDQUFiLEVBQWdDLE1BQWhDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksS0FBWixDQUFiLEVBQWlDLE9BQWpDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksTUFBWixDQUFiLEVBQWtDLE1BQWxDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksS0FBWixFQUFtQixLQUFuQixFQUEwQixLQUExQixDQUFiLEVBQStDLGFBQS9DO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixJQUFsQixDQUFiLEVBQXNDLElBQXRDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFiLEVBQW9DLElBQXBDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFiLEVBQW9DLElBQXBDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFiLEVBQW9DLElBQXBDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixNQUFsQixDQUFiLEVBQXdDLElBQXhDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixJQUFsQixDQUFiLEVBQXNDLElBQXRDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixJQUFsQixDQUFiLEVBQXNDLElBQXRDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixJQUFsQixDQUFiLEVBQXNDLE1BQXRDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksT0FBWixFQUFxQixLQUFyQixDQUFiLEVBQTBDLE9BQTFDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixDQUFiLEVBQWdDLElBQWhDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixTQUFsQixDQUFiLEVBQTJDLFdBQTNDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixLQUFsQixDQUFiLEVBQXVDLEtBQXZDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksT0FBWixDQUFiLEVBQW1DLE9BQW5DO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksT0FBWixFQUFxQixTQUFyQixDQUFiLEVBQThDLGNBQTlDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksT0FBWixFQUFxQixLQUFyQixDQUFiLEVBQTBDLFFBQTFDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksT0FBWixFQUFxQixLQUFyQixFQUE0QixLQUE1QixDQUFiLEVBQWlELFNBQWpEO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksT0FBWixFQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQyxLQUFuQyxDQUFiLEVBQXdELGFBQXhEO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksUUFBWixFQUFzQixJQUF0QixDQUFiLEVBQTBDLE1BQTFDO0FBQ0EsYUFBTyxLQUFQLENBQWEsS0FBSyxNQUFMLENBQVksVUFBWixFQUF3QixJQUF4QixDQUFiLEVBQTRDLE9BQTVDO0FBQ0EsT0FBQyxZQUFXO0FBQ1YsWUFBSSxJQUFJLEVBQUosQ0FETTtBQUVWLFVBQUUsQ0FBRixHQUFNLENBQU4sQ0FGVTtBQUdWLGVBQU8sS0FBUCxDQUFhLEtBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsQ0FBbEIsQ0FBYixFQUFtQyxZQUFuQyxFQUhVO09BQVgsQ0FBRDtBQUtBLGFBQU8sS0FBUCxDQUFhLEtBQUssTUFBTCxDQUFZLElBQUksS0FBSixDQUFVLEtBQVYsQ0FBWixDQUFiLEVBQTRDLGNBQTVDLEVBWUEsS0FBSyxRQUFMLENBQWMsV0FBZCxFQUEyQixLQUEzQjtBQUNBLGFBQU8sS0FBUCxDQUFhLEtBQUssTUFBTCxDQUFZLElBQUksV0FBSixDQUFnQixLQUFoQixDQUFaLENBQWIsRUFBa0Qsb0JBQWxEIiwiZmlsZSI6Im5wbS91dGlsQDAuMTAuMy90ZXN0L25vZGUvZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgpLCAnJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJycpLCAnJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoW10pLCAnW10nKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCh7fSksICd7fScpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KG51bGwpLCAnbnVsbCcpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KHRydWUpLCAndHJ1ZScpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KGZhbHNlKSwgJ2ZhbHNlJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJ3Rlc3QnKSwgJ3Rlc3QnKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnZm9vJywgJ2JhcicsICdiYXonKSwgJ2ZvbyBiYXIgYmF6Jyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJyVkJywgNDIuMCksICc0MicpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KCclZCcsIDQyKSwgJzQyJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJyVzJywgNDIpLCAnNDInKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnJWonLCA0MiksICc0MicpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KCclZCcsICc0Mi4wJyksICc0MicpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KCclZCcsICc0MicpLCAnNDInKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnJXMnLCAnNDInKSwgJzQyJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJyVqJywgJzQyJyksICdcIjQyXCInKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnJSVzJXMnLCAnZm9vJyksICclc2ZvbycpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KCclcycpLCAnJXMnKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnJXMnLCB1bmRlZmluZWQpLCAndW5kZWZpbmVkJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJyVzJywgJ2ZvbycpLCAnZm9vJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJyVzOiVzJyksICclczolcycpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KCclczolcycsIHVuZGVmaW5lZCksICd1bmRlZmluZWQ6JXMnKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnJXM6JXMnLCAnZm9vJyksICdmb286JXMnKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnJXM6JXMnLCAnZm9vJywgJ2JhcicpLCAnZm9vOmJhcicpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KCclczolcycsICdmb28nLCAnYmFyJywgJ2JheicpLCAnZm9vOmJhciBiYXonKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdCgnJSUlcyUlJywgJ2hpJyksICclaGklJyk7XG5hc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJyUlJXMlJSUlJywgJ2hpJyksICclaGklJScpO1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgbyA9IHt9O1xuICBvLm8gPSBvO1xuICBhc3NlcnQuZXF1YWwodXRpbC5mb3JtYXQoJyVqJywgbyksICdbQ2lyY3VsYXJdJyk7XG59KSgpO1xuYXNzZXJ0LmVxdWFsKHV0aWwuZm9ybWF0KG5ldyBFcnJvcignZm9vJykpLCAnW0Vycm9yOiBmb29dJyk7XG5mdW5jdGlvbiBDdXN0b21FcnJvcihtc2cpIHtcbiAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdtZXNzYWdlJywge1xuICAgIHZhbHVlOiBtc2csXG4gICAgZW51bWVyYWJsZTogZmFsc2VcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbmFtZScsIHtcbiAgICB2YWx1ZTogJ0N1c3RvbUVycm9yJyxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICB9KTtcbn1cbnV0aWwuaW5oZXJpdHMoQ3VzdG9tRXJyb3IsIEVycm9yKTtcbmFzc2VydC5lcXVhbCh1dGlsLmZvcm1hdChuZXcgQ3VzdG9tRXJyb3IoJ2JhcicpKSwgJ1tDdXN0b21FcnJvcjogYmFyXScpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
