function firstAnagram(str1, str2) {

  let array2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {

    let chr = str1[i];
    let idx = array2.indexOf(chr);

    if (idx >= 0) {
      array2.splice(idx, 1);
    }

  }
  if (array2.length === 0) {
    return true;
  } else {
    return false;
  }
}



function secondAnagram(str1, str2) {
  let sort1 = str1.split('').sort();
  let sort2 = str2.split('').sort();

  if (sort1.join('') === sort2.join('')) {
    return true;
  }
  return false;
}




function thirdAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
debugger
  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    debugger
    if (obj1[char1] !== undefined) {
      debugger
     obj1[char1]++;
    }
    else {
      debugger
      obj1[char1] = 1;
    }
    debugger
    if (obj2[char2] !== undefined) {
      debugger
      obj2[char2]++;
    } else {
      debugger
      obj2[char2] = 1;
    }
    debugger
   
  }
  let obj1Keys = Object.keys(obj1).sort();
  let obj2Keys = Object.keys(obj2).sort();

  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj1Keys[i] !== obj2Keys[i]) {
      return false;
    }
  }
  console.log('obj1:', obj1Keys)
  console.log("obj2:", obj2Keys);

return true;
}

console.log(thirdAnagram("gizmo", "sally"));
console.log(thirdAnagram("elvis", "lives"));

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
