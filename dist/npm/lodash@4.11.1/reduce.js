'use strict';

System.register([], function (_export, _context) {
    var arrayReduce, baseEach, baseIteratee, baseReduce, isArray;

    function reduce(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce,
            initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }
    return {
        setters: [],
        execute: function () {
            arrayReduce = require('./_arrayReduce');
            baseEach = require('./_baseEach');
            baseIteratee = require('./_baseIteratee');
            baseReduce = require('./_baseReduce');
            isArray = require('./isArray');
            module.exports = reduce;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JlZHVjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BLGFBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QixRQUE1QixFQUFzQyxXQUF0QyxFQUFtRDtBQUNqRCxZQUFJLE9BQU8sUUFBUSxVQUFSLElBQXNCLFdBQXRCLEdBQW9DLFVBQXBDO1lBQ1AsWUFBWSxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsQ0FGaUM7QUFHakQsZUFBTyxLQUFLLFVBQUwsRUFBaUIsYUFBYSxRQUFiLEVBQXVCLENBQXZCLENBQWpCLEVBQTRDLFdBQTVDLEVBQXlELFNBQXpELEVBQW9FLFFBQXBFLENBQVAsQ0FIaUQ7S0FBbkQ7Ozs7QUFMSSwwQkFBYyxRQUFRLGdCQUFSO0FBQ2QsdUJBQVcsUUFBUSxhQUFSO0FBQ1gsMkJBQWUsUUFBUSxpQkFBUjtBQUNmLHlCQUFhLFFBQVEsZUFBUjtBQUNiLHNCQUFVLFFBQVEsV0FBUjtBQU1kLG1CQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvcmVkdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVkdWNlID0gcmVxdWlyZSgnLi9fYmFzZVJlZHVjZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlSZWR1Y2UgOiBiYXNlUmVkdWNlLFxuICAgICAgaW5pdEFjY3VtID0gYXJndW1lbnRzLmxlbmd0aCA8IDM7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgNCksIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0sIGJhc2VFYWNoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gcmVkdWNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
