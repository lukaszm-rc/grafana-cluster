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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmFycmF5LWZpbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksdUJBQVcsUUFBUSxlQUFSO0FBQ1gsc0JBQVUsUUFBUSxjQUFSO0FBQ1YsdUJBQVcsUUFBUSxlQUFSOztBQUNmLG1CQUFPLE9BQVAsR0FBaUIsR0FBRyxJQUFILElBQVcsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUMvQyxvQkFBSSxJQUFJLFNBQVMsSUFBVCxDQUFKO29CQUNBLFNBQVMsU0FBUyxFQUFFLE1BQUYsQ0FBbEI7b0JBQ0EsS0FBSyxTQUFMO29CQUNBLFFBQVEsR0FBRyxNQUFIO29CQUNSLFFBQVEsUUFBUSxRQUFRLENBQVIsR0FBWSxHQUFHLENBQUgsQ0FBWixHQUFvQixTQUFwQixFQUErQixNQUF2QyxDQUFSO29CQUNBLE1BQU0sUUFBUSxDQUFSLEdBQVksR0FBRyxDQUFILENBQVosR0FBb0IsU0FBcEI7b0JBQ04sU0FBUyxRQUFRLFNBQVIsR0FBb0IsTUFBcEIsR0FBNkIsUUFBUSxHQUFSLEVBQWEsTUFBYixDQUE3QixDQVBrQztBQVEvQyx1QkFBTyxTQUFTLEtBQVQ7QUFDTCxzQkFBRSxPQUFGLElBQWEsS0FBYjtpQkFERixPQUVPLENBQVAsQ0FWK0M7YUFBckIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuYXJyYXktZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpLFxuICAgIHRvSW5kZXggPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKSxcbiAgICB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gW10uZmlsbCB8fCBmdW5jdGlvbiBmaWxsKHZhbHVlKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyksXG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCksXG4gICAgICAkJCA9IGFyZ3VtZW50cyxcbiAgICAgICQkbGVuID0gJCQubGVuZ3RoLFxuICAgICAgaW5kZXggPSB0b0luZGV4KCQkbGVuID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpLFxuICAgICAgZW5kID0gJCRsZW4gPiAyID8gJCRbMl0gOiB1bmRlZmluZWQsXG4gICAgICBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZSAoZW5kUG9zID4gaW5kZXgpXG4gICAgT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
