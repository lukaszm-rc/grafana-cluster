'use strict';

System.register([], function (_export, _context) {
  var classof, ITERATOR, Iterators;
  return {
    setters: [],
    execute: function () {
      classof = require('./$.classof');
      ITERATOR = require('./$.wks')('iterator');
      Iterators = require('./$.iterators');

      module.exports = require('./$.core').isIterable = function (it) {
        var O = Object(it);
        return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLGFBQVI7QUFDVixpQkFBVyxRQUFRLFNBQVIsRUFBbUIsVUFBbkI7QUFDWCxrQkFBWSxRQUFRLGVBQVI7O0FBQ2hCLGFBQU8sT0FBUCxHQUFpQixRQUFRLFVBQVIsRUFBb0IsVUFBcEIsR0FBaUMsVUFBUyxFQUFULEVBQWE7QUFDN0QsWUFBSSxJQUFJLE9BQU8sRUFBUCxDQUFKLENBRHlEO0FBRTdELGVBQU8sRUFBRSxRQUFGLE1BQWdCLFNBQWhCLElBQTZCLGdCQUFnQixDQUFoQixJQUFxQixVQUFVLGNBQVYsQ0FBeUIsUUFBUSxDQUFSLENBQXpCLENBQWxELENBRnNEO09BQWIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKSxcbiAgICBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSxcbiAgICBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uKGl0KSB7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWQgfHwgJ0BAaXRlcmF0b3InIGluIE8gfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
