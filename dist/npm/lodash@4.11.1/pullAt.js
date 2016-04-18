'use strict';

System.register([], function (_export, _context) {
    var arrayMap, baseAt, baseFlatten, basePullAt, compareAscending, rest, pullAt;
    return {
        setters: [],
        execute: function () {
            arrayMap = require('./_arrayMap');
            baseAt = require('./_baseAt');
            baseFlatten = require('./_baseFlatten');
            basePullAt = require('./_basePullAt');
            compareAscending = require('./_compareAscending');
            rest = require('./rest');
            pullAt = rest(function (array, indexes) {
                indexes = arrayMap(baseFlatten(indexes, 1), String);
                var result = baseAt(array, indexes);
                basePullAt(array, indexes.sort(compareAscending));
                return result;
            });

            module.exports = pullAt;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3B1bGxBdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksdUJBQVcsUUFBUSxhQUFSO0FBQ1gscUJBQVMsUUFBUSxXQUFSO0FBQ1QsMEJBQWMsUUFBUSxnQkFBUjtBQUNkLHlCQUFhLFFBQVEsZUFBUjtBQUNiLCtCQUFtQixRQUFRLHFCQUFSO0FBQ25CLG1CQUFPLFFBQVEsUUFBUjtBQUNQLHFCQUFTLEtBQUssVUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCO0FBQ3pDLDBCQUFVLFNBQVMsWUFBWSxPQUFaLEVBQXFCLENBQXJCLENBQVQsRUFBa0MsTUFBbEMsQ0FBVixDQUR5QztBQUV6QyxvQkFBSSxTQUFTLE9BQU8sS0FBUCxFQUFjLE9BQWQsQ0FBVCxDQUZxQztBQUd6QywyQkFBVyxLQUFYLEVBQWtCLFFBQVEsSUFBUixDQUFhLGdCQUFiLENBQWxCLEVBSHlDO0FBSXpDLHVCQUFPLE1BQVAsQ0FKeUM7YUFBekI7O0FBTWxCLG1CQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvcHVsbEF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VBdCA9IHJlcXVpcmUoJy4vX2Jhc2VBdCcpLFxuICAgIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlUHVsbEF0ID0gcmVxdWlyZSgnLi9fYmFzZVB1bGxBdCcpLFxuICAgIGNvbXBhcmVBc2NlbmRpbmcgPSByZXF1aXJlKCcuL19jb21wYXJlQXNjZW5kaW5nJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIHB1bGxBdCA9IHJlc3QoZnVuY3Rpb24oYXJyYXksIGluZGV4ZXMpIHtcbiAgaW5kZXhlcyA9IGFycmF5TWFwKGJhc2VGbGF0dGVuKGluZGV4ZXMsIDEpLCBTdHJpbmcpO1xuICB2YXIgcmVzdWx0ID0gYmFzZUF0KGFycmF5LCBpbmRleGVzKTtcbiAgYmFzZVB1bGxBdChhcnJheSwgaW5kZXhlcy5zb3J0KGNvbXBhcmVBc2NlbmRpbmcpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBwdWxsQXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
