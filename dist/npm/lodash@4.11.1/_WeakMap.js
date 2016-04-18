'use strict';

System.register([], function (_export, _context) {
    var getNative, root, WeakMap;
    return {
        setters: [],
        execute: function () {
            getNative = require('./_getNative');
            root = require('./_root');
            WeakMap = getNative(root, 'WeakMap');

            module.exports = WeakMap;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19XZWFrTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSx3QkFBWSxRQUFRLGNBQVI7QUFDWixtQkFBTyxRQUFRLFNBQVI7QUFDUCxzQkFBVSxVQUFVLElBQVYsRUFBZ0IsU0FBaEI7O0FBQ2QsbUJBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fV2Vha01hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
