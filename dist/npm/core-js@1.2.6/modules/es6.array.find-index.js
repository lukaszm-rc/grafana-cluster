/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, $find, KEY, forced;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $find = require('./$.array-methods')(6);
      KEY = 'findIndex';
      forced = true;

      if (KEY in []) Array(1)[KEY](function () {
        forced = false;
      });
      $export($export.P + $export.F * forced, 'Array', { findIndex: function findIndex(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        } });
      require('./$.add-to-unscopables')(KEY);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsY0FBUSxRQUFRLG1CQUFSLEVBQTZCLENBQTdCO0FBQ1IsWUFBTTtBQUNOLGVBQVM7O0FBQ2IsVUFBSSxPQUFPLEVBQVAsRUFDRixNQUFNLENBQU4sRUFBUyxHQUFULEVBQWMsWUFBVztBQUN2QixpQkFBUyxLQUFULENBRHVCO09BQVgsQ0FBZCxDQURGO0FBSUEsY0FBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxNQUFaLEVBQW9CLE9BQXhDLEVBQWlELEVBQUMsV0FBVyxTQUFTLFNBQVQsQ0FBbUIsVUFBbkIsRUFBK0I7QUFDeEYsaUJBQU8sTUFBTSxJQUFOLEVBQVksVUFBWixFQUF3QixVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsVUFBVSxDQUFWLENBQXZCLEdBQXNDLFNBQXRDLENBQS9CLENBRHdGO1NBQS9CLEVBQTdEO0FBR0EsY0FBUSx3QkFBUixFQUFrQyxHQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkZmluZCA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNiksXG4gICAgS0VZID0gJ2ZpbmRJbmRleCcsXG4gICAgZm9yY2VkID0gdHJ1ZTtcbmlmIChLRVkgaW4gW10pXG4gIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKSB7XG4gICAgZm9yY2VkID0gZmFsc2U7XG4gIH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfX0pO1xucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
