'use strict';

System.register([], function (_export, _context) {
  var castSlice, isIterateeCall, isRegExp, reHasComplexSymbol, stringToArray, toString, MAX_ARRAY_LENGTH, stringProto, nativeSplit;


  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the new array of string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */
  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
      separator = limit = undefined;
    }
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
      return [];
    }
    string = toString(string);
    if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
      separator += '';
      if (separator == '' && reHasComplexSymbol.test(string)) {
        return castSlice(stringToArray(string), 0, limit);
      }
    }
    return nativeSplit.call(string, separator, limit);
  }

  return {
    setters: [],
    execute: function () {
      castSlice = require('./_castSlice');
      isIterateeCall = require('./_isIterateeCall');
      isRegExp = require('./isRegExp');
      reHasComplexSymbol = require('./_reHasComplexSymbol');
      stringToArray = require('./_stringToArray');
      toString = require('./toString');
      MAX_ARRAY_LENGTH = 4294967295;
      stringProto = String.prototype;
      nativeSplit = stringProto.split;
      module.exports = split;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NwbGl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0EsV0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixTQUF2QixFQUFrQyxLQUFsQyxFQUF5QztBQUN2QyxRQUFJLFNBQVMsT0FBTyxLQUFQLElBQWdCLFFBQWhCLElBQTRCLGVBQWUsTUFBZixFQUF1QixTQUF2QixFQUFrQyxLQUFsQyxDQUFyQyxFQUErRTtBQUNqRixrQkFBWSxRQUFRLFNBQVIsQ0FEcUU7S0FBbkY7QUFHQSxZQUFRLFVBQVUsU0FBVixHQUFzQixnQkFBdEIsR0FBeUMsVUFBVSxDQUFWLENBSlY7QUFLdkMsUUFBSSxDQUFDLEtBQUQsRUFBUTtBQUNWLGFBQU8sRUFBUCxDQURVO0tBQVo7QUFHQSxhQUFTLFNBQVMsTUFBVCxDQUFULENBUnVDO0FBU3ZDLFFBQUksV0FDRSxPQUFPLFNBQVAsSUFBb0IsUUFBcEIsSUFDQyxhQUFhLElBQWIsSUFBcUIsQ0FBQyxTQUFTLFNBQVQsQ0FBRCxDQUZ4QixFQUdHO0FBQ0wsbUJBQWEsRUFBYixDQURLO0FBRUwsVUFBSSxhQUFhLEVBQWIsSUFBbUIsbUJBQW1CLElBQW5CLENBQXdCLE1BQXhCLENBQW5CLEVBQW9EO0FBQ3RELGVBQU8sVUFBVSxjQUFjLE1BQWQsQ0FBVixFQUFpQyxDQUFqQyxFQUFvQyxLQUFwQyxDQUFQLENBRHNEO09BQXhEO0tBTEY7QUFTQSxXQUFPLFlBQVksSUFBWixDQUFpQixNQUFqQixFQUF5QixTQUF6QixFQUFvQyxLQUFwQyxDQUFQLENBbEJ1QztHQUF6Qzs7Ozs7QUFuQ0ksa0JBQVksUUFBUSxjQUFSO0FBQ1osdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsaUJBQVcsUUFBUSxZQUFSO0FBQ1gsMkJBQXFCLFFBQVEsdUJBQVI7QUFDckIsc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsaUJBQVcsUUFBUSxZQUFSO0FBR1gseUJBQW1CO0FBR25CLG9CQUFjLE9BQU8sU0FBUDtBQUdkLG9CQUFjLFlBQVksS0FBWjtBQTBDbEIsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NwbGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY2FzdFNsaWNlID0gcmVxdWlyZSgnLi9fY2FzdFNsaWNlJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9pc1JlZ0V4cCcpLFxuICAgIHJlSGFzQ29tcGxleFN5bWJvbCA9IHJlcXVpcmUoJy4vX3JlSGFzQ29tcGxleFN5bWJvbCcpLFxuICAgIHN0cmluZ1RvQXJyYXkgPSByZXF1aXJlKCcuL19zdHJpbmdUb0FycmF5JyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHRoZSBtYXhpbXVtIGxlbmd0aCBhbmQgaW5kZXggb2YgYW4gYXJyYXkuICovXG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDQyOTQ5NjcyOTU7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdQcm90byA9IFN0cmluZy5wcm90b3R5cGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVTcGxpdCA9IHN0cmluZ1Byb3RvLnNwbGl0O1xuXG4vKipcbiAqIFNwbGl0cyBgc3RyaW5nYCBieSBgc2VwYXJhdG9yYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgYmFzZWQgb25cbiAqIFtgU3RyaW5nI3NwbGl0YF0oaHR0cHM6Ly9tZG4uaW8vU3RyaW5nL3NwbGl0KS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBzcGxpdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gc2VwYXJhdG9yIFRoZSBzZXBhcmF0b3IgcGF0dGVybiB0byBzcGxpdCBieS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXRdIFRoZSBsZW5ndGggdG8gdHJ1bmNhdGUgcmVzdWx0cyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHN0cmluZyBzZWdtZW50cy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zcGxpdCgnYS1iLWMnLCAnLScsIDIpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICovXG5mdW5jdGlvbiBzcGxpdChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpIHtcbiAgaWYgKGxpbWl0ICYmIHR5cGVvZiBsaW1pdCAhPSAnbnVtYmVyJyAmJiBpc0l0ZXJhdGVlQ2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpKSB7XG4gICAgc2VwYXJhdG9yID0gbGltaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgbGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX0FSUkFZX0xFTkdUSCA6IGxpbWl0ID4+PiAwO1xuICBpZiAoIWxpbWl0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIGlmIChzdHJpbmcgJiYgKFxuICAgICAgICB0eXBlb2Ygc2VwYXJhdG9yID09ICdzdHJpbmcnIHx8XG4gICAgICAgIChzZXBhcmF0b3IgIT0gbnVsbCAmJiAhaXNSZWdFeHAoc2VwYXJhdG9yKSlcbiAgICAgICkpIHtcbiAgICBzZXBhcmF0b3IgKz0gJyc7XG4gICAgaWYgKHNlcGFyYXRvciA9PSAnJyAmJiByZUhhc0NvbXBsZXhTeW1ib2wudGVzdChzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gY2FzdFNsaWNlKHN0cmluZ1RvQXJyYXkoc3RyaW5nKSwgMCwgbGltaXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmF0aXZlU3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
