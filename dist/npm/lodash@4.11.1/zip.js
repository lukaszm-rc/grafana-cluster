'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var rest = require('./rest'),
            unzip = require('./unzip');
        var zip = rest(unzip);
        module.exports = zip;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3ppcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE9BQVQsRUFBa0I7QUFDakIsWUFBSSxPQUFPLFFBQVEsUUFBUixDQUFQO1lBQ0EsUUFBUSxRQUFRLFNBQVIsQ0FBUixDQUZhO0FBR2pCLFlBQUksTUFBTSxLQUFLLEtBQUwsQ0FBTixDQUhhO0FBSWpCLGVBQU8sT0FBUCxHQUFpQixHQUFqQixDQUppQjtPQUFsQixDQUFELENBS0csUUFBUSxTQUFSLENBTEgiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvemlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICB2YXIgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpLFxuICAgICAgdW56aXAgPSByZXF1aXJlKCcuL3VuemlwJyk7XG4gIHZhciB6aXAgPSByZXN0KHVuemlwKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSB6aXA7XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
