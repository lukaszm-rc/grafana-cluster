'use strict';

System.register([], function (_export, _context) {
    var $export, _apply;

    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            _apply = Function.apply;

            $export($export.S, 'Reflect', { apply: function apply(target, thisArgument, argumentsList) {
                    return _apply.call(target, thisArgument, argumentsList);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixxQkFBUyxTQUFTLEtBQVQ7O0FBQ2Isb0JBQVEsUUFBUSxDQUFSLEVBQVcsU0FBbkIsRUFBOEIsRUFBQyxPQUFPLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsWUFBdkIsRUFBcUMsYUFBckMsRUFBb0Q7QUFDdEYsMkJBQU8sT0FBTyxJQUFQLENBQVksTUFBWixFQUFvQixZQUFwQixFQUFrQyxhQUFsQyxDQUFQLENBRHNGO2lCQUFwRCxFQUF0QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBfYXBwbHkgPSBGdW5jdGlvbi5hcHBseTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHthcHBseTogZnVuY3Rpb24gYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpIHtcbiAgICByZXR1cm4gX2FwcGx5LmNhbGwodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
