'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('reduce', require('../reduce'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL3JlZHVjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxXQUFSO0FBQ1YsbUJBQU8sUUFBUSxRQUFSLEVBQWtCLFFBQVEsV0FBUixDQUFsQjs7QUFDWCxpQkFBSyxXQUFMLEdBQW1CLFFBQVEsZUFBUixDQUFuQjtBQUNBLG1CQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnAvcmVkdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29udmVydCA9IHJlcXVpcmUoJy4vY29udmVydCcpLFxuICAgIGZ1bmMgPSBjb252ZXJ0KCdyZWR1Y2UnLCByZXF1aXJlKCcuLi9yZWR1Y2UnKSk7XG5mdW5jLnBsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9wbGFjZWhvbGRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
