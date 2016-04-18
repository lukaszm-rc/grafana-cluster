"use strict";

System.register([], function (_export, _context) {
  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    var length = args.length;
    switch (length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  return {
    setters: [],
    execute: function () {
      module.exports = apply;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19hcHBseS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixPQUFyQixFQUE4QixJQUE5QixFQUFvQztBQUNsQyxRQUFJLFNBQVMsS0FBSyxNQUFMLENBRHFCO0FBRWxDLFlBQVEsTUFBUjtBQUNFLFdBQUssQ0FBTDtBQUFRLGVBQU8sS0FBSyxJQUFMLENBQVUsT0FBVixDQUFQLENBQVI7QUFERixXQUVPLENBQUw7QUFBUSxlQUFPLEtBQUssSUFBTCxDQUFVLE9BQVYsRUFBbUIsS0FBSyxDQUFMLENBQW5CLENBQVAsQ0FBUjtBQUZGLFdBR08sQ0FBTDtBQUFRLGVBQU8sS0FBSyxJQUFMLENBQVUsT0FBVixFQUFtQixLQUFLLENBQUwsQ0FBbkIsRUFBNEIsS0FBSyxDQUFMLENBQTVCLENBQVAsQ0FBUjtBQUhGLFdBSU8sQ0FBTDtBQUFRLGVBQU8sS0FBSyxJQUFMLENBQVUsT0FBVixFQUFtQixLQUFLLENBQUwsQ0FBbkIsRUFBNEIsS0FBSyxDQUFMLENBQTVCLEVBQXFDLEtBQUssQ0FBTCxDQUFyQyxDQUFQLENBQVI7QUFKRixLQUZrQztBQVFsQyxXQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0IsSUFBcEIsQ0FBUCxDQVJrQztHQUFwQzs7Ozs7QUFXQSxhQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2FwcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICB2YXIgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
