function badTwoSum(arr, targetSum) {

  for (let i = 0; i < arr.length; i++) {
    let twoSum = arr[i] + arr[i + 1];
    if (twoSum === targetSum) {
      return true;
    }
  }
  return false;
}
console.log(badTwoSum([4, 2, 3, 1], 7));

function okayTwoSum1(arr, targetSum) {
  arr = arr.sort();
  let midIdx = Math.floor(arr.length / 2);
  if (arr[midIdx])
  //let pivot = targetSum;
  let left = array
}

okayTwoSum1([4, 3, 1, 2], 7);

function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
