'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /** Used to map aliases to their real names. */
      exports.aliasToReal = {

        // Lodash aliases.
        'each': 'forEach',
        'eachRight': 'forEachRight',
        'entries': 'toPairs',
        'entriesIn': 'toPairsIn',
        'extend': 'assignIn',
        'extendWith': 'assignInWith',
        'first': 'head',

        // Ramda aliases.
        '__': 'placeholder',
        'all': 'every',
        'allPass': 'overEvery',
        'always': 'constant',
        'any': 'some',
        'anyPass': 'overSome',
        'apply': 'spread',
        'assoc': 'set',
        'assocPath': 'set',
        'complement': 'negate',
        'compose': 'flowRight',
        'contains': 'includes',
        'dissoc': 'unset',
        'dissocPath': 'unset',
        'equals': 'isEqual',
        'identical': 'eq',
        'init': 'initial',
        'invertObj': 'invert',
        'juxt': 'over',
        'omitAll': 'omit',
        'nAry': 'ary',
        'path': 'get',
        'pathEq': 'matchesProperty',
        'pathOr': 'getOr',
        'paths': 'at',
        'pickAll': 'pick',
        'pipe': 'flow',
        'pluck': 'map',
        'prop': 'get',
        'propEq': 'matchesProperty',
        'propOr': 'getOr',
        'props': 'at',
        'unapply': 'rest',
        'unnest': 'flatten',
        'useWith': 'overArgs',
        'whereEq': 'filter',
        'zipObj': 'zipObject'
      };

      /** Used to map ary to method names. */
      exports.aryMethod = {
        '1': ['attempt', 'castArray', 'ceil', 'create', 'curry', 'curryRight', 'floor', 'flow', 'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'methodOf', 'mixin', 'over', 'overEvery', 'overSome', 'rest', 'reverse', 'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart', 'uniqueId', 'words'],
        '2': ['add', 'after', 'ary', 'assign', 'assignIn', 'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith', 'cloneWith', 'concat', 'countBy', 'curryN', 'curryRightN', 'debounce', 'defaults', 'defaultsDeep', 'delay', 'difference', 'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq', 'every', 'filter', 'find', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex', 'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach', 'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get', 'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection', 'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy', 'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty', 'maxBy', 'meanBy', 'merge', 'minBy', 'multiply', 'nth', 'omit', 'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial', 'partialRight', 'partition', 'pick', 'pickBy', 'pull', 'pullAll', 'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove', 'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex', 'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy', 'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight', 'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars', 'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith', 'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject', 'zipObjectDeep'],
        '3': ['assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith', 'getOr', 'inRange', 'intersectionBy', 'intersectionWith', 'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd', 'padCharsStart', 'pullAllBy', 'pullAllWith', 'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy', 'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy', 'xorWith', 'zipWith'],
        '4': ['fill', 'setWith', 'updateWith']
      };

      /** Used to map ary to rearg configs. */
      exports.aryRearg = {
        '2': [1, 0],
        '3': [2, 0, 1],
        '4': [3, 2, 0, 1]
      };

      /** Used to map method names to their iteratee ary. */
      exports.iterateeAry = {
        'dropRightWhile': 1,
        'dropWhile': 1,
        'every': 1,
        'filter': 1,
        'find': 1,
        'findIndex': 1,
        'findKey': 1,
        'findLast': 1,
        'findLastIndex': 1,
        'findLastKey': 1,
        'flatMap': 1,
        'flatMapDeep': 1,
        'flatMapDepth': 1,
        'forEach': 1,
        'forEachRight': 1,
        'forIn': 1,
        'forInRight': 1,
        'forOwn': 1,
        'forOwnRight': 1,
        'map': 1,
        'mapKeys': 1,
        'mapValues': 1,
        'partition': 1,
        'reduce': 2,
        'reduceRight': 2,
        'reject': 1,
        'remove': 1,
        'some': 1,
        'takeRightWhile': 1,
        'takeWhile': 1,
        'times': 1,
        'transform': 2
      };

      /** Used to map method names to iteratee rearg configs. */
      exports.iterateeRearg = {
        'mapKeys': [1]
      };

      /** Used to map method names to rearg configs. */
      exports.methodRearg = {
        'assignInWith': [1, 2, 0],
        'assignWith': [1, 2, 0],
        'getOr': [2, 1, 0],
        'isEqualWith': [1, 2, 0],
        'isMatchWith': [2, 1, 0],
        'mergeWith': [1, 2, 0],
        'padChars': [2, 1, 0],
        'padCharsEnd': [2, 1, 0],
        'padCharsStart': [2, 1, 0],
        'pullAllBy': [2, 1, 0],
        'pullAllWith': [2, 1, 0],
        'setWith': [3, 1, 2, 0],
        'sortedIndexBy': [2, 1, 0],
        'sortedLastIndexBy': [2, 1, 0],
        'updateWith': [3, 1, 2, 0],
        'zipWith': [1, 2, 0]
      };

      /** Used to map method names to spread configs. */
      exports.methodSpread = {
        'invokeArgs': 2,
        'invokeArgsMap': 2,
        'partial': 1,
        'partialRight': 1,
        'without': 1
      };

      /** Used to identify methods which mutate arrays or objects. */
      exports.mutate = {
        'array': {
          'fill': true,
          'pull': true,
          'pullAll': true,
          'pullAllBy': true,
          'pullAllWith': true,
          'pullAt': true,
          'remove': true,
          'reverse': true
        },
        'object': {
          'assign': true,
          'assignIn': true,
          'assignInWith': true,
          'assignWith': true,
          'defaults': true,
          'defaultsDeep': true,
          'merge': true,
          'mergeWith': true
        },
        'set': {
          'set': true,
          'setWith': true,
          'unset': true,
          'update': true,
          'updateWith': true
        }
      };

      /** Used to track methods with placeholder support */
      exports.placeholder = {
        'bind': true,
        'bindKey': true,
        'curry': true,
        'curryRight': true,
        'partial': true,
        'partialRight': true
      };

      /** Used to map real names to their aliases. */
      exports.realToAlias = function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            object = exports.aliasToReal,
            result = {};

        for (var key in object) {
          var value = object[key];
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }
        return result;
      }();

      /** Used to map method names to other names. */
      exports.remap = {
        'curryN': 'curry',
        'curryRightN': 'curryRight',
        'getOr': 'get',
        'invokeArgs': 'invoke',
        'invokeArgsMap': 'invokeMap',
        'padChars': 'pad',
        'padCharsEnd': 'padEnd',
        'padCharsStart': 'padStart',
        'restFrom': 'rest',
        'spreadFrom': 'spread',
        'trimChars': 'trim',
        'trimCharsEnd': 'trimEnd',
        'trimCharsStart': 'trimStart'
      };

      /** Used to track methods that skip fixing their arity. */
      exports.skipFixed = {
        'castArray': true,
        'flow': true,
        'flowRight': true,
        'iteratee': true,
        'mixin': true,
        'runInContext': true
      };

      /** Used to track methods that skip rearranging arguments. */
      exports.skipRearg = {
        'add': true,
        'assign': true,
        'assignIn': true,
        'bind': true,
        'bindKey': true,
        'concat': true,
        'difference': true,
        'divide': true,
        'eq': true,
        'gt': true,
        'gte': true,
        'isEqual': true,
        'lt': true,
        'lte': true,
        'matchesProperty': true,
        'merge': true,
        'multiply': true,
        'overArgs': true,
        'partial': true,
        'partialRight': true,
        'random': true,
        'range': true,
        'rangeRight': true,
        'subtract': true,
        'without': true,
        'zip': true,
        'zipObject': true
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2ZwL19tYXBwaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxjQUFRLFdBQVIsR0FBc0I7OztBQUdwQixnQkFBUSxTQUFSO0FBQ0EscUJBQWEsY0FBYjtBQUNBLG1CQUFXLFNBQVg7QUFDQSxxQkFBYSxXQUFiO0FBQ0Esa0JBQVUsVUFBVjtBQUNBLHNCQUFjLGNBQWQ7QUFDQSxpQkFBUyxNQUFUOzs7QUFHQSxjQUFNLGFBQU47QUFDQSxlQUFPLE9BQVA7QUFDQSxtQkFBVyxXQUFYO0FBQ0Esa0JBQVUsVUFBVjtBQUNBLGVBQU8sTUFBUDtBQUNBLG1CQUFXLFVBQVg7QUFDQSxpQkFBUyxRQUFUO0FBQ0EsaUJBQVMsS0FBVDtBQUNBLHFCQUFhLEtBQWI7QUFDQSxzQkFBYyxRQUFkO0FBQ0EsbUJBQVcsV0FBWDtBQUNBLG9CQUFZLFVBQVo7QUFDQSxrQkFBVSxPQUFWO0FBQ0Esc0JBQWMsT0FBZDtBQUNBLGtCQUFVLFNBQVY7QUFDQSxxQkFBYSxJQUFiO0FBQ0EsZ0JBQVEsU0FBUjtBQUNBLHFCQUFhLFFBQWI7QUFDQSxnQkFBUSxNQUFSO0FBQ0EsbUJBQVcsTUFBWDtBQUNBLGdCQUFRLEtBQVI7QUFDQSxnQkFBUSxLQUFSO0FBQ0Esa0JBQVUsaUJBQVY7QUFDQSxrQkFBVSxPQUFWO0FBQ0EsaUJBQVMsSUFBVDtBQUNBLG1CQUFXLE1BQVg7QUFDQSxnQkFBUSxNQUFSO0FBQ0EsaUJBQVMsS0FBVDtBQUNBLGdCQUFRLEtBQVI7QUFDQSxrQkFBVSxpQkFBVjtBQUNBLGtCQUFVLE9BQVY7QUFDQSxpQkFBUyxJQUFUO0FBQ0EsbUJBQVcsTUFBWDtBQUNBLGtCQUFVLFNBQVY7QUFDQSxtQkFBVyxVQUFYO0FBQ0EsbUJBQVcsUUFBWDtBQUNBLGtCQUFVLFdBQVY7T0FoREY7OztBQW9EQSxjQUFRLFNBQVIsR0FBb0I7QUFDbEIsYUFBSyxDQUNILFNBREcsRUFDUSxXQURSLEVBQ3FCLE1BRHJCLEVBQzZCLFFB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Q2xCLGVBQU8sSUFBUDtBQUNBLGtCQUFVLElBQVY7QUFDQSxvQkFBWSxJQUFaO0FBQ0EsZ0JBQVEsSUFBUjtBQUNBLG1CQUFXLElBQVg7QUFDQSxrQkFBVSxJQUFWO0FBQ0Esc0JBQWMsSUFBZDtBQUNBLGtCQUFVLElBQVY7QUFDQSxjQUFNLElBQU47QUFDQSxjQUFNLElBQU47QUFDQSxlQUFPLElBQVA7QUFDQSxtQkFBVyxJQUFYO0FBQ0EsY0FBTSxJQUFOO0FBQ0EsZUFBTyxJQUFQO0FBQ0EsMkJBQW1CLElBQW5CO0FBQ0EsaUJBQVMsSUFBVDtBQUNBLG9CQUFZLElBQVo7QUFDQSxvQkFBWSxJQUFaO0FBQ0EsbUJBQVcsSUFBWDtBQUNBLHdCQUFnQixJQUFoQjtBQUNBLGtCQUFVLElBQVY7QUFDQSxpQkFBUyxJQUFUO0FBQ0Esc0JBQWMsSUFBZDtBQUNBLG9CQUFZLElBQVo7QUFDQSxtQkFBVyxJQUFYO0FBQ0EsZUFBTyxJQUFQO0FBQ0EscUJBQWEsSUFBYjtPQTNCRiIsImZpbGUiOiJucG0vbG9kYXNoQDQuMTEuMS9mcC9fbWFwcGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBVc2VkIHRvIG1hcCBhbGlhc2VzIHRvIHRoZWlyIHJlYWwgbmFtZXMuICovXG5leHBvcnRzLmFsaWFzVG9SZWFsID0ge1xuXG4gIC8vIExvZGFzaCBhbGlhc2VzLlxuICAnZWFjaCc6ICdmb3JFYWNoJyxcbiAgJ2VhY2hSaWdodCc6ICdmb3JFYWNoUmlnaHQnLFxuICAnZW50cmllcyc6ICd0b1BhaXJzJyxcbiAgJ2VudHJpZXNJbic6ICd0b1BhaXJzSW4nLFxuICAnZXh0ZW5kJzogJ2Fzc2lnbkluJyxcbiAgJ2V4dGVuZFdpdGgnOiAnYXNzaWduSW5XaXRoJyxcbiAgJ2ZpcnN0JzogJ2hlYWQnLFxuXG4gIC8vIFJhbWRhIGFsaWFzZXMuXG4gICdfXyc6ICdwbGFjZWhvbGRlcicsXG4gICdhbGwnOiAnZXZlcnknLFxuICAnYWxsUGFzcyc6ICdvdmVyRXZlcnknLFxuICAnYWx3YXlzJzogJ2NvbnN0YW50JyxcbiAgJ2FueSc6ICdzb21lJyxcbiAgJ2FueVBhc3MnOiAnb3ZlclNvbWUnLFxuICAnYXBwbHknOiAnc3ByZWFkJyxcbiAgJ2Fzc29jJzogJ3NldCcsXG4gICdhc3NvY1BhdGgnOiAnc2V0JyxcbiAgJ2NvbXBsZW1lbnQnOiAnbmVnYXRlJyxcbiAgJ2NvbXBvc2UnOiAnZmxvd1JpZ2h0JyxcbiAgJ2NvbnRhaW5zJzogJ2luY2x1ZGVzJyxcbiAgJ2Rpc3NvYyc6ICd1bnNldCcsXG4gICdkaXNzb2NQYXRoJzogJ3Vuc2V0JyxcbiAgJ2VxdWFscyc6ICdpc0VxdWFsJyxcbiAgJ2lkZW50aWNhbCc6ICdlcScsXG4gICdpbml0JzogJ2luaXRpYWwnLFxuICAnaW52ZXJ0T2JqJzogJ2ludmVydCcsXG4gICdqdXh0JzogJ292ZXInLFxuICAnb21pdEFsbCc6ICdvbWl0JyxcbiAgJ25BcnknOiAnYXJ5JyxcbiAgJ3BhdGgnOiAnZ2V0JyxcbiAgJ3BhdGhFcSc6ICdtYXRjaGVzUHJvcGVydHknLFxuICAncGF0aE9yJzogJ2dldE9yJyxcbiAgJ3BhdGhzJzogJ2F0JyxcbiAgJ3BpY2tBbGwnOiAncGljaycsXG4gICdwaXBlJzogJ2Zsb3cnLFxuICAncGx1Y2snOiAnbWFwJyxcbiAgJ3Byb3AnOiAnZ2V0JyxcbiAgJ3Byb3BFcSc6ICdtYXRjaGVzUHJvcGVydHknLFxuICAncHJvcE9yJzogJ2dldE9yJyxcbiAgJ3Byb3BzJzogJ2F0JyxcbiAgJ3VuYXBwbHknOiAncmVzdCcsXG4gICd1bm5lc3QnOiAnZmxhdHRlbicsXG4gICd1c2VXaXRoJzogJ292ZXJBcmdzJyxcbiAgJ3doZXJlRXEnOiAnZmlsdGVyJyxcbiAgJ3ppcE9iaic6ICd6aXBPYmplY3QnXG59O1xuXG4vKiogVXNlZCB0byBtYXAgYXJ5IHRvIG1ldGhvZCBuYW1lcy4gKi9cbmV4cG9ydHMuYXJ5TWV0aG9kID0ge1xuICAnMSc6IFtcbiAgICAnYXR0ZW1wdCcsICdjYXN0QXJyYXknLCAnY2VpbCcsICdjcmVhdGUnLCAnY3VycnknLCAnY3VycnlSaWdodCcsICdmbG9vcicsXG4gICAgJ2Zsb3cnLCAnZmxvd1JpZ2h0JywgJ2Zyb21QYWlycycsICdpbnZlcnQnLCAnaXRlcmF0ZWUnLCAnbWVtb2l6ZScsICdtZXRob2QnLFxuICAgICdtZXRob2RPZicsICdtaXhpbicsICdvdmVyJywgJ292ZXJFdmVyeScsICdvdmVyU29tZScsICdyZXN0JywgJ3JldmVyc2UnLFxuICAgICdyb3VuZCcsICdydW5JbkNvbnRleHQnLCAnc3ByZWFkJywgJ3RlbXBsYXRlJywgJ3RyaW0nLCAndHJpbUVuZCcsICd0cmltU3RhcnQnLFxuICAgICd1bmlxdWVJZCcsICd3b3JkcydcbiAgXSxcbiAgJzInOiBbXG4gICAgJ2FkZCcsICdhZnRlcicsICdhcnknLCAnYXNzaWduJywgJ2Fzc2lnbkluJywgJ2F0JywgJ2JlZm9yZScsICdiaW5kJywgJ2JpbmRBbGwnLFxuICAgICdiaW5kS2V5JywgJ2NodW5rJywgJ2Nsb25lRGVlcFdpdGgnLCAnY2xvbmVXaXRoJywgJ2NvbmNhdCcsICdjb3VudEJ5JywgJ2N1cnJ5TicsXG4gICAgJ2N1cnJ5UmlnaHROJywgJ2RlYm91bmNlJywgJ2RlZmF1bHRzJywgJ2RlZmF1bHRzRGVlcCcsICdkZWxheScsICdkaWZmZXJlbmNlJyxcbiAgICAnZGl2aWRlJywgJ2Ryb3AnLCAnZHJvcFJpZ2h0JywgJ2Ryb3BSaWdodFdoaWxlJywgJ2Ryb3BXaGlsZScsICdlbmRzV2l0aCcsXG4gICAgJ2VxJywgJ2V2ZXJ5JywgJ2ZpbHRlcicsICdmaW5kJywgJ2ZpbmQnLCAnZmluZEluZGV4JywgJ2ZpbmRLZXknLCAnZmluZExhc3QnLFxuICAgICdmaW5kTGFzdEluZGV4JywgJ2ZpbmRMYXN0S2V5JywgJ2ZsYXRNYXAnLCAnZmxhdE1hcERlZXAnLCAnZmxhdHRlbkRlcHRoJyxcbiAgICAnZm9yRWFjaCcsICdmb3JFYWNoUmlnaHQnLCAnZm9ySW4nLCAnZm9ySW5SaWdodCcsICdmb3JPd24nLCAnZm9yT3duUmlnaHQnLFxuICAgICdnZXQnLCAnZ3JvdXBCeScsICdndCcsICdndGUnLCAnaGFzJywgJ2hhc0luJywgJ2luY2x1ZGVzJywgJ2luZGV4T2YnLFxuICAgICdpbnRlcnNlY3Rpb24nLCAnaW52ZXJ0QnknLCAnaW52b2tlJywgJ2ludm9rZU1hcCcsICdpc0VxdWFsJywgJ2lzTWF0Y2gnLFxuICAgICdqb2luJywgJ2tleUJ5JywgJ2xhc3RJbmRleE9mJywgJ2x0JywgJ2x0ZScsICdtYXAnLCAnbWFwS2V5cycsICdtYXBWYWx1ZXMnLFxuICAgICdtYXRjaGVzUHJvcGVydHknLCAnbWF4QnknLCAnbWVhbkJ5JywgJ21lcmdlJywgJ21pbkJ5JywgJ211bHRpcGx5JywgJ250aCcsXG4gICAgJ29taXQnLCAnb21pdEJ5JywgJ292ZXJBcmdzJywgJ3BhZCcsICdwYWRFbmQnLCAncGFkU3RhcnQnLCAncGFyc2VJbnQnLFxuICAgICdwYXJ0aWFsJywgJ3BhcnRpYWxSaWdodCcsICdwYXJ0aXRpb24nLCAncGljaycsICdwaWNrQnknLCAncHVsbCcsICdwdWxsQWxsJyxcbiAgICAncHVsbEF0JywgJ3JhbmRvbScsICdyYW5nZScsICdyYW5nZVJpZ2h0JywgJ3JlYXJnJywgJ3JlamVjdCcsICdyZW1vdmUnLFxuICAgICdyZXBlYXQnLCAncmVzdEZyb20nLCAncmVzdWx0JywgJ3NhbXBsZVNpemUnLCAnc29tZScsICdzb3J0QnknLCAnc29ydGVkSW5kZXgnLFxuICAgICdzb3J0ZWRJbmRleE9mJywgJ3NvcnRlZExhc3RJbmRleCcsICdzb3J0ZWRMYXN0SW5kZXhPZicsICdzb3J0ZWRVbmlxQnknLFxuICAgICdzcGxpdCcsICdzcHJlYWRGcm9tJywgJ3N0YXJ0c1dpdGgnLCAnc3VidHJhY3QnLCAnc3VtQnknLCAndGFrZScsICd0YWtlUmlnaHQnLFxuICAgICd0YWtlUmlnaHRXaGlsZScsICd0YWtlV2hpbGUnLCAndGFwJywgJ3Rocm90dGxlJywgJ3RocnUnLCAndGltZXMnLCAndHJpbUNoYXJzJyxcbiAgICAndHJpbUNoYXJzRW5kJywgJ3RyaW1DaGFyc1N0YXJ0JywgJ3RydW5jYXRlJywgJ3VuaW9uJywgJ3VuaXFCeScsICd1bmlxV2l0aCcsXG4gICAgJ3Vuc2V0JywgJ3VuemlwV2l0aCcsICd3aXRob3V0JywgJ3dyYXAnLCAneG9yJywgJ3ppcCcsICd6aXBPYmplY3QnLFxuICAgICd6aXBPYmplY3REZWVwJ1xuICBdLFxuICAnMyc6IFtcbiAgICAnYXNzaWduSW5XaXRoJywgJ2Fzc2lnbldpdGgnLCAnY2xhbXAnLCAnZGlmZmVyZW5jZUJ5JywgJ2RpZmZlcmVuY2VXaXRoJyxcbiAgICAnZ2V0T3InLCAnaW5SYW5nZScsICdpbnRlcnNlY3Rpb25CeScsICdpbnRlcnNlY3Rpb25XaXRoJywgJ2ludm9rZUFyZ3MnLFxuICAgICdpbnZva2VBcmdzTWFwJywgJ2lzRXF1YWxXaXRoJywgJ2lzTWF0Y2hXaXRoJywgJ2ZsYXRNYXBEZXB0aCcsICdtZXJnZVdpdGgnLFxuICAgICdvcmRlckJ5JywgJ3BhZENoYXJzJywgJ3BhZENoYXJzRW5kJywgJ3BhZENoYXJzU3RhcnQnLCAncHVsbEFsbEJ5JyxcbiAgICAncHVsbEFsbFdpdGgnLCAncmVkdWNlJywgJ3JlZHVjZVJpZ2h0JywgJ3JlcGxhY2UnLCAnc2V0JywgJ3NsaWNlJyxcbiAgICAnc29ydGVkSW5kZXhCeScsICdzb3J0ZWRMYXN0SW5kZXhCeScsICd0cmFuc2Zvcm0nLCAndW5pb25CeScsICd1bmlvbldpdGgnLFxuICAgICd1cGRhdGUnLCAneG9yQnknLCAneG9yV2l0aCcsICd6aXBXaXRoJ1xuICBdLFxuICAnNCc6IFtcbiAgICAnZmlsbCcsICdzZXRXaXRoJywgJ3VwZGF0ZVdpdGgnXG4gIF1cbn07XG5cbi8qKiBVc2VkIHRvIG1hcCBhcnkgdG8gcmVhcmcgY29uZmlncy4gKi9cbmV4cG9ydHMuYXJ5UmVhcmcgPSB7XG4gICcyJzogWzEsIDBdLFxuICAnMyc6IFsyLCAwLCAxXSxcbiAgJzQnOiBbMywgMiwgMCwgMV1cbn07XG5cbi8qKiBVc2VkIHRvIG1hcCBtZXRob2QgbmFtZXMgdG8gdGhlaXIgaXRlcmF0ZWUgYXJ5LiAqL1xuZXhwb3J0cy5pdGVyYXRlZUFyeSA9IHtcbiAgJ2Ryb3BSaWdodFdoaWxlJzogMSxcbiAgJ2Ryb3BXaGlsZSc6IDEsXG4gICdldmVyeSc6IDEsXG4gICdmaWx0ZXInOiAxLFxuICAnZmluZCc6IDEsXG4gICdmaW5kSW5kZXgnOiAxLFxuICAnZmluZEtleSc6IDEsXG4gICdmaW5kTGFzdCc6IDEsXG4gICdmaW5kTGFzdEluZGV4JzogMSxcbiAgJ2ZpbmRMYXN0S2V5JzogMSxcbiAgJ2ZsYXRNYXAnOiAxLFxuICAnZmxhdE1hcERlZXAnOiAxLFxuICAnZmxhdE1hcERlcHRoJzogMSxcbiAgJ2ZvckVhY2gnOiAxLFxuICAnZm9yRWFjaFJpZ2h0JzogMSxcbiAgJ2ZvckluJzogMSxcbiAgJ2ZvckluUmlnaHQnOiAxLFxuICAnZm9yT3duJzogMSxcbiAgJ2Zvck93blJpZ2h0JzogMSxcbiAgJ21hcCc6IDEsXG4gICdtYXBLZXlzJzogMSxcbiAgJ21hcFZhbHVlcyc6IDEsXG4gICdwYXJ0aXRpb24nOiAxLFxuICAncmVkdWNlJzogMixcbiAgJ3JlZHVjZVJpZ2h0JzogMixcbiAgJ3JlamVjdCc6IDEsXG4gICdyZW1vdmUnOiAxLFxuICAnc29tZSc6IDEsXG4gICd0YWtlUmlnaHRXaGlsZSc6IDEsXG4gICd0YWtlV2hpbGUnOiAxLFxuICAndGltZXMnOiAxLFxuICAndHJhbnNmb3JtJzogMlxufTtcblxuLyoqIFVzZWQgdG8gbWFwIG1ldGhvZCBuYW1lcyB0byBpdGVyYXRlZSByZWFyZyBjb25maWdzLiAqL1xuZXhwb3J0cy5pdGVyYXRlZVJlYXJnID0ge1xuICAnbWFwS2V5cyc6IFsxXVxufTtcblxuLyoqIFVzZWQgdG8gbWFwIG1ldGhvZCBuYW1lcyB0byByZWFyZyBjb25maWdzLiAqL1xuZXhwb3J0cy5tZXRob2RSZWFyZyA9IHtcbiAgJ2Fzc2lnbkluV2l0aCc6IFsxLCAyLCAwXSxcbiAgJ2Fzc2lnbldpdGgnOiBbMSwgMiwgMF0sXG4gICdnZXRPcic6IFsyLCAxLCAwXSxcbiAgJ2lzRXF1YWxXaXRoJzogWzEsIDIsIDBdLFxuICAnaXNNYXRjaFdpdGgnOiBbMiwgMSwgMF0sXG4gICdtZXJnZVdpdGgnOiBbMSwgMiwgMF0sXG4gICdwYWRDaGFycyc6IFsyLCAxLCAwXSxcbiAgJ3BhZENoYXJzRW5kJzogWzIsIDEsIDBdLFxuICAncGFkQ2hhcnNTdGFydCc6IFsyLCAxLCAwXSxcbiAgJ3B1bGxBbGxCeSc6IFsyLCAxLCAwXSxcbiAgJ3B1bGxBbGxXaXRoJzogWzIsIDEsIDBdLFxuICAnc2V0V2l0aCc6IFszLCAxLCAyLCAwXSxcbiAgJ3NvcnRlZEluZGV4QnknOiBbMiwgMSwgMF0sXG4gICdzb3J0ZWRMYXN0SW5kZXhCeSc6IFsyLCAxLCAwXSxcbiAgJ3VwZGF0ZVdpdGgnOiBbMywgMSwgMiwgMF0sXG4gICd6aXBXaXRoJzogWzEsIDIsIDBdXG59O1xuXG4vKiogVXNlZCB0byBtYXAgbWV0aG9kIG5hbWVzIHRvIHNwcmVhZCBjb25maWdzLiAqL1xuZXhwb3J0cy5tZXRob2RTcHJlYWQgPSB7XG4gICdpbnZva2VBcmdzJzogMixcbiAgJ2ludm9rZUFyZ3NNYXAnOiAyLFxuICAncGFydGlhbCc6IDEsXG4gICdwYXJ0aWFsUmlnaHQnOiAxLFxuICAnd2l0aG91dCc6IDFcbn07XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IG1ldGhvZHMgd2hpY2ggbXV0YXRlIGFycmF5cyBvciBvYmplY3RzLiAqL1xuZXhwb3J0cy5tdXRhdGUgPSB7XG4gICdhcnJheSc6IHtcbiAgICAnZmlsbCc6IHRydWUsXG4gICAgJ3B1bGwnOiB0cnVlLFxuICAgICdwdWxsQWxsJzogdHJ1ZSxcbiAgICAncHVsbEFsbEJ5JzogdHJ1ZSxcbiAgICAncHVsbEFsbFdpdGgnOiB0cnVlLFxuICAgICdwdWxsQXQnOiB0cnVlLFxuICAgICdyZW1vdmUnOiB0cnVlLFxuICAgICdyZXZlcnNlJzogdHJ1ZVxuICB9LFxuICAnb2JqZWN0Jzoge1xuICAgICdhc3NpZ24nOiB0cnVlLFxuICAgICdhc3NpZ25Jbic6IHRydWUsXG4gICAgJ2Fzc2lnbkluV2l0aCc6IHRydWUsXG4gICAgJ2Fzc2lnbldpdGgnOiB0cnVlLFxuICAgICdkZWZhdWx0cyc6IHRydWUsXG4gICAgJ2RlZmF1bHRzRGVlcCc6IHRydWUsXG4gICAgJ21lcmdlJzogdHJ1ZSxcbiAgICAnbWVyZ2VXaXRoJzogdHJ1ZVxuICB9LFxuICAnc2V0Jzoge1xuICAgICdzZXQnOiB0cnVlLFxuICAgICdzZXRXaXRoJzogdHJ1ZSxcbiAgICAndW5zZXQnOiB0cnVlLFxuICAgICd1cGRhdGUnOiB0cnVlLFxuICAgICd1cGRhdGVXaXRoJzogdHJ1ZVxuICB9XG59O1xuXG4vKiogVXNlZCB0byB0cmFjayBtZXRob2RzIHdpdGggcGxhY2Vob2xkZXIgc3VwcG9ydCAqL1xuZXhwb3J0cy5wbGFjZWhvbGRlciA9IHtcbiAgJ2JpbmQnOiB0cnVlLFxuICAnYmluZEtleSc6IHRydWUsXG4gICdjdXJyeSc6IHRydWUsXG4gICdjdXJyeVJpZ2h0JzogdHJ1ZSxcbiAgJ3BhcnRpYWwnOiB0cnVlLFxuICAncGFydGlhbFJpZ2h0JzogdHJ1ZVxufTtcblxuLyoqIFVzZWQgdG8gbWFwIHJlYWwgbmFtZXMgdG8gdGhlaXIgYWxpYXNlcy4gKi9cbmV4cG9ydHMucmVhbFRvQWxpYXMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICBvYmplY3QgPSBleHBvcnRzLmFsaWFzVG9SZWFsLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIHZhciB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwgdmFsdWUpKSB7XG4gICAgICByZXN1bHRbdmFsdWVdLnB1c2goa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3ZhbHVlXSA9IFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSgpKTtcblxuLyoqIFVzZWQgdG8gbWFwIG1ldGhvZCBuYW1lcyB0byBvdGhlciBuYW1lcy4gKi9cbmV4cG9ydHMucmVtYXAgPSB7XG4gICdjdXJyeU4nOiAnY3VycnknLFxuICAnY3VycnlSaWdodE4nOiAnY3VycnlSaWdodCcsXG4gICdnZXRPcic6ICdnZXQnLFxuICAnaW52b2tlQXJncyc6ICdpbnZva2UnLFxuICAnaW52b2tlQXJnc01hcCc6ICdpbnZva2VNYXAnLFxuICAncGFkQ2hhcnMnOiAncGFkJyxcbiAgJ3BhZENoYXJzRW5kJzogJ3BhZEVuZCcsXG4gICdwYWRDaGFyc1N0YXJ0JzogJ3BhZFN0YXJ0JyxcbiAgJ3Jlc3RGcm9tJzogJ3Jlc3QnLFxuICAnc3ByZWFkRnJvbSc6ICdzcHJlYWQnLFxuICAndHJpbUNoYXJzJzogJ3RyaW0nLFxuICAndHJpbUNoYXJzRW5kJzogJ3RyaW1FbmQnLFxuICAndHJpbUNoYXJzU3RhcnQnOiAndHJpbVN0YXJ0J1xufTtcblxuLyoqIFVzZWQgdG8gdHJhY2sgbWV0aG9kcyB0aGF0IHNraXAgZml4aW5nIHRoZWlyIGFyaXR5LiAqL1xuZXhwb3J0cy5za2lwRml4ZWQgPSB7XG4gICdjYXN0QXJyYXknOiB0cnVlLFxuICAnZmxvdyc6IHRydWUsXG4gICdmbG93UmlnaHQnOiB0cnVlLFxuICAnaXRlcmF0ZWUnOiB0cnVlLFxuICAnbWl4aW4nOiB0cnVlLFxuICAncnVuSW5Db250ZXh0JzogdHJ1ZVxufTtcblxuLyoqIFVzZWQgdG8gdHJhY2sgbWV0aG9kcyB0aGF0IHNraXAgcmVhcnJhbmdpbmcgYXJndW1lbnRzLiAqL1xuZXhwb3J0cy5za2lwUmVhcmcgPSB7XG4gICdhZGQnOiB0cnVlLFxuICAnYXNzaWduJzogdHJ1ZSxcbiAgJ2Fzc2lnbkluJzogdHJ1ZSxcbiAgJ2JpbmQnOiB0cnVlLFxuICAnYmluZEtleSc6IHRydWUsXG4gICdjb25jYXQnOiB0cnVlLFxuICAnZGlmZmVyZW5jZSc6IHRydWUsXG4gICdkaXZpZGUnOiB0cnVlLFxuICAnZXEnOiB0cnVlLFxuICAnZ3QnOiB0cnVlLFxuICAnZ3RlJzogdHJ1ZSxcbiAgJ2lzRXF1YWwnOiB0cnVlLFxuICAnbHQnOiB0cnVlLFxuICAnbHRlJzogdHJ1ZSxcbiAgJ21hdGNoZXNQcm9wZXJ0eSc6IHRydWUsXG4gICdtZXJnZSc6IHRydWUsXG4gICdtdWx0aXBseSc6IHRydWUsXG4gICdvdmVyQXJncyc6IHRydWUsXG4gICdwYXJ0aWFsJzogdHJ1ZSxcbiAgJ3BhcnRpYWxSaWdodCc6IHRydWUsXG4gICdyYW5kb20nOiB0cnVlLFxuICAncmFuZ2UnOiB0cnVlLFxuICAncmFuZ2VSaWdodCc6IHRydWUsXG4gICdzdWJ0cmFjdCc6IHRydWUsXG4gICd3aXRob3V0JzogdHJ1ZSxcbiAgJ3ppcCc6IHRydWUsXG4gICd6aXBPYmplY3QnOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
