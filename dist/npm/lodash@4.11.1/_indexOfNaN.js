"use strict";

System.register([], function (_export, _context) {
  /**
   * Gets the index at which the first occurrence of `NaN` is found in `array`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
   */
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);

    while (fromRight ? index-- : ++index < length) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = indexOfNaN;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pbmRleE9mTmFOLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLFdBQVMsVUFBVCxDQUFvQixLQUFwQixFQUEyQixTQUEzQixFQUFzQyxTQUF0QyxFQUFpRDtBQUMvQyxRQUFJLFNBQVMsTUFBTSxNQUFOO1FBQ1QsUUFBUSxhQUFhLFlBQVksQ0FBWixHQUFnQixDQUFDLENBQUQsQ0FBN0IsQ0FGbUM7O0FBSS9DLFdBQVEsWUFBWSxPQUFaLEdBQXNCLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBbUI7QUFDL0MsVUFBSSxRQUFRLE1BQU0sS0FBTixDQUFSLENBRDJDO0FBRS9DLFVBQUksVUFBVSxLQUFWLEVBQWlCO0FBQ25CLGVBQU8sS0FBUCxDQURtQjtPQUFyQjtLQUZGO0FBTUEsV0FBTyxDQUFDLENBQUQsQ0FWd0M7R0FBakQ7Ozs7O0FBYUEsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19pbmRleE9mTmFOLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBgTmFOYCBpcyBmb3VuZCBpbiBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIGBOYU5gLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGluZGV4T2ZOYU4oYXJyYXksIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAwIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgdmFyIG90aGVyID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChvdGhlciAhPT0gb3RoZXIpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGV4T2ZOYU47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
