"use strict";

System.register([], function (_export, _context) {
  /**
   * Converts `set` to an array.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the converted array.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = setToArray;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19zZXRUb0FycmF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxXQUFTLFVBQVQsQ0FBb0IsR0FBcEIsRUFBeUI7QUFDdkIsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsTUFBTSxJQUFJLElBQUosQ0FBZixDQUZtQjs7QUFJdkIsUUFBSSxPQUFKLENBQVksVUFBUyxLQUFULEVBQWdCO0FBQzFCLGFBQU8sRUFBRSxLQUFGLENBQVAsR0FBa0IsS0FBbEIsQ0FEMEI7S0FBaEIsQ0FBWixDQUp1QjtBQU92QixXQUFPLE1BQVAsQ0FQdUI7R0FBekI7Ozs7O0FBVUEsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19zZXRUb0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
