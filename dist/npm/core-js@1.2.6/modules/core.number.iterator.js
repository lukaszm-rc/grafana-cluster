/* */
'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      require('./$.iter-define')(Number, 'Number', function (iterated) {
        this._l = +iterated;
        this._i = 0;
      }, function () {
        var i = this._i++,
            done = !(i < this._l);
        return {
          done: done,
          value: done ? undefined : i
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvY29yZS5udW1iZXIuaXRlcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7QUFDQSxjQUFRLGlCQUFSLEVBQTJCLE1BQTNCLEVBQW1DLFFBQW5DLEVBQTZDLFVBQVMsUUFBVCxFQUFtQjtBQUM5RCxhQUFLLEVBQUwsR0FBVSxDQUFDLFFBQUQsQ0FEb0Q7QUFFOUQsYUFBSyxFQUFMLEdBQVUsQ0FBVixDQUY4RDtPQUFuQixFQUcxQyxZQUFXO0FBQ1osWUFBSSxJQUFJLEtBQUssRUFBTCxFQUFKO1lBQ0EsT0FBTyxFQUFFLElBQUksS0FBSyxFQUFMLENBQU4sQ0FGQztBQUdaLGVBQU87QUFDTCxnQkFBTSxJQUFOO0FBQ0EsaUJBQU8sT0FBTyxTQUFQLEdBQW1CLENBQW5CO1NBRlQsQ0FIWTtPQUFYLENBSEgiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9jb3JlLm51bWJlci5pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoTnVtYmVyLCAnTnVtYmVyJywgZnVuY3Rpb24oaXRlcmF0ZWQpIHtcbiAgdGhpcy5fbCA9ICtpdGVyYXRlZDtcbiAgdGhpcy5faSA9IDA7XG59LCBmdW5jdGlvbigpIHtcbiAgdmFyIGkgPSB0aGlzLl9pKyssXG4gICAgICBkb25lID0gIShpIDwgdGhpcy5fbCk7XG4gIHJldHVybiB7XG4gICAgZG9uZTogZG9uZSxcbiAgICB2YWx1ZTogZG9uZSA/IHVuZGVmaW5lZCA6IGlcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
