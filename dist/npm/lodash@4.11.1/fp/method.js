'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('method', require('../method'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL21ldGhvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxXQUFSO0FBQ1YsbUJBQU8sUUFBUSxRQUFSLEVBQWtCLFFBQVEsV0FBUixDQUFsQjs7QUFDWCxpQkFBSyxXQUFMLEdBQW1CLFFBQVEsZUFBUixDQUFuQjtBQUNBLG1CQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnAvbWV0aG9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29udmVydCA9IHJlcXVpcmUoJy4vY29udmVydCcpLFxuICAgIGZ1bmMgPSBjb252ZXJ0KCdtZXRob2QnLCByZXF1aXJlKCcuLi9tZXRob2QnKSk7XG5mdW5jLnBsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9wbGFjZWhvbGRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
