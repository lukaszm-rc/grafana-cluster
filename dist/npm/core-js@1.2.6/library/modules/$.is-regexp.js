'use strict';

System.register([], function (_export, _context) {
  var isObject, cof, MATCH;
  return {
    setters: [],
    execute: function () {
      isObject = require('./$.is-object');
      cof = require('./$.cof');
      MATCH = require('./$.wks')('match');

      module.exports = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksaUJBQVcsUUFBUSxlQUFSO0FBQ1gsWUFBTSxRQUFRLFNBQVI7QUFDTixjQUFRLFFBQVEsU0FBUixFQUFtQixPQUFuQjs7QUFDWixhQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWE7QUFDNUIsWUFBSSxRQUFKLENBRDRCO0FBRTVCLGVBQU8sU0FBUyxFQUFULE1BQWlCLENBQUMsV0FBVyxHQUFHLEtBQUgsQ0FBWCxDQUFELEtBQTJCLFNBQTNCLEdBQXVDLENBQUMsQ0FBQyxRQUFELEdBQVksSUFBSSxFQUFKLEtBQVcsUUFBWCxDQUFyRSxDQUZxQjtPQUFiIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKSxcbiAgICBNQVRDSCA9IHJlcXVpcmUoJy4vJC53a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
