'use strict';

System.register([], function (_export, _context) {
  var DateProto, INVALID_DATE, TO_STRING, $toString;
  return {
    setters: [],
    execute: function () {
      DateProto = Date.prototype;
      INVALID_DATE = 'Invalid Date';
      TO_STRING = 'toString';
      $toString = DateProto[TO_STRING];

      if (new Date(NaN) + '' != INVALID_DATE) {
        require('./$.redefine')(DateProto, TO_STRING, function toString() {
          var value = +this;
          return value === value ? $toString.call(this) : INVALID_DATE;
        });
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxrQkFBWSxLQUFLLFNBQUw7QUFDWixxQkFBZTtBQUNmLGtCQUFZO0FBQ1osa0JBQVksVUFBVSxTQUFWOztBQUNoQixVQUFJLElBQUksSUFBSixDQUFTLEdBQVQsSUFBZ0IsRUFBaEIsSUFBc0IsWUFBdEIsRUFBb0M7QUFDdEMsZ0JBQVEsY0FBUixFQUF3QixTQUF4QixFQUFtQyxTQUFuQyxFQUE4QyxTQUFTLFFBQVQsR0FBb0I7QUFDaEUsY0FBSSxRQUFRLENBQUMsSUFBRCxDQURvRDtBQUVoRSxpQkFBTyxVQUFVLEtBQVYsR0FBa0IsVUFBVSxJQUFWLENBQWUsSUFBZixDQUFsQixHQUF5QyxZQUF6QyxDQUZ5RDtTQUFwQixDQUE5QyxDQURzQztPQUF4QyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIERhdGVQcm90byA9IERhdGUucHJvdG90eXBlLFxuICAgIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnLFxuICAgIFRPX1NUUklORyA9ICd0b1N0cmluZycsXG4gICAgJHRvU3RyaW5nID0gRGF0ZVByb3RvW1RPX1NUUklOR107XG5pZiAobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSkge1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUnKShEYXRlUHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gK3RoaXM7XG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
