'use strict';

System.register([], function (_export, _context) {
    var cof, TAG, ARG;
    return {
        setters: [],
        execute: function () {
            cof = require('./$.cof');
            TAG = require('./$.wks')('toStringTag');
            ARG = cof(function () {
                return arguments;
            }()) == 'Arguments';

            module.exports = function (it) {
                var O, T, B;
                return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5jbGFzc29mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxrQkFBTSxRQUFRLFNBQVI7QUFDTixrQkFBTSxRQUFRLFNBQVIsRUFBbUIsYUFBbkI7QUFDTixrQkFBTSxJQUFJLFlBQVc7QUFDbkIsdUJBQU8sU0FBUCxDQURtQjthQUFYLEVBQUosS0FFRSxXQUZGOztBQUdWLG1CQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWE7QUFDNUIsb0JBQUksQ0FBSixFQUNJLENBREosRUFFSSxDQUZKLENBRDRCO0FBSTVCLHVCQUFPLE9BQU8sU0FBUCxHQUFtQixXQUFuQixHQUFpQyxPQUFPLElBQVAsR0FBYyxNQUFkLEdBQXVCLFFBQU8sSUFBSSxDQUFDLElBQUksT0FBTyxFQUFQLENBQUosQ0FBRCxDQUFpQixHQUFqQixDQUFKLENBQVAsSUFBcUMsUUFBckMsR0FBZ0QsQ0FBaEQsR0FBb0QsTUFBTSxJQUFJLENBQUosQ0FBTixHQUFlLENBQUMsSUFBSSxJQUFJLENBQUosQ0FBSixDQUFELElBQWdCLFFBQWhCLElBQTRCLE9BQU8sRUFBRSxNQUFGLElBQVksVUFBbkIsR0FBZ0MsV0FBNUQsR0FBMEUsQ0FBMUUsQ0FKdEc7YUFBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKSxcbiAgICBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyksXG4gICAgQVJHID0gY29mKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cztcbiAgICB9KCkpID09ICdBcmd1bWVudHMnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCkge1xuICB2YXIgTyxcbiAgICAgIFQsXG4gICAgICBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCcgOiB0eXBlb2YoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUIDogQVJHID8gY29mKE8pIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
