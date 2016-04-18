'use strict';

System.register([], function (_export, _context) {
    var copyObject, createAssigner, keys, assignWith;
    return {
        setters: [],
        execute: function () {
            copyObject = require('./_copyObject');
            createAssigner = require('./_createAssigner');
            keys = require('./keys');
            assignWith = createAssigner(function (object, source, srcIndex, customizer) {
                copyObject(source, keys(source), object, customizer);
            });

            module.exports = assignWith;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Fzc2lnbldpdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHlCQUFhLFFBQVEsZUFBUjtBQUNiLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLG1CQUFPLFFBQVEsUUFBUjtBQUNQLHlCQUFhLGVBQWUsVUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DLFVBQW5DLEVBQStDO0FBQzdFLDJCQUFXLE1BQVgsRUFBbUIsS0FBSyxNQUFMLENBQW5CLEVBQWlDLE1BQWpDLEVBQXlDLFVBQXpDLEVBRDZFO2FBQS9DOztBQUdoQyxtQkFBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2Fzc2lnbldpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG52YXIgYXNzaWduV2l0aCA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplcikge1xuICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QsIGN1c3RvbWl6ZXIpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbldpdGg7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
