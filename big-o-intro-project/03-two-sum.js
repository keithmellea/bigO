function badTwoSum(arr, targetSum) {

  for (let i = 0; i < arr.length; i++) {
    let twoSum = arr[i] + arr[i + 1];
    if (twoSum === targetSum) {
      return true;
    }
  }
  return false;
}
console.log(badTwoSum([1, 2, 3, 4], 7));

function okayTwoSum1(arr, targetSum) {
  // Code goes here ...
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
