// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let hq = 42;
  let distance;
  block > hq ? distance = block - hq : distance = hq - block
  return distance
}

function distanceFromHqInFeet(block) {
  let distance = distanceFromHqInBlocks(block) * 264;
  return distance
}

function distanceTravelledInFeet(start, end) {
  let distance
  start > end ? distance = (start - end) * 264 : distance = (end - start) * 264;
  return distance
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let cost;
  switch (true) {
    case distance < 400:
      cost = 0;
      return cost;
      break;
    case distance > 400 && distance < 2000:
      cost = .02 * (distance - 400);
      return cost;
      break;
    case distance > 2000 && distance < 2500:
      cost = 25;
      return cost;
      break;
    case distance > 2500:
      cost = 'cannot travel that far';
      return cost;
  }

}

