"use strict";

System.register([], function (_export, _context) {
  /**
   * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
   *
   * @private
   * @param {Array} props The property identifiers.
   * @param {Array} values The property values.
   * @param {Function} assignFunc The function to assign values.
   * @returns {Object} Returns the new object.
   */
  function baseZipObject(props, values, assignFunc) {
    var index = -1,
        length = props.length,
        valsLength = values.length,
        result = {};

    while (++index < length) {
      var value = index < valsLength ? values[index] : undefined;
      assignFunc(result, props[index], value);
    }
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = baseZipObject;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlWmlwT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLFdBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QixNQUE5QixFQUFzQyxVQUF0QyxFQUFrRDtBQUNoRCxRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxNQUFNLE1BQU47UUFDVCxhQUFhLE9BQU8sTUFBUDtRQUNiLFNBQVMsRUFBVCxDQUo0Qzs7QUFNaEQsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFVBQUksUUFBUSxRQUFRLFVBQVIsR0FBcUIsT0FBTyxLQUFQLENBQXJCLEdBQXFDLFNBQXJDLENBRFc7QUFFdkIsaUJBQVcsTUFBWCxFQUFtQixNQUFNLEtBQU4sQ0FBbkIsRUFBaUMsS0FBakMsRUFGdUI7S0FBekI7QUFJQSxXQUFPLE1BQVAsQ0FWZ0Q7R0FBbEQ7Ozs7O0FBYUEsYUFBTyxPQUFQLEdBQWlCLGFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlWmlwT2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uemlwT2JqZWN0YCB3aGljaCBhc3NpZ25zIHZhbHVlcyB1c2luZyBgYXNzaWduRnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycy5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgcHJvcGVydHkgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduRnVuYyBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VaaXBPYmplY3QocHJvcHMsIHZhbHVlcywgYXNzaWduRnVuYykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIHZhbHNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBpbmRleCA8IHZhbHNMZW5ndGggPyB2YWx1ZXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgIGFzc2lnbkZ1bmMocmVzdWx0LCBwcm9wc1tpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VaaXBPYmplY3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
