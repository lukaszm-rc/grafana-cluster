'use strict';

System.register([], function (_export, _context) {
  var baseRepeat, castSlice, reHasComplexSymbol, stringSize, stringToArray, nativeCeil;

  function createPadding(length, chars) {
    chars = chars === undefined ? ' ' : chars + '';
    var charsLength = chars.length;
    if (charsLength < 2) {
      return charsLength ? baseRepeat(chars, length) : chars;
    }
    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
    return reHasComplexSymbol.test(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
  }
  return {
    setters: [],
    execute: function () {
      baseRepeat = require('./_baseRepeat');
      castSlice = require('./_castSlice');
      reHasComplexSymbol = require('./_reHasComplexSymbol');
      stringSize = require('./_stringSize');
      stringToArray = require('./_stringToArray');
      nativeCeil = Math.ceil;
      module.exports = createPadding;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVQYWRkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsV0FBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLEtBQS9CLEVBQXNDO0FBQ3BDLFlBQVEsVUFBVSxTQUFWLEdBQXNCLEdBQXRCLEdBQTZCLFFBQVEsRUFBUixDQUREO0FBRXBDLFFBQUksY0FBYyxNQUFNLE1BQU4sQ0FGa0I7QUFHcEMsUUFBSSxjQUFjLENBQWQsRUFBaUI7QUFDbkIsYUFBTyxjQUFjLFdBQVcsS0FBWCxFQUFrQixNQUFsQixDQUFkLEdBQTBDLEtBQTFDLENBRFk7S0FBckI7QUFHQSxRQUFJLFNBQVMsV0FBVyxLQUFYLEVBQWtCLFdBQVcsU0FBUyxXQUFXLEtBQVgsQ0FBVCxDQUE3QixDQUFULENBTmdDO0FBT3BDLFdBQU8sbUJBQW1CLElBQW5CLENBQXdCLEtBQXhCLElBQWlDLFVBQVUsY0FBYyxNQUFkLENBQVYsRUFBaUMsQ0FBakMsRUFBb0MsTUFBcEMsRUFBNEMsSUFBNUMsQ0FBaUQsRUFBakQsQ0FBakMsR0FBd0YsT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixNQUFoQixDQUF4RixDQVA2QjtHQUF0Qzs7OztBQU5JLG1CQUFhLFFBQVEsZUFBUjtBQUNiLGtCQUFZLFFBQVEsY0FBUjtBQUNaLDJCQUFxQixRQUFRLHVCQUFSO0FBQ3JCLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLG1CQUFhLEtBQUssSUFBTDtBQVVqQixhQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NyZWF0ZVBhZGRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlUmVwZWF0ID0gcmVxdWlyZSgnLi9fYmFzZVJlcGVhdCcpLFxuICAgIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIHJlSGFzQ29tcGxleFN5bWJvbCA9IHJlcXVpcmUoJy4vX3JlSGFzQ29tcGxleFN5bWJvbCcpLFxuICAgIHN0cmluZ1NpemUgPSByZXF1aXJlKCcuL19zdHJpbmdTaXplJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKTtcbnZhciBuYXRpdmVDZWlsID0gTWF0aC5jZWlsO1xuZnVuY3Rpb24gY3JlYXRlUGFkZGluZyhsZW5ndGgsIGNoYXJzKSB7XG4gIGNoYXJzID0gY2hhcnMgPT09IHVuZGVmaW5lZCA/ICcgJyA6IChjaGFycyArICcnKTtcbiAgdmFyIGNoYXJzTGVuZ3RoID0gY2hhcnMubGVuZ3RoO1xuICBpZiAoY2hhcnNMZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNoYXJzTGVuZ3RoID8gYmFzZVJlcGVhdChjaGFycywgbGVuZ3RoKSA6IGNoYXJzO1xuICB9XG4gIHZhciByZXN1bHQgPSBiYXNlUmVwZWF0KGNoYXJzLCBuYXRpdmVDZWlsKGxlbmd0aCAvIHN0cmluZ1NpemUoY2hhcnMpKSk7XG4gIHJldHVybiByZUhhc0NvbXBsZXhTeW1ib2wudGVzdChjaGFycykgPyBjYXN0U2xpY2Uoc3RyaW5nVG9BcnJheShyZXN1bHQpLCAwLCBsZW5ndGgpLmpvaW4oJycpIDogcmVzdWx0LnNsaWNlKDAsIGxlbmd0aCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVBhZGRpbmc7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
