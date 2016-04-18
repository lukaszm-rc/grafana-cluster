'use strict';

System.register([], function (_export, _context) {
    var createWrapper, getPlaceholder, replaceHolders, rest, PARTIAL_FLAG, partial;
    return {
        setters: [],
        execute: function () {
            createWrapper = require('./_createWrapper');
            getPlaceholder = require('./_getPlaceholder');
            replaceHolders = require('./_replaceHolders');
            rest = require('./rest');
            PARTIAL_FLAG = 32;
            partial = rest(function (func, partials) {
                var holders = replaceHolders(partials, getPlaceholder(partial));
                return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders);
            });

            partial.placeholder = {};
            module.exports = partial;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3BhcnRpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLDRCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLG1CQUFPLFFBQVEsUUFBUjtBQUNQLDJCQUFlO0FBQ2Ysc0JBQVUsS0FBSyxVQUFTLElBQVQsRUFBZSxRQUFmLEVBQXlCO0FBQzFDLG9CQUFJLFVBQVUsZUFBZSxRQUFmLEVBQXlCLGVBQWUsT0FBZixDQUF6QixDQUFWLENBRHNDO0FBRTFDLHVCQUFPLGNBQWMsSUFBZCxFQUFvQixZQUFwQixFQUFrQyxTQUFsQyxFQUE2QyxRQUE3QyxFQUF1RCxPQUF2RCxDQUFQLENBRjBDO2FBQXpCOztBQUluQixvQkFBUSxXQUFSLEdBQXNCLEVBQXRCO0FBQ0EsbUJBQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9wYXJ0aWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgY3JlYXRlV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZVdyYXBwZXInKSxcbiAgICBnZXRQbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vX2dldFBsYWNlaG9sZGVyJyksXG4gICAgcmVwbGFjZUhvbGRlcnMgPSByZXF1aXJlKCcuL19yZXBsYWNlSG9sZGVycycpLFxuICAgIHJlc3QgPSByZXF1aXJlKCcuL3Jlc3QnKTtcbnZhciBQQVJUSUFMX0ZMQUcgPSAzMjtcbnZhciBwYXJ0aWFsID0gcmVzdChmdW5jdGlvbihmdW5jLCBwYXJ0aWFscykge1xuICB2YXIgaG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKHBhcnRpYWxzLCBnZXRQbGFjZWhvbGRlcihwYXJ0aWFsKSk7XG4gIHJldHVybiBjcmVhdGVXcmFwcGVyKGZ1bmMsIFBBUlRJQUxfRkxBRywgdW5kZWZpbmVkLCBwYXJ0aWFscywgaG9sZGVycyk7XG59KTtcbnBhcnRpYWwucGxhY2Vob2xkZXIgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0gcGFydGlhbDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
