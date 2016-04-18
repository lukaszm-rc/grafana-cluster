'use strict';

System.register([], function (_export, _context) {
    var baseExtremum, identity, lt;

    function min(array) {
        return array && array.length ? baseExtremum(array, identity, lt) : undefined;
    }
    return {
        setters: [],
        execute: function () {
            baseExtremum = require('./_baseExtremum');
            identity = require('./identity');
            lt = require('./lt');
            module.exports = min;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL21pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLGFBQVMsR0FBVCxDQUFhLEtBQWIsRUFBb0I7QUFDbEIsZUFBTyxLQUFDLElBQVMsTUFBTSxNQUFOLEdBQWdCLGFBQWEsS0FBYixFQUFvQixRQUFwQixFQUE4QixFQUE5QixDQUExQixHQUE4RCxTQUE5RCxDQURXO0tBQXBCOzs7O0FBSEksMkJBQWUsUUFBUSxpQkFBUjtBQUNmLHVCQUFXLFFBQVEsWUFBUjtBQUNYLGlCQUFLLFFBQVEsTUFBUjtBQUlULG1CQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUV4dHJlbXVtID0gcmVxdWlyZSgnLi9fYmFzZUV4dHJlbXVtJyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgbHQgPSByZXF1aXJlKCcuL2x0Jyk7XG5mdW5jdGlvbiBtaW4oYXJyYXkpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZUV4dHJlbXVtKGFycmF5LCBpZGVudGl0eSwgbHQpIDogdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtaW47XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
