'use strict';

System.register([], function (_export, _context) {
  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      /* */
      (function (Buffer) {
        var constant = require('./constant'),
            root = require('./_root');
        var objectTypes = {
          'function': true,
          'object': true
        };
        var freeExports = objectTypes[typeof exports === 'undefined' ? 'undefined' : _typeof(exports)] && exports && !exports.nodeType ? exports : undefined;
        var freeModule = objectTypes[typeof module === 'undefined' ? 'undefined' : _typeof(module)] && module && !module.nodeType ? module : undefined;
        var moduleExports = freeModule && freeModule.exports === freeExports ? freeExports : undefined;
        var Buffer = moduleExports ? root.Buffer : undefined;
        var isBuffer = !Buffer ? constant(false) : function (value) {
          return value instanceof Buffer;
        };
        module.exports = isBuffer;
      })(require('buffer').Buffer);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2lzQnVmZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE1BQVQsRUFBaUI7QUFDaEIsWUFBSSxXQUFXLFFBQVEsWUFBUixDQUFYO1lBQ0EsT0FBTyxRQUFRLFNBQVIsQ0FBUCxDQUZZO0FBR2hCLFlBQUksY0FBYztBQUNoQixzQkFBWSxJQUFaO0FBQ0Esb0JBQVUsSUFBVjtTQUZFLENBSFk7QUFPaEIsWUFBSSxjQUFjLFdBQUMsUUFBbUIsd0RBQW5CLEtBQStCLE9BQS9CLElBQTBDLENBQUMsUUFBUSxRQUFSLEdBQW9CLE9BQWhFLEdBQTBFLFNBQTFFLENBUEY7QUFRaEIsWUFBSSxhQUFhLFdBQUMsUUFBbUIsc0RBQW5CLEtBQThCLE1BQTlCLElBQXdDLENBQUMsT0FBTyxRQUFQLEdBQW1CLE1BQTdELEdBQXNFLFNBQXRFLENBUkQ7QUFTaEIsWUFBSSxnQkFBZ0IsVUFBQyxJQUFjLFdBQVcsT0FBWCxLQUF1QixXQUF2QixHQUFzQyxXQUFyRCxHQUFtRSxTQUFuRSxDQVRKO0FBVWhCLFlBQUksU0FBUyxnQkFBZ0IsS0FBSyxNQUFMLEdBQWMsU0FBOUIsQ0FWRztBQVdoQixZQUFJLFdBQVcsQ0FBQyxNQUFELEdBQVUsU0FBUyxLQUFULENBQVYsR0FBNEIsVUFBUyxLQUFULEVBQWdCO0FBQ3pELGlCQUFPLGlCQUFpQixNQUFqQixDQURrRDtTQUFoQixDQVgzQjtBQWNoQixlQUFPLE9BQVAsR0FBaUIsUUFBakIsQ0FkZ0I7T0FBakIsQ0FBRCxDQWVHLFFBQVEsUUFBUixFQUFrQixNQUFsQixDQWZIIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2lzQnVmZmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24oQnVmZmVyKSB7XG4gIHZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG4gIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICAnZnVuY3Rpb24nOiB0cnVlLFxuICAgICdvYmplY3QnOiB0cnVlXG4gIH07XG4gIHZhciBmcmVlRXhwb3J0cyA9IChvYmplY3RUeXBlc1t0eXBlb2YgZXhwb3J0c10gJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSkgPyBleHBvcnRzIDogdW5kZWZpbmVkO1xuICB2YXIgZnJlZU1vZHVsZSA9IChvYmplY3RUeXBlc1t0eXBlb2YgbW9kdWxlXSAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSkgPyBtb2R1bGUgOiB1bmRlZmluZWQ7XG4gIHZhciBtb2R1bGVFeHBvcnRzID0gKGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cykgPyBmcmVlRXhwb3J0cyA6IHVuZGVmaW5lZDtcbiAgdmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcbiAgdmFyIGlzQnVmZmVyID0gIUJ1ZmZlciA/IGNvbnN0YW50KGZhbHNlKSA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQnVmZmVyO1xuICB9O1xuICBtb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xufSkocmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
