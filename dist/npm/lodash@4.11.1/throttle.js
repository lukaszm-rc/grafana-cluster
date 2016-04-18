'use strict';

System.register([], function (_export, _context) {
  var debounce, isObject, FUNC_ERROR_TEXT;

  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }
  return {
    setters: [],
    execute: function () {
      debounce = require('./debounce');
      isObject = require('./isObject');
      FUNC_ERROR_TEXT = 'Expected a function';
      module.exports = throttle;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3Rocm90dGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE9BQTlCLEVBQXVDO0FBQ3JDLFFBQUksVUFBVSxJQUFWO1FBQ0EsV0FBVyxJQUFYLENBRmlDO0FBR3JDLFFBQUksT0FBTyxJQUFQLElBQWUsVUFBZixFQUEyQjtBQUM3QixZQUFNLElBQUksU0FBSixDQUFjLGVBQWQsQ0FBTixDQUQ2QjtLQUEvQjtBQUdBLFFBQUksU0FBUyxPQUFULENBQUosRUFBdUI7QUFDckIsZ0JBQVUsYUFBYSxPQUFiLEdBQXVCLENBQUMsQ0FBQyxRQUFRLE9BQVIsR0FBa0IsT0FBM0MsQ0FEVztBQUVyQixpQkFBVyxjQUFjLE9BQWQsR0FBd0IsQ0FBQyxDQUFDLFFBQVEsUUFBUixHQUFtQixRQUE3QyxDQUZVO0tBQXZCO0FBSUEsV0FBTyxTQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCO0FBQzFCLGlCQUFXLE9BQVg7QUFDQSxpQkFBVyxJQUFYO0FBQ0Esa0JBQVksUUFBWjtLQUhLLENBQVAsQ0FWcUM7R0FBdkM7Ozs7QUFISSxpQkFBVyxRQUFRLFlBQVI7QUFDWCxpQkFBVyxRQUFRLFlBQVI7QUFDWCx3QkFBa0I7QUFpQnRCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90aHJvdHRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
