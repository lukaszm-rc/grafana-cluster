'use strict';

System.register([], function (_export, _context) {
    var apply, baseEach, baseInvoke, isArrayLike, isKey, rest, invokeMap;
    return {
        setters: [],
        execute: function () {
            apply = require('./_apply');
            baseEach = require('./_baseEach');
            baseInvoke = require('./_baseInvoke');
            isArrayLike = require('./isArrayLike');
            isKey = require('./_isKey');
            rest = require('./rest');
            invokeMap = rest(function (collection, path, args) {
                var index = -1,
                    isFunc = typeof path == 'function',
                    isProp = isKey(path),
                    result = isArrayLike(collection) ? Array(collection.length) : [];
                baseEach(collection, function (value) {
                    var func = isFunc ? path : isProp && value != null ? value[path] : undefined;
                    result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
                });
                return result;
            });

            module.exports = invokeMap;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ludm9rZU1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksb0JBQVEsUUFBUSxVQUFSO0FBQ1IsdUJBQVcsUUFBUSxhQUFSO0FBQ1gseUJBQWEsUUFBUSxlQUFSO0FBQ2IsMEJBQWMsUUFBUSxlQUFSO0FBQ2Qsb0JBQVEsUUFBUSxVQUFSO0FBQ1IsbUJBQU8sUUFBUSxRQUFSO0FBQ1Asd0JBQVksS0FBSyxVQUFTLFVBQVQsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDcEQsb0JBQUksUUFBUSxDQUFDLENBQUQ7b0JBQ1IsU0FBUyxPQUFPLElBQVAsSUFBZSxVQUFmO29CQUNULFNBQVMsTUFBTSxJQUFOLENBQVQ7b0JBQ0EsU0FBUyxZQUFZLFVBQVosSUFBMEIsTUFBTSxXQUFXLE1BQVgsQ0FBaEMsR0FBcUQsRUFBckQsQ0FKdUM7QUFLcEQseUJBQVMsVUFBVCxFQUFxQixVQUFTLEtBQVQsRUFBZ0I7QUFDbkMsd0JBQUksT0FBTyxTQUFTLElBQVQsR0FBaUIsTUFBQyxJQUFVLFNBQVMsSUFBVCxHQUFpQixNQUFNLElBQU4sQ0FBNUIsR0FBMEMsU0FBMUMsQ0FETztBQUVuQywyQkFBTyxFQUFFLEtBQUYsQ0FBUCxHQUFrQixPQUFPLE1BQU0sSUFBTixFQUFZLEtBQVosRUFBbUIsSUFBbkIsQ0FBUCxHQUFrQyxXQUFXLEtBQVgsRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsQ0FBbEMsQ0FGaUI7aUJBQWhCLENBQXJCLENBTG9EO0FBU3BELHVCQUFPLE1BQVAsQ0FUb0Q7YUFBakM7O0FBV3JCLG1CQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaW52b2tlTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBiYXNlSW52b2tlID0gcmVxdWlyZSgnLi9fYmFzZUludm9rZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgaW52b2tlTWFwID0gcmVzdChmdW5jdGlvbihjb2xsZWN0aW9uLCBwYXRoLCBhcmdzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaXNGdW5jID0gdHlwZW9mIHBhdGggPT0gJ2Z1bmN0aW9uJyxcbiAgICAgIGlzUHJvcCA9IGlzS2V5KHBhdGgpLFxuICAgICAgcmVzdWx0ID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBBcnJheShjb2xsZWN0aW9uLmxlbmd0aCkgOiBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgZnVuYyA9IGlzRnVuYyA/IHBhdGggOiAoKGlzUHJvcCAmJiB2YWx1ZSAhPSBudWxsKSA/IHZhbHVlW3BhdGhdIDogdW5kZWZpbmVkKTtcbiAgICByZXN1bHRbKytpbmRleF0gPSBmdW5jID8gYXBwbHkoZnVuYywgdmFsdWUsIGFyZ3MpIDogYmFzZUludm9rZSh2YWx1ZSwgcGF0aCwgYXJncyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGludm9rZU1hcDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
