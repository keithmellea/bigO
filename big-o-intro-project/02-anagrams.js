function firstAnagram(str1, str2) {

  let array2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    let chr = str1[i];
    let idx = array2.indexOf(chr);
    array2.splice(idx, 1);
  }
  if (array2.length === 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(firstAnagram("gizmo", "sally"));

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
