'use strict';

System.register([], function (_export, _context) {
  var toString, stringProto, nativeReplace;


  /**
   * Replaces matches for `pattern` in `string` with `replacement`.
   *
   * **Note:** This method is based on
   * [`String#replace`](https://mdn.io/String/replace).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to modify.
   * @param {RegExp|string} pattern The pattern to replace.
   * @param {Function|string} replacement The match replacement.
   * @returns {string} Returns the modified string.
   * @example
   *
   * _.replace('Hi Fred', 'Fred', 'Barney');
   * // => 'Hi Barney'
   */
  function replace() {
    var args = arguments,
        string = toString(args[0]);

    return args.length < 3 ? string : nativeReplace.call(string, args[1], args[2]);
  }

  return {
    setters: [],
    execute: function () {
      toString = require('./toString');
      stringProto = String.prototype;
      nativeReplace = stringProto.replace;
      module.exports = replace;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JlcGxhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSxXQUFTLE9BQVQsR0FBbUI7QUFDakIsUUFBSSxPQUFPLFNBQVA7UUFDQSxTQUFTLFNBQVMsS0FBSyxDQUFMLENBQVQsQ0FBVCxDQUZhOztBQUlqQixXQUFPLEtBQUssTUFBTCxHQUFjLENBQWQsR0FBa0IsTUFBbEIsR0FBMkIsY0FBYyxJQUFkLENBQW1CLE1BQW5CLEVBQTJCLEtBQUssQ0FBTCxDQUEzQixFQUFvQyxLQUFLLENBQUwsQ0FBcEMsQ0FBM0IsQ0FKVTtHQUFuQjs7Ozs7QUEzQkksaUJBQVcsUUFBUSxZQUFSO0FBR1gsb0JBQWMsT0FBTyxTQUFQO0FBR2Qsc0JBQWdCLFlBQVksT0FBWjtBQTRCcEIsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3JlcGxhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1Byb3RvID0gU3RyaW5nLnByb3RvdHlwZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZVJlcGxhY2UgPSBzdHJpbmdQcm90by5yZXBsYWNlO1xuXG4vKipcbiAqIFJlcGxhY2VzIG1hdGNoZXMgZm9yIGBwYXR0ZXJuYCBpbiBgc3RyaW5nYCB3aXRoIGByZXBsYWNlbWVudGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uXG4gKiBbYFN0cmluZyNyZXBsYWNlYF0oaHR0cHM6Ly9tZG4uaW8vU3RyaW5nL3JlcGxhY2UpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gcGF0dGVybiBUaGUgcGF0dGVybiB0byByZXBsYWNlLlxuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IHJlcGxhY2VtZW50IFRoZSBtYXRjaCByZXBsYWNlbWVudC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIG1vZGlmaWVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5yZXBsYWNlKCdIaSBGcmVkJywgJ0ZyZWQnLCAnQmFybmV5Jyk7XG4gKiAvLyA9PiAnSGkgQmFybmV5J1xuICovXG5mdW5jdGlvbiByZXBsYWNlKCkge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgIHN0cmluZyA9IHRvU3RyaW5nKGFyZ3NbMF0pO1xuXG4gIHJldHVybiBhcmdzLmxlbmd0aCA8IDMgPyBzdHJpbmcgOiBuYXRpdmVSZXBsYWNlLmNhbGwoc3RyaW5nLCBhcmdzWzFdLCBhcmdzWzJdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXBsYWNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
