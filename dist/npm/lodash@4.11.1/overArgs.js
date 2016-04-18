'use strict';

System.register([], function (_export, _context) {
  var apply, arrayMap, baseFlatten, baseIteratee, baseUnary, isArray, isFlattenableIteratee, rest, nativeMin, overArgs;
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      arrayMap = require('./_arrayMap');
      baseFlatten = require('./_baseFlatten');
      baseIteratee = require('./_baseIteratee');
      baseUnary = require('./_baseUnary');
      isArray = require('./isArray');
      isFlattenableIteratee = require('./_isFlattenableIteratee');
      rest = require('./rest');
      nativeMin = Math.min;
      overArgs = rest(function (func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(baseIteratee)) : arrayMap(baseFlatten(transforms, 1, isFlattenableIteratee), baseUnary(baseIteratee));
        var funcsLength = transforms.length;
        return rest(function (args) {
          var index = -1,
              length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });

      module.exports = overArgs;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL292ZXJBcmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxjQUFRLFFBQVEsVUFBUjtBQUNSLGlCQUFXLFFBQVEsYUFBUjtBQUNYLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxxQkFBZSxRQUFRLGlCQUFSO0FBQ2Ysa0JBQVksUUFBUSxjQUFSO0FBQ1osZ0JBQVUsUUFBUSxXQUFSO0FBQ1YsOEJBQXdCLFFBQVEsMEJBQVI7QUFDeEIsYUFBTyxRQUFRLFFBQVI7QUFDUCxrQkFBWSxLQUFLLEdBQUw7QUFDWixpQkFBVyxLQUFLLFVBQVMsSUFBVCxFQUFlLFVBQWYsRUFBMkI7QUFDN0MscUJBQWEsVUFBQyxDQUFXLE1BQVgsSUFBcUIsQ0FBckIsSUFBMEIsUUFBUSxXQUFXLENBQVgsQ0FBUixDQUExQixHQUFvRCxTQUFTLFdBQVcsQ0FBWCxDQUFULEVBQXdCLFVBQVUsWUFBVixDQUF4QixDQUFyRCxHQUF3RyxTQUFTLFlBQVksVUFBWixFQUF3QixDQUF4QixFQUEyQixxQkFBM0IsQ0FBVCxFQUE0RCxVQUFVLFlBQVYsQ0FBNUQsQ0FBeEcsQ0FEZ0M7QUFFN0MsWUFBSSxjQUFjLFdBQVcsTUFBWCxDQUYyQjtBQUc3QyxlQUFPLEtBQUssVUFBUyxJQUFULEVBQWU7QUFDekIsY0FBSSxRQUFRLENBQUMsQ0FBRDtjQUNSLFNBQVMsVUFBVSxLQUFLLE1BQUwsRUFBYSxXQUF2QixDQUFULENBRnFCO0FBR3pCLGlCQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsaUJBQUssS0FBTCxJQUFjLFdBQVcsS0FBWCxFQUFrQixJQUFsQixDQUF1QixJQUF2QixFQUE2QixLQUFLLEtBQUwsQ0FBN0IsQ0FBZCxDQUR1QjtXQUF6QjtBQUdBLGlCQUFPLE1BQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsQ0FBUCxDQU55QjtTQUFmLENBQVosQ0FINkM7T0FBM0I7O0FBWXBCLGFBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9vdmVyQXJncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0ZsYXR0ZW5hYmxlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlSXRlcmF0ZWUnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG52YXIgb3ZlckFyZ3MgPSByZXN0KGZ1bmN0aW9uKGZ1bmMsIHRyYW5zZm9ybXMpIHtcbiAgdHJhbnNmb3JtcyA9ICh0cmFuc2Zvcm1zLmxlbmd0aCA9PSAxICYmIGlzQXJyYXkodHJhbnNmb3Jtc1swXSkpID8gYXJyYXlNYXAodHJhbnNmb3Jtc1swXSwgYmFzZVVuYXJ5KGJhc2VJdGVyYXRlZSkpIDogYXJyYXlNYXAoYmFzZUZsYXR0ZW4odHJhbnNmb3JtcywgMSwgaXNGbGF0dGVuYWJsZUl0ZXJhdGVlKSwgYmFzZVVuYXJ5KGJhc2VJdGVyYXRlZSkpO1xuICB2YXIgZnVuY3NMZW5ndGggPSB0cmFuc2Zvcm1zLmxlbmd0aDtcbiAgcmV0dXJuIHJlc3QoZnVuY3Rpb24oYXJncykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNaW4oYXJncy5sZW5ndGgsIGZ1bmNzTGVuZ3RoKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJnc1tpbmRleF0gPSB0cmFuc2Zvcm1zW2luZGV4XS5jYWxsKHRoaXMsIGFyZ3NbaW5kZXhdKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIGFyZ3MpO1xuICB9KTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJncztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
