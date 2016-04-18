"use strict";

System.register([], function (_export, _context) {
  var _typeof;

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      /* */
      (function (process) {
        "use strict";

        var _Symbol = require('../core-js/symbol')["default"];
        var _Object$create = require('../core-js/object/create')["default"];
        var _Object$setPrototypeOf = require('../core-js/object/set-prototype-of')["default"];
        var _Promise = require('../core-js/promise')["default"];
        !function (global) {
          "use strict";

          var hasOwn = Object.prototype.hasOwnProperty;
          var undefined;
          var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
          var runtime = global.regeneratorRuntime;
          if (runtime) {
            if (inModule) {
              module.exports = runtime;
            }
            return;
          }
          runtime = global.regeneratorRuntime = inModule ? module.exports : {};
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var generator = _Object$create((outerFn || Generator).prototype);
            var context = new Context(tryLocsList || []);
            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
          }
          runtime.wrap = wrap;
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }
          runtime.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };
          runtime.mark = function (genFun) {
            if (_Object$setPrototypeOf) {
              _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = _Object$create(Gp);
            return genFun;
          };
          runtime.awrap = function (arg) {
            return new AwaitArgument(arg);
          };
          function AwaitArgument(arg) {
            this.arg = arg;
          }
          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value instanceof AwaitArgument) {
                  return _Promise.resolve(value.arg).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }
                return _Promise.resolve(value).then(function (unwrapped) {
                  result.value = unwrapped;
                  resolve(result);
                }, reject);
              }
            }
            if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
              invoke = process.domain.bind(invoke);
            }
            var previousPromise;
            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new _Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            this._invoke = enqueue;
          }
          defineIteratorMethods(AsyncIterator.prototype);
          runtime.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          };
          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }
              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }
                return doneResult();
              }
              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
                    context.delegate = null;
                    var returnMethod = delegate.iterator["return"];
                    if (returnMethod) {
                      var record = tryCatch(returnMethod, delegate.iterator, arg);
                      if (record.type === "throw") {
                        method = "throw";
                        arg = record.arg;
                        continue;
                      }
                    }
                    if (method === "return") {
                      continue;
                    }
                  }
                  var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
                  if (record.type === "throw") {
                    context.delegate = null;
                    method = "throw";
                    arg = record.arg;
                    continue;
                  }
                  method = "next";
                  arg = undefined;
                  var info = record.arg;
                  if (info.done) {
                    context[delegate.resultName] = info.value;
                    context.next = delegate.nextLoc;
                  } else {
                    state = GenStateSuspendedYield;
                    return info;
                  }
                  context.delegate = null;
                }
                if (method === "next") {
                  if (state === GenStateSuspendedYield) {
                    context.sent = arg;
                  } else {
                    context.sent = undefined;
                  }
                } else if (method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw arg;
                  }
                  if (context.dispatchException(arg)) {
                    method = "next";
                    arg = undefined;
                  }
                } else if (method === "return") {
                  context.abrupt("return", arg);
                }
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                  var info = {
                    value: record.arg,
                    done: context.done
                  };
                  if (record.arg === ContinueSentinel) {
                    if (context.delegate && method === "next") {
                      arg = undefined;
                    }
                  } else {
                    return info;
                  }
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  method = "throw";
                  arg = record.arg;
                }
              }
            };
          }
          defineIteratorMethods(Gp);
          Gp[iteratorSymbol] = function () {
            return this;
          };
          Gp[toStringTagSymbol] = "Generator";
          Gp.toString = function () {
            return "[object Generator]";
          };
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            if (1 in locs) {
              entry.catchLoc = locs[1];
            }
            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }
          runtime.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }
              next.done = true;
              return next;
            };
          };
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }
              if (typeof iterable.next === "function") {
                return iterable;
              }
              if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }
                  next.value = undefined;
                  next.done = true;
                  return next;
                };
                return next.next = next;
              }
            }
            return { next: doneResult };
          }
          runtime.values = values;
          function doneResult() {
            return {
              value: undefined,
              done: true
            };
          }
          Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              this.sent = undefined;
              this.done = false;
              this.delegate = null;
              this.tryEntries.forEach(resetTryEntry);
              if (!skipTempReset) {
                for (var name in this) {
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },
            stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }
              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                return !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") {
                  return handle("end");
                }
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                finallyEntry = null;
              }
              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;
              if (finallyEntry) {
                this.next = finallyEntry.finallyLoc;
              } else {
                this.complete(record);
              }
              return ContinueSentinel;
            },
            complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }
              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = record.arg;
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };
              return ContinueSentinel;
            }
          };
        }((typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9iYWJlbC1ydW50aW1lQDUuOC4zOC9yZWdlbmVyYXRvci9ydW50aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBQyxVQUFTLE9BQVQsRUFBa0I7QUFDakIscUJBRGlCOztBQUVqQixZQUFJLFVBQVUsUUFBUSxtQkFBUixFQUE2QixTQUE3QixDQUFWLENBRmE7QUFHakIsWUFBSSxpQkFBaUIsUUFBUSwwQkFBUixFQUFvQyxTQUFwQyxDQUFqQixDQUhhO0FBSWpCLFlBQUkseUJBQXlCLFFBQVEsb0NBQVIsRUFBOEMsU0FBOUMsQ0FBekIsQ0FKYTtBQUtqQixZQUFJLFdBQVcsUUFBUSxvQkFBUixFQUE4QixTQUE5QixDQUFYLENBTGE7QUFNakIsU0FBQyxVQUFVLE1BQVQsRUFBaUI7QUFDakIsdUJBRGlCOztBQUVqQixjQUFJLFNBQVMsT0FBTyxTQUFQLENBQWlCLGNBQWpCLENBRkk7QUFHakIsY0FBSSxTQUFKLENBSGlCO0FBSWpCLGNBQUksVUFBVSxPQUFPLE9BQVAsS0FBbUIsVUFBbkIsR0FBZ0MsT0FBaEMsR0FBMEMsRUFBMUMsQ0FKRztBQUtqQixjQUFJLGlCQUFpQixRQUFRLFFBQVIsSUFBb0IsWUFBcEIsQ0FMSjtBQU1qQixjQUFJLG9CQUFvQixRQUFRLFdBQVIsSUFBdUIsZUFBdkIsQ0FOUDtBQU9qQixjQUFJLFdBQVcsUUFBTyx1REFBUCxLQUFrQixRQUFsQixDQVBFO0FBUWpCLGNBQUksVUFBVSxPQUFPLGtCQUFQLENBUkc7QUFTakIsY0FBSSxPQUFKLEVBQWE7QUFDWCxnQkFBSSxRQUFKLEVBQWM7QUFDWixxQkFBTyxPQUFQLEdBQWlCLE9BQWpCLENBRFk7YUFBZDtBQUdBLG1CQUpXO1dBQWI7QUFNQSxvQkFBVSxPQUFPLGtCQUFQLEdBQTRCLFdBQVcsT0FBTyxPQUFQLEdBQWlCLEVBQTVCLENBZnJCO0FBZ0JqQixtQkFBUyxJQUFULENBQWMsT0FBZCxFQUF1QixPQUF2QixFQUFnQyxJQUFo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UyxNQUFULENBQWdCLE1BQWhCLEVBQXdCO0FBQy9CLG1CQUFLLElBQUksSUFBSSxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBekIsRUFBNEIsS0FBSyxDQUFMLEVBQVEsRUFBRSxDQUFGLEVBQUs7QUFDcEQsb0JBQUksUUFBUSxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUixDQURnRDtBQUVwRCxvQkFBSSxNQUFNLE1BQU4sS0FBaUIsTUFBakIsRUFBeUI7QUFDM0Isc0JBQUksU0FBUyxNQUFNLFVBQU4sQ0FEYztBQUUzQixzQkFBSSxPQUFPLElBQVAsS0FBZ0IsT0FBaEIsRUFBeUI7QUFDM0Isd0JBQUksU0FBUyxPQUFPLEdBQVAsQ0FEYztBQUUzQixrQ0FBYyxLQUFkLEVBRjJCO21CQUE3QjtBQUlBLHlCQUFPLE1BQVAsQ0FOMkI7aUJBQTdCO2VBRkY7QUFXQSxvQkFBTSxJQUFJLEtBQUosQ0FBVSx1QkFBVixDQUFOLENBWitCO2FBQXhCO0FBY1QsMkJBQWUsU0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFVBQWpDLEVBQTZDLE9BQTdDLEVBQXNEO0FBQ25FLG1CQUFLLFFBQUwsR0FBZ0I7QUFDZCwwQkFBVSxPQUFPLFFBQVAsQ0FBVjtBQUNBLDRCQUFZLFVBQVo7QUFDQSx5QkFBUyxPQUFUO2VBSEYsQ0FEbUU7QUFNbkUscUJBQU8sZ0JBQVAsQ0FObUU7YUFBdEQ7V0E1SGpCLENBclNpQjtTQUFqQixDQTBhQyxRQUFPLHVEQUFQLEtBQWtCLFFBQWxCLEdBQTZCLE1BQTdCLEdBQXNDLFFBQU8sdURBQVAsS0FBa0IsUUFBbEIsR0FBNkIsTUFBN0IsR0FBc0MsUUFBTyxtREFBUCxLQUFnQixRQUFoQixHQUEyQixJQUEzQixHQUFrQyxTQUFsQyxDQTFhL0UsQ0FOaUI7T0FBbEIsQ0FBRCxDQWliRyxRQUFRLFNBQVIsQ0FqYkgiLCJmaWxlIjoibnBtL2JhYmVsLXJ1bnRpbWVANS44LjM4L3JlZ2VuZXJhdG9yL3J1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbihmdW5jdGlvbihwcm9jZXNzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX1N5bWJvbCA9IHJlcXVpcmUoJy4uL2NvcmUtanMvc3ltYm9sJylbXCJkZWZhdWx0XCJdO1xuICB2YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKCcuLi9jb3JlLWpzL29iamVjdC9jcmVhdGUnKVtcImRlZmF1bHRcIl07XG4gIHZhciBfT2JqZWN0JHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZicpW1wiZGVmYXVsdFwiXTtcbiAgdmFyIF9Qcm9taXNlID0gcmVxdWlyZSgnLi4vY29yZS1qcy9wcm9taXNlJylbXCJkZWZhdWx0XCJdO1xuICAhKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgIHZhciB1bmRlZmluZWQ7XG4gICAgdmFyICRTeW1ib2wgPSB0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gX1N5bWJvbCA6IHt9O1xuICAgIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gICAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcbiAgICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICAgIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgICBpZiAocnVudGltZSkge1xuICAgICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG4gICAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgICAgdmFyIGdlbmVyYXRvciA9IF9PYmplY3QkY3JlYXRlKChvdXRlckZuIHx8IEdlbmVyYXRvcikucHJvdG90eXBlKTtcbiAgICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgICB9XG4gICAgcnVudGltZS53cmFwID0gd3JhcDtcbiAgICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgICAgYXJnOiBlcnJcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gICAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gICAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuICAgIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gICAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gICAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICAgIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9IEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgICAgcmV0dXJuIGN0b3IgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgOiBmYWxzZTtcbiAgICB9O1xuICAgIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgICAgaWYgKF9PYmplY3Qkc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgX09iamVjdCRzZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShHcCk7XG4gICAgICByZXR1cm4gZ2VuRnVuO1xuICAgIH07XG4gICAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX1Byb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgICAgfVxuICAgICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcbiAgICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBfUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICAgIH1cbiAgICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICAgIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSk7XG4gICAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8IG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCkge1xuICAgICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBhcmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0LnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IEdlblN0YXRlQ29tcGxldGVkIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG4gICAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG4gICAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICAgIHZhciBlbnRyeSA9IHt0cnlMb2M6IGxvY3NbMF19O1xuICAgICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgICB9XG4gICAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgICB9XG4gICAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgICB0aGlzLnRyeUVudHJpZXMgPSBbe3RyeUxvYzogXCJyb290XCJ9XTtcbiAgICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gICAgfVxuICAgIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgICBrZXlzLnJldmVyc2UoKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgfTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtuZXh0OiBkb25lUmVzdWx0fTtcbiAgICB9XG4gICAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIGRvbmU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG4gICAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICAgIH0sXG4gICAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaW5hbGx5RW50cnkgJiYgKHR5cGUgPT09IFwiYnJlYWtcIiB8fCB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGFyZztcbiAgICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHwgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgICB9LFxuICAgICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9O1xuICB9KSh0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHVuZGVmaW5lZCk7XG59KShyZXF1aXJlKCdwcm9jZXNzJykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
