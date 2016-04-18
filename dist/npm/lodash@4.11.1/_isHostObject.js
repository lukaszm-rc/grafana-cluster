'use strict';

System.register([], function (_export, _context) {
  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = isHostObject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc0hvc3RPYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLFdBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2Qjs7O0FBRzNCLFFBQUksU0FBUyxLQUFULENBSHVCO0FBSTNCLFFBQUksU0FBUyxJQUFULElBQWlCLE9BQU8sTUFBTSxRQUFOLElBQWtCLFVBQXpCLEVBQXFDO0FBQ3hELFVBQUk7QUFDRixpQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFSLENBQUYsQ0FEUjtPQUFKLENBRUUsT0FBTyxDQUFQLEVBQVUsRUFBVjtLQUhKO0FBS0EsV0FBTyxNQUFQLENBVDJCO0dBQTdCOzs7OztBQVlBLGFBQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9faXNIb3N0T2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hvc3RPYmplY3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
