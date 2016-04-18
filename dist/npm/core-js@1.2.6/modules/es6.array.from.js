/* */
'use strict';

System.register([], function (_export, _context) {
  var ctx, $export, toObject, call, isArrayIter, toLength, getIterFn;
  return {
    setters: [],
    execute: function () {
      ctx = require('./$.ctx');
      $export = require('./$.export');
      toObject = require('./$.to-object');
      call = require('./$.iter-call');
      isArrayIter = require('./$.is-array-iter');
      toLength = require('./$.to-length');
      getIterFn = require('./core.get-iterator-method');

      $export($export.S + $export.F * !require('./$.iter-detect')(function (iter) {
        Array.from(iter);
      }), 'Array', { from: function from(arrayLike) {
          var O = toObject(arrayLike),
              C = typeof this == 'function' ? this : Array,
              $$ = arguments,
              $$len = $$.length,
              mapfn = $$len > 1 ? $$[1] : undefined,
              mapping = mapfn !== undefined,
              index = 0,
              iterFn = getIterFn(O),
              length,
              result,
              step,
              iterator;
          if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
          if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
              result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
            }
          } else {
            length = toLength(O.length);
            for (result = new C(length); length > index; index++) {
              result[index] = mapping ? mapfn(O[index], index) : O[index];
            }
          }
          result.length = index;
          return result;
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksWUFBTSxRQUFRLFNBQVI7QUFDTixnQkFBVSxRQUFRLFlBQVI7QUFDVixpQkFBVyxRQUFRLGVBQVI7QUFDWCxhQUFPLFFBQVEsZUFBUjtBQUNQLG9CQUFjLFFBQVEsbUJBQVI7QUFDZCxpQkFBVyxRQUFRLGVBQVI7QUFDWCxrQkFBWSxRQUFRLDRCQUFSOztBQUNoQixjQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixHQUFZLENBQUMsUUFBUSxpQkFBUixFQUEyQixVQUFTLElBQVQsRUFBZTtBQUN6RSxjQUFNLElBQU4sQ0FBVyxJQUFYLEVBRHlFO09BQWYsQ0FBNUIsRUFFNUIsT0FGSixFQUVhLEVBQUMsTUFBTSxTQUFTLElBQVQsQ0FBYyxTQUFkLEVBQXlCO0FBQ3pDLGNBQUksSUFBSSxTQUFTLFNBQVQsQ0FBSjtjQUNBLElBQUksT0FBTyxJQUFQLElBQWUsVUFBZixHQUE0QixJQUE1QixHQUFtQyxLQUFuQztjQUNKLEtBQUssU0FBTDtjQUNBLFFBQVEsR0FBRyxNQUFIO2NBQ1IsUUFBUSxRQUFRLENBQVIsR0FBWSxHQUFHLENBQUgsQ0FBWixHQUFvQixTQUFwQjtjQUNSLFVBQVUsVUFBVSxTQUFWO2NBQ1YsUUFBUSxDQUFSO2NBQ0EsU0FBUyxVQUFVLENBQVYsQ0FBVDtjQUNBLE1BUko7Y0FTSSxNQVRKO2NBVUksSUFWSjtjQVdJLFFBWEosQ0FEeUM7QUFhekMsY0FBSSxPQUFKLEVBQ0UsUUFBUSxJQUFJLEtBQUosRUFBVyxRQUFRLENBQVIsR0FBWSxHQUFHLENBQUgsQ0FBWixHQUFvQixTQUFwQixFQUErQixDQUExQyxDQUFSLENBREY7QUFFQSxjQUFJLFVBQVUsU0FBVixJQUF1QixFQUFFLEtBQUssS0FBTCxJQUFjLFlBQVksTUFBWixDQUFkLENBQUYsRUFBc0M7QUFDL0QsaUJBQUssV0FBVyxPQUFPLElBQVAsQ0FBWSxDQUFaLENBQVgsRUFBMkIsU0FBUyxJQUFJLENBQUosRUFBVCxFQUFnQixDQUFDLENBQUMsT0FBTyxTQUFTLElBQVQsRUFBUCxDQUFELENBQXlCLElBQXpCLEVBQStCLE9BQWhGLEVBQXlGO0FBQ3ZGLHFCQUFPLEtBQVAsSUFBZ0IsVUFBVSxLQUFLLFFBQUwsRUFBZSxLQUFmLEVBQXNCLENBQUMsS0FBSyxLQUFMLEVBQVksS0FBYixDQUF0QixFQUEyQyxJQUEzQyxDQUFWLEdBQTZELEtBQUssS0FBTCxDQURVO2FBQXpGO1dBREYsTUFJTztBQUNMLHFCQUFTLFNBQVMsRUFBRSxNQUFGLENBQWxCLENBREs7QUFFTCxpQkFBSyxTQUFTLElBQUksQ0FBSixDQUFNLE1BQU4sQ0FBVCxFQUF3QixTQUFTLEtBQVQsRUFBZ0IsT0FBN0MsRUFBc0Q7QUFDcEQscUJBQU8sS0FBUCxJQUFnQixVQUFVLE1BQU0sRUFBRSxLQUFGLENBQU4sRUFBZ0IsS0FBaEIsQ0FBVixHQUFtQyxFQUFFLEtBQUYsQ0FBbkMsQ0FEb0M7YUFBdEQ7V0FORjtBQVVBLGlCQUFPLE1BQVAsR0FBZ0IsS0FBaEIsQ0F6QnlDO0FBMEJ6QyxpQkFBTyxNQUFQLENBMUJ5QztTQUF6QixFQUZwQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi8kLmN0eCcpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JyksXG4gICAgY2FsbCA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKSxcbiAgICBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJyksXG4gICAgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyksXG4gICAgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpIHtcbiAgQXJyYXkuZnJvbShpdGVyKTtcbn0pLCAnQXJyYXknLCB7ZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSksXG4gICAgICAgIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5LFxuICAgICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICAgIG1hcGZuID0gJCRsZW4gPiAxID8gJCRbMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgIGl0ZXJGbiA9IGdldEl0ZXJGbihPKSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKVxuICAgICAgbWFwZm4gPSBjdHgobWFwZm4sICQkbGVuID4gMiA/ICQkWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
