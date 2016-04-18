'use strict';

System.register([], function (_export, _context) {
  var LazyWrapper;

  function lazyReverse() {
    if (this.__filtered__) {
      var result = new LazyWrapper(this);
      result.__dir__ = -1;
      result.__filtered__ = true;
    } else {
      result = this.clone();
      result.__dir__ *= -1;
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      LazyWrapper = require('./_LazyWrapper');
      module.exports = lazyReverse;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19sYXp5UmV2ZXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsV0FBVCxHQUF1QjtBQUNyQixRQUFJLEtBQUssWUFBTCxFQUFtQjtBQUNyQixVQUFJLFNBQVMsSUFBSSxXQUFKLENBQWdCLElBQWhCLENBQVQsQ0FEaUI7QUFFckIsYUFBTyxPQUFQLEdBQWlCLENBQUMsQ0FBRCxDQUZJO0FBR3JCLGFBQU8sWUFBUCxHQUFzQixJQUF0QixDQUhxQjtLQUF2QixNQUlPO0FBQ0wsZUFBUyxLQUFLLEtBQUwsRUFBVCxDQURLO0FBRUwsYUFBTyxPQUFQLElBQWtCLENBQUMsQ0FBRCxDQUZiO0tBSlA7QUFRQSxXQUFPLE1BQVAsQ0FUcUI7R0FBdkI7Ozs7QUFESSxvQkFBYyxRQUFRLGdCQUFSO0FBWWxCLGFBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fbGF6eVJldmVyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBMYXp5V3JhcHBlciA9IHJlcXVpcmUoJy4vX0xhenlXcmFwcGVyJyk7XG5mdW5jdGlvbiBsYXp5UmV2ZXJzZSgpIHtcbiAgaWYgKHRoaXMuX19maWx0ZXJlZF9fKSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBMYXp5V3JhcHBlcih0aGlzKTtcbiAgICByZXN1bHQuX19kaXJfXyA9IC0xO1xuICAgIHJlc3VsdC5fX2ZpbHRlcmVkX18gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRoaXMuY2xvbmUoKTtcbiAgICByZXN1bHQuX19kaXJfXyAqPSAtMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBsYXp5UmV2ZXJzZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
