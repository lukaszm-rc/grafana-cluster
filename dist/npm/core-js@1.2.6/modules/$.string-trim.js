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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zdHJpbmctdHJpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsZ0JBQVUsUUFBUSxhQUFSO0FBQ1YsY0FBUSxRQUFRLFdBQVI7QUFDUixlQUFTLDJCQUFxRSx5QkFBckU7QUFDVCxjQUFRLE1BQU0sTUFBTixHQUFlLEdBQWY7QUFDUixZQUFNO0FBQ04sY0FBUSxPQUFPLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsR0FBdEI7QUFDZixjQUFRLE9BQU8sUUFBUSxLQUFSLEdBQWdCLElBQWhCOztBQUNmLGlCQUFXLFNBQVgsUUFBVyxDQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CO0FBQ2pDLFlBQUksTUFBTSxFQUFOLENBRDZCO0FBRWpDLFlBQUksR0FBSixJQUFXLEtBQUssSUFBTCxDQUFYLENBRmlDO0FBR2pDLGdCQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLE1BQU0sWUFBVztBQUMvQyxpQkFBTyxDQUFDLENBQUMsT0FBTyxHQUFQLEdBQUQsSUFBa0IsSUFBSSxHQUFKLE9BQWMsR0FBZCxDQURxQjtTQUFYLENBQWxCLEVBRWhCLFFBRkosRUFFYyxHQUZkLEVBSGlDO09BQXBCOztBQU9YLGFBQU8sU0FBUyxJQUFULEdBQWdCLFVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QjtBQUNoRCxpQkFBUyxPQUFPLFFBQVEsTUFBUixDQUFQLENBQVQsQ0FEZ0Q7QUFFaEQsWUFBSSxPQUFPLENBQVAsRUFDRixTQUFTLE9BQU8sT0FBUCxDQUFlLEtBQWYsRUFBc0IsRUFBdEIsQ0FBVCxDQURGO0FBRUEsWUFBSSxPQUFPLENBQVAsRUFDRixTQUFTLE9BQU8sT0FBUCxDQUFlLEtBQWYsRUFBc0IsRUFBdEIsQ0FBVCxDQURGO0FBRUEsZUFBTyxNQUFQLENBTmdEO09BQXZCOztBQVEzQixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKSxcbiAgICBmYWlscyA9IHJlcXVpcmUoJy4vJC5mYWlscycpLFxuICAgIHNwYWNlcyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgKyAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRicsXG4gICAgc3BhY2UgPSAnWycgKyBzcGFjZXMgKyAnXScsXG4gICAgbm9uID0gJ1xcdTIwMGJcXHUwMDg1JyxcbiAgICBsdHJpbSA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKSxcbiAgICBydHJpbSA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbihLRVksIGV4ZWMpIHtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWModHJpbSk7XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhc3BhY2VzW0tFWV0oKSB8fCBub25bS0VZXSgpICE9IG5vbjtcbiAgfSksICdTdHJpbmcnLCBleHApO1xufTtcbnZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uKHN0cmluZywgVFlQRSkge1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYgKFRZUEUgJiAxKVxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmIChUWVBFICYgMilcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
