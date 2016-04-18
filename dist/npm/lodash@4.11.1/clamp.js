'use strict';

System.register([], function (_export, _context) {
  var baseClamp, toNumber;

  function clamp(number, lower, upper) {
    if (upper === undefined) {
      upper = lower;
      lower = undefined;
    }
    if (upper !== undefined) {
      upper = toNumber(upper);
      upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
      lower = toNumber(lower);
      lower = lower === lower ? lower : 0;
    }
    return baseClamp(toNumber(number), lower, upper);
  }
  return {
    setters: [],
    execute: function () {
      baseClamp = require('./_baseClamp');
      toNumber = require('./toNumber');
      module.exports = clamp;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NsYW1wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixLQUF2QixFQUE4QixLQUE5QixFQUFxQztBQUNuQyxRQUFJLFVBQVUsU0FBVixFQUFxQjtBQUN2QixjQUFRLEtBQVIsQ0FEdUI7QUFFdkIsY0FBUSxTQUFSLENBRnVCO0tBQXpCO0FBSUEsUUFBSSxVQUFVLFNBQVYsRUFBcUI7QUFDdkIsY0FBUSxTQUFTLEtBQVQsQ0FBUixDQUR1QjtBQUV2QixjQUFRLFVBQVUsS0FBVixHQUFrQixLQUFsQixHQUEwQixDQUExQixDQUZlO0tBQXpCO0FBSUEsUUFBSSxVQUFVLFNBQVYsRUFBcUI7QUFDdkIsY0FBUSxTQUFTLEtBQVQsQ0FBUixDQUR1QjtBQUV2QixjQUFRLFVBQVUsS0FBVixHQUFrQixLQUFsQixHQUEwQixDQUExQixDQUZlO0tBQXpCO0FBSUEsV0FBTyxVQUFVLFNBQVMsTUFBVCxDQUFWLEVBQTRCLEtBQTVCLEVBQW1DLEtBQW5DLENBQVAsQ0FibUM7R0FBckM7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixpQkFBVyxRQUFRLFlBQVI7QUFnQmYsYUFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2NsYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUNsYW1wID0gcmVxdWlyZSgnLi9fYmFzZUNsYW1wJyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIGxvd2VyLCB1cHBlcikge1xuICBpZiAodXBwZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHVwcGVyID0gbG93ZXI7XG4gICAgbG93ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHVwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICB1cHBlciA9IHRvTnVtYmVyKHVwcGVyKTtcbiAgICB1cHBlciA9IHVwcGVyID09PSB1cHBlciA/IHVwcGVyIDogMDtcbiAgfVxuICBpZiAobG93ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGxvd2VyID0gdG9OdW1iZXIobG93ZXIpO1xuICAgIGxvd2VyID0gbG93ZXIgPT09IGxvd2VyID8gbG93ZXIgOiAwO1xuICB9XG4gIHJldHVybiBiYXNlQ2xhbXAodG9OdW1iZXIobnVtYmVyKSwgbG93ZXIsIHVwcGVyKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gY2xhbXA7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
