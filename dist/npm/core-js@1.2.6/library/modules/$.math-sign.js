"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      // 20.2.2.28 Math.sign(x)
      module.exports = Math.sign || function sign(x) {
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm1hdGgtc2lnbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsYUFBTyxPQUFQLEdBQWlCLEtBQUssSUFBTCxJQUFhLFNBQVMsSUFBVCxDQUFjLENBQWQsRUFBZ0I7QUFDNUMsZUFBTyxDQUFDLElBQUksQ0FBQyxDQUFELENBQUwsSUFBWSxDQUFaLElBQWlCLEtBQUssQ0FBTCxHQUFTLENBQTFCLEdBQThCLElBQUksQ0FBSixHQUFRLENBQUMsQ0FBRCxHQUFLLENBQWIsQ0FETztPQUFoQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5tYXRoLXNpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpe1xuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
