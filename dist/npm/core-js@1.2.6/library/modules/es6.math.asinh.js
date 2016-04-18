'use strict';

System.register([], function (_export, _context) {
  var $export;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $export($export.S, 'Math', { asinh: asinh });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0I7QUFDaEIsV0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUQsQ0FBZCxJQUFxQixLQUFLLENBQUwsR0FBUyxDQUE5QixHQUFrQyxJQUFJLENBQUosR0FBUSxDQUFDLE1BQU0sQ0FBQyxDQUFELENBQVAsR0FBYSxLQUFLLEdBQUwsQ0FBUyxJQUFJLEtBQUssSUFBTCxDQUFVLElBQUksQ0FBSixHQUFRLENBQVIsQ0FBZCxDQUE5QixDQUR6QjtHQUFsQjs7OztBQURJLGdCQUFVLFFBQVEsWUFBUjtBQUlkLGNBQVEsUUFBUSxDQUFSLEVBQVcsTUFBbkIsRUFBMkIsRUFBQyxPQUFPLEtBQVAsRUFBNUIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbmZ1bmN0aW9uIGFzaW5oKHgpIHtcbiAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBNYXRoLmxvZyh4ICsgTWF0aC5zcXJ0KHggKiB4ICsgMSkpO1xufVxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2FzaW5oOiBhc2luaH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
