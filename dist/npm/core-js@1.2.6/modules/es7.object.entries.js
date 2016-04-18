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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVix1QkFBVyxRQUFRLHFCQUFSLEVBQStCLElBQS9COztBQUNmLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFFBQW5CLEVBQTZCLEVBQUMsU0FBUyxTQUFTLE9BQVQsQ0FBaUIsRUFBakIsRUFBcUI7QUFDeEQsMkJBQU8sU0FBUyxFQUFULENBQVAsQ0FEd0Q7aUJBQXJCLEVBQXZDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkZW50cmllcyA9IHJlcXVpcmUoJy4vJC5vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2VudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpIHtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
