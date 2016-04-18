'use strict';

System.register([], function (_export, _context) {
  var compareAscending;

  function compareMultiple(object, other, orders) {
    var index = -1,
        objCriteria = object.criteria,
        othCriteria = other.criteria,
        length = objCriteria.length,
        ordersLength = orders.length;
    while (++index < length) {
      var result = compareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        var order = orders[index];
        return result * (order == 'desc' ? -1 : 1);
      }
    }
    return object.index - other.index;
  }
  return {
    setters: [],
    execute: function () {
      compareAscending = require('./_compareAscending');
      module.exports = compareMultiple;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jb21wYXJlTXVsdGlwbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxXQUFTLGVBQVQsQ0FBeUIsTUFBekIsRUFBaUMsS0FBakMsRUFBd0MsTUFBeEMsRUFBZ0Q7QUFDOUMsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLGNBQWMsT0FBTyxRQUFQO1FBQ2QsY0FBYyxNQUFNLFFBQU47UUFDZCxTQUFTLFlBQVksTUFBWjtRQUNULGVBQWUsT0FBTyxNQUFQLENBTDJCO0FBTTlDLFdBQU8sRUFBRSxLQUFGLEdBQVUsTUFBVixFQUFrQjtBQUN2QixVQUFJLFNBQVMsaUJBQWlCLFlBQVksS0FBWixDQUFqQixFQUFxQyxZQUFZLEtBQVosQ0FBckMsQ0FBVCxDQURtQjtBQUV2QixVQUFJLE1BQUosRUFBWTtBQUNWLFlBQUksU0FBUyxZQUFULEVBQXVCO0FBQ3pCLGlCQUFPLE1BQVAsQ0FEeUI7U0FBM0I7QUFHQSxZQUFJLFFBQVEsT0FBTyxLQUFQLENBQVIsQ0FKTTtBQUtWLGVBQU8sVUFBVSxTQUFTLE1BQVQsR0FBa0IsQ0FBQyxDQUFELEdBQUssQ0FBdkIsQ0FBVixDQUxHO09BQVo7S0FGRjtBQVVBLFdBQU8sT0FBTyxLQUFQLEdBQWUsTUFBTSxLQUFOLENBaEJ3QjtHQUFoRDs7OztBQURJLHlCQUFtQixRQUFRLHFCQUFSO0FBbUJ2QixhQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NvbXBhcmVNdWx0aXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvbXBhcmVBc2NlbmRpbmcgPSByZXF1aXJlKCcuL19jb21wYXJlQXNjZW5kaW5nJyk7XG5mdW5jdGlvbiBjb21wYXJlTXVsdGlwbGUob2JqZWN0LCBvdGhlciwgb3JkZXJzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgb2JqQ3JpdGVyaWEgPSBvYmplY3QuY3JpdGVyaWEsXG4gICAgICBvdGhDcml0ZXJpYSA9IG90aGVyLmNyaXRlcmlhLFxuICAgICAgbGVuZ3RoID0gb2JqQ3JpdGVyaWEubGVuZ3RoLFxuICAgICAgb3JkZXJzTGVuZ3RoID0gb3JkZXJzLmxlbmd0aDtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcmVzdWx0ID0gY29tcGFyZUFzY2VuZGluZyhvYmpDcml0ZXJpYVtpbmRleF0sIG90aENyaXRlcmlhW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKGluZGV4ID49IG9yZGVyc0xlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgdmFyIG9yZGVyID0gb3JkZXJzW2luZGV4XTtcbiAgICAgIHJldHVybiByZXN1bHQgKiAob3JkZXIgPT0gJ2Rlc2MnID8gLTEgOiAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdC5pbmRleCAtIG90aGVyLmluZGV4O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlTXVsdGlwbGU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
