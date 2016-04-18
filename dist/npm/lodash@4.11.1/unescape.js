'use strict';

System.register([], function (_export, _context) {
    var toString, unescapeHtmlChar, reEscapedHtml, reHasEscapedHtml;


    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
    }

    return {
        setters: [],
        execute: function () {
            toString = require('./toString');
            unescapeHtmlChar = require('./_unescapeHtmlChar');
            reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g;
            reHasEscapedHtml = RegExp(reEscapedHtml.source);
            module.exports = unescape;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuZXNjYXBlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEsYUFBUyxRQUFULENBQWtCLE1BQWxCLEVBQTBCO0FBQ3hCLGlCQUFTLFNBQVMsTUFBVCxDQUFULENBRHdCO0FBRXhCLGVBQU8sTUFBQyxJQUFVLGlCQUFpQixJQUFqQixDQUFzQixNQUF0QixDQUFWLEdBQ0osT0FBTyxPQUFQLENBQWUsYUFBZixFQUE4QixnQkFBOUIsQ0FERyxHQUVILE1BRkcsQ0FGaUI7S0FBMUI7Ozs7O0FBMUJJLHVCQUFXLFFBQVEsWUFBUjtBQUNYLCtCQUFtQixRQUFRLHFCQUFSO0FBR25CLDRCQUFnQjtBQUNoQiwrQkFBbUIsT0FBTyxjQUFjLE1BQWQ7QUE0QjlCLG1CQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdW5lc2NhcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1bmVzY2FwZUh0bWxDaGFyID0gcmVxdWlyZSgnLi9fdW5lc2NhcGVIdG1sQ2hhcicpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBIVE1MIGVudGl0aWVzIGFuZCBIVE1MIGNoYXJhY3RlcnMuICovXG52YXIgcmVFc2NhcGVkSHRtbCA9IC8mKD86YW1wfGx0fGd0fHF1b3R8IzM5fCM5Nik7L2csXG4gICAgcmVIYXNFc2NhcGVkSHRtbCA9IFJlZ0V4cChyZUVzY2FwZWRIdG1sLnNvdXJjZSk7XG5cbi8qKlxuICogVGhlIGludmVyc2Ugb2YgYF8uZXNjYXBlYDsgdGhpcyBtZXRob2QgY29udmVydHMgdGhlIEhUTUwgZW50aXRpZXNcbiAqIGAmYW1wO2AsIGAmbHQ7YCwgYCZndDtgLCBgJnF1b3Q7YCwgYCYjMzk7YCwgYW5kIGAmIzk2O2AgaW4gYHN0cmluZ2AgdG9cbiAqIHRoZWlyIGNvcnJlc3BvbmRpbmcgY2hhcmFjdGVycy5cbiAqXG4gKiAqKk5vdGU6KiogTm8gb3RoZXIgSFRNTCBlbnRpdGllcyBhcmUgdW5lc2NhcGVkLiBUbyB1bmVzY2FwZSBhZGRpdGlvbmFsXG4gKiBIVE1MIGVudGl0aWVzIHVzZSBhIHRoaXJkLXBhcnR5IGxpYnJhcnkgbGlrZSBbX2hlX10oaHR0cHM6Ly9tdGhzLmJlL2hlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuNi4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byB1bmVzY2FwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHVuZXNjYXBlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5lc2NhcGUoJ2ZyZWQsIGJhcm5leSwgJmFtcDsgcGViYmxlcycpO1xuICogLy8gPT4gJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiB1bmVzY2FwZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIChzdHJpbmcgJiYgcmVIYXNFc2NhcGVkSHRtbC50ZXN0KHN0cmluZykpXG4gICAgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZWRIdG1sLCB1bmVzY2FwZUh0bWxDaGFyKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuZXNjYXBlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
