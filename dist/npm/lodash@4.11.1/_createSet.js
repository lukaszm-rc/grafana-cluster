'use strict';

System.register([], function (_export, _context) {
  var Set, noop, createSet;
  return {
    setters: [],
    execute: function () {
      Set = require('./_Set');
      noop = require('./noop');
      createSet = !(Set && new Set([1, 2]).size === 2) ? noop : function (values) {
        return new Set(values);
      };

      module.exports = createSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jcmVhdGVTZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFlBQU0sUUFBUSxRQUFSO0FBQ04sYUFBTyxRQUFRLFFBQVI7QUFDUCxrQkFBWSxFQUFFLE9BQU8sSUFBSSxHQUFKLENBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFSLEVBQWdCLElBQWhCLEtBQXlCLENBQXpCLENBQVQsR0FBdUMsSUFBdkMsR0FBOEMsVUFBUyxNQUFULEVBQWlCO0FBQzdFLGVBQU8sSUFBSSxHQUFKLENBQVEsTUFBUixDQUFQLENBRDZFO09BQWpCOztBQUc5RCxhQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2NyZWF0ZVNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKTtcbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiBuZXcgU2V0KFsxLCAyXSkuc2l6ZSA9PT0gMikgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
