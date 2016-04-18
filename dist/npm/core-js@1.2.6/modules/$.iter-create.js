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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLG1CQUFhLFFBQVEsbUJBQVI7QUFDYix1QkFBaUIsUUFBUSx1QkFBUjtBQUNqQiwwQkFBb0I7O0FBQ3hCLGNBQVEsVUFBUixFQUFvQixpQkFBcEIsRUFBdUMsUUFBUSxTQUFSLEVBQW1CLFVBQW5CLENBQXZDLEVBQXVFLFlBQVc7QUFDaEYsZUFBTyxJQUFQLENBRGdGO09BQVgsQ0FBdkU7QUFHQSxhQUFPLE9BQVAsR0FBaUIsVUFBUyxXQUFULEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDO0FBQ2pELG9CQUFZLFNBQVosR0FBd0IsRUFBRSxNQUFGLENBQVMsaUJBQVQsRUFBNEIsRUFBQyxNQUFNLFdBQVcsQ0FBWCxFQUFjLElBQWQsQ0FBTixFQUE3QixDQUF4QixDQURpRDtBQUVqRCx1QkFBZSxXQUFmLEVBQTRCLE9BQU8sV0FBUCxDQUE1QixDQUZpRDtPQUFsQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyksXG4gICAgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKSxcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXM7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
