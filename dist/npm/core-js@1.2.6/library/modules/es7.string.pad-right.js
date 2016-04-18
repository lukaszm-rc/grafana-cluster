/* */
'use strict';

System.register([], function (_export, _context) {
    var $export, $pad;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            $pad = require('./$.string-pad');

            $export($export.P, 'String', { padRight: function padRight(maxLength) {
                    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixtQkFBTyxRQUFRLGdCQUFSOztBQUNYLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFFBQW5CLEVBQTZCLEVBQUMsVUFBVSxTQUFTLFFBQVQsQ0FBa0IsU0FBbEIsRUFBNkI7QUFDakUsMkJBQU8sS0FBSyxJQUFMLEVBQVcsU0FBWCxFQUFzQixVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsVUFBVSxDQUFWLENBQXZCLEdBQXNDLFNBQXRDLEVBQWlELEtBQXZFLENBQVAsQ0FEaUU7aUJBQTdCLEVBQXhDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJHBhZCA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcGFkJyk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtwYWRSaWdodDogZnVuY3Rpb24gcGFkUmlnaHQobWF4TGVuZ3RoKSB7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgZmFsc2UpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
