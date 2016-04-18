'use strict';

System.register([], function (_export, _context) {
    var arrayFilter, baseFilter, baseIteratee, isArray;

    function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, baseIteratee(predicate, 3));
    }
    return {
        setters: [],
        execute: function () {
            arrayFilter = require('./_arrayFilter');
            baseFilter = require('./_baseFilter');
            baseIteratee = require('./_baseIteratee');
            isArray = require('./isArray');
            module.exports = filter;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLGFBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QixTQUE1QixFQUF1QztBQUNyQyxZQUFJLE9BQU8sUUFBUSxVQUFSLElBQXNCLFdBQXRCLEdBQW9DLFVBQXBDLENBRDBCO0FBRXJDLGVBQU8sS0FBSyxVQUFMLEVBQWlCLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFqQixDQUFQLENBRnFDO0tBQXZDOzs7O0FBSkksMEJBQWMsUUFBUSxnQkFBUjtBQUNkLHlCQUFhLFFBQVEsZUFBUjtBQUNiLDJCQUFlLFFBQVEsaUJBQVI7QUFDZixzQkFBVSxRQUFRLFdBQVI7QUFLZCxtQkFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlRmlsdGVyID0gcmVxdWlyZSgnLi9fYmFzZUZpbHRlcicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcbmZ1bmN0aW9uIGZpbHRlcihjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlGaWx0ZXIgOiBiYXNlRmlsdGVyO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
