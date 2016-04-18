"use strict";

System.register([], function (_export, _context) {
  /**
   * Compares values to sort them in ascending order.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function compareAscending(value, other) {
    if (value !== other) {
      var valIsNull = value === null,
          valIsUndef = value === undefined,
          valIsReflexive = value === value;

      var othIsNull = other === null,
          othIsUndef = other === undefined,
          othIsReflexive = other === other;

      if (value > other && !othIsNull || !valIsReflexive || valIsNull && !othIsUndef && othIsReflexive || valIsUndef && othIsReflexive) {
        return 1;
      }
      if (value < other && !valIsNull || !othIsReflexive || othIsNull && !valIsUndef && valIsReflexive || othIsUndef && valIsReflexive) {
        return -1;
      }
    }
    return 0;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = compareAscending;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jb21wYXJlQXNjZW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsV0FBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxLQUFqQyxFQUF3QztBQUN0QyxRQUFJLFVBQVUsS0FBVixFQUFpQjtBQUNuQixVQUFJLFlBQVksVUFBVSxJQUFWO1VBQ1osYUFBYSxVQUFVLFNBQVY7VUFDYixpQkFBaUIsVUFBVSxLQUFWLENBSEY7O0FBS25CLFVBQUksWUFBWSxVQUFVLElBQVY7VUFDWixhQUFhLFVBQVUsU0FBVjtVQUNiLGlCQUFpQixVQUFVLEtBQVYsQ0FQRjs7QUFTbkIsVUFBSSxLQUFDLEdBQVEsS0FBUixJQUFpQixDQUFDLFNBQUQsSUFBZSxDQUFDLGNBQUQsSUFDaEMsYUFBYSxDQUFDLFVBQUQsSUFBZSxjQUE1QixJQUNBLGNBQWMsY0FBZCxFQUErQjtBQUNsQyxlQUFPLENBQVAsQ0FEa0M7T0FGcEM7QUFLQSxVQUFJLEtBQUMsR0FBUSxLQUFSLElBQWlCLENBQUMsU0FBRCxJQUFlLENBQUMsY0FBRCxJQUNoQyxhQUFhLENBQUMsVUFBRCxJQUFlLGNBQTVCLElBQ0EsY0FBYyxjQUFkLEVBQStCO0FBQ2xDLGVBQU8sQ0FBQyxDQUFELENBRDJCO09BRnBDO0tBZEY7QUFvQkEsV0FBTyxDQUFQLENBckJzQztHQUF4Qzs7Ozs7QUF3QkEsYUFBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY29tcGFyZUFzY2VuZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcGFyZXMgdmFsdWVzIHRvIHNvcnQgdGhlbSBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc29ydCBvcmRlciBpbmRpY2F0b3IgZm9yIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVBc2NlbmRpbmcodmFsdWUsIG90aGVyKSB7XG4gIGlmICh2YWx1ZSAhPT0gb3RoZXIpIHtcbiAgICB2YXIgdmFsSXNOdWxsID0gdmFsdWUgPT09IG51bGwsXG4gICAgICAgIHZhbElzVW5kZWYgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkLFxuICAgICAgICB2YWxJc1JlZmxleGl2ZSA9IHZhbHVlID09PSB2YWx1ZTtcblxuICAgIHZhciBvdGhJc051bGwgPSBvdGhlciA9PT0gbnVsbCxcbiAgICAgICAgb3RoSXNVbmRlZiA9IG90aGVyID09PSB1bmRlZmluZWQsXG4gICAgICAgIG90aElzUmVmbGV4aXZlID0gb3RoZXIgPT09IG90aGVyO1xuXG4gICAgaWYgKCh2YWx1ZSA+IG90aGVyICYmICFvdGhJc051bGwpIHx8ICF2YWxJc1JlZmxleGl2ZSB8fFxuICAgICAgICAodmFsSXNOdWxsICYmICFvdGhJc1VuZGVmICYmIG90aElzUmVmbGV4aXZlKSB8fFxuICAgICAgICAodmFsSXNVbmRlZiAmJiBvdGhJc1JlZmxleGl2ZSkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoKHZhbHVlIDwgb3RoZXIgJiYgIXZhbElzTnVsbCkgfHwgIW90aElzUmVmbGV4aXZlIHx8XG4gICAgICAgIChvdGhJc051bGwgJiYgIXZhbElzVW5kZWYgJiYgdmFsSXNSZWZsZXhpdmUpIHx8XG4gICAgICAgIChvdGhJc1VuZGVmICYmIHZhbElzUmVmbGV4aXZlKSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlQXNjZW5kaW5nO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
