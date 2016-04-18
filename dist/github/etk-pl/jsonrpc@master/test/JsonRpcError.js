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

			describe('JsonRpcError', function () {
				describe('valid input', function () {
					it('constructor', function () {
						assert.equal(utls.getType(new jsonrpc.JsonRpcError('some message', 1)), "JsonRpcError");
					});
					it('setters & getters & isValid', function () {
						var err = new jsonrpc.JsonRpcError();
						err.setMessage('some message').setCode(1);
						assert.equal(err.getMessage(), 'some message');
						assert.equal(err.getCode(), 1);
						assert.equal(jsonrpc.JsonRpcError.isValid(err), true);
						assert.equal(jsonrpc.JsonRpcError.isValid({
							message: "some message",
							code: 1
						}), true);
					});
				});
				describe('isvalid input', function () {
					it('setters & getters & isValid', function () {
						var err = new jsonrpc.JsonRpcError();
						assert.throws(function () {
							err.setMessage(false);
						});
						assert.throws(function () {
							err.setCode(true);
						});
						assert.equal(jsonrpc.JsonRpcError.isValid({
							message: false,
							code: true
						}), false);
					});
				});
			});
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi9ldGstcGwvanNvbnJwY0BtYXN0ZXIvdGVzdC9Kc29uUnBjRXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Ozs7Ozs7QUFDSSxVQUFPLFFBQVEsTUFBUjtBQUNQLGFBQVUsUUFBUSxZQUFZLGNBQVo7QUFDbEIsWUFBUyxRQUFRLFFBQVI7O0FBQ2IsWUFBUyxjQUFULEVBQXlCLFlBQU07QUFDOUIsYUFBUyxhQUFULEVBQXdCLFlBQU07QUFDN0IsUUFBRyxhQUFILEVBQWtCLFlBQU07QUFDdkIsYUFBTyxLQUFQLENBQWEsS0FBSyxPQUFMLENBQWEsSUFBSSxRQUFRLFlBQVIsQ0FBcUIsY0FBekIsRUFBeUMsQ0FBekMsQ0FBYixDQUFiLEVBQXdFLGNBQXhFLEVBRHVCO01BQU4sQ0FBbEIsQ0FENkI7QUFJN0IsUUFBRyw2QkFBSCxFQUFrQyxZQUFNO0FBQ3ZDLFVBQUksTUFBTSxJQUFJLFFBQVEsWUFBUixFQUFWLENBRG1DO0FBRXZDLFVBQUksVUFBSixDQUFlLGNBQWYsRUFBK0IsT0FBL0IsQ0FBdUMsQ0FBdkMsRUFGdUM7QUFHdkMsYUFBTyxLQUFQLENBQWEsSUFBSSxVQUFKLEVBQWIsRUFBK0IsY0FBL0IsRUFIdUM7QUFJdkMsYUFBTyxLQUFQLENBQWEsSUFBSSxPQUFKLEVBQWIsRUFBNEIsQ0FBNUIsRUFKdUM7QUFLdkMsYUFBTyxLQUFQLENBQWEsUUFBUSxZQUFSLENBQXFCLE9BQXJCLENBQTZCLEdBQTdCLENBQWIsRUFBZ0QsSUFBaEQsRUFMdUM7QUFNdkMsYUFBTyxLQUFQLENBQWEsUUFBUSxZQUFSLENBQXFCLE9BQXJCLENBQTZCO0FBQ3pDLGdCQUFVLGNBQVY7QUFDQSxhQUFPLENBQVA7T0FGWSxDQUFiLEVBR0ksSUFISixFQU51QztNQUFOLENBQWxDLENBSjZCO0tBQU4sQ0FBeEIsQ0FEOEI7QUFpQjlCLGFBQVMsZUFBVCxFQUEwQixZQUFNO0FBQy9CLFFBQUcsNkJBQUgsRUFBa0MsWUFBTTtBQUN2QyxVQUFJLE1BQU0sSUFBSSxRQUFRLFlBQVIsRUFBVixDQURtQztBQUV2QyxhQUFPLE1BQVAsQ0FBYyxZQUFNO0FBQ25CLFdBQUksVUFBSixDQUFlLEtBQWYsRUFEbUI7T0FBTixDQUFkLENBRnVDO0FBS3ZDLGFBQU8sTUFBUCxDQUFjLFlBQU07QUFDbkIsV0FBSSxPQUFKLENBQVksSUFBWixFQURtQjtPQUFOLENBQWQsQ0FMdUM7QUFRdkMsYUFBTyxLQUFQLENBQWEsUUFBUSxZQUFSLENBQXFCLE9BQXJCLENBQTZCO0FBQ3pDLGdCQUFVLEtBQVY7QUFDQSxhQUFPLElBQVA7T0FGWSxDQUFiLEVBR0ksS0FISixFQVJ1QztNQUFOLENBQWxDLENBRCtCO0tBQU4sQ0FBMUIsQ0FqQjhCO0lBQU4sQ0FBekIiLCJmaWxlIjoiZ2l0aHViL2V0ay1wbC9qc29ucnBjQG1hc3Rlci90ZXN0L0pzb25ScGNFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciBNaWNoYcWCIMW7YWxvdWRpayA8bWljaGFsLnphbG91ZGlrQHJlZGNhcnQucGw+XG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIHV0bHMgPSByZXF1aXJlKCd1dGxzJyk7XG52YXIganNvbnJwYyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9pbmRleC5qcycpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuZGVzY3JpYmUoJ0pzb25ScGNFcnJvcicsICgpID0+IHtcblx0ZGVzY3JpYmUoJ3ZhbGlkIGlucHV0JywgKCkgPT4ge1xuXHRcdGl0KCdjb25zdHJ1Y3RvcicsICgpID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCh1dGxzLmdldFR5cGUobmV3IGpzb25ycGMuSnNvblJwY0Vycm9yKCdzb21lIG1lc3NhZ2UnLCAxKSksIFwiSnNvblJwY0Vycm9yXCIpXG5cdFx0fSk7XG5cdFx0aXQoJ3NldHRlcnMgJiBnZXR0ZXJzICYgaXNWYWxpZCcsICgpID0+IHtcblx0XHRcdHZhciBlcnIgPSBuZXcganNvbnJwYy5Kc29uUnBjRXJyb3IoKTtcblx0XHRcdGVyci5zZXRNZXNzYWdlKCdzb21lIG1lc3NhZ2UnKS5zZXRDb2RlKDEpO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKGVyci5nZXRNZXNzYWdlKCksICdzb21lIG1lc3NhZ2UnKTtcblx0XHRcdGFzc2VydC5lcXVhbChlcnIuZ2V0Q29kZSgpLCAxKTtcblx0XHRcdGFzc2VydC5lcXVhbChqc29ucnBjLkpzb25ScGNFcnJvci5pc1ZhbGlkKGVyciksIHRydWUpO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKGpzb25ycGMuSnNvblJwY0Vycm9yLmlzVmFsaWQoe1xuXHRcdFx0XHRtZXNzYWdlIDogXCJzb21lIG1lc3NhZ2VcIixcblx0XHRcdFx0Y29kZSA6IDFcblx0XHRcdH0pLCB0cnVlKTtcblx0XHR9KTtcblx0fSk7XG5cdGRlc2NyaWJlKCdpc3ZhbGlkIGlucHV0JywgKCkgPT4ge1xuXHRcdGl0KCdzZXR0ZXJzICYgZ2V0dGVycyAmIGlzVmFsaWQnLCAoKSA9PiB7XG5cdFx0XHR2YXIgZXJyID0gbmV3IGpzb25ycGMuSnNvblJwY0Vycm9yKCk7XG5cdFx0XHRhc3NlcnQudGhyb3dzKCgpID0+IHtcblx0XHRcdFx0ZXJyLnNldE1lc3NhZ2UoZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRhc3NlcnQudGhyb3dzKCgpID0+IHtcblx0XHRcdFx0ZXJyLnNldENvZGUodHJ1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdGFzc2VydC5lcXVhbChqc29ucnBjLkpzb25ScGNFcnJvci5pc1ZhbGlkKHtcblx0XHRcdFx0bWVzc2FnZSA6IGZhbHNlLFxuXHRcdFx0XHRjb2RlIDogdHJ1ZVxuXHRcdFx0fSksIGZhbHNlKTtcblx0XHR9KTtcblx0fSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
