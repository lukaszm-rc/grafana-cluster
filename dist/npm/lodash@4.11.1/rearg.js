'use strict';

System.register([], function (_export, _context) {
    var baseFlatten, createWrapper, rest, REARG_FLAG, rearg;
    return {
        setters: [],
        execute: function () {
            baseFlatten = require('./_baseFlatten');
            createWrapper = require('./_createWrapper');
            rest = require('./rest');
            REARG_FLAG = 256;
            rearg = rest(function (func, indexes) {
                return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes, 1));
            });

            module.exports = rearg;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3JlYXJnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSwwQkFBYyxRQUFRLGdCQUFSO0FBQ2QsNEJBQWdCLFFBQVEsa0JBQVI7QUFDaEIsbUJBQU8sUUFBUSxRQUFSO0FBQ1AseUJBQWE7QUFDYixvQkFBUSxLQUFLLFVBQVMsSUFBVCxFQUFlLE9BQWYsRUFBd0I7QUFDdkMsdUJBQU8sY0FBYyxJQUFkLEVBQW9CLFVBQXBCLEVBQWdDLFNBQWhDLEVBQTJDLFNBQTNDLEVBQXNELFNBQXRELEVBQWlFLFlBQVksT0FBWixFQUFxQixDQUFyQixDQUFqRSxDQUFQLENBRHVDO2FBQXhCOztBQUdqQixtQkFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3JlYXJnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGNyZWF0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwcGVyJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIFJFQVJHX0ZMQUcgPSAyNTY7XG52YXIgcmVhcmcgPSByZXN0KGZ1bmN0aW9uKGZ1bmMsIGluZGV4ZXMpIHtcbiAgcmV0dXJuIGNyZWF0ZVdyYXBwZXIoZnVuYywgUkVBUkdfRkxBRywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYmFzZUZsYXR0ZW4oaW5kZXhlcywgMSkpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlYXJnO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
