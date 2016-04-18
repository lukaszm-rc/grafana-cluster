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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC51aWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFdBQUs7QUFDTCxXQUFLLEtBQUssTUFBTDs7QUFDVCxhQUFPLE9BQVAsR0FBaUIsVUFBUyxHQUFULEVBQWE7QUFDNUIsZUFBTyxVQUFVLE1BQVYsQ0FBaUIsUUFBUSxTQUFSLEdBQW9CLEVBQXBCLEdBQXlCLEdBQXpCLEVBQThCLElBQS9DLEVBQXFELENBQUMsRUFBRSxFQUFGLEdBQU8sRUFBUCxDQUFELENBQVksUUFBWixDQUFxQixFQUFyQixDQUFyRCxDQUFQLENBRDRCO09BQWIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnVpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
