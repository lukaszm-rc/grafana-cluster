!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var $ = $__require('2');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("4", ["3"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = {
    "default": $__require('3'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("5", ["4"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var _Object$defineProperty = $__require('4')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("7", ["8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var utls = $__require('8');
  var __handlers = {};
  class JSONLess {
    static parse(text, reviver) {
      var value = JSON.parse(text, reviver);
      if (['Array', 'Object'].indexOf(utls.getType(value)) !== -1) {
        value = utls.traverse(value, (v) => ['Array', 'Object'].indexOf(utls.getType(v)) !== -1, _revive);
      }
      return value;
    }
    static stringify(value, replacer, space) {
      if (utls.isCircular(value)) {
        throw new TypeError('Converting circular structure to JSONLess');
      }
      if (utls.getType(value) === 'Array' || (typeof value === 'object' && value !== null)) {
        value = utls.map(value, _replace);
      }
      return JSON.stringify(value, replacer, space);
    }
    static addHandler(cls, replacer, reviver) {
      __handlers[utls.getType(cls)] = {
        cls: cls,
        replacer: replacer,
        reviver: reviver
      };
    }
  }
  function _replace(value, key, origin) {
    var type = utls.getType(value);
    if (typeof __handlers[type] === 'object') {
      value = {
        $type: type,
        $value: __handlers[type].replacer(__handlers[type].cls, value)
      };
    }
    return value;
  }
  function _revive(value, key, origin) {
    if (utls.getType(value) === 'Array') {
      value.forEach((item, key) => {
        if (['Array', 'Object'].indexOf(utls.getType(item)) !== -1) {
          value[key] = utls.traverse(item, (v) => ['Array', 'Object'].indexOf(utls.getType(v)) !== -1, _revive);
        } else {
          value[key] = item;
        }
      });
    } else {
      if (value && value['$type'] !== undefined && value['$value'] !== undefined) {
        if (typeof __handlers[value['$type']] === 'object') {
          value = __handlers[value['$type']].reviver(__handlers[value['$type']].cls, value['$value']);
        }
      } else {
        Object.getOwnPropertyNames(value).forEach((key) => {
          if (['Array', 'Object'].indexOf(utls.getType(value[key])) !== -1) {
            value[key] = utls.traverse(value[key], (v) => ['Array', 'Object'].indexOf(utls.getType(v)) !== -1, _revive);
          }
        });
      }
    }
    return value;
  }
  JSONLess.addHandler(Date, (cls, value) => {
    return value.toJSON();
  }, (cls, value) => {
    return new cls(value);
  });
  module.exports = JSONLess;
  return module.exports;
});

$__System.registerDynamic("9", ["7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('7');
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('9');
  return module.exports;
});

$__System.registerDynamic("b", ["8", "c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var utls = $__require('8');
  var JsonRpc = $__require('c');
  class JsonRpcRequest extends JsonRpc {
    constructor(message) {
      if (message !== undefined) {
        if (utls.getType(message) !== 'Object') {
          throw new Error('Message must be object type');
        }
        message.version = message.version || JsonRpc.version;
        message.id = message.id || JsonRpc.getNextId();
        message.resource = message.resource || '__global__';
        message.params = message.params || {};
        if (!JsonRpc.isValidRequest(message)) {
          throw new Error('Message is not valid json rpc request');
        }
      } else {
        message = {};
        message.version = JsonRpc.version;
        message.id = JsonRpc.getNextId();
        message.resource = '__global__';
        message.params = message.params || {};
      }
      super(message);
    }
    setVersion(version) {
      throw new Error('Method not available in module "JsonRpcRequest"');
    }
    getError() {
      throw new Error('Method not available in module "JsonRpcRequest"');
    }
    setError(error) {
      throw new Error('Method not available in module "JsonRpcRequest"');
    }
    getResult() {
      throw new Error('Method not available in module "JsonRpcRequest"');
    }
    setResult(result) {
      throw new Error('Method not available in module "JsonRpcRequest"');
    }
  }
  module.exports = JsonRpcRequest;
  return module.exports;
});

$__System.registerDynamic("d", ["8", "c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var utls = $__require('8');
  var JsonRpc = $__require('c');
  class JsonRpcResponse extends JsonRpc {
    constructor(message) {
      if (message !== undefined) {
        if (utls.getType(message) !== 'Object') {
          throw new Error('Message must be object type');
        }
        message.version = message.version || JsonRpc.version;
        if (!JsonRpc.isValidResponse(message)) {
          throw new Error('Message is not valid json rpc response');
        }
      } else {
        message = {};
        message.version = JsonRpc.version;
      }
      super(message);
    }
    setVersion(version) {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    getResource() {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    setResource(resource) {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    getMethod() {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    setMethod(method) {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    getCallback() {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    setCallback(callback, tls) {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    getParams() {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
    setParams(params) {
      throw new Error('Method not available in module "JsonRpcResponse"');
    }
  }
  module.exports = JsonRpcResponse;
  return module.exports;
});

$__System.registerDynamic("e", ["8", "c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var utls = $__require('8');
  var JsonRpc = $__require('c');
  class JsonRpcNotification extends JsonRpc {
    constructor(message) {
      if (message !== undefined) {
        if (utls.getType(message) !== 'Object') {
          throw new Error('Message must be object type');
        }
        message.version = message.version || JsonRpc.version;
        message.resource = message.resource || '__global__';
        message.params = message.params || {};
        if (!JsonRpc.isValidNotification(message)) {
          throw new Error('Message is not valid json rpc notification');
        }
      } else {
        message = {};
        message.version = JsonRpc.version;
        message.resource = '__global__';
        message.params = message.params || {};
      }
      super(message);
    }
    setVersion(version) {
      throw new Error('Method not available in module "JsonRpcNotification"');
    }
    getId() {
      throw new Error('Method not available in module "JsonRpcNotification"');
    }
    setId(id) {
      throw new Error('Method not available in module "JsonRpcNotification"');
    }
    getError() {
      throw new Error('Method not available in module "JsonRpcNotification"');
    }
    setError(error) {
      throw new Error('Method not available in module "JsonRpcNotification"');
    }
    getResult() {
      throw new Error('Method not available in module "JsonRpcNotification"');
    }
    setResult(result) {
      throw new Error('Method not available in module "JsonRpcNotification"');
    }
  }
  module.exports = JsonRpcNotification;
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("10", ["f"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('f');
  return module.exports;
});

$__System.registerDynamic("11", ["10"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('10');
  return module.exports;
});

$__System.registerDynamic("12", ["11"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('11');
  return module.exports;
});

$__System.registerDynamic("13", ["12"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  (function(process) {
    function normalizeArray(parts, allowAboveRoot) {
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }
      return parts;
    }
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var splitPath = function(filename) {
      return splitPathRe.exec(filename).slice(1);
    };
    exports.resolve = function() {
      var resolvedPath = '',
          resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? arguments[i] : process.cwd();
        if (typeof path !== 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
      }
      resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
      }), !resolvedAbsolute).join('/');
      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    };
    exports.normalize = function(path) {
      var isAbsolute = exports.isAbsolute(path),
          trailingSlash = substr(path, -1) === '/';
      path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
      }), !isAbsolute).join('/');
      if (!path && !isAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }
      return (isAbsolute ? '/' : '') + path;
    };
    exports.isAbsolute = function(path) {
      return path.charAt(0) === '/';
    };
    exports.join = function() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return exports.normalize(filter(paths, function(p, index) {
        if (typeof p !== 'string') {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      }).join('/'));
    };
    exports.relative = function(from, to) {
      from = exports.resolve(from).substr(1);
      to = exports.resolve(to).substr(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '')
            break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '')
            break;
        }
        if (start > end)
          return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    };
    exports.sep = '/';
    exports.delimiter = ':';
    exports.dirname = function(path) {
      var result = splitPath(path),
          root = result[0],
          dir = result[1];
      if (!root && !dir) {
        return '.';
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    exports.basename = function(path, ext) {
      var f = splitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    exports.extname = function(path) {
      return splitPath(path)[3];
    };
    function filter(xs, f) {
      if (xs.filter)
        return xs.filter(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs))
          res.push(xs[i]);
      }
      return res;
    }
    var substr = 'ab'.substr(-1) === 'b' ? function(str, start, len) {
      return str.substr(start, len);
    } : function(str, start, len) {
      if (start < 0)
        start = str.length + start;
      return str.substr(start, len);
    };
    ;
  })($__require('12'));
  return module.exports;
});

$__System.registerDynamic("14", ["13"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('13');
  return module.exports;
});

$__System.registerDynamic("15", ["14"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('path') : $__require('14');
  return module.exports;
});

$__System.registerDynamic("16", ["15"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('15');
  return module.exports;
});

$__System.registerDynamic("17", [], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  if ($__System._nodeRequire) {
    module.exports = $__System._nodeRequire('fs');
  } else {
    exports.readFileSync = function(address) {
      var output;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', address, false);
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          var status = xhr.status;
          if ((status > 399 && status < 600) || status == 400) {
            throw 'File read error on ' + address;
          } else
            output = xhr.responseText;
        }
      };
      xhr.send(null);
      return output;
    };
  }
  return module.exports;
});

$__System.registerDynamic("18", ["17"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('17');
  return module.exports;
});

$__System.registerDynamic("19", ["16", "18"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var __vcopy_handlers = {};
  class utls {
    constructor() {
      throw new Error('Class "utls" cannot be instantiated');
    }
    static getType(value) {
      var type = /\[object ([^\]]*)]/.exec(Object.prototype.toString.call(value))[1];
      switch (type) {
        case 'Number':
          if (value % 1 !== 0) {
            type = 'Float';
          } else {
            type = 'Integer';
          }
          break;
        case 'Function':
          type = value.name.length ? value.name : type;
          break;
        case 'Object':
          type = value.constructor.name.length ? value.constructor.name : type;
          break;
        default:
          break;
      }
      return type;
    }
    static microtime() {
      return (new Date()).getTime() / 1000;
    }
    static ucFirst(string) {
      return (string || '').charAt(0).toUpperCase() + string.slice(1);
    }
    static lcFirst(string) {
      return (string || '').charAt(0).toLowerCase() + string.slice(1);
    }
    static camelCase(string) {
      return (string || '').toLowerCase().replace(/(-|\s|_)./g, function(m) {
        return m.toUpperCase().replace(/-|\s|_/, '');
      });
    }
    static pascalCase(string) {
      return this.ucFirst(this.camelCase(string));
    }
    static fileExists(path) {
      if (!$__require('16').isAbsolute(path)) {
        throw new Error("Path must be absolute!");
      }
      try {
        let fs = $__require('18');
        fs.accessSync(fs.realpathSync(path), fs.F_OK);
      } catch (e) {
        return false;
      }
      return true;
    }
    static mkdir(path, options) {
      options = options || {};
      options.mode = options.mode || 0o775;
      options.parents = options.parents || true;
      let xpath = $__require('16');
      let fs = $__require('18');
      let parts = path.split(xpath.sep);
      if (options.parents) {
        for (let i = 1; i < parts.length; i++) {
          path = parts.slice(0, i).join(xpath.sep) + xpath.sep;
          if (!utls.fileExists(path)) {
            fs.mkdirSync(path, options.mode);
          }
        }
      } else {
        path = parts.splice(0, parts.length - 1).join(xpath.sep) + xpath.sep;
        if (utls.fileExists(path)) {}
      }
      return true;
    }
    static extend(destination, source) {
      destination = destination || {};
      source = source || {};
      for (var property in source) {
        if (source.hasOwnProperty(property) && source[property] && source[property].constructor && source[property].constructor === Object) {
          if (!(destination[property] && destination[property].constructor && destination[property].constructor === Object)) {
            destination[property] = {};
          }
          utls.extend(destination[property], source[property]);
        } else {
          destination[property] = source[property];
        }
      }
      return destination;
    }
    static promisesWaterfall(promises, initial) {
      if ("Promise" !== utls.getType(initial)) {
        throw new Error("Initial value must be Promise");
      }
      return new Promise((resolve, reject) => {
        var final = promises.reduce((prevTask, current) => {
          return prevTask.then(current).catch(reject);
        }, initial);
        final.then(resolve).catch(reject);
      });
    }
    static traverse(value, match, callback, key, origin) {
      if (match(value)) {
        return callback(value, key, origin);
      } else if (utls.getType(value) == 'Array') {
        let arr = [];
        value.map((val, key, origin) => {
          let res = utls.traverse(val, match, callback, key, origin);
          if (res !== undefined) {
            arr.push(res);
          }
        });
        if (arr.length) {
          return arr;
        }
      } else if (utls.getType(value) == 'Object') {
        var obj = {};
        Object.getOwnPropertyNames(value).forEach((key) => {
          let res = utls.traverse(value[key], match, callback, key, value);
          if (res !== undefined) {
            obj[key] = res;
          }
        });
        if (Object.getOwnPropertyNames(obj).length) {
          return obj;
        }
      }
    }
    static equals(first, second) {
      function arrays(first, second) {
        if (first === second) {
          return true;
        }
        if (first.length !== second.length) {
          return false;
        }
        var length = first.length;
        for (var i = 0; i < length; i++) {
          if (first[i] instanceof Array && second[i] instanceof Array) {
            if (!arrays(first[i], second[i])) {
              return false;
            }
          } else if (first[i] instanceof Object && second[i] instanceof Object) {
            if (!objects(first[i], second[i])) {
              return false;
            }
          } else {
            if (first[i] !== second[i]) {
              return false;
            }
          }
        }
        return true;
      }
      function objects(first, second) {
        if (first === second) {
          return true;
        }
        var firstProps = Object.getOwnPropertyNames(first).sort();
        var firstPropsLength = firstProps.length;
        var secondProps = Object.getOwnPropertyNames(second).sort();
        if (firstPropsLength !== secondProps.length) {
          return false;
        }
        if (!arrays(firstProps, secondProps)) {
          return false;
        }
        for (var i = 0; i < firstPropsLength; i++) {
          var key = firstProps[i];
          if (first[key] instanceof Array && second[key] instanceof Array) {
            if (!arrays(first[key], second[key])) {
              return false;
            }
          } else if (first[key] instanceof Object && second[key] instanceof Object) {
            if (!objects(first[key], second[key])) {
              return false;
            }
          } else {
            if (first[key] !== second[key]) {
              return false;
            }
          }
        }
        return true;
      }
      if (first instanceof Array && second instanceof Array) {
        return arrays(first, second);
      } else if (first instanceof Object && second instanceof Object) {
        return objects(first, second);
      } else {
        return false;
      }
    }
    static vcopy(value) {
      var copy;
      if (typeof value === 'object') {
        var type = utls.getType(value);
        if (type === 'Array') {
          copy = value.map((val) => {
            return utls.vcopy(val);
          });
        } else if (type === 'Object') {
          copy = {};
          Object.getOwnPropertyNames(value).forEach((key) => {
            copy[key] = utls.vcopy(value[key]);
          });
        } else if (typeof __vcopy_handlers[type] === 'object' && __vcopy_handlers[type] !== null) {
          return __vcopy_handlers[type].handler(__vcopy_handlers[type].cls, value);
        } else {
          copy = value;
        }
      } else {
        copy = value;
      }
      return copy;
    }
    static isCircular(value) {
      var __ref = [];
      function check(value) {
        if (typeof value === 'object' && value !== null) {
          if (__ref.indexOf(value) !== -1) {
            return true;
          }
          __ref.push(value);
          for (var key in value) {
            if (value.hasOwnProperty(key) && check(value[key])) {
              return true;
            }
          }
          __ref.pop();
        }
        return false;
      }
      return check(value);
    }
    static map(value, callback, key, origin) {
      var type = utls.getType(value);
      if (type == 'Array') {
        let arr = [];
        value.map((val, key, origin) => {
          arr.push(utls.map(val, callback, key, origin));
        });
        return arr;
      } else if (type == 'Object') {
        var obj = {};
        Object.getOwnPropertyNames(value).forEach((key) => {
          obj[key] = utls.map(value[key], callback, key, value);
        });
        return obj;
      } else {
        return callback(value, key, origin);
      }
    }
    static filter(value, callback, key, origin) {
      var type = utls.getType(value);
      if (type == 'Array') {
        let arr = [];
        value.forEach((val, key, origin) => {
          if (utls.filter(val, callback, key, origin)) {
            arr.push(val);
          }
        });
        return arr;
      } else if (type == 'Object') {
        var obj = {};
        Object.getOwnPropertyNames(value).forEach((key) => {
          if (utls.filter(value[key], callback, key, value)) {
            obj[key] = value[key];
          }
        });
        return obj;
      } else {
        return callback(value, key, origin);
      }
    }
  }
  utls.vcopy.addHandler = function vcopy_addHandler(cls, handler) {
    __vcopy_handlers[utls.getType(cls)] = {
      cls: cls,
      handler: handler
    };
  };
  utls.vcopy.addHandler(Date, (cls, value) => {
    return new cls(value.getTime());
  });
  module.exports = utls;
  return module.exports;
});

$__System.registerDynamic("1a", ["19"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('19');
  return module.exports;
});

$__System.registerDynamic("8", ["1a"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('1a');
  return module.exports;
});

$__System.registerDynamic("1b", ["8"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var utls = $__require('8');
  class JsonRpcError {
    constructor(message, code) {
      if (utls.getType(message) === 'String') {
        this.setMessage(message);
      }
      if (utls.getType(code) === 'Integer') {
        this.setCode(code);
      }
    }
    getCode() {
      return this.code;
    }
    getMessage() {
      return this.message;
    }
    setCode(code) {
      if (utls.getType(code) !== 'Integer') {
        throw new Error('Code must be number');
      }
      this.code = code;
      return this;
    }
    setMessage(message) {
      if (utls.getType(message) !== 'String' && !message.length) {
        throw new Error('Message must be non-zero length string');
      }
      this.message = message;
      return this;
    }
    static isValid(error) {
      return error instanceof JsonRpcError || (utls.getType(error) === 'Object' && utls.equals(Object.getOwnPropertyNames(error).sort(), ['code', 'message']) && utls.getType(error.code) === 'Integer' && utls.getType(error.message) === 'String' && !!error.message.length);
    }
  }
  JsonRpcError.E_PARSE = {
    code: -1,
    message: 'Parse error'
  };
  JsonRpcError.E_INVALID_REQUEST = {
    code: -2,
    message: 'Invalid Request'
  };
  JsonRpcError.E_NAMESPACE_NOT_FOUND = {
    code: -3,
    message: 'Namespace not found'
  };
  JsonRpcError.E_METHOD_NOT_FOUND = {
    code: -4,
    message: 'Method not found'
  };
  JsonRpcError.E_INVALID_PARAMS = {
    code: -5,
    message: 'Invalid params'
  };
  JsonRpcError.E_INTERNAL = {
    code: -6,
    message: 'Internal error'
  };
  module.exports = JsonRpcError;
  return module.exports;
});

$__System.registerDynamic("c", ["8", "a", "b", "d", "e", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var utls = $__require('8');
  var JSONLess = $__require('a');
  var __version = '1.1.0';
  var __id = 0;
  var __callbacks = {};
  var __callbacksTimeout = 60000;
  var __options = {autoFireCallbacks: true};
  class JsonRpc {
    constructor(message) {
      if (this.constructor === JsonRpc) {
        throw new TypeError('Abstract class "JsonRpc" cannot be instantiated directly.');
      }
      if (message.callback !== undefined) {
        var callback = message.callback;
        delete message.callback;
      }
      this.message = message;
      if (callback) {
        this.setCallback(callback);
      }
      if (this.constructor === Response) {
        if (__options.autoFireCallbacks) {
          if (__callbacks[this.getId()] !== undefined) {
            JsonRpc.fireCallback(this);
          }
        }
      }
    }
    static setOptions(options) {
      utls.extend(__options, options);
    }
    static getOptions() {
      return __options;
    }
    static getType(message) {
      if (!(message instanceof Object)) {
        throw new Error('Message parameter must be object');
      }
      switch (true) {
        case JsonRpc.isValidRequest(message):
          return 'request';
        case JsonRpc.isValidResponse(message):
          return 'response';
        case JsonRpc.isValidNotification(message):
          return 'notification';
        default:
          break;
      }
    }
    static parse(message) {
      if (utls.getType(message) !== 'Object') {
        if (utls.getType(message) === 'String') {
          try {
            message = JSONLess.parse(message);
          } catch (e) {
            throw new Error(JsonRpcError.E_PARSE.message, JsonRpcError.E_PARSE.code);
          }
        } else {
          throw new Error('Message must be string or object type');
        }
      }
      switch (JsonRpc.getType(message)) {
        case 'request':
          return new Request(message);
        case 'response':
          return new Response(message);
        case 'notification':
          return new Notification(message);
        default:
          throw new Error('Unknown message type');
      }
    }
    static isValidRequest(message) {
      if (utls.getType(message) !== 'Object') {
        return false;
      }
      if (message.error !== undefined || message.result !== undefined) {
        return false;
      }
      return message.version === __version && utls.getType(message.id) === 'Integer' && message.id > 0 && utls.getType(message.resource) === 'String' && !!message.resource.length && utls.getType(message.method) === 'String' && !!message.method.length && utls.getType(message.params) === 'Object';
    }
    static isValidResponse(message) {
      if (utls.getType(message) !== 'Object') {
        return false;
      }
      if (message.method !== undefined || message.resource !== undefined || message.params !== undefined) {
        return false;
      }
      if (message.id !== undefined) {
        if (utls.getType(message.id) !== 'Integer' || message.id <= 0) {
          return false;
        }
      }
      return message.version === __version && (message.result !== undefined || ((utls.getType(message.error) === 'Object' && utls.equals(Object.getOwnPropertyNames(message.error).sort(), ['code', 'message']) && utls.getType(message.error.code) === 'Integer' && utls.getType(message.error.message) === 'String' && !!message.error.message) || (utls.getType(message.error) === 'JsonRpcError' && JsonRpcError.isValid(message.error))));
    }
    static isValidNotification(message) {
      if (utls.getType(message) !== 'Object') {
        return false;
      }
      if (message.error !== undefined || message.result !== undefined || message.id !== undefined) {
        return false;
      }
      return message.version === __version && utls.getType(message.resource) === 'String' && message.resource.length && utls.getType(message.method) === 'String' && message.method.length && utls.getType(message.params) === 'Object';
    }
    static hasValidSyntax(message) {
      return JsonRpc.isValidRequest(message) || JsonRpc.isValidResponse(message) || JsonRpc.isValidNotification(message);
    }
    static getNextId() {
      return ++__id;
    }
    static fireCallback(response) {
      if (response instanceof Response) {
        var callback = __callbacks[response.getId()];
        if (callback instanceof Object && callback.cb instanceof Function) {
          callback.cb(response);
          JsonRpc.removeCallback(response.getId());
        }
      } else {
        throw new Error('Response must be instance of JsonRpcResponse');
      }
    }
    static removeCallback(id) {
      var callback = __callbacks[id];
      if (callback instanceof Object) {
        clearTimeout(callback.timeout);
        delete __callbacks[id];
      }
    }
    get isRequest() {
      return this instanceof Request;
    }
    get isResponse() {
      return this instanceof Response;
    }
    get isNotification() {
      return this instanceof Notification;
    }
    getVersion() {
      return this.message.version;
    }
    setVersion(version) {
      this.message.version = version;
      return this;
    }
    getId() {
      return this.message.id;
    }
    setId(id) {
      if (utls.getType(id) !== 'Integer') {
        throw new Error('Id must be integer');
      }
      this.message.id = id;
      return this;
    }
    getResource() {
      return this.message.resource;
    }
    setResource(resource) {
      if (utls.getType(resource) !== 'String') {
        throw new Error('Resource must be "String" type');
      }
      this.message.resource = resource;
      return this;
    }
    getMethod() {
      return this.message.method;
    }
    setMethod(method) {
      if (utls.getType(method) !== 'String') {
        throw new Error('Method must be "String" type');
      }
      this.message.method = method;
      return this;
    }
    getCallback() {
      return typeof __callbacks[this.message.id] === 'object' ? __callbacks[this.message.id].cb : undefined;
    }
    setCallback(callback, tls) {
      tls = tls || __callbacksTimeout;
      if (typeof callback !== 'function') {
        throw new Error('Callback must be function');
      }
      var self = this;
      var timeout = setTimeout(() => {
        JsonRpc.removeCallback(self.message.id);
      }, tls);
      __callbacks[this.message.id] = {
        cb: callback,
        timeout: timeout
      };
      return this;
    }
    getParams() {
      return this.message.params;
    }
    setParams(params) {
      if (utls.getType(params) !== 'Object') {
        throw new Error('Params must be "Object" type');
      }
      this.message.params = params;
      return this;
    }
    getResult() {
      return this.message.result;
    }
    setResult(result) {
      this.message.result = result;
      return this;
    }
    getError() {
      return this.message.error;
    }
    setError(error) {
      if (!(error instanceof JsonRpcError)) {
        error = new JsonRpcError(error);
      }
      this.message.error = error;
      return this;
    }
    toJSON() {
      return this.message;
    }
    toString() {
      return JSONLess.stringify(this.toJSON());
    }
  }
  module.exports = JsonRpc;
  var Request = $__require('b');
  var Response = $__require('d');
  var Notification = $__require('e');
  var JsonRpcError = $__require('1b');
  module.exports.Request = Request;
  module.exports.Response = Response;
  module.exports.Notification = Notification;
  module.exports.JsonRpcError = JsonRpcError;
  module.exports.version = __version;
  module.exports.addHandler = JSONLess.addHandler;
  return module.exports;
});

$__System.registerDynamic("1c", ["c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('c');
  return module.exports;
});

$__System.registerDynamic("1d", ["1c"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  module.exports = $__require('1c');
  return module.exports;
});

$__System.register("1", ["5", "6", "1d"], function (_export) {
    var _createClass, _classCallCheck, jsonrpc, instance, ClusterApiClient;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_d) {
            jsonrpc = _d["default"];
        }],
        execute: function () {
            "use strict";

            instance = null;

            ClusterApiClient = (function () {
                function ClusterApiClient() {
                    _classCallCheck(this, ClusterApiClient);

                    return ClusterApiClient.getInstance();
                }

                _createClass(ClusterApiClient, null, [{
                    key: "getInstance",
                    value: function getInstance() {
                        if (!instance) {
                            instance = new ClusterApiClient();
                        }
                        return instance;
                    }
                }, {
                    key: "_handleEvent",
                    value: function _handleEvent(event, connectionClosed, reconnect) {
                        if (connectionClosed) {
                            ClusterApiClient.connectionStatus = 0;
                            if (reconnect) {
                                ClusterApiClient.reconnectService = setTimeout(ClusterApiClient.connect, 5000);
                            }
                        }
                    }
                }, {
                    key: "connect",
                    value: function connect() {
                        ClusterApiClient.ws = new WebSocket(ClusterApiClient.serverAddress);
                        ClusterApiClient.ws.on("open", function (e) {
                            return ClusterApiClient.connectionStatus = 1;
                        }).on("close", function (e) {
                            return ClusterApiClient._handleEvent(e, true, false);
                        }).on("error", function (e) {
                            return ClusterApiClient._handleEvent(e, true, false);
                        }).on("message", function (e) {
                            var json = jsonrpc.parse(e);
                            console.error(json.toString());
                        });
                    }
                }, {
                    key: "send",
                    value: function send(jsonrpcObject, callback) {
                        ClusterApiClient.messages[jsonrpcObject.id] = callback;
                        ClusterApiClient.ws.send(jsonrpcObject.toString(), function (err) {
                            return console.error(err);
                        });
                    }
                }, {
                    key: "getConnectionStatus",
                    get: function get() {
                        return ClusterApiClient.connectionStatus;
                    }
                }]);

                return ClusterApiClient;
            })();

            _export("ClusterApiClient", ClusterApiClient);
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle.js.map