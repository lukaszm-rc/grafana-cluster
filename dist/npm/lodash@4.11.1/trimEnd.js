'use strict';

System.register([], function (_export, _context) {
  var castSlice, charsEndIndex, stringToArray, toString, reTrimEnd;


  /**
   * Removes trailing whitespace or specified characters from `string`.
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
   * _.trimEnd('  abc  ');
   * // => '  abc'
   *
   * _.trimEnd('-_-abc-_-', '_-');
   * // => '-_-abc'
   */
  function trimEnd(string, chars, guard) {
    string = toString(string);
    if (!string) {
      return string;
    }
    if (guard || chars === undefined) {
      return string.replace(reTrimEnd, '');
    }
    if (!(chars += '')) {
      return string;
    }
    var strSymbols = stringToArray(string),
        end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

    return castSlice(strSymbols, 0, end).join('');
  }

  return {
    setters: [],
    execute: function () {
      castSlice = require('./_castSlice');
      charsEndIndex = require('./_charsEndIndex');
      stringToArray = require('./_stringToArray');
      toString = require('./toString');
      reTrimEnd = /\s+$/;
      module.exports = trimEnd;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RyaW1FbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsS0FBekIsRUFBZ0MsS0FBaEMsRUFBdUM7QUFDckMsYUFBUyxTQUFTLE1BQVQsQ0FBVCxDQURxQztBQUVyQyxRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFBTyxNQUFQLENBRFc7S0FBYjtBQUdBLFFBQUksU0FBUyxVQUFVLFNBQVYsRUFBcUI7QUFDaEMsYUFBTyxPQUFPLE9BQVAsQ0FBZSxTQUFmLEVBQTBCLEVBQTFCLENBQVAsQ0FEZ0M7S0FBbEM7QUFHQSxRQUFJLEVBQUUsU0FBUyxFQUFULENBQUYsRUFBZ0I7QUFDbEIsYUFBTyxNQUFQLENBRGtCO0tBQXBCO0FBR0EsUUFBSSxhQUFhLGNBQWMsTUFBZCxDQUFiO1FBQ0EsTUFBTSxjQUFjLFVBQWQsRUFBMEIsY0FBYyxLQUFkLENBQTFCLElBQWtELENBQWxELENBWjJCOztBQWNyQyxXQUFPLFVBQVUsVUFBVixFQUFzQixDQUF0QixFQUF5QixHQUF6QixFQUE4QixJQUE5QixDQUFtQyxFQUFuQyxDQUFQLENBZHFDO0dBQXZDOzs7OztBQTNCSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixzQkFBZ0IsUUFBUSxrQkFBUjtBQUNoQixpQkFBVyxRQUFRLFlBQVI7QUFHWCxrQkFBWTtBQXNDaEIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RyaW1FbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjYXN0U2xpY2UgPSByZXF1aXJlKCcuL19jYXN0U2xpY2UnKSxcbiAgICBjaGFyc0VuZEluZGV4ID0gcmVxdWlyZSgnLi9fY2hhcnNFbmRJbmRleCcpLFxuICAgIHN0cmluZ1RvQXJyYXkgPSByZXF1aXJlKCcuL19zdHJpbmdUb0FycmF5JyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltRW5kID0gL1xccyskLztcblxuLyoqXG4gKiBSZW1vdmVzIHRyYWlsaW5nIHdoaXRlc3BhY2Ugb3Igc3BlY2lmaWVkIGNoYXJhY3RlcnMgZnJvbSBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byB0cmltLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjaGFycz13aGl0ZXNwYWNlXSBUaGUgY2hhcmFjdGVycyB0byB0cmltLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRyaW1FbmQoJyAgYWJjICAnKTtcbiAqIC8vID0+ICcgIGFiYydcbiAqXG4gKiBfLnRyaW1FbmQoJy1fLWFiYy1fLScsICdfLScpO1xuICogLy8gPT4gJy1fLWFiYydcbiAqL1xuZnVuY3Rpb24gdHJpbUVuZChzdHJpbmcsIGNoYXJzLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBpZiAoIXN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgaWYgKGd1YXJkIHx8IGNoYXJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVUcmltRW5kLCAnJyk7XG4gIH1cbiAgaWYgKCEoY2hhcnMgKz0gJycpKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICB2YXIgc3RyU3ltYm9scyA9IHN0cmluZ1RvQXJyYXkoc3RyaW5nKSxcbiAgICAgIGVuZCA9IGNoYXJzRW5kSW5kZXgoc3RyU3ltYm9scywgc3RyaW5nVG9BcnJheShjaGFycykpICsgMTtcblxuICByZXR1cm4gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDAsIGVuZCkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbUVuZDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
