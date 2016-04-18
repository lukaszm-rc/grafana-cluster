'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('../../modules/es6.symbol');
      require('../../modules/es6.object.assign');
      require('../../modules/es6.object.is');
      require('../../modules/es6.object.set-prototype-of');
      require('../../modules/es6.object.to-string');
      require('../../modules/es6.object.freeze');
      require('../../modules/es6.object.seal');
      require('../../modules/es6.object.prevent-extensions');
      require('../../modules/es6.object.is-frozen');
      require('../../modules/es6.object.is-sealed');
      require('../../modules/es6.object.is-extensible');
      require('../../modules/es6.object.get-own-property-descriptor');
      require('../../modules/es6.object.get-prototype-of');
      require('../../modules/es6.object.keys');
      require('../../modules/es6.object.get-own-property-names');
      require('../../modules/es7.object.get-own-property-descriptors');
      require('../../modules/es7.object.values');
      require('../../modules/es7.object.entries');
      require('../../modules/core.object.is-object');
      require('../../modules/core.object.classof');
      require('../../modules/core.object.define');
      require('../../modules/core.object.make');
      module.exports = require('../../modules/$.core').Object;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2ZuL29iamVjdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsY0FBUSwwQkFBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLDZCQUFSO0FBQ0EsY0FBUSwyQ0FBUjtBQUNBLGNBQVEsb0NBQVI7QUFDQSxjQUFRLGlDQUFSO0FBQ0EsY0FBUSwrQkFBUjtBQUNBLGNBQVEsNkNBQVI7QUFDQSxjQUFRLG9DQUFSO0FBQ0EsY0FBUSxvQ0FBUjtBQUNBLGNBQVEsd0NBQVI7QUFDQSxjQUFRLHNEQUFSO0FBQ0EsY0FBUSwyQ0FBUjtBQUNBLGNBQVEsK0JBQVI7QUFDQSxjQUFRLGlEQUFSO0FBQ0EsY0FBUSx1REFBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLGtDQUFSO0FBQ0EsY0FBUSxxQ0FBUjtBQUNBLGNBQVEsbUNBQVI7QUFDQSxjQUFRLGtDQUFSO0FBQ0EsY0FBUSxnQ0FBUjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLHNCQUFSLEVBQWdDLE1BQWhDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2ZuL29iamVjdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzLXNlYWxlZCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9jb3JlLm9iamVjdC5pcy1vYmplY3QnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5vYmplY3QuY2xhc3NvZicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9jb3JlLm9iamVjdC5kZWZpbmUnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5vYmplY3QubWFrZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
