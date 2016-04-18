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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L2ZuL3N0cmluZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsY0FBUSwwQ0FBUjtBQUNBLGNBQVEsOEJBQVI7QUFDQSxjQUFRLCtCQUFSO0FBQ0EsY0FBUSxtQ0FBUjtBQUNBLGNBQVEsd0NBQVI7QUFDQSxjQUFRLG9DQUFSO0FBQ0EsY0FBUSxtQ0FBUjtBQUNBLGNBQVEsaUNBQVI7QUFDQSxjQUFRLHNDQUFSO0FBQ0EsY0FBUSxnQ0FBUjtBQUNBLGNBQVEsa0NBQVI7QUFDQSxjQUFRLGlDQUFSO0FBQ0EsY0FBUSxnQ0FBUjtBQUNBLGNBQVEsNkJBQVI7QUFDQSxjQUFRLG1DQUFSO0FBQ0EsY0FBUSxvQ0FBUjtBQUNBLGNBQVEsb0NBQVI7QUFDQSxjQUFRLHFDQUFSO0FBQ0EsY0FBUSx1Q0FBUjtBQUNBLGNBQVEseUNBQVI7QUFDQSxhQUFPLE9BQVAsR0FBaUIsUUFBUSxzQkFBUixFQUFnQyxNQUFoQyIsImZpbGUiOiJucG0vY29yZS1qc0AxLjIuNi9mbi9zdHJpbmcvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5yYXcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy50cmltJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zdHJpbmcuYXQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtbGVmdCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5zdHJpbmcuZXNjYXBlLWh0bWwnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvY29yZS5zdHJpbmcudW5lc2NhcGUtaHRtbCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLlN0cmluZztcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
