'use strict';

System.register([], function (_export, _context) {
  var castSlice, isObject, isRegExp, reHasComplexSymbol, stringSize, stringToArray, toInteger, toString, DEFAULT_TRUNC_LENGTH, DEFAULT_TRUNC_OMISSION, reFlags;


  /**
   * Truncates `string` if it's longer than the given maximum string length.
   * The last characters of the truncated string are replaced with the omission
   * string which defaults to "...".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to truncate.
   * @param {Object} [options={}] The options object.
   * @param {number} [options.length=30] The maximum string length.
   * @param {string} [options.omission='...'] The string to indicate text is omitted.
   * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
   * @returns {string} Returns the truncated string.
   * @example
   *
   * _.truncate('hi-diddly-ho there, neighborino');
   * // => 'hi-diddly-ho there, neighbo...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': ' '
   * });
   * // => 'hi-diddly-ho there,...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'length': 24,
   *   'separator': /,? +/
   * });
   * // => 'hi-diddly-ho there...'
   *
   * _.truncate('hi-diddly-ho there, neighborino', {
   *   'omission': ' [...]'
   * });
   * // => 'hi-diddly-ho there, neig [...]'
   */
  function truncate(string, options) {
    var length = DEFAULT_TRUNC_LENGTH,
        omission = DEFAULT_TRUNC_OMISSION;

    if (isObject(options)) {
      var separator = 'separator' in options ? options.separator : separator;
      length = 'length' in options ? toInteger(options.length) : length;
      omission = 'omission' in options ? toString(options.omission) : omission;
    }
    string = toString(string);

    var strLength = string.length;
    if (reHasComplexSymbol.test(string)) {
      var strSymbols = stringToArray(string);
      strLength = strSymbols.length;
    }
    if (length >= strLength) {
      return string;
    }
    var end = length - stringSize(omission);
    if (end < 1) {
      return omission;
    }
    var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);

    if (separator === undefined) {
      return result + omission;
    }
    if (strSymbols) {
      end += result.length - end;
    }
    if (isRegExp(separator)) {
      if (string.slice(end).search(separator)) {
        var match,
            substring = result;

        if (!separator.global) {
          separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
        }
        separator.lastIndex = 0;
        while (match = separator.exec(substring)) {
          var newEnd = match.index;
        }
        result = result.slice(0, newEnd === undefined ? end : newEnd);
      }
    } else if (string.indexOf(separator, end) != end) {
      var index = result.lastIndexOf(separator);
      if (index > -1) {
        result = result.slice(0, index);
      }
    }
    return result + omission;
  }

  return {
    setters: [],
    execute: function () {
      castSlice = require('./_castSlice');
      isObject = require('./isObject');
      isRegExp = require('./isRegExp');
      reHasComplexSymbol = require('./_reHasComplexSymbol');
      stringSize = require('./_stringSize');
      stringToArray = require('./_stringToArray');
      toInteger = require('./toInteger');
      toString = require('./toString');
      DEFAULT_TRUNC_LENGTH = 30;
      DEFAULT_TRUNC_OMISSION = '...';
      reFlags = /\w*$/;
      module.exports = truncate;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RydW5jYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREEsV0FBUyxRQUFULENBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLEVBQW1DO0FBQ2pDLFFBQUksU0FBUyxvQkFBVDtRQUNBLFdBQVcsc0JBQVgsQ0FGNkI7O0FBSWpDLFFBQUksU0FBUyxPQUFULENBQUosRUFBdUI7QUFDckIsVUFBSSxZQUFZLGVBQWUsT0FBZixHQUF5QixRQUFRLFNBQVIsR0FBb0IsU0FBN0MsQ0FESztBQUVyQixlQUFTLFlBQVksT0FBWixHQUFzQixVQUFVLFFBQVEsTUFBUixDQUFoQyxHQUFrRCxNQUFsRCxDQUZZO0FBR3JCLGlCQUFXLGNBQWMsT0FBZCxHQUF3QixTQUFTLFFBQVEsUUFBUixDQUFqQyxHQUFxRCxRQUFyRCxDQUhVO0tBQXZCO0FBS0EsYUFBUyxTQUFTLE1BQVQsQ0FBVCxDQVRpQzs7QUFXakMsUUFBSSxZQUFZLE9BQU8sTUFBUCxDQVhpQjtBQVlqQyxRQUFJLG1CQUFtQixJQUFuQixDQUF3QixNQUF4QixDQUFKLEVBQXFDO0FBQ25DLFVBQUksYUFBYSxjQUFjLE1BQWQsQ0FBYixDQUQrQjtBQUVuQyxrQkFBWSxXQUFXLE1BQVgsQ0FGdUI7S0FBckM7QUFJQSxRQUFJLFVBQVUsU0FBVixFQUFxQjtBQUN2QixhQUFPLE1BQVAsQ0FEdUI7S0FBekI7QUFHQSxRQUFJLE1BQU0sU0FBUyxXQUFXLFFBQVgsQ0FBVCxDQW5CdUI7QUFvQmpDLFFBQUksTUFBTSxDQUFOLEVBQVM7QUFDWCxhQUFPLFFBQVAsQ0FEVztLQUFiO0FBR0EsUUFBSSxTQUFTLGFBQ1QsVUFBVSxVQUFWLEVBQXNCLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCLElBQTlCLENBQW1DLEVBQW5DLENBRFMsR0FFVCxPQUFPLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLENBRlMsQ0F2Qm9COztBQTJCakMsUUFBSSxjQUFjLFNBQWQsRUFBeUI7QUFDM0IsYUFBTyxTQUFTLFFBQVQsQ0FEb0I7S0FBN0I7QUFHQSxRQUFJLFVBQUosRUFBZ0I7QUFDZCxhQUFRLE9BQU8sTUFBUCxHQUFnQixHQUFoQixDQURNO0tBQWhCO0FBR0EsUUFBSSxTQUFTLFNBQVQsQ0FBSixFQUF5QjtBQUN2QixVQUFJLE9BQU8sS0FBUCxDQUFhLEdBQWIsRUFBa0IsTUFBbEIsQ0FBeUIsU0FBekIsQ0FBSixFQUF5QztBQUN2QyxZQUFJLEtBQUo7WUFDSSxZQUFZLE1BQVosQ0FGbUM7O0FBSXZDLFlBQUksQ0FBQyxVQUFVLE1BQVYsRUFBa0I7QUFDckIsc0JBQVksT0FBTyxVQUFVLE1BQVYsRUFBa0IsU0FBUyxRQUFRLElBQVIsQ0FBYSxTQUFiLENBQVQsSUFBb0MsR0FBcEMsQ0FBckMsQ0FEcUI7U0FBdkI7QUFHQSxrQkFBVSxTQUFWLEdBQXNCLENBQXRCLENBUHVDO0FBUXZDLGVBQVEsUUFBUSxVQUFVLElBQVYsQ0FBZSxTQUFmLENBQVIsRUFBb0M7QUFDMUMsY0FBSSxTQUFTLE1BQU0sS0FBTixDQUQ2QjtTQUE1QztBQUdBLGlCQUFTLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsV0FBVyxTQUFYLEdBQXVCLEdBQXZCLEdBQTZCLE1BQTdCLENBQXpCLENBWHVDO09BQXpDO0tBREYsTUFjTyxJQUFJLE9BQU8sT0FBUCxDQUFlLFNBQWYsRUFBMEIsR0FBMUIsS0FBa0MsR0FBbEMsRUFBdUM7QUFDaEQsVUFBSSxRQUFRLE9BQU8sV0FBUCxDQUFtQixTQUFuQixDQUFSLENBRDRDO0FBRWhELFVBQUksUUFBUSxDQUFDLENBQUQsRUFBSTtBQUNkLGlCQUFTLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsS0FBaEIsQ0FBVCxDQURjO09BQWhCO0tBRks7QUFNUCxXQUFPLFNBQVMsUUFBVCxDQXJEMEI7R0FBbkM7Ozs7O0FBckRJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGlCQUFXLFFBQVEsWUFBUjtBQUNYLDJCQUFxQixRQUFRLHVCQUFSO0FBQ3JCLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLGtCQUFZLFFBQVEsYUFBUjtBQUNaLGlCQUFXLFFBQVEsWUFBUjtBQUdYLDZCQUF1QjtBQUN2QiwrQkFBeUI7QUFHekIsZ0JBQVU7QUErRmQsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RydW5jYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY2FzdFNsaWNlID0gcmVxdWlyZSgnLi9fY2FzdFNsaWNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNSZWdFeHAgPSByZXF1aXJlKCcuL2lzUmVnRXhwJyksXG4gICAgcmVIYXNDb21wbGV4U3ltYm9sID0gcmVxdWlyZSgnLi9fcmVIYXNDb21wbGV4U3ltYm9sJyksXG4gICAgc3RyaW5nU2l6ZSA9IHJlcXVpcmUoJy4vX3N0cmluZ1NpemUnKSxcbiAgICBzdHJpbmdUb0FycmF5ID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9BcnJheScpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIGFzIGRlZmF1bHQgb3B0aW9ucyBmb3IgYF8udHJ1bmNhdGVgLiAqL1xudmFyIERFRkFVTFRfVFJVTkNfTEVOR1RIID0gMzAsXG4gICAgREVGQVVMVF9UUlVOQ19PTUlTU0lPTiA9ICcuLi4nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBUcnVuY2F0ZXMgYHN0cmluZ2AgaWYgaXQncyBsb25nZXIgdGhhbiB0aGUgZ2l2ZW4gbWF4aW11bSBzdHJpbmcgbGVuZ3RoLlxuICogVGhlIGxhc3QgY2hhcmFjdGVycyBvZiB0aGUgdHJ1bmNhdGVkIHN0cmluZyBhcmUgcmVwbGFjZWQgd2l0aCB0aGUgb21pc3Npb25cbiAqIHN0cmluZyB3aGljaCBkZWZhdWx0cyB0byBcIi4uLlwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIHRydW5jYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubGVuZ3RoPTMwXSBUaGUgbWF4aW11bSBzdHJpbmcgbGVuZ3RoLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm9taXNzaW9uPScuLi4nXSBUaGUgc3RyaW5nIHRvIGluZGljYXRlIHRleHQgaXMgb21pdHRlZC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW29wdGlvbnMuc2VwYXJhdG9yXSBUaGUgc2VwYXJhdG9yIHBhdHRlcm4gdG8gdHJ1bmNhdGUgdG8uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cnVuY2F0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRydW5jYXRlKCdoaS1kaWRkbHktaG8gdGhlcmUsIG5laWdoYm9yaW5vJyk7XG4gKiAvLyA9PiAnaGktZGlkZGx5LWhvIHRoZXJlLCBuZWlnaGJvLi4uJ1xuICpcbiAqIF8udHJ1bmNhdGUoJ2hpLWRpZGRseS1obyB0aGVyZSwgbmVpZ2hib3Jpbm8nLCB7XG4gKiAgICdsZW5ndGgnOiAyNCxcbiAqICAgJ3NlcGFyYXRvcic6ICcgJ1xuICogfSk7XG4gKiAvLyA9PiAnaGktZGlkZGx5LWhvIHRoZXJlLC4uLidcbiAqXG4gKiBfLnRydW5jYXRlKCdoaS1kaWRkbHktaG8gdGhlcmUsIG5laWdoYm9yaW5vJywge1xuICogICAnbGVuZ3RoJzogMjQsXG4gKiAgICdzZXBhcmF0b3InOiAvLD8gKy9cbiAqIH0pO1xuICogLy8gPT4gJ2hpLWRpZGRseS1obyB0aGVyZS4uLidcbiAqXG4gKiBfLnRydW5jYXRlKCdoaS1kaWRkbHktaG8gdGhlcmUsIG5laWdoYm9yaW5vJywge1xuICogICAnb21pc3Npb24nOiAnIFsuLi5dJ1xuICogfSk7XG4gKiAvLyA9PiAnaGktZGlkZGx5LWhvIHRoZXJlLCBuZWlnIFsuLi5dJ1xuICovXG5mdW5jdGlvbiB0cnVuY2F0ZShzdHJpbmcsIG9wdGlvbnMpIHtcbiAgdmFyIGxlbmd0aCA9IERFRkFVTFRfVFJVTkNfTEVOR1RILFxuICAgICAgb21pc3Npb24gPSBERUZBVUxUX1RSVU5DX09NSVNTSU9OO1xuXG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIHZhciBzZXBhcmF0b3IgPSAnc2VwYXJhdG9yJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zZXBhcmF0b3IgOiBzZXBhcmF0b3I7XG4gICAgbGVuZ3RoID0gJ2xlbmd0aCcgaW4gb3B0aW9ucyA/IHRvSW50ZWdlcihvcHRpb25zLmxlbmd0aCkgOiBsZW5ndGg7XG4gICAgb21pc3Npb24gPSAnb21pc3Npb24nIGluIG9wdGlvbnMgPyB0b1N0cmluZyhvcHRpb25zLm9taXNzaW9uKSA6IG9taXNzaW9uO1xuICB9XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgdmFyIHN0ckxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gIGlmIChyZUhhc0NvbXBsZXhTeW1ib2wudGVzdChzdHJpbmcpKSB7XG4gICAgdmFyIHN0clN5bWJvbHMgPSBzdHJpbmdUb0FycmF5KHN0cmluZyk7XG4gICAgc3RyTGVuZ3RoID0gc3RyU3ltYm9scy5sZW5ndGg7XG4gIH1cbiAgaWYgKGxlbmd0aCA+PSBzdHJMZW5ndGgpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHZhciBlbmQgPSBsZW5ndGggLSBzdHJpbmdTaXplKG9taXNzaW9uKTtcbiAgaWYgKGVuZCA8IDEpIHtcbiAgICByZXR1cm4gb21pc3Npb247XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHN0clN5bWJvbHNcbiAgICA/IGNhc3RTbGljZShzdHJTeW1ib2xzLCAwLCBlbmQpLmpvaW4oJycpXG4gICAgOiBzdHJpbmcuc2xpY2UoMCwgZW5kKTtcblxuICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0ICsgb21pc3Npb247XG4gIH1cbiAgaWYgKHN0clN5bWJvbHMpIHtcbiAgICBlbmQgKz0gKHJlc3VsdC5sZW5ndGggLSBlbmQpO1xuICB9XG4gIGlmIChpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XG4gICAgaWYgKHN0cmluZy5zbGljZShlbmQpLnNlYXJjaChzZXBhcmF0b3IpKSB7XG4gICAgICB2YXIgbWF0Y2gsXG4gICAgICAgICAgc3Vic3RyaW5nID0gcmVzdWx0O1xuXG4gICAgICBpZiAoIXNlcGFyYXRvci5nbG9iYWwpIHtcbiAgICAgICAgc2VwYXJhdG9yID0gUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIHRvU3RyaW5nKHJlRmxhZ3MuZXhlYyhzZXBhcmF0b3IpKSArICdnJyk7XG4gICAgICB9XG4gICAgICBzZXBhcmF0b3IubGFzdEluZGV4ID0gMDtcbiAgICAgIHdoaWxlICgobWF0Y2ggPSBzZXBhcmF0b3IuZXhlYyhzdWJzdHJpbmcpKSkge1xuICAgICAgICB2YXIgbmV3RW5kID0gbWF0Y2guaW5kZXg7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgbmV3RW5kID09PSB1bmRlZmluZWQgPyBlbmQgOiBuZXdFbmQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdHJpbmcuaW5kZXhPZihzZXBhcmF0b3IsIGVuZCkgIT0gZW5kKSB7XG4gICAgdmFyIGluZGV4ID0gcmVzdWx0Lmxhc3RJbmRleE9mKHNlcGFyYXRvcik7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCBpbmRleCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQgKyBvbWlzc2lvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cnVuY2F0ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
