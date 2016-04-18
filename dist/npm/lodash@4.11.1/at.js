'use strict';

System.register([], function (_export, _context) {
    var baseAt, baseFlatten, rest, at;
    return {
        setters: [],
        execute: function () {
            baseAt = require('./_baseAt');
            baseFlatten = require('./_baseFlatten');
            rest = require('./rest');
            at = rest(function (object, paths) {
                return baseAt(object, baseFlatten(paths, 1));
            });

            module.exports = at;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2F0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxxQkFBUyxRQUFRLFdBQVI7QUFDVCwwQkFBYyxRQUFRLGdCQUFSO0FBQ2QsbUJBQU8sUUFBUSxRQUFSO0FBQ1AsaUJBQUssS0FBSyxVQUFTLE1BQVQsRUFBaUIsS0FBakIsRUFBd0I7QUFDcEMsdUJBQU8sT0FBTyxNQUFQLEVBQWUsWUFBWSxLQUFaLEVBQW1CLENBQW5CLENBQWYsQ0FBUCxDQURvQzthQUF4Qjs7QUFHZCxtQkFBTyxPQUFQLEdBQWlCLEVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2F0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUF0ID0gcmVxdWlyZSgnLi9fYmFzZUF0JyksXG4gICAgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBhdCA9IHJlc3QoZnVuY3Rpb24ob2JqZWN0LCBwYXRocykge1xuICByZXR1cm4gYmFzZUF0KG9iamVjdCwgYmFzZUZsYXR0ZW4ocGF0aHMsIDEpKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBhdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
