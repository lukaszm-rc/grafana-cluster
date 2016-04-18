'use strict';

System.register([], function (_export, _context) {
  var global, hide, uid, TYPED, VIEW, ABV, ARRAYS, i, l, TypedArrayConstructors, Typed;
  return {
    setters: [],
    execute: function () {
      global = require('./$.global');
      hide = require('./$.hide');
      uid = require('./$.uid');
      TYPED = uid('typed_array');
      VIEW = uid('view');
      ABV = !!(global.ArrayBuffer && global.DataView);
      ARRAYS = true;
      i = 0;
      l = 9;
      TypedArrayConstructors = ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'];

      while (i < l) {
        Typed = global[TypedArrayConstructors[i++]];

        if (Typed) {
          hide(Typed.prototype, TYPED, true);
          hide(Typed.prototype, VIEW, true);
        } else ARRAYS = false;
      }
      module.exports = {
        ARRAYS: ARRAYS,
        ABV: ABV,
        CONSTR: ARRAYS && ABV,
        TYPED: TYPED,
        VIEW: VIEW
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnR5cGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxlQUFTLFFBQVEsWUFBUjtBQUNULGFBQU8sUUFBUSxVQUFSO0FBQ1AsWUFBTSxRQUFRLFNBQVI7QUFDTixjQUFRLElBQUksYUFBSjtBQUNSLGFBQU8sSUFBSSxNQUFKO0FBQ1AsWUFBTSxDQUFDLEVBQUUsT0FBTyxXQUFQLElBQXNCLE9BQU8sUUFBUCxDQUF4QjtBQUNQLGVBQVM7QUFDVCxVQUFJO0FBQ0osVUFBSTtBQUNKLCtCQUF5QixDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLG1CQUE1QixFQUFpRCxZQUFqRCxFQUErRCxhQUEvRCxFQUE4RSxZQUE5RSxFQUE0RixhQUE1RixFQUEyRyxjQUEzRyxFQUEySCxjQUEzSDs7QUFDN0IsYUFBTyxJQUFJLENBQUosRUFBTztBQUNSLGdCQUFRLE9BQU8sdUJBQXVCLEdBQXZCLENBQVAsRUFEQTs7QUFFWixZQUFJLEtBQUosRUFBVztBQUNULGVBQUssTUFBTSxTQUFOLEVBQWlCLEtBQXRCLEVBQTZCLElBQTdCLEVBRFM7QUFFVCxlQUFLLE1BQU0sU0FBTixFQUFpQixJQUF0QixFQUE0QixJQUE1QixFQUZTO1NBQVgsTUFJRSxTQUFTLEtBQVQsQ0FKRjtPQUZGO0FBUUEsYUFBTyxPQUFQLEdBQWlCO0FBQ2YsZ0JBQVEsTUFBUjtBQUNBLGFBQUssR0FBTDtBQUNBLGdCQUFRLFVBQVUsR0FBVjtBQUNSLGVBQU8sS0FBUDtBQUNBLGNBQU0sSUFBTjtPQUxGIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnR5cGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLFxuICAgIGhpZGUgPSByZXF1aXJlKCcuLyQuaGlkZScpLFxuICAgIHVpZCA9IHJlcXVpcmUoJy4vJC51aWQnKSxcbiAgICBUWVBFRCA9IHVpZCgndHlwZWRfYXJyYXknKSxcbiAgICBWSUVXID0gdWlkKCd2aWV3JyksXG4gICAgQUJWID0gISEoZ2xvYmFsLkFycmF5QnVmZmVyICYmIGdsb2JhbC5EYXRhVmlldyksXG4gICAgQVJSQVlTID0gdHJ1ZSxcbiAgICBpID0gMCxcbiAgICBsID0gOTtcbnZhciBUeXBlZEFycmF5Q29uc3RydWN0b3JzID0gWydJbnQ4QXJyYXknLCAnVWludDhBcnJheScsICdVaW50OENsYW1wZWRBcnJheScsICdJbnQxNkFycmF5JywgJ1VpbnQxNkFycmF5JywgJ0ludDMyQXJyYXknLCAnVWludDMyQXJyYXknLCAnRmxvYXQzMkFycmF5JywgJ0Zsb2F0NjRBcnJheSddO1xud2hpbGUgKGkgPCBsKSB7XG4gIHZhciBUeXBlZCA9IGdsb2JhbFtUeXBlZEFycmF5Q29uc3RydWN0b3JzW2krK11dO1xuICBpZiAoVHlwZWQpIHtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVFlQRUQsIHRydWUpO1xuICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcbiAgfSBlbHNlXG4gICAgQVJSQVlTID0gZmFsc2U7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQVJSQVlTOiBBUlJBWVMsXG4gIEFCVjogQUJWLFxuICBDT05TVFI6IEFSUkFZUyAmJiBBQlYsXG4gIFRZUEVEOiBUWVBFRCxcbiAgVklFVzogVklFV1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
