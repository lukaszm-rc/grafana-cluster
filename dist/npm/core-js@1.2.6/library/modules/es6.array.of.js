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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkub2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSOztBQUNkLGNBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxXQUFSLEVBQXFCLFlBQVc7QUFDOUQsaUJBQVMsQ0FBVCxHQUFhLEVBQWI7QUFDQSxlQUFPLEVBQUUsTUFBTSxFQUFOLENBQVMsSUFBVCxDQUFjLENBQWQsYUFBNEIsQ0FBNUIsQ0FBRixDQUZ1RDtPQUFYLENBQWpDLEVBR2hCLE9BSEosRUFHYSxFQUFDLElBQUksU0FBUyxFQUFULEdBQWM7QUFDNUIsY0FBSSxRQUFRLENBQVI7Y0FDQSxLQUFLLFNBQUw7Y0FDQSxRQUFRLEdBQUcsTUFBSDtjQUNSLFNBQVMsS0FBSyxPQUFPLElBQVAsSUFBZSxVQUFmLEdBQTRCLElBQTVCLEdBQW1DLEtBQW5DLENBQUwsQ0FBK0MsS0FBL0MsQ0FBVCxDQUp3QjtBQUs1QixpQkFBTyxRQUFRLEtBQVI7QUFDTCxtQkFBTyxLQUFQLElBQWdCLEdBQUcsT0FBSCxDQUFoQjtXQURGLE1BRUEsQ0FBTyxNQUFQLEdBQWdCLEtBQWhCLENBUDRCO0FBUTVCLGlCQUFPLE1BQVAsQ0FSNEI7U0FBZCxFQUhsQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEYoKSB7fVxuICByZXR1cm4gIShBcnJheS5vZi5jYWxsKEYpIGluc3RhbmNlb2YgRik7XG59KSwgJ0FycmF5Jywge29mOiBmdW5jdGlvbiBvZigpIHtcbiAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICAgIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkoJCRsZW4pO1xuICAgIHdoaWxlICgkJGxlbiA+IGluZGV4KVxuICAgICAgcmVzdWx0W2luZGV4XSA9ICQkW2luZGV4KytdO1xuICAgIHJlc3VsdC5sZW5ndGggPSAkJGxlbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
