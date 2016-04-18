'use strict';

System.register([], function (_export, _context) {
  var $, has, $export, isObject, anObject;

  function get(target, propertyKey) {
    var receiver = arguments.length < 3 ? target : arguments[2],
        desc,
        proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = $.getDesc(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = $.getProto(target))) return get(proto, propertyKey, receiver);
  }
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      has = require('./$.has');
      $export = require('./$.export');
      isObject = require('./$.is-object');
      anObject = require('./$.an-object');
      $export($export.S, 'Reflect', { get: get });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsV0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixXQUFyQixFQUFrQztBQUNoQyxRQUFJLFdBQVcsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLE1BQXZCLEdBQWdDLFVBQVUsQ0FBVixDQUFoQztRQUNYLElBREo7UUFFSSxLQUZKLENBRGdDO0FBSWhDLFFBQUksU0FBUyxNQUFULE1BQXFCLFFBQXJCLEVBQ0YsT0FBTyxPQUFPLFdBQVAsQ0FBUCxDQURGO0FBRUEsUUFBSSxPQUFPLEVBQUUsT0FBRixDQUFVLE1BQVYsRUFBa0IsV0FBbEIsQ0FBUCxFQUNGLE9BQU8sSUFBSSxJQUFKLEVBQVUsT0FBVixJQUFxQixLQUFLLEtBQUwsR0FBYSxLQUFLLEdBQUwsS0FBYSxTQUFiLEdBQXlCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxRQUFkLENBQXpCLEdBQW1ELFNBQW5ELENBRDNDO0FBRUEsUUFBSSxTQUFTLFFBQVEsRUFBRSxRQUFGLENBQVcsTUFBWCxDQUFSLENBQWIsRUFDRSxPQUFPLElBQUksS0FBSixFQUFXLFdBQVgsRUFBd0IsUUFBeEIsQ0FBUCxDQURGO0dBUkY7Ozs7QUFMSSxVQUFJLFFBQVEsS0FBUjtBQUNKLFlBQU0sUUFBUSxTQUFSO0FBQ04sZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsaUJBQVcsUUFBUSxlQUFSO0FBQ1gsaUJBQVcsUUFBUSxlQUFSO0FBWWYsY0FBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLEtBQUssR0FBTCxFQUEvQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbmZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdLFxuICAgICAgZGVzYyxcbiAgICAgIHByb3RvO1xuICBpZiAoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpXG4gICAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIGlmIChkZXNjID0gJC5nZXREZXNjKHRhcmdldCwgcHJvcGVydHlLZXkpKVxuICAgIHJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJykgPyBkZXNjLnZhbHVlIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZCA/IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpIDogdW5kZWZpbmVkO1xuICBpZiAoaXNPYmplY3QocHJvdG8gPSAkLmdldFByb3RvKHRhcmdldCkpKVxuICAgIHJldHVybiBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcik7XG59XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7Z2V0OiBnZXR9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
