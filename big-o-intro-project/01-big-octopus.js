const fishies = [
  "fish",
  "fiiish",
  "fiiiiish",
  "fiiiish",
  "fffish",
  "ffiiiiisshh",
  "fsh",
  "fiiiissshhhhhh",
];

function quadraticBiggestFish(fishes) {

  let longestFish = '';

  for (let i = 0; i < fishes.length; i++) {
    let fishI = fishes[i];

    for (let j = 1; j < fishes.length; j++) {
      let fishJ = fishes[j];

      if (fishJ.length > fishI.length && fishJ.length > longestFish.length) {
        longestFish = fishJ;
      }
      else if (fishI.length > fishJ.length && fishI.length > longestFish.length) {
        longestFish = fishI;
      }
      else {
        longestFish = longestFish;
      }
    }
  }
  return longestFish
}





function nlognBiggestFish(fishes) {
  let sortedFishes = fishes.sort((a, b) => a.length - b.length);
  // console.log(sortedFishes);
  return sortedFishes[sortedFishes.length - 1];
}




function linearBiggestFish(fishes) {
  let longestFish = '';

  for (let i = 0; i < fishes.length; i++) {
    if (fishes[i].length > longestFish.length) {
      longestFish = fishes[i];
    }
  }
  return longestFish;
}

console.log(linearBiggestFish(fishies));


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {

  for (let i = 0; i < tilesArray.length; i++) {
    if (direction === tilesArray[i]) {
      return i;
    }
  }
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}


function fastDance(direction, tilesObj) {
  if (direction in tilesObj) return tilesObj[direction];
}
console.log(fastDance("right-up", tilesObj));

