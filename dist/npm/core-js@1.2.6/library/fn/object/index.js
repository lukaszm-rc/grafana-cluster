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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvZm4vb2JqZWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxjQUFRLDBCQUFSO0FBQ0EsY0FBUSxpQ0FBUjtBQUNBLGNBQVEsNkJBQVI7QUFDQSxjQUFRLDJDQUFSO0FBQ0EsY0FBUSxvQ0FBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLCtCQUFSO0FBQ0EsY0FBUSw2Q0FBUjtBQUNBLGNBQVEsb0NBQVI7QUFDQSxjQUFRLG9DQUFSO0FBQ0EsY0FBUSx3Q0FBUjtBQUNBLGNBQVEsc0RBQVI7QUFDQSxjQUFRLDJDQUFSO0FBQ0EsY0FBUSwrQkFBUjtBQUNBLGNBQVEsaURBQVI7QUFDQSxjQUFRLHVEQUFSO0FBQ0EsY0FBUSxpQ0FBUjtBQUNBLGNBQVEsa0NBQVI7QUFDQSxjQUFRLHFDQUFSO0FBQ0EsY0FBUSxtQ0FBUjtBQUNBLGNBQVEsa0NBQVI7QUFDQSxjQUFRLGdDQUFSO0FBQ0EsYUFBTyxPQUFQLEdBQWlCLFFBQVEsc0JBQVIsRUFBZ0MsTUFBaEMiLCJmaWxlIjoibnBtL2NvcmUtanNAMS4yLjYvbGlicmFyeS9mbi9vYmplY3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNlYWwnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4nKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5vYmplY3QuaXMtb2JqZWN0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvcmUub2JqZWN0LmNsYXNzb2YnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5vYmplY3QuZGVmaW5lJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvcmUub2JqZWN0Lm1ha2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Q7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
