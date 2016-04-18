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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hcnJheS1pbmNsdWRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksa0JBQVksUUFBUSxnQkFBUjtBQUNaLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGdCQUFVLFFBQVEsY0FBUjs7QUFDZCxhQUFPLE9BQVAsR0FBaUIsVUFBUyxXQUFULEVBQXNCO0FBQ3JDLGVBQU8sVUFBUyxLQUFULEVBQWdCLEVBQWhCLEVBQW9CLFNBQXBCLEVBQStCO0FBQ3BDLGNBQUksSUFBSSxVQUFVLEtBQVYsQ0FBSjtjQUNBLFNBQVMsU0FBUyxFQUFFLE1BQUYsQ0FBbEI7Y0FDQSxRQUFRLFFBQVEsU0FBUixFQUFtQixNQUFuQixDQUFSO2NBQ0EsS0FISixDQURvQztBQUtwQyxjQUFJLGVBQWUsTUFBTSxFQUFOLEVBQ2pCLE9BQU8sU0FBUyxLQUFULEVBQWdCO0FBQ3JCLG9CQUFRLEVBQUUsT0FBRixDQUFSLENBRHFCO0FBRXJCLGdCQUFJLFNBQVMsS0FBVCxFQUNGLE9BQU8sSUFBUCxDQURGO1dBRkYsTUFNQSxPQUFPLFNBQVMsS0FBVCxFQUFnQixPQUF2QjtBQUNFLGdCQUFJLGVBQWUsU0FBUyxDQUFULEVBQVk7QUFDN0Isa0JBQUksRUFBRSxLQUFGLE1BQWEsRUFBYixFQUNGLE9BQU8sZUFBZSxLQUFmLENBRFQ7YUFERjtXQURGLE9BS0ssQ0FBQyxXQUFELElBQWdCLENBQUMsQ0FBRCxDQWpCYTtTQUEvQixDQUQ4QjtPQUF0QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpLFxuICAgIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpLFxuICAgIHRvSW5kZXggPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpLFxuICAgICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCksXG4gICAgICAgIGluZGV4ID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aCksXG4gICAgICAgIHZhbHVlO1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbClcbiAgICAgIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICBlbHNlXG4gICAgICBmb3IgKDsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspXG4gICAgICAgIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICAgICAgaWYgKE9baW5kZXhdID09PSBlbClcbiAgICAgICAgICAgIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleDtcbiAgICAgICAgfVxuICAgIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
