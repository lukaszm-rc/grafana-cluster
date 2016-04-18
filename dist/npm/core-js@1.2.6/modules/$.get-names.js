'use strict';

System.register([], function (_export, _context) {
  var _typeof, toIObject, getNames, toString, windowNames, getWindowNames;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      toIObject = require('./$.to-iobject');
      getNames = require('./$').getNames;
      toString = {}.toString;
      windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      getWindowNames = function getWindowNames(it) {
        try {
          return getNames(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.get = function getOwnPropertyNames(it) {
        if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
        return getNames(toIObject(it));
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNJLGtCQUFZLFFBQVEsZ0JBQVI7QUFDWixpQkFBVyxRQUFRLEtBQVIsRUFBZSxRQUFmO0FBQ1gsaUJBQVcsR0FBRyxRQUFIO0FBQ1gsb0JBQWMsUUFBTyx1REFBUCxJQUFpQixRQUFqQixJQUE2QixPQUFPLG1CQUFQLEdBQTZCLE9BQU8sbUJBQVAsQ0FBMkIsTUFBM0IsQ0FBMUQsR0FBK0YsRUFBL0Y7O0FBQ2QsdUJBQWlCLFNBQWpCLGNBQWlCLENBQVMsRUFBVCxFQUFhO0FBQ2hDLFlBQUk7QUFDRixpQkFBTyxTQUFTLEVBQVQsQ0FBUCxDQURFO1NBQUosQ0FFRSxPQUFPLENBQVAsRUFBVTtBQUNWLGlCQUFPLFlBQVksS0FBWixFQUFQLENBRFU7U0FBVjtPQUhpQjs7QUFPckIsYUFBTyxPQUFQLENBQWUsR0FBZixHQUFxQixTQUFTLG1CQUFULENBQTZCLEVBQTdCLEVBQWlDO0FBQ3BELFlBQUksZUFBZSxTQUFTLElBQVQsQ0FBYyxFQUFkLEtBQXFCLGlCQUFyQixFQUNqQixPQUFPLGVBQWUsRUFBZixDQUFQLENBREY7QUFFQSxlQUFPLFNBQVMsVUFBVSxFQUFWLENBQVQsQ0FBUCxDQUhvRDtPQUFqQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKSxcbiAgICBnZXROYW1lcyA9IHJlcXVpcmUoJy4vJCcpLmdldE5hbWVzLFxuICAgIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIGlmICh3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylcbiAgICByZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
