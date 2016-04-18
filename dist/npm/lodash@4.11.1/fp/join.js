'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('join', require('../join'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL2pvaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsV0FBUjtBQUNWLG1CQUFPLFFBQVEsTUFBUixFQUFnQixRQUFRLFNBQVIsQ0FBaEI7O0FBQ1gsaUJBQUssV0FBTCxHQUFtQixRQUFRLGVBQVIsQ0FBbkI7QUFDQSxtQkFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZwL2pvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnLi9jb252ZXJ0JyksXG4gICAgZnVuYyA9IGNvbnZlcnQoJ2pvaW4nLCByZXF1aXJlKCcuLi9qb2luJykpO1xuZnVuYy5wbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vcGxhY2Vob2xkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuYztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
