'use strict';

System.register([], function (_export, _context) {
  var castSlice, charsEndIndex, charsStartIndex, stringToArray, toString, reTrim;


  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */
  function trim(string, chars, guard) {
    string = toString(string);
    if (!string) {
      return string;
    }
    if (guard || chars === undefined) {
      return string.replace(reTrim, '');
    }
    if (!(chars += '')) {
      return string;
    }
    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars),
        start = charsStartIndex(strSymbols, chrSymbols),
        end = charsEndIndex(strSymbols, chrSymbols) + 1;

    return castSlice(strSymbols, start, end).join('');
  }

  return {
    setters: [],
    execute: function () {
      castSlice = require('./_castSlice');
      charsEndIndex = require('./_charsEndIndex');
      charsStartIndex = require('./_charsStartIndex');
      stringToArray = require('./_stringToArray');
      toString = require('./toString');
      reTrim = /^\s+|\s+$/g;
      module.exports = trim;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RyaW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSxXQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DO0FBQ2xDLGFBQVMsU0FBUyxNQUFULENBQVQsQ0FEa0M7QUFFbEMsUUFBSSxDQUFDLE1BQUQsRUFBUztBQUNYLGFBQU8sTUFBUCxDQURXO0tBQWI7QUFHQSxRQUFJLFNBQVMsVUFBVSxTQUFWLEVBQXFCO0FBQ2hDLGFBQU8sT0FBTyxPQUFQLENBQWUsTUFBZixFQUF1QixFQUF2QixDQUFQLENBRGdDO0tBQWxDO0FBR0EsUUFBSSxFQUFFLFNBQVMsRUFBVCxDQUFGLEVBQWdCO0FBQ2xCLGFBQU8sTUFBUCxDQURrQjtLQUFwQjtBQUdBLFFBQUksYUFBYSxjQUFjLE1BQWQsQ0FBYjtRQUNBLGFBQWEsY0FBYyxLQUFkLENBQWI7UUFDQSxRQUFRLGdCQUFnQixVQUFoQixFQUE0QixVQUE1QixDQUFSO1FBQ0EsTUFBTSxjQUFjLFVBQWQsRUFBMEIsVUFBMUIsSUFBd0MsQ0FBeEMsQ0Fkd0I7O0FBZ0JsQyxXQUFPLFVBQVUsVUFBVixFQUFzQixLQUF0QixFQUE2QixHQUE3QixFQUFrQyxJQUFsQyxDQUF1QyxFQUF2QyxDQUFQLENBaEJrQztHQUFwQzs7Ozs7QUEvQkksa0JBQVksUUFBUSxjQUFSO0FBQ1osc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsd0JBQWtCLFFBQVEsb0JBQVI7QUFDbEIsc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsaUJBQVcsUUFBUSxZQUFSO0FBR1gsZUFBUztBQTJDYixhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdHJpbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGNoYXJzRW5kSW5kZXggPSByZXF1aXJlKCcuL19jaGFyc0VuZEluZGV4JyksXG4gICAgY2hhcnNTdGFydEluZGV4ID0gcmVxdWlyZSgnLi9fY2hhcnNTdGFydEluZGV4JyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2Ugb3Igc3BlY2lmaWVkIGNoYXJhY3RlcnMgZnJvbSBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byB0cmltLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjaGFycz13aGl0ZXNwYWNlXSBUaGUgY2hhcmFjdGVycyB0byB0cmltLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRyaW0oJyAgYWJjICAnKTtcbiAqIC8vID0+ICdhYmMnXG4gKlxuICogXy50cmltKCctXy1hYmMtXy0nLCAnXy0nKTtcbiAqIC8vID0+ICdhYmMnXG4gKlxuICogXy5tYXAoWycgIGZvbyAgJywgJyAgYmFyICAnXSwgXy50cmltKTtcbiAqIC8vID0+IFsnZm9vJywgJ2JhciddXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyaW5nLCBjaGFycywgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgaWYgKCFzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIGlmIChndWFyZCB8fCBjaGFycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB9XG4gIGlmICghKGNoYXJzICs9ICcnKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgdmFyIHN0clN5bWJvbHMgPSBzdHJpbmdUb0FycmF5KHN0cmluZyksXG4gICAgICBjaHJTeW1ib2xzID0gc3RyaW5nVG9BcnJheShjaGFycyksXG4gICAgICBzdGFydCA9IGNoYXJzU3RhcnRJbmRleChzdHJTeW1ib2xzLCBjaHJTeW1ib2xzKSxcbiAgICAgIGVuZCA9IGNoYXJzRW5kSW5kZXgoc3RyU3ltYm9scywgY2hyU3ltYm9scykgKyAxO1xuXG4gIHJldHVybiBjYXN0U2xpY2Uoc3RyU3ltYm9scywgc3RhcnQsIGVuZCkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
