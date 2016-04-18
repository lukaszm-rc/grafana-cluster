'use strict';

System.register([], function (_export, _context) {
  var forOf, classof;
  return {
    setters: [],
    execute: function () {
      forOf = require('./$.for-of');
      classof = require('./$.classof');

      module.exports = function (NAME) {
        return function toJSON() {
          if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
          var arr = [];
          forOf(this, false, arr.push, arr);
          return arr;
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24tdG8tanNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksY0FBUSxRQUFRLFlBQVI7QUFDUixnQkFBVSxRQUFRLGFBQVI7O0FBQ2QsYUFBTyxPQUFQLEdBQWlCLFVBQVMsSUFBVCxFQUFlO0FBQzlCLGVBQU8sU0FBUyxNQUFULEdBQWtCO0FBQ3ZCLGNBQUksUUFBUSxJQUFSLEtBQWlCLElBQWpCLEVBQ0YsTUFBTSxVQUFVLE9BQU8sdUJBQVAsQ0FBaEIsQ0FERjtBQUVBLGNBQUksTUFBTSxFQUFOLENBSG1CO0FBSXZCLGdCQUFNLElBQU4sRUFBWSxLQUFaLEVBQW1CLElBQUksSUFBSixFQUFVLEdBQTdCLEVBSnVCO0FBS3ZCLGlCQUFPLEdBQVAsQ0FMdUI7U0FBbEIsQ0FEdUI7T0FBZiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKSxcbiAgICBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSkge1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIGlmIChjbGFzc29mKHRoaXMpICE9IE5BTUUpXG4gICAgICB0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3JPZih0aGlzLCBmYWxzZSwgYXJyLnB1c2gsIGFycik7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
