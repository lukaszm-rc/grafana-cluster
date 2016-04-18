/* */
'use strict';

System.register([], function (_export, _context) {
  var global, $, DESCRIPTORS, SPECIES;
  return {
    setters: [],
    execute: function () {
      global = require('./$.global');
      $ = require('./$');
      DESCRIPTORS = require('./$.descriptors');
      SPECIES = require('./$.wks')('species');

      module.exports = function (KEY) {
        var C = global[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxlQUFTLFFBQVEsWUFBUjtBQUNULFVBQUksUUFBUSxLQUFSO0FBQ0osb0JBQWMsUUFBUSxpQkFBUjtBQUNkLGdCQUFVLFFBQVEsU0FBUixFQUFtQixTQUFuQjs7QUFDZCxhQUFPLE9BQVAsR0FBaUIsVUFBUyxHQUFULEVBQWM7QUFDN0IsWUFBSSxJQUFJLE9BQU8sR0FBUCxDQUFKLENBRHlCO0FBRTdCLFlBQUksZUFBZSxDQUFmLElBQW9CLENBQUMsRUFBRSxPQUFGLENBQUQsRUFDdEIsRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0I7QUFDcEIsd0JBQWMsSUFBZDtBQUNBLGVBQUssZUFBVztBQUNkLG1CQUFPLElBQVAsQ0FEYztXQUFYO1NBRlAsRUFERjtPQUZlIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKSxcbiAgICAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSxcbiAgICBTUEVDSUVTID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlcbiAgICAkLnNldERlc2MoQywgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
