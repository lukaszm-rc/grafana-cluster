'use strict';

System.register([], function (_export, _context) {
    var isArguments, isArray, isArrayLikeObject;

    function isFlattenable(value) {
        return isArrayLikeObject(value) && (isArray(value) || isArguments(value));
    }
    return {
        setters: [],
        execute: function () {
            isArguments = require('./isArguments');
            isArray = require('./isArray');
            isArrayLikeObject = require('./isArrayLikeObject');
            module.exports = isFlattenable;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc0ZsYXR0ZW5hYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCO0FBQzVCLGVBQU8sa0JBQWtCLEtBQWxCLE1BQTZCLFFBQVEsS0FBUixLQUFrQixZQUFZLEtBQVosQ0FBbEIsQ0FBN0IsQ0FEcUI7S0FBOUI7Ozs7QUFISSwwQkFBYyxRQUFRLGVBQVI7QUFDZCxzQkFBVSxRQUFRLFdBQVI7QUFDVixnQ0FBb0IsUUFBUSxxQkFBUjtBQUl4QixtQkFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19pc0ZsYXR0ZW5hYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpO1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
