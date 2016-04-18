'use strict';

System.register([], function (_export, _context) {
  var escape, reEscape, reEvaluate, reInterpolate, templateSettings;
  return {
    setters: [],
    execute: function () {
      escape = require('./escape');
      reEscape = require('./_reEscape');
      reEvaluate = require('./_reEvaluate');
      reInterpolate = require('./_reInterpolate');
      templateSettings = {
        'escape': reEscape,
        'evaluate': reEvaluate,
        'interpolate': reInterpolate,
        'variable': '',
        'imports': { '_': { 'escape': escape } }
      };

      module.exports = templateSettings;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9sb2Rhc2hANC4xMS4xL3RlbXBsYXRlU2V0dGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJLGVBQVMsUUFBUSxVQUFSO0FBQ1QsaUJBQVcsUUFBUSxhQUFSO0FBQ1gsbUJBQWEsUUFBUSxlQUFSO0FBQ2Isc0JBQWdCLFFBQVEsa0JBQVI7QUFDaEIseUJBQW1CO0FBQ3JCLGtCQUFVLFFBQVY7QUFDQSxvQkFBWSxVQUFaO0FBQ0EsdUJBQWUsYUFBZjtBQUNBLG9CQUFZLEVBQVo7QUFDQSxtQkFBVyxFQUFDLEtBQUssRUFBQyxVQUFVLE1BQVYsRUFBTixFQUFaOzs7QUFFRixhQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6Im5wbS9sb2Rhc2hANC4xMS4xL3RlbXBsYXRlU2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciBlc2NhcGUgPSByZXF1aXJlKCcuL2VzY2FwZScpLFxuICAgIHJlRXNjYXBlID0gcmVxdWlyZSgnLi9fcmVFc2NhcGUnKSxcbiAgICByZUV2YWx1YXRlID0gcmVxdWlyZSgnLi9fcmVFdmFsdWF0ZScpLFxuICAgIHJlSW50ZXJwb2xhdGUgPSByZXF1aXJlKCcuL19yZUludGVycG9sYXRlJyk7XG52YXIgdGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgJ2VzY2FwZSc6IHJlRXNjYXBlLFxuICAnZXZhbHVhdGUnOiByZUV2YWx1YXRlLFxuICAnaW50ZXJwb2xhdGUnOiByZUludGVycG9sYXRlLFxuICAndmFyaWFibGUnOiAnJyxcbiAgJ2ltcG9ydHMnOiB7J18nOiB7J2VzY2FwZSc6IGVzY2FwZX19XG59O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZVNldHRpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
