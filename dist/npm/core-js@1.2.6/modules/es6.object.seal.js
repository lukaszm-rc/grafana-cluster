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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7O0FBQ2YsY0FBUSxnQkFBUixFQUEwQixNQUExQixFQUFrQyxVQUFTLEtBQVQsRUFBZ0I7QUFDaEQsZUFBTyxTQUFTLElBQVQsQ0FBYyxFQUFkLEVBQWtCO0FBQ3ZCLGlCQUFPLFNBQVMsU0FBUyxFQUFULENBQVQsR0FBd0IsTUFBTSxFQUFOLENBQXhCLEdBQW9DLEVBQXBDLENBRGdCO1NBQWxCLENBRHlDO09BQWhCLENBQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpIHtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwoaXQpIDogaXQ7XG4gIH07XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
