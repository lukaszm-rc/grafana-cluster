import {ClusterApiClient} from './cluster-api-client';
import jsonrpc from '@etk/jsonrpc';
export class ClusterApiDataSource {

    constructor(instanceSettings, $q, backendSrv) {
        this.type = instanceSettings.type;
        this.url = instanceSettings.url;
        this.name = instanceSettings.name;
        this.q = $q;
        this.backendSrv = backendSrv;
        this.clusterApiClient = ClusterApiClient.getInstance();
    }

    // Called once per panel (graph)
    query(options) {
        var query = this.buildQueryParameters(options);

        if (query.targets.length <= 0) {
            return this.q.when([]);
        }
        var request = new jsonrpc.Request({
            resource: "annotations",
            method: "query",
            params: {"data": query},
            callback: this.mapToTextValue
        });
        this.clusterApiClient.send(request.toString());
    }

    // Required
    // Used for testing datasource in datasource configuration pange
    testDatasource() {
        return ClusterApiClient.isConnected;
    }

    annotationQuery(options) {
        var request = new jsonrpc.Request({
            resource: "annotations",
            method: "list",
            params: {"query": "annotations"},
            callback: this.mapToTextValue
        });
        this.clusterApiClient.send(request.toString());
    }

    // Optional
    // Required for templating
    metricFindQuery(options) {
        var request = new jsonrpc.Request({
            resource: "Grafana",
            method: "list",
            params: {"query": "metrics"},
            callback: this.mapToTextValue
        });
        this.clusterApiClient.send(request.toString());
    }

    mapToTextValue(result) {
        return _.map(result.data, (d, i) => {
            return {text: d, value: i};
        });
    }

    buildQueryParameters(options) {
        //remove placeholder targets
        options.targets = _.filter(options.targets, target => {
            return target.target !== 'select metric';
        });

        return options;
    }
}
