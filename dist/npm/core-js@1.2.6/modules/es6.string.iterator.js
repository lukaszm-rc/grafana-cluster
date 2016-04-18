/* */
'use strict';

System.register([], function (_export, _context) {
  var $at;
  return {
    setters: [],
    execute: function () {
      $at = require('./$.string-at')(true);

      require('./$.iter-define')(String, 'String', function (iterated) {
        this._t = String(iterated);
        this._i = 0;
      }, function () {
        var O = this._t,
            index = this._i,
            point;
        if (index >= O.length) return {
          value: undefined,
          done: true
        };
        point = $at(O, index);
        this._i += point.length;
        return {
          value: point,
          done: false
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7QUFDSSxZQUFNLFFBQVEsZUFBUixFQUF5QixJQUF6Qjs7QUFDVixjQUFRLGlCQUFSLEVBQTJCLE1BQTNCLEVBQW1DLFFBQW5DLEVBQTZDLFVBQVMsUUFBVCxFQUFtQjtBQUM5RCxhQUFLLEVBQUwsR0FBVSxPQUFPLFFBQVAsQ0FBVixDQUQ4RDtBQUU5RCxhQUFLLEVBQUwsR0FBVSxDQUFWLENBRjhEO09BQW5CLEVBRzFDLFlBQVc7QUFDWixZQUFJLElBQUksS0FBSyxFQUFMO1lBQ0osUUFBUSxLQUFLLEVBQUw7WUFDUixLQUZKLENBRFk7QUFJWixZQUFJLFNBQVMsRUFBRSxNQUFGLEVBQ1gsT0FBTztBQUNMLGlCQUFPLFNBQVA7QUFDQSxnQkFBTSxJQUFOO1NBRkYsQ0FERjtBQUtBLGdCQUFRLElBQUksQ0FBSixFQUFPLEtBQVAsQ0FBUixDQVRZO0FBVVosYUFBSyxFQUFMLElBQVcsTUFBTSxNQUFOLENBVkM7QUFXWixlQUFPO0FBQ0wsaUJBQU8sS0FBUDtBQUNBLGdCQUFNLEtBQU47U0FGRixDQVhZO09BQVgsQ0FISCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTtcbiAgdGhpcy5faSA9IDA7XG59LCBmdW5jdGlvbigpIHtcbiAgdmFyIE8gPSB0aGlzLl90LFxuICAgICAgaW5kZXggPSB0aGlzLl9pLFxuICAgICAgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aClcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6IHRydWVcbiAgICB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiBwb2ludCxcbiAgICBkb25lOiBmYWxzZVxuICB9O1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
