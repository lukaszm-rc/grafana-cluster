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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxZQUFNLFFBQVEsU0FBUjtBQUNOLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGFBQU8sUUFBUSxlQUFSO0FBQ1Asb0JBQWMsUUFBUSxtQkFBUjtBQUNkLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGtCQUFZLFFBQVEsNEJBQVI7O0FBQ2hCLGNBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksQ0FBQyxRQUFRLGlCQUFSLEVBQTJCLFVBQVMsSUFBVCxFQUFlO0FBQ3pFLGNBQU0sSUFBTixDQUFXLElBQVgsRUFEeUU7T0FBZixDQUE1QixFQUU1QixPQUZKLEVBRWEsRUFBQyxNQUFNLFNBQVMsSUFBVCxDQUFjLFNBQWQsRUFBeUI7QUFDekMsY0FBSSxJQUFJLFNBQVMsU0FBVCxDQUFKO2NBQ0EsSUFBSSxPQUFPLElBQVAsSUFBZSxVQUFmLEdBQTRCLElBQTVCLEdBQW1DLEtBQW5DO2NBQ0osS0FBSyxTQUFMO2NBQ0EsUUFBUSxHQUFHLE1BQUg7Y0FDUixRQUFRLFFBQVEsQ0FBUixHQUFZLEdBQUcsQ0FBSCxDQUFaLEdBQW9CLFNBQXBCO2NBQ1IsVUFBVSxVQUFVLFNBQVY7Y0FDVixRQUFRLENBQVI7Y0FDQSxTQUFTLFVBQVUsQ0FBVixDQUFUO2NBQ0EsTUFSSjtjQVNJLE1BVEo7Y0FVSSxJQVZKO2NBV0ksUUFYSixDQUR5QztBQWF6QyxjQUFJLE9BQUosRUFDRSxRQUFRLElBQUksS0FBSixFQUFXLFFBQVEsQ0FBUixHQUFZLEdBQUcsQ0FBSCxDQUFaLEdBQW9CLFNBQXBCLEVBQStCLENBQTFDLENBQVIsQ0FERjtBQUVBLGNBQUksVUFBVSxTQUFWLElBQXVCLEVBQUUsS0FBSyxLQUFMLElBQWMsWUFBWSxNQUFaLENBQWQsQ0FBRixFQUFzQztBQUMvRCxpQkFBSyxXQUFXLE9BQU8sSUFBUCxDQUFZLENBQVosQ0FBWCxFQUEyQixTQUFTLElBQUksQ0FBSixFQUFULEVBQWdCLENBQUMsQ0FBQyxPQUFPLFNBQVMsSUFBVCxFQUFQLENBQUQsQ0FBeUIsSUFBekIsRUFBK0IsT0FBaEYsRUFBeUY7QUFDdkYscUJBQU8sS0FBUCxJQUFnQixVQUFVLEtBQUssUUFBTCxFQUFlLEtBQWYsRUFBc0IsQ0FBQyxLQUFLLEtBQUwsRUFBWSxLQUFiLENBQXRCLEVBQTJDLElBQTNDLENBQVYsR0FBNkQsS0FBSyxLQUFMLENBRFU7YUFBekY7V0FERixNQUlPO0FBQ0wscUJBQVMsU0FBUyxFQUFFLE1BQUYsQ0FBbEIsQ0FESztBQUVMLGlCQUFLLFNBQVMsSUFBSSxDQUFKLENBQU0sTUFBTixDQUFULEVBQXdCLFNBQVMsS0FBVCxFQUFnQixPQUE3QyxFQUFzRDtBQUNwRCxxQkFBTyxLQUFQLElBQWdCLFVBQVUsTUFBTSxFQUFFLEtBQUYsQ0FBTixFQUFnQixLQUFoQixDQUFWLEdBQW1DLEVBQUUsS0FBRixDQUFuQyxDQURvQzthQUF0RDtXQU5GO0FBVUEsaUJBQU8sTUFBUCxHQUFnQixLQUFoQixDQXpCeUM7QUEwQnpDLGlCQUFPLE1BQVAsQ0ExQnlDO1NBQXpCLEVBRnBCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vJC5jdHgnKSxcbiAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpLFxuICAgIGNhbGwgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJyksXG4gICAgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpLFxuICAgIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpLFxuICAgIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKSB7XG4gIEFycmF5LmZyb20oaXRlcik7XG59KSwgJ0FycmF5Jywge2Zyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpLFxuICAgICAgICBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSxcbiAgICAgICAgJCQgPSBhcmd1bWVudHMsXG4gICAgICAgICQkbGVuID0gJCQubGVuZ3RoLFxuICAgICAgICBtYXBmbiA9ICQkbGVuID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkLFxuICAgICAgICBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZCxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICBpdGVyRm4gPSBnZXRJdGVyRm4oTyksXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgcmVzdWx0LFxuICAgICAgICBzdGVwLFxuICAgICAgICBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZylcbiAgICAgIG1hcGZuID0gY3R4KG1hcGZuLCAkJGxlbiA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
