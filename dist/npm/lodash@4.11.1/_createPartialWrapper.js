'use strict';

System.register([], function (_export, _context) {
  var apply, createCtorWrapper, root, BIND_FLAG;

  function createPartialWrapper(func, bitmask, thisArg, partials) {
    var isBind = bitmask & BIND_FLAG,
        Ctor = createCtorWrapper(func);
    function wrapper() {
      var argsIndex = -1,
          argsLength = arguments.length,
          leftIndex = -1,
          leftLength = partials.length,
          args = Array(leftLength + argsLength),
          fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      while (++leftIndex < leftLength) {
        args[leftIndex] = partials[leftIndex];
      }
      while (argsLength--) {
        args[leftIndex++] = arguments[++argsIndex];
      }
      return apply(fn, isBind ? thisArg : this, args);
    }
    return wrapper;
  }
  return {
    setters: [],
    execute: function () {
      apply = require('./_apply');
      createCtorWrapper = require('./_createCtorWrapper');
      root = require('./_root');
      BIND_FLAG = 1;
      module.exports = createPartialWrapper;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVQYXJ0aWFsV3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLFdBQVMsb0JBQVQsQ0FBOEIsSUFBOUIsRUFBb0MsT0FBcEMsRUFBNkMsT0FBN0MsRUFBc0QsUUFBdEQsRUFBZ0U7QUFDOUQsUUFBSSxTQUFTLFVBQVUsU0FBVjtRQUNULE9BQU8sa0JBQWtCLElBQWxCLENBQVAsQ0FGMEQ7QUFHOUQsYUFBUyxPQUFULEdBQW1CO0FBQ2pCLFVBQUksWUFBWSxDQUFDLENBQUQ7VUFDWixhQUFhLFVBQVUsTUFBVjtVQUNiLFlBQVksQ0FBQyxDQUFEO1VBQ1osYUFBYSxTQUFTLE1BQVQ7VUFDYixPQUFPLE1BQU0sYUFBYSxVQUFiLENBQWI7VUFDQSxLQUFLLElBQUMsSUFBUSxTQUFTLElBQVQsSUFBaUIsZ0JBQWdCLE9BQWhCLEdBQTJCLElBQXJELEdBQTRELElBQTVELENBTlE7QUFPakIsYUFBTyxFQUFFLFNBQUYsR0FBYyxVQUFkLEVBQTBCO0FBQy9CLGFBQUssU0FBTCxJQUFrQixTQUFTLFNBQVQsQ0FBbEIsQ0FEK0I7T0FBakM7QUFHQSxhQUFPLFlBQVAsRUFBcUI7QUFDbkIsYUFBSyxXQUFMLElBQW9CLFVBQVUsRUFBRSxTQUFGLENBQTlCLENBRG1CO09BQXJCO0FBR0EsYUFBTyxNQUFNLEVBQU4sRUFBVSxTQUFTLE9BQVQsR0FBbUIsSUFBbkIsRUFBeUIsSUFBbkMsQ0FBUCxDQWJpQjtLQUFuQjtBQWVBLFdBQU8sT0FBUCxDQWxCOEQ7R0FBaEU7Ozs7QUFKSSxjQUFRLFFBQVEsVUFBUjtBQUNSLDBCQUFvQixRQUFRLHNCQUFSO0FBQ3BCLGFBQU8sUUFBUSxTQUFSO0FBQ1Asa0JBQVk7QUFxQmhCLGFBQU8sT0FBUCxHQUFpQixvQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NyZWF0ZVBhcnRpYWxXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpLFxuICAgIGNyZWF0ZUN0b3JXcmFwcGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQ3RvcldyYXBwZXInKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xudmFyIEJJTkRfRkxBRyA9IDE7XG5mdW5jdGlvbiBjcmVhdGVQYXJ0aWFsV3JhcHBlcihmdW5jLCBiaXRtYXNrLCB0aGlzQXJnLCBwYXJ0aWFscykge1xuICB2YXIgaXNCaW5kID0gYml0bWFzayAmIEJJTkRfRkxBRyxcbiAgICAgIEN0b3IgPSBjcmVhdGVDdG9yV3JhcHBlcihmdW5jKTtcbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgYXJnc0luZGV4ID0gLTEsXG4gICAgICAgIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBsZWZ0SW5kZXggPSAtMSxcbiAgICAgICAgbGVmdExlbmd0aCA9IHBhcnRpYWxzLmxlbmd0aCxcbiAgICAgICAgYXJncyA9IEFycmF5KGxlZnRMZW5ndGggKyBhcmdzTGVuZ3RoKSxcbiAgICAgICAgZm4gPSAodGhpcyAmJiB0aGlzICE9PSByb290ICYmIHRoaXMgaW5zdGFuY2VvZiB3cmFwcGVyKSA/IEN0b3IgOiBmdW5jO1xuICAgIHdoaWxlICgrK2xlZnRJbmRleCA8IGxlZnRMZW5ndGgpIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4XSA9IHBhcnRpYWxzW2xlZnRJbmRleF07XG4gICAgfVxuICAgIHdoaWxlIChhcmdzTGVuZ3RoLS0pIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4KytdID0gYXJndW1lbnRzWysrYXJnc0luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5KGZuLCBpc0JpbmQgPyB0aGlzQXJnIDogdGhpcywgYXJncyk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVBhcnRpYWxXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
