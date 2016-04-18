'use strict';

System.register([], function (_export, _context) {
    var global, SHARED, store;
    return {
        setters: [],
        execute: function () {
            global = require('./$.global');
            SHARED = '__core-js_shared__';
            store = global[SHARED] || (global[SHARED] = {});

            module.exports = function (key) {
                return store[key] || (store[key] = {});
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zaGFyZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHFCQUFTLFFBQVEsWUFBUjtBQUNULHFCQUFTO0FBQ1Qsb0JBQVEsT0FBTyxNQUFQLE1BQW1CLE9BQU8sTUFBUCxJQUFpQixFQUFqQixDQUFuQjs7QUFDWixtQkFBTyxPQUFQLEdBQWlCLFVBQVMsR0FBVCxFQUFjO0FBQzdCLHVCQUFPLE1BQU0sR0FBTixNQUFlLE1BQU0sR0FBTixJQUFhLEVBQWIsQ0FBZixDQURzQjthQUFkIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zaGFyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXycsXG4gICAgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
