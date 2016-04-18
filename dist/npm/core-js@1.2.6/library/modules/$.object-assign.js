'use strict';

System.register([], function (_export, _context) {
  var $, toObject, IObject;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      toObject = require('./$.to-object');
      IObject = require('./$.iobject');

      module.exports = require('./$.fails')(function () {
        var a = Object.assign,
            A = {},
            B = {},
            S = Symbol(),
            K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach(function (k) {
          B[k] = k;
        });
        return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
      }) ? function assign(target, source) {
        var T = toObject(target),
            $$ = arguments,
            $$len = $$.length,
            index = 1,
            getKeys = $.getKeys,
            getSymbols = $.getSymbols,
            isEnum = $.isEnum;
        while ($$len > index) {
          var S = IObject($$[index++]),
              keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
              length = keys.length,
              j = 0,
              key;
          while (length > j) {
            if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
          }
        }
        return T;
      } : Object.assign;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osaUJBQVcsUUFBUSxlQUFSO0FBQ1gsZ0JBQVUsUUFBUSxhQUFSOztBQUNkLGFBQU8sT0FBUCxHQUFpQixRQUFRLFdBQVIsRUFBcUIsWUFBVztBQUMvQyxZQUFJLElBQUksT0FBTyxNQUFQO1lBQ0osSUFBSSxFQUFKO1lBQ0EsSUFBSSxFQUFKO1lBQ0EsSUFBSSxRQUFKO1lBQ0EsSUFBSSxzQkFBSixDQUwyQztBQU0vQyxVQUFFLENBQUYsSUFBTyxDQUFQLENBTitDO0FBTy9DLFVBQUUsS0FBRixDQUFRLEVBQVIsRUFBWSxPQUFaLENBQW9CLFVBQVMsQ0FBVCxFQUFZO0FBQzlCLFlBQUUsQ0FBRixJQUFPLENBQVAsQ0FEOEI7U0FBWixDQUFwQixDQVArQztBQVUvQyxlQUFPLEVBQUUsRUFBRixFQUFNLENBQU4sRUFBUyxDQUFULEtBQWUsQ0FBZixJQUFvQixPQUFPLElBQVAsQ0FBWSxFQUFFLEVBQUYsRUFBTSxDQUFOLENBQVosRUFBc0IsSUFBdEIsQ0FBMkIsRUFBM0IsS0FBa0MsQ0FBbEMsQ0FWb0I7T0FBWCxDQUFyQixHQVdaLFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixNQUF4QixFQUFnQztBQUNuQyxZQUFJLElBQUksU0FBUyxNQUFULENBQUo7WUFDQSxLQUFLLFNBQUw7WUFDQSxRQUFRLEdBQUcsTUFBSDtZQUNSLFFBQVEsQ0FBUjtZQUNBLFVBQVUsRUFBRSxPQUFGO1lBQ1YsYUFBYSxFQUFFLFVBQUY7WUFDYixTQUFTLEVBQUUsTUFBRixDQVBzQjtBQVFuQyxlQUFPLFFBQVEsS0FBUixFQUFlO0FBQ3BCLGNBQUksSUFBSSxRQUFRLEdBQUcsT0FBSCxDQUFSLENBQUo7Y0FDQSxPQUFPLGFBQWEsUUFBUSxDQUFSLEVBQVcsTUFBWCxDQUFrQixXQUFXLENBQVgsQ0FBbEIsQ0FBYixHQUFnRCxRQUFRLENBQVIsQ0FBaEQ7Y0FDUCxTQUFTLEtBQUssTUFBTDtjQUNULElBQUksQ0FBSjtjQUNBLEdBSkosQ0FEb0I7QUFNcEIsaUJBQU8sU0FBUyxDQUFUO0FBQ0wsZ0JBQUksT0FBTyxJQUFQLENBQVksQ0FBWixFQUFlLE1BQU0sS0FBSyxHQUFMLENBQU4sQ0FBbkIsRUFDRSxFQUFFLEdBQUYsSUFBUyxFQUFFLEdBQUYsQ0FBVCxDQURGO1dBREY7U0FORjtBQVVBLGVBQU8sQ0FBUCxDQWxCbUM7T0FBaEMsR0FtQkQsT0FBTyxNQUFQIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JyksXG4gICAgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCkge1xuICB2YXIgYSA9IE9iamVjdC5hc3NpZ24sXG4gICAgICBBID0ge30sXG4gICAgICBCID0ge30sXG4gICAgICBTID0gU3ltYm9sKCksXG4gICAgICBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgIEJba10gPSBrO1xuICB9KTtcbiAgcmV0dXJuIGEoe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoYSh7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCksXG4gICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICQkbGVuID0gJCQubGVuZ3RoLFxuICAgICAgaW5kZXggPSAxLFxuICAgICAgZ2V0S2V5cyA9ICQuZ2V0S2V5cyxcbiAgICAgIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHMsXG4gICAgICBpc0VudW0gPSAkLmlzRW51bTtcbiAgd2hpbGUgKCQkbGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoJCRbaW5kZXgrK10pLFxuICAgICAgICBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKSxcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIGogPSAwLFxuICAgICAgICBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopXG4gICAgICBpZiAoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlcbiAgICAgICAgVFtrZXldID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufSA6IE9iamVjdC5hc3NpZ247XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
