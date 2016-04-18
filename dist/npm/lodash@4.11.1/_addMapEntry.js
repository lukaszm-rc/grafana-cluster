"use strict";

System.register([], function (_export, _context) {
  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `Map#set` because it doesn't return the map instance in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  return {
    setters: [],
    execute: function () {
      module.exports = addMapEntry;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hZGRNYXBFbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLFdBQVMsV0FBVCxDQUFxQixHQUFyQixFQUEwQixJQUExQixFQUFnQzs7QUFFOUIsUUFBSSxHQUFKLENBQVEsS0FBSyxDQUFMLENBQVIsRUFBaUIsS0FBSyxDQUFMLENBQWpCLEVBRjhCO0FBRzlCLFdBQU8sR0FBUCxDQUg4QjtHQUFoQzs7Ozs7QUFNQSxhQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FkZE1hcEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgTWFwI3NldGAgYmVjYXVzZSBpdCBkb2Vzbid0IHJldHVybiB0aGUgbWFwIGluc3RhbmNlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcEVudHJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
