'use strict';

System.register([], function (_export, _context) {
  var toObject;
  return {
    setters: [],
    execute: function () {
      toObject = require('./$.to-object');

      require('./$.object-sap')('getPrototypeOf', function ($getPrototypeOf) {
        return function getPrototypeOf(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7O0FBQ2YsY0FBUSxnQkFBUixFQUEwQixnQkFBMUIsRUFBNEMsVUFBUyxlQUFULEVBQTBCO0FBQ3BFLGVBQU8sU0FBUyxjQUFULENBQXdCLEVBQXhCLEVBQTRCO0FBQ2pDLGlCQUFPLGdCQUFnQixTQUFTLEVBQVQsQ0FBaEIsQ0FBUCxDQURpQztTQUE1QixDQUQ2RDtPQUExQixDQUE1QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigkZ2V0UHJvdG90eXBlT2YpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
