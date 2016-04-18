'use strict';

System.register([], function (_export, _context) {
  var MATCH;
  return {
    setters: [],
    execute: function () {
      MATCH = require('./$.wks')('match');

      module.exports = function (KEY) {
        var re = /./;
        try {
          '/./'[KEY](re);
        } catch (e) {
          try {
            re[MATCH] = false;
            return !'/./'[KEY](re);
          } catch (f) {}
        }
        return true;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5mYWlscy1pcy1yZWdleHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGNBQVEsUUFBUSxTQUFSLEVBQW1CLE9BQW5COztBQUNaLGFBQU8sT0FBUCxHQUFpQixVQUFTLEdBQVQsRUFBYztBQUM3QixZQUFJLEtBQUssR0FBTCxDQUR5QjtBQUU3QixZQUFJO0FBQ0YsZ0JBQU0sR0FBTixFQUFXLEVBQVgsRUFERTtTQUFKLENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixjQUFJO0FBQ0YsZUFBRyxLQUFILElBQVksS0FBWixDQURFO0FBRUYsbUJBQU8sQ0FBQyxNQUFNLEdBQU4sRUFBVyxFQUFYLENBQUQsQ0FGTDtXQUFKLENBR0UsT0FBTyxDQUFQLEVBQVUsRUFBVjtTQUpGO0FBTUYsZUFBTyxJQUFQLENBVjZCO09BQWQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmZhaWxzLWlzLXJlZ2V4cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIE1BVENIID0gcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpIHtcbiAgdmFyIHJlID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW0tFWV0ocmUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoIChmKSB7fVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
