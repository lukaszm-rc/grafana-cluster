'use strict';

System.register([], function (_export, _context) {
  var getTag, isArrayLike, isObjectLike, isString, keys, stringSize, mapTag, setTag;

  function size(collection) {
    if (collection == null) {
      return 0;
    }
    if (isArrayLike(collection)) {
      var result = collection.length;
      return result && isString(collection) ? stringSize(collection) : result;
    }
    if (isObjectLike(collection)) {
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
    }
    return keys(collection).length;
  }
  return {
    setters: [],
    execute: function () {
      getTag = require('./_getTag');
      isArrayLike = require('./isArrayLike');
      isObjectLike = require('./isObjectLike');
      isString = require('./isString');
      keys = require('./keys');
      stringSize = require('./_stringSize');
      mapTag = '[object Map]';
      setTag = '[object Set]';
      module.exports = size;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3NpemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxXQUFTLElBQVQsQ0FBYyxVQUFkLEVBQTBCO0FBQ3hCLFFBQUksY0FBYyxJQUFkLEVBQW9CO0FBQ3RCLGFBQU8sQ0FBUCxDQURzQjtLQUF4QjtBQUdBLFFBQUksWUFBWSxVQUFaLENBQUosRUFBNkI7QUFDM0IsVUFBSSxTQUFTLFdBQVcsTUFBWCxDQURjO0FBRTNCLGFBQU8sTUFBQyxJQUFVLFNBQVMsVUFBVCxDQUFWLEdBQWtDLFdBQVcsVUFBWCxDQUFuQyxHQUE0RCxNQUE1RCxDQUZvQjtLQUE3QjtBQUlBLFFBQUksYUFBYSxVQUFiLENBQUosRUFBOEI7QUFDNUIsVUFBSSxNQUFNLE9BQU8sVUFBUCxDQUFOLENBRHdCO0FBRTVCLFVBQUksT0FBTyxNQUFQLElBQWlCLE9BQU8sTUFBUCxFQUFlO0FBQ2xDLGVBQU8sV0FBVyxJQUFYLENBRDJCO09BQXBDO0tBRkY7QUFNQSxXQUFPLEtBQUssVUFBTCxFQUFpQixNQUFqQixDQWRpQjtHQUExQjs7OztBQVJJLGVBQVMsUUFBUSxXQUFSO0FBQ1Qsb0JBQWMsUUFBUSxlQUFSO0FBQ2QscUJBQWUsUUFBUSxnQkFBUjtBQUNmLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGFBQU8sUUFBUSxRQUFSO0FBQ1AsbUJBQWEsUUFBUSxlQUFSO0FBQ2IsZUFBUztBQUNULGVBQVM7QUFpQmIsYUFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3NpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpLFxuICAgIGlzU3RyaW5nID0gcmVxdWlyZSgnLi9pc1N0cmluZycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICBzdHJpbmdTaXplID0gcmVxdWlyZSgnLi9fc3RyaW5nU2l6ZScpO1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuZnVuY3Rpb24gc2l6ZShjb2xsZWN0aW9uKSB7XG4gIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UoY29sbGVjdGlvbikpIHtcbiAgICB2YXIgcmVzdWx0ID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgcmV0dXJuIChyZXN1bHQgJiYgaXNTdHJpbmcoY29sbGVjdGlvbikpID8gc3RyaW5nU2l6ZShjb2xsZWN0aW9uKSA6IHJlc3VsdDtcbiAgfVxuICBpZiAoaXNPYmplY3RMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyhjb2xsZWN0aW9uKTtcbiAgICBpZiAodGFnID09IG1hcFRhZyB8fCB0YWcgPT0gc2V0VGFnKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5zaXplO1xuICAgIH1cbiAgfVxuICByZXR1cm4ga2V5cyhjb2xsZWN0aW9uKS5sZW5ndGg7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNpemU7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
