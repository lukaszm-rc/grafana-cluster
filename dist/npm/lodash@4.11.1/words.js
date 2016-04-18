'use strict';

System.register([], function (_export, _context) {
    var toString, reBasicWord, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsDingbatRange, rsLowerRange, rsMathOpRange, rsNonCharRange, rsQuoteRange, rsSpaceRange, rsUpperRange, rsVarRange, rsBreakRange, rsApos, rsBreak, rsCombo, rsDigits, rsDingbat, rsLower, rsMisc, rsFitz, rsModifier, rsNonAstral, rsRegional, rsSurrPair, rsUpper, rsZWJ, rsLowerMisc, rsUpperMisc, rsOptLowerContr, rsOptUpperContr, reOptMod, rsOptVar, rsOptJoin, rsSeq, rsEmoji, reComplexWord, reHasComplexWord;


    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined : pattern;

        if (pattern === undefined) {
            pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
        }
        return string.match(pattern) || [];
    }

    return {
        setters: [],
        execute: function () {
            toString = require('./toString');
            reBasicWord = /[a-zA-Z0-9]+/g;
            rsAstralRange = '\\ud800-\\udfff';
            rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
            rsComboSymbolsRange = '\\u20d0-\\u20f0';
            rsDingbatRange = '\\u2700-\\u27bf';
            rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
            rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
            rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
            rsQuoteRange = '\\u2018\\u2019\\u201c\\u201d';
            rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
            rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
            rsVarRange = '\\ufe0e\\ufe0f';
            rsBreakRange = rsMathOpRange + rsNonCharRange + rsQuoteRange + rsSpaceRange;
            rsApos = '[\'’]';
            rsBreak = '[' + rsBreakRange + ']';
            rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
            rsDigits = '\\d+';
            rsDingbat = '[' + rsDingbatRange + ']';
            rsLower = '[' + rsLowerRange + ']';
            rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']';
            rsFitz = '\\ud83c[\\udffb-\\udfff]';
            rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
            rsNonAstral = '[^' + rsAstralRange + ']';
            rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
            rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
            rsUpper = '[' + rsUpperRange + ']';
            rsZWJ = '\\u200d';
            rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')';
            rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')';
            rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?';
            rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?';
            reOptMod = rsModifier + '?';
            rsOptVar = '[' + rsVarRange + ']?';
            rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
            rsSeq = rsOptVar + reOptMod + rsOptJoin;
            rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;
            reComplexWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')', rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr, rsUpper + '+' + rsOptUpperContr, rsDigits, rsEmoji].join('|'), 'g');
            reHasComplexWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            module.exports = words;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3dvcmRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUEsYUFBUyxLQUFULENBQWUsTUFBZixFQUF1QixPQUF2QixFQUFnQyxLQUFoQyxFQUF1QztBQUNyQyxpQkFBUyxTQUFTLE1BQVQsQ0FBVCxDQURxQztBQUVyQyxrQkFBVSxRQUFRLFNBQVIsR0FBb0IsT0FBcEIsQ0FGMkI7O0FBSXJDLFlBQUksWUFBWSxTQUFaLEVBQXVCO0FBQ3pCLHNCQUFVLGlCQUFpQixJQUFqQixDQUFzQixNQUF0QixJQUFnQyxhQUFoQyxHQUFnRCxXQUFoRCxDQURlO1NBQTNCO0FBR0EsZUFBTyxPQUFPLEtBQVAsQ0FBYSxPQUFiLEtBQXlCLEVBQXpCLENBUDhCO0tBQXZDOzs7OztBQTlFSSx1QkFBVyxRQUFRLFlBQVI7QUFHWCwwQkFBYztBQUdkLDRCQUFnQjtBQUNoQixnQ0FBb0I7QUFDcEIsa0NBQXNCO0FBQ3RCLDZCQUFpQjtBQUNqQiwyQkFBZTtBQUNmLDRCQUFnQjtBQUNoQiw2QkFBaUI7QUFDakIsMkJBQWU7QUFDZiwyQkFBZTtBQUNmLDJCQUFlO0FBQ2YseUJBQWE7QUFDYiwyQkFBZSxnQkFBZ0IsY0FBaEIsR0FBaUMsWUFBakMsR0FBZ0QsWUFBaEQ7QUFHZixxQkFBUztBQUNULHNCQUFVLE1BQU0sWUFBTixHQUFxQixHQUFyQjtBQUNWLHNCQUFVLE1BQU0saUJBQU4sR0FBMEIsbUJBQTFCLEdBQWdELEdBQWhEO0FBQ1YsdUJBQVc7QUFDWCx3QkFBWSxNQUFNLGNBQU4sR0FBdUIsR0FBdkI7QUFDWixzQkFBVSxNQUFNLFlBQU4sR0FBcUIsR0FBckI7QUFDVixxQkFBUyxPQUFPLGFBQVAsR0FBdUIsWUFBdkIsR0FBc0MsUUFBdEMsR0FBaUQsY0FBakQsR0FBa0UsWUFBbEUsR0FBaUYsWUFBakYsR0FBZ0csR0FBaEc7QUFDVCxxQkFBUztBQUNULHlCQUFhLFFBQVEsT0FBUixHQUFrQixHQUFsQixHQUF3QixNQUF4QixHQUFpQyxHQUFqQztBQUNiLDBCQUFjLE9BQU8sYUFBUCxHQUF1QixHQUF2QjtBQUNkLHlCQUFhO0FBQ2IseUJBQWE7QUFDYixzQkFBVSxNQUFNLFlBQU4sR0FBcUIsR0FBckI7QUFDVixvQkFBUTtBQUdSLDBCQUFjLFFBQVEsT0FBUixHQUFrQixHQUFsQixHQUF3QixNQUF4QixHQUFpQyxHQUFqQztBQUNkLDBCQUFjLFFBQVEsT0FBUixHQUFrQixHQUFsQixHQUF3QixNQUF4QixHQUFpQyxHQUFqQztBQUNkLDhCQUFrQixRQUFRLE1BQVIsR0FBaUIsd0JBQWpCO0FBQ2xCLDhCQUFrQixRQUFRLE1BQVIsR0FBaUIsd0JBQWpCO0FBQ2xCLHVCQUFXLGFBQWEsR0FBYjtBQUNYLHVCQUFXLE1BQU0sVUFBTixHQUFtQixJQUFuQjtBQUNYLHdCQUFZLFFBQVEsS0FBUixHQUFnQixLQUFoQixHQUF3QixDQUFDLFdBQUQsRUFBYyxVQUFkLEVBQTBCLFVBQTFCLEVBQXNDLElBQXRDLENBQTJDLEdBQTNDLENBQXhCLEdBQTBFLEdBQTFFLEdBQWdGLFFBQWhGLEdBQTJGLFFBQTNGLEdBQXNHLElBQXRHO0FBQ1osb0JBQVEsV0FBVyxRQUFYLEdBQXNCLFNBQXRCO0FBQ1Isc0JBQVUsUUFBUSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLFVBQXhCLEVBQW9DLElBQXBDLENBQXlDLEdBQXpDLENBQVIsR0FBd0QsR0FBeEQsR0FBOEQsS0FBOUQ7QUFHViw0QkFBZ0IsT0FBTyxDQUN6QixVQUFVLEdBQVYsR0FBZ0IsT0FBaEIsR0FBMEIsR0FBMUIsR0FBZ0MsZUFBaEMsR0FBa0QsS0FBbEQsR0FBMEQsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixHQUFuQixFQUF3QixJQUF4QixDQUE2QixHQUE3QixDQUExRCxHQUE4RixHQUE5RixFQUNBLGNBQWMsR0FBZCxHQUFvQixlQUFwQixHQUFzQyxLQUF0QyxHQUE4QyxDQUFDLE9BQUQsRUFBVSxVQUFVLFdBQVYsRUFBdUIsR0FBakMsRUFBc0MsSUFBdEMsQ0FBMkMsR0FBM0MsQ0FBOUMsR0FBZ0csR0FBaEcsRUFDQSxVQUFVLEdBQVYsR0FBZ0IsV0FBaEIsR0FBOEIsR0FBOUIsR0FBb0MsZUFBcEMsRUFDQSxVQUFVLEdBQVYsR0FBZ0IsZUFBaEIsRUFDQSxRQUx5QixFQU16QixPQU55QixFQU96QixJQVB5QixDQU9wQixHQVBvQixDQUFQLEVBT1AsR0FQTztBQVVoQiwrQkFBbUI7QUErQnZCLG1CQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvd29yZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbm9uLWNvbXBvdW5kIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQmFzaWNXb3JkID0gL1thLXpBLVowLTldKy9nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyMycsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGYwJyxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNRdW90ZVJhbmdlID0gJ1xcXFx1MjAxOFxcXFx1MjAxOVxcXFx1MjAxY1xcXFx1MjAxZCcsXG4gICAgcnNTcGFjZVJhbmdlID0gJyBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwJyxcbiAgICByc1VwcGVyUmFuZ2UgPSAnQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZicsXG4gICAgcnNCcmVha1JhbmdlID0gcnNNYXRoT3BSYW5nZSArIHJzTm9uQ2hhclJhbmdlICsgcnNRdW90ZVJhbmdlICsgcnNTcGFjZVJhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCIsXG4gICAgcnNCcmVhayA9ICdbJyArIHJzQnJlYWtSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib01hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgJ10nLFxuICAgIHJzRGlnaXRzID0gJ1xcXFxkKycsXG4gICAgcnNEaW5nYmF0ID0gJ1snICsgcnNEaW5nYmF0UmFuZ2UgKyAnXScsXG4gICAgcnNMb3dlciA9ICdbJyArIHJzTG93ZXJSYW5nZSArICddJyxcbiAgICByc01pc2MgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArIHJzQnJlYWtSYW5nZSArIHJzRGlnaXRzICsgcnNEaW5nYmF0UmFuZ2UgKyByc0xvd2VyUmFuZ2UgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzVXBwZXIgPSAnWycgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcnNMb3dlck1pc2MgPSAnKD86JyArIHJzTG93ZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNVcHBlck1pc2MgPSAnKD86JyArIHJzVXBwZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNPcHRMb3dlckNvbnRyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPycsXG4gICAgcnNPcHRVcHBlckNvbnRyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86RHxMTHxNfFJFfFN8VHxWRSkpPycsXG4gICAgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVDb21wbGV4V29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRMb3dlckNvbnRyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXJNaXNjICsgJysnICsgcnNPcHRVcHBlckNvbnRyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTG93ZXJNaXNjLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXJNaXNjICsgJysnICsgcnNPcHRMb3dlckNvbnRyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRVcHBlckNvbnRyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHRoYXQgbmVlZCBhIG1vcmUgcm9idXN0IHJlZ2V4cCB0byBtYXRjaCB3b3Jkcy4gKi9cbnZhciByZUhhc0NvbXBsZXhXb3JkID0gL1thLXpdW0EtWl18W0EtWl17Mix9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIFNwbGl0cyBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfSBbcGF0dGVybl0gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggd29yZHMuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcyddXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICcmJywgJ3BlYmJsZXMnXVxuICovXG5mdW5jdGlvbiB3b3JkcyhzdHJpbmcsIHBhdHRlcm4sIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHBhdHRlcm4gPSBndWFyZCA/IHVuZGVmaW5lZCA6IHBhdHRlcm47XG5cbiAgaWYgKHBhdHRlcm4gPT09IHVuZGVmaW5lZCkge1xuICAgIHBhdHRlcm4gPSByZUhhc0NvbXBsZXhXb3JkLnRlc3Qoc3RyaW5nKSA/IHJlQ29tcGxleFdvcmQgOiByZUJhc2ljV29yZDtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
