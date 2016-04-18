'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('isArrayLikeObject', require('../isArrayLikeObject'), require('./_falseOptions'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL2lzQXJyYXlMaWtlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFdBQVI7QUFDVixtQkFBTyxRQUFRLG1CQUFSLEVBQTZCLFFBQVEsc0JBQVIsQ0FBN0IsRUFBOEQsUUFBUSxpQkFBUixDQUE5RDs7QUFDWCxpQkFBSyxXQUFMLEdBQW1CLFFBQVEsZUFBUixDQUFuQjtBQUNBLG1CQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvZnAvaXNBcnJheUxpa2VPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnLi9jb252ZXJ0JyksXG4gICAgZnVuYyA9IGNvbnZlcnQoJ2lzQXJyYXlMaWtlT2JqZWN0JywgcmVxdWlyZSgnLi4vaXNBcnJheUxpa2VPYmplY3QnKSwgcmVxdWlyZSgnLi9fZmFsc2VPcHRpb25zJykpO1xuZnVuYy5wbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vcGxhY2Vob2xkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuYztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
