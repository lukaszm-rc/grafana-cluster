'use strict';

System.register([], function (_export, _context) {
  var apply, createCtorWrapper, createHybridWrapper, createRecurryWrapper, getPlaceholder, replaceHolders, root;

  function createCurryWrapper(func, bitmask, arity) {
    var Ctor = createCtorWrapper(func);
    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length,
          placeholder = getPlaceholder(wrapper);
      while (index--) {
        args[index] = arguments[index];
      }
      var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
      length -= holders.length;
      if (length < arity) {
        return createRecurryWrapper(func, bitmask, createHybridWrapper, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
      }
      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return apply(fn, this, args);
    }
    return wrapper;
  }
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      createCtorWrapper = require('./_createCtorWrapper');
      createHybridWrapper = require('./_createHybridWrapper');
      createRecurryWrapper = require('./_createRecurryWrapper');
      getPlaceholder = require('./_getPlaceholder');
      replaceHolders = require('./_replaceHolders');
      root = require('./_root');
      module.exports = createCurryWrapper;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVDdXJyeVdyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxXQUFTLGtCQUFULENBQTRCLElBQTVCLEVBQWtDLE9BQWxDLEVBQTJDLEtBQTNDLEVBQWtEO0FBQ2hELFFBQUksT0FBTyxrQkFBa0IsSUFBbEIsQ0FBUCxDQUQ0QztBQUVoRCxhQUFTLE9BQVQsR0FBbUI7QUFDakIsVUFBSSxTQUFTLFVBQVUsTUFBVjtVQUNULE9BQU8sTUFBTSxNQUFOLENBQVA7VUFDQSxRQUFRLE1BQVI7VUFDQSxjQUFjLGVBQWUsT0FBZixDQUFkLENBSmE7QUFLakIsYUFBTyxPQUFQLEVBQWdCO0FBQ2QsYUFBSyxLQUFMLElBQWMsVUFBVSxLQUFWLENBQWQsQ0FEYztPQUFoQjtBQUdBLFVBQUksVUFBVSxNQUFDLEdBQVMsQ0FBVCxJQUFjLEtBQUssQ0FBTCxNQUFZLFdBQVosSUFBMkIsS0FBSyxTQUFTLENBQVQsQ0FBTCxLQUFxQixXQUFyQixHQUFvQyxFQUE5RSxHQUFtRixlQUFlLElBQWYsRUFBcUIsV0FBckIsQ0FBbkYsQ0FSRztBQVNqQixnQkFBVSxRQUFRLE1BQVIsQ0FUTztBQVVqQixVQUFJLFNBQVMsS0FBVCxFQUFnQjtBQUNsQixlQUFPLHFCQUFxQixJQUFyQixFQUEyQixPQUEzQixFQUFvQyxtQkFBcEMsRUFBeUQsUUFBUSxXQUFSLEVBQXFCLFNBQTlFLEVBQXlGLElBQXpGLEVBQStGLE9BQS9GLEVBQXdHLFNBQXhHLEVBQW1ILFNBQW5ILEVBQThILFFBQVEsTUFBUixDQUFySSxDQURrQjtPQUFwQjtBQUdBLFVBQUksS0FBSyxJQUFDLElBQVEsU0FBUyxJQUFULElBQWlCLGdCQUFnQixPQUFoQixHQUEyQixJQUFyRCxHQUE0RCxJQUE1RCxDQWJRO0FBY2pCLGFBQU8sTUFBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixJQUFoQixDQUFQLENBZGlCO0tBQW5CO0FBZ0JBLFdBQU8sT0FBUCxDQWxCZ0Q7R0FBbEQ7Ozs7QUFQSSxjQUFRLFFBQVEsVUFBUjtBQUNSLDBCQUFvQixRQUFRLHNCQUFSO0FBQ3BCLDRCQUFzQixRQUFRLHdCQUFSO0FBQ3RCLDZCQUF1QixRQUFRLHlCQUFSO0FBQ3ZCLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLGFBQU8sUUFBUSxTQUFSO0FBcUJYLGFBQU8sT0FBUCxHQUFpQixrQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NyZWF0ZUN1cnJ5V3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBjcmVhdGVDdG9yV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUN0b3JXcmFwcGVyJyksXG4gICAgY3JlYXRlSHlicmlkV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUh5YnJpZFdyYXBwZXInKSxcbiAgICBjcmVhdGVSZWN1cnJ5V3JhcHBlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZVJlY3VycnlXcmFwcGVyJyksXG4gICAgZ2V0UGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL19nZXRQbGFjZWhvbGRlcicpLFxuICAgIHJlcGxhY2VIb2xkZXJzID0gcmVxdWlyZSgnLi9fcmVwbGFjZUhvbGRlcnMnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuZnVuY3Rpb24gY3JlYXRlQ3VycnlXcmFwcGVyKGZ1bmMsIGJpdG1hc2ssIGFyaXR5KSB7XG4gIHZhciBDdG9yID0gY3JlYXRlQ3RvcldyYXBwZXIoZnVuYyk7XG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGFyZ3MgPSBBcnJheShsZW5ndGgpLFxuICAgICAgICBpbmRleCA9IGxlbmd0aCxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcih3cmFwcGVyKTtcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIH1cbiAgICB2YXIgaG9sZGVycyA9IChsZW5ndGggPCAzICYmIGFyZ3NbMF0gIT09IHBsYWNlaG9sZGVyICYmIGFyZ3NbbGVuZ3RoIC0gMV0gIT09IHBsYWNlaG9sZGVyKSA/IFtdIDogcmVwbGFjZUhvbGRlcnMoYXJncywgcGxhY2Vob2xkZXIpO1xuICAgIGxlbmd0aCAtPSBob2xkZXJzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoIDwgYXJpdHkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnJ5V3JhcHBlcihmdW5jLCBiaXRtYXNrLCBjcmVhdGVIeWJyaWRXcmFwcGVyLCB3cmFwcGVyLnBsYWNlaG9sZGVyLCB1bmRlZmluZWQsIGFyZ3MsIGhvbGRlcnMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBhcml0eSAtIGxlbmd0aCk7XG4gICAgfVxuICAgIHZhciBmbiA9ICh0aGlzICYmIHRoaXMgIT09IHJvb3QgJiYgdGhpcyBpbnN0YW5jZW9mIHdyYXBwZXIpID8gQ3RvciA6IGZ1bmM7XG4gICAgcmV0dXJuIGFwcGx5KGZuLCB0aGlzLCBhcmdzKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ3VycnlXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
