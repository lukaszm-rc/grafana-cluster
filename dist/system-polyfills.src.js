'use strict';

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
			/*
    * SystemJS Polyfills for URL and Promise providing IE8+ Support
    */
			(function (define) {

				// from https://gist.github.com/Yaffle/1088850
				(function (global) {
					function URLPolyfill(url, baseURL) {
						if (typeof url != 'string') throw new TypeError('URL must be a string');
						var m = String(url).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
						if (!m) throw new RangeError('Invalid URL format');
						var protocol = m[1] || "";
						var username = m[2] || "";
						var password = m[3] || "";
						var host = m[4] || "";
						var hostname = m[5] || "";
						var port = m[6] || "";
						var pathname = m[7] || "";
						var search = m[8] || "";
						var hash = m[9] || "";
						if (baseURL !== undefined) {
							var base = baseURL instanceof URLPolyfill ? baseURL : new URLPolyfill(baseURL);
							var flag = !protocol && !host && !username;
							if (flag && !pathname && !search) search = base.search;
							if (flag && pathname[0] !== "/") pathname = pathname ? ((base.host || base.username) && !base.pathname ? "/" : "") + base.pathname.slice(0, base.pathname.lastIndexOf("/") + 1) + pathname : base.pathname;
							// dot segments removal
							var output = [];
							pathname.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (p) {
								if (p === "/..") output.pop();else output.push(p);
							});
							pathname = output.join("").replace(/^\//, pathname[0] === "/" ? "/" : "");
							if (flag) {
								port = base.port;
								hostname = base.hostname;
								host = base.host;
								password = base.password;
								username = base.username;
							}
							if (!protocol) protocol = base.protocol;
						}

						// convert windows file URLs to use /
						if (protocol == 'file:') pathname = pathname.replace(/\\/g, '/');

						this.origin = host ? protocol + (protocol !== "" || host !== "" ? "//" : "") + host : "";
						this.href = protocol + (protocol && host || protocol == "file:" ? "//" : "") + (username !== "" ? username + (password !== "" ? ":" + password : "") + "@" : "") + host + pathname + search + hash;
						this.protocol = protocol;
						this.username = username;
						this.password = password;
						this.host = host;
						this.hostname = hostname;
						this.port = port;
						this.pathname = pathname;
						this.search = search;
						this.hash = hash;
					}
					global.URLPolyfill = URLPolyfill;
				})(typeof self != 'undefined' ? self : global);!function (e) {
					"object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "undefined" != typeof window ? window.Promise = e() : "undefined" != typeof global ? global.Promise = e() : "undefined" != typeof self && (self.Promise = e());
				}(function () {
					var define, module, exports;return function e(t, n, r) {
						function s(o, u) {
							if (!n[o]) {
								if (!t[o]) {
									var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
								}var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
									var n = t[o][1][e];return s(n ? n : e);
								}, f, f.exports, e, t, n, r);
							}return n[o].exports;
						}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
							s(r[o]);
						}return s;
					}({ 1: [function (require, module, exports) {
							/** @license MIT License (c) copyright 2010-2014 original author or authors */
							/** @author Brian Cavalier */
							/** @author John Hann */

							/**
        * ES6 global Promise shim
        */
							var unhandledRejections = require('../lib/decorators/unhandledRejection');
							var PromiseConstructor = unhandledRejections(require('../lib/Promise'));

							module.exports = typeof global != 'undefined' ? global.Promise = PromiseConstructor : typeof self != 'undefined' ? self.Promise = PromiseConstructor : PromiseConstructor;
						}, { "../lib/Promise": 2, "../lib/decorators/unhandledRejection": 4 }], 2: [function (require, module, exports) {
							/** @license MIT License (c) copyright 2010-2014 original author or authors */
							/** @author Brian Cavalier */
							/** @author John Hann */

							(function (define) {
								'use strict';

								define(function (require) {

									var makePromise = require('./makePromise');
									var Scheduler = require('./Scheduler');
									var async = require('./env').asap;

									return makePromise({
										scheduler: new Scheduler(async)
									});
								});
							})(typeof define === 'function' && define.amd ? define : function (factory) {
								module.exports = factory(require);
							});
						}, { "./Scheduler": 3, "./env": 5, "./makePromise": 7 }], 3: [function (require, module, exports) {
							/** @license MIT License (c) copyright 2010-2014 original author or authors */
							/** @author Brian Cavalier */
							/** @author John Hann */

							(function (define) {
								'use strict';

								define(function () {

									// Credit to Twisol (https://github.com/Twisol) for suggesting
									// this type of extensible queue + trampoline approach for next-tick conflation.

									/**
          * Async task scheduler
          * @param {function} async function to schedule a single async function
          * @constructor
          */
									function Scheduler(async) {
										this._async = async;
										this._running = false;

										this._queue = this;
										this._queueLen = 0;
										this._afterQueue = {};
										this._afterQueueLen = 0;

										var self = this;
										this.drain = function () {
											self._drain();
										};
									}

									/**
          * Enqueue a task
          * @param {{ run:function }} task
          */
									Scheduler.prototype.enqueue = function (task) {
										this._queue[this._queueLen++] = task;
										this.run();
									};

									/**
          * Enqueue a task to run after the main task queue
          * @param {{ run:function }} task
          */
									Scheduler.prototype.afterQueue = function (task) {
										this._afterQueue[this._afterQueueLen++] = task;
										this.run();
									};

									Scheduler.prototype.run = function () {
										if (!this._running) {
											this._running = true;
											this._async(this.drain);
										}
									};

									/**
          * Drain the handler queue entirely, and then the after queue
          */
									Scheduler.prototype._drain = function () {
										var i = 0;
										for (; i < this._queueLen; ++i) {
											this._queue[i].run();
											this._queue[i] = void 0;
										}

										this._queueLen = 0;
										this._running = false;

										for (i = 0; i < this._afterQueueLen; ++i) {
											this._afterQueue[i].run();
											this._afterQueue[i] = void 0;
										}

										this._afterQueueLen = 0;
									};

									return Scheduler;
								});
							})(typeof define === 'function' && define.amd ? define : function (factory) {
								module.exports = factory();
							});
						}, {}], 4: [function (require, module, exports) {
							/** @license MIT License (c) copyright 2010-2014 original author or authors */
							/** @author Brian Cavalier */
							/** @author John Hann */

							(function (define) {
								'use strict';

								define(function (require) {

									var setTimer = require('../env').setTimer;
									var format = require('../format');

									return function unhandledRejection(Promise) {

										var logError = noop;
										var logInfo = noop;
										var localConsole;

										if (typeof console !== 'undefined') {
											// Alias console to prevent things like uglify's drop_console option from
											// removing console.log/error. Unhandled rejections fall into the same
											// category as uncaught exceptions, and build tools shouldn't silence them.
											localConsole = console;
											logError = typeof localConsole.error !== 'undefined' ? function (e) {
												localConsole.error(e);
											} : function (e) {
												localConsole.log(e);
											};

											logInfo = typeof localConsole.info !== 'undefined' ? function (e) {
												localConsole.info(e);
											} : function (e) {
												localConsole.log(e);
											};
										}

										Promise.onPotentiallyUnhandledRejection = function (rejection) {
											enqueue(report, rejection);
										};

										Promise.onPotentiallyUnhandledRejectionHandled = function (rejection) {
											enqueue(unreport, rejection);
										};

										Promise.onFatalRejection = function (rejection) {
											enqueue(throwit, rejection.value);
										};

										var tasks = [];
										var reported = [];
										var running = null;

										function report(r) {
											if (!r.handled) {
												reported.push(r);
												logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
											}
										}

										function unreport(r) {
											var i = reported.indexOf(r);
											if (i >= 0) {
												reported.splice(i, 1);
												logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
											}
										}

										function enqueue(f, x) {
											tasks.push(f, x);
											if (running === null) {
												running = setTimer(flush, 0);
											}
										}

										function flush() {
											running = null;
											while (tasks.length > 0) {
												tasks.shift()(tasks.shift());
											}
										}

										return Promise;
									};

									function throwit(e) {
										throw e;
									}

									function noop() {}
								});
							})(typeof define === 'function' && define.amd ? define : function (factory) {
								module.exports = factory(require);
							});
						}, { "../env": 5, "../format": 6 }], 5: [function (require, module, exports) {
							/** @license MIT License (c) copyright 2010-2014 original author or authors */
							/** @author Brian Cavalier */
							/** @author John Hann */

							/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
							(function (define) {
								'use strict';

								define(function (require) {
									/*jshint maxcomplexity:6*/

									// Sniff "best" async scheduling option
									// Prefer process.nextTick or MutationObserver, then check for
									// setTimeout, and finally vertx, since its the only env that doesn't
									// have setTimeout

									var MutationObs;
									var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;

									// Default env
									var setTimer = function setTimer(f, ms) {
										return setTimeout(f, ms);
									};
									var clearTimer = function clearTimer(t) {
										return clearTimeout(t);
									};
									var asap = function asap(f) {
										return capturedSetTimeout(f, 0);
									};

									// Detect specific env
									if (isNode()) {
										// Node
										asap = function asap(f) {
											return process.nextTick(f);
										};
									} else if (MutationObs = hasMutationObserver()) {
										// Modern browser
										asap = initMutationObserver(MutationObs);
									} else if (!capturedSetTimeout) {
										// vert.x
										var vertxRequire = require;
										var vertx = vertxRequire('vertx');
										setTimer = function setTimer(f, ms) {
											return vertx.setTimer(ms, f);
										};
										clearTimer = vertx.cancelTimer;
										asap = vertx.runOnLoop || vertx.runOnContext;
									}

									return {
										setTimer: setTimer,
										clearTimer: clearTimer,
										asap: asap
									};

									function isNode() {
										return typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
									}

									function hasMutationObserver() {
										return typeof MutationObserver === 'function' && MutationObserver || typeof WebKitMutationObserver === 'function' && WebKitMutationObserver;
									}

									function initMutationObserver(MutationObserver) {
										var scheduled;
										var node = document.createTextNode('');
										var o = new MutationObserver(run);
										o.observe(node, { characterData: true });

										function run() {
											var f = scheduled;
											scheduled = void 0;
											f();
										}

										var i = 0;
										return function (f) {
											scheduled = f;
											node.data = i ^= 1;
										};
									}
								});
							})(typeof define === 'function' && define.amd ? define : function (factory) {
								module.exports = factory(require);
							});
						}, {}], 6: [function (require, module, exports) {
							/** @license MIT License (c) copyright 2010-2014 original author or authors */
							/** @author Brian Cavalier */
							/** @author John Hann */

							(function (define) {
								'use strict';

								define(function () {

									return {
										formatError: formatError,
										formatObject: formatObject,
										tryStringify: tryStringify
									};

									/**
          * Format an error into a string.  If e is an Error and has a stack property,
          * it's returned.  Otherwise, e is formatted using formatObject, with a
          * warning added about e not being a proper Error.
          * @param {*} e
          * @returns {String} formatted string, suitable for output to developers
          */
									function formatError(e) {
										var s = (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' && e !== null && (e.stack || e.message) ? e.stack || e.message : formatObject(e);
										return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
									}

									/**
          * Format an object, detecting "plain" objects and running them through
          * JSON.stringify if possible.
          * @param {Object} o
          * @returns {string}
          */
									function formatObject(o) {
										var s = String(o);
										if (s === '[object Object]' && typeof JSON !== 'undefined') {
											s = tryStringify(o, s);
										}
										return s;
									}

									/**
          * Try to return the result of JSON.stringify(x).  If that fails, return
          * defaultValue
          * @param {*} x
          * @param {*} defaultValue
          * @returns {String|*} JSON.stringify(x) or defaultValue
          */
									function tryStringify(x, defaultValue) {
										try {
											return JSON.stringify(x);
										} catch (e) {
											return defaultValue;
										}
									}
								});
							})(typeof define === 'function' && define.amd ? define : function (factory) {
								module.exports = factory();
							});
						}, {}], 7: [function (require, module, exports) {
							/** @license MIT License (c) copyright 2010-2014 original author or authors */
							/** @author Brian Cavalier */
							/** @author John Hann */

							(function (define) {
								'use strict';

								define(function () {

									return function makePromise(environment) {

										var tasks = environment.scheduler;
										var emitRejection = initEmitRejection();

										var objectCreate = Object.create || function (proto) {
											function Child() {}
											Child.prototype = proto;
											return new Child();
										};

										/**
           * Create a promise whose fate is determined by resolver
           * @constructor
           * @returns {Promise} promise
           * @name Promise
           */
										function Promise(resolver, handler) {
											this._handler = resolver === Handler ? handler : init(resolver);
										}

										/**
           * Run the supplied resolver
           * @param resolver
           * @returns {Pending}
           */
										function init(resolver) {
											var handler = new Pending();

											try {
												resolver(promiseResolve, promiseReject, promiseNotify);
											} catch (e) {
												promiseReject(e);
											}

											return handler;

											/**
            * Transition from pre-resolution state to post-resolution state, notifying
            * all listeners of the ultimate fulfillment or rejection
            * @param {*} x resolution value
            */
											function promiseResolve(x) {
												handler.resolve(x);
											}
											/**
            * Reject this promise with reason, which will be used verbatim
            * @param {Error|*} reason rejection reason, strongly suggested
            *   to be an Error type
            */
											function promiseReject(reason) {
												handler.reject(reason);
											}

											/**
            * @deprecated
            * Issue a progress event, notifying all progress listeners
            * @param {*} x progress event payload to pass to all listeners
            */
											function promiseNotify(x) {
												handler.notify(x);
											}
										}

										// Creation

										Promise.resolve = resolve;
										Promise.reject = reject;
										Promise.never = never;

										Promise._defer = defer;
										Promise._handler = getHandler;

										/**
           * Returns a trusted promise. If x is already a trusted promise, it is
           * returned, otherwise returns a new trusted Promise which follows x.
           * @param  {*} x
           * @return {Promise} promise
           */
										function resolve(x) {
											return isPromise(x) ? x : new Promise(Handler, new Async(getHandler(x)));
										}

										/**
           * Return a reject promise with x as its reason (x is used verbatim)
           * @param {*} x
           * @returns {Promise} rejected promise
           */
										function reject(x) {
											return new Promise(Handler, new Async(new Rejected(x)));
										}

										/**
           * Return a promise that remains pending forever
           * @returns {Promise} forever-pending promise.
           */
										function never() {
											return foreverPendingPromise; // Should be frozen
										}

										/**
           * Creates an internal {promise, resolver} pair
           * @private
           * @returns {Promise}
           */
										function defer() {
											return new Promise(Handler, new Pending());
										}

										// Transformation and flow control

										/**
           * Transform this promise's fulfillment value, returning a new Promise
           * for the transformed result.  If the promise cannot be fulfilled, onRejected
           * is called with the reason.  onProgress *may* be called with updates toward
           * this promise's fulfillment.
           * @param {function=} onFulfilled fulfillment handler
           * @param {function=} onRejected rejection handler
           * @param {function=} onProgress @deprecated progress handler
           * @return {Promise} new promise
           */
										Promise.prototype.then = function (onFulfilled, onRejected, onProgress) {
											var parent = this._handler;
											var state = parent.join().state();

											if (typeof onFulfilled !== 'function' && state > 0 || typeof onRejected !== 'function' && state < 0) {
												// Short circuit: value will not change, simply share handler
												return new this.constructor(Handler, parent);
											}

											var p = this._beget();
											var child = p._handler;

											parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);

											return p;
										};

										/**
           * If this promise cannot be fulfilled due to an error, call onRejected to
           * handle the error. Shortcut for .then(undefined, onRejected)
           * @param {function?} onRejected
           * @return {Promise}
           */
										Promise.prototype['catch'] = function (onRejected) {
											return this.then(void 0, onRejected);
										};

										/**
           * Creates a new, pending promise of the same type as this promise
           * @private
           * @returns {Promise}
           */
										Promise.prototype._beget = function () {
											return begetFrom(this._handler, this.constructor);
										};

										function begetFrom(parent, Promise) {
											var child = new Pending(parent.receiver, parent.join().context);
											return new Promise(Handler, child);
										}

										// Array combinators

										Promise.all = all;
										Promise.race = race;
										Promise._traverse = traverse;

										/**
           * Return a promise that will fulfill when all promises in the
           * input array have fulfilled, or will reject when one of the
           * promises rejects.
           * @param {array} promises array of promises
           * @returns {Promise} promise for array of fulfillment values
           */
										function all(promises) {
											return traverseWith(snd, null, promises);
										}

										/**
           * Array<Promise<X>> -> Promise<Array<f(X)>>
           * @private
           * @param {function} f function to apply to each promise's value
           * @param {Array} promises array of promises
           * @returns {Promise} promise for transformed values
           */
										function traverse(f, promises) {
											return traverseWith(tryCatch2, f, promises);
										}

										function traverseWith(tryMap, f, promises) {
											var handler = typeof f === 'function' ? mapAt : settleAt;

											var resolver = new Pending();
											var pending = promises.length >>> 0;
											var results = new Array(pending);

											for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
												x = promises[i];

												if (x === void 0 && !(i in promises)) {
													--pending;
													continue;
												}

												traverseAt(promises, handler, i, x, resolver);
											}

											if (pending === 0) {
												resolver.become(new Fulfilled(results));
											}

											return new Promise(Handler, resolver);

											function mapAt(i, x, resolver) {
												if (!resolver.resolved) {
													traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
												}
											}

											function settleAt(i, x, resolver) {
												results[i] = x;
												if (--pending === 0) {
													resolver.become(new Fulfilled(results));
												}
											}
										}

										function traverseAt(promises, handler, i, x, resolver) {
											if (maybeThenable(x)) {
												var h = getHandlerMaybeThenable(x);
												var s = h.state();

												if (s === 0) {
													h.fold(handler, i, void 0, resolver);
												} else if (s > 0) {
													handler(i, h.value, resolver);
												} else {
													resolver.become(h);
													visitRemaining(promises, i + 1, h);
												}
											} else {
												handler(i, x, resolver);
											}
										}

										Promise._visitRemaining = visitRemaining;
										function visitRemaining(promises, start, handler) {
											for (var i = start; i < promises.length; ++i) {
												markAsHandled(getHandler(promises[i]), handler);
											}
										}

										function markAsHandled(h, handler) {
											if (h === handler) {
												return;
											}

											var s = h.state();
											if (s === 0) {
												h.visit(h, void 0, h._unreport);
											} else if (s < 0) {
												h._unreport();
											}
										}

										/**
           * Fulfill-reject competitive race. Return a promise that will settle
           * to the same state as the earliest input promise to settle.
           *
           * WARNING: The ES6 Promise spec requires that race()ing an empty array
           * must return a promise that is pending forever.  This implementation
           * returns a singleton forever-pending promise, the same singleton that is
           * returned by Promise.never(), thus can be checked with ===
           *
           * @param {array} promises array of promises to race
           * @returns {Promise} if input is non-empty, a promise that will settle
           * to the same outcome as the earliest input promise to settle. if empty
           * is empty, returns a promise that will never settle.
           */
										function race(promises) {
											if ((typeof promises === 'undefined' ? 'undefined' : _typeof(promises)) !== 'object' || promises === null) {
												return reject(new TypeError('non-iterable passed to race()'));
											}

											// Sigh, race([]) is untestable unless we return *something*
											// that is recognizable without calling .then() on it.
											return promises.length === 0 ? never() : promises.length === 1 ? resolve(promises[0]) : runRace(promises);
										}

										function runRace(promises) {
											var resolver = new Pending();
											var i, x, h;
											for (i = 0; i < promises.length; ++i) {
												x = promises[i];
												if (x === void 0 && !(i in promises)) {
													continue;
												}

												h = getHandler(x);
												if (h.state() !== 0) {
													resolver.become(h);
													visitRemaining(promises, i + 1, h);
													break;
												} else {
													h.visit(resolver, resolver.resolve, resolver.reject);
												}
											}
											return new Promise(Handler, resolver);
										}

										// Promise internals
										// Below this, everything is @private

										/**
           * Get an appropriate handler for x, without checking for cycles
           * @param {*} x
           * @returns {object} handler
           */
										function getHandler(x) {
											if (isPromise(x)) {
												return x._handler.join();
											}
											return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
										}

										/**
           * Get a handler for thenable x.
           * NOTE: You must only call this if maybeThenable(x) == true
           * @param {object|function|Promise} x
           * @returns {object} handler
           */
										function getHandlerMaybeThenable(x) {
											return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
										}

										/**
           * Get a handler for potentially untrusted thenable x
           * @param {*} x
           * @returns {object} handler
           */
										function getHandlerUntrusted(x) {
											try {
												var untrustedThen = x.then;
												return typeof untrustedThen === 'function' ? new Thenable(untrustedThen, x) : new Fulfilled(x);
											} catch (e) {
												return new Rejected(e);
											}
										}

										/**
           * Handler for a promise that is pending forever
           * @constructor
           */
										function Handler() {}

										Handler.prototype.when = Handler.prototype.become = Handler.prototype.notify // deprecated
										 = Handler.prototype.fail = Handler.prototype._unreport = Handler.prototype._report = noop;

										Handler.prototype._state = 0;

										Handler.prototype.state = function () {
											return this._state;
										};

										/**
           * Recursively collapse handler chain to find the handler
           * nearest to the fully resolved value.
           * @returns {object} handler nearest the fully resolved value
           */
										Handler.prototype.join = function () {
											var h = this;
											while (h.handler !== void 0) {
												h = h.handler;
											}
											return h;
										};

										Handler.prototype.chain = function (to, receiver, fulfilled, rejected, progress) {
											this.when({
												resolver: to,
												receiver: receiver,
												fulfilled: fulfilled,
												rejected: rejected,
												progress: progress
											});
										};

										Handler.prototype.visit = function (receiver, fulfilled, rejected, progress) {
											this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
										};

										Handler.prototype.fold = function (f, z, c, to) {
											this.when(new Fold(f, z, c, to));
										};

										/**
           * Handler that invokes fail() on any handler it becomes
           * @constructor
           */
										function FailIfRejected() {}

										inherit(Handler, FailIfRejected);

										FailIfRejected.prototype.become = function (h) {
											h.fail();
										};

										var failIfRejected = new FailIfRejected();

										/**
           * Handler that manages a queue of consumers waiting on a pending promise
           * @constructor
           */
										function Pending(receiver, inheritedContext) {
											Promise.createContext(this, inheritedContext);

											this.consumers = void 0;
											this.receiver = receiver;
											this.handler = void 0;
											this.resolved = false;
										}

										inherit(Handler, Pending);

										Pending.prototype._state = 0;

										Pending.prototype.resolve = function (x) {
											this.become(getHandler(x));
										};

										Pending.prototype.reject = function (x) {
											if (this.resolved) {
												return;
											}

											this.become(new Rejected(x));
										};

										Pending.prototype.join = function () {
											if (!this.resolved) {
												return this;
											}

											var h = this;

											while (h.handler !== void 0) {
												h = h.handler;
												if (h === this) {
													return this.handler = cycle();
												}
											}

											return h;
										};

										Pending.prototype.run = function () {
											var q = this.consumers;
											var handler = this.handler;
											this.handler = this.handler.join();
											this.consumers = void 0;

											for (var i = 0; i < q.length; ++i) {
												handler.when(q[i]);
											}
										};

										Pending.prototype.become = function (handler) {
											if (this.resolved) {
												return;
											}

											this.resolved = true;
											this.handler = handler;
											if (this.consumers !== void 0) {
												tasks.enqueue(this);
											}

											if (this.context !== void 0) {
												handler._report(this.context);
											}
										};

										Pending.prototype.when = function (continuation) {
											if (this.resolved) {
												tasks.enqueue(new ContinuationTask(continuation, this.handler));
											} else {
												if (this.consumers === void 0) {
													this.consumers = [continuation];
												} else {
													this.consumers.push(continuation);
												}
											}
										};

										/**
           * @deprecated
           */
										Pending.prototype.notify = function (x) {
											if (!this.resolved) {
												tasks.enqueue(new ProgressTask(x, this));
											}
										};

										Pending.prototype.fail = function (context) {
											var c = typeof context === 'undefined' ? this.context : context;
											this.resolved && this.handler.join().fail(c);
										};

										Pending.prototype._report = function (context) {
											this.resolved && this.handler.join()._report(context);
										};

										Pending.prototype._unreport = function () {
											this.resolved && this.handler.join()._unreport();
										};

										/**
           * Wrap another handler and force it into a future stack
           * @param {object} handler
           * @constructor
           */
										function Async(handler) {
											this.handler = handler;
										}

										inherit(Handler, Async);

										Async.prototype.when = function (continuation) {
											tasks.enqueue(new ContinuationTask(continuation, this));
										};

										Async.prototype._report = function (context) {
											this.join()._report(context);
										};

										Async.prototype._unreport = function () {
											this.join()._unreport();
										};

										/**
           * Handler that wraps an untrusted thenable and assimilates it in a future stack
           * @param {function} then
           * @param {{then: function}} thenable
           * @constructor
           */
										function Thenable(then, thenable) {
											Pending.call(this);
											tasks.enqueue(new AssimilateTask(then, thenable, this));
										}

										inherit(Pending, Thenable);

										/**
           * Handler for a fulfilled promise
           * @param {*} x fulfillment value
           * @constructor
           */
										function Fulfilled(x) {
											Promise.createContext(this);
											this.value = x;
										}

										inherit(Handler, Fulfilled);

										Fulfilled.prototype._state = 1;

										Fulfilled.prototype.fold = function (f, z, c, to) {
											runContinuation3(f, z, this, c, to);
										};

										Fulfilled.prototype.when = function (cont) {
											runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
										};

										var errorId = 0;

										/**
           * Handler for a rejected promise
           * @param {*} x rejection reason
           * @constructor
           */
										function Rejected(x) {
											Promise.createContext(this);

											this.id = ++errorId;
											this.value = x;
											this.handled = false;
											this.reported = false;

											this._report();
										}

										inherit(Handler, Rejected);

										Rejected.prototype._state = -1;

										Rejected.prototype.fold = function (f, z, c, to) {
											to.become(this);
										};

										Rejected.prototype.when = function (cont) {
											if (typeof cont.rejected === 'function') {
												this._unreport();
											}
											runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
										};

										Rejected.prototype._report = function (context) {
											tasks.afterQueue(new ReportTask(this, context));
										};

										Rejected.prototype._unreport = function () {
											if (this.handled) {
												return;
											}
											this.handled = true;
											tasks.afterQueue(new UnreportTask(this));
										};

										Rejected.prototype.fail = function (context) {
											this.reported = true;
											emitRejection('unhandledRejection', this);
											Promise.onFatalRejection(this, context === void 0 ? this.context : context);
										};

										function ReportTask(rejection, context) {
											this.rejection = rejection;
											this.context = context;
										}

										ReportTask.prototype.run = function () {
											if (!this.rejection.handled && !this.rejection.reported) {
												this.rejection.reported = true;
												emitRejection('unhandledRejection', this.rejection) || Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
											}
										};

										function UnreportTask(rejection) {
											this.rejection = rejection;
										}

										UnreportTask.prototype.run = function () {
											if (this.rejection.reported) {
												emitRejection('rejectionHandled', this.rejection) || Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
											}
										};

										// Unhandled rejection hooks
										// By default, everything is a noop

										Promise.createContext = Promise.enterContext = Promise.exitContext = Promise.onPotentiallyUnhandledRejection = Promise.onPotentiallyUnhandledRejectionHandled = Promise.onFatalRejection = noop;

										// Errors and singletons

										var foreverPendingHandler = new Handler();
										var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

										function cycle() {
											return new Rejected(new TypeError('Promise cycle'));
										}

										// Task runners

										/**
           * Run a single consumer
           * @constructor
           */
										function ContinuationTask(continuation, handler) {
											this.continuation = continuation;
											this.handler = handler;
										}

										ContinuationTask.prototype.run = function () {
											this.handler.join().when(this.continuation);
										};

										/**
           * Run a queue of progress handlers
           * @constructor
           */
										function ProgressTask(value, handler) {
											this.handler = handler;
											this.value = value;
										}

										ProgressTask.prototype.run = function () {
											var q = this.handler.consumers;
											if (q === void 0) {
												return;
											}

											for (var c, i = 0; i < q.length; ++i) {
												c = q[i];
												runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
											}
										};

										/**
           * Assimilate a thenable, sending it's value to resolver
           * @param {function} then
           * @param {object|function} thenable
           * @param {object} resolver
           * @constructor
           */
										function AssimilateTask(then, thenable, resolver) {
											this._then = then;
											this.thenable = thenable;
											this.resolver = resolver;
										}

										AssimilateTask.prototype.run = function () {
											var h = this.resolver;
											tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

											function _resolve(x) {
												h.resolve(x);
											}
											function _reject(x) {
												h.reject(x);
											}
											function _notify(x) {
												h.notify(x);
											}
										};

										function tryAssimilate(then, thenable, resolve, reject, notify) {
											try {
												then.call(thenable, resolve, reject, notify);
											} catch (e) {
												reject(e);
											}
										}

										/**
           * Fold a handler value with z
           * @constructor
           */
										function Fold(f, z, c, to) {
											this.f = f;this.z = z;this.c = c;this.to = to;
											this.resolver = failIfRejected;
											this.receiver = this;
										}

										Fold.prototype.fulfilled = function (x) {
											this.f.call(this.c, this.z, x, this.to);
										};

										Fold.prototype.rejected = function (x) {
											this.to.reject(x);
										};

										Fold.prototype.progress = function (x) {
											this.to.notify(x);
										};

										// Other helpers

										/**
           * @param {*} x
           * @returns {boolean} true iff x is a trusted Promise
           */
										function isPromise(x) {
											return x instanceof Promise;
										}

										/**
           * Test just enough to rule out primitives, in order to take faster
           * paths in some code
           * @param {*} x
           * @returns {boolean} false iff x is guaranteed *not* to be a thenable
           */
										function maybeThenable(x) {
											return ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' || typeof x === 'function') && x !== null;
										}

										function runContinuation1(f, h, receiver, next) {
											if (typeof f !== 'function') {
												return next.become(h);
											}

											Promise.enterContext(h);
											tryCatchReject(f, h.value, receiver, next);
											Promise.exitContext();
										}

										function runContinuation3(f, x, h, receiver, next) {
											if (typeof f !== 'function') {
												return next.become(h);
											}

											Promise.enterContext(h);
											tryCatchReject3(f, x, h.value, receiver, next);
											Promise.exitContext();
										}

										/**
           * @deprecated
           */
										function runNotify(f, x, h, receiver, next) {
											if (typeof f !== 'function') {
												return next.notify(x);
											}

											Promise.enterContext(h);
											tryCatchReturn(f, x, receiver, next);
											Promise.exitContext();
										}

										function tryCatch2(f, a, b) {
											try {
												return f(a, b);
											} catch (e) {
												return reject(e);
											}
										}

										/**
           * Return f.call(thisArg, x), or if it throws return a rejected promise for
           * the thrown exception
           */
										function tryCatchReject(f, x, thisArg, next) {
											try {
												next.become(getHandler(f.call(thisArg, x)));
											} catch (e) {
												next.become(new Rejected(e));
											}
										}

										/**
           * Same as above, but includes the extra argument parameter.
           */
										function tryCatchReject3(f, x, y, thisArg, next) {
											try {
												f.call(thisArg, x, y, next);
											} catch (e) {
												next.become(new Rejected(e));
											}
										}

										/**
           * @deprecated
           * Return f.call(thisArg, x), or if it throws, *return* the exception
           */
										function tryCatchReturn(f, x, thisArg, next) {
											try {
												next.notify(f.call(thisArg, x));
											} catch (e) {
												next.notify(e);
											}
										}

										function inherit(Parent, Child) {
											Child.prototype = objectCreate(Parent.prototype);
											Child.prototype.constructor = Child;
										}

										function snd(x, y) {
											return y;
										}

										function noop() {}

										function initEmitRejection() {
											/*global process, self, CustomEvent*/
											if (typeof process !== 'undefined' && process !== null && typeof process.emit === 'function') {
												// Returning falsy here means to call the default
												// onPotentiallyUnhandledRejection API.  This is safe even in
												// browserify since process.emit always returns falsy in browserify:
												// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
												return function (type, rejection) {
													return type === 'unhandledRejection' ? process.emit(type, rejection.value, rejection) : process.emit(type, rejection);
												};
											} else if (typeof self !== 'undefined' && typeof CustomEvent === 'function') {
												return function (noop, self, CustomEvent) {
													var hasCustomEvent = false;
													try {
														var ev = new CustomEvent('unhandledRejection');
														hasCustomEvent = ev instanceof CustomEvent;
													} catch (e) {}

													return !hasCustomEvent ? noop : function (type, rejection) {
														var ev = new CustomEvent(type, {
															detail: {
																reason: rejection.value,
																key: rejection
															},
															bubbles: false,
															cancelable: true
														});

														return !self.dispatchEvent(ev);
													};
												}(noop, self, CustomEvent);
											}

											return noop;
										}

										return Promise;
									};
								});
							})(typeof define === 'function' && define.amd ? define : function (factory) {
								module.exports = factory();
							});
						}, {}] }, {}, [1])(1);
				});
				;if (typeof systemJSBootstrap !== 'undefined') systemJSBootstrap();
			})();
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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c0I7QUFDOUIsdUJBQVE7QUFDUCx3QkFBUSxVQUFVLEtBQVY7QUFDUixxQkFBSyxTQUFMO2dCQUZEO0FBSUEsd0JBQVMsS0FBVDtBQUNBLDJCQUFZLElBQVo7ZUFOUSxDQUFMLENBRHFEOztBQVV6RCxxQkFBTyxDQUFDLEtBQUssYUFBTCxDQUFtQixFQUFuQixDQUFELENBVmtEO2NBQTFCLENBUFM7YUFBbEMsQ0FtQk4sSUFuQk0sRUFtQkEsSUFuQkEsRUFtQk0sV0FuQk4sQ0FBUixDQUQyRTtZQUFyRTs7QUF1QlAsa0JBQU8sSUFBUCxDQXBDNEI7V0FBN0I7O0FBdUNBLGlCQUFPLE9BQVAsQ0FwNUJ3QztVQUFsQyxDQUZVO1NBQVgsQ0FBUCxDQURrQjtRQUFqQixFQTA1QkMsT0FBTyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU8sR0FBUCxHQUFhLE1BQTdDLEdBQXNELFVBQVMsT0FBVCxFQUFrQjtBQUFFLGVBQU8sT0FBUCxHQUFpQixTQUFqQixDQUFGO1FBQWxCLENBMTVCeEQsQ0FMeUM7T0FBaEMsRUFpNkJQLEVBajZCTSxDQUFGLEVBalZ3VSxFQWt2Q3ZVLEVBbHZDdVUsRUFrdkNwVSxDQUFDLENBQUQsQ0FsdkNvVSxFQW12QzdVLENBbnZDNlUsQ0FBUCxDQUEzQjtLQUFWLENBQW5QLENBbEU3QjtBQXV6Q2xCLEtBdnpDa0IsSUF1ekNiLE9BQU8saUJBQVAsS0FBNkIsV0FBN0IsRUFDSCxvQkFERDtJQXZ6Q0EsQ0FBRCIsImZpbGUiOiJzeXN0ZW0tcG9seWZpbGxzLnNyYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTeXN0ZW1KUyBQb2x5ZmlsbHMgZm9yIFVSTCBhbmQgUHJvbWlzZSBwcm92aWRpbmcgSUU4KyBTdXBwb3J0XG4gKi9cbihmdW5jdGlvbihkZWZpbmUpIHtcblxuLy8gZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ZYWZmbGUvMTA4ODg1MFxuKGZ1bmN0aW9uKGdsb2JhbCkge1xuZnVuY3Rpb24gVVJMUG9seWZpbGwodXJsLCBiYXNlVVJMKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9ICdzdHJpbmcnKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VSTCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIHZhciBtID0gU3RyaW5nKHVybCkucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIikubWF0Y2goL14oW146XFwvPyNdKzopPyg/OlxcL1xcLyg/OihbXjpAXFwvPyNdKikoPzo6KFteOkBcXC8/I10qKSk/QCk/KChbXjpcXC8/I10qKSg/OjooXFxkKikpPykpPyhbXj8jXSopKFxcP1teI10qKT8oI1tcXHNcXFNdKik/Lyk7XG4gIGlmICghbSlcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBVUkwgZm9ybWF0Jyk7XG4gIHZhciBwcm90b2NvbCA9IG1bMV0gfHwgXCJcIjtcbiAgdmFyIHVzZXJuYW1lID0gbVsyXSB8fCBcIlwiO1xuICB2YXIgcGFzc3dvcmQgPSBtWzNdIHx8IFwiXCI7XG4gIHZhciBob3N0ID0gbVs0XSB8fCBcIlwiO1xuICB2YXIgaG9zdG5hbWUgPSBtWzVdIHx8IFwiXCI7XG4gIHZhciBwb3J0ID0gbVs2XSB8fCBcIlwiO1xuICB2YXIgcGF0aG5hbWUgPSBtWzddIHx8IFwiXCI7XG4gIHZhciBzZWFyY2ggPSBtWzhdIHx8IFwiXCI7XG4gIHZhciBoYXNoID0gbVs5XSB8fCBcIlwiO1xuICBpZiAoYmFzZVVSTCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGJhc2UgPSBiYXNlVVJMIGluc3RhbmNlb2YgVVJMUG9seWZpbGwgPyBiYXNlVVJMIDogbmV3IFVSTFBvbHlmaWxsKGJhc2VVUkwpO1xuICAgIHZhciBmbGFnID0gIXByb3RvY29sICYmICFob3N0ICYmICF1c2VybmFtZTtcbiAgICBpZiAoZmxhZyAmJiAhcGF0aG5hbWUgJiYgIXNlYXJjaClcbiAgICAgIHNlYXJjaCA9IGJhc2Uuc2VhcmNoO1xuICAgIGlmIChmbGFnICYmIHBhdGhuYW1lWzBdICE9PSBcIi9cIilcbiAgICAgIHBhdGhuYW1lID0gKHBhdGhuYW1lID8gKCgoYmFzZS5ob3N0IHx8IGJhc2UudXNlcm5hbWUpICYmICFiYXNlLnBhdGhuYW1lID8gXCIvXCIgOiBcIlwiKSArIGJhc2UucGF0aG5hbWUuc2xpY2UoMCwgYmFzZS5wYXRobmFtZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxKSArIHBhdGhuYW1lKSA6IGJhc2UucGF0aG5hbWUpO1xuICAgIC8vIGRvdCBzZWdtZW50cyByZW1vdmFsXG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIHBhdGhuYW1lLnJlcGxhY2UoL14oXFwuXFwuPyhcXC98JCkpKy8sIFwiXCIpXG4gICAgICAucmVwbGFjZSgvXFwvKFxcLihcXC98JCkpKy9nLCBcIi9cIilcbiAgICAgIC5yZXBsYWNlKC9cXC9cXC5cXC4kLywgXCIvLi4vXCIpXG4gICAgICAucmVwbGFjZSgvXFwvP1teXFwvXSovZywgZnVuY3Rpb24gKHApIHtcbiAgICAgICAgaWYgKHAgPT09IFwiLy4uXCIpXG4gICAgICAgICAgb3V0cHV0LnBvcCgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgb3V0cHV0LnB1c2gocCk7XG4gICAgICB9KTtcbiAgICBwYXRobmFtZSA9IG91dHB1dC5qb2luKFwiXCIpLnJlcGxhY2UoL15cXC8vLCBwYXRobmFtZVswXSA9PT0gXCIvXCIgPyBcIi9cIiA6IFwiXCIpO1xuICAgIGlmIChmbGFnKSB7XG4gICAgICBwb3J0ID0gYmFzZS5wb3J0O1xuICAgICAgaG9zdG5hbWUgPSBiYXNlLmhvc3RuYW1lO1xuICAgICAgaG9zdCA9IGJhc2UuaG9zdDtcbiAgICAgIHBhc3N3b3JkID0gYmFzZS5wYXNzd29yZDtcbiAgICAgIHVzZXJuYW1lID0gYmFzZS51c2VybmFtZTtcbiAgICB9XG4gICAgaWYgKCFwcm90b2NvbClcbiAgICAgIHByb3RvY29sID0gYmFzZS5wcm90b2NvbDtcbiAgfVxuXG4gIC8vIGNvbnZlcnQgd2luZG93cyBmaWxlIFVSTHMgdG8gdXNlIC9cbiAgaWYgKHByb3RvY29sID09ICdmaWxlOicpXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG5cbiAgdGhpcy5vcmlnaW4gPSBob3N0ID8gcHJvdG9jb2wgKyAocHJvdG9jb2wgIT09IFwiXCIgfHwgaG9zdCAhPT0gXCJcIiA/IFwiLy9cIiA6IFwiXCIpICsgaG9zdCA6IFwiXCI7XG4gIHRoaXMuaHJlZiA9IHByb3RvY29sICsgKHByb3RvY29sICYmIGhvc3QgfHwgcHJvdG9jb2wgPT0gXCJmaWxlOlwiID8gXCIvL1wiIDogXCJcIikgKyAodXNlcm5hbWUgIT09IFwiXCIgPyB1c2VybmFtZSArIChwYXNzd29yZCAhPT0gXCJcIiA/IFwiOlwiICsgcGFzc3dvcmQgOiBcIlwiKSArIFwiQFwiIDogXCJcIikgKyBob3N0ICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICB0aGlzLnByb3RvY29sID0gcHJvdG9jb2w7XG4gIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB0aGlzLmhvc3QgPSBob3N0O1xuICB0aGlzLmhvc3RuYW1lID0gaG9zdG5hbWU7XG4gIHRoaXMucG9ydCA9IHBvcnQ7XG4gIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gIHRoaXMuaGFzaCA9IGhhc2g7XG59XG5nbG9iYWwuVVJMUG9seWZpbGwgPSBVUkxQb2x5ZmlsbDtcbn0pKHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCk7IWZ1bmN0aW9uKGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93LlByb21pc2U9ZSgpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsLlByb21pc2U9ZSgpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYoc2VsZi5Qcm9taXNlPWUoKSl9KGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbi8qKlxuICogRVM2IGdsb2JhbCBQcm9taXNlIHNoaW1cbiAqL1xudmFyIHVuaGFuZGxlZFJlamVjdGlvbnMgPSByZXF1aXJlKCcuLi9saWIvZGVjb3JhdG9ycy91bmhhbmRsZWRSZWplY3Rpb24nKTtcbnZhciBQcm9taXNlQ29uc3RydWN0b3IgPSB1bmhhbmRsZWRSZWplY3Rpb25zKHJlcXVpcmUoJy4uL2xpYi9Qcm9taXNlJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBnbG9iYWwgIT0gJ3VuZGVmaW5lZCcgPyAoZ2xvYmFsLlByb21pc2UgPSBQcm9taXNlQ29uc3RydWN0b3IpXG5cdCAgICAgICAgICAgOiB0eXBlb2Ygc2VsZiAgICE9ICd1bmRlZmluZWQnID8gKHNlbGYuUHJvbWlzZSAgID0gUHJvbWlzZUNvbnN0cnVjdG9yKVxuXHQgICAgICAgICAgIDogUHJvbWlzZUNvbnN0cnVjdG9yO1xuXG59LHtcIi4uL2xpYi9Qcm9taXNlXCI6MixcIi4uL2xpYi9kZWNvcmF0b3JzL3VuaGFuZGxlZFJlamVjdGlvblwiOjR9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbiAocmVxdWlyZSkge1xuXG5cdHZhciBtYWtlUHJvbWlzZSA9IHJlcXVpcmUoJy4vbWFrZVByb21pc2UnKTtcblx0dmFyIFNjaGVkdWxlciA9IHJlcXVpcmUoJy4vU2NoZWR1bGVyJyk7XG5cdHZhciBhc3luYyA9IHJlcXVpcmUoJy4vZW52JykuYXNhcDtcblxuXHRyZXR1cm4gbWFrZVByb21pc2Uoe1xuXHRcdHNjaGVkdWxlcjogbmV3IFNjaGVkdWxlcihhc3luYylcblx0fSk7XG5cbn0pO1xufSkodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24gKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KTtcblxufSx7XCIuL1NjaGVkdWxlclwiOjMsXCIuL2VudlwiOjUsXCIuL21ha2VQcm9taXNlXCI6N31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdC8vIENyZWRpdCB0byBUd2lzb2wgKGh0dHBzOi8vZ2l0aHViLmNvbS9Ud2lzb2wpIGZvciBzdWdnZXN0aW5nXG5cdC8vIHRoaXMgdHlwZSBvZiBleHRlbnNpYmxlIHF1ZXVlICsgdHJhbXBvbGluZSBhcHByb2FjaCBmb3IgbmV4dC10aWNrIGNvbmZsYXRpb24uXG5cblx0LyoqXG5cdCAqIEFzeW5jIHRhc2sgc2NoZWR1bGVyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGFzeW5jIGZ1bmN0aW9uIHRvIHNjaGVkdWxlIGEgc2luZ2xlIGFzeW5jIGZ1bmN0aW9uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0ZnVuY3Rpb24gU2NoZWR1bGVyKGFzeW5jKSB7XG5cdFx0dGhpcy5fYXN5bmMgPSBhc3luYztcblx0XHR0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR0aGlzLl9xdWV1ZSA9IHRoaXM7XG5cdFx0dGhpcy5fcXVldWVMZW4gPSAwO1xuXHRcdHRoaXMuX2FmdGVyUXVldWUgPSB7fTtcblx0XHR0aGlzLl9hZnRlclF1ZXVlTGVuID0gMDtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmRyYWluID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLl9kcmFpbigpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogRW5xdWV1ZSBhIHRhc2tcblx0ICogQHBhcmFtIHt7IHJ1bjpmdW5jdGlvbiB9fSB0YXNrXG5cdCAqL1xuXHRTY2hlZHVsZXIucHJvdG90eXBlLmVucXVldWUgPSBmdW5jdGlvbih0YXNrKSB7XG5cdFx0dGhpcy5fcXVldWVbdGhpcy5fcXVldWVMZW4rK10gPSB0YXNrO1xuXHRcdHRoaXMucnVuKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEVucXVldWUgYSB0YXNrIHRvIHJ1biBhZnRlciB0aGUgbWFpbiB0YXNrIHF1ZXVlXG5cdCAqIEBwYXJhbSB7eyBydW46ZnVuY3Rpb24gfX0gdGFza1xuXHQgKi9cblx0U2NoZWR1bGVyLnByb3RvdHlwZS5hZnRlclF1ZXVlID0gZnVuY3Rpb24odGFzaykge1xuXHRcdHRoaXMuX2FmdGVyUXVldWVbdGhpcy5fYWZ0ZXJRdWV1ZUxlbisrXSA9IHRhc2s7XG5cdFx0dGhpcy5ydW4oKTtcblx0fTtcblxuXHRTY2hlZHVsZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5fcnVubmluZykge1xuXHRcdFx0dGhpcy5fcnVubmluZyA9IHRydWU7XG5cdFx0XHR0aGlzLl9hc3luYyh0aGlzLmRyYWluKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERyYWluIHRoZSBoYW5kbGVyIHF1ZXVlIGVudGlyZWx5LCBhbmQgdGhlbiB0aGUgYWZ0ZXIgcXVldWVcblx0ICovXG5cdFNjaGVkdWxlci5wcm90b3R5cGUuX2RyYWluID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdGZvciAoOyBpIDwgdGhpcy5fcXVldWVMZW47ICsraSkge1xuXHRcdFx0dGhpcy5fcXVldWVbaV0ucnVuKCk7XG5cdFx0XHR0aGlzLl9xdWV1ZVtpXSA9IHZvaWQgMDtcblx0XHR9XG5cblx0XHR0aGlzLl9xdWV1ZUxlbiA9IDA7XG5cdFx0dGhpcy5fcnVubmluZyA9IGZhbHNlO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuX2FmdGVyUXVldWVMZW47ICsraSkge1xuXHRcdFx0dGhpcy5fYWZ0ZXJRdWV1ZVtpXS5ydW4oKTtcblx0XHRcdHRoaXMuX2FmdGVyUXVldWVbaV0gPSB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYWZ0ZXJRdWV1ZUxlbiA9IDA7XG5cdH07XG5cblx0cmV0dXJuIFNjaGVkdWxlcjtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkge1xuXG5cdHZhciBzZXRUaW1lciA9IHJlcXVpcmUoJy4uL2VudicpLnNldFRpbWVyO1xuXHR2YXIgZm9ybWF0ID0gcmVxdWlyZSgnLi4vZm9ybWF0Jyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVuaGFuZGxlZFJlamVjdGlvbihQcm9taXNlKSB7XG5cblx0XHR2YXIgbG9nRXJyb3IgPSBub29wO1xuXHRcdHZhciBsb2dJbmZvID0gbm9vcDtcblx0XHR2YXIgbG9jYWxDb25zb2xlO1xuXG5cdFx0aWYodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHQvLyBBbGlhcyBjb25zb2xlIHRvIHByZXZlbnQgdGhpbmdzIGxpa2UgdWdsaWZ5J3MgZHJvcF9jb25zb2xlIG9wdGlvbiBmcm9tXG5cdFx0XHQvLyByZW1vdmluZyBjb25zb2xlLmxvZy9lcnJvci4gVW5oYW5kbGVkIHJlamVjdGlvbnMgZmFsbCBpbnRvIHRoZSBzYW1lXG5cdFx0XHQvLyBjYXRlZ29yeSBhcyB1bmNhdWdodCBleGNlcHRpb25zLCBhbmQgYnVpbGQgdG9vbHMgc2hvdWxkbid0IHNpbGVuY2UgdGhlbS5cblx0XHRcdGxvY2FsQ29uc29sZSA9IGNvbnNvbGU7XG5cdFx0XHRsb2dFcnJvciA9IHR5cGVvZiBsb2NhbENvbnNvbGUuZXJyb3IgIT09ICd1bmRlZmluZWQnXG5cdFx0XHRcdD8gZnVuY3Rpb24gKGUpIHsgbG9jYWxDb25zb2xlLmVycm9yKGUpOyB9XG5cdFx0XHRcdDogZnVuY3Rpb24gKGUpIHsgbG9jYWxDb25zb2xlLmxvZyhlKTsgfTtcblxuXHRcdFx0bG9nSW5mbyA9IHR5cGVvZiBsb2NhbENvbnNvbGUuaW5mbyAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdFx0PyBmdW5jdGlvbiAoZSkgeyBsb2NhbENvbnNvbGUuaW5mbyhlKTsgfVxuXHRcdFx0XHQ6IGZ1bmN0aW9uIChlKSB7IGxvY2FsQ29uc29sZS5sb2coZSk7IH07XG5cdFx0fVxuXG5cdFx0UHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uID0gZnVuY3Rpb24ocmVqZWN0aW9uKSB7XG5cdFx0XHRlbnF1ZXVlKHJlcG9ydCwgcmVqZWN0aW9uKTtcblx0XHR9O1xuXG5cdFx0UHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9IGZ1bmN0aW9uKHJlamVjdGlvbikge1xuXHRcdFx0ZW5xdWV1ZSh1bnJlcG9ydCwgcmVqZWN0aW9uKTtcblx0XHR9O1xuXG5cdFx0UHJvbWlzZS5vbkZhdGFsUmVqZWN0aW9uID0gZnVuY3Rpb24ocmVqZWN0aW9uKSB7XG5cdFx0XHRlbnF1ZXVlKHRocm93aXQsIHJlamVjdGlvbi52YWx1ZSk7XG5cdFx0fTtcblxuXHRcdHZhciB0YXNrcyA9IFtdO1xuXHRcdHZhciByZXBvcnRlZCA9IFtdO1xuXHRcdHZhciBydW5uaW5nID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIHJlcG9ydChyKSB7XG5cdFx0XHRpZighci5oYW5kbGVkKSB7XG5cdFx0XHRcdHJlcG9ydGVkLnB1c2gocik7XG5cdFx0XHRcdGxvZ0Vycm9yKCdQb3RlbnRpYWxseSB1bmhhbmRsZWQgcmVqZWN0aW9uIFsnICsgci5pZCArICddICcgKyBmb3JtYXQuZm9ybWF0RXJyb3Ioci52YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHVucmVwb3J0KHIpIHtcblx0XHRcdHZhciBpID0gcmVwb3J0ZWQuaW5kZXhPZihyKTtcblx0XHRcdGlmKGkgPj0gMCkge1xuXHRcdFx0XHRyZXBvcnRlZC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGxvZ0luZm8oJ0hhbmRsZWQgcHJldmlvdXMgcmVqZWN0aW9uIFsnICsgci5pZCArICddICcgKyBmb3JtYXQuZm9ybWF0T2JqZWN0KHIudmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBlbnF1ZXVlKGYsIHgpIHtcblx0XHRcdHRhc2tzLnB1c2goZiwgeCk7XG5cdFx0XHRpZihydW5uaW5nID09PSBudWxsKSB7XG5cdFx0XHRcdHJ1bm5pbmcgPSBzZXRUaW1lcihmbHVzaCwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmx1c2goKSB7XG5cdFx0XHRydW5uaW5nID0gbnVsbDtcblx0XHRcdHdoaWxlKHRhc2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGFza3Muc2hpZnQoKSh0YXNrcy5zaGlmdCgpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblx0fTtcblxuXHRmdW5jdGlvbiB0aHJvd2l0KGUpIHtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKTsgfSkpO1xuXG59LHtcIi4uL2VudlwiOjUsXCIuLi9mb3JtYXRcIjo2fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuLypnbG9iYWwgcHJvY2Vzcyxkb2N1bWVudCxzZXRUaW1lb3V0LGNsZWFyVGltZW91dCxNdXRhdGlvbk9ic2VydmVyLFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIqL1xuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkge1xuXHQvKmpzaGludCBtYXhjb21wbGV4aXR5OjYqL1xuXG5cdC8vIFNuaWZmIFwiYmVzdFwiIGFzeW5jIHNjaGVkdWxpbmcgb3B0aW9uXG5cdC8vIFByZWZlciBwcm9jZXNzLm5leHRUaWNrIG9yIE11dGF0aW9uT2JzZXJ2ZXIsIHRoZW4gY2hlY2sgZm9yXG5cdC8vIHNldFRpbWVvdXQsIGFuZCBmaW5hbGx5IHZlcnR4LCBzaW5jZSBpdHMgdGhlIG9ubHkgZW52IHRoYXQgZG9lc24ndFxuXHQvLyBoYXZlIHNldFRpbWVvdXRcblxuXHR2YXIgTXV0YXRpb25PYnM7XG5cdHZhciBjYXB0dXJlZFNldFRpbWVvdXQgPSB0eXBlb2Ygc2V0VGltZW91dCAhPT0gJ3VuZGVmaW5lZCcgJiYgc2V0VGltZW91dDtcblxuXHQvLyBEZWZhdWx0IGVudlxuXHR2YXIgc2V0VGltZXIgPSBmdW5jdGlvbihmLCBtcykgeyByZXR1cm4gc2V0VGltZW91dChmLCBtcyk7IH07XG5cdHZhciBjbGVhclRpbWVyID0gZnVuY3Rpb24odCkgeyByZXR1cm4gY2xlYXJUaW1lb3V0KHQpOyB9O1xuXHR2YXIgYXNhcCA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBjYXB0dXJlZFNldFRpbWVvdXQoZiwgMCk7IH07XG5cblx0Ly8gRGV0ZWN0IHNwZWNpZmljIGVudlxuXHRpZiAoaXNOb2RlKCkpIHsgLy8gTm9kZVxuXHRcdGFzYXAgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmKTsgfTtcblxuXHR9IGVsc2UgaWYgKE11dGF0aW9uT2JzID0gaGFzTXV0YXRpb25PYnNlcnZlcigpKSB7IC8vIE1vZGVybiBicm93c2VyXG5cdFx0YXNhcCA9IGluaXRNdXRhdGlvbk9ic2VydmVyKE11dGF0aW9uT2JzKTtcblxuXHR9IGVsc2UgaWYgKCFjYXB0dXJlZFNldFRpbWVvdXQpIHsgLy8gdmVydC54XG5cdFx0dmFyIHZlcnR4UmVxdWlyZSA9IHJlcXVpcmU7XG5cdFx0dmFyIHZlcnR4ID0gdmVydHhSZXF1aXJlKCd2ZXJ0eCcpO1xuXHRcdHNldFRpbWVyID0gZnVuY3Rpb24gKGYsIG1zKSB7IHJldHVybiB2ZXJ0eC5zZXRUaW1lcihtcywgZik7IH07XG5cdFx0Y2xlYXJUaW1lciA9IHZlcnR4LmNhbmNlbFRpbWVyO1xuXHRcdGFzYXAgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzZXRUaW1lcjogc2V0VGltZXIsXG5cdFx0Y2xlYXJUaW1lcjogY2xlYXJUaW1lcixcblx0XHRhc2FwOiBhc2FwXG5cdH07XG5cblx0ZnVuY3Rpb24gaXNOb2RlICgpIHtcblx0XHRyZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0XHRPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblx0fVxuXG5cdGZ1bmN0aW9uIGhhc011dGF0aW9uT2JzZXJ2ZXIgKCkge1xuXHRcdHJldHVybiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicgJiYgTXV0YXRpb25PYnNlcnZlcikgfHxcblx0XHRcdCh0eXBlb2YgV2ViS2l0TXV0YXRpb25PYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBXZWJLaXRNdXRhdGlvbk9ic2VydmVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRNdXRhdGlvbk9ic2VydmVyKE11dGF0aW9uT2JzZXJ2ZXIpIHtcblx0XHR2YXIgc2NoZWR1bGVkO1xuXHRcdHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcdHZhciBvID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocnVuKTtcblx0XHRvLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG5cdFx0ZnVuY3Rpb24gcnVuKCkge1xuXHRcdFx0dmFyIGYgPSBzY2hlZHVsZWQ7XG5cdFx0XHRzY2hlZHVsZWQgPSB2b2lkIDA7XG5cdFx0XHRmKCk7XG5cdFx0fVxuXG5cdFx0dmFyIGkgPSAwO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoZikge1xuXHRcdFx0c2NoZWR1bGVkID0gZjtcblx0XHRcdG5vZGUuZGF0YSA9IChpIF49IDEpO1xuXHRcdH07XG5cdH1cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKTsgfSkpO1xuXG59LHt9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbigpIHtcblxuXHRyZXR1cm4ge1xuXHRcdGZvcm1hdEVycm9yOiBmb3JtYXRFcnJvcixcblx0XHRmb3JtYXRPYmplY3Q6IGZvcm1hdE9iamVjdCxcblx0XHR0cnlTdHJpbmdpZnk6IHRyeVN0cmluZ2lmeVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBGb3JtYXQgYW4gZXJyb3IgaW50byBhIHN0cmluZy4gIElmIGUgaXMgYW4gRXJyb3IgYW5kIGhhcyBhIHN0YWNrIHByb3BlcnR5LFxuXHQgKiBpdCdzIHJldHVybmVkLiAgT3RoZXJ3aXNlLCBlIGlzIGZvcm1hdHRlZCB1c2luZyBmb3JtYXRPYmplY3QsIHdpdGggYVxuXHQgKiB3YXJuaW5nIGFkZGVkIGFib3V0IGUgbm90IGJlaW5nIGEgcHJvcGVyIEVycm9yLlxuXHQgKiBAcGFyYW0geyp9IGVcblx0ICogQHJldHVybnMge1N0cmluZ30gZm9ybWF0dGVkIHN0cmluZywgc3VpdGFibGUgZm9yIG91dHB1dCB0byBkZXZlbG9wZXJzXG5cdCAqL1xuXHRmdW5jdGlvbiBmb3JtYXRFcnJvcihlKSB7XG5cdFx0dmFyIHMgPSB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgZSAhPT0gbnVsbCAmJiAoZS5zdGFjayB8fCBlLm1lc3NhZ2UpID8gZS5zdGFjayB8fCBlLm1lc3NhZ2UgOiBmb3JtYXRPYmplY3QoZSk7XG5cdFx0cmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IHMgOiBzICsgJyAoV0FSTklORzogbm9uLUVycm9yIHVzZWQpJztcblx0fVxuXG5cdC8qKlxuXHQgKiBGb3JtYXQgYW4gb2JqZWN0LCBkZXRlY3RpbmcgXCJwbGFpblwiIG9iamVjdHMgYW5kIHJ1bm5pbmcgdGhlbSB0aHJvdWdoXG5cdCAqIEpTT04uc3RyaW5naWZ5IGlmIHBvc3NpYmxlLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb1xuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gZm9ybWF0T2JqZWN0KG8pIHtcblx0XHR2YXIgcyA9IFN0cmluZyhvKTtcblx0XHRpZihzID09PSAnW29iamVjdCBPYmplY3RdJyAmJiB0eXBlb2YgSlNPTiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHMgPSB0cnlTdHJpbmdpZnkobywgcyk7XG5cdFx0fVxuXHRcdHJldHVybiBzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyeSB0byByZXR1cm4gdGhlIHJlc3VsdCBvZiBKU09OLnN0cmluZ2lmeSh4KS4gIElmIHRoYXQgZmFpbHMsIHJldHVyblxuXHQgKiBkZWZhdWx0VmFsdWVcblx0ICogQHBhcmFtIHsqfSB4XG5cdCAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd8Kn0gSlNPTi5zdHJpbmdpZnkoeCkgb3IgZGVmYXVsdFZhbHVlXG5cdCAqL1xuXHRmdW5jdGlvbiB0cnlTdHJpbmdpZnkoeCwgZGVmYXVsdFZhbHVlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh4KTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHR9XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9KSk7XG5cbn0se31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiBmdW5jdGlvbiBtYWtlUHJvbWlzZShlbnZpcm9ubWVudCkge1xuXG5cdFx0dmFyIHRhc2tzID0gZW52aXJvbm1lbnQuc2NoZWR1bGVyO1xuXHRcdHZhciBlbWl0UmVqZWN0aW9uID0gaW5pdEVtaXRSZWplY3Rpb24oKTtcblxuXHRcdHZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8XG5cdFx0XHRmdW5jdGlvbihwcm90bykge1xuXHRcdFx0XHRmdW5jdGlvbiBDaGlsZCgpIHt9XG5cdFx0XHRcdENoaWxkLnByb3RvdHlwZSA9IHByb3RvO1xuXHRcdFx0XHRyZXR1cm4gbmV3IENoaWxkKCk7XG5cdFx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlIGEgcHJvbWlzZSB3aG9zZSBmYXRlIGlzIGRldGVybWluZWQgYnkgcmVzb2x2ZXJcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZVxuXHRcdCAqIEBuYW1lIFByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyLCBoYW5kbGVyKSB7XG5cdFx0XHR0aGlzLl9oYW5kbGVyID0gcmVzb2x2ZXIgPT09IEhhbmRsZXIgPyBoYW5kbGVyIDogaW5pdChyZXNvbHZlcik7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUnVuIHRoZSBzdXBwbGllZCByZXNvbHZlclxuXHRcdCAqIEBwYXJhbSByZXNvbHZlclxuXHRcdCAqIEByZXR1cm5zIHtQZW5kaW5nfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGluaXQocmVzb2x2ZXIpIHtcblx0XHRcdHZhciBoYW5kbGVyID0gbmV3IFBlbmRpbmcoKTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzb2x2ZXIocHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3QsIHByb21pc2VOb3RpZnkpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRwcm9taXNlUmVqZWN0KGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaGFuZGxlcjtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBUcmFuc2l0aW9uIGZyb20gcHJlLXJlc29sdXRpb24gc3RhdGUgdG8gcG9zdC1yZXNvbHV0aW9uIHN0YXRlLCBub3RpZnlpbmdcblx0XHRcdCAqIGFsbCBsaXN0ZW5lcnMgb2YgdGhlIHVsdGltYXRlIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvblxuXHRcdFx0ICogQHBhcmFtIHsqfSB4IHJlc29sdXRpb24gdmFsdWVcblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gcHJvbWlzZVJlc29sdmUgKHgpIHtcblx0XHRcdFx0aGFuZGxlci5yZXNvbHZlKHgpO1xuXHRcdFx0fVxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZWplY3QgdGhpcyBwcm9taXNlIHdpdGggcmVhc29uLCB3aGljaCB3aWxsIGJlIHVzZWQgdmVyYmF0aW1cblx0XHRcdCAqIEBwYXJhbSB7RXJyb3J8Kn0gcmVhc29uIHJlamVjdGlvbiByZWFzb24sIHN0cm9uZ2x5IHN1Z2dlc3RlZFxuXHRcdFx0ICogICB0byBiZSBhbiBFcnJvciB0eXBlXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHByb21pc2VSZWplY3QgKHJlYXNvbikge1xuXHRcdFx0XHRoYW5kbGVyLnJlamVjdChyZWFzb24pO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEBkZXByZWNhdGVkXG5cdFx0XHQgKiBJc3N1ZSBhIHByb2dyZXNzIGV2ZW50LCBub3RpZnlpbmcgYWxsIHByb2dyZXNzIGxpc3RlbmVyc1xuXHRcdFx0ICogQHBhcmFtIHsqfSB4IHByb2dyZXNzIGV2ZW50IHBheWxvYWQgdG8gcGFzcyB0byBhbGwgbGlzdGVuZXJzXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHByb21pc2VOb3RpZnkgKHgpIHtcblx0XHRcdFx0aGFuZGxlci5ub3RpZnkoeCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRpb25cblxuXHRcdFByb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0UHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG5cdFx0UHJvbWlzZS5uZXZlciA9IG5ldmVyO1xuXG5cdFx0UHJvbWlzZS5fZGVmZXIgPSBkZWZlcjtcblx0XHRQcm9taXNlLl9oYW5kbGVyID0gZ2V0SGFuZGxlcjtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgYSB0cnVzdGVkIHByb21pc2UuIElmIHggaXMgYWxyZWFkeSBhIHRydXN0ZWQgcHJvbWlzZSwgaXQgaXNcblx0XHQgKiByZXR1cm5lZCwgb3RoZXJ3aXNlIHJldHVybnMgYSBuZXcgdHJ1c3RlZCBQcm9taXNlIHdoaWNoIGZvbGxvd3MgeC5cblx0XHQgKiBAcGFyYW0gIHsqfSB4XG5cdFx0ICogQHJldHVybiB7UHJvbWlzZX0gcHJvbWlzZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuXHRcdFx0cmV0dXJuIGlzUHJvbWlzZSh4KSA/IHhcblx0XHRcdFx0OiBuZXcgUHJvbWlzZShIYW5kbGVyLCBuZXcgQXN5bmMoZ2V0SGFuZGxlcih4KSkpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBhIHJlamVjdCBwcm9taXNlIHdpdGggeCBhcyBpdHMgcmVhc29uICh4IGlzIHVzZWQgdmVyYmF0aW0pXG5cdFx0ICogQHBhcmFtIHsqfSB4XG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHJlamVjdGVkIHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiByZWplY3QoeCkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKEhhbmRsZXIsIG5ldyBBc3luYyhuZXcgUmVqZWN0ZWQoeCkpKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVtYWlucyBwZW5kaW5nIGZvcmV2ZXJcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gZm9yZXZlci1wZW5kaW5nIHByb21pc2UuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gbmV2ZXIoKSB7XG5cdFx0XHRyZXR1cm4gZm9yZXZlclBlbmRpbmdQcm9taXNlOyAvLyBTaG91bGQgYmUgZnJvemVuXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhbiBpbnRlcm5hbCB7cHJvbWlzZSwgcmVzb2x2ZXJ9IHBhaXJcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGRlZmVyKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKEhhbmRsZXIsIG5ldyBQZW5kaW5nKCkpO1xuXHRcdH1cblxuXHRcdC8vIFRyYW5zZm9ybWF0aW9uIGFuZCBmbG93IGNvbnRyb2xcblxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zZm9ybSB0aGlzIHByb21pc2UncyBmdWxmaWxsbWVudCB2YWx1ZSwgcmV0dXJuaW5nIGEgbmV3IFByb21pc2Vcblx0XHQgKiBmb3IgdGhlIHRyYW5zZm9ybWVkIHJlc3VsdC4gIElmIHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQsIG9uUmVqZWN0ZWRcblx0XHQgKiBpcyBjYWxsZWQgd2l0aCB0aGUgcmVhc29uLiAgb25Qcm9ncmVzcyAqbWF5KiBiZSBjYWxsZWQgd2l0aCB1cGRhdGVzIHRvd2FyZFxuXHRcdCAqIHRoaXMgcHJvbWlzZSdzIGZ1bGZpbGxtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb249fSBvbkZ1bGZpbGxlZCBmdWxmaWxsbWVudCBoYW5kbGVyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbj19IG9uUmVqZWN0ZWQgcmVqZWN0aW9uIGhhbmRsZXJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9uPX0gb25Qcm9ncmVzcyBAZGVwcmVjYXRlZCBwcm9ncmVzcyBoYW5kbGVyXG5cdFx0ICogQHJldHVybiB7UHJvbWlzZX0gbmV3IHByb21pc2Vcblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MpIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLl9oYW5kbGVyO1xuXHRcdFx0dmFyIHN0YXRlID0gcGFyZW50LmpvaW4oKS5zdGF0ZSgpO1xuXG5cdFx0XHRpZiAoKHR5cGVvZiBvbkZ1bGZpbGxlZCAhPT0gJ2Z1bmN0aW9uJyAmJiBzdGF0ZSA+IDApIHx8XG5cdFx0XHRcdCh0eXBlb2Ygb25SZWplY3RlZCAhPT0gJ2Z1bmN0aW9uJyAmJiBzdGF0ZSA8IDApKSB7XG5cdFx0XHRcdC8vIFNob3J0IGNpcmN1aXQ6IHZhbHVlIHdpbGwgbm90IGNoYW5nZSwgc2ltcGx5IHNoYXJlIGhhbmRsZXJcblx0XHRcdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKEhhbmRsZXIsIHBhcmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwID0gdGhpcy5fYmVnZXQoKTtcblx0XHRcdHZhciBjaGlsZCA9IHAuX2hhbmRsZXI7XG5cblx0XHRcdHBhcmVudC5jaGFpbihjaGlsZCwgcGFyZW50LnJlY2VpdmVyLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgb25Qcm9ncmVzcyk7XG5cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBJZiB0aGlzIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZCBkdWUgdG8gYW4gZXJyb3IsIGNhbGwgb25SZWplY3RlZCB0b1xuXHRcdCAqIGhhbmRsZSB0aGUgZXJyb3IuIFNob3J0Y3V0IGZvciAudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbj99IG9uUmVqZWN0ZWRcblx0XHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsIG9uUmVqZWN0ZWQpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgbmV3LCBwZW5kaW5nIHByb21pc2Ugb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIHByb21pc2Vcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlLl9iZWdldCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGJlZ2V0RnJvbSh0aGlzLl9oYW5kbGVyLCB0aGlzLmNvbnN0cnVjdG9yKTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gYmVnZXRGcm9tKHBhcmVudCwgUHJvbWlzZSkge1xuXHRcdFx0dmFyIGNoaWxkID0gbmV3IFBlbmRpbmcocGFyZW50LnJlY2VpdmVyLCBwYXJlbnQuam9pbigpLmNvbnRleHQpO1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKEhhbmRsZXIsIGNoaWxkKTtcblx0XHR9XG5cblx0XHQvLyBBcnJheSBjb21iaW5hdG9yc1xuXG5cdFx0UHJvbWlzZS5hbGwgPSBhbGw7XG5cdFx0UHJvbWlzZS5yYWNlID0gcmFjZTtcblx0XHRQcm9taXNlLl90cmF2ZXJzZSA9IHRyYXZlcnNlO1xuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgZnVsZmlsbCB3aGVuIGFsbCBwcm9taXNlcyBpbiB0aGVcblx0XHQgKiBpbnB1dCBhcnJheSBoYXZlIGZ1bGZpbGxlZCwgb3Igd2lsbCByZWplY3Qgd2hlbiBvbmUgb2YgdGhlXG5cdFx0ICogcHJvbWlzZXMgcmVqZWN0cy5cblx0XHQgKiBAcGFyYW0ge2FycmF5fSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlc1xuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIGZvciBhcnJheSBvZiBmdWxmaWxsbWVudCB2YWx1ZXNcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcblx0XHRcdHJldHVybiB0cmF2ZXJzZVdpdGgoc25kLCBudWxsLCBwcm9taXNlcyk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQXJyYXk8UHJvbWlzZTxYPj4gLT4gUHJvbWlzZTxBcnJheTxmKFgpPj5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGYgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBwcm9taXNlJ3MgdmFsdWVcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlc1xuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIGZvciB0cmFuc2Zvcm1lZCB2YWx1ZXNcblx0XHQgKi9cblx0XHRmdW5jdGlvbiB0cmF2ZXJzZShmLCBwcm9taXNlcykge1xuXHRcdFx0cmV0dXJuIHRyYXZlcnNlV2l0aCh0cnlDYXRjaDIsIGYsIHByb21pc2VzKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmF2ZXJzZVdpdGgodHJ5TWFwLCBmLCBwcm9taXNlcykge1xuXHRcdFx0dmFyIGhhbmRsZXIgPSB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyA/IG1hcEF0IDogc2V0dGxlQXQ7XG5cblx0XHRcdHZhciByZXNvbHZlciA9IG5ldyBQZW5kaW5nKCk7XG5cdFx0XHR2YXIgcGVuZGluZyA9IHByb21pc2VzLmxlbmd0aCA+Pj4gMDtcblx0XHRcdHZhciByZXN1bHRzID0gbmV3IEFycmF5KHBlbmRpbmcpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgeDsgaSA8IHByb21pc2VzLmxlbmd0aCAmJiAhcmVzb2x2ZXIucmVzb2x2ZWQ7ICsraSkge1xuXHRcdFx0XHR4ID0gcHJvbWlzZXNbaV07XG5cblx0XHRcdFx0aWYgKHggPT09IHZvaWQgMCAmJiAhKGkgaW4gcHJvbWlzZXMpKSB7XG5cdFx0XHRcdFx0LS1wZW5kaW5nO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJhdmVyc2VBdChwcm9taXNlcywgaGFuZGxlciwgaSwgeCwgcmVzb2x2ZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihwZW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdHJlc29sdmVyLmJlY29tZShuZXcgRnVsZmlsbGVkKHJlc3VsdHMpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKEhhbmRsZXIsIHJlc29sdmVyKTtcblxuXHRcdFx0ZnVuY3Rpb24gbWFwQXQoaSwgeCwgcmVzb2x2ZXIpIHtcblx0XHRcdFx0aWYoIXJlc29sdmVyLnJlc29sdmVkKSB7XG5cdFx0XHRcdFx0dHJhdmVyc2VBdChwcm9taXNlcywgc2V0dGxlQXQsIGksIHRyeU1hcChmLCB4LCBpKSwgcmVzb2x2ZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHNldHRsZUF0KGksIHgsIHJlc29sdmVyKSB7XG5cdFx0XHRcdHJlc3VsdHNbaV0gPSB4O1xuXHRcdFx0XHRpZigtLXBlbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRyZXNvbHZlci5iZWNvbWUobmV3IEZ1bGZpbGxlZChyZXN1bHRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmF2ZXJzZUF0KHByb21pc2VzLCBoYW5kbGVyLCBpLCB4LCByZXNvbHZlcikge1xuXHRcdFx0aWYgKG1heWJlVGhlbmFibGUoeCkpIHtcblx0XHRcdFx0dmFyIGggPSBnZXRIYW5kbGVyTWF5YmVUaGVuYWJsZSh4KTtcblx0XHRcdFx0dmFyIHMgPSBoLnN0YXRlKCk7XG5cblx0XHRcdFx0aWYgKHMgPT09IDApIHtcblx0XHRcdFx0XHRoLmZvbGQoaGFuZGxlciwgaSwgdm9pZCAwLCByZXNvbHZlcik7XG5cdFx0XHRcdH0gZWxzZSBpZiAocyA+IDApIHtcblx0XHRcdFx0XHRoYW5kbGVyKGksIGgudmFsdWUsIHJlc29sdmVyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlci5iZWNvbWUoaCk7XG5cdFx0XHRcdFx0dmlzaXRSZW1haW5pbmcocHJvbWlzZXMsIGkrMSwgaCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhbmRsZXIoaSwgeCwgcmVzb2x2ZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFByb21pc2UuX3Zpc2l0UmVtYWluaW5nID0gdmlzaXRSZW1haW5pbmc7XG5cdFx0ZnVuY3Rpb24gdmlzaXRSZW1haW5pbmcocHJvbWlzZXMsIHN0YXJ0LCBoYW5kbGVyKSB7XG5cdFx0XHRmb3IodmFyIGk9c3RhcnQ7IGk8cHJvbWlzZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0bWFya0FzSGFuZGxlZChnZXRIYW5kbGVyKHByb21pc2VzW2ldKSwgaGFuZGxlcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbWFya0FzSGFuZGxlZChoLCBoYW5kbGVyKSB7XG5cdFx0XHRpZihoID09PSBoYW5kbGVyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHMgPSBoLnN0YXRlKCk7XG5cdFx0XHRpZihzID09PSAwKSB7XG5cdFx0XHRcdGgudmlzaXQoaCwgdm9pZCAwLCBoLl91bnJlcG9ydCk7XG5cdFx0XHR9IGVsc2UgaWYocyA8IDApIHtcblx0XHRcdFx0aC5fdW5yZXBvcnQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBGdWxmaWxsLXJlamVjdCBjb21wZXRpdGl2ZSByYWNlLiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBzZXR0bGVcblx0XHQgKiB0byB0aGUgc2FtZSBzdGF0ZSBhcyB0aGUgZWFybGllc3QgaW5wdXQgcHJvbWlzZSB0byBzZXR0bGUuXG5cdFx0ICpcblx0XHQgKiBXQVJOSU5HOiBUaGUgRVM2IFByb21pc2Ugc3BlYyByZXF1aXJlcyB0aGF0IHJhY2UoKWluZyBhbiBlbXB0eSBhcnJheVxuXHRcdCAqIG11c3QgcmV0dXJuIGEgcHJvbWlzZSB0aGF0IGlzIHBlbmRpbmcgZm9yZXZlci4gIFRoaXMgaW1wbGVtZW50YXRpb25cblx0XHQgKiByZXR1cm5zIGEgc2luZ2xldG9uIGZvcmV2ZXItcGVuZGluZyBwcm9taXNlLCB0aGUgc2FtZSBzaW5nbGV0b24gdGhhdCBpc1xuXHRcdCAqIHJldHVybmVkIGJ5IFByb21pc2UubmV2ZXIoKSwgdGh1cyBjYW4gYmUgY2hlY2tlZCB3aXRoID09PVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHthcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXMgdG8gcmFjZVxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBpZiBpbnB1dCBpcyBub24tZW1wdHksIGEgcHJvbWlzZSB0aGF0IHdpbGwgc2V0dGxlXG5cdFx0ICogdG8gdGhlIHNhbWUgb3V0Y29tZSBhcyB0aGUgZWFybGllc3QgaW5wdXQgcHJvbWlzZSB0byBzZXR0bGUuIGlmIGVtcHR5XG5cdFx0ICogaXMgZW1wdHksIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBuZXZlciBzZXR0bGUuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gcmFjZShwcm9taXNlcykge1xuXHRcdFx0aWYodHlwZW9mIHByb21pc2VzICE9PSAnb2JqZWN0JyB8fCBwcm9taXNlcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ25vbi1pdGVyYWJsZSBwYXNzZWQgdG8gcmFjZSgpJykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTaWdoLCByYWNlKFtdKSBpcyB1bnRlc3RhYmxlIHVubGVzcyB3ZSByZXR1cm4gKnNvbWV0aGluZypcblx0XHRcdC8vIHRoYXQgaXMgcmVjb2duaXphYmxlIHdpdGhvdXQgY2FsbGluZyAudGhlbigpIG9uIGl0LlxuXHRcdFx0cmV0dXJuIHByb21pc2VzLmxlbmd0aCA9PT0gMCA/IG5ldmVyKClcblx0XHRcdFx0IDogcHJvbWlzZXMubGVuZ3RoID09PSAxID8gcmVzb2x2ZShwcm9taXNlc1swXSlcblx0XHRcdFx0IDogcnVuUmFjZShwcm9taXNlcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcnVuUmFjZShwcm9taXNlcykge1xuXHRcdFx0dmFyIHJlc29sdmVyID0gbmV3IFBlbmRpbmcoKTtcblx0XHRcdHZhciBpLCB4LCBoO1xuXHRcdFx0Zm9yKGk9MDsgaTxwcm9taXNlcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR4ID0gcHJvbWlzZXNbaV07XG5cdFx0XHRcdGlmICh4ID09PSB2b2lkIDAgJiYgIShpIGluIHByb21pc2VzKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aCA9IGdldEhhbmRsZXIoeCk7XG5cdFx0XHRcdGlmKGguc3RhdGUoKSAhPT0gMCkge1xuXHRcdFx0XHRcdHJlc29sdmVyLmJlY29tZShoKTtcblx0XHRcdFx0XHR2aXNpdFJlbWFpbmluZyhwcm9taXNlcywgaSsxLCBoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoLnZpc2l0KHJlc29sdmVyLCByZXNvbHZlci5yZXNvbHZlLCByZXNvbHZlci5yZWplY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoSGFuZGxlciwgcmVzb2x2ZXIpO1xuXHRcdH1cblxuXHRcdC8vIFByb21pc2UgaW50ZXJuYWxzXG5cdFx0Ly8gQmVsb3cgdGhpcywgZXZlcnl0aGluZyBpcyBAcHJpdmF0ZVxuXG5cdFx0LyoqXG5cdFx0ICogR2V0IGFuIGFwcHJvcHJpYXRlIGhhbmRsZXIgZm9yIHgsIHdpdGhvdXQgY2hlY2tpbmcgZm9yIGN5Y2xlc1xuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9IGhhbmRsZXJcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRIYW5kbGVyKHgpIHtcblx0XHRcdGlmKGlzUHJvbWlzZSh4KSkge1xuXHRcdFx0XHRyZXR1cm4geC5faGFuZGxlci5qb2luKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF5YmVUaGVuYWJsZSh4KSA/IGdldEhhbmRsZXJVbnRydXN0ZWQoeCkgOiBuZXcgRnVsZmlsbGVkKHgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEdldCBhIGhhbmRsZXIgZm9yIHRoZW5hYmxlIHguXG5cdFx0ICogTk9URTogWW91IG11c3Qgb25seSBjYWxsIHRoaXMgaWYgbWF5YmVUaGVuYWJsZSh4KSA9PSB0cnVlXG5cdFx0ICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb258UHJvbWlzZX0geFxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9IGhhbmRsZXJcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRIYW5kbGVyTWF5YmVUaGVuYWJsZSh4KSB7XG5cdFx0XHRyZXR1cm4gaXNQcm9taXNlKHgpID8geC5faGFuZGxlci5qb2luKCkgOiBnZXRIYW5kbGVyVW50cnVzdGVkKHgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEdldCBhIGhhbmRsZXIgZm9yIHBvdGVudGlhbGx5IHVudHJ1c3RlZCB0aGVuYWJsZSB4XG5cdFx0ICogQHBhcmFtIHsqfSB4XG5cdFx0ICogQHJldHVybnMge29iamVjdH0gaGFuZGxlclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGdldEhhbmRsZXJVbnRydXN0ZWQoeCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHVudHJ1c3RlZFRoZW4gPSB4LnRoZW47XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgdW50cnVzdGVkVGhlbiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdD8gbmV3IFRoZW5hYmxlKHVudHJ1c3RlZFRoZW4sIHgpXG5cdFx0XHRcdFx0OiBuZXcgRnVsZmlsbGVkKHgpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVqZWN0ZWQoZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlciBmb3IgYSBwcm9taXNlIHRoYXQgaXMgcGVuZGluZyBmb3JldmVyXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gSGFuZGxlcigpIHt9XG5cblx0XHRIYW5kbGVyLnByb3RvdHlwZS53aGVuXG5cdFx0XHQ9IEhhbmRsZXIucHJvdG90eXBlLmJlY29tZVxuXHRcdFx0PSBIYW5kbGVyLnByb3RvdHlwZS5ub3RpZnkgLy8gZGVwcmVjYXRlZFxuXHRcdFx0PSBIYW5kbGVyLnByb3RvdHlwZS5mYWlsXG5cdFx0XHQ9IEhhbmRsZXIucHJvdG90eXBlLl91bnJlcG9ydFxuXHRcdFx0PSBIYW5kbGVyLnByb3RvdHlwZS5fcmVwb3J0XG5cdFx0XHQ9IG5vb3A7XG5cblx0XHRIYW5kbGVyLnByb3RvdHlwZS5fc3RhdGUgPSAwO1xuXG5cdFx0SGFuZGxlci5wcm90b3R5cGUuc3RhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9zdGF0ZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVjdXJzaXZlbHkgY29sbGFwc2UgaGFuZGxlciBjaGFpbiB0byBmaW5kIHRoZSBoYW5kbGVyXG5cdFx0ICogbmVhcmVzdCB0byB0aGUgZnVsbHkgcmVzb2x2ZWQgdmFsdWUuXG5cdFx0ICogQHJldHVybnMge29iamVjdH0gaGFuZGxlciBuZWFyZXN0IHRoZSBmdWxseSByZXNvbHZlZCB2YWx1ZVxuXHRcdCAqL1xuXHRcdEhhbmRsZXIucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoID0gdGhpcztcblx0XHRcdHdoaWxlKGguaGFuZGxlciAhPT0gdm9pZCAwKSB7XG5cdFx0XHRcdGggPSBoLmhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaDtcblx0XHR9O1xuXG5cdFx0SGFuZGxlci5wcm90b3R5cGUuY2hhaW4gPSBmdW5jdGlvbih0bywgcmVjZWl2ZXIsIGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSB7XG5cdFx0XHR0aGlzLndoZW4oe1xuXHRcdFx0XHRyZXNvbHZlcjogdG8sXG5cdFx0XHRcdHJlY2VpdmVyOiByZWNlaXZlcixcblx0XHRcdFx0ZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG5cdFx0XHRcdHJlamVjdGVkOiByZWplY3RlZCxcblx0XHRcdFx0cHJvZ3Jlc3M6IHByb2dyZXNzXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0SGFuZGxlci5wcm90b3R5cGUudmlzaXQgPSBmdW5jdGlvbihyZWNlaXZlciwgZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3MpIHtcblx0XHRcdHRoaXMuY2hhaW4oZmFpbElmUmVqZWN0ZWQsIHJlY2VpdmVyLCBmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzcyk7XG5cdFx0fTtcblxuXHRcdEhhbmRsZXIucHJvdG90eXBlLmZvbGQgPSBmdW5jdGlvbihmLCB6LCBjLCB0bykge1xuXHRcdFx0dGhpcy53aGVuKG5ldyBGb2xkKGYsIHosIGMsIHRvKSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgdGhhdCBpbnZva2VzIGZhaWwoKSBvbiBhbnkgaGFuZGxlciBpdCBiZWNvbWVzXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gRmFpbElmUmVqZWN0ZWQoKSB7fVxuXG5cdFx0aW5oZXJpdChIYW5kbGVyLCBGYWlsSWZSZWplY3RlZCk7XG5cblx0XHRGYWlsSWZSZWplY3RlZC5wcm90b3R5cGUuYmVjb21lID0gZnVuY3Rpb24oaCkge1xuXHRcdFx0aC5mYWlsKCk7XG5cdFx0fTtcblxuXHRcdHZhciBmYWlsSWZSZWplY3RlZCA9IG5ldyBGYWlsSWZSZWplY3RlZCgpO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlciB0aGF0IG1hbmFnZXMgYSBxdWV1ZSBvZiBjb25zdW1lcnMgd2FpdGluZyBvbiBhIHBlbmRpbmcgcHJvbWlzZVxuXHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIFBlbmRpbmcocmVjZWl2ZXIsIGluaGVyaXRlZENvbnRleHQpIHtcblx0XHRcdFByb21pc2UuY3JlYXRlQ29udGV4dCh0aGlzLCBpbmhlcml0ZWRDb250ZXh0KTtcblxuXHRcdFx0dGhpcy5jb25zdW1lcnMgPSB2b2lkIDA7XG5cdFx0XHR0aGlzLnJlY2VpdmVyID0gcmVjZWl2ZXI7XG5cdFx0XHR0aGlzLmhhbmRsZXIgPSB2b2lkIDA7XG5cdFx0XHR0aGlzLnJlc29sdmVkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aW5oZXJpdChIYW5kbGVyLCBQZW5kaW5nKTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLl9zdGF0ZSA9IDA7XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24oeCkge1xuXHRcdFx0dGhpcy5iZWNvbWUoZ2V0SGFuZGxlcih4KSk7XG5cdFx0fTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uKHgpIHtcblx0XHRcdGlmKHRoaXMucmVzb2x2ZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmJlY29tZShuZXcgUmVqZWN0ZWQoeCkpO1xuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMucmVzb2x2ZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBoID0gdGhpcztcblxuXHRcdFx0d2hpbGUgKGguaGFuZGxlciAhPT0gdm9pZCAwKSB7XG5cdFx0XHRcdGggPSBoLmhhbmRsZXI7XG5cdFx0XHRcdGlmIChoID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlciA9IGN5Y2xlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGg7XG5cdFx0fTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHEgPSB0aGlzLmNvbnN1bWVycztcblx0XHRcdHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gdGhpcy5oYW5kbGVyLmpvaW4oKTtcblx0XHRcdHRoaXMuY29uc3VtZXJzID0gdm9pZCAwO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHEubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aGFuZGxlci53aGVuKHFbaV0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5iZWNvbWUgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG5cdFx0XHRpZih0aGlzLnJlc29sdmVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXHRcdFx0aWYodGhpcy5jb25zdW1lcnMgIT09IHZvaWQgMCkge1xuXHRcdFx0XHR0YXNrcy5lbnF1ZXVlKHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLmNvbnRleHQgIT09IHZvaWQgMCkge1xuXHRcdFx0XHRoYW5kbGVyLl9yZXBvcnQodGhpcy5jb250ZXh0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUud2hlbiA9IGZ1bmN0aW9uKGNvbnRpbnVhdGlvbikge1xuXHRcdFx0aWYodGhpcy5yZXNvbHZlZCkge1xuXHRcdFx0XHR0YXNrcy5lbnF1ZXVlKG5ldyBDb250aW51YXRpb25UYXNrKGNvbnRpbnVhdGlvbiwgdGhpcy5oYW5kbGVyKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0aGlzLmNvbnN1bWVycyA9PT0gdm9pZCAwKSB7XG5cdFx0XHRcdFx0dGhpcy5jb25zdW1lcnMgPSBbY29udGludWF0aW9uXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNvbnN1bWVycy5wdXNoKGNvbnRpbnVhdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQGRlcHJlY2F0ZWRcblx0XHQgKi9cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbih4KSB7XG5cdFx0XHRpZighdGhpcy5yZXNvbHZlZCkge1xuXHRcdFx0XHR0YXNrcy5lbnF1ZXVlKG5ldyBQcm9ncmVzc1Rhc2soeCwgdGhpcykpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdFx0dmFyIGMgPSB0eXBlb2YgY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmNvbnRleHQgOiBjb250ZXh0O1xuXHRcdFx0dGhpcy5yZXNvbHZlZCAmJiB0aGlzLmhhbmRsZXIuam9pbigpLmZhaWwoYyk7XG5cdFx0fTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLl9yZXBvcnQgPSBmdW5jdGlvbihjb250ZXh0KSB7XG5cdFx0XHR0aGlzLnJlc29sdmVkICYmIHRoaXMuaGFuZGxlci5qb2luKCkuX3JlcG9ydChjb250ZXh0KTtcblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUuX3VucmVwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnJlc29sdmVkICYmIHRoaXMuaGFuZGxlci5qb2luKCkuX3VucmVwb3J0KCk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFdyYXAgYW5vdGhlciBoYW5kbGVyIGFuZCBmb3JjZSBpdCBpbnRvIGEgZnV0dXJlIHN0YWNrXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IGhhbmRsZXJcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBBc3luYyhoYW5kbGVyKSB7XG5cdFx0XHR0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXHRcdH1cblxuXHRcdGluaGVyaXQoSGFuZGxlciwgQXN5bmMpO1xuXG5cdFx0QXN5bmMucHJvdG90eXBlLndoZW4gPSBmdW5jdGlvbihjb250aW51YXRpb24pIHtcblx0XHRcdHRhc2tzLmVucXVldWUobmV3IENvbnRpbnVhdGlvblRhc2soY29udGludWF0aW9uLCB0aGlzKSk7XG5cdFx0fTtcblxuXHRcdEFzeW5jLnByb3RvdHlwZS5fcmVwb3J0ID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdFx0dGhpcy5qb2luKCkuX3JlcG9ydChjb250ZXh0KTtcblx0XHR9O1xuXG5cdFx0QXN5bmMucHJvdG90eXBlLl91bnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5qb2luKCkuX3VucmVwb3J0KCk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgdGhhdCB3cmFwcyBhbiB1bnRydXN0ZWQgdGhlbmFibGUgYW5kIGFzc2ltaWxhdGVzIGl0IGluIGEgZnV0dXJlIHN0YWNrXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlblxuXHRcdCAqIEBwYXJhbSB7e3RoZW46IGZ1bmN0aW9ufX0gdGhlbmFibGVcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBUaGVuYWJsZSh0aGVuLCB0aGVuYWJsZSkge1xuXHRcdFx0UGVuZGluZy5jYWxsKHRoaXMpO1xuXHRcdFx0dGFza3MuZW5xdWV1ZShuZXcgQXNzaW1pbGF0ZVRhc2sodGhlbiwgdGhlbmFibGUsIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpbmhlcml0KFBlbmRpbmcsIFRoZW5hYmxlKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgZm9yIGEgZnVsZmlsbGVkIHByb21pc2Vcblx0XHQgKiBAcGFyYW0geyp9IHggZnVsZmlsbG1lbnQgdmFsdWVcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBGdWxmaWxsZWQoeCkge1xuXHRcdFx0UHJvbWlzZS5jcmVhdGVDb250ZXh0KHRoaXMpO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHg7XG5cdFx0fVxuXG5cdFx0aW5oZXJpdChIYW5kbGVyLCBGdWxmaWxsZWQpO1xuXG5cdFx0RnVsZmlsbGVkLnByb3RvdHlwZS5fc3RhdGUgPSAxO1xuXG5cdFx0RnVsZmlsbGVkLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24oZiwgeiwgYywgdG8pIHtcblx0XHRcdHJ1bkNvbnRpbnVhdGlvbjMoZiwgeiwgdGhpcywgYywgdG8pO1xuXHRcdH07XG5cblx0XHRGdWxmaWxsZWQucHJvdG90eXBlLndoZW4gPSBmdW5jdGlvbihjb250KSB7XG5cdFx0XHRydW5Db250aW51YXRpb24xKGNvbnQuZnVsZmlsbGVkLCB0aGlzLCBjb250LnJlY2VpdmVyLCBjb250LnJlc29sdmVyKTtcblx0XHR9O1xuXG5cdFx0dmFyIGVycm9ySWQgPSAwO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlciBmb3IgYSByZWplY3RlZCBwcm9taXNlXG5cdFx0ICogQHBhcmFtIHsqfSB4IHJlamVjdGlvbiByZWFzb25cblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBSZWplY3RlZCh4KSB7XG5cdFx0XHRQcm9taXNlLmNyZWF0ZUNvbnRleHQodGhpcyk7XG5cblx0XHRcdHRoaXMuaWQgPSArK2Vycm9ySWQ7XG5cdFx0XHR0aGlzLnZhbHVlID0geDtcblx0XHRcdHRoaXMuaGFuZGxlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuXG5cdFx0XHR0aGlzLl9yZXBvcnQoKTtcblx0XHR9XG5cblx0XHRpbmhlcml0KEhhbmRsZXIsIFJlamVjdGVkKTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS5fc3RhdGUgPSAtMTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24oZiwgeiwgYywgdG8pIHtcblx0XHRcdHRvLmJlY29tZSh0aGlzKTtcblx0XHR9O1xuXG5cdFx0UmVqZWN0ZWQucHJvdG90eXBlLndoZW4gPSBmdW5jdGlvbihjb250KSB7XG5cdFx0XHRpZih0eXBlb2YgY29udC5yZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLl91bnJlcG9ydCgpO1xuXHRcdFx0fVxuXHRcdFx0cnVuQ29udGludWF0aW9uMShjb250LnJlamVjdGVkLCB0aGlzLCBjb250LnJlY2VpdmVyLCBjb250LnJlc29sdmVyKTtcblx0XHR9O1xuXG5cdFx0UmVqZWN0ZWQucHJvdG90eXBlLl9yZXBvcnQgPSBmdW5jdGlvbihjb250ZXh0KSB7XG5cdFx0XHR0YXNrcy5hZnRlclF1ZXVlKG5ldyBSZXBvcnRUYXNrKHRoaXMsIGNvbnRleHQpKTtcblx0XHR9O1xuXG5cdFx0UmVqZWN0ZWQucHJvdG90eXBlLl91bnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5oYW5kbGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFuZGxlZCA9IHRydWU7XG5cdFx0XHR0YXNrcy5hZnRlclF1ZXVlKG5ldyBVbnJlcG9ydFRhc2sodGhpcykpO1xuXHRcdH07XG5cblx0XHRSZWplY3RlZC5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0XHRcdHRoaXMucmVwb3J0ZWQgPSB0cnVlO1xuXHRcdFx0ZW1pdFJlamVjdGlvbigndW5oYW5kbGVkUmVqZWN0aW9uJywgdGhpcyk7XG5cdFx0XHRQcm9taXNlLm9uRmF0YWxSZWplY3Rpb24odGhpcywgY29udGV4dCA9PT0gdm9pZCAwID8gdGhpcy5jb250ZXh0IDogY29udGV4dCk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIFJlcG9ydFRhc2socmVqZWN0aW9uLCBjb250ZXh0KSB7XG5cdFx0XHR0aGlzLnJlamVjdGlvbiA9IHJlamVjdGlvbjtcblx0XHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0fVxuXG5cdFx0UmVwb3J0VGFzay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZighdGhpcy5yZWplY3Rpb24uaGFuZGxlZCAmJiAhdGhpcy5yZWplY3Rpb24ucmVwb3J0ZWQpIHtcblx0XHRcdFx0dGhpcy5yZWplY3Rpb24ucmVwb3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRlbWl0UmVqZWN0aW9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCB0aGlzLnJlamVjdGlvbikgfHxcblx0XHRcdFx0XHRQcm9taXNlLm9uUG90ZW50aWFsbHlVbmhhbmRsZWRSZWplY3Rpb24odGhpcy5yZWplY3Rpb24sIHRoaXMuY29udGV4dCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIFVucmVwb3J0VGFzayhyZWplY3Rpb24pIHtcblx0XHRcdHRoaXMucmVqZWN0aW9uID0gcmVqZWN0aW9uO1xuXHRcdH1cblxuXHRcdFVucmVwb3J0VGFzay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLnJlamVjdGlvbi5yZXBvcnRlZCkge1xuXHRcdFx0XHRlbWl0UmVqZWN0aW9uKCdyZWplY3Rpb25IYW5kbGVkJywgdGhpcy5yZWplY3Rpb24pIHx8XG5cdFx0XHRcdFx0UHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCh0aGlzLnJlamVjdGlvbik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIFVuaGFuZGxlZCByZWplY3Rpb24gaG9va3Ncblx0XHQvLyBCeSBkZWZhdWx0LCBldmVyeXRoaW5nIGlzIGEgbm9vcFxuXG5cdFx0UHJvbWlzZS5jcmVhdGVDb250ZXh0XG5cdFx0XHQ9IFByb21pc2UuZW50ZXJDb250ZXh0XG5cdFx0XHQ9IFByb21pc2UuZXhpdENvbnRleHRcblx0XHRcdD0gUHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uXG5cdFx0XHQ9IFByb21pc2Uub25Qb3RlbnRpYWxseVVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWRcblx0XHRcdD0gUHJvbWlzZS5vbkZhdGFsUmVqZWN0aW9uXG5cdFx0XHQ9IG5vb3A7XG5cblx0XHQvLyBFcnJvcnMgYW5kIHNpbmdsZXRvbnNcblxuXHRcdHZhciBmb3JldmVyUGVuZGluZ0hhbmRsZXIgPSBuZXcgSGFuZGxlcigpO1xuXHRcdHZhciBmb3JldmVyUGVuZGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZShIYW5kbGVyLCBmb3JldmVyUGVuZGluZ0hhbmRsZXIpO1xuXG5cdFx0ZnVuY3Rpb24gY3ljbGUoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlamVjdGVkKG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgY3ljbGUnKSk7XG5cdFx0fVxuXG5cdFx0Ly8gVGFzayBydW5uZXJzXG5cblx0XHQvKipcblx0XHQgKiBSdW4gYSBzaW5nbGUgY29uc3VtZXJcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBDb250aW51YXRpb25UYXNrKGNvbnRpbnVhdGlvbiwgaGFuZGxlcikge1xuXHRcdFx0dGhpcy5jb250aW51YXRpb24gPSBjb250aW51YXRpb247XG5cdFx0XHR0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXHRcdH1cblxuXHRcdENvbnRpbnVhdGlvblRhc2sucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5oYW5kbGVyLmpvaW4oKS53aGVuKHRoaXMuY29udGludWF0aW9uKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUnVuIGEgcXVldWUgb2YgcHJvZ3Jlc3MgaGFuZGxlcnNcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBQcm9ncmVzc1Rhc2sodmFsdWUsIGhhbmRsZXIpIHtcblx0XHRcdHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0UHJvZ3Jlc3NUYXNrLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBxID0gdGhpcy5oYW5kbGVyLmNvbnN1bWVycztcblx0XHRcdGlmKHEgPT09IHZvaWQgMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGMsIGkgPSAwOyBpIDwgcS5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRjID0gcVtpXTtcblx0XHRcdFx0cnVuTm90aWZ5KGMucHJvZ3Jlc3MsIHRoaXMudmFsdWUsIHRoaXMuaGFuZGxlciwgYy5yZWNlaXZlciwgYy5yZXNvbHZlcik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFzc2ltaWxhdGUgYSB0aGVuYWJsZSwgc2VuZGluZyBpdCdzIHZhbHVlIHRvIHJlc29sdmVyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlblxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSB0aGVuYWJsZVxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSByZXNvbHZlclxuXHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIEFzc2ltaWxhdGVUYXNrKHRoZW4sIHRoZW5hYmxlLCByZXNvbHZlcikge1xuXHRcdFx0dGhpcy5fdGhlbiA9IHRoZW47XG5cdFx0XHR0aGlzLnRoZW5hYmxlID0gdGhlbmFibGU7XG5cdFx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cdFx0fVxuXG5cdFx0QXNzaW1pbGF0ZVRhc2sucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGggPSB0aGlzLnJlc29sdmVyO1xuXHRcdFx0dHJ5QXNzaW1pbGF0ZSh0aGlzLl90aGVuLCB0aGlzLnRoZW5hYmxlLCBfcmVzb2x2ZSwgX3JlamVjdCwgX25vdGlmeSk7XG5cblx0XHRcdGZ1bmN0aW9uIF9yZXNvbHZlKHgpIHsgaC5yZXNvbHZlKHgpOyB9XG5cdFx0XHRmdW5jdGlvbiBfcmVqZWN0KHgpICB7IGgucmVqZWN0KHgpOyB9XG5cdFx0XHRmdW5jdGlvbiBfbm90aWZ5KHgpICB7IGgubm90aWZ5KHgpOyB9XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHRyeUFzc2ltaWxhdGUodGhlbiwgdGhlbmFibGUsIHJlc29sdmUsIHJlamVjdCwgbm90aWZ5KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGVuLmNhbGwodGhlbmFibGUsIHJlc29sdmUsIHJlamVjdCwgbm90aWZ5KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEZvbGQgYSBoYW5kbGVyIHZhbHVlIHdpdGggelxuXHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIEZvbGQoZiwgeiwgYywgdG8pIHtcblx0XHRcdHRoaXMuZiA9IGY7IHRoaXMueiA9IHo7IHRoaXMuYyA9IGM7IHRoaXMudG8gPSB0bztcblx0XHRcdHRoaXMucmVzb2x2ZXIgPSBmYWlsSWZSZWplY3RlZDtcblx0XHRcdHRoaXMucmVjZWl2ZXIgPSB0aGlzO1xuXHRcdH1cblxuXHRcdEZvbGQucHJvdG90eXBlLmZ1bGZpbGxlZCA9IGZ1bmN0aW9uKHgpIHtcblx0XHRcdHRoaXMuZi5jYWxsKHRoaXMuYywgdGhpcy56LCB4LCB0aGlzLnRvKTtcblx0XHR9O1xuXG5cdFx0Rm9sZC5wcm90b3R5cGUucmVqZWN0ZWQgPSBmdW5jdGlvbih4KSB7XG5cdFx0XHR0aGlzLnRvLnJlamVjdCh4KTtcblx0XHR9O1xuXG5cdFx0Rm9sZC5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbih4KSB7XG5cdFx0XHR0aGlzLnRvLm5vdGlmeSh4KTtcblx0XHR9O1xuXG5cdFx0Ly8gT3RoZXIgaGVscGVyc1xuXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsqfSB4XG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWZmIHggaXMgYSB0cnVzdGVkIFByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBpc1Byb21pc2UoeCkge1xuXHRcdFx0cmV0dXJuIHggaW5zdGFuY2VvZiBQcm9taXNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFRlc3QganVzdCBlbm91Z2ggdG8gcnVsZSBvdXQgcHJpbWl0aXZlcywgaW4gb3JkZXIgdG8gdGFrZSBmYXN0ZXJcblx0XHQgKiBwYXRocyBpbiBzb21lIGNvZGVcblx0XHQgKiBAcGFyYW0geyp9IHhcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gZmFsc2UgaWZmIHggaXMgZ3VhcmFudGVlZCAqbm90KiB0byBiZSBhIHRoZW5hYmxlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gbWF5YmVUaGVuYWJsZSh4KSB7XG5cdFx0XHRyZXR1cm4gKHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJykgJiYgeCAhPT0gbnVsbDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBydW5Db250aW51YXRpb24xKGYsIGgsIHJlY2VpdmVyLCBuZXh0KSB7XG5cdFx0XHRpZih0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZXR1cm4gbmV4dC5iZWNvbWUoaCk7XG5cdFx0XHR9XG5cblx0XHRcdFByb21pc2UuZW50ZXJDb250ZXh0KGgpO1xuXHRcdFx0dHJ5Q2F0Y2hSZWplY3QoZiwgaC52YWx1ZSwgcmVjZWl2ZXIsIG5leHQpO1xuXHRcdFx0UHJvbWlzZS5leGl0Q29udGV4dCgpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1bkNvbnRpbnVhdGlvbjMoZiwgeCwgaCwgcmVjZWl2ZXIsIG5leHQpIHtcblx0XHRcdGlmKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJldHVybiBuZXh0LmJlY29tZShoKTtcblx0XHRcdH1cblxuXHRcdFx0UHJvbWlzZS5lbnRlckNvbnRleHQoaCk7XG5cdFx0XHR0cnlDYXRjaFJlamVjdDMoZiwgeCwgaC52YWx1ZSwgcmVjZWl2ZXIsIG5leHQpO1xuXHRcdFx0UHJvbWlzZS5leGl0Q29udGV4dCgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gcnVuTm90aWZ5KGYsIHgsIGgsIHJlY2VpdmVyLCBuZXh0KSB7XG5cdFx0XHRpZih0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZXR1cm4gbmV4dC5ub3RpZnkoeCk7XG5cdFx0XHR9XG5cblx0XHRcdFByb21pc2UuZW50ZXJDb250ZXh0KGgpO1xuXHRcdFx0dHJ5Q2F0Y2hSZXR1cm4oZiwgeCwgcmVjZWl2ZXIsIG5leHQpO1xuXHRcdFx0UHJvbWlzZS5leGl0Q29udGV4dCgpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyeUNhdGNoMihmLCBhLCBiKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gZihhLCBiKTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBmLmNhbGwodGhpc0FyZywgeCksIG9yIGlmIGl0IHRocm93cyByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlIGZvclxuXHRcdCAqIHRoZSB0aHJvd24gZXhjZXB0aW9uXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gdHJ5Q2F0Y2hSZWplY3QoZiwgeCwgdGhpc0FyZywgbmV4dCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bmV4dC5iZWNvbWUoZ2V0SGFuZGxlcihmLmNhbGwodGhpc0FyZywgeCkpKTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRuZXh0LmJlY29tZShuZXcgUmVqZWN0ZWQoZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNhbWUgYXMgYWJvdmUsIGJ1dCBpbmNsdWRlcyB0aGUgZXh0cmEgYXJndW1lbnQgcGFyYW1ldGVyLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHRyeUNhdGNoUmVqZWN0MyhmLCB4LCB5LCB0aGlzQXJnLCBuZXh0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRmLmNhbGwodGhpc0FyZywgeCwgeSwgbmV4dCk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0bmV4dC5iZWNvbWUobmV3IFJlamVjdGVkKGUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZFxuXHRcdCAqIFJldHVybiBmLmNhbGwodGhpc0FyZywgeCksIG9yIGlmIGl0IHRocm93cywgKnJldHVybiogdGhlIGV4Y2VwdGlvblxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHRyeUNhdGNoUmV0dXJuKGYsIHgsIHRoaXNBcmcsIG5leHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG5leHQubm90aWZ5KGYuY2FsbCh0aGlzQXJnLCB4KSk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0bmV4dC5ub3RpZnkoZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaW5oZXJpdChQYXJlbnQsIENoaWxkKSB7XG5cdFx0XHRDaGlsZC5wcm90b3R5cGUgPSBvYmplY3RDcmVhdGUoUGFyZW50LnByb3RvdHlwZSk7XG5cdFx0XHRDaGlsZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaGlsZDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzbmQoeCwgeSkge1xuXHRcdFx0cmV0dXJuIHk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cblx0XHRmdW5jdGlvbiBpbml0RW1pdFJlamVjdGlvbigpIHtcblx0XHRcdC8qZ2xvYmFsIHByb2Nlc3MsIHNlbGYsIEN1c3RvbUV2ZW50Ki9cblx0XHRcdGlmKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzICE9PSBudWxsXG5cdFx0XHRcdCYmIHR5cGVvZiBwcm9jZXNzLmVtaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gUmV0dXJuaW5nIGZhbHN5IGhlcmUgbWVhbnMgdG8gY2FsbCB0aGUgZGVmYXVsdFxuXHRcdFx0XHQvLyBvblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uIEFQSS4gIFRoaXMgaXMgc2FmZSBldmVuIGluXG5cdFx0XHRcdC8vIGJyb3dzZXJpZnkgc2luY2UgcHJvY2Vzcy5lbWl0IGFsd2F5cyByZXR1cm5zIGZhbHN5IGluIGJyb3dzZXJpZnk6XG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1bmN0em9tYmllL25vZGUtcHJvY2Vzcy9ibG9iL21hc3Rlci9icm93c2VyLmpzI0w0MC1MNDZcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHR5cGUsIHJlamVjdGlvbikge1xuXHRcdFx0XHRcdHJldHVybiB0eXBlID09PSAndW5oYW5kbGVkUmVqZWN0aW9uJ1xuXHRcdFx0XHRcdFx0PyBwcm9jZXNzLmVtaXQodHlwZSwgcmVqZWN0aW9uLnZhbHVlLCByZWplY3Rpb24pXG5cdFx0XHRcdFx0XHQ6IHByb2Nlc3MuZW1pdCh0eXBlLCByZWplY3Rpb24pO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuIChmdW5jdGlvbihub29wLCBzZWxmLCBDdXN0b21FdmVudCkge1xuXHRcdFx0XHRcdHZhciBoYXNDdXN0b21FdmVudCA9IGZhbHNlO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VuaGFuZGxlZFJlamVjdGlvbicpO1xuXHRcdFx0XHRcdFx0aGFzQ3VzdG9tRXZlbnQgPSBldiBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50O1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0XHRyZXR1cm4gIWhhc0N1c3RvbUV2ZW50ID8gbm9vcCA6IGZ1bmN0aW9uKHR5cGUsIHJlamVjdGlvbikge1xuXHRcdFx0XHRcdFx0dmFyIGV2ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVhc29uOiByZWplY3Rpb24udmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0a2V5OiByZWplY3Rpb25cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0YnViYmxlczogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gIXNlbGYuZGlzcGF0Y2hFdmVudChldik7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fShub29wLCBzZWxmLCBDdXN0b21FdmVudCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbm9vcDtcblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblx0fTtcbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9KSk7XG5cbn0se31dfSx7fSxbMV0pXG4oMSlcbn0pO1xuO2lmICh0eXBlb2Ygc3lzdGVtSlNCb290c3RyYXAgIT09ICd1bmRlZmluZWQnKVxuICBzeXN0ZW1KU0Jvb3RzdHJhcCgpO30pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
