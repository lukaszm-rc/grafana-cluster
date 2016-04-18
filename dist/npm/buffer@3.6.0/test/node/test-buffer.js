'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      /* */
      (function (process) {
        'use strict';

        if (process.env.OBJECT_IMPL) global.TYPED_ARRAY_SUPPORT = false;
        var Buffer = require('../../index').Buffer;
        var common = {};
        var assert = require('assert');
        var Buffer = require('../../index').Buffer;
        var SlowBuffer = require('../../index').SlowBuffer;
        var cntr = 0;
        var b = Buffer(1024);
        assert.strictEqual(1024, b.length);
        b[0] = 255;
        assert.strictEqual(b[0], 255);
        for (var i = 0; i < 1024; i++) {
          b[i] = i % 256;
        }
        for (var i = 0; i < 1024; i++) {
          assert.strictEqual(i % 256, b[i]);
        }
        var c = new Buffer(512);
        assert.strictEqual(512, c.length);
        assert.throws(function () {
          Buffer(8).fill('a', -1);
        });
        assert.throws(function () {
          Buffer(8).fill('a', 0, 9);
        });
        Buffer(8).fill('');
        var buf = new Buffer(64);
        buf.fill(10);
        for (var i = 0; i < buf.length; i++) {
          assert.equal(buf[i], 10);
        }buf.fill(11, 0, buf.length >> 1);
        for (var i = 0; i < buf.length >> 1; i++) {
          assert.equal(buf[i], 11);
        }for (var i = (buf.length >> 1) + 1; i < buf.length; i++) {
          assert.equal(buf[i], 10);
        }buf.fill('h');
        for (var i = 0; i < buf.length; i++) {
          assert.equal('h'.charCodeAt(0), buf[i]);
        }buf.fill(0);
        for (var i = 0; i < buf.length; i++) {
          assert.equal(0, buf[i]);
        }buf.fill(null);
        for (var i = 0; i < buf.length; i++) {
          assert.equal(0, buf[i]);
        }buf.fill(1, 16, 32);
        for (var i = 0; i < 16; i++) {
          assert.equal(0, buf[i]);
        }for (; i < 32; i++) {
          assert.equal(1, buf[i]);
        }for (; i < buf.length; i++) {
          assert.equal(0, buf[i]);
        }var buf = new Buffer(10);
        buf.fill('abc');
        assert.equal(buf.toString(), 'abcabcabca');
        buf.fill('է');
        assert.equal(buf.toString(), 'էէէէէ');
        b.fill(++cntr);
        c.fill(++cntr);
        var copied = b.copy(c, 0, 0, 512);
        assert.strictEqual(512, copied);
        for (var i = 0; i < c.length; i++) {
          assert.strictEqual(b[i], c[i]);
        }
        b.fill(++cntr);
        c.fill(++cntr);
        var copied = c.copy(b, 0, 0);
        assert.strictEqual(c.length, copied);
        for (var i = 0; i < c.length; i++) {
          assert.strictEqual(c[i], b[i]);
        }
        b.fill(++cntr);
        c.fill(++cntr);
        var copied = c.copy(b, 0);
        assert.strictEqual(c.length, copied);
        for (var i = 0; i < c.length; i++) {
          assert.strictEqual(c[i], b[i]);
        }
        b.fill(++cntr);
        c.fill(++cntr);
        var copied = b.copy(c);
        assert.strictEqual(c.length, copied);
        for (var i = 0; i < c.length; i++) {
          assert.strictEqual(b[i], c[i]);
        }
        b.fill(++cntr);
        c.fill(++cntr);
        var copied = b.copy(c, 0, b.length - Math.floor(c.length / 2));
        assert.strictEqual(Math.floor(c.length / 2), copied);
        for (var i = 0; i < Math.floor(c.length / 2); i++) {
          assert.strictEqual(b[b.length - Math.floor(c.length / 2) + i], c[i]);
        }
        for (var i = Math.floor(c.length / 2) + 1; i < c.length; i++) {
          assert.strictEqual(c[c.length - 1], c[i]);
        }
        b.fill(++cntr);
        c.fill(++cntr);
        var copied = b.copy(c, 0, 0, 513);
        assert.strictEqual(c.length, copied);
        for (var i = 0; i < c.length; i++) {
          assert.strictEqual(b[i], c[i]);
        }
        b.fill(++cntr);
        b.fill(++cntr, 256);
        var copied = b.copy(b, 0, 256, 1024);
        assert.strictEqual(768, copied);
        for (var i = 0; i < b.length; i++) {
          assert.strictEqual(cntr, b[i]);
        }
        var bb = new Buffer(10);
        bb.fill('hello crazy world');
        var caught_error = null;
        caught_error = null;
        try {
          var copied = b.copy(c, 0, 100, 10);
        } catch (err) {
          caught_error = err;
        }
        assert.throws(function () {
          Buffer(5).copy(Buffer(5), 0, -1);
        }, RangeError);
        b.fill(++cntr);
        c.fill(++cntr);
        var copied = b.copy(c, 0, 0, 1025);
        for (var i = 0; i < c.length; i++) {
          assert.strictEqual(b[i], c[i]);
        }
        assert.throws(function () {
          b.copy(c, 0, 0, -1);
        }, RangeError);
        assert.equal(b.copy(c, 0, 100, 10), 0);
        assert.equal(b.copy(c, 512, 0, 10), 0);
        var caught_error;
        caught_error = null;
        try {
          var copied = b.toString('invalid');
        } catch (err) {
          caught_error = err;
        }
        assert.strictEqual('Unknown encoding: invalid', caught_error.message);
        caught_error = null;
        try {
          var copied = b.write('test string', 0, 5, 'invalid');
        } catch (err) {
          caught_error = err;
        }
        assert.strictEqual('Unknown encoding: invalid', caught_error.message);
        new Buffer('');
        new Buffer('', 'ascii');
        new Buffer('', 'binary');
        new Buffer(0);
        assert.throws(function () {
          b.write('', 2048);
        }, RangeError);
        assert.throws(function () {
          b.write('a', -1);
        }, RangeError);
        assert.throws(function () {
          b.write('a', 2048);
        }, RangeError);
        assert.throws(function () {
          b.write('a', -1);
        }, RangeError);
        b.copy(new Buffer(0), 0, 0, 0);
        b.copy(new Buffer(0), 1, 1, 1);
        b.copy(new Buffer(1), 1, 1, 1);
        b.copy(new Buffer(1), 0, 2048, 2048);
        assert.equal(new Buffer('abc').toString('ascii', 0, 0), '');
        assert.equal(new Buffer('abc').toString('ascii', -100, -100), '');
        assert.equal(new Buffer('abc').toString('ascii', 100, 100), '');
        assert.equal(new Buffer('abc').toString({ toString: function toString() {
            return 'ascii';
          } }), 'abc');
        var writeTest = new Buffer('abcdes');
        writeTest.write('n', 'ascii');
        writeTest.write('o', 'ascii', '1');
        writeTest.write('d', '2', 'ascii');
        writeTest.write('e', 3, 'ascii');
        writeTest.write('j', 'ascii', 4);
        assert.equal(writeTest.toString(), 'nodejs');
        var asciiString = 'hello world';
        var offset = 100;
        for (var i = 0; i < asciiString.length; i++) {
          b[i] = asciiString.charCodeAt(i);
        }
        var asciiSlice = b.toString('ascii', 0, asciiString.length);
        assert.equal(asciiString, asciiSlice);
        var written = b.write(asciiString, offset, 'ascii');
        assert.equal(asciiString.length, written);
        var asciiSlice = b.toString('ascii', offset, offset + asciiString.length);
        assert.equal(asciiString, asciiSlice);
        var sliceA = b.slice(offset, offset + asciiString.length);
        var sliceB = b.slice(offset, offset + asciiString.length);
        for (var i = 0; i < asciiString.length; i++) {
          assert.equal(sliceA[i], sliceB[i]);
        }
        var utf8String = '¡hέlló wôrld!';
        var offset = 100;
        b.write(utf8String, 0, Buffer.byteLength(utf8String), 'utf8');
        var utf8Slice = b.toString('utf8', 0, Buffer.byteLength(utf8String));
        assert.equal(utf8String, utf8Slice);
        var written = b.write(utf8String, offset, 'utf8');
        assert.equal(Buffer.byteLength(utf8String), written);
        utf8Slice = b.toString('utf8', offset, offset + Buffer.byteLength(utf8String));
        assert.equal(utf8String, utf8Slice);
        var sliceA = b.slice(offset, offset + Buffer.byteLength(utf8String));
        var sliceB = b.slice(offset, offset + Buffer.byteLength(utf8String));
        for (var i = 0; i < Buffer.byteLength(utf8String); i++) {
          assert.equal(sliceA[i], sliceB[i]);
        }
        var slice = b.slice(100, 150);
        assert.equal(50, slice.length);
        for (var i = 0; i < 50; i++) {
          assert.equal(b[100 + i], slice[i]);
        }
        var b = new Buffer(5);
        var c = b.slice(0, 4);
        var d = c.slice(0, 2);
        assert.equal(b.parent, c.parent);
        assert.equal(b.parent, d.parent);
        var b = new SlowBuffer(5);
        var c = b.slice(0, 4);
        var d = c.slice(0, 2);
        var testValue = 'ö日本語';
        var buffer = new Buffer(32);
        var size = buffer.write(testValue, 0, 'utf8');
        var slice = buffer.toString('utf8', 0, size);
        assert.equal(slice, testValue);
        var a = new Buffer(8);
        for (var i = 0; i < 8; i++) {
          a[i] = i;
        }var b = a.slice(4, 8);
        assert.equal(4, b[0]);
        assert.equal(5, b[1]);
        assert.equal(6, b[2]);
        assert.equal(7, b[3]);
        var c = b.slice(2, 4);
        assert.equal(6, c[0]);
        assert.equal(7, c[1]);
        var d = new Buffer([23, 42, 255]);
        assert.equal(d.length, 3);
        assert.equal(d[0], 23);
        assert.equal(d[1], 42);
        assert.equal(d[2], 255);
        assert.deepEqual(d, new Buffer(d));
        var e = new Buffer('über');
        assert.deepEqual(e, new Buffer([195, 188, 98, 101, 114]));
        var f = new Buffer('über', 'ascii');
        assert.deepEqual(f, new Buffer([252, 98, 101, 114]));
        ['ucs2', 'ucs-2', 'utf16le', 'utf-16le'].forEach(function (encoding) {
          var f = new Buffer('über', encoding);
          assert.deepEqual(f, new Buffer([252, 0, 98, 0, 101, 0, 114, 0]));
          var f = new Buffer('привет', encoding);
          assert.deepEqual(f, new Buffer([63, 4, 64, 4, 56, 4, 50, 4, 53, 4, 66, 4]));
          assert.equal(f.toString(encoding), 'привет');
          var f = new Buffer([0, 0, 0, 0, 0]);
          assert.equal(f.length, 5);
          var size = f.write('あいうえお', encoding);
          assert.equal(size, 4);
          assert.deepEqual(f, new Buffer([0x42, 0x30, 0x44, 0x30, 0x00]));
        });
        var f = new Buffer('👍', 'utf-16le');
        assert.equal(f.length, 4);
        assert.deepEqual(f, new Buffer('3DD84DDC', 'hex'));
        var arrayIsh = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          length: 4
        };
        var g = new Buffer(arrayIsh);
        assert.deepEqual(g, new Buffer([0, 1, 2, 3]));
        var strArrayIsh = {
          0: '0',
          1: '1',
          2: '2',
          3: '3',
          length: 4
        };
        g = new Buffer(strArrayIsh);
        assert.deepEqual(g, new Buffer([0, 1, 2, 3]));
        assert.equal('TWFu', new Buffer('Man').toString('base64'));
        var expected = [0xff, 0xff, 0xbe, 0xff, 0xef, 0xbf, 0xfb, 0xef, 0xff];
        assert.deepEqual(Buffer('//++/++/++//', 'base64'), Buffer(expected));
        assert.deepEqual(Buffer('__--_--_--__', 'base64'), Buffer(expected));
        var quote = 'Man is distinguished, not only by his reason, but by this ' + 'singular passion from other animals, which is a lust ' + 'of the mind, that by a perseverance of delight in the continued ' + 'and indefatigable generation of knowledge, exceeds the short ' + 'vehemence of any carnal pleasure.';
        var expected = 'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24s' + 'IGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltY' + 'WxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZX' + 'JzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmR' + 'lZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRo' + 'ZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=';
        assert.equal(expected, new Buffer(quote).toString('base64'));
        b = new Buffer(1024);
        var bytesWritten = b.write(expected, 0, 'base64');
        assert.equal(quote.length, bytesWritten);
        assert.equal(quote, b.toString('ascii', 0, quote.length));
        var expectedWhite = expected.slice(0, 60) + ' \n' + expected.slice(60, 120) + ' \n' + expected.slice(120, 180) + ' \n' + expected.slice(180, 240) + ' \n' + expected.slice(240, 300) + '\n' + expected.slice(300, 360) + '\n';
        b = new Buffer(1024);
        bytesWritten = b.write(expectedWhite, 0, 'base64');
        assert.equal(quote.length, bytesWritten);
        assert.equal(quote, b.toString('ascii', 0, quote.length));
        b = new Buffer(expectedWhite, 'base64');
        assert.equal(quote.length, b.length);
        assert.equal(quote, b.toString('ascii', 0, quote.length));
        var expectedIllegal = expected.slice(0, 60) + ' \x80' + expected.slice(60, 120) + ' \xff' + expected.slice(120, 180) + ' \x00' + expected.slice(180, 240) + ' \x98' + expected.slice(240, 300) + '\x03' + expected.slice(300, 360);
        b = new Buffer(expectedIllegal, 'base64');
        assert.equal(quote.length, b.length);
        assert.equal(quote, b.toString('ascii', 0, quote.length));
        assert.equal(new Buffer('', 'base64').toString(), '');
        assert.equal(new Buffer('K', 'base64').toString(), '');
        assert.equal(new Buffer('Kg==', 'base64').toString(), '*');
        assert.equal(new Buffer('Kio=', 'base64').toString(), '**');
        assert.equal(new Buffer('Kioq', 'base64').toString(), '***');
        assert.equal(new Buffer('KioqKg==', 'base64').toString(), '****');
        assert.equal(new Buffer('KioqKio=', 'base64').toString(), '*****');
        assert.equal(new Buffer('KioqKioq', 'base64').toString(), '******');
        assert.equal(new Buffer('KioqKioqKg==', 'base64').toString(), '*******');
        assert.equal(new Buffer('KioqKioqKio=', 'base64').toString(), '********');
        assert.equal(new Buffer('KioqKioqKioq', 'base64').toString(), '*********');
        assert.equal(new Buffer('KioqKioqKioqKg==', 'base64').toString(), '**********');
        assert.equal(new Buffer('KioqKioqKioqKio=', 'base64').toString(), '***********');
        assert.equal(new Buffer('KioqKioqKioqKioq', 'base64').toString(), '************');
        assert.equal(new Buffer('KioqKioqKioqKioqKg==', 'base64').toString(), '*************');
        assert.equal(new Buffer('KioqKioqKioqKioqKio=', 'base64').toString(), '**************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioq', 'base64').toString(), '***************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKg==', 'base64').toString(), '****************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKio=', 'base64').toString(), '*****************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKioq', 'base64').toString(), '******************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKioqKg==', 'base64').toString(), '*******************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKioqKio=', 'base64').toString(), '********************');
        assert.equal(new Buffer('Kg', 'base64').toString(), '*');
        assert.equal(new Buffer('Kio', 'base64').toString(), '**');
        assert.equal(new Buffer('KioqKg', 'base64').toString(), '****');
        assert.equal(new Buffer('KioqKio', 'base64').toString(), '*****');
        assert.equal(new Buffer('KioqKioqKg', 'base64').toString(), '*******');
        assert.equal(new Buffer('KioqKioqKio', 'base64').toString(), '********');
        assert.equal(new Buffer('KioqKioqKioqKg', 'base64').toString(), '**********');
        assert.equal(new Buffer('KioqKioqKioqKio', 'base64').toString(), '***********');
        assert.equal(new Buffer('KioqKioqKioqKioqKg', 'base64').toString(), '*************');
        assert.equal(new Buffer('KioqKioqKioqKioqKio', 'base64').toString(), '**************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKg', 'base64').toString(), '****************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKio', 'base64').toString(), '*****************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKioqKg', 'base64').toString(), '*******************');
        assert.equal(new Buffer('KioqKioqKioqKioqKioqKioqKio', 'base64').toString(), '********************');
        assert.equal(new Buffer('72INjkR5fchcxk9+VgdGPFJDxUBFR5/rMFsghgxADiw==', 'base64').length, 32);
        assert.equal(new Buffer('72INjkR5fchcxk9+VgdGPFJDxUBFR5/rMFsghgxADiw=', 'base64').length, 32);
        assert.equal(new Buffer('72INjkR5fchcxk9+VgdGPFJDxUBFR5/rMFsghgxADiw', 'base64').length, 32);
        assert.equal(new Buffer('w69jACy6BgZmaFvv96HG6MYksWytuZu3T1FvGnulPg==', 'base64').length, 31);
        assert.equal(new Buffer('w69jACy6BgZmaFvv96HG6MYksWytuZu3T1FvGnulPg=', 'base64').length, 31);
        assert.equal(new Buffer('w69jACy6BgZmaFvv96HG6MYksWytuZu3T1FvGnulPg', 'base64').length, 31);
        var dot = new Buffer('//4uAA==', 'base64');
        assert.equal(dot[0], 0xff);
        assert.equal(dot[1], 0xfe);
        assert.equal(dot[2], 0x2e);
        assert.equal(dot[3], 0x00);
        assert.equal(dot.toString('base64'), '//4uAA==');
        var segments = ['TWFkbmVzcz8h', 'IFRoaXM=', 'IGlz', 'IG5vZGUuanMh'];
        var buf = new Buffer(64);
        var pos = 0;
        for (var i = 0; i < segments.length; ++i) {
          pos += b.write(segments[i], pos, 'base64');
        }
        assert.equal(b.toString('binary', 0, pos), 'Madness?! This is node.js!');
        var l = Buffer.poolSize + 5;
        var s = '';
        for (i = 0; i < l; i++) {
          s += 'h';
        }
        var b = new Buffer(s);
        for (i = 0; i < l; i++) {
          assert.equal('h'.charCodeAt(0), b[i]);
        }
        var sb = b.toString();
        assert.equal(sb.length, s.length);
        assert.equal(sb, s);
        b = new Buffer('abcde');
        assert.equal('bcde', b.slice(1).toString());
        assert.equal(0, Buffer('hello').slice(0, 0).length);
        var hexb = new Buffer(256);
        for (var i = 0; i < 256; i++) {
          hexb[i] = i;
        }
        var hexStr = hexb.toString('hex');
        assert.equal(hexStr, '000102030405060708090a0b0c0d0e0f' + '101112131415161718191a1b1c1d1e1f' + '202122232425262728292a2b2c2d2e2f' + '303132333435363738393a3b3c3d3e3f' + '404142434445464748494a4b4c4d4e4f' + '505152535455565758595a5b5c5d5e5f' + '606162636465666768696a6b6c6d6e6f' + '707172737475767778797a7b7c7d7e7f' + '808182838485868788898a8b8c8d8e8f' + '909192939495969798999a9b9c9d9e9f' + 'a0a1a2a3a4a5a6a7a8a9aaabacadaeaf' + 'b0b1b2b3b4b5b6b7b8b9babbbcbdbebf' + 'c0c1c2c3c4c5c6c7c8c9cacbcccdcecf' + 'd0d1d2d3d4d5d6d7d8d9dadbdcdddedf' + 'e0e1e2e3e4e5e6e7e8e9eaebecedeeef' + 'f0f1f2f3f4f5f6f7f8f9fafbfcfdfeff');
        var hexb2 = new Buffer(hexStr, 'hex');
        for (var i = 0; i < 256; i++) {
          assert.equal(hexb2[i], hexb[i]);
        }
        var b = new Buffer([1, 2, 3, 4, 5]);
        var b2 = b.toString('hex', 1, 10000);
        var b3 = b.toString('hex', 1, 5);
        var b4 = b.toString('hex', 1);
        assert.equal(b2, b3);
        assert.equal(b2, b4);
        function buildBuffer(data) {
          if (Array.isArray(data)) {
            var buffer = new Buffer(data.length);
            data.forEach(function (v, k) {
              buffer[k] = v;
            });
            return buffer;
          }
          return null;
        }
        var x = buildBuffer([0x81, 0xa3, 0x66, 0x6f, 0x6f, 0xa3, 0x62, 0x61, 0x72]);
        assert.equal('<Buffer 81 a3 66 6f 6f a3 62 61 72>', x.inspect());
        var z = x.slice(4);
        assert.equal(5, z.length);
        assert.equal(0x6f, z[0]);
        assert.equal(0xa3, z[1]);
        assert.equal(0x62, z[2]);
        assert.equal(0x61, z[3]);
        assert.equal(0x72, z[4]);
        var z = x.slice(0);
        assert.equal(z.length, x.length);
        var z = x.slice(0, 4);
        assert.equal(4, z.length);
        assert.equal(0x81, z[0]);
        assert.equal(0xa3, z[1]);
        var z = x.slice(0, 9);
        assert.equal(9, z.length);
        var z = x.slice(1, 4);
        assert.equal(3, z.length);
        assert.equal(0xa3, z[0]);
        var z = x.slice(2, 4);
        assert.equal(2, z.length);
        assert.equal(0x66, z[0]);
        assert.equal(0x6f, z[1]);
        assert.equal(0, Buffer('hello').slice(0, 0).length);
        ['ucs2', 'ucs-2', 'utf16le', 'utf-16le'].forEach(function (encoding) {
          var b = new Buffer(10);
          b.write('あいうえお', encoding);
          assert.equal(b.toString(encoding), 'あいうえお');
        });
        var b = Buffer([0xde, 0xad, 0xbe, 0xef]);
        var s = String.fromCharCode(0xffff);
        b.write(s, 0, 'binary');
        assert.equal(0xff, b[0]);
        assert.equal(0xad, b[1]);
        assert.equal(0xbe, b[2]);
        assert.equal(0xef, b[3]);
        s = String.fromCharCode(0xaaee);
        b.write(s, 0, 'binary');
        assert.equal(0xee, b[0]);
        assert.equal(0xad, b[1]);
        assert.equal(0xbe, b[2]);
        assert.equal(0xef, b[3]);
        var buf = new Buffer('\0');
        assert.equal(buf.length, 1);
        buf = new Buffer('\0\0');
        assert.equal(buf.length, 2);
        buf = new Buffer(2);
        var written = buf.write('');
        assert.equal(written, 0);
        written = buf.write('\0');
        assert.equal(written, 1);
        written = buf.write('a\0');
        assert.equal(written, 2);
        written = buf.write('あ');
        assert.equal(written, 0);
        written = buf.write('\0あ');
        assert.equal(written, 1);
        written = buf.write('\0\0あ');
        assert.equal(written, 2);
        buf = new Buffer(10);
        written = buf.write('あいう');
        assert.equal(written, 9);
        written = buf.write('あいう\0');
        assert.equal(written, 10);
        var buf = new Buffer(4);
        buf.fill(0xFF);
        var written = buf.write('abcd', 1, 2, 'utf8');
        assert.equal(written, 2);
        assert.equal(buf[0], 0xFF);
        assert.equal(buf[1], 0x61);
        assert.equal(buf[2], 0x62);
        assert.equal(buf[3], 0xFF);
        buf.fill(0xFF);
        written = buf.write('abcd', 1, 4);
        assert.equal(written, 3);
        assert.equal(buf[0], 0xFF);
        assert.equal(buf[1], 0x61);
        assert.equal(buf[2], 0x62);
        assert.equal(buf[3], 0x63);
        buf.fill(0xFF);
        written = buf.write('abcd', 'utf8', 1, 2);
        assert.equal(written, 2);
        assert.equal(buf[0], 0xFF);
        assert.equal(buf[1], 0x61);
        assert.equal(buf[2], 0x62);
        assert.equal(buf[3], 0xFF);
        buf.fill(0xFF);
        written = buf.write('abcdef', 1, 2, 'hex');
        assert.equal(written, 2);
        assert.equal(buf[0], 0xFF);
        assert.equal(buf[1], 0xAB);
        assert.equal(buf[2], 0xCD);
        assert.equal(buf[3], 0xFF);
        ['ucs2', 'ucs-2', 'utf16le', 'utf-16le'].forEach(function (encoding) {
          buf.fill(0xFF);
          written = buf.write('abcd', 0, 2, encoding);
          assert.equal(written, 2);
          assert.equal(buf[0], 0x61);
          assert.equal(buf[1], 0x00);
          assert.equal(buf[2], 0xFF);
          assert.equal(buf[3], 0xFF);
        });
        var b = new Buffer(16);
        assert.equal(4, b.writeUInt32LE(0, 0));
        assert.equal(6, b.writeUInt16LE(0, 4));
        assert.equal(7, b.writeUInt8(0, 6));
        assert.equal(8, b.writeInt8(0, 7));
        assert.equal(16, b.writeDoubleLE(0, 8));
        buf = new Buffer('ab�cd', 'utf8');
        assert.equal(buf[0], 0x61);
        assert.equal(buf[1], 0x62);
        assert.equal(buf[2], 0xef);
        assert.equal(buf[3], 0xbf);
        assert.equal(buf[4], 0xbd);
        assert.equal(buf[5], 0x63);
        assert.equal(buf[6], 0x64);
        buf = new Buffer([0, 0, 0, 0, 0]);
        var sub = buf.slice(0, 4);
        written = sub.write('12345', 'binary');
        assert.equal(written, 4);
        assert.equal(buf[4], 0);
        Buffer(3.3).fill().toString();
        assert.equal(Buffer(-1).length, 0);
        assert.equal(Buffer(NaN).length, 0);
        assert.equal(Buffer(3.3).length, 3);
        assert.equal(Buffer({ length: 3.3 }).length, 3);
        assert.equal(Buffer({ length: 'BAM' }).length, 0);
        assert.equal(Buffer('99').length, 2);
        assert.equal(Buffer('13.37').length, 5);
        'ascii utf8 hex base64 binary'.split(' ').forEach(function (enc) {
          assert.equal(Buffer(1).write('aaaaaa', 0, 1, enc), 1);
        });
        var a = Buffer(3);
        var b = Buffer('xxx');
        a.write('aaaaaaaa', 'base64');
        assert.equal(b.toString(), 'xxx');
        Buffer(Buffer(0), 0, 0);
        ['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le'].forEach(function (enc) {
          assert.equal(Buffer.isEncoding(enc), true);
        });
        ['utf9', 'utf-7', 'Unicode-FTW', 'new gnu gun'].forEach(function (enc) {
          assert.equal(Buffer.isEncoding(enc), false);
        });
        (function () {
          var buffer = new Buffer('test'),
              string = JSON.stringify(buffer);
          assert.equal(string, '{"type":"Buffer","data":[116,101,115,116]}');
          assert.deepEqual(buffer, JSON.parse(string, function (key, value) {
            return value && value.type === 'Buffer' ? new Buffer(value.data) : value;
          }));
        })();
        (function () {
          var buf = new Buffer('test');
          var json = JSON.stringify(buf);
          var obj = JSON.parse(json);
          var copy = new Buffer(obj);
          assert(buf.equals(copy));
        })();
        assert.throws(function () {
          new Buffer(0xFFFFFFFF);
        }, RangeError);
        assert.throws(function () {
          new Buffer(0xFFFFFFFFF);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.readFloatLE(0xffffffff);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.writeFloatLE(0.0, 0xffffffff);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.readFloatLE(0xffffffff);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.writeFloatLE(0.0, 0xffffffff);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.readFloatLE(-1);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.writeFloatLE(0.0, -1);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.readFloatLE(-1);
        }, RangeError);
        assert.throws(function () {
          var buf = new Buffer(8);
          buf.writeFloatLE(0.0, -1);
        }, RangeError);
        var buf = new Buffer(0);
        assert.throws(function () {
          buf.readUInt8(0);
        }, RangeError);
        assert.throws(function () {
          buf.readInt8(0);
        }, RangeError);
        var buf = new Buffer([0xFF]);
        assert.equal(buf.readUInt8(0), 255);
        assert.equal(buf.readInt8(0), -1);
        [16, 32].forEach(function (bits) {
          var buf = new Buffer(bits / 8 - 1);
          assert.throws(function () {
            buf['readUInt' + bits + 'BE'](0);
          }, RangeError, 'readUInt' + bits + 'BE');
          assert.throws(function () {
            buf['readUInt' + bits + 'LE'](0);
          }, RangeError, 'readUInt' + bits + 'LE');
          assert.throws(function () {
            buf['readInt' + bits + 'BE'](0);
          }, RangeError, 'readInt' + bits + 'BE()');
          assert.throws(function () {
            buf['readInt' + bits + 'LE'](0);
          }, RangeError, 'readInt' + bits + 'LE()');
        });
        [16, 32].forEach(function (bits) {
          var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF]);
          assert.equal(buf['readUInt' + bits + 'BE'](0), 0xFFFFFFFF >>> 32 - bits);
          assert.equal(buf['readUInt' + bits + 'LE'](0), 0xFFFFFFFF >>> 32 - bits);
          assert.equal(buf['readInt' + bits + 'BE'](0), 0xFFFFFFFF >> 32 - bits);
          assert.equal(buf['readInt' + bits + 'LE'](0), 0xFFFFFFFF >> 32 - bits);
        });
        (function () {
          var buf = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06]);
          assert.equal(buf.readUIntLE(0, 1), 0x01);
          assert.equal(buf.readUIntBE(0, 1), 0x01);
          assert.equal(buf.readUIntLE(0, 3), 0x030201);
          assert.equal(buf.readUIntBE(0, 3), 0x010203);
          assert.equal(buf.readUIntLE(0, 5), 0x0504030201);
          assert.equal(buf.readUIntBE(0, 5), 0x0102030405);
          assert.equal(buf.readUIntLE(0, 6), 0x060504030201);
          assert.equal(buf.readUIntBE(0, 6), 0x010203040506);
          assert.equal(buf.readIntLE(0, 1), 0x01);
          assert.equal(buf.readIntBE(0, 1), 0x01);
          assert.equal(buf.readIntLE(0, 3), 0x030201);
          assert.equal(buf.readIntBE(0, 3), 0x010203);
          assert.equal(buf.readIntLE(0, 5), 0x0504030201);
          assert.equal(buf.readIntBE(0, 5), 0x0102030405);
          assert.equal(buf.readIntLE(0, 6), 0x060504030201);
          assert.equal(buf.readIntBE(0, 6), 0x010203040506);
        })();
        (function () {
          var buf = new Buffer(3);
          buf.writeUIntLE(0x123456, 0, 3);
          assert.deepEqual(buf.toJSON().data, [0x56, 0x34, 0x12]);
          assert.equal(buf.readUIntLE(0, 3), 0x123456);
          buf = new Buffer(3);
          buf.writeUIntBE(0x123456, 0, 3);
          assert.deepEqual(buf.toJSON().data, [0x12, 0x34, 0x56]);
          assert.equal(buf.readUIntBE(0, 3), 0x123456);
          buf = new Buffer(3);
          buf.writeIntLE(0x123456, 0, 3);
          assert.deepEqual(buf.toJSON().data, [0x56, 0x34, 0x12]);
          assert.equal(buf.readIntLE(0, 3), 0x123456);
          buf = new Buffer(3);
          buf.writeIntBE(0x123456, 0, 3);
          assert.deepEqual(buf.toJSON().data, [0x12, 0x34, 0x56]);
          assert.equal(buf.readIntBE(0, 3), 0x123456);
          buf = new Buffer(3);
          buf.writeIntLE(-0x123456, 0, 3);
          assert.deepEqual(buf.toJSON().data, [0xaa, 0xcb, 0xed]);
          assert.equal(buf.readIntLE(0, 3), -0x123456);
          buf = new Buffer(3);
          buf.writeIntBE(-0x123456, 0, 3);
          assert.deepEqual(buf.toJSON().data, [0xed, 0xcb, 0xaa]);
          assert.equal(buf.readIntBE(0, 3), -0x123456);
          buf = new Buffer(5);
          buf.writeUIntLE(0x1234567890, 0, 5);
          assert.deepEqual(buf.toJSON().data, [0x90, 0x78, 0x56, 0x34, 0x12]);
          assert.equal(buf.readUIntLE(0, 5), 0x1234567890);
          buf = new Buffer(5);
          buf.writeUIntBE(0x1234567890, 0, 5);
          assert.deepEqual(buf.toJSON().data, [0x12, 0x34, 0x56, 0x78, 0x90]);
          assert.equal(buf.readUIntBE(0, 5), 0x1234567890);
          buf = new Buffer(5);
          buf.writeIntLE(0x1234567890, 0, 5);
          assert.deepEqual(buf.toJSON().data, [0x90, 0x78, 0x56, 0x34, 0x12]);
          assert.equal(buf.readIntLE(0, 5), 0x1234567890);
          buf = new Buffer(5);
          buf.writeIntBE(0x1234567890, 0, 5);
          assert.deepEqual(buf.toJSON().data, [0x12, 0x34, 0x56, 0x78, 0x90]);
          assert.equal(buf.readIntBE(0, 5), 0x1234567890);
          buf = new Buffer(5);
          buf.writeIntLE(-0x1234567890, 0, 5);
          assert.deepEqual(buf.toJSON().data, [0x70, 0x87, 0xa9, 0xcb, 0xed]);
          assert.equal(buf.readIntLE(0, 5), -0x1234567890);
          buf = new Buffer(5);
          buf.writeIntBE(-0x1234567890, 0, 5);
          assert.deepEqual(buf.toJSON().data, [0xed, 0xcb, 0xa9, 0x87, 0x70]);
          assert.equal(buf.readIntBE(0, 5), -0x1234567890);
        })();
        (function () {
          var buf = new Buffer('0123456789');
          assert.equal(buf.slice(-10, 10), '0123456789');
          assert.equal(buf.slice(-20, 10), '0123456789');
          assert.equal(buf.slice(-20, -10), '');
          assert.equal(buf.slice(0, -1), '012345678');
          assert.equal(buf.slice(2, -2), '234567');
          assert.equal(buf.slice(0, 65536), '0123456789');
          assert.equal(buf.slice(65536, 0), '');
          for (var i = 0, s = buf.toString(); i < buf.length; ++i) {
            assert.equal(buf.slice(-i), s.slice(-i));
            assert.equal(buf.slice(0, -i), s.slice(0, -i));
          }
          SlowBuffer(0).slice(0, 1);
        })();
        assert.throws(function () {
          Buffer('', 'buffer');
        }, TypeError);
        (function () {
          var a = [0];
          for (var i = 0; i < 7; ++i) {
            a = a.concat(a);
          }a = a.map(function (_, i) {
            return i;
          });
          var b = Buffer(a);
          var c = Buffer(b);
          assert.equal(b.length, a.length);
          assert.equal(c.length, a.length);
          for (var i = 0, k = a.length; i < k; ++i) {
            assert.equal(a[i], i);
            assert.equal(b[i], i);
            assert.equal(c[i], i);
          }
        })();
        assert.throws(function () {
          new Buffer((-1 >>> 0) + 1);
        }, RangeError);
        assert.throws(function () {
          new SlowBuffer((-1 >>> 0) + 1);
        }, RangeError);
        if (common.hasCrypto) {
          var b1 = new Buffer('YW55=======', 'base64');
          var b2 = new Buffer('YW55', 'base64');
          assert.equal(1, 1);
        } else {}
        var b = new Buffer(1).fill('a');
        var c = new Buffer(1).fill('c');
        var d = new Buffer(2).fill('aa');
        assert.equal(b.compare(c), -1);
        assert.equal(c.compare(d), 1);
        assert.equal(d.compare(b), 1);
        assert.equal(b.compare(d), -1);
        assert.equal(b.compare(b), 0);
        assert.equal(Buffer.compare(b, c), -1);
        assert.equal(Buffer.compare(c, d), 1);
        assert.equal(Buffer.compare(d, b), 1);
        assert.equal(Buffer.compare(b, d), -1);
        assert.equal(Buffer.compare(c, c), 0);
        assert.throws(function () {
          var b = new Buffer(1);
          Buffer.compare(b, 'abc');
        });
        assert.throws(function () {
          var b = new Buffer(1);
          Buffer.compare('abc', b);
        });
        assert.throws(function () {
          var b = new Buffer(1);
          b.compare('abc');
        });
        var b = new Buffer(5).fill('abcdf');
        var c = new Buffer(5).fill('abcdf');
        var d = new Buffer(5).fill('abcde');
        var e = new Buffer(6).fill('abcdef');
        assert.ok(b.equals(c));
        assert.ok(!c.equals(d));
        assert.ok(!d.equals(e));
        assert.ok(d.equals(d));
        assert.throws(function () {
          var b = new Buffer(1);
          b.equals('abc');
        });
        assert.throws(function () {
          Buffer(1422561062959).toString('utf8');
        });
        var ps = Buffer.poolSize;
        Buffer.poolSize = 0;
        assert.equal(Buffer(1).parent, undefined);
        Buffer.poolSize = ps;
        assert.throws(function () {
          Buffer(10).copy();
        });
        assert.throws(function () {
          new Buffer();
        }, /must start with number, buffer, array or string/);
        assert.throws(function () {
          new Buffer(null);
        }, /must start with number, buffer, array or string/);
      })(require('process'));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9idWZmZXJAMy42LjAvdGVzdC9ub2RlL3Rlc3QtYnVmZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFDLFVBQVMsT0FBVCxFQUFrQjtBQUNqQixxQkFEaUI7O0FBRWpCLFlBQUksUUFBUSxHQUFSLENBQVksV0FBWixFQUNGLE9BQU8sbUJBQVAsR0FBNkIsS0FBN0IsQ0FERjtBQUVBLFlBQUksU0FBUyxRQUFRLGFBQVIsRUFBdUIsTUFBdkIsQ0FKSTtBQUtqQixZQUFJLFNBQVMsRUFBVCxDQUxhO0FBTWpCLFlBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVCxDQU5hO0FBT2pCLFlBQUksU0FBUyxRQUFRLGFBQVIsRUFBdUIsTUFBdkIsQ0FQSTtBQVFqQixZQUFJLGFBQWEsUUFBUSxhQUFSLEVBQXVCLFVBQXZCLENBUkE7QUFTakIsWUFBSSxPQUFPLENBQVAsQ0FUYTtBQVVqQixZQUFJLElBQUksT0FBTyxJQUFQLENBQUosQ0FWYTtBQVdqQixlQUFPLFdBQVAsQ0FBbUIsSUFBbkIsRUFBeUIsRUFBRSxNQUFGLENBQXpCLENBWGlCO0FBWWpCLFVBQUUsQ0FBRixJQUFPLEdBQVAsQ0FaaUI7QUFhakIsZUFBTyxXQUFQLENBQW1CLEVBQUUsQ0FBRixDQUFuQixFQUF5QixHQUF6QixFQWJpQjtBQWNqQixhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxJQUFKLEVBQVUsR0FBMUIsRUFBK0I7QUFDN0IsWUFBRSxDQUFGLElBQU8sSUFBSSxHQUFKLENBRHNCO1NBQS9CO0FBR0EsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksSUFBSixFQUFVLEdBQTFCLEVBQStCO0FBQzdCLGlCQUFPLFdBQVAsQ0FBbUIsSUFBSSxHQUFKLEVBQVMsRUFBRSxDQUFGLENBQTVCLEVBRDZCO1NBQS9CO0FBR0EsWUFBSSxJQUFJLElBQUksTUFBSixDQUFXLEdBQVgsQ0FBSixDQXBCYTtBQXFCakIsZUFBTyxXQUFQLENBQW1CLEdBQW5CLEVB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Q0FBYyxZQUFXO0FBQ3ZCLGlCQUFPLGFBQVAsRUFBc0IsUUFBdEIsQ0FBK0IsTUFBL0IsRUFEdUI7U0FBWCxDQUFkLENBbHhCaUI7QUFxeEJqQixZQUFJLEtBQUssT0FBTyxRQUFQLENBcnhCUTtBQXN4QmpCLGVBQU8sUUFBUCxHQUFrQixDQUFsQixDQXR4QmlCO0FBdXhCakIsZUFBTyxLQUFQLENBQWEsT0FBTyxDQUFQLEVBQVUsTUFBVixFQUFrQixTQUEvQixFQXZ4QmlCO0FBd3hCakIsZUFBTyxRQUFQLEdBQWtCLEVBQWxCLENBeHhCaUI7QUF5eEJqQixlQUFPLE1BQVAsQ0FBYyxZQUFXO0FBQ3ZCLGlCQUFPLEVBQVAsRUFBVyxJQUFYLEdBRHVCO1NBQVgsQ0FBZCxDQXp4QmlCO0FBNHhCakIsZUFBTyxNQUFQLENBQWMsWUFBVztBQUN2QixjQUFJLE1BQUosR0FEdUI7U0FBWCxFQUVYLGlEQUZILEVBNXhCaUI7QUEreEJqQixlQUFPLE1BQVAsQ0FBYyxZQUFXO0FBQ3ZCLGNBQUksTUFBSixDQUFXLElBQVgsRUFEdUI7U0FBWCxFQUVYLGlEQUZILEVBL3hCaUI7T0FBbEIsQ0FBRCxDQWt5QkcsUUFBUSxTQUFSLENBbHlCSCIsImZpbGUiOiJucG0vYnVmZmVyQDMuNi4wL3Rlc3Qvbm9kZS90ZXN0LWJ1ZmZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICovIFxuKGZ1bmN0aW9uKHByb2Nlc3MpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAocHJvY2Vzcy5lbnYuT0JKRUNUX0lNUEwpXG4gICAgZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBmYWxzZTtcbiAgdmFyIEJ1ZmZlciA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JykuQnVmZmVyO1xuICB2YXIgY29tbW9uID0ge307XG4gIHZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbiAgdmFyIEJ1ZmZlciA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JykuQnVmZmVyO1xuICB2YXIgU2xvd0J1ZmZlciA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JykuU2xvd0J1ZmZlcjtcbiAgdmFyIGNudHIgPSAwO1xuICB2YXIgYiA9IEJ1ZmZlcigxMDI0KTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKDEwMjQsIGIubGVuZ3RoKTtcbiAgYlswXSA9IDI1NTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKGJbMF0sIDI1NSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTAyNDsgaSsrKSB7XG4gICAgYltpXSA9IGkgJSAyNTY7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDI0OyBpKyspIHtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoaSAlIDI1NiwgYltpXSk7XG4gIH1cbiAgdmFyIGMgPSBuZXcgQnVmZmVyKDUxMik7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCg1MTIsIGMubGVuZ3RoKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBCdWZmZXIoOCkuZmlsbCgnYScsIC0xKTtcbiAgfSk7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgQnVmZmVyKDgpLmZpbGwoJ2EnLCAwLCA5KTtcbiAgfSk7XG4gIEJ1ZmZlcig4KS5maWxsKCcnKTtcbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoNjQpO1xuICBidWYuZmlsbCgxMCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSsrKVxuICAgIGFzc2VydC5lcXVhbChidWZbaV0sIDEwKTtcbiAgYnVmLmZpbGwoMTEsIDAsIGJ1Zi5sZW5ndGggPj4gMSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmLmxlbmd0aCA+PiAxOyBpKyspXG4gICAgYXNzZXJ0LmVxdWFsKGJ1ZltpXSwgMTEpO1xuICBmb3IgKHZhciBpID0gKGJ1Zi5sZW5ndGggPj4gMSkgKyAxOyBpIDwgYnVmLmxlbmd0aDsgaSsrKVxuICAgIGFzc2VydC5lcXVhbChidWZbaV0sIDEwKTtcbiAgYnVmLmZpbGwoJ2gnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspXG4gICAgYXNzZXJ0LmVxdWFsKCdoJy5jaGFyQ29kZUF0KDApLCBidWZbaV0pO1xuICBidWYuZmlsbCgwKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspXG4gICAgYXNzZXJ0LmVxdWFsKDAsIGJ1ZltpXSk7XG4gIGJ1Zi5maWxsKG51bGwpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkrKylcbiAgICBhc3NlcnQuZXF1YWwoMCwgYnVmW2ldKTtcbiAgYnVmLmZpbGwoMSwgMTYsIDMyKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKVxuICAgIGFzc2VydC5lcXVhbCgwLCBidWZbaV0pO1xuICBmb3IgKDsgaSA8IDMyOyBpKyspXG4gICAgYXNzZXJ0LmVxdWFsKDEsIGJ1ZltpXSk7XG4gIGZvciAoOyBpIDwgYnVmLmxlbmd0aDsgaSsrKVxuICAgIGFzc2VydC5lcXVhbCgwLCBidWZbaV0pO1xuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcigxMCk7XG4gIGJ1Zi5maWxsKCdhYmMnKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1Zi50b1N0cmluZygpLCAnYWJjYWJjYWJjYScpO1xuICBidWYuZmlsbCgn1acnKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1Zi50b1N0cmluZygpLCAn1afVp9Wn1afVpycpO1xuICBiLmZpbGwoKytjbnRyKTtcbiAgYy5maWxsKCsrY250cik7XG4gIHZhciBjb3BpZWQgPSBiLmNvcHkoYywgMCwgMCwgNTEyKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKDUxMiwgY29waWVkKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGJbaV0sIGNbaV0pO1xuICB9XG4gIGIuZmlsbCgrK2NudHIpO1xuICBjLmZpbGwoKytjbnRyKTtcbiAgdmFyIGNvcGllZCA9IGMuY29weShiLCAwLCAwKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKGMubGVuZ3RoLCBjb3BpZWQpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoY1tpXSwgYltpXSk7XG4gIH1cbiAgYi5maWxsKCsrY250cik7XG4gIGMuZmlsbCgrK2NudHIpO1xuICB2YXIgY29waWVkID0gYy5jb3B5KGIsIDApO1xuICBhc3NlcnQuc3RyaWN0RXF1YWwoYy5sZW5ndGgsIGNvcGllZCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgIGFzc2VydC5zdHJpY3RFcXVhbChjW2ldLCBiW2ldKTtcbiAgfVxuICBiLmZpbGwoKytjbnRyKTtcbiAgYy5maWxsKCsrY250cik7XG4gIHZhciBjb3BpZWQgPSBiLmNvcHkoYyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbChjLmxlbmd0aCwgY29waWVkKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGJbaV0sIGNbaV0pO1xuICB9XG4gIGIuZmlsbCgrK2NudHIpO1xuICBjLmZpbGwoKytjbnRyKTtcbiAgdmFyIGNvcGllZCA9IGIuY29weShjLCAwLCBiLmxlbmd0aCAtIE1hdGguZmxvb3IoYy5sZW5ndGggLyAyKSk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbChNYXRoLmZsb29yKGMubGVuZ3RoIC8gMiksIGNvcGllZCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgTWF0aC5mbG9vcihjLmxlbmd0aCAvIDIpOyBpKyspIHtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoYltiLmxlbmd0aCAtIE1hdGguZmxvb3IoYy5sZW5ndGggLyAyKSArIGldLCBjW2ldKTtcbiAgfVxuICBmb3IgKHZhciBpID0gTWF0aC5mbG9vcihjLmxlbmd0aCAvIDIpICsgMTsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoY1tjLmxlbmd0aCAtIDFdLCBjW2ldKTtcbiAgfVxuICBiLmZpbGwoKytjbnRyKTtcbiAgYy5maWxsKCsrY250cik7XG4gIHZhciBjb3BpZWQgPSBiLmNvcHkoYywgMCwgMCwgNTEzKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKGMubGVuZ3RoLCBjb3BpZWQpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoYltpXSwgY1tpXSk7XG4gIH1cbiAgYi5maWxsKCsrY250cik7XG4gIGIuZmlsbCgrK2NudHIsIDI1Nik7XG4gIHZhciBjb3BpZWQgPSBiLmNvcHkoYiwgMCwgMjU2LCAxMDI0KTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKDc2OCwgY29waWVkKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGNudHIsIGJbaV0pO1xuICB9XG4gIHZhciBiYiA9IG5ldyBCdWZmZXIoMTApO1xuICBiYi5maWxsKCdoZWxsbyBjcmF6eSB3b3JsZCcpO1xuICB2YXIgY2F1Z2h0X2Vycm9yID0gbnVsbDtcbiAgY2F1Z2h0X2Vycm9yID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB2YXIgY29waWVkID0gYi5jb3B5KGMsIDAsIDEwMCwgMTApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjYXVnaHRfZXJyb3IgPSBlcnI7XG4gIH1cbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBCdWZmZXIoNSkuY29weShCdWZmZXIoNSksIDAsIC0xKTtcbiAgfSwgUmFuZ2VFcnJvcik7XG4gIGIuZmlsbCgrK2NudHIpO1xuICBjLmZpbGwoKytjbnRyKTtcbiAgdmFyIGNvcGllZCA9IGIuY29weShjLCAwLCAwLCAxMDI1KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGJbaV0sIGNbaV0pO1xuICB9XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgYi5jb3B5KGMsIDAsIDAsIC0xKTtcbiAgfSwgUmFuZ2VFcnJvcik7XG4gIGFzc2VydC5lcXVhbChiLmNvcHkoYywgMCwgMTAwLCAxMCksIDApO1xuICBhc3NlcnQuZXF1YWwoYi5jb3B5KGMsIDUxMiwgMCwgMTApLCAwKTtcbiAgdmFyIGNhdWdodF9lcnJvcjtcbiAgY2F1Z2h0X2Vycm9yID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB2YXIgY29waWVkID0gYi50b1N0cmluZygnaW52YWxpZCcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjYXVnaHRfZXJyb3IgPSBlcnI7XG4gIH1cbiAgYXNzZXJ0LnN0cmljdEVxdWFsKCdVbmtub3duIGVuY29kaW5nOiBpbnZhbGlkJywgY2F1Z2h0X2Vycm9yLm1lc3NhZ2UpO1xuICBjYXVnaHRfZXJyb3IgPSBudWxsO1xuICB0cnkge1xuICAgIHZhciBjb3BpZWQgPSBiLndyaXRlKCd0ZXN0IHN0cmluZycsIDAsIDUsICdpbnZhbGlkJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNhdWdodF9lcnJvciA9IGVycjtcbiAgfVxuICBhc3NlcnQuc3RyaWN0RXF1YWwoJ1Vua25vd24gZW5jb2Rpbmc6IGludmFsaWQnLCBjYXVnaHRfZXJyb3IubWVzc2FnZSk7XG4gIG5ldyBCdWZmZXIoJycpO1xuICBuZXcgQnVmZmVyKCcnLCAnYXNjaWknKTtcbiAgbmV3IEJ1ZmZlcignJywgJ2JpbmFyeScpO1xuICBuZXcgQnVmZmVyKDApO1xuICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgIGIud3JpdGUoJycsIDIwNDgpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBiLndyaXRlKCdhJywgLTEpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBiLndyaXRlKCdhJywgMjA0OCk7XG4gIH0sIFJhbmdlRXJyb3IpO1xuICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgIGIud3JpdGUoJ2EnLCAtMSk7XG4gIH0sIFJhbmdlRXJyb3IpO1xuICBiLmNvcHkobmV3IEJ1ZmZlcigwKSwgMCwgMCwgMCk7XG4gIGIuY29weShuZXcgQnVmZmVyKDApLCAxLCAxLCAxKTtcbiAgYi5jb3B5KG5ldyBCdWZmZXIoMSksIDEsIDEsIDEpO1xuICBiLmNvcHkobmV3IEJ1ZmZlcigxKSwgMCwgMjA0OCwgMjA0OCk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdhYmMnKS50b1N0cmluZygnYXNjaWknLCAwLCAwKSwgJycpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignYWJjJykudG9TdHJpbmcoJ2FzY2lpJywgLTEwMCwgLTEwMCksICcnKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ2FiYycpLnRvU3RyaW5nKCdhc2NpaScsIDEwMCwgMTAwKSwgJycpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignYWJjJykudG9TdHJpbmcoe3RvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnYXNjaWknO1xuICAgIH19KSwgJ2FiYycpO1xuICB2YXIgd3JpdGVUZXN0ID0gbmV3IEJ1ZmZlcignYWJjZGVzJyk7XG4gIHdyaXRlVGVzdC53cml0ZSgnbicsICdhc2NpaScpO1xuICB3cml0ZVRlc3Qud3JpdGUoJ28nLCAnYXNjaWknLCAnMScpO1xuICB3cml0ZVRlc3Qud3JpdGUoJ2QnLCAnMicsICdhc2NpaScpO1xuICB3cml0ZVRlc3Qud3JpdGUoJ2UnLCAzLCAnYXNjaWknKTtcbiAgd3JpdGVUZXN0LndyaXRlKCdqJywgJ2FzY2lpJywgNCk7XG4gIGFzc2VydC5lcXVhbCh3cml0ZVRlc3QudG9TdHJpbmcoKSwgJ25vZGVqcycpO1xuICB2YXIgYXNjaWlTdHJpbmcgPSAnaGVsbG8gd29ybGQnO1xuICB2YXIgb2Zmc2V0ID0gMTAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzY2lpU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgYltpXSA9IGFzY2lpU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgdmFyIGFzY2lpU2xpY2UgPSBiLnRvU3RyaW5nKCdhc2NpaScsIDAsIGFzY2lpU3RyaW5nLmxlbmd0aCk7XG4gIGFzc2VydC5lcXVhbChhc2NpaVN0cmluZywgYXNjaWlTbGljZSk7XG4gIHZhciB3cml0dGVuID0gYi53cml0ZShhc2NpaVN0cmluZywgb2Zmc2V0LCAnYXNjaWknKTtcbiAgYXNzZXJ0LmVxdWFsKGFzY2lpU3RyaW5nLmxlbmd0aCwgd3JpdHRlbik7XG4gIHZhciBhc2NpaVNsaWNlID0gYi50b1N0cmluZygnYXNjaWknLCBvZmZzZXQsIG9mZnNldCArIGFzY2lpU3RyaW5nLmxlbmd0aCk7XG4gIGFzc2VydC5lcXVhbChhc2NpaVN0cmluZywgYXNjaWlTbGljZSk7XG4gIHZhciBzbGljZUEgPSBiLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgYXNjaWlTdHJpbmcubGVuZ3RoKTtcbiAgdmFyIHNsaWNlQiA9IGIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBhc2NpaVN0cmluZy5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzY2lpU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgYXNzZXJ0LmVxdWFsKHNsaWNlQVtpXSwgc2xpY2VCW2ldKTtcbiAgfVxuICB2YXIgdXRmOFN0cmluZyA9ICfCoWjOrWxsw7Mgd8O0cmxkISc7XG4gIHZhciBvZmZzZXQgPSAxMDA7XG4gIGIud3JpdGUodXRmOFN0cmluZywgMCwgQnVmZmVyLmJ5dGVMZW5ndGgodXRmOFN0cmluZyksICd1dGY4Jyk7XG4gIHZhciB1dGY4U2xpY2UgPSBiLnRvU3RyaW5nKCd1dGY4JywgMCwgQnVmZmVyLmJ5dGVMZW5ndGgodXRmOFN0cmluZykpO1xuICBhc3NlcnQuZXF1YWwodXRmOFN0cmluZywgdXRmOFNsaWNlKTtcbiAgdmFyIHdyaXR0ZW4gPSBiLndyaXRlKHV0ZjhTdHJpbmcsIG9mZnNldCwgJ3V0ZjgnKTtcbiAgYXNzZXJ0LmVxdWFsKEJ1ZmZlci5ieXRlTGVuZ3RoKHV0ZjhTdHJpbmcpLCB3cml0dGVuKTtcbiAgdXRmOFNsaWNlID0gYi50b1N0cmluZygndXRmOCcsIG9mZnNldCwgb2Zmc2V0ICsgQnVmZmVyLmJ5dGVMZW5ndGgodXRmOFN0cmluZykpO1xuICBhc3NlcnQuZXF1YWwodXRmOFN0cmluZywgdXRmOFNsaWNlKTtcbiAgdmFyIHNsaWNlQSA9IGIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBCdWZmZXIuYnl0ZUxlbmd0aCh1dGY4U3RyaW5nKSk7XG4gIHZhciBzbGljZUIgPSBiLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgQnVmZmVyLmJ5dGVMZW5ndGgodXRmOFN0cmluZykpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IEJ1ZmZlci5ieXRlTGVuZ3RoKHV0ZjhTdHJpbmcpOyBpKyspIHtcbiAgICBhc3NlcnQuZXF1YWwoc2xpY2VBW2ldLCBzbGljZUJbaV0pO1xuICB9XG4gIHZhciBzbGljZSA9IGIuc2xpY2UoMTAwLCAxNTApO1xuICBhc3NlcnQuZXF1YWwoNTAsIHNsaWNlLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNTA7IGkrKykge1xuICAgIGFzc2VydC5lcXVhbChiWzEwMCArIGldLCBzbGljZVtpXSk7XG4gIH1cbiAgdmFyIGIgPSBuZXcgQnVmZmVyKDUpO1xuICB2YXIgYyA9IGIuc2xpY2UoMCwgNCk7XG4gIHZhciBkID0gYy5zbGljZSgwLCAyKTtcbiAgYXNzZXJ0LmVxdWFsKGIucGFyZW50LCBjLnBhcmVudCk7XG4gIGFzc2VydC5lcXVhbChiLnBhcmVudCwgZC5wYXJlbnQpO1xuICB2YXIgYiA9IG5ldyBTbG93QnVmZmVyKDUpO1xuICB2YXIgYyA9IGIuc2xpY2UoMCwgNCk7XG4gIHZhciBkID0gYy5zbGljZSgwLCAyKTtcbiAgdmFyIHRlc3RWYWx1ZSA9ICdcXHUwMEY2XFx1NjVFNVxcdTY3MkNcXHU4QTlFJztcbiAgdmFyIGJ1ZmZlciA9IG5ldyBCdWZmZXIoMzIpO1xuICB2YXIgc2l6ZSA9IGJ1ZmZlci53cml0ZSh0ZXN0VmFsdWUsIDAsICd1dGY4Jyk7XG4gIHZhciBzbGljZSA9IGJ1ZmZlci50b1N0cmluZygndXRmOCcsIDAsIHNpemUpO1xuICBhc3NlcnQuZXF1YWwoc2xpY2UsIHRlc3RWYWx1ZSk7XG4gIHZhciBhID0gbmV3IEJ1ZmZlcig4KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspXG4gICAgYVtpXSA9IGk7XG4gIHZhciBiID0gYS5zbGljZSg0LCA4KTtcbiAgYXNzZXJ0LmVxdWFsKDQsIGJbMF0pO1xuICBhc3NlcnQuZXF1YWwoNSwgYlsxXSk7XG4gIGFzc2VydC5lcXVhbCg2LCBiWzJdKTtcbiAgYXNzZXJ0LmVxdWFsKDcsIGJbM10pO1xuICB2YXIgYyA9IGIuc2xpY2UoMiwgNCk7XG4gIGFzc2VydC5lcXVhbCg2LCBjWzBdKTtcbiAgYXNzZXJ0LmVxdWFsKDcsIGNbMV0pO1xuICB2YXIgZCA9IG5ldyBCdWZmZXIoWzIzLCA0MiwgMjU1XSk7XG4gIGFzc2VydC5lcXVhbChkLmxlbmd0aCwgMyk7XG4gIGFzc2VydC5lcXVhbChkWzBdLCAyMyk7XG4gIGFzc2VydC5lcXVhbChkWzFdLCA0Mik7XG4gIGFzc2VydC5lcXVhbChkWzJdLCAyNTUpO1xuICBhc3NlcnQuZGVlcEVxdWFsKGQsIG5ldyBCdWZmZXIoZCkpO1xuICB2YXIgZSA9IG5ldyBCdWZmZXIoJ8O8YmVyJyk7XG4gIGFzc2VydC5kZWVwRXF1YWwoZSwgbmV3IEJ1ZmZlcihbMTk1LCAxODgsIDk4LCAxMDEsIDExNF0pKTtcbiAgdmFyIGYgPSBuZXcgQnVmZmVyKCfDvGJlcicsICdhc2NpaScpO1xuICBhc3NlcnQuZGVlcEVxdWFsKGYsIG5ldyBCdWZmZXIoWzI1MiwgOTgsIDEwMSwgMTE0XSkpO1xuICBbJ3VjczInLCAndWNzLTInLCAndXRmMTZsZScsICd1dGYtMTZsZSddLmZvckVhY2goZnVuY3Rpb24oZW5jb2RpbmcpIHtcbiAgICB2YXIgZiA9IG5ldyBCdWZmZXIoJ8O8YmVyJywgZW5jb2RpbmcpO1xuICAgIGFzc2VydC5kZWVwRXF1YWwoZiwgbmV3IEJ1ZmZlcihbMjUyLCAwLCA5OCwgMCwgMTAxLCAwLCAxMTQsIDBdKSk7XG4gICAgdmFyIGYgPSBuZXcgQnVmZmVyKCfQv9GA0LjQstC10YInLCBlbmNvZGluZyk7XG4gICAgYXNzZXJ0LmRlZXBFcXVhbChmLCBuZXcgQnVmZmVyKFs2MywgNCwgNjQsIDQsIDU2LCA0LCA1MCwgNCwgNTMsIDQsIDY2LCA0XSkpO1xuICAgIGFzc2VydC5lcXVhbChmLnRvU3RyaW5nKGVuY29kaW5nKSwgJ9C/0YDQuNCy0LXRgicpO1xuICAgIHZhciBmID0gbmV3IEJ1ZmZlcihbMCwgMCwgMCwgMCwgMF0pO1xuICAgIGFzc2VydC5lcXVhbChmLmxlbmd0aCwgNSk7XG4gICAgdmFyIHNpemUgPSBmLndyaXRlKCfjgYLjgYTjgYbjgYjjgYonLCBlbmNvZGluZyk7XG4gICAgYXNzZXJ0LmVxdWFsKHNpemUsIDQpO1xuICAgIGFzc2VydC5kZWVwRXF1YWwoZiwgbmV3IEJ1ZmZlcihbMHg0MiwgMHgzMCwgMHg0NCwgMHgzMCwgMHgwMF0pKTtcbiAgfSk7XG4gIHZhciBmID0gbmV3IEJ1ZmZlcignXFx1RDgzRFxcdURDNEQnLCAndXRmLTE2bGUnKTtcbiAgYXNzZXJ0LmVxdWFsKGYubGVuZ3RoLCA0KTtcbiAgYXNzZXJ0LmRlZXBFcXVhbChmLCBuZXcgQnVmZmVyKCczREQ4NEREQycsICdoZXgnKSk7XG4gIHZhciBhcnJheUlzaCA9IHtcbiAgICAwOiAwLFxuICAgIDE6IDEsXG4gICAgMjogMixcbiAgICAzOiAzLFxuICAgIGxlbmd0aDogNFxuICB9O1xuICB2YXIgZyA9IG5ldyBCdWZmZXIoYXJyYXlJc2gpO1xuICBhc3NlcnQuZGVlcEVxdWFsKGcsIG5ldyBCdWZmZXIoWzAsIDEsIDIsIDNdKSk7XG4gIHZhciBzdHJBcnJheUlzaCA9IHtcbiAgICAwOiAnMCcsXG4gICAgMTogJzEnLFxuICAgIDI6ICcyJyxcbiAgICAzOiAnMycsXG4gICAgbGVuZ3RoOiA0XG4gIH07XG4gIGcgPSBuZXcgQnVmZmVyKHN0ckFycmF5SXNoKTtcbiAgYXNzZXJ0LmRlZXBFcXVhbChnLCBuZXcgQnVmZmVyKFswLCAxLCAyLCAzXSkpO1xuICBhc3NlcnQuZXF1YWwoJ1RXRnUnLCAobmV3IEJ1ZmZlcignTWFuJykpLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gIHZhciBleHBlY3RlZCA9IFsweGZmLCAweGZmLCAweGJlLCAweGZmLCAweGVmLCAweGJmLCAweGZiLCAweGVmLCAweGZmXTtcbiAgYXNzZXJ0LmRlZXBFcXVhbChCdWZmZXIoJy8vKysvKysvKysvLycsICdiYXNlNjQnKSwgQnVmZmVyKGV4cGVjdGVkKSk7XG4gIGFzc2VydC5kZWVwRXF1YWwoQnVmZmVyKCdfXy0tXy0tXy0tX18nLCAnYmFzZTY0JyksIEJ1ZmZlcihleHBlY3RlZCkpO1xuICB2YXIgcXVvdGUgPSAnTWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzICcgKyAnc2luZ3VsYXIgcGFzc2lvbiBmcm9tIG90aGVyIGFuaW1hbHMsIHdoaWNoIGlzIGEgbHVzdCAnICsgJ29mIHRoZSBtaW5kLCB0aGF0IGJ5IGEgcGVyc2V2ZXJhbmNlIG9mIGRlbGlnaHQgaW4gdGhlIGNvbnRpbnVlZCAnICsgJ2FuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCAnICsgJ3ZlaGVtZW5jZSBvZiBhbnkgY2FybmFsIHBsZWFzdXJlLic7XG4gIHZhciBleHBlY3RlZCA9ICdUV0Z1SUdseklHUnBjM1JwYm1kMWFYTm9aV1FzSUc1dmRDQnZibXg1SUdKNUlHaHBjeUJ5WldGemIyNHMnICsgJ0lHSjFkQ0JpZVNCMGFHbHpJSE5wYm1kMWJHRnlJSEJoYzNOcGIyNGdabkp2YlNCdmRHaGxjaUJoYm1sdFknICsgJ1d4ekxDQjNhR2xqYUNCcGN5QmhJR3gxYzNRZ2IyWWdkR2hsSUcxcGJtUXNJSFJvWVhRZ1lua2dZU0J3WlgnICsgJ0p6WlhabGNtRnVZMlVnYjJZZ1pHVnNhV2RvZENCcGJpQjBhR1VnWTI5dWRHbHVkV1ZrSUdGdVpDQnBibVInICsgJ2xabUYwYVdkaFlteGxJR2RsYm1WeVlYUnBiMjRnYjJZZ2EyNXZkMnhsWkdkbExDQmxlR05sWldSeklIUm8nICsgJ1pTQnphRzl5ZENCMlpXaGxiV1Z1WTJVZ2IyWWdZVzU1SUdOaGNtNWhiQ0J3YkdWaGMzVnlaUzQ9JztcbiAgYXNzZXJ0LmVxdWFsKGV4cGVjdGVkLCAobmV3IEJ1ZmZlcihxdW90ZSkpLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gIGIgPSBuZXcgQnVmZmVyKDEwMjQpO1xuICB2YXIgYnl0ZXNXcml0dGVuID0gYi53cml0ZShleHBlY3RlZCwgMCwgJ2Jhc2U2NCcpO1xuICBhc3NlcnQuZXF1YWwocXVvdGUubGVuZ3RoLCBieXRlc1dyaXR0ZW4pO1xuICBhc3NlcnQuZXF1YWwocXVvdGUsIGIudG9TdHJpbmcoJ2FzY2lpJywgMCwgcXVvdGUubGVuZ3RoKSk7XG4gIHZhciBleHBlY3RlZFdoaXRlID0gZXhwZWN0ZWQuc2xpY2UoMCwgNjApICsgJyBcXG4nICsgZXhwZWN0ZWQuc2xpY2UoNjAsIDEyMCkgKyAnIFxcbicgKyBleHBlY3RlZC5zbGljZSgxMjAsIDE4MCkgKyAnIFxcbicgKyBleHBlY3RlZC5zbGljZSgxODAsIDI0MCkgKyAnIFxcbicgKyBleHBlY3RlZC5zbGljZSgyNDAsIDMwMCkgKyAnXFxuJyArIGV4cGVjdGVkLnNsaWNlKDMwMCwgMzYwKSArICdcXG4nO1xuICBiID0gbmV3IEJ1ZmZlcigxMDI0KTtcbiAgYnl0ZXNXcml0dGVuID0gYi53cml0ZShleHBlY3RlZFdoaXRlLCAwLCAnYmFzZTY0Jyk7XG4gIGFzc2VydC5lcXVhbChxdW90ZS5sZW5ndGgsIGJ5dGVzV3JpdHRlbik7XG4gIGFzc2VydC5lcXVhbChxdW90ZSwgYi50b1N0cmluZygnYXNjaWknLCAwLCBxdW90ZS5sZW5ndGgpKTtcbiAgYiA9IG5ldyBCdWZmZXIoZXhwZWN0ZWRXaGl0ZSwgJ2Jhc2U2NCcpO1xuICBhc3NlcnQuZXF1YWwocXVvdGUubGVuZ3RoLCBiLmxlbmd0aCk7XG4gIGFzc2VydC5lcXVhbChxdW90ZSwgYi50b1N0cmluZygnYXNjaWknLCAwLCBxdW90ZS5sZW5ndGgpKTtcbiAgdmFyIGV4cGVjdGVkSWxsZWdhbCA9IGV4cGVjdGVkLnNsaWNlKDAsIDYwKSArICcgXFx4ODAnICsgZXhwZWN0ZWQuc2xpY2UoNjAsIDEyMCkgKyAnIFxceGZmJyArIGV4cGVjdGVkLnNsaWNlKDEyMCwgMTgwKSArICcgXFx4MDAnICsgZXhwZWN0ZWQuc2xpY2UoMTgwLCAyNDApICsgJyBcXHg5OCcgKyBleHBlY3RlZC5zbGljZSgyNDAsIDMwMCkgKyAnXFx4MDMnICsgZXhwZWN0ZWQuc2xpY2UoMzAwLCAzNjApO1xuICBiID0gbmV3IEJ1ZmZlcihleHBlY3RlZElsbGVnYWwsICdiYXNlNjQnKTtcbiAgYXNzZXJ0LmVxdWFsKHF1b3RlLmxlbmd0aCwgYi5sZW5ndGgpO1xuICBhc3NlcnQuZXF1YWwocXVvdGUsIGIudG9TdHJpbmcoJ2FzY2lpJywgMCwgcXVvdGUubGVuZ3RoKSk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCcnLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJycpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignSycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLZz09JywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW89JywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2c9PScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcUtpbz0nLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtnPT0nLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvPScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtpb3FLZz09JywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqKioqKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtpb3FLaW89JywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqKioqKioqKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcUtpb3FLaW9xS2lvcScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtpb3FLaW9xS2c9PScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcUtpb3FLaW9xS2lvcUtpbz0nLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqKioqKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtpb3FLaW9xS2lvcScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtpb3FLaW9xS2lvcUtnPT0nLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqKioqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvPScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcScsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLZz09JywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqKioqKioqKioqKioqKioqKioqJyk7XG4gIGFzc2VydC5lcXVhbChuZXcgQnVmZmVyKCdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW89JywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqKioqKioqKioqKioqKioqKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2cnLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyonKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpbycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLZycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcUtpbycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2cnLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvJywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqKioqKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcUtpb3FLaW9xS2cnLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcUtpbycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcUtpb3FLZycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcUtpb3FLaW9xS2lvcUtpbycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcUtpb3FLaW9xS2cnLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqKioqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvJywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCksICcqKioqKioqKioqKioqKioqKicpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2cnLCAnYmFzZTY0JykudG9TdHJpbmcoKSwgJyoqKioqKioqKioqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpbycsICdiYXNlNjQnKS50b1N0cmluZygpLCAnKioqKioqKioqKioqKioqKioqKionKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJzcySU5qa1I1ZmNoY3hrOStWZ2RHUEZKRHhVQkZSNS9yTUZzZ2hneEFEaXc9PScsICdiYXNlNjQnKS5sZW5ndGgsIDMyKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJzcySU5qa1I1ZmNoY3hrOStWZ2RHUEZKRHhVQkZSNS9yTUZzZ2hneEFEaXc9JywgJ2Jhc2U2NCcpLmxlbmd0aCwgMzIpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcignNzJJTmprUjVmY2hjeGs5K1ZnZEdQRkpEeFVCRlI1L3JNRnNnaGd4QURpdycsICdiYXNlNjQnKS5sZW5ndGgsIDMyKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ3c2OWpBQ3k2QmdabWFGdnY5NkhHNk1Za3NXeXR1WnUzVDFGdkdudWxQZz09JywgJ2Jhc2U2NCcpLmxlbmd0aCwgMzEpO1xuICBhc3NlcnQuZXF1YWwobmV3IEJ1ZmZlcigndzY5akFDeTZCZ1ptYUZ2djk2SEc2TVlrc1d5dHVadTNUMUZ2R251bFBnPScsICdiYXNlNjQnKS5sZW5ndGgsIDMxKTtcbiAgYXNzZXJ0LmVxdWFsKG5ldyBCdWZmZXIoJ3c2OWpBQ3k2QmdabWFGdnY5NkhHNk1Za3NXeXR1WnUzVDFGdkdudWxQZycsICdiYXNlNjQnKS5sZW5ndGgsIDMxKTtcbiAgdmFyIGRvdCA9IG5ldyBCdWZmZXIoJy8vNHVBQT09JywgJ2Jhc2U2NCcpO1xuICBhc3NlcnQuZXF1YWwoZG90WzBdLCAweGZmKTtcbiAgYXNzZXJ0LmVxdWFsKGRvdFsxXSwgMHhmZSk7XG4gIGFzc2VydC5lcXVhbChkb3RbMl0sIDB4MmUpO1xuICBhc3NlcnQuZXF1YWwoZG90WzNdLCAweDAwKTtcbiAgYXNzZXJ0LmVxdWFsKGRvdC50b1N0cmluZygnYmFzZTY0JyksICcvLzR1QUE9PScpO1xuICB2YXIgc2VnbWVudHMgPSBbJ1RXRmtibVZ6Y3o4aCcsICdJRlJvYVhNPScsICdJR2x6JywgJ0lHNXZaR1V1YW5NaCddO1xuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcig2NCk7XG4gIHZhciBwb3MgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgcG9zICs9IGIud3JpdGUoc2VnbWVudHNbaV0sIHBvcywgJ2Jhc2U2NCcpO1xuICB9XG4gIGFzc2VydC5lcXVhbChiLnRvU3RyaW5nKCdiaW5hcnknLCAwLCBwb3MpLCAnTWFkbmVzcz8hIFRoaXMgaXMgbm9kZS5qcyEnKTtcbiAgdmFyIGwgPSBCdWZmZXIucG9vbFNpemUgKyA1O1xuICB2YXIgcyA9ICcnO1xuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgcyArPSAnaCc7XG4gIH1cbiAgdmFyIGIgPSBuZXcgQnVmZmVyKHMpO1xuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgYXNzZXJ0LmVxdWFsKCdoJy5jaGFyQ29kZUF0KDApLCBiW2ldKTtcbiAgfVxuICB2YXIgc2IgPSBiLnRvU3RyaW5nKCk7XG4gIGFzc2VydC5lcXVhbChzYi5sZW5ndGgsIHMubGVuZ3RoKTtcbiAgYXNzZXJ0LmVxdWFsKHNiLCBzKTtcbiAgYiA9IG5ldyBCdWZmZXIoJ2FiY2RlJyk7XG4gIGFzc2VydC5lcXVhbCgnYmNkZScsIGIuc2xpY2UoMSkudG9TdHJpbmcoKSk7XG4gIGFzc2VydC5lcXVhbCgwLCBCdWZmZXIoJ2hlbGxvJykuc2xpY2UoMCwgMCkubGVuZ3RoKTtcbiAgdmFyIGhleGIgPSBuZXcgQnVmZmVyKDI1Nik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBoZXhiW2ldID0gaTtcbiAgfVxuICB2YXIgaGV4U3RyID0gaGV4Yi50b1N0cmluZygnaGV4Jyk7XG4gIGFzc2VydC5lcXVhbChoZXhTdHIsICcwMDAxMDIwMzA0MDUwNjA3MDgwOTBhMGIwYzBkMGUwZicgKyAnMTAxMTEyMTMxNDE1MTYxNzE4MTkxYTFiMWMxZDFlMWYnICsgJzIwMjEyMjIzMjQyNTI2MjcyODI5MmEyYjJjMmQyZTJmJyArICczMDMxMzIzMzM0MzUzNjM3MzgzOTNhM2IzYzNkM2UzZicgKyAnNDA0MTQyNDM0NDQ1NDY0NzQ4NDk0YTRiNGM0ZDRlNGYnICsgJzUwNTE1MjUzNTQ1NTU2NTc1ODU5NWE1YjVjNWQ1ZTVmJyArICc2MDYxNjI2MzY0NjU2NjY3Njg2OTZhNmI2YzZkNmU2ZicgKyAnNzA3MTcyNzM3NDc1NzY3Nzc4Nzk3YTdiN2M3ZDdlN2YnICsgJzgwODE4MjgzODQ4NTg2ODc4ODg5OGE4YjhjOGQ4ZThmJyArICc5MDkxOTI5Mzk0OTU5Njk3OTg5OTlhOWI5YzlkOWU5ZicgKyAnYTBhMWEyYTNhNGE1YTZhN2E4YTlhYWFiYWNhZGFlYWYnICsgJ2IwYjFiMmIzYjRiNWI2YjdiOGI5YmFiYmJjYmRiZWJmJyArICdjMGMxYzJjM2M0YzVjNmM3YzhjOWNhY2JjY2NkY2VjZicgKyAnZDBkMWQyZDNkNGQ1ZDZkN2Q4ZDlkYWRiZGNkZGRlZGYnICsgJ2UwZTFlMmUzZTRlNWU2ZTdlOGU5ZWFlYmVjZWRlZWVmJyArICdmMGYxZjJmM2Y0ZjVmNmY3ZjhmOWZhZmJmY2ZkZmVmZicpO1xuICB2YXIgaGV4YjIgPSBuZXcgQnVmZmVyKGhleFN0ciwgJ2hleCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgYXNzZXJ0LmVxdWFsKGhleGIyW2ldLCBoZXhiW2ldKTtcbiAgfVxuICB2YXIgYiA9IG5ldyBCdWZmZXIoWzEsIDIsIDMsIDQsIDVdKTtcbiAgdmFyIGIyID0gYi50b1N0cmluZygnaGV4JywgMSwgMTAwMDApO1xuICB2YXIgYjMgPSBiLnRvU3RyaW5nKCdoZXgnLCAxLCA1KTtcbiAgdmFyIGI0ID0gYi50b1N0cmluZygnaGV4JywgMSk7XG4gIGFzc2VydC5lcXVhbChiMiwgYjMpO1xuICBhc3NlcnQuZXF1YWwoYjIsIGI0KTtcbiAgZnVuY3Rpb24gYnVpbGRCdWZmZXIoZGF0YSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICB2YXIgYnVmZmVyID0gbmV3IEJ1ZmZlcihkYXRhLmxlbmd0aCk7XG4gICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24odiwgaykge1xuICAgICAgICBidWZmZXJba10gPSB2O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgeCA9IGJ1aWxkQnVmZmVyKFsweDgxLCAweGEzLCAweDY2LCAweDZmLCAweDZmLCAweGEzLCAweDYyLCAweDYxLCAweDcyXSk7XG4gIGFzc2VydC5lcXVhbCgnPEJ1ZmZlciA4MSBhMyA2NiA2ZiA2ZiBhMyA2MiA2MSA3Mj4nLCB4Lmluc3BlY3QoKSk7XG4gIHZhciB6ID0geC5zbGljZSg0KTtcbiAgYXNzZXJ0LmVxdWFsKDUsIHoubGVuZ3RoKTtcbiAgYXNzZXJ0LmVxdWFsKDB4NmYsIHpbMF0pO1xuICBhc3NlcnQuZXF1YWwoMHhhMywgelsxXSk7XG4gIGFzc2VydC5lcXVhbCgweDYyLCB6WzJdKTtcbiAgYXNzZXJ0LmVxdWFsKDB4NjEsIHpbM10pO1xuICBhc3NlcnQuZXF1YWwoMHg3Miwgels0XSk7XG4gIHZhciB6ID0geC5zbGljZSgwKTtcbiAgYXNzZXJ0LmVxdWFsKHoubGVuZ3RoLCB4Lmxlbmd0aCk7XG4gIHZhciB6ID0geC5zbGljZSgwLCA0KTtcbiAgYXNzZXJ0LmVxdWFsKDQsIHoubGVuZ3RoKTtcbiAgYXNzZXJ0LmVxdWFsKDB4ODEsIHpbMF0pO1xuICBhc3NlcnQuZXF1YWwoMHhhMywgelsxXSk7XG4gIHZhciB6ID0geC5zbGljZSgwLCA5KTtcbiAgYXNzZXJ0LmVxdWFsKDksIHoubGVuZ3RoKTtcbiAgdmFyIHogPSB4LnNsaWNlKDEsIDQpO1xuICBhc3NlcnQuZXF1YWwoMywgei5sZW5ndGgpO1xuICBhc3NlcnQuZXF1YWwoMHhhMywgelswXSk7XG4gIHZhciB6ID0geC5zbGljZSgyLCA0KTtcbiAgYXNzZXJ0LmVxdWFsKDIsIHoubGVuZ3RoKTtcbiAgYXNzZXJ0LmVxdWFsKDB4NjYsIHpbMF0pO1xuICBhc3NlcnQuZXF1YWwoMHg2ZiwgelsxXSk7XG4gIGFzc2VydC5lcXVhbCgwLCBCdWZmZXIoJ2hlbGxvJykuc2xpY2UoMCwgMCkubGVuZ3RoKTtcbiAgWyd1Y3MyJywgJ3Vjcy0yJywgJ3V0ZjE2bGUnLCAndXRmLTE2bGUnXS5mb3JFYWNoKGZ1bmN0aW9uKGVuY29kaW5nKSB7XG4gICAgdmFyIGIgPSBuZXcgQnVmZmVyKDEwKTtcbiAgICBiLndyaXRlKCfjgYLjgYTjgYbjgYjjgYonLCBlbmNvZGluZyk7XG4gICAgYXNzZXJ0LmVxdWFsKGIudG9TdHJpbmcoZW5jb2RpbmcpLCAn44GC44GE44GG44GI44GKJyk7XG4gIH0pO1xuICB2YXIgYiA9IEJ1ZmZlcihbMHhkZSwgMHhhZCwgMHhiZSwgMHhlZl0pO1xuICB2YXIgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmZmZmKTtcbiAgYi53cml0ZShzLCAwLCAnYmluYXJ5Jyk7XG4gIGFzc2VydC5lcXVhbCgweGZmLCBiWzBdKTtcbiAgYXNzZXJ0LmVxdWFsKDB4YWQsIGJbMV0pO1xuICBhc3NlcnQuZXF1YWwoMHhiZSwgYlsyXSk7XG4gIGFzc2VydC5lcXVhbCgweGVmLCBiWzNdKTtcbiAgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhhYWVlKTtcbiAgYi53cml0ZShzLCAwLCAnYmluYXJ5Jyk7XG4gIGFzc2VydC5lcXVhbCgweGVlLCBiWzBdKTtcbiAgYXNzZXJ0LmVxdWFsKDB4YWQsIGJbMV0pO1xuICBhc3NlcnQuZXF1YWwoMHhiZSwgYlsyXSk7XG4gIGFzc2VydC5lcXVhbCgweGVmLCBiWzNdKTtcbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoJ1xcMCcpO1xuICBhc3NlcnQuZXF1YWwoYnVmLmxlbmd0aCwgMSk7XG4gIGJ1ZiA9IG5ldyBCdWZmZXIoJ1xcMFxcMCcpO1xuICBhc3NlcnQuZXF1YWwoYnVmLmxlbmd0aCwgMik7XG4gIGJ1ZiA9IG5ldyBCdWZmZXIoMik7XG4gIHZhciB3cml0dGVuID0gYnVmLndyaXRlKCcnKTtcbiAgYXNzZXJ0LmVxdWFsKHdyaXR0ZW4sIDApO1xuICB3cml0dGVuID0gYnVmLndyaXRlKCdcXDAnKTtcbiAgYXNzZXJ0LmVxdWFsKHdyaXR0ZW4sIDEpO1xuICB3cml0dGVuID0gYnVmLndyaXRlKCdhXFwwJyk7XG4gIGFzc2VydC5lcXVhbCh3cml0dGVuLCAyKTtcbiAgd3JpdHRlbiA9IGJ1Zi53cml0ZSgn44GCJyk7XG4gIGFzc2VydC5lcXVhbCh3cml0dGVuLCAwKTtcbiAgd3JpdHRlbiA9IGJ1Zi53cml0ZSgnXFww44GCJyk7XG4gIGFzc2VydC5lcXVhbCh3cml0dGVuLCAxKTtcbiAgd3JpdHRlbiA9IGJ1Zi53cml0ZSgnXFwwXFww44GCJyk7XG4gIGFzc2VydC5lcXVhbCh3cml0dGVuLCAyKTtcbiAgYnVmID0gbmV3IEJ1ZmZlcigxMCk7XG4gIHdyaXR0ZW4gPSBidWYud3JpdGUoJ+OBguOBhOOBhicpO1xuICBhc3NlcnQuZXF1YWwod3JpdHRlbiwgOSk7XG4gIHdyaXR0ZW4gPSBidWYud3JpdGUoJ+OBguOBhOOBhlxcMCcpO1xuICBhc3NlcnQuZXF1YWwod3JpdHRlbiwgMTApO1xuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcig0KTtcbiAgYnVmLmZpbGwoMHhGRik7XG4gIHZhciB3cml0dGVuID0gYnVmLndyaXRlKCdhYmNkJywgMSwgMiwgJ3V0ZjgnKTtcbiAgYXNzZXJ0LmVxdWFsKHdyaXR0ZW4sIDIpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzBdLCAweEZGKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1ZlsxXSwgMHg2MSk7XG4gIGFzc2VydC5lcXVhbChidWZbMl0sIDB4NjIpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzNdLCAweEZGKTtcbiAgYnVmLmZpbGwoMHhGRik7XG4gIHdyaXR0ZW4gPSBidWYud3JpdGUoJ2FiY2QnLCAxLCA0KTtcbiAgYXNzZXJ0LmVxdWFsKHdyaXR0ZW4sIDMpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzBdLCAweEZGKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1ZlsxXSwgMHg2MSk7XG4gIGFzc2VydC5lcXVhbChidWZbMl0sIDB4NjIpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzNdLCAweDYzKTtcbiAgYnVmLmZpbGwoMHhGRik7XG4gIHdyaXR0ZW4gPSBidWYud3JpdGUoJ2FiY2QnLCAndXRmOCcsIDEsIDIpO1xuICBhc3NlcnQuZXF1YWwod3JpdHRlbiwgMik7XG4gIGFzc2VydC5lcXVhbChidWZbMF0sIDB4RkYpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzFdLCAweDYxKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1ZlsyXSwgMHg2Mik7XG4gIGFzc2VydC5lcXVhbChidWZbM10sIDB4RkYpO1xuICBidWYuZmlsbCgweEZGKTtcbiAgd3JpdHRlbiA9IGJ1Zi53cml0ZSgnYWJjZGVmJywgMSwgMiwgJ2hleCcpO1xuICBhc3NlcnQuZXF1YWwod3JpdHRlbiwgMik7XG4gIGFzc2VydC5lcXVhbChidWZbMF0sIDB4RkYpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzFdLCAweEFCKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1ZlsyXSwgMHhDRCk7XG4gIGFzc2VydC5lcXVhbChidWZbM10sIDB4RkYpO1xuICBbJ3VjczInLCAndWNzLTInLCAndXRmMTZsZScsICd1dGYtMTZsZSddLmZvckVhY2goZnVuY3Rpb24oZW5jb2RpbmcpIHtcbiAgICBidWYuZmlsbCgweEZGKTtcbiAgICB3cml0dGVuID0gYnVmLndyaXRlKCdhYmNkJywgMCwgMiwgZW5jb2RpbmcpO1xuICAgIGFzc2VydC5lcXVhbCh3cml0dGVuLCAyKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmWzBdLCAweDYxKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmWzFdLCAweDAwKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmWzJdLCAweEZGKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmWzNdLCAweEZGKTtcbiAgfSk7XG4gIHZhciBiID0gbmV3IEJ1ZmZlcigxNik7XG4gIGFzc2VydC5lcXVhbCg0LCBiLndyaXRlVUludDMyTEUoMCwgMCkpO1xuICBhc3NlcnQuZXF1YWwoNiwgYi53cml0ZVVJbnQxNkxFKDAsIDQpKTtcbiAgYXNzZXJ0LmVxdWFsKDcsIGIud3JpdGVVSW50OCgwLCA2KSk7XG4gIGFzc2VydC5lcXVhbCg4LCBiLndyaXRlSW50OCgwLCA3KSk7XG4gIGFzc2VydC5lcXVhbCgxNiwgYi53cml0ZURvdWJsZUxFKDAsIDgpKTtcbiAgYnVmID0gbmV3IEJ1ZmZlcignYWJcXHVkODAwY2QnLCAndXRmOCcpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzBdLCAweDYxKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1ZlsxXSwgMHg2Mik7XG4gIGFzc2VydC5lcXVhbChidWZbMl0sIDB4ZWYpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzNdLCAweGJmKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1Zls0XSwgMHhiZCk7XG4gIGFzc2VydC5lcXVhbChidWZbNV0sIDB4NjMpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzZdLCAweDY0KTtcbiAgYnVmID0gbmV3IEJ1ZmZlcihbMCwgMCwgMCwgMCwgMF0pO1xuICB2YXIgc3ViID0gYnVmLnNsaWNlKDAsIDQpO1xuICB3cml0dGVuID0gc3ViLndyaXRlKCcxMjM0NScsICdiaW5hcnknKTtcbiAgYXNzZXJ0LmVxdWFsKHdyaXR0ZW4sIDQpO1xuICBhc3NlcnQuZXF1YWwoYnVmWzRdLCAwKTtcbiAgQnVmZmVyKDMuMykuZmlsbCgpLnRvU3RyaW5nKCk7XG4gIGFzc2VydC5lcXVhbChCdWZmZXIoLTEpLmxlbmd0aCwgMCk7XG4gIGFzc2VydC5lcXVhbChCdWZmZXIoTmFOKS5sZW5ndGgsIDApO1xuICBhc3NlcnQuZXF1YWwoQnVmZmVyKDMuMykubGVuZ3RoLCAzKTtcbiAgYXNzZXJ0LmVxdWFsKEJ1ZmZlcih7bGVuZ3RoOiAzLjN9KS5sZW5ndGgsIDMpO1xuICBhc3NlcnQuZXF1YWwoQnVmZmVyKHtsZW5ndGg6ICdCQU0nfSkubGVuZ3RoLCAwKTtcbiAgYXNzZXJ0LmVxdWFsKEJ1ZmZlcignOTknKS5sZW5ndGgsIDIpO1xuICBhc3NlcnQuZXF1YWwoQnVmZmVyKCcxMy4zNycpLmxlbmd0aCwgNSk7XG4gICdhc2NpaSB1dGY4IGhleCBiYXNlNjQgYmluYXJ5Jy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZW5jKSB7XG4gICAgYXNzZXJ0LmVxdWFsKEJ1ZmZlcigxKS53cml0ZSgnYWFhYWFhJywgMCwgMSwgZW5jKSwgMSk7XG4gIH0pO1xuICB2YXIgYSA9IEJ1ZmZlcigzKTtcbiAgdmFyIGIgPSBCdWZmZXIoJ3h4eCcpO1xuICBhLndyaXRlKCdhYWFhYWFhYScsICdiYXNlNjQnKTtcbiAgYXNzZXJ0LmVxdWFsKGIudG9TdHJpbmcoKSwgJ3h4eCcpO1xuICBCdWZmZXIoQnVmZmVyKDApLCAwLCAwKTtcbiAgWydoZXgnLCAndXRmOCcsICd1dGYtOCcsICdhc2NpaScsICdiaW5hcnknLCAnYmFzZTY0JywgJ3VjczInLCAndWNzLTInLCAndXRmMTZsZScsICd1dGYtMTZsZSddLmZvckVhY2goZnVuY3Rpb24oZW5jKSB7XG4gICAgYXNzZXJ0LmVxdWFsKEJ1ZmZlci5pc0VuY29kaW5nKGVuYyksIHRydWUpO1xuICB9KTtcbiAgWyd1dGY5JywgJ3V0Zi03JywgJ1VuaWNvZGUtRlRXJywgJ25ldyBnbnUgZ3VuJ10uZm9yRWFjaChmdW5jdGlvbihlbmMpIHtcbiAgICBhc3NlcnQuZXF1YWwoQnVmZmVyLmlzRW5jb2RpbmcoZW5jKSwgZmFsc2UpO1xuICB9KTtcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWZmZXIgPSBuZXcgQnVmZmVyKCd0ZXN0JyksXG4gICAgICAgIHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJ1ZmZlcik7XG4gICAgYXNzZXJ0LmVxdWFsKHN0cmluZywgJ3tcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlsxMTYsMTAxLDExNSwxMTZdfScpO1xuICAgIGFzc2VydC5kZWVwRXF1YWwoYnVmZmVyLCBKU09OLnBhcnNlKHN0cmluZywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnR5cGUgPT09ICdCdWZmZXInID8gbmV3IEJ1ZmZlcih2YWx1ZS5kYXRhKSA6IHZhbHVlO1xuICAgIH0pKTtcbiAgfSkoKTtcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKCd0ZXN0Jyk7XG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShidWYpO1xuICAgIHZhciBvYmogPSBKU09OLnBhcnNlKGpzb24pO1xuICAgIHZhciBjb3B5ID0gbmV3IEJ1ZmZlcihvYmopO1xuICAgIGFzc2VydChidWYuZXF1YWxzKGNvcHkpKTtcbiAgfSkoKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBuZXcgQnVmZmVyKDB4RkZGRkZGRkYpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBuZXcgQnVmZmVyKDB4RkZGRkZGRkZGKTtcbiAgfSwgUmFuZ2VFcnJvcik7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoOCk7XG4gICAgYnVmLnJlYWRGbG9hdExFKDB4ZmZmZmZmZmYpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcig4KTtcbiAgICBidWYud3JpdGVGbG9hdExFKDAuMCwgMHhmZmZmZmZmZik7XG4gIH0sIFJhbmdlRXJyb3IpO1xuICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKDgpO1xuICAgIGJ1Zi5yZWFkRmxvYXRMRSgweGZmZmZmZmZmKTtcbiAgfSwgUmFuZ2VFcnJvcik7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoOCk7XG4gICAgYnVmLndyaXRlRmxvYXRMRSgwLjAsIDB4ZmZmZmZmZmYpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcig4KTtcbiAgICBidWYucmVhZEZsb2F0TEUoLTEpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcig4KTtcbiAgICBidWYud3JpdGVGbG9hdExFKDAuMCwgLTEpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcig4KTtcbiAgICBidWYucmVhZEZsb2F0TEUoLTEpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcig4KTtcbiAgICBidWYud3JpdGVGbG9hdExFKDAuMCwgLTEpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoMCk7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgYnVmLnJlYWRVSW50OCgwKTtcbiAgfSwgUmFuZ2VFcnJvcik7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgYnVmLnJlYWRJbnQ4KDApO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoWzB4RkZdKTtcbiAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkVUludDgoMCksIDI1NSk7XG4gIGFzc2VydC5lcXVhbChidWYucmVhZEludDgoMCksIC0xKTtcbiAgWzE2LCAzMl0uZm9yRWFjaChmdW5jdGlvbihiaXRzKSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoYml0cyAvIDggLSAxKTtcbiAgICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgICAgYnVmWydyZWFkVUludCcgKyBiaXRzICsgJ0JFJ10oMCk7XG4gICAgfSwgUmFuZ2VFcnJvciwgJ3JlYWRVSW50JyArIGJpdHMgKyAnQkUnKTtcbiAgICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgICAgYnVmWydyZWFkVUludCcgKyBiaXRzICsgJ0xFJ10oMCk7XG4gICAgfSwgUmFuZ2VFcnJvciwgJ3JlYWRVSW50JyArIGJpdHMgKyAnTEUnKTtcbiAgICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgICAgYnVmWydyZWFkSW50JyArIGJpdHMgKyAnQkUnXSgwKTtcbiAgICB9LCBSYW5nZUVycm9yLCAncmVhZEludCcgKyBiaXRzICsgJ0JFKCknKTtcbiAgICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgICAgYnVmWydyZWFkSW50JyArIGJpdHMgKyAnTEUnXSgwKTtcbiAgICB9LCBSYW5nZUVycm9yLCAncmVhZEludCcgKyBiaXRzICsgJ0xFKCknKTtcbiAgfSk7XG4gIFsxNiwgMzJdLmZvckVhY2goZnVuY3Rpb24oYml0cykge1xuICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKFsweEZGLCAweEZGLCAweEZGLCAweEZGXSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1ZlsncmVhZFVJbnQnICsgYml0cyArICdCRSddKDApLCAoMHhGRkZGRkZGRiA+Pj4gKDMyIC0gYml0cykpKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmWydyZWFkVUludCcgKyBiaXRzICsgJ0xFJ10oMCksICgweEZGRkZGRkZGID4+PiAoMzIgLSBiaXRzKSkpO1xuICAgIGFzc2VydC5lcXVhbChidWZbJ3JlYWRJbnQnICsgYml0cyArICdCRSddKDApLCAoMHhGRkZGRkZGRiA+PiAoMzIgLSBiaXRzKSkpO1xuICAgIGFzc2VydC5lcXVhbChidWZbJ3JlYWRJbnQnICsgYml0cyArICdMRSddKDApLCAoMHhGRkZGRkZGRiA+PiAoMzIgLSBiaXRzKSkpO1xuICB9KTtcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKFsweDAxLCAweDAyLCAweDAzLCAweDA0LCAweDA1LCAweDA2XSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkVUludExFKDAsIDEpLCAweDAxKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmLnJlYWRVSW50QkUoMCwgMSksIDB4MDEpO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZFVJbnRMRSgwLCAzKSwgMHgwMzAyMDEpO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZFVJbnRCRSgwLCAzKSwgMHgwMTAyMDMpO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZFVJbnRMRSgwLCA1KSwgMHgwNTA0MDMwMjAxKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmLnJlYWRVSW50QkUoMCwgNSksIDB4MDEwMjAzMDQwNSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkVUludExFKDAsIDYpLCAweDA2MDUwNDAzMDIwMSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkVUludEJFKDAsIDYpLCAweDAxMDIwMzA0MDUwNik7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkSW50TEUoMCwgMSksIDB4MDEpO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZEludEJFKDAsIDEpLCAweDAxKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmLnJlYWRJbnRMRSgwLCAzKSwgMHgwMzAyMDEpO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZEludEJFKDAsIDMpLCAweDAxMDIwMyk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkSW50TEUoMCwgNSksIDB4MDUwNDAzMDIwMSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkSW50QkUoMCwgNSksIDB4MDEwMjAzMDQwNSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkSW50TEUoMCwgNiksIDB4MDYwNTA0MDMwMjAxKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmLnJlYWRJbnRCRSgwLCA2KSwgMHgwMTAyMDMwNDA1MDYpO1xuICB9KSgpO1xuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoMyk7XG4gICAgYnVmLndyaXRlVUludExFKDB4MTIzNDU2LCAwLCAzKTtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGJ1Zi50b0pTT04oKS5kYXRhLCBbMHg1NiwgMHgzNCwgMHgxMl0pO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZFVJbnRMRSgwLCAzKSwgMHgxMjM0NTYpO1xuICAgIGJ1ZiA9IG5ldyBCdWZmZXIoMyk7XG4gICAgYnVmLndyaXRlVUludEJFKDB4MTIzNDU2LCAwLCAzKTtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGJ1Zi50b0pTT04oKS5kYXRhLCBbMHgxMiwgMHgzNCwgMHg1Nl0pO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZFVJbnRCRSgwLCAzKSwgMHgxMjM0NTYpO1xuICAgIGJ1ZiA9IG5ldyBCdWZmZXIoMyk7XG4gICAgYnVmLndyaXRlSW50TEUoMHgxMjM0NTYsIDAsIDMpO1xuICAgIGFzc2VydC5kZWVwRXF1YWwoYnVmLnRvSlNPTigpLmRhdGEsIFsweDU2LCAweDM0LCAweDEyXSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkSW50TEUoMCwgMyksIDB4MTIzNDU2KTtcbiAgICBidWYgPSBuZXcgQnVmZmVyKDMpO1xuICAgIGJ1Zi53cml0ZUludEJFKDB4MTIzNDU2LCAwLCAzKTtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGJ1Zi50b0pTT04oKS5kYXRhLCBbMHgxMiwgMHgzNCwgMHg1Nl0pO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZEludEJFKDAsIDMpLCAweDEyMzQ1Nik7XG4gICAgYnVmID0gbmV3IEJ1ZmZlcigzKTtcbiAgICBidWYud3JpdGVJbnRMRSgtMHgxMjM0NTYsIDAsIDMpO1xuICAgIGFzc2VydC5kZWVwRXF1YWwoYnVmLnRvSlNPTigpLmRhdGEsIFsweGFhLCAweGNiLCAweGVkXSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkSW50TEUoMCwgMyksIC0weDEyMzQ1Nik7XG4gICAgYnVmID0gbmV3IEJ1ZmZlcigzKTtcbiAgICBidWYud3JpdGVJbnRCRSgtMHgxMjM0NTYsIDAsIDMpO1xuICAgIGFzc2VydC5kZWVwRXF1YWwoYnVmLnRvSlNPTigpLmRhdGEsIFsweGVkLCAweGNiLCAweGFhXSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkSW50QkUoMCwgMyksIC0weDEyMzQ1Nik7XG4gICAgYnVmID0gbmV3IEJ1ZmZlcig1KTtcbiAgICBidWYud3JpdGVVSW50TEUoMHgxMjM0NTY3ODkwLCAwLCA1KTtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGJ1Zi50b0pTT04oKS5kYXRhLCBbMHg5MCwgMHg3OCwgMHg1NiwgMHgzNCwgMHgxMl0pO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZFVJbnRMRSgwLCA1KSwgMHgxMjM0NTY3ODkwKTtcbiAgICBidWYgPSBuZXcgQnVmZmVyKDUpO1xuICAgIGJ1Zi53cml0ZVVJbnRCRSgweDEyMzQ1Njc4OTAsIDAsIDUpO1xuICAgIGFzc2VydC5kZWVwRXF1YWwoYnVmLnRvSlNPTigpLmRhdGEsIFsweDEyLCAweDM0LCAweDU2LCAweDc4LCAweDkwXSk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5yZWFkVUludEJFKDAsIDUpLCAweDEyMzQ1Njc4OTApO1xuICAgIGJ1ZiA9IG5ldyBCdWZmZXIoNSk7XG4gICAgYnVmLndyaXRlSW50TEUoMHgxMjM0NTY3ODkwLCAwLCA1KTtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGJ1Zi50b0pTT04oKS5kYXRhLCBbMHg5MCwgMHg3OCwgMHg1NiwgMHgzNCwgMHgxMl0pO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZEludExFKDAsIDUpLCAweDEyMzQ1Njc4OTApO1xuICAgIGJ1ZiA9IG5ldyBCdWZmZXIoNSk7XG4gICAgYnVmLndyaXRlSW50QkUoMHgxMjM0NTY3ODkwLCAwLCA1KTtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGJ1Zi50b0pTT04oKS5kYXRhLCBbMHgxMiwgMHgzNCwgMHg1NiwgMHg3OCwgMHg5MF0pO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZEludEJFKDAsIDUpLCAweDEyMzQ1Njc4OTApO1xuICAgIGJ1ZiA9IG5ldyBCdWZmZXIoNSk7XG4gICAgYnVmLndyaXRlSW50TEUoLTB4MTIzNDU2Nzg5MCwgMCwgNSk7XG4gICAgYXNzZXJ0LmRlZXBFcXVhbChidWYudG9KU09OKCkuZGF0YSwgWzB4NzAsIDB4ODcsIDB4YTksIDB4Y2IsIDB4ZWRdKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmLnJlYWRJbnRMRSgwLCA1KSwgLTB4MTIzNDU2Nzg5MCk7XG4gICAgYnVmID0gbmV3IEJ1ZmZlcig1KTtcbiAgICBidWYud3JpdGVJbnRCRSgtMHgxMjM0NTY3ODkwLCAwLCA1KTtcbiAgICBhc3NlcnQuZGVlcEVxdWFsKGJ1Zi50b0pTT04oKS5kYXRhLCBbMHhlZCwgMHhjYiwgMHhhOSwgMHg4NywgMHg3MF0pO1xuICAgIGFzc2VydC5lcXVhbChidWYucmVhZEludEJFKDAsIDUpLCAtMHgxMjM0NTY3ODkwKTtcbiAgfSkoKTtcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKCcwMTIzNDU2Nzg5Jyk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5zbGljZSgtMTAsIDEwKSwgJzAxMjM0NTY3ODknKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmLnNsaWNlKC0yMCwgMTApLCAnMDEyMzQ1Njc4OScpO1xuICAgIGFzc2VydC5lcXVhbChidWYuc2xpY2UoLTIwLCAtMTApLCAnJyk7XG4gICAgYXNzZXJ0LmVxdWFsKGJ1Zi5zbGljZSgwLCAtMSksICcwMTIzNDU2NzgnKTtcbiAgICBhc3NlcnQuZXF1YWwoYnVmLnNsaWNlKDIsIC0yKSwgJzIzNDU2NycpO1xuICAgIGFzc2VydC5lcXVhbChidWYuc2xpY2UoMCwgNjU1MzYpLCAnMDEyMzQ1Njc4OScpO1xuICAgIGFzc2VydC5lcXVhbChidWYuc2xpY2UoNjU1MzYsIDApLCAnJyk7XG4gICAgZm9yICh2YXIgaSA9IDAsXG4gICAgICAgIHMgPSBidWYudG9TdHJpbmcoKTsgaSA8IGJ1Zi5sZW5ndGg7ICsraSkge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1Zi5zbGljZSgtaSksIHMuc2xpY2UoLWkpKTtcbiAgICAgIGFzc2VydC5lcXVhbChidWYuc2xpY2UoMCwgLWkpLCBzLnNsaWNlKDAsIC1pKSk7XG4gICAgfVxuICAgIFNsb3dCdWZmZXIoMCkuc2xpY2UoMCwgMSk7XG4gIH0pKCk7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgQnVmZmVyKCcnLCAnYnVmZmVyJyk7XG4gIH0sIFR5cGVFcnJvcik7XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IFswXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7ICsraSlcbiAgICAgIGEgPSBhLmNvbmNhdChhKTtcbiAgICBhID0gYS5tYXAoZnVuY3Rpb24oXywgaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gICAgdmFyIGIgPSBCdWZmZXIoYSk7XG4gICAgdmFyIGMgPSBCdWZmZXIoYik7XG4gICAgYXNzZXJ0LmVxdWFsKGIubGVuZ3RoLCBhLmxlbmd0aCk7XG4gICAgYXNzZXJ0LmVxdWFsKGMubGVuZ3RoLCBhLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDAsXG4gICAgICAgIGsgPSBhLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgYXNzZXJ0LmVxdWFsKGFbaV0sIGkpO1xuICAgICAgYXNzZXJ0LmVxdWFsKGJbaV0sIGkpO1xuICAgICAgYXNzZXJ0LmVxdWFsKGNbaV0sIGkpO1xuICAgIH1cbiAgfSkoKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBuZXcgQnVmZmVyKCgtMSA+Pj4gMCkgKyAxKTtcbiAgfSwgUmFuZ2VFcnJvcik7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgbmV3IFNsb3dCdWZmZXIoKC0xID4+PiAwKSArIDEpO1xuICB9LCBSYW5nZUVycm9yKTtcbiAgaWYgKGNvbW1vbi5oYXNDcnlwdG8pIHtcbiAgICB2YXIgYjEgPSBuZXcgQnVmZmVyKCdZVzU1PT09PT09PScsICdiYXNlNjQnKTtcbiAgICB2YXIgYjIgPSBuZXcgQnVmZmVyKCdZVzU1JywgJ2Jhc2U2NCcpO1xuICAgIGFzc2VydC5lcXVhbCgxLCAxKTtcbiAgfSBlbHNlIHt9XG4gIHZhciBiID0gbmV3IEJ1ZmZlcigxKS5maWxsKCdhJyk7XG4gIHZhciBjID0gbmV3IEJ1ZmZlcigxKS5maWxsKCdjJyk7XG4gIHZhciBkID0gbmV3IEJ1ZmZlcigyKS5maWxsKCdhYScpO1xuICBhc3NlcnQuZXF1YWwoYi5jb21wYXJlKGMpLCAtMSk7XG4gIGFzc2VydC5lcXVhbChjLmNvbXBhcmUoZCksIDEpO1xuICBhc3NlcnQuZXF1YWwoZC5jb21wYXJlKGIpLCAxKTtcbiAgYXNzZXJ0LmVxdWFsKGIuY29tcGFyZShkKSwgLTEpO1xuICBhc3NlcnQuZXF1YWwoYi5jb21wYXJlKGIpLCAwKTtcbiAgYXNzZXJ0LmVxdWFsKEJ1ZmZlci5jb21wYXJlKGIsIGMpLCAtMSk7XG4gIGFzc2VydC5lcXVhbChCdWZmZXIuY29tcGFyZShjLCBkKSwgMSk7XG4gIGFzc2VydC5lcXVhbChCdWZmZXIuY29tcGFyZShkLCBiKSwgMSk7XG4gIGFzc2VydC5lcXVhbChCdWZmZXIuY29tcGFyZShiLCBkKSwgLTEpO1xuICBhc3NlcnQuZXF1YWwoQnVmZmVyLmNvbXBhcmUoYywgYyksIDApO1xuICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbmV3IEJ1ZmZlcigxKTtcbiAgICBCdWZmZXIuY29tcGFyZShiLCAnYWJjJyk7XG4gIH0pO1xuICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbmV3IEJ1ZmZlcigxKTtcbiAgICBCdWZmZXIuY29tcGFyZSgnYWJjJywgYik7XG4gIH0pO1xuICBhc3NlcnQudGhyb3dzKGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbmV3IEJ1ZmZlcigxKTtcbiAgICBiLmNvbXBhcmUoJ2FiYycpO1xuICB9KTtcbiAgdmFyIGIgPSBuZXcgQnVmZmVyKDUpLmZpbGwoJ2FiY2RmJyk7XG4gIHZhciBjID0gbmV3IEJ1ZmZlcig1KS5maWxsKCdhYmNkZicpO1xuICB2YXIgZCA9IG5ldyBCdWZmZXIoNSkuZmlsbCgnYWJjZGUnKTtcbiAgdmFyIGUgPSBuZXcgQnVmZmVyKDYpLmZpbGwoJ2FiY2RlZicpO1xuICBhc3NlcnQub2soYi5lcXVhbHMoYykpO1xuICBhc3NlcnQub2soIWMuZXF1YWxzKGQpKTtcbiAgYXNzZXJ0Lm9rKCFkLmVxdWFscyhlKSk7XG4gIGFzc2VydC5vayhkLmVxdWFscyhkKSk7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGIgPSBuZXcgQnVmZmVyKDEpO1xuICAgIGIuZXF1YWxzKCdhYmMnKTtcbiAgfSk7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgQnVmZmVyKDE0MjI1NjEwNjI5NTkpLnRvU3RyaW5nKCd1dGY4Jyk7XG4gIH0pO1xuICB2YXIgcHMgPSBCdWZmZXIucG9vbFNpemU7XG4gIEJ1ZmZlci5wb29sU2l6ZSA9IDA7XG4gIGFzc2VydC5lcXVhbChCdWZmZXIoMSkucGFyZW50LCB1bmRlZmluZWQpO1xuICBCdWZmZXIucG9vbFNpemUgPSBwcztcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBCdWZmZXIoMTApLmNvcHkoKTtcbiAgfSk7XG4gIGFzc2VydC50aHJvd3MoZnVuY3Rpb24oKSB7XG4gICAgbmV3IEJ1ZmZlcigpO1xuICB9LCAvbXVzdCBzdGFydCB3aXRoIG51bWJlciwgYnVmZmVyLCBhcnJheSBvciBzdHJpbmcvKTtcbiAgYXNzZXJ0LnRocm93cyhmdW5jdGlvbigpIHtcbiAgICBuZXcgQnVmZmVyKG51bGwpO1xuICB9LCAvbXVzdCBzdGFydCB3aXRoIG51bWJlciwgYnVmZmVyLCBhcnJheSBvciBzdHJpbmcvKTtcbn0pKHJlcXVpcmUoJ3Byb2Nlc3MnKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
