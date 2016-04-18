'use strict';

System.register([], function (_export, _context) {
  var copyObject, keys;

  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  return {
    setters: [],
    execute: function () {
      copyObject = require('./_copyObject');
      keys = require('./keys');
      module.exports = baseAssign;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlQXNzaWduLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLE1BQTVCLEVBQW9DO0FBQ2xDLFdBQU8sVUFBVSxXQUFXLE1BQVgsRUFBbUIsS0FBSyxNQUFMLENBQW5CLEVBQWlDLE1BQWpDLENBQVYsQ0FEMkI7R0FBcEM7Ozs7QUFGSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixhQUFPLFFBQVEsUUFBUjtBQUlYLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUFzc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
