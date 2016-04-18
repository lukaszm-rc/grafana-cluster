var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';
var vendorRoot = 'jspm_packages/'
module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  vendor: vendorRoot+ '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
