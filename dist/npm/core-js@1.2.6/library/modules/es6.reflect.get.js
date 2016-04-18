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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLFdBQXJCLEVBQWtDO0FBQ2hDLFFBQUksV0FBVyxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsTUFBdkIsR0FBZ0MsVUFBVSxDQUFWLENBQWhDO1FBQ1gsSUFESjtRQUVJLEtBRkosQ0FEZ0M7QUFJaEMsUUFBSSxTQUFTLE1BQVQsTUFBcUIsUUFBckIsRUFDRixPQUFPLE9BQU8sV0FBUCxDQUFQLENBREY7QUFFQSxRQUFJLE9BQU8sRUFBRSxPQUFGLENBQVUsTUFBVixFQUFrQixXQUFsQixDQUFQLEVBQ0YsT0FBTyxJQUFJLElBQUosRUFBVSxPQUFWLElBQXFCLEtBQUssS0FBTCxHQUFhLEtBQUssR0FBTCxLQUFhLFNBQWIsR0FBeUIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLFFBQWQsQ0FBekIsR0FBbUQsU0FBbkQsQ0FEM0M7QUFFQSxRQUFJLFNBQVMsUUFBUSxFQUFFLFFBQUYsQ0FBVyxNQUFYLENBQVIsQ0FBYixFQUNFLE9BQU8sSUFBSSxLQUFKLEVBQVcsV0FBWCxFQUF3QixRQUF4QixDQUFQLENBREY7R0FSRjs7OztBQUxJLFVBQUksUUFBUSxLQUFSO0FBQ0osWUFBTSxRQUFRLFNBQVI7QUFDTixnQkFBVSxRQUFRLFlBQVI7QUFDVixpQkFBVyxRQUFRLGVBQVI7QUFDWCxpQkFBVyxRQUFRLGVBQVI7QUFZZixjQUFRLFFBQVEsQ0FBUixFQUFXLFNBQW5CLEVBQThCLEVBQUMsS0FBSyxHQUFMLEVBQS9CIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXSxcbiAgICAgIGRlc2MsXG4gICAgICBwcm90bztcbiAgaWYgKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKVxuICAgIHJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBpZiAoZGVzYyA9ICQuZ2V0RGVzYyh0YXJnZXQsIHByb3BlcnR5S2V5KSlcbiAgICByZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpID8gZGVzYy52YWx1ZSA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWQgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKSA6IHVuZGVmaW5lZDtcbiAgaWYgKGlzT2JqZWN0KHByb3RvID0gJC5nZXRQcm90byh0YXJnZXQpKSlcbiAgICByZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xufVxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2dldDogZ2V0fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
