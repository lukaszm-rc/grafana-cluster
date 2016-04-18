"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      module.exports = function (regExp, replace) {
        var replacer = replace === Object(replace) ? function (part) {
          return replace[part];
        } : replace;
        return function (it) {
          return String(it).replace(regExp, replacer);
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5yZXBsYWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUF5QjtBQUN4QyxZQUFJLFdBQVcsWUFBWSxPQUFPLE9BQVAsQ0FBWixHQUE4QixVQUFTLElBQVQsRUFBYztBQUN6RCxpQkFBTyxRQUFRLElBQVIsQ0FBUCxDQUR5RDtTQUFkLEdBRXpDLE9BRlcsQ0FEeUI7QUFJeEMsZUFBTyxVQUFTLEVBQVQsRUFBWTtBQUNqQixpQkFBTyxPQUFPLEVBQVAsRUFBVyxPQUFYLENBQW1CLE1BQW5CLEVBQTJCLFFBQTNCLENBQVAsQ0FEaUI7U0FBWixDQUppQztPQUF6QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQucmVwbGFjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlKXtcbiAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XG4gIH0gOiByZXBsYWNlO1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBTdHJpbmcoaXQpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
