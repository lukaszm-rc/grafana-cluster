/* */
"use strict";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      exports.__esModule = true;

      exports.default = function (obj, keys) {
        var target = {};

        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }

        return target;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7O0FBRUEsY0FBUSxVQUFSLEdBQXFCLElBQXJCOztBQUVBLGNBQVEsT0FBUixHQUFrQixVQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCO0FBQ3JDLFlBQUksU0FBUyxFQUFULENBRGlDOztBQUdyQyxhQUFLLElBQUksQ0FBSixJQUFTLEdBQWQsRUFBbUI7QUFDakIsY0FBSSxLQUFLLE9BQUwsQ0FBYSxDQUFiLEtBQW1CLENBQW5CLEVBQXNCLFNBQTFCO0FBQ0EsY0FBSSxDQUFDLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxDQUExQyxDQUFELEVBQStDLFNBQW5EO0FBQ0EsaUJBQU8sQ0FBUCxJQUFZLElBQUksQ0FBSixDQUFaLENBSGlCO1NBQW5COztBQU1BLGVBQU8sTUFBUCxDQVRxQztPQUFyQiIsImZpbGUiOiJucG0vYmFiZWwtcnVudGltZUA1LjguMzgvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
