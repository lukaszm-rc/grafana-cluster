'use strict';

System.register([], function (_export, _context) {
    var baseFlatten, basePick, rest, pick;
    return {
        setters: [],
        execute: function () {
            baseFlatten = require('./_baseFlatten');
            basePick = require('./_basePick');
            rest = require('./rest');
            pick = rest(function (object, props) {
                return object == null ? {} : basePick(object, baseFlatten(props, 1));
            });

            module.exports = pick;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLDBCQUFjLFFBQVEsZ0JBQVI7QUFDZCx1QkFBVyxRQUFRLGFBQVI7QUFDWCxtQkFBTyxRQUFRLFFBQVI7QUFDUCxtQkFBTyxLQUFLLFVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QjtBQUN0Qyx1QkFBTyxVQUFVLElBQVYsR0FBaUIsRUFBakIsR0FBc0IsU0FBUyxNQUFULEVBQWlCLFlBQVksS0FBWixFQUFtQixDQUFuQixDQUFqQixDQUF0QixDQUQrQjthQUF4Qjs7QUFHaEIsbUJBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9waWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VQaWNrID0gcmVxdWlyZSgnLi9fYmFzZVBpY2snKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgcGljayA9IHJlc3QoZnVuY3Rpb24ob2JqZWN0LCBwcm9wcykge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB7fSA6IGJhc2VQaWNrKG9iamVjdCwgYmFzZUZsYXR0ZW4ocHJvcHMsIDEpKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBwaWNrO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
