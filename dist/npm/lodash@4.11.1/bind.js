'use strict';

System.register([], function (_export, _context) {
  var createWrapper, getPlaceholder, replaceHolders, rest, BIND_FLAG, PARTIAL_FLAG, bind;
  return {
    setters: [],
    execute: function () {
      createWrapper = require('./_createWrapper');
      getPlaceholder = require('./_getPlaceholder');
      replaceHolders = require('./_replaceHolders');
      rest = require('./rest');
      BIND_FLAG = 1;
      PARTIAL_FLAG = 32;
      bind = rest(function (func, thisArg, partials) {
        var bitmask = BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getPlaceholder(bind));
          bitmask |= PARTIAL_FLAG;
        }
        return createWrapper(func, bitmask, thisArg, partials, holders);
      });

      bind.placeholder = {};
      module.exports = bind;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL2JpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLHNCQUFnQixRQUFRLGtCQUFSO0FBQ2hCLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLHVCQUFpQixRQUFRLG1CQUFSO0FBQ2pCLGFBQU8sUUFBUSxRQUFSO0FBQ1Asa0JBQVk7QUFDWixxQkFBZTtBQUNmLGFBQU8sS0FBSyxVQUFTLElBQVQsRUFBZSxPQUFmLEVBQXdCLFFBQXhCLEVBQWtDO0FBQ2hELFlBQUksVUFBVSxTQUFWLENBRDRDO0FBRWhELFlBQUksU0FBUyxNQUFULEVBQWlCO0FBQ25CLGNBQUksVUFBVSxlQUFlLFFBQWYsRUFBeUIsZUFBZSxJQUFmLENBQXpCLENBQVYsQ0FEZTtBQUVuQixxQkFBVyxZQUFYLENBRm1CO1NBQXJCO0FBSUEsZUFBTyxjQUFjLElBQWQsRUFBb0IsT0FBcEIsRUFBNkIsT0FBN0IsRUFBc0MsUUFBdEMsRUFBZ0QsT0FBaEQsQ0FBUCxDQU5nRDtPQUFsQzs7QUFRaEIsV0FBSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL2JpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBjcmVhdGVXcmFwcGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlV3JhcHBlcicpLFxuICAgIGdldFBsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9fZ2V0UGxhY2Vob2xkZXInKSxcbiAgICByZXBsYWNlSG9sZGVycyA9IHJlcXVpcmUoJy4vX3JlcGxhY2VIb2xkZXJzJyksXG4gICAgcmVzdCA9IHJlcXVpcmUoJy4vcmVzdCcpO1xudmFyIEJJTkRfRkxBRyA9IDEsXG4gICAgUEFSVElBTF9GTEFHID0gMzI7XG52YXIgYmluZCA9IHJlc3QoZnVuY3Rpb24oZnVuYywgdGhpc0FyZywgcGFydGlhbHMpIHtcbiAgdmFyIGJpdG1hc2sgPSBCSU5EX0ZMQUc7XG4gIGlmIChwYXJ0aWFscy5sZW5ndGgpIHtcbiAgICB2YXIgaG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKHBhcnRpYWxzLCBnZXRQbGFjZWhvbGRlcihiaW5kKSk7XG4gICAgYml0bWFzayB8PSBQQVJUSUFMX0ZMQUc7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVdyYXBwZXIoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMsIGhvbGRlcnMpO1xufSk7XG5iaW5kLnBsYWNlaG9sZGVyID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQ7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
