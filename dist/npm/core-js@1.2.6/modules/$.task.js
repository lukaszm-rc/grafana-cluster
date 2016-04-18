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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC50YXNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixZQUFJLE1BQU0sUUFBUSxTQUFSLENBQU47WUFDQSxTQUFTLFFBQVEsWUFBUixDQUFUO1lBQ0EsT0FBTyxRQUFRLFVBQVIsQ0FBUDtZQUNBLE1BQU0sUUFBUSxnQkFBUixDQUFOO1lBQ0EsU0FBUyxRQUFRLFlBQVIsQ0FBVDtZQUNBLFVBQVUsT0FBTyxPQUFQO1lBQ1YsVUFBVSxPQUFPLFlBQVA7WUFDVixZQUFZLE9BQU8sY0FBUDtZQUNaLGlCQUFpQixPQUFPLGNBQVA7WUFDakIsVUFBVSxDQUFWO1lBQ0EsUUFBUSxFQUFSO1lBQ0EscUJBQXFCLG9CQUFyQjtZQUNBLEtBWko7WUFhSSxPQWJKO1lBY0ksSUFkSixDQURpQjtBQWdCakIsWUFBSSxNQUFNLFNBQU4sR0FBTSxHQUFXO0FBQ25CLGNBQUksS0FBSyxDQUFDLElBQUQsQ0FEVTtBQUVuQixjQUFJLE1BQU0sY0FBTixDQUFxQixFQUFyQixDQUFKLEVBQThCO0FBQzVCLGdCQUFJLEtBQUssTUFBTSxFQUFOLENBQUwsQ0FEd0I7QUFFNUIsbUJBQU8sTUFBTSxFQUFOLENBQVAsQ0FGNEI7QUFHNUIsaUJBSDRCO1dBQTlCO1NBRlEsQ0FoQk87QUF3QmpCLFlBQUksVUFBVSxTQUFWLE9BQVUsQ0FBUyxLQUFULEVBQWdCO0FBQzVCLGNBQUksSUFBSixDQUFTLE1BQU0sSUFBTixDQUFULENBRDRCO1NBQWhCLENBeEJHO0FBMkJqQixZQUFJLENBQUMsT0FBRCxJQUFZLENBQUMsU0FBRCxFQUFZO0FBQzFCLG9CQUFVLFNBQVMsWUFBVCxDQUFzQixFQUF0QixFQUEwQjtBQUNsQyxnQkFBSSxPQUFPLEVBQVA7Z0JBQ0EsSUFBSSxDQUFKLENBRjhCO0FBR2xDLG1CQUFPLFVBQVUsTUFBVixHQUFtQixDQUFuQjtBQUNMLG1CQUFLLElBQUwsQ0FBVSxVQUFVLEdBQVYsQ0FBVjthQURGLEtBRUEsQ0FBTSxFQUFFLE9BQUYsQ0FBTixHQUFtQixZQUFXO0FBQzVCLHFCQUFPLE9BQU8sRUFBUCxJQUFhLFVBQWIsR0FBMEIsRUFBMUIsR0FBK0IsU0FBUyxFQUFULENBQS9CLEVBQTZDLElBQXBELEVBRDRCO2FBQVgsQ0FMZTtBQVFsQyxrQkFBTSxPQUFOLEVBUmtDO0FBU2xDLG1CQUFPLE9BQVAsQ0FUa0M7V0FBMUIsQ0FEZ0I7QUFZMUIsc0JBQVksU0FBUyxjQUFULENBQXdCLEVBQXhCLEVBQTRCO0FBQ3RDLG1CQUFPLE1BQU0sRUFBTixDQUFQLENBRHNDO1dBQTVCLENBWmM7QUFlMUIsY0FBSSxRQUFRLFNBQVIsRUFBbUIsT0FBbkIsS0FBK0IsU0FBL0IsRUFBMEM7QUFDNUMsb0JBQVEsZUFBUyxFQUFULEVBQWE7QUFDbkIsc0JBQVEsUUFBUixDQUFpQixJQUFJLEdBQUosRUFBUyxFQUFULEVBQWEsQ0FBYixDQUFqQixFQURtQjthQUFiLENBRG9DO1dBQTlDLE1BSU8sSUFBSSxjQUFKLEVBQW9CO0FBQ3pCLHNCQUFVLElBQUksY0FBSixFQUFWLENBRHlCO0FBRXpCLG1CQUFPLFFBQVEsS0FBUixDQUZrQjtBQUd6QixvQkFBUSxLQUFSLENBQWMsU0FBZCxHQUEwQixPQUExQixDQUh5QjtBQUl6QixvQkFBUSxJQUFJLEtBQUssV0FBTCxFQUFrQixJQUF0QixFQUE0QixDQUE1QixDQUFSLENBSnlCO1dBQXBCLE1BS0EsSUFBSSxPQUFPLGdCQUFQLElBQTJCLE9BQU8sV0FBUCxJQUFzQixVQUF0QixJQUFvQyxDQUFDLE9BQU8sYUFBUCxFQUFzQjtBQUMvRixvQkFBUSxlQUFTLEVBQVQsRUFBYTtBQUNuQixxQkFBTyxXQUFQLENBQW1CLEtBQUssRUFBTCxFQUFTLEdBQTVCLEVBRG1CO2FBQWIsQ0FEdUY7QUFJL0YsbUJBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsT0FBbkMsRUFBNEMsS0FBNUMsRUFKK0Y7V0FBMUYsTUFLQSxJQUFJLHNCQUFzQixJQUFJLFFBQUosQ0FBdEIsRUFBcUM7QUFDOUMsb0JBQVEsZUFBUyxFQUFULEVBQWE7QUFDbkIsbUJBQUssV0FBTCxDQUFpQixJQUFJLFFBQUosQ0FBakIsRUFBZ0Msa0JBQWhDLElBQXNELFlBQVc7QUFDL0QscUJBQUssV0FBTCxDQUFpQixJQUFqQixFQUQrRDtBQUUvRCxvQkFBSSxJQUFKLENBQVMsRUFBVCxFQUYrRDtlQUFYLENBRG5DO2FBQWIsQ0FEc0M7V0FBekMsTUFPQTtBQUNMLG9CQUFRLGVBQVMsRUFBVCxFQUFhO0FBQ25CLHlCQUFXLElBQUksR0FBSixFQUFTLEVBQVQsRUFBYSxDQUFiLENBQVgsRUFBNEIsQ0FBNUIsRUFEbUI7YUFBYixDQURIO1dBUEE7U0E3QlQ7QUEwQ0EsZUFBTyxPQUFQLEdBQWlCO0FBQ2YsZUFBSyxPQUFMO0FBQ0EsaUJBQU8sU0FBUDtTQUZGLENBckVpQjtPQUFsQixDQUFELENBeUVHLFFBQVEsU0FBUixDQXpFSCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQudGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgdmFyIGN0eCA9IHJlcXVpcmUoJy4vJC5jdHgnKSxcbiAgICAgIGludm9rZSA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKSxcbiAgICAgIGh0bWwgPSByZXF1aXJlKCcuLyQuaHRtbCcpLFxuICAgICAgY2VsID0gcmVxdWlyZSgnLi8kLmRvbS1jcmVhdGUnKSxcbiAgICAgIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKSxcbiAgICAgIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcyxcbiAgICAgIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlLFxuICAgICAgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlLFxuICAgICAgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWwsXG4gICAgICBjb3VudGVyID0gMCxcbiAgICAgIHF1ZXVlID0ge30sXG4gICAgICBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJyxcbiAgICAgIGRlZmVyLFxuICAgICAgY2hhbm5lbCxcbiAgICAgIHBvcnQ7XG4gIHZhciBydW4gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWQgPSArdGhpcztcbiAgICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH07XG4gIHZhciBsaXN0bmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBydW4uY2FsbChldmVudC5kYXRhKTtcbiAgfTtcbiAgaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLFxuICAgICAgICAgIGkgPSAxO1xuICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKVxuICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgICB9O1xuICAgICAgZGVmZXIoY291bnRlcik7XG4gICAgICByZXR1cm4gY291bnRlcjtcbiAgICB9O1xuICAgIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIH07XG4gICAgaWYgKHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RuZXI7XG4gICAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgZGVmZXIgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICAgIH07XG4gICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RuZXIsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmZXIgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzZXQ6IHNldFRhc2ssXG4gICAgY2xlYXI6IGNsZWFyVGFza1xuICB9O1xufSkocmVxdWlyZSgncHJvY2VzcycpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
