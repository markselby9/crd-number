/**
 * Created by fengchaoyi on 15/11/5.
 */
var main = require('../crd.js');
var should = require('should');

describe('test/test.js', function () {
    it('should equal for a positive number', function () {
        main.Digit2SimplifiedChinese(1233332345).should.equal("一十二亿三千三百三十三万二千三百四十五");
    });
    it('should equal for a negative number', function () {
        main.Digit2SimplifiedChinese(-33546).should.equal("负三万三千五百四十六");
    });
});