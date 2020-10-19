let convert = require('../app.js')
let assert = require('assert');
var should = require('mocha-should')
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
var result=40
describe('Temperature Conversion', function() {

   it('should return 40', function() {
          assert.equal(42, result);
      });
});

describe('mock function', function () {
    it('check stub persist', async () => {
       expect('Hello').to.equal( app.dummy2() );
       var stub = sinon.stub(putLoanToRazorSharkLambda, 'dummy2');
       stub.returns('Hello2');
       expect('Hello2').to.equal( putLoanToRazorSharkLambda.dummy2() );
       stub.restore();
    });
})
