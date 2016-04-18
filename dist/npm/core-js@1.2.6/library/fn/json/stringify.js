'use strict';

System.register([], function (_export, _context) {
  var core;
  return {
    setters: [],
    execute: function () {
      core = require('../../modules/$.core');

      module.exports = function stringify(it) {
        return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGFBQU8sUUFBUSxzQkFBUjs7QUFDWCxhQUFPLE9BQVAsR0FBaUIsU0FBUyxTQUFULENBQW1CLEVBQW5CLEVBQXVCO0FBQ3RDLGVBQU8sQ0FBQyxLQUFLLElBQUwsSUFBYSxLQUFLLElBQUwsQ0FBVSxTQUFWLElBQXVCLEtBQUssU0FBTCxDQUFyQyxDQUFxRCxLQUFyRCxDQUEyRCxJQUEzRCxFQUFpRSxTQUFqRSxDQUFQLENBRHNDO09BQXZCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gIHJldHVybiAoY29yZS5KU09OICYmIGNvcmUuSlNPTi5zdHJpbmdpZnkgfHwgSlNPTi5zdHJpbmdpZnkpLmFwcGx5KEpTT04sIGFyZ3VtZW50cyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
