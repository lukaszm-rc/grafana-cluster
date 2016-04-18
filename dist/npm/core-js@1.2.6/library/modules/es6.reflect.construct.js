'use strict';

System.register([], function (_export, _context) {
  var $, $export, aFunction, anObject, isObject, bind;
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      $export = require('./$.export');
      aFunction = require('./$.a-function');
      anObject = require('./$.an-object');
      isObject = require('./$.is-object');
      bind = Function.bind || require('./$.core').Function.prototype.bind;

      $export($export.S + $export.F * require('./$.fails')(function () {
        function F() {}
        return !(Reflect.construct(function () {}, [], F) instanceof F);
      }), 'Reflect', { construct: function construct(Target, args) {
          aFunction(Target);
          var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
          if (Target == newTarget) {
            if (args != undefined) switch (anObject(args).length) {
              case 0:
                return new Target();
              case 1:
                return new Target(args[0]);
              case 2:
                return new Target(args[0], args[1]);
              case 3:
                return new Target(args[0], args[1], args[2]);
              case 4:
                return new Target(args[0], args[1], args[2], args[3]);
            }
            var $args = [null];
            $args.push.apply($args, args);
            return new (bind.apply(Target, $args))();
          }
          var proto = newTarget.prototype,
              instance = $.create(isObject(proto) ? proto : Object.prototype),
              result = Function.apply.call(Target, instance, args);
          return isObject(result) ? result : instance;
        } });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLFVBQUksUUFBUSxLQUFSO0FBQ0osZ0JBQVUsUUFBUSxZQUFSO0FBQ1Ysa0JBQVksUUFBUSxnQkFBUjtBQUNaLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGFBQU8sU0FBUyxJQUFULElBQWlCLFFBQVEsVUFBUixFQUFvQixRQUFwQixDQUE2QixTQUE3QixDQUF1QyxJQUF2Qzs7QUFDNUIsY0FBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxRQUFRLFdBQVIsRUFBcUIsWUFBVztBQUM5RCxpQkFBUyxDQUFULEdBQWEsRUFBYjtBQUNBLGVBQU8sRUFBRSxRQUFRLFNBQVIsQ0FBa0IsWUFBVyxFQUFYLEVBQWUsRUFBakMsRUFBcUMsQ0FBckMsYUFBbUQsQ0FBbkQsQ0FBRixDQUZ1RDtPQUFYLENBQWpDLEVBR2hCLFNBSEosRUFHZSxFQUFDLFdBQVcsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCLElBQTNCLEVBQWlDO0FBQ3hELG9CQUFVLE1BQVYsRUFEd0Q7QUFFeEQsY0FBSSxZQUFZLFVBQVUsTUFBVixHQUFtQixDQUFuQixHQUF1QixNQUF2QixHQUFnQyxVQUFVLFVBQVUsQ0FBVixDQUFWLENBQWhDLENBRndDO0FBR3hELGNBQUksVUFBVSxTQUFWLEVBQXFCO0FBQ3ZCLGdCQUFJLFFBQVEsU0FBUixFQUNGLFFBQVEsU0FBUyxJQUFULEVBQWUsTUFBZjtBQUNOLG1CQUFLLENBQUw7QUFDRSx1QkFBTyxJQUFJLE1BQUosRUFBUCxDQURGO0FBREYsbUJBR08sQ0FBTDtBQUNFLHVCQUFPLElBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxDQUFYLENBQVAsQ0FERjtBQUhGLG1CQUtPLENBQUw7QUFDRSx1QkFBTyxJQUFJLE1BQUosQ0FBVyxLQUFLLENBQUwsQ0FBWCxFQUFvQixLQUFLLENBQUwsQ0FBcEIsQ0FBUCxDQURGO0FBTEYsbUJBT08sQ0FBTDtBQUNFLHVCQUFPLElBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxDQUFYLEVBQW9CLEtBQUssQ0FBTCxDQUFwQixFQUE2QixLQUFLLENBQUwsQ0FBN0IsQ0FBUCxDQURGO0FBUEYsbUJBU08sQ0FBTDtBQUNFLHVCQUFPLElBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxDQUFYLEVBQW9CLEtBQUssQ0FBTCxDQUFwQixFQUE2QixLQUFLLENBQUwsQ0FBN0IsRUFBc0MsS0FBSyxDQUFMLENBQXRDLENBQVAsQ0FERjtBQVRGLGFBREY7QUFhQSxnQkFBSSxRQUFRLENBQUMsSUFBRCxDQUFSLENBZG1CO0FBZXZCLGtCQUFNLElBQU4sQ0FBVyxLQUFYLENBQWlCLEtBQWpCLEVBQXdCLElBQXhCLEVBZnVCO0FBZ0J2QixtQkFBTyxLQUFLLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsS0FBbkIsRUFBTCxFQUFQLENBaEJ1QjtXQUF6QjtBQWtCQSxjQUFJLFFBQVEsVUFBVSxTQUFWO2NBQ1IsV0FBVyxFQUFFLE1BQUYsQ0FBUyxTQUFTLEtBQVQsSUFBa0IsS0FBbEIsR0FBMEIsT0FBTyxTQUFQLENBQTlDO2NBQ0EsU0FBUyxTQUFTLEtBQVQsQ0FBZSxJQUFmLENBQW9CLE1BQXBCLEVBQTRCLFFBQTVCLEVBQXNDLElBQXRDLENBQVQsQ0F2Qm9EO0FBd0J4RCxpQkFBTyxTQUFTLE1BQVQsSUFBbUIsTUFBbkIsR0FBNEIsUUFBNUIsQ0F4QmlEO1NBQWpDLEVBSDNCIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpLFxuICAgIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpLFxuICAgIGJpbmQgPSBGdW5jdGlvbi5iaW5kIHx8IHJlcXVpcmUoJy4vJC5jb3JlJykuRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBGKCkge31cbiAgcmV0dXJuICEoUmVmbGVjdC5jb25zdHJ1Y3QoZnVuY3Rpb24oKSB7fSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG59KSwgJ1JlZmxlY3QnLCB7Y29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzKSB7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYgKFRhcmdldCA9PSBuZXdUYXJnZXQpIHtcbiAgICAgIGlmIChhcmdzICE9IHVuZGVmaW5lZClcbiAgICAgICAgc3dpdGNoIChhbk9iamVjdChhcmdzKS5sZW5ndGgpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldDtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgICAgfVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKTtcbiAgICB9XG4gICAgdmFyIHByb3RvID0gbmV3VGFyZ2V0LnByb3RvdHlwZSxcbiAgICAgICAgaW5zdGFuY2UgPSAkLmNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpLFxuICAgICAgICByZXN1bHQgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH19KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
