'use strict';

System.register([], function (_export, _context) {
  var MAX_SAFE_INTEGER, nativeFloor;


  /**
   * The base implementation of `_.repeat` which doesn't coerce arguments.
   *
   * @private
   * @param {string} string The string to repeat.
   * @param {number} n The number of times to repeat the string.
   * @returns {string} Returns the repeated string.
   */
  function baseRepeat(string, n) {
    var result = '';
    if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
      return result;
    }
    // Leverage the exponentiation by squaring algorithm for a faster repeat.
    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
    do {
      if (n % 2) {
        result += string;
      }
      n = nativeFloor(n / 2);
      if (n) {
        string += string;
      }
    } while (n);

    return result;
  }

  return {
    setters: [],
    execute: function () {
      MAX_SAFE_INTEGER = 9007199254740991;
      nativeFloor = Math.floor;
      module.exports = baseRepeat;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUmVwZWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLENBQTVCLEVBQStCO0FBQzdCLFFBQUksU0FBUyxFQUFULENBRHlCO0FBRTdCLFFBQUksQ0FBQyxNQUFELElBQVcsSUFBSSxDQUFKLElBQVMsSUFBSSxnQkFBSixFQUFzQjtBQUM1QyxhQUFPLE1BQVAsQ0FENEM7S0FBOUM7OztBQUY2QixPQU8xQjtBQUNELFVBQUksSUFBSSxDQUFKLEVBQU87QUFDVCxrQkFBVSxNQUFWLENBRFM7T0FBWDtBQUdBLFVBQUksWUFBWSxJQUFJLENBQUosQ0FBaEIsQ0FKQztBQUtELFVBQUksQ0FBSixFQUFPO0FBQ0wsa0JBQVUsTUFBVixDQURLO09BQVA7S0FMRixRQVFTLENBUlQsRUFQNkI7O0FBaUI3QixXQUFPLE1BQVAsQ0FqQjZCO0dBQS9COzs7OztBQWJJLHlCQUFtQjtBQUduQixvQkFBYyxLQUFLLEtBQUw7QUE4QmxCLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZVJlcGVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlRmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlcGVhdGAgd2hpY2ggZG9lc24ndCBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gcmVwZWF0LlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJlcGVhdGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlcGVhdChzdHJpbmcsIG4pIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAoIXN0cmluZyB8fCBuIDwgMSB8fCBuID4gTUFYX1NBRkVfSU5URUdFUikge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLy8gTGV2ZXJhZ2UgdGhlIGV4cG9uZW50aWF0aW9uIGJ5IHNxdWFyaW5nIGFsZ29yaXRobSBmb3IgYSBmYXN0ZXIgcmVwZWF0LlxuICAvLyBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXhwb25lbnRpYXRpb25fYnlfc3F1YXJpbmcgZm9yIG1vcmUgZGV0YWlscy5cbiAgZG8ge1xuICAgIGlmIChuICUgMikge1xuICAgICAgcmVzdWx0ICs9IHN0cmluZztcbiAgICB9XG4gICAgbiA9IG5hdGl2ZUZsb29yKG4gLyAyKTtcbiAgICBpZiAobikge1xuICAgICAgc3RyaW5nICs9IHN0cmluZztcbiAgICB9XG4gIH0gd2hpbGUgKG4pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlcGVhdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
