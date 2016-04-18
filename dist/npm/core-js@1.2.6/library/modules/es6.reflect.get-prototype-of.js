'use strict';

System.register([], function (_export, _context) {
    var $export, getProto, anObject;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            getProto = require('./$').getProto;
            anObject = require('./$.an-object');

            $export($export.S, 'Reflect', { getPrototypeOf: function getPrototypeOf(target) {
                    return getProto(anObject(target));
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVix1QkFBVyxRQUFRLEtBQVIsRUFBZSxRQUFmO0FBQ1gsdUJBQVcsUUFBUSxlQUFSOztBQUNmLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFNBQW5CLEVBQThCLEVBQUMsZ0JBQWdCLFNBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQztBQUMzRSwyQkFBTyxTQUFTLFNBQVMsTUFBVCxDQUFULENBQVAsQ0FEMkU7aUJBQWhDLEVBQS9DIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBnZXRQcm90byA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2dldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpIHtcbiAgICByZXR1cm4gZ2V0UHJvdG8oYW5PYmplY3QodGFyZ2V0KSk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
