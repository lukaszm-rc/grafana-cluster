'use strict';

System.register([], function (_export, _context) {
  var capitalize, createCompounder, camelCase;
  return {
    setters: [],
    execute: function () {
      capitalize = require('./capitalize');
      createCompounder = require('./_createCompounder');
      camelCase = createCompounder(function (result, word, index) {
        word = word.toLowerCase();
        return result + (index ? capitalize(word) : word);
      });

      module.exports = camelCase;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2NhbWVsQ2FzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksbUJBQWEsUUFBUSxjQUFSO0FBQ2IseUJBQW1CLFFBQVEscUJBQVI7QUFDbkIsa0JBQVksaUJBQWlCLFVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QixLQUF2QixFQUE4QjtBQUM3RCxlQUFPLEtBQUssV0FBTCxFQUFQLENBRDZEO0FBRTdELGVBQU8sVUFBVSxRQUFRLFdBQVcsSUFBWCxDQUFSLEdBQTJCLElBQTNCLENBQVYsQ0FGc0Q7T0FBOUI7O0FBSWpDLGFBQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9jYW1lbENhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjYXBpdGFsaXplID0gcmVxdWlyZSgnLi9jYXBpdGFsaXplJyksXG4gICAgY3JlYXRlQ29tcG91bmRlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUNvbXBvdW5kZXInKTtcbnZhciBjYW1lbENhc2UgPSBjcmVhdGVDb21wb3VuZGVyKGZ1bmN0aW9uKHJlc3VsdCwgd29yZCwgaW5kZXgpIHtcbiAgd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHJlc3VsdCArIChpbmRleCA/IGNhcGl0YWxpemUod29yZCkgOiB3b3JkKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBjYW1lbENhc2U7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
