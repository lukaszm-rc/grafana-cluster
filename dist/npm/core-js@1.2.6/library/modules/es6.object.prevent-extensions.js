'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('preventExtensions', function ($preventExtensions) {
        return function preventExtensions(it) {
          return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSOztBQUNmLGNBQVEsZ0JBQVIsRUFBMEIsbUJBQTFCLEVBQStDLFVBQVMsa0JBQVQsRUFBNkI7QUFDMUUsZUFBTyxTQUFTLGlCQUFULENBQTJCLEVBQTNCLEVBQStCO0FBQ3BDLGlCQUFPLHNCQUFzQixTQUFTLEVBQVQsQ0FBdEIsR0FBcUMsbUJBQW1CLEVBQW5CLENBQXJDLEdBQThELEVBQTlELENBRDZCO1NBQS9CLENBRG1FO09BQTdCLENBQS9DIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbigkcHJldmVudEV4dGVuc2lvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KSB7XG4gICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucyAmJiBpc09iamVjdChpdCkgPyAkcHJldmVudEV4dGVuc2lvbnMoaXQpIDogaXQ7XG4gIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
