var pry = require('pryjs');

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(arr[j - 1] > arr[j]){
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
module.exports = bubbleSort;
