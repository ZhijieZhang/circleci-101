const math = require('../math.js')
const assert = require('chai').assert;

describe('Math', () => {
  it('should add two numbers correctly', () => {
    assert.equal(math.add(1, 2), 3);
  });
});