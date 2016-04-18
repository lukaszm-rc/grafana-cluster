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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9qcy5hcnJheS5zdGF0aWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSSxVQUFJLFFBQVEsS0FBUjtBQUNKLGdCQUFVLFFBQVEsWUFBUjtBQUNWLGFBQU8sUUFBUSxTQUFSO0FBQ1AsZUFBUyxRQUFRLFVBQVIsRUFBb0IsS0FBcEIsSUFBNkIsS0FBN0I7QUFDVCxnQkFBVTs7QUFDVixtQkFBYSxTQUFiLFVBQWEsQ0FBUyxJQUFULEVBQWUsTUFBZixFQUF1QjtBQUN0QyxVQUFFLElBQUYsQ0FBTyxJQUFQLENBQVksS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFaLEVBQTZCLFVBQVMsR0FBVCxFQUFjO0FBQ3pDLGNBQUksVUFBVSxTQUFWLElBQXVCLE9BQU8sTUFBUCxFQUN6QixRQUFRLEdBQVIsSUFBZSxPQUFPLEdBQVAsQ0FBZixDQURGLEtBRUssSUFBSSxPQUFPLEVBQVAsRUFDUCxRQUFRLEdBQVIsSUFBZSxLQUFLLFNBQVMsSUFBVCxFQUFlLEdBQUcsR0FBSCxDQUFwQixFQUE2QixNQUE3QixDQUFmLENBREc7U0FIc0IsQ0FBN0IsQ0FEc0M7T0FBdkI7O0FBUWpCLGlCQUFXLHVDQUFYLEVBQW9ELENBQXBEO0FBQ0EsaUJBQVcsK0RBQVgsRUFBNEUsQ0FBNUU7QUFDQSxpQkFBVyw0REFBNEQsb0NBQTVELENBQVg7QUFDQSxjQUFRLFFBQVEsQ0FBUixFQUFXLE9BQW5CLEVBQTRCLE9BQTVCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9qcy5hcnJheS5zdGF0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgJGN0eCA9IHJlcXVpcmUoJy4vJC5jdHgnKSxcbiAgICAkQXJyYXkgPSByZXF1aXJlKCcuLyQuY29yZScpLkFycmF5IHx8IEFycmF5LFxuICAgIHN0YXRpY3MgPSB7fTtcbnZhciBzZXRTdGF0aWNzID0gZnVuY3Rpb24oa2V5cywgbGVuZ3RoKSB7XG4gICQuZWFjaC5jYWxsKGtleXMuc3BsaXQoJywnKSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGxlbmd0aCA9PSB1bmRlZmluZWQgJiYga2V5IGluICRBcnJheSlcbiAgICAgIHN0YXRpY3Nba2V5XSA9ICRBcnJheVtrZXldO1xuICAgIGVsc2UgaWYgKGtleSBpbiBbXSlcbiAgICAgIHN0YXRpY3Nba2V5XSA9ICRjdHgoRnVuY3Rpb24uY2FsbCwgW11ba2V5XSwgbGVuZ3RoKTtcbiAgfSk7XG59O1xuc2V0U3RhdGljcygncG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcycsIDEpO1xuc2V0U3RhdGljcygnaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlcycsIDMpO1xuc2V0U3RhdGljcygnam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLCcgKyAncmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHN0YXRpY3MpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
