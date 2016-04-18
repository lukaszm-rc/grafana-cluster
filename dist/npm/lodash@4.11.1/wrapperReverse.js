'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper, LodashWrapper, reverse, thru;

  function wrapperReverse() {
    var value = this.__wrapped__;
    if (value instanceof LazyWrapper) {
      var wrapped = value;
      if (this.__actions__.length) {
        wrapped = new LazyWrapper(this);
      }
      wrapped = wrapped.reverse();
      wrapped.__actions__.push({
        'func': thru,
        'args': [reverse],
        'thisArg': undefined
      });
      return new LodashWrapper(wrapped, this.__chain__);
    }
    return this.thru(reverse);
  }
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      LodashWrapper = require('./_LodashWrapper');
      reverse = require('./reverse');
      thru = require('./thru');
      module.exports = wrapperReverse;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3dyYXBwZXJSZXZlcnNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsV0FBUyxjQUFULEdBQTBCO0FBQ3hCLFFBQUksUUFBUSxLQUFLLFdBQUwsQ0FEWTtBQUV4QixRQUFJLGlCQUFpQixXQUFqQixFQUE4QjtBQUNoQyxVQUFJLFVBQVUsS0FBVixDQUQ0QjtBQUVoQyxVQUFJLEtBQUssV0FBTCxDQUFpQixNQUFqQixFQUF5QjtBQUMzQixrQkFBVSxJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsQ0FBVixDQUQyQjtPQUE3QjtBQUdBLGdCQUFVLFFBQVEsT0FBUixFQUFWLENBTGdDO0FBTWhDLGNBQVEsV0FBUixDQUFvQixJQUFwQixDQUF5QjtBQUN2QixnQkFBUSxJQUFSO0FBQ0EsZ0JBQVEsQ0FBQyxPQUFELENBQVI7QUFDQSxtQkFBVyxTQUFYO09BSEYsRUFOZ0M7QUFXaEMsYUFBTyxJQUFJLGFBQUosQ0FBa0IsT0FBbEIsRUFBMkIsS0FBSyxTQUFMLENBQWxDLENBWGdDO0tBQWxDO0FBYUEsV0FBTyxLQUFLLElBQUwsQ0FBVSxPQUFWLENBQVAsQ0Fmd0I7R0FBMUI7Ozs7QUFKSSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIsZ0JBQVUsUUFBUSxXQUFSO0FBQ1YsYUFBTyxRQUFRLFFBQVI7QUFrQlgsYUFBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3dyYXBwZXJSZXZlcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgTGF6eVdyYXBwZXIgPSByZXF1aXJlKCcuL19MYXp5V3JhcHBlcicpLFxuICAgIExvZGFzaFdyYXBwZXIgPSByZXF1aXJlKCcuL19Mb2Rhc2hXcmFwcGVyJyksXG4gICAgcmV2ZXJzZSA9IHJlcXVpcmUoJy4vcmV2ZXJzZScpLFxuICAgIHRocnUgPSByZXF1aXJlKCcuL3RocnUnKTtcbmZ1bmN0aW9uIHdyYXBwZXJSZXZlcnNlKCkge1xuICB2YXIgdmFsdWUgPSB0aGlzLl9fd3JhcHBlZF9fO1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMYXp5V3JhcHBlcikge1xuICAgIHZhciB3cmFwcGVkID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX19hY3Rpb25zX18ubGVuZ3RoKSB7XG4gICAgICB3cmFwcGVkID0gbmV3IExhenlXcmFwcGVyKHRoaXMpO1xuICAgIH1cbiAgICB3cmFwcGVkID0gd3JhcHBlZC5yZXZlcnNlKCk7XG4gICAgd3JhcHBlZC5fX2FjdGlvbnNfXy5wdXNoKHtcbiAgICAgICdmdW5jJzogdGhydSxcbiAgICAgICdhcmdzJzogW3JldmVyc2VdLFxuICAgICAgJ3RoaXNBcmcnOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IExvZGFzaFdyYXBwZXIod3JhcHBlZCwgdGhpcy5fX2NoYWluX18pO1xuICB9XG4gIHJldHVybiB0aGlzLnRocnUocmV2ZXJzZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBwZXJSZXZlcnNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
