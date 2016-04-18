'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hbi1vYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixhQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWE7QUFDNUIsWUFBSSxDQUFDLFNBQVMsRUFBVCxDQUFELEVBQ0YsTUFBTSxVQUFVLEtBQUssb0JBQUwsQ0FBaEIsQ0FERjtBQUVBLGVBQU8sRUFBUCxDQUg0QjtPQUFiIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpXG4gICAgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
