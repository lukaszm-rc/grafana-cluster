'use strict';

System.register([], function (_export, _context) {
    var baseFor, baseIteratee, keysIn;

    function forIn(object, iteratee) {
        return object == null ? object : baseFor(object, baseIteratee(iteratee), keysIn);
    }
    return {
        setters: [],
        execute: function () {
            baseFor = require('./_baseFor');
            baseIteratee = require('./_baseIteratee');
            keysIn = require('./keysIn');
            module.exports = forIn;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZvckluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxLQUFULENBQWUsTUFBZixFQUF1QixRQUF2QixFQUFpQztBQUMvQixlQUFPLFVBQVUsSUFBVixHQUFpQixNQUFqQixHQUEwQixRQUFRLE1BQVIsRUFBZ0IsYUFBYSxRQUFiLENBQWhCLEVBQXdDLE1BQXhDLENBQTFCLENBRHdCO0tBQWpDOzs7O0FBSEksc0JBQVUsUUFBUSxZQUFSO0FBQ1YsMkJBQWUsUUFBUSxpQkFBUjtBQUNmLHFCQUFTLFFBQVEsVUFBUjtBQUliLG1CQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZm9ySW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5mdW5jdGlvbiBmb3JJbihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IGJhc2VGb3Iob2JqZWN0LCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUpLCBrZXlzSW4pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmb3JJbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
