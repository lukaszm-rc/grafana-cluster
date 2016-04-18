'use strict';

System.register([], function (_export, _context) {
  var arrayEvery, baseEvery, baseIteratee, isArray, isIterateeCall;

  function every(collection, predicate, guard) {
    var func = isArray(collection) ? arrayEvery : baseEvery;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, baseIteratee(predicate, 3));
  }
  return {
    setters: [],
    execute: function () {
      arrayEvery = require('./_arrayEvery');
      baseEvery = require('./_baseEvery');
      baseIteratee = require('./_baseIteratee');
      isArray = require('./isArray');
      isIterateeCall = require('./_isIterateeCall');
      module.exports = every;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2V2ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxLQUFULENBQWUsVUFBZixFQUEyQixTQUEzQixFQUFzQyxLQUF0QyxFQUE2QztBQUMzQyxRQUFJLE9BQU8sUUFBUSxVQUFSLElBQXNCLFVBQXRCLEdBQW1DLFNBQW5DLENBRGdDO0FBRTNDLFFBQUksU0FBUyxlQUFlLFVBQWYsRUFBMkIsU0FBM0IsRUFBc0MsS0FBdEMsQ0FBVCxFQUF1RDtBQUN6RCxrQkFBWSxTQUFaLENBRHlEO0tBQTNEO0FBR0EsV0FBTyxLQUFLLFVBQUwsRUFBaUIsYUFBYSxTQUFiLEVBQXdCLENBQXhCLENBQWpCLENBQVAsQ0FMMkM7R0FBN0M7Ozs7QUFMSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixrQkFBWSxRQUFRLGNBQVI7QUFDWixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsZ0JBQVUsUUFBUSxXQUFSO0FBQ1YsdUJBQWlCLFFBQVEsbUJBQVI7QUFRckIsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2V2ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXJyYXlFdmVyeSA9IHJlcXVpcmUoJy4vX2FycmF5RXZlcnknKSxcbiAgICBiYXNlRXZlcnkgPSByZXF1aXJlKCcuL19iYXNlRXZlcnknKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuZnVuY3Rpb24gZXZlcnkoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBndWFyZCkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheUV2ZXJ5IDogYmFzZUV2ZXJ5O1xuICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBndWFyZCkpIHtcbiAgICBwcmVkaWNhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMykpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBldmVyeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
