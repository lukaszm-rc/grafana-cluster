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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGtCQUFNLFFBQVEsU0FBUjtBQUNOLGtCQUFNLFFBQVEsU0FBUixFQUFtQixhQUFuQjtBQUNOLGtCQUFNLElBQUksWUFBVztBQUNuQix1QkFBTyxTQUFQLENBRG1CO2FBQVgsRUFBSixLQUVFLFdBRkY7O0FBR1YsbUJBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYTtBQUM1QixvQkFBSSxDQUFKLEVBQ0ksQ0FESixFQUVJLENBRkosQ0FENEI7QUFJNUIsdUJBQU8sT0FBTyxTQUFQLEdBQW1CLFdBQW5CLEdBQWlDLE9BQU8sSUFBUCxHQUFjLE1BQWQsR0FBdUIsUUFBTyxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQVAsQ0FBSixDQUFELENBQWlCLEdBQWpCLENBQUosQ0FBUCxJQUFxQyxRQUFyQyxHQUFnRCxDQUFoRCxHQUFvRCxNQUFNLElBQUksQ0FBSixDQUFOLEdBQWUsQ0FBQyxJQUFJLElBQUksQ0FBSixDQUFKLENBQUQsSUFBZ0IsUUFBaEIsSUFBNEIsT0FBTyxFQUFFLE1BQUYsSUFBWSxVQUFuQixHQUFnQyxXQUE1RCxHQUEwRSxDQUExRSxDQUp0RzthQUFiIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyksXG4gICAgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpLFxuICAgIEFSRyA9IGNvZihmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHM7XG4gICAgfSgpKSA9PSAnQXJndW1lbnRzJztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpIHtcbiAgdmFyIE8sXG4gICAgICBULFxuICAgICAgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnIDogdHlwZW9mKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVCA6IEFSRyA/IGNvZihPKSA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
