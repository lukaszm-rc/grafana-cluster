'use strict';

System.register([], function (_export, _context) {
  var toIObject;
  return {
    setters: [],
    execute: function () {
      toIObject = require('./$.to-iobject');

      require('./$.object-sap')('getOwnPropertyDescriptor', function ($getOwnPropertyDescriptor) {
        return function getOwnPropertyDescriptor(it, key) {
          return $getOwnPropertyDescriptor(toIObject(it), key);
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxnQkFBUjs7QUFDaEIsY0FBUSxnQkFBUixFQUEwQiwwQkFBMUIsRUFBc0QsVUFBUyx5QkFBVCxFQUFvQztBQUN4RixlQUFPLFNBQVMsd0JBQVQsQ0FBa0MsRUFBbEMsRUFBc0MsR0FBdEMsRUFBMkM7QUFDaEQsaUJBQU8sMEJBQTBCLFVBQVUsRUFBVixDQUExQixFQUF5QyxHQUF6QyxDQUFQLENBRGdEO1NBQTNDLENBRGlGO09BQXBDLENBQXREIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
