'use strict';

System.register([], function (_export, _context) {
    var $, anObject, Reflect;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            anObject = require('./$.an-object');
            Reflect = require('./$.global').Reflect;

            module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
                var keys = $.getNames(anObject(it)),
                    getSymbols = $.getSymbols;
                return getSymbols ? keys.concat(getSymbols(it)) : keys;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5vd24ta2V5cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQUksUUFBUSxLQUFSO0FBQ0osdUJBQVcsUUFBUSxlQUFSO0FBQ1gsc0JBQVUsUUFBUSxZQUFSLEVBQXNCLE9BQXRCOztBQUNkLG1CQUFPLE9BQVAsR0FBaUIsV0FBVyxRQUFRLE9BQVIsSUFBbUIsU0FBUyxPQUFULENBQWlCLEVBQWpCLEVBQXFCO0FBQ2xFLG9CQUFJLE9BQU8sRUFBRSxRQUFGLENBQVcsU0FBUyxFQUFULENBQVgsQ0FBUDtvQkFDQSxhQUFhLEVBQUUsVUFBRixDQUZpRDtBQUdsRSx1QkFBTyxhQUFhLEtBQUssTUFBTCxDQUFZLFdBQVcsRUFBWCxDQUFaLENBQWIsR0FBMkMsSUFBM0MsQ0FIMkQ7YUFBckIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLm93bi1rZXlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgIFJlZmxlY3QgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9ICQuZ2V0TmFtZXMoYW5PYmplY3QoaXQpKSxcbiAgICAgIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIHJldHVybiBnZXRTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
