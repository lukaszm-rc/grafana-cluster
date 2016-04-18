'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        'use strict';

        var $ = require('./$'),
            LIBRARY = require('./$.library'),
            global = require('./$.global'),
            ctx = require('./$.ctx'),
            classof = require('./$.classof'),
            $export = require('./$.export'),
            isObject = require('./$.is-object'),
            anObject = require('./$.an-object'),
            aFunction = require('./$.a-function'),
            strictNew = require('./$.strict-new'),
            forOf = require('./$.for-of'),
            setProto = require('./$.set-proto').set,
            same = require('./$.same-value'),
            SPECIES = require('./$.wks')('species'),
            speciesConstructor = require('./$.species-constructor'),
            asap = require('./$.microtask'),
            PROMISE = 'Promise',
            process = global.process,
            isNode = classof(process) == 'process',
            P = global[PROMISE],
            Wrapper;
        var testResolve = function testResolve(sub) {
          var test = new P(function () {});
          if (sub) test.constructor = Object;
          return P.resolve(test) === test;
        };
        var USE_NATIVE = function () {
          var works = false;
          function P2(x) {
            var self = new P(x);
            setProto(self, P2.prototype);
            return self;
          }
          try {
            works = P && P.resolve && testResolve();
            setProto(P2, P);
            P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
            if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
              works = false;
            }
            if (works && require('./$.descriptors')) {
              var thenableThenGotten = false;
              P.resolve($.setDesc({}, 'then', { get: function get() {
                  thenableThenGotten = true;
                } }));
              works = thenableThenGotten;
            }
          } catch (e) {
            works = false;
          }
          return works;
        }();
        var sameConstructor = function sameConstructor(a, b) {
          if (LIBRARY && a === P && b === Wrapper) return true;
          return same(a, b);
        };
        var getConstructor = function getConstructor(C) {
          var S = anObject(C)[SPECIES];
          return S != undefined ? S : C;
        };
        var isThenable = function isThenable(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
        };
        var PromiseCapability = function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve), this.reject = aFunction(reject);
        };
        var perform = function perform(exec) {
          try {
            exec();
          } catch (e) {
            return { error: e };
          }
        };
        var notify = function notify(record, isReject) {
          if (record.n) return;
          record.n = true;
          var chain = record.c;
          asap(function () {
            var value = record.v,
                ok = record.s == 1,
                i = 0;
            var run = function run(reaction) {
              var handler = ok ? reaction.ok : reaction.fail,
                  resolve = reaction.resolve,
                  reject = reaction.reject,
                  result,
                  then;
              try {
                if (handler) {
                  if (!ok) record.h = true;
                  result = handler === true ? value : handler(value);
                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (e) {
                reject(e);
              }
            };
            while (chain.length > i) {
              run(chain[i++]);
            }chain.length = 0;
            record.n = false;
            if (isReject) setTimeout(function () {
              var promise = record.p,
                  handler,
                  console;
              if (isUnhandled(promise)) {
                if (isNode) {
                  process.emit('unhandledRejection', value, promise);
                } else if (handler = global.onunhandledrejection) {
                  handler({
                    promise: promise,
                    reason: value
                  });
                } else if ((console = global.console) && console.error) {
                  console.error('Unhandled promise rejection', value);
                }
              }
              record.a = undefined;
            }, 1);
          });
        };
        var isUnhandled = function isUnhandled(promise) {
          var record = promise._d,
              chain = record.a || record.c,
              i = 0,
              reaction;
          if (record.h) return false;
          while (chain.length > i) {
            reaction = chain[i++];
            if (reaction.fail || !isUnhandled(reaction.promise)) return false;
          }
          return true;
        };
        var $reject = function $reject(value) {
          var record = this;
          if (record.d) return;
          record.d = true;
          record = record.r || record;
          record.v = value;
          record.s = 2;
          record.a = record.c.slice();
          notify(record, true);
        };
        var $resolve = function $resolve(value) {
          var record = this,
              then;
          if (record.d) return;
          record.d = true;
          record = record.r || record;
          try {
            if (record.p === value) throw TypeError("Promise can't be resolved itself");
            if (then = isThenable(value)) {
              asap(function () {
                var wrapper = {
                  r: record,
                  d: false
                };
                try {
                  then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              record.v = value;
              record.s = 1;
              notify(record, false);
            }
          } catch (e) {
            $reject.call({
              r: record,
              d: false
            }, e);
          }
        };
        if (!USE_NATIVE) {
          P = function Promise(executor) {
            aFunction(executor);
            var record = this._d = {
              p: strictNew(this, P, PROMISE),
              c: [],
              a: undefined,
              s: 0,
              d: false,
              v: undefined,
              h: false,
              n: false
            };
            try {
              executor(ctx($resolve, record, 1), ctx($reject, record, 1));
            } catch (err) {
              $reject.call(record, err);
            }
          };
          require('./$.redefine-all')(P.prototype, {
            then: function then(onFulfilled, onRejected) {
              var reaction = new PromiseCapability(speciesConstructor(this, P)),
                  promise = reaction.promise,
                  record = this._d;
              reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
              reaction.fail = typeof onRejected == 'function' && onRejected;
              record.c.push(reaction);
              if (record.a) record.a.push(reaction);
              if (record.s) notify(record, false);
              return promise;
            },
            'catch': function _catch(onRejected) {
              return this.then(undefined, onRejected);
            }
          });
        }
        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
        require('./$.set-to-string-tag')(P, PROMISE);
        require('./$.set-species')(PROMISE);
        Wrapper = require('./$.core')[PROMISE];
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, { reject: function reject(r) {
            var capability = new PromiseCapability(this),
                $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          } });
        $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, { resolve: function resolve(x) {
            if (x instanceof P && sameConstructor(x.constructor, this)) return x;
            var capability = new PromiseCapability(this),
                $$resolve = capability.resolve;
            $$resolve(x);
            return capability.promise;
          } });
        $export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function (iter) {
          P.all(iter)['catch'](function () {});
        })), PROMISE, {
          all: function all(iterable) {
            var C = getConstructor(this),
                capability = new PromiseCapability(C),
                resolve = capability.resolve,
                reject = capability.reject,
                values = [];
            var abrupt = perform(function () {
              forOf(iterable, false, values.push, values);
              var remaining = values.length,
                  results = Array(remaining);
              if (remaining) $.each.call(values, function (promise, index) {
                var alreadyCalled = false;
                C.resolve(promise).then(function (value) {
                  if (alreadyCalled) return;
                  alreadyCalled = true;
                  results[index] = value;
                  --remaining || resolve(results);
                }, reject);
              });else resolve(results);
            });
            if (abrupt) reject(abrupt.error);
            return capability.promise;
          },
          race: function race(iterable) {
            var C = getConstructor(this),
                capability = new PromiseCapability(C),
                reject = capability.reject;
            var abrupt = perform(function () {
              forOf(iterable, false, function (promise) {
                C.resolve(promise).then(capability.resolve, reject);
              });
            });
            if (abrupt) reject(abrupt.error);
            return capability.promise;
          }
        });
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2LnByb21pc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQUMsVUFBUyxPQUFULEVBQWtCO0FBQ2pCLHFCQURpQjs7QUFFakIsWUFBSSxJQUFJLFFBQVEsS0FBUixDQUFKO1lBQ0EsVUFBVSxRQUFRLGFBQVIsQ0FBVjtZQUNBLFNBQVMsUUFBUSxZQUFSLENBQVQ7WUFDQSxNQUFNLFFBQVEsU0FBUixDQUFOO1lBQ0EsVUFBVSxRQUFRLGFBQVIsQ0FBVjtZQUNBLFVBQVUsUUFBUSxZQUFSLENBQVY7WUFDQSxXQUFXLFFBQVEsZUFBUixDQUFYO1lBQ0EsV0FBVyxRQUFRLGVBQVIsQ0FBWDtZQUNBLFlBQVksUUFBUSxnQkFBUixDQUFaO1lBQ0EsWUFBWSxRQUFRLGdCQUFSLENBQVo7WUFDQSxRQUFRLFFBQVEsWUFBUixDQUFSO1lBQ0EsV0FBVyxRQUFRLGVBQVIsRUFBeUIsR0FBekI7WUFDWCxPQUFPLFFBQVEsZ0JBQVIsQ0FBUDtZQUNBLFVBQVUsUUFBUSxTQUFSLEVBQW1CLFNBQW5CLENBQVY7WUFDQSxxQkFBcUIsUUFBUSx5QkFBUixDQUFyQjtZQUNBLE9BQU8sUUFBUSxlQUFSLENBQVA7WUFDQSxVQUFVLFNBQVY7WUFDQSxVQUFVLE9BQU8sT0FBUDtZQUNWLFNBQVMsUUFBUSxPQUFSLEtBQW9CLFNBQXBCO1lBQ1QsSUFBSSxPQUFPLE9BQVAsQ0FBSjtZQUNBLE9BcEJKLENBRmlCO0FBdUJqQixZQUFJLGNBQWMsU0FBZCxXQUFjLENBQVMsR0FBVCxFQUFjO0FBQzlCLGNBQUksT0FBTyxJQUFJLENBQUosQ0FBTSxZQUFXLEVBQVgsQ0FBYixDQUQwQjtBQUU5QixjQUFJLEdBQUosRUFDRSxLQUFLLFdBQUwsR0FBbUIsTUFBbkIsQ0FERjtBQUVBLGlCQUFPLEVBQUUsT0FBRixDQUFVLElBQVYsTUFBb0IsSUFBcEIsQ0FKdUI7U0FBZCxDQXZCRDtBQTZCakIsWUFBSSxhQUFhLFlB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RCxDQStTRyxRQUFRLFNBQVIsQ0EvU0giLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgICAgTElCUkFSWSA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JyksXG4gICAgICBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyksXG4gICAgICBjdHggPSByZXF1aXJlKCcuLyQuY3R4JyksXG4gICAgICBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKSxcbiAgICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgICAgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKSxcbiAgICAgIHN0cmljdE5ldyA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JyksXG4gICAgICBmb3JPZiA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKSxcbiAgICAgIHNldFByb3RvID0gcmVxdWlyZSgnLi8kLnNldC1wcm90bycpLnNldCxcbiAgICAgIHNhbWUgPSByZXF1aXJlKCcuLyQuc2FtZS12YWx1ZScpLFxuICAgICAgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpLFxuICAgICAgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi8kLnNwZWNpZXMtY29uc3RydWN0b3InKSxcbiAgICAgIGFzYXAgPSByZXF1aXJlKCcuLyQubWljcm90YXNrJyksXG4gICAgICBQUk9NSVNFID0gJ1Byb21pc2UnLFxuICAgICAgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzLFxuICAgICAgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcycsXG4gICAgICBQID0gZ2xvYmFsW1BST01JU0VdLFxuICAgICAgV3JhcHBlcjtcbiAgdmFyIHRlc3RSZXNvbHZlID0gZnVuY3Rpb24oc3ViKSB7XG4gICAgdmFyIHRlc3QgPSBuZXcgUChmdW5jdGlvbigpIHt9KTtcbiAgICBpZiAoc3ViKVxuICAgICAgdGVzdC5jb25zdHJ1Y3RvciA9IE9iamVjdDtcbiAgICByZXR1cm4gUC5yZXNvbHZlKHRlc3QpID09PSB0ZXN0O1xuICB9O1xuICB2YXIgVVNFX05BVElWRSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3b3JrcyA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIFAyKHgpIHtcbiAgICAgIHZhciBzZWxmID0gbmV3IFAoeCk7XG4gICAgICBzZXRQcm90byhzZWxmLCBQMi5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB3b3JrcyA9IFAgJiYgUC5yZXNvbHZlICYmIHRlc3RSZXNvbHZlKCk7XG4gICAgICBzZXRQcm90byhQMiwgUCk7XG4gICAgICBQMi5wcm90b3R5cGUgPSAkLmNyZWF0ZShQLnByb3RvdHlwZSwge2NvbnN0cnVjdG9yOiB7dmFsdWU6IFAyfX0pO1xuICAgICAgaWYgKCEoUDIucmVzb2x2ZSg1KS50aGVuKGZ1bmN0aW9uKCkge30pIGluc3RhbmNlb2YgUDIpKSB7XG4gICAgICAgIHdvcmtzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAod29ya3MgJiYgcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykpIHtcbiAgICAgICAgdmFyIHRoZW5hYmxlVGhlbkdvdHRlbiA9IGZhbHNlO1xuICAgICAgICBQLnJlc29sdmUoJC5zZXREZXNjKHt9LCAndGhlbicsIHtnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhlbmFibGVUaGVuR290dGVuID0gdHJ1ZTtcbiAgICAgICAgICB9fSkpO1xuICAgICAgICB3b3JrcyA9IHRoZW5hYmxlVGhlbkdvdHRlbjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3b3JrcyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gd29ya3M7XG4gIH0oKTtcbiAgdmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoTElCUkFSWSAmJiBhID09PSBQICYmIGIgPT09IFdyYXBwZXIpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gc2FtZShhLCBiKTtcbiAgfTtcbiAgdmFyIGdldENvbnN0cnVjdG9yID0gZnVuY3Rpb24oQykge1xuICAgIHZhciBTID0gYW5PYmplY3QoQylbU1BFQ0lFU107XG4gICAgcmV0dXJuIFMgIT0gdW5kZWZpbmVkID8gUyA6IEM7XG4gIH07XG4gIHZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpIHtcbiAgICB2YXIgdGhlbjtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZih0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbiAgfTtcbiAgdmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQykge1xuICAgIHZhciByZXNvbHZlLFxuICAgICAgICByZWplY3Q7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICAgIH0pO1xuICAgIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKSwgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbiAgfTtcbiAgdmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKSB7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgICB9XG4gIH07XG4gIHZhciBub3RpZnkgPSBmdW5jdGlvbihyZWNvcmQsIGlzUmVqZWN0KSB7XG4gICAgaWYgKHJlY29yZC5uKVxuICAgICAgcmV0dXJuO1xuICAgIHJlY29yZC5uID0gdHJ1ZTtcbiAgICB2YXIgY2hhaW4gPSByZWNvcmQuYztcbiAgICBhc2FwKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlID0gcmVjb3JkLnYsXG4gICAgICAgICAgb2sgPSByZWNvcmQucyA9PSAxLFxuICAgICAgICAgIGkgPSAwO1xuICAgICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWwsXG4gICAgICAgICAgICByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdCxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRoZW47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmICghb2spXG4gICAgICAgICAgICAgIHJlY29yZC5oID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIgPT09IHRydWUgPyB2YWx1ZSA6IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmVqZWN0KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKVxuICAgICAgICBydW4oY2hhaW5baSsrXSk7XG4gICAgICBjaGFpbi5sZW5ndGggPSAwO1xuICAgICAgcmVjb3JkLm4gPSBmYWxzZTtcbiAgICAgIGlmIChpc1JlamVjdClcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9IHJlY29yZC5wLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBjb25zb2xlO1xuICAgICAgICAgIGlmIChpc1VuaGFuZGxlZChwcm9taXNlKSkge1xuICAgICAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgICAgICBoYW5kbGVyKHtcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlYXNvbjogdmFsdWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWNvcmQuYSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSwgMSk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICB2YXIgcmVjb3JkID0gcHJvbWlzZS5fZCxcbiAgICAgICAgY2hhaW4gPSByZWNvcmQuYSB8fCByZWNvcmQuYyxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlYWN0aW9uO1xuICAgIGlmIChyZWNvcmQuaClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgICAgaWYgKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICB2YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlY29yZCA9IHRoaXM7XG4gICAgaWYgKHJlY29yZC5kKVxuICAgICAgcmV0dXJuO1xuICAgIHJlY29yZC5kID0gdHJ1ZTtcbiAgICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7XG4gICAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgICByZWNvcmQucyA9IDI7XG4gICAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xuICAgIG5vdGlmeShyZWNvcmQsIHRydWUpO1xuICB9O1xuICB2YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZWNvcmQgPSB0aGlzLFxuICAgICAgICB0aGVuO1xuICAgIGlmIChyZWNvcmQuZClcbiAgICAgIHJldHVybjtcbiAgICByZWNvcmQuZCA9IHRydWU7XG4gICAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkO1xuICAgIHRyeSB7XG4gICAgICBpZiAocmVjb3JkLnAgPT09IHZhbHVlKVxuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgYXNhcChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgd3JhcHBlciA9IHtcbiAgICAgICAgICAgIHI6IHJlY29yZCxcbiAgICAgICAgICAgIGQ6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgICAgICAgcmVjb3JkLnMgPSAxO1xuICAgICAgICBub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgJHJlamVjdC5jYWxsKHtcbiAgICAgICAgcjogcmVjb3JkLFxuICAgICAgICBkOiBmYWxzZVxuICAgICAgfSwgZSk7XG4gICAgfVxuICB9O1xuICBpZiAoIVVTRV9OQVRJVkUpIHtcbiAgICBQID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICAgIHZhciByZWNvcmQgPSB0aGlzLl9kID0ge1xuICAgICAgICBwOiBzdHJpY3ROZXcodGhpcywgUCwgUFJPTUlTRSksXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBhOiB1bmRlZmluZWQsXG4gICAgICAgIHM6IDAsXG4gICAgICAgIGQ6IGZhbHNlLFxuICAgICAgICB2OiB1bmRlZmluZWQsXG4gICAgICAgIGg6IGZhbHNlLFxuICAgICAgICBuOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICRyZWplY3QuY2FsbChyZWNvcmQsIGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJykoUC5wcm90b3R5cGUsIHtcbiAgICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgdmFyIHJlYWN0aW9uID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQKSksXG4gICAgICAgICAgICBwcm9taXNlID0gcmVhY3Rpb24ucHJvbWlzZSxcbiAgICAgICAgICAgIHJlY29yZCA9IHRoaXMuX2Q7XG4gICAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICAgIHJlY29yZC5jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgICBpZiAocmVjb3JkLmEpXG4gICAgICAgICAgcmVjb3JkLmEucHVzaChyZWFjdGlvbik7XG4gICAgICAgIGlmIChyZWNvcmQucylcbiAgICAgICAgICBub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSxcbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiBQfSk7XG4gIHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpKFAsIFBST01JU0UpO1xuICByZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbiAgV3JhcHBlciA9IHJlcXVpcmUoJy4vJC5jb3JlJylbUFJPTUlTRV07XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtyZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKSxcbiAgICAgICAgICAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICAgJCRyZWplY3Qocik7XG4gICAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICAgIH19KTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgdGVzdFJlc29sdmUodHJ1ZSkpLCBQUk9NSVNFLCB7cmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgICBpZiAoeCBpbnN0YW5jZW9mIFAgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKVxuICAgICAgICByZXR1cm4geDtcbiAgICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpLFxuICAgICAgICAgICQkcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAgICQkcmVzb2x2ZSh4KTtcbiAgICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gICAgfX0pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKSB7XG4gICAgUC5hbGwoaXRlcilbJ2NhdGNoJ10oZnVuY3Rpb24oKSB7fSk7XG4gIH0pKSwgUFJPTUlTRSwge1xuICAgIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgQyA9IGdldENvbnN0cnVjdG9yKHRoaXMpLFxuICAgICAgICAgIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyksXG4gICAgICAgICAgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZSxcbiAgICAgICAgICByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdCxcbiAgICAgICAgICB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xuICAgICAgICB2YXIgcmVtYWluaW5nID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgICAgICAgIHJlc3VsdHMgPSBBcnJheShyZW1haW5pbmcpO1xuICAgICAgICBpZiAocmVtYWluaW5nKVxuICAgICAgICAgICQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICAgIGlmIChhYnJ1cHQpXG4gICAgICAgIHJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgICB9LFxuICAgIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICAgIHZhciBDID0gZ2V0Q29uc3RydWN0b3IodGhpcyksXG4gICAgICAgICAgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKSxcbiAgICAgICAgICByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoYWJydXB0KVxuICAgICAgICByZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gICAgfVxuICB9KTtcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
