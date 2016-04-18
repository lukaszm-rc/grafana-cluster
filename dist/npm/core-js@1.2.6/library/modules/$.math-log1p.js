"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 20.2.2.20 Math.log1p(x)
      module.exports = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm1hdGgtbG9nMXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLGFBQU8sT0FBUCxHQUFpQixLQUFLLEtBQUwsSUFBYyxTQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWlCO0FBQzlDLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBQyxJQUFELElBQVMsSUFBSSxJQUFKLEdBQVcsSUFBSSxJQUFJLENBQUosR0FBUSxDQUFSLEdBQVksS0FBSyxHQUFMLENBQVMsSUFBSSxDQUFKLENBQXhELENBRHVDO09BQWpCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm1hdGgtbG9nMXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmxvZzFwIHx8IGZ1bmN0aW9uIGxvZzFwKHgpe1xuICByZXR1cm4gKHggPSAreCkgPiAtMWUtOCAmJiB4IDwgMWUtOCA/IHggLSB4ICogeCAvIDIgOiBNYXRoLmxvZygxICsgeCk7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
