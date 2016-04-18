/* */
"format cjs";
"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      require("core-js/shim");

      require('babel-runtime/regenerator/runtime');

      if (global._babelPolyfill) {
        throw new Error("only one instance of babel/polyfill is allowed");
      }
      global._babelPolyfill = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1jb3JlQDUuOC4zOC9saWIvcG9seWZpbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7OztBQUVBLGNBQVEsY0FBUjs7QUFFQSxjQUFRLG1DQUFSOztBQUVBLFVBQUksT0FBTyxjQUFQLEVBQXVCO0FBQ3pCLGNBQU0sSUFBSSxLQUFKLENBQVUsZ0RBQVYsQ0FBTixDQUR5QjtPQUEzQjtBQUdBLGFBQU8sY0FBUCxHQUF3QixJQUF4QiIsImZpbGUiOiJucG0vYmFiZWwtY29yZUA1LjguMzgvbGliL3BvbHlmaWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcblwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9zaGltXCIpO1xuXG5yZXF1aXJlKCdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL3J1bnRpbWUnKTtcblxuaWYgKGdsb2JhbC5fYmFiZWxQb2x5ZmlsbCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC9wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpO1xufVxuZ2xvYmFsLl9iYWJlbFBvbHlmaWxsID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
