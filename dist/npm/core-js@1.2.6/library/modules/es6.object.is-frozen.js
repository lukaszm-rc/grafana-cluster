'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('isFrozen', function ($isFrozen) {
        return function isFrozen(it) {
          return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSOztBQUNmLGNBQVEsZ0JBQVIsRUFBMEIsVUFBMUIsRUFBc0MsVUFBUyxTQUFULEVBQW9CO0FBQ3hELGVBQU8sU0FBUyxRQUFULENBQWtCLEVBQWxCLEVBQXNCO0FBQzNCLGlCQUFPLFNBQVMsRUFBVCxJQUFlLFlBQVksVUFBVSxFQUFWLENBQVosR0FBNEIsS0FBNUIsR0FBb0MsSUFBbkQsQ0FEb0I7U0FBdEIsQ0FEaUQ7T0FBcEIsQ0FBdEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdpc0Zyb3plbicsIGZ1bmN0aW9uKCRpc0Zyb3plbikge1xuICByZXR1cm4gZnVuY3Rpb24gaXNGcm96ZW4oaXQpIHtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRnJvemVuID8gJGlzRnJvemVuKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
