/* */
'use strict';

System.register([], function (_export, _context) {
  var $export;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');

      $export($export.S + $export.F * require('./$.fails')(function () {
        function F() {}
        return !(Array.of.call(F) instanceof F);
      }), 'Array', { of: function of() {
          var index = 0,
              $$ = arguments,
              $$len = $$.length,
              result = new (typeof this == 'function' ? this : Array)($$len);
          while ($$len > index) {
            result[index] = $$[index++];
          }result.length = $$len;
          return result;
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsWUFBUjs7QUFDZCxjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLFFBQVEsV0FBUixFQUFxQixZQUFXO0FBQzlELGlCQUFTLENBQVQsR0FBYSxFQUFiO0FBQ0EsZUFBTyxFQUFFLE1BQU0sRUFBTixDQUFTLElBQVQsQ0FBYyxDQUFkLGFBQTRCLENBQTVCLENBQUYsQ0FGdUQ7T0FBWCxDQUFqQyxFQUdoQixPQUhKLEVBR2EsRUFBQyxJQUFJLFNBQVMsRUFBVCxHQUFjO0FBQzVCLGNBQUksUUFBUSxDQUFSO2NBQ0EsS0FBSyxTQUFMO2NBQ0EsUUFBUSxHQUFHLE1BQUg7Y0FDUixTQUFTLEtBQUssT0FBTyxJQUFQLElBQWUsVUFBZixHQUE0QixJQUE1QixHQUFtQyxLQUFuQyxDQUFMLENBQStDLEtBQS9DLENBQVQsQ0FKd0I7QUFLNUIsaUJBQU8sUUFBUSxLQUFSO0FBQ0wsbUJBQU8sS0FBUCxJQUFnQixHQUFHLE9BQUgsQ0FBaEI7V0FERixNQUVBLENBQU8sTUFBUCxHQUFnQixLQUFoQixDQVA0QjtBQVE1QixpQkFBTyxNQUFQLENBUjRCO1NBQWQsRUFIbEIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYuYXJyYXkub2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRigpIHt9XG4gIHJldHVybiAhKEFycmF5Lm9mLmNhbGwoRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnQXJyYXknLCB7b2Y6IGZ1bmN0aW9uIG9mKCkge1xuICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgICQkID0gYXJndW1lbnRzLFxuICAgICAgICAkJGxlbiA9ICQkLmxlbmd0aCxcbiAgICAgICAgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KSgkJGxlbik7XG4gICAgd2hpbGUgKCQkbGVuID4gaW5kZXgpXG4gICAgICByZXN1bHRbaW5kZXhdID0gJCRbaW5kZXgrK107XG4gICAgcmVzdWx0Lmxlbmd0aCA9ICQkbGVuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
