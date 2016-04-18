'use strict';

System.register([], function (_export, _context) {
  var id, px;
  return {
    setters: [],
    execute: function () {
      id = 0;
      px = Math.random();

      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksV0FBSztBQUNMLFdBQUssS0FBSyxNQUFMOztBQUNULGFBQU8sT0FBUCxHQUFpQixVQUFTLEdBQVQsRUFBYTtBQUM1QixlQUFPLFVBQVUsTUFBVixDQUFpQixRQUFRLFNBQVIsR0FBb0IsRUFBcEIsR0FBeUIsR0FBekIsRUFBOEIsSUFBL0MsRUFBcUQsQ0FBQyxFQUFFLEVBQUYsR0FBTyxFQUFQLENBQUQsQ0FBWSxRQUFaLENBQXFCLEVBQXJCLENBQXJELENBQVAsQ0FENEI7T0FBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
