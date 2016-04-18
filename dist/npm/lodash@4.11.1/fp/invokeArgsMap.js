'use strict';

System.register([], function (_export, _context) {
    var convert, func;
    return {
        setters: [],
        execute: function () {
            convert = require('./convert');
            func = convert('invokeArgsMap', require('../invokeMap'));

            func.placeholder = require('./placeholder');
            module.exports = func;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL2ludm9rZUFyZ3NNYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsV0FBUjtBQUNWLG1CQUFPLFFBQVEsZUFBUixFQUF5QixRQUFRLGNBQVIsQ0FBekI7O0FBQ1gsaUJBQUssV0FBTCxHQUFtQixRQUFRLGVBQVIsQ0FBbkI7QUFDQSxtQkFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZwL2ludm9rZUFyZ3NNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnLi9jb252ZXJ0JyksXG4gICAgZnVuYyA9IGNvbnZlcnQoJ2ludm9rZUFyZ3NNYXAnLCByZXF1aXJlKCcuLi9pbnZva2VNYXAnKSk7XG5mdW5jLnBsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9wbGFjZWhvbGRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
