"use strict";

System.register([], function (_export, _context) {
                  return {
                                    setters: [],
                                    execute: function () {
                                                      // fast apply, http://jsperf.lnkit.com/fast-apply/5
                                                      module.exports = function (fn, args, that) {
                                                                        var un = that === undefined;
                                                                        switch (args.length) {
                                                                                          case 0:
                                                                                                            return un ? fn() : fn.call(that);
                                                                                          case 1:
                                                                                                            return un ? fn(args[0]) : fn.call(that, args[0]);
                                                                                          case 2:
                                                                                                            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                                                          case 3:
                                                                                                            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                                                          case 4:
                                                                                                            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                                                        }return fn.apply(that, args);
                                                      };
                                    }
                  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvJC5pbnZva2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLDZEQUFPLE9BQVAsR0FBaUIsVUFBUyxFQUFULEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF3QjtBQUN2Qyw0RUFBSSxLQUFLLFNBQVMsU0FBVCxDQUQ4QjtBQUV2QyxnRkFBTyxLQUFLLE1BQUw7QUFDTCwrRkFBSyxDQUFMO0FBQVEsbUhBQU8sS0FBSyxJQUFMLEdBQ0ssR0FBRyxJQUFILENBQVEsSUFBUixDQURMLENBQWY7QUFERiwrRkFHTyxDQUFMO0FBQVEsbUhBQU8sS0FBSyxHQUFHLEtBQUssQ0FBTCxDQUFILENBQUwsR0FDSyxHQUFHLElBQUgsQ0FBUSxJQUFSLEVBQWMsS0FBSyxDQUFMLENBQWQsQ0FETCxDQUFmO0FBSEYsK0ZBS08sQ0FBTDtBQUFRLG1IQUFPLEtBQUssR0FBRyxLQUFLLENBQUwsQ0FBSCxFQUFZLEtBQUssQ0FBTCxDQUFaLENBQUwsR0FDSyxHQUFHLElBQUgsQ0FBUSxJQUFSLEVBQWMsS0FBSyxDQUFMLENBQWQsRUFBdUIsS0FBSyxDQUFMLENBQXZCLENBREwsQ0FBZjtBQUxGLCtGQU9PLENBQUw7QUFBUSxtSEFBTyxLQUFLLEdBQUcsS0FBSyxDQUFMLENBQUgsRUFBWSxLQUFLLENBQUwsQ0FBWixFQUFxQixLQUFLLENBQUwsQ0FBckIsQ0FBTCxHQUNLLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxLQUFLLENBQUwsQ0FBZCxFQUF1QixLQUFLLENBQUwsQ0FBdkIsRUFBZ0MsS0FBSyxDQUFMLENBQWhDLENBREwsQ0FBZjtBQVBGLCtGQVNPLENBQUw7QUFBUSxtSEFBTyxLQUFLLEdBQUcsS0FBSyxDQUFMLENBQUgsRUFBWSxLQUFLLENBQUwsQ0FBWixFQUFxQixLQUFLLENBQUwsQ0FBckIsRUFBOEIsS0FBSyxDQUFMLENBQTlCLENBQUwsR0FDSyxHQUFHLElBQUgsQ0FBUSxJQUFSLEVBQWMsS0FBSyxDQUFMLENBQWQsRUFBdUIsS0FBSyxDQUFMLENBQXZCLEVBQWdDLEtBQUssQ0FBTCxDQUFoQyxFQUF5QyxLQUFLLENBQUwsQ0FBekMsQ0FETCxDQUFmO0FBVEYseUVBRnVDLE9BYWpCLEdBQUcsS0FBSCxDQUFTLElBQVQsRUFBZSxJQUFmLENBQXBCLENBYnFDO3VEQUF4QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzLyQuaW52b2tlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
