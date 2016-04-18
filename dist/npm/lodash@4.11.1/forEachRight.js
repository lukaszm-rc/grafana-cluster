'use strict';

System.register([], function (_export, _context) {
    var arrayEachRight, baseEachRight, baseIteratee, isArray;

    function forEachRight(collection, iteratee) {
        return typeof iteratee == 'function' && isArray(collection) ? arrayEachRight(collection, iteratee) : baseEachRight(collection, baseIteratee(iteratee));
    }
    return {
        setters: [],
        execute: function () {
            arrayEachRight = require('./_arrayEachRight');
            baseEachRight = require('./_baseEachRight');
            baseIteratee = require('./_baseIteratee');
            isArray = require('./isArray');
            module.exports = forEachRight;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZvckVhY2hSaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLGFBQVMsWUFBVCxDQUFzQixVQUF0QixFQUFrQyxRQUFsQyxFQUE0QztBQUMxQyxlQUFPLE9BQVEsUUFBUCxJQUFtQixVQUFuQixJQUFpQyxRQUFRLFVBQVIsQ0FBakMsR0FBd0QsZUFBZSxVQUFmLEVBQTJCLFFBQTNCLENBQXpELEdBQWdHLGNBQWMsVUFBZCxFQUEwQixhQUFhLFFBQWIsQ0FBMUIsQ0FBaEcsQ0FEbUM7S0FBNUM7Ozs7QUFKSSw2QkFBaUIsUUFBUSxtQkFBUjtBQUNqQiw0QkFBZ0IsUUFBUSxrQkFBUjtBQUNoQiwyQkFBZSxRQUFRLGlCQUFSO0FBQ2Ysc0JBQVUsUUFBUSxXQUFSO0FBSWQsbUJBQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mb3JFYWNoUmlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBhcnJheUVhY2hSaWdodCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaFJpZ2h0JyksXG4gICAgYmFzZUVhY2hSaWdodCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoUmlnaHQnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5mdW5jdGlvbiBmb3JFYWNoUmlnaHQoY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuICh0eXBlb2YgaXRlcmF0ZWUgPT0gJ2Z1bmN0aW9uJyAmJiBpc0FycmF5KGNvbGxlY3Rpb24pKSA/IGFycmF5RWFjaFJpZ2h0KGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSA6IGJhc2VFYWNoUmlnaHQoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hSaWdodDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
