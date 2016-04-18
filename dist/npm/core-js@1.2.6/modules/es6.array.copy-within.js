'use strict';

System.register([], function (_export, _context) {
  var $export;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');

      $export($export.P, 'Array', { copyWithin: require('./$.array-copy-within') });
      require('./$.add-to-unscopables')('copyWithin');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7O0FBQ2QsY0FBUSxRQUFRLENBQVIsRUFBVyxPQUFuQixFQUE0QixFQUFDLFlBQVksUUFBUSx1QkFBUixDQUFaLEVBQTdCO0FBQ0EsY0FBUSx3QkFBUixFQUFrQyxZQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2NvcHlXaXRoaW46IHJlcXVpcmUoJy4vJC5hcnJheS1jb3B5LXdpdGhpbicpfSk7XG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoJ2NvcHlXaXRoaW4nKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
