'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('trimChars', require('../trim'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL3RyaW1DaGFycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxXQUFSO0FBQ1YsbUJBQU8sUUFBUSxXQUFSLEVBQXFCLFFBQVEsU0FBUixDQUFyQjs7QUFDWCxpQkFBSyxXQUFMLEdBQW1CLFFBQVEsZUFBUixDQUFuQjtBQUNBLG1CQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnAvdHJpbUNoYXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29udmVydCA9IHJlcXVpcmUoJy4vY29udmVydCcpLFxuICAgIGZ1bmMgPSBjb252ZXJ0KCd0cmltQ2hhcnMnLCByZXF1aXJlKCcuLi90cmltJykpO1xuZnVuYy5wbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vcGxhY2Vob2xkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuYztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
