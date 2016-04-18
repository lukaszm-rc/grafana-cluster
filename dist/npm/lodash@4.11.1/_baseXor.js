'use strict';

System.register([], function (_export, _context) {
    var arrayPush, baseDifference, baseUniq;

    function baseXor(arrays, iteratee, comparator) {
        var index = -1,
            length = arrays.length;
        while (++index < length) {
            var result = result ? arrayPush(baseDifference(result, arrays[index], iteratee, comparator), baseDifference(arrays[index], result, iteratee, comparator)) : arrays[index];
        }
        return result && result.length ? baseUniq(result, iteratee, comparator) : [];
    }
    return {
        setters: [],
        execute: function () {
            arrayPush = require('./_arrayPush');
            baseDifference = require('./_baseDifference');
            baseUniq = require('./_baseUniq');
            module.exports = baseXor;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlWG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DLFVBQW5DLEVBQStDO0FBQzdDLFlBQUksUUFBUSxDQUFDLENBQUQ7WUFDUixTQUFTLE9BQU8sTUFBUCxDQUZnQztBQUc3QyxlQUFPLEVBQUUsS0FBRixHQUFVLE1BQVYsRUFBa0I7QUFDdkIsZ0JBQUksU0FBUyxTQUFTLFVBQVUsZUFBZSxNQUFmLEVBQXVCLE9BQU8sS0FBUCxDQUF2QixFQUFzQyxRQUF0QyxFQUFnRCxVQUFoRCxDQUFWLEVBQXVFLGVBQWUsT0FBTyxLQUFQLENBQWYsRUFBOEIsTUFBOUIsRUFBc0MsUUFBdEMsRUFBZ0QsVUFBaEQsQ0FBdkUsQ0FBVCxHQUErSSxPQUFPLEtBQVAsQ0FBL0ksQ0FEVTtTQUF6QjtBQUdBLGVBQU8sTUFBQyxJQUFVLE9BQU8sTUFBUCxHQUFpQixTQUFTLE1BQVQsRUFBaUIsUUFBakIsRUFBMkIsVUFBM0IsQ0FBNUIsR0FBcUUsRUFBckUsQ0FOc0M7S0FBL0M7Ozs7QUFISSx3QkFBWSxRQUFRLGNBQVI7QUFDWiw2QkFBaUIsUUFBUSxtQkFBUjtBQUNqQix1QkFBVyxRQUFRLGFBQVI7QUFTZixtQkFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19iYXNlWG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgYmFzZURpZmZlcmVuY2UgPSByZXF1aXJlKCcuL19iYXNlRGlmZmVyZW5jZScpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcbmZ1bmN0aW9uIGJhc2VYb3IoYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5cy5sZW5ndGg7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlc3VsdCA/IGFycmF5UHVzaChiYXNlRGlmZmVyZW5jZShyZXN1bHQsIGFycmF5c1tpbmRleF0sIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSwgYmFzZURpZmZlcmVuY2UoYXJyYXlzW2luZGV4XSwgcmVzdWx0LCBpdGVyYXRlZSwgY29tcGFyYXRvcikpIDogYXJyYXlzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSA/IGJhc2VVbmlxKHJlc3VsdCwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIDogW107XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VYb3I7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
