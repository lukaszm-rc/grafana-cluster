'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var ctx = require('./$.ctx'),
            invoke = require('./$.invoke'),
            html = require('./$.html'),
            cel = require('./$.dom-create'),
            global = require('./$.global'),
            process = global.process,
            setTask = global.setImmediate,
            clearTask = global.clearImmediate,
            MessageChannel = global.MessageChannel,
            counter = 0,
            queue = {},
            ONREADYSTATECHANGE = 'onreadystatechange',
            defer,
            channel,
            port;
        var run = function run() {
          var id = +this;
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var listner = function listner(event) {
          run.call(event.data);
        };
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [],
                i = 1;
            while (arguments.length > i) {
              args.push(arguments[i++]);
            }queue[++counter] = function () {
              invoke(typeof fn == 'function' ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          if (require('./$.cof')(process) == 'process') {
            defer = function defer(id) {
              process.nextTick(ctx(run, id, 1));
            };
          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listner;
            defer = ctx(port.postMessage, port, 1);
          } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
            defer = function defer(id) {
              global.postMessage(id + '', '*');
            };
            global.addEventListener('message', listner, false);
          } else if (ONREADYSTATECHANGE in cel('script')) {
            defer = function defer(id) {
              html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                html.removeChild(this);
                run.call(id);
              };
            };
          } else {
            defer = function defer(id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }
        module.exports = {
          set: setTask,
          clear: clearTask
        };
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLFlBQUksTUFBTSxRQUFRLFNBQVIsQ0FBTjtZQUNBLFNBQVMsUUFBUSxZQUFSLENBQVQ7WUFDQSxPQUFPLFFBQVEsVUFBUixDQUFQO1lBQ0EsTUFBTSxRQUFRLGdCQUFSLENBQU47WUFDQSxTQUFTLFFBQVEsWUFBUixDQUFUO1lBQ0EsVUFBVSxPQUFPLE9BQVA7WUFDVixVQUFVLE9BQU8sWUFBUDtZQUNWLFlBQVksT0FBTyxjQUFQO1lBQ1osaUJBQWlCLE9BQU8sY0FBUDtZQUNqQixVQUFVLENBQVY7WUFDQSxRQUFRLEVBQVI7WUFDQSxxQkFBcUIsb0JBQXJCO1lBQ0EsS0FaSjtZQWFJLE9BYko7WUFjSSxJQWRKLENBRGlCO0FBZ0JqQixZQUFJLE1BQU0sU0FBTixHQUFNLEdBQVc7QUFDbkIsY0FBSSxLQUFLLENBQUMsSUFBRCxDQURVO0FBRW5CLGNBQUksTUFBTSxjQUFOLENBQXFCLEVBQXJCLENBQUosRUFBOEI7QUFDNUIsZ0JBQUksS0FBSyxNQUFNLEVBQU4sQ0FBTCxDQUR3QjtBQUU1QixtQkFBTyxNQUFNLEVBQU4sQ0FBUCxDQUY0QjtBQUc1QixpQkFINEI7V0FBOUI7U0FGUSxDQWhCTztBQXdCakIsWUFBSSxVQUFVLFNBQVYsT0FBVSxDQUFTLEtBQVQsRUFBZ0I7QUFDNUIsY0FBSSxJQUFKLENBQVMsTUFBTSxJQUFOLENBQVQsQ0FENEI7U0FBaEIsQ0F4Qkc7QUEyQmpCLFlBQUksQ0FBQyxPQUFELElBQVksQ0FBQyxTQUFELEVBQVk7QUFDMUIsb0JBQVUsU0FBUyxZQUFULENBQXNCLEVBQXRCLEVBQTBCO0FBQ2xDLGdCQUFJLE9BQU8sRUFBUDtnQkFDQSxJQUFJLENBQUosQ0FGOEI7QUFHbEMsbUJBQU8sVUFBVSxNQUFWLEdBQW1CLENBQW5CO0FBQ0wsbUJBQUssSUFBTCxDQUFVLFVBQVUsR0FBVixDQUFWO2FBREYsS0FFQSxDQUFNLEVBQUUsT0FBRixDQUFOLEdBQW1CLFlBQVc7QUFDNUIscUJBQU8sT0FBTyxFQUFQLElBQWEsVUFBYixHQUEwQixFQUExQixHQUErQixTQUFTLEVBQVQsQ0FBL0IsRUFBNkMsSUFBcEQsRUFENEI7YUFBWCxDQUxlO0FBUWxDLGtCQUFNLE9BQU4sRUFSa0M7QUFTbEMsbUJBQU8sT0FBUCxDQVRrQztXQUExQixDQURnQjtBQVkxQixzQkFBWSxTQUFTLGNBQVQsQ0FBd0IsRUFBeEIsRUFBNEI7QUFDdEMsbUJBQU8sTUFBTSxFQUFOLENBQVAsQ0FEc0M7V0FBNUIsQ0FaYztBQWUxQixjQUFJLFFBQVEsU0FBUixFQUFtQixPQUFuQixLQUErQixTQUEvQixFQUEwQztBQUM1QyxvQkFBUSxlQUFTLEVBQVQsRUFBYTtBQUNuQixzQkFBUSxRQUFSLENBQWlCLElBQUksR0FBSixFQUFTLEVBQVQsRUFBYSxDQUFiLENBQWpCLEVBRG1CO2FBQWIsQ0FEb0M7V0FBOUMsTUFJTyxJQUFJLGNBQUosRUFBb0I7QUFDekIsc0JBQVUsSUFBSSxjQUFKLEVBQVYsQ0FEeUI7QUFFekIsbUJBQU8sUUFBUSxLQUFSLENBRmtCO0FBR3pCLG9CQUFRLEtBQVIsQ0FBYyxTQUFkLEdBQTBCLE9BQTFCLENBSHlCO0FBSXpCLG9CQUFRLElBQUksS0FBSyxXQUFMLEVBQWtCLElBQXRCLEVBQTRCLENBQTVCLENBQVIsQ0FKeUI7V0FBcEIsTUFLQSxJQUFJLE9BQU8sZ0JBQVAsSUFBMkIsT0FBTyxXQUFQLElBQXNCLFVBQXRCLElBQW9DLENBQUMsT0FBTyxhQUFQLEVBQXNCO0FBQy9GLG9CQUFRLGVBQVMsRUFBVCxFQUFhO0FBQ25CLHFCQUFPLFdBQVAsQ0FBbUIsS0FBSyxFQUFMLEVBQVMsR0FBNUIsRUFEbUI7YUFBYixDQUR1RjtBQUkvRixtQkFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxPQUFuQyxFQUE0QyxLQUE1QyxFQUorRjtXQUExRixNQUtBLElBQUksc0JBQXNCLElBQUksUUFBSixDQUF0QixFQUFxQztBQUM5QyxvQkFBUSxlQUFTLEVBQVQsRUFBYTtBQUNuQixtQkFBSyxXQUFMLENBQWlCLElBQUksUUFBSixDQUFqQixFQUFnQyxrQkFBaEMsSUFBc0QsWUFBVztBQUMvRCxxQkFBSyxXQUFMLENBQWlCLElBQWpCLEVBRCtEO0FBRS9ELG9CQUFJLElBQUosQ0FBUyxFQUFULEVBRitEO2VBQVgsQ0FEbkM7YUFBYixDQURzQztXQUF6QyxNQU9BO0FBQ0wsb0JBQVEsZUFBUyxFQUFULEVBQWE7QUFDbkIseUJBQVcsSUFBSSxHQUFKLEVBQVMsRUFBVCxFQUFhLENBQWIsQ0FBWCxFQUE0QixDQUE1QixFQURtQjthQUFiLENBREg7V0FQQTtTQTdCVDtBQTBDQSxlQUFPLE9BQVAsR0FBaUI7QUFDZixlQUFLLE9BQUw7QUFDQSxpQkFBTyxTQUFQO1NBRkYsQ0FyRWlCO09BQWxCLENBQUQsQ0F5RUcsUUFBUSxTQUFSLENBekVIIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnRhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gIHZhciBjdHggPSByZXF1aXJlKCcuLyQuY3R4JyksXG4gICAgICBpbnZva2UgPSByZXF1aXJlKCcuLyQuaW52b2tlJyksXG4gICAgICBodG1sID0gcmVxdWlyZSgnLi8kLmh0bWwnKSxcbiAgICAgIGNlbCA9IHJlcXVpcmUoJy4vJC5kb20tY3JlYXRlJyksXG4gICAgICBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgICBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3MsXG4gICAgICBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZSxcbiAgICAgIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZSxcbiAgICAgIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsLFxuICAgICAgY291bnRlciA9IDAsXG4gICAgICBxdWV1ZSA9IHt9LFxuICAgICAgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZScsXG4gICAgICBkZWZlcixcbiAgICAgIGNoYW5uZWwsXG4gICAgICBwb3J0O1xuICB2YXIgcnVuID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkID0gK3RoaXM7XG4gICAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9O1xuICB2YXIgbGlzdG5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG4gIH07XG4gIGlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gICAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgICBpID0gMTtcbiAgICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSlcbiAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgICAgfTtcbiAgICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgICAgcmV0dXJuIGNvdW50ZXI7XG4gICAgfTtcbiAgICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICB9O1xuICAgIGlmIChyZXF1aXJlKCcuLyQuY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0bmVyO1xuICAgICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gICAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgICB9O1xuICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0bmVyLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgICAgZGVmZXIgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2V0OiBzZXRUYXNrLFxuICAgIGNsZWFyOiBjbGVhclRhc2tcbiAgfTtcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
