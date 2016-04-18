/* */
'use strict';

System.register([], function (_export, _context) {
  var $, isObject, HAS_INSTANCE, FunctionProto;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      isObject = require('./$.is-object');
      HAS_INSTANCE = require('./$.wks')('hasInstance');
      FunctionProto = Function.prototype;

      if (!(HAS_INSTANCE in FunctionProto)) $.setDesc(FunctionProto, HAS_INSTANCE, { value: function value(O) {
          if (typeof this != 'function' || !isObject(O)) return false;
          if (!isObject(this.prototype)) return O instanceof this;
          while (O = $.getProto(O)) {
            if (this.prototype === O) return true;
          }return false;
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osaUJBQVcsUUFBUSxlQUFSO0FBQ1gscUJBQWUsUUFBUSxTQUFSLEVBQW1CLGFBQW5CO0FBQ2Ysc0JBQWdCLFNBQVMsU0FBVDs7QUFDcEIsVUFBSSxFQUFFLGdCQUFnQixhQUFoQixDQUFGLEVBQ0YsRUFBRSxPQUFGLENBQVUsYUFBVixFQUF5QixZQUF6QixFQUF1QyxFQUFDLE9BQU8sZUFBUyxDQUFULEVBQVk7QUFDdkQsY0FBSSxPQUFPLElBQVAsSUFBZSxVQUFmLElBQTZCLENBQUMsU0FBUyxDQUFULENBQUQsRUFDL0IsT0FBTyxLQUFQLENBREY7QUFFQSxjQUFJLENBQUMsU0FBUyxLQUFLLFNBQUwsQ0FBVixFQUNGLE9BQU8sYUFBYSxJQUFiLENBRFQ7QUFFQSxpQkFBTyxJQUFJLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBSjtBQUNMLGdCQUFJLEtBQUssU0FBTCxLQUFtQixDQUFuQixFQUNGLE9BQU8sSUFBUCxDQURGO1dBREYsT0FHTyxLQUFQLENBUnVEO1NBQVosRUFBL0MsRUFERiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICBIQVNfSU5TVEFOQ0UgPSByZXF1aXJlKCcuLyQud2tzJykoJ2hhc0luc3RhbmNlJyksXG4gICAgRnVuY3Rpb25Qcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbmlmICghKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSlcbiAgJC5zZXREZXNjKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwge3ZhbHVlOiBmdW5jdGlvbihPKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMgIT0gJ2Z1bmN0aW9uJyB8fCAhaXNPYmplY3QoTykpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKVxuICAgICAgICByZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XG4gICAgICB3aGlsZSAoTyA9ICQuZ2V0UHJvdG8oTykpXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZSA9PT0gTylcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
