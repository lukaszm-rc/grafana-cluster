import jsonrpc from '@etk/jsonrpc';
import {ClusterApiDataSource} from './cluster-api-datasource';
import {GenericDatasourceQueryCtrl} from './query_ctrl';

class GenericConfigCtrl {}
GenericConfigCtrl.templateUrl = 'partials/config.html';

class GenericQueryOptionsCtrl {}
GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

class GenericAnnotationsQueryCtrl {}
GenericAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'

export {
  ClusterApiDataSource as Datasource,
  GenericDatasourceQueryCtrl as QueryCtrl,
  GenericConfigCtrl as configView,
  GenericQueryOptionsCtrl as metricsQueryEditor,
  GenericAnnotationsQueryCtrl as annotationsQueryEditor
};
