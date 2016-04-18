'use strict';

System.register([], function (_export, _context) {
    var isObject, document, is;
    return {
        setters: [],
        execute: function () {
            isObject = require('./$.is-object');
            document = require('./$.global').document;
            is = isObject(document) && isObject(document.createElement);

            module.exports = function (it) {
                return is ? document.createElement(it) : {};
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5kb20tY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSx1QkFBVyxRQUFRLGVBQVI7QUFDWCx1QkFBVyxRQUFRLFlBQVIsRUFBc0IsUUFBdEI7QUFDWCxpQkFBSyxTQUFTLFFBQVQsS0FBc0IsU0FBUyxTQUFTLGFBQVQsQ0FBL0I7O0FBQ1QsbUJBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYTtBQUM1Qix1QkFBTyxLQUFLLFNBQVMsYUFBVCxDQUF1QixFQUF2QixDQUFMLEdBQWtDLEVBQWxDLENBRHFCO2FBQWIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICBkb2N1bWVudCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudCxcbiAgICBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
