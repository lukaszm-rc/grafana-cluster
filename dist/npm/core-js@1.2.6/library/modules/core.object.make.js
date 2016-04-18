'use strict';

System.register([], function (_export, _context) {
    var $export, define, create;
    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            define = require('./$.object-define');
            create = require('./$').create;

            $export($export.S + $export.F, 'Object', { make: function make(proto, mixin) {
                    return define(create(proto), mixin);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9jb3JlLm9iamVjdC5tYWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVixxQkFBUyxRQUFRLG1CQUFSO0FBQ1QscUJBQVMsUUFBUSxLQUFSLEVBQWUsTUFBZjs7QUFDYixvQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsRUFBVyxRQUEvQixFQUF5QyxFQUFDLE1BQU0sY0FBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCO0FBQ25FLDJCQUFPLE9BQU8sT0FBTyxLQUFQLENBQVAsRUFBc0IsS0FBdEIsQ0FBUCxDQURtRTtpQkFBdkIsRUFBaEQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2NvcmUub2JqZWN0Lm1ha2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGRlZmluZSA9IHJlcXVpcmUoJy4vJC5vYmplY3QtZGVmaW5lJyksXG4gICAgY3JlYXRlID0gcmVxdWlyZSgnLi8kJykuY3JlYXRlO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7bWFrZTogZnVuY3Rpb24ocHJvdG8sIG1peGluKSB7XG4gICAgcmV0dXJuIGRlZmluZShjcmVhdGUocHJvdG8pLCBtaXhpbik7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
