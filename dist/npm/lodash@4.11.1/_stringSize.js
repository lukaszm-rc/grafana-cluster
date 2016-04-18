'use strict';

System.register([], function (_export, _context) {
    var reHasComplexSymbol, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange, rsAstral, rsCombo, rsFitz, rsModifier, rsNonAstral, rsRegional, rsSurrPair, rsZWJ, reOptMod, rsOptVar, rsOptJoin, rsSeq, rsSymbol, reComplexSymbol;

    function stringSize(string) {
        if (!(string && reHasComplexSymbol.test(string))) {
            return string.length;
        }
        var result = reComplexSymbol.lastIndex = 0;
        while (reComplexSymbol.test(string)) {
            result++;
        }
        return result;
    }
    return {
        setters: [],
        execute: function () {
            reHasComplexSymbol = require('./_reHasComplexSymbol');
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
            module.exports = stringSize;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zdHJpbmdTaXplLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBb0JBLGFBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QjtBQUMxQixZQUFJLEVBQUUsVUFBVSxtQkFBbUIsSUFBbkIsQ0FBd0IsTUFBeEIsQ0FBVixDQUFGLEVBQThDO0FBQ2hELG1CQUFPLE9BQU8sTUFBUCxDQUR5QztTQUFsRDtBQUdBLFlBQUksU0FBUyxnQkFBZ0IsU0FBaEIsR0FBNEIsQ0FBNUIsQ0FKYTtBQUsxQixlQUFPLGdCQUFnQixJQUFoQixDQUFxQixNQUFyQixDQUFQLEVBQXFDO0FBQ25DLHFCQURtQztTQUFyQztBQUdBLGVBQU8sTUFBUCxDQVIwQjtLQUE1Qjs7OztBQW5CSSxpQ0FBcUIsUUFBUSx1QkFBUjtBQUNyQiw0QkFBZ0I7QUFDaEIsZ0NBQW9CO0FBQ3BCLGtDQUFzQjtBQUN0Qix5QkFBYTtBQUNiLHVCQUFXLE1BQU0sYUFBTixHQUFzQixHQUF0QjtBQUNYLHNCQUFVLE1BQU0saUJBQU4sR0FBMEIsbUJBQTFCLEdBQWdELEdBQWhEO0FBQ1YscUJBQVM7QUFDVCx5QkFBYSxRQUFRLE9BQVIsR0FBa0IsR0FBbEIsR0FBd0IsTUFBeEIsR0FBaUMsR0FBakM7QUFDYiwwQkFBYyxPQUFPLGFBQVAsR0FBdUIsR0FBdkI7QUFDZCx5QkFBYTtBQUNiLHlCQUFhO0FBQ2Isb0JBQVE7QUFDUix1QkFBVyxhQUFhLEdBQWI7QUFDWCx1QkFBVyxNQUFNLFVBQU4sR0FBbUIsSUFBbkI7QUFDWCx3QkFBWSxRQUFRLEtBQVIsR0FBZ0IsS0FBaEIsR0FBd0IsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixVQUExQixFQUFzQyxJQUF0QyxDQUEyQyxHQUEzQyxDQUF4QixHQUEwRSxHQUExRSxHQUFnRixRQUFoRixHQUEyRixRQUEzRixHQUFzRyxJQUF0RztBQUNaLG9CQUFRLFdBQVcsUUFBWCxHQUFzQixTQUF0QjtBQUNSLHVCQUFXLFFBQVEsQ0FBQyxjQUFjLE9BQWQsR0FBd0IsR0FBeEIsRUFBNkIsT0FBOUIsRUFBdUMsVUFBdkMsRUFBbUQsVUFBbkQsRUFBK0QsUUFBL0QsRUFBeUUsSUFBekUsQ0FBOEUsR0FBOUUsQ0FBUixHQUE2RixHQUE3RjtBQUNYLDhCQUFrQixPQUFPLFNBQVMsS0FBVCxHQUFpQixNQUFqQixHQUEwQixJQUExQixHQUFpQyxRQUFqQyxHQUE0QyxLQUE1QyxFQUFtRCxHQUExRDtBQVd0QixtQkFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19zdHJpbmdTaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgcmVIYXNDb21wbGV4U3ltYm9sID0gcmVxdWlyZSgnLi9fcmVIYXNDb21wbGV4U3ltYm9sJyk7XG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyMycsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGYwJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG52YXIgcmVDb21wbGV4U3ltYm9sID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5mdW5jdGlvbiBzdHJpbmdTaXplKHN0cmluZykge1xuICBpZiAoIShzdHJpbmcgJiYgcmVIYXNDb21wbGV4U3ltYm9sLnRlc3Qoc3RyaW5nKSkpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gcmVDb21wbGV4U3ltYm9sLmxhc3RJbmRleCA9IDA7XG4gIHdoaWxlIChyZUNvbXBsZXhTeW1ib2wudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0Kys7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nU2l6ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
