// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber <= 42) {
    return 42 - streetNumber;
  } else {
    return streetNumber - 42;
  }
} // end of function

function distanceFromHqInFeet (streetNumber) {
  blockDistance = distanceFromHqInBlocks(streetNumber)
  return blockDistance * 264;
} // end of function

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
      return (start - destination) * 264;
  } else {
      return (destination - start) * 264;
  }
} //end of function

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  }
  else if (distance < 2000) {
    return (distance -400) * 2 /100;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
} //end of function
