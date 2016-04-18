'use strict';

System.register([], function (_export, _context) {
  var cof;
  return {
    setters: [],
    execute: function () {
      cof = require('./$.cof');

      module.exports = Array.isArray || function (arg) {
        return cof(arg) == 'Array';
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxZQUFNLFFBQVEsU0FBUjs7QUFDVixhQUFPLE9BQVAsR0FBaUIsTUFBTSxPQUFOLElBQWlCLFVBQVMsR0FBVCxFQUFjO0FBQzlDLGVBQU8sSUFBSSxHQUFKLEtBQVksT0FBWixDQUR1QztPQUFkIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
