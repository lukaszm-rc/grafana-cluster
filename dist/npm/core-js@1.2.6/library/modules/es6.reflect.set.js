'use strict';

System.register([], function (_export, _context) {
  var $, has, $export, createDesc, anObject, isObject;

  function set(target, propertyKey, V) {
    var receiver = arguments.length < 4 ? target : arguments[3],
        ownDesc = $.getDesc(anObject(target), propertyKey),
        existingDescriptor,
        proto;
    if (!ownDesc) {
      if (isObject(proto = $.getProto(target))) {
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if (has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver)) return false;
      existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      $.setDesc(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
  return {
    setters: [],
    execute: function () {
      $ = require('./$');
      has = require('./$.has');
      $export = require('./$.export');
      createDesc = require('./$.property-desc');
      anObject = require('./$.an-object');
      isObject = require('./$.is-object');
      $export($export.S, 'Reflect', { set: set });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQSxXQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLFdBQXJCLEVBQWtDLENBQWxDLEVBQXFDO0FBQ25DLFFBQUksV0FBVyxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsTUFBdkIsR0FBZ0MsVUFBVSxDQUFWLENBQWhDO1FBQ1gsVUFBVSxFQUFFLE9BQUYsQ0FBVSxTQUFTLE1BQVQsQ0FBVixFQUE0QixXQUE1QixDQUFWO1FBQ0Esa0JBRko7UUFHSSxLQUhKLENBRG1DO0FBS25DLFFBQUksQ0FBQyxPQUFELEVBQVU7QUFDWixVQUFJLFNBQVMsUUFBUSxFQUFFLFFBQUYsQ0FBVyxNQUFYLENBQVIsQ0FBYixFQUEwQztBQUN4QyxlQUFPLElBQUksS0FBSixFQUFXLFdBQVgsRUFBd0IsQ0FBeEIsRUFBMkIsUUFBM0IsQ0FBUCxDQUR3QztPQUExQztBQUdBLGdCQUFVLFdBQVcsQ0FBWCxDQUFWLENBSlk7S0FBZDtBQU1BLFFBQUksSUFBSSxPQUFKLEVBQWEsT0FBYixDQUFKLEVBQTJCO0FBQ3pCLFVBQUksUUFBUSxRQUFSLEtBQXFCLEtBQXJCLElBQThCLENBQUMsU0FBUyxRQUFULENBQUQsRUFDaEMsT0FBTyxLQUFQLENBREY7QUFFQSwyQkFBcUIsRUFBRSxPQUFGLENBQVUsUUFBVixFQUFvQixXQUFwQixLQUFvQyxXQUFXLENBQVgsQ0FBcEMsQ0FISTtBQUl6Qix5QkFBbUIsS0FBbkIsR0FBMkIsQ0FBM0IsQ0FKeUI7QUFLekIsUUFBRSxPQUFGLENBQVUsUUFBVixFQUFvQixXQUFwQixFQUFpQyxrQkFBakMsRUFMeUI7QUFNekIsYUFBTyxJQUFQLENBTnlCO0tBQTNCO0FBUUEsV0FBTyxRQUFRLEdBQVIsS0FBZ0IsU0FBaEIsR0FBNEIsS0FBNUIsSUFBcUMsUUFBUSxHQUFSLENBQVksSUFBWixDQUFpQixRQUFqQixFQUEyQixDQUEzQixHQUErQixJQUEvQixDQUFyQyxDQW5CNEI7R0FBckM7Ozs7QUFOSSxVQUFJLFFBQVEsS0FBUjtBQUNKLFlBQU0sUUFBUSxTQUFSO0FBQ04sZ0JBQVUsUUFBUSxZQUFSO0FBQ1YsbUJBQWEsUUFBUSxtQkFBUjtBQUNiLGlCQUFXLFFBQVEsZUFBUjtBQUNYLGlCQUFXLFFBQVEsZUFBUjtBQXNCZixjQUFRLFFBQVEsQ0FBUixFQUFXLFNBQW5CLEVBQThCLEVBQUMsS0FBSyxHQUFMLEVBQS9CIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkID0gcmVxdWlyZSgnLi8kJyksXG4gICAgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpLFxuICAgICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JyksXG4gICAgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyksXG4gICAgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVikge1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXSxcbiAgICAgIG93bkRlc2MgPSAkLmdldERlc2MoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpLFxuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLFxuICAgICAgcHJvdG87XG4gIGlmICghb3duRGVzYykge1xuICAgIGlmIChpc09iamVjdChwcm90byA9ICQuZ2V0UHJvdG8odGFyZ2V0KSkpIHtcbiAgICAgIHJldHVybiBzZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XG4gICAgfVxuICAgIG93bkRlc2MgPSBjcmVhdGVEZXNjKDApO1xuICB9XG4gIGlmIChoYXMob3duRGVzYywgJ3ZhbHVlJykpIHtcbiAgICBpZiAob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSAkLmdldERlc2MocmVjZWl2ZXIsIHByb3BlcnR5S2V5KSB8fCBjcmVhdGVEZXNjKDApO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XG4gICAgJC5zZXREZXNjKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcbn1cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtzZXQ6IHNldH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
