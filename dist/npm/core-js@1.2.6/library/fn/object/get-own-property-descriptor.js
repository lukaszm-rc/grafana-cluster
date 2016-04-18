'use strict';

System.register([], function (_export, _context) {
  var $;
  return {
    setters: [],
    execute: function () {
      $ = require('../../modules/$');

      require('../../modules/es6.object.get-own-property-descriptor');
      module.exports = function getOwnPropertyDescriptor(it, key) {
        return $.getDesc(it, key);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksVUFBSSxRQUFRLGlCQUFSOztBQUNSLGNBQVEsc0RBQVI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsU0FBUyx3QkFBVCxDQUFrQyxFQUFsQyxFQUFzQyxHQUF0QyxFQUEyQztBQUMxRCxlQUFPLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYyxHQUFkLENBQVAsQ0FEMEQ7T0FBM0MiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJC5nZXREZXNjKGl0LCBrZXkpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
