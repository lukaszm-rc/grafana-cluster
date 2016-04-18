'use strict';

System.register([], function (_export, _context) {
    var $export, $values;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $values = require('./$.object-to-array')(false);

            $export($export.S, 'Object', { values: function values(it) {
                    return $values(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHNCQUFVLFFBQVEscUJBQVIsRUFBK0IsS0FBL0I7O0FBQ2Qsb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQyxRQUFRLFNBQVMsTUFBVCxDQUFnQixFQUFoQixFQUFvQjtBQUN0RCwyQkFBTyxRQUFRLEVBQVIsQ0FBUCxDQURzRDtpQkFBcEIsRUFBdEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJHZhbHVlcyA9IHJlcXVpcmUoJy4vJC5vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHt2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
