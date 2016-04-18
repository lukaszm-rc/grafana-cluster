'use strict';

System.register([], function (_export, _context) {
  var test, b64;
  return {
    setters: [],
    execute: function () {
      test = require('tape');
      b64 = require('../lib/b64');

      test('decode url-safe style base64 strings', function (t) {
        var expected = [0xff, 0xff, 0xbe, 0xff, 0xef, 0xbf, 0xfb, 0xef, 0xff];
        var actual = b64.toByteArray('//++/++/++//');
        for (var i = 0; i < actual.length; i++) {
          t.equal(actual[i], expected[i]);
        }
        actual = b64.toByteArray('__--_--_--__');
        for (var i = 0; i < actual.length; i++) {
          t.equal(actual[i], expected[i]);
        }
        t.end();
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYXNlNjQtanNAMC4wLjgvdGVzdC91cmwtc2FmZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksYUFBTyxRQUFRLE1BQVI7QUFDUCxZQUFNLFFBQVEsWUFBUjs7QUFDVixXQUFLLHNDQUFMLEVBQTZDLFVBQVMsQ0FBVCxFQUFZO0FBQ3ZELFlBQUksV0FBVyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxJQUFqRCxDQUFYLENBRG1EO0FBRXZELFlBQUksU0FBUyxJQUFJLFdBQUosQ0FBZ0IsY0FBaEIsQ0FBVCxDQUZtRDtBQUd2RCxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFPLE1BQVAsRUFBZSxHQUFuQyxFQUF3QztBQUN0QyxZQUFFLEtBQUYsQ0FBUSxPQUFPLENBQVAsQ0FBUixFQUFtQixTQUFTLENBQVQsQ0FBbkIsRUFEc0M7U0FBeEM7QUFHQSxpQkFBUyxJQUFJLFdBQUosQ0FBZ0IsY0FBaEIsQ0FBVCxDQU51RDtBQU92RCxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFPLE1BQVAsRUFBZSxHQUFuQyxFQUF3QztBQUN0QyxZQUFFLEtBQUYsQ0FBUSxPQUFPLENBQVAsQ0FBUixFQUFtQixTQUFTLENBQVQsQ0FBbkIsRUFEc0M7U0FBeEM7QUFHQSxVQUFFLEdBQUYsR0FWdUQ7T0FBWixDQUE3QyIsImZpbGUiOiJucG0vYmFzZTY0LWpzQDAuMC44L3Rlc3QvdXJsLXNhZmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0ZXN0ID0gcmVxdWlyZSgndGFwZScpLFxuICAgIGI2NCA9IHJlcXVpcmUoJy4uL2xpYi9iNjQnKTtcbnRlc3QoJ2RlY29kZSB1cmwtc2FmZSBzdHlsZSBiYXNlNjQgc3RyaW5ncycsIGZ1bmN0aW9uKHQpIHtcbiAgdmFyIGV4cGVjdGVkID0gWzB4ZmYsIDB4ZmYsIDB4YmUsIDB4ZmYsIDB4ZWYsIDB4YmYsIDB4ZmIsIDB4ZWYsIDB4ZmZdO1xuICB2YXIgYWN0dWFsID0gYjY0LnRvQnl0ZUFycmF5KCcvLysrLysrLysrLy8nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3R1YWwubGVuZ3RoOyBpKyspIHtcbiAgICB0LmVxdWFsKGFjdHVhbFtpXSwgZXhwZWN0ZWRbaV0pO1xuICB9XG4gIGFjdHVhbCA9IGI2NC50b0J5dGVBcnJheSgnX18tLV8tLV8tLV9fJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0dWFsLmxlbmd0aDsgaSsrKSB7XG4gICAgdC5lcXVhbChhY3R1YWxbaV0sIGV4cGVjdGVkW2ldKTtcbiAgfVxuICB0LmVuZCgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
