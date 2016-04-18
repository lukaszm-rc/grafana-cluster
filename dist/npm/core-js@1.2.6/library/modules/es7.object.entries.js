'use strict';

System.register([], function (_export, _context) {
    var $export, $entries;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $entries = require('./$.object-to-array')(true);

            $export($export.S, 'Object', { entries: function entries(it) {
                    return $entries(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHVCQUFXLFFBQVEscUJBQVIsRUFBK0IsSUFBL0I7O0FBQ2Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxTQUFTLFNBQVMsT0FBVCxDQUFpQixFQUFqQixFQUFxQjtBQUN4RCwyQkFBTyxTQUFTLEVBQVQsQ0FBUCxDQUR3RDtpQkFBckIsRUFBdkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJGVudHJpZXMgPSByZXF1aXJlKCcuLyQub2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
