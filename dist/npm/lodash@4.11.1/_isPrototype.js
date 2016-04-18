'use strict';

System.register([], function (_export, _context) {
  var objectProto;


  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

    return value === proto;
  }

  return {
    setters: [],
    execute: function () {
      objectProto = Object.prototype;
      module.exports = isPrototype;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pc1Byb3RvdHlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsV0FBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQzFCLFFBQUksT0FBTyxTQUFTLE1BQU0sV0FBTjtRQUNoQixRQUFRLE9BQVEsSUFBUCxJQUFlLFVBQWYsSUFBNkIsS0FBSyxTQUFMLElBQW1CLFdBQWpELENBRmM7O0FBSTFCLFdBQU8sVUFBVSxLQUFWLENBSm1CO0dBQTVCOzs7OztBQVRJLG9CQUFjLE9BQU8sU0FBUDtBQWdCbEIsYUFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19pc1Byb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
