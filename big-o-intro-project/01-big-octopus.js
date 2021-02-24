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

console.log(quadraticBiggestFish(fishies))

function nlognBiggestFish(fishes) {
  // Code goes here ...
}


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
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
  // Code goes here ...
}
