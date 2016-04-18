'use strict';

System.register([], function (_export, _context) {
    var $, toIObject;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            toIObject = require('./$.to-iobject');

            module.exports = function (object, el) {
                var O = toIObject(object),
                    keys = $.getKeys(O),
                    length = keys.length,
                    index = 0,
                    key;
                while (length > index) {
                    if (O[key = keys[index++]] === el) return key;
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5rZXlvZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksZ0JBQUksUUFBUSxLQUFSO0FBQ0osd0JBQVksUUFBUSxnQkFBUjs7QUFDaEIsbUJBQU8sT0FBUCxHQUFpQixVQUFTLE1BQVQsRUFBaUIsRUFBakIsRUFBcUI7QUFDcEMsb0JBQUksSUFBSSxVQUFVLE1BQVYsQ0FBSjtvQkFDQSxPQUFPLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBUDtvQkFDQSxTQUFTLEtBQUssTUFBTDtvQkFDVCxRQUFRLENBQVI7b0JBQ0EsR0FKSixDQURvQztBQU1wQyx1QkFBTyxTQUFTLEtBQVQ7QUFDTCx3QkFBSSxFQUFFLE1BQU0sS0FBSyxPQUFMLENBQU4sQ0FBRixLQUEyQixFQUEzQixFQUNGLE9BQU8sR0FBUCxDQURGO2lCQURGO2FBTmUiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLmtleW9mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KSxcbiAgICAgIGtleXMgPSAkLmdldEtleXMoTyksXG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgIGluZGV4ID0gMCxcbiAgICAgIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KVxuICAgIGlmIChPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClcbiAgICAgIHJldHVybiBrZXk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
