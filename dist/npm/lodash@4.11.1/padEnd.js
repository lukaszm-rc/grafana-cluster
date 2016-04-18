'use strict';

System.register([], function (_export, _context) {
    var createPadding, stringSize, toInteger, toString;


    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
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
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);

        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
    }

    return {
        setters: [],
        execute: function () {
            createPadding = require('./_createPadding');
            stringSize = require('./_stringSize');
            toInteger = require('./toInteger');
            toString = require('./toString');
            module.exports = padEnd;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BhZEVuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxhQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsRUFBdUM7QUFDckMsaUJBQVMsU0FBUyxNQUFULENBQVQsQ0FEcUM7QUFFckMsaUJBQVMsVUFBVSxNQUFWLENBQVQsQ0FGcUM7O0FBSXJDLFlBQUksWUFBWSxTQUFTLFdBQVcsTUFBWCxDQUFULEdBQThCLENBQTlCLENBSnFCO0FBS3JDLGVBQU8sTUFBQyxJQUFVLFlBQVksTUFBWixHQUNiLFNBQVMsY0FBYyxTQUFTLFNBQVQsRUFBb0IsS0FBbEMsQ0FBVCxHQUNELE1BRkcsQ0FMOEI7S0FBdkM7Ozs7O0FBNUJJLDRCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLHlCQUFhLFFBQVEsZUFBUjtBQUNiLHdCQUFZLFFBQVEsYUFBUjtBQUNaLHVCQUFXLFFBQVEsWUFBUjtBQW1DZixtQkFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3BhZEVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZVBhZGRpbmcgPSByZXF1aXJlKCcuL19jcmVhdGVQYWRkaW5nJyksXG4gICAgc3RyaW5nU2l6ZSA9IHJlcXVpcmUoJy4vX3N0cmluZ1NpemUnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIFBhZHMgYHN0cmluZ2Agb24gdGhlIHJpZ2h0IHNpZGUgaWYgaXQncyBzaG9ydGVyIHRoYW4gYGxlbmd0aGAuIFBhZGRpbmdcbiAqIGNoYXJhY3RlcnMgYXJlIHRydW5jYXRlZCBpZiB0aGV5IGV4Y2VlZCBgbGVuZ3RoYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBwYWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0wXSBUaGUgcGFkZGluZyBsZW5ndGguXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NoYXJzPScgJ10gVGhlIHN0cmluZyB1c2VkIGFzIHBhZGRpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBwYWRkZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnBhZEVuZCgnYWJjJywgNik7XG4gKiAvLyA9PiAnYWJjICAgJ1xuICpcbiAqIF8ucGFkRW5kKCdhYmMnLCA2LCAnXy0nKTtcbiAqIC8vID0+ICdhYmNfLV8nXG4gKlxuICogXy5wYWRFbmQoJ2FiYycsIDMpO1xuICogLy8gPT4gJ2FiYydcbiAqL1xuZnVuY3Rpb24gcGFkRW5kKHN0cmluZywgbGVuZ3RoLCBjaGFycykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBsZW5ndGggPSB0b0ludGVnZXIobGVuZ3RoKTtcblxuICB2YXIgc3RyTGVuZ3RoID0gbGVuZ3RoID8gc3RyaW5nU2l6ZShzdHJpbmcpIDogMDtcbiAgcmV0dXJuIChsZW5ndGggJiYgc3RyTGVuZ3RoIDwgbGVuZ3RoKVxuICAgID8gKHN0cmluZyArIGNyZWF0ZVBhZGRpbmcobGVuZ3RoIC0gc3RyTGVuZ3RoLCBjaGFycykpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFkRW5kO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
