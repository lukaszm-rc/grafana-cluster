'use strict';

System.register([], function (_export, _context) {
    var copyObject, createAssigner, keysIn, assignInWith;
    return {
        setters: [],
        execute: function () {
            copyObject = require('./_copyObject');
            createAssigner = require('./_createAssigner');
            keysIn = require('./keysIn');
            assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
                copyObject(source, keysIn(source), object, customizer);
            });

            module.exports = assignInWith;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2Fzc2lnbkluV2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0kseUJBQWEsUUFBUSxlQUFSO0FBQ2IsNkJBQWlCLFFBQVEsbUJBQVI7QUFDakIscUJBQVMsUUFBUSxVQUFSO0FBQ1QsMkJBQWUsZUFBZSxVQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsUUFBekIsRUFBbUMsVUFBbkMsRUFBK0M7QUFDL0UsMkJBQVcsTUFBWCxFQUFtQixPQUFPLE1BQVAsQ0FBbkIsRUFBbUMsTUFBbkMsRUFBMkMsVUFBM0MsRUFEK0U7YUFBL0M7O0FBR2xDLG1CQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvYXNzaWduSW5XaXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBjcmVhdGVBc3NpZ25lciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUFzc2lnbmVyJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcbnZhciBhc3NpZ25JbldpdGggPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIpIHtcbiAgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QsIGN1c3RvbWl6ZXIpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbkluV2l0aDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
