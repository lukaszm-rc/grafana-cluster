'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('cloneDeep', require('../cloneDeep'), require('./_falseOptions'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL2Nsb25lRGVlcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxXQUFSO0FBQ1YsbUJBQU8sUUFBUSxXQUFSLEVBQXFCLFFBQVEsY0FBUixDQUFyQixFQUE4QyxRQUFRLGlCQUFSLENBQTlDOztBQUNYLGlCQUFLLFdBQUwsR0FBbUIsUUFBUSxlQUFSLENBQW5CO0FBQ0EsbUJBQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mcC9jbG9uZURlZXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnLi9jb252ZXJ0JyksXG4gICAgZnVuYyA9IGNvbnZlcnQoJ2Nsb25lRGVlcCcsIHJlcXVpcmUoJy4uL2Nsb25lRGVlcCcpLCByZXF1aXJlKCcuL19mYWxzZU9wdGlvbnMnKSk7XG5mdW5jLnBsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9wbGFjZWhvbGRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
