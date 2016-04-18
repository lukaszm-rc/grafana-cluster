'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      module.exports = !require('./$.fails')(function () {
        return Object.defineProperty({}, 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxhQUFPLE9BQVAsR0FBaUIsQ0FBQyxRQUFRLFdBQVIsRUFBcUIsWUFBVztBQUNoRCxlQUFPLE9BQU8sY0FBUCxDQUFzQixFQUF0QixFQUEwQixHQUExQixFQUErQixFQUFDLEtBQUssZUFBVztBQUNuRCxtQkFBTyxDQUFQLENBRG1EO1dBQVgsRUFBckMsRUFFRCxDQUZDLElBRUksQ0FGSixDQUR5QztPQUFYLENBQXRCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiA3O1xuICAgIH19KS5hICE9IDc7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
