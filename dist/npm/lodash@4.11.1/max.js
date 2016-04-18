'use strict';

System.register([], function (_export, _context) {
    var baseExtremum, gt, identity;

    function max(array) {
        return array && array.length ? baseExtremum(array, identity, gt) : undefined;
    }
    return {
        setters: [],
        execute: function () {
            baseExtremum = require('./_baseExtremum');
            gt = require('./gt');
            identity = require('./identity');
            module.exports = max;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21heC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLGFBQVMsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFDbEIsZUFBTyxLQUFDLElBQVMsTUFBTSxNQUFOLEdBQWdCLGFBQWEsS0FBYixFQUFvQixRQUFwQixFQUE4QixFQUE5QixDQUExQixHQUE4RCxTQUE5RCxDQURXO0tBQXBCOzs7O0FBSEksMkJBQWUsUUFBUSxpQkFBUjtBQUNmLGlCQUFLLFFBQVEsTUFBUjtBQUNMLHVCQUFXLFFBQVEsWUFBUjtBQUlmLG1CQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbWF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUV4dHJlbXVtID0gcmVxdWlyZSgnLi9fYmFzZUV4dHJlbXVtJyksXG4gICAgZ3QgPSByZXF1aXJlKCcuL2d0JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5mdW5jdGlvbiBtYXgoYXJyYXkpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZUV4dHJlbXVtKGFycmF5LCBpZGVudGl0eSwgZ3QpIDogdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtYXg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
