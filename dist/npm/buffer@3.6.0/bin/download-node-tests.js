'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var concat = require('concat-stream');
        var fs = require('fs');
        var hyperquest = require('hyperquest');
        var cp = require('child_process');
        var split = require('split');
        var through = require('through2');
        var url = 'https://api.github.com/repos/nodejs/io.js/contents';
        var dirs = ['/test/parallel', '/test/pummel'];
        cp.execSync('rm -rf node/*.js', { cwd: __dirname + '/../test' });
        cp.execSync('rm -rf node-es6/*.js', { cwd: __dirname + '/../test' });
        var httpOpts = { headers: { 'User-Agent': null } };
        dirs.forEach(function (dir) {
          var req = hyperquest(url + dir, httpOpts);
          req.pipe(concat(function (data) {
            if (req.response.statusCode !== 200) {
              throw new Error(url + dir + ': ' + data.toString());
            }
            downloadBufferTests(dir, JSON.parse(data));
          }));
        });
        function downloadBufferTests(dir, files) {
          files.forEach(function (file) {
            if (!/test-buffer.*/.test(file.name)) return;
            var path;
            if (file.name === 'test-buffer-iterator.js' || file.name === 'test-buffer-arraybuffer.js') {
              path = __dirname + '/../test/node-es6/' + file.name;
            } else if (file.name === 'test-buffer-fakes.js') {
              return;
            } else {
              path = __dirname + '/../test/node/' + file.name;
            }
            console.log(file.download_url);
            hyperquest(file.download_url, httpOpts).pipe(split()).pipe(testfixer(file.name)).pipe(fs.createWriteStream(path)).on('finish', function () {
              console.log('wrote ' + file.name);
            });
          });
        }
        function testfixer(filename) {
          var firstline = true;
          return through(function (line, enc, cb) {
            line = line.toString();
            if (firstline) {
              var preamble = 'if (process.env.OBJECT_IMPL) global.TYPED_ARRAY_SUPPORT = false;\n' + 'var Buffer = require(\'../../\').Buffer;';
              if (/use strict/.test(line)) line += '\n' + preamble;else line + preamble + '\n' + line;
              firstline = false;
            }
            line = line.replace(/(const|let) /g, 'var ');
            line = line.replace(/(var common = require.*)/g, 'var common = {};');
            line = line.replace(/buf instanceof Buffer/g, 'Buffer.isBuffer(buf)');
            line = line.replace(/(.*)require\('buffer'\)(.*)/g, '$1require(\'../../\')$2');
            line = line.replace(/require\('smalloc'\)/g, '{ kMaxLength: process.env.OBJECT_IMPL ? 0x3fffffff : 0x7fffffff }');
            line = line.replace(/(.*console\..*)/g, '// $1');
            if (filename === 'test-buffer-big.js') {
              line = line.replace(/(.*new Int8Array.*RangeError.*)/, '// $1');
              line = line.replace(/(.*new ArrayBuffer.*RangeError.*)/, '// $1');
              line = line.replace(/(.*new Float64Array.*RangeError.*)/, '// $1');
            }
            if (filename === 'test-buffer.js') {
              line = line.replace(/b\[0\] = -1;/, 'b[0] = 255;');
            }
            if (filename === 'test-buffer.js') {
              line = line.replace(/^(\s*)(var crypto = require.*)/, '$1// $2');
              line = line.replace(/(crypto.createHash.*\))/, '1 /*$1*/');
            }
            cb(null, line + '\n');
          });
        }
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvYmluL2Rvd25sb2FkLW5vZGUtdGVzdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLFlBQUksU0FBUyxRQUFRLGVBQVIsQ0FBVCxDQURhO0FBRWpCLFlBQUksS0FBSyxRQUFRLElBQVIsQ0FBTCxDQUZhO0FBR2pCLFlBQUksYUFBYSxRQUFRLFlBQVIsQ0FBYixDQUhhO0FBSWpCLFlBQUksS0FBSyxRQUFRLGVBQVIsQ0FBTCxDQUphO0FBS2pCLFlBQUksUUFBUSxRQUFRLE9BQVIsQ0FBUixDQUxhO0FBTWpCLFlBQUksVUFBVSxRQUFRLFVBQVIsQ0FBVixDQU5hO0FBT2pCLFlBQUksTUFBTSxvREFBTixDQVBhO0FBUWpCLFlBQUksT0FBTyxDQUFDLGdCQUFELEVBQW1CLGNBQW5CLENBQVAsQ0FSYTtBQVNqQixXQUFHLFFBQUgsQ0FBWSxrQkFBWixFQUFnQyxFQUFDLEtBQUssWUFBWSxVQUFaLEVBQXRDLEVBVGlCO0FBVWpCLFdBQUcsUUFBSCxDQUFZLHNCQUFaLEVBQW9DLEVBQUMsS0FBSyxZQUFZLFVBQVosRUFBMUMsRUFWaUI7QUFXakIsWUFBSSxXQUFXLEVBQUMsU0FBUyxFQUFDLGNBQWMsSUFBZCxFQUFWLEVBQVosQ0FYYTtBQVlqQixhQUFLLE9BQUwsQ0FBYSxVQUFTLEdBQVQsRUFBYztBQUN6QixjQUFJLE1BQU0sV0FBVyxNQUFNLEdBQU4sRUFBVyxRQUF0QixDQUFOLENBRHFCO0FBRXpCLGNBQUksSUFBSixDQUFTLE9BQU8sVUFBUyxJQUFULEVBQWU7QUFDN0IsZ0JBQUksSUFBSSxRQUFKLENBQWEsVUFBYixLQUE0QixHQUE1QixFQUFpQztBQUNuQyxvQkFBTSxJQUFJLEtBQUosQ0FBVSxNQUFNLEdBQU4sR0FBWSxJQUFaLEdBQW1CLEtBQUssUUFBTCxFQUFuQixDQUFoQixDQURtQzthQUFyQztBQUdBLGdDQUFvQixHQUFwQixFQUF5QixLQUFL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QUErQyxTQUEvQyxDQUFQLENBRGlDO0FBRWpDLHFCQUFPLEtBQUssT0FBTCxDQUFhLHlCQUFiLEVBQXdDLFVBQXhDLENBQVAsQ0FGaUM7YUFBbkM7QUFJQSxlQUFHLElBQUgsRUFBUyxPQUFPLElBQVAsQ0FBVCxDQTVCcUM7V0FBeEIsQ0FBZixDQUYyQjtTQUE3QjtPQXZDRCxDQUFELENBd0VHLFFBQVEsU0FBUixDQXhFSCIsImZpbGUiOiJucG0vYnVmZmVyQDMuNi4wL2Jpbi9kb3dubG9hZC1ub2RlLXRlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICB2YXIgY29uY2F0ID0gcmVxdWlyZSgnY29uY2F0LXN0cmVhbScpO1xuICB2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuICB2YXIgaHlwZXJxdWVzdCA9IHJlcXVpcmUoJ2h5cGVycXVlc3QnKTtcbiAgdmFyIGNwID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICB2YXIgc3BsaXQgPSByZXF1aXJlKCdzcGxpdCcpO1xuICB2YXIgdGhyb3VnaCA9IHJlcXVpcmUoJ3Rocm91Z2gyJyk7XG4gIHZhciB1cmwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9ub2RlanMvaW8uanMvY29udGVudHMnO1xuICB2YXIgZGlycyA9IFsnL3Rlc3QvcGFyYWxsZWwnLCAnL3Rlc3QvcHVtbWVsJ107XG4gIGNwLmV4ZWNTeW5jKCdybSAtcmYgbm9kZS8qLmpzJywge2N3ZDogX19kaXJuYW1lICsgJy8uLi90ZXN0J30pO1xuICBjcC5leGVjU3luYygncm0gLXJmIG5vZGUtZXM2LyouanMnLCB7Y3dkOiBfX2Rpcm5hbWUgKyAnLy4uL3Rlc3QnfSk7XG4gIHZhciBodHRwT3B0cyA9IHtoZWFkZXJzOiB7J1VzZXItQWdlbnQnOiBudWxsfX07XG4gIGRpcnMuZm9yRWFjaChmdW5jdGlvbihkaXIpIHtcbiAgICB2YXIgcmVxID0gaHlwZXJxdWVzdCh1cmwgKyBkaXIsIGh0dHBPcHRzKTtcbiAgICByZXEucGlwZShjb25jYXQoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgaWYgKHJlcS5yZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVybCArIGRpciArICc6ICcgKyBkYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgZG93bmxvYWRCdWZmZXJUZXN0cyhkaXIsIEpTT04ucGFyc2UoZGF0YSkpO1xuICAgIH0pKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIGRvd25sb2FkQnVmZmVyVGVzdHMoZGlyLCBmaWxlcykge1xuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgaWYgKCEvdGVzdC1idWZmZXIuKi8udGVzdChmaWxlLm5hbWUpKVxuICAgICAgICByZXR1cm47XG4gICAgICB2YXIgcGF0aDtcbiAgICAgIGlmIChmaWxlLm5hbWUgPT09ICd0ZXN0LWJ1ZmZlci1pdGVyYXRvci5qcycgfHwgZmlsZS5uYW1lID09PSAndGVzdC1idWZmZXItYXJyYXlidWZmZXIuanMnKSB7XG4gICAgICAgIHBhdGggPSBfX2Rpcm5hbWUgKyAnLy4uL3Rlc3Qvbm9kZS1lczYvJyArIGZpbGUubmFtZTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZS5uYW1lID09PSAndGVzdC1idWZmZXItZmFrZXMuanMnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGggPSBfX2Rpcm5hbWUgKyAnLy4uL3Rlc3Qvbm9kZS8nICsgZmlsZS5uYW1lO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZmlsZS5kb3dubG9hZF91cmwpO1xuICAgICAgaHlwZXJxdWVzdChmaWxlLmRvd25sb2FkX3VybCwgaHR0cE9wdHMpLnBpcGUoc3BsaXQoKSkucGlwZSh0ZXN0Zml4ZXIoZmlsZS5uYW1lKSkucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoKSkub24oJ2ZpbmlzaCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnd3JvdGUgJyArIGZpbGUubmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB0ZXN0Zml4ZXIoZmlsZW5hbWUpIHtcbiAgICB2YXIgZmlyc3RsaW5lID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhyb3VnaChmdW5jdGlvbihsaW5lLCBlbmMsIGNiKSB7XG4gICAgICBsaW5lID0gbGluZS50b1N0cmluZygpO1xuICAgICAgaWYgKGZpcnN0bGluZSkge1xuICAgICAgICB2YXIgcHJlYW1ibGUgPSAnaWYgKHByb2Nlc3MuZW52Lk9CSkVDVF9JTVBMKSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGZhbHNlO1xcbicgKyAndmFyIEJ1ZmZlciA9IHJlcXVpcmUoXFwnLi4vLi4vXFwnKS5CdWZmZXI7JztcbiAgICAgICAgaWYgKC91c2Ugc3RyaWN0Ly50ZXN0KGxpbmUpKVxuICAgICAgICAgIGxpbmUgKz0gJ1xcbicgKyBwcmVhbWJsZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGxpbmUgKyBwcmVhbWJsZSArICdcXG4nICsgbGluZTtcbiAgICAgICAgZmlyc3RsaW5lID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC8oY29uc3R8bGV0KSAvZywgJ3ZhciAnKTtcbiAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLyh2YXIgY29tbW9uID0gcmVxdWlyZS4qKS9nLCAndmFyIGNvbW1vbiA9IHt9OycpO1xuICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvYnVmIGluc3RhbmNlb2YgQnVmZmVyL2csICdCdWZmZXIuaXNCdWZmZXIoYnVmKScpO1xuICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvKC4qKXJlcXVpcmVcXCgnYnVmZmVyJ1xcKSguKikvZywgJyQxcmVxdWlyZShcXCcuLi8uLi9cXCcpJDInKTtcbiAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL3JlcXVpcmVcXCgnc21hbGxvYydcXCkvZywgJ3sga01heExlbmd0aDogcHJvY2Vzcy5lbnYuT0JKRUNUX0lNUEwgPyAweDNmZmZmZmZmIDogMHg3ZmZmZmZmZiB9Jyk7XG4gICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC8oLipjb25zb2xlXFwuLiopL2csICcvLyAkMScpO1xuICAgICAgaWYgKGZpbGVuYW1lID09PSAndGVzdC1idWZmZXItYmlnLmpzJykge1xuICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC8oLipuZXcgSW50OEFycmF5LipSYW5nZUVycm9yLiopLywgJy8vICQxJyk7XG4gICAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoLyguKm5ldyBBcnJheUJ1ZmZlci4qUmFuZ2VFcnJvci4qKS8sICcvLyAkMScpO1xuICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC8oLipuZXcgRmxvYXQ2NEFycmF5LipSYW5nZUVycm9yLiopLywgJy8vICQxJyk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsZW5hbWUgPT09ICd0ZXN0LWJ1ZmZlci5qcycpIHtcbiAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvYlxcWzBcXF0gPSAtMTsvLCAnYlswXSA9IDI1NTsnKTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWxlbmFtZSA9PT0gJ3Rlc3QtYnVmZmVyLmpzJykge1xuICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC9eKFxccyopKHZhciBjcnlwdG8gPSByZXF1aXJlLiopLywgJyQxLy8gJDInKTtcbiAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvKGNyeXB0by5jcmVhdGVIYXNoLipcXCkpLywgJzEgLyokMSovJyk7XG4gICAgICB9XG4gICAgICBjYihudWxsLCBsaW5lICsgJ1xcbicpO1xuICAgIH0pO1xuICB9XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
