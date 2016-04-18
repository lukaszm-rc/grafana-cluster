'use strict';

System.register([], function (_export, _context) {
  var $;
  return {
    setters: [],
    execute: function () {
      $ = require('../../modules/$');

      require('../../modules/es6.object.get-own-property-descriptor');
      module.exports = function getOwnPropertyDescriptor(it, key) {
        return $.getDesc(it, key);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxpQkFBUjs7QUFDUixjQUFRLHNEQUFSO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFNBQVMsd0JBQVQsQ0FBa0MsRUFBbEMsRUFBc0MsR0FBdEMsRUFBMkM7QUFDMUQsZUFBTyxFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWMsR0FBZCxDQUFQLENBRDBEO09BQTNDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkLmdldERlc2MoaXQsIGtleSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
