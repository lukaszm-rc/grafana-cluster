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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5wYXJ0aWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGFBQU8sUUFBUSxVQUFSO0FBQ1AsZUFBUyxRQUFRLFlBQVI7QUFDVCxrQkFBWSxRQUFRLGdCQUFSOztBQUNoQixhQUFPLE9BQVAsR0FBaUIsWUFBVztBQUMxQixZQUFJLEtBQUssVUFBVSxJQUFWLENBQUw7WUFDQSxTQUFTLFVBQVUsTUFBVjtZQUNULFFBQVEsTUFBTSxNQUFOLENBQVI7WUFDQSxJQUFJLENBQUo7WUFDQSxJQUFJLEtBQUssQ0FBTDtZQUNKLFNBQVMsS0FBVCxDQU5zQjtBQU8xQixlQUFPLFNBQVMsQ0FBVDtBQUNMLGNBQUksQ0FBQyxNQUFNLENBQU4sSUFBVyxVQUFVLEdBQVYsQ0FBWCxDQUFELEtBQWdDLENBQWhDLEVBQ0YsU0FBUyxJQUFULENBREY7U0FERixPQUdPLFlBQVc7QUFDaEIsY0FBSSxPQUFPLElBQVA7Y0FDQSxLQUFLLFNBQUw7Y0FDQSxRQUFRLEdBQUcsTUFBSDtjQUNSLElBQUksQ0FBSjtjQUNBLElBQUksQ0FBSjtjQUNBLElBTEosQ0FEZ0I7QUFPaEIsY0FBSSxDQUFDLE1BQUQsSUFBVyxDQUFDLEtBQUQsRUFDYixPQUFPLE9BQU8sRUFBUCxFQUFXLEtBQVgsRUFBa0IsSUFBbEIsQ0FBUCxDQURGO0FBRUEsaUJBQU8sTUFBTSxLQUFOLEVBQVAsQ0FUZ0I7QUFVaEIsY0FBSSxNQUFKLEVBQ0UsT0FBTyxTQUFTLENBQVQsRUFBWSxHQUFuQjtBQUNFLGdCQUFJLEtBQUssQ0FBTCxNQUFZLENBQVosRUFDRixLQUFLLENBQUwsSUFBVSxHQUFHLEdBQUgsQ0FBVixDQURGO1dBREYsT0FHSyxRQUFRLENBQVI7QUFDTCxpQkFBSyxJQUFMLENBQVUsR0FBRyxHQUFILENBQVY7V0FERixPQUVPLE9BQU8sRUFBUCxFQUFXLElBQVgsRUFBaUIsSUFBakIsQ0FBUCxDQWhCZ0I7U0FBWCxDQVZtQjtPQUFYIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5wYXJ0aWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4vJC5wYXRoJyksXG4gICAgaW52b2tlID0gcmVxdWlyZSgnLi8kLmludm9rZScpLFxuICAgIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyksXG4gICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgcGFyZ3MgPSBBcnJheShsZW5ndGgpLFxuICAgICAgaSA9IDAsXG4gICAgICBfID0gcGF0aC5fLFxuICAgICAgaG9sZGVyID0gZmFsc2U7XG4gIHdoaWxlIChsZW5ndGggPiBpKVxuICAgIGlmICgocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8pXG4gICAgICBob2xkZXIgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICAgIGogPSAwLFxuICAgICAgICBrID0gMCxcbiAgICAgICAgYXJncztcbiAgICBpZiAoIWhvbGRlciAmJiAhJCRsZW4pXG4gICAgICByZXR1cm4gaW52b2tlKGZuLCBwYXJncywgdGhhdCk7XG4gICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XG4gICAgaWYgKGhvbGRlcilcbiAgICAgIGZvciAoOyBsZW5ndGggPiBqOyBqKyspXG4gICAgICAgIGlmIChhcmdzW2pdID09PSBfKVxuICAgICAgICAgIGFyZ3Nbal0gPSAkJFtrKytdO1xuICAgIHdoaWxlICgkJGxlbiA+IGspXG4gICAgICBhcmdzLnB1c2goJCRbaysrXSk7XG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
