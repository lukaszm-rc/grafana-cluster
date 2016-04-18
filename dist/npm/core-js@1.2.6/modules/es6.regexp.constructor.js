'use strict';

System.register([], function (_export, _context) {
  var $, global, isRegExp, $flags, $RegExp, Base, proto, re1, re2, CORRECT_NEW;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      global = require('./$.global');
      isRegExp = require('./$.is-regexp');
      $flags = require('./$.flags');
      $RegExp = global.RegExp;
      Base = $RegExp;
      proto = $RegExp.prototype;
      re1 = /a/g;
      re2 = /a/g;
      CORRECT_NEW = new $RegExp(re1) !== re1;

      if (require('./$.descriptors') && (!CORRECT_NEW || require('./$.fails')(function () {
        re2[require('./$.wks')('match')] = false;
        return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
      }))) {
        $RegExp = function RegExp(p, f) {
          var piRE = isRegExp(p),
              fiU = f === undefined;
          return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p : CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
        };
        $.each.call($.getNames(Base), function (key) {
          key in $RegExp || $.setDesc($RegExp, key, {
            configurable: true,
            get: function get() {
              return Base[key];
            },
            set: function set(it) {
              Base[key] = it;
            }
          });
        });
        proto.constructor = $RegExp;
        $RegExp.prototype = proto;
        require('./$.redefine')(global, 'RegExp', $RegExp);
      }
      require('./$.set-species')('RegExp');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksVUFBSSxRQUFRLEtBQVI7QUFDSixlQUFTLFFBQVEsWUFBUjtBQUNULGlCQUFXLFFBQVEsZUFBUjtBQUNYLGVBQVMsUUFBUSxXQUFSO0FBQ1QsZ0JBQVUsT0FBTyxNQUFQO0FBQ1YsYUFBTztBQUNQLGNBQVEsUUFBUSxTQUFSO0FBQ1IsWUFBTTtBQUNOLFlBQU07QUFDTixvQkFBYyxJQUFJLE9BQUosQ0FBWSxHQUFaLE1BQXFCLEdBQXJCOztBQUNsQixVQUFJLFFBQVEsaUJBQVIsTUFBK0IsQ0FBQyxXQUFELElBQWdCLFFBQVEsV0FBUixFQUFxQixZQUFXO0FBQ2pGLFlBQUksUUFBUSxTQUFSLEVBQW1CLE9BQW5CLENBQUosSUFBbUMsS0FBbkMsQ0FEaUY7QUFFakYsZUFBTyxRQUFRLEdBQVIsS0FBZ0IsR0FBaEIsSUFBdUIsUUFBUSxHQUFSLEtBQWdCLEdBQWhCLElBQXVCLFFBQVEsR0FBUixFQUFhLEdBQWIsS0FBcUIsTUFBckIsQ0FGNEI7T0FBWCxDQUFyQyxDQUEvQixFQUdDO0FBQ0gsa0JBQVUsU0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCO0FBQzlCLGNBQUksT0FBTyxTQUFTLENBQVQsQ0FBUDtjQUNBLE1BQU0sTUFBTSxTQUFOLENBRm9CO0FBRzlCLGlCQUFPLEVBQUUsZ0JBQWdCLE9BQWhCLENBQUYsSUFBOEIsSUFBOUIsSUFBc0MsRUFBRSxXQUFGLEtBQWtCLE9BQWxCLElBQTZCLEdBQW5FLEdBQXlFLENBQXpFLEdBQTZFLGNBQWMsSUFBSSxJQUFKLENBQVMsUUFBUSxDQUFDLEdBQUQsR0FBTyxFQUFFLE1BQUYsR0FBVyxDQUExQixFQUE2QixDQUF0QyxDQUFkLEdBQXlELEtBQUssQ0FBQyxPQUFPLGFBQWEsT0FBYixDQUFSLEdBQWdDLEVBQUUsTUFBRixHQUFXLENBQTNDLEVBQThDLFFBQVEsR0FBUixHQUFjLE9BQU8sSUFBUCxDQUFZLENBQVosQ0FBZCxHQUErQixDQUEvQixDQUE1RyxDQUh0RDtTQUF0QixDQURQO0FBTUgsVUFBRSxJQUFGLENBQU8sSUFBUCxDQUFZLEVBQUUsUUFBRixDQUFXLElBQVgsQ0FBWixFQUE4QixVQUFTLEdBQVQsRUFBYztBQUMxQyxpQkFBTyxPQUFQLElBQWtCLEVBQUUsT0FBRixDQUFVLE9BQVYsRUFBbUIsR0FBbkIsRUFBd0I7QUFDeEMsMEJBQWMsSUFBZDtBQUNBLGlCQUFLLGVBQVc7QUFDZCxxQkFBTyxLQUFLLEdBQUwsQ0FBUCxDQURjO2FBQVg7QUFHTCxpQkFBSyxhQUFTLEVBQVQsRUFBYTtBQUNoQixtQkFBSyxHQUFMLElBQVksRUFBWixDQURnQjthQUFiO1dBTFcsQ0FBbEIsQ0FEMEM7U0FBZCxDQUE5QixDQU5HO0FBaUJILGNBQU0sV0FBTixHQUFvQixPQUFwQixDQWpCRztBQWtCSCxnQkFBUSxTQUFSLEdBQW9CLEtBQXBCLENBbEJHO0FBbUJILGdCQUFRLGNBQVIsRUFBd0IsTUFBeEIsRUFBZ0MsUUFBaEMsRUFBMEMsT0FBMUMsRUFuQkc7T0FITDtBQXdCQSxjQUFRLGlCQUFSLEVBQTJCLFFBQTNCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgaXNSZWdFeHAgPSByZXF1aXJlKCcuLyQuaXMtcmVnZXhwJyksXG4gICAgJGZsYWdzID0gcmVxdWlyZSgnLi8kLmZsYWdzJyksXG4gICAgJFJlZ0V4cCA9IGdsb2JhbC5SZWdFeHAsXG4gICAgQmFzZSA9ICRSZWdFeHAsXG4gICAgcHJvdG8gPSAkUmVnRXhwLnByb3RvdHlwZSxcbiAgICByZTEgPSAvYS9nLFxuICAgIHJlMiA9IC9hL2csXG4gICAgQ09SUkVDVF9ORVcgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5pZiAocmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgJiYgKCFDT1JSRUNUX05FVyB8fCByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpIHtcbiAgcmUyW3JlcXVpcmUoJy4vJC53a3MnKSgnbWF0Y2gnKV0gPSBmYWxzZTtcbiAgcmV0dXJuICRSZWdFeHAocmUxKSAhPSByZTEgfHwgJFJlZ0V4cChyZTIpID09IHJlMiB8fCAkUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpIHtcbiAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwLCBmKSB7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKSxcbiAgICAgICAgZmlVID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhKHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwKSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcCA6IENPUlJFQ1RfTkVXID8gbmV3IEJhc2UocGlSRSAmJiAhZmlVID8gcC5zb3VyY2UgOiBwLCBmKSA6IEJhc2UoKHBpUkUgPSBwIGluc3RhbmNlb2YgJFJlZ0V4cCkgPyBwLnNvdXJjZSA6IHAsIHBpUkUgJiYgZmlVID8gJGZsYWdzLmNhbGwocCkgOiBmKTtcbiAgfTtcbiAgJC5lYWNoLmNhbGwoJC5nZXROYW1lcyhCYXNlKSwgZnVuY3Rpb24oa2V5KSB7XG4gICAga2V5IGluICRSZWdFeHAgfHwgJC5zZXREZXNjKCRSZWdFeHAsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEJhc2Vba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKGl0KSB7XG4gICAgICAgIEJhc2Vba2V5XSA9IGl0O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkUmVnRXhwO1xuICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUnKShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcbn1cbnJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpKCdSZWdFeHAnKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==