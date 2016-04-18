/* */
'use strict';

System.register([], function (_export, _context) {
  var $, descriptor, setToStringTag, IteratorPrototype;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      descriptor = require('./$.property-desc');
      setToStringTag = require('./$.set-to-string-tag');
      IteratorPrototype = {};

      require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function () {
        return this;
      });
      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
        setToStringTag(Constructor, NAME + ' Iterator');
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osbUJBQWEsUUFBUSxtQkFBUjtBQUNiLHVCQUFpQixRQUFRLHVCQUFSO0FBQ2pCLDBCQUFvQjs7QUFDeEIsY0FBUSxVQUFSLEVBQW9CLGlCQUFwQixFQUF1QyxRQUFRLFNBQVIsRUFBbUIsVUFBbkIsQ0FBdkMsRUFBdUUsWUFBVztBQUNoRixlQUFPLElBQVAsQ0FEZ0Y7T0FBWCxDQUF2RTtBQUdBLGFBQU8sT0FBUCxHQUFpQixVQUFTLFdBQVQsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0M7QUFDakQsb0JBQVksU0FBWixHQUF3QixFQUFFLE1BQUYsQ0FBUyxpQkFBVCxFQUE0QixFQUFDLE1BQU0sV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFOLEVBQTdCLENBQXhCLENBRGlEO0FBRWpELHVCQUFlLFdBQWYsRUFBNEIsT0FBTyxXQUFQLENBQTVCLENBRmlEO09BQWxDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpLFxuICAgIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJyksXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbnJlcXVpcmUoJy4vJC5oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
