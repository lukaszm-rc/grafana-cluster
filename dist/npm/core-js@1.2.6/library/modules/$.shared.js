'use strict';

System.register([], function (_export, _context) {
    var global, SHARED, store;
    return {
        setters: [],
        execute: function () {
            global = require('./$.global');
            SHARED = '__core-js_shared__';
            store = global[SHARED] || (global[SHARED] = {});

            module.exports = function (key) {
                return store[key] || (store[key] = {});
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0kscUJBQVMsUUFBUSxZQUFSO0FBQ1QscUJBQVM7QUFDVCxvQkFBUSxPQUFPLE1BQVAsTUFBbUIsT0FBTyxNQUFQLElBQWlCLEVBQWpCLENBQW5COztBQUNaLG1CQUFPLE9BQVAsR0FBaUIsVUFBUyxHQUFULEVBQWM7QUFDN0IsdUJBQU8sTUFBTSxHQUFOLE1BQWUsTUFBTSxHQUFOLElBQWEsRUFBYixDQUFmLENBRHNCO2FBQWQiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLFxuICAgIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nLFxuICAgIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
