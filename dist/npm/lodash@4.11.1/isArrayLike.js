'use strict';

System.register([], function (_export, _context) {
    var getLength, isFunction, isLength;

    function isArrayLike(value) {
        return value != null && isLength(getLength(value)) && !isFunction(value);
    }
    return {
        setters: [],
        execute: function () {
            getLength = require('./_getLength');
            isFunction = require('./isFunction');
            isLength = require('./isLength');
            module.exports = isArrayLike;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzQXJyYXlMaWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQzFCLGVBQU8sU0FBUyxJQUFULElBQWlCLFNBQVMsVUFBVSxLQUFWLENBQVQsQ0FBakIsSUFBK0MsQ0FBQyxXQUFXLEtBQVgsQ0FBRCxDQUQ1QjtLQUE1Qjs7OztBQUhJLHdCQUFZLFFBQVEsY0FBUjtBQUNaLHlCQUFhLFFBQVEsY0FBUjtBQUNiLHVCQUFXLFFBQVEsWUFBUjtBQUlmLG1CQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaXNBcnJheUxpa2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL19nZXRMZW5ndGgnKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
