'use strict';

System.register([], function (_export, _context) {
    var baseProperty, basePropertyDeep, isKey;

    function property(path) {
        return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }
    return {
        setters: [],
        execute: function () {
            baseProperty = require('./_baseProperty');
            basePropertyDeep = require('./_basePropertyDeep');
            isKey = require('./_isKey');
            module.exports = property;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Byb3BlcnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCO0FBQ3RCLGVBQU8sTUFBTSxJQUFOLElBQWMsYUFBYSxJQUFiLENBQWQsR0FBbUMsaUJBQWlCLElBQWpCLENBQW5DLENBRGU7S0FBeEI7Ozs7QUFISSwyQkFBZSxRQUFRLGlCQUFSO0FBQ2YsK0JBQW1CLFFBQVEscUJBQVI7QUFDbkIsb0JBQVEsUUFBUSxVQUFSO0FBSVosbUJBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9wcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpO1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkocGF0aCkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
