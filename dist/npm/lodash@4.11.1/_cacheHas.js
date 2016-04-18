'use strict';

System.register([], function (_export, _context) {
  var isKeyable, HASH_UNDEFINED;

  function cacheHas(cache, value) {
    var map = cache.__data__;
    if (isKeyable(value)) {
      var data = map.__data__,
          hash = typeof value == 'string' ? data.string : data.hash;
      return hash[value] === HASH_UNDEFINED;
    }
    return map.has(value);
  }
  return {
    setters: [],
    execute: function () {
      isKeyable = require('./_isKeyable');
      HASH_UNDEFINED = '__lodash_hash_undefined__';
      module.exports = cacheHas;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jYWNoZUhhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQztBQUM5QixRQUFJLE1BQU0sTUFBTSxRQUFOLENBRG9CO0FBRTlCLFFBQUksVUFBVSxLQUFWLENBQUosRUFBc0I7QUFDcEIsVUFBSSxPQUFPLElBQUksUUFBSjtVQUNQLE9BQU8sT0FBTyxLQUFQLElBQWdCLFFBQWhCLEdBQTJCLEtBQUssTUFBTCxHQUFjLEtBQUssSUFBTCxDQUZoQztBQUdwQixhQUFPLEtBQUssS0FBTCxNQUFnQixjQUFoQixDQUhhO0tBQXRCO0FBS0EsV0FBTyxJQUFJLEdBQUosQ0FBUSxLQUFSLENBQVAsQ0FQOEI7R0FBaEM7Ozs7QUFGSSxrQkFBWSxRQUFRLGNBQVI7QUFDWix1QkFBaUI7QUFVckIsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19jYWNoZUhhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIHZhbHVlKSB7XG4gIHZhciBtYXAgPSBjYWNoZS5fX2RhdGFfXztcbiAgaWYgKGlzS2V5YWJsZSh2YWx1ZSkpIHtcbiAgICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXyxcbiAgICAgICAgaGFzaCA9IHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyA/IGRhdGEuc3RyaW5nIDogZGF0YS5oYXNoO1xuICAgIHJldHVybiBoYXNoW3ZhbHVlXSA9PT0gSEFTSF9VTkRFRklORUQ7XG4gIH1cbiAgcmV0dXJuIG1hcC5oYXModmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
