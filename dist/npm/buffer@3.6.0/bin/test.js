'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var cp = require('child_process');
        var runBrowserTests = !process.env.TRAVIS_PULL_REQUEST || process.env.TRAVIS_PULL_REQUEST === 'false';
        var node = cp.spawn('npm', ['run', 'test-node'], { stdio: 'inherit' });
        node.on('close', function (code) {
          if (code === 0 && runBrowserTests) {
            var browser = cp.spawn('npm', ['run', 'test-browser'], { stdio: 'inherit' });
            browser.on('close', function (code) {
              process.exit(code);
            });
          } else {
            process.exit(code);
          }
        });
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvYmluL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLFlBQUksS0FBSyxRQUFRLGVBQVIsQ0FBTCxDQURhO0FBRWpCLFlBQUksa0JBQWtCLENBQUMsUUFBUSxHQUFSLENBQVksbUJBQVosSUFBbUMsUUFBUSxHQUFSLENBQVksbUJBQVosS0FBb0MsT0FBcEMsQ0FGekM7QUFHakIsWUFBSSxPQUFPLEdBQUcsS0FBSCxDQUFTLEtBQVQsRUFBZ0IsQ0FBQyxLQUFELEVBQVEsV0FBUixDQUFoQixFQUFzQyxFQUFDLE9BQU8sU0FBUCxFQUF2QyxDQUFQLENBSGE7QUFJakIsYUFBSyxFQUFMLENBQVEsT0FBUixFQUFpQixVQUFTLElBQVQsRUFBZTtBQUM5QixjQUFJLFNBQVMsQ0FBVCxJQUFjLGVBQWQsRUFBK0I7QUFDakMsZ0JBQUksVUFBVSxHQUFHLEtBQUgsQ0FBUyxLQUFULEVBQWdCLENBQUMsS0FBRCxFQUFRLGNBQVIsQ0FBaEIsRUFBeUMsRUFBQyxPQUFPLFNBQVAsRUFBMUMsQ0FBVixDQUQ2QjtBQUVqQyxvQkFBUSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFTLElBQVQsRUFBZTtBQUNqQyxzQkFBUSxJQUFSLENBQWEsSUFBYixFQURpQzthQUFmLENBQXBCLENBRmlDO1dBQW5DLE1BS087QUFDTCxvQkFBUSxJQUFSLENBQWEsSUFBYixFQURLO1dBTFA7U0FEZSxDQUFqQixDQUppQjtPQUFsQixDQUFELENBY0csUUFBUSxTQUFSLENBZEgiLCJmaWxlIjoibnBtL2J1ZmZlckAzLjYuMC9iaW4vdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgdmFyIGNwID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICB2YXIgcnVuQnJvd3NlclRlc3RzID0gIXByb2Nlc3MuZW52LlRSQVZJU19QVUxMX1JFUVVFU1QgfHwgcHJvY2Vzcy5lbnYuVFJBVklTX1BVTExfUkVRVUVTVCA9PT0gJ2ZhbHNlJztcbiAgdmFyIG5vZGUgPSBjcC5zcGF3bignbnBtJywgWydydW4nLCAndGVzdC1ub2RlJ10sIHtzdGRpbzogJ2luaGVyaXQnfSk7XG4gIG5vZGUub24oJ2Nsb3NlJywgZnVuY3Rpb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSAwICYmIHJ1bkJyb3dzZXJUZXN0cykge1xuICAgICAgdmFyIGJyb3dzZXIgPSBjcC5zcGF3bignbnBtJywgWydydW4nLCAndGVzdC1icm93c2VyJ10sIHtzdGRpbzogJ2luaGVyaXQnfSk7XG4gICAgICBicm93c2VyLm9uKCdjbG9zZScsIGZ1bmN0aW9uKGNvZGUpIHtcbiAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICB9XG4gIH0pO1xufSkocmVxdWlyZSgncHJvY2VzcycpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
