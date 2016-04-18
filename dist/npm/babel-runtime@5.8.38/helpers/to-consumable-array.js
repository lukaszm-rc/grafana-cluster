/* */
"use strict";

System.register([], function (_export, _context) {
  var _Array$from;

  return {
    setters: [],
    execute: function () {
      _Array$from = require('../core-js/array/from')["default"];

      exports["default"] = function (arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return _Array$from(arr);
        }
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL3RvLWNvbnN1bWFibGUtYXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7OztBQUNJLG9CQUFjLFFBQVEsdUJBQVIsRUFBaUMsU0FBakM7O0FBQ2xCLGNBQVEsU0FBUixJQUFxQixVQUFTLEdBQVQsRUFBYztBQUNqQyxZQUFJLE1BQU0sT0FBTixDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QixlQUFLLElBQUksSUFBSSxDQUFKLEVBQ0wsT0FBTyxNQUFNLElBQUksTUFBSixDQUFiLEVBQTBCLElBQUksSUFBSSxNQUFKLEVBQVksR0FEOUM7QUFFRSxpQkFBSyxDQUFMLElBQVUsSUFBSSxDQUFKLENBQVY7V0FGRixPQUdPLElBQVAsQ0FKc0I7U0FBeEIsTUFLTztBQUNMLGlCQUFPLFlBQVksR0FBWixDQUFQLENBREs7U0FMUDtPQURtQjtBQVVyQixjQUFRLFVBQVIsR0FBcUIsSUFBckIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvdG8tY29uc3VtYWJsZS1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX0FycmF5JGZyb20gPSByZXF1aXJlKCcuLi9jb3JlLWpzL2FycmF5L2Zyb20nKVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsXG4gICAgICAgIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKylcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9BcnJheSRmcm9tKGFycik7XG4gIH1cbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
