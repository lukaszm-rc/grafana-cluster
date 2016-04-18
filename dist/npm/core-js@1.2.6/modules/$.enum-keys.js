'use strict';

System.register([], function (_export, _context) {
  var $;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');

      module.exports = function (it) {
        var keys = $.getKeys(it),
            getSymbols = $.getSymbols;
        if (getSymbols) {
          var symbols = getSymbols(it),
              isEnum = $.isEnum,
              i = 0,
              key;
          while (symbols.length > i) {
            if (isEnum.call(it, key = symbols[i++])) keys.push(key);
          }
        }
        return keys;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5lbnVtLWtleXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSOztBQUNSLGFBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYTtBQUM1QixZQUFJLE9BQU8sRUFBRSxPQUFGLENBQVUsRUFBVixDQUFQO1lBQ0EsYUFBYSxFQUFFLFVBQUYsQ0FGVztBQUc1QixZQUFJLFVBQUosRUFBZ0I7QUFDZCxjQUFJLFVBQVUsV0FBVyxFQUFYLENBQVY7Y0FDQSxTQUFTLEVBQUUsTUFBRjtjQUNULElBQUksQ0FBSjtjQUNBLEdBSEosQ0FEYztBQUtkLGlCQUFPLFFBQVEsTUFBUixHQUFpQixDQUFqQjtBQUNMLGdCQUFJLE9BQU8sSUFBUCxDQUFZLEVBQVosRUFBZ0IsTUFBTSxRQUFRLEdBQVIsQ0FBTixDQUFwQixFQUNFLEtBQUssSUFBTCxDQUFVLEdBQVYsRUFERjtXQURGO1NBTEY7QUFTQSxlQUFPLElBQVAsQ0FaNEI7T0FBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCkge1xuICB2YXIga2V5cyA9ICQuZ2V0S2V5cyhpdCksXG4gICAgICBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCksXG4gICAgICAgIGlzRW51bSA9ICQuaXNFbnVtLFxuICAgICAgICBpID0gMCxcbiAgICAgICAga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpXG4gICAgICBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpXG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
