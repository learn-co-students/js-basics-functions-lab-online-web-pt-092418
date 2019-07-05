// Code your solution in this file!
function distanceFromHqInBlocks(yourlocation) {
  const mylocation = 42;
  return Math.abs(yourlocation - mylocation);
}

function distanceFromHqInFeet(yourlocation) {
  return distanceFromHqInBlocks(yourlocation) * 264;
}

function distanceTravelledInFeet(yourlocation, mylocation) {
  return Math.abs((yourlocation - mylocation)* 264)
}

function calculatesFarePrice(start, destination) {
  const feetTraveled = distanceTravelledInFeet(start, destination);

  if (feetTraveled <= 400) {
    return 0;
  } else if (feetTraveled > 2500) {
    return 'cannot travel that far';
  } else if (feetTraveled > 400 && feetTraveled <= 2000) {
    return .02 * (feetTraveled - 400);
  } else {
    return 25;
  }
}