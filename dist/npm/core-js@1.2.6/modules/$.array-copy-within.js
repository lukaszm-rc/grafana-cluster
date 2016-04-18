/* */
'use strict';

System.register([], function (_export, _context) {
  var toObject, toIndex, toLength;
  return {
    setters: [],
    execute: function () {
      toObject = require('./$.to-object');
      toIndex = require('./$.to-index');
      toLength = require('./$.to-length');

      module.exports = [].copyWithin || function copyWithin(target, start) {
        var O = toObject(this),
            len = toLength(O.length),
            to = toIndex(target, len),
            from = toIndex(start, len),
            $$ = arguments,
            end = $$.length > 2 ? $$[2] : undefined,
            count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
            inc = 1;
        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from in O) O[to] = O[from];else delete O[to];
          to += inc;
          from += inc;
        }
        return O;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hcnJheS1jb3B5LXdpdGhpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxpQkFBVyxRQUFRLGVBQVI7QUFDWCxnQkFBVSxRQUFRLGNBQVI7QUFDVixpQkFBVyxRQUFRLGVBQVI7O0FBQ2YsYUFBTyxPQUFQLEdBQWlCLEdBQUcsVUFBSCxJQUFpQixTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEIsS0FBNUIsRUFBbUM7QUFDbkUsWUFBSSxJQUFJLFNBQVMsSUFBVCxDQUFKO1lBQ0EsTUFBTSxTQUFTLEVBQUUsTUFBRixDQUFmO1lBQ0EsS0FBSyxRQUFRLE1BQVIsRUFBZ0IsR0FBaEIsQ0FBTDtZQUNBLE9BQU8sUUFBUSxLQUFSLEVBQWUsR0FBZixDQUFQO1lBQ0EsS0FBSyxTQUFMO1lBQ0EsTUFBTSxHQUFHLE1BQUgsR0FBWSxDQUFaLEdBQWdCLEdBQUcsQ0FBSCxDQUFoQixHQUF3QixTQUF4QjtZQUNOLFFBQVEsS0FBSyxHQUFMLENBQVMsQ0FBQyxRQUFRLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEIsUUFBUSxHQUFSLEVBQWEsR0FBYixDQUExQixDQUFELEdBQWdELElBQWhELEVBQXNELE1BQU0sRUFBTixDQUF2RTtZQUNBLE1BQU0sQ0FBTixDQVIrRDtBQVNuRSxZQUFJLE9BQU8sRUFBUCxJQUFhLEtBQUssT0FBTyxLQUFQLEVBQWM7QUFDbEMsZ0JBQU0sQ0FBQyxDQUFELENBRDRCO0FBRWxDLGtCQUFRLFFBQVEsQ0FBUixDQUYwQjtBQUdsQyxnQkFBTSxRQUFRLENBQVIsQ0FINEI7U0FBcEM7QUFLQSxlQUFPLFVBQVUsQ0FBVixFQUFhO0FBQ2xCLGNBQUksUUFBUSxDQUFSLEVBQ0YsRUFBRSxFQUFGLElBQVEsRUFBRSxJQUFGLENBQVIsQ0FERixLQUdFLE9BQU8sRUFBRSxFQUFGLENBQVAsQ0FIRjtBQUlBLGdCQUFNLEdBQU4sQ0FMa0I7QUFNbEIsa0JBQVEsR0FBUixDQU5rQjtTQUFwQjtBQVFBLGVBQU8sQ0FBUCxDQXRCbUU7T0FBbkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmFycmF5LWNvcHktd2l0aGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JyksXG4gICAgdG9JbmRleCA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpLFxuICAgIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCkge1xuICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpLFxuICAgICAgbGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpLFxuICAgICAgdG8gPSB0b0luZGV4KHRhcmdldCwgbGVuKSxcbiAgICAgIGZyb20gPSB0b0luZGV4KHN0YXJ0LCBsZW4pLFxuICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICBlbmQgPSAkJC5sZW5ndGggPiAyID8gJCRbMl0gOiB1bmRlZmluZWQsXG4gICAgICBjb3VudCA9IE1hdGgubWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pKSAtIGZyb20sIGxlbiAtIHRvKSxcbiAgICAgIGluYyA9IDE7XG4gIGlmIChmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpIHtcbiAgICBpbmMgPSAtMTtcbiAgICBmcm9tICs9IGNvdW50IC0gMTtcbiAgICB0byArPSBjb3VudCAtIDE7XG4gIH1cbiAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgaWYgKGZyb20gaW4gTylcbiAgICAgIE9bdG9dID0gT1tmcm9tXTtcbiAgICBlbHNlXG4gICAgICBkZWxldGUgT1t0b107XG4gICAgdG8gKz0gaW5jO1xuICAgIGZyb20gKz0gaW5jO1xuICB9XG4gIHJldHVybiBPO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
