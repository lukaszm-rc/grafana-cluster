'use strict';

System.register([], function (_export, _context) {
  var nativeMax, nativeMin;


  /**
   * Gets the view, applying any `transforms` to the `start` and `end` positions.
   *
   * @private
   * @param {number} start The start of the view.
   * @param {number} end The end of the view.
   * @param {Array} transforms The transformations to apply to the view.
   * @returns {Object} Returns an object containing the `start` and `end`
   *  positions of the view.
   */
  function getView(start, end, transforms) {
    var index = -1,
        length = transforms.length;

    while (++index < length) {
      var data = transforms[index],
          size = data.size;

      switch (data.type) {
        case 'drop':
          start += size;break;
        case 'dropRight':
          end -= size;break;
        case 'take':
          end = nativeMin(end, start + size);break;
        case 'takeRight':
          start = nativeMax(start, end - size);break;
      }
    }
    return { 'start': start, 'end': end };
  }

  return {
    setters: [],
    execute: function () {
      nativeMax = Math.max;
      nativeMin = Math.min;
      module.exports = getView;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxXQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsRUFBeUM7QUFDdkMsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsV0FBVyxNQUFYLENBRjBCOztBQUl2QyxXQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsVUFBSSxPQUFPLFdBQVcsS0FBWCxDQUFQO1VBQ0EsT0FBTyxLQUFLLElBQUwsQ0FGWTs7QUFJdkIsY0FBUSxLQUFLLElBQUw7QUFDTixhQUFLLE1BQUw7QUFBa0IsbUJBQVMsSUFBVCxDQUFsQjtBQURGLGFBRU8sV0FBTDtBQUFrQixpQkFBTyxJQUFQLENBQWxCO0FBRkYsYUFHTyxNQUFMO0FBQWtCLGdCQUFNLFVBQVUsR0FBVixFQUFlLFFBQVEsSUFBUixDQUFyQixDQUFsQjtBQUhGLGFBSU8sV0FBTDtBQUFrQixrQkFBUSxVQUFVLEtBQVYsRUFBaUIsTUFBTSxJQUFOLENBQXpCLENBQWxCO0FBSkYsT0FKdUI7S0FBekI7QUFXQSxXQUFPLEVBQUUsU0FBUyxLQUFULEVBQWdCLE9BQU8sR0FBUCxFQUF6QixDQWZ1QztHQUF6Qzs7Ozs7QUFiSSxrQkFBWSxLQUFLLEdBQUw7QUFDWixrQkFBWSxLQUFLLEdBQUw7QUE4QmhCLGFBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fZ2V0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB2aWV3LCBhcHBseWluZyBhbnkgYHRyYW5zZm9ybXNgIHRvIHRoZSBgc3RhcnRgIGFuZCBgZW5kYCBwb3NpdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgb2YgdGhlIHZpZXcuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBlbmQgb2YgdGhlIHZpZXcuXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFuc2Zvcm1zIFRoZSB0cmFuc2Zvcm1hdGlvbnMgdG8gYXBwbHkgdG8gdGhlIHZpZXcuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBgc3RhcnRgIGFuZCBgZW5kYFxuICogIHBvc2l0aW9ucyBvZiB0aGUgdmlldy5cbiAqL1xuZnVuY3Rpb24gZ2V0VmlldyhzdGFydCwgZW5kLCB0cmFuc2Zvcm1zKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZGF0YSA9IHRyYW5zZm9ybXNbaW5kZXhdLFxuICAgICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Ryb3AnOiAgICAgIHN0YXJ0ICs9IHNpemU7IGJyZWFrO1xuICAgICAgY2FzZSAnZHJvcFJpZ2h0JzogZW5kIC09IHNpemU7IGJyZWFrO1xuICAgICAgY2FzZSAndGFrZSc6ICAgICAgZW5kID0gbmF0aXZlTWluKGVuZCwgc3RhcnQgKyBzaXplKTsgYnJlYWs7XG4gICAgICBjYXNlICd0YWtlUmlnaHQnOiBzdGFydCA9IG5hdGl2ZU1heChzdGFydCwgZW5kIC0gc2l6ZSk7IGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyAnc3RhcnQnOiBzdGFydCwgJ2VuZCc6IGVuZCB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZpZXc7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
