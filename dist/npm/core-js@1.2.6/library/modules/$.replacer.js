"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      module.exports = function (regExp, replace) {
        var replacer = replace === Object(replace) ? function (part) {
          return replace[part];
        } : replace;
        return function (it) {
          return String(it).replace(regExp, replacer);
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxhQUFPLE9BQVAsR0FBaUIsVUFBUyxNQUFULEVBQWlCLE9BQWpCLEVBQXlCO0FBQ3hDLFlBQUksV0FBVyxZQUFZLE9BQU8sT0FBUCxDQUFaLEdBQThCLFVBQVMsSUFBVCxFQUFjO0FBQ3pELGlCQUFPLFFBQVEsSUFBUixDQUFQLENBRHlEO1NBQWQsR0FFekMsT0FGVyxDQUR5QjtBQUl4QyxlQUFPLFVBQVMsRUFBVCxFQUFZO0FBQ2pCLGlCQUFPLE9BQU8sRUFBUCxFQUFXLE9BQVgsQ0FBbUIsTUFBbkIsRUFBMkIsUUFBM0IsQ0FBUCxDQURpQjtTQUFaLENBSmlDO09BQXpCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG4gIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gU3RyaW5nKGl0KS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuICB9O1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
