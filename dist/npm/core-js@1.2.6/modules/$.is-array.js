'use strict';

System.register([], function (_export, _context) {
  var cof;
  return {
    setters: [],
    execute: function () {
      cof = require('./$.cof');

      module.exports = Array.isArray || function (arg) {
        return cof(arg) == 'Array';
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pcy1hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksWUFBTSxRQUFRLFNBQVI7O0FBQ1YsYUFBTyxPQUFQLEdBQWlCLE1BQU0sT0FBTixJQUFpQixVQUFTLEdBQVQsRUFBYztBQUM5QyxlQUFPLElBQUksR0FBSixLQUFZLE9BQVosQ0FEdUM7T0FBZCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuaXMtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
