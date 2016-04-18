'use strict';

System.register([], function (_export, _context) {
  var getAllKeysIn;

  function basePickBy(object, predicate) {
    var index = -1,
        props = getAllKeysIn(object),
        length = props.length,
        result = {};
    while (++index < length) {
      var key = props[index],
          value = object[key];
      if (predicate(value, key)) {
        result[key] = value;
      }
    }
    return result;
  }
  return {
    setters: [],
    execute: function () {
      getAllKeysIn = require('./_getAllKeysIn');
      module.exports = basePickBy;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19iYXNlUGlja0J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsV0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLFNBQTVCLEVBQXVDO0FBQ3JDLFFBQUksUUFBUSxDQUFDLENBQUQ7UUFDUixRQUFRLGFBQWEsTUFBYixDQUFSO1FBQ0EsU0FBUyxNQUFNLE1BQU47UUFDVCxTQUFTLEVBQVQsQ0FKaUM7QUFLckMsV0FBTyxFQUFFLEtBQUYsR0FBVSxNQUFWLEVBQWtCO0FBQ3ZCLFVBQUksTUFBTSxNQUFNLEtBQU4sQ0FBTjtVQUNBLFFBQVEsT0FBTyxHQUFQLENBQVIsQ0FGbUI7QUFHdkIsVUFBSSxVQUFVLEtBQVYsRUFBaUIsR0FBakIsQ0FBSixFQUEyQjtBQUN6QixlQUFPLEdBQVAsSUFBYyxLQUFkLENBRHlCO09BQTNCO0tBSEY7QUFPQSxXQUFPLE1BQVAsQ0FacUM7R0FBdkM7Ozs7QUFESSxxQkFBZSxRQUFRLGlCQUFSO0FBZW5CLGFBQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9fYmFzZVBpY2tCeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpO1xuZnVuY3Rpb24gYmFzZVBpY2tCeShvYmplY3QsIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHByb3BzID0gZ2V0QWxsS2V5c0luKG9iamVjdCksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB7fTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGtleSkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQaWNrQnk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
