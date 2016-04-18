'use strict';

System.register([], function (_export, _context) {
    var $export;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');

            $export($export.S, 'Math', { trunc: function trunc(it) {
                    return (it > 0 ? Math.floor : Math.ceil)(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksc0JBQVUsUUFBUSxZQUFSOztBQUNkLG9CQUFRLFFBQVEsQ0FBUixFQUFXLE1BQW5CLEVBQTJCLEVBQUMsT0FBTyxTQUFTLEtBQVQsQ0FBZSxFQUFmLEVBQW1CO0FBQ2xELDJCQUFPLENBQUMsS0FBSyxDQUFMLEdBQVMsS0FBSyxLQUFMLEdBQWEsS0FBSyxJQUFMLENBQXZCLENBQWtDLEVBQWxDLENBQVAsQ0FEa0Q7aUJBQW5CLEVBQW5DIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7dHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KSB7XG4gICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
