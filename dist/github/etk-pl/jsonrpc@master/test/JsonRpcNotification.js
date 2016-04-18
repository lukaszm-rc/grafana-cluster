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

			describe('JsonRpcNotification', function () {
				it('invalid message type', function () {
					assert.throws(function () {
						new jsonrpc.Notification('');
					});
				});
				it('not valid syntax', function () {
					assert.throws(function () {
						new jsonrpc.Notification({});
					});
				});
				it('is', function () {
					assert.equal(new jsonrpc.Notification().isNotification, true);
					assert.equal(new jsonrpc.Notification().isRequest, false);
					assert.equal(new jsonrpc.Notification().isResponse, false);
				});
				it('defaults', function () {
					var not = new jsonrpc.Notification();
					assert.equal(not.getVersion(), jsonrpc.version);
					assert.equal(not.getResource(), '__global__');
					assert.deepStrictEqual(not.getParams(), {});
				});
				describe('restricted methods', function () {
					var obj = new jsonrpc.Notification();
					var methods = 'id,result,error'.split(',');
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
					it('constructor params', function () {
						assert.deepEqual(new jsonrpc.Notification({
							resource: "someResource",
							method: "someMethod",
							params: { some: "params" }
						}).toJSON(), {
							version: jsonrpc.version,
							resource: "someResource",
							method: "someMethod",
							params: { "some": "params" }
						});
					});
					it('methods', function () {
						var not = new jsonrpc.Notification();
						not.setResource("someResource");
						not.setMethod("someMethod");
						not.setParams({ some: "params" });
						assert.equal(not.getResource(), "someResource");
						assert.equal(not.getMethod(), "someMethod");
						assert.deepStrictEqual(not.getParams(), { some: "params" });
					});
				});
			});
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvdGVzdC9Kc29uUnBjTm90aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7Ozs7O0FBQ0ksVUFBTyxRQUFRLE1BQVI7QUFDUCxhQUFVLFFBQVEsWUFBWSxjQUFaO0FBQ2xCLFlBQVMsUUFBUSxRQUFSOztBQUNiLFlBQVMscUJBQVQsRUFBZ0MsWUFBTTtBQUNyQyxPQUFHLHNCQUFILEVBQTJCLFlBQU07QUFDaEMsWUFBTyxNQUFQLENBQWMsWUFBTTtBQUNuQixVQUFJLFFBQVEsWUFBUixDQUFxQixFQUF6QixFQURtQjtNQUFOLENBQWQsQ0FEZ0M7S0FBTixDQUEzQixDQURxQztBQU1yQyxPQUFHLGtCQUFILEVBQXVCLFlBQU07QUFDNUIsWUFBTyxNQUFQLENBQWMsWUFBTTtBQUNuQixVQUFJLFFBQVEsWUFBUixDQUFxQixFQUF6QixFQURtQjtNQUFOLENBQWQsQ0FENEI7S0FBTixDQUF2QixDQU5xQztBQVdyQyxPQUFHLElBQUgsRUFBUyxZQUFNO0FBQ2QsWUFBTyxLQUFQLENBQWEsSUFBSyxRQUFRLFlBQVIsRUFBTCxDQUE2QixjQUE3QixFQUE2QyxJQUExRCxFQURjO0FBRWQsWUFBTyxLQUFQLENBQWEsSUFBSyxRQUFRLFlBQVIsRUFBTCxDQUE2QixTQUE3QixFQUF3QyxLQUFyRCxFQUZjO0FBR2QsWUFBTyxLQUFQLENBQWEsSUFBSyxRQUFRLFlBQVIsRUFBTCxDQUE2QixVQUE3QixFQUF5QyxLQUF0RCxFQUhjO0tBQU4sQ0FBVCxDQVhxQztBQWdCckMsT0FBRyxVQUFILEVBQWUsWUFBTTtBQUNwQixTQUFJLE1BQU0sSUFBSSxRQUFRLFlBQVIsRUFBVixDQURnQjtBQUVwQixZQUFPLEtBQVAsQ0FBYSxJQUFJLFVBQUosRUFBYixFQUErQixRQUFRLE9BQVIsQ0FBL0IsQ0FGb0I7QUFHcEIsWUFBTyxLQUFQLENBQWEsSUFBSSxXQUFKLEVBQWIsRUFBZ0MsWUFBaEMsRUFIb0I7QUFJcEIsWUFBTyxlQUFQLENBQXVCLElBQUksU0FBSixFQUF2QixFQUF3QyxFQUF4QyxFQUpvQjtLQUFOLENBQWYsQ0FoQnFDO0FBc0JyQyxhQUFTLG9CQUFULEVBQStCLFlBQU07QUFDcEMsU0FBSSxNQUFNLElBQUksUUFBUSxZQUFSLEVBQVYsQ0FEZ0M7QUFFcEMsU0FBSSxVQUFVLGtCQUFrQixLQUFsQixDQUF3QixHQUF4QixDQUFWLENBRmdDO0FBR3BDLFFBQUcsWUFBSCxFQUFpQixZQUFLO0FBQ3JCLGFBQU8sTUFBUCxDQUFjLFlBQU07QUFDbkIsV0FBSSxVQUFKLENBQWUsT0FBZixFQURtQjtPQUFOLENBQWQsQ0FEcUI7TUFBTCxDQUFqQixDQUhvQztBQVFwQyxhQUFRLE9BQVIsQ0FBZ0IsVUFBQyxNQUFELEVBQVMsR0FBVCxFQUFpQjtBQUNoQyxTQUFHLFFBQVEsS0FBSyxPQUFMLENBQWEsTUFBYixDQUFSLEVBQThCLFlBQUs7QUFDckMsY0FBTyxNQUFQLENBQWMsWUFBTTtBQUNuQixZQUFJLFFBQVEsS0FBSyxPQUFMLENBQWEsTUFBYixDQUFSLENBQUosR0FEbUI7UUFBTixDQUFkLENBRHFDO09BQUwsQ0FBakMsQ0FEZ0M7QUFNaEMsU0FBRyxRQUFRLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBUixFQUE4QixZQUFLO0FBQ3JDLGNBQU8sTUFBUCxDQUFjLFlBQU07QUFDbkIsWUFBSSxRQUFRLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBUixDQUFKLEdBRG1CO1FBQU4sQ0FBZCxDQURxQztPQUFMLENBQWpDLENBTmdDO01BQWpCLENBQWhCLENBUm9DO0tBQU4sQ0FBL0IsQ0F0QnFDO0FBMkNyQyxhQUFTLGlCQUFULEVBQTRCLFlBQU07QUFDakMsUUFBRyxvQkFBSCxFQUF5QixZQUFNO0FBQzlCLGFBQU8sU0FBUCxDQUFpQixJQUFLLFFBQVEsWUFBUixDQUFxQjtBQUMxQyxpQkFBVyxjQUFYO0FBQ0EsZUFBUyxZQUFUO0FBQ0EsZUFBUyxFQUFDLE1BQU8sUUFBUCxFQUFWO09BSGlCLENBQUQsQ0FJYixNQUphLEVBQWpCLEVBSWM7QUFDYixnQkFBVSxRQUFRLE9BQVI7QUFDVixpQkFBVyxjQUFYO0FBQ0EsZUFBUyxZQUFUO0FBQ0EsZUFBUyxFQUFDLFFBQVMsUUFBVCxFQUFWO09BUkQsRUFEOEI7TUFBTixDQUF6QixDQURpQztBQWFqQyxRQUFHLFNBQUgsRUFBYyxZQUFNO0FBQ25CLFVBQUksTUFBTSxJQUFJLFFBQVEsWUFBUixFQUFWLENBRGU7QUFFbkIsVUFBSSxXQUFKLENBQWdCLGNBQWhCLEVBRm1CO0FBR25CLFVBQUksU0FBSixDQUFjLFlBQWQsRUFIbUI7QUFJbkIsVUFBSSxTQUFKLENBQWMsRUFBQyxNQUFPLFFBQVAsRUFBZixFQUptQjtBQUtuQixhQUFPLEtBQVAsQ0FBYSxJQUFJLFdBQUosRUFBYixFQUFnQyxjQUFoQyxFQUxtQjtBQU1uQixhQUFPLEtBQVAsQ0FBYSxJQUFJLFNBQUosRUFBYixFQUE4QixZQUE5QixFQU5tQjtBQU9uQixhQUFPLGVBQVAsQ0FBdUIsSUFBSSxTQUFKLEVBQXZCLEVBQXdDLEVBQUMsTUFBTyxRQUFQLEVBQXpDLEVBUG1CO01BQU4sQ0FBZCxDQWJpQztLQUFOLENBQTVCLENBM0NxQztJQUFOLENBQWhDIiwiZmlsZSI6ImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvdGVzdC9Kc29uUnBjTm90aWZpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIE1pY2hhxYIgxbthbG91ZGlrIDxtaWNoYWwuemFsb3VkaWtAcmVkY2FydC5wbD5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRscyA9IHJlcXVpcmUoJ3V0bHMnKTtcbnZhciBqc29ucnBjID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2luZGV4LmpzJyk7XG52YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5kZXNjcmliZSgnSnNvblJwY05vdGlmaWNhdGlvbicsICgpID0+IHtcblx0aXQoJ2ludmFsaWQgbWVzc2FnZSB0eXBlJywgKCkgPT4ge1xuXHRcdGFzc2VydC50aHJvd3MoKCkgPT4ge1xuXHRcdFx0bmV3IGpzb25ycGMuTm90aWZpY2F0aW9uKCcnKTtcblx0XHR9KTtcblx0fSk7XG5cdGl0KCdub3QgdmFsaWQgc3ludGF4JywgKCkgPT4ge1xuXHRcdGFzc2VydC50aHJvd3MoKCkgPT4ge1xuXHRcdFx0bmV3IGpzb25ycGMuTm90aWZpY2F0aW9uKHt9KTtcblx0XHR9KTtcblx0fSk7XG5cdGl0KCdpcycsICgpID0+IHtcblx0XHRhc3NlcnQuZXF1YWwoKG5ldyBqc29ucnBjLk5vdGlmaWNhdGlvbigpKS5pc05vdGlmaWNhdGlvbiwgdHJ1ZSk7XG5cdFx0YXNzZXJ0LmVxdWFsKChuZXcganNvbnJwYy5Ob3RpZmljYXRpb24oKSkuaXNSZXF1ZXN0LCBmYWxzZSk7XG5cdFx0YXNzZXJ0LmVxdWFsKChuZXcganNvbnJwYy5Ob3RpZmljYXRpb24oKSkuaXNSZXNwb25zZSwgZmFsc2UpO1xuXHR9KTtcblx0aXQoJ2RlZmF1bHRzJywgKCkgPT4ge1xuXHRcdHZhciBub3QgPSBuZXcganNvbnJwYy5Ob3RpZmljYXRpb24oKTtcblx0XHRhc3NlcnQuZXF1YWwobm90LmdldFZlcnNpb24oKSwganNvbnJwYy52ZXJzaW9uKTtcblx0XHRhc3NlcnQuZXF1YWwobm90LmdldFJlc291cmNlKCksICdfX2dsb2JhbF9fJyk7XG5cdFx0YXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChub3QuZ2V0UGFyYW1zKCksIHt9KTtcblx0fSk7XG5cdGRlc2NyaWJlKCdyZXN0cmljdGVkIG1ldGhvZHMnLCAoKSA9PiB7XG5cdFx0dmFyIG9iaiA9IG5ldyBqc29ucnBjLk5vdGlmaWNhdGlvbigpO1xuXHRcdHZhciBtZXRob2RzID0gJ2lkLHJlc3VsdCxlcnJvcicuc3BsaXQoJywnKTtcblx0XHRpdCgnc2V0VmVyc2lvbicsICgpPT4ge1xuXHRcdFx0YXNzZXJ0LnRocm93cygoKSA9PiB7XG5cdFx0XHRcdG9iai5zZXRWZXJzaW9uKFwiMC4wLjBcIik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRtZXRob2RzLmZvckVhY2goKG1ldGhvZCwga2V5KSA9PiB7XG5cdFx0XHRpdCgnZ2V0JyArIHV0bHMudWNGaXJzdChtZXRob2QpLCAoKT0+IHtcblx0XHRcdFx0YXNzZXJ0LnRocm93cygoKSA9PiB7XG5cdFx0XHRcdFx0b2JqWydnZXQnICsgdXRscy51Y0ZpcnN0KG1ldGhvZCldKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRpdCgnc2V0JyArIHV0bHMudWNGaXJzdChtZXRob2QpLCAoKT0+IHtcblx0XHRcdFx0YXNzZXJ0LnRocm93cygoKSA9PiB7XG5cdFx0XHRcdFx0b2JqWydzZXQnICsgdXRscy51Y0ZpcnN0KG1ldGhvZCldKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xuXHRkZXNjcmliZSgnbWFudWFsIGNyZWF0aW9uJywgKCkgPT4ge1xuXHRcdGl0KCdjb25zdHJ1Y3RvciBwYXJhbXMnLCAoKSA9PiB7XG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKChuZXcganNvbnJwYy5Ob3RpZmljYXRpb24oe1xuXHRcdFx0XHRyZXNvdXJjZSA6IFwic29tZVJlc291cmNlXCIsXG5cdFx0XHRcdG1ldGhvZCA6IFwic29tZU1ldGhvZFwiLFxuXHRcdFx0XHRwYXJhbXMgOiB7c29tZSA6IFwicGFyYW1zXCJ9XG5cdFx0XHR9KSkudG9KU09OKCksIHtcblx0XHRcdFx0dmVyc2lvbiA6IGpzb25ycGMudmVyc2lvbixcblx0XHRcdFx0cmVzb3VyY2UgOiBcInNvbWVSZXNvdXJjZVwiLFxuXHRcdFx0XHRtZXRob2QgOiBcInNvbWVNZXRob2RcIixcblx0XHRcdFx0cGFyYW1zIDoge1wic29tZVwiIDogXCJwYXJhbXNcIn1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGl0KCdtZXRob2RzJywgKCkgPT4ge1xuXHRcdFx0dmFyIG5vdCA9IG5ldyBqc29ucnBjLk5vdGlmaWNhdGlvbigpO1xuXHRcdFx0bm90LnNldFJlc291cmNlKFwic29tZVJlc291cmNlXCIpO1xuXHRcdFx0bm90LnNldE1ldGhvZChcInNvbWVNZXRob2RcIik7XG5cdFx0XHRub3Quc2V0UGFyYW1zKHtzb21lIDogXCJwYXJhbXNcIn0pO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKG5vdC5nZXRSZXNvdXJjZSgpLCBcInNvbWVSZXNvdXJjZVwiKTtcblx0XHRcdGFzc2VydC5lcXVhbChub3QuZ2V0TWV0aG9kKCksIFwic29tZU1ldGhvZFwiKTtcblx0XHRcdGFzc2VydC5kZWVwU3RyaWN0RXF1YWwobm90LmdldFBhcmFtcygpLCB7c29tZSA6IFwicGFyYW1zXCJ9KTtcblx0XHR9KTtcblx0fSk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
