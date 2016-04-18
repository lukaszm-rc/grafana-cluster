'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var assert = require('assert');
        var util = require('../../util');
        assert.ok(process.stdout.writable);
        assert.ok(process.stderr.writable);
        var stdout_write = global.process.stdout.write;
        var strings = [];
        global.process.stdout.write = function (string) {
          strings.push(string);
        };
        console._stderr = process.stdout;
        var tests = [{
          input: 'foo',
          output: 'foo'
        }, {
          input: undefined,
          output: 'undefined'
        }, {
          input: null,
          output: 'null'
        }, {
          input: false,
          output: 'false'
        }, {
          input: 42,
          output: '42'
        }, {
          input: function input() {},
          output: '[Function]'
        }, {
          input: parseInt('not a number', 10),
          output: 'NaN'
        }, {
          input: { answer: 42 },
          output: '{ answer: 42 }'
        }, {
          input: [1, 2, 3],
          output: '[ 1, 2, 3 ]'
        }];
        tests.forEach(function (test) {
          util.log(test.input);
          var result = strings.shift().trim(),
              re = /[0-9]{1,2} [A-Z][a-z]{2} [0-9]{2}:[0-9]{2}:[0-9]{2} - (.+)$/,
              match = re.exec(result);
          assert.ok(match);
          assert.equal(match[1], test.output);
        });
        global.process.stdout.write = stdout_write;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS91dGlsQDAuMTAuMy90ZXN0L25vZGUvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixZQUFJLFNBQVMsUUFBUSxRQUFSLENBQVQsQ0FEYTtBQUVqQixZQUFJLE9BQU8sUUFBUSxZQUFSLENBQVAsQ0FGYTtBQUdqQixlQUFPLEVBQVAsQ0FBVSxRQUFRLE1BQVIsQ0FBZSxRQUFmLENBQVYsQ0FIaUI7QUFJakIsZUFBTyxFQUFQLENBQVUsUUFBUSxNQUFSLENBQWUsUUFBZixDQUFWLENBSmlCO0FBS2pCLFlBQUksZUFBZSxPQUFPLE9BQVAsQ0FBZSxNQUFmLENBQXNCLEtBQXRCLENBTEY7QUFNakIsWUFBSSxVQUFVLEVBQVYsQ0FOYTtBQU9qQixlQUFPLE9BQVAsQ0FBZSxNQUFmLENBQXNCLEtBQXRCLEdBQThCLFVBQVMsTUFBVCxFQUFpQjtBQUM3QyxrQkFBUSxJQUFSLENBQWEsTUFBYixFQUQ2QztTQUFqQixDQVBiO0FBVWpCLGdCQUFRLE9BQVIsR0FBa0IsUUFBUSxNQUFSLENBVkQ7QUFXakIsWUFBSSxRQUFRLENBQUM7QUFDWCxpQkFBTyxLQUFQO0FBQ0Esa0JBQVEsS0FBUjtTQUZVLEVBR1Q7QUFDRCxpQkFBTyxTQUFQO0FBQ0Esa0JBQVEsV0FBUjtTQUxVLEVBTVQ7QUFDRCxpQkFBTyxJQUFQO0FBQ0Esa0JBQVEsTUFBUjtTQVJVLEVBU1Q7QUFDRCxpQkFBTyxLQUFQO0FBQ0Esa0JBQVEsT0FBUjtTQVhVLEVBWVQ7QUFDRCxpQkFBTyxFQUFQO0FBQ0Esa0JBQVEsSUFBUjtTQWRVLEVBZVQ7QUFDRCxpQkFBTyxpQkFBVyxFQUFYO0FBQ1Asa0JBQVEsWUFBUjtTQWpCVSxFQWtCVDtBQUNELGlCQUFPLFNBQVMsY0FBVCxFQUF5QixFQUF6QixDQUFQO0FBQ0Esa0JBQVEsS0FBUjtTQXBCVSxFQXFCVDtBQUNELGlCQUFPLEVBQUMsUUFBUSxFQUFSLEVBQVI7QUFDQSxrQkFBUSxnQkFBUjtTQXZCVSxFQXdCVDtBQUNELGlCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVA7QUFDQSxrQkFBUSxhQUFSO1NBMUJVLENBQVIsQ0FYYTtBQXVDakIsY0FBTSxPQUFOLENBQWMsVUFBUyxJQUFULEVBQWU7QUFDM0IsZUFBSyxHQUFMLENBQVMsS0FBSyxLQUFMLENBQVQsQ0FEMkI7QUFFM0IsY0FBSSxTQUFTLFFBQVEsS0FBUixHQUFnQixJQUFoQixFQUFUO2NBQ0EsS0FBTSw2REFBTjtjQUNBLFFBQVEsR0FBRyxJQUFILENBQVEsTUFBUixDQUFSLENBSnVCO0FBSzNCLGlCQUFPLEVBQVAsQ0FBVSxLQUFWLEVBTDJCO0FBTTNCLGlCQUFPLEtBQVAsQ0FBYSxNQUFNLENBQU4sQ0FBYixFQUF1QixLQUFLLE1BQUwsQ0FBdkIsQ0FOMkI7U0FBZixDQUFkLENBdkNpQjtBQStDakIsZUFBTyxPQUFQLENBQWUsTUFBZixDQUFzQixLQUF0QixHQUE4QixZQUE5QixDQS9DaUI7T0FBbEIsQ0FBRCxDQWdERyxRQUFRLFNBQVIsQ0FoREgiLCJmaWxlIjoibnBtL3V0aWxAMC4xMC4zL3Rlc3Qvbm9kZS9sb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gIHZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG4gIGFzc2VydC5vayhwcm9jZXNzLnN0ZG91dC53cml0YWJsZSk7XG4gIGFzc2VydC5vayhwcm9jZXNzLnN0ZGVyci53cml0YWJsZSk7XG4gIHZhciBzdGRvdXRfd3JpdGUgPSBnbG9iYWwucHJvY2Vzcy5zdGRvdXQud3JpdGU7XG4gIHZhciBzdHJpbmdzID0gW107XG4gIGdsb2JhbC5wcm9jZXNzLnN0ZG91dC53cml0ZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHN0cmluZ3MucHVzaChzdHJpbmcpO1xuICB9O1xuICBjb25zb2xlLl9zdGRlcnIgPSBwcm9jZXNzLnN0ZG91dDtcbiAgdmFyIHRlc3RzID0gW3tcbiAgICBpbnB1dDogJ2ZvbycsXG4gICAgb3V0cHV0OiAnZm9vJ1xuICB9LCB7XG4gICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICBvdXRwdXQ6ICd1bmRlZmluZWQnXG4gIH0sIHtcbiAgICBpbnB1dDogbnVsbCxcbiAgICBvdXRwdXQ6ICdudWxsJ1xuICB9LCB7XG4gICAgaW5wdXQ6IGZhbHNlLFxuICAgIG91dHB1dDogJ2ZhbHNlJ1xuICB9LCB7XG4gICAgaW5wdXQ6IDQyLFxuICAgIG91dHB1dDogJzQyJ1xuICB9LCB7XG4gICAgaW5wdXQ6IGZ1bmN0aW9uKCkge30sXG4gICAgb3V0cHV0OiAnW0Z1bmN0aW9uXSdcbiAgfSwge1xuICAgIGlucHV0OiBwYXJzZUludCgnbm90IGEgbnVtYmVyJywgMTApLFxuICAgIG91dHB1dDogJ05hTidcbiAgfSwge1xuICAgIGlucHV0OiB7YW5zd2VyOiA0Mn0sXG4gICAgb3V0cHV0OiAneyBhbnN3ZXI6IDQyIH0nXG4gIH0sIHtcbiAgICBpbnB1dDogWzEsIDIsIDNdLFxuICAgIG91dHB1dDogJ1sgMSwgMiwgMyBdJ1xuICB9XTtcbiAgdGVzdHMuZm9yRWFjaChmdW5jdGlvbih0ZXN0KSB7XG4gICAgdXRpbC5sb2codGVzdC5pbnB1dCk7XG4gICAgdmFyIHJlc3VsdCA9IHN0cmluZ3Muc2hpZnQoKS50cmltKCksXG4gICAgICAgIHJlID0gKC9bMC05XXsxLDJ9IFtBLVpdW2Etel17Mn0gWzAtOV17Mn06WzAtOV17Mn06WzAtOV17Mn0gLSAoLispJC8pLFxuICAgICAgICBtYXRjaCA9IHJlLmV4ZWMocmVzdWx0KTtcbiAgICBhc3NlcnQub2sobWF0Y2gpO1xuICAgIGFzc2VydC5lcXVhbChtYXRjaFsxXSwgdGVzdC5vdXRwdXQpO1xuICB9KTtcbiAgZ2xvYmFsLnByb2Nlc3Muc3Rkb3V0LndyaXRlID0gc3Rkb3V0X3dyaXRlO1xufSkocmVxdWlyZSgncHJvY2VzcycpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
