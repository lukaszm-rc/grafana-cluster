/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $pad;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $pad = require('./$.string-pad');

            $export($export.P, 'String', { padLeft: function padLeft(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3LnN0cmluZy5wYWQtbGVmdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixtQkFBTyxRQUFRLGdCQUFSOztBQUNYLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFFBQW5CLEVBQTZCLEVBQUMsU0FBUyxTQUFTLE9BQVQsQ0FBaUIsU0FBakIsRUFBNEI7QUFDL0QsMkJBQU8sS0FBSyxJQUFMLEVBQVcsU0FBWCxFQUFzQixVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsVUFBVSxDQUFWLENBQXZCLEdBQXNDLFNBQXRDLEVBQWlELElBQXZFLENBQVAsQ0FEK0Q7aUJBQTVCLEVBQXZDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3LnN0cmluZy5wYWQtbGVmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJHBhZCA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcGFkJyk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtwYWRMZWZ0OiBmdW5jdGlvbiBwYWRMZWZ0KG1heExlbmd0aCkge1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRydWUpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
