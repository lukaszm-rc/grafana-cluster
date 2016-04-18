'use strict';

System.register([], function (_export, _context) {
    var Iterators, ITERATOR, ArrayProto;
    return {
        setters: [],
        execute: function () {
            Iterators = require('./$.iterators');
            ITERATOR = require('./$.wks')('iterator');
            ArrayProto = Array.prototype;

            module.exports = function (it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSx3QkFBWSxRQUFRLGVBQVI7QUFDWix1QkFBVyxRQUFRLFNBQVIsRUFBbUIsVUFBbkI7QUFDWCx5QkFBYSxNQUFNLFNBQU47O0FBQ2pCLG1CQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWE7QUFDNUIsdUJBQU8sT0FBTyxTQUFQLEtBQXFCLFVBQVUsS0FBVixLQUFvQixFQUFwQixJQUEwQixXQUFXLFFBQVgsTUFBeUIsRUFBekIsQ0FBL0MsQ0FEcUI7YUFBYiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuaXMtYXJyYXktaXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKSxcbiAgICBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSxcbiAgICBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
