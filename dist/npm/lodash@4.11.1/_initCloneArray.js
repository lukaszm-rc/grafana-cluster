'use strict';

System.register([], function (_export, _context) {
  var objectProto, hasOwnProperty;


  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = initCloneArray;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pbml0Q2xvbmVBcnJheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYUEsV0FBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCO0FBQzdCLFFBQUksU0FBUyxNQUFNLE1BQU47UUFDVCxTQUFTLE1BQU0sV0FBTixDQUFrQixNQUFsQixDQUFUOzs7QUFGeUIsUUFLekIsVUFBVSxPQUFPLE1BQU0sQ0FBTixDQUFQLElBQW1CLFFBQW5CLElBQStCLGVBQWUsSUFBZixDQUFvQixLQUFwQixFQUEyQixPQUEzQixDQUF6QyxFQUE4RTtBQUNoRixhQUFPLEtBQVAsR0FBZSxNQUFNLEtBQU4sQ0FEaUU7QUFFaEYsYUFBTyxLQUFQLEdBQWUsTUFBTSxLQUFOLENBRmlFO0tBQWxGO0FBSUEsV0FBTyxNQUFQLENBVDZCO0dBQS9COzs7OztBQVpJLG9CQUFjLE9BQU8sU0FBUDtBQUdkLHVCQUFpQixZQUFZLGNBQVo7QUFxQnJCLGFBQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9faW5pdENsb25lQXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
