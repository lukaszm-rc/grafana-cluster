'use strict';

System.register([], function (_export, _context) {
    var apply, assignInDefaults, assignInWith, rest, defaults;
    return {
        setters: [],
        execute: function () {
            apply = require('./_apply');
            assignInDefaults = require('./_assignInDefaults');
            assignInWith = require('./assignInWith');
            rest = require('./rest');
            defaults = rest(function (args) {
                args.push(undefined, assignInDefaults);
                return apply(assignInWith, undefined, args);
            });

            module.exports = defaults;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RlZmF1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxvQkFBUSxRQUFRLFVBQVI7QUFDUiwrQkFBbUIsUUFBUSxxQkFBUjtBQUNuQiwyQkFBZSxRQUFRLGdCQUFSO0FBQ2YsbUJBQU8sUUFBUSxRQUFSO0FBQ1AsdUJBQVcsS0FBSyxVQUFTLElBQVQsRUFBZTtBQUNqQyxxQkFBSyxJQUFMLENBQVUsU0FBVixFQUFxQixnQkFBckIsRUFEaUM7QUFFakMsdUJBQU8sTUFBTSxZQUFOLEVBQW9CLFNBQXBCLEVBQStCLElBQS9CLENBQVAsQ0FGaUM7YUFBZjs7QUFJcEIsbUJBQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9kZWZhdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBhc3NpZ25JbkRlZmF1bHRzID0gcmVxdWlyZSgnLi9fYXNzaWduSW5EZWZhdWx0cycpLFxuICAgIGFzc2lnbkluV2l0aCA9IHJlcXVpcmUoJy4vYXNzaWduSW5XaXRoJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIGRlZmF1bHRzID0gcmVzdChmdW5jdGlvbihhcmdzKSB7XG4gIGFyZ3MucHVzaCh1bmRlZmluZWQsIGFzc2lnbkluRGVmYXVsdHMpO1xuICByZXR1cm4gYXBwbHkoYXNzaWduSW5XaXRoLCB1bmRlZmluZWQsIGFyZ3MpO1xufSk7XG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
