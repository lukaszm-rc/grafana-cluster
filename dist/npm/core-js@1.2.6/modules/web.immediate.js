'use strict';

System.register([], function (_export, _context) {
  var $export, $task;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $task = require('./$.task');

      $export($export.G + $export.B, {
        setImmediate: $task.set,
        clearImmediate: $task.clear
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvd2ViLmltbWVkaWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsY0FBUSxRQUFRLFVBQVI7O0FBQ1osY0FBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsRUFBVztBQUM3QixzQkFBYyxNQUFNLEdBQU47QUFDZCx3QkFBZ0IsTUFBTSxLQUFOO09BRmxCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvd2ViLmltbWVkaWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJHRhc2sgPSByZXF1aXJlKCcuLyQudGFzaycpO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIsIHtcbiAgc2V0SW1tZWRpYXRlOiAkdGFzay5zZXQsXG4gIGNsZWFySW1tZWRpYXRlOiAkdGFzay5jbGVhclxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
