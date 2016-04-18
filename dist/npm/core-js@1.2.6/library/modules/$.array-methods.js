'use strict';

System.register([], function (_export, _context) {
  var ctx, IObject, toObject, toLength, asc;
  return {
    setters: [],
    execute: function () {
      ctx = require('./$.ctx');
      IObject = require('./$.iobject');
      toObject = require('./$.to-object');
      toLength = require('./$.to-length');
      asc = require('./$.array-species-create');

      module.exports = function (TYPE) {
        var IS_MAP = TYPE == 1,
            IS_FILTER = TYPE == 2,
            IS_SOME = TYPE == 3,
            IS_EVERY = TYPE == 4,
            IS_FIND_INDEX = TYPE == 6,
            NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that) {
          var O = toObject($this),
              self = IObject(O),
              f = ctx(callbackfn, that, 3),
              length = toLength(self.length),
              index = 0,
              result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined,
              val,
              res;
          for (; length > index; index++) {
            if (NO_HOLES || index in self) {
              val = self[index];
              res = f(val, index, O);
              if (TYPE) {
                if (IS_MAP) result[index] = res;else if (res) switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return val;
                  case 6:
                    return index;
                  case 2:
                    result.push(val);
                } else if (IS_EVERY) return false;
              }
            }
          }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmFycmF5LW1ldGhvZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFlBQU0sUUFBUSxTQUFSO0FBQ04sZ0JBQVUsUUFBUSxhQUFSO0FBQ1YsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsWUFBTSxRQUFRLDBCQUFSOztBQUNWLGFBQU8sT0FBUCxHQUFpQixVQUFTLElBQVQsRUFBZTtBQUM5QixZQUFJLFNBQVMsUUFBUSxDQUFSO1lBQ1QsWUFBWSxRQUFRLENBQVI7WUFDWixVQUFVLFFBQVEsQ0FBUjtZQUNWLFdBQVcsUUFBUSxDQUFSO1lBQ1gsZ0JBQWdCLFFBQVEsQ0FBUjtZQUNoQixXQUFXLFFBQVEsQ0FBUixJQUFhLGFBQWIsQ0FOZTtBQU85QixlQUFPLFVBQVMsS0FBVCxFQUFnQixVQUFoQixFQUE0QixJQUE1QixFQUFrQztBQUN2QyxjQUFJLElBQUksU0FBUyxLQUFULENBQUo7Y0FDQSxPQUFPLFFBQVEsQ0FBUixDQUFQO2NBQ0EsSUFBSSxJQUFJLFVBQUosRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBdEIsQ0FBSjtjQUNBLFNBQVMsU0FBUyxLQUFLLE1BQUwsQ0FBbEI7Y0FDQSxRQUFRLENBQVI7Y0FDQSxTQUFTLFNBQVMsSUFBSSxLQUFKLEVBQVcsTUFBWCxDQUFULEdBQThCLFlBQVksSUFBSSxLQUFKLEVBQVcsQ0FBWCxDQUFaLEdBQTRCLFNBQTVCO2NBQ3ZDLEdBTko7Y0FPSSxHQVBKLENBRHVDO0FBU3ZDLGlCQUFPLFNBQVMsS0FBVCxFQUFnQixPQUF2QjtBQUNFLGdCQUFJLFlBQVksU0FBUyxJQUFULEVBQWU7QUFDN0Isb0JBQU0sS0FBSyxLQUFMLENBQU4sQ0FENkI7QUFFN0Isb0JBQU0sRUFBRSxHQUFGLEVBQU8sS0FBUCxFQUFjLENBQWQsQ0FBTixDQUY2QjtBQUc3QixrQkFBSSxJQUFKLEVBQVU7QUFDUixvQkFBSSxNQUFKLEVBQ0UsT0FBTyxLQUFQLElBQWdCLEdBQWhCLENBREYsS0FFSyxJQUFJLEdBQUosRUFDSCxRQUFRLElBQVI7QUFDRSx1QkFBSyxDQUFMO0FBQ0UsMkJBQU8sSUFBUCxDQURGO0FBREYsdUJBR08sQ0FBTDtBQUNFLDJCQUFPLEdBQVAsQ0FERjtBQUhGLHVCQUtPLENBQUw7QUFDRSwyQkFBTyxLQUFQLENBREY7QUFMRix1QkFPTyxDQUFMO0FBQ0UsMkJBQU8sSUFBUCxDQUFZLEdBQVosRUFERjtBQVBGLGlCQURHLE1BV0EsSUFBSSxRQUFKLEVBQ0gsT0FBTyxLQUFQLENBREc7ZUFkUDthQUhGO1dBREYsT0FzQk8sZ0JBQWdCLENBQUMsQ0FBRCxHQUFLLFdBQVcsUUFBWCxHQUFzQixRQUF0QixHQUFpQyxNQUFqQyxDQS9CVztTQUFsQyxDQVB1QjtPQUFmIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmFycmF5LW1ldGhvZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjdHggPSByZXF1aXJlKCcuLyQuY3R4JyksXG4gICAgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JyksXG4gICAgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyksXG4gICAgYXNjID0gcmVxdWlyZSgnLi8kLmFycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMSxcbiAgICAgIElTX0ZJTFRFUiA9IFRZUEUgPT0gMixcbiAgICAgIElTX1NPTUUgPSBUWVBFID09IDMsXG4gICAgICBJU19FVkVSWSA9IFRZUEUgPT0gNCxcbiAgICAgIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDYsXG4gICAgICBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKSxcbiAgICAgICAgc2VsZiA9IElPYmplY3QoTyksXG4gICAgICAgIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyksXG4gICAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKSxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICByZXN1bHQgPSBJU19NQVAgPyBhc2MoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBhc2MoJHRoaXMsIDApIDogdW5kZWZpbmVkLFxuICAgICAgICB2YWwsXG4gICAgICAgIHJlcztcbiAgICBmb3IgKDsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspXG4gICAgICBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgICBpZiAoSVNfTUFQKVxuICAgICAgICAgICAgcmVzdWx0W2luZGV4XSA9IHJlcztcbiAgICAgICAgICBlbHNlIGlmIChyZXMpXG4gICAgICAgICAgICBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoSVNfRVZFUlkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==