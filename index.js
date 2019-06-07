function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
 return 42 - distance; }
}

function distanceFromHqInFeet(feet) {
return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end) {
  let distance;
 if ( end > start) {
   distance = end - start;
 } else {
   distance = start - end;
 }
 return distance * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let cost;
  if (distance <= 400) {
    cost = 0;
  } else if (distance > 400 && distance <= 2000) {
     cost = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    cost = 25;
  } else {
    cost = 'cannot travel that far';
  }
  return cost;
}
