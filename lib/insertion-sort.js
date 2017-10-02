var pry = require('pryjs');

function insertionSort(arr) {
  var sortedArr = [];
  sortedArr.push(arr[0])
  for(var i = 1; i < arr.length; i++) {
    var sortedArrCount = 0;
    while(sortedArrCount < sortedArr.length) {
      if(arr[i] <= sortedArr[sortedArrCount]) {
        sortedArr.splice(sortedArrCount, 0, arr[i]);
        break;
      } else if(sortedArrCount == sortedArr.length - 1) {
        sortedArr.splice(sortedArrCount + 1, 0, arr[i]);
        break;
      }
      sortedArrCount ++;
    };
  };
  return sortedArr;
};
module.exports = insertionSort
