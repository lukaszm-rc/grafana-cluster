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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE9BQVQsRUFBa0I7QUFDakIscUJBRGlCOztBQUVqQixZQUFJLElBQUksUUFBUSxLQUFSLENBQUo7WUFDQSxVQUFVLFFBQVEsYUFBUixDQUFWO1lBQ0EsU0FBUyxRQUFRLFlBQVIsQ0FBVDtZQUNBLE1BQU0sUUFBUSxTQUFSLENBQU47WUFDQSxVQUFVLFFBQVEsYUFBUixDQUFWO1lBQ0EsVUFBVSxRQUFRLFlBQVIsQ0FBVjtZQUNBLFdBQVcsUUFBUSxlQUFSLENBQVg7WUFDQSxXQUFXLFFBQVEsZUFBUixDQUFYO1lBQ0EsWUFBWSxRQUFRLGdCQUFSLENBQVo7WUFDQSxZQUFZLFFBQVEsZ0JBQVIsQ0FBWjtZQUNBLFFBQVEsUUFBUSxZQUFSLENBQVI7WUFDQSxXQUFXLFFBQVEsZUFBUixFQUF5QixHQUF6QjtZQUNYLE9BQU8sUUFBUSxnQkFBUixDQUFQO1lBQ0EsVUFBVSxRQUFRLFNBQVIsRUFBbUIsU0FBbkIsQ0FBVjtZQUNBLHFCQUFxQixRQUFRLHlCQUFSLENBQXJCO1lBQ0EsT0FBTyxRQUFRLGVBQVIsQ0FBUDtZQUNBLFVBQVUsU0FBVjtZQUNBLFVBQVUsT0FBTyxPQUFQO1lBQ1YsU0FBUyxRQUFRLE9BQVIsS0FBb0IsU0FBcEI7WUFDVCxJQUFJLE9BQU8sT0FBUCxDQUFKO1lBQ0EsT0FwQkosQ0FGaUI7QUF1QmpCLFlBQUksY0FBYyxTQUFkLFdBQWMsQ0FBUyxHQUFULEVBQWM7QUFDOUIsY0FBSSxPQUFPLElBQUksQ0FBSixDQUFNLFlBQVcsRUFBWCxDQUFiLENBRDBCO0FBRTlCLGNBQUksR0FBSixFQUNFLEtBQUssV0FBTCxHQUFtQixNQUFuQixDQURGO0FBRUEsaUJBQU8sRUFBRSxPQUFGLENBQVUsSUFBVixNQUFvQixJQUFwQixDQUp1QjtTQUFkLENBdkJEO0FBNkJqQixZQUFJ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QUFsQixDQUFELENBK1NHLFFBQVEsU0FBUixDQS9TSCIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyICQgPSByZXF1aXJlKCcuLyQnKSxcbiAgICAgIExJQlJBUlkgPSByZXF1aXJlKCcuLyQubGlicmFyeScpLFxuICAgICAgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLFxuICAgICAgY3R4ID0gcmVxdWlyZSgnLi8kLmN0eCcpLFxuICAgICAgY2xhc3NvZiA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJyksXG4gICAgICAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JyksXG4gICAgICBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKSxcbiAgICAgIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyksXG4gICAgICBzdHJpY3ROZXcgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpLFxuICAgICAgZm9yT2YgPSByZXF1aXJlKCcuLyQuZm9yLW9mJyksXG4gICAgICBzZXRQcm90byA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXQsXG4gICAgICBzYW1lID0gcmVxdWlyZSgnLi8kLnNhbWUtdmFsdWUnKSxcbiAgICAgIFNQRUNJRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKSxcbiAgICAgIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzLWNvbnN0cnVjdG9yJyksXG4gICAgICBhc2FwID0gcmVxdWlyZSgnLi8kLm1pY3JvdGFzaycpLFxuICAgICAgUFJPTUlTRSA9ICdQcm9taXNlJyxcbiAgICAgIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcyxcbiAgICAgIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnLFxuICAgICAgUCA9IGdsb2JhbFtQUk9NSVNFXSxcbiAgICAgIFdyYXBwZXI7XG4gIHZhciB0ZXN0UmVzb2x2ZSA9IGZ1bmN0aW9uKHN1Yikge1xuICAgIHZhciB0ZXN0ID0gbmV3IFAoZnVuY3Rpb24oKSB7fSk7XG4gICAgaWYgKHN1YilcbiAgICAgIHRlc3QuY29uc3RydWN0b3IgPSBPYmplY3Q7XG4gICAgcmV0dXJuIFAucmVzb2x2ZSh0ZXN0KSA9PT0gdGVzdDtcbiAgfTtcbiAgdmFyIFVTRV9OQVRJVkUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd29ya3MgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBQMih4KSB7XG4gICAgICB2YXIgc2VsZiA9IG5ldyBQKHgpO1xuICAgICAgc2V0UHJvdG8oc2VsZiwgUDIucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgd29ya3MgPSBQICYmIFAucmVzb2x2ZSAmJiB0ZXN0UmVzb2x2ZSgpO1xuICAgICAgc2V0UHJvdG8oUDIsIFApO1xuICAgICAgUDIucHJvdG90eXBlID0gJC5jcmVhdGUoUC5wcm90b3R5cGUsIHtjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBQMn19KTtcbiAgICAgIGlmICghKFAyLnJlc29sdmUoNSkudGhlbihmdW5jdGlvbigpIHt9KSBpbnN0YW5jZW9mIFAyKSkge1xuICAgICAgICB3b3JrcyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHdvcmtzICYmIHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpKSB7XG4gICAgICAgIHZhciB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSBmYWxzZTtcbiAgICAgICAgUC5yZXNvbHZlKCQuc2V0RGVzYyh7fSwgJ3RoZW4nLCB7Z2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoZW5hYmxlVGhlbkdvdHRlbiA9IHRydWU7XG4gICAgICAgICAgfX0pKTtcbiAgICAgICAgd29ya3MgPSB0aGVuYWJsZVRoZW5Hb3R0ZW47XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgd29ya3MgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmtzO1xuICB9KCk7XG4gIHZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKExJQlJBUlkgJiYgYSA9PT0gUCAmJiBiID09PSBXcmFwcGVyKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHNhbWUoYSwgYik7XG4gIH07XG4gIHZhciBnZXRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKEMpIHtcbiAgICB2YXIgUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdO1xuICAgIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xuICB9O1xuICB2YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KSB7XG4gICAgdmFyIHRoZW47XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG4gIH07XG4gIHZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpIHtcbiAgICB2YXIgcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0O1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgICB9KTtcbiAgICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSksIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG4gIH07XG4gIHZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYykge1xuICAgIHRyeSB7XG4gICAgICBleGVjKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHtlcnJvcjogZX07XG4gICAgfVxuICB9O1xuICB2YXIgbm90aWZ5ID0gZnVuY3Rpb24ocmVjb3JkLCBpc1JlamVjdCkge1xuICAgIGlmIChyZWNvcmQubilcbiAgICAgIHJldHVybjtcbiAgICByZWNvcmQubiA9IHRydWU7XG4gICAgdmFyIGNoYWluID0gcmVjb3JkLmM7XG4gICAgYXNhcChmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHJlY29yZC52LFxuICAgICAgICAgIG9rID0gcmVjb3JkLnMgPT0gMSxcbiAgICAgICAgICBpID0gMDtcbiAgICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbikge1xuICAgICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsLFxuICAgICAgICAgICAgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmUsXG4gICAgICAgICAgICByZWplY3QgPSByZWFjdGlvbi5yZWplY3QsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB0aGVuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoIW9rKVxuICAgICAgICAgICAgICByZWNvcmQuaCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyID09PSB0cnVlID8gdmFsdWUgOiBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJlamVjdCh2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSlcbiAgICAgICAgcnVuKGNoYWluW2krK10pO1xuICAgICAgY2hhaW4ubGVuZ3RoID0gMDtcbiAgICAgIHJlY29yZC5uID0gZmFsc2U7XG4gICAgICBpZiAoaXNSZWplY3QpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSByZWNvcmQucCxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgY29uc29sZTtcbiAgICAgICAgICBpZiAoaXNVbmhhbmRsZWQocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICAgICAgaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgICAgICAgICByZWFzb246IHZhbHVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjb3JkLmEgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0sIDEpO1xuICAgIH0pO1xuICB9O1xuICB2YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgdmFyIHJlY29yZCA9IHByb21pc2UuX2QsXG4gICAgICAgIGNoYWluID0gcmVjb3JkLmEgfHwgcmVjb3JkLmMsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZWFjdGlvbjtcbiAgICBpZiAocmVjb3JkLmgpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICAgIGlmIChyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgdmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZWNvcmQgPSB0aGlzO1xuICAgIGlmIChyZWNvcmQuZClcbiAgICAgIHJldHVybjtcbiAgICByZWNvcmQuZCA9IHRydWU7XG4gICAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkO1xuICAgIHJlY29yZC52ID0gdmFsdWU7XG4gICAgcmVjb3JkLnMgPSAyO1xuICAgIHJlY29yZC5hID0gcmVjb3JkLmMuc2xpY2UoKTtcbiAgICBub3RpZnkocmVjb3JkLCB0cnVlKTtcbiAgfTtcbiAgdmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVjb3JkID0gdGhpcyxcbiAgICAgICAgdGhlbjtcbiAgICBpZiAocmVjb3JkLmQpXG4gICAgICByZXR1cm47XG4gICAgcmVjb3JkLmQgPSB0cnVlO1xuICAgIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDtcbiAgICB0cnkge1xuICAgICAgaWYgKHJlY29yZC5wID09PSB2YWx1ZSlcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgIGFzYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHdyYXBwZXIgPSB7XG4gICAgICAgICAgICByOiByZWNvcmQsXG4gICAgICAgICAgICBkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY29yZC52ID0gdmFsdWU7XG4gICAgICAgIHJlY29yZC5zID0gMTtcbiAgICAgICAgbm90aWZ5KHJlY29yZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICRyZWplY3QuY2FsbCh7XG4gICAgICAgIHI6IHJlY29yZCxcbiAgICAgICAgZDogZmFsc2VcbiAgICAgIH0sIGUpO1xuICAgIH1cbiAgfTtcbiAgaWYgKCFVU0VfTkFUSVZFKSB7XG4gICAgUCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgICB2YXIgcmVjb3JkID0gdGhpcy5fZCA9IHtcbiAgICAgICAgcDogc3RyaWN0TmV3KHRoaXMsIFAsIFBST01JU0UpLFxuICAgICAgICBjOiBbXSxcbiAgICAgICAgYTogdW5kZWZpbmVkLFxuICAgICAgICBzOiAwLFxuICAgICAgICBkOiBmYWxzZSxcbiAgICAgICAgdjogdW5kZWZpbmVkLFxuICAgICAgICBoOiBmYWxzZSxcbiAgICAgICAgbjogZmFsc2VcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHJlY29yZCwgMSksIGN0eCgkcmVqZWN0LCByZWNvcmQsIDEpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAkcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpKFAucHJvdG90eXBlLCB7XG4gICAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgIHZhciByZWFjdGlvbiA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUCkpLFxuICAgICAgICAgICAgcHJvbWlzZSA9IHJlYWN0aW9uLnByb21pc2UsXG4gICAgICAgICAgICByZWNvcmQgPSB0aGlzLl9kO1xuICAgICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgICByZWNvcmQuYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgICAgaWYgKHJlY29yZC5hKVxuICAgICAgICAgIHJlY29yZC5hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgICBpZiAocmVjb3JkLnMpXG4gICAgICAgICAgbm90aWZ5KHJlY29yZCwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH0sXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogUH0pO1xuICByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKShQLCBQUk9NSVNFKTtcbiAgcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJykoUFJPTUlTRSk7XG4gIFdyYXBwZXIgPSByZXF1aXJlKCcuLyQuY29yZScpW1BST01JU0VdO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7cmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgICAgdmFyIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkodGhpcyksXG4gICAgICAgICAgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAgICQkcmVqZWN0KHIpO1xuICAgICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgICB9fSk7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8IHRlc3RSZXNvbHZlKHRydWUpKSwgUFJPTUlTRSwge3Jlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgICAgaWYgKHggaW5zdGFuY2VvZiBQICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKSxcbiAgICAgICAgICAkJHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgICAkJHJlc29sdmUoeCk7XG4gICAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICAgIH19KTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcikge1xuICAgIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCkge30pO1xuICB9KSksIFBST01JU0UsIHtcbiAgICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgICAgdmFyIEMgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKSxcbiAgICAgICAgICBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpLFxuICAgICAgICAgIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3QsXG4gICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCB2YWx1ZXMucHVzaCwgdmFsdWVzKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICAgICAgICByZXN1bHRzID0gQXJyYXkocmVtYWluaW5nKTtcbiAgICAgICAgaWYgKHJlbWFpbmluZylcbiAgICAgICAgICAkLmVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgICBpZiAoYWJydXB0KVxuICAgICAgICByZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gICAgfSxcbiAgICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgQyA9IGdldENvbnN0cnVjdG9yKHRoaXMpLFxuICAgICAgICAgIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyksXG4gICAgICAgICAgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFicnVwdClcbiAgICAgICAgcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICAgIH1cbiAgfSk7XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
