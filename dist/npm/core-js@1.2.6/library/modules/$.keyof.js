'use strict';

System.register([], function (_export, _context) {
    var $, toIObject;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            toIObject = require('./$.to-iobject');

            module.exports = function (object, el) {
                var O = toIObject(object),
                    keys = $.getKeys(O),
                    length = keys.length,
                    index = 0,
                    key;
                while (length > index) {
                    if (O[key = keys[index++]] === el) return key;
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmtleW9mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBSSxRQUFRLEtBQVI7QUFDSix3QkFBWSxRQUFRLGdCQUFSOztBQUNoQixtQkFBTyxPQUFQLEdBQWlCLFVBQVMsTUFBVCxFQUFpQixFQUFqQixFQUFxQjtBQUNwQyxvQkFBSSxJQUFJLFVBQVUsTUFBVixDQUFKO29CQUNBLE9BQU8sRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFQO29CQUNBLFNBQVMsS0FBSyxNQUFMO29CQUNULFFBQVEsQ0FBUjtvQkFDQSxHQUpKLENBRG9DO0FBTXBDLHVCQUFPLFNBQVMsS0FBVDtBQUNMLHdCQUFJLEVBQUUsTUFBTSxLQUFLLE9BQUwsQ0FBTixDQUFGLEtBQTJCLEVBQTNCLEVBQ0YsT0FBTyxHQUFQLENBREY7aUJBREY7YUFOZSIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvJC5rZXlvZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCksXG4gICAgICBrZXlzID0gJC5nZXRLZXlzKE8pLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleClcbiAgICBpZiAoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpXG4gICAgICByZXR1cm4ga2V5O1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
