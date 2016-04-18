'use strict';

System.register([], function (_export, _context) {
  var toIObject, toLength, toIndex;
  return {
    setters: [],
    execute: function () {
      toIObject = require('./$.to-iobject');
      toLength = require('./$.to-length');
      toIndex = require('./$.to-index');

      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this),
              length = toLength(O.length),
              index = toIndex(fromIndex, length),
              value;
          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++];
            if (value != value) return true;
          } else for (; length > index; index++) {
            if (IS_INCLUDES || index in O) {
              if (O[index] === el) return IS_INCLUDES || index;
            }
          }return !IS_INCLUDES && -1;
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmFycmF5LWluY2x1ZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxrQkFBWSxRQUFRLGdCQUFSO0FBQ1osaUJBQVcsUUFBUSxlQUFSO0FBQ1gsZ0JBQVUsUUFBUSxjQUFSOztBQUNkLGFBQU8sT0FBUCxHQUFpQixVQUFTLFdBQVQsRUFBc0I7QUFDckMsZUFBTyxVQUFTLEtBQVQsRUFBZ0IsRUFBaEIsRUFBb0IsU0FBcEIsRUFBK0I7QUFDcEMsY0FBSSxJQUFJLFVBQVUsS0FBVixDQUFKO2NBQ0EsU0FBUyxTQUFTLEVBQUUsTUFBRixDQUFsQjtjQUNBLFFBQVEsUUFBUSxTQUFSLEVBQW1CLE1BQW5CLENBQVI7Y0FDQSxLQUhKLENBRG9DO0FBS3BDLGNBQUksZUFBZSxNQUFNLEVBQU4sRUFDakIsT0FBTyxTQUFTLEtBQVQsRUFBZ0I7QUFDckIsb0JBQVEsRUFBRSxPQUFGLENBQVIsQ0FEcUI7QUFFckIsZ0JBQUksU0FBUyxLQUFULEVBQ0YsT0FBTyxJQUFQLENBREY7V0FGRixNQU1BLE9BQU8sU0FBUyxLQUFULEVBQWdCLE9BQXZCO0FBQ0UsZ0JBQUksZUFBZSxTQUFTLENBQVQsRUFBWTtBQUM3QixrQkFBSSxFQUFFLEtBQUYsTUFBYSxFQUFiLEVBQ0YsT0FBTyxlQUFlLEtBQWYsQ0FEVDthQURGO1dBREYsT0FLSyxDQUFDLFdBQUQsSUFBZ0IsQ0FBQyxDQUFELENBakJhO1NBQS9CLENBRDhCO09BQXRCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmFycmF5LWluY2x1ZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKSxcbiAgICB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKSxcbiAgICB0b0luZGV4ID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKSxcbiAgICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpLFxuICAgICAgICBpbmRleCA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpLFxuICAgICAgICB2YWx1ZTtcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpXG4gICAgICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgICBpZiAodmFsdWUgIT0gdmFsdWUpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgZWxzZVxuICAgICAgZm9yICg7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKVxuICAgICAgICBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpXG4gICAgICAgICAgICByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXg7XG4gICAgICAgIH1cbiAgICByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
