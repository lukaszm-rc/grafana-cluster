'use strict';

System.register([], function (_export, _context) {
    var rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange, rsAstral, rsCombo, rsFitz, rsModifier, rsNonAstral, rsRegional, rsSurrPair, rsZWJ, reOptMod, rsOptVar, rsOptJoin, rsSeq, rsSymbol, reComplexSymbol;


    /**
     * Converts `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function stringToArray(string) {
        return string.match(reComplexSymbol);
    }

    return {
        setters: [],
        execute: function () {
            rsAstralRange = '\\ud800-\\udfff';
            rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
            rsComboSymbolsRange = '\\u20d0-\\u20f0';
            rsVarRange = '\\ufe0e\\ufe0f';
            rsAstral = '[' + rsAstralRange + ']';
            rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
            rsFitz = '\\ud83c[\\udffb-\\udfff]';
            rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
            rsNonAstral = '[^' + rsAstralRange + ']';
            rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
            rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
            rsZWJ = '\\u200d';
            reOptMod = rsModifier + '?';
            rsOptVar = '[' + rsVarRange + ']?';
            rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
            rsSeq = rsOptVar + reOptMod + rsOptJoin;
            rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
            reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
            module.exports = stringToArray;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zdHJpbmdUb0FycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQ0EsYUFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCO0FBQzdCLGVBQU8sT0FBTyxLQUFQLENBQWEsZUFBYixDQUFQLENBRDZCO0tBQS9COzs7OztBQWhDSSw0QkFBZ0I7QUFDaEIsZ0NBQW9CO0FBQ3BCLGtDQUFzQjtBQUN0Qix5QkFBYTtBQUdiLHVCQUFXLE1BQU0sYUFBTixHQUFzQixHQUF0QjtBQUNYLHNCQUFVLE1BQU0saUJBQU4sR0FBMEIsbUJBQTFCLEdBQWdELEdBQWhEO0FBQ1YscUJBQVM7QUFDVCx5QkFBYSxRQUFRLE9BQVIsR0FBa0IsR0FBbEIsR0FBd0IsTUFBeEIsR0FBaUMsR0FBakM7QUFDYiwwQkFBYyxPQUFPLGFBQVAsR0FBdUIsR0FBdkI7QUFDZCx5QkFBYTtBQUNiLHlCQUFhO0FBQ2Isb0JBQVE7QUFHUix1QkFBVyxhQUFhLEdBQWI7QUFDWCx1QkFBVyxNQUFNLFVBQU4sR0FBbUIsSUFBbkI7QUFDWCx3QkFBWSxRQUFRLEtBQVIsR0FBZ0IsS0FBaEIsR0FBd0IsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixVQUExQixFQUFzQyxJQUF0QyxDQUEyQyxHQUEzQyxDQUF4QixHQUEwRSxHQUExRSxHQUFnRixRQUFoRixHQUEyRixRQUEzRixHQUFzRyxJQUF0RztBQUNaLG9CQUFRLFdBQVcsUUFBWCxHQUFzQixTQUF0QjtBQUNSLHVCQUFXLFFBQVEsQ0FBQyxjQUFjLE9BQWQsR0FBd0IsR0FBeEIsRUFBNkIsT0FBOUIsRUFBdUMsVUFBdkMsRUFBbUQsVUFBbkQsRUFBK0QsUUFBL0QsRUFBeUUsSUFBekUsQ0FBOEUsR0FBOUUsQ0FBUixHQUE2RixHQUE3RjtBQUdYLDhCQUFrQixPQUFPLFNBQVMsS0FBVCxHQUFpQixNQUFqQixHQUEwQixJQUExQixHQUFpQyxRQUFqQyxHQUE0QyxLQUE1QyxFQUFtRCxHQUExRDtBQWF0QixtQkFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19zdHJpbmdUb0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjMnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCcsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlQ29tcGxleFN5bWJvbCA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlQ29tcGxleFN5bWJvbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9BcnJheTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
