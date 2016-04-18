'use strict';

System.register([], function (_export, _context) {
    var process, queue, draining, currentQueue, queueIndex;


    function cleanUpNextTick() {
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = setTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        clearTimeout(timeout);
    }

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }


    function noop() {}

    return {
        setters: [],
        execute: function () {
            process = module.exports = {};
            queue = [];
            draining = false;
            queueIndex = -1;
            process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    setTimeout(drainQueue, 0);
                }
            };Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;

            process.binding = function (name) {
                throw new Error('process.binding is not supported');
            };

            process.cwd = function () {
                return '/';
            };
            process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function () {
                return 0;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9wcm9jZXNzQDAuMTEuMi9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLGFBQVMsZUFBVCxHQUEyQjtBQUN2QixtQkFBVyxLQUFYLENBRHVCO0FBRXZCLFlBQUksYUFBYSxNQUFiLEVBQXFCO0FBQ3JCLG9CQUFRLGFBQWEsTUFBYixDQUFvQixLQUFwQixDQUFSLENBRHFCO1NBQXpCLE1BRU87QUFDSCx5QkFBYSxDQUFDLENBQUQsQ0FEVjtTQUZQO0FBS0EsWUFBSSxNQUFNLE1BQU4sRUFBYztBQUNkLHlCQURjO1NBQWxCO0tBUEo7O0FBWUEsYUFBUyxVQUFULEdBQXNCO0FBQ2xCLFlBQUksUUFBSixFQUFjO0FBQ1YsbUJBRFU7U0FBZDtBQUdBLFlBQUksVUFBVSxXQUFXLGVBQVgsQ0FBVixDQUpjO0FBS2xCLG1CQUFXLElBQVgsQ0FMa0I7O0FBT2xCLFlBQUksTUFBTSxNQUFNLE1BQU4sQ0FQUTtBQVFsQixlQUFNLEdBQU4sRUFBVztBQUNQLDJCQUFlLEtBQWYsQ0FETztBQUVQLG9CQUFRLEVBQVIsQ0FGTztBQUdQLG1CQUFPLEVBQUUsVUFBRixHQUFlLEdBQWYsRUFBb0I7QUFDdkIsb0JBQUksWUFBSixFQUFrQjtBQUNkLGlDQUFhLFVBQWIsRUFBeUIsR0FBekIsR0FEYztpQkFBbEI7YUFESjtBQUtBLHlCQUFhLENBQUMsQ0FBRCxDQVJOO0FBU1Asa0JBQU0sTUFBTSxNQUFOLENBVEM7U0FBWDtBQVdBLHVCQUFlLElBQWYsQ0FuQmtCO0FBb0JsQixtQkFBVyxLQUFYLENBcEJrQjtBQXFCbEIscUJBQWEsT0FBYixFQXJCa0I7S0FBdEI7OztBQXNDQSxhQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CLEtBQW5CLEVBQTBCO0FBQ3RCLGFBQUssR0FBTCxHQUFXLEdBQVgsQ0FEc0I7QUFFdEIsYUFBSyxLQUFMLEdBQWEsS0FBYixDQUZzQjtLQUExQjs7O0FBY0EsYUFBUyxJQUFULEdBQWdCLEVBQWhCOzs7OztBQXRFSSxzQkFBVSxPQUFPLE9BQVAsR0FBaUIsRUFBakI7QUFDVixvQkFBUTtBQUNSLHVCQUFXO0FBRVgseUJBQWEsQ0FBQyxDQUFEO0FBc0NqQixvQkFBUSxRQUFSLEdBQW1CLFVBQVUsR0FBVixFQUFlO0FBQzlCLG9CQUFJLE9BQU8sSUFBSSxLQUFKLENBQVUsVUFBVSxNQUFWLEdBQW1CLENBQW5CLENBQWpCLENBRDBCO0FBRTlCLG9CQUFJLFVBQVUsTUFBVixHQUFtQixDQUFuQixFQUFzQjtBQUN0Qix5QkFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksVUFBVSxNQUFWLEVBQWtCLEdBQXRDLEVBQTJDO0FBQ3ZDLDZCQUFLLElBQUksQ0FBSixDQUFMLEdBQWMsVUFBVSxDQUFWLENBQWQsQ0FEdUM7cUJBQTNDO2lCQURKO0FBS0Esc0JBQU0sSUFBTixDQUFXLElBQUksSUFBSixDQUFTLEdBQVQsRUFBYyxJQUFkLENBQVgsRUFQOEI7QUFROUIsb0JBQUksTUFBTSxNQUFOLEtBQWlCLENBQWpCLElBQXNCLENBQUMsUUFBRCxFQUFXO0FBQ2pDLCtCQUFXLFVBQVgsRUFBdUIsQ0FBdkIsRUFEaUM7aUJBQXJDO2FBUmUsQ0FrQm5CLEtBQUssU0FBTCxDQUFlLEdBQWYsR0FBcUIsWUFBWTtBQUM3QixxQkFBSyxHQUFMLENBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUIsS0FBSyxLQUFMLENBQXJCLENBRDZCO2FBQVo7QUFHckIsb0JBQVEsS0FBUixHQUFnQixTQUFoQjtBQUNBLG9CQUFRLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxvQkFBUSxHQUFSLEdBQWMsRUFBZDtBQUNBLG9CQUFRLElBQVIsR0FBZSxFQUFmO0FBQ0Esb0JBQVEsT0FBUixHQUFrQixFQUFsQjtBQUNBLG9CQUFRLFFBQVIsR0FBbUIsRUFBbkIsQ0FJQSxRQUFRLEVBQVIsR0FBYSxJQUFiO0FBQ0Esb0JBQVEsV0FBUixHQUFzQixJQUF0QjtBQUNBLG9CQUFRLElBQVIsR0FBZSxJQUFmO0FBQ0Esb0JBQVEsR0FBUixHQUFjLElBQWQ7QUFDQSxvQkFBUSxjQUFSLEdBQXlCLElBQXpCO0FBQ0Esb0JBQVEsa0JBQVIsR0FBNkIsSUFBN0I7QUFDQSxvQkFBUSxJQUFSLEdBQWUsSUFBZjs7QUFFQSxvQkFBUSxPQUFSLEdBQWtCLFVBQVUsSUFBVixFQUFnQjtBQUM5QixzQkFBTSxJQUFJLEtBQUosQ0FBVSxrQ0FBVixDQUFOLENBRDhCO2FBQWhCOztBQUlsQixvQkFBUSxHQUFSLEdBQWMsWUFBWTtBQUFFLHVCQUFPLEdBQVAsQ0FBRjthQUFaO0FBQ2Qsb0JBQVEsS0FBUixHQUFnQixVQUFVLEdBQVYsRUFBZTtBQUMzQixzQkFBTSxJQUFJLEtBQUosQ0FBVSxnQ0FBVixDQUFOLENBRDJCO2FBQWY7QUFHaEIsb0JBQVEsS0FBUixHQUFnQixZQUFXO0FBQUUsdUJBQU8sQ0FBUCxDQUFGO2FBQVgiLCJmaWxlIjoibnBtL3Byb2Nlc3NAMC4xMS4yL2Jyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
