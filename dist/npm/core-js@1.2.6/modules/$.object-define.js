'use strict';

System.register([], function (_export, _context) {
    var $, ownKeys, toIObject;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            ownKeys = require('./$.own-keys');
            toIObject = require('./$.to-iobject');

            module.exports = function define(target, mixin) {
                var keys = ownKeys(toIObject(mixin)),
                    length = keys.length,
                    i = 0,
                    key;
                while (length > i) {
                    $.setDesc(target, key = keys[i++], $.getDesc(mixin, key));
                }return target;
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5vYmplY3QtZGVmaW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBSSxRQUFRLEtBQVI7QUFDSixzQkFBVSxRQUFRLGNBQVI7QUFDVix3QkFBWSxRQUFRLGdCQUFSOztBQUNoQixtQkFBTyxPQUFQLEdBQWlCLFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUErQjtBQUM5QyxvQkFBSSxPQUFPLFFBQVEsVUFBVSxLQUFWLENBQVIsQ0FBUDtvQkFDQSxTQUFTLEtBQUssTUFBTDtvQkFDVCxJQUFJLENBQUo7b0JBQ0EsR0FISixDQUQ4QztBQUs5Qyx1QkFBTyxTQUFTLENBQVQ7QUFDTCxzQkFBRSxPQUFGLENBQVUsTUFBVixFQUFrQixNQUFNLEtBQUssR0FBTCxDQUFOLEVBQWlCLEVBQUUsT0FBRixDQUFVLEtBQVYsRUFBaUIsR0FBakIsQ0FBbkM7aUJBREYsT0FFTyxNQUFQLENBUDhDO2FBQS9CIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5vYmplY3QtZGVmaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgIG93bktleXMgPSByZXF1aXJlKCcuLyQub3duLWtleXMnKSxcbiAgICB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmUodGFyZ2V0LCBtaXhpbikge1xuICB2YXIga2V5cyA9IG93bktleXModG9JT2JqZWN0KG1peGluKSksXG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgIGkgPSAwLFxuICAgICAga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaSlcbiAgICAkLnNldERlc2ModGFyZ2V0LCBrZXkgPSBrZXlzW2krK10sICQuZ2V0RGVzYyhtaXhpbiwga2V5KSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
