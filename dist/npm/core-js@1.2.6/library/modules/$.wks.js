'use strict';

System.register([], function (_export, _context) {
    var store, uid, _Symbol;

    return {
        setters: [],
        execute: function () {
            store = require('./$.shared')('wks');
            uid = require('./$.uid');
            _Symbol = require('./$.global').Symbol;

            module.exports = function (name) {
                return store[name] || (store[name] = _Symbol && _Symbol[name] || (_Symbol || uid)('Symbol.' + name));
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJLG9CQUFRLFFBQVEsWUFBUixFQUFzQixLQUF0QjtBQUNSLGtCQUFNLFFBQVEsU0FBUjtBQUNOLHNCQUFTLFFBQVEsWUFBUixFQUFzQixNQUF0Qjs7QUFDYixtQkFBTyxPQUFQLEdBQWlCLFVBQVMsSUFBVCxFQUFlO0FBQzlCLHVCQUFPLE1BQU0sSUFBTixNQUFnQixNQUFNLElBQU4sSUFBYyxXQUFVLFFBQU8sSUFBUCxDQUFWLElBQTBCLENBQUMsV0FBVSxHQUFWLENBQUQsQ0FBZ0IsWUFBWSxJQUFaLENBQTFDLENBQTlCLENBRHVCO2FBQWYiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpLFxuICAgIHVpZCA9IHJlcXVpcmUoJy4vJC51aWQnKSxcbiAgICBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPSBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
