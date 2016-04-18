'use strict';

System.register([], function (_export, _context) {
  var $, global, $export, log, enabled;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      global = require('./$.global');
      $export = require('./$.export');
      log = {};
      enabled = true;

      $.each.call(('assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,' + 'info,isIndependentlyComposed,log,markTimeline,profile,profileEnd,table,' + 'time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(','), function (key) {
        log[key] = function () {
          var $console = global.console;
          if (enabled && $console && $console[key]) {
            return Function.apply.call($console[key], $console, arguments);
          }
        };
      });
      $export($export.G + $export.F, { log: require('./$.object-assign')(log.log, log, {
          enable: function enable() {
            enabled = true;
          },
          disable: function disable() {
            enabled = false;
          }
        }) });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksVUFBSSxRQUFRLEtBQVI7QUFDSixlQUFTLFFBQVEsWUFBUjtBQUNULGdCQUFVLFFBQVEsWUFBUjtBQUNWLFlBQU07QUFDTixnQkFBVTs7QUFDZCxRQUFFLElBQUYsQ0FBTyxJQUFQLENBQVksQ0FBQyx1RkFBdUYseUVBQXZGLEdBQW1LLHdEQUFuSyxDQUFELENBQThOLEtBQTlOLENBQW9PLEdBQXBPLENBQVosRUFBc1AsVUFBUyxHQUFULEVBQWM7QUFDbFEsWUFBSSxHQUFKLElBQVcsWUFBVztBQUNwQixjQUFJLFdBQVcsT0FBTyxPQUFQLENBREs7QUFFcEIsY0FBSSxXQUFXLFFBQVgsSUFBdUIsU0FBUyxHQUFULENBQXZCLEVBQXNDO0FBQ3hDLG1CQUFPLFNBQVMsS0FBVCxDQUFlLElBQWYsQ0FBb0IsU0FBUyxHQUFULENBQXBCLEVBQW1DLFFBQW5DLEVBQTZDLFNBQTdDLENBQVAsQ0FEd0M7V0FBMUM7U0FGUyxDQUR1UDtPQUFkLENBQXRQO0FBUUEsY0FBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsRUFBVyxFQUFDLEtBQUssUUFBUSxtQkFBUixFQUE2QixJQUFJLEdBQUosRUFBUyxHQUF0QyxFQUEyQztBQUM1RSxrQkFBUSxrQkFBVztBQUNqQixzQkFBVSxJQUFWLENBRGlCO1dBQVg7QUFHUixtQkFBUyxtQkFBVztBQUNsQixzQkFBVSxLQUFWLENBRGtCO1dBQVg7U0FKd0IsQ0FBTCxFQUFoQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvY29yZS5sb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgbG9nID0ge30sXG4gICAgZW5hYmxlZCA9IHRydWU7XG4kLmVhY2guY2FsbCgoJ2Fzc2VydCxjbGVhcixjb3VudCxkZWJ1ZyxkaXIsZGlyeG1sLGVycm9yLGV4Y2VwdGlvbixncm91cCxncm91cENvbGxhcHNlZCxncm91cEVuZCwnICsgJ2luZm8saXNJbmRlcGVuZGVudGx5Q29tcG9zZWQsbG9nLG1hcmtUaW1lbGluZSxwcm9maWxlLHByb2ZpbGVFbmQsdGFibGUsJyArICd0aW1lLHRpbWVFbmQsdGltZWxpbmUsdGltZWxpbmVFbmQsdGltZVN0YW1wLHRyYWNlLHdhcm4nKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpIHtcbiAgbG9nW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcbiAgICBpZiAoZW5hYmxlZCAmJiAkY29uc29sZSAmJiAkY29uc29sZVtrZXldKSB7XG4gICAgICByZXR1cm4gRnVuY3Rpb24uYXBwbHkuY2FsbCgkY29uc29sZVtrZXldLCAkY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59KTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GLCB7bG9nOiByZXF1aXJlKCcuLyQub2JqZWN0LWFzc2lnbicpKGxvZy5sb2csIGxvZywge1xuICAgIGVuYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSl9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
