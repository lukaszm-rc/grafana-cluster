'use strict';

System.register([], function (_export, _context) {
  var classof, ITERATOR, Iterators;
  return {
    setters: [],
    execute: function () {
      classof = require('./$.classof');
      ITERATOR = require('./$.wks')('iterator');
      Iterators = require('./$.iterators');

      module.exports = require('./$.core').isIterable = function (it) {
        var O = Object(it);
        return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxhQUFSO0FBQ1YsaUJBQVcsUUFBUSxTQUFSLEVBQW1CLFVBQW5CO0FBQ1gsa0JBQVksUUFBUSxlQUFSOztBQUNoQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxVQUFSLEVBQW9CLFVBQXBCLEdBQWlDLFVBQVMsRUFBVCxFQUFhO0FBQzdELFlBQUksSUFBSSxPQUFPLEVBQVAsQ0FBSixDQUR5RDtBQUU3RCxlQUFPLEVBQUUsUUFBRixNQUFnQixTQUFoQixJQUE2QixnQkFBZ0IsQ0FBaEIsSUFBcUIsVUFBVSxjQUFWLENBQXlCLFFBQVEsQ0FBUixDQUF6QixDQUFsRCxDQUZzRDtPQUFiIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpLFxuICAgIElURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLFxuICAgIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpIHtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZCB8fCAnQEBpdGVyYXRvcicgaW4gTyB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
