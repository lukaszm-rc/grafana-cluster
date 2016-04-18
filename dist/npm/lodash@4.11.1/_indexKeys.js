'use strict';

System.register([], function (_export, _context) {
  var baseTimes, isArguments, isArray, isLength, isString;

  function indexKeys(object) {
    var length = object ? object.length : undefined;
    if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
      return baseTimes(length, String);
    }
    return null;
  }
  return {
    setters: [],
    execute: function () {
      baseTimes = require('./_baseTimes');
      isArguments = require('./isArguments');
      isArray = require('./isArray');
      isLength = require('./isLength');
      isString = require('./isString');
      module.exports = indexKeys;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL19pbmRleEtleXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxXQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkI7QUFDekIsUUFBSSxTQUFTLFNBQVMsT0FBTyxNQUFQLEdBQWdCLFNBQXpCLENBRFk7QUFFekIsUUFBSSxTQUFTLE1BQVQsTUFBcUIsUUFBUSxNQUFSLEtBQW1CLFNBQVMsTUFBVCxDQUFuQixJQUF1QyxZQUFZLE1BQVosQ0FBdkMsQ0FBckIsRUFBa0Y7QUFDcEYsYUFBTyxVQUFVLE1BQVYsRUFBa0IsTUFBbEIsQ0FBUCxDQURvRjtLQUF0RjtBQUdBLFdBQU8sSUFBUCxDQUx5QjtHQUEzQjs7OztBQUxJLGtCQUFZLFFBQVEsY0FBUjtBQUNaLG9CQUFjLFFBQVEsZUFBUjtBQUNkLGdCQUFVLFFBQVEsV0FBUjtBQUNWLGlCQUFXLFFBQVEsWUFBUjtBQUNYLGlCQUFXLFFBQVEsWUFBUjtBQVFmLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9faW5kZXhLZXlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzU3RyaW5nID0gcmVxdWlyZSgnLi9pc1N0cmluZycpO1xuZnVuY3Rpb24gaW5kZXhLZXlzKG9iamVjdCkge1xuICB2YXIgbGVuZ3RoID0gb2JqZWN0ID8gb2JqZWN0Lmxlbmd0aCA6IHVuZGVmaW5lZDtcbiAgaWYgKGlzTGVuZ3RoKGxlbmd0aCkgJiYgKGlzQXJyYXkob2JqZWN0KSB8fCBpc1N0cmluZyhvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpKSB7XG4gICAgcmV0dXJuIGJhc2VUaW1lcyhsZW5ndGgsIFN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluZGV4S2V5cztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
