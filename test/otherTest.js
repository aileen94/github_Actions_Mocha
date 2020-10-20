let convert = require('../app.js')
let assert = require('assert');
const app = require('../app.js');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const expect = chai.expect;
var result=40
describe('Temperature Conversion', function() {

   it('should return 40', function() {
          assert.equal(40, result);
      });

   it('check stub persist', async () => {
       expect('Hello').to.equal( app.dummy2() );
       var stub = sinon.stub(app, 'dummy2');
       stub.returns('Hello2');
       expect('Hello2').to.equal( app.dummy2() );
       stub.restore();
    });
});
