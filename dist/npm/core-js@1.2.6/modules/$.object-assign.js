'use strict';

System.register([], function (_export, _context) {
  var $, toObject, IObject;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      toObject = require('./$.to-object');
      IObject = require('./$.iobject');

      module.exports = require('./$.fails')(function () {
        var a = Object.assign,
            A = {},
            B = {},
            S = Symbol(),
            K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach(function (k) {
          B[k] = k;
        });
        return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
      }) ? function assign(target, source) {
        var T = toObject(target),
            $$ = arguments,
            $$len = $$.length,
            index = 1,
            getKeys = $.getKeys,
            getSymbols = $.getSymbols,
            isEnum = $.isEnum;
        while ($$len > index) {
          var S = IObject($$[index++]),
              keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
              length = keys.length,
              j = 0,
              key;
          while (length > j) {
            if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
          }
        }
        return T;
      } : Object.assign;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGdCQUFVLFFBQVEsYUFBUjs7QUFDZCxhQUFPLE9BQVAsR0FBaUIsUUFBUSxXQUFSLEVBQXFCLFlBQVc7QUFDL0MsWUFBSSxJQUFJLE9BQU8sTUFBUDtZQUNKLElBQUksRUFBSjtZQUNBLElBQUksRUFBSjtZQUNBLElBQUksUUFBSjtZQUNBLElBQUksc0JBQUosQ0FMMkM7QUFNL0MsVUFBRSxDQUFGLElBQU8sQ0FBUCxDQU4rQztBQU8vQyxVQUFFLEtBQUYsQ0FBUSxFQUFSLEVBQVksT0FBWixDQUFvQixVQUFTLENBQVQsRUFBWTtBQUM5QixZQUFFLENBQUYsSUFBTyxDQUFQLENBRDhCO1NBQVosQ0FBcEIsQ0FQK0M7QUFVL0MsZUFBTyxFQUFFLEVBQUYsRUFBTSxDQUFOLEVBQVMsQ0FBVCxLQUFlLENBQWYsSUFBb0IsT0FBTyxJQUFQLENBQVksRUFBRSxFQUFGLEVBQU0sQ0FBTixDQUFaLEVBQXNCLElBQXRCLENBQTJCLEVBQTNCLEtBQWtDLENBQWxDLENBVm9CO09BQVgsQ0FBckIsR0FXWixTQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsRUFBZ0M7QUFDbkMsWUFBSSxJQUFJLFNBQVMsTUFBVCxDQUFKO1lBQ0EsS0FBSyxTQUFMO1lBQ0EsUUFBUSxHQUFHLE1BQUg7WUFDUixRQUFRLENBQVI7WUFDQSxVQUFVLEVBQUUsT0FBRjtZQUNWLGFBQWEsRUFBRSxVQUFGO1lBQ2IsU0FBUyxFQUFFLE1BQUYsQ0FQc0I7QUFRbkMsZUFBTyxRQUFRLEtBQVIsRUFBZTtBQUNwQixjQUFJLElBQUksUUFBUSxHQUFHLE9BQUgsQ0FBUixDQUFKO2NBQ0EsT0FBTyxhQUFhLFFBQVEsQ0FBUixFQUFXLE1BQVgsQ0FBa0IsV0FBVyxDQUFYLENBQWxCLENBQWIsR0FBZ0QsUUFBUSxDQUFSLENBQWhEO2NBQ1AsU0FBUyxLQUFLLE1BQUw7Y0FDVCxJQUFJLENBQUo7Y0FDQSxHQUpKLENBRG9CO0FBTXBCLGlCQUFPLFNBQVMsQ0FBVDtBQUNMLGdCQUFJLE9BQU8sSUFBUCxDQUFZLENBQVosRUFBZSxNQUFNLEtBQUssR0FBTCxDQUFOLENBQW5CLEVBQ0UsRUFBRSxHQUFGLElBQVMsRUFBRSxHQUFGLENBQVQsQ0FERjtXQURGO1NBTkY7QUFVQSxlQUFPLENBQVAsQ0FsQm1DO09BQWhDLEdBbUJELE9BQU8sTUFBUCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQub2JqZWN0LWFzc2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKSxcbiAgICBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKSB7XG4gIHZhciBhID0gT2JqZWN0LmFzc2lnbixcbiAgICAgIEEgPSB7fSxcbiAgICAgIEIgPSB7fSxcbiAgICAgIFMgPSBTeW1ib2woKSxcbiAgICAgIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgQltrXSA9IGs7XG4gIH0pO1xuICByZXR1cm4gYSh7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cyhhKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KSxcbiAgICAgICQkID0gYXJndW1lbnRzLFxuICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICBpbmRleCA9IDEsXG4gICAgICBnZXRLZXlzID0gJC5nZXRLZXlzLFxuICAgICAgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scyxcbiAgICAgIGlzRW51bSA9ICQuaXNFbnVtO1xuICB3aGlsZSAoJCRsZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdCgkJFtpbmRleCsrXSksXG4gICAgICAgIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpLFxuICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgaiA9IDAsXG4gICAgICAgIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gailcbiAgICAgIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVxuICAgICAgICBUW2tleV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59IDogT2JqZWN0LmFzc2lnbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
