'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('./modules/es5');
      require('./modules/es6.symbol');
      require('./modules/es6.object.assign');
      require('./modules/es6.object.is');
      require('./modules/es6.object.set-prototype-of');
      require('./modules/es6.object.to-string');
      require('./modules/es6.object.freeze');
      require('./modules/es6.object.seal');
      require('./modules/es6.object.prevent-extensions');
      require('./modules/es6.object.is-frozen');
      require('./modules/es6.object.is-sealed');
      require('./modules/es6.object.is-extensible');
      require('./modules/es6.object.get-own-property-descriptor');
      require('./modules/es6.object.get-prototype-of');
      require('./modules/es6.object.keys');
      require('./modules/es6.object.get-own-property-names');
      require('./modules/es6.function.name');
      require('./modules/es6.function.has-instance');
      require('./modules/es6.number.constructor');
      require('./modules/es6.number.epsilon');
      require('./modules/es6.number.is-finite');
      require('./modules/es6.number.is-integer');
      require('./modules/es6.number.is-nan');
      require('./modules/es6.number.is-safe-integer');
      require('./modules/es6.number.max-safe-integer');
      require('./modules/es6.number.min-safe-integer');
      require('./modules/es6.number.parse-float');
      require('./modules/es6.number.parse-int');
      require('./modules/es6.math.acosh');
      require('./modules/es6.math.asinh');
      require('./modules/es6.math.atanh');
      require('./modules/es6.math.cbrt');
      require('./modules/es6.math.clz32');
      require('./modules/es6.math.cosh');
      require('./modules/es6.math.expm1');
      require('./modules/es6.math.fround');
      require('./modules/es6.math.hypot');
      require('./modules/es6.math.imul');
      require('./modules/es6.math.log10');
      require('./modules/es6.math.log1p');
      require('./modules/es6.math.log2');
      require('./modules/es6.math.sign');
      require('./modules/es6.math.sinh');
      require('./modules/es6.math.tanh');
      require('./modules/es6.math.trunc');
      require('./modules/es6.string.from-code-point');
      require('./modules/es6.string.raw');
      require('./modules/es6.string.trim');
      require('./modules/es6.string.iterator');
      require('./modules/es6.string.code-point-at');
      require('./modules/es6.string.ends-with');
      require('./modules/es6.string.includes');
      require('./modules/es6.string.repeat');
      require('./modules/es6.string.starts-with');
      require('./modules/es6.array.from');
      require('./modules/es6.array.of');
      require('./modules/es6.array.iterator');
      require('./modules/es6.array.species');
      require('./modules/es6.array.copy-within');
      require('./modules/es6.array.fill');
      require('./modules/es6.array.find');
      require('./modules/es6.array.find-index');
      require('./modules/es6.regexp.constructor');
      require('./modules/es6.regexp.flags');
      require('./modules/es6.regexp.match');
      require('./modules/es6.regexp.replace');
      require('./modules/es6.regexp.search');
      require('./modules/es6.regexp.split');
      require('./modules/es6.promise');
      require('./modules/es6.map');
      require('./modules/es6.set');
      require('./modules/es6.weak-map');
      require('./modules/es6.weak-set');
      require('./modules/es6.reflect.apply');
      require('./modules/es6.reflect.construct');
      require('./modules/es6.reflect.define-property');
      require('./modules/es6.reflect.delete-property');
      require('./modules/es6.reflect.enumerate');
      require('./modules/es6.reflect.get');
      require('./modules/es6.reflect.get-own-property-descriptor');
      require('./modules/es6.reflect.get-prototype-of');
      require('./modules/es6.reflect.has');
      require('./modules/es6.reflect.is-extensible');
      require('./modules/es6.reflect.own-keys');
      require('./modules/es6.reflect.prevent-extensions');
      require('./modules/es6.reflect.set');
      require('./modules/es6.reflect.set-prototype-of');
      require('./modules/es7.array.includes');
      require('./modules/es7.string.at');
      require('./modules/es7.string.pad-left');
      require('./modules/es7.string.pad-right');
      require('./modules/es7.string.trim-left');
      require('./modules/es7.string.trim-right');
      require('./modules/es7.regexp.escape');
      require('./modules/es7.object.get-own-property-descriptors');
      require('./modules/es7.object.values');
      require('./modules/es7.object.entries');
      require('./modules/es7.map.to-json');
      require('./modules/es7.set.to-json');
      require('./modules/js.array.statics');
      require('./modules/web.timers');
      require('./modules/web.immediate');
      require('./modules/web.dom.iterable');
      module.exports = require('./modules/$.core');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvc2hpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsY0FBUSxlQUFSO0FBQ0EsY0FBUSxzQkFBUjtBQUNBLGNBQVEsNkJBQVI7QUFDQSxjQUFRLHlCQUFSO0FBQ0EsY0FBUSx1Q0FBUjtBQUNBLGNBQVEsZ0NBQVI7QUFDQSxjQUFRLDZCQUFSO0FBQ0EsY0FBUSwyQkFBUjtBQUNBLGNBQVEseUNBQVI7QUFDQSxjQUFRLGdDQUFSO0FBQ0EsY0FBUSxnQ0FBUjtBQUNBLGNBQVEsb0NBQVI7QUFDQSxjQUFRLGtEQUFSO0FBQ0EsY0FBUSx1Q0FBUjtBQUNBLGNBQVEsMkJBQVI7QUFDQSxjQUFRLDZDQUFSO0FBQ0EsY0FBUSw2QkFBUjtBQUNBLGNBQVEscUNBQVI7QUFDQSxjQUFRLGtDQUFSO0FBQ0EsY0FBUSw4QkFBUjtBQUNBLGNBQVEsZ0NBQVI7QUFDQSxjQUFRLGlDQUFSO0FBQ0EsY0FBUSw2QkFBUjtBQUNBLGNBQVEsc0NBQVI7QUFDQSxjQUFRLHVDQUFSO0FBQ0EsY0FBUSx1Q0FBUjtBQUNBLGNBQVEsa0NBQVI7QUFDQSxjQUFRLGdDQUFSO0FBQ0EsY0FBUSwwQkFBUjtBQUNBLGNBQVEsMEJBQVI7QUFDQSxjQUFRLDBCQUFSO0FBQ0EsY0FBUSx5QkFBUjtBQUNBLGNBQVEsMEJBQVI7QUFDQSxjQUFRLHlCQUFSO0FBQ0EsY0FBUSwwQkFBUjtBQUNBLGNBQVEsMkJBQVI7QUFDQSxjQUFRLDBCQUFSO0FBQ0EsY0FBUSx5QkFBUjtBQUNBLGNBQVEsMEJBQVI7QUFDQSxjQUFRLDBCQUFSO0FBQ0EsY0FBUSx5QkFBUjtBQUNBLGNBQVEseUJBQVI7QUFDQSxjQUFRLHlCQUFSO0FBQ0EsY0FBUSx5QkFBUjtBQUNBLGNBQVEsMEJBQVI7QUFDQSxjQUFRLHNDQUFSO0FBQ0EsY0FBUSwwQkFBUjtBQUNBLGNBQVEsMkJBQVI7QUFDQSxjQUFRLCtCQUFSO0FBQ0EsY0FBUSxvQ0FBUjtBQUNBLGNBQVEsZ0NBQVI7QUFDQSxjQUFRLCtCQUFSO0FBQ0EsY0FBUSw2QkFBUjtBQUNBLGNBQVEsa0NBQVI7QUFDQSxjQUFRLDBCQUFSO0FBQ0EsY0FBUSx3QkFBUjtBQUNBLGNBQVEsOEJBQVI7QUFDQSxjQUFRLDZCQUFSO0FBQ0EsY0FBUSxpQ0FBUjtBQUNBLGNBQVEsMEJBQVI7QUFDQSxjQUFRLDBCQUFSO0FBQ0EsY0FBUSxnQ0FBUjtBQUNBLGNBQVEsa0NBQVI7QUFDQSxjQUFRLDRCQUFSO0FBQ0EsY0FBUSw0QkFBUjtBQUNBLGNBQVEsOEJBQVI7QUFDQSxjQUFRLDZCQUFSO0FBQ0EsY0FBUSw0QkFBUjtBQUNBLGNBQVEsdUJBQVI7QUFDQSxjQUFRLG1CQUFSO0FBQ0EsY0FBUSxtQkFBUjtBQUNBLGNBQVEsd0JBQVI7QUFDQSxjQUFRLHdCQUFSO0FBQ0EsY0FBUSw2QkFBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLHVDQUFSO0FBQ0EsY0FBUSx1Q0FBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLDJCQUFSO0FBQ0EsY0FBUSxtREFBUjtBQUNBLGNBQVEsd0NBQVI7QUFDQSxjQUFRLDJCQUFSO0FBQ0EsY0FBUSxxQ0FBUjtBQUNBLGNBQVEsZ0NBQVI7QUFDQSxjQUFRLDBDQUFSO0FBQ0EsY0FBUSwyQkFBUjtBQUNBLGNBQVEsd0NBQVI7QUFDQSxjQUFRLDhCQUFSO0FBQ0EsY0FBUSx5QkFBUjtBQUNBLGNBQVEsK0JBQVI7QUFDQSxjQUFRLGdDQUFSO0FBQ0EsY0FBUSxnQ0FBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLDZCQUFSO0FBQ0EsY0FBUSxtREFBUjtBQUNBLGNBQVEsNkJBQVI7QUFDQSxjQUFRLDhCQUFSO0FBQ0EsY0FBUSwyQkFBUjtBQUNBLGNBQVEsMkJBQVI7QUFDQSxjQUFRLDRCQUFSO0FBQ0EsY0FBUSxzQkFBUjtBQUNBLGNBQVEseUJBQVI7QUFDQSxjQUFRLDRCQUFSO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsa0JBQVIsQ0FBakIiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9zaGltLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM1Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnNlYWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmVwc2lsb24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hY29zaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYXRhbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jYnJ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY2x6MzInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jb3NoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5mcm91bmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5oeXBvdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmltdWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cxMCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnNpZ24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5zaW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgudGFuaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnRydW5jJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJhdycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi53ZWFrLXNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmhhcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLmF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtbGVmdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi50aW1lcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuaW1tZWRpYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21vZHVsZXMvJC5jb3JlJyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
