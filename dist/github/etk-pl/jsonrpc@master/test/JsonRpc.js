/**
 * @author Michał Żaloudik <michal.zaloudik@redcart.pl>
 */
"use strict";

System.register([], function (_export, _context) {
	var utls, jsonrpc, assert;
	return {
		setters: [],
		execute: function () {
			utls = require('utls');
			jsonrpc = require(__dirname + '/../index.js');
			assert = require('assert');

			describe('JsonRpc', function () {
				describe('invalid input', function () {
					var messages = ['incorrect string', { incorect: 'string' }, true, '{"version" : "1", "id" : 1, "resource" : "__global__", "method": "ping", "params" : {}}', '{"version" : 1, "id" : 1, "resource" : "__global__", "method": "ping", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "id" : "1", "resource" : "__global__", "method": "ping", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "method": "ping", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "resource" : "__global__", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "resource" : "__global__", "method": "ping"}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "resource" : 1, "method": "ping", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "resource" : "__global__", "method": 1, "params" : {}}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "resource" : "__global__", "method": "ping", "params" : 1}', '{"version" : "' + jsonrpc.version + '", "method": "ping", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "resource" : "__global__", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "resource" : "__global__", "method": "ping"}', '{"version" : "' + jsonrpc.version + '", "resource" : 1, "method": "ping", "params" : {}}', '{"version" : "' + jsonrpc.version + '", "resource" : "__global__", "method": 1, "params" : {}}', '{"version" : "' + jsonrpc.version + '", "resource" : "__global__", "method": "ping", "params" : 1}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "error" : {"code":"1", "message":"msg"}}', '{"version" : "' + jsonrpc.version + '", "id" : 1, "error" : {"code":1, "message":1}}', '{"version" : "' + jsonrpc.version + '", "id" : "1", "result" : null, "error" : {"code":1, "message":"msg"}}'];
					messages.forEach(function (message, key) {
						it('parse (#' + key + ')', function () {
							assert.throws(function () {
								jsonrpc.parse(message);
							});
						});
					});
					messages.forEach(function (message, key) {
						it('hasValidSyntax (#' + key + ')', function () {
							assert.equal(jsonrpc.hasValidSyntax(message), false);
						});
					});
				});
				describe('valid input', function () {
					var messages = [JSON.stringify({
						version: jsonrpc.version,
						id: 1,
						result: null,
						error: {
							code: 1,
							message: "msg"
						}
					}), '{"version":"' + jsonrpc.version + '","id":1,"result":null}', '{"version":"' + jsonrpc.version + '","id":1,"error":{"code":1,"message":"msg"}}', '{"version":"' + jsonrpc.version + '","id":1,"resource":"__global__","method":"ping","params":{}}', '{"version":"' + jsonrpc.version + '","resource":"__global__","method":"ping","params":{}}'];
					messages.forEach(function (message, key) {
						it('parse (#' + key + ')', function () {
							assert.doesNotThrow(function () {
								jsonrpc.parse(message);
							});
						});
					});
					messages.forEach(function (message, key) {
						it('hasValidSyntax (#' + key + ')', function () {
							message = JSON.parse(message);
							assert.equal(jsonrpc.hasValidSyntax(message), true);
						});
					});
					messages.forEach(function (message, key) {
						it('parse stringify (#' + key + ')', function () {
							assert.equal(jsonrpc.parse(message).toString(), message);
						});
					});
				});
				it('new JsonRpc not allowed', function () {
					assert.throws(function () {
						new jsonrpc();
					});
				});
				it('set/getOptions', function () {
					var o = jsonrpc.getOptions(),
					    no = { autoFireCallbacks: true };
					jsonrpc.setOptions(no);
					assert.deepEqual(jsonrpc.getOptions(), no);
				});
				describe('getType', function () {
					it('valid input', function () {
						var req = new jsonrpc.Request({ method: "someMethod" }),
						    res = new jsonrpc.Response({ id: 1, result: '' }),
						    not = new jsonrpc.Notification({ method: "someMethod" });

						assert.equal(jsonrpc.getType(req.toJSON()), "request");
						assert.equal(jsonrpc.getType(res.toJSON()), "response");
						assert.equal(jsonrpc.getType(not.toJSON()), "notification");
					});
					it('invalid input', function () {
						assert.throws(function () {
							jsonrpc.getType();
						});
					});
				});
			});
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvdGVzdC9Kc29uUnBjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7Ozs7O0FBQ0ksVUFBTyxRQUFRLE1BQVI7QUFDUCxhQUFVLFFBQVEsWUFBWSxjQUFaO0FBQ2xCLFlBQVMsUUFBUSxRQUFSOztBQUNiLFlBQVMsU0FBVCxFQUFvQixZQUFNO0FBQ3pCLGFBQVMsZUFBVCxFQUEwQixZQUFNO0FBQy9CLFNBQUksV0FBVyxDQUNkLGtCQURjLEVBRWQsRUFBQyxVQUFXLFFBQVgsRUFGYSxFQUdkLElBSGMsRUFJZCx5RkFKYyxFQUtkLHVGQUxjLEVBTWQsbUJBQW1CLFFBQVEsT0FBUixHQUFrQiw0RUFBckMsRUFDQSxtQkFBbUIsUUFBUSxPQUFSLEdBQWtCLCtDQUFyQyxFQUNBLG1CQUFtQixRQUFRLE9BQVIsR0FBa0Isd0RBQXJDLEVBQ0EsbUJBQW1CLFFBQVEsT0FBUixHQUFrQiwyREFBckMsRUFDQSxtQkFBbUIsUUFBUSxPQUFSLEdBQWtCLCtEQUFyQyxFQUNBLG1CQUFtQixRQUFRLE9BQVIsR0FBa0IscUVBQXJDLEVBQ0EsbUJBQW1CLFFBQVEsT0FBUixHQUFrQix5RUFBckMsRUFDQSxtQkFBbUIsUUFBUSxPQUFSLEdBQWtCLHFDQUFyQyxFQUNBLG1CQUFtQixRQUFRLE9BQVIsR0FBa0IsOENBQXJDLEVBQ0EsbUJBQW1CLFFBQVEsT0FBUixHQUFrQixpREFBckMsRUFDQSxtQkFBbUIsUUFBUSxPQUFSLEdBQWtCLHFEQUFyQyxFQUNBLG1CQUFtQixRQUFRLE9BQVIsR0FBa0IsMkRBQXJDLEVBQ0EsbUJBQW1CLFFBQVEsT0FBUixHQUFrQiwrREFBckMsRUFDQSxtQkFBbUIsUUFBUSxPQUFSLEdBQWtCLHVEQUFyQyxFQUNBLG1CQUFtQixRQUFRLE9BQVIsR0FBa0IsaURBQXJDLEVBQ0EsbUJBQW1CLFFBQVEsT0FBUixHQUFrQix3RUFBckMsQ0FyQkcsQ0FEMkI7QUF3Qi9CLGNBQVMsT0FB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UixDQUFnQixFQUFDLFFBQVMsWUFBVCxFQUFyQixDQUFOO1VBQW9ELE1BQU0sSUFBSSxRQUFRLFFBQVIsQ0FBaUIsRUFBQyxJQUFJLENBQUosRUFBTyxRQUFTLEVBQVQsRUFBN0IsQ0FBTjtVQUFrRCxNQUFNLElBQUksUUFBUSxZQUFSLENBQXFCLEVBQUMsUUFBUyxZQUFULEVBQTFCLENBQU4sQ0FEbkY7O0FBR3ZCLGFBQU8sS0FBUCxDQUFhLFFBQVEsT0FBUixDQUFnQixJQUFJLE1BQUosRUFBaEIsQ0FBYixFQUE0QyxTQUE1QyxFQUh1QjtBQUl2QixhQUFPLEtBQVAsQ0FBYSxRQUFRLE9BQVIsQ0FBZ0IsSUFBSSxNQUFKLEVBQWhCLENBQWIsRUFBNEMsVUFBNUMsRUFKdUI7QUFLdkIsYUFBTyxLQUFQLENBQWEsUUFBUSxPQUFSLENBQWdCLElBQUksTUFBSixFQUFoQixDQUFiLEVBQTRDLGNBQTVDLEVBTHVCO01BQU4sQ0FBbEIsQ0FEeUI7QUFRekIsUUFBRyxlQUFILEVBQW9CLFlBQU07QUFDekIsYUFBTyxNQUFQLENBQWMsWUFBTTtBQUNuQixlQUFRLE9BQVIsR0FEbUI7T0FBTixDQUFkLENBRHlCO01BQU4sQ0FBcEIsQ0FSeUI7S0FBTixDQUFwQixDQW5GeUI7SUFBTixDQUFwQiIsImZpbGUiOiJnaXRodWIvZXRrLXBsL2pzb25ycGNAbWFzdGVyL3Rlc3QvSnNvblJwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNaWNoYcWCIMW7YWxvdWRpayA8bWljaGFsLnphbG91ZGlrQHJlZGNhcnQucGw+XG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIHV0bHMgPSByZXF1aXJlKCd1dGxzJyk7XG52YXIganNvbnJwYyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9pbmRleC5qcycpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuZGVzY3JpYmUoJ0pzb25ScGMnLCAoKSA9PiB7XG5cdGRlc2NyaWJlKCdpbnZhbGlkIGlucHV0JywgKCkgPT4ge1xuXHRcdHZhciBtZXNzYWdlcyA9IFtcblx0XHRcdCdpbmNvcnJlY3Qgc3RyaW5nJyxcblx0XHRcdHtpbmNvcmVjdCA6ICdzdHJpbmcnfSxcblx0XHRcdHRydWUsXG5cdFx0XHQne1widmVyc2lvblwiIDogXCIxXCIsIFwiaWRcIiA6IDEsIFwicmVzb3VyY2VcIiA6IFwiX19nbG9iYWxfX1wiLCBcIm1ldGhvZFwiOiBcInBpbmdcIiwgXCJwYXJhbXNcIiA6IHt9fScsXG5cdFx0XHQne1widmVyc2lvblwiIDogMSwgXCJpZFwiIDogMSwgXCJyZXNvdXJjZVwiIDogXCJfX2dsb2JhbF9fXCIsIFwibWV0aG9kXCI6IFwicGluZ1wiLCBcInBhcmFtc1wiIDoge319Jyxcblx0XHRcdCd7XCJ2ZXJzaW9uXCIgOiBcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsIFwiaWRcIiA6IFwiMVwiLCBcInJlc291cmNlXCIgOiBcIl9fZ2xvYmFsX19cIiwgXCJtZXRob2RcIjogXCJwaW5nXCIsIFwicGFyYW1zXCIgOiB7fX0nLFxuXHRcdFx0J3tcInZlcnNpb25cIiA6IFwiJyArIGpzb25ycGMudmVyc2lvbiArICdcIiwgXCJpZFwiIDogMSwgXCJtZXRob2RcIjogXCJwaW5nXCIsIFwicGFyYW1zXCIgOiB7fX0nLFxuXHRcdFx0J3tcInZlcnNpb25cIiA6IFwiJyArIGpzb25ycGMudmVyc2lvbiArICdcIiwgXCJpZFwiIDogMSwgXCJyZXNvdXJjZVwiIDogXCJfX2dsb2JhbF9fXCIsIFwicGFyYW1zXCIgOiB7fX0nLFxuXHRcdFx0J3tcInZlcnNpb25cIiA6IFwiJyArIGpzb25ycGMudmVyc2lvbiArICdcIiwgXCJpZFwiIDogMSwgXCJyZXNvdXJjZVwiIDogXCJfX2dsb2JhbF9fXCIsIFwibWV0aG9kXCI6IFwicGluZ1wifScsXG5cdFx0XHQne1widmVyc2lvblwiIDogXCInICsganNvbnJwYy52ZXJzaW9uICsgJ1wiLCBcImlkXCIgOiAxLCBcInJlc291cmNlXCIgOiAxLCBcIm1ldGhvZFwiOiBcInBpbmdcIiwgXCJwYXJhbXNcIiA6IHt9fScsXG5cdFx0XHQne1widmVyc2lvblwiIDogXCInICsganNvbnJwYy52ZXJzaW9uICsgJ1wiLCBcImlkXCIgOiAxLCBcInJlc291cmNlXCIgOiBcIl9fZ2xvYmFsX19cIiwgXCJtZXRob2RcIjogMSwgXCJwYXJhbXNcIiA6IHt9fScsXG5cdFx0XHQne1widmVyc2lvblwiIDogXCInICsganNvbnJwYy52ZXJzaW9uICsgJ1wiLCBcImlkXCIgOiAxLCBcInJlc291cmNlXCIgOiBcIl9fZ2xvYmFsX19cIiwgXCJtZXRob2RcIjogXCJwaW5nXCIsIFwicGFyYW1zXCIgOiAxfScsXG5cdFx0XHQne1widmVyc2lvblwiIDogXCInICsganNvbnJwYy52ZXJzaW9uICsgJ1wiLCBcIm1ldGhvZFwiOiBcInBpbmdcIiwgXCJwYXJhbXNcIiA6IHt9fScsXG5cdFx0XHQne1widmVyc2lvblwiIDogXCInICsganNvbnJwYy52ZXJzaW9uICsgJ1wiLCBcInJlc291cmNlXCIgOiBcIl9fZ2xvYmFsX19cIiwgXCJwYXJhbXNcIiA6IHt9fScsXG5cdFx0XHQne1widmVyc2lvblwiIDogXCInICsganNvbnJwYy52ZXJzaW9uICsgJ1wiLCBcInJlc291cmNlXCIgOiBcIl9fZ2xvYmFsX19cIiwgXCJtZXRob2RcIjogXCJwaW5nXCJ9Jyxcblx0XHRcdCd7XCJ2ZXJzaW9uXCIgOiBcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsIFwicmVzb3VyY2VcIiA6IDEsIFwibWV0aG9kXCI6IFwicGluZ1wiLCBcInBhcmFtc1wiIDoge319Jyxcblx0XHRcdCd7XCJ2ZXJzaW9uXCIgOiBcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsIFwicmVzb3VyY2VcIiA6IFwiX19nbG9iYWxfX1wiLCBcIm1ldGhvZFwiOiAxLCBcInBhcmFtc1wiIDoge319Jyxcblx0XHRcdCd7XCJ2ZXJzaW9uXCIgOiBcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsIFwicmVzb3VyY2VcIiA6IFwiX19nbG9iYWxfX1wiLCBcIm1ldGhvZFwiOiBcInBpbmdcIiwgXCJwYXJhbXNcIiA6IDF9Jyxcblx0XHRcdCd7XCJ2ZXJzaW9uXCIgOiBcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsIFwiaWRcIiA6IDEsIFwiZXJyb3JcIiA6IHtcImNvZGVcIjpcIjFcIiwgXCJtZXNzYWdlXCI6XCJtc2dcIn19Jyxcblx0XHRcdCd7XCJ2ZXJzaW9uXCIgOiBcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsIFwiaWRcIiA6IDEsIFwiZXJyb3JcIiA6IHtcImNvZGVcIjoxLCBcIm1lc3NhZ2VcIjoxfX0nLFxuXHRcdFx0J3tcInZlcnNpb25cIiA6IFwiJyArIGpzb25ycGMudmVyc2lvbiArICdcIiwgXCJpZFwiIDogXCIxXCIsIFwicmVzdWx0XCIgOiBudWxsLCBcImVycm9yXCIgOiB7XCJjb2RlXCI6MSwgXCJtZXNzYWdlXCI6XCJtc2dcIn19J1xuXHRcdF07XG5cdFx0bWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSwga2V5KSA9PiB7XG5cdFx0XHRpdCgncGFyc2UgKCMnICsga2V5ICsgJyknLCAoKSA9PiB7XG5cdFx0XHRcdGFzc2VydC50aHJvd3MoKCkgPT4ge1xuXHRcdFx0XHRcdGpzb25ycGMucGFyc2UobWVzc2FnZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0bWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSwga2V5KSA9PiB7XG5cdFx0XHRpdCgnaGFzVmFsaWRTeW50YXggKCMnICsga2V5ICsgJyknLCAoKSA9PiB7XG5cdFx0XHRcdGFzc2VydC5lcXVhbChqc29ucnBjLmhhc1ZhbGlkU3ludGF4KG1lc3NhZ2UpLCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG5cdGRlc2NyaWJlKCd2YWxpZCBpbnB1dCcsICgpID0+IHtcblx0XHR2YXIgbWVzc2FnZXMgPSBbXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHZlcnNpb24gOiBqc29ucnBjLnZlcnNpb24sXG5cdFx0XHRcdGlkIDogMSxcblx0XHRcdFx0cmVzdWx0IDogbnVsbCxcblx0XHRcdFx0ZXJyb3IgOiB7XG5cdFx0XHRcdFx0Y29kZSA6IDEsXG5cdFx0XHRcdFx0bWVzc2FnZSA6IFwibXNnXCJcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHQne1widmVyc2lvblwiOlwiJyArIGpzb25ycGMudmVyc2lvbiArICdcIixcImlkXCI6MSxcInJlc3VsdFwiOm51bGx9Jyxcblx0XHRcdCd7XCJ2ZXJzaW9uXCI6XCInICsganNvbnJwYy52ZXJzaW9uICsgJ1wiLFwiaWRcIjoxLFwiZXJyb3JcIjp7XCJjb2RlXCI6MSxcIm1lc3NhZ2VcIjpcIm1zZ1wifX0nLFxuXHRcdFx0J3tcInZlcnNpb25cIjpcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsXCJpZFwiOjEsXCJyZXNvdXJjZVwiOlwiX19nbG9iYWxfX1wiLFwibWV0aG9kXCI6XCJwaW5nXCIsXCJwYXJhbXNcIjp7fX0nLFxuXHRcdFx0J3tcInZlcnNpb25cIjpcIicgKyBqc29ucnBjLnZlcnNpb24gKyAnXCIsXCJyZXNvdXJjZVwiOlwiX19nbG9iYWxfX1wiLFwibWV0aG9kXCI6XCJwaW5nXCIsXCJwYXJhbXNcIjp7fX0nXG5cdFx0XTtcblx0XHRtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlLCBrZXkpID0+IHtcblx0XHRcdGl0KCdwYXJzZSAoIycgKyBrZXkgKyAnKScsICgpID0+IHtcblx0XHRcdFx0YXNzZXJ0LmRvZXNOb3RUaHJvdygoKSA9PiB7XG5cdFx0XHRcdFx0anNvbnJwYy5wYXJzZShtZXNzYWdlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRtZXNzYWdlcy5mb3JFYWNoKChtZXNzYWdlLCBrZXkpID0+IHtcblx0XHRcdGl0KCdoYXNWYWxpZFN5bnRheCAoIycgKyBrZXkgKyAnKScsICgpID0+IHtcblx0XHRcdFx0bWVzc2FnZSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XG5cdFx0XHRcdGFzc2VydC5lcXVhbChqc29ucnBjLmhhc1ZhbGlkU3ludGF4KG1lc3NhZ2UpLCB0cnVlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdG1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UsIGtleSkgPT4ge1xuXHRcdFx0aXQoJ3BhcnNlIHN0cmluZ2lmeSAoIycgKyBrZXkgKyAnKScsICgpID0+IHtcblx0XHRcdFx0YXNzZXJ0LmVxdWFsKGpzb25ycGMucGFyc2UobWVzc2FnZSkudG9TdHJpbmcoKSwgbWVzc2FnZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG5cdGl0KCduZXcgSnNvblJwYyBub3QgYWxsb3dlZCcsICgpID0+IHtcblx0XHRhc3NlcnQudGhyb3dzKCgpID0+IHtcblx0XHRcdG5ldyBqc29ucnBjKCk7XG5cdFx0fSlcblx0fSk7XG5cdGl0KCdzZXQvZ2V0T3B0aW9ucycsICgpID0+IHtcblx0XHR2YXIgbyA9IGpzb25ycGMuZ2V0T3B0aW9ucygpLCBubyA9IHthdXRvRmlyZUNhbGxiYWNrcyA6IHRydWV9O1xuXHRcdGpzb25ycGMuc2V0T3B0aW9ucyhubyk7XG5cdFx0YXNzZXJ0LmRlZXBFcXVhbChqc29ucnBjLmdldE9wdGlvbnMoKSwgbm8pO1xuXHR9KTtcblx0ZGVzY3JpYmUoJ2dldFR5cGUnLCAoKSA9PiB7XG5cdFx0aXQoJ3ZhbGlkIGlucHV0JywgKCkgPT4ge1xuXHRcdFx0dmFyIHJlcSA9IG5ldyBqc29ucnBjLlJlcXVlc3Qoe21ldGhvZCA6IFwic29tZU1ldGhvZFwifSksIHJlcyA9IG5ldyBqc29ucnBjLlJlc3BvbnNlKHtpZDogMSwgcmVzdWx0IDogJyd9KSwgbm90ID0gbmV3IGpzb25ycGMuTm90aWZpY2F0aW9uKHttZXRob2QgOiBcInNvbWVNZXRob2RcIn0pO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoanNvbnJwYy5nZXRUeXBlKHJlcS50b0pTT04oKSksIFwicmVxdWVzdFwiKTtcblx0XHRcdGFzc2VydC5lcXVhbChqc29ucnBjLmdldFR5cGUocmVzLnRvSlNPTigpKSwgXCJyZXNwb25zZVwiKTtcblx0XHRcdGFzc2VydC5lcXVhbChqc29ucnBjLmdldFR5cGUobm90LnRvSlNPTigpKSwgXCJub3RpZmljYXRpb25cIik7XG5cdFx0fSk7XG5cdFx0aXQoJ2ludmFsaWQgaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRhc3NlcnQudGhyb3dzKCgpID0+IHtcblx0XHRcdFx0anNvbnJwYy5nZXRUeXBlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
