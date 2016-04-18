'use strict';

System.register(['./components/logs', './components/stream', './components/config', '@etk/jsonrpc'], function (_export, _context) {
  var LogsPageCtrl, StreamPageCtrl, ExampleAppConfigCtrl, jsonrpc;
  return {
    setters: [function (_componentsLogs) {
      LogsPageCtrl = _componentsLogs.LogsPageCtrl;
    }, function (_componentsStream) {
      StreamPageCtrl = _componentsStream.StreamPageCtrl;
    }, function (_componentsConfig) {
      ExampleAppConfigCtrl = _componentsConfig.ExampleAppConfigCtrl;
    }, function (_etkJsonrpc) {
      jsonrpc = _etkJsonrpc.default;
    }],
    execute: function () {
      _export('ConfigCtrl', ExampleAppConfigCtrl);

      _export('StreamPageCtrl', StreamPageCtrl);

      _export('LogsPageCtrl', LogsPageCtrl);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBUTs7QUFDQTs7QUFDQTs7QUFDRDs7OzRCQUVMOztnQ0FDQTs7OEJBQ0EiLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dzUGFnZUN0cmx9IGZyb20gJy4vY29tcG9uZW50cy9sb2dzJztcbmltcG9ydCB7U3RyZWFtUGFnZUN0cmx9IGZyb20gJy4vY29tcG9uZW50cy9zdHJlYW0nO1xuaW1wb3J0IHtFeGFtcGxlQXBwQ29uZmlnQ3RybH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbmZpZyc7XG5pbXBvcnQganNvbnJwYyBmcm9tICdAZXRrL2pzb25ycGMnO1xuZXhwb3J0IHtcbiAgRXhhbXBsZUFwcENvbmZpZ0N0cmwgYXMgQ29uZmlnQ3RybCxcbiAgU3RyZWFtUGFnZUN0cmwsIC8vTWF0Y2hlcyBwYWdlcy5jb21wb25lbnQgaW4gcGx1Z2luLmpzb25cbiAgTG9nc1BhZ2VDdHJsIC8vTWF0Y2hlcyBwYWdlcy5jb21wb25lbnQgaW4gcGx1Z2luLmpzb25cbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
