'use strict';

System.register([], function (_export, _context) {
  var Hash, Map;

  function mapClear() {
    this.__data__ = {
      'hash': new Hash(),
      'map': Map ? new Map() : [],
      'string': new Hash()
    };
  }
  return {
    setters: [],
    execute: function () {
      Hash = require('./_Hash');
      Map = require('./_Map');
      module.exports = mapClear;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19tYXBDbGVhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsUUFBVCxHQUFvQjtBQUNsQixTQUFLLFFBQUwsR0FBZ0I7QUFDZCxjQUFRLElBQUksSUFBSixFQUFSO0FBQ0EsYUFBTyxNQUFNLElBQUksR0FBSixFQUFOLEdBQWdCLEVBQWhCO0FBQ1AsZ0JBQVUsSUFBSSxJQUFKLEVBQVY7S0FIRixDQURrQjtHQUFwQjs7OztBQUZJLGFBQU8sUUFBUSxTQUFSO0FBQ1AsWUFBTSxRQUFRLFFBQVI7QUFRVixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX21hcENsZWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcbmZ1bmN0aW9uIG1hcENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IE1hcCA/IG5ldyBNYXAgOiBbXSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2xlYXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
