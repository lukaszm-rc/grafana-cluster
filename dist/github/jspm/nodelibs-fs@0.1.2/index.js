'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      if (System._nodeRequire) {
        module.exports = System._nodeRequire('fs');
      } else {

        exports.readFileSync = function (address) {
          var output;
          var xhr = new XMLHttpRequest();
          xhr.open('GET', address, false);
          xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
              var status = xhr.status;
              if (status > 399 && status < 600 || status == 400) {
                throw 'File read error on ' + address;
              } else output = xhr.responseText;
            }
          };
          xhr.send(null);
          return output;
        };
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9qc3BtL25vZGVsaWJzLWZzQDAuMS4yL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxVQUFJLE9BQU8sWUFBUCxFQUFxQjtBQUN2QixlQUFPLE9BQVAsR0FBaUIsT0FBTyxZQUFQLENBQW9CLElBQXBCLENBQWpCLENBRHVCO09BQXpCLE1BR0s7O0FBRUgsZ0JBQVEsWUFBUixHQUF1QixVQUFTLE9BQVQsRUFBa0I7QUFDdkMsY0FBSSxNQUFKLENBRHVDO0FBRXZDLGNBQUksTUFBTSxJQUFJLGNBQUosRUFBTixDQUZtQztBQUd2QyxjQUFJLElBQUosQ0FBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLEtBQXpCLEVBSHVDO0FBSXZDLGNBQUksa0JBQUosR0FBeUIsVUFBUyxDQUFULEVBQVk7QUFDbkMsZ0JBQUksSUFBSSxVQUFKLElBQWtCLENBQWxCLEVBQXFCO0FBQ3ZCLGtCQUFJLFNBQVMsSUFBSSxNQUFKLENBRFU7QUFFdkIsa0JBQUksTUFBQyxHQUFTLEdBQVQsSUFBZ0IsU0FBUyxHQUFULElBQWlCLFVBQVUsR0FBVixFQUFlO0FBQ25ELHNCQUFNLHdCQUF3QixPQUF4QixDQUQ2QztlQUFyRCxNQUlFLFNBQVMsSUFBSSxZQUFKLENBSlg7YUFGRjtXQUR1QixDQUpjO0FBY3ZDLGNBQUksSUFBSixDQUFTLElBQVQsRUFkdUM7QUFldkMsaUJBQU8sTUFBUCxDQWZ1QztTQUFsQixDQUZwQjtPQUhMIiwiZmlsZSI6ImdpdGh1Yi9qc3BtL25vZGVsaWJzLWZzQDAuMS4yL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5pZiAoU3lzdGVtLl9ub2RlUmVxdWlyZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IFN5c3RlbS5fbm9kZVJlcXVpcmUoJ2ZzJyk7XG59XG5lbHNlIHtcblxuICBleHBvcnRzLnJlYWRGaWxlU3luYyA9IGZ1bmN0aW9uKGFkZHJlc3MpIHtcbiAgICB2YXIgb3V0cHV0O1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignR0VUJywgYWRkcmVzcywgZmFsc2UpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgaWYgKChzdGF0dXMgPiAzOTkgJiYgc3RhdHVzIDwgNjAwKSB8fCBzdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgICAgdGhyb3cgJ0ZpbGUgcmVhZCBlcnJvciBvbiAnICsgYWRkcmVzcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgb3V0cHV0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQobnVsbCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
