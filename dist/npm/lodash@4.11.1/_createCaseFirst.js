'use strict';

System.register([], function (_export, _context) {
  var castSlice, reHasComplexSymbol, stringToArray, toString;


  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new function.
   */
  function createCaseFirst(methodName) {
    return function (string) {
      string = toString(string);

      var strSymbols = reHasComplexSymbol.test(string) ? stringToArray(string) : undefined;

      var chr = strSymbols ? strSymbols[0] : string.charAt(0);

      var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);

      return chr[methodName]() + trailing;
    };
  }

  return {
    setters: [],
    execute: function () {
      castSlice = require('./_castSlice');
      reHasComplexSymbol = require('./_reHasComplexSymbol');
      stringToArray = require('./_stringToArray');
      toString = require('./toString');
      module.exports = createCaseFirst;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVDYXNlRmlyc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWFBLFdBQVMsZUFBVCxDQUF5QixVQUF6QixFQUFxQztBQUNuQyxXQUFPLFVBQVMsTUFBVCxFQUFpQjtBQUN0QixlQUFTLFNBQVMsTUFBVCxDQUFULENBRHNCOztBQUd0QixVQUFJLGFBQWEsbUJBQW1CLElBQW5CLENBQXdCLE1BQXhCLElBQ2IsY0FBYyxNQUFkLENBRGEsR0FFYixTQUZhLENBSEs7O0FBT3RCLFVBQUksTUFBTSxhQUNOLFdBQVcsQ0FBWCxDQURNLEdBRU4sT0FBTyxNQUFQLENBQWMsQ0FBZCxDQUZNLENBUFk7O0FBV3RCLFVBQUksV0FBVyxhQUNYLFVBQVUsVUFBVixFQUFzQixDQUF0QixFQUF5QixJQUF6QixDQUE4QixFQUE5QixDQURXLEdBRVgsT0FBTyxLQUFQLENBQWEsQ0FBYixDQUZXLENBWE87O0FBZXRCLGFBQU8sSUFBSSxVQUFKLE1BQW9CLFFBQXBCLENBZmU7S0FBakIsQ0FENEI7R0FBckM7Ozs7O0FBWkksa0JBQVksUUFBUSxjQUFSO0FBQ1osMkJBQXFCLFFBQVEsdUJBQVI7QUFDckIsc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsaUJBQVcsUUFBUSxZQUFSO0FBNkJmLGFBQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY2FzdFNsaWNlID0gcmVxdWlyZSgnLi9fY2FzdFNsaWNlJyksXG4gICAgcmVIYXNDb21wbGV4U3ltYm9sID0gcmVxdWlyZSgnLi9fcmVIYXNDb21wbGV4U3ltYm9sJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXNlRmlyc3QobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgIHZhciBzdHJTeW1ib2xzID0gcmVIYXNDb21wbGV4U3ltYm9sLnRlc3Qoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdUb0FycmF5KHN0cmluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGNociA9IHN0clN5bWJvbHNcbiAgICAgID8gc3RyU3ltYm9sc1swXVxuICAgICAgOiBzdHJpbmcuY2hhckF0KDApO1xuXG4gICAgdmFyIHRyYWlsaW5nID0gc3RyU3ltYm9sc1xuICAgICAgPyBjYXN0U2xpY2Uoc3RyU3ltYm9scywgMSkuam9pbignJylcbiAgICAgIDogc3RyaW5nLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGNoclttZXRob2ROYW1lXSgpICsgdHJhaWxpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FzZUZpcnN0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
