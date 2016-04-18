'use strict';

System.register([], function (_export, _context) {
  var IObject, defined;
  return {
    setters: [],
    execute: function () {
      IObject = require('./$.iobject');
      defined = require('./$.defined');

      module.exports = function (it) {
        return IObject(defined(it));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLGFBQVI7QUFDVixnQkFBVSxRQUFRLGFBQVI7O0FBQ2QsYUFBTyxPQUFQLEdBQWlCLFVBQVMsRUFBVCxFQUFhO0FBQzVCLGVBQU8sUUFBUSxRQUFRLEVBQVIsQ0FBUixDQUFQLENBRDRCO09BQWIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKSxcbiAgICBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
