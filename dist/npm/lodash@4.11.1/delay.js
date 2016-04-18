'use strict';

System.register([], function (_export, _context) {
    var baseDelay, rest, toNumber, delay;
    return {
        setters: [],
        execute: function () {
            baseDelay = require('./_baseDelay');
            rest = require('./rest');
            toNumber = require('./toNumber');
            delay = rest(function (func, wait, args) {
                return baseDelay(func, toNumber(wait) || 0, args);
            });

            module.exports = delay;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2RlbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSx3QkFBWSxRQUFRLGNBQVI7QUFDWixtQkFBTyxRQUFRLFFBQVI7QUFDUCx1QkFBVyxRQUFRLFlBQVI7QUFDWCxvQkFBUSxLQUFLLFVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkI7QUFDMUMsdUJBQU8sVUFBVSxJQUFWLEVBQWdCLFNBQVMsSUFBVCxLQUFrQixDQUFsQixFQUFxQixJQUFyQyxDQUFQLENBRDBDO2FBQTNCOztBQUdqQixtQkFBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2RlbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgYmFzZURlbGF5ID0gcmVxdWlyZSgnLi9fYmFzZURlbGF5JyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xudmFyIGRlbGF5ID0gcmVzdChmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gIHJldHVybiBiYXNlRGVsYXkoZnVuYywgdG9OdW1iZXIod2FpdCkgfHwgMCwgYXJncyk7XG59KTtcbm1vZHVsZS5leHBvcnRzID0gZGVsYXk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
