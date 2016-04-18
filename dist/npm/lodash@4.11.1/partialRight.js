'use strict';

System.register([], function (_export, _context) {
    var createWrapper, getPlaceholder, replaceHolders, rest, PARTIAL_RIGHT_FLAG, partialRight;
    return {
        setters: [],
        execute: function () {
            createWrapper = require('./_createWrapper');
            getPlaceholder = require('./_getPlaceholder');
            replaceHolders = require('./_replaceHolders');
            rest = require('./rest');
            PARTIAL_RIGHT_FLAG = 64;
            partialRight = rest(function (func, partials) {
                var holders = replaceHolders(partials, getPlaceholder(partialRight));
                return createWrapper(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
            });

            partialRight.placeholder = {};
            module.exports = partialRight;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BhcnRpYWxSaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksNEJBQWdCLFFBQVEsa0JBQVI7QUFDaEIsNkJBQWlCLFFBQVEsbUJBQVI7QUFDakIsNkJBQWlCLFFBQVEsbUJBQVI7QUFDakIsbUJBQU8sUUFBUSxRQUFSO0FBQ1AsaUNBQXFCO0FBQ3JCLDJCQUFlLEtBQUssVUFBUyxJQUFULEVBQWUsUUFBZixFQUF5QjtBQUMvQyxvQkFBSSxVQUFVLGVBQWUsUUFBZixFQUF5QixlQUFlLFlBQWYsQ0FBekIsQ0FBVixDQUQyQztBQUUvQyx1QkFBTyxjQUFjLElBQWQsRUFBb0Isa0JBQXBCLEVBQXdDLFNBQXhDLEVBQW1ELFFBQW5ELEVBQTZELE9BQTdELENBQVAsQ0FGK0M7YUFBekI7O0FBSXhCLHlCQUFhLFdBQWIsR0FBMkIsRUFBM0I7QUFDQSxtQkFBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3BhcnRpYWxSaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwcGVyJyksXG4gICAgZ2V0UGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL19nZXRQbGFjZWhvbGRlcicpLFxuICAgIHJlcGxhY2VIb2xkZXJzID0gcmVxdWlyZSgnLi9fcmVwbGFjZUhvbGRlcnMnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgUEFSVElBTF9SSUdIVF9GTEFHID0gNjQ7XG52YXIgcGFydGlhbFJpZ2h0ID0gcmVzdChmdW5jdGlvbihmdW5jLCBwYXJ0aWFscykge1xuICB2YXIgaG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKHBhcnRpYWxzLCBnZXRQbGFjZWhvbGRlcihwYXJ0aWFsUmlnaHQpKTtcbiAgcmV0dXJuIGNyZWF0ZVdyYXBwZXIoZnVuYywgUEFSVElBTF9SSUdIVF9GTEFHLCB1bmRlZmluZWQsIHBhcnRpYWxzLCBob2xkZXJzKTtcbn0pO1xucGFydGlhbFJpZ2h0LnBsYWNlaG9sZGVyID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IHBhcnRpYWxSaWdodDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
