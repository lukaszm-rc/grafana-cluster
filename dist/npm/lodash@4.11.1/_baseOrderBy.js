'use strict';

System.register([], function (_export, _context) {
  var arrayMap, baseIteratee, baseMap, baseSortBy, baseUnary, compareMultiple, identity;

  function baseOrderBy(collection, iteratees, orders) {
    var index = -1;
    iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));
    var result = baseMap(collection, function (value, key, collection) {
      var criteria = arrayMap(iteratees, function (iteratee) {
        return iteratee(value);
      });
      return {
        'criteria': criteria,
        'index': ++index,
        'value': value
      };
    });
    return baseSortBy(result, function (object, other) {
      return compareMultiple(object, other, orders);
    });
  }
  return {
    setters: [],
    execute: function () {
      arrayMap = require('./_arrayMap');
      baseIteratee = require('./_baseIteratee');
      baseMap = require('./_baseMap');
      baseSortBy = require('./_baseSortBy');
      baseUnary = require('./_baseUnary');
      compareMultiple = require('./_compareMultiple');
      identity = require('./identity');
      module.exports = baseOrderBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlT3JkZXJCeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVFBLFdBQVMsV0FBVCxDQUFxQixVQUFyQixFQUFpQyxTQUFqQyxFQUE0QyxNQUE1QyxFQUFvRDtBQUNsRCxRQUFJLFFBQVEsQ0FBQyxDQUFELENBRHNDO0FBRWxELGdCQUFZLFNBQVMsVUFBVSxNQUFWLEdBQW1CLFNBQW5CLEdBQStCLENBQUMsUUFBRCxDQUEvQixFQUEyQyxVQUFVLFlBQVYsQ0FBcEQsQ0FBWixDQUZrRDtBQUdsRCxRQUFJLFNBQVMsUUFBUSxVQUFSLEVBQW9CLFVBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFxQixVQUFyQixFQUFpQztBQUNoRSxVQUFJLFdBQVcsU0FBUyxTQUFULEVBQW9CLFVBQVMsUUFBVCxFQUFtQjtBQUNwRCxlQUFPLFNBQVMsS0FBVCxDQUFQLENBRG9EO09BQW5CLENBQS9CLENBRDREO0FBSWhFLGFBQU87QUFDTCxvQkFBWSxRQUFaO0FBQ0EsaUJBQVMsRUFBRSxLQUFGO0FBQ1QsaUJBQVMsS0FBVDtPQUhGLENBSmdFO0tBQWpDLENBQTdCLENBSDhDO0FBYWxELFdBQU8sV0FBVyxNQUFYLEVBQW1CLFVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QjtBQUNoRCxhQUFPLGdCQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUErQixNQUEvQixDQUFQLENBRGdEO0tBQXhCLENBQTFCLENBYmtEO0dBQXBEOzs7O0FBUEksaUJBQVcsUUFBUSxhQUFSO0FBQ1gscUJBQWUsUUFBUSxpQkFBUjtBQUNmLGdCQUFVLFFBQVEsWUFBUjtBQUNWLG1CQUFhLFFBQVEsZUFBUjtBQUNiLGtCQUFZLFFBQVEsY0FBUjtBQUNaLHdCQUFrQixRQUFRLG9CQUFSO0FBQ2xCLGlCQUFXLFFBQVEsWUFBUjtBQWtCZixhQUFPLE9BQVAsR0FBaUIsV0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Jhc2VPcmRlckJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VNYXAgPSByZXF1aXJlKCcuL19iYXNlTWFwJyksXG4gICAgYmFzZVNvcnRCeSA9IHJlcXVpcmUoJy4vX2Jhc2VTb3J0QnknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBjb21wYXJlTXVsdGlwbGUgPSByZXF1aXJlKCcuL19jb21wYXJlTXVsdGlwbGUnKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcbmZ1bmN0aW9uIGJhc2VPcmRlckJ5KGNvbGxlY3Rpb24sIGl0ZXJhdGVlcywgb3JkZXJzKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICBpdGVyYXRlZXMgPSBhcnJheU1hcChpdGVyYXRlZXMubGVuZ3RoID8gaXRlcmF0ZWVzIDogW2lkZW50aXR5XSwgYmFzZVVuYXJ5KGJhc2VJdGVyYXRlZSkpO1xuICB2YXIgcmVzdWx0ID0gYmFzZU1hcChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGNyaXRlcmlhID0gYXJyYXlNYXAoaXRlcmF0ZWVzLCBmdW5jdGlvbihpdGVyYXRlZSkge1xuICAgICAgcmV0dXJuIGl0ZXJhdGVlKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NyaXRlcmlhJzogY3JpdGVyaWEsXG4gICAgICAnaW5kZXgnOiArK2luZGV4LFxuICAgICAgJ3ZhbHVlJzogdmFsdWVcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGJhc2VTb3J0QnkocmVzdWx0LCBmdW5jdGlvbihvYmplY3QsIG90aGVyKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVNdWx0aXBsZShvYmplY3QsIG90aGVyLCBvcmRlcnMpO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gYmFzZU9yZGVyQnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
