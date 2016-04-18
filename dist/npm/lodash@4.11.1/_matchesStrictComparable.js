"use strict";

System.register([], function (_export, _context) {
  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function (object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
  }

  return {
    setters: [],
    execute: function () {
      module.exports = matchesStrictComparable;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxXQUFTLHVCQUFULENBQWlDLEdBQWpDLEVBQXNDLFFBQXRDLEVBQWdEO0FBQzlDLFdBQU8sVUFBUyxNQUFULEVBQWlCO0FBQ3RCLFVBQUksVUFBVSxJQUFWLEVBQWdCO0FBQ2xCLGVBQU8sS0FBUCxDQURrQjtPQUFwQjtBQUdBLGFBQU8sT0FBTyxHQUFQLE1BQWdCLFFBQWhCLEtBQ0osYUFBYSxTQUFiLElBQTJCLE9BQU8sT0FBTyxNQUFQLENBQVAsQ0FEdkIsQ0FKZTtLQUFqQixDQUR1QztHQUFoRDs7Ozs7QUFVQSxhQUFPLE9BQVAsR0FBaUIsdUJBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
