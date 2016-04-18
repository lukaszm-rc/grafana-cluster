"use strict";

System.register([], function (_export, _context) {
  /**
   * Enables the wrapper to be iterable.
   *
   * @name Symbol.iterator
   * @memberOf _
   * @since 4.0.0
   * @category Seq
   * @returns {Object} Returns the wrapper object.
   * @example
   *
   * var wrapped = _([1, 2]);
   *
   * wrapped[Symbol.iterator]() === wrapped;
   * // => true
   *
   * Array.from(wrapped);
   * // => [1, 2]
   */
  function wrapperToIterator() {
    return this;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = wrapperToIterator;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RvSXRlcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLFdBQVMsaUJBQVQsR0FBNkI7QUFDM0IsV0FBTyxJQUFQLENBRDJCO0dBQTdCOzs7OztBQUlBLGFBQU8sT0FBUCxHQUFpQixpQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvdG9JdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRW5hYmxlcyB0aGUgd3JhcHBlciB0byBiZSBpdGVyYWJsZS5cbiAqXG4gKiBAbmFtZSBTeW1ib2wuaXRlcmF0b3JcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTZXFcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHdyYXBwZXIgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgd3JhcHBlZCA9IF8oWzEsIDJdKTtcbiAqXG4gKiB3cmFwcGVkW1N5bWJvbC5pdGVyYXRvcl0oKSA9PT0gd3JhcHBlZDtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBBcnJheS5mcm9tKHdyYXBwZWQpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHdyYXBwZXJUb0l0ZXJhdG9yKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcGVyVG9JdGVyYXRvcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
