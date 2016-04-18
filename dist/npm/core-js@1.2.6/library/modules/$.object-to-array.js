'use strict';

System.register([], function (_export, _context) {
  var $, toIObject, isEnum;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      toIObject = require('./$.to-iobject');
      isEnum = $.isEnum;

      module.exports = function (isEntries) {
        return function (it) {
          var O = toIObject(it),
              keys = $.getKeys(O),
              length = keys.length,
              i = 0,
              result = [],
              key;
          while (length > i) {
            if (isEnum.call(O, key = keys[i++])) {
              result.push(isEntries ? [key, O[key]] : O[key]);
            }
          }return result;
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksVUFBSSxRQUFRLEtBQVI7QUFDSixrQkFBWSxRQUFRLGdCQUFSO0FBQ1osZUFBUyxFQUFFLE1BQUY7O0FBQ2IsYUFBTyxPQUFQLEdBQWlCLFVBQVMsU0FBVCxFQUFvQjtBQUNuQyxlQUFPLFVBQVMsRUFBVCxFQUFhO0FBQ2xCLGNBQUksSUFBSSxVQUFVLEVBQVYsQ0FBSjtjQUNBLE9BQU8sRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFQO2NBQ0EsU0FBUyxLQUFLLE1BQUw7Y0FDVCxJQUFJLENBQUo7Y0FDQSxTQUFTLEVBQVQ7Y0FDQSxHQUxKLENBRGtCO0FBT2xCLGlCQUFPLFNBQVMsQ0FBVDtBQUNMLGdCQUFJLE9BQU8sSUFBUCxDQUFZLENBQVosRUFBZSxNQUFNLEtBQUssR0FBTCxDQUFOLENBQW5CLEVBQXFDO0FBQ25DLHFCQUFPLElBQVAsQ0FBWSxZQUFZLENBQUMsR0FBRCxFQUFNLEVBQUUsR0FBRixDQUFOLENBQVosR0FBNEIsRUFBRSxHQUFGLENBQTVCLENBQVosQ0FEbUM7YUFBckM7V0FERixPQUlPLE1BQVAsQ0FYa0I7U0FBYixDQUQ0QjtPQUFwQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3QtdG8tYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKSxcbiAgICBpc0VudW0gPSAkLmlzRW51bTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KSxcbiAgICAgICAga2V5cyA9ICQuZ2V0S2V5cyhPKSxcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKVxuICAgICAgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
