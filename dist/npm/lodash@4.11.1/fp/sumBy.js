'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('sumBy', require('../sumBy'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL3N1bUJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFdBQVI7QUFDVixtQkFBTyxRQUFRLE9BQVIsRUFBaUIsUUFBUSxVQUFSLENBQWpCOztBQUNYLGlCQUFLLFdBQUwsR0FBbUIsUUFBUSxlQUFSLENBQW5CO0FBQ0EsbUJBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mcC9zdW1CeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCcuL2NvbnZlcnQnKSxcbiAgICBmdW5jID0gY29udmVydCgnc3VtQnknLCByZXF1aXJlKCcuLi9zdW1CeScpKTtcbmZ1bmMucGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL3BsYWNlaG9sZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
