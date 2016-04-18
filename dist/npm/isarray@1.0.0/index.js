'use strict';

System.register([], function (_export, _context) {
  var toString;
  return {
    setters: [],
    execute: function () {
      toString = {}.toString;


      module.exports = Array.isArray || function (arr) {
        return toString.call(arr) == '[object Array]';
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9pc2FycmF5QDEuMC4wL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxpQkFBVyxHQUFHLFFBQUg7OztBQUVmLGFBQU8sT0FBUCxHQUFpQixNQUFNLE9BQU4sSUFBaUIsVUFBVSxHQUFWLEVBQWU7QUFDL0MsZUFBTyxTQUFTLElBQVQsQ0FBYyxHQUFkLEtBQXNCLGdCQUF0QixDQUR3QztPQUFmIiwiZmlsZSI6Im5wbS9pc2FycmF5QDEuMC4wL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
