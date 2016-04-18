'use strict';

System.register([], function (_export, _context) {
  var isObject;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');

      require('./$.object-sap')('freeze', function ($freeze) {
        return function freeze(it) {
          return $freeze && isObject(it) ? $freeze(it) : it;
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSOztBQUNmLGNBQVEsZ0JBQVIsRUFBMEIsUUFBMUIsRUFBb0MsVUFBUyxPQUFULEVBQWtCO0FBQ3BELGVBQU8sU0FBUyxNQUFULENBQWdCLEVBQWhCLEVBQW9CO0FBQ3pCLGlCQUFPLFdBQVcsU0FBUyxFQUFULENBQVgsR0FBMEIsUUFBUSxFQUFSLENBQTFCLEdBQXdDLEVBQXhDLENBRGtCO1NBQXBCLENBRDZDO09BQWxCLENBQXBDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KSB7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShpdCkgOiBpdDtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
