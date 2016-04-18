'use strict';

System.register([], function (_export, _context) {
    var global, core, $export, partial;
    return {
        setters: [],
        execute: function () {
            global = require('./$.global');
            core = require('./$.core');
            $export = require('./$.export');
            partial = require('./$.partial');

            $export($export.G + $export.F, { delay: function delay(time) {
                    return new (core.Promise || global.Promise)(function (resolve) {
                        setTimeout(partial.call(resolve, true), time);
                    });
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5kZWxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0kscUJBQVMsUUFBUSxZQUFSO0FBQ1QsbUJBQU8sUUFBUSxVQUFSO0FBQ1Asc0JBQVUsUUFBUSxZQUFSO0FBQ1Ysc0JBQVUsUUFBUSxhQUFSOztBQUNkLG9CQUFRLFFBQVEsQ0FBUixHQUFZLFFBQVEsQ0FBUixFQUFXLEVBQUMsT0FBTyxTQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCO0FBQ3hELDJCQUFPLEtBQUssS0FBSyxPQUFMLElBQWdCLE9BQU8sT0FBUCxDQUFyQixDQUFxQyxVQUFTLE9BQVQsRUFBa0I7QUFDNUQsbUNBQVcsUUFBUSxJQUFSLENBQWEsT0FBYixFQUFzQixJQUF0QixDQUFYLEVBQXdDLElBQXhDLEVBRDREO3FCQUFsQixDQUE1QyxDQUR3RDtpQkFBckIsRUFBdkMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9jb3JlLmRlbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLFxuICAgIGNvcmUgPSByZXF1aXJlKCcuLyQuY29yZScpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgcGFydGlhbCA9IHJlcXVpcmUoJy4vJC5wYXJ0aWFsJyk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiwge2RlbGF5OiBmdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gICAgcmV0dXJuIG5ldyAoY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICBzZXRUaW1lb3V0KHBhcnRpYWwuY2FsbChyZXNvbHZlLCB0cnVlKSwgdGltZSk7XG4gICAgfSk7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
