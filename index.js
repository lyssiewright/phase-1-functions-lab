// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const difference = Math.abs(42 - someValue);
    return difference;
}

function distanceFromHqInFeet(someValue){
    const feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;
    
}

function distanceTravelledInFeet(start, destination){
    const distance = Math.abs((start - destination) * 264);
    return distance;
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
   }
    else if (400 < distanceTravelledInFeet(start,destination) && distanceTravelledInFeet(start,destination) < 2000){
        const fare = (distanceTravelledInFeet(start, destination) - 400) * .02;
        return fare;
    }
    else if (distanceTravelledInFeet(start,destination) > 2500){
        return 'cannot travel that far';
    }
    else if (2000 < distanceTravelledInFeet(start, destination) && distanceTravelledInFeet(start, destination) < 2500){
        return 25;
   }
}