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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmludm9rZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsNkRBQU8sT0FBUCxHQUFpQixVQUFTLEVBQVQsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXdCO0FBQ3ZDLDRFQUFJLEtBQUssU0FBUyxTQUFULENBRDhCO0FBRXZDLGdGQUFPLEtBQUssTUFBTDtBQUNMLCtGQUFLLENBQUw7QUFBUSxtSEFBTyxLQUFLLElBQUwsR0FDSyxHQUFHLElBQUgsQ0FBUSxJQUFSLENBREwsQ0FBZjtBQURGLCtGQUdPLENBQUw7QUFBUSxtSEFBTyxLQUFLLEdBQUcsS0FBSyxDQUFMLENBQUgsQ0FBTCxHQUNLLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxLQUFLLENBQUwsQ0FBZCxDQURMLENBQWY7QUFIRiwrRkFLTyxDQUFMO0FBQVEsbUhBQU8sS0FBSyxHQUFHLEtBQUssQ0FBTCxDQUFILEVBQVksS0FBSyxDQUFMLENBQVosQ0FBTCxHQUNLLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxLQUFLLENBQUwsQ0FBZCxFQUF1QixLQUFLLENBQUwsQ0FBdkIsQ0FETCxDQUFmO0FBTEYsK0ZBT08sQ0FBTDtBQUFRLG1IQUFPLEtBQUssR0FBRyxLQUFLLENBQUwsQ0FBSCxFQUFZLEtBQUssQ0FBTCxDQUFaLEVBQXFCLEtBQUssQ0FBTCxDQUFyQixDQUFMLEdBQ0ssR0FBRyxJQUFILENBQVEsSUFBUixFQUFjLEtBQUssQ0FBTCxDQUFkLEVBQXVCLEtBQUssQ0FBTCxDQUF2QixFQUFnQyxLQUFLLENBQUwsQ0FBaEMsQ0FETCxDQUFmO0FBUEYsK0ZBU08sQ0FBTDtBQUFRLG1IQUFPLEtBQUssR0FBRyxLQUFLLENBQUwsQ0FBSCxFQUFZLEtBQUssQ0FBTCxDQUFaLEVBQXFCLEtBQUssQ0FBTCxDQUFyQixFQUE4QixLQUFLLENBQUwsQ0FBOUIsQ0FBTCxHQUNLLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxLQUFLLENBQUwsQ0FBZCxFQUF1QixLQUFLLENBQUwsQ0FBdkIsRUFBZ0MsS0FBSyxDQUFMLENBQWhDLEVBQXlDLEtBQUssQ0FBTCxDQUF6QyxDQURMLENBQWY7QUFURix5RUFGdUMsT0FhakIsR0FBRyxLQUFILENBQVMsSUFBVCxFQUFlLElBQWYsQ0FBcEIsQ0FicUM7dURBQXhCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy8kLmludm9rZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
