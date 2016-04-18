'use strict';

System.register([], function (_export, _context) {
  var FUNC_ERROR_TEXT;


  /**
   * The base implementation of `_.delay` and `_.defer` which accepts an array
   * of `func` arguments.
   *
   * @private
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay invocation.
   * @param {Object} args The arguments to provide to `func`.
   * @returns {number} Returns the timer id.
   */
  function baseDelay(func, wait, args) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    return setTimeout(function () {
      func.apply(undefined, args);
    }, wait);
  }

  return {
    setters: [],
    execute: function () {
      FUNC_ERROR_TEXT = 'Expected a function';
      module.exports = baseDelay;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRGVsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLFdBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQztBQUNuQyxRQUFJLE9BQU8sSUFBUCxJQUFlLFVBQWYsRUFBMkI7QUFDN0IsWUFBTSxJQUFJLFNBQUosQ0FBYyxlQUFkLENBQU4sQ0FENkI7S0FBL0I7QUFHQSxXQUFPLFdBQVcsWUFBVztBQUFFLFdBQUssS0FBTCxDQUFXLFNBQVgsRUFBc0IsSUFBdEIsRUFBRjtLQUFYLEVBQTZDLElBQXhELENBQVAsQ0FKbUM7R0FBckM7Ozs7O0FBWkksd0JBQWtCO0FBbUJ0QixhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VEZWxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmRlbGF5YCBhbmQgYF8uZGVmZXJgIHdoaWNoIGFjY2VwdHMgYW4gYXJyYXlcbiAqIG9mIGBmdW5jYCBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IHdhaXQgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lciBpZC5cbiAqL1xuZnVuY3Rpb24gYmFzZURlbGF5KGZ1bmMsIHdhaXQsIGFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTsgfSwgd2FpdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZURlbGF5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
