/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, anObject, Enumerate;
  return {
    setters: [],
    execute: function () {
      $export = require('./$.export');
      anObject = require('./$.an-object');

      Enumerate = function Enumerate(iterated) {
        this._t = anObject(iterated);
        this._i = 0;
        var keys = this._k = [],
            key;
        for (key in iterated) {
          keys.push(key);
        }
      };

      require('./$.iter-create')(Enumerate, 'Object', function () {
        var that = this,
            keys = that._k,
            key;
        do {
          if (that._i >= keys.length) return {
            value: undefined,
            done: true
          };
        } while (!((key = keys[that._i++]) in that._t));
        return {
          value: key,
          done: false
        };
      });
      $export($export.S, 'Reflect', { enumerate: function enumerate(target) {
          return new Enumerate(target);
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0ksZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsaUJBQVcsUUFBUSxlQUFSOztBQUNYLGtCQUFZLFNBQVosU0FBWSxDQUFTLFFBQVQsRUFBbUI7QUFDakMsYUFBSyxFQUFMLEdBQVUsU0FBUyxRQUFULENBQVYsQ0FEaUM7QUFFakMsYUFBSyxFQUFMLEdBQVUsQ0FBVixDQUZpQztBQUdqQyxZQUFJLE9BQU8sS0FBSyxFQUFMLEdBQVUsRUFBVjtZQUNQLEdBREosQ0FIaUM7QUFLakMsYUFBSyxHQUFMLElBQVksUUFBWjtBQUNFLGVBQUssSUFBTCxDQUFVLEdBQVY7U0FERjtPQUxjOztBQVFoQixjQUFRLGlCQUFSLEVBQTJCLFNBQTNCLEVBQXNDLFFBQXRDLEVBQWdELFlBQVc7QUFDekQsWUFBSSxPQUFPLElBQVA7WUFDQSxPQUFPLEtBQUssRUFBTDtZQUNQLEdBRkosQ0FEeUQ7QUFJekQsV0FBRztBQUNELGNBQUksS0FBSyxFQUFMLElBQVcsS0FBSyxNQUFMLEVBQ2IsT0FBTztBQUNMLG1CQUFPLFNBQVA7QUFDQSxrQkFBTSxJQUFOO1dBRkYsQ0FERjtTQURGLFFBTVMsRUFBRSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUwsRUFBTCxDQUFOLENBQUQsSUFBMkIsS0FBSyxFQUFMLENBQTdCLEVBVmdEO0FBV3pELGVBQU87QUFDTCxpQkFBTyxHQUFQO0FBQ0EsZ0JBQU0sS0FBTjtTQUZGLENBWHlEO09BQVgsQ0FBaEQ7QUFnQkEsY0FBUSxRQUFRLENBQVIsRUFBVyxTQUFuQixFQUE4QixFQUFDLFdBQVcsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ2pFLGlCQUFPLElBQUksU0FBSixDQUFjLE1BQWQsQ0FBUCxDQURpRTtTQUEzQixFQUExQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBFbnVtZXJhdGUgPSBmdW5jdGlvbihpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gYW5PYmplY3QoaXRlcmF0ZWQpO1xuICB0aGlzLl9pID0gMDtcbiAgdmFyIGtleXMgPSB0aGlzLl9rID0gW10sXG4gICAgICBrZXk7XG4gIGZvciAoa2V5IGluIGl0ZXJhdGVkKVxuICAgIGtleXMucHVzaChrZXkpO1xufTtcbnJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpKEVudW1lcmF0ZSwgJ09iamVjdCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICBrZXlzID0gdGhhdC5fayxcbiAgICAgIGtleTtcbiAgZG8ge1xuICAgIGlmICh0aGF0Ll9pID49IGtleXMubGVuZ3RoKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgfTtcbiAgfSB3aGlsZSAoISgoa2V5ID0ga2V5c1t0aGF0Ll9pKytdKSBpbiB0aGF0Ll90KSk7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGtleSxcbiAgICBkb25lOiBmYWxzZVxuICB9O1xufSk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7ZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KSB7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
