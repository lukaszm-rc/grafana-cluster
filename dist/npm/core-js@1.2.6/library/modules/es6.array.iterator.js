/* */
'use strict';

System.register([], function (_export, _context) {
  var addToUnscopables, step, Iterators, toIObject;
  return {
    setters: [],
    execute: function () {
      addToUnscopables = require('./$.add-to-unscopables');
      step = require('./$.iter-step');
      Iterators = require('./$.iterators');
      toIObject = require('./$.to-iobject');

      module.exports = require('./$.iter-define')(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated);
        this._i = 0;
        this._k = kind;
      }, function () {
        var O = this._t,
            kind = this._k,
            index = this._i++;
        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values');
      Iterators.Arguments = Iterators.Array;
      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7O0FBQ0kseUJBQW1CLFFBQVEsd0JBQVI7QUFDbkIsYUFBTyxRQUFRLGVBQVI7QUFDUCxrQkFBWSxRQUFRLGVBQVI7QUFDWixrQkFBWSxRQUFRLGdCQUFSOztBQUNoQixhQUFPLE9BQVAsR0FBaUIsUUFBUSxpQkFBUixFQUEyQixLQUEzQixFQUFrQyxPQUFsQyxFQUEyQyxVQUFTLFFBQVQsRUFBbUIsSUFBbkIsRUFBeUI7QUFDbkYsYUFBSyxFQUFMLEdBQVUsVUFBVSxRQUFWLENBQVYsQ0FEbUY7QUFFbkYsYUFBSyxFQUFMLEdBQVUsQ0FBVixDQUZtRjtBQUduRixhQUFLLEVBQUwsR0FBVSxJQUFWLENBSG1GO09BQXpCLEVBSXpELFlBQVc7QUFDWixZQUFJLElBQUksS0FBSyxFQUFMO1lBQ0osT0FBTyxLQUFLLEVBQUw7WUFDUCxRQUFRLEtBQUssRUFBTCxFQUFSLENBSFE7QUFJWixZQUFJLENBQUMsQ0FBRCxJQUFNLFNBQVMsRUFBRSxNQUFGLEVBQVU7QUFDM0IsZUFBSyxFQUFMLEdBQVUsU0FBVixDQUQyQjtBQUUzQixpQkFBTyxLQUFLLENBQUwsQ0FBUCxDQUYyQjtTQUE3QjtBQUlBLFlBQUksUUFBUSxNQUFSLEVBQ0YsT0FBTyxLQUFLLENBQUwsRUFBUSxLQUFSLENBQVAsQ0FERjtBQUVBLFlBQUksUUFBUSxRQUFSLEVBQ0YsT0FBTyxLQUFLLENBQUwsRUFBUSxFQUFFLEtBQUYsQ0FBUixDQUFQLENBREY7QUFFQSxlQUFPLEtBQUssQ0FBTCxFQUFRLENBQUMsS0FBRCxFQUFRLEVBQUUsS0FBRixDQUFSLENBQVIsQ0FBUCxDQVpZO09BQVgsRUFhQSxRQWpCYyxDQUFqQjtBQWtCQSxnQkFBVSxTQUFWLEdBQXNCLFVBQVUsS0FBVjtBQUN0Qix1QkFBaUIsTUFBakI7QUFDQSx1QkFBaUIsUUFBakI7QUFDQSx1QkFBaUIsU0FBakIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJyksXG4gICAgc3RlcCA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKSxcbiAgICBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyksXG4gICAgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpO1xuICB0aGlzLl9pID0gMDtcbiAgdGhpcy5fayA9IGtpbmQ7XG59LCBmdW5jdGlvbigpIHtcbiAgdmFyIE8gPSB0aGlzLl90LFxuICAgICAga2luZCA9IHRoaXMuX2ssXG4gICAgICBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpXG4gICAgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJylcbiAgICByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
