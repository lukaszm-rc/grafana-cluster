'use strict';

System.register([], function (_export, _context) {
  var baseClamp, baseRandom, isIterateeCall, toArray, toInteger;

  function sampleSize(collection, n, guard) {
    var index = -1,
        result = toArray(collection),
        length = result.length,
        lastIndex = length - 1;
    if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
      n = 1;
    } else {
      n = baseClamp(toInteger(n), 0, length);
    }
    while (++index < n) {
      var rand = baseRandom(index, lastIndex),
          value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    result.length = n;
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseClamp = require('./_baseClamp');
      baseRandom = require('./_baseRandom');
      isIterateeCall = require('./_isIterateeCall');
      toArray = require('./toArray');
      toInteger = require('./toInteger');
      module.exports = sampleSize;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NhbXBsZVNpemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLFVBQVQsQ0FBb0IsVUFBcEIsRUFBZ0MsQ0FBaEMsRUFBbUMsS0FBbkMsRUFBMEM7QUFDeEMsUUFBSSxRQUFRLENBQUMsQ0FBRDtRQUNSLFNBQVMsUUFBUSxVQUFSLENBQVQ7UUFDQSxTQUFTLE9BQU8sTUFBUDtRQUNULFlBQVksU0FBUyxDQUFULENBSndCO0FBS3hDLFFBQUssUUFBUSxlQUFlLFVBQWYsRUFBMkIsQ0FBM0IsRUFBOEIsS0FBOUIsQ0FBUixHQUErQyxNQUFNLFNBQU4sRUFBa0I7QUFDcEUsVUFBSSxDQUFKLENBRG9FO0tBQXRFLE1BRU87QUFDTCxVQUFJLFVBQVUsVUFBVSxDQUFWLENBQVYsRUFBd0IsQ0FBeEIsRUFBMkIsTUFBM0IsQ0FBSixDQURLO0tBRlA7QUFLQSxXQUFPLEVBQUUsS0FBRixHQUFVLENBQVYsRUFBYTtBQUNsQixVQUFJLE9BQU8sV0FBVyxLQUFYLEVBQWtCLFNBQWxCLENBQVA7VUFDQSxRQUFRLE9BQU8sSUFBUCxDQUFSLENBRmM7QUFHbEIsYUFBTyxJQUFQLElBQWUsT0FBTyxLQUFQLENBQWYsQ0FIa0I7QUFJbEIsYUFBTyxLQUFQLElBQWdCLEtBQWhCLENBSmtCO0tBQXBCO0FBTUEsV0FBTyxNQUFQLEdBQWdCLENBQWhCLENBaEJ3QztBQWlCeEMsV0FBTyxNQUFQLENBakJ3QztHQUExQzs7OztBQUxJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLG1CQUFhLFFBQVEsZUFBUjtBQUNiLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLGdCQUFVLFFBQVEsV0FBUjtBQUNWLGtCQUFZLFFBQVEsYUFBUjtBQW9CaEIsYUFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NhbXBsZVNpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ2xhbXAgPSByZXF1aXJlKCcuL19iYXNlQ2xhbXAnKSxcbiAgICBiYXNlUmFuZG9tID0gcmVxdWlyZSgnLi9fYmFzZVJhbmRvbScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKSxcbiAgICB0b0FycmF5ID0gcmVxdWlyZSgnLi90b0FycmF5JyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcbmZ1bmN0aW9uIHNhbXBsZVNpemUoY29sbGVjdGlvbiwgbiwgZ3VhcmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0b0FycmF5KGNvbGxlY3Rpb24pLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG4gIGlmICgoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChjb2xsZWN0aW9uLCBuLCBndWFyZCkgOiBuID09PSB1bmRlZmluZWQpKSB7XG4gICAgbiA9IDE7XG4gIH0gZWxzZSB7XG4gICAgbiA9IGJhc2VDbGFtcCh0b0ludGVnZXIobiksIDAsIGxlbmd0aCk7XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgdmFyIHJhbmQgPSBiYXNlUmFuZG9tKGluZGV4LCBsYXN0SW5kZXgpLFxuICAgICAgICB2YWx1ZSA9IHJlc3VsdFtyYW5kXTtcbiAgICByZXN1bHRbcmFuZF0gPSByZXN1bHRbaW5kZXhdO1xuICAgIHJlc3VsdFtpbmRleF0gPSB2YWx1ZTtcbiAgfVxuICByZXN1bHQubGVuZ3RoID0gbjtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0gc2FtcGxlU2l6ZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
