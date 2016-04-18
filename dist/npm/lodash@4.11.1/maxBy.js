'use strict';

System.register([], function (_export, _context) {
    var baseExtremum, baseIteratee, gt;

    function maxBy(array, iteratee) {
        return array && array.length ? baseExtremum(array, baseIteratee(iteratee), gt) : undefined;
    }
    return {
        setters: [],
        execute: function () {
            baseExtremum = require('./_baseExtremum');
            baseIteratee = require('./_baseIteratee');
            gt = require('./gt');
            module.exports = maxBy;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21heEJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxLQUFULENBQWUsS0FBZixFQUFzQixRQUF0QixFQUFnQztBQUM5QixlQUFPLEtBQUMsSUFBUyxNQUFNLE1BQU4sR0FBZ0IsYUFBYSxLQUFiLEVBQW9CLGFBQWEsUUFBYixDQUFwQixFQUE0QyxFQUE1QyxDQUExQixHQUE0RSxTQUE1RSxDQUR1QjtLQUFoQzs7OztBQUhJLDJCQUFlLFFBQVEsaUJBQVI7QUFDZiwyQkFBZSxRQUFRLGlCQUFSO0FBQ2YsaUJBQUssUUFBUSxNQUFSO0FBSVQsbUJBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9tYXhCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VFeHRyZW11bSA9IHJlcXVpcmUoJy4vX2Jhc2VFeHRyZW11bScpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGd0ID0gcmVxdWlyZSgnLi9ndCcpO1xuZnVuY3Rpb24gbWF4QnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VFeHRyZW11bShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlKSwgZ3QpIDogdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXhCeTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
