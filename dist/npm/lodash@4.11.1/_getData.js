'use strict';

System.register([], function (_export, _context) {
  var metaMap, noop, getData;
  return {
    setters: [],
    execute: function () {
      metaMap = require('./_metaMap');
      noop = require('./noop');
      getData = !metaMap ? noop : function (func) {
        return metaMap.get(func);
      };

      module.exports = getData;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBVSxRQUFRLFlBQVI7QUFDVixhQUFPLFFBQVEsUUFBUjtBQUNQLGdCQUFVLENBQUMsT0FBRCxHQUFXLElBQVgsR0FBa0IsVUFBUyxJQUFULEVBQWU7QUFDN0MsZUFBTyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQVAsQ0FENkM7T0FBZjs7QUFHaEMsYUFBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19nZXREYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgbWV0YU1hcCA9IHJlcXVpcmUoJy4vX21ldGFNYXAnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyk7XG52YXIgZ2V0RGF0YSA9ICFtZXRhTWFwID8gbm9vcCA6IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgcmV0dXJuIG1ldGFNYXAuZ2V0KGZ1bmMpO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZ2V0RGF0YTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
