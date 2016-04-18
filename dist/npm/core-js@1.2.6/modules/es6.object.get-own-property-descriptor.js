'use strict';

System.register([], function (_export, _context) {
  var toIObject;
  return {
    setters: [],
    execute: function () {
      toIObject = require('./$.to-iobject');

      require('./$.object-sap')('getOwnPropertyDescriptor', function ($getOwnPropertyDescriptor) {
        return function getOwnPropertyDescriptor(it, key) {
          return $getOwnPropertyDescriptor(toIObject(it), key);
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGtCQUFZLFFBQVEsZ0JBQVI7O0FBQ2hCLGNBQVEsZ0JBQVIsRUFBMEIsMEJBQTFCLEVBQXNELFVBQVMseUJBQVQsRUFBb0M7QUFDeEYsZUFBTyxTQUFTLHdCQUFULENBQWtDLEVBQWxDLEVBQXNDLEdBQXRDLEVBQTJDO0FBQ2hELGlCQUFPLDBCQUEwQixVQUFVLEVBQVYsQ0FBMUIsRUFBeUMsR0FBekMsQ0FBUCxDQURnRDtTQUEzQyxDQURpRjtPQUFwQyxDQUF0RCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
