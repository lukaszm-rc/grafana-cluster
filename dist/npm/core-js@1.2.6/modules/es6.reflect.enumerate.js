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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNJLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGlCQUFXLFFBQVEsZUFBUjs7QUFDWCxrQkFBWSxTQUFaLFNBQVksQ0FBUyxRQUFULEVBQW1CO0FBQ2pDLGFBQUssRUFBTCxHQUFVLFNBQVMsUUFBVCxDQUFWLENBRGlDO0FBRWpDLGFBQUssRUFBTCxHQUFVLENBQVYsQ0FGaUM7QUFHakMsWUFBSSxPQUFPLEtBQUssRUFBTCxHQUFVLEVBQVY7WUFDUCxHQURKLENBSGlDO0FBS2pDLGFBQUssR0FBTCxJQUFZLFFBQVo7QUFDRSxlQUFLLElBQUwsQ0FBVSxHQUFWO1NBREY7T0FMYzs7QUFRaEIsY0FBUSxpQkFBUixFQUEyQixTQUEzQixFQUFzQyxRQUF0QyxFQUFnRCxZQUFXO0FBQ3pELFlBQUksT0FBTyxJQUFQO1lBQ0EsT0FBTyxLQUFLLEVBQUw7WUFDUCxHQUZKLENBRHlEO0FBSXpELFdBQUc7QUFDRCxjQUFJLEtBQUssRUFBTCxJQUFXLEtBQUssTUFBTCxFQUNiLE9BQU87QUFDTCxtQkFBTyxTQUFQO0FBQ0Esa0JBQU0sSUFBTjtXQUZGLENBREY7U0FERixRQU1TLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFMLEVBQUwsQ0FBTixDQUFELElBQTJCLEtBQUssRUFBTCxDQUE3QixFQVZnRDtBQVd6RCxlQUFPO0FBQ0wsaUJBQU8sR0FBUDtBQUNBLGdCQUFNLEtBQU47U0FGRixDQVh5RDtPQUFYLENBQWhEO0FBZ0JBLGNBQVEsUUFBUSxDQUFSLEVBQVcsU0FBbkIsRUFBOEIsRUFBQyxXQUFXLFNBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUNqRSxpQkFBTyxJQUFJLFNBQUosQ0FBYyxNQUFkLENBQVAsQ0FEaUU7U0FBM0IsRUFBMUMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIEVudW1lcmF0ZSA9IGZ1bmN0aW9uKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBhbk9iamVjdChpdGVyYXRlZCk7XG4gIHRoaXMuX2kgPSAwO1xuICB2YXIga2V5cyA9IHRoaXMuX2sgPSBbXSxcbiAgICAgIGtleTtcbiAgZm9yIChrZXkgaW4gaXRlcmF0ZWQpXG4gICAga2V5cy5wdXNoKGtleSk7XG59O1xucmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJykoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24oKSB7XG4gIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgIGtleXMgPSB0aGF0Ll9rLFxuICAgICAga2V5O1xuICBkbyB7XG4gICAgaWYgKHRoYXQuX2kgPj0ga2V5cy5sZW5ndGgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICB9IHdoaWxlICghKChrZXkgPSBrZXlzW3RoYXQuX2krK10pIGluIHRoYXQuX3QpKTtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZToga2V5LFxuICAgIGRvbmU6IGZhbHNlXG4gIH07XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtlbnVtZXJhdGU6IGZ1bmN0aW9uIGVudW1lcmF0ZSh0YXJnZXQpIHtcbiAgICByZXR1cm4gbmV3IEVudW1lcmF0ZSh0YXJnZXQpO1xuICB9fSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
