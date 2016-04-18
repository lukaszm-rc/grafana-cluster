'use strict';

System.register([], function (_export, _context) {
  var baseIteratee, createInverter, objectProto, hasOwnProperty, invertBy;
  return {
    setters: [],
    execute: function () {
      baseIteratee = require('./_baseIteratee');
      createInverter = require('./_createInverter');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      invertBy = createInverter(function (result, value, key) {
        if (hasOwnProperty.call(result, value)) {
          result[value].push(key);
        } else {
          result[value] = [key];
        }
      }, baseIteratee);

      module.exports = invertBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ludmVydEJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsb0JBQWMsT0FBTyxTQUFQO0FBQ2QsdUJBQWlCLFlBQVksY0FBWjtBQUNqQixpQkFBVyxlQUFlLFVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixHQUF4QixFQUE2QjtBQUN6RCxZQUFJLGVBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixLQUE1QixDQUFKLEVBQXdDO0FBQ3RDLGlCQUFPLEtBQVAsRUFBYyxJQUFkLENBQW1CLEdBQW5CLEVBRHNDO1NBQXhDLE1BRU87QUFDTCxpQkFBTyxLQUFQLElBQWdCLENBQUMsR0FBRCxDQUFoQixDQURLO1NBRlA7T0FENEIsRUFNM0IsWUFOWTs7QUFPZixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvaW52ZXJ0QnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBjcmVhdGVJbnZlcnRlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUludmVydGVyJyk7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG52YXIgaW52ZXJ0QnkgPSBjcmVhdGVJbnZlcnRlcihmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCB2YWx1ZSkpIHtcbiAgICByZXN1bHRbdmFsdWVdLnB1c2goa2V5KTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHRbdmFsdWVdID0gW2tleV07XG4gIH1cbn0sIGJhc2VJdGVyYXRlZSk7XG5tb2R1bGUuZXhwb3J0cyA9IGludmVydEJ5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
