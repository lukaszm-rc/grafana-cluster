let instance = null;
import jsonrpc from "@etk/jsonrpc";
export class ClusterApiClient {
    static ws;
    static serverAddress;
    static connectionStatus;
    static messages;

    constructor() {
        return ClusterApiClient.getInstance();
    }

    static getInstance() {
        if (!instance) {
            instance = new ClusterApiClient();
        }
        return instance;
    }

    static get getConnectionStatus() {
        return ClusterApiClient.connectionStatus;
    }

    static _handleEvent(event, connectionClosed, reconnect) {
        if (connectionClosed) {
            ClusterApiClient.connectionStatus = 0;
            if (reconnect) {
                ClusterApiClient.reconnectService = setTimeout(ClusterApiClient.connect, 5000);
            }
        }

    }

    static connect() {
        ClusterApiClient.ws = new WebSocket(ClusterApiClient.serverAddress);
        ClusterApiClient.ws
            .on("open", e => ClusterApiClient.connectionStatus = 1)
            .on("close", e => ClusterApiClient._handleEvent(e, true, false))
            .on("error", e => ClusterApiClient._handleEvent(e, true, false))
            .on("message", e => {
                var json = jsonrpc.parse(e);
                console.error(json.toString());
            });
    }

    static send(jsonrpcObject, callback) {
        ClusterApiClient.messages[jsonrpcObject.id] = callback;
        ClusterApiClient.ws.send(jsonrpcObject.toString(), (err) => console.error(err));
    }
}