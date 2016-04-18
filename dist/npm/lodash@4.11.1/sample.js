'use strict';

System.register([], function (_export, _context) {
    var baseRandom, isArrayLike, values;

    function sample(collection) {
        var array = isArrayLike(collection) ? collection : values(collection),
            length = array.length;
        return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
    }
    return {
        setters: [],
        execute: function () {
            baseRandom = require('./_baseRandom');
            isArrayLike = require('./isArrayLike');
            values = require('./values');
            module.exports = sample;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLGFBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QjtBQUMxQixZQUFJLFFBQVEsWUFBWSxVQUFaLElBQTBCLFVBQTFCLEdBQXVDLE9BQU8sVUFBUCxDQUF2QztZQUNSLFNBQVMsTUFBTSxNQUFOLENBRmE7QUFHMUIsZUFBTyxTQUFTLENBQVQsR0FBYSxNQUFNLFdBQVcsQ0FBWCxFQUFjLFNBQVMsQ0FBVCxDQUFwQixDQUFiLEdBQWdELFNBQWhELENBSG1CO0tBQTVCOzs7O0FBSEkseUJBQWEsUUFBUSxlQUFSO0FBQ2IsMEJBQWMsUUFBUSxlQUFSO0FBQ2QscUJBQVMsUUFBUSxVQUFSO0FBTWIsbUJBQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9zYW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlUmFuZG9tID0gcmVxdWlyZSgnLi9fYmFzZVJhbmRvbScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIHZhbHVlcyA9IHJlcXVpcmUoJy4vdmFsdWVzJyk7XG5mdW5jdGlvbiBzYW1wbGUoY29sbGVjdGlvbikge1xuICB2YXIgYXJyYXkgPSBpc0FycmF5TGlrZShjb2xsZWN0aW9uKSA/IGNvbGxlY3Rpb24gOiB2YWx1ZXMoY29sbGVjdGlvbiksXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPiAwID8gYXJyYXlbYmFzZVJhbmRvbSgwLCBsZW5ndGggLSAxKV0gOiB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNhbXBsZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
