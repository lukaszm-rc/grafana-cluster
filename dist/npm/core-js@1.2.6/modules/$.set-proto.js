'use strict';

System.register([], function (_export, _context) {
  var getDesc, isObject, anObject, check;
  return {
    setters: [],
    execute: function () {
      getDesc = require('./$').getDesc;
      isObject = require('./$.is-object');
      anObject = require('./$.an-object');

      check = function check(O, proto) {
        anObject(O);
        if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
      };

      module.exports = {
        set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
          try {
            set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;else set(O, proto);
            return O;
          };
        }({}, false) : undefined),
        check: check
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5zZXQtcHJvdG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsS0FBUixFQUFlLE9BQWY7QUFDVixpQkFBVyxRQUFRLGVBQVI7QUFDWCxpQkFBVyxRQUFRLGVBQVI7O0FBQ1gsY0FBUSxTQUFSLEtBQVEsQ0FBUyxDQUFULEVBQVksS0FBWixFQUFtQjtBQUM3QixpQkFBUyxDQUFULEVBRDZCO0FBRTdCLFlBQUksQ0FBQyxTQUFTLEtBQVQsQ0FBRCxJQUFvQixVQUFVLElBQVYsRUFDdEIsTUFBTSxVQUFVLFFBQVEsMkJBQVIsQ0FBaEIsQ0FERjtPQUZVOztBQUtaLGFBQU8sT0FBUCxHQUFpQjtBQUNmLGFBQUssT0FBTyxjQUFQLEtBQTBCLGVBQWUsRUFBZixHQUFvQixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCO0FBQzVFLGNBQUk7QUFDRixrQkFBTSxRQUFRLFNBQVIsRUFBbUIsU0FBUyxJQUFULEVBQWUsUUFBUSxPQUFPLFNBQVAsRUFBa0IsV0FBMUIsRUFBdUMsR0FBdkMsRUFBNEMsQ0FBOUUsQ0FBTixDQURFO0FBRUYsZ0JBQUksSUFBSixFQUFVLEVBQVYsRUFGRTtBQUdGLG9CQUFRLEVBQUUsZ0JBQWdCLEtBQWhCLENBQUYsQ0FITjtXQUFKLENBSUUsT0FBTyxDQUFQLEVBQVU7QUFDVixvQkFBUSxJQUFSLENBRFU7V0FBVjtBQUdGLGlCQUFPLFNBQVMsY0FBVCxDQUF3QixDQUF4QixFQUEyQixLQUEzQixFQUFrQztBQUN2QyxrQkFBTSxDQUFOLEVBQVMsS0FBVCxFQUR1QztBQUV2QyxnQkFBSSxLQUFKLEVBQ0UsRUFBRSxTQUFGLEdBQWMsS0FBZCxDQURGLEtBR0UsSUFBSSxDQUFKLEVBQU8sS0FBUCxFQUhGO0FBSUEsbUJBQU8sQ0FBUCxDQU51QztXQUFsQyxDQVJxRTtTQUEzQixDQWdCakQsRUFoQmlELEVBZ0I3QyxLQWhCNkMsQ0FBcEIsR0FnQmhCLFNBaEJnQixDQUExQjtBQWlCTCxlQUFPLEtBQVA7T0FsQkYiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy8kLnNldC1wcm90by5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGdldERlc2MgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKVxuICAgIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCkge1xuICAgIHRyeSB7XG4gICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgZ2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBidWdneSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgaWYgKGJ1Z2d5KVxuICAgICAgICBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgZWxzZVxuICAgICAgICBzZXQoTywgcHJvdG8pO1xuICAgICAgcmV0dXJuIE87XG4gICAgfTtcbiAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
