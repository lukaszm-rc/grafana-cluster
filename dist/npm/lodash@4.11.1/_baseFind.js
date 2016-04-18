"use strict";

System.register([], function (_export, _context) {
  /**
   * The base implementation of methods like `_.find` and `_.findKey`, without
   * support for iteratee shorthands, which iterates over `collection` using
   * `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to search.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @param {boolean} [retKey] Specify returning the key of the found element
   *  instead of the element itself.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFind(collection, predicate, eachFunc, retKey) {
    var result;
    eachFunc(collection, function (value, key, collection) {
      if (predicate(value, key, collection)) {
        result = retKey ? key : value;
        return false;
      }
    });
    return result;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = baseFind;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlRmluZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsV0FBUyxRQUFULENBQWtCLFVBQWxCLEVBQThCLFNBQTlCLEVBQXlDLFFBQXpDLEVBQW1ELE1BQW5ELEVBQTJEO0FBQ3pELFFBQUksTUFBSixDQUR5RDtBQUV6RCxhQUFTLFVBQVQsRUFBcUIsVUFBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCLFVBQXJCLEVBQWlDO0FBQ3BELFVBQUksVUFBVSxLQUFWLEVBQWlCLEdBQWpCLEVBQXNCLFVBQXRCLENBQUosRUFBdUM7QUFDckMsaUJBQVMsU0FBUyxHQUFULEdBQWUsS0FBZixDQUQ0QjtBQUVyQyxlQUFPLEtBQVAsQ0FGcUM7T0FBdkM7S0FEbUIsQ0FBckIsQ0FGeUQ7QUFRekQsV0FBTyxNQUFQLENBUnlEO0dBQTNEOzs7OztBQVdBLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZUZpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIG1ldGhvZHMgbGlrZSBgXy5maW5kYCBhbmQgYF8uZmluZEtleWAsIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMsIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYGNvbGxlY3Rpb25gIHVzaW5nXG4gKiBgZWFjaEZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzZWFyY2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYGNvbGxlY3Rpb25gLlxuICogQHBhcmFtIHtib29sZWFufSBbcmV0S2V5XSBTcGVjaWZ5IHJldHVybmluZyB0aGUga2V5IG9mIHRoZSBmb3VuZCBlbGVtZW50XG4gKiAgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZm91bmQgZWxlbWVudCBvciBpdHMga2V5LCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZChjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGVhY2hGdW5jLCByZXRLZXkpIHtcbiAgdmFyIHJlc3VsdDtcbiAgZWFjaEZ1bmMoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGtleSwgY29sbGVjdGlvbikpIHtcbiAgICAgIHJlc3VsdCA9IHJldEtleSA/IGtleSA6IHZhbHVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
