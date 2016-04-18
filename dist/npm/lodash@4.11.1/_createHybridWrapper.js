'use strict';

System.register([], function (_export, _context) {
  var composeArgs, composeArgsRight, countHolders, createCtorWrapper, createRecurryWrapper, getPlaceholder, reorder, replaceHolders, root, BIND_FLAG, BIND_KEY_FLAG, CURRY_FLAG, CURRY_RIGHT_FLAG, ARY_FLAG, FLIP_FLAG;

  function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & ARY_FLAG,
        isBind = bitmask & BIND_FLAG,
        isBindKey = bitmask & BIND_KEY_FLAG,
        isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
        isFlip = bitmask & FLIP_FLAG,
        Ctor = isBindKey ? undefined : createCtorWrapper(func);
    function wrapper() {
      var length = arguments.length,
          index = length,
          args = Array(length);
      while (index--) {
        args[index] = arguments[index];
      }
      if (isCurried) {
        var placeholder = getPlaceholder(wrapper),
            holdersCount = countHolders(args, placeholder);
      }
      if (partials) {
        args = composeArgs(args, partials, holders, isCurried);
      }
      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
      }
      length -= holdersCount;
      if (isCurried && length < arity) {
        var newHolders = replaceHolders(args, placeholder);
        return createRecurryWrapper(func, bitmask, createHybridWrapper, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
      }
      var thisBinding = isBind ? thisArg : this,
          fn = isBindKey ? thisBinding[func] : func;
      length = args.length;
      if (argPos) {
        args = reorder(args, argPos);
      } else if (isFlip && length > 1) {
        args.reverse();
      }
      if (isAry && ary < length) {
        args.length = ary;
      }
      if (this && this !== root && this instanceof wrapper) {
        fn = Ctor || createCtorWrapper(fn);
      }
      return fn.apply(thisBinding, args);
    }
    return wrapper;
  }
  return {
    setters: [],
    execute: function () {
      composeArgs = require('./_composeArgs');
      composeArgsRight = require('./_composeArgsRight');
      countHolders = require('./_countHolders');
      createCtorWrapper = require('./_createCtorWrapper');
      createRecurryWrapper = require('./_createRecurryWrapper');
      getPlaceholder = require('./_getPlaceholder');
      reorder = require('./_reorder');
      replaceHolders = require('./_replaceHolders');
      root = require('./_root');
      BIND_FLAG = 1;
      BIND_KEY_FLAG = 2;
      CURRY_FLAG = 8;
      CURRY_RIGHT_FLAG = 16;
      ARY_FLAG = 128;
      FLIP_FLAG = 512;
      module.exports = createHybridWrapper;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVIeWJyaWRXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBZ0JBLFdBQVMsbUJBQVQsQ0FBNkIsSUFBN0IsRUFBbUMsT0FBbkMsRUFBNEMsT0FBNUMsRUFBcUQsUUFBckQsRUFBK0QsT0FBL0QsRUFBd0UsYUFBeEUsRUFBdUYsWUFBdkYsRUFBcUcsTUFBckcsRUFBNkcsR0FBN0csRUFBa0gsS0FBbEgsRUFBeUg7QUFDdkgsUUFBSSxRQUFRLFVBQVUsUUFBVjtRQUNSLFNBQVMsVUFBVSxTQUFWO1FBQ1QsWUFBWSxVQUFVLGFBQVY7UUFDWixZQUFZLFdBQVcsYUFBYSxnQkFBYixDQUFYO1FBQ1osU0FBUyxVQUFVLFNBQVY7UUFDVCxPQUFPLFlBQVksU0FBWixHQUF3QixrQkFBa0IsSUFBbEIsQ0FBeEIsQ0FONEc7QUFPdkgsYUFBUyxPQUFULEdBQW1CO0FBQ2pCLFVBQUksU0FBUyxVQUFVLE1BQVY7VUFDVCxRQUFRLE1BQVI7VUFDQSxPQUFPLE1BQU0sTUFBTixDQUFQLENBSGE7QUFJakIsYUFBTyxPQUFQLEVBQWdCO0FBQ2QsYUFBSyxLQUFMLElBQWMsVUFBVSxLQUFWLENBQWQsQ0FEYztPQUFoQjtBQUdBLFVBQUksU0FBSixFQUFlO0FBQ2IsWUFBSSxjQUFjLGVBQWUsT0FBZixDQUFkO1lBQ0EsZUFBZSxhQUFhLElBQWIsRUFBbUIsV0FBbkIsQ0FBZixDQUZTO09BQWY7QUFJQSxVQUFJLFFBQUosRUFBYztBQUNaLGVBQU8sWUFBWSxJQUFaLEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLEVBQXFDLFNBQXJDLENBQVAsQ0FEWTtPQUFkO0FBR0EsVUFBSSxhQUFKLEVBQW1CO0FBQ2pCLGVBQU8saUJBQWlCLElBQWpCLEVBQXVCLGFBQXZCLEVBQXNDLFlBQXRDLEVBQW9ELFNBQXBELENBQVAsQ0FEaUI7T0FBbkI7QUFHQSxnQkFBVSxZQUFWLENBakJpQjtBQWtCakIsVUFBSSxhQUFhLFNBQVMsS0FBVCxFQUFnQjtBQUMvQixZQUFJLGFBQWEsZUFBZSxJQUFmLEVBQXFCLFdBQXJCLENBQWIsQ0FEMkI7QUFFL0IsZUFBTyxxQkFBcUIsSUFBckIsRUFBMkIsT0FBM0IsRUFBb0MsbUJBQXBDLEVBQXlELFFBQVEsV0FBUixFQUFxQixPQUE5RSxFQUF1RixJQUF2RixFQUE2RixVQUE3RixFQUF5RyxNQUF6RyxFQUFpSCxHQUFqSCxFQUFzSCxRQUFRLE1BQVIsQ0FBN0gsQ0FGK0I7T0FBakM7QUFJQSxVQUFJLGNBQWMsU0FBUyxPQUFULEdBQW1CLElBQW5CO1VBQ2QsS0FBSyxZQUFZLFlBQVksSUFBWixDQUFaLEdBQWdDLElBQWhDLENBdkJRO0FBd0JqQixlQUFTLEtBQUssTUFBTCxDQXhCUTtBQXlCakIsVUFBSSxNQUFKLEVBQVk7QUFDVixlQUFPLFFBQVEsSUFBUixFQUFjLE1BQWQsQ0FBUCxDQURVO09BQVosTUFFTyxJQUFJLFVBQVUsU0FBUyxDQUFULEVBQVk7QUFDL0IsYUFBSyxPQUFMLEdBRCtCO09BQTFCO0FBR1AsVUFBSSxTQUFTLE1BQU0sTUFBTixFQUFjO0FBQ3pCLGFBQUssTUFBTCxHQUFjLEdBQWQsQ0FEeUI7T0FBM0I7QUFHQSxVQUFJLFFBQVEsU0FBUyxJQUFULElBQWlCLGdCQUFnQixPQUFoQixFQUF5QjtBQUNwRCxhQUFLLFFBQVEsa0JBQWtCLEVBQWxCLENBQVIsQ0FEK0M7T0FBdEQ7QUFHQSxhQUFPLEdBQUcsS0FBSCxDQUFTLFdBQVQsRUFBc0IsSUFBdEIsQ0FBUCxDQXBDaUI7S0FBbkI7QUFzQ0EsV0FBTyxPQUFQLENBN0N1SDtHQUF6SDs7OztBQWZJLG9CQUFjLFFBQVEsZ0JBQVI7QUFDZCx5QkFBbUIsUUFBUSxxQkFBUjtBQUNuQixxQkFBZSxRQUFRLGlCQUFSO0FBQ2YsMEJBQW9CLFFBQVEsc0JBQVI7QUFDcEIsNkJBQXVCLFFBQVEseUJBQVI7QUFDdkIsdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsdUJBQWlCLFFBQVEsbUJBQVI7QUFDakIsYUFBTyxRQUFRLFNBQVI7QUFDUCxrQkFBWTtBQUNaLHNCQUFnQjtBQUNoQixtQkFBYTtBQUNiLHlCQUFtQjtBQUNuQixpQkFBVztBQUNYLGtCQUFZO0FBZ0RoQixhQUFPLE9BQVAsR0FBaUIsbUJBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVIeWJyaWRXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29tcG9zZUFyZ3MgPSByZXF1aXJlKCcuL19jb21wb3NlQXJncycpLFxuICAgIGNvbXBvc2VBcmdzUmlnaHQgPSByZXF1aXJlKCcuL19jb21wb3NlQXJnc1JpZ2h0JyksXG4gICAgY291bnRIb2xkZXJzID0gcmVxdWlyZSgnLi9fY291bnRIb2xkZXJzJyksXG4gICAgY3JlYXRlQ3RvcldyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDdG9yV3JhcHBlcicpLFxuICAgIGNyZWF0ZVJlY3VycnlXcmFwcGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlUmVjdXJyeVdyYXBwZXInKSxcbiAgICBnZXRQbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vX2dldFBsYWNlaG9sZGVyJyksXG4gICAgcmVvcmRlciA9IHJlcXVpcmUoJy4vX3Jlb3JkZXInKSxcbiAgICByZXBsYWNlSG9sZGVycyA9IHJlcXVpcmUoJy4vX3JlcGxhY2VIb2xkZXJzJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcbnZhciBCSU5EX0ZMQUcgPSAxLFxuICAgIEJJTkRfS0VZX0ZMQUcgPSAyLFxuICAgIENVUlJZX0ZMQUcgPSA4LFxuICAgIENVUlJZX1JJR0hUX0ZMQUcgPSAxNixcbiAgICBBUllfRkxBRyA9IDEyOCxcbiAgICBGTElQX0ZMQUcgPSA1MTI7XG5mdW5jdGlvbiBjcmVhdGVIeWJyaWRXcmFwcGVyKGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcsIHBhcnRpYWxzLCBob2xkZXJzLCBwYXJ0aWFsc1JpZ2h0LCBob2xkZXJzUmlnaHQsIGFyZ1BvcywgYXJ5LCBhcml0eSkge1xuICB2YXIgaXNBcnkgPSBiaXRtYXNrICYgQVJZX0ZMQUcsXG4gICAgICBpc0JpbmQgPSBiaXRtYXNrICYgQklORF9GTEFHLFxuICAgICAgaXNCaW5kS2V5ID0gYml0bWFzayAmIEJJTkRfS0VZX0ZMQUcsXG4gICAgICBpc0N1cnJpZWQgPSBiaXRtYXNrICYgKENVUlJZX0ZMQUcgfCBDVVJSWV9SSUdIVF9GTEFHKSxcbiAgICAgIGlzRmxpcCA9IGJpdG1hc2sgJiBGTElQX0ZMQUcsXG4gICAgICBDdG9yID0gaXNCaW5kS2V5ID8gdW5kZWZpbmVkIDogY3JlYXRlQ3RvcldyYXBwZXIoZnVuYyk7XG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gbGVuZ3RoLFxuICAgICAgICBhcmdzID0gQXJyYXkobGVuZ3RoKTtcbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIH1cbiAgICBpZiAoaXNDdXJyaWVkKSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcih3cmFwcGVyKSxcbiAgICAgICAgICBob2xkZXJzQ291bnQgPSBjb3VudEhvbGRlcnMoYXJncywgcGxhY2Vob2xkZXIpO1xuICAgIH1cbiAgICBpZiAocGFydGlhbHMpIHtcbiAgICAgIGFyZ3MgPSBjb21wb3NlQXJncyhhcmdzLCBwYXJ0aWFscywgaG9sZGVycywgaXNDdXJyaWVkKTtcbiAgICB9XG4gICAgaWYgKHBhcnRpYWxzUmlnaHQpIHtcbiAgICAgIGFyZ3MgPSBjb21wb3NlQXJnc1JpZ2h0KGFyZ3MsIHBhcnRpYWxzUmlnaHQsIGhvbGRlcnNSaWdodCwgaXNDdXJyaWVkKTtcbiAgICB9XG4gICAgbGVuZ3RoIC09IGhvbGRlcnNDb3VudDtcbiAgICBpZiAoaXNDdXJyaWVkICYmIGxlbmd0aCA8IGFyaXR5KSB7XG4gICAgICB2YXIgbmV3SG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKGFyZ3MsIHBsYWNlaG9sZGVyKTtcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnJ5V3JhcHBlcihmdW5jLCBiaXRtYXNrLCBjcmVhdGVIeWJyaWRXcmFwcGVyLCB3cmFwcGVyLnBsYWNlaG9sZGVyLCB0aGlzQXJnLCBhcmdzLCBuZXdIb2xkZXJzLCBhcmdQb3MsIGFyeSwgYXJpdHkgLSBsZW5ndGgpO1xuICAgIH1cbiAgICB2YXIgdGhpc0JpbmRpbmcgPSBpc0JpbmQgPyB0aGlzQXJnIDogdGhpcyxcbiAgICAgICAgZm4gPSBpc0JpbmRLZXkgPyB0aGlzQmluZGluZ1tmdW5jXSA6IGZ1bmM7XG4gICAgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKGFyZ1Bvcykge1xuICAgICAgYXJncyA9IHJlb3JkZXIoYXJncywgYXJnUG9zKTtcbiAgICB9IGVsc2UgaWYgKGlzRmxpcCAmJiBsZW5ndGggPiAxKSB7XG4gICAgICBhcmdzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgaWYgKGlzQXJ5ICYmIGFyeSA8IGxlbmd0aCkge1xuICAgICAgYXJncy5sZW5ndGggPSBhcnk7XG4gICAgfVxuICAgIGlmICh0aGlzICYmIHRoaXMgIT09IHJvb3QgJiYgdGhpcyBpbnN0YW5jZW9mIHdyYXBwZXIpIHtcbiAgICAgIGZuID0gQ3RvciB8fCBjcmVhdGVDdG9yV3JhcHBlcihmbik7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQmluZGluZywgYXJncyk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUh5YnJpZFdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
