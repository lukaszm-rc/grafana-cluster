'use strict';

System.register([], function (_export, _context) {
  var $, $export, $ctx, $Array, statics, setStatics;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      $export = require('./$.export');
      $ctx = require('./$.ctx');
      $Array = require('./$.core').Array || Array;
      statics = {};

      setStatics = function setStatics(keys, length) {
        $.each.call(keys.split(','), function (key) {
          if (length == undefined && key in $Array) statics[key] = $Array[key];else if (key in []) statics[key] = $ctx(Function.call, [][key], length);
        });
      };

      setStatics('pop,reverse,shift,keys,values,entries', 1);
      setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
      setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' + 'reduce,reduceRight,copyWithin,fill');
      $export($export.S, 'Array', statics);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvanMuYXJyYXkuc3RhdGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0ksVUFBSSxRQUFRLEtBQVI7QUFDSixnQkFBVSxRQUFRLFlBQVI7QUFDVixhQUFPLFFBQVEsU0FBUjtBQUNQLGVBQVMsUUFBUSxVQUFSLEVBQW9CLEtBQXBCLElBQTZCLEtBQTdCO0FBQ1QsZ0JBQVU7O0FBQ1YsbUJBQWEsU0FBYixVQUFhLENBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUI7QUFDdEMsVUFBRSxJQUFGLENBQU8sSUFBUCxDQUFZLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBWixFQUE2QixVQUFTLEdBQVQsRUFBYztBQUN6QyxjQUFJLFVBQVUsU0FBVixJQUF1QixPQUFPLE1BQVAsRUFDekIsUUFBUSxHQUFSLElBQWUsT0FBTyxHQUFQLENBQWYsQ0FERixLQUVLLElBQUksT0FBTyxFQUFQLEVBQ1AsUUFBUSxHQUFSLElBQWUsS0FBSyxTQUFTLElBQVQsRUFBZSxHQUFHLEdBQUgsQ0FBcEIsRUFBNkIsTUFBN0IsQ0FBZixDQURHO1NBSHNCLENBQTdCLENBRHNDO09BQXZCOztBQVFqQixpQkFBVyx1Q0FBWCxFQUFvRCxDQUFwRDtBQUNBLGlCQUFXLCtEQUFYLEVBQTRFLENBQTVFO0FBQ0EsaUJBQVcsNERBQTRELG9DQUE1RCxDQUFYO0FBQ0EsY0FBUSxRQUFRLENBQVIsRUFBVyxPQUFuQixFQUE0QixPQUE1QiIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9tb2R1bGVzL2pzLmFycmF5LnN0YXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAkY3R4ID0gcmVxdWlyZSgnLi8kLmN0eCcpLFxuICAgICRBcnJheSA9IHJlcXVpcmUoJy4vJC5jb3JlJykuQXJyYXkgfHwgQXJyYXksXG4gICAgc3RhdGljcyA9IHt9O1xudmFyIHNldFN0YXRpY3MgPSBmdW5jdGlvbihrZXlzLCBsZW5ndGgpIHtcbiAgJC5lYWNoLmNhbGwoa2V5cy5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAobGVuZ3RoID09IHVuZGVmaW5lZCAmJiBrZXkgaW4gJEFycmF5KVxuICAgICAgc3RhdGljc1trZXldID0gJEFycmF5W2tleV07XG4gICAgZWxzZSBpZiAoa2V5IGluIFtdKVxuICAgICAgc3RhdGljc1trZXldID0gJGN0eChGdW5jdGlvbi5jYWxsLCBbXVtrZXldLCBsZW5ndGgpO1xuICB9KTtcbn07XG5zZXRTdGF0aWNzKCdwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzJywgMSk7XG5zZXRTdGF0aWNzKCdpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzJywgMyk7XG5zZXRTdGF0aWNzKCdqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsJyArICdyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsJyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5Jywgc3RhdGljcyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
