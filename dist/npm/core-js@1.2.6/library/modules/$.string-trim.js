'use strict';

System.register([], function (_export, _context) {
  var $export, defined, fails, spaces, space, non, ltrim, rtrim, exporter, trim;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      defined = require('./$.defined');
      fails = require('./$.fails');
      spaces = '\t\n\u000b\f\r   ᠎    ' + '         　\u2028\u2029﻿';
      space = '[' + spaces + ']';
      non = '​';
      ltrim = RegExp('^' + space + space + '*');
      rtrim = RegExp(space + space + '*$');

      exporter = function exporter(KEY, exec) {
        var exp = {};
        exp[KEY] = exec(trim);
        $export($export.P + $export.F * fails(function () {
          return !!spaces[KEY]() || non[KEY]() != non;
        }), 'String', exp);
      };

      trim = exporter.trim = function (string, TYPE) {
        string = String(defined(string));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
      };

      module.exports = exporter;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixnQkFBVSxRQUFRLGFBQVI7QUFDVixjQUFRLFFBQVEsV0FBUjtBQUNSLGVBQVMsMkJBQXFFLHlCQUFyRTtBQUNULGNBQVEsTUFBTSxNQUFOLEdBQWUsR0FBZjtBQUNSLFlBQU07QUFDTixjQUFRLE9BQU8sTUFBTSxLQUFOLEdBQWMsS0FBZCxHQUFzQixHQUF0QjtBQUNmLGNBQVEsT0FBTyxRQUFRLEtBQVIsR0FBZ0IsSUFBaEI7O0FBQ2YsaUJBQVcsU0FBWCxRQUFXLENBQVMsR0FBVCxFQUFjLElBQWQsRUFBb0I7QUFDakMsWUFBSSxNQUFNLEVBQU4sQ0FENkI7QUFFakMsWUFBSSxHQUFKLElBQVcsS0FBSyxJQUFMLENBQVgsQ0FGaUM7QUFHakMsZ0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksTUFBTSxZQUFXO0FBQy9DLGlCQUFPLENBQUMsQ0FBQyxPQUFPLEdBQVAsR0FBRCxJQUFrQixJQUFJLEdBQUosT0FBYyxHQUFkLENBRHFCO1NBQVgsQ0FBbEIsRUFFaEIsUUFGSixFQUVjLEdBRmQsRUFIaUM7T0FBcEI7O0FBT1gsYUFBTyxTQUFTLElBQVQsR0FBZ0IsVUFBUyxNQUFULEVBQWlCLElBQWpCLEVBQXVCO0FBQ2hELGlCQUFTLE9BQU8sUUFBUSxNQUFSLENBQVAsQ0FBVCxDQURnRDtBQUVoRCxZQUFJLE9BQU8sQ0FBUCxFQUNGLFNBQVMsT0FBTyxPQUFQLENBQWUsS0FBZixFQUFzQixFQUF0QixDQUFULENBREY7QUFFQSxZQUFJLE9BQU8sQ0FBUCxFQUNGLFNBQVMsT0FBTyxPQUFQLENBQWUsS0FBZixFQUFzQixFQUF0QixDQUFULENBREY7QUFFQSxlQUFPLE1BQVAsQ0FOZ0Q7T0FBdkI7O0FBUTNCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctdHJpbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyksXG4gICAgZmFpbHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKSxcbiAgICBzcGFjZXMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICsgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnLFxuICAgIHNwYWNlID0gJ1snICsgc3BhY2VzICsgJ10nLFxuICAgIG5vbiA9ICdcXHUyMDBiXFx1MDA4NScsXG4gICAgbHRyaW0gPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJyksXG4gICAgcnRyaW0gPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xudmFyIGV4cG9ydGVyID0gZnVuY3Rpb24oS0VZLCBleGVjKSB7XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKHRyaW0pO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pLCAnU3RyaW5nJywgZXhwKTtcbn07XG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbihzdHJpbmcsIFRZUEUpIHtcbiAgc3RyaW5nID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gIGlmIChUWVBFICYgMSlcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZiAoVFlQRSAmIDIpXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
