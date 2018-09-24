function produceDrivingRange(blockRange){
  return (rideDistance) => {
    let difference = blockRange - rideDistance;
    let result = difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`
    debugger
  }

}
