'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('isArrayLike', require('../isArrayLike'), require('./_falseOptions'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL2lzQXJyYXlMaWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFdBQVI7QUFDVixtQkFBTyxRQUFRLGFBQVIsRUFBdUIsUUFBUSxnQkFBUixDQUF2QixFQUFrRCxRQUFRLGlCQUFSLENBQWxEOztBQUNYLGlCQUFLLFdBQUwsR0FBbUIsUUFBUSxlQUFSLENBQW5CO0FBQ0EsbUJBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mcC9pc0FycmF5TGlrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCcuL2NvbnZlcnQnKSxcbiAgICBmdW5jID0gY29udmVydCgnaXNBcnJheUxpa2UnLCByZXF1aXJlKCcuLi9pc0FycmF5TGlrZScpLCByZXF1aXJlKCcuL19mYWxzZU9wdGlvbnMnKSk7XG5mdW5jLnBsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9wbGFjZWhvbGRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
