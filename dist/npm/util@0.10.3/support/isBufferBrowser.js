'use strict';

System.register([], function (_export, _context) {
  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      /* */
      module.exports = function isBuffer(arg) {
        return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS91dGlsQDAuMTAuMy9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGFBQU8sT0FBUCxHQUFpQixTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDdEMsZUFBTyxPQUFPLFFBQU8saURBQVAsS0FBZSxRQUFmLElBQ1QsT0FBTyxJQUFJLElBQUosS0FBYSxVQUFwQixJQUNBLE9BQU8sSUFBSSxJQUFKLEtBQWEsVUFBcEIsSUFDQSxPQUFPLElBQUksU0FBSixLQUFrQixVQUF6QixDQUppQztPQUF2QiIsImZpbGUiOiJucG0vdXRpbEAwLjEwLjMvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
