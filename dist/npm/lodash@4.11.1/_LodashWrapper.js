'use strict';

System.register([], function (_export, _context) {
  var baseCreate, baseLodash;

  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }
  return {
    setters: [],
    execute: function () {
      baseCreate = require('./_baseCreate');
      baseLodash = require('./_baseLodash');
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19Mb2Rhc2hXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCLFFBQTlCLEVBQXdDO0FBQ3RDLFNBQUssV0FBTCxHQUFtQixLQUFuQixDQURzQztBQUV0QyxTQUFLLFdBQUwsR0FBbUIsRUFBbkIsQ0FGc0M7QUFHdEMsU0FBSyxTQUFMLEdBQWlCLENBQUMsQ0FBQyxRQUFELENBSG9CO0FBSXRDLFNBQUssU0FBTCxHQUFpQixDQUFqQixDQUpzQztBQUt0QyxTQUFLLFVBQUwsR0FBa0IsU0FBbEIsQ0FMc0M7R0FBeEM7Ozs7QUFGSSxtQkFBYSxRQUFRLGVBQVI7QUFDYixtQkFBYSxRQUFRLGVBQVI7QUFRakIsb0JBQWMsU0FBZCxHQUEwQixXQUFXLFdBQVcsU0FBWCxDQUFyQztBQUNBLG9CQUFjLFNBQWQsQ0FBd0IsV0FBeEIsR0FBc0MsYUFBdEM7QUFDQSxhQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX0xvZGFzaFdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGJhc2VMb2Rhc2ggPSByZXF1aXJlKCcuL19iYXNlTG9kYXNoJyk7XG5mdW5jdGlvbiBMb2Rhc2hXcmFwcGVyKHZhbHVlLCBjaGFpbkFsbCkge1xuICB0aGlzLl9fd3JhcHBlZF9fID0gdmFsdWU7XG4gIHRoaXMuX19hY3Rpb25zX18gPSBbXTtcbiAgdGhpcy5fX2NoYWluX18gPSAhIWNoYWluQWxsO1xuICB0aGlzLl9faW5kZXhfXyA9IDA7XG4gIHRoaXMuX192YWx1ZXNfXyA9IHVuZGVmaW5lZDtcbn1cbkxvZGFzaFdyYXBwZXIucHJvdG90eXBlID0gYmFzZUNyZWF0ZShiYXNlTG9kYXNoLnByb3RvdHlwZSk7XG5Mb2Rhc2hXcmFwcGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExvZGFzaFdyYXBwZXI7XG5tb2R1bGUuZXhwb3J0cyA9IExvZGFzaFdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
