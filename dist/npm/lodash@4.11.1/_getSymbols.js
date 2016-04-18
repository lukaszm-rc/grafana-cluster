"use strict";

System.register([], function (_export, _context) {
  var getOwnPropertySymbols;


  /**
   * Creates an array of the own enumerable symbol properties of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  function getSymbols(object) {
    // Coerce `object` to an object to avoid non-object errors in V8.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
    return getOwnPropertySymbols(Object(object));
  }

  // Fallback for IE < 11.
  return {
    setters: [],
    execute: function () {
      getOwnPropertySymbols = Object.getOwnPropertySymbols;
      if (!getOwnPropertySymbols) {
        getSymbols = function getSymbols() {
          return [];
        };
      }

      module.exports = getSymbols;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRTeW1ib2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFVQSxXQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEI7OztBQUcxQixXQUFPLHNCQUFzQixPQUFPLE1BQVAsQ0FBdEIsQ0FBUCxDQUgwQjtHQUE1Qjs7Ozs7O0FBVEksOEJBQXdCLE9BQU8scUJBQVA7QUFnQjVCLFVBQUksQ0FBQyxxQkFBRCxFQUF3QjtBQUMxQixxQkFBYSxzQkFBVztBQUN0QixpQkFBTyxFQUFQLENBRHNCO1NBQVgsQ0FEYTtPQUE1Qjs7QUFNQSxhQUFPLE9BQVAsR0FBaUIsVUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2dldFN5bWJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldFN5bWJvbHMob2JqZWN0KSB7XG4gIC8vIENvZXJjZSBgb2JqZWN0YCB0byBhbiBvYmplY3QgdG8gYXZvaWQgbm9uLW9iamVjdCBlcnJvcnMgaW4gVjguXG4gIC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzIGZvciBtb3JlIGRldGFpbHMuXG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoT2JqZWN0KG9iamVjdCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgSUUgPCAxMS5cbmlmICghZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIGdldFN5bWJvbHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW107XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
