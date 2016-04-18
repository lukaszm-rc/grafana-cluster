import {LogsPageCtrl} from './components/logs';
import {StreamPageCtrl} from './components/stream';
import {ExampleAppConfigCtrl} from './components/config';
import jsonrpc from '@etk/jsonrpc';
export {
  ExampleAppConfigCtrl as ConfigCtrl,
  StreamPageCtrl, //Matches pages.component in plugin.json
  LogsPageCtrl //Matches pages.component in plugin.json
};
