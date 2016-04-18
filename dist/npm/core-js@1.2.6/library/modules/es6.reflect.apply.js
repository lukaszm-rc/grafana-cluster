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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHFCQUFTLFNBQVMsS0FBVDs7QUFDYixvQkFBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLE9BQU8sU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixZQUF2QixFQUFxQyxhQUFyQyxFQUFvRDtBQUN0RiwyQkFBTyxPQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLFlBQXBCLEVBQWtDLGFBQWxDLENBQVAsQ0FEc0Y7aUJBQXBELEVBQXRDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgX2FwcGx5ID0gRnVuY3Rpb24uYXBwbHk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7YXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KSB7XG4gICAgcmV0dXJuIF9hcHBseS5jYWxsKHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
