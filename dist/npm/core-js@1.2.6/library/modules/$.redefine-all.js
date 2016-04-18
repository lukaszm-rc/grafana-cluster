'use strict';

System.register([], function (_export, _context) {
  var redefine;
  return {
    setters: [],
    execute: function () {
      redefine = require('./$.redefine');

      module.exports = function (target, src) {
        for (var key in src) {
          redefine(target, key, src[key]);
        }return target;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLWFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxjQUFSOztBQUNmLGFBQU8sT0FBUCxHQUFpQixVQUFTLE1BQVQsRUFBaUIsR0FBakIsRUFBc0I7QUFDckMsYUFBSyxJQUFJLEdBQUosSUFBVyxHQUFoQjtBQUNFLG1CQUFTLE1BQVQsRUFBaUIsR0FBakIsRUFBc0IsSUFBSSxHQUFKLENBQXRCO1NBREYsT0FFTyxNQUFQLENBSHFDO09BQXRCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLWFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
