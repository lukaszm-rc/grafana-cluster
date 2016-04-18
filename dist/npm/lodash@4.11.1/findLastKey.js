'use strict';

System.register([], function (_export, _context) {
    var baseFind, baseForOwnRight, baseIteratee;

    function findLastKey(object, predicate) {
        return baseFind(object, baseIteratee(predicate, 3), baseForOwnRight, true);
    }
    return {
        setters: [],
        execute: function () {
            baseFind = require('./_baseFind');
            baseForOwnRight = require('./_baseForOwnRight');
            baseIteratee = require('./_baseIteratee');
            module.exports = findLastKey;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZpbmRMYXN0S2V5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsYUFBUyxXQUFULENBQXFCLE1BQXJCLEVBQTZCLFNBQTdCLEVBQXdDO0FBQ3RDLGVBQU8sU0FBUyxNQUFULEVBQWlCLGFBQWEsU0FBYixFQUF3QixDQUF4QixDQUFqQixFQUE2QyxlQUE3QyxFQUE4RCxJQUE5RCxDQUFQLENBRHNDO0tBQXhDOzs7O0FBSEksdUJBQVcsUUFBUSxhQUFSO0FBQ1gsOEJBQWtCLFFBQVEsb0JBQVI7QUFDbEIsMkJBQWUsUUFBUSxpQkFBUjtBQUluQixtQkFBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2ZpbmRMYXN0S2V5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZUZpbmQgPSByZXF1aXJlKCcuL19iYXNlRmluZCcpLFxuICAgIGJhc2VGb3JPd25SaWdodCA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd25SaWdodCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuZnVuY3Rpb24gZmluZExhc3RLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGJhc2VGaW5kKG9iamVjdCwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyksIGJhc2VGb3JPd25SaWdodCwgdHJ1ZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRMYXN0S2V5O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
