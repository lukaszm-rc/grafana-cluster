'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      require('../../modules/es6.string.from-code-point');
      require('../../modules/es6.string.raw');
      require('../../modules/es6.string.trim');
      require('../../modules/es6.string.iterator');
      require('../../modules/es6.string.code-point-at');
      require('../../modules/es6.string.ends-with');
      require('../../modules/es6.string.includes');
      require('../../modules/es6.string.repeat');
      require('../../modules/es6.string.starts-with');
      require('../../modules/es6.regexp.match');
      require('../../modules/es6.regexp.replace');
      require('../../modules/es6.regexp.search');
      require('../../modules/es6.regexp.split');
      require('../../modules/es7.string.at');
      require('../../modules/es7.string.pad-left');
      require('../../modules/es7.string.pad-right');
      require('../../modules/es7.string.trim-left');
      require('../../modules/es7.string.trim-right');
      require('../../modules/core.string.escape-html');
      require('../../modules/core.string.unescape-html');
      module.exports = require('../../modules/$.core').String;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvZm4vc3RyaW5nL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxjQUFRLDBDQUFSO0FBQ0EsY0FBUSw4QkFBUjtBQUNBLGNBQVEsK0JBQVI7QUFDQSxjQUFRLG1DQUFSO0FBQ0EsY0FBUSx3Q0FBUjtBQUNBLGNBQVEsb0NBQVI7QUFDQSxjQUFRLG1DQUFSO0FBQ0EsY0FBUSxpQ0FBUjtBQUNBLGNBQVEsc0NBQVI7QUFDQSxjQUFRLGdDQUFSO0FBQ0EsY0FBUSxrQ0FBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLGdDQUFSO0FBQ0EsY0FBUSw2QkFBUjtBQUNBLGNBQVEsbUNBQVI7QUFDQSxjQUFRLG9DQUFSO0FBQ0EsY0FBUSxvQ0FBUjtBQUNBLGNBQVEscUNBQVI7QUFDQSxjQUFRLHVDQUFSO0FBQ0EsY0FBUSx5Q0FBUjtBQUNBLGFBQU8sT0FBUCxHQUFpQixRQUFRLHNCQUFSLEVBQWdDLE1BQWhDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L2xpYnJhcnkvZm4vc3RyaW5nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi8gXG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3RyaW5nLmF0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtcmlnaHQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvcmUuc3RyaW5nLmVzY2FwZS1odG1sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2NvcmUuc3RyaW5nLnVuZXNjYXBlLWh0bWwnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5TdHJpbmc7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
