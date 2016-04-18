'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('matchesProperty', require('../matchesProperty'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL21hdGNoZXNQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxXQUFSO0FBQ1YsbUJBQU8sUUFBUSxpQkFBUixFQUEyQixRQUFRLG9CQUFSLENBQTNCOztBQUNYLGlCQUFLLFdBQUwsR0FBbUIsUUFBUSxlQUFSLENBQW5CO0FBQ0EsbUJBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mcC9tYXRjaGVzUHJvcGVydHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnLi9jb252ZXJ0JyksXG4gICAgZnVuYyA9IGNvbnZlcnQoJ21hdGNoZXNQcm9wZXJ0eScsIHJlcXVpcmUoJy4uL21hdGNoZXNQcm9wZXJ0eScpKTtcbmZ1bmMucGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL3BsYWNlaG9sZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmM7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
