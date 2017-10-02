const assert = require('chai').assert;
const insertionSort = require('../lib/insertion-sort');

describe('insertion sort', function() {
  it('sorts numbers in array', function() {
    var numbers = [3,1,5,2];

    assert(insertionSort(numbers), [1,2,3,5]);
  })
})
