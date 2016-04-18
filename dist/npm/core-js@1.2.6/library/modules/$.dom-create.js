'use strict';

System.register([], function (_export, _context) {
    var isObject, document, is;
    return {
        setters: [],
        execute: function () {
            isObject = require('./$.is-object');
            document = require('./$.global').document;
            is = isObject(document) && isObject(document.createElement);

            module.exports = function (it) {
                return is ? document.createElement(it) : {};
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHVCQUFXLFFBQVEsZUFBUjtBQUNYLHVCQUFXLFFBQVEsWUFBUixFQUFzQixRQUF0QjtBQUNYLGlCQUFLLFNBQVMsUUFBVCxLQUFzQixTQUFTLFNBQVMsYUFBVCxDQUEvQjs7QUFDVCxtQkFBTyxPQUFQLEdBQWlCLFVBQVMsRUFBVCxFQUFhO0FBQzVCLHVCQUFPLEtBQUssU0FBUyxhQUFULENBQXVCLEVBQXZCLENBQUwsR0FBa0MsRUFBbEMsQ0FEcUI7YUFBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5kb20tY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgZG9jdW1lbnQgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuZG9jdW1lbnQsXG4gICAgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
