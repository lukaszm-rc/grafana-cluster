'use strict';

System.register([], function (_export, _context) {
  var MapCache, cachePush;

  function SetCache(values) {
    var index = -1,
        length = values ? values.length : 0;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.push(values[index]);
    }
  }
  return {
    setters: [],
    execute: function () {
      MapCache = require('./_MapCache');
      cachePush = require('./_cachePush');
      SetCache.prototype.push = cachePush;
      module.exports = SetCache;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19TZXRDYWNoZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLFdBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQjtBQUN4QixRQUFJLFFBQVEsQ0FBQyxDQUFEO1FBQ1IsU0FBUyxTQUFTLE9BQU8sTUFBUCxHQUFnQixDQUF6QixDQUZXO0FBR3hCLFNBQUssUUFBTCxHQUFnQixJQUFJLFFBQUosRUFBaEIsQ0FId0I7QUFJeEIsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFdBQUssSUFBTCxDQUFVLE9BQU8sS0FBUCxDQUFWLEVBRHVCO0tBQXpCO0dBSkY7Ozs7QUFGSSxpQkFBVyxRQUFRLGFBQVI7QUFDWCxrQkFBWSxRQUFRLGNBQVI7QUFTaEIsZUFBUyxTQUFULENBQW1CLElBQW5CLEdBQTBCLFNBQTFCO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL19TZXRDYWNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBjYWNoZVB1c2ggPSByZXF1aXJlKCcuL19jYWNoZVB1c2gnKTtcbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMucHVzaCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBjYWNoZVB1c2g7XG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
