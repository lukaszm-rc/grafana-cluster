'use strict';

System.register([], function (_export, _context) {
    var arrayMap, baseIteratee, baseMap, isArray;

    function map(collection, iteratee) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, baseIteratee(iteratee, 3));
    }
    return {
        setters: [],
        execute: function () {
            arrayMap = require('./_arrayMap');
            baseIteratee = require('./_baseIteratee');
            baseMap = require('./_baseMap');
            isArray = require('./isArray');
            module.exports = map;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLGFBQVMsR0FBVCxDQUFhLFVBQWIsRUFBeUIsUUFBekIsRUFBbUM7QUFDakMsWUFBSSxPQUFPLFFBQVEsVUFBUixJQUFzQixRQUF0QixHQUFpQyxPQUFqQyxDQURzQjtBQUVqQyxlQUFPLEtBQUssVUFBTCxFQUFpQixhQUFhLFFBQWIsRUFBdUIsQ0FBdkIsQ0FBakIsQ0FBUCxDQUZpQztLQUFuQzs7OztBQUpJLHVCQUFXLFFBQVEsYUFBUjtBQUNYLDJCQUFlLFFBQVEsaUJBQVI7QUFDZixzQkFBVSxRQUFRLFlBQVI7QUFDVixzQkFBVSxRQUFRLFdBQVI7QUFLZCxtQkFBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL21hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlTWFwID0gcmVxdWlyZSgnLi9fYmFzZU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheU1hcCA6IGJhc2VNYXA7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMykpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
