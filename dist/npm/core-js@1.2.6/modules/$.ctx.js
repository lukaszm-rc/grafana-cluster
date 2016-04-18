'use strict';

System.register([], function (_export, _context) {
  var aFunction;
  return {
    setters: [],
    execute: function () {
      aFunction = require('./$.a-function');

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function () {
          return fn.apply(that, arguments);
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5jdHguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGtCQUFZLFFBQVEsZ0JBQVI7O0FBQ2hCLGFBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYSxJQUFiLEVBQW1CLE1BQW5CLEVBQTJCO0FBQzFDLGtCQUFVLEVBQVYsRUFEMEM7QUFFMUMsWUFBSSxTQUFTLFNBQVQsRUFDRixPQUFPLEVBQVAsQ0FERjtBQUVBLGdCQUFRLE1BQVI7QUFDRSxlQUFLLENBQUw7QUFDRSxtQkFBTyxVQUFTLENBQVQsRUFBWTtBQUNqQixxQkFBTyxHQUFHLElBQUgsQ0FBUSxJQUFSLEVBQWMsQ0FBZCxDQUFQLENBRGlCO2FBQVosQ0FEVDtBQURGLGVBS08sQ0FBTDtBQUNFLG1CQUFPLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZTtBQUNwQixxQkFBTyxHQUFHLElBQUgsQ0FBUSxJQUFSLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFQLENBRG9CO2FBQWYsQ0FEVDtBQUxGLGVBU08sQ0FBTDtBQUNFLG1CQUFPLFVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCO0FBQ3ZCLHFCQUFPLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQVAsQ0FEdUI7YUFBbEIsQ0FEVDtBQVRGLFNBSjBDO0FBa0IxQyxlQUFPLFlBQVc7QUFDaEIsaUJBQU8sR0FBRyxLQUFILENBQVMsSUFBVCxFQUFlLFNBQWYsQ0FBUCxDQURnQjtTQUFYLENBbEJtQztPQUEzQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuY3R4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICAgIH07XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgICB9O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
