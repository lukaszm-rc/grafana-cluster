'use strict';

System.register([], function (_export, _context) {
  var baseKeysIn, indexKeys, isIndex, isPrototype, objectProto, hasOwnProperty;

  function keysIn(object) {
    var index = -1,
        isProto = isPrototype(object),
        props = baseKeysIn(object),
        propsLength = props.length,
        indexes = indexKeys(object),
        skipIndexes = !!indexes,
        result = indexes || [],
        length = result.length;
    while (++index < propsLength) {
      var key = props[index];
      if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      baseKeysIn = require('./_baseKeysIn');
      indexKeys = require('./_indexKeys');
      isIndex = require('./_isIndex');
      isPrototype = require('./_isPrototype');
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      module.exports = keysIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2tleXNJbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLFdBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QjtBQUN0QixRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsVUFBVSxZQUFZLE1BQVosQ0FBVjtRQUNBLFFBQVEsV0FBVyxNQUFYLENBQVI7UUFDQSxjQUFjLE1BQU0sTUFBTjtRQUNkLFVBQVUsVUFBVSxNQUFWLENBQVY7UUFDQSxjQUFjLENBQUMsQ0FBQyxPQUFEO1FBQ2YsU0FBUyxXQUFXLEVBQVg7UUFDVCxTQUFTLE9BQU8sTUFBUCxDQVJTO0FBU3RCLFdBQU8sRUFBRSxLQUFGLEdBQVUsV0FBVixFQUF1QjtBQUM1QixVQUFJLE1BQU0sTUFBTSxLQUFOLENBQU4sQ0FEd0I7QUFFNUIsVUFBSSxFQUFFLGdCQUFnQixPQUFPLFFBQVAsSUFBbUIsUUFBUSxHQUFSLEVBQWEsTUFBYixDQUFuQixDQUFoQixDQUFGLElBQStELEVBQUUsT0FBTyxhQUFQLEtBQXlCLFdBQVcsQ0FBQyxlQUFlLElBQWYsQ0FBb0IsTUFBcEIsRUFBNEIsR0FBNUIsQ0FBRCxDQUFwQyxDQUFGLEVBQTJFO0FBQzVJLGVBQU8sSUFBUCxDQUFZLEdBQVosRUFENEk7T0FBOUk7S0FGRjtBQU1BLFdBQU8sTUFBUCxDQWZzQjtHQUF4Qjs7OztBQU5JLG1CQUFhLFFBQVEsZUFBUjtBQUNiLGtCQUFZLFFBQVEsY0FBUjtBQUNaLGdCQUFVLFFBQVEsWUFBUjtBQUNWLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCxvQkFBYyxPQUFPLFNBQVA7QUFDZCx1QkFBaUIsWUFBWSxjQUFaO0FBa0JyQixhQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEva2V5c0luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpbmRleEtleXMgPSByZXF1aXJlKCcuL19pbmRleEtleXMnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHByb3BzID0gYmFzZUtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBpbmRleGVzID0gaW5kZXhLZXlzKG9iamVjdCksXG4gICAgICBza2lwSW5kZXhlcyA9ICEhaW5kZXhlcyxcbiAgICAgIHJlc3VsdCA9IGluZGV4ZXMgfHwgW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICB3aGlsZSAoKytpbmRleCA8IHByb3BzTGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBpZiAoIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkgJiYgIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
