'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        'use strict';

        if (process.env.OBJECT_IMPL) global.TYPED_ARRAY_SUPPORT = false;
        var Buffer = require('../../index').Buffer;
        var common = {};
        var assert = require('assert');
        assert.equal(Buffer('hérité').toString('ascii'), 'hC)ritC)');
        var input = 'C’est, graphiquement, la réunion d’un accent aigu ' + 'et d’un accent grave.';
        var expected = 'Cb\u0000\u0019est, graphiquement, la rC)union ' + 'db\u0000\u0019un accent aigu et db\u0000\u0019un ' + 'accent grave.';
        var buf = Buffer(input);
        for (var i = 0; i < expected.length; ++i) {
          assert.equal(buf.slice(i).toString('ascii'), expected.slice(i));
          if (input.charCodeAt(i) > 65535) ++i;
          if (input.charCodeAt(i) > 127) ++i;
        }
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvdGVzdC9ub2RlL3Rlc3QtYnVmZmVyLWFzY2lpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixxQkFEaUI7O0FBRWpCLFlBQUksUUFBUSxHQUFSLENBQVksV0FBWixFQUNGLE9BQU8sbUJBQVAsR0FBNkIsS0FBN0IsQ0FERjtBQUVBLFlBQUksU0FBUyxRQUFRLGFBQVIsRUFBdUIsTUFBdkIsQ0FKSTtBQUtqQixZQUFJLFNBQVMsRUFBVCxDQUxhO0FBTWpCLFlBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVCxDQU5hO0FBT2pCLGVBQU8sS0FBUCxDQUFhLE9BQU8sUUFBUCxFQUFpQixRQUFqQixDQUEwQixPQUExQixDQUFiLEVBQWlELFVBQWpELEVBUGlCO0FBUWpCLFlBQUksUUFBUSx1REFBdUQsdUJBQXZELENBUks7QUFTakIsWUFBSSxXQUFXLG1EQUFtRCxtREFBbkQsR0FBeUcsZUFBekcsQ0FURTtBQVVqQixZQUFJLE1BQU0sT0FBTyxLQUFQLENBQU4sQ0FWYTtBQVdqQixhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFTLE1BQVQsRUFBaUIsRUFBRSxDQUFGLEVBQUs7QUFDeEMsaUJBQU8sS0FBUCxDQUFhLElBQUksS0FBSixDQUFVLENBQVYsRUFBYSxRQUFiLENBQXNCLE9BQXRCLENBQWIsRUFBNkMsU0FBUyxLQUFULENBQWUsQ0FBZixDQUE3QyxFQUR3QztBQUV4QyxjQUFJLE1BQU0sVUFBTixDQUFpQixDQUFqQixJQUFzQixLQUF0QixFQUNGLEVBQUUsQ0FBRixDQURGO0FBRUEsY0FBSSxNQUFNLFVBQU4sQ0FBaUIsQ0FBakIsSUFBc0IsR0FBdEIsRUFDRixFQUFFLENBQUYsQ0FERjtTQUpGO09BWEQsQ0FBRCxDQWtCRyxRQUFRLFNBQVIsQ0FsQkgiLCJmaWxlIjoibnBtL2J1ZmZlckAzLjYuMC90ZXN0L25vZGUvdGVzdC1idWZmZXItYXNjaWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKHByb2Nlc3MuZW52Lk9CSkVDVF9JTVBMKVxuICAgIGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZmFsc2U7XG4gIHZhciBCdWZmZXIgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLkJ1ZmZlcjtcbiAgdmFyIGNvbW1vbiA9IHt9O1xuICB2YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG4gIGFzc2VydC5lcXVhbChCdWZmZXIoJ2jDqXJpdMOpJykudG9TdHJpbmcoJ2FzY2lpJyksICdoQylyaXRDKScpO1xuICB2YXIgaW5wdXQgPSAnQ+KAmWVzdCwgZ3JhcGhpcXVlbWVudCwgbGEgcsOpdW5pb24gZOKAmXVuIGFjY2VudCBhaWd1ICcgKyAnZXQgZOKAmXVuIGFjY2VudCBncmF2ZS4nO1xuICB2YXIgZXhwZWN0ZWQgPSAnQ2JcXHUwMDAwXFx1MDAxOWVzdCwgZ3JhcGhpcXVlbWVudCwgbGEgckMpdW5pb24gJyArICdkYlxcdTAwMDBcXHUwMDE5dW4gYWNjZW50IGFpZ3UgZXQgZGJcXHUwMDAwXFx1MDAxOXVuICcgKyAnYWNjZW50IGdyYXZlLic7XG4gIHZhciBidWYgPSBCdWZmZXIoaW5wdXQpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkLmxlbmd0aDsgKytpKSB7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5zbGljZShpKS50b1N0cmluZygnYXNjaWknKSwgZXhwZWN0ZWQuc2xpY2UoaSkpO1xuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KGkpID4gNjU1MzUpXG4gICAgICArK2k7XG4gICAgaWYgKGlucHV0LmNoYXJDb2RlQXQoaSkgPiAxMjcpXG4gICAgICArK2k7XG4gIH1cbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
