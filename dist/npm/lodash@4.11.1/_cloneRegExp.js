"use strict";

System.register([], function (_export, _context) {
  var reFlags;


  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  return {
    setters: [],
    execute: function () {
      reFlags = /\w*$/;
      module.exports = cloneRegExp;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZVJlZ0V4cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsV0FBUyxXQUFULENBQXFCLE1BQXJCLEVBQTZCO0FBQzNCLFFBQUksU0FBUyxJQUFJLE9BQU8sV0FBUCxDQUFtQixPQUFPLE1BQVAsRUFBZSxRQUFRLElBQVIsQ0FBYSxNQUFiLENBQXRDLENBQVQsQ0FEdUI7QUFFM0IsV0FBTyxTQUFQLEdBQW1CLE9BQU8sU0FBUCxDQUZRO0FBRzNCLFdBQU8sTUFBUCxDQUgyQjtHQUE3Qjs7Ozs7QUFUSSxnQkFBVTtBQWVkLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY2xvbmVSZWdFeHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
