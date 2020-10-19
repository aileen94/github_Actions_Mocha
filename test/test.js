let convert = require('../app.js')
let assert = require('assert');
var should = require('mocha-should')

describe('Temperature Conversion', function() {
  describe('multiply', function() {
    it('should return 40', function() {
        assert.equal(40, convert.multiply(20,2));
    });
    it('should return 100', function() {
       assert.equal(100, convert.multiply(25,4));
    });
    it('should return undefined if no temperature is input', function() {
      assert.equal(undefined, convert.multiply('a'));
    });
  });
  describe('add', function() {
    it('should return 60', function() {
      assert.equal(60, convert.add(20,2,16,4));
    });
    it('should return 110', function() {
       assert.equal(110, convert.add(25,4,8,2));
    });
    it('should return undefined if no temperature is input', function() {
      assert.equal(undefined, convert.add('a'));
    });
  });
});
