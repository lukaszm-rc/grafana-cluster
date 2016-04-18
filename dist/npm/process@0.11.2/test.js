'use strict';

System.register([], function (_export, _context) {
  var assert, ourProcess;

  function test(ourProcess) {
    describe('test arguments', function (t) {
      it('works', function (done) {
        var order = 0;
        ourProcess.nextTick(function (num) {
          assert.equal(num, order++, 'first one works');
          ourProcess.nextTick(function (num) {
            assert.equal(num, order++, 'recursive one is 4th');
          }, 3);
        }, 0);
        ourProcess.nextTick(function (num) {
          assert.equal(num, order++, 'second one starts');
          ourProcess.nextTick(function (num) {
            assert.equal(num, order++, 'this is third');
            ourProcess.nextTick(function (num) {
              assert.equal(num, order++, 'this is last');
              done();
            }, 5);
          }, 4);
        }, 1);
        ourProcess.nextTick(function (num) {
          assert.equal(num, order++, '3rd schedualed happens after the error');
        }, 2);
      });
    });
    describe('test errors', function (t) {
      it('works', function (done) {
        var order = 0;
        process.removeAllListeners('uncaughtException');
        process.once('uncaughtException', function (err) {
          assert.equal(2, order++, 'error is third');
          ourProcess.nextTick(function () {
            assert.equal(5, order++, 'schedualed in error is last');
            done();
          });
        });
        ourProcess.nextTick(function () {
          assert.equal(0, order++, 'first one works');
          ourProcess.nextTick(function () {
            assert.equal(4, order++, 'recursive one is 4th');
          });
        });
        ourProcess.nextTick(function () {
          assert.equal(1, order++, 'second one starts');
          throw new Error('an error is thrown');
        });
        ourProcess.nextTick(function () {
          assert.equal(3, order++, '3rd schedualed happens after the error');
        });
      });
    });
  }
  return {
    setters: [],
    execute: function () {
      assert = require('assert');
      ourProcess = require('./browser');

      describe('test against process', function () {
        test(process);
      });
      if (!process.browser) {
        describe('test against our shim', function () {
          test(ourProcess);
        });
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9wcm9jZXNzQDAuMTEuMi90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBV0EsV0FBUyxJQUFULENBQWMsVUFBZCxFQUEwQjtBQUN4QixhQUFTLGdCQUFULEVBQTJCLFVBQVMsQ0FBVCxFQUFZO0FBQ3JDLFNBQUcsT0FBSCxFQUFZLFVBQVMsSUFBVCxFQUFlO0FBQ3pCLFlBQUksUUFBUSxDQUFSLENBRHFCO0FBRXpCLG1CQUFXLFFBQVgsQ0FBb0IsVUFBUyxHQUFULEVBQWM7QUFDaEMsaUJBQU8sS0FBUCxDQUFhLEdBQWIsRUFBa0IsT0FBbEIsRUFBMkIsaUJBQTNCLEVBRGdDO0FBRWhDLHFCQUFXLFFBQVgsQ0FBb0IsVUFBUyxHQUFULEVBQWM7QUFDaEMsbUJBQU8sS0FBUCxDQUFhLEdBQWIsRUFBa0IsT0FBbEIsRUFBMkIsc0JBQTNCLEVBRGdDO1dBQWQsRUFFakIsQ0FGSCxFQUZnQztTQUFkLEVBS2pCLENBTEgsRUFGeUI7QUFRekIsbUJBQVcsUUFBWCxDQUFvQixVQUFTLEdBQVQsRUFBYztBQUNoQyxpQkFBTyxLQUFQLENBQWEsR0FBYixFQUFrQixPQUFsQixFQUEyQixtQkFBM0IsRUFEZ0M7QUFFaEMscUJBQVcsUUFBWCxDQUFvQixVQUFTLEdBQVQsRUFBYztBQUNoQyxtQkFBTyxLQUFQLENBQWEsR0FBYixFQUFrQixPQUFsQixFQUEyQixlQUEzQixFQURnQztBQUVoQyx1QkFBVyxRQUFYLENBQW9CLFVBQVMsR0FBVCxFQUFjO0FBQ2hDLHFCQUFPLEtBQVAsQ0FBYSxHQUFiLEVBQWtCLE9BQWxCLEVBQTJCLGNBQTNCLEVBRGdDO0FBRWhDLHFCQUZnQzthQUFkLEVBR2pCLENBSEgsRUFGZ0M7V0FBZCxFQU1qQixDQU5ILEVBRmdDO1NBQWQsRUFTakIsQ0FUSCxFQVJ5QjtBQWtCekIsbUJBQVcsUUFBWCxDQUFvQixVQUFTLEdBQVQsRUFBYztBQUNoQyxpQkFBTyxLQUFQLENBQWEsR0FBYixFQUFrQixPQUFsQixFQUEyQix3Q0FBM0IsRUFEZ0M7U0FBZCxFQUVqQixDQUZILEVBbEJ5QjtPQUFmLENBQVosQ0FEcUM7S0FBWixDQUEzQixDQUR3QjtBQXlCeEIsYUFBUyxhQUFULEVBQXdCLFVBQVMsQ0FBVCxFQUFZO0FBQ2xDLFNBQUcsT0FBSCxFQUFZLFVBQVMsSUFBVCxFQUFlO0FBQ3pCLFlBQUksUUFBUSxDQUFSLENBRHFCO0FBRXpCLGdCQUFRLGtCQUFSLENBQTJCLG1CQUEzQixFQUZ5QjtBQUd6QixnQkFBUSxJQUFSLENBQWEsbUJBQWIsRUFBa0MsVUFBUyxHQUFULEVBQWM7QUFDOUMsaUJBQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsT0FBaEIsRUFBeUIsZ0JBQXpCLEVBRDhDO0FBRTlDLHFCQUFXLFFBQVgsQ0FBb0IsWUFBVztBQUM3QixtQkFBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixPQUFoQixFQUF5Qiw2QkFBekIsRUFENkI7QUFFN0IsbUJBRjZCO1dBQVgsQ0FBcEIsQ0FGOEM7U0FBZCxDQUFsQyxDQUh5QjtBQVV6QixtQkFBVyxRQUFYLENBQW9CLFlBQVc7QUFDN0IsaUJBQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsT0FBaEIsRUFBeUIsaUJBQXpCLEVBRDZCO0FBRTdCLHFCQUFXLFFBQVgsQ0FBb0IsWUFBVztBQUM3QixtQkFBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixPQUFoQixFQUF5QixzQkFBekIsRUFENkI7V0FBWCxDQUFwQixDQUY2QjtTQUFYLENBQXBCLENBVnlCO0FBZ0J6QixtQkFBVyxRQUFYLENBQW9CLFlBQVc7QUFDN0IsaUJBQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsT0FBaEIsRUFBeUIsbUJBQXpCLEVBRDZCO0FBRTdCLGdCQUFPLElBQUksS0FBSixDQUFVLG9CQUFWLENBQVAsQ0FGNkI7U0FBWCxDQUFwQixDQWhCeUI7QUFvQnpCLG1CQUFXLFFBQVgsQ0FBb0IsWUFBVztBQUM3QixpQkFBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixPQUFoQixFQUF5Qix3Q0FBekIsRUFENkI7U0FBWCxDQUFwQixDQXBCeUI7T0FBZixDQUFaLENBRGtDO0tBQVosQ0FBeEIsQ0F6QndCO0dBQTFCOzs7O0FBVkksZUFBUyxRQUFRLFFBQVI7QUFDVCxtQkFBYSxRQUFRLFdBQVI7O0FBQ2pCLGVBQVMsc0JBQVQsRUFBaUMsWUFBVztBQUMxQyxhQUFLLE9BQUwsRUFEMEM7T0FBWCxDQUFqQztBQUdBLFVBQUksQ0FBQyxRQUFRLE9BQVIsRUFBaUI7QUFDcEIsaUJBQVMsdUJBQVQsRUFBa0MsWUFBVztBQUMzQyxlQUFLLFVBQUwsRUFEMkM7U0FBWCxDQUFsQyxDQURvQjtPQUF0QiIsImZpbGUiOiJucG0vcHJvY2Vzc0AwLjExLjIvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xudmFyIG91clByb2Nlc3MgPSByZXF1aXJlKCcuL2Jyb3dzZXInKTtcbmRlc2NyaWJlKCd0ZXN0IGFnYWluc3QgcHJvY2VzcycsIGZ1bmN0aW9uKCkge1xuICB0ZXN0KHByb2Nlc3MpO1xufSk7XG5pZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICBkZXNjcmliZSgndGVzdCBhZ2FpbnN0IG91ciBzaGltJywgZnVuY3Rpb24oKSB7XG4gICAgdGVzdChvdXJQcm9jZXNzKTtcbiAgfSk7XG59XG5mdW5jdGlvbiB0ZXN0KG91clByb2Nlc3MpIHtcbiAgZGVzY3JpYmUoJ3Rlc3QgYXJndW1lbnRzJywgZnVuY3Rpb24odCkge1xuICAgIGl0KCd3b3JrcycsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIHZhciBvcmRlciA9IDA7XG4gICAgICBvdXJQcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKG51bSkge1xuICAgICAgICBhc3NlcnQuZXF1YWwobnVtLCBvcmRlcisrLCAnZmlyc3Qgb25lIHdvcmtzJyk7XG4gICAgICAgIG91clByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24obnVtKSB7XG4gICAgICAgICAgYXNzZXJ0LmVxdWFsKG51bSwgb3JkZXIrKywgJ3JlY3Vyc2l2ZSBvbmUgaXMgNHRoJyk7XG4gICAgICAgIH0sIDMpO1xuICAgICAgfSwgMCk7XG4gICAgICBvdXJQcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKG51bSkge1xuICAgICAgICBhc3NlcnQuZXF1YWwobnVtLCBvcmRlcisrLCAnc2Vjb25kIG9uZSBzdGFydHMnKTtcbiAgICAgICAgb3VyUHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbihudW0pIHtcbiAgICAgICAgICBhc3NlcnQuZXF1YWwobnVtLCBvcmRlcisrLCAndGhpcyBpcyB0aGlyZCcpO1xuICAgICAgICAgIG91clByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24obnVtKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwobnVtLCBvcmRlcisrLCAndGhpcyBpcyBsYXN0Jyk7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfSwgNSk7XG4gICAgICAgIH0sIDQpO1xuICAgICAgfSwgMSk7XG4gICAgICBvdXJQcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKG51bSkge1xuICAgICAgICBhc3NlcnQuZXF1YWwobnVtLCBvcmRlcisrLCAnM3JkIHNjaGVkdWFsZWQgaGFwcGVucyBhZnRlciB0aGUgZXJyb3InKTtcbiAgICAgIH0sIDIpO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3Rlc3QgZXJyb3JzJywgZnVuY3Rpb24odCkge1xuICAgIGl0KCd3b3JrcycsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgIHZhciBvcmRlciA9IDA7XG4gICAgICBwcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycygndW5jYXVnaHRFeGNlcHRpb24nKTtcbiAgICAgIHByb2Nlc3Mub25jZSgndW5jYXVnaHRFeGNlcHRpb24nLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKDIsIG9yZGVyKyssICdlcnJvciBpcyB0aGlyZCcpO1xuICAgICAgICBvdXJQcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGFzc2VydC5lcXVhbCg1LCBvcmRlcisrLCAnc2NoZWR1YWxlZCBpbiBlcnJvciBpcyBsYXN0Jyk7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgb3VyUHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKDAsIG9yZGVyKyssICdmaXJzdCBvbmUgd29ya3MnKTtcbiAgICAgICAgb3VyUHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICBhc3NlcnQuZXF1YWwoNCwgb3JkZXIrKywgJ3JlY3Vyc2l2ZSBvbmUgaXMgNHRoJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBvdXJQcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBhc3NlcnQuZXF1YWwoMSwgb3JkZXIrKywgJ3NlY29uZCBvbmUgc3RhcnRzJyk7XG4gICAgICAgIHRocm93IChuZXcgRXJyb3IoJ2FuIGVycm9yIGlzIHRocm93bicpKTtcbiAgICAgIH0pO1xuICAgICAgb3VyUHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKDMsIG9yZGVyKyssICczcmQgc2NoZWR1YWxlZCBoYXBwZW5zIGFmdGVyIHRoZSBlcnJvcicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
