'use strict';

System.register([], function (_export, _context) {
    var createWrapper, getPlaceholder, replaceHolders, rest, BIND_FLAG, BIND_KEY_FLAG, PARTIAL_FLAG, bindKey;
    return {
        setters: [],
        execute: function () {
            createWrapper = require('./_createWrapper');
            getPlaceholder = require('./_getPlaceholder');
            replaceHolders = require('./_replaceHolders');
            rest = require('./rest');
            BIND_FLAG = 1;
            BIND_KEY_FLAG = 2;
            PARTIAL_FLAG = 32;
            bindKey = rest(function (object, key, partials) {
                var bitmask = BIND_FLAG | BIND_KEY_FLAG;
                if (partials.length) {
                    var holders = replaceHolders(partials, getPlaceholder(bindKey));
                    bitmask |= PARTIAL_FLAG;
                }
                return createWrapper(key, bitmask, object, partials, holders);
            });

            bindKey.placeholder = {};
            module.exports = bindKey;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2JpbmRLZXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLDRCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLDZCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLG1CQUFPLFFBQVEsUUFBUjtBQUNQLHdCQUFZO0FBQ1osNEJBQWdCO0FBQ2hCLDJCQUFlO0FBQ2Ysc0JBQVUsS0FBSyxVQUFTLE1BQVQsRUFBaUIsR0FBakIsRUFBc0IsUUFBdEIsRUFBZ0M7QUFDakQsb0JBQUksVUFBVSxZQUFZLGFBQVosQ0FEbUM7QUFFakQsb0JBQUksU0FBUyxNQUFULEVBQWlCO0FBQ25CLHdCQUFJLFVBQVUsZUFBZSxRQUFmLEVBQXlCLGVBQWUsT0FBZixDQUF6QixDQUFWLENBRGU7QUFFbkIsK0JBQVcsWUFBWCxDQUZtQjtpQkFBckI7QUFJQSx1QkFBTyxjQUFjLEdBQWQsRUFBbUIsT0FBbkIsRUFBNEIsTUFBNUIsRUFBb0MsUUFBcEMsRUFBOEMsT0FBOUMsQ0FBUCxDQU5pRDthQUFoQzs7QUFRbkIsb0JBQVEsV0FBUixHQUFzQixFQUF0QjtBQUNBLG1CQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoibnBtL2xvZGFzaEA0LjExLjEvYmluZEtleS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGNyZWF0ZVdyYXBwZXIgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwcGVyJyksXG4gICAgZ2V0UGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL19nZXRQbGFjZWhvbGRlcicpLFxuICAgIHJlcGxhY2VIb2xkZXJzID0gcmVxdWlyZSgnLi9fcmVwbGFjZUhvbGRlcnMnKSxcbiAgICByZXN0ID0gcmVxdWlyZSgnLi9yZXN0Jyk7XG52YXIgQklORF9GTEFHID0gMSxcbiAgICBCSU5EX0tFWV9GTEFHID0gMixcbiAgICBQQVJUSUFMX0ZMQUcgPSAzMjtcbnZhciBiaW5kS2V5ID0gcmVzdChmdW5jdGlvbihvYmplY3QsIGtleSwgcGFydGlhbHMpIHtcbiAgdmFyIGJpdG1hc2sgPSBCSU5EX0ZMQUcgfCBCSU5EX0tFWV9GTEFHO1xuICBpZiAocGFydGlhbHMubGVuZ3RoKSB7XG4gICAgdmFyIGhvbGRlcnMgPSByZXBsYWNlSG9sZGVycyhwYXJ0aWFscywgZ2V0UGxhY2Vob2xkZXIoYmluZEtleSkpO1xuICAgIGJpdG1hc2sgfD0gUEFSVElBTF9GTEFHO1xuICB9XG4gIHJldHVybiBjcmVhdGVXcmFwcGVyKGtleSwgYml0bWFzaywgb2JqZWN0LCBwYXJ0aWFscywgaG9sZGVycyk7XG59KTtcbmJpbmRLZXkucGxhY2Vob2xkZXIgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0gYmluZEtleTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
