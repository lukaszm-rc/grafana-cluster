/* */
'use strict';

System.register([], function (_export, _context) {
  var classof, test;
  return {
    setters: [],
    execute: function () {
      classof = require('./$.classof');
      test = {};

      test[require('./$.wks')('toStringTag')] = 'z';
      if (test + '' != '[object z]') {
        require('./$.redefine')(Object.prototype, 'toString', function toString() {
          return '[object ' + classof(this) + ']';
        }, true);
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxhQUFSO0FBQ1YsYUFBTzs7QUFDWCxXQUFLLFFBQVEsU0FBUixFQUFtQixhQUFuQixDQUFMLElBQTBDLEdBQTFDO0FBQ0EsVUFBSSxPQUFPLEVBQVAsSUFBYSxZQUFiLEVBQTJCO0FBQzdCLGdCQUFRLGNBQVIsRUFBd0IsT0FBTyxTQUFQLEVBQWtCLFVBQTFDLEVBQXNELFNBQVMsUUFBVCxHQUFvQjtBQUN4RSxpQkFBTyxhQUFhLFFBQVEsSUFBUixDQUFiLEdBQTZCLEdBQTdCLENBRGlFO1NBQXBCLEVBRW5ELElBRkgsRUFENkI7T0FBL0IiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpLFxuICAgIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vJC5yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
