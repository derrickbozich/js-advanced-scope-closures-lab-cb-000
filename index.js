function produceDrivingRange(blockRange){
  return (rideDistance) => {
    let difference = blockRange - rideDistance;
    return difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`
  }

}
