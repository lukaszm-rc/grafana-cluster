"use strict";
/* */
"format cjs";

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      if (!Array.prototype.forEach) {

        Array.prototype.forEach = function (callback, thisArg) {

          var T, k;

          if (this == null) {
            throw new TypeError(' this is null or not defined');
          }

          // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
          var O = Object(this);

          // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
          // 3. Let len be ToUint32(lenValue).
          var len = O.length >>> 0;

          // 4. If IsCallable(callback) is false, throw a TypeError exception.
          // See: http://es5.github.com/#x9.11
          if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
          }

          // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 1) {
            T = thisArg;
          }

          // 6. Let k be 0
          k = 0;

          // 7. Repeat, while k < len
          while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

              // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
              kValue = O[k];

              // ii. Call the Call internal method of callback with T as the this value and
              // argument list containing kValue, k, and O.
              callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
          }
          // 8. return undefined
        };
      }

      if (!Array.isArray) {
        Array.isArray = function (arg) {
          return Object.prototype.toString.call(arg) === '[object Array]';
        };
      }

      if (!Array.prototype.map) {

        Array.prototype.map = function (callback, thisArg) {

          var T, A, k;

          if (this == null) {
            throw new TypeError(' this is null or not defined');
          }

          // 1. Let O be the result of calling ToObject passing the |this|
          //    value as the argument.
          var O = Object(this);

          // 2. Let lenValue be the result of calling the Get internal
          //    method of O with the argument "length".
          // 3. Let len be ToUint32(lenValue).
          var len = O.length >>> 0;

          // 4. If IsCallable(callback) is false, throw a TypeError exception.
          // See: http://es5.github.com/#x9.11
          if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
          }

          // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 1) {
            T = thisArg;
          }

          // 6. Let A be a new array created as if by the expression new Array(len)
          //    where Array is the standard built-in constructor with that name and
          //    len is the value of len.
          A = new Array(len);

          // 7. Let k be 0
          k = 0;

          // 8. Repeat, while k < len
          while (k < len) {

            var kValue, mappedValue;

            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty internal
            //    method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

              // i. Let kValue be the result of calling the Get internal
              //    method of O with argument Pk.
              kValue = O[k];

              // ii. Let mappedValue be the result of calling the Call internal
              //     method of callback with T as the this value and argument
              //     list containing kValue, k, and O.
              mappedValue = callback.call(T, kValue, k, O);

              // iii. Call the DefineOwnProperty internal method of A with arguments
              // Pk, Property Descriptor
              // { Value: mappedValue,
              //   Writable: true,
              //   Enumerable: true,
              //   Configurable: true },
              // and false.

              // In browsers that support Object.defineProperty, use the following:
              // Object.defineProperty(A, k, {
              //   value: mappedValue,
              //   writable: true,
              //   enumerable: true,
              //   configurable: true
              // });

              // For best browser support, use the following:
              A[k] = mappedValue;
            }
            // d. Increase k by 1.
            k++;
          }

          // 9. return A
          return A;
        };
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvdGVzdC9fcG9seWZpbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7Ozs7O0FBQ0EsVUFBSSxDQUFDLE1BQU0sU0FBTixDQUFnQixPQUFoQixFQUF5Qjs7QUFFNUIsY0FBTSxTQUFOLENBQWdCLE9BQWhCLEdBQTBCLFVBQVMsUUFBVCxFQUFtQixPQUFuQixFQUE0Qjs7QUFFcEQsY0FBSSxDQUFKLEVBQU8sQ0FBUCxDQUZvRDs7QUFJcEQsY0FBSSxRQUFRLElBQVIsRUFBYztBQUNoQixrQkFBTSxJQUFJLFNBQUosQ0FBYyw4QkFBZCxDQUFOLENBRGdCO1dBQWxCOzs7QUFKb0QsY0FTaEQsSUFBSSxPQUFPLElBQVAsQ0FBSjs7OztBQVRnRCxjQWFoRCxNQUFNLEVBQUUsTUFBRixLQUFhLENBQWI7Ozs7QUFiMEMsY0FpQmhELE9BQU8sUUFBUCxLQUFvQixVQUFwQixFQUFnQztBQUNsQyxrQkFBTSxJQUFJLFNBQUosQ0FBYyxXQUFXLG9CQUFYLENBQXBCLENBRGtDO1dBQXBDOzs7QUFqQm9ELGNBc0JoRCxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsRUFBc0I7QUFDeEIsZ0JBQUksT0FBSixDQUR3QjtXQUExQjs7O0FBdEJvRCxXQTJCcEQsR0FBSSxDQUFKOzs7QUEzQm9ELGlCQThCN0MsSUFBSSxHQUFKLEVBQVM7O0FBRWQsZ0JBQUksTUFBSjs7Ozs7OztBQUZjLGdCQVNWLEtBQUssQ0FBTCxFQUFROzs7QUFHVix1QkFBUyxFQUFFLENBQUYsQ0FBVDs7OztBQUhVLHNCQU9WLENBQVMsSUFBVCxDQUFjLENBQWQsRUFBaUIsTUFBakIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFQVTthQUFaOztBQVRjLGFBbUJkLEdBbkJjO1dBQWhCOztBQTlCb0QsU0FBNUIsQ0FGRTtPQUE5Qjs7QUF5REEsVUFBSSxDQUFDLE1BQU0sT0FBTixFQUFlO0FBQ2xCLGNBQU0sT0FBTixHQUFnQixVQUFTLEdBQVQsRUFBYztBQUM1QixpQkFBTyxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsR0FBL0IsTUFBd0MsZ0JBQXhDLENBRHFCO1NBQWQsQ0FERTtPQUFwQjs7QUFNQSxVQUFJLENBQUMsTUFBTSxTQUFOLENBQWdCLEdBQWhCLEVBQXFCOztBQUV4QixjQUFNLFNBQU4sQ0FBZ0IsR0FBaEIsR0FBc0IsVUFBUyxRQUFULEVBQW1CLE9BQW5CLEVBQTRCOztBQUVoRCxjQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUZnRDs7QUFJaEQsY0FBSSxRQUFRLElBQVIsRUFBYztBQUNoQixrQkFBTSxJQUFJLFNBQUosQ0FBYyw4QkFBZCxDQUFOLENBRGdCO1dBQWxCOzs7O0FBSmdELGNBVTVDLElBQUksT0FBTyxJQUFQLENBQUo7Ozs7O0FBVjRDLGNBZTVDLE1BQU0sRUFBRSxNQUFGLEtBQWEsQ0FBYjs7OztBQWZzQyxjQW1CNUMsT0FBTyxRQUFQLEtBQW9CLFVBQXBCLEVBQWdDO0FBQ2xDLGtCQUFNLElBQUksU0FBSixDQUFjLFdBQVcsb0JBQVgsQ0FBcEIsQ0FEa0M7V0FBcEM7OztBQW5CZ0QsY0F3QjVDLFVBQVUsTUFBVixHQUFtQixDQUFuQixFQUFzQjtBQUN4QixnQkFBSSxPQUFKLENBRHdCO1dBQTFCOzs7OztBQXhCZ0QsV0ErQmhELEdBQUksSUFBSSxLQUFKLENBQVUsR0FBVixDQUFKOzs7QUEvQmdELFdBa0NoRCxHQUFJLENBQUo7OztBQWxDZ0QsaUJBcUN6QyxJQUFJLEdBQUosRUFBUzs7QUFFZCxnQkFBSSxNQUFKLEVBQVksV0FBWjs7Ozs7Ozs7QUFGYyxnQkFVVixLQUFLLENBQUwsRUFBUTs7OztBQUlWLHVCQUFTLEVBQUUsQ0FBRixDQUFUOzs7OztBQUpVLHlCQVNWLEdBQWMsU0FBUyxJQUFULENBQWMsQ0FBZCxFQUFpQixNQUFqQixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVFUsZUE0QlYsQ0FBRSxDQUFGLElBQU8sV0FBUCxDQTVCVTthQUFaOztBQVZjLGFBeUNkLEdBekNjO1dBQWhCOzs7QUFyQ2dELGlCQWtGekMsQ0FBUCxDQWxGZ0Q7U0FBNUIsQ0FGRTtPQUExQiIsImZpbGUiOiJucG0vYnVmZmVyQDMuNi4wL3Rlc3QvX3BvbHlmaWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5cImZvcm1hdCBjanNcIjtcbmlmICghQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcblxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG5cbiAgICB2YXIgVCwgaztcblxuICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJyB0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICAvLyAxLiBMZXQgTyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgVG9PYmplY3QgcGFzc2luZyB0aGUgfHRoaXN8IHZhbHVlIGFzIHRoZSBhcmd1bWVudC5cbiAgICB2YXIgTyA9IE9iamVjdCh0aGlzKTtcblxuICAgIC8vIDIuIExldCBsZW5WYWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldCBpbnRlcm5hbCBtZXRob2Qgb2YgTyB3aXRoIHRoZSBhcmd1bWVudCBcImxlbmd0aFwiLlxuICAgIC8vIDMuIExldCBsZW4gYmUgVG9VaW50MzIobGVuVmFsdWUpLlxuICAgIHZhciBsZW4gPSBPLmxlbmd0aCA+Pj4gMDtcblxuICAgIC8vIDQuIElmIElzQ2FsbGFibGUoY2FsbGJhY2spIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgLy8gU2VlOiBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3g5LjExXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIC8vIDUuIElmIHRoaXNBcmcgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSB0aGlzQXJnOyBlbHNlIGxldCBUIGJlIHVuZGVmaW5lZC5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIFQgPSB0aGlzQXJnO1xuICAgIH1cblxuICAgIC8vIDYuIExldCBrIGJlIDBcbiAgICBrID0gMDtcblxuICAgIC8vIDcuIFJlcGVhdCwgd2hpbGUgayA8IGxlblxuICAgIHdoaWxlIChrIDwgbGVuKSB7XG5cbiAgICAgIHZhciBrVmFsdWU7XG5cbiAgICAgIC8vIGEuIExldCBQayBiZSBUb1N0cmluZyhrKS5cbiAgICAgIC8vICAgVGhpcyBpcyBpbXBsaWNpdCBmb3IgTEhTIG9wZXJhbmRzIG9mIHRoZSBpbiBvcGVyYXRvclxuICAgICAgLy8gYi4gTGV0IGtQcmVzZW50IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgSGFzUHJvcGVydHkgaW50ZXJuYWwgbWV0aG9kIG9mIE8gd2l0aCBhcmd1bWVudCBQay5cbiAgICAgIC8vICAgVGhpcyBzdGVwIGNhbiBiZSBjb21iaW5lZCB3aXRoIGNcbiAgICAgIC8vIGMuIElmIGtQcmVzZW50IGlzIHRydWUsIHRoZW5cbiAgICAgIGlmIChrIGluIE8pIHtcblxuICAgICAgICAvLyBpLiBMZXQga1ZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0IGludGVybmFsIG1ldGhvZCBvZiBPIHdpdGggYXJndW1lbnQgUGsuXG4gICAgICAgIGtWYWx1ZSA9IE9ba107XG5cbiAgICAgICAgLy8gaWkuIENhbGwgdGhlIENhbGwgaW50ZXJuYWwgbWV0aG9kIG9mIGNhbGxiYWNrIHdpdGggVCBhcyB0aGUgdGhpcyB2YWx1ZSBhbmRcbiAgICAgICAgLy8gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIGtWYWx1ZSwgaywgYW5kIE8uXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoVCwga1ZhbHVlLCBrLCBPKTtcbiAgICAgIH1cbiAgICAgIC8vIGQuIEluY3JlYXNlIGsgYnkgMS5cbiAgICAgIGsrKztcbiAgICB9XG4gICAgLy8gOC4gcmV0dXJuIHVuZGVmaW5lZFxuICB9O1xufVxuXG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgQXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcbn1cblxuaWYgKCFBcnJheS5wcm90b3R5cGUubWFwKSB7XG5cbiAgQXJyYXkucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG5cbiAgICB2YXIgVCwgQSwgaztcblxuICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJyB0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICAvLyAxLiBMZXQgTyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgVG9PYmplY3QgcGFzc2luZyB0aGUgfHRoaXN8XG4gICAgLy8gICAgdmFsdWUgYXMgdGhlIGFyZ3VtZW50LlxuICAgIHZhciBPID0gT2JqZWN0KHRoaXMpO1xuXG4gICAgLy8gMi4gTGV0IGxlblZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0IGludGVybmFsXG4gICAgLy8gICAgbWV0aG9kIG9mIE8gd2l0aCB0aGUgYXJndW1lbnQgXCJsZW5ndGhcIi5cbiAgICAvLyAzLiBMZXQgbGVuIGJlIFRvVWludDMyKGxlblZhbHVlKS5cbiAgICB2YXIgbGVuID0gTy5sZW5ndGggPj4+IDA7XG5cbiAgICAvLyA0LiBJZiBJc0NhbGxhYmxlKGNhbGxiYWNrKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgIC8vIFNlZTogaHR0cDovL2VzNS5naXRodWIuY29tLyN4OS4xMVxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgLy8gNS4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgVCA9IHRoaXNBcmc7XG4gICAgfVxuXG4gICAgLy8gNi4gTGV0IEEgYmUgYSBuZXcgYXJyYXkgY3JlYXRlZCBhcyBpZiBieSB0aGUgZXhwcmVzc2lvbiBuZXcgQXJyYXkobGVuKVxuICAgIC8vICAgIHdoZXJlIEFycmF5IGlzIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBjb25zdHJ1Y3RvciB3aXRoIHRoYXQgbmFtZSBhbmRcbiAgICAvLyAgICBsZW4gaXMgdGhlIHZhbHVlIG9mIGxlbi5cbiAgICBBID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICAvLyA3LiBMZXQgayBiZSAwXG4gICAgayA9IDA7XG5cbiAgICAvLyA4LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW5cbiAgICB3aGlsZSAoayA8IGxlbikge1xuXG4gICAgICB2YXIga1ZhbHVlLCBtYXBwZWRWYWx1ZTtcblxuICAgICAgLy8gYS4gTGV0IFBrIGJlIFRvU3RyaW5nKGspLlxuICAgICAgLy8gICBUaGlzIGlzIGltcGxpY2l0IGZvciBMSFMgb3BlcmFuZHMgb2YgdGhlIGluIG9wZXJhdG9yXG4gICAgICAvLyBiLiBMZXQga1ByZXNlbnQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBIYXNQcm9wZXJ0eSBpbnRlcm5hbFxuICAgICAgLy8gICAgbWV0aG9kIG9mIE8gd2l0aCBhcmd1bWVudCBQay5cbiAgICAgIC8vICAgVGhpcyBzdGVwIGNhbiBiZSBjb21iaW5lZCB3aXRoIGNcbiAgICAgIC8vIGMuIElmIGtQcmVzZW50IGlzIHRydWUsIHRoZW5cbiAgICAgIGlmIChrIGluIE8pIHtcblxuICAgICAgICAvLyBpLiBMZXQga1ZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0IGludGVybmFsXG4gICAgICAgIC8vICAgIG1ldGhvZCBvZiBPIHdpdGggYXJndW1lbnQgUGsuXG4gICAgICAgIGtWYWx1ZSA9IE9ba107XG5cbiAgICAgICAgLy8gaWkuIExldCBtYXBwZWRWYWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIENhbGwgaW50ZXJuYWxcbiAgICAgICAgLy8gICAgIG1ldGhvZCBvZiBjYWxsYmFjayB3aXRoIFQgYXMgdGhlIHRoaXMgdmFsdWUgYW5kIGFyZ3VtZW50XG4gICAgICAgIC8vICAgICBsaXN0IGNvbnRhaW5pbmcga1ZhbHVlLCBrLCBhbmQgTy5cbiAgICAgICAgbWFwcGVkVmFsdWUgPSBjYWxsYmFjay5jYWxsKFQsIGtWYWx1ZSwgaywgTyk7XG5cbiAgICAgICAgLy8gaWlpLiBDYWxsIHRoZSBEZWZpbmVPd25Qcm9wZXJ0eSBpbnRlcm5hbCBtZXRob2Qgb2YgQSB3aXRoIGFyZ3VtZW50c1xuICAgICAgICAvLyBQaywgUHJvcGVydHkgRGVzY3JpcHRvclxuICAgICAgICAvLyB7IFZhbHVlOiBtYXBwZWRWYWx1ZSxcbiAgICAgICAgLy8gICBXcml0YWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gICBFbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvLyAgIENvbmZpZ3VyYWJsZTogdHJ1ZSB9LFxuICAgICAgICAvLyBhbmQgZmFsc2UuXG5cbiAgICAgICAgLy8gSW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgdXNlIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgIC8vIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBLCBrLCB7XG4gICAgICAgIC8vICAgdmFsdWU6IG1hcHBlZFZhbHVlLFxuICAgICAgICAvLyAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAvLyAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8vICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIEZvciBiZXN0IGJyb3dzZXIgc3VwcG9ydCwgdXNlIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgIEFba10gPSBtYXBwZWRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGQuIEluY3JlYXNlIGsgYnkgMS5cbiAgICAgIGsrKztcbiAgICB9XG5cbiAgICAvLyA5LiByZXR1cm4gQVxuICAgIHJldHVybiBBO1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
