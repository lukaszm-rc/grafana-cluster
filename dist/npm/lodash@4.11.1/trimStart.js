'use strict';

System.register([], function (_export, _context) {
  var castSlice, charsStartIndex, stringToArray, toString, reTrimStart;


  /**
   * Removes leading whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimStart('  abc  ');
   * // => 'abc  '
   *
   * _.trimStart('-_-abc-_-', '_-');
   * // => 'abc-_-'
   */
  function trimStart(string, chars, guard) {
    string = toString(string);
    if (!string) {
      return string;
    }
    if (guard || chars === undefined) {
      return string.replace(reTrimStart, '');
    }
    if (!(chars += '')) {
      return string;
    }
    var strSymbols = stringToArray(string),
        start = charsStartIndex(strSymbols, stringToArray(chars));

    return castSlice(strSymbols, start).join('');
  }

  return {
    setters: [],
    execute: function () {
      castSlice = require('./_castSlice');
      charsStartIndex = require('./_charsStartIndex');
      stringToArray = require('./_stringToArray');
      toString = require('./toString');
      reTrimStart = /^\s+/;
      module.exports = trimStart;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RyaW1TdGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLFdBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQixLQUEzQixFQUFrQyxLQUFsQyxFQUF5QztBQUN2QyxhQUFTLFNBQVMsTUFBVCxDQUFULENBRHVDO0FBRXZDLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDWCxhQUFPLE1BQVAsQ0FEVztLQUFiO0FBR0EsUUFBSSxTQUFTLFVBQVUsU0FBVixFQUFxQjtBQUNoQyxhQUFPLE9BQU8sT0FBUCxDQUFlLFdBQWYsRUFBNEIsRUFBNUIsQ0FBUCxDQURnQztLQUFsQztBQUdBLFFBQUksRUFBRSxTQUFTLEVBQVQsQ0FBRixFQUFnQjtBQUNsQixhQUFPLE1BQVAsQ0FEa0I7S0FBcEI7QUFHQSxRQUFJLGFBQWEsY0FBYyxNQUFkLENBQWI7UUFDQSxRQUFRLGdCQUFnQixVQUFoQixFQUE0QixjQUFjLEtBQWQsQ0FBNUIsQ0FBUixDQVptQzs7QUFjdkMsV0FBTyxVQUFVLFVBQVYsRUFBc0IsS0FBdEIsRUFBNkIsSUFBN0IsQ0FBa0MsRUFBbEMsQ0FBUCxDQWR1QztHQUF6Qzs7Ozs7QUEzQkksa0JBQVksUUFBUSxjQUFSO0FBQ1osd0JBQWtCLFFBQVEsb0JBQVI7QUFDbEIsc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsaUJBQVcsUUFBUSxZQUFSO0FBR1gsb0JBQWM7QUFzQ2xCLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS90cmltU3RhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjYXN0U2xpY2UgPSByZXF1aXJlKCcuL19jYXN0U2xpY2UnKSxcbiAgICBjaGFyc1N0YXJ0SW5kZXggPSByZXF1aXJlKCcuL19jaGFyc1N0YXJ0SW5kZXgnKSxcbiAgICBzdHJpbmdUb0FycmF5ID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9BcnJheScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgd2hpdGVzcGFjZSBvciBzcGVjaWZpZWQgY2hhcmFjdGVycyBmcm9tIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NoYXJzPXdoaXRlc3BhY2VdIFRoZSBjaGFyYWN0ZXJzIHRvIHRyaW0uXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udHJpbVN0YXJ0KCcgIGFiYyAgJyk7XG4gKiAvLyA9PiAnYWJjICAnXG4gKlxuICogXy50cmltU3RhcnQoJy1fLWFiYy1fLScsICdfLScpO1xuICogLy8gPT4gJ2FiYy1fLSdcbiAqL1xuZnVuY3Rpb24gdHJpbVN0YXJ0KHN0cmluZywgY2hhcnMsIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIGlmICghc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICBpZiAoZ3VhcmQgfHwgY2hhcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZVRyaW1TdGFydCwgJycpO1xuICB9XG4gIGlmICghKGNoYXJzICs9ICcnKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgdmFyIHN0clN5bWJvbHMgPSBzdHJpbmdUb0FycmF5KHN0cmluZyksXG4gICAgICBzdGFydCA9IGNoYXJzU3RhcnRJbmRleChzdHJTeW1ib2xzLCBzdHJpbmdUb0FycmF5KGNoYXJzKSk7XG5cbiAgcmV0dXJuIGNhc3RTbGljZShzdHJTeW1ib2xzLCBzdGFydCkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbVN0YXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
