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
      /* */
      (function (process) {
        var formatRegExp = /%[sdj%]/g;
        exports.format = function (f) {
          if (!isString(f)) {
            var objects = [];
            for (var i = 0; i < arguments.length; i++) {
              objects.push(inspect(arguments[i]));
            }
            return objects.join(' ');
          }
          var i = 1;
          var args = arguments;
          var len = args.length;
          var str = String(f).replace(formatRegExp, function (x) {
            if (x === '%%') return '%';
            if (i >= len) return x;
            switch (x) {
              case '%s':
                return String(args[i++]);
              case '%d':
                return Number(args[i++]);
              case '%j':
                try {
                  return JSON.stringify(args[i++]);
                } catch (_) {
                  return '[Circular]';
                }
              default:
                return x;
            }
          });
          for (var x = args[i]; i < len; x = args[++i]) {
            if (isNull(x) || !isObject(x)) {
              str += ' ' + x;
            } else {
              str += ' ' + inspect(x);
            }
          }
          return str;
        };
        exports.deprecate = function (fn, msg) {
          if (isUndefined(global.process)) {
            return function () {
              return exports.deprecate(fn, msg).apply(this, arguments);
            };
          }
          if (process.noDeprecation === true) {
            return fn;
          }
          var warned = false;
          function deprecated() {
            if (!warned) {
              if (process.throwDeprecation) {
                throw new Error(msg);
              } else if (process.traceDeprecation) {
                console.trace(msg);
              } else {
                console.error(msg);
              }
              warned = true;
            }
            return fn.apply(this, arguments);
          }
          return deprecated;
        };
        var debugs = {};
        var debugEnviron;
        exports.debuglog = function (set) {
          if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
          set = set.toUpperCase();
          if (!debugs[set]) {
            if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
              var pid = process.pid;
              debugs[set] = function () {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
              };
            } else {
              debugs[set] = function () {};
            }
          }
          return debugs[set];
        };
        function inspect(obj, opts) {
          var ctx = {
            seen: [],
            stylize: stylizeNoColor
          };
          if (arguments.length >= 3) ctx.depth = arguments[2];
          if (arguments.length >= 4) ctx.colors = arguments[3];
          if (isBoolean(opts)) {
            ctx.showHidden = opts;
          } else if (opts) {
            exports._extend(ctx, opts);
          }
          if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
          if (isUndefined(ctx.depth)) ctx.depth = 2;
          if (isUndefined(ctx.colors)) ctx.colors = false;
          if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
          if (ctx.colors) ctx.stylize = stylizeWithColor;
          return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;
        inspect.colors = {
          'bold': [1, 22],
          'italic': [3, 23],
          'underline': [4, 24],
          'inverse': [7, 27],
          'white': [37, 39],
          'grey': [90, 39],
          'black': [30, 39],
          'blue': [34, 39],
          'cyan': [36, 39],
          'green': [32, 39],
          'magenta': [35, 39],
          'red': [31, 39],
          'yellow': [33, 39]
        };
        inspect.styles = {
          'special': 'cyan',
          'number': 'yellow',
          'boolean': 'yellow',
          'undefined': 'grey',
          'null': 'bold',
          'string': 'green',
          'date': 'magenta',
          'regexp': 'red'
        };
        function stylizeWithColor(str, styleType) {
          var style = inspect.styles[styleType];
          if (style) {
            return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
          } else {
            return str;
          }
        }
        function stylizeNoColor(str, styleType) {
          return str;
        }
        function arrayToHash(array) {
          var hash = {};
          array.forEach(function (val, idx) {
            hash[val] = true;
          });
          return hash;
        }
        function formatValue(ctx, value, recurseTimes) {
          if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
            var ret = value.inspect(recurseTimes, ctx);
            if (!isString(ret)) {
              ret = formatValue(ctx, ret, recurseTimes);
            }
            return ret;
          }
          var primitive = formatPrimitive(ctx, value);
          if (primitive) {
            return primitive;
          }
          var keys = Object.keys(value);
          var visibleKeys = arrayToHash(keys);
          if (ctx.showHidden) {
            keys = Object.getOwnPropertyNames(value);
          }
          if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
            return formatError(value);
          }
          if (keys.length === 0) {
            if (isFunction(value)) {
              var name = value.name ? ': ' + value.name : '';
              return ctx.stylize('[Function' + name + ']', 'special');
            }
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            }
            if (isDate(value)) {
              return ctx.stylize(Date.prototype.toString.call(value), 'date');
            }
            if (isError(value)) {
              return formatError(value);
            }
          }
          var base = '',
              array = false,
              braces = ['{', '}'];
          if (isArray(value)) {
            array = true;
            braces = ['[', ']'];
          }
          if (isFunction(value)) {
            var n = value.name ? ': ' + value.name : '';
            base = ' [Function' + n + ']';
          }
          if (isRegExp(value)) {
            base = ' ' + RegExp.prototype.toString.call(value);
          }
          if (isDate(value)) {
            base = ' ' + Date.prototype.toUTCString.call(value);
          }
          if (isError(value)) {
            base = ' ' + formatError(value);
          }
          if (keys.length === 0 && (!array || value.length == 0)) {
            return braces[0] + base + braces[1];
          }
          if (recurseTimes < 0) {
            if (isRegExp(value)) {
              return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
            } else {
              return ctx.stylize('[Object]', 'special');
            }
          }
          ctx.seen.push(value);
          var output;
          if (array) {
            output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
          } else {
            output = keys.map(function (key) {
              return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
            });
          }
          ctx.seen.pop();
          return reduceToSingleString(output, base, braces);
        }
        function formatPrimitive(ctx, value) {
          if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
          if (isString(value)) {
            var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
            return ctx.stylize(simple, 'string');
          }
          if (isNumber(value)) return ctx.stylize('' + value, 'number');
          if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
          if (isNull(value)) return ctx.stylize('null', 'null');
        }
        function formatError(value) {
          return '[' + Error.prototype.toString.call(value) + ']';
        }
        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
          var output = [];
          for (var i = 0, l = value.length; i < l; ++i) {
            if (hasOwnProperty(value, String(i))) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
            } else {
              output.push('');
            }
          }
          keys.forEach(function (key) {
            if (!key.match(/^\d+$/)) {
              output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
            }
          });
          return output;
        }
        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
          var name, str, desc;
          desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
          if (desc.get) {
            if (desc.set) {
              str = ctx.stylize('[Getter/Setter]', 'special');
            } else {
              str = ctx.stylize('[Getter]', 'special');
            }
          } else {
            if (desc.set) {
              str = ctx.stylize('[Setter]', 'special');
            }
          }
          if (!hasOwnProperty(visibleKeys, key)) {
            name = '[' + key + ']';
          }
          if (!str) {
            if (ctx.seen.indexOf(desc.value) < 0) {
              if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
              } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
              }
              if (str.indexOf('\n') > -1) {
                if (array) {
                  str = str.split('\n').map(function (line) {
                    return '  ' + line;
                  }).join('\n').substr(2);
                } else {
                  str = '\n' + str.split('\n').map(function (line) {
                    return '   ' + line;
                  }).join('\n');
                }
              }
            } else {
              str = ctx.stylize('[Circular]', 'special');
            }
          }
          if (isUndefined(name)) {
            if (array && key.match(/^\d+$/)) {
              return str;
            }
            name = JSON.stringify('' + key);
            if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
              name = name.substr(1, name.length - 2);
              name = ctx.stylize(name, 'name');
            } else {
              name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
              name = ctx.stylize(name, 'string');
            }
          }
          return name + ': ' + str;
        }
        function reduceToSingleString(output, base, braces) {
          var numLinesEst = 0;
          var length = output.reduce(function (prev, cur) {
            numLinesEst++;
            if (cur.indexOf('\n') >= 0) numLinesEst++;
            return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
          }, 0);
          if (length > 60) {
            return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
          }
          return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }
        function isArray(ar) {
          return Array.isArray(ar);
        }
        exports.isArray = isArray;
        function isBoolean(arg) {
          return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;
        function isNull(arg) {
          return arg === null;
        }
        exports.isNull = isNull;
        function isNullOrUndefined(arg) {
          return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;
        function isNumber(arg) {
          return typeof arg === 'number';
        }
        exports.isNumber = isNumber;
        function isString(arg) {
          return typeof arg === 'string';
        }
        exports.isString = isString;
        function isSymbol(arg) {
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
        }
        exports.isSymbol = isSymbol;
        function isUndefined(arg) {
          return arg === void 0;
        }
        exports.isUndefined = isUndefined;
        function isRegExp(re) {
          return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;
        function isObject(arg) {
          return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
        }
        exports.isObject = isObject;
        function isDate(d) {
          return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;
        function isError(e) {
          return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;
        function isFunction(arg) {
          return typeof arg === 'function';
        }
        exports.isFunction = isFunction;
        function isPrimitive(arg) {
          return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;
        exports.isBuffer = require('./support/isBufferBrowser');
        function objectToString(o) {
          return Object.prototype.toString.call(o);
        }
        function pad(n) {
          return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        function timestamp() {
          var d = new Date();
          var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
          return [d.getDate(), months[d.getMonth()], time].join(' ');
        }
        exports.log = function () {
          console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };
        exports.inherits = require('inherits');
        exports._extend = function (origin, add) {
          if (!add || !isObject(add)) return origin;
          var keys = Object.keys(add);
          var i = keys.length;
          while (i--) {
            origin[keys[i]] = add[keys[i]];
          }
          return origin;
        };
        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QTZCLElBQTdCLEVBQW1DO0FBQ2pDLGlCQUFPLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxFQUEwQyxJQUExQyxDQUFQLENBRGlDO1NBQW5DO09BbmFELENBQUQsQ0FzYUcsUUFBUSxTQUFSLENBdGFIIiwiZmlsZSI6Im5wbS91dGlsQDAuMTAuMy91dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG4oZnVuY3Rpb24ocHJvY2Vzcykge1xuICB2YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbiAgZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gICAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICAgIH1cbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICAgIGlmICh4ID09PSAnJSUnKVxuICAgICAgICByZXR1cm4gJyUnO1xuICAgICAgaWYgKGkgPj0gbGVuKVxuICAgICAgICByZXR1cm4geDtcbiAgICAgIHN3aXRjaCAoeCkge1xuICAgICAgICBjYXNlICclcyc6XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgICBjYXNlICclZCc6XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgICBjYXNlICclaic6XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuICBleHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZuO1xuICAgIH1cbiAgICB2YXIgd2FybmVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICAgIGlmICghd2FybmVkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgICB9XG4gICAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG4gIH07XG4gIHZhciBkZWJ1Z3MgPSB7fTtcbiAgdmFyIGRlYnVnRW52aXJvbjtcbiAgZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICAgIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVidWdzW3NldF07XG4gIH07XG4gIGZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gICAgdmFyIGN0eCA9IHtcbiAgICAgIHNlZW46IFtdLFxuICAgICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgICB9O1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpXG4gICAgICBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNClcbiAgICAgIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gICAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICAgIH0gZWxzZSBpZiAob3B0cykge1xuICAgICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gICAgfVxuICAgIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpXG4gICAgICBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICAgIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKVxuICAgICAgY3R4LmRlcHRoID0gMjtcbiAgICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpXG4gICAgICBjdHguY29sb3JzID0gZmFsc2U7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSlcbiAgICAgIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgICBpZiAoY3R4LmNvbG9ycylcbiAgICAgIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG4gIH1cbiAgZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcbiAgaW5zcGVjdC5jb2xvcnMgPSB7XG4gICAgJ2JvbGQnOiBbMSwgMjJdLFxuICAgICdpdGFsaWMnOiBbMywgMjNdLFxuICAgICd1bmRlcmxpbmUnOiBbNCwgMjRdLFxuICAgICdpbnZlcnNlJzogWzcsIDI3XSxcbiAgICAnd2hpdGUnOiBbMzcsIDM5XSxcbiAgICAnZ3JleSc6IFs5MCwgMzldLFxuICAgICdibGFjayc6IFszMCwgMzldLFxuICAgICdibHVlJzogWzM0LCAzOV0sXG4gICAgJ2N5YW4nOiBbMzYsIDM5XSxcbiAgICAnZ3JlZW4nOiBbMzIsIDM5XSxcbiAgICAnbWFnZW50YSc6IFszNSwgMzldLFxuICAgICdyZWQnOiBbMzEsIDM5XSxcbiAgICAneWVsbG93JzogWzMzLCAzOV1cbiAgfTtcbiAgaW5zcGVjdC5zdHlsZXMgPSB7XG4gICAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAgICdib29sZWFuJzogJ3llbGxvdycsXG4gICAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgICAnbnVsbCc6ICdib2xkJyxcbiAgICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgICAncmVnZXhwJzogJ3JlZCdcbiAgfTtcbiAgZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICAgIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBmdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICAgIHZhciBoYXNoID0ge307XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuICBmdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiYgdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJiB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiYgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgICBpZiAocHJpbWl0aXZlKSB7XG4gICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgIH1cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcbiAgICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgICB9XG4gICAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgICB9XG4gICAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgICB9XG4gICAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGJhc2UgPSAnJyxcbiAgICAgICAgYXJyYXkgPSBmYWxzZSxcbiAgICAgICAgYnJhY2VzID0gWyd7JywgJ30nXTtcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGFycmF5ID0gdHJ1ZTtcbiAgICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICAgIH1cbiAgICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuICAgIHZhciBvdXRwdXQ7XG4gICAgaWYgKGFycmF5KSB7XG4gICAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjdHguc2Vlbi5wb3AoKTtcbiAgICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xuICB9XG4gIGZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIikucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gICAgfVxuICAgIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICAgIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gICAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xuICB9XG4gIGZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gICAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbiAgfVxuICBmdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLFxuICAgICAgICBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIHRydWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG4gIGZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgICB2YXIgbmFtZSxcbiAgICAgICAgc3RyLFxuICAgICAgICBkZXNjO1xuICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHt2YWx1ZTogdmFsdWVba2V5XX07XG4gICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgICB9XG4gICAgaWYgKCFzdHIpIHtcbiAgICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfVxuICAgICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIikucmVwbGFjZSgvXFxcXFwiL2csICdcIicpLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbiAgfVxuICBmdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICAgIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgICBudW1MaW5lc0VzdCsrO1xuICAgICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKVxuICAgICAgICBudW1MaW5lc0VzdCsrO1xuICAgICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICAgIH0sIDApO1xuICAgIGlmIChsZW5ndGggPiA2MCkge1xuICAgICAgcmV0dXJuIGJyYWNlc1swXSArIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgKyAnICcgKyBvdXRwdXQuam9pbignLFxcbiAgJykgKyAnICcgKyBicmFjZXNbMV07XG4gICAgfVxuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG4gIH1cbiAgZnVuY3Rpb24gaXNBcnJheShhcikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbiAgfVxuICBleHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuICBmdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbiAgfVxuICBleHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcbiAgZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICAgIHJldHVybiBhcmcgPT09IG51bGw7XG4gIH1cbiAgZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG4gIGZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICAgIHJldHVybiBhcmcgPT0gbnVsbDtcbiAgfVxuICBleHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG4gIGZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbiAgfVxuICBleHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG4gIGZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbiAgfVxuICBleHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG4gIGZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbiAgfVxuICBleHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG4gIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICAgIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbiAgfVxuICBleHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG4gIGZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xuICB9XG4gIGV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcbiAgZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbiAgfVxuICBleHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG4gIGZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG4gIH1cbiAgZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG4gIGZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICAgIHJldHVybiBpc09iamVjdChlKSAmJiAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbiAgfVxuICBleHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xuICB9XG4gIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4gIGZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICAgIHJldHVybiBhcmcgPT09IG51bGwgfHwgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8IHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8IHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xuICB9XG4gIGV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcbiAgZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXInKTtcbiAgZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG4gIH1cbiAgZnVuY3Rpb24gcGFkKG4pIHtcbiAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbiAgfVxuICB2YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICBmdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLCBwYWQoZC5nZXRNaW51dGVzKCkpLCBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gICAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbiAgfVxuICBleHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xuICB9O1xuICBleHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbiAgZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSlcbiAgICAgIHJldHVybiBvcmlnaW47XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICAgIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZ2luO1xuICB9O1xuICBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG4gIH1cbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
