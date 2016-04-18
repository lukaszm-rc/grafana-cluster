/* */
"use strict";

System.register([], function (_export, _context) {
  var _typeof, _Symbol;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      _Symbol = require('../core-js/symbol')["default"];

      exports["default"] = function (obj) {
        return obj && obj.constructor === _Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3R5cGVvZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLG1CQUFSLEVBQTZCLFNBQTdCOztBQUNkLGNBQVEsU0FBUixJQUFxQixVQUFTLEdBQVQsRUFBYztBQUNqQyxlQUFPLE9BQU8sSUFBSSxXQUFKLEtBQW9CLE9BQXBCLEdBQThCLFFBQXJDLFVBQXVELGdEQUF2RCxDQUQwQjtPQUFkO0FBR3JCLGNBQVEsVUFBUixHQUFxQixJQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy90eXBlb2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcblwidXNlIHN0cmljdFwiO1xudmFyIF9TeW1ib2wgPSByZXF1aXJlKCcuLi9jb3JlLWpzL3N5bWJvbCcpW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
