'use strict';

System.register([], function (_export, _context) {
  var MAX_SAFE_INTEGER, reIsUint;


  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }

  return {
    setters: [],
    execute: function () {
      MAX_SAFE_INTEGER = 9007199254740991;
      reIsUint = /^(?:0|[1-9]\d*)$/;
      module.exports = isIndex;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc0luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsV0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLE1BQXhCLEVBQWdDO0FBQzlCLFlBQVEsT0FBUSxLQUFQLElBQWdCLFFBQWhCLElBQTRCLFNBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBNUIsR0FBb0QsQ0FBQyxLQUFELEdBQVMsQ0FBQyxDQUFELENBRHhDO0FBRTlCLGFBQVMsVUFBVSxJQUFWLEdBQWlCLGdCQUFqQixHQUFvQyxNQUFwQyxDQUZxQjtBQUc5QixXQUFPLFFBQVEsQ0FBQyxDQUFELElBQU0sUUFBUSxDQUFSLElBQWEsQ0FBYixJQUFrQixRQUFRLE1BQVIsQ0FIVDtHQUFoQzs7Ozs7QUFiSSx5QkFBbUI7QUFHbkIsaUJBQVc7QUFnQmYsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19pc0luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
