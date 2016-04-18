'use strict';

System.register([], function (_export, _context) {
    var $export, isInteger, abs;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            isInteger = require('./$.is-integer');
            abs = Math.abs;

            $export($export.S, 'Number', { isSafeInteger: function isSafeInteger(number) {
                    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHdCQUFZLFFBQVEsZ0JBQVI7QUFDWixrQkFBTSxLQUFLLEdBQUw7O0FBQ1Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxlQUFlLFNBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQjtBQUN4RSwyQkFBTyxVQUFVLE1BQVYsS0FBcUIsSUFBSSxNQUFKLEtBQWUsZ0JBQWYsQ0FENEM7aUJBQS9CLEVBQTdDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGlzSW50ZWdlciA9IHJlcXVpcmUoJy4vJC5pcy1pbnRlZ2VyJyksXG4gICAgYWJzID0gTWF0aC5hYnM7XG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcikge1xuICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSAweDFmZmZmZmZmZmZmZmZmO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
