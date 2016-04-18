'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        var apply = require('./_apply'),
            arrayMap = require('./_arrayMap'),
            unzip = require('./unzip');
        function unzipWith(array, iteratee) {
          if (!(array && array.length)) {
            return [];
          }
          var result = unzip(array);
          if (iteratee == null) {
            return result;
          }
          return arrayMap(result, function (group) {
            return apply(iteratee, undefined, group);
          });
        }
        module.exports = unzipWith;
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3VuemlwV2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE9BQVQsRUFBa0I7QUFDakIsWUFBSSxRQUFRLFFBQVEsVUFBUixDQUFSO1lBQ0EsV0FBVyxRQUFRLGFBQVIsQ0FBWDtZQUNBLFFBQVEsUUFBUSxTQUFSLENBQVIsQ0FIYTtBQUlqQixpQkFBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCLFFBQTFCLEVBQW9DO0FBQ2xDLGNBQUksRUFBRSxTQUFTLE1BQU0sTUFBTixDQUFYLEVBQTBCO0FBQzVCLG1CQUFPLEVBQVAsQ0FENEI7V0FBOUI7QUFHQSxjQUFJLFNBQVMsTUFBTSxLQUFOLENBQVQsQ0FKOEI7QUFLbEMsY0FBSSxZQUFZLElBQVosRUFBa0I7QUFDcEIsbUJBQU8sTUFBUCxDQURvQjtXQUF0QjtBQUdBLGlCQUFPLFNBQVMsTUFBVCxFQUFpQixVQUFTLEtBQVQsRUFBZ0I7QUFDdEMsbUJBQU8sTUFBTSxRQUFOLEVBQWdCLFNBQWhCLEVBQTJCLEtBQTNCLENBQVAsQ0FEc0M7V0FBaEIsQ0FBeEIsQ0FSa0M7U0FBcEM7QUFZQSxlQUFPLE9BQVAsR0FBaUIsU0FBakIsQ0FoQmlCO09BQWxCLENBQUQsQ0FpQkcsUUFBUSxTQUFSLENBakJIIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3VuemlwV2l0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgdmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICAgIHVuemlwID0gcmVxdWlyZSgnLi91bnppcCcpO1xuICBmdW5jdGlvbiB1bnppcFdpdGgoYXJyYXksIGl0ZXJhdGVlKSB7XG4gICAgaWYgKCEoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gdW56aXAoYXJyYXkpO1xuICAgIGlmIChpdGVyYXRlZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlNYXAocmVzdWx0LCBmdW5jdGlvbihncm91cCkge1xuICAgICAgcmV0dXJuIGFwcGx5KGl0ZXJhdGVlLCB1bmRlZmluZWQsIGdyb3VwKTtcbiAgICB9KTtcbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IHVuemlwV2l0aDtcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
