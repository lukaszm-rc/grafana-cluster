'use strict';

System.register([], function (_export, _context) {
  var baseIsEqualDeep, isObject, isObjectLike;

  function baseIsEqual(value, other, customizer, bitmask, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
  }
  return {
    setters: [],
    execute: function () {
      baseIsEqualDeep = require('./_baseIsEqualDeep');
      isObject = require('./isObject');
      isObjectLike = require('./isObjectLike');
      module.exports = baseIsEqual;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlSXNFcXVhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQyxVQUFuQyxFQUErQyxPQUEvQyxFQUF3RCxLQUF4RCxFQUErRDtBQUM3RCxRQUFJLFVBQVUsS0FBVixFQUFpQjtBQUNuQixhQUFPLElBQVAsQ0FEbUI7S0FBckI7QUFHQSxRQUFJLFNBQVMsSUFBVCxJQUFpQixTQUFTLElBQVQsSUFBa0IsQ0FBQyxTQUFTLEtBQVQsQ0FBRCxJQUFvQixDQUFDLGFBQWEsS0FBYixDQUFELEVBQXVCO0FBQ2hGLGFBQU8sVUFBVSxLQUFWLElBQW1CLFVBQVUsS0FBVixDQURzRDtLQUFsRjtBQUdBLFdBQU8sZ0JBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLFdBQTlCLEVBQTJDLFVBQTNDLEVBQXVELE9BQXZELEVBQWdFLEtBQWhFLENBQVAsQ0FQNkQ7R0FBL0Q7Ozs7QUFISSx3QkFBa0IsUUFBUSxvQkFBUjtBQUNsQixpQkFBVyxRQUFRLFlBQVI7QUFDWCxxQkFBZSxRQUFRLGdCQUFSO0FBVW5CLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUlzRXF1YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0KHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYmFzZUlzRXF1YWwsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
