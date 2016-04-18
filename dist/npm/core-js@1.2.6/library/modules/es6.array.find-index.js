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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixjQUFRLFFBQVEsbUJBQVIsRUFBNkIsQ0FBN0I7QUFDUixZQUFNO0FBQ04sZUFBUzs7QUFDYixVQUFJLE9BQU8sRUFBUCxFQUNGLE1BQU0sQ0FBTixFQUFTLEdBQVQsRUFBYyxZQUFXO0FBQ3ZCLGlCQUFTLEtBQVQsQ0FEdUI7T0FBWCxDQUFkLENBREY7QUFJQSxjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLE1BQVosRUFBb0IsT0FBeEMsRUFBaUQsRUFBQyxXQUFXLFNBQVMsU0FBVCxDQUFtQixVQUFuQixFQUErQjtBQUN4RixpQkFBTyxNQUFNLElBQU4sRUFBWSxVQUFaLEVBQXdCLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixVQUFVLENBQVYsQ0FBdkIsR0FBc0MsU0FBdEMsQ0FBL0IsQ0FEd0Y7U0FBL0IsRUFBN0Q7QUFHQSxjQUFRLHdCQUFSLEVBQWtDLEdBQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJGZpbmQgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpKDYpLFxuICAgIEtFWSA9ICdmaW5kSW5kZXgnLFxuICAgIGZvcmNlZCA9IHRydWU7XG5pZiAoS0VZIGluIFtdKVxuICBBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCkge1xuICAgIGZvcmNlZCA9IGZhbHNlO1xuICB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7ZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbikge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH19KTtcbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
