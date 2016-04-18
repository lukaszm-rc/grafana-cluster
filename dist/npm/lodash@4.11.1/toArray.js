'use strict';

System.register([], function (_export, _context) {
  var _typeof, _Symbol, copyArray, getTag, isArrayLike, isString, iteratorToArray, mapToArray, setToArray, stringToArray, values, mapTag, setTag, iteratorSymbol;

  function toArray(value) {
    if (!value) {
      return [];
    }
    if (isArrayLike(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }
    if (iteratorSymbol && value[iteratorSymbol]) {
      return iteratorToArray(value[iteratorSymbol]());
    }
    var tag = getTag(value),
        func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
    return func(value);
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      _Symbol = require('./_Symbol');
      copyArray = require('./_copyArray');
      getTag = require('./_getTag');
      isArrayLike = require('./isArrayLike');
      isString = require('./isString');
      iteratorToArray = require('./_iteratorToArray');
      mapToArray = require('./_mapToArray');
      setToArray = require('./_setToArray');
      stringToArray = require('./_stringToArray');
      values = require('./values');
      mapTag = '[object Map]';
      setTag = '[object Set]';
      iteratorSymbol = _typeof(iteratorSymbol = _Symbol && _Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined;
      module.exports = toArray;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvQXJyYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFjQSxXQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDdEIsUUFBSSxDQUFDLEtBQUQsRUFBUTtBQUNWLGFBQU8sRUFBUCxDQURVO0tBQVo7QUFHQSxRQUFJLFlBQVksS0FBWixDQUFKLEVBQXdCO0FBQ3RCLGFBQU8sU0FBUyxLQUFULElBQWtCLGNBQWMsS0FBZCxDQUFsQixHQUF5QyxVQUFVLEtBQVYsQ0FBekMsQ0FEZTtLQUF4QjtBQUdBLFFBQUksa0JBQWtCLE1BQU0sY0FBTixDQUFsQixFQUF5QztBQUMzQyxhQUFPLGdCQUFnQixNQUFNLGNBQU4sR0FBaEIsQ0FBUCxDQUQyQztLQUE3QztBQUdBLFFBQUksTUFBTSxPQUFPLEtBQVAsQ0FBTjtRQUNBLE9BQU8sT0FBTyxNQUFQLEdBQWdCLFVBQWhCLEdBQThCLE9BQU8sTUFBUCxHQUFnQixVQUFoQixHQUE2QixNQUE3QixDQVhuQjtBQVl0QixXQUFPLEtBQUssS0FBTCxDQUFQLENBWnNCO0dBQXhCOzs7Ozs7Ozs7QUFiSSxnQkFBUyxRQUFRLFdBQVI7QUFDVCxrQkFBWSxRQUFRLGNBQVI7QUFDWixlQUFTLFFBQVEsV0FBUjtBQUNULG9CQUFjLFFBQVEsZUFBUjtBQUNkLGlCQUFXLFFBQVEsWUFBUjtBQUNYLHdCQUFrQixRQUFRLG9CQUFSO0FBQ2xCLG1CQUFhLFFBQVEsZUFBUjtBQUNiLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLGVBQVMsUUFBUSxVQUFSO0FBQ1QsZUFBUztBQUNULGVBQVM7QUFDVCx1QkFBaUIsUUFBTyxpQkFBaUIsV0FBVSxRQUFPLFFBQVAsQ0FBbEMsSUFBc0QsUUFBdEQsR0FBaUUsY0FBakUsR0FBa0YsU0FBbEY7QUFlckIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RvQXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc1N0cmluZyA9IHJlcXVpcmUoJy4vaXNTdHJpbmcnKSxcbiAgICBpdGVyYXRvclRvQXJyYXkgPSByZXF1aXJlKCcuL19pdGVyYXRvclRvQXJyYXknKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5JyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB2YWx1ZXMgPSByZXF1aXJlKCcuL3ZhbHVlcycpO1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xudmFyIGl0ZXJhdG9yU3ltYm9sID0gdHlwZW9mKGl0ZXJhdG9yU3ltYm9sID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcikgPT0gJ3N5bWJvbCcgPyBpdGVyYXRvclN5bWJvbCA6IHVuZGVmaW5lZDtcbmZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHN0cmluZ1RvQXJyYXkodmFsdWUpIDogY29weUFycmF5KHZhbHVlKTtcbiAgfVxuICBpZiAoaXRlcmF0b3JTeW1ib2wgJiYgdmFsdWVbaXRlcmF0b3JTeW1ib2xdKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yVG9BcnJheSh2YWx1ZVtpdGVyYXRvclN5bWJvbF0oKSk7XG4gIH1cbiAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICBmdW5jID0gdGFnID09IG1hcFRhZyA/IG1hcFRvQXJyYXkgOiAodGFnID09IHNldFRhZyA/IHNldFRvQXJyYXkgOiB2YWx1ZXMpO1xuICByZXR1cm4gZnVuYyh2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
