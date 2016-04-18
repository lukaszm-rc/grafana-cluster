'use strict';

System.register([], function (_export, _context) {
  var addMapEntry, arrayReduce, mapToArray;

  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor());
  }
  return {
    setters: [],
    execute: function () {
      addMapEntry = require('./_addMapEntry');
      arrayReduce = require('./_arrayReduce');
      mapToArray = require('./_mapToArray');
      module.exports = cloneMap;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZU1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QixNQUF2QixFQUErQixTQUEvQixFQUEwQztBQUN4QyxRQUFJLFFBQVEsU0FBUyxVQUFVLFdBQVcsR0FBWCxDQUFWLEVBQTJCLElBQTNCLENBQVQsR0FBNEMsV0FBVyxHQUFYLENBQTVDLENBRDRCO0FBRXhDLFdBQU8sWUFBWSxLQUFaLEVBQW1CLFdBQW5CLEVBQWdDLElBQUksSUFBSSxXQUFKLEVBQXBDLENBQVAsQ0FGd0M7R0FBMUM7Ozs7QUFISSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsb0JBQWMsUUFBUSxnQkFBUjtBQUNkLG1CQUFhLFFBQVEsZUFBUjtBQUtqQixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Nsb25lTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYWRkTWFwRW50cnkgPSByZXF1aXJlKCcuL19hZGRNYXBFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpO1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCB0cnVlKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lTWFwO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
