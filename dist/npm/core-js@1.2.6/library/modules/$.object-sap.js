'use strict';

System.register([], function (_export, _context) {
    var $export, core, fails;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            core = require('./$.core');
            fails = require('./$.fails');

            module.exports = function (KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY],
                    exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function () {
                    fn(1);
                }), 'Object', exp);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1zYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLG1CQUFPLFFBQVEsVUFBUjtBQUNQLG9CQUFRLFFBQVEsV0FBUjs7QUFDWixtQkFBTyxPQUFQLEdBQWlCLFVBQVMsR0FBVCxFQUFjLElBQWQsRUFBb0I7QUFDbkMsb0JBQUksS0FBSyxDQUFDLEtBQUssTUFBTCxJQUFlLEVBQWYsQ0FBRCxDQUFvQixHQUFwQixLQUE0QixPQUFPLEdBQVAsQ0FBNUI7b0JBQ0wsTUFBTSxFQUFOLENBRitCO0FBR25DLG9CQUFJLEdBQUosSUFBVyxLQUFLLEVBQUwsQ0FBWCxDQUhtQztBQUluQyx3QkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxNQUFNLFlBQVc7QUFDL0MsdUJBQUcsQ0FBSCxFQUQrQztpQkFBWCxDQUFsQixFQUVoQixRQUZKLEVBRWMsR0FGZCxFQUptQzthQUFwQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBjb3JlID0gcmVxdWlyZSgnLi8kLmNvcmUnKSxcbiAgICBmYWlscyA9IHJlcXVpcmUoJy4vJC5mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldLFxuICAgICAgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKSB7XG4gICAgZm4oMSk7XG4gIH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
