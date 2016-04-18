/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, $re;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $re = require('./$.replacer')(/&(?:amp|lt|gt|quot|apos);/g, {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&apos;': "'"
      });

      $export($export.P + $export.F, 'String', { unescapeHTML: function unescapeHTML() {
          return $re(this);
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLnN0cmluZy51bmVzY2FwZS1odG1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLFlBQU0sUUFBUSxjQUFSLEVBQXdCLDRCQUF4QixFQUFzRDtBQUM5RCxpQkFBUyxHQUFUO0FBQ0EsZ0JBQVEsR0FBUjtBQUNBLGdCQUFRLEdBQVI7QUFDQSxrQkFBVSxHQUFWO0FBQ0Esa0JBQVUsR0FBVjtPQUxROztBQU9WLGNBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEVBQVcsUUFBL0IsRUFBeUMsRUFBQyxjQUFjLFNBQVMsWUFBVCxHQUF3QjtBQUM1RSxpQkFBTyxJQUFJLElBQUosQ0FBUCxDQUQ0RTtTQUF4QixFQUF4RCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvY29yZS5zdHJpbmcudW5lc2NhcGUtaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG52YXIgJHJlID0gcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoLyYoPzphbXB8bHR8Z3R8cXVvdHxhcG9zKTsvZywge1xuICAnJmFtcDsnOiAnJicsXG4gICcmbHQ7JzogJzwnLFxuICAnJmd0Oyc6ICc+JyxcbiAgJyZxdW90Oyc6ICdcIicsXG4gICcmYXBvczsnOiBcIidcIlxufSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiwgJ1N0cmluZycsIHt1bmVzY2FwZUhUTUw6IGZ1bmN0aW9uIHVuZXNjYXBlSFRNTCgpIHtcbiAgICByZXR1cm4gJHJlKHRoaXMpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
