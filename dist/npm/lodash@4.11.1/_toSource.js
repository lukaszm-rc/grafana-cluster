'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var funcToString = Function.prototype.toString;
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }
        module.exports = toSource;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL190b1NvdXJjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE9BQVQsRUFBa0I7QUFDakIsWUFBSSxlQUFlLFNBQVMsU0FBVCxDQUFtQixRQUFuQixDQURGO0FBRWpCLGlCQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDdEIsY0FBSSxRQUFRLElBQVIsRUFBYztBQUNoQixnQkFBSTtBQUNGLHFCQUFPLGFBQWEsSUFBYixDQUFrQixJQUFsQixDQUFQLENBREU7YUFBSixDQUVFLE9BQU8sQ0FBUCxFQUFVLEVBQVY7QUFDRixnQkFBSTtBQUNGLHFCQUFRLE9BQU8sRUFBUCxDQUROO2FBQUosQ0FFRSxPQUFPLENBQVAsRUFBVSxFQUFWO1dBTko7QUFRQSxpQkFBTyxFQUFQLENBVHNCO1NBQXhCO0FBV0EsZUFBTyxPQUFQLEdBQWlCLFFBQWpCLENBYmlCO09BQWxCLENBQUQsQ0FjRyxRQUFRLFNBQVIsQ0FkSCIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fdG9Tb3VyY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gIHZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gIGZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIG1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
