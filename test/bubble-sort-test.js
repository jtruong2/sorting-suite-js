const assert = require('chai').assert;
const bubbleSort = require('../lib/bubble-sort')

describe('bubbleSort', function(){
  it('sorts numbers', function(){
    var numbers = [3,1,5,2,7];
    assert(bubbleSort(numbers), [1,2,3,5,7]);
  });
});
