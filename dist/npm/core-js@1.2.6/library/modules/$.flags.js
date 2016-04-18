/* */
'use strict';

System.register([], function (_export, _context) {
  var anObject;
  return {
    setters: [],
    execute: function () {
      anObject = require('./$.an-object');

      module.exports = function () {
        var that = anObject(this),
            result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmZsYWdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixhQUFPLE9BQVAsR0FBaUIsWUFBVztBQUMxQixZQUFJLE9BQU8sU0FBUyxJQUFULENBQVA7WUFDQSxTQUFTLEVBQVQsQ0FGc0I7QUFHMUIsWUFBSSxLQUFLLE1BQUwsRUFDRixVQUFVLEdBQVYsQ0FERjtBQUVBLFlBQUksS0FBSyxVQUFMLEVBQ0YsVUFBVSxHQUFWLENBREY7QUFFQSxZQUFJLEtBQUssU0FBTCxFQUNGLFVBQVUsR0FBVixDQURGO0FBRUEsWUFBSSxLQUFLLE9BQUwsRUFDRixVQUFVLEdBQVYsQ0FERjtBQUVBLFlBQUksS0FBSyxNQUFMLEVBQ0YsVUFBVSxHQUFWLENBREY7QUFFQSxlQUFPLE1BQVAsQ0FiMEI7T0FBWCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5mbGFncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKSxcbiAgICAgIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpXG4gICAgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSlcbiAgICByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpXG4gICAgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSlcbiAgICByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpXG4gICAgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
