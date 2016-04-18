'use strict';

System.register([], function (_export, _context) {
  var arraySome, baseIteratee, baseSome, isArray, isIterateeCall;

  function some(collection, predicate, guard) {
    var func = isArray(collection) ? arraySome : baseSome;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, baseIteratee(predicate, 3));
  }
  return {
    setters: [],
    execute: function () {
      arraySome = require('./_arraySome');
      baseIteratee = require('./_baseIteratee');
      baseSome = require('./_baseSome');
      isArray = require('./isArray');
      isIterateeCall = require('./_isIterateeCall');
      module.exports = some;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLElBQVQsQ0FBYyxVQUFkLEVBQTBCLFNBQTFCLEVBQXFDLEtBQXJDLEVBQTRDO0FBQzFDLFFBQUksT0FBTyxRQUFRLFVBQVIsSUFBc0IsU0FBdEIsR0FBa0MsUUFBbEMsQ0FEK0I7QUFFMUMsUUFBSSxTQUFTLGVBQWUsVUFBZixFQUEyQixTQUEzQixFQUFzQyxLQUF0QyxDQUFULEVBQXVEO0FBQ3pELGtCQUFZLFNBQVosQ0FEeUQ7S0FBM0Q7QUFHQSxXQUFPLEtBQUssVUFBTCxFQUFpQixhQUFhLFNBQWIsRUFBd0IsQ0FBeEIsQ0FBakIsQ0FBUCxDQUwwQztHQUE1Qzs7OztBQUxJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixpQkFBVyxRQUFRLGFBQVI7QUFDWCxnQkFBVSxRQUFRLFdBQVI7QUFDVix1QkFBaUIsUUFBUSxtQkFBUjtBQVFyQixhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvc29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VTb21lID0gcmVxdWlyZSgnLi9fYmFzZVNvbWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuZnVuY3Rpb24gc29tZShjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGd1YXJkKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5U29tZSA6IGJhc2VTb21lO1xuICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBndWFyZCkpIHtcbiAgICBwcmVkaWNhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMykpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBzb21lO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
