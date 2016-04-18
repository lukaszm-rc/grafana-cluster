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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5sb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osZUFBUyxRQUFRLFlBQVI7QUFDVCxnQkFBVSxRQUFRLFlBQVI7QUFDVixZQUFNO0FBQ04sZ0JBQVU7O0FBQ2QsUUFBRSxJQUFGLENBQU8sSUFBUCxDQUFZLENBQUMsdUZBQXVGLHlFQUF2RixHQUFtSyx3REFBbkssQ0FBRCxDQUE4TixLQUE5TixDQUFvTyxHQUFwTyxDQUFaLEVBQXNQLFVBQVMsR0FBVCxFQUFjO0FBQ2xRLFlBQUksR0FBSixJQUFXLFlBQVc7QUFDcEIsY0FBSSxXQUFXLE9BQU8sT0FBUCxDQURLO0FBRXBCLGNBQUksV0FBVyxRQUFYLElBQXVCLFNBQVMsR0FBVCxDQUF2QixFQUFzQztBQUN4QyxtQkFBTyxTQUFTLEtBQVQsQ0FBZSxJQUFmLENBQW9CLFNBQVMsR0FBVCxDQUFwQixFQUFtQyxRQUFuQyxFQUE2QyxTQUE3QyxDQUFQLENBRHdDO1dBQTFDO1NBRlMsQ0FEdVA7T0FBZCxDQUF0UDtBQVFBLGNBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEVBQVcsRUFBQyxLQUFLLFFBQVEsbUJBQVIsRUFBNkIsSUFBSSxHQUFKLEVBQVMsR0FBdEMsRUFBMkM7QUFDNUUsa0JBQVEsa0JBQVc7QUFDakIsc0JBQVUsSUFBVixDQURpQjtXQUFYO0FBR1IsbUJBQVMsbUJBQVc7QUFDbEIsc0JBQVUsS0FBVixDQURrQjtXQUFYO1NBSndCLENBQUwsRUFBaEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9jb3JlLmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBsb2cgPSB7fSxcbiAgICBlbmFibGVkID0gdHJ1ZTtcbiQuZWFjaC5jYWxsKCgnYXNzZXJ0LGNsZWFyLGNvdW50LGRlYnVnLGRpcixkaXJ4bWwsZXJyb3IsZXhjZXB0aW9uLGdyb3VwLGdyb3VwQ29sbGFwc2VkLGdyb3VwRW5kLCcgKyAnaW5mbyxpc0luZGVwZW5kZW50bHlDb21wb3NlZCxsb2csbWFya1RpbWVsaW5lLHByb2ZpbGUscHJvZmlsZUVuZCx0YWJsZSwnICsgJ3RpbWUsdGltZUVuZCx0aW1lbGluZSx0aW1lbGluZUVuZCx0aW1lU3RhbXAsdHJhY2Usd2FybicpLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGtleSkge1xuICBsb2dba2V5XSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkY29uc29sZSA9IGdsb2JhbC5jb25zb2xlO1xuICAgIGlmIChlbmFibGVkICYmICRjb25zb2xlICYmICRjb25zb2xlW2tleV0pIHtcbiAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseS5jYWxsKCRjb25zb2xlW2tleV0sICRjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn0pO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYsIHtsb2c6IHJlcXVpcmUoJy4vJC5vYmplY3QtYXNzaWduJykobG9nLmxvZywgbG9nLCB7XG4gICAgZW5hYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGVuYWJsZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgZGlzYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICB9KX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
