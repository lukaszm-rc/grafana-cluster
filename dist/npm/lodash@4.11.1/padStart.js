'use strict';

System.register([], function (_export, _context) {
    var createPadding, stringSize, toInteger, toString;


    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);

        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
    }

    return {
        setters: [],
        execute: function () {
            createPadding = require('./_createPadding');
            stringSize = require('./_stringSize');
            toInteger = require('./toInteger');
            toString = require('./toString');
            module.exports = padStart;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BhZFN0YXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLGFBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QztBQUN2QyxpQkFBUyxTQUFTLE1BQVQsQ0FBVCxDQUR1QztBQUV2QyxpQkFBUyxVQUFVLE1BQVYsQ0FBVCxDQUZ1Qzs7QUFJdkMsWUFBSSxZQUFZLFNBQVMsV0FBVyxNQUFYLENBQVQsR0FBOEIsQ0FBOUIsQ0FKdUI7QUFLdkMsZUFBTyxNQUFDLElBQVUsWUFBWSxNQUFaLEdBQ2IsY0FBYyxTQUFTLFNBQVQsRUFBb0IsS0FBbEMsSUFBMkMsTUFBM0MsR0FDRCxNQUZHLENBTGdDO0tBQXpDOzs7OztBQTVCSSw0QkFBZ0IsUUFBUSxrQkFBUjtBQUNoQix5QkFBYSxRQUFRLGVBQVI7QUFDYix3QkFBWSxRQUFRLGFBQVI7QUFDWix1QkFBVyxRQUFRLFlBQVI7QUFtQ2YsbUJBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9wYWRTdGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZVBhZGRpbmcgPSByZXF1aXJlKCcuL19jcmVhdGVQYWRkaW5nJyksXG4gICAgc3RyaW5nU2l6ZSA9IHJlcXVpcmUoJy4vX3N0cmluZ1NpemUnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIFBhZHMgYHN0cmluZ2Agb24gdGhlIGxlZnQgc2lkZSBpZiBpdCdzIHNob3J0ZXIgdGhhbiBgbGVuZ3RoYC4gUGFkZGluZ1xuICogY2hhcmFjdGVycyBhcmUgdHJ1bmNhdGVkIGlmIHRoZXkgZXhjZWVkIGBsZW5ndGhgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIHBhZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPTBdIFRoZSBwYWRkaW5nIGxlbmd0aC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY2hhcnM9JyAnXSBUaGUgc3RyaW5nIHVzZWQgYXMgcGFkZGluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHBhZGRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucGFkU3RhcnQoJ2FiYycsIDYpO1xuICogLy8gPT4gJyAgIGFiYydcbiAqXG4gKiBfLnBhZFN0YXJ0KCdhYmMnLCA2LCAnXy0nKTtcbiAqIC8vID0+ICdfLV9hYmMnXG4gKlxuICogXy5wYWRTdGFydCgnYWJjJywgMyk7XG4gKiAvLyA9PiAnYWJjJ1xuICovXG5mdW5jdGlvbiBwYWRTdGFydChzdHJpbmcsIGxlbmd0aCwgY2hhcnMpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgbGVuZ3RoID0gdG9JbnRlZ2VyKGxlbmd0aCk7XG5cbiAgdmFyIHN0ckxlbmd0aCA9IGxlbmd0aCA/IHN0cmluZ1NpemUoc3RyaW5nKSA6IDA7XG4gIHJldHVybiAobGVuZ3RoICYmIHN0ckxlbmd0aCA8IGxlbmd0aClcbiAgICA/IChjcmVhdGVQYWRkaW5nKGxlbmd0aCAtIHN0ckxlbmd0aCwgY2hhcnMpICsgc3RyaW5nKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhZFN0YXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
