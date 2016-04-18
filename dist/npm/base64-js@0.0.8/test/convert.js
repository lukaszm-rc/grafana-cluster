'use strict';

System.register([], function (_export, _context) {
  var test, b64, checks;

  function map(arr, callback) {
    var res = [],
        kValue,
        mappedValue;
    for (var k = 0, len = arr.length; k < len; k++) {
      if (typeof arr === 'string' && !!arr.charAt(k)) {
        kValue = arr.charAt(k);
        mappedValue = callback(kValue, k, arr);
        res[k] = mappedValue;
      } else if (typeof arr !== 'string' && k in arr) {
        kValue = arr[k];
        mappedValue = callback(kValue, k, arr);
        res[k] = mappedValue;
      }
    }
    return res;
  }
  return {
    setters: [],
    execute: function () {
      test = require('tape');
      b64 = require('../lib/b64');
      checks = ['a', 'aa', 'aaa', 'hi', 'hi!', 'hi!!', 'sup', 'sup?', 'sup?!'];

      test('convert to base64 and back', function (t) {
        t.plan(checks.length);
        for (var i = 0; i < checks.length; i++) {
          var check = checks[i],
              b64Str,
              arr,
              str;
          b64Str = b64.fromByteArray(map(check, function (char) {
            return char.charCodeAt(0);
          }));
          arr = b64.toByteArray(b64Str);
          str = map(arr, function (byte) {
            return String.fromCharCode(byte);
          }).join('');
          t.equal(check, str, 'Checked ' + check);
        }
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYXNlNjQtanNAMC4wLjgvdGVzdC9jb252ZXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBcUJBLFdBQVMsR0FBVCxDQUFhLEdBQWIsRUFBa0IsUUFBbEIsRUFBNEI7QUFDMUIsUUFBSSxNQUFNLEVBQU47UUFDQSxNQURKO1FBRUksV0FGSixDQUQwQjtBQUkxQixTQUFLLElBQUksSUFBSSxDQUFKLEVBQ0wsTUFBTSxJQUFJLE1BQUosRUFBWSxJQUFJLEdBQUosRUFBUyxHQUQvQixFQUNvQztBQUNsQyxVQUFLLE9BQU8sR0FBUCxLQUFlLFFBQWYsSUFBMkIsQ0FBQyxDQUFDLElBQUksTUFBSixDQUFXLENBQVgsQ0FBRCxFQUFpQjtBQUNoRCxpQkFBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLENBQVQsQ0FEZ0Q7QUFFaEQsc0JBQWMsU0FBUyxNQUFULEVBQWlCLENBQWpCLEVBQW9CLEdBQXBCLENBQWQsQ0FGZ0Q7QUFHaEQsWUFBSSxDQUFKLElBQVMsV0FBVCxDQUhnRDtPQUFsRCxNQUlPLElBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixJQUEyQixLQUFLLEdBQUwsRUFBVTtBQUM5QyxpQkFBUyxJQUFJLENBQUosQ0FBVCxDQUQ4QztBQUU5QyxzQkFBYyxTQUFTLE1BQVQsRUFBaUIsQ0FBakIsRUFBb0IsR0FBcEIsQ0FBZCxDQUY4QztBQUc5QyxZQUFJLENBQUosSUFBUyxXQUFULENBSDhDO09BQXpDO0tBTlQ7QUFZQSxXQUFPLEdBQVAsQ0FoQjBCO0dBQTVCOzs7O0FBcEJJLGFBQU8sUUFBUSxNQUFSO0FBQ1AsWUFBTSxRQUFRLFlBQVI7QUFDTixlQUFTLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxLQUFaLEVBQW1CLElBQW5CLEVBQXlCLEtBQXpCLEVBQWdDLE1BQWhDLEVBQXdDLEtBQXhDLEVBQStDLE1BQS9DLEVBQXVELE9BQXZEOztBQUNiLFdBQUssNEJBQUwsRUFBbUMsVUFBUyxDQUFULEVBQVk7QUFDN0MsVUFBRSxJQUFGLENBQU8sT0FBTyxNQUFQLENBQVAsQ0FENkM7QUFFN0MsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksT0FBTyxNQUFQLEVBQWUsR0FBbkMsRUFBd0M7QUFDdEMsY0FBSSxRQUFRLE9BQU8sQ0FBUCxDQUFSO2NBQ0EsTUFESjtjQUVJLEdBRko7Y0FHSSxHQUhKLENBRHNDO0FBS3RDLG1CQUFTLElBQUksYUFBSixDQUFrQixJQUFJLEtBQUosRUFBVyxVQUFTLElBQVQsRUFBZTtBQUNuRCxtQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUCxDQURtRDtXQUFmLENBQTdCLENBQVQsQ0FMc0M7QUFRdEMsZ0JBQU0sSUFBSSxXQUFKLENBQWdCLE1BQWhCLENBQU4sQ0FSc0M7QUFTdEMsZ0JBQU0sSUFBSSxHQUFKLEVBQVMsVUFBUyxJQUFULEVBQWU7QUFDNUIsbUJBQU8sT0FBTyxZQUFQLENBQW9CLElBQXBCLENBQVAsQ0FENEI7V0FBZixDQUFULENBRUgsSUFGRyxDQUVFLEVBRkYsQ0FBTixDQVRzQztBQVl0QyxZQUFFLEtBQUYsQ0FBUSxLQUFSLEVBQWUsR0FBZixFQUFvQixhQUFhLEtBQWIsQ0FBcEIsQ0Fac0M7U0FBeEM7T0FGaUMsQ0FBbkMiLCJmaWxlIjoibnBtL2Jhc2U2NC1qc0AwLjAuOC90ZXN0L2NvbnZlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0ZXN0ID0gcmVxdWlyZSgndGFwZScpLFxuICAgIGI2NCA9IHJlcXVpcmUoJy4uL2xpYi9iNjQnKSxcbiAgICBjaGVja3MgPSBbJ2EnLCAnYWEnLCAnYWFhJywgJ2hpJywgJ2hpIScsICdoaSEhJywgJ3N1cCcsICdzdXA/JywgJ3N1cD8hJ107XG50ZXN0KCdjb252ZXJ0IHRvIGJhc2U2NCBhbmQgYmFjaycsIGZ1bmN0aW9uKHQpIHtcbiAgdC5wbGFuKGNoZWNrcy5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoZWNrcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGVjayA9IGNoZWNrc1tpXSxcbiAgICAgICAgYjY0U3RyLFxuICAgICAgICBhcnIsXG4gICAgICAgIHN0cjtcbiAgICBiNjRTdHIgPSBiNjQuZnJvbUJ5dGVBcnJheShtYXAoY2hlY2ssIGZ1bmN0aW9uKGNoYXIpIHtcbiAgICAgIHJldHVybiBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgfSkpO1xuICAgIGFyciA9IGI2NC50b0J5dGVBcnJheShiNjRTdHIpO1xuICAgIHN0ciA9IG1hcChhcnIsIGZ1bmN0aW9uKGJ5dGUpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgIH0pLmpvaW4oJycpO1xuICAgIHQuZXF1YWwoY2hlY2ssIHN0ciwgJ0NoZWNrZWQgJyArIGNoZWNrKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBtYXAoYXJyLCBjYWxsYmFjaykge1xuICB2YXIgcmVzID0gW10sXG4gICAgICBrVmFsdWUsXG4gICAgICBtYXBwZWRWYWx1ZTtcbiAgZm9yICh2YXIgayA9IDAsXG4gICAgICBsZW4gPSBhcnIubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICBpZiAoKHR5cGVvZiBhcnIgPT09ICdzdHJpbmcnICYmICEhYXJyLmNoYXJBdChrKSkpIHtcbiAgICAgIGtWYWx1ZSA9IGFyci5jaGFyQXQoayk7XG4gICAgICBtYXBwZWRWYWx1ZSA9IGNhbGxiYWNrKGtWYWx1ZSwgaywgYXJyKTtcbiAgICAgIHJlc1trXSA9IG1hcHBlZFZhbHVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyciAhPT0gJ3N0cmluZycgJiYgayBpbiBhcnIpIHtcbiAgICAgIGtWYWx1ZSA9IGFycltrXTtcbiAgICAgIG1hcHBlZFZhbHVlID0gY2FsbGJhY2soa1ZhbHVlLCBrLCBhcnIpO1xuICAgICAgcmVzW2tdID0gbWFwcGVkVmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
