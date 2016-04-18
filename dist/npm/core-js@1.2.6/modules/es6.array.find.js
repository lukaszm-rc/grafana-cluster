/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, $find, KEY, forced;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      $find = require('./$.array-methods')(5);
      KEY = 'find';
      forced = true;

      if (KEY in []) Array(1)[KEY](function () {
        forced = false;
      });
      $export($export.P + $export.F * forced, 'Array', { find: function find(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        } });
      require('./$.add-to-unscopables')(KEY);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsY0FBUSxRQUFRLG1CQUFSLEVBQTZCLENBQTdCO0FBQ1IsWUFBTTtBQUNOLGVBQVM7O0FBQ2IsVUFBSSxPQUFPLEVBQVAsRUFDRixNQUFNLENBQU4sRUFBUyxHQUFULEVBQWMsWUFBVztBQUN2QixpQkFBUyxLQUFULENBRHVCO09BQVgsQ0FBZCxDQURGO0FBSUEsY0FBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxNQUFaLEVBQW9CLE9BQXhDLEVBQWlELEVBQUMsTUFBTSxTQUFTLElBQVQsQ0FBYyxVQUFkLEVBQTBCO0FBQzlFLGlCQUFPLE1BQU0sSUFBTixFQUFZLFVBQVosRUFBd0IsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsQ0FBVixDQUF2QixHQUFzQyxTQUF0QyxDQUEvQixDQUQ4RTtTQUExQixFQUF4RDtBQUdBLGNBQVEsd0JBQVIsRUFBa0MsR0FBbEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJGZpbmQgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpKDUpLFxuICAgIEtFWSA9ICdmaW5kJyxcbiAgICBmb3JjZWQgPSB0cnVlO1xuaWYgKEtFWSBpbiBbXSlcbiAgQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpIHtcbiAgICBmb3JjZWQgPSBmYWxzZTtcbiAgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge2ZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbikge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH19KTtcbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
