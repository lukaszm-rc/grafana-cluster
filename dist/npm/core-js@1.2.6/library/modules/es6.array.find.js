/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, $find, KEY, forced;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $find = require('./$.array-methods')(5);
      KEY = 'find';
      forced = true;

      if (KEY in []) Array(1)[KEY](function () {
        forced = false;
      });
      $export($export.P + $export.F * forced, 'Array', { find: function find(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        } });
      require('./$.add-to-unscopables')(KEY);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixjQUFRLFFBQVEsbUJBQVIsRUFBNkIsQ0FBN0I7QUFDUixZQUFNO0FBQ04sZUFBUzs7QUFDYixVQUFJLE9BQU8sRUFBUCxFQUNGLE1BQU0sQ0FBTixFQUFTLEdBQVQsRUFBYyxZQUFXO0FBQ3ZCLGlCQUFTLEtBQVQsQ0FEdUI7T0FBWCxDQUFkLENBREY7QUFJQSxjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLE1BQVosRUFBb0IsT0FBeEMsRUFBaUQsRUFBQyxNQUFNLFNBQVMsSUFBVCxDQUFjLFVBQWQsRUFBMEI7QUFDOUUsaUJBQU8sTUFBTSxJQUFOLEVBQVksVUFBWixFQUF3QixVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsVUFBVSxDQUFWLENBQXZCLEdBQXNDLFNBQXRDLENBQS9CLENBRDhFO1NBQTFCLEVBQXhEO0FBR0EsY0FBUSx3QkFBUixFQUFrQyxHQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICRmaW5kID0gcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKSg1KSxcbiAgICBLRVkgPSAnZmluZCcsXG4gICAgZm9yY2VkID0gdHJ1ZTtcbmlmIChLRVkgaW4gW10pXG4gIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKSB7XG4gICAgZm9yY2VkID0gZmFsc2U7XG4gIH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9fSk7XG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
