'use strict';

System.register([], function (_export, _context) {
  var arrayPush, getPrototype, getSymbols, getOwnPropertySymbols, getSymbolsIn;
  return {
    setters: [],
    execute: function () {
      arrayPush = require('./_arrayPush');
      getPrototype = require('./_getPrototype');
      getSymbols = require('./_getSymbols');
      getOwnPropertySymbols = Object.getOwnPropertySymbols;
      getSymbolsIn = !getOwnPropertySymbols ? getSymbols : function (object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };

      module.exports = getSymbolsIn;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19nZXRTeW1ib2xzSW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLHFCQUFlLFFBQVEsaUJBQVI7QUFDZixtQkFBYSxRQUFRLGVBQVI7QUFDYiw4QkFBd0IsT0FBTyxxQkFBUDtBQUN4QixxQkFBZSxDQUFDLHFCQUFELEdBQXlCLFVBQXpCLEdBQXNDLFVBQVMsTUFBVCxFQUFpQjtBQUN4RSxZQUFJLFNBQVMsRUFBVCxDQURvRTtBQUV4RSxlQUFPLE1BQVAsRUFBZTtBQUNiLG9CQUFVLE1BQVYsRUFBa0IsV0FBVyxNQUFYLENBQWxCLEVBRGE7QUFFYixtQkFBUyxhQUFhLE1BQWIsQ0FBVCxDQUZhO1NBQWY7QUFJQSxlQUFPLE1BQVAsQ0FOd0U7T0FBakI7O0FBUXpELGFBQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fZ2V0U3ltYm9sc0luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldFN5bWJvbHNJbiA9ICFnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBnZXRTeW1ib2xzIDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
