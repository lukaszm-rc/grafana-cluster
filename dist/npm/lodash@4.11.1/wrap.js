'use strict';

System.register([], function (_export, _context) {
  var identity, partial;

  function wrap(value, wrapper) {
    wrapper = wrapper == null ? identity : wrapper;
    return partial(wrapper, value);
  }
  return {
    setters: [],
    execute: function () {
      identity = require('./identity');
      partial = require('./partial');
      module.exports = wrap;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3dyYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxXQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCLE9BQXJCLEVBQThCO0FBQzVCLGNBQVUsV0FBVyxJQUFYLEdBQWtCLFFBQWxCLEdBQTZCLE9BQTdCLENBRGtCO0FBRTVCLFdBQU8sUUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQVAsQ0FGNEI7R0FBOUI7Ozs7QUFGSSxpQkFBVyxRQUFRLFlBQVI7QUFDWCxnQkFBVSxRQUFRLFdBQVI7QUFLZCxhQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvd3JhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIHBhcnRpYWwgPSByZXF1aXJlKCcuL3BhcnRpYWwnKTtcbmZ1bmN0aW9uIHdyYXAodmFsdWUsIHdyYXBwZXIpIHtcbiAgd3JhcHBlciA9IHdyYXBwZXIgPT0gbnVsbCA/IGlkZW50aXR5IDogd3JhcHBlcjtcbiAgcmV0dXJuIHBhcnRpYWwod3JhcHBlciwgdmFsdWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB3cmFwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
