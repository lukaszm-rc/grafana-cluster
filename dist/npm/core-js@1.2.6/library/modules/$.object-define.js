'use strict';

System.register([], function (_export, _context) {
    var $, ownKeys, toIObject;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            ownKeys = require('./$.own-keys');
            toIObject = require('./$.to-iobject');

            module.exports = function define(target, mixin) {
                var keys = ownKeys(toIObject(mixin)),
                    length = keys.length,
                    i = 0,
                    key;
                while (length > i) {
                    $.setDesc(target, key = keys[i++], $.getDesc(mixin, key));
                }return target;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1kZWZpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFJLFFBQVEsS0FBUjtBQUNKLHNCQUFVLFFBQVEsY0FBUjtBQUNWLHdCQUFZLFFBQVEsZ0JBQVI7O0FBQ2hCLG1CQUFPLE9BQVAsR0FBaUIsU0FBUyxNQUFULENBQWdCLE1BQWhCLEVBQXdCLEtBQXhCLEVBQStCO0FBQzlDLG9CQUFJLE9BQU8sUUFBUSxVQUFVLEtBQVYsQ0FBUixDQUFQO29CQUNBLFNBQVMsS0FBSyxNQUFMO29CQUNULElBQUksQ0FBSjtvQkFDQSxHQUhKLENBRDhDO0FBSzlDLHVCQUFPLFNBQVMsQ0FBVDtBQUNMLHNCQUFFLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLE1BQU0sS0FBSyxHQUFMLENBQU4sRUFBaUIsRUFBRSxPQUFGLENBQVUsS0FBVixFQUFpQixHQUFqQixDQUFuQztpQkFERixPQUVPLE1BQVAsQ0FQOEM7YUFBL0IiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LWRlZmluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBvd25LZXlzID0gcmVxdWlyZSgnLi8kLm93bi1rZXlzJyksXG4gICAgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lKHRhcmdldCwgbWl4aW4pIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHRvSU9iamVjdChtaXhpbikpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpID0gMCxcbiAgICAgIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpXG4gICAgJC5zZXREZXNjKHRhcmdldCwga2V5ID0ga2V5c1tpKytdLCAkLmdldERlc2MobWl4aW4sIGtleSkpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
