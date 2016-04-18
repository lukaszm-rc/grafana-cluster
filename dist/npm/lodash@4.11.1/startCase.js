'use strict';

System.register([], function (_export, _context) {
  var createCompounder, upperFirst, startCase;
  return {
    setters: [],
    execute: function () {
      createCompounder = require('./_createCompounder');
      upperFirst = require('./upperFirst');
      startCase = createCompounder(function (result, word, index) {
        return result + (index ? ' ' : '') + upperFirst(word);
      });

      module.exports = startCase;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3N0YXJ0Q2FzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0kseUJBQW1CLFFBQVEscUJBQVI7QUFDbkIsbUJBQWEsUUFBUSxjQUFSO0FBQ2Isa0JBQVksaUJBQWlCLFVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QixLQUF2QixFQUE4QjtBQUM3RCxlQUFPLFVBQVUsUUFBUSxHQUFSLEdBQWMsRUFBZCxDQUFWLEdBQThCLFdBQVcsSUFBWCxDQUE5QixDQURzRDtPQUE5Qjs7QUFHakMsYUFBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3N0YXJ0Q2FzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyksXG4gICAgdXBwZXJGaXJzdCA9IHJlcXVpcmUoJy4vdXBwZXJGaXJzdCcpO1xudmFyIHN0YXJ0Q2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gJyAnIDogJycpICsgdXBwZXJGaXJzdCh3b3JkKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBzdGFydENhc2U7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
