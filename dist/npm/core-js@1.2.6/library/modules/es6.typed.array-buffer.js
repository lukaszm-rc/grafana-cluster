/* */
'use strict';

System.register([], function (_export, _context) {
  var $export, $typed, buffer, toIndex, toLength, isObject, TYPED_ARRAY, $ArrayBuffer, $DataView, $slice, VIEW, ARRAY_BUFFER;
  return {
    setters: [],
    execute: function () {
      if (require('./$.descriptors')) {
        $export = require('./$.export');
        $typed = require('./$.typed');
        buffer = require('./$.buffer');
        toIndex = require('./$.to-index');
        toLength = require('./$.to-length');
        isObject = require('./$.is-object');
        TYPED_ARRAY = require('./$.wks')('typed_array');
        $ArrayBuffer = buffer.ArrayBuffer;
        $DataView = buffer.DataView;
        $slice = $ArrayBuffer && $ArrayBuffer.prototype.slice;
        VIEW = $typed.VIEW;
        ARRAY_BUFFER = 'ArrayBuffer';

        $export($export.G + $export.W + $export.F * !$typed.ABV, { ArrayBuffer: $ArrayBuffer });
        $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, { isView: function isView(it) {
            return isObject(it) && VIEW in it;
          } });
        $export($export.P + $export.F * require('./$.fails')(function () {
          return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
        }), ARRAY_BUFFER, { slice: function slice(start, end) {
            if ($slice !== undefined && end === undefined) return $slice.call(this, start);
            var len = this.byteLength,
                first = toIndex(start, len),
                final = toIndex(end === undefined ? len : end, len),
                result = new $ArrayBuffer(toLength(final - first)),
                viewS = new $DataView(this),
                viewT = new $DataView(result),
                index = 0;
            while (first < final) {
              viewT.setUint8(index++, viewS.getUint8(first++));
            }
            return result;
          } });
      }
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQUNBLFVBQUksUUFBUSxpQkFBUixDQUFKLEVBQWdDO0FBQzFCLGtCQUFVLFFBQVEsWUFBUixFQURnQjtBQUUxQixpQkFBUyxRQUFRLFdBQVIsRUFGaUI7QUFHMUIsaUJBQVMsUUFBUSxZQUFSLEVBSGlCO0FBSTFCLGtCQUFVLFFBQVEsY0FBUixFQUpnQjtBQUsxQixtQkFBVyxRQUFRLGVBQVIsRUFMZTtBQU0xQixtQkFBVyxRQUFRLGVBQVIsRUFOZTtBQU8xQixzQkFBYyxRQUFRLFNBQVIsRUFBbUIsYUFBbkIsRUFQWTtBQVExQix1QkFBZSxPQUFPLFdBQVAsQ0FSVztBQVMxQixvQkFBWSxPQUFPLFFBQVAsQ0FUYztBQVUxQixpQkFBUyxnQkFBZ0IsYUFBYSxTQUFiLENBQXVCLEtBQXZCLENBVkM7QUFXMUIsZUFBTyxPQUFPLElBQVAsQ0FYbUI7QUFZMUIsdUJBQWUsY0FaVzs7QUFhOUIsZ0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksQ0FBQyxPQUFPLEdBQVAsRUFBWSxFQUFDLGFBQWEsWUFBYixFQUExRCxFQWI4QjtBQWM5QixnQkFBUSxRQUFRLENBQVIsR0FBWSxRQUFRLENBQVIsR0FBWSxDQUFDLE9BQU8sTUFBUCxFQUFlLFlBQWhELEVBQThELEVBQUMsUUFBUSxTQUFTLE1BQVQsQ0FBZ0IsRUFBaEIsRUFBb0I7QUFDdkYsbUJBQU8sU0FBUyxFQUFULEtBQWdCLFFBQVEsRUFBUixDQURnRTtXQUFwQixFQUF2RSxFQWQ4QjtBQWlCOUIsZ0JBQVEsUUFBUSxDQUFSLEdBQVksUUFBUSxDQUFSLEdBQVksUUFBUSxXQUFSLEVBQXFCLFlBQVc7QUFDOUQsaUJBQU8sQ0FBQyxJQUFJLFlBQUosQ0FBaUIsQ0FBakIsRUFBb0IsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkIsU0FBN0IsRUFBd0MsVUFBeEMsQ0FEc0Q7U0FBWCxDQUFqQyxFQUVoQixZQUZKLEVBRWtCLEVBQUMsT0FBTyxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCO0FBQ2pELGdCQUFJLFdBQVcsU0FBWCxJQUF3QixRQUFRLFNBQVIsRUFDMUIsT0FBTyxPQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLEtBQWxCLENBQVAsQ0FERjtBQUVBLGdCQUFJLE1BQU0sS0FBSyxVQUFMO2dCQUNOLFFBQVEsUUFBUSxLQUFSLEVBQWUsR0FBZixDQUFSO2dCQUNBLFFBQVEsUUFBUSxRQUFRLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEIsR0FBMUIsRUFBK0IsR0FBdkMsQ0FBUjtnQkFDQSxTQUFTLElBQUksWUFBSixDQUFpQixTQUFTLFFBQVEsS0FBUixDQUExQixDQUFUO2dCQUNBLFFBQVEsSUFBSSxTQUFKLENBQWMsSUFBZCxDQUFSO2dCQUNBLFFBQVEsSUFBSSxTQUFKLENBQWMsTUFBZCxDQUFSO2dCQUNBLFFBQVEsQ0FBUixDQVQ2QztBQVVqRCxtQkFBTyxRQUFRLEtBQVIsRUFBZTtBQUNwQixvQkFBTSxRQUFOLENBQWUsT0FBZixFQUF3QixNQUFNLFFBQU4sQ0FBZSxPQUFmLENBQXhCLEVBRG9CO2FBQXRCO0FBR0EsbUJBQU8sTUFBUCxDQWJpRDtXQUEzQixFQUYxQixFQWpCOEI7T0FBaEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbid1c2Ugc3RyaWN0JztcbmlmIChyZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSkge1xuICB2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKSxcbiAgICAgICR0eXBlZCA9IHJlcXVpcmUoJy4vJC50eXBlZCcpLFxuICAgICAgYnVmZmVyID0gcmVxdWlyZSgnLi8kLmJ1ZmZlcicpLFxuICAgICAgdG9JbmRleCA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpLFxuICAgICAgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyksXG4gICAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKSxcbiAgICAgIFRZUEVEX0FSUkFZID0gcmVxdWlyZSgnLi8kLndrcycpKCd0eXBlZF9hcnJheScpLFxuICAgICAgJEFycmF5QnVmZmVyID0gYnVmZmVyLkFycmF5QnVmZmVyLFxuICAgICAgJERhdGFWaWV3ID0gYnVmZmVyLkRhdGFWaWV3LFxuICAgICAgJHNsaWNlID0gJEFycmF5QnVmZmVyICYmICRBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UsXG4gICAgICBWSUVXID0gJHR5cGVkLlZJRVcsXG4gICAgICBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICEkdHlwZWQuQUJWLCB7QXJyYXlCdWZmZXI6ICRBcnJheUJ1ZmZlcn0pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEkdHlwZWQuQ09OU1RSLCBBUlJBWV9CVUZGRVIsIHtpc1ZpZXc6IGZ1bmN0aW9uIGlzVmlldyhpdCkge1xuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiBWSUVXIGluIGl0O1xuICAgIH19KTtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIW5ldyAkQXJyYXlCdWZmZXIoMikuc2xpY2UoMSwgdW5kZWZpbmVkKS5ieXRlTGVuZ3RoO1xuICB9KSwgQVJSQVlfQlVGRkVSLCB7c2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICAgIGlmICgkc2xpY2UgIT09IHVuZGVmaW5lZCAmJiBlbmQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuICRzbGljZS5jYWxsKHRoaXMsIHN0YXJ0KTtcbiAgICAgIHZhciBsZW4gPSB0aGlzLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgZmlyc3QgPSB0b0luZGV4KHN0YXJ0LCBsZW4pLFxuICAgICAgICAgIGZpbmFsID0gdG9JbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZCwgbGVuKSxcbiAgICAgICAgICByZXN1bHQgPSBuZXcgJEFycmF5QnVmZmVyKHRvTGVuZ3RoKGZpbmFsIC0gZmlyc3QpKSxcbiAgICAgICAgICB2aWV3UyA9IG5ldyAkRGF0YVZpZXcodGhpcyksXG4gICAgICAgICAgdmlld1QgPSBuZXcgJERhdGFWaWV3KHJlc3VsdCksXG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgd2hpbGUgKGZpcnN0IDwgZmluYWwpIHtcbiAgICAgICAgdmlld1Quc2V0VWludDgoaW5kZXgrKywgdmlld1MuZ2V0VWludDgoZmlyc3QrKykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9fSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
