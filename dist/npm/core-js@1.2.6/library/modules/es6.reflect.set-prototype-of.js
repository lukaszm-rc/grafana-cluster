'use strict';

System.register([], function (_export, _context) {
  var $export, setProto;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      setProto = require('./$.set-proto');

      if (setProto) $export($export.S, 'Reflect', { setPrototypeOf: function setPrototypeOf(target, proto) {
          setProto.check(target, proto);
          try {
            setProto.set(target, proto);
            return true;
          } catch (e) {
            return false;
          }
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixpQkFBVyxRQUFRLGVBQVI7O0FBQ2YsVUFBSSxRQUFKLEVBQ0UsUUFBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsRUFBdUM7QUFDbEYsbUJBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFEa0Y7QUFFbEYsY0FBSTtBQUNGLHFCQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLEtBQXJCLEVBREU7QUFFRixtQkFBTyxJQUFQLENBRkU7V0FBSixDQUdFLE9BQU8sQ0FBUCxFQUFVO0FBQ1YsbUJBQU8sS0FBUCxDQURVO1dBQVY7U0FMeUMsRUFBL0MsRUFERiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgc2V0UHJvdG8gPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJyk7XG5pZiAoc2V0UHJvdG8pXG4gICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bykge1xuICAgICAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRQcm90by5zZXQodGFyZ2V0LCBwcm90byk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
