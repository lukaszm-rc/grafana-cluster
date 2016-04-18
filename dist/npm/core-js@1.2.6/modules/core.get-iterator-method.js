'use strict';

System.register([], function (_export, _context) {
    var classof, ITERATOR, Iterators;
    return {
        setters: [],
        execute: function () {
            classof = require('./$.classof');
            ITERATOR = require('./$.wks')('iterator');
            Iterators = require('./$.iterators');

            module.exports = require('./$.core').getIteratorMethod = function (it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLGFBQVI7QUFDVix1QkFBVyxRQUFRLFNBQVIsRUFBbUIsVUFBbkI7QUFDWCx3QkFBWSxRQUFRLGVBQVI7O0FBQ2hCLG1CQUFPLE9BQVAsR0FBaUIsUUFBUSxVQUFSLEVBQW9CLGlCQUFwQixHQUF3QyxVQUFTLEVBQVQsRUFBYTtBQUNwRSxvQkFBSSxNQUFNLFNBQU4sRUFDRixPQUFPLEdBQUcsUUFBSCxLQUFnQixHQUFHLFlBQUgsQ0FBaEIsSUFBb0MsVUFBVSxRQUFRLEVBQVIsQ0FBVixDQUFwQyxDQURUO2FBRHVEIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJyksXG4gICAgSVRFUkFUT1IgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksXG4gICAgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZClcbiAgICByZXR1cm4gaXRbSVRFUkFUT1JdIHx8IGl0WydAQGl0ZXJhdG9yJ10gfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
