'use strict';

System.register([], function (_export, _context) {
    var $, $export, ownKeys, toIObject, createDesc;
    return {
        setters: [],
        execute: function () {
            $ = require('./$');
            $export = require('./$.export');
            ownKeys = require('./$.own-keys');
            toIObject = require('./$.to-iobject');
            createDesc = require('./$.property-desc');

            $export($export.S, 'Object', { getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                    var O = toIObject(object),
                        setDesc = $.setDesc,
                        getDesc = $.getDesc,
                        keys = ownKeys(O),
                        result = {},
                        i = 0,
                        key,
                        D;
                    while (keys.length > i) {
                        D = getDesc(O, key = keys[i++]);
                        if (key in result) setDesc(result, key, createDesc(0, D));else result[key] = D;
                    }
                    return result;
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxnQkFBSSxRQUFRLEtBQVI7QUFDSixzQkFBVSxRQUFRLFlBQVI7QUFDVixzQkFBVSxRQUFRLGNBQVI7QUFDVix3QkFBWSxRQUFRLGdCQUFSO0FBQ1oseUJBQWEsUUFBUSxtQkFBUjs7QUFDakIsb0JBQVEsUUFBUSxDQUFSLEVBQVcsUUFBbkIsRUFBNkIsRUFBQywyQkFBMkIsU0FBUyx5QkFBVCxDQUFtQyxNQUFuQyxFQUEyQztBQUNoRyx3QkFBSSxJQUFJLFVBQVUsTUFBVixDQUFKO3dCQUNBLFVBQVUsRUFBRSxPQUFGO3dCQUNWLFVBQVUsRUFBRSxPQUFGO3dCQUNWLE9BQU8sUUFBUSxDQUFSLENBQVA7d0JBQ0EsU0FBUyxFQUFUO3dCQUNBLElBQUksQ0FBSjt3QkFDQSxHQU5KO3dCQU9JLENBUEosQ0FEZ0c7QUFTaEcsMkJBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxFQUFpQjtBQUN0Qiw0QkFBSSxRQUFRLENBQVIsRUFBVyxNQUFNLEtBQUssR0FBTCxDQUFOLENBQWYsQ0FEc0I7QUFFdEIsNEJBQUksT0FBTyxNQUFQLEVBQ0YsUUFBUSxNQUFSLEVBQWdCLEdBQWhCLEVBQXFCLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBckIsRUFERixLQUdFLE9BQU8sR0FBUCxJQUFjLENBQWQsQ0FIRjtxQkFGRjtBQU9BLDJCQUFPLE1BQVAsQ0FoQmdHO2lCQUEzQyxFQUF6RCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIG93bktleXMgPSByZXF1aXJlKCcuLyQub3duLWtleXMnKSxcbiAgICB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpLFxuICAgIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpLFxuICAgICAgICBzZXREZXNjID0gJC5zZXREZXNjLFxuICAgICAgICBnZXREZXNjID0gJC5nZXREZXNjLFxuICAgICAgICBrZXlzID0gb3duS2V5cyhPKSxcbiAgICAgICAgcmVzdWx0ID0ge30sXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIEQ7XG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gaSkge1xuICAgICAgRCA9IGdldERlc2MoTywga2V5ID0ga2V5c1tpKytdKTtcbiAgICAgIGlmIChrZXkgaW4gcmVzdWx0KVxuICAgICAgICBzZXREZXNjKHJlc3VsdCwga2V5LCBjcmVhdGVEZXNjKDAsIEQpKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmVzdWx0W2tleV0gPSBEO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
