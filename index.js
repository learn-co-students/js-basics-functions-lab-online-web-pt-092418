let start
let destination

function calculateDistance (start, destination){
    return Math.abs(start - destination)
  }

function distanceFromHqInBlocks (start){
 return Math.abs(start - 42);
}

function distanceFromHqInFeet (start){
  return distanceFromHqInBlocks (start) * 264;
}

function distanceTravelledInFeet (start, destination){
  return calculateDistance(start, destination) * 264;
}

function calculatesFarePrice (start, destination){
  let trip = distanceTravelledInFeet(start, destination);
  if (trip <= 400) {
    return 0;
  }
  else if (trip < 2000) {
    return ((trip - 400) * 0.02);
  }
  else if (trip > 2000 && trip <= 2500){
    return 25;
  }
  else if (trip > 2500) {
   return 'cannot travel that far';
  }
}
