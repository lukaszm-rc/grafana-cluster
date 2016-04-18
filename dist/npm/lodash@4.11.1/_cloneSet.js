'use strict';

System.register([], function (_export, _context) {
  var addSetEntry, arrayReduce, setToArray;

  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor());
  }
  return {
    setters: [],
    execute: function () {
      addSetEntry = require('./_addSetEntry');
      arrayReduce = require('./_arrayReduce');
      setToArray = require('./_setToArray');
      module.exports = cloneSet;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19jbG9uZVNldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QixNQUF2QixFQUErQixTQUEvQixFQUEwQztBQUN4QyxRQUFJLFFBQVEsU0FBUyxVQUFVLFdBQVcsR0FBWCxDQUFWLEVBQTJCLElBQTNCLENBQVQsR0FBNEMsV0FBVyxHQUFYLENBQTVDLENBRDRCO0FBRXhDLFdBQU8sWUFBWSxLQUFaLEVBQW1CLFdBQW5CLEVBQWdDLElBQUksSUFBSSxXQUFKLEVBQXBDLENBQVAsQ0FGd0M7R0FBMUM7Ozs7QUFISSxvQkFBYyxRQUFRLGdCQUFSO0FBQ2Qsb0JBQWMsUUFBUSxnQkFBUjtBQUNkLG1CQUFhLFFBQVEsZUFBUjtBQUtqQixhQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvX2Nsb25lU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYWRkU2V0RW50cnkgPSByZXF1aXJlKCcuL19hZGRTZXRFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCB0cnVlKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU2V0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
