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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLEtBQVQsQ0FBZSxDQUFmLEVBQWtCO0FBQ2hCLFdBQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFELENBQWQsSUFBcUIsS0FBSyxDQUFMLEdBQVMsQ0FBOUIsR0FBa0MsSUFBSSxDQUFKLEdBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRCxDQUFQLEdBQWEsS0FBSyxHQUFMLENBQVMsSUFBSSxLQUFLLElBQUwsQ0FBVSxJQUFJLENBQUosR0FBUSxDQUFSLENBQWQsQ0FBOUIsQ0FEekI7R0FBbEI7Ozs7QUFESSxnQkFBVSxRQUFRLFlBQVI7QUFJZCxjQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsT0FBTyxLQUFQLEVBQTVCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuZnVuY3Rpb24gYXNpbmgoeCkge1xuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG59XG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7YXNpbmg6IGFzaW5ofSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
