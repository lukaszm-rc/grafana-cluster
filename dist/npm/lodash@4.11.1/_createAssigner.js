'use strict';

System.register([], function (_export, _context) {
  var isIterateeCall, rest;

  function createAssigner(assigner) {
    return rest(function (object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;
      customizer = typeof customizer == 'function' ? (length--, customizer) : undefined;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  return {
    setters: [],
    execute: function () {
      isIterateeCall = require('./_isIterateeCall');
      rest = require('./rest');
      module.exports = createAssigner;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVBc3NpZ25lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQztBQUNoQyxXQUFPLEtBQUssVUFBUyxNQUFULEVBQWlCLE9BQWpCLEVBQTBCO0FBQ3BDLFVBQUksUUFBUSxDQUFDLENBQUQ7VUFDUixTQUFTLFFBQVEsTUFBUjtVQUNULGFBQWEsU0FBUyxDQUFULEdBQWEsUUFBUSxTQUFTLENBQVQsQ0FBckIsR0FBbUMsU0FBbkM7VUFDYixRQUFRLFNBQVMsQ0FBVCxHQUFhLFFBQVEsQ0FBUixDQUFiLEdBQTBCLFNBQTFCLENBSndCO0FBS3BDLG1CQUFhLE9BQU8sVUFBUCxJQUFxQixVQUFyQixJQUFtQyxVQUFVLFVBQVYsQ0FBbkMsR0FBMkQsU0FBM0QsQ0FMdUI7QUFNcEMsVUFBSSxTQUFTLGVBQWUsUUFBUSxDQUFSLENBQWYsRUFBMkIsUUFBUSxDQUFSLENBQTNCLEVBQXVDLEtBQXZDLENBQVQsRUFBd0Q7QUFDMUQscUJBQWEsU0FBUyxDQUFULEdBQWEsU0FBYixHQUF5QixVQUF6QixDQUQ2QztBQUUxRCxpQkFBUyxDQUFULENBRjBEO09BQTVEO0FBSUEsZUFBUyxPQUFPLE1BQVAsQ0FBVCxDQVZvQztBQVdwQyxhQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsWUFBSSxTQUFTLFFBQVEsS0FBUixDQUFULENBRG1CO0FBRXZCLFlBQUksTUFBSixFQUFZO0FBQ1YsbUJBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixFQUFnQyxVQUFoQyxFQURVO1NBQVo7T0FGRjtBQU1BLGFBQU8sTUFBUCxDQWpCb0M7S0FBMUIsQ0FBWixDQURnQztHQUFsQzs7OztBQUZJLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLGFBQU8sUUFBUSxRQUFSO0FBc0JYLGFBQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fY3JlYXRlQXNzaWduZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIHJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG4gICAgY3VzdG9taXplciA9IHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpIDogdW5kZWZpbmVkO1xuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
