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

			describe('JsonRpcResponse', function () {
				it('invalid message type', function () {
					assert.throws(function () {
						new jsonrpc.Response('');
					});
				});
				it('not valid syntax', function () {
					assert.throws(function () {
						new jsonrpc.Response({});
					});
				});
				it('is', function () {
					assert.equal(new jsonrpc.Response().isNotification, false);
					assert.equal(new jsonrpc.Response().isRequest, false);
					assert.equal(new jsonrpc.Response().isResponse, true);
				});
				it('defaults', function () {
					var res = new jsonrpc.Response();
					assert.equal(res.getVersion(), jsonrpc.version);
				});
				describe('restricted methods', function () {
					var obj = new jsonrpc.Response();
					var methods = 'resource,method,params,callback'.split(',');
					it('setVersion', function () {
						assert.throws(function () {
							obj.setVersion("0.0.0");
						});
					});
					methods.forEach(function (method, key) {
						it('get' + utls.ucFirst(method), function () {
							assert.throws(function () {
								obj['get' + utls.ucFirst(method)]();
							});
						});
						it('set' + utls.ucFirst(method), function () {
							assert.throws(function () {
								obj['set' + utls.ucFirst(method)]();
							});
						});
					});
				});
				describe('manual creation', function () {
					it('constructor params with result', function () {
						assert.deepEqual(new jsonrpc.Response({
							id: 1,
							result: { some: 'result' }
						}).toJSON(), {
							id: 1,
							version: jsonrpc.version,
							result: { some: 'result' }
						});
					});
					it('methods with result', function () {
						var not = new jsonrpc.Response();
						not.setId(1);
						not.setResult({ some: 'result' });
						assert.equal(not.getVersion(), jsonrpc.version);
						assert.equal(not.getId(), 1);
						assert.deepStrictEqual(not.getResult(), { some: 'result' });
						assert.equal(not.getError(), undefined);
					});
					it('constructor params with error', function () {
						assert.deepEqual(new jsonrpc.Response({
							id: 1,
							error: new jsonrpc.JsonRpcError({
								message: "some error",
								code: 0
							})
						}).toJSON(), {
							id: 1,
							version: jsonrpc.version,
							error: new jsonrpc.JsonRpcError({
								message: "some error",
								code: 0
							})
						});
					});
					it('methods with error', function () {
						var not = new jsonrpc.Response();
						var error = new jsonrpc.JsonRpcError();
						error.setMessage("some message").setCode(0);
						not.setId(1);
						not.setError(error);
						assert.deepEqual(not.toJSON(), {
							id: 1,
							version: jsonrpc.version,
							error: {
								message: error.getMessage(),
								code: error.getCode()
							}
						});
					});
				});
			});
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvdGVzdC9Kc29uUnBjUmVzcG9uc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Ozs7Ozs7QUFDSSxVQUFPLFFBQVEsTUFBUjtBQUNQLGFBQVUsUUFBUSxZQUFZLGNBQVo7QUFDbEIsWUFBUyxRQUFRLFFBQVI7O0FBQ2IsWUFBUyxpQkFBVCxFQUE0QixZQUFNO0FBQ2pDLE9BQUcsc0JBQUgsRUFBMkIsWUFBTTtBQUNoQyxZQUFPLE1BQVAsQ0FBYyxZQUFNO0FBQ25CLFVBQUksUUFBUSxRQUFSLENBQWlCLEVBQXJCLEVBRG1CO01BQU4sQ0FBZCxDQURnQztLQUFOLENBQTNCLENBRGlDO0FBTWpDLE9BQUcsa0JBQUgsRUFBdUIsWUFBTTtBQUM1QixZQUFPLE1BQVAsQ0FBYyxZQUFNO0FBQ25CLFVBQUksUUFBUSxRQUFSLENBQWlCLEVBQXJCLEVBRG1CO01BQU4sQ0FBZCxDQUQ0QjtLQUFOLENBQXZCLENBTmlDO0FBV2pDLE9BQUcsSUFBSCxFQUFTLFlBQU07QUFDZCxZQUFPLEtBQVAsQ0FBYSxJQUFLLFFBQVEsUUFBUixFQUFMLENBQXlCLGNBQXpCLEVBQXlDLEtBQXRELEVBRGM7QUFFZCxZQUFPLEtBQVAsQ0FBYSxJQUFLLFFBQVEsUUFBUixFQUFMLENBQXlCLFNBQXpCLEVBQW9DLEtBQWpELEVBRmM7QUFHZCxZQUFPLEtBQVAsQ0FBYSxJQUFLLFFBQVEsUUFBUixFQUFMLENBQXlCLFVBQXpCLEVBQXFDLElBQWxELEVBSGM7S0FBTixDQUFULENBWGlDO0FBZ0JqQyxPQUFHLFVBQUgsRUFBZSxZQUFNO0FBQ3BCLFNBQUksTUFBTSxJQUFJLFFBQVEsUUFBUixFQUFWLENBRGdCO0FBRXBCLFlBQU8sS0FBUCxDQUFhLElBQUksVUFBSixFQUFiLEVBQStCLFFBQVEsT0FBUixDQUEvQixDQUZvQjtLQUFOLENBQWYsQ0FoQmlDO0FBb0JqQyxhQUFTLG9CQUFULEVBQStCLFlBQU07QUFDcEMsU0FB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QixVQUFJLEtBQUosQ0FBVSxDQUFWLEVBSjhCO0FBSzlCLFVBQUksUUFBSixDQUFhLEtBQWIsRUFMOEI7QUFNOUIsYUFBTyxTQUFQLENBQWlCLElBQUksTUFBSixFQUFqQixFQUErQjtBQUM5QixXQUFLLENBQUw7QUFDQSxnQkFBVSxRQUFRLE9BQVI7QUFDVixjQUFRO0FBQ1AsaUJBQVUsTUFBTSxVQUFOLEVBQVY7QUFDQSxjQUFPLE1BQU0sT0FBTixFQUFQO1FBRkQ7T0FIRCxFQU44QjtNQUFOLENBQXpCLENBcENpQztLQUFOLENBQTVCLENBekNpQztJQUFOLENBQTVCIiwiZmlsZSI6ImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvdGVzdC9Kc29uUnBjUmVzcG9uc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgTWljaGHFgiDFu2Fsb3VkaWsgPG1pY2hhbC56YWxvdWRpa0ByZWRjYXJ0LnBsPlxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciB1dGxzID0gcmVxdWlyZSgndXRscycpO1xudmFyIGpzb25ycGMgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vaW5kZXguanMnKTtcbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbmRlc2NyaWJlKCdKc29uUnBjUmVzcG9uc2UnLCAoKSA9PiB7XG5cdGl0KCdpbnZhbGlkIG1lc3NhZ2UgdHlwZScsICgpID0+IHtcblx0XHRhc3NlcnQudGhyb3dzKCgpID0+IHtcblx0XHRcdG5ldyBqc29ucnBjLlJlc3BvbnNlKCcnKTtcblx0XHR9KTtcblx0fSk7XG5cdGl0KCdub3QgdmFsaWQgc3ludGF4JywgKCkgPT4ge1xuXHRcdGFzc2VydC50aHJvd3MoKCkgPT4ge1xuXHRcdFx0bmV3IGpzb25ycGMuUmVzcG9uc2Uoe30pO1xuXHRcdH0pO1xuXHR9KTtcblx0aXQoJ2lzJywgKCkgPT4ge1xuXHRcdGFzc2VydC5lcXVhbCgobmV3IGpzb25ycGMuUmVzcG9uc2UoKSkuaXNOb3RpZmljYXRpb24sIGZhbHNlKTtcblx0XHRhc3NlcnQuZXF1YWwoKG5ldyBqc29ucnBjLlJlc3BvbnNlKCkpLmlzUmVxdWVzdCwgZmFsc2UpO1xuXHRcdGFzc2VydC5lcXVhbCgobmV3IGpzb25ycGMuUmVzcG9uc2UoKSkuaXNSZXNwb25zZSwgdHJ1ZSk7XG5cdH0pO1xuXHRpdCgnZGVmYXVsdHMnLCAoKSA9PiB7XG5cdFx0dmFyIHJlcyA9IG5ldyBqc29ucnBjLlJlc3BvbnNlKCk7XG5cdFx0YXNzZXJ0LmVxdWFsKHJlcy5nZXRWZXJzaW9uKCksIGpzb25ycGMudmVyc2lvbik7XG5cdH0pO1xuXHRkZXNjcmliZSgncmVzdHJpY3RlZCBtZXRob2RzJywgKCkgPT4ge1xuXHRcdHZhciBvYmogPSBuZXcganNvbnJwYy5SZXNwb25zZSgpO1xuXHRcdHZhciBtZXRob2RzID0gJ3Jlc291cmNlLG1ldGhvZCxwYXJhbXMsY2FsbGJhY2snLnNwbGl0KCcsJyk7XG5cdFx0aXQoJ3NldFZlcnNpb24nLCAoKT0+IHtcblx0XHRcdGFzc2VydC50aHJvd3MoKCkgPT4ge1xuXHRcdFx0XHRvYmouc2V0VmVyc2lvbihcIjAuMC4wXCIpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0bWV0aG9kcy5mb3JFYWNoKChtZXRob2QsIGtleSkgPT4ge1xuXHRcdFx0aXQoJ2dldCcgKyB1dGxzLnVjRmlyc3QobWV0aG9kKSwgKCk9PiB7XG5cdFx0XHRcdGFzc2VydC50aHJvd3MoKCkgPT4ge1xuXHRcdFx0XHRcdG9ialsnZ2V0JyArIHV0bHMudWNGaXJzdChtZXRob2QpXSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0aXQoJ3NldCcgKyB1dGxzLnVjRmlyc3QobWV0aG9kKSwgKCk9PiB7XG5cdFx0XHRcdGFzc2VydC50aHJvd3MoKCkgPT4ge1xuXHRcdFx0XHRcdG9ialsnc2V0JyArIHV0bHMudWNGaXJzdChtZXRob2QpXSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcblx0ZGVzY3JpYmUoJ21hbnVhbCBjcmVhdGlvbicsICgpID0+IHtcblx0XHRpdCgnY29uc3RydWN0b3IgcGFyYW1zIHdpdGggcmVzdWx0JywgKCkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCgobmV3IGpzb25ycGMuUmVzcG9uc2Uoe1xuXHRcdFx0XHRpZCA6IDEsXG5cdFx0XHRcdHJlc3VsdCA6IHtzb21lIDogJ3Jlc3VsdCd9XG5cdFx0XHR9KSkudG9KU09OKCksIHtcblx0XHRcdFx0aWQgOiAxLFxuXHRcdFx0XHR2ZXJzaW9uIDoganNvbnJwYy52ZXJzaW9uLFxuXHRcdFx0XHRyZXN1bHQgOiB7c29tZSA6ICdyZXN1bHQnfVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aXQoJ21ldGhvZHMgd2l0aCByZXN1bHQnLCAoKSA9PiB7XG5cdFx0XHR2YXIgbm90ID0gbmV3IGpzb25ycGMuUmVzcG9uc2UoKTtcblx0XHRcdG5vdC5zZXRJZCgxKTtcblx0XHRcdG5vdC5zZXRSZXN1bHQoe3NvbWUgOiAncmVzdWx0J30pO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKG5vdC5nZXRWZXJzaW9uKCksIGpzb25ycGMudmVyc2lvbik7XG5cdFx0XHRhc3NlcnQuZXF1YWwobm90LmdldElkKCksIDEpO1xuXHRcdFx0YXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChub3QuZ2V0UmVzdWx0KCksIHtzb21lIDogJ3Jlc3VsdCd9KTtcblx0XHRcdGFzc2VydC5lcXVhbChub3QuZ2V0RXJyb3IoKSwgdW5kZWZpbmVkKTtcblx0XHR9KTtcblx0XHRpdCgnY29uc3RydWN0b3IgcGFyYW1zIHdpdGggZXJyb3InLCAoKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKChuZXcganNvbnJwYy5SZXNwb25zZSh7XG5cdFx0XHRcdGlkIDogMSxcblx0XHRcdFx0ZXJyb3IgOiBuZXcganNvbnJwYy5Kc29uUnBjRXJyb3Ioe1xuXHRcdFx0XHRcdG1lc3NhZ2UgOiBcInNvbWUgZXJyb3JcIixcblx0XHRcdFx0XHRjb2RlIDogMFxuXHRcdFx0XHR9KVxuXHRcdFx0fSkpLnRvSlNPTigpLCB7XG5cdFx0XHRcdGlkIDogMSxcblx0XHRcdFx0dmVyc2lvbiA6IGpzb25ycGMudmVyc2lvbixcblx0XHRcdFx0ZXJyb3IgOiBuZXcganNvbnJwYy5Kc29uUnBjRXJyb3Ioe1xuXHRcdFx0XHRcdG1lc3NhZ2UgOiBcInNvbWUgZXJyb3JcIixcblx0XHRcdFx0XHRjb2RlIDogMFxuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aXQoJ21ldGhvZHMgd2l0aCBlcnJvcicsICgpID0+IHtcblx0XHRcdHZhciBub3QgPSBuZXcganNvbnJwYy5SZXNwb25zZSgpO1xuXHRcdFx0dmFyIGVycm9yID0gbmV3IGpzb25ycGMuSnNvblJwY0Vycm9yKCk7XG5cdFx0XHRlcnJvci5zZXRNZXNzYWdlKFwic29tZSBtZXNzYWdlXCIpLnNldENvZGUoMCk7XG5cdFx0XHRub3Quc2V0SWQoMSk7XG5cdFx0XHRub3Quc2V0RXJyb3IoZXJyb3IpO1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbChub3QudG9KU09OKCksIHtcblx0XHRcdFx0aWQgOiAxLFxuXHRcdFx0XHR2ZXJzaW9uIDoganNvbnJwYy52ZXJzaW9uLFxuXHRcdFx0XHRlcnJvciA6IHtcblx0XHRcdFx0XHRtZXNzYWdlIDogZXJyb3IuZ2V0TWVzc2FnZSgpLFxuXHRcdFx0XHRcdGNvZGUgOiBlcnJvci5nZXRDb2RlKClcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
