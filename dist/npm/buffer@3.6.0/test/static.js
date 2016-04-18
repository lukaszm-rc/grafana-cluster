'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        if (process.env.OBJECT_IMPL) global.TYPED_ARRAY_SUPPORT = false;
        var B = require('../index').Buffer;
        var test = require('tape');
        test('Buffer.isEncoding', function (t) {
          t.equal(B.isEncoding('HEX'), true);
          t.equal(B.isEncoding('hex'), true);
          t.equal(B.isEncoding('bad'), false);
          t.end();
        });
        test('Buffer.isBuffer', function (t) {
          t.equal(B.isBuffer(new B('hey', 'utf8')), true);
          t.equal(B.isBuffer(new B([1, 2, 3], 'utf8')), true);
          t.equal(B.isBuffer('hey'), false);
          t.end();
        });
        test('Buffer.toArrayBuffer', function (t) {
          var data = [1, 2, 3, 4, 5, 6, 7, 8];
          if (typeof Uint8Array !== 'undefined') {
            var result = new B(data).toArrayBuffer();
            var expected = new Uint8Array(data).buffer;
            for (var i = 0; i < expected.byteLength; i++) {
              t.equal(result[i], expected[i]);
            }
          } else {
            t.pass('No toArrayBuffer() method provided in old browsers');
          }
          t.end();
        });
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvdGVzdC9zdGF0aWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLFlBQUksUUFBUSxHQUFSLENBQVksV0FBWixFQUNGLE9BQU8sbUJBQVAsR0FBNkIsS0FBN0IsQ0FERjtBQUVBLFlBQUksSUFBSSxRQUFRLFVBQVIsRUFBb0IsTUFBcEIsQ0FIUztBQUlqQixZQUFJLE9BQU8sUUFBUSxNQUFSLENBQVAsQ0FKYTtBQUtqQixhQUFLLG1CQUFMLEVBQTBCLFVBQVMsQ0FBVCxFQUFZO0FBQ3BDLFlBQUUsS0FBRixDQUFRLEVBQUUsVUFBRixDQUFhLEtBQWIsQ0FBUixFQUE2QixJQUE3QixFQURvQztBQUVwQyxZQUFFLEtBQUYsQ0FBUSxFQUFFLFVBQUYsQ0FBYSxLQUFiLENBQVIsRUFBNkIsSUFBN0IsRUFGb0M7QUFHcEMsWUFBRSxLQUFGLENBQVEsRUFBRSxVQUFGLENBQWEsS0FBYixDQUFSLEVBQTZCLEtBQTdCLEVBSG9DO0FBSXBDLFlBQUUsR0FBRixHQUpvQztTQUFaLENBQTFCLENBTGlCO0FBV2pCLGFBQUssaUJBQUwsRUFBd0IsVUFBUyxDQUFULEVBQVk7QUFDbEMsWUFBRSxLQUFGLENBQVEsRUFBRSxRQUFGLENBQVcsSUFBSSxDQUFKLENBQU0sS0FBTixFQUFhLE1BQWIsQ0FBWCxDQUFSLEVBQTBDLElBQTFDLEVBRGtDO0FBRWxDLFlBQUUsS0FBRixDQUFRLEVBQUUsUUFBRixDQUFXLElBQUksQ0FBSixDQUFNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQU4sRUFBaUIsTUFBakIsQ0FBWCxDQUFSLEVBQThDLElBQTlDLEVBRmtDO0FBR2xDLFlBQUUsS0FBRixDQUFRLEVBQUUsUUFBRixDQUFXLEtBQVgsQ0FBUixFQUEyQixLQUEzQixFQUhrQztBQUlsQyxZQUFFLEdBQUYsR0FKa0M7U0FBWixDQUF4QixDQVhpQjtBQWlCakIsYUFBSyxzQkFBTCxFQUE2QixVQUFTLENBQVQsRUFBWTtBQUN2QyxjQUFJLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFQLENBRG1DO0FBRXZDLGNBQUksT0FBTyxVQUFQLEtBQXNCLFdBQXRCLEVBQW1DO0FBQ3JDLGdCQUFJLFNBQVMsSUFBSSxDQUFKLENBQU0sSUFBTixFQUFZLGFBQVosRUFBVCxDQURpQztBQUVyQyxnQkFBSSxXQUFXLElBQUksVUFBSixDQUFlLElBQWYsRUFBcUIsTUFBckIsQ0FGc0I7QUFHckMsaUJBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQVMsVUFBVCxFQUFxQixHQUF6QyxFQUE4QztBQUM1QyxnQkFBRSxLQUFGLENBQVEsT0FBTyxDQUFQLENBQVIsRUFBbUIsU0FBUyxDQUFULENBQW5CLEVBRDRDO2FBQTlDO1dBSEYsTUFNTztBQUNMLGNBQUUsSUFBRixDQUFPLG9EQUFQLEVBREs7V0FOUDtBQVNBLFlBQUUsR0FBRixHQVh1QztTQUFaLENBQTdCLENBakJpQjtPQUFsQixDQUFELENBOEJHLFFBQVEsU0FBUixDQTlCSCIsImZpbGUiOiJucG0vYnVmZmVyQDMuNi4wL3Rlc3Qvc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICBpZiAocHJvY2Vzcy5lbnYuT0JKRUNUX0lNUEwpXG4gICAgZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBmYWxzZTtcbiAgdmFyIEIgPSByZXF1aXJlKCcuLi9pbmRleCcpLkJ1ZmZlcjtcbiAgdmFyIHRlc3QgPSByZXF1aXJlKCd0YXBlJyk7XG4gIHRlc3QoJ0J1ZmZlci5pc0VuY29kaW5nJywgZnVuY3Rpb24odCkge1xuICAgIHQuZXF1YWwoQi5pc0VuY29kaW5nKCdIRVgnKSwgdHJ1ZSk7XG4gICAgdC5lcXVhbChCLmlzRW5jb2RpbmcoJ2hleCcpLCB0cnVlKTtcbiAgICB0LmVxdWFsKEIuaXNFbmNvZGluZygnYmFkJyksIGZhbHNlKTtcbiAgICB0LmVuZCgpO1xuICB9KTtcbiAgdGVzdCgnQnVmZmVyLmlzQnVmZmVyJywgZnVuY3Rpb24odCkge1xuICAgIHQuZXF1YWwoQi5pc0J1ZmZlcihuZXcgQignaGV5JywgJ3V0ZjgnKSksIHRydWUpO1xuICAgIHQuZXF1YWwoQi5pc0J1ZmZlcihuZXcgQihbMSwgMiwgM10sICd1dGY4JykpLCB0cnVlKTtcbiAgICB0LmVxdWFsKEIuaXNCdWZmZXIoJ2hleScpLCBmYWxzZSk7XG4gICAgdC5lbmQoKTtcbiAgfSk7XG4gIHRlc3QoJ0J1ZmZlci50b0FycmF5QnVmZmVyJywgZnVuY3Rpb24odCkge1xuICAgIHZhciBkYXRhID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuICAgIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgQihkYXRhKS50b0FycmF5QnVmZmVyKCk7XG4gICAgICB2YXIgZXhwZWN0ZWQgPSBuZXcgVWludDhBcnJheShkYXRhKS5idWZmZXI7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICB0LmVxdWFsKHJlc3VsdFtpXSwgZXhwZWN0ZWRbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0LnBhc3MoJ05vIHRvQXJyYXlCdWZmZXIoKSBtZXRob2QgcHJvdmlkZWQgaW4gb2xkIGJyb3dzZXJzJyk7XG4gICAgfVxuICAgIHQuZW5kKCk7XG4gIH0pO1xufSkocmVxdWlyZSgncHJvY2VzcycpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==