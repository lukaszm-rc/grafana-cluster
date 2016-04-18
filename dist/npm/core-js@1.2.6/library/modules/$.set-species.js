/* */
'use strict';

System.register([], function (_export, _context) {
  var core, $, DESCRIPTORS, SPECIES;
  return {
    setters: [],
    execute: function () {
      core = require('./$.core');
      $ = require('./$');
      DESCRIPTORS = require('./$.descriptors');
      SPECIES = require('./$.wks')('species');

      module.exports = function (KEY) {
        var C = core[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnNldC1zcGVjaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGFBQU8sUUFBUSxVQUFSO0FBQ1AsVUFBSSxRQUFRLEtBQVI7QUFDSixvQkFBYyxRQUFRLGlCQUFSO0FBQ2QsZ0JBQVUsUUFBUSxTQUFSLEVBQW1CLFNBQW5COztBQUNkLGFBQU8sT0FBUCxHQUFpQixVQUFTLEdBQVQsRUFBYztBQUM3QixZQUFJLElBQUksS0FBSyxHQUFMLENBQUosQ0FEeUI7QUFFN0IsWUFBSSxlQUFlLENBQWYsSUFBb0IsQ0FBQyxFQUFFLE9BQUYsQ0FBRCxFQUN0QixFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQWEsT0FBYixFQUFzQjtBQUNwQix3QkFBYyxJQUFkO0FBQ0EsZUFBSyxlQUFXO0FBQ2QsbUJBQU8sSUFBUCxDQURjO1dBQVg7U0FGUCxFQURGO09BRmUiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXNwZWNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciBjb3JlID0gcmVxdWlyZSgnLi8kLmNvcmUnKSxcbiAgICAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSxcbiAgICBTUEVDSUVTID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSkge1xuICB2YXIgQyA9IGNvcmVbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pXG4gICAgJC5zZXREZXNjKEMsIFNQRUNJRVMsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
