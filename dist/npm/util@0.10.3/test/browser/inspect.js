'use strict';

System.register([], function (_export, _context) {
  var assert, util;
  return {
    setters: [],
    execute: function () {
      assert = require('assert');
      util = require('../../util');

      suite('inspect');
      test('util.inspect - test for sparse array', function () {
        var a = ['foo', 'bar', 'baz'];
        assert.equal(util.inspect(a), '[ \'foo\', \'bar\', \'baz\' ]');
        delete a[1];
        assert.equal(util.inspect(a), '[ \'foo\', , \'baz\' ]');
        assert.equal(util.inspect(a, true), '[ \'foo\', , \'baz\', [length]: 3 ]');
        assert.equal(util.inspect(new Array(5)), '[ , , , ,  ]');
      });
      test('util.inspect -  exceptions should print the error message, not \'{}\'', function () {
        assert.equal(util.inspect(new Error()), '[Error]');
        assert.equal(util.inspect(new Error('FAIL')), '[Error: FAIL]');
        assert.equal(util.inspect(new TypeError('FAIL')), '[TypeError: FAIL]');
        assert.equal(util.inspect(new SyntaxError('FAIL')), '[SyntaxError: FAIL]');
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS91dGlsQDAuMTAuMy90ZXN0L2Jyb3dzZXIvaW5zcGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZUFBUyxRQUFRLFFBQVI7QUFDVCxhQUFPLFFBQVEsWUFBUjs7QUFDWCxZQUFNLFNBQU47QUFDQSxXQUFLLHNDQUFMLEVBQTZDLFlBQVc7QUFDdEQsWUFBSSxJQUFJLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQUosQ0FEa0Q7QUFFdEQsZUFBTyxLQUFQLENBQWEsS0FBSyxPQUFMLENBQWEsQ0FBYixDQUFiLEVBQThCLCtCQUE5QixFQUZzRDtBQUd0RCxlQUFPLEVBQUUsQ0FBRixDQUFQLENBSHNEO0FBSXRELGVBQU8sS0FBUCxDQUFhLEtBQUssT0FBTCxDQUFhLENBQWIsQ0FBYixFQUE4Qix3QkFBOUIsRUFKc0Q7QUFLdEQsZUFBTyxLQUFQLENBQWEsS0FBSyxPQUFMLENBQWEsQ0FBYixFQUFnQixJQUFoQixDQUFiLEVBQW9DLHFDQUFwQyxFQUxzRDtBQU10RCxlQUFPLEtBQVAsQ0FBYSxLQUFLLE9BQUwsQ0FBYSxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQWIsQ0FBYixFQUF5QyxjQUF6QyxFQU5zRDtPQUFYLENBQTdDO0FBUUEsV0FBSyx1RUFBTCxFQUE4RSxZQUFXO0FBQ3ZGLGVBQU8sS0FBUCxDQUFhLEtBQUssT0FBTCxDQUFhLElBQUksS0FBSixFQUFiLENBQWIsRUFBd0MsU0FBeEMsRUFEdUY7QUFFdkYsZUFBTyxLQUFQLENBQWEsS0FBSyxPQUFMLENBQWEsSUFBSSxLQUFKLENBQVUsTUFBVixDQUFiLENBQWIsRUFBOEMsZUFBOUMsRUFGdUY7QUFHdkYsZUFBTyxLQUFQLENBQWEsS0FBSyxPQUFMLENBQWEsSUFBSSxTQUFKLENBQWMsTUFBZCxDQUFiLENBQWIsRUFBa0QsbUJBQWxELEVBSHVGO0FBSXZGLGVBQU8sS0FBUCxDQUFhLEtBQUssT0FBTCxDQUFhLElBQUksV0FBSixDQUFnQixNQUFoQixDQUFiLENBQWIsRUFBb0QscUJBQXBELEVBSnVGO09BQVgsQ0FBOUUiLCJmaWxlIjoibnBtL3V0aWxAMC4xMC4zL3Rlc3QvYnJvd3Nlci9pbnNwZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcbnN1aXRlKCdpbnNwZWN0Jyk7XG50ZXN0KCd1dGlsLmluc3BlY3QgLSB0ZXN0IGZvciBzcGFyc2UgYXJyYXknLCBmdW5jdGlvbigpIHtcbiAgdmFyIGEgPSBbJ2ZvbycsICdiYXInLCAnYmF6J107XG4gIGFzc2VydC5lcXVhbCh1dGlsLmluc3BlY3QoYSksICdbIFxcJ2Zvb1xcJywgXFwnYmFyXFwnLCBcXCdiYXpcXCcgXScpO1xuICBkZWxldGUgYVsxXTtcbiAgYXNzZXJ0LmVxdWFsKHV0aWwuaW5zcGVjdChhKSwgJ1sgXFwnZm9vXFwnLCAsIFxcJ2JhelxcJyBdJyk7XG4gIGFzc2VydC5lcXVhbCh1dGlsLmluc3BlY3QoYSwgdHJ1ZSksICdbIFxcJ2Zvb1xcJywgLCBcXCdiYXpcXCcsIFtsZW5ndGhdOiAzIF0nKTtcbiAgYXNzZXJ0LmVxdWFsKHV0aWwuaW5zcGVjdChuZXcgQXJyYXkoNSkpLCAnWyAsICwgLCAsICBdJyk7XG59KTtcbnRlc3QoJ3V0aWwuaW5zcGVjdCAtICBleGNlcHRpb25zIHNob3VsZCBwcmludCB0aGUgZXJyb3IgbWVzc2FnZSwgbm90IFxcJ3t9XFwnJywgZnVuY3Rpb24oKSB7XG4gIGFzc2VydC5lcXVhbCh1dGlsLmluc3BlY3QobmV3IEVycm9yKCkpLCAnW0Vycm9yXScpO1xuICBhc3NlcnQuZXF1YWwodXRpbC5pbnNwZWN0KG5ldyBFcnJvcignRkFJTCcpKSwgJ1tFcnJvcjogRkFJTF0nKTtcbiAgYXNzZXJ0LmVxdWFsKHV0aWwuaW5zcGVjdChuZXcgVHlwZUVycm9yKCdGQUlMJykpLCAnW1R5cGVFcnJvcjogRkFJTF0nKTtcbiAgYXNzZXJ0LmVxdWFsKHV0aWwuaW5zcGVjdChuZXcgU3ludGF4RXJyb3IoJ0ZBSUwnKSksICdbU3ludGF4RXJyb3I6IEZBSUxdJyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
