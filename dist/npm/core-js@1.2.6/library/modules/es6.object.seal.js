'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('seal', function ($seal) {
        return function seal(it) {
          return $seal && isObject(it) ? $seal(it) : it;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGlCQUFXLFFBQVEsZUFBUjs7QUFDZixjQUFRLGdCQUFSLEVBQTBCLE1BQTFCLEVBQWtDLFVBQVMsS0FBVCxFQUFnQjtBQUNoRCxlQUFPLFNBQVMsSUFBVCxDQUFjLEVBQWQsRUFBa0I7QUFDdkIsaUJBQU8sU0FBUyxTQUFTLEVBQVQsQ0FBVCxHQUF3QixNQUFNLEVBQU4sQ0FBeEIsR0FBb0MsRUFBcEMsQ0FEZ0I7U0FBbEIsQ0FEeUM7T0FBaEIsQ0FBbEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KSB7XG4gICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKGl0KSA6IGl0O1xuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
