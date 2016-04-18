'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('./$.fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
        return function split(separator, limit) {
          'use strict';

          var O = defined(this),
              fn = separator == undefined ? undefined : separator[SPLIT];
          return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsY0FBUSxnQkFBUixFQUEwQixPQUExQixFQUFtQyxDQUFuQyxFQUFzQyxVQUFTLE9BQVQsRUFBa0IsS0FBbEIsRUFBeUIsTUFBekIsRUFBaUM7QUFDckUsZUFBTyxTQUFTLEtBQVQsQ0FBZSxTQUFmLEVBQTBCLEtBQTFCLEVBQWlDO0FBQ3RDLHVCQURzQzs7QUFFdEMsY0FBSSxJQUFJLFFBQVEsSUFBUixDQUFKO2NBQ0EsS0FBSyxhQUFhLFNBQWIsR0FBeUIsU0FBekIsR0FBcUMsVUFBVSxLQUFWLENBQXJDLENBSDZCO0FBSXRDLGlCQUFPLE9BQU8sU0FBUCxHQUFtQixHQUFHLElBQUgsQ0FBUSxTQUFSLEVBQW1CLENBQW5CLEVBQXNCLEtBQXRCLENBQW5CLEdBQWtELE9BQU8sSUFBUCxDQUFZLE9BQU8sQ0FBUCxDQUFaLEVBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQWxELENBSitCO1NBQWpDLENBRDhEO09BQWpDLENBQXRDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBTUExJVCwgJHNwbGl0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKSxcbiAgICAgICAgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
