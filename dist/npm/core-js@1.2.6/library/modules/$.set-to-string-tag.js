'use strict';

System.register([], function (_export, _context) {
  var def, has, TAG;
  return {
    setters: [],
    execute: function () {
      def = require('./$').setDesc;
      has = require('./$.has');
      TAG = require('./$.wks')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
          configurable: true,
          value: tag
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxZQUFNLFFBQVEsS0FBUixFQUFlLE9BQWY7QUFDTixZQUFNLFFBQVEsU0FBUjtBQUNOLFlBQU0sUUFBUSxTQUFSLEVBQW1CLGFBQW5COztBQUNWLGFBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYSxHQUFiLEVBQWtCLElBQWxCLEVBQXdCO0FBQ3ZDLFlBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQVAsR0FBWSxHQUFHLFNBQUgsRUFBYyxHQUFuQyxDQUFELEVBQ1IsSUFBSSxFQUFKLEVBQVEsR0FBUixFQUFhO0FBQ1gsd0JBQWMsSUFBZDtBQUNBLGlCQUFPLEdBQVA7U0FGRixFQURGO09BRGUiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjLFxuICAgIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKSxcbiAgICBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpXG4gICAgZGVmKGl0LCBUQUcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB0YWdcbiAgICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
