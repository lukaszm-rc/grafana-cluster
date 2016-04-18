'use strict';

System.register([], function (_export, _context) {
  var $export, setProto;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      setProto = require('./$.set-proto');

      if (setProto) $export($export.S, 'Reflect', { setPrototypeOf: function setPrototypeOf(target, proto) {
          setProto.check(target, proto);
          try {
            setProto.set(target, proto);
            return true;
          } catch (e) {
            return false;
          }
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsaUJBQVcsUUFBUSxlQUFSOztBQUNmLFVBQUksUUFBSixFQUNFLFFBQVEsUUFBUSxDQUFSLEVBQVcsU0FBbkIsRUFBOEIsRUFBQyxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDLEtBQWhDLEVBQXVDO0FBQ2xGLG1CQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCLEtBQXZCLEVBRGtGO0FBRWxGLGNBQUk7QUFDRixxQkFBUyxHQUFULENBQWEsTUFBYixFQUFxQixLQUFyQixFQURFO0FBRUYsbUJBQU8sSUFBUCxDQUZFO1dBQUosQ0FHRSxPQUFPLENBQVAsRUFBVTtBQUNWLG1CQUFPLEtBQVAsQ0FEVTtXQUFWO1NBTHlDLEVBQS9DLEVBREYiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBzZXRQcm90byA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKTtcbmlmIChzZXRQcm90bylcbiAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge3NldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKSB7XG4gICAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
