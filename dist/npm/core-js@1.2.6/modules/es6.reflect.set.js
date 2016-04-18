'use strict';

System.register([], function (_export, _context) {
  var $, has, $export, createDesc, anObject, isObject;

  function set(target, propertyKey, V) {
    var receiver = arguments.length < 4 ? target : arguments[3],
        ownDesc = $.getDesc(anObject(target), propertyKey),
        existingDescriptor,
        proto;
    if (!ownDesc) {
      if (isObject(proto = $.getProto(target))) {
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if (has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver)) return false;
      existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      $.setDesc(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      has = require('./$.has');
      $export = require('./$.export');
      createDesc = require('./$.property-desc');
      anObject = require('./$.an-object');
      isObject = require('./$.is-object');
      $export($export.S, 'Reflect', { set: set });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsV0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixXQUFyQixFQUFrQyxDQUFsQyxFQUFxQztBQUNuQyxRQUFJLFdBQVcsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLE1BQXZCLEdBQWdDLFVBQVUsQ0FBVixDQUFoQztRQUNYLFVBQVUsRUFBRSxPQUFGLENBQVUsU0FBUyxNQUFULENBQVYsRUFBNEIsV0FBNUIsQ0FBVjtRQUNBLGtCQUZKO1FBR0ksS0FISixDQURtQztBQUtuQyxRQUFJLENBQUMsT0FBRCxFQUFVO0FBQ1osVUFBSSxTQUFTLFFBQVEsRUFBRSxRQUFGLENBQVcsTUFBWCxDQUFSLENBQWIsRUFBMEM7QUFDeEMsZUFBTyxJQUFJLEtBQUosRUFBVyxXQUFYLEVBQXdCLENBQXhCLEVBQTJCLFFBQTNCLENBQVAsQ0FEd0M7T0FBMUM7QUFHQSxnQkFBVSxXQUFXLENBQVgsQ0FBVixDQUpZO0tBQWQ7QUFNQSxRQUFJLElBQUksT0FBSixFQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUN6QixVQUFJLFFBQVEsUUFBUixLQUFxQixLQUFyQixJQUE4QixDQUFDLFNBQVMsUUFBVCxDQUFELEVBQ2hDLE9BQU8sS0FBUCxDQURGO0FBRUEsMkJBQXFCLEVBQUUsT0FBRixDQUFVLFFBQVYsRUFBb0IsV0FBcEIsS0FBb0MsV0FBVyxDQUFYLENBQXBDLENBSEk7QUFJekIseUJBQW1CLEtBQW5CLEdBQTJCLENBQTNCLENBSnlCO0FBS3pCLFFBQUUsT0FBRixDQUFVLFFBQVYsRUFBb0IsV0FBcEIsRUFBaUMsa0JBQWpDLEVBTHlCO0FBTXpCLGFBQU8sSUFBUCxDQU55QjtLQUEzQjtBQVFBLFdBQU8sUUFBUSxHQUFSLEtBQWdCLFNBQWhCLEdBQTRCLEtBQTVCLElBQXFDLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsUUFBakIsRUFBMkIsQ0FBM0IsR0FBK0IsSUFBL0IsQ0FBckMsQ0FuQjRCO0dBQXJDOzs7O0FBTkksVUFBSSxRQUFRLEtBQVI7QUFDSixZQUFNLFFBQVEsU0FBUjtBQUNOLGdCQUFVLFFBQVEsWUFBUjtBQUNWLG1CQUFhLFFBQVEsbUJBQVI7QUFDYixpQkFBVyxRQUFRLGVBQVI7QUFDWCxpQkFBVyxRQUFRLGVBQVI7QUFzQmYsY0FBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLEtBQUssR0FBTCxFQUEvQiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWKSB7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdLFxuICAgICAgb3duRGVzYyA9ICQuZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSksXG4gICAgICBleGlzdGluZ0Rlc2NyaXB0b3IsXG4gICAgICBwcm90bztcbiAgaWYgKCFvd25EZXNjKSB7XG4gICAgaWYgKGlzT2JqZWN0KHByb3RvID0gJC5nZXRQcm90byh0YXJnZXQpKSkge1xuICAgICAgcmV0dXJuIHNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcbiAgICB9XG4gICAgb3duRGVzYyA9IGNyZWF0ZURlc2MoMCk7XG4gIH1cbiAgaWYgKGhhcyhvd25EZXNjLCAndmFsdWUnKSkge1xuICAgIGlmIChvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9ICQuZ2V0RGVzYyhyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGNyZWF0ZURlc2MoMCk7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICAkLnNldERlc2MocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xufVxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge3NldDogc2V0fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
