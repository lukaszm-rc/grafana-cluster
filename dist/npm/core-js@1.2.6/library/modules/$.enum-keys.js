'use strict';

System.register([], function (_export, _context) {
  var $;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');

      module.exports = function (it) {
        var keys = $.getKeys(it),
            getSymbols = $.getSymbols;
        if (getSymbols) {
          var symbols = getSymbols(it),
              isEnum = $.isEnum,
              i = 0,
              key;
          while (symbols.length > i) {
            if (isEnum.call(it, key = symbols[i++])) keys.push(key);
          }
        }
        return keys;
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksVUFBSSxRQUFRLEtBQVI7O0FBQ1IsYUFBTyxPQUFQLEdBQWlCLFVBQVMsRUFBVCxFQUFhO0FBQzVCLFlBQUksT0FBTyxFQUFFLE9BQUYsQ0FBVSxFQUFWLENBQVA7WUFDQSxhQUFhLEVBQUUsVUFBRixDQUZXO0FBRzVCLFlBQUksVUFBSixFQUFnQjtBQUNkLGNBQUksVUFBVSxXQUFXLEVBQVgsQ0FBVjtjQUNBLFNBQVMsRUFBRSxNQUFGO2NBQ1QsSUFBSSxDQUFKO2NBQ0EsR0FISixDQURjO0FBS2QsaUJBQU8sUUFBUSxNQUFSLEdBQWlCLENBQWpCO0FBQ0wsZ0JBQUksT0FBTyxJQUFQLENBQVksRUFBWixFQUFnQixNQUFNLFFBQVEsR0FBUixDQUFOLENBQXBCLEVBQ0UsS0FBSyxJQUFMLENBQVUsR0FBVixFQURGO1dBREY7U0FMRjtBQVNBLGVBQU8sSUFBUCxDQVo0QjtPQUFiIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpIHtcbiAgdmFyIGtleXMgPSAkLmdldEtleXMoaXQpLFxuICAgICAgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpLFxuICAgICAgICBpc0VudW0gPSAkLmlzRW51bSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKVxuICAgICAgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKVxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
