'use strict';

System.register([], function (_export, _context) {
  var root, nativeIsFinite;

  function isFinite(value) {
    return typeof value == 'number' && nativeIsFinite(value);
  }
  return {
    setters: [],
    execute: function () {
      root = require('./_root');
      nativeIsFinite = root.isFinite;
      module.exports = isFinite;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzRmluaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3ZCLFdBQU8sT0FBTyxLQUFQLElBQWdCLFFBQWhCLElBQTRCLGVBQWUsS0FBZixDQUE1QixDQURnQjtHQUF6Qjs7OztBQUZJLGFBQU8sUUFBUSxTQUFSO0FBQ1AsdUJBQWlCLEtBQUssUUFBTDtBQUlyQixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaXNGaW5pdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xudmFyIG5hdGl2ZUlzRmluaXRlID0gcm9vdC5pc0Zpbml0ZTtcbmZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgbmF0aXZlSXNGaW5pdGUodmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpc0Zpbml0ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
