'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('keys', require('../keys'), require('./_falseOptions'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL2tleXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsV0FBUjtBQUNWLG1CQUFPLFFBQVEsTUFBUixFQUFnQixRQUFRLFNBQVIsQ0FBaEIsRUFBb0MsUUFBUSxpQkFBUixDQUFwQzs7QUFDWCxpQkFBSyxXQUFMLEdBQW1CLFFBQVEsZUFBUixDQUFuQjtBQUNBLG1CQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnAva2V5cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCcuL2NvbnZlcnQnKSxcbiAgICBmdW5jID0gY29udmVydCgna2V5cycsIHJlcXVpcmUoJy4uL2tleXMnKSwgcmVxdWlyZSgnLi9fZmFsc2VPcHRpb25zJykpO1xuZnVuYy5wbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vcGxhY2Vob2xkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuYztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
