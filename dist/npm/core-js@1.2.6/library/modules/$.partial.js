/* */
'use strict';

System.register([], function (_export, _context) {
  var path, invoke, aFunction;
  return {
    setters: [],
    execute: function () {
      path = require('./$.path');
      invoke = require('./$.invoke');
      aFunction = require('./$.a-function');

      module.exports = function () {
        var fn = aFunction(this),
            length = arguments.length,
            pargs = Array(length),
            i = 0,
            _ = path._,
            holder = false;
        while (length > i) {
          if ((pargs[i] = arguments[i++]) === _) holder = true;
        }return function () {
          var that = this,
              $$ = arguments,
              $$len = $$.length,
              j = 0,
              k = 0,
              args;
          if (!holder && !$$len) return invoke(fn, pargs, that);
          args = pargs.slice();
          if (holder) for (; length > j; j++) {
            if (args[j] === _) args[j] = $$[k++];
          }while ($$len > k) {
            args.push($$[k++]);
          }return invoke(fn, args, that);
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnBhcnRpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksYUFBTyxRQUFRLFVBQVI7QUFDUCxlQUFTLFFBQVEsWUFBUjtBQUNULGtCQUFZLFFBQVEsZ0JBQVI7O0FBQ2hCLGFBQU8sT0FBUCxHQUFpQixZQUFXO0FBQzFCLFlBQUksS0FBSyxVQUFVLElBQVYsQ0FBTDtZQUNBLFNBQVMsVUFBVSxNQUFWO1lBQ1QsUUFBUSxNQUFNLE1BQU4sQ0FBUjtZQUNBLElBQUksQ0FBSjtZQUNBLElBQUksS0FBSyxDQUFMO1lBQ0osU0FBUyxLQUFULENBTnNCO0FBTzFCLGVBQU8sU0FBUyxDQUFUO0FBQ0wsY0FBSSxDQUFDLE1BQU0sQ0FBTixJQUFXLFVBQVUsR0FBVixDQUFYLENBQUQsS0FBZ0MsQ0FBaEMsRUFDRixTQUFTLElBQVQsQ0FERjtTQURGLE9BR08sWUFBVztBQUNoQixjQUFJLE9BQU8sSUFBUDtjQUNBLEtBQUssU0FBTDtjQUNBLFFBQVEsR0FBRyxNQUFIO2NBQ1IsSUFBSSxDQUFKO2NBQ0EsSUFBSSxDQUFKO2NBQ0EsSUFMSixDQURnQjtBQU9oQixjQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsS0FBRCxFQUNiLE9BQU8sT0FBTyxFQUFQLEVBQVcsS0FBWCxFQUFrQixJQUFsQixDQUFQLENBREY7QUFFQSxpQkFBTyxNQUFNLEtBQU4sRUFBUCxDQVRnQjtBQVVoQixjQUFJLE1BQUosRUFDRSxPQUFPLFNBQVMsQ0FBVCxFQUFZLEdBQW5CO0FBQ0UsZ0JBQUksS0FBSyxDQUFMLE1BQVksQ0FBWixFQUNGLEtBQUssQ0FBTCxJQUFVLEdBQUcsR0FBSCxDQUFWLENBREY7V0FERixPQUdLLFFBQVEsQ0FBUjtBQUNMLGlCQUFLLElBQUwsQ0FBVSxHQUFHLEdBQUgsQ0FBVjtXQURGLE9BRU8sT0FBTyxFQUFQLEVBQVcsSUFBWCxFQUFpQixJQUFqQixDQUFQLENBaEJnQjtTQUFYLENBVm1CO09BQVgiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQucGFydGlhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLyQucGF0aCcpLFxuICAgIGludm9rZSA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKSxcbiAgICBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGZuID0gYUZ1bmN0aW9uKHRoaXMpLFxuICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIHBhcmdzID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIGkgPSAwLFxuICAgICAgXyA9IHBhdGguXyxcbiAgICAgIGhvbGRlciA9IGZhbHNlO1xuICB3aGlsZSAobGVuZ3RoID4gaSlcbiAgICBpZiAoKHBhcmdzW2ldID0gYXJndW1lbnRzW2krK10pID09PSBfKVxuICAgICAgaG9sZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICAgICQkbGVuID0gJCQubGVuZ3RoLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgayA9IDAsXG4gICAgICAgIGFyZ3M7XG4gICAgaWYgKCFob2xkZXIgJiYgISQkbGVuKVxuICAgICAgcmV0dXJuIGludm9rZShmbiwgcGFyZ3MsIHRoYXQpO1xuICAgIGFyZ3MgPSBwYXJncy5zbGljZSgpO1xuICAgIGlmIChob2xkZXIpXG4gICAgICBmb3IgKDsgbGVuZ3RoID4gajsgaisrKVxuICAgICAgICBpZiAoYXJnc1tqXSA9PT0gXylcbiAgICAgICAgICBhcmdzW2pdID0gJCRbaysrXTtcbiAgICB3aGlsZSAoJCRsZW4gPiBrKVxuICAgICAgYXJncy5wdXNoKCQkW2srK10pO1xuICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
