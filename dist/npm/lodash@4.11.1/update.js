'use strict';

System.register([], function (_export, _context) {
  var baseUpdate, castFunction;

  function update(object, path, updater) {
    return object == null ? object : baseUpdate(object, path, castFunction(updater));
  }
  return {
    setters: [],
    execute: function () {
      baseUpdate = require('./_baseUpdate');
      castFunction = require('./_castFunction');
      module.exports = update;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VwZGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixJQUF4QixFQUE4QixPQUE5QixFQUF1QztBQUNyQyxXQUFPLFVBQVUsSUFBVixHQUFpQixNQUFqQixHQUEwQixXQUFXLE1BQVgsRUFBbUIsSUFBbkIsRUFBeUIsYUFBYSxPQUFiLENBQXpCLENBQTFCLENBRDhCO0dBQXZDOzs7O0FBRkksbUJBQWEsUUFBUSxlQUFSO0FBQ2IscUJBQWUsUUFBUSxpQkFBUjtBQUluQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVVwZGF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VVcGRhdGUnKSxcbiAgICBjYXN0RnVuY3Rpb24gPSByZXF1aXJlKCcuL19jYXN0RnVuY3Rpb24nKTtcbmZ1bmN0aW9uIHVwZGF0ZShvYmplY3QsIHBhdGgsIHVwZGF0ZXIpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gb2JqZWN0IDogYmFzZVVwZGF0ZShvYmplY3QsIHBhdGgsIGNhc3RGdW5jdGlvbih1cGRhdGVyKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
