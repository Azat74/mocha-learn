const {assert} = require('chai');
const {sum2Smaller} = require('../src/sum2Smaller');

describe('check-sum2Smaller', function () {
  it('assert be a number', function () {
    assert.typeOf(sum2Smaller(), 'number');
    assert.typeOf(sum2Smaller([]), 'number');
    assert.typeOf(sum2Smaller([1]), 'number');
    assert.typeOf(sum2Smaller([2,5]), 'number');
    assert.typeOf(sum2Smaller([3, 'w', 's']), 'number');
  });
});