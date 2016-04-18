'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var global = require('./$.global'),
            macrotask = require('./$.task').set,
            Observer = global.MutationObserver || global.WebKitMutationObserver,
            process = global.process,
            Promise = global.Promise,
            isNode = require('./$.cof')(process) == 'process',
            head,
            last,
            notify;
        var flush = function flush() {
          var parent, domain, fn;
          if (isNode && (parent = process.domain)) {
            process.domain = null;
            parent.exit();
          }
          while (head) {
            domain = head.domain;
            fn = head.fn;
            if (domain) domain.enter();
            fn();
            if (domain) domain.exit();
            head = head.next;
          }
          last = undefined;
          if (parent) parent.enter();
        };
        if (isNode) {
          notify = function notify() {
            process.nextTick(flush);
          };
        } else if (Observer) {
          var toggle = 1,
              node = document.createTextNode('');
          new Observer(flush).observe(node, { characterData: true });
          notify = function notify() {
            node.data = toggle = -toggle;
          };
        } else if (Promise && Promise.resolve) {
          notify = function notify() {
            Promise.resolve().then(flush);
          };
        } else {
          notify = function notify() {
            macrotask.call(global, flush);
          };
        }
        module.exports = function asap(fn) {
          var task = {
            fn: fn,
            next: undefined,
            domain: isNode && process.domain
          };
          if (last) last.next = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm1pY3JvdGFzay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE9BQVQsRUFBa0I7QUFDakIsWUFBSSxTQUFTLFFBQVEsWUFBUixDQUFUO1lBQ0EsWUFBWSxRQUFRLFVBQVIsRUFBb0IsR0FBcEI7WUFDWixXQUFXLE9BQU8sZ0JBQVAsSUFBMkIsT0FBTyxzQkFBUDtZQUN0QyxVQUFVLE9BQU8sT0FBUDtZQUNWLFVBQVUsT0FBTyxPQUFQO1lBQ1YsU0FBUyxRQUFRLFNBQVIsRUFBbUIsT0FBbkIsS0FBK0IsU0FBL0I7WUFDVCxJQU5KO1lBT0ksSUFQSjtZQVFJLE1BUkosQ0FEaUI7QUFVakIsWUFBSSxRQUFRLFNBQVIsS0FBUSxHQUFXO0FBQ3JCLGNBQUksTUFBSixFQUNJLE1BREosRUFFSSxFQUZKLENBRHFCO0FBSXJCLGNBQUksV0FBVyxTQUFTLFFBQVEsTUFBUixDQUFwQixFQUFxQztBQUN2QyxvQkFBUSxNQUFSLEdBQWlCLElBQWpCLENBRHVDO0FBRXZDLG1CQUFPLElBQVAsR0FGdUM7V0FBekM7QUFJQSxpQkFBTyxJQUFQLEVBQWE7QUFDWCxxQkFBUyxLQUFLLE1BQUwsQ0FERTtBQUVYLGlCQUFLLEtBQUssRUFBTCxDQUZNO0FBR1gsZ0JBQUksTUFBSixFQUNFLE9BQU8sS0FBUCxHQURGO0FBRUEsaUJBTFc7QUFNWCxnQkFBSSxNQUFKLEVBQ0UsT0FBTyxJQUFQLEdBREY7QUFFQSxtQkFBTyxLQUFLLElBQUwsQ0FSSTtXQUFiO0FBVUEsaUJBQU8sU0FBUCxDQWxCcUI7QUFtQnJCLGNBQUksTUFBSixFQUNFLE9BQU8sS0FBUCxHQURGO1NBbkJVLENBVks7QUFnQ2pCLFlBQUksTUFBSixFQUFZO0FBQ1YsbUJBQVMsa0JBQVc7QUFDbEIsb0JBQVEsUUFBUixDQUFpQixLQUFqQixFQURrQjtXQUFYLENBREM7U0FBWixNQUlPLElBQUksUUFBSixFQUFjO0FBQ25CLGNBQUksU0FBUyxDQUFUO2NBQ0EsT0FBTyxTQUFTLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBUCxDQUZlO0FBR25CLGNBQUksUUFBSixDQUFhLEtBQWIsRUFBb0IsT0FBcEIsQ0FBNEIsSUFBNUIsRUFBa0MsRUFBQyxlQUFlLElBQWYsRUFBbkMsRUFIbUI7QUFJbkIsbUJBQVMsa0JBQVc7QUFDbEIsaUJBQUssSUFBTCxHQUFZLFNBQVMsQ0FBQyxNQUFELENBREg7V0FBWCxDQUpVO1NBQWQsTUFPQSxJQUFJLFdBQVcsUUFBUSxPQUFSLEVBQWlCO0FBQ3JDLG1CQUFTLGtCQUFXO0FBQ2xCLG9CQUFRLE9BQVIsR0FBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsRUFEa0I7V0FBWCxDQUQ0QjtTQUFoQyxNQUlBO0FBQ0wsbUJBQVMsa0JBQVc7QUFDbEIsc0JBQVUsSUFBVixDQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFEa0I7V0FBWCxDQURKO1NBSkE7QUFTUCxlQUFPLE9BQVAsR0FBaUIsU0FBUyxJQUFULENBQWMsRUFBZCxFQUFrQjtBQUNqQyxjQUFJLE9BQU87QUFDVCxnQkFBSSxFQUFKO0FBQ0Esa0JBQU0sU0FBTjtBQUNBLG9CQUFRLFVBQVUsUUFBUSxNQUFSO1dBSGhCLENBRDZCO0FBTWpDLGNBQUksSUFBSixFQUNFLEtBQUssSUFBTCxHQUFZLElBQVosQ0FERjtBQUVBLGNBQUksQ0FBQyxJQUFELEVBQU87QUFDVCxtQkFBTyxJQUFQLENBRFM7QUFFVCxxQkFGUztXQUFYO0FBSUEsaUJBQU8sSUFBUCxDQVppQztTQUFsQixDQXBEQTtPQUFsQixDQUFELENBa0VHLFFBQVEsU0FBUixDQWxFSCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5taWNyb3Rhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gIHZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgICBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLyQudGFzaycpLnNldCxcbiAgICAgIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsXG4gICAgICBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3MsXG4gICAgICBQcm9taXNlID0gZ2xvYmFsLlByb21pc2UsXG4gICAgICBpc05vZGUgPSByZXF1aXJlKCcuLyQuY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnLFxuICAgICAgaGVhZCxcbiAgICAgIGxhc3QsXG4gICAgICBub3RpZnk7XG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXJlbnQsXG4gICAgICAgIGRvbWFpbixcbiAgICAgICAgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSB7XG4gICAgICBwcm9jZXNzLmRvbWFpbiA9IG51bGw7XG4gICAgICBwYXJlbnQuZXhpdCgpO1xuICAgIH1cbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZG9tYWluID0gaGVhZC5kb21haW47XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBpZiAoZG9tYWluKVxuICAgICAgICBkb21haW4uZW50ZXIoKTtcbiAgICAgIGZuKCk7XG4gICAgICBpZiAoZG9tYWluKVxuICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICB9XG4gICAgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KVxuICAgICAgcGFyZW50LmVudGVyKCk7XG4gIH07XG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gMSxcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9IC10b2dnbGU7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc2FwKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7XG4gICAgICBmbjogZm4sXG4gICAgICBuZXh0OiB1bmRlZmluZWQsXG4gICAgICBkb21haW46IGlzTm9kZSAmJiBwcm9jZXNzLmRvbWFpblxuICAgIH07XG4gICAgaWYgKGxhc3QpXG4gICAgICBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9XG4gICAgbGFzdCA9IHRhc2s7XG4gIH07XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
