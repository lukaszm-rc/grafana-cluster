'use strict';

System.register([], function (_export, _context) {
  var anObject, get;
  return {
    setters: [],
    execute: function () {
      anObject = require('./$.an-object');
      get = require('./core.get-iterator-method');

      module.exports = require('./$.core').getIterator = function (it) {
        var iterFn = get(it);
        if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
        return anObject(iterFn.call(it));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSO0FBQ1gsWUFBTSxRQUFRLDRCQUFSOztBQUNWLGFBQU8sT0FBUCxHQUFpQixRQUFRLFVBQVIsRUFBb0IsV0FBcEIsR0FBa0MsVUFBUyxFQUFULEVBQWE7QUFDOUQsWUFBSSxTQUFTLElBQUksRUFBSixDQUFULENBRDBEO0FBRTlELFlBQUksT0FBTyxNQUFQLElBQWlCLFVBQWpCLEVBQ0YsTUFBTSxVQUFVLEtBQUssbUJBQUwsQ0FBaEIsQ0FERjtBQUVBLGVBQU8sU0FBUyxPQUFPLElBQVAsQ0FBWSxFQUFaLENBQVQsQ0FBUCxDQUo4RDtPQUFiIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCkge1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
