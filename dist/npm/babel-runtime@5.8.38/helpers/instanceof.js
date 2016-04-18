/* */
"use strict";

System.register([], function (_export, _context) {
  var _Symbol$hasInstance;

  return {
    setters: [],
    execute: function () {
      _Symbol$hasInstance = require('../core-js/symbol/has-instance')["default"];

      exports["default"] = function (left, right) {
        if (right != null && right[_Symbol$hasInstance]) {
          return right[_Symbol$hasInstance](left);
        } else {
          return left instanceof right;
        }
      };
      exports.__esModule = true;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL2luc3RhbmNlb2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7OztBQUNJLDRCQUFzQixRQUFRLGdDQUFSLEVBQTBDLFNBQTFDOztBQUMxQixjQUFRLFNBQVIsSUFBcUIsVUFBUyxJQUFULEVBQWUsS0FBZixFQUFzQjtBQUN6QyxZQUFJLFNBQVMsSUFBVCxJQUFpQixNQUFNLG1CQUFOLENBQWpCLEVBQTZDO0FBQy9DLGlCQUFPLE1BQU0sbUJBQU4sRUFBMkIsSUFBM0IsQ0FBUCxDQUQrQztTQUFqRCxNQUVPO0FBQ0wsaUJBQU8sZ0JBQWdCLEtBQWhCLENBREY7U0FGUDtPQURtQjtBQU9yQixjQUFRLFVBQVIsR0FBcUIsSUFBckIiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L2hlbHBlcnMvaW5zdGFuY2VvZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX1N5bWJvbCRoYXNJbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2NvcmUtanMvc3ltYm9sL2hhcy1pbnN0YW5jZScpW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgaWYgKHJpZ2h0ICE9IG51bGwgJiYgcmlnaHRbX1N5bWJvbCRoYXNJbnN0YW5jZV0pIHtcbiAgICByZXR1cm4gcmlnaHRbX1N5bWJvbCRoYXNJbnN0YW5jZV0obGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxlZnQgaW5zdGFuY2VvZiByaWdodDtcbiAgfVxufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
