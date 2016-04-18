'use strict';

System.register([], function (_export, _context) {
  var global, $export, invoke, partial, navigator, MSIE, wrap;
  return {
    setters: [],
    execute: function () {
      global = require('./$.global');
      $export = require('./$.export');
      invoke = require('./$.invoke');
      partial = require('./$.partial');
      navigator = global.navigator;
      MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent);

      wrap = function wrap(set) {
        return MSIE ? function (fn, time) {
          return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
        } : set;
      };

      $export($export.G + $export.B + $export.F * MSIE, {
        setTimeout: wrap(global.setTimeout),
        setInterval: wrap(global.setInterval)
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxlQUFTLFFBQVEsWUFBUjtBQUNULGdCQUFVLFFBQVEsWUFBUjtBQUNWLGVBQVMsUUFBUSxZQUFSO0FBQ1QsZ0JBQVUsUUFBUSxhQUFSO0FBQ1Ysa0JBQVksT0FBTyxTQUFQO0FBQ1osYUFBTyxDQUFDLENBQUMsU0FBRCxJQUFjLFdBQVcsSUFBWCxDQUFnQixVQUFVLFNBQVYsQ0FBL0I7O0FBQ1AsYUFBTyxTQUFQLElBQU8sQ0FBUyxHQUFULEVBQWM7QUFDdkIsZUFBTyxPQUFPLFVBQVMsRUFBVCxFQUFhLElBQWIsRUFBbUI7QUFDL0IsaUJBQU8sSUFBSSxPQUFPLE9BQVAsRUFBZ0IsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLFNBQWQsRUFBeUIsQ0FBekIsQ0FBaEIsRUFBNkMsT0FBTyxFQUFQLElBQWEsVUFBYixHQUEwQixFQUExQixHQUErQixTQUFTLEVBQVQsQ0FBL0IsQ0FBakQsRUFBK0YsSUFBL0YsQ0FBUCxDQUQrQjtTQUFuQixHQUVWLEdBRkcsQ0FEZ0I7T0FBZDs7QUFLWCxjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLElBQVosRUFBa0I7QUFDaEQsb0JBQVksS0FBSyxPQUFPLFVBQVAsQ0FBakI7QUFDQSxxQkFBYSxLQUFLLE9BQU8sV0FBUCxDQUFsQjtPQUZGIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgaW52b2tlID0gcmVxdWlyZSgnLi8kLmludm9rZScpLFxuICAgIHBhcnRpYWwgPSByZXF1aXJlKCcuLyQucGFydGlhbCcpLFxuICAgIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3IsXG4gICAgTVNJRSA9ICEhbmF2aWdhdG9yICYmIC9NU0lFIC5cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgd3JhcCA9IGZ1bmN0aW9uKHNldCkge1xuICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uKGZuLCB0aW1lKSB7XG4gICAgcmV0dXJuIHNldChpbnZva2UocGFydGlhbCwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLCB0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKSwgdGltZSk7XG4gIH0gOiBzZXQ7XG59O1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIgKyAkZXhwb3J0LkYgKiBNU0lFLCB7XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
