'use strict';

System.register([], function (_export, _context) {
  var baseDifference, baseFlatten, baseIteratee, isArrayLikeObject, last, rest, differenceBy;
  return {
    setters: [],
    execute: function () {
      baseDifference = require('./_baseDifference');
      baseFlatten = require('./_baseFlatten');
      baseIteratee = require('./_baseIteratee');
      isArrayLikeObject = require('./isArrayLikeObject');
      last = require('./last');
      rest = require('./rest');
      differenceBy = rest(function (array, values) {
        var iteratee = last(values);
        if (isArrayLikeObject(iteratee)) {
          iteratee = undefined;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), baseIteratee(iteratee)) : [];
      });

      module.exports = differenceBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RpZmZlcmVuY2VCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsb0JBQWMsUUFBUSxnQkFBUjtBQUNkLHFCQUFlLFFBQVEsaUJBQVI7QUFDZiwwQkFBb0IsUUFBUSxxQkFBUjtBQUNwQixhQUFPLFFBQVEsUUFBUjtBQUNQLGFBQU8sUUFBUSxRQUFSO0FBQ1AscUJBQWUsS0FBSyxVQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0I7QUFDOUMsWUFBSSxXQUFXLEtBQUssTUFBTCxDQUFYLENBRDBDO0FBRTlDLFlBQUksa0JBQWtCLFFBQWxCLENBQUosRUFBaUM7QUFDL0IscUJBQVcsU0FBWCxDQUQrQjtTQUFqQztBQUdBLGVBQU8sa0JBQWtCLEtBQWxCLElBQTJCLGVBQWUsS0FBZixFQUFzQixZQUFZLE1BQVosRUFBb0IsQ0FBcEIsRUFBdUIsaUJBQXZCLEVBQTBDLElBQTFDLENBQXRCLEVBQXVFLGFBQWEsUUFBYixDQUF2RSxDQUEzQixHQUE0SCxFQUE1SCxDQUx1QztPQUF4Qjs7QUFPeEIsYUFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2RpZmZlcmVuY2VCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi9fYmFzZURpZmZlcmVuY2UnKSxcbiAgICBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBkaWZmZXJlbmNlQnkgPSByZXN0KGZ1bmN0aW9uKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdCh2YWx1ZXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KGFycmF5KSA/IGJhc2VEaWZmZXJlbmNlKGFycmF5LCBiYXNlRmxhdHRlbih2YWx1ZXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSkgOiBbXTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlQnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
