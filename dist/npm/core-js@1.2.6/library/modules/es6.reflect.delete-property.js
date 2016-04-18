'use strict';

System.register([], function (_export, _context) {
    var $export, getDesc, anObject;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            getDesc = require('./$').getDesc;
            anObject = require('./$.an-object');

            $export($export.S, 'Reflect', { deleteProperty: function deleteProperty(target, propertyKey) {
                    var desc = getDesc(anObject(target), propertyKey);
                    return desc && !desc.configurable ? false : delete target[propertyKey];
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFVLFFBQVEsWUFBUjtBQUNWLHNCQUFVLFFBQVEsS0FBUixFQUFlLE9BQWY7QUFDVix1QkFBVyxRQUFRLGVBQVI7O0FBQ2Ysb0JBQVEsUUFBUSxDQUFSLEVBQVcsU0FBbkIsRUFBOEIsRUFBQyxnQkFBZ0IsU0FBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDLFdBQWhDLEVBQTZDO0FBQ3hGLHdCQUFJLE9BQU8sUUFBUSxTQUFTLE1BQVQsQ0FBUixFQUEwQixXQUExQixDQUFQLENBRG9GO0FBRXhGLDJCQUFPLFFBQVEsQ0FBQyxLQUFLLFlBQUwsR0FBb0IsS0FBN0IsR0FBcUMsT0FBTyxPQUFPLFdBQVAsQ0FBUCxDQUY0QztpQkFBN0MsRUFBL0MiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgZ2V0RGVzYyA9IHJlcXVpcmUoJy4vJCcpLmdldERlc2MsXG4gICAgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7ZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICB2YXIgZGVzYyA9IGdldERlc2MoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICAgIHJldHVybiBkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSA/IGZhbHNlIDogZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
