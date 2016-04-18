'use strict';

System.register([], function (_export, _context) {
  var isArray, isFunction;

  function isFlattenableIteratee(value) {
    return isArray(value) && !(value.length == 2 && !isFunction(value[0]));
  }
  return {
    setters: [],
    execute: function () {
      isArray = require('./isArray');
      isFunction = require('./isFunction');
      module.exports = isFlattenableIteratee;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc0ZsYXR0ZW5hYmxlSXRlcmF0ZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLHFCQUFULENBQStCLEtBQS9CLEVBQXNDO0FBQ3BDLFdBQU8sUUFBUSxLQUFSLEtBQWtCLEVBQUUsTUFBTSxNQUFOLElBQWdCLENBQWhCLElBQXFCLENBQUMsV0FBVyxNQUFNLENBQU4sQ0FBWCxDQUFELENBQXZCLENBRFc7R0FBdEM7Ozs7QUFGSSxnQkFBVSxRQUFRLFdBQVI7QUFDVixtQkFBYSxRQUFRLGNBQVI7QUFJakIsYUFBTyxPQUFQLEdBQWlCLHFCQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9faXNGbGF0dGVuYWJsZUl0ZXJhdGVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKTtcbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGVJdGVyYXRlZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgJiYgISh2YWx1ZS5sZW5ndGggPT0gMiAmJiAhaXNGdW5jdGlvbih2YWx1ZVswXSkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlSXRlcmF0ZWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
