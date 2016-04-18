'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (Buffer) {
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var result = new buffer.constructor(buffer.length);
          buffer.copy(result);
          return result;
        }
        module.exports = cloneBuffer;
      })(require('buffer').Buffer);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZUJ1ZmZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE1BQVQsRUFBaUI7QUFDaEIsaUJBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQztBQUNuQyxjQUFJLE1BQUosRUFBWTtBQUNWLG1CQUFPLE9BQU8sS0FBUCxFQUFQLENBRFU7V0FBWjtBQUdBLGNBQUksU0FBUyxJQUFJLE9BQU8sV0FBUCxDQUFtQixPQUFPLE1BQVAsQ0FBaEMsQ0FKK0I7QUFLbkMsaUJBQU8sSUFBUCxDQUFZLE1BQVosRUFMbUM7QUFNbkMsaUJBQU8sTUFBUCxDQU5tQztTQUFyQztBQVFBLGVBQU8sT0FBUCxHQUFpQixXQUFqQixDQVRnQjtPQUFqQixDQUFELENBVUcsUUFBUSxRQUFSLEVBQWtCLE1BQWxCLENBVkgiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Nsb25lQnVmZmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24oQnVmZmVyKSB7XG4gIGZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gICAgaWYgKGlzRGVlcCkge1xuICAgICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihidWZmZXIubGVuZ3RoKTtcbiAgICBidWZmZXIuY29weShyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZUJ1ZmZlcjtcbn0pKHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
