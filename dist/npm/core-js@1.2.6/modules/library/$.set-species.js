/* */
'use strict';

System.register([], function (_export, _context) {
  var core, $, DESCRIPTORS, SPECIES;
  return {
    setters: [],
    execute: function () {
      core = require('./$.core');
      $ = require('./$');
      DESCRIPTORS = require('./$.descriptors');
      SPECIES = require('./$.wks')('species');


      module.exports = function (KEY) {
        var C = core[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvbGlicmFyeS8kLnNldC1zcGVjaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGFBQWMsUUFBUSxVQUFSO0FBQ2QsVUFBYyxRQUFRLEtBQVI7QUFDZCxvQkFBYyxRQUFRLGlCQUFSO0FBQ2QsZ0JBQWMsUUFBUSxTQUFSLEVBQW1CLFNBQW5COzs7QUFFbEIsYUFBTyxPQUFQLEdBQWlCLFVBQVMsR0FBVCxFQUFhO0FBQzVCLFlBQUksSUFBSSxLQUFLLEdBQUwsQ0FBSixDQUR3QjtBQUU1QixZQUFHLGVBQWUsQ0FBZixJQUFvQixDQUFDLEVBQUUsT0FBRixDQUFELEVBQVksRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0I7QUFDdkQsd0JBQWMsSUFBZDtBQUNBLGVBQUssZUFBVTtBQUFFLG1CQUFPLElBQVAsQ0FBRjtXQUFWO1NBRjRCLEVBQW5DO09BRmUiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9saWJyYXJ5LyQuc2V0LXNwZWNpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBjb3JlW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pJC5zZXREZXNjKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
