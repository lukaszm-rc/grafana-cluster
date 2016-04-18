'use strict';

System.register([], function (_export, _context) {
    var $, anObject, Reflect;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            anObject = require('./$.an-object');
            Reflect = require('./$.global').Reflect;

            module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
                var keys = $.getNames(anObject(it)),
                    getSymbols = $.getSymbols;
                return getSymbols ? keys.concat(getSymbols(it)) : keys;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLm93bi1rZXlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBSSxRQUFRLEtBQVI7QUFDSix1QkFBVyxRQUFRLGVBQVI7QUFDWCxzQkFBVSxRQUFRLFlBQVIsRUFBc0IsT0FBdEI7O0FBQ2QsbUJBQU8sT0FBUCxHQUFpQixXQUFXLFFBQVEsT0FBUixJQUFtQixTQUFTLE9BQVQsQ0FBaUIsRUFBakIsRUFBcUI7QUFDbEUsb0JBQUksT0FBTyxFQUFFLFFBQUYsQ0FBVyxTQUFTLEVBQVQsQ0FBWCxDQUFQO29CQUNBLGFBQWEsRUFBRSxVQUFGLENBRmlEO0FBR2xFLHVCQUFPLGFBQWEsS0FBSyxNQUFMLENBQVksV0FBVyxFQUFYLENBQVosQ0FBYixHQUEyQyxJQUEzQyxDQUgyRDthQUFyQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5vd24ta2V5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKSxcbiAgICBSZWZsZWN0ID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlJlZmxlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSAkLmdldE5hbWVzKGFuT2JqZWN0KGl0KSksXG4gICAgICBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
