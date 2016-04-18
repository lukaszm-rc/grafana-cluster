'use strict';

System.register([], function (_export, _context) {
    var constant, createInverter, identity, invert;
    return {
        setters: [],
        execute: function () {
            constant = require('./constant');
            createInverter = require('./_createInverter');
            identity = require('./identity');
            invert = createInverter(function (result, value, key) {
                result[value] = key;
            }, constant(identity));

            module.exports = invert;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ludmVydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksdUJBQVcsUUFBUSxZQUFSO0FBQ1gsNkJBQWlCLFFBQVEsbUJBQVI7QUFDakIsdUJBQVcsUUFBUSxZQUFSO0FBQ1gscUJBQVMsZUFBZSxVQUFTLE1BQVQsRUFBaUIsS0FBakIsRUFBd0IsR0FBeEIsRUFBNkI7QUFDdkQsdUJBQU8sS0FBUCxJQUFnQixHQUFoQixDQUR1RDthQUE3QixFQUV6QixTQUFTLFFBQVQsQ0FGVTs7QUFHYixtQkFBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ludmVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGNyZWF0ZUludmVydGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlSW52ZXJ0ZXInKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcbnZhciBpbnZlcnQgPSBjcmVhdGVJbnZlcnRlcihmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgcmVzdWx0W3ZhbHVlXSA9IGtleTtcbn0sIGNvbnN0YW50KGlkZW50aXR5KSk7XG5tb2R1bGUuZXhwb3J0cyA9IGludmVydDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
