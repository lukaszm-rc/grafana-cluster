'use strict';

System.register([], function (_export, _context) {
  var baseDelay, rest, defer;
  return {
    setters: [],
    execute: function () {
      baseDelay = require('./_baseDelay');
      rest = require('./rest');
      defer = rest(function (func, args) {
        return baseDelay(func, 1, args);
      });

      module.exports = defer;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RlZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxrQkFBWSxRQUFRLGNBQVI7QUFDWixhQUFPLFFBQVEsUUFBUjtBQUNQLGNBQVEsS0FBSyxVQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCO0FBQ3BDLGVBQU8sVUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLElBQW5CLENBQVAsQ0FEb0M7T0FBckI7O0FBR2pCLGFBQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9kZWZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGJhc2VEZWxheSA9IHJlcXVpcmUoJy4vX2Jhc2VEZWxheScpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBkZWZlciA9IHJlc3QoZnVuY3Rpb24oZnVuYywgYXJncykge1xuICByZXR1cm4gYmFzZURlbGF5KGZ1bmMsIDEsIGFyZ3MpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGRlZmVyO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
