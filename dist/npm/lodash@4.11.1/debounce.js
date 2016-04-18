'use strict';

System.register([], function (_export, _context) {
  var isObject, now, toNumber, FUNC_ERROR_TEXT, nativeMax, nativeMin;

  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime = 0,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;
      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;
      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;
      return !lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      clearTimeout(timerId);
      timerId = undefined;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }
    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastCallTime = lastInvokeTime = 0;
      lastArgs = lastThis = timerId = undefined;
    }
    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  return {
    setters: [],
    execute: function () {
      isObject = require('./isObject');
      now = require('./now');
      toNumber = require('./toNumber');
      FUNC_ERROR_TEXT = 'Expected a function';
      nativeMax = Math.max;
      nativeMin = Math.min;
      module.exports = debounce;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RlYm91bmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsV0FBUyxRQUFULENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE9BQTlCLEVBQXVDO0FBQ3JDLFFBQUksUUFBSjtRQUNJLFFBREo7UUFFSSxPQUZKO1FBR0ksTUFISjtRQUlJLE9BSko7UUFLSSxlQUFlLENBQWY7UUFDQSxpQkFBaUIsQ0FBakI7UUFDQSxVQUFVLEtBQVY7UUFDQSxTQUFTLEtBQVQ7UUFDQSxXQUFXLElBQVgsQ0FWaUM7QUFXckMsUUFBSSxPQUFPLElBQVAsSUFBZSxVQUFmLEVBQTJCO0FBQzdCLFlBQU0sSUFBSSxTQUFKLENBQWMsZUFBZCxDQUFOLENBRDZCO0tBQS9CO0FBR0EsV0FBTyxTQUFTLElBQVQsS0FBa0IsQ0FBbEIsQ0FkOEI7QUFlckMsUUFBSSxTQUFTLE9BQVQsQ0FBSixFQUF1QjtBQUNyQixnQkFBVSxDQUFDLENBQUMsUUFBUSxPQUFSLENBRFM7QUFFckIsZUFBUyxhQUFhLE9BQWIsQ0FGWTtBQUdyQixnQkFBVSxTQUFTLFVBQVUsU0FBUyxRQUFRLE9BQVIsQ0FBVCxJQUE2QixDQUE3QixFQUFnQyxJQUExQyxDQUFULEdBQTJELE9BQTNELENBSFc7QUFJckIsaUJBQVcsY0FBYyxPQUFkLEdBQXdCLENBQUMsQ0FBQyxRQUFRLFFBQVIsR0FBbUIsUUFBN0MsQ0FKVTtLQUF2QjtBQU1BLGFBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtBQUN4QixVQUFJLE9BQU8sUUFBUDtVQUNBLFVBQVUsUUFBVixDQUZvQjtBQUd4QixpQkFBVyxXQUFXLFNBQVgsQ0FIYTtBQUl4Qix1QkFBaUIsSUFBakIsQ0FKd0I7QUFLeEIsZUFBUyxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCLENBQVQsQ0FMd0I7QUFNeEIsYUFBTyxNQUFQLENBTndCO0tBQTFCO0FBUUEsYUFBUyxXQUFULENBQXFCLElBQXJCLEVBQTJC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QixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9kZWJvdW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lID0gMCxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuICAgIHJldHVybiAoIWxhc3RDYWxsVGltZSB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHwgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RDYWxsVGltZSA9IGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
