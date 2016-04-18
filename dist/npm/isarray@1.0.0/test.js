'use strict';

System.register([], function (_export, _context) {
  var isArray, test;
  return {
    setters: [],
    execute: function () {
      isArray = require('./index');
      test = require('tape');

      test('is array', function (t) {
        t.ok(isArray([]));
        t.notOk(isArray({}));
        t.notOk(isArray(null));
        t.notOk(isArray(false));
        var obj = {};
        obj[0] = true;
        t.notOk(isArray(obj));
        var arr = [];
        arr.foo = 'bar';
        t.ok(isArray(arr));
        t.end();
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9pc2FycmF5QDEuMC4wL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsU0FBUjtBQUNWLGFBQU8sUUFBUSxNQUFSOztBQUNYLFdBQUssVUFBTCxFQUFpQixVQUFTLENBQVQsRUFBWTtBQUMzQixVQUFFLEVBQUYsQ0FBSyxRQUFRLEVBQVIsQ0FBTCxFQUQyQjtBQUUzQixVQUFFLEtBQUYsQ0FBUSxRQUFRLEVBQVIsQ0FBUixFQUYyQjtBQUczQixVQUFFLEtBQUYsQ0FBUSxRQUFRLElBQVIsQ0FBUixFQUgyQjtBQUkzQixVQUFFLEtBQUYsQ0FBUSxRQUFRLEtBQVIsQ0FBUixFQUoyQjtBQUszQixZQUFJLE1BQU0sRUFBTixDQUx1QjtBQU0zQixZQUFJLENBQUosSUFBUyxJQUFULENBTjJCO0FBTzNCLFVBQUUsS0FBRixDQUFRLFFBQVEsR0FBUixDQUFSLEVBUDJCO0FBUTNCLFlBQUksTUFBTSxFQUFOLENBUnVCO0FBUzNCLFlBQUksR0FBSixHQUFVLEtBQVYsQ0FUMkI7QUFVM0IsVUFBRSxFQUFGLENBQUssUUFBUSxHQUFSLENBQUwsRUFWMkI7QUFXM0IsVUFBRSxHQUFGLEdBWDJCO09BQVosQ0FBakIiLCJmaWxlIjoibnBtL2lzYXJyYXlAMS4wLjAvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG52YXIgdGVzdCA9IHJlcXVpcmUoJ3RhcGUnKTtcbnRlc3QoJ2lzIGFycmF5JywgZnVuY3Rpb24odCkge1xuICB0Lm9rKGlzQXJyYXkoW10pKTtcbiAgdC5ub3RPayhpc0FycmF5KHt9KSk7XG4gIHQubm90T2soaXNBcnJheShudWxsKSk7XG4gIHQubm90T2soaXNBcnJheShmYWxzZSkpO1xuICB2YXIgb2JqID0ge307XG4gIG9ialswXSA9IHRydWU7XG4gIHQubm90T2soaXNBcnJheShvYmopKTtcbiAgdmFyIGFyciA9IFtdO1xuICBhcnIuZm9vID0gJ2Jhcic7XG4gIHQub2soaXNBcnJheShhcnIpKTtcbiAgdC5lbmQoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
