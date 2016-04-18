'use strict';

System.register([], function (_export, _context) {
    var classof, ITERATOR, Iterators;
    return {
        setters: [],
        execute: function () {
            classof = require('./$.classof');
            ITERATOR = require('./$.wks')('iterator');
            Iterators = require('./$.iterators');

            module.exports = require('./$.core').getIteratorMethod = function (it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsYUFBUjtBQUNWLHVCQUFXLFFBQVEsU0FBUixFQUFtQixVQUFuQjtBQUNYLHdCQUFZLFFBQVEsZUFBUjs7QUFDaEIsbUJBQU8sT0FBUCxHQUFpQixRQUFRLFVBQVIsRUFBb0IsaUJBQXBCLEdBQXdDLFVBQVMsRUFBVCxFQUFhO0FBQ3BFLG9CQUFJLE1BQU0sU0FBTixFQUNGLE9BQU8sR0FBRyxRQUFILEtBQWdCLEdBQUcsWUFBSCxDQUFoQixJQUFvQyxVQUFVLFFBQVEsRUFBUixDQUFWLENBQXBDLENBRFQ7YUFEdUQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpLFxuICAgIElURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLFxuICAgIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGl0W0lURVJBVE9SXSB8fCBpdFsnQEBpdGVyYXRvciddIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
