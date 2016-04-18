'use strict';

System.register([], function (_export, _context) {
    var baseForRight, baseIteratee, keysIn;

    function forInRight(object, iteratee) {
        return object == null ? object : baseForRight(object, baseIteratee(iteratee), keysIn);
    }
    return {
        setters: [],
        execute: function () {
            baseForRight = require('./_baseForRight');
            baseIteratee = require('./_baseIteratee');
            keysIn = require('./keysIn');
            module.exports = forInRight;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZvckluUmlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxhQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEIsUUFBNUIsRUFBc0M7QUFDcEMsZUFBTyxVQUFVLElBQVYsR0FBaUIsTUFBakIsR0FBMEIsYUFBYSxNQUFiLEVBQXFCLGFBQWEsUUFBYixDQUFyQixFQUE2QyxNQUE3QyxDQUExQixDQUQ2QjtLQUF0Qzs7OztBQUhJLDJCQUFlLFFBQVEsaUJBQVI7QUFDZiwyQkFBZSxRQUFRLGlCQUFSO0FBQ2YscUJBQVMsUUFBUSxVQUFSO0FBSWIsbUJBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mb3JJblJpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZvclJpZ2h0ID0gcmVxdWlyZSgnLi9fYmFzZUZvclJpZ2h0JyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcbmZ1bmN0aW9uIGZvckluUmlnaHQob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBvYmplY3QgOiBiYXNlRm9yUmlnaHQob2JqZWN0LCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpLCBrZXlzSW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmb3JJblJpZ2h0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
