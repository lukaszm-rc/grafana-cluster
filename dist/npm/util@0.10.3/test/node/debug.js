'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var assert = require('assert');
        var util = require('../../util');
        if (process.argv[2] === 'child') child();else parent();
        function parent() {
          test('foo,tud,bar', true);
          test('foo,tud', true);
          test('tud,bar', true);
          test('tud', true);
          test('foo,bar', false);
          test('', false);
        }
        function test(environ, shouldWrite) {
          var expectErr = '';
          if (shouldWrite) {
            expectErr = 'TUD %PID%: this { is: \'a\' } /debugging/\n' + 'TUD %PID%: number=1234 string=asdf obj={"foo":"bar"}\n';
          }
          var expectOut = 'ok\n';
          var didTest = false;
          var spawn = require('child_process').spawn;
          var child = spawn(process.execPath, [__filename, 'child'], { env: { NODE_DEBUG: environ } });
          expectErr = expectErr.split('%PID%').join(child.pid);
          var err = '';
          child.stderr.setEncoding('utf8');
          child.stderr.on('data', function (c) {
            err += c;
          });
          var out = '';
          child.stdout.setEncoding('utf8');
          child.stdout.on('data', function (c) {
            out += c;
          });
          child.on('close', function (c) {
            assert(!c);
            assert.equal(err, expectErr);
            assert.equal(out, expectOut);
            didTest = true;
            console.log('ok %j %j', environ, shouldWrite);
          });
          process.on('exit', function () {
            assert(didTest);
          });
        }
        function child() {
          var debug = util.debuglog('tud');
          debug('this', { is: 'a' }, /debugging/);
          debug('number=%d string=%s obj=%j', 1234, 'asdf', { foo: 'bar' });
          console.log('ok');
        }
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS91dGlsQDAuMTAuMy90ZXN0L25vZGUvZGVidWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLFlBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVCxDQURhO0FBRWpCLFlBQUksT0FBTyxRQUFRLFlBQVIsQ0FBUCxDQUZhO0FBR2pCLFlBQUksUUFBUSxJQUFSLENBQWEsQ0FBYixNQUFvQixPQUFwQixFQUNGLFFBREYsS0FHRSxTQUhGO0FBSUEsaUJBQVMsTUFBVCxHQUFrQjtBQUNoQixlQUFLLGFBQUwsRUFBb0IsSUFBcEIsRUFEZ0I7QUFFaEIsZUFBSyxTQUFMLEVBQWdCLElBQWhCLEVBRmdCO0FBR2hCLGVBQUssU0FBTCxFQUFnQixJQUFoQixFQUhnQjtBQUloQixlQUFLLEtBQUwsRUFBWSxJQUFaLEVBSmdCO0FBS2hCLGVBQUssU0FBTCxFQUFnQixLQUFoQixFQUxnQjtBQU1oQixlQUFLLEVBQUwsRUFBUyxLQUFULEVBTmdCO1NBQWxCO0FBUUEsaUJBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUIsV0FBdkIsRUFBb0M7QUFDbEMsY0FBSSxZQUFZLEVBQVosQ0FEOEI7QUFFbEMsY0FBSSxXQUFKLEVBQWlCO0FBQ2Ysd0JBQVksZ0RBQWdELHdEQUFoRCxDQURHO1dBQWpCO0FBR0EsY0FBSSxZQUFZLE1BQVosQ0FMOEI7QUFNbEMsY0FBSSxVQUFVLEtBQVYsQ0FOOEI7QUFPbEMsY0FBSSxRQUFRLFFBQVEsZUFBUixFQUF5QixLQUF6QixDQVBzQjtBQVFsQyxjQUFJLFFBQVEsTUFBTSxRQUFRLFFBQVIsRUFBa0IsQ0FBQyxVQUFELEVBQWEsT0FBYixDQUF4QixFQUErQyxFQUFDLEtBQUssRUFBQyxZQUFZLE9BQVosRUFBTixFQUFoRCxDQUFSLENBUjhCO0FBU2xDLHNCQUFZLFVBQVUsS0FBVixDQUFnQixPQUFoQixFQUF5QixJQUF6QixDQUE4QixNQUFNLEdBQU4sQ0FBMUMsQ0FUa0M7QUFVbEMsY0FBSSxNQUFNLEVBQU4sQ0FWOEI7QUFXbEMsZ0JBQU0sTUFBTixDQUFhLFdBQWIsQ0FBeUIsTUFBekIsRUFYa0M7QUFZbEMsZ0JBQU0sTUFBTixDQUFhLEVBQWIsQ0FBZ0IsTUFBaEIsRUFBd0IsVUFBUyxDQUFULEVBQVk7QUFDbEMsbUJBQU8sQ0FBUCxDQURrQztXQUFaLENBQXhCLENBWmtDO0FBZWxDLGNBQUksTUFBTSxFQUFOLENBZjhCO0FBZ0JsQyxnQkFBTSxNQUFOLENBQWEsV0FBYixDQUF5QixNQUF6QixFQWhCa0M7QUFpQmxDLGdCQUFNLE1BQU4sQ0FBYSxFQUFiLENBQWdCLE1BQWhCLEVBQXdCLFVBQVMsQ0FBVCxFQUFZO0FBQ2xDLG1CQUFPLENBQVAsQ0FEa0M7V0FBWixDQUF4QixDQWpCa0M7QUFvQmxDLGdCQUFNLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFVBQVMsQ0FBVCxFQUFZO0FBQzVCLG1CQUFPLENBQUMsQ0FBRCxDQUFQLENBRDRCO0FBRTVCLG1CQUFPLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLFNBQWxCLEVBRjRCO0FBRzVCLG1CQUFPLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLFNBQWxCLEVBSDRCO0FBSTVCLHNCQUFVLElBQVYsQ0FKNEI7QUFLNUIsb0JBQVEsR0FBUixDQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUMsV0FBakMsRUFMNEI7V0FBWixDQUFsQixDQXBCa0M7QUEyQmxDLGtCQUFRLEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFlBQVc7QUFDNUIsbUJBQU8sT0FBUCxFQUQ0QjtXQUFYLENBQW5CLENBM0JrQztTQUFwQztBQStCQSxpQkFBUyxLQUFULEdBQWlCO0FBQ2YsY0FBSSxRQUFRLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBUixDQURXO0FBRWYsZ0JBQU0sTUFBTixFQUFjLEVBQUMsSUFBSSxHQUFKLEVBQWYsRUFBeUIsV0FBekIsRUFGZTtBQUdmLGdCQUFNLDRCQUFOLEVBQW9DLElBQXBDLEVBQTBDLE1BQTFDLEVBQWtELEVBQUMsS0FBSyxLQUFMLEVBQW5ELEVBSGU7QUFJZixrQkFBUSxHQUFSLENBQVksSUFBWixFQUplO1NBQWpCO09BOUNELENBQUQsQ0FvREcsUUFBUSxTQUFSLENBcERIIiwiZmlsZSI6Im5wbS91dGlsQDAuMTAuMy90ZXN0L25vZGUvZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gIHZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG4gIGlmIChwcm9jZXNzLmFyZ3ZbMl0gPT09ICdjaGlsZCcpXG4gICAgY2hpbGQoKTtcbiAgZWxzZVxuICAgIHBhcmVudCgpO1xuICBmdW5jdGlvbiBwYXJlbnQoKSB7XG4gICAgdGVzdCgnZm9vLHR1ZCxiYXInLCB0cnVlKTtcbiAgICB0ZXN0KCdmb28sdHVkJywgdHJ1ZSk7XG4gICAgdGVzdCgndHVkLGJhcicsIHRydWUpO1xuICAgIHRlc3QoJ3R1ZCcsIHRydWUpO1xuICAgIHRlc3QoJ2ZvbyxiYXInLCBmYWxzZSk7XG4gICAgdGVzdCgnJywgZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIHRlc3QoZW52aXJvbiwgc2hvdWxkV3JpdGUpIHtcbiAgICB2YXIgZXhwZWN0RXJyID0gJyc7XG4gICAgaWYgKHNob3VsZFdyaXRlKSB7XG4gICAgICBleHBlY3RFcnIgPSAnVFVEICVQSUQlOiB0aGlzIHsgaXM6IFxcJ2FcXCcgfSAvZGVidWdnaW5nL1xcbicgKyAnVFVEICVQSUQlOiBudW1iZXI9MTIzNCBzdHJpbmc9YXNkZiBvYmo9e1wiZm9vXCI6XCJiYXJcIn1cXG4nO1xuICAgIH1cbiAgICB2YXIgZXhwZWN0T3V0ID0gJ29rXFxuJztcbiAgICB2YXIgZGlkVGVzdCA9IGZhbHNlO1xuICAgIHZhciBzcGF3biA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5zcGF3bjtcbiAgICB2YXIgY2hpbGQgPSBzcGF3bihwcm9jZXNzLmV4ZWNQYXRoLCBbX19maWxlbmFtZSwgJ2NoaWxkJ10sIHtlbnY6IHtOT0RFX0RFQlVHOiBlbnZpcm9ufX0pO1xuICAgIGV4cGVjdEVyciA9IGV4cGVjdEVyci5zcGxpdCgnJVBJRCUnKS5qb2luKGNoaWxkLnBpZCk7XG4gICAgdmFyIGVyciA9ICcnO1xuICAgIGNoaWxkLnN0ZGVyci5zZXRFbmNvZGluZygndXRmOCcpO1xuICAgIGNoaWxkLnN0ZGVyci5vbignZGF0YScsIGZ1bmN0aW9uKGMpIHtcbiAgICAgIGVyciArPSBjO1xuICAgIH0pO1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBjaGlsZC5zdGRvdXQuc2V0RW5jb2RpbmcoJ3V0ZjgnKTtcbiAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCBmdW5jdGlvbihjKSB7XG4gICAgICBvdXQgKz0gYztcbiAgICB9KTtcbiAgICBjaGlsZC5vbignY2xvc2UnLCBmdW5jdGlvbihjKSB7XG4gICAgICBhc3NlcnQoIWMpO1xuICAgICAgYXNzZXJ0LmVxdWFsKGVyciwgZXhwZWN0RXJyKTtcbiAgICAgIGFzc2VydC5lcXVhbChvdXQsIGV4cGVjdE91dCk7XG4gICAgICBkaWRUZXN0ID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdvayAlaiAlaicsIGVudmlyb24sIHNob3VsZFdyaXRlKTtcbiAgICB9KTtcbiAgICBwcm9jZXNzLm9uKCdleGl0JywgZnVuY3Rpb24oKSB7XG4gICAgICBhc3NlcnQoZGlkVGVzdCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gY2hpbGQoKSB7XG4gICAgdmFyIGRlYnVnID0gdXRpbC5kZWJ1Z2xvZygndHVkJyk7XG4gICAgZGVidWcoJ3RoaXMnLCB7aXM6ICdhJ30sIC9kZWJ1Z2dpbmcvKTtcbiAgICBkZWJ1ZygnbnVtYmVyPSVkIHN0cmluZz0lcyBvYmo9JWonLCAxMjM0LCAnYXNkZicsIHtmb286ICdiYXInfSk7XG4gICAgY29uc29sZS5sb2coJ29rJyk7XG4gIH1cbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
