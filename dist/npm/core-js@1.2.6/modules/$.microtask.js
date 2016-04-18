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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5taWNyb3Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLFlBQUksU0FBUyxRQUFRLFlBQVIsQ0FBVDtZQUNBLFlBQVksUUFBUSxVQUFSLEVBQW9CLEdBQXBCO1lBQ1osV0FBVyxPQUFPLGdCQUFQLElBQTJCLE9BQU8sc0JBQVA7WUFDdEMsVUFBVSxPQUFPLE9BQVA7WUFDVixVQUFVLE9BQU8sT0FBUDtZQUNWLFNBQVMsUUFBUSxTQUFSLEVBQW1CLE9BQW5CLEtBQStCLFNBQS9CO1lBQ1QsSUFOSjtZQU9JLElBUEo7WUFRSSxNQVJKLENBRGlCO0FBVWpCLFlBQUksUUFBUSxTQUFSLEtBQVEsR0FBVztBQUNyQixjQUFJLE1BQUosRUFDSSxNQURKLEVBRUksRUFGSixDQURxQjtBQUlyQixjQUFJLFdBQVcsU0FBUyxRQUFRLE1BQVIsQ0FBcEIsRUFBcUM7QUFDdkMsb0JBQVEsTUFBUixHQUFpQixJQUFqQixDQUR1QztBQUV2QyxtQkFBTyxJQUFQLEdBRnVDO1dBQXpDO0FBSUEsaUJBQU8sSUFBUCxFQUFhO0FBQ1gscUJBQVMsS0FBSyxNQUFMLENBREU7QUFFWCxpQkFBSyxLQUFLLEVBQUwsQ0FGTTtBQUdYLGdCQUFJLE1BQUosRUFDRSxPQUFPLEtBQVAsR0FERjtBQUVBLGlCQUxXO0FBTVgsZ0JBQUksTUFBSixFQUNFLE9BQU8sSUFBUCxHQURGO0FBRUEsbUJBQU8sS0FBSyxJQUFMLENBUkk7V0FBYjtBQVVBLGlCQUFPLFNBQVAsQ0FsQnFCO0FBbUJyQixjQUFJLE1BQUosRUFDRSxPQUFPLEtBQVAsR0FERjtTQW5CVSxDQVZLO0FBZ0NqQixZQUFJLE1BQUosRUFBWTtBQUNWLG1CQUFTLGtCQUFXO0FBQ2xCLG9CQUFRLFFBQVIsQ0FBaUIsS0FBakIsRUFEa0I7V0FBWCxDQURDO1NBQVosTUFJTyxJQUFJLFFBQUosRUFBYztBQUNuQixjQUFJLFNBQVMsQ0FBVDtjQUNBLE9BQU8sU0FBUyxjQUFULENBQXdCLEVBQXhCLENBQVAsQ0FGZTtBQUduQixjQUFJLFFBQUosQ0FBYSxLQUFiLEVBQW9CLE9BQXBCLENBQTRCLElBQTVCLEVBQWtDLEVBQUMsZUFBZSxJQUFmLEVBQW5DLEVBSG1CO0FBSW5CLG1CQUFTLGtCQUFXO0FBQ2xCLGlCQUFLLElBQUwsR0FBWSxTQUFTLENBQUMsTUFBRCxDQURIO1dBQVgsQ0FKVTtTQUFkLE1BT0EsSUFBSSxXQUFXLFFBQVEsT0FBUixFQUFpQjtBQUNyQyxtQkFBUyxrQkFBVztBQUNsQixvQkFBUSxPQUFSLEdBQWtCLElBQWxCLENBQXVCLEtBQXZCLEVBRGtCO1dBQVgsQ0FENEI7U0FBaEMsTUFJQTtBQUNMLG1CQUFTLGtCQUFXO0FBQ2xCLHNCQUFVLElBQVYsQ0FBZSxNQUFmLEVBQXVCLEtBQXZCLEVBRGtCO1dBQVgsQ0FESjtTQUpBO0FBU1AsZUFBTyxPQUFQLEdBQWlCLFNBQVMsSUFBVCxDQUFjLEVBQWQsRUFBa0I7QUFDakMsY0FBSSxPQUFPO0FBQ1QsZ0JBQUksRUFBSjtBQUNBLGtCQUFNLFNBQU47QUFDQSxvQkFBUSxVQUFVLFFBQVEsTUFBUjtXQUhoQixDQUQ2QjtBQU1qQyxjQUFJLElBQUosRUFDRSxLQUFLLElBQUwsR0FBWSxJQUFaLENBREY7QUFFQSxjQUFJLENBQUMsSUFBRCxFQUFPO0FBQ1QsbUJBQU8sSUFBUCxDQURTO0FBRVQscUJBRlM7V0FBWDtBQUlBLGlCQUFPLElBQVAsQ0FaaUM7U0FBbEIsQ0FwREE7T0FBbEIsQ0FBRCxDQWtFRyxRQUFRLFNBQVIsQ0FsRUgiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLm1pY3JvdGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgdmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKSxcbiAgICAgIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vJC50YXNrJykuc2V0LFxuICAgICAgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixcbiAgICAgIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcyxcbiAgICAgIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZSxcbiAgICAgIGlzTm9kZSA9IHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycsXG4gICAgICBoZWFkLFxuICAgICAgbGFzdCxcbiAgICAgIG5vdGlmeTtcbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhcmVudCxcbiAgICAgICAgZG9tYWluLFxuICAgICAgICBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHtcbiAgICAgIHByb2Nlc3MuZG9tYWluID0gbnVsbDtcbiAgICAgIHBhcmVudC5leGl0KCk7XG4gICAgfVxuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBkb21haW4gPSBoZWFkLmRvbWFpbjtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGlmIChkb21haW4pXG4gICAgICAgIGRvbWFpbi5lbnRlcigpO1xuICAgICAgZm4oKTtcbiAgICAgIGlmIChkb21haW4pXG4gICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgIH1cbiAgICBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpXG4gICAgICBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChPYnNlcnZlcikge1xuICAgIHZhciB0b2dnbGUgPSAxLFxuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gLXRvZ2dsZTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzYXAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHtcbiAgICAgIGZuOiBmbixcbiAgICAgIG5leHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRvbWFpbjogaXNOb2RlICYmIHByb2Nlc3MuZG9tYWluXG4gICAgfTtcbiAgICBpZiAobGFzdClcbiAgICAgIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH1cbiAgICBsYXN0ID0gdGFzaztcbiAgfTtcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
