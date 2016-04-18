'use strict';

System.register([], function (_export, _context) {
    var arrayReduceRight, baseEachRight, baseIteratee, baseReduce, isArray;

    function reduceRight(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce,
            initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }
    return {
        setters: [],
        execute: function () {
            arrayReduceRight = require('./_arrayReduceRight');
            baseEachRight = require('./_baseEachRight');
            baseIteratee = require('./_baseIteratee');
            baseReduce = require('./_baseReduce');
            isArray = require('./isArray');
            module.exports = reduceRight;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JlZHVjZVJpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsYUFBUyxXQUFULENBQXFCLFVBQXJCLEVBQWlDLFFBQWpDLEVBQTJDLFdBQTNDLEVBQXdEO0FBQ3RELFlBQUksT0FBTyxRQUFRLFVBQVIsSUFBc0IsZ0JBQXRCLEdBQXlDLFVBQXpDO1lBQ1AsWUFBWSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsQ0FGc0M7QUFHdEQsZUFBTyxLQUFLLFVBQUwsRUFBaUIsYUFBYSxRQUFiLEVBQXVCLENBQXZCLENBQWpCLEVBQTRDLFdBQTVDLEVBQXlELFNBQXpELEVBQW9FLGFBQXBFLENBQVAsQ0FIc0Q7S0FBeEQ7Ozs7QUFMSSwrQkFBbUIsUUFBUSxxQkFBUjtBQUNuQiw0QkFBZ0IsUUFBUSxrQkFBUjtBQUNoQiwyQkFBZSxRQUFRLGlCQUFSO0FBQ2YseUJBQWEsUUFBUSxlQUFSO0FBQ2Isc0JBQVUsUUFBUSxXQUFSO0FBTWQsbUJBQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9yZWR1Y2VSaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5UmVkdWNlUmlnaHQgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZVJpZ2h0JyksXG4gICAgYmFzZUVhY2hSaWdodCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoUmlnaHQnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVkdWNlID0gcmVxdWlyZSgnLi9fYmFzZVJlZHVjZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcbmZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheVJlZHVjZVJpZ2h0IDogYmFzZVJlZHVjZSxcbiAgICAgIGluaXRBY2N1bSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDQpLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtLCBiYXNlRWFjaFJpZ2h0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVkdWNlUmlnaHQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
