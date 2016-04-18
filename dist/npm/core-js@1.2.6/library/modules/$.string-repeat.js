/* */
'use strict';

System.register([], function (_export, _context) {
  var toInteger, defined;
  return {
    setters: [],
    execute: function () {
      toInteger = require('./$.to-integer');
      defined = require('./$.defined');

      module.exports = function repeat(count) {
        var str = String(defined(this)),
            res = '',
            n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
        for (; n > 0; (n >>>= 1) && (str += str)) {
          if (n & 1) res += str;
        }return res;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1yZXBlYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxnQkFBUjtBQUNaLGdCQUFVLFFBQVEsYUFBUjs7QUFDZCxhQUFPLE9BQVAsR0FBaUIsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ3RDLFlBQUksTUFBTSxPQUFPLFFBQVEsSUFBUixDQUFQLENBQU47WUFDQSxNQUFNLEVBQU47WUFDQSxJQUFJLFVBQVUsS0FBVixDQUFKLENBSGtDO0FBSXRDLFlBQUksSUFBSSxDQUFKLElBQVMsS0FBSyxRQUFMLEVBQ1gsTUFBTSxXQUFXLHlCQUFYLENBQU4sQ0FERjtBQUVBLGVBQU8sSUFBSSxDQUFKLEVBQU8sQ0FBQyxPQUFPLENBQVAsQ0FBRCxLQUFlLE9BQU8sR0FBUCxDQUFmO0FBQ1osY0FBSSxJQUFJLENBQUosRUFDRixPQUFPLEdBQVAsQ0FERjtTQURGLE9BR08sR0FBUCxDQVRzQztPQUF2QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKSxcbiAgICBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoZGVmaW5lZCh0aGlzKSksXG4gICAgICByZXMgPSAnJyxcbiAgICAgIG4gPSB0b0ludGVnZXIoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSlcbiAgICB0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvciAoOyBuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpXG4gICAgaWYgKG4gJiAxKVxuICAgICAgcmVzICs9IHN0cjtcbiAgcmV0dXJuIHJlcztcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
