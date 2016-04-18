"use strict";

System.register([], function (_export, _context) {
  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new function.
   */
  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  return {
    setters: [],
    execute: function () {
      module.exports = baseProperty;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUHJvcGVydHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLFdBQVMsWUFBVCxDQUFzQixHQUF0QixFQUEyQjtBQUN6QixXQUFPLFVBQVMsTUFBVCxFQUFpQjtBQUN0QixhQUFPLFVBQVUsSUFBVixHQUFpQixTQUFqQixHQUE2QixPQUFPLEdBQVAsQ0FBN0IsQ0FEZTtLQUFqQixDQURrQjtHQUEzQjs7Ozs7QUFNQSxhQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VQcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
