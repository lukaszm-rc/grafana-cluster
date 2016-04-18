'use strict';

System.register([], function (_export, _context) {
  var _typeof, assert, keys;

  function makeBlock(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      return f.apply(this, args);
    };
  }

  function thrower(errorConstructor) {
    throw new errorConstructor('test');
  }
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      assert = require('./assert');
      keys = Object.keys;
      test('assert.ok', function () {
        assert.throws(makeBlock(assert, false), assert.AssertionError, 'ok(false)');
        assert.doesNotThrow(makeBlock(assert, true), assert.AssertionError, 'ok(true)');
        assert.doesNotThrow(makeBlock(assert, 'test', 'ok(\'test\')'));
        assert.throws(makeBlock(assert.ok, false), assert.AssertionError, 'ok(false)');
        assert.doesNotThrow(makeBlock(assert.ok, true), assert.AssertionError, 'ok(true)');
        assert.doesNotThrow(makeBlock(assert.ok, 'test'), 'ok(\'test\')');
      });
      test('assert.equal', function () {
        assert.throws(makeBlock(assert.equal, true, false), assert.AssertionError, 'equal');
        assert.doesNotThrow(makeBlock(assert.equal, null, null), 'equal');
        assert.doesNotThrow(makeBlock(assert.equal, undefined, undefined), 'equal');
        assert.doesNotThrow(makeBlock(assert.equal, null, undefined), 'equal');
        assert.doesNotThrow(makeBlock(assert.equal, true, true), 'equal');
        assert.doesNotThrow(makeBlock(assert.equal, 2, '2'), 'equal');
        assert.doesNotThrow(makeBlock(assert.notEqual, true, false), 'notEqual');
        assert.throws(makeBlock(assert.notEqual, true, true), assert.AssertionError, 'notEqual');
      });
      test('assert.strictEqual', function () {
        assert.throws(makeBlock(assert.strictEqual, 2, '2'), assert.AssertionError, 'strictEqual');
        assert.throws(makeBlock(assert.strictEqual, null, undefined), assert.AssertionError, 'strictEqual');
        assert.doesNotThrow(makeBlock(assert.notStrictEqual, 2, '2'), 'notStrictEqual');
      });
      test('assert.deepEqual - 7.2', function () {
        assert.doesNotThrow(makeBlock(assert.deepEqual, new Date(2000, 3, 14), new Date(2000, 3, 14)), 'deepEqual date');
        assert.throws(makeBlock(assert.deepEqual, new Date(), new Date(2000, 3, 14)), assert.AssertionError, 'deepEqual date');
      });
      test('assert.deepEqual - 7.3', function () {
        assert.doesNotThrow(makeBlock(assert.deepEqual, /a/, /a/));
        assert.doesNotThrow(makeBlock(assert.deepEqual, /a/g, /a/g));
        assert.doesNotThrow(makeBlock(assert.deepEqual, /a/i, /a/i));
        assert.doesNotThrow(makeBlock(assert.deepEqual, /a/m, /a/m));
        assert.doesNotThrow(makeBlock(assert.deepEqual, /a/igm, /a/igm));
        assert.throws(makeBlock(assert.deepEqual, /ab/, /a/));
        assert.throws(makeBlock(assert.deepEqual, /a/g, /a/));
        assert.throws(makeBlock(assert.deepEqual, /a/i, /a/));
        assert.throws(makeBlock(assert.deepEqual, /a/m, /a/));
        assert.throws(makeBlock(assert.deepEqual, /a/igm, /a/im));
        var re1 = /a/;
        re1.lastIndex = 3;
        assert.throws(makeBlock(assert.deepEqual, re1, /a/));
      });
      test('assert.deepEqual - 7.4', function () {
        assert.doesNotThrow(makeBlock(assert.deepEqual, 4, '4'), 'deepEqual == check');
        assert.doesNotThrow(makeBlock(assert.deepEqual, true, 1), 'deepEqual == check');
        assert.throws(makeBlock(assert.deepEqual, 4, '5'), assert.AssertionError, 'deepEqual == check');
      });
      test('assert.deepEqual - 7.5', function () {
        assert.doesNotThrow(makeBlock(assert.deepEqual, { a: 4 }, { a: 4 }));
        assert.doesNotThrow(makeBlock(assert.deepEqual, {
          a: 4,
          b: '2'
        }, {
          a: 4,
          b: '2'
        }));
        assert.doesNotThrow(makeBlock(assert.deepEqual, [4], ['4']));
        assert.throws(makeBlock(assert.deepEqual, { a: 4 }, {
          a: 4,
          b: true
        }), assert.AssertionError);
        assert.doesNotThrow(makeBlock(assert.deepEqual, ['a'], { 0: 'a' }));
        assert.doesNotThrow(makeBlock(assert.deepEqual, {
          a: 4,
          b: '1'
        }, {
          b: '1',
          a: 4
        }));
        var a1 = [1, 2, 3];
        var a2 = [1, 2, 3];
        a1.a = 'test';
        a1.b = true;
        a2.b = true;
        a2.a = 'test';
        assert.throws(makeBlock(assert.deepEqual, keys(a1), keys(a2)), assert.AssertionError);
        assert.doesNotThrow(makeBlock(assert.deepEqual, a1, a2));
      });
      test('assert.deepEqual - instances', function () {
        var nbRoot = { toString: function toString() {
            return this.first + ' ' + this.last;
          } };
        function nameBuilder(first, last) {
          this.first = first;
          this.last = last;
          return this;
        }
        nameBuilder.prototype = nbRoot;
        function nameBuilder2(first, last) {
          this.first = first;
          this.last = last;
          return this;
        }
        nameBuilder2.prototype = nbRoot;
        var nb1 = new nameBuilder('Ryan', 'Dahl');
        var nb2 = new nameBuilder2('Ryan', 'Dahl');
        assert.doesNotThrow(makeBlock(assert.deepEqual, nb1, nb2));
        nameBuilder2.prototype = Object;
        nb2 = new nameBuilder2('Ryan', 'Dahl');
        assert.throws(makeBlock(assert.deepEqual, nb1, nb2), assert.AssertionError);
      });
      test('assert.deepEqual - ES6 primitives', function () {
        assert.throws(makeBlock(assert.deepEqual, null, {}), assert.AssertionError);
        assert.throws(makeBlock(assert.deepEqual, undefined, {}), assert.AssertionError);
        assert.throws(makeBlock(assert.deepEqual, 'a', ['a']), assert.AssertionError);
        assert.throws(makeBlock(assert.deepEqual, 'a', { 0: 'a' }), assert.AssertionError);
        assert.throws(makeBlock(assert.deepEqual, 1, {}), assert.AssertionError);
        assert.throws(makeBlock(assert.deepEqual, true, {}), assert.AssertionError);
        if ((typeof Symbol === 'undefined' ? 'undefined' : _typeof(Symbol)) === 'symbol') {
          assert.throws(makeBlock(assert.deepEqual, Symbol(), {}), assert.AssertionError);
        }
      });
      test('assert.deepEqual - object wrappers', function () {
        assert.doesNotThrow(makeBlock(assert.deepEqual, new String('a'), ['a']));
        assert.doesNotThrow(makeBlock(assert.deepEqual, new String('a'), { 0: 'a' }));
        assert.doesNotThrow(makeBlock(assert.deepEqual, new Number(1), {}));
        assert.doesNotThrow(makeBlock(assert.deepEqual, new Boolean(true), {}));
      });test('assert - Testing the throwing', function () {
        var aethrow = makeBlock(thrower, assert.AssertionError);
        aethrow = makeBlock(thrower, assert.AssertionError);
        assert.throws(makeBlock(thrower, assert.AssertionError), assert.AssertionError, 'message');
        assert.throws(makeBlock(thrower, assert.AssertionError), assert.AssertionError);
        assert.throws(makeBlock(thrower, assert.AssertionError));
        assert.throws(makeBlock(thrower, TypeError));
        var threw = false;
        try {
          assert.throws(makeBlock(thrower, TypeError), assert.AssertionError);
        } catch (e) {
          threw = true;
          assert.ok(e instanceof TypeError, 'type');
        }
        assert.equal(true, threw, 'a.throws with an explicit error is eating extra errors', assert.AssertionError);
        threw = false;
        try {
          assert.doesNotThrow(makeBlock(thrower, TypeError), assert.AssertionError);
        } catch (e) {
          threw = true;
          assert.ok(e instanceof TypeError);
        }
        assert.equal(true, threw, 'a.doesNotThrow with an explicit error is eating extra errors');
        try {
          assert.doesNotThrow(makeBlock(thrower, TypeError), TypeError);
        } catch (e) {
          threw = true;
          assert.ok(e instanceof assert.AssertionError);
        }
        assert.equal(true, threw, 'a.doesNotThrow is not catching type matching errors');
      });
      test('assert.ifError', function () {
        assert.throws(function () {
          assert.ifError(new Error('test error'));
        });
        assert.doesNotThrow(function () {
          assert.ifError(null);
        });
        assert.doesNotThrow(function () {
          assert.ifError();
        });
      });
      test('assert - make sure that validating using constructor really works', function () {
        var threw = false;
        try {
          assert.throws(function () {
            throw {};
          }, Array);
        } catch (e) {
          threw = true;
        }
        assert.ok(threw, 'wrong constructor validation');
      });
      test('assert -  use a RegExp to validate error message', function () {
        assert.throws(makeBlock(thrower, TypeError), /test/);
      });
      test('assert - se a fn to validate error object', function () {
        assert.throws(makeBlock(thrower, TypeError), function (err) {
          if (err instanceof TypeError && /test/.test(err)) {
            return true;
          }
        });
      });
      test('assert - Make sure deepEqual doesn\'t loop forever on circular refs', function () {
        var b = {};
        b.b = b;
        var c = {};
        c.b = c;
        var gotError = false;
        try {
          assert.deepEqual(b, c);
        } catch (e) {
          gotError = true;
        }
        assert.ok(gotError);
      });
      test('assert - Ensure reflexivity of deepEqual with `arguments` objects', function () {
        var args = function () {
          return arguments;
        }();
        assert.throws(makeBlock(assert.deepEqual, [], args), assert.AssertionError);
        assert.throws(makeBlock(assert.deepEqual, args, []), assert.AssertionError);
      });
      test('assert - test assertion message', function () {
        function testAssertionMessage(actual, expected) {
          try {
            assert.equal(actual, '');
          } catch (e) {
            assert.equal(e.toString(), ['AssertionError:', expected, '==', '""'].join(' '));
          }
        }
        testAssertionMessage(undefined, '"undefined"');
        testAssertionMessage(null, 'null');
        testAssertionMessage(true, 'true');
        testAssertionMessage(false, 'false');
        testAssertionMessage(0, '0');
        testAssertionMessage(100, '100');
        testAssertionMessage(NaN, '"NaN"');
        testAssertionMessage(Infinity, '"Infinity"');
        testAssertionMessage(-Infinity, '"-Infinity"');
        testAssertionMessage('', '""');
        testAssertionMessage('foo', '"foo"');
        testAssertionMessage([], '[]');
        testAssertionMessage([1, 2, 3], '[1,2,3]');
        testAssertionMessage(/a/, '"/a/"');
        testAssertionMessage(function f() {}, '"function f() {}"');
        testAssertionMessage({}, '{}');
        testAssertionMessage({
          a: undefined,
          b: null
        }, '{"a":"undefined","b":null}');
        testAssertionMessage({
          a: NaN,
          b: Infinity,
          c: -Infinity
        }, '{"a":"NaN","b":"Infinity","c":"-Infinity"}');
      });
      test('assert - regressions from node.js testcase', function () {
        var threw = false;
        try {
          assert.throws(function () {
            assert.ifError(null);
          });
        } catch (e) {
          threw = true;
          assert.equal(e.message, 'Missing expected exception..');
        }
        assert.ok(threw);
        try {
          assert.equal(1, 2);
        } catch (e) {
          assert.equal(e.toString().split('\n')[0], 'AssertionError: 1 == 2');
        }
        try {
          assert.equal(1, 2, 'oh no');
        } catch (e) {
          assert.equal(e.toString().split('\n')[0], 'AssertionError: oh no');
        }
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QkFBeEIsRUFGVTtTQUFWO0FBSUYsZUFBTyxFQUFQLENBQVUsS0FBVixFQVY0RDtBQVc1RCxZQUFJO0FBQ0YsaUJBQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFERTtTQUFKLENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixpQkFBTyxLQUFQLENBQWEsRUFBRSxRQUFGLEdBQWEsS0FBYixDQUFtQixJQUFuQixFQUF5QixDQUF6QixDQUFiLEVBQTBDLHdCQUExQyxFQURVO1NBQVY7QUFHRixZQUFJO0FBQ0YsaUJBQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsT0FBbkIsRUFERTtTQUFKLENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDVixpQkFBTyxLQUFQLENBQWEsRUFBRSxRQUFGLEdBQWEsS0FBYixDQUFtQixJQUFuQixFQUF5QixDQUF6QixDQUFiLEVBQTBDLHVCQUExQyxFQURVO1NBQVY7T0FsQitDLENBQW5EIiwiZmlsZSI6Im5wbS9hc3NlcnRAMS4zLjAvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxudmFyIGFzc2VydCA9IHJlcXVpcmUoJy4vYXNzZXJ0Jyk7XG52YXIga2V5cyA9IE9iamVjdC5rZXlzO1xuZnVuY3Rpb24gbWFrZUJsb2NrKGYpIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59XG50ZXN0KCdhc3NlcnQub2snLCBmdW5jdGlvbigpIHtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LCBmYWxzZSksIGFzc2VydC5Bc3NlcnRpb25FcnJvciwgJ29rKGZhbHNlKScpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQsIHRydWUpLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IsICdvayh0cnVlKScpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQsICd0ZXN0JywgJ29rKFxcJ3Rlc3RcXCcpJykpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQub2ssIGZhbHNlKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yLCAnb2soZmFsc2UpJyk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5vaywgdHJ1ZSksIGFzc2VydC5Bc3NlcnRpb25FcnJvciwgJ29rKHRydWUpJyk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5vaywgJ3Rlc3QnKSwgJ29rKFxcJ3Rlc3RcXCcpJyk7XG59KTtcbnRlc3QoJ2Fzc2VydC5lcXVhbCcsIGZ1bmN0aW9uKCkge1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZXF1YWwsIHRydWUsIGZhbHNlKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yLCAnZXF1YWwnKTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmVxdWFsLCBudWxsLCBudWxsKSwgJ2VxdWFsJyk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5lcXVhbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpLCAnZXF1YWwnKTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmVxdWFsLCBudWxsLCB1bmRlZmluZWQpLCAnZXF1YWwnKTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmVxdWFsLCB0cnVlLCB0cnVlKSwgJ2VxdWFsJyk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5lcXVhbCwgMiwgJzInKSwgJ2VxdWFsJyk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5ub3RFcXVhbCwgdHJ1ZSwgZmFsc2UpLCAnbm90RXF1YWwnKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0Lm5vdEVxdWFsLCB0cnVlLCB0cnVlKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yLCAnbm90RXF1YWwnKTtcbn0pO1xudGVzdCgnYXNzZXJ0LnN0cmljdEVxdWFsJywgZnVuY3Rpb24oKSB7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5zdHJpY3RFcXVhbCwgMiwgJzInKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yLCAnc3RyaWN0RXF1YWwnKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LnN0cmljdEVxdWFsLCBudWxsLCB1bmRlZmluZWQpLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IsICdzdHJpY3RFcXVhbCcpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQubm90U3RyaWN0RXF1YWwsIDIsICcyJyksICdub3RTdHJpY3RFcXVhbCcpO1xufSk7XG50ZXN0KCdhc3NlcnQuZGVlcEVxdWFsIC0gNy4yJywgZnVuY3Rpb24oKSB7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIG5ldyBEYXRlKDIwMDAsIDMsIDE0KSwgbmV3IERhdGUoMjAwMCwgMywgMTQpKSwgJ2RlZXBFcXVhbCBkYXRlJyk7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIG5ldyBEYXRlKCksIG5ldyBEYXRlKDIwMDAsIDMsIDE0KSksIGFzc2VydC5Bc3NlcnRpb25FcnJvciwgJ2RlZXBFcXVhbCBkYXRlJyk7XG59KTtcbnRlc3QoJ2Fzc2VydC5kZWVwRXF1YWwgLSA3LjMnLCBmdW5jdGlvbigpIHtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgL2EvLCAvYS8pKTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgL2EvZywgL2EvZykpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCAvYS9pLCAvYS9pKSk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIC9hL20sIC9hL20pKTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgL2EvaWdtLCAvYS9pZ20pKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgL2FiLywgL2EvKSk7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIC9hL2csIC9hLykpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCAvYS9pLCAvYS8pKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgL2EvbSwgL2EvKSk7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIC9hL2lnbSwgL2EvaW0pKTtcbiAgdmFyIHJlMSA9IC9hLztcbiAgcmUxLmxhc3RJbmRleCA9IDM7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIHJlMSwgL2EvKSk7XG59KTtcbnRlc3QoJ2Fzc2VydC5kZWVwRXF1YWwgLSA3LjQnLCBmdW5jdGlvbigpIHtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgNCwgJzQnKSwgJ2RlZXBFcXVhbCA9PSBjaGVjaycpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCB0cnVlLCAxKSwgJ2RlZXBFcXVhbCA9PSBjaGVjaycpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCA0LCAnNScpLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IsICdkZWVwRXF1YWwgPT0gY2hlY2snKTtcbn0pO1xudGVzdCgnYXNzZXJ0LmRlZXBFcXVhbCAtIDcuNScsIGZ1bmN0aW9uKCkge1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCB7YTogNH0sIHthOiA0fSkpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCB7XG4gICAgYTogNCxcbiAgICBiOiAnMidcbiAgfSwge1xuICAgIGE6IDQsXG4gICAgYjogJzInXG4gIH0pKTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgWzRdLCBbJzQnXSkpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCB7YTogNH0sIHtcbiAgICBhOiA0LFxuICAgIGI6IHRydWVcbiAgfSksIGFzc2VydC5Bc3NlcnRpb25FcnJvcik7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIFsnYSddLCB7MDogJ2EnfSkpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCB7XG4gICAgYTogNCxcbiAgICBiOiAnMSdcbiAgfSwge1xuICAgIGI6ICcxJyxcbiAgICBhOiA0XG4gIH0pKTtcbiAgdmFyIGExID0gWzEsIDIsIDNdO1xuICB2YXIgYTIgPSBbMSwgMiwgM107XG4gIGExLmEgPSAndGVzdCc7XG4gIGExLmIgPSB0cnVlO1xuICBhMi5iID0gdHJ1ZTtcbiAgYTIuYSA9ICd0ZXN0JztcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwga2V5cyhhMSksIGtleXMoYTIpKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yKTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgYTEsIGEyKSk7XG59KTtcbnRlc3QoJ2Fzc2VydC5kZWVwRXF1YWwgLSBpbnN0YW5jZXMnLCBmdW5jdGlvbigpIHtcbiAgdmFyIG5iUm9vdCA9IHt0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXJzdCArICcgJyArIHRoaXMubGFzdDtcbiAgICB9fTtcbiAgZnVuY3Rpb24gbmFtZUJ1aWxkZXIoZmlyc3QsIGxhc3QpIHtcbiAgICB0aGlzLmZpcnN0ID0gZmlyc3Q7XG4gICAgdGhpcy5sYXN0ID0gbGFzdDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBuYW1lQnVpbGRlci5wcm90b3R5cGUgPSBuYlJvb3Q7XG4gIGZ1bmN0aW9uIG5hbWVCdWlsZGVyMihmaXJzdCwgbGFzdCkge1xuICAgIHRoaXMuZmlyc3QgPSBmaXJzdDtcbiAgICB0aGlzLmxhc3QgPSBsYXN0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIG5hbWVCdWlsZGVyMi5wcm90b3R5cGUgPSBuYlJvb3Q7XG4gIHZhciBuYjEgPSBuZXcgbmFtZUJ1aWxkZXIoJ1J5YW4nLCAnRGFobCcpO1xuICB2YXIgbmIyID0gbmV3IG5hbWVCdWlsZGVyMignUnlhbicsICdEYWhsJyk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIG5iMSwgbmIyKSk7XG4gIG5hbWVCdWlsZGVyMi5wcm90b3R5cGUgPSBPYmplY3Q7XG4gIG5iMiA9IG5ldyBuYW1lQnVpbGRlcjIoJ1J5YW4nLCAnRGFobCcpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCBuYjEsIG5iMiksIGFzc2VydC5Bc3NlcnRpb25FcnJvcik7XG59KTtcbnRlc3QoJ2Fzc2VydC5kZWVwRXF1YWwgLSBFUzYgcHJpbWl0aXZlcycsIGZ1bmN0aW9uKCkge1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCBudWxsLCB7fSksIGFzc2VydC5Bc3NlcnRpb25FcnJvcik7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIHVuZGVmaW5lZCwge30pLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCAnYScsIFsnYSddKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgJ2EnLCB7MDogJ2EnfSksIGFzc2VydC5Bc3NlcnRpb25FcnJvcik7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIDEsIHt9KSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgdHJ1ZSwge30pLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpO1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ3N5bWJvbCcpIHtcbiAgICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCBTeW1ib2woKSwge30pLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpO1xuICB9XG59KTtcbnRlc3QoJ2Fzc2VydC5kZWVwRXF1YWwgLSBvYmplY3Qgd3JhcHBlcnMnLCBmdW5jdGlvbigpIHtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgbmV3IFN0cmluZygnYScpLCBbJ2EnXSkpO1xuICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayhhc3NlcnQuZGVlcEVxdWFsLCBuZXcgU3RyaW5nKCdhJyksIHswOiAnYSd9KSk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIG5ldyBOdW1iZXIoMSksIHt9KSk7XG4gIGFzc2VydC5kb2VzTm90VGhyb3cobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIG5ldyBCb29sZWFuKHRydWUpLCB7fSkpO1xufSk7XG5mdW5jdGlvbiB0aHJvd2VyKGVycm9yQ29uc3RydWN0b3IpIHtcbiAgdGhyb3cgbmV3IGVycm9yQ29uc3RydWN0b3IoJ3Rlc3QnKTtcbn1cbnRlc3QoJ2Fzc2VydCAtIFRlc3RpbmcgdGhlIHRocm93aW5nJywgZnVuY3Rpb24oKSB7XG4gIHZhciBhZXRocm93ID0gbWFrZUJsb2NrKHRocm93ZXIsIGFzc2VydC5Bc3NlcnRpb25FcnJvcik7XG4gIGFldGhyb3cgPSBtYWtlQmxvY2sodGhyb3dlciwgYXNzZXJ0LkFzc2VydGlvbkVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2sodGhyb3dlciwgYXNzZXJ0LkFzc2VydGlvbkVycm9yKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yLCAnbWVzc2FnZScpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayh0aHJvd2VyLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpO1xuICBhc3NlcnQudGhyb3dzKG1ha2VCbG9jayh0aHJvd2VyLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2sodGhyb3dlciwgVHlwZUVycm9yKSk7XG4gIHZhciB0aHJldyA9IGZhbHNlO1xuICB0cnkge1xuICAgIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKHRocm93ZXIsIFR5cGVFcnJvciksIGFzc2VydC5Bc3NlcnRpb25FcnJvcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJldyA9IHRydWU7XG4gICAgYXNzZXJ0Lm9rKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IsICd0eXBlJyk7XG4gIH1cbiAgYXNzZXJ0LmVxdWFsKHRydWUsIHRocmV3LCAnYS50aHJvd3Mgd2l0aCBhbiBleHBsaWNpdCBlcnJvciBpcyBlYXRpbmcgZXh0cmEgZXJyb3JzJywgYXNzZXJ0LkFzc2VydGlvbkVycm9yKTtcbiAgdGhyZXcgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayh0aHJvd2VyLCBUeXBlRXJyb3IpLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyZXcgPSB0cnVlO1xuICAgIGFzc2VydC5vayhlIGluc3RhbmNlb2YgVHlwZUVycm9yKTtcbiAgfVxuICBhc3NlcnQuZXF1YWwodHJ1ZSwgdGhyZXcsICdhLmRvZXNOb3RUaHJvdyB3aXRoIGFuIGV4cGxpY2l0IGVycm9yIGlzIGVhdGluZyBleHRyYSBlcnJvcnMnKTtcbiAgdHJ5IHtcbiAgICBhc3NlcnQuZG9lc05vdFRocm93KG1ha2VCbG9jayh0aHJvd2VyLCBUeXBlRXJyb3IpLCBUeXBlRXJyb3IpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyZXcgPSB0cnVlO1xuICAgIGFzc2VydC5vayhlIGluc3RhbmNlb2YgYXNzZXJ0LkFzc2VydGlvbkVycm9yKTtcbiAgfVxuICBhc3NlcnQuZXF1YWwodHJ1ZSwgdGhyZXcsICdhLmRvZXNOb3RUaHJvdyBpcyBub3QgY2F0Y2hpbmcgdHlwZSBtYXRjaGluZyBlcnJvcnMnKTtcbn0pO1xudGVzdCgnYXNzZXJ0LmlmRXJyb3InLCBmdW5jdGlvbigpIHtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBhc3NlcnQuaWZFcnJvcihuZXcgRXJyb3IoJ3Rlc3QgZXJyb3InKSk7XG4gIH0pO1xuICBhc3NlcnQuZG9lc05vdFRocm93KGZ1bmN0aW9uKCkge1xuICAgIGFzc2VydC5pZkVycm9yKG51bGwpO1xuICB9KTtcbiAgYXNzZXJ0LmRvZXNOb3RUaHJvdyhmdW5jdGlvbigpIHtcbiAgICBhc3NlcnQuaWZFcnJvcigpO1xuICB9KTtcbn0pO1xudGVzdCgnYXNzZXJ0IC0gbWFrZSBzdXJlIHRoYXQgdmFsaWRhdGluZyB1c2luZyBjb25zdHJ1Y3RvciByZWFsbHkgd29ya3MnLCBmdW5jdGlvbigpIHtcbiAgdmFyIHRocmV3ID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICAgIHRocm93ICh7fSk7XG4gICAgfSwgQXJyYXkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyZXcgPSB0cnVlO1xuICB9XG4gIGFzc2VydC5vayh0aHJldywgJ3dyb25nIGNvbnN0cnVjdG9yIHZhbGlkYXRpb24nKTtcbn0pO1xudGVzdCgnYXNzZXJ0IC0gIHVzZSBhIFJlZ0V4cCB0byB2YWxpZGF0ZSBlcnJvciBtZXNzYWdlJywgZnVuY3Rpb24oKSB7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKHRocm93ZXIsIFR5cGVFcnJvciksIC90ZXN0Lyk7XG59KTtcbnRlc3QoJ2Fzc2VydCAtIHNlIGEgZm4gdG8gdmFsaWRhdGUgZXJyb3Igb2JqZWN0JywgZnVuY3Rpb24oKSB7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKHRocm93ZXIsIFR5cGVFcnJvciksIGZ1bmN0aW9uKGVycikge1xuICAgIGlmICgoZXJyIGluc3RhbmNlb2YgVHlwZUVycm9yKSAmJiAvdGVzdC8udGVzdChlcnIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufSk7XG50ZXN0KCdhc3NlcnQgLSBNYWtlIHN1cmUgZGVlcEVxdWFsIGRvZXNuXFwndCBsb29wIGZvcmV2ZXIgb24gY2lyY3VsYXIgcmVmcycsIGZ1bmN0aW9uKCkge1xuICB2YXIgYiA9IHt9O1xuICBiLmIgPSBiO1xuICB2YXIgYyA9IHt9O1xuICBjLmIgPSBjO1xuICB2YXIgZ290RXJyb3IgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGIsIGMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZ290RXJyb3IgPSB0cnVlO1xuICB9XG4gIGFzc2VydC5vayhnb3RFcnJvcik7XG59KTtcbnRlc3QoJ2Fzc2VydCAtIEVuc3VyZSByZWZsZXhpdml0eSBvZiBkZWVwRXF1YWwgd2l0aCBgYXJndW1lbnRzYCBvYmplY3RzJywgZnVuY3Rpb24oKSB7XG4gIHZhciBhcmdzID0gKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmd1bWVudHM7XG4gIH0pKCk7XG4gIGFzc2VydC50aHJvd3MobWFrZUJsb2NrKGFzc2VydC5kZWVwRXF1YWwsIFtdLCBhcmdzKSwgYXNzZXJ0LkFzc2VydGlvbkVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhtYWtlQmxvY2soYXNzZXJ0LmRlZXBFcXVhbCwgYXJncywgW10pLCBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IpO1xufSk7XG50ZXN0KCdhc3NlcnQgLSB0ZXN0IGFzc2VydGlvbiBtZXNzYWdlJywgZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHRlc3RBc3NlcnRpb25NZXNzYWdlKGFjdHVhbCwgZXhwZWN0ZWQpIHtcbiAgICB0cnkge1xuICAgICAgYXNzZXJ0LmVxdWFsKGFjdHVhbCwgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFzc2VydC5lcXVhbChlLnRvU3RyaW5nKCksIFsnQXNzZXJ0aW9uRXJyb3I6JywgZXhwZWN0ZWQsICc9PScsICdcIlwiJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cbiAgdGVzdEFzc2VydGlvbk1lc3NhZ2UodW5kZWZpbmVkLCAnXCJ1bmRlZmluZWRcIicpO1xuICB0ZXN0QXNzZXJ0aW9uTWVzc2FnZShudWxsLCAnbnVsbCcpO1xuICB0ZXN0QXNzZXJ0aW9uTWVzc2FnZSh0cnVlLCAndHJ1ZScpO1xuICB0ZXN0QXNzZXJ0aW9uTWVzc2FnZShmYWxzZSwgJ2ZhbHNlJyk7XG4gIHRlc3RBc3NlcnRpb25NZXNzYWdlKDAsICcwJyk7XG4gIHRlc3RBc3NlcnRpb25NZXNzYWdlKDEwMCwgJzEwMCcpO1xuICB0ZXN0QXNzZXJ0aW9uTWVzc2FnZShOYU4sICdcIk5hTlwiJyk7XG4gIHRlc3RBc3NlcnRpb25NZXNzYWdlKEluZmluaXR5LCAnXCJJbmZpbml0eVwiJyk7XG4gIHRlc3RBc3NlcnRpb25NZXNzYWdlKC1JbmZpbml0eSwgJ1wiLUluZmluaXR5XCInKTtcbiAgdGVzdEFzc2VydGlvbk1lc3NhZ2UoJycsICdcIlwiJyk7XG4gIHRlc3RBc3NlcnRpb25NZXNzYWdlKCdmb28nLCAnXCJmb29cIicpO1xuICB0ZXN0QXNzZXJ0aW9uTWVzc2FnZShbXSwgJ1tdJyk7XG4gIHRlc3RBc3NlcnRpb25NZXNzYWdlKFsxLCAyLCAzXSwgJ1sxLDIsM10nKTtcbiAgdGVzdEFzc2VydGlvbk1lc3NhZ2UoL2EvLCAnXCIvYS9cIicpO1xuICB0ZXN0QXNzZXJ0aW9uTWVzc2FnZShmdW5jdGlvbiBmKCkge30sICdcImZ1bmN0aW9uIGYoKSB7fVwiJyk7XG4gIHRlc3RBc3NlcnRpb25NZXNzYWdlKHt9LCAne30nKTtcbiAgdGVzdEFzc2VydGlvbk1lc3NhZ2Uoe1xuICAgIGE6IHVuZGVmaW5lZCxcbiAgICBiOiBudWxsXG4gIH0sICd7XCJhXCI6XCJ1bmRlZmluZWRcIixcImJcIjpudWxsfScpO1xuICB0ZXN0QXNzZXJ0aW9uTWVzc2FnZSh7XG4gICAgYTogTmFOLFxuICAgIGI6IEluZmluaXR5LFxuICAgIGM6IC1JbmZpbml0eVxuICB9LCAne1wiYVwiOlwiTmFOXCIsXCJiXCI6XCJJbmZpbml0eVwiLFwiY1wiOlwiLUluZmluaXR5XCJ9Jyk7XG59KTtcbnRlc3QoJ2Fzc2VydCAtIHJlZ3Jlc3Npb25zIGZyb20gbm9kZS5qcyB0ZXN0Y2FzZScsIGZ1bmN0aW9uKCkge1xuICB2YXIgdGhyZXcgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgICAgYXNzZXJ0LmlmRXJyb3IobnVsbCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJldyA9IHRydWU7XG4gICAgYXNzZXJ0LmVxdWFsKGUubWVzc2FnZSwgJ01pc3NpbmcgZXhwZWN0ZWQgZXhjZXB0aW9uLi4nKTtcbiAgfVxuICBhc3NlcnQub2sodGhyZXcpO1xuICB0cnkge1xuICAgIGFzc2VydC5lcXVhbCgxLCAyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFzc2VydC5lcXVhbChlLnRvU3RyaW5nKCkuc3BsaXQoJ1xcbicpWzBdLCAnQXNzZXJ0aW9uRXJyb3I6IDEgPT0gMicpO1xuICB9XG4gIHRyeSB7XG4gICAgYXNzZXJ0LmVxdWFsKDEsIDIsICdvaCBubycpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgYXNzZXJ0LmVxdWFsKGUudG9TdHJpbmcoKS5zcGxpdCgnXFxuJylbMF0sICdBc3NlcnRpb25FcnJvcjogb2ggbm8nKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
