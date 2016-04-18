'use strict';

System.register([], function (_export, _context) {
  var isIndex;

  function baseNth(array, n) {
    var length = array.length;
    if (!length) {
      return;
    }
    n += n < 0 ? length : 0;
    return isIndex(n, length) ? array[n] : undefined;
  }
  return {
    setters: [],
    execute: function () {
      isIndex = require('./_isIndex');
      module.exports = baseNth;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlTnRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLENBQXhCLEVBQTJCO0FBQ3pCLFFBQUksU0FBUyxNQUFNLE1BQU4sQ0FEWTtBQUV6QixRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gsYUFEVztLQUFiO0FBR0EsU0FBSyxJQUFJLENBQUosR0FBUSxNQUFSLEdBQWlCLENBQWpCLENBTG9CO0FBTXpCLFdBQU8sUUFBUSxDQUFSLEVBQVcsTUFBWCxJQUFxQixNQUFNLENBQU4sQ0FBckIsR0FBZ0MsU0FBaEMsQ0FOa0I7R0FBM0I7Ozs7QUFESSxnQkFBVSxRQUFRLFlBQVI7QUFTZCxhQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VOdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpO1xuZnVuY3Rpb24gYmFzZU50aChhcnJheSwgbikge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBuICs9IG4gPCAwID8gbGVuZ3RoIDogMDtcbiAgcmV0dXJuIGlzSW5kZXgobiwgbGVuZ3RoKSA/IGFycmF5W25dIDogdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTnRoO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
