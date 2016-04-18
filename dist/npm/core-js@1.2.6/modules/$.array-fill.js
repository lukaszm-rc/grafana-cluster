/* */
'use strict';

System.register([], function (_export, _context) {
    var toObject, toIndex, toLength;
    return {
        setters: [],
        execute: function () {
            toObject = require('./$.to-object');
            toIndex = require('./$.to-index');
            toLength = require('./$.to-length');

            module.exports = [].fill || function fill(value) {
                var O = toObject(this),
                    length = toLength(O.length),
                    $$ = arguments,
                    $$len = $$.length,
                    index = toIndex($$len > 1 ? $$[1] : undefined, length),
                    end = $$len > 2 ? $$[2] : undefined,
                    endPos = end === undefined ? length : toIndex(end, length);
                while (endPos > index) {
                    O[index++] = value;
                }return O;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hcnJheS1maWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLHVCQUFXLFFBQVEsZUFBUjtBQUNYLHNCQUFVLFFBQVEsY0FBUjtBQUNWLHVCQUFXLFFBQVEsZUFBUjs7QUFDZixtQkFBTyxPQUFQLEdBQWlCLEdBQUcsSUFBSCxJQUFXLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDL0Msb0JBQUksSUFBSSxTQUFTLElBQVQsQ0FBSjtvQkFDQSxTQUFTLFNBQVMsRUFBRSxNQUFGLENBQWxCO29CQUNBLEtBQUssU0FBTDtvQkFDQSxRQUFRLEdBQUcsTUFBSDtvQkFDUixRQUFRLFFBQVEsUUFBUSxDQUFSLEdBQVksR0FBRyxDQUFILENBQVosR0FBb0IsU0FBcEIsRUFBK0IsTUFBdkMsQ0FBUjtvQkFDQSxNQUFNLFFBQVEsQ0FBUixHQUFZLEdBQUcsQ0FBSCxDQUFaLEdBQW9CLFNBQXBCO29CQUNOLFNBQVMsUUFBUSxTQUFSLEdBQW9CLE1BQXBCLEdBQTZCLFFBQVEsR0FBUixFQUFhLE1BQWIsQ0FBN0IsQ0FQa0M7QUFRL0MsdUJBQU8sU0FBUyxLQUFUO0FBQ0wsc0JBQUUsT0FBRixJQUFhLEtBQWI7aUJBREYsT0FFTyxDQUFQLENBVitDO2FBQXJCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5hcnJheS1maWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JyksXG4gICAgdG9JbmRleCA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpLFxuICAgIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBbXS5maWxsIHx8IGZ1bmN0aW9uIGZpbGwodmFsdWUpIHtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGlzKSxcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSxcbiAgICAgICQkID0gYXJndW1lbnRzLFxuICAgICAgJCRsZW4gPSAkJC5sZW5ndGgsXG4gICAgICBpbmRleCA9IHRvSW5kZXgoJCRsZW4gPiAxID8gJCRbMV0gOiB1bmRlZmluZWQsIGxlbmd0aCksXG4gICAgICBlbmQgPSAkJGxlbiA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZCxcbiAgICAgIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlIChlbmRQb3MgPiBpbmRleClcbiAgICBPW2luZGV4KytdID0gdmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
