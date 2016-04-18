'use strict';

System.register([], function (_export, _context) {
  var isObject, isArray, SPECIES;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');
      isArray = require('./$.is-array');
      SPECIES = require('./$.wks')('species');

      module.exports = function (original, length) {
        var C;
        if (isArray(original)) {
          C = original.constructor;
          if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
          if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        }
        return new (C === undefined ? Array : C)(length);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSO0FBQ1gsZ0JBQVUsUUFBUSxjQUFSO0FBQ1YsZ0JBQVUsUUFBUSxTQUFSLEVBQW1CLFNBQW5COztBQUNkLGFBQU8sT0FBUCxHQUFpQixVQUFTLFFBQVQsRUFBbUIsTUFBbkIsRUFBMkI7QUFDMUMsWUFBSSxDQUFKLENBRDBDO0FBRTFDLFlBQUksUUFBUSxRQUFSLENBQUosRUFBdUI7QUFDckIsY0FBSSxTQUFTLFdBQVQsQ0FEaUI7QUFFckIsY0FBSSxPQUFPLENBQVAsSUFBWSxVQUFaLEtBQTJCLE1BQU0sS0FBTixJQUFlLFFBQVEsRUFBRSxTQUFGLENBQXZCLENBQTNCLEVBQ0YsSUFBSSxTQUFKLENBREY7QUFFQSxjQUFJLFNBQVMsQ0FBVCxDQUFKLEVBQWlCO0FBQ2YsZ0JBQUksRUFBRSxPQUFGLENBQUosQ0FEZTtBQUVmLGdCQUFJLE1BQU0sSUFBTixFQUNGLElBQUksU0FBSixDQURGO1dBRkY7U0FKRjtBQVVBLGVBQU8sS0FBSyxNQUFNLFNBQU4sR0FBa0IsS0FBbEIsR0FBMEIsQ0FBMUIsQ0FBTCxDQUFrQyxNQUFsQyxDQUFQLENBWjBDO09BQTNCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKSxcbiAgICBTUEVDSUVTID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKVxuICAgICAgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpXG4gICAgICAgIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
