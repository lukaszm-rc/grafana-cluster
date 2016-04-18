'use strict';

System.register([], function (_export, _context) {
    var isLaziable, setData, BIND_FLAG, BIND_KEY_FLAG, CURRY_BOUND_FLAG, CURRY_FLAG, PARTIAL_FLAG, PARTIAL_RIGHT_FLAG;

    function createRecurryWrapper(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
        var isCurry = bitmask & CURRY_FLAG,
            newHolders = isCurry ? holders : undefined,
            newHoldersRight = isCurry ? undefined : holders,
            newPartials = isCurry ? partials : undefined,
            newPartialsRight = isCurry ? undefined : partials;
        bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
        if (!(bitmask & CURRY_BOUND_FLAG)) {
            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
        }
        var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
        var result = wrapFunc.apply(undefined, newData);
        if (isLaziable(func)) {
            setData(result, newData);
        }
        result.placeholder = placeholder;
        return result;
    }
    return {
        setters: [],
        execute: function () {
            isLaziable = require('./_isLaziable');
            setData = require('./_setData');
            BIND_FLAG = 1;
            BIND_KEY_FLAG = 2;
            CURRY_BOUND_FLAG = 4;
            CURRY_FLAG = 8;
            PARTIAL_FLAG = 32;
            PARTIAL_RIGHT_FLAG = 64;
            module.exports = createRecurryWrapper;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVSZWN1cnJ5V3JhcHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVNBLGFBQVMsb0JBQVQsQ0FBOEIsSUFBOUIsRUFBb0MsT0FBcEMsRUFBNkMsUUFBN0MsRUFBdUQsV0FBdkQsRUFBb0UsT0FBcEUsRUFBNkUsUUFBN0UsRUFBdUYsT0FBdkYsRUFBZ0csTUFBaEcsRUFBd0csR0FBeEcsRUFBNkcsS0FBN0csRUFBb0g7QUFDbEgsWUFBSSxVQUFVLFVBQVUsVUFBVjtZQUNWLGFBQWEsVUFBVSxPQUFWLEdBQW9CLFNBQXBCO1lBQ2Isa0JBQWtCLFVBQVUsU0FBVixHQUFzQixPQUF0QjtZQUNsQixjQUFjLFVBQVUsUUFBVixHQUFxQixTQUFyQjtZQUNkLG1CQUFtQixVQUFVLFNBQVYsR0FBc0IsUUFBdEIsQ0FMMkY7QUFNbEgsbUJBQVksVUFBVSxZQUFWLEdBQXlCLGtCQUF6QixDQU5zRztBQU9sSCxtQkFBVyxFQUFFLFVBQVUsa0JBQVYsR0FBK0IsWUFBL0IsQ0FBRixDQVB1RztBQVFsSCxZQUFJLEVBQUUsVUFBVSxnQkFBVixDQUFGLEVBQStCO0FBQ2pDLHVCQUFXLEVBQUUsWUFBWSxhQUFaLENBQUYsQ0FEc0I7U0FBbkM7QUFHQSxZQUFJLFVBQVUsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixPQUFoQixFQUF5QixXQUF6QixFQUFzQyxVQUF0QyxFQUFrRCxnQkFBbEQsRUFBb0UsZUFBcEUsRUFBcUYsTUFBckYsRUFBNkYsR0FBN0YsRUFBa0csS0FBbEcsQ0FBVixDQVg4RztBQVlsSCxZQUFJLFNBQVMsU0FBUyxLQUFULENBQWUsU0FBZixFQUEwQixPQUExQixDQUFULENBWjhHO0FBYWxILFlBQUksV0FBVyxJQUFYLENBQUosRUFBc0I7QUFDcEIsb0JBQVEsTUFBUixFQUFnQixPQUFoQixFQURvQjtTQUF0QjtBQUdBLGVBQU8sV0FBUCxHQUFxQixXQUFyQixDQWhCa0g7QUFpQmxILGVBQU8sTUFBUCxDQWpCa0g7S0FBcEg7Ozs7QUFSSSx5QkFBYSxRQUFRLGVBQVI7QUFDYixzQkFBVSxRQUFRLFlBQVI7QUFDVix3QkFBWTtBQUNaLDRCQUFnQjtBQUNoQiwrQkFBbUI7QUFDbkIseUJBQWE7QUFDYiwyQkFBZTtBQUNmLGlDQUFxQjtBQW9CekIsbUJBQU8sT0FBUCxHQUFpQixvQkFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NyZWF0ZVJlY3VycnlXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgaXNMYXppYWJsZSA9IHJlcXVpcmUoJy4vX2lzTGF6aWFibGUnKSxcbiAgICBzZXREYXRhID0gcmVxdWlyZSgnLi9fc2V0RGF0YScpO1xudmFyIEJJTkRfRkxBRyA9IDEsXG4gICAgQklORF9LRVlfRkxBRyA9IDIsXG4gICAgQ1VSUllfQk9VTkRfRkxBRyA9IDQsXG4gICAgQ1VSUllfRkxBRyA9IDgsXG4gICAgUEFSVElBTF9GTEFHID0gMzIsXG4gICAgUEFSVElBTF9SSUdIVF9GTEFHID0gNjQ7XG5mdW5jdGlvbiBjcmVhdGVSZWN1cnJ5V3JhcHBlcihmdW5jLCBiaXRtYXNrLCB3cmFwRnVuYywgcGxhY2Vob2xkZXIsIHRoaXNBcmcsIHBhcnRpYWxzLCBob2xkZXJzLCBhcmdQb3MsIGFyeSwgYXJpdHkpIHtcbiAgdmFyIGlzQ3VycnkgPSBiaXRtYXNrICYgQ1VSUllfRkxBRyxcbiAgICAgIG5ld0hvbGRlcnMgPSBpc0N1cnJ5ID8gaG9sZGVycyA6IHVuZGVmaW5lZCxcbiAgICAgIG5ld0hvbGRlcnNSaWdodCA9IGlzQ3VycnkgPyB1bmRlZmluZWQgOiBob2xkZXJzLFxuICAgICAgbmV3UGFydGlhbHMgPSBpc0N1cnJ5ID8gcGFydGlhbHMgOiB1bmRlZmluZWQsXG4gICAgICBuZXdQYXJ0aWFsc1JpZ2h0ID0gaXNDdXJyeSA/IHVuZGVmaW5lZCA6IHBhcnRpYWxzO1xuICBiaXRtYXNrIHw9IChpc0N1cnJ5ID8gUEFSVElBTF9GTEFHIDogUEFSVElBTF9SSUdIVF9GTEFHKTtcbiAgYml0bWFzayAmPSB+KGlzQ3VycnkgPyBQQVJUSUFMX1JJR0hUX0ZMQUcgOiBQQVJUSUFMX0ZMQUcpO1xuICBpZiAoIShiaXRtYXNrICYgQ1VSUllfQk9VTkRfRkxBRykpIHtcbiAgICBiaXRtYXNrICY9IH4oQklORF9GTEFHIHwgQklORF9LRVlfRkxBRyk7XG4gIH1cbiAgdmFyIG5ld0RhdGEgPSBbZnVuYywgYml0bWFzaywgdGhpc0FyZywgbmV3UGFydGlhbHMsIG5ld0hvbGRlcnMsIG5ld1BhcnRpYWxzUmlnaHQsIG5ld0hvbGRlcnNSaWdodCwgYXJnUG9zLCBhcnksIGFyaXR5XTtcbiAgdmFyIHJlc3VsdCA9IHdyYXBGdW5jLmFwcGx5KHVuZGVmaW5lZCwgbmV3RGF0YSk7XG4gIGlmIChpc0xhemlhYmxlKGZ1bmMpKSB7XG4gICAgc2V0RGF0YShyZXN1bHQsIG5ld0RhdGEpO1xuICB9XG4gIHJlc3VsdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICByZXR1cm4gcmVzdWx0O1xufVxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSZWN1cnJ5V3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
