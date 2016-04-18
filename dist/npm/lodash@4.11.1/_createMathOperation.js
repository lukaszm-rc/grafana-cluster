"use strict";

System.register([], function (_export, _context) {
  /**
   * Creates a function that performs a mathematical operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @returns {Function} Returns the new mathematical operation function.
   */
  function createMathOperation(operator) {
    return function (value, other) {
      var result;
      if (value === undefined && other === undefined) {
        return 0;
      }
      if (value !== undefined) {
        result = value;
      }
      if (other !== undefined) {
        result = result === undefined ? other : operator(result, other);
      }
      return result;
    };
  }

  return {
    setters: [],
    execute: function () {
      module.exports = createMathOperation;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVNYXRoT3BlcmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxXQUFTLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDO0FBQ3JDLFdBQU8sVUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCO0FBQzVCLFVBQUksTUFBSixDQUQ0QjtBQUU1QixVQUFJLFVBQVUsU0FBVixJQUF1QixVQUFVLFNBQVYsRUFBcUI7QUFDOUMsZUFBTyxDQUFQLENBRDhDO09BQWhEO0FBR0EsVUFBSSxVQUFVLFNBQVYsRUFBcUI7QUFDdkIsaUJBQVMsS0FBVCxDQUR1QjtPQUF6QjtBQUdBLFVBQUksVUFBVSxTQUFWLEVBQXFCO0FBQ3ZCLGlCQUFTLFdBQVcsU0FBWCxHQUF1QixLQUF2QixHQUErQixTQUFTLE1BQVQsRUFBaUIsS0FBakIsQ0FBL0IsQ0FEYztPQUF6QjtBQUdBLGFBQU8sTUFBUCxDQVg0QjtLQUF2QixDQUQ4QjtHQUF2Qzs7Ozs7QUFnQkEsYUFBTyxPQUFQLEdBQWlCLG1CQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY3JlYXRlTWF0aE9wZXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgYSBtYXRoZW1hdGljYWwgb3BlcmF0aW9uIG9uIHR3byB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wZXJhdG9yIFRoZSBmdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBvcGVyYXRpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtYXRoZW1hdGljYWwgb3BlcmF0aW9uIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVNYXRoT3BlcmF0aW9uKG9wZXJhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIG90aGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgfVxuICAgIGlmIChvdGhlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgPT09IHVuZGVmaW5lZCA/IG90aGVyIDogb3BlcmF0b3IocmVzdWx0LCBvdGhlcik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTWF0aE9wZXJhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
